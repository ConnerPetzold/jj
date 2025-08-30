import{j as e}from"./main-BCYT0j2h.js";let s={title:"Introducing JJ run"},r=[{href:"mailto:philipmetzger@bluewin.ch"},{href:"mailto:martinvonz@google.com"},{href:"mailto:hooper@google.com"},{href:"mailto:me@waleedkhan.name"},{href:"https://docs.google.com/document/d/14BiAoEEy_e-BRPHYpXRFjvHMfgYVKh-pKWzzTDi-v-g/edit"},{href:"#use-cases-of-jj-run"},{href:"#dealing-with-failure"}],a={contents:[{heading:void 0,content:"Authors: Philip Metzger, Martin von Zweigberk, Danny Hooper, Waleed Khan"},{heading:void 0,content:"Initial Version, 10.12.2022 (view full history here)"},{heading:void 0,content:`Summary: This Document documents the design of a new run command for
Jujutsu which will be used to seamlessly integrate with build systems, linters
and formatters. This is achieved by running a user-provided command or script
across multiple revisions. For more details, read the
Use-Cases of jj run.`},{heading:"preface",content:`The goal of this Design Document is to specify the correct behavior of jj run.
The points we decide on here I (Philip Metzger) will try to implement. There
exists some prior work in other DVCS:`},{heading:"preface",content:"git test: part of git-branchless. Similar to this proposal for jj run."},{heading:"preface",content:`hg run: Google's internal Mercurial extension. Similar to this proposal for
jj run.
Details not available.`},{heading:"preface",content:`hg fix: Google's open source Mercurial extension: source code. A
more specialized approach to rewriting file content without full context of the
working directory.`},{heading:"preface",content:"git rebase -x: runs commands opportunistically as part of rebase."},{heading:"preface",content:"git bisect run: run a command to determine which commit introduced a bug."},{heading:"context-and-scope",content:`The initial need for some kind of command runner integrated in the VCS, surfaced
in a github discussion. In a discussion on discord about
the git-hook model, there was consensus about not repeating their mistakes.`},{heading:"context-and-scope",content:`For jj run there is prior art in Mercurial, git branchless and Google's
internal Mercurial. Currently git-branchless git test and hg fix implement
some kind of command runner. The Google internal hg run works in conjunction
with CitC (Clients in the Cloud) which allows it to lazily apply the current
command to any affected file. Currently no open-source Jujutsu backend (Git,
Simple) has a fancy virtual filesystem supporting it, so we can't apply this
optimization. We could do the same once we have an implementation of the working
copy based on a virtual file system. Until then, we have to run the commands in
regular local-disk working copies.`},{heading:"goals",content:"We should be able to apply the command to any revision, published or unpublished."},{heading:"goals",content:`We should be able to parallelize running the actual command, while preserving a
good console output.`},{heading:"goals",content:`The run command should be able to work in any commit, the working-copy commit
itself or any other commit.`},{heading:"goals",content:"There should exist some way to signal hard failure."},{heading:"goals",content:`The command should build enough infrastructure for jj test, jj fix and
jj format.`},{heading:"goals",content:`The main goal is to be good enough, as we can always expand the functionality
in the future.`},{heading:"non-goals",content:`While we should build a base for jj test, jj format and jj fix, we
shouldn't mash their use-cases into jj run.`},{heading:"non-goals",content:`The command shouldn't be too smart, as too many assumptions about workflows
makes the command confusing for users.`},{heading:"non-goals",content:`The smart caching of outputs, as user input commands can be unpredictable.
makes the command confusing for users.`},{heading:"non-goals",content:`Avoid the smart caching of outputs, as user input commands can be
unpredictable.`},{heading:"non-goals",content:"Fine grained user facing configuration, as it's unwarranted complexity."},{heading:"non-goals",content:"A fix subcommand as it cuts too much design space."},{heading:"use-cases-of-jj-run",content:"Linting and Formatting:"},{heading:"use-cases-of-jj-run",content:"jj run 'pre-commit run' -r $revset"},{heading:"use-cases-of-jj-run",content:"jj run 'cargo clippy' -r $revset"},{heading:"use-cases-of-jj-run",content:"jj run 'cargo +nightly fmt'"},{heading:"use-cases-of-jj-run",content:"Large scale changes across repositories, local and remote:"},{heading:"use-cases-of-jj-run",content:`jj run 'sed /some/test/' -r 'mine() & ~remote_bookmarks(exact:"origin")'`},{heading:"use-cases-of-jj-run",content:"jj run '$rewrite-tool' -r '$revset'"},{heading:"use-cases-of-jj-run",content:"Build systems:"},{heading:"use-cases-of-jj-run",content:"jj run 'bazel build //some/target:somewhere'"},{heading:"use-cases-of-jj-run",content:"jj run 'ninja check-lld'"},{heading:"use-cases-of-jj-run",content:`Some of these use-cases should get a specialized command, as this allows
further optimization. A command could be jj format, which runs a list of
formatters over a subset of a file in a revision. Another command could be
jj fix, which runs a command like rustfmt --fix or cargo clippy --fix over
a subset of a file in a revision.`},{heading:"base-design",content:`All the work will be done in the .jj/ directory. This allows us to hide all
complexity from the users, while preserving the user's current workspace.`},{heading:"base-design",content:`We will copy the approach from git-branchless's git test of creating a
temporary working copy for each parallel command. The working copies will be
reused between jj run invocations. They will also be reused within jj run
invocation if there are more commits to run on than there are parallel jobs.`},{heading:"base-design",content:`We will leave ignored files in the temporary directory between runs. That
enables incremental builds (e.g. by letting cargo reuse its target/
directory). However, it also means that runs potentially become less
reproducible. We will provide a flag for removing ignored files from the
temporary working copies to address that.`},{heading:"base-design",content:`Another problem with leaving ignored files in the temporary directories is that
they take up space. That is especially problematic in the case of cargo (the
target/ directory often takes up tens of GBs). The same flag for cleaning up
ignored files can be used to address that. We may want to also have a flag for
cleaning up temporary working copies after running the command.`},{heading:"base-design",content:`An early version of the command will directly use Treestate to
to manage the temporary working copies. That means that running jj inside the
temporary working copies will not work . We can later extend that to use a full
Workspace. To prevent operations in the working copies from
impacting the repo, we can use a separate OpHeadsStore for it.`},{heading:"modifying-the-working-copy",content:`Since the subprocesses will run in temporary working copies, they
won't interfere with the user's working copy. The user can therefore continue
to work in it while jj run is running.`},{heading:"modifying-the-working-copy",content:`We want subprocesses to be able to make changes to the repo by updating their
assigned working copy. Let's say the user runs jj run on just commits A and
B, where B's parent is A. Any changes made on top of A would be squashed into
A, forming A'. Similarly B' would be formed by squasing it into B. We can then
either do a normal rebase of B' onto A', or we can simply update its parent to
A'. The former is useful, e.g. when the subprocess only makes a partial update
of the tree based on the parent commit. In addition to these two modes, we may
want to have an option to ignore any changes made in the subprocess's working
copy.`},{heading:"modifying-the-repo",content:`Once we give the subprocess access to a fork of the repo via separate
OpHeadsStore, it will be able to create new operations in its fork.
If the user runs jj run -r foo and the subprocess checks out another commit,
it's not clear what that should do. We should probably just verify that the
working-copy commit's parents are unchanged after the subprocess returns. Any
operations created by the subprocess will be ignored.`},{heading:"rewriting-the-revisions",content:`Like all commands, jj run will refuse to rewrite public/immutable commits.
For private/unpublished revisions, we either amend or reparent the changes,
which are available as command options.`},{heading:"execution-orderparallelism",content:`It may be useful to execute commands in topological order. For example,
commands with costs proportional to incremental changes, like build systems.
There may also be other relevant heuristics, but topological order is an easy
and effective way to start.`},{heading:"execution-orderparallelism",content:`Parallel execution of commands on different commits may choose to schedule
commits to still reduce incremental changes in the working copy used by each
execution slot/"thread". However, running the command on all commits
concurrently should be possible if desired.`},{heading:"execution-orderparallelism",content:`Executing commands in topological order allows for more meaningful use of any
potential features that stop execution "at the first failure". For example,
when running tests on a chain of commits, it might be useful to proceed in
topological/chronological order, and stop on the first failure, because it
might imply that the remaining executions will be undesirable because they will
also fail.`},{heading:"dealing-with-failure",content:`It will be useful to have multiple strategies to deal with failures on a single
or multiple revisions. The reason for these strategies is to allow customized
conflict handling. These strategies then can be exposed in the ui with a
matching option.`},{heading:"dealing-with-failure",content:`Continue: If any subprocess fails, we will continue the work on child
revisions. Notify the user on exit about the failed revisions.`},{heading:"dealing-with-failure",content:`Stop: Signal a fatal failure and cancel any scheduled work that has not
yet started running, but let any already started subprocess finish. Notify the
user about the failed command and display the generated error from the
subprocess.`},{heading:"dealing-with-failure",content:`Fatal: Signal a fatal failure and immediately stop processing and kill any
running processes. Notify the user that we failed to apply the command to the
specific revision.`},{heading:"dealing-with-failure",content:`We will leave any affected commit in its current state, if any subprocess fails.
This allows us to provide a better user experience, as leaving revisions in an
undesirable state, e.g partially formatted, may confuse users.`},{heading:"resource-constraints",content:`It will be useful to constrain the execution to prevent resource exhaustion.
Relevant resources could include:`},{heading:"resource-constraints",content:`CPU and memory available on the machine running the commands. jj run can
provide some simple mitigations like limiting parallelism to "number of CPUs"
by default, and limiting parallelism by dividing "available memory" by some
estimate or measurement of per-invocation memory use of the commands.`},{heading:"resource-constraints",content:`External resources that are not immediately known to jj. For example,
commands run in parallel may wish to limit the total number of connections
to a server. We might choose to defer any handling of this to the
implementation of the command being invoked, instead of trying to
communicate that information to jj.`},{heading:"command-options",content:`The base command of any jj command should be usable. By default jj run works
on the @ the current working copy.`},{heading:"command-options",content:"--command, explicit name of the first argument"},{heading:"command-options",content:"-x, for git compatibility (may alias another command)"},{heading:"command-options",content:"-j, --jobs, the amount of parallelism to use"},{heading:"command-options",content:"-k, --keep-going, continue on failure (may alias another command)"},{heading:"command-options",content:"--show, display the diff for an affected revision"},{heading:"command-options",content:`--dry-run, do the command execution without doing any work, logging all
intended files and arguments`},{heading:"command-options",content:`--rebase, rebase all parents on the consulitng diff (may alias another
command)`},{heading:"command-options",content:`--reparent, change the parent of an effected revision to the new change
(may alias another command)`},{heading:"command-options",content:"--clean, remove existing workspaces and remove the ignored files"},{heading:"command-options",content:"--readonly, ignore changes across multiple run invocations"},{heading:"command-options",content:"--error-strategy=continue|stop|fatal, see Dealing with failure"},{heading:"integrating-with-other-commands",content:`jj log: No special handling needed
jj diff: No special handling needed
jj st: For now reprint the final output of jj run
jj op log: No special handling needed, but awaits further discussion in
#963
jj undo/jj op revert: No special handling needed`},{heading:"open-points",content:`Should the command be working copy backend specific?
How do we manage the Processes which the command will spawn?
Configuration options, User and Repository Wide?`},{heading:"future-possibilities",content:"We could rewrite the file in memory, which is a neat optimization"},{heading:"future-possibilities",content:"Exposing some internal state, to allow preciser resource constraints"},{heading:"future-possibilities",content:`Integration options for virtual filesystems, which allow them to cache the
needed working copies.`},{heading:"future-possibilities",content:`A Jujutsu wide concept for a cached working copy, as they could be expensive
to materialize.`},{heading:"future-possibilities",content:`Customized failure messages, this maybe useful for bots, it could be similar
to Bazel's select(..., message = "arch not supported for $project").`},{heading:"future-possibilities",content:`Make jj run asynchronous by spawning a main process, directly return to the
user and incrementally updating the output of jj st.`}],headings:[{id:"preface",content:"Preface"},{id:"context-and-scope",content:"Context and Scope"},{id:"goals-and-non-goals",content:"Goals and Non-Goals"},{id:"goals",content:"Goals"},{id:"non-goals",content:"Non-Goals"},{id:"use-cases-of-jj-run",content:"Use-Cases of jj run"},{id:"design",content:"Design"},{id:"base-design",content:"Base Design"},{id:"modifying-the-working-copy",content:"Modifying the Working Copy"},{id:"modifying-the-repo",content:"Modifying the Repo"},{id:"rewriting-the-revisions",content:"Rewriting the revisions"},{id:"execution-orderparallelism",content:"Execution order/parallelism"},{id:"dealing-with-failure",content:"Dealing with failure"},{id:"resource-constraints",content:"Resource constraints"},{id:"command-options",content:"Command Options"},{id:"integrating-with-other-commands",content:"Integrating with other commands"},{id:"open-points",content:"Open Points"},{id:"future-possibilities",content:"Future possibilities"}]};const l=[{depth:2,url:"#preface",title:e.jsx(e.Fragment,{children:"Preface"})},{depth:2,url:"#context-and-scope",title:e.jsx(e.Fragment,{children:"Context and Scope"})},{depth:2,url:"#goals-and-non-goals",title:e.jsx(e.Fragment,{children:"Goals and Non-Goals"})},{depth:3,url:"#goals",title:e.jsx(e.Fragment,{children:"Goals"})},{depth:3,url:"#non-goals",title:e.jsx(e.Fragment,{children:"Non-Goals"})},{depth:2,url:"#use-cases-of-jj-run",title:e.jsx(e.Fragment,{children:"Use-Cases of jj run"})},{depth:2,url:"#design",title:e.jsx(e.Fragment,{children:"Design"})},{depth:3,url:"#base-design",title:e.jsx(e.Fragment,{children:"Base Design"})},{depth:3,url:"#modifying-the-working-copy",title:e.jsx(e.Fragment,{children:"Modifying the Working Copy"})},{depth:3,url:"#modifying-the-repo",title:e.jsx(e.Fragment,{children:"Modifying the Repo"})},{depth:3,url:"#rewriting-the-revisions",title:e.jsx(e.Fragment,{children:"Rewriting the revisions"})},{depth:2,url:"#execution-orderparallelism",title:e.jsx(e.Fragment,{children:"Execution order/parallelism"})},{depth:2,url:"#dealing-with-failure",title:e.jsx(e.Fragment,{children:"Dealing with failure"})},{depth:2,url:"#resource-constraints",title:e.jsx(e.Fragment,{children:"Resource constraints"})},{depth:2,url:"#command-options",title:e.jsx(e.Fragment,{children:"Command Options"})},{depth:3,url:"#integrating-with-other-commands",title:e.jsx(e.Fragment,{children:"Integrating with other commands"})},{depth:2,url:"#open-points",title:e.jsx(e.Fragment,{children:"Open Points"})},{depth:2,url:"#future-possibilities",title:e.jsx(e.Fragment,{children:"Future possibilities"})}];function o(i){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["Authors: ",e.jsx(n.a,{href:"mailto:philipmetzger@bluewin.ch",children:"Philip Metzger"}),", ",e.jsx(n.a,{href:"mailto:martinvonz@google.com",children:"Martin von Zweigberk"}),", ",e.jsx(n.a,{href:"mailto:hooper@google.com",children:"Danny Hooper"}),", ",e.jsx(n.a,{href:"mailto:me@waleedkhan.name",children:"Waleed Khan"})]}),`
`,e.jsxs(n.p,{children:["Initial Version, 10.12.2022 (view full history ",e.jsx(n.a,{href:"https://docs.google.com/document/d/14BiAoEEy_e-BRPHYpXRFjvHMfgYVKh-pKWzzTDi-v-g/edit",children:"here"}),")"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Summary:"})," This Document documents the design of a new ",e.jsx(n.code,{children:"run"}),` command for
Jujutsu which will be used to seamlessly integrate with build systems, linters
and formatters. This is achieved by running a user-provided command or script
across multiple revisions. For more details, read the
`,e.jsx(n.a,{href:"#use-cases-of-jj-run",children:"Use-Cases of jj run"}),"."]}),`
`,e.jsx(n.h2,{id:"preface",children:"Preface"}),`
`,e.jsxs(n.p,{children:["The goal of this Design Document is to specify the correct behavior of ",e.jsx(n.code,{children:"jj run"}),`.
The points we decide on here I (Philip Metzger) will try to implement. There
exists some prior work in other DVCS:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"git test"}),": part of ",e.jsx(n.a,{href:"https://github.com/arxanas/git-branchless",children:"git-branchless"}),". Similar to this proposal for ",e.jsx(n.code,{children:"jj run"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hg run"}),`: Google's internal Mercurial extension. Similar to this proposal for
`,e.jsx(n.code,{children:"jj run"}),`.
Details not available.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hg fix"}),": Google's open source Mercurial extension: ",e.jsx(n.a,{href:"https://repo.mercurial-scm.org/hg/file/tip/hgext/fix.py",children:"source code"}),`. A
more specialized approach to rewriting file content without full context of the
working directory.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"git rebase -x"}),": runs commands opportunistically as part of rebase."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"git bisect run"}),": run a command to determine which commit introduced a bug."]}),`
`]}),`
`,e.jsx(n.h2,{id:"context-and-scope",children:"Context and Scope"}),`
`,e.jsxs(n.p,{children:[`The initial need for some kind of command runner integrated in the VCS, surfaced
in a `,e.jsx(n.a,{href:"https://github.com/jj-vcs/jj/issues/405",children:"github discussion"}),". In a ",e.jsx(n.a,{href:"https://discord.com/channels/968932220549103686/969829516539228222/1047958933161119795",children:"discussion on discord"}),` about
the git-hook model, there was consensus about not repeating their mistakes.`]}),`
`,e.jsxs(n.p,{children:["For ",e.jsx(n.code,{children:"jj run"}),` there is prior art in Mercurial, git branchless and Google's
internal Mercurial. Currently git-branchless `,e.jsx(n.code,{children:"git test"})," and ",e.jsx(n.code,{children:"hg fix"}),` implement
some kind of command runner. The Google internal `,e.jsx(n.code,{children:"hg run"}),` works in conjunction
with CitC (Clients in the Cloud) which allows it to lazily apply the current
command to any affected file. Currently no open-source Jujutsu backend (Git,
Simple) has a fancy virtual filesystem supporting it, so we can't apply this
optimization. We could do the same once we have an implementation of the working
copy based on a virtual file system. Until then, we have to run the commands in
regular local-disk working copies.`]}),`
`,e.jsx(n.h2,{id:"goals-and-non-goals",children:"Goals and Non-Goals"}),`
`,e.jsx(n.h3,{id:"goals",children:"Goals"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"We should be able to apply the command to any revision, published or unpublished."}),`
`,e.jsx(n.li,{children:`We should be able to parallelize running the actual command, while preserving a
good console output.`}),`
`,e.jsx(n.li,{children:`The run command should be able to work in any commit, the working-copy commit
itself or any other commit.`}),`
`,e.jsx(n.li,{children:"There should exist some way to signal hard failure."}),`
`,e.jsxs(n.li,{children:["The command should build enough infrastructure for ",e.jsx(n.code,{children:"jj test"}),", ",e.jsx(n.code,{children:"jj fix"}),` and
`,e.jsx(n.code,{children:"jj format"}),"."]}),`
`,e.jsx(n.li,{children:`The main goal is to be good enough, as we can always expand the functionality
in the future.`}),`
`]}),`
`,e.jsx(n.h3,{id:"non-goals",children:"Non-Goals"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["While we should build a base for ",e.jsx(n.code,{children:"jj test"}),", ",e.jsx(n.code,{children:"jj format"})," and ",e.jsx(n.code,{children:"jj fix"}),`, we
shouldn't mash their use-cases into `,e.jsx(n.code,{children:"jj run"}),"."]}),`
`,e.jsx(n.li,{children:`The command shouldn't be too smart, as too many assumptions about workflows
makes the command confusing for users.`}),`
`,e.jsx(n.li,{children:`The smart caching of outputs, as user input commands can be unpredictable.
makes the command confusing for users.`}),`
`,e.jsx(n.li,{children:`Avoid the smart caching of outputs, as user input commands can be
unpredictable.`}),`
`,e.jsx(n.li,{children:"Fine grained user facing configuration, as it's unwarranted complexity."}),`
`,e.jsxs(n.li,{children:["A ",e.jsx(n.code,{children:"fix"})," subcommand as it cuts too much design space."]}),`
`]}),`
`,e.jsx(n.h2,{id:"use-cases-of-jj-run",children:"Use-Cases of jj run"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Linting and Formatting:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"jj run 'pre-commit run' -r $revset"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"jj run 'cargo clippy' -r $revset"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"jj run 'cargo +nightly fmt'"})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Large scale changes across repositories, local and remote:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:`jj run 'sed /some/test/' -r 'mine() & ~remote_bookmarks(exact:"origin")'`})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"jj run '$rewrite-tool' -r '$revset'"})}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Build systems:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"jj run 'bazel build //some/target:somewhere'"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"jj run 'ninja check-lld'"})}),`
`]}),`
`,e.jsxs(n.p,{children:[`Some of these use-cases should get a specialized command, as this allows
further optimization. A command could be `,e.jsx(n.code,{children:"jj format"}),`, which runs a list of
formatters over a subset of a file in a revision. Another command could be
`,e.jsx(n.code,{children:"jj fix"}),", which runs a command like ",e.jsx(n.code,{children:"rustfmt --fix"})," or ",e.jsx(n.code,{children:"cargo clippy --fix"}),` over
a subset of a file in a revision.`]}),`
`,e.jsx(n.h2,{id:"design",children:"Design"}),`
`,e.jsx(n.h3,{id:"base-design",children:"Base Design"}),`
`,e.jsxs(n.p,{children:["All the work will be done in the ",e.jsx(n.code,{children:".jj/"}),` directory. This allows us to hide all
complexity from the users, while preserving the user's current workspace.`]}),`
`,e.jsxs(n.p,{children:["We will copy the approach from git-branchless's ",e.jsx(n.code,{children:"git test"}),` of creating a
temporary working copy for each parallel command. The working copies will be
reused between `,e.jsx(n.code,{children:"jj run"})," invocations. They will also be reused within ",e.jsx(n.code,{children:"jj run"}),`
invocation if there are more commits to run on than there are parallel jobs.`]}),`
`,e.jsxs(n.p,{children:[`We will leave ignored files in the temporary directory between runs. That
enables incremental builds (e.g. by letting cargo reuse its `,e.jsx(n.code,{children:"target/"}),`
directory). However, it also means that runs potentially become less
reproducible. We will provide a flag for removing ignored files from the
temporary working copies to address that.`]}),`
`,e.jsxs(n.p,{children:[`Another problem with leaving ignored files in the temporary directories is that
they take up space. That is especially problematic in the case of cargo (the
`,e.jsx(n.code,{children:"target/"}),` directory often takes up tens of GBs). The same flag for cleaning up
ignored files can be used to address that. We may want to also have a flag for
cleaning up temporary working copies `,e.jsx(n.em,{children:"after"})," running the command."]}),`
`,e.jsxs(n.p,{children:["An early version of the command will directly use ",e.jsx(n.a,{href:"https://github.com/jj-vcs/jj/blob/af85f552b676d66ed0e9ae0d401cd0c4ffbbeb21/lib/src/working_copy.rs#L117",children:"Treestate"}),` to
to manage the temporary working copies. That means that running `,e.jsx(n.code,{children:"jj"}),` inside the
temporary working copies will not work . We can later extend that to use a full
`,e.jsx(n.a,{href:"https://github.com/jj-vcs/jj/blob/af85f552b676d66ed0e9ae0d401cd0c4ffbbeb21/lib/src/workspace.rs#L54",children:"Workspace"}),`. To prevent operations in the working copies from
impacting the repo, we can use a separate `,e.jsx(n.a,{href:"https://github.com/jj-vcs/jj/blob/main/lib/src/op_heads_store.rs",children:"OpHeadsStore"})," for it."]}),`
`,e.jsx(n.h3,{id:"modifying-the-working-copy",children:"Modifying the Working Copy"}),`
`,e.jsxs(n.p,{children:[`Since the subprocesses will run in temporary working copies, they
won't interfere with the user's working copy. The user can therefore continue
to work in it while `,e.jsx(n.code,{children:"jj run"})," is running."]}),`
`,e.jsxs(n.p,{children:[`We want subprocesses to be able to make changes to the repo by updating their
assigned working copy. Let's say the user runs `,e.jsx(n.code,{children:"jj run"}),` on just commits A and
B, where B's parent is A. Any changes made on top of A would be squashed into
A, forming A'. Similarly B' would be formed by squasing it into B. We can then
either do a normal rebase of B' onto A', or we can simply update its parent to
A'. The former is useful, e.g. when the subprocess only makes a partial update
of the tree based on the parent commit. In addition to these two modes, we may
want to have an option to ignore any changes made in the subprocess's working
copy.`]}),`
`,e.jsx(n.h3,{id:"modifying-the-repo",children:"Modifying the Repo"}),`
`,e.jsxs(n.p,{children:[`Once we give the subprocess access to a fork of the repo via separate
`,e.jsx(n.a,{href:"https://github.com/jj-vcs/jj/blob/main/lib/src/op_heads_store.rs",children:"OpHeadsStore"}),`, it will be able to create new operations in its fork.
If the user runs `,e.jsx(n.code,{children:"jj run -r foo"}),` and the subprocess checks out another commit,
it's not clear what that should do. We should probably just verify that the
working-copy commit's parents are unchanged after the subprocess returns. Any
operations created by the subprocess will be ignored.`]}),`
`,e.jsx(n.h3,{id:"rewriting-the-revisions",children:"Rewriting the revisions"}),`
`,e.jsxs(n.p,{children:["Like all commands, ",e.jsx(n.code,{children:"jj run"}),` will refuse to rewrite public/immutable commits.
For private/unpublished revisions, we either amend or reparent the changes,
which are available as command options.`]}),`
`,e.jsx(n.h2,{id:"execution-orderparallelism",children:"Execution order/parallelism"}),`
`,e.jsx(n.p,{children:`It may be useful to execute commands in topological order. For example,
commands with costs proportional to incremental changes, like build systems.
There may also be other relevant heuristics, but topological order is an easy
and effective way to start.`}),`
`,e.jsx(n.p,{children:`Parallel execution of commands on different commits may choose to schedule
commits to still reduce incremental changes in the working copy used by each
execution slot/"thread". However, running the command on all commits
concurrently should be possible if desired.`}),`
`,e.jsx(n.p,{children:`Executing commands in topological order allows for more meaningful use of any
potential features that stop execution "at the first failure". For example,
when running tests on a chain of commits, it might be useful to proceed in
topological/chronological order, and stop on the first failure, because it
might imply that the remaining executions will be undesirable because they will
also fail.`}),`
`,e.jsx(n.h2,{id:"dealing-with-failure",children:"Dealing with failure"}),`
`,e.jsx(n.p,{children:`It will be useful to have multiple strategies to deal with failures on a single
or multiple revisions. The reason for these strategies is to allow customized
conflict handling. These strategies then can be exposed in the ui with a
matching option.`}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Continue:"}),` If any subprocess fails, we will continue the work on child
revisions. Notify the user on exit about the failed revisions.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Stop:"}),` Signal a fatal failure and cancel any scheduled work that has not
yet started running, but let any already started subprocess finish. Notify the
user about the failed command and display the generated error from the
subprocess.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Fatal:"}),` Signal a fatal failure and immediately stop processing and kill any
running processes. Notify the user that we failed to apply the command to the
specific revision.`]}),`
`,e.jsx(n.p,{children:`We will leave any affected commit in its current state, if any subprocess fails.
This allows us to provide a better user experience, as leaving revisions in an
undesirable state, e.g partially formatted, may confuse users.`}),`
`,e.jsx(n.h2,{id:"resource-constraints",children:"Resource constraints"}),`
`,e.jsx(n.p,{children:`It will be useful to constrain the execution to prevent resource exhaustion.
Relevant resources could include:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["CPU and memory available on the machine running the commands. ",e.jsx(n.code,{children:"jj run"}),` can
provide some simple mitigations like limiting parallelism to "number of CPUs"
by default, and limiting parallelism by dividing "available memory" by some
estimate or measurement of per-invocation memory use of the commands.`]}),`
`,e.jsx(n.li,{children:`External resources that are not immediately known to jj. For example,
commands run in parallel may wish to limit the total number of connections
to a server. We might choose to defer any handling of this to the
implementation of the command being invoked, instead of trying to
communicate that information to jj.`}),`
`]}),`
`,e.jsx(n.h2,{id:"command-options",children:"Command Options"}),`
`,e.jsxs(n.p,{children:["The base command of any jj command should be usable. By default ",e.jsx(n.code,{children:"jj run"}),` works
on the `,e.jsx(n.code,{children:"@"})," the current working copy."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"--command, explicit name of the first argument"}),`
`,e.jsx(n.li,{children:"-x, for git compatibility (may alias another command)"}),`
`,e.jsx(n.li,{children:"-j, --jobs, the amount of parallelism to use"}),`
`,e.jsx(n.li,{children:"-k, --keep-going, continue on failure (may alias another command)"}),`
`,e.jsx(n.li,{children:"--show, display the diff for an affected revision"}),`
`,e.jsx(n.li,{children:`--dry-run, do the command execution without doing any work, logging all
intended files and arguments`}),`
`,e.jsx(n.li,{children:`--rebase, rebase all parents on the consulitng diff (may alias another
command)`}),`
`,e.jsx(n.li,{children:`--reparent, change the parent of an effected revision to the new change
(may alias another command)`}),`
`,e.jsx(n.li,{children:"--clean, remove existing workspaces and remove the ignored files"}),`
`,e.jsx(n.li,{children:"--readonly, ignore changes across multiple run invocations"}),`
`,e.jsxs(n.li,{children:["--error-strategy=",e.jsx(n.code,{children:"continue|stop|fatal"}),", see ",e.jsx(n.a,{href:"#dealing-with-failure",children:"Dealing with failure"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"integrating-with-other-commands",children:"Integrating with other commands"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"jj log"}),`: No special handling needed
`,e.jsx(n.code,{children:"jj diff"}),`: No special handling needed
`,e.jsx(n.code,{children:"jj st"}),": For now reprint the final output of ",e.jsx(n.code,{children:"jj run"}),`
`,e.jsx(n.code,{children:"jj op log"}),`: No special handling needed, but awaits further discussion in
`,e.jsx(n.a,{href:"https://github.com/jj-vcs/jj/issues/963",children:"#963"}),`
`,e.jsx(n.code,{children:"jj undo/jj op revert"}),": No special handling needed"]}),`
`,e.jsx(n.h2,{id:"open-points",children:"Open Points"}),`
`,e.jsx(n.p,{children:`Should the command be working copy backend specific?
How do we manage the Processes which the command will spawn?
Configuration options, User and Repository Wide?`}),`
`,e.jsx(n.h2,{id:"future-possibilities",children:"Future possibilities"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"We could rewrite the file in memory, which is a neat optimization"}),`
`,e.jsx(n.li,{children:"Exposing some internal state, to allow preciser resource constraints"}),`
`,e.jsx(n.li,{children:`Integration options for virtual filesystems, which allow them to cache the
needed working copies.`}),`
`,e.jsx(n.li,{children:`A Jujutsu wide concept for a cached working copy, as they could be expensive
to materialize.`}),`
`,e.jsxs(n.li,{children:[`Customized failure messages, this maybe useful for bots, it could be similar
to Bazel's `,e.jsx(n.code,{children:'select(..., message = "arch not supported for $project")'}),"."]}),`
`,e.jsxs(n.li,{children:["Make ",e.jsx(n.code,{children:"jj run"})," asynchronous by spawning a ",e.jsx(n.code,{children:"main"}),` process, directly return to the
user and incrementally updating the output of `,e.jsx(n.code,{children:"jj st"}),"."]}),`
`]})]})}function c(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{c as default,r as extractedReferences,s as frontmatter,a as structuredData,l as toc};
