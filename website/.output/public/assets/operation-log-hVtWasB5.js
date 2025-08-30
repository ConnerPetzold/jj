import{j as e}from"./main-BCYT0j2h.js";let a={title:"Operation log"},r=[],s={contents:[{heading:"introduction",content:`Jujutsu records each operation that modifies the repo in the "operation log".
You can see the log with jj op log. Each operation object contains a snapshot
of how the repo looked at the end of the operation. We call this snapshot a
"view" object. The view contains information about where each bookmark, tag, and
Git ref (in Git-backed repos) pointed, as well as the set of heads in the repo,
and the current working-copy commit in each workspace. The operation object also
(in addition to the view) contains pointers to the operation(s) immediately
before it, as well as metadata about the operation, such as timestamps,
username, hostname, description.`},{heading:"introduction",content:`The operation log allows you to undo operations one-by-one (jj undo) or even
revert a specific one which isn't the most recent operation (jj op revert). It
also lets you restore the entire repo to the way it looked at an earlier point
(jj op restore).`},{heading:"introduction",content:`When referring to operations, you can use @ to represent the current
operation.`},{heading:"introduction",content:"The following operators are supported:"},{heading:"introduction",content:"x-: Parents of x (e.g. @-)"},{heading:"introduction",content:"x+: Children of x"},{heading:"divergent-operations",content:`One benefit of the operation log (and the reason for its creation) is that it
allows lock-free concurrency -- you can run concurrent jj commands without
corrupting the repo, even if you run the commands on different machines that
access the repo via a distributed file system (as long as the file system
guarantees that a write is only visible once previous writes are visible). When
you run a jj command, it will start by loading the repo at the latest
operation. It will not see any changes written by concurrent commands. If there
are conflicts, you will be informed of them by subsequent jj st and/or
jj log commands.`},{heading:"divergent-operations",content:`As an example, let's say you had started editing the description of a change and
then also update the contents of the change (maybe because you had forgotten the
editor). When you eventually close your editor, the command will succeed and
e.g. jj log will indicate that the change has diverged.`},{heading:"loading-an-old-version-of-the-repo",content:`The top-level --at-operation/--at-op option allows you to load the repo at a
specific operation. This can be useful for understanding how your repo got into
the current state. It can be even more useful for understanding why someone
else's repo got into its current state.`},{heading:"loading-an-old-version-of-the-repo",content:`When you use --at-op, the automatic snapshotting of the working copy will not
take place. When referring to a revision with the @ symbol (as many commands
do by default), that will resolve to the working-copy commit recorded in the
operation's view (which is actually how it always works -- it's just the
snapshotting that's skipped with --at-op).`},{heading:"loading-an-old-version-of-the-repo",content:`As a top-level option, --at-op can be passed to any command. However, you
will typically only want to run read-only commands. For example, jj log,
jj st, and jj diff all make sense. It's still possible to run e.g.
jj --at-op=<some operation ID> describe. That's equivalent to having started
jj describe back when the specified operation was the most recent operation
and then let it run until now (which can be done for that particular command by
not closing the editor). There's practically no good reason to do that other
than to simulate concurrent commands.`}],headings:[{id:"introduction",content:"Introduction"},{id:"divergent-operations",content:"Divergent operations"},{id:"loading-an-old-version-of-the-repo",content:"Loading an old version of the repo"}]};const c=[{depth:2,url:"#introduction",title:e.jsx(e.Fragment,{children:"Introduction"})},{depth:2,url:"#divergent-operations",title:e.jsx(e.Fragment,{children:"Divergent operations"})},{depth:2,url:"#loading-an-old-version-of-the-repo",title:e.jsx(e.Fragment,{children:"Loading an old version of the repo"})}];function n(t){const o={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(o.p,{children:[`Jujutsu records each operation that modifies the repo in the "operation log".
You can see the log with `,e.jsx(o.code,{children:"jj op log"}),`. Each operation object contains a snapshot
of how the repo looked at the end of the operation. We call this snapshot a
"view" object. The view contains information about where each bookmark, tag, and
Git ref (in Git-backed repos) pointed, as well as the set of heads in the repo,
and the current working-copy commit in each workspace. The operation object also
(in addition to the view) contains pointers to the operation(s) immediately
before it, as well as metadata about the operation, such as timestamps,
username, hostname, description.`]}),`
`,e.jsxs(o.p,{children:["The operation log allows you to undo operations one-by-one (",e.jsx(o.code,{children:"jj undo"}),`) or even
revert a specific one which isn't the most recent operation (`,e.jsx(o.code,{children:"jj op revert"}),`). It
also lets you restore the entire repo to the way it looked at an earlier point
(`,e.jsx(o.code,{children:"jj op restore"}),")."]}),`
`,e.jsxs(o.p,{children:["When referring to operations, you can use ",e.jsx(o.code,{children:"@"}),` to represent the current
operation.`]}),`
`,e.jsx(o.p,{children:"The following operators are supported:"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"x-"}),": Parents of ",e.jsx(o.code,{children:"x"})," (e.g. ",e.jsx(o.code,{children:"@-"}),")"]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"x+"}),": Children of ",e.jsx(o.code,{children:"x"})]}),`
`]}),`
`,e.jsx(o.h2,{id:"divergent-operations",children:"Divergent operations"}),`
`,e.jsxs(o.p,{children:[`One benefit of the operation log (and the reason for its creation) is that it
allows lock-free concurrency -- you can run concurrent `,e.jsx(o.code,{children:"jj"}),` commands without
corrupting the repo, even if you run the commands on different machines that
access the repo via a distributed file system (as long as the file system
guarantees that a write is only visible once previous writes are visible). When
you run a `,e.jsx(o.code,{children:"jj"}),` command, it will start by loading the repo at the latest
operation. It will not see any changes written by concurrent commands. If there
are conflicts, you will be informed of them by subsequent `,e.jsx(o.code,{children:"jj st"}),` and/or
`,e.jsx(o.code,{children:"jj log"})," commands."]}),`
`,e.jsxs(o.p,{children:[`As an example, let's say you had started editing the description of a change and
then also update the contents of the change (maybe because you had forgotten the
editor). When you eventually close your editor, the command will succeed and
e.g. `,e.jsx(o.code,{children:"jj log"})," will indicate that the change has diverged."]}),`
`,e.jsx(o.h2,{id:"loading-an-old-version-of-the-repo",children:"Loading an old version of the repo"}),`
`,e.jsxs(o.p,{children:["The top-level ",e.jsx(o.code,{children:"--at-operation/--at-op"}),` option allows you to load the repo at a
specific operation. This can be useful for understanding how your repo got into
the current state. It can be even more useful for understanding why someone
else's repo got into its current state.`]}),`
`,e.jsxs(o.p,{children:["When you use ",e.jsx(o.code,{children:"--at-op"}),`, the automatic snapshotting of the working copy will not
take place. When referring to a revision with the `,e.jsx(o.code,{children:"@"}),` symbol (as many commands
do by default), that will resolve to the working-copy commit recorded in the
operation's view (which is actually how it always works -- it's just the
snapshotting that's skipped with `,e.jsx(o.code,{children:"--at-op"}),")."]}),`
`,e.jsxs(o.p,{children:["As a top-level option, ",e.jsx(o.code,{children:"--at-op"}),` can be passed to any command. However, you
will typically only want to run read-only commands. For example, `,e.jsx(o.code,{children:"jj log"}),`,
`,e.jsx(o.code,{children:"jj st"}),", and ",e.jsx(o.code,{children:"jj diff"}),` all make sense. It's still possible to run e.g.
`,e.jsx(o.code,{children:"jj --at-op=<some operation ID> describe"}),`. That's equivalent to having started
`,e.jsx(o.code,{children:"jj describe"}),` back when the specified operation was the most recent operation
and then let it run until now (which can be done for that particular command by
not closing the editor). There's practically no good reason to do that other
than to simulate concurrent commands.`]})]})}function h(t={}){const{wrapper:o}=t.components||{};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{h as default,r as extractedReferences,a as frontmatter,s as structuredData,c as toc};
