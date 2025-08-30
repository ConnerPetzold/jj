import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Introducing JJ run"
};
let extractedReferences = [{
  "href": "mailto:philipmetzger@bluewin.ch"
}, {
  "href": "mailto:martinvonz@google.com"
}, {
  "href": "mailto:hooper@google.com"
}, {
  "href": "mailto:me@waleedkhan.name"
}, {
  "href": "https://docs.google.com/document/d/14BiAoEEy_e-BRPHYpXRFjvHMfgYVKh-pKWzzTDi-v-g/edit"
}, {
  "href": "#use-cases-of-jj-run"
}, {
  "href": "#dealing-with-failure"
}];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "Authors: Philip Metzger, Martin von Zweigberk, Danny Hooper, Waleed Khan"
  }, {
    "heading": void 0,
    "content": "Initial Version, 10.12.2022 (view full history here)"
  }, {
    "heading": void 0,
    "content": "Summary: This Document documents the design of a new run command for\nJujutsu which will be used to seamlessly integrate with build systems, linters\nand formatters. This is achieved by running a user-provided command or script\nacross multiple revisions. For more details, read the\nUse-Cases of jj run."
  }, {
    "heading": "preface",
    "content": "The goal of this Design Document is to specify the correct behavior of jj run.\nThe points we decide on here I (Philip Metzger) will try to implement. There\nexists some prior work in other DVCS:"
  }, {
    "heading": "preface",
    "content": "git test: part of git-branchless. Similar to this proposal for jj run."
  }, {
    "heading": "preface",
    "content": "hg run: Google's internal Mercurial extension. Similar to this proposal for\njj run.\nDetails not available."
  }, {
    "heading": "preface",
    "content": "hg fix: Google's open source Mercurial extension: source code. A\nmore specialized approach to rewriting file content without full context of the\nworking directory."
  }, {
    "heading": "preface",
    "content": "git rebase -x: runs commands opportunistically as part of rebase."
  }, {
    "heading": "preface",
    "content": "git bisect run: run a command to determine which commit introduced a bug."
  }, {
    "heading": "context-and-scope",
    "content": "The initial need for some kind of command runner integrated in the VCS, surfaced\nin a github discussion. In a discussion on discord about\nthe git-hook model, there was consensus about not repeating their mistakes."
  }, {
    "heading": "context-and-scope",
    "content": "For jj run there is prior art in Mercurial, git branchless and Google's\ninternal Mercurial. Currently git-branchless git test and hg fix implement\nsome kind of command runner. The Google internal hg run works in conjunction\nwith CitC (Clients in the Cloud) which allows it to lazily apply the current\ncommand to any affected file. Currently no open-source Jujutsu backend (Git,\nSimple) has a fancy virtual filesystem supporting it, so we can't apply this\noptimization. We could do the same once we have an implementation of the working\ncopy based on a virtual file system. Until then, we have to run the commands in\nregular local-disk working copies."
  }, {
    "heading": "goals",
    "content": "We should be able to apply the command to any revision, published or unpublished."
  }, {
    "heading": "goals",
    "content": "We should be able to parallelize running the actual command, while preserving a\ngood console output."
  }, {
    "heading": "goals",
    "content": "The run command should be able to work in any commit, the working-copy commit\nitself or any other commit."
  }, {
    "heading": "goals",
    "content": "There should exist some way to signal hard failure."
  }, {
    "heading": "goals",
    "content": "The command should build enough infrastructure for jj test, jj fix and\njj format."
  }, {
    "heading": "goals",
    "content": "The main goal is to be good enough, as we can always expand the functionality\nin the future."
  }, {
    "heading": "non-goals",
    "content": "While we should build a base for jj test, jj format and jj fix, we\nshouldn't mash their use-cases into jj run."
  }, {
    "heading": "non-goals",
    "content": "The command shouldn't be too smart, as too many assumptions about workflows\nmakes the command confusing for users."
  }, {
    "heading": "non-goals",
    "content": "The smart caching of outputs, as user input commands can be unpredictable.\nmakes the command confusing for users."
  }, {
    "heading": "non-goals",
    "content": "Avoid the smart caching of outputs, as user input commands can be\nunpredictable."
  }, {
    "heading": "non-goals",
    "content": "Fine grained user facing configuration, as it's unwarranted complexity."
  }, {
    "heading": "non-goals",
    "content": "A fix subcommand as it cuts too much design space."
  }, {
    "heading": "use-cases-of-jj-run",
    "content": "Linting and Formatting:"
  }, {
    "heading": "use-cases-of-jj-run",
    "content": "jj run 'pre-commit run' -r $revset"
  }, {
    "heading": "use-cases-of-jj-run",
    "content": "jj run 'cargo clippy' -r $revset"
  }, {
    "heading": "use-cases-of-jj-run",
    "content": "jj run 'cargo +nightly fmt'"
  }, {
    "heading": "use-cases-of-jj-run",
    "content": "Large scale changes across repositories, local and remote:"
  }, {
    "heading": "use-cases-of-jj-run",
    "content": `jj run 'sed /some/test/' -r 'mine() & ~remote_bookmarks(exact:"origin")'`
  }, {
    "heading": "use-cases-of-jj-run",
    "content": "jj run '$rewrite-tool' -r '$revset'"
  }, {
    "heading": "use-cases-of-jj-run",
    "content": "Build systems:"
  }, {
    "heading": "use-cases-of-jj-run",
    "content": "jj run 'bazel build //some/target:somewhere'"
  }, {
    "heading": "use-cases-of-jj-run",
    "content": "jj run 'ninja check-lld'"
  }, {
    "heading": "use-cases-of-jj-run",
    "content": "Some of these use-cases should get a specialized command, as this allows\nfurther optimization. A command could be jj format, which runs a list of\nformatters over a subset of a file in a revision. Another command could be\njj fix, which runs a command like rustfmt --fix or cargo clippy --fix over\na subset of a file in a revision."
  }, {
    "heading": "base-design",
    "content": "All the work will be done in the .jj/ directory. This allows us to hide all\ncomplexity from the users, while preserving the user's current workspace."
  }, {
    "heading": "base-design",
    "content": "We will copy the approach from git-branchless's git test of creating a\ntemporary working copy for each parallel command. The working copies will be\nreused between jj run invocations. They will also be reused within jj run\ninvocation if there are more commits to run on than there are parallel jobs."
  }, {
    "heading": "base-design",
    "content": "We will leave ignored files in the temporary directory between runs. That\nenables incremental builds (e.g. by letting cargo reuse its target/\ndirectory). However, it also means that runs potentially become less\nreproducible. We will provide a flag for removing ignored files from the\ntemporary working copies to address that."
  }, {
    "heading": "base-design",
    "content": "Another problem with leaving ignored files in the temporary directories is that\nthey take up space. That is especially problematic in the case of cargo (the\ntarget/ directory often takes up tens of GBs). The same flag for cleaning up\nignored files can be used to address that. We may want to also have a flag for\ncleaning up temporary working copies after running the command."
  }, {
    "heading": "base-design",
    "content": "An early version of the command will directly use Treestate to\nto manage the temporary working copies. That means that running jj inside the\ntemporary working copies will not work . We can later extend that to use a full\nWorkspace. To prevent operations in the working copies from\nimpacting the repo, we can use a separate OpHeadsStore for it."
  }, {
    "heading": "modifying-the-working-copy",
    "content": "Since the subprocesses will run in temporary working copies, they\nwon't interfere with the user's working copy. The user can therefore continue\nto work in it while jj run is running."
  }, {
    "heading": "modifying-the-working-copy",
    "content": "We want subprocesses to be able to make changes to the repo by updating their\nassigned working copy. Let's say the user runs jj run on just commits A and\nB, where B's parent is A. Any changes made on top of A would be squashed into\nA, forming A'. Similarly B' would be formed by squasing it into B. We can then\neither do a normal rebase of B' onto A', or we can simply update its parent to\nA'. The former is useful, e.g. when the subprocess only makes a partial update\nof the tree based on the parent commit. In addition to these two modes, we may\nwant to have an option to ignore any changes made in the subprocess's working\ncopy."
  }, {
    "heading": "modifying-the-repo",
    "content": "Once we give the subprocess access to a fork of the repo via separate\nOpHeadsStore, it will be able to create new operations in its fork.\nIf the user runs jj run -r foo and the subprocess checks out another commit,\nit's not clear what that should do. We should probably just verify that the\nworking-copy commit's parents are unchanged after the subprocess returns. Any\noperations created by the subprocess will be ignored."
  }, {
    "heading": "rewriting-the-revisions",
    "content": "Like all commands, jj run will refuse to rewrite public/immutable commits.\nFor private/unpublished revisions, we either amend or reparent the changes,\nwhich are available as command options."
  }, {
    "heading": "execution-orderparallelism",
    "content": "It may be useful to execute commands in topological order. For example,\ncommands with costs proportional to incremental changes, like build systems.\nThere may also be other relevant heuristics, but topological order is an easy\nand effective way to start."
  }, {
    "heading": "execution-orderparallelism",
    "content": 'Parallel execution of commands on different commits may choose to schedule\ncommits to still reduce incremental changes in the working copy used by each\nexecution slot/"thread". However, running the command on all commits\nconcurrently should be possible if desired.'
  }, {
    "heading": "execution-orderparallelism",
    "content": 'Executing commands in topological order allows for more meaningful use of any\npotential features that stop execution "at the first failure". For example,\nwhen running tests on a chain of commits, it might be useful to proceed in\ntopological/chronological order, and stop on the first failure, because it\nmight imply that the remaining executions will be undesirable because they will\nalso fail.'
  }, {
    "heading": "dealing-with-failure",
    "content": "It will be useful to have multiple strategies to deal with failures on a single\nor multiple revisions. The reason for these strategies is to allow customized\nconflict handling. These strategies then can be exposed in the ui with a\nmatching option."
  }, {
    "heading": "dealing-with-failure",
    "content": "Continue: If any subprocess fails, we will continue the work on child\nrevisions. Notify the user on exit about the failed revisions."
  }, {
    "heading": "dealing-with-failure",
    "content": "Stop: Signal a fatal failure and cancel any scheduled work that has not\nyet started running, but let any already started subprocess finish. Notify the\nuser about the failed command and display the generated error from the\nsubprocess."
  }, {
    "heading": "dealing-with-failure",
    "content": "Fatal: Signal a fatal failure and immediately stop processing and kill any\nrunning processes. Notify the user that we failed to apply the command to the\nspecific revision."
  }, {
    "heading": "dealing-with-failure",
    "content": "We will leave any affected commit in its current state, if any subprocess fails.\nThis allows us to provide a better user experience, as leaving revisions in an\nundesirable state, e.g partially formatted, may confuse users."
  }, {
    "heading": "resource-constraints",
    "content": "It will be useful to constrain the execution to prevent resource exhaustion.\nRelevant resources could include:"
  }, {
    "heading": "resource-constraints",
    "content": 'CPU and memory available on the machine running the commands. jj run can\nprovide some simple mitigations like limiting parallelism to "number of CPUs"\nby default, and limiting parallelism by dividing "available memory" by some\nestimate or measurement of per-invocation memory use of the commands.'
  }, {
    "heading": "resource-constraints",
    "content": "External resources that are not immediately known to jj. For example,\ncommands run in parallel may wish to limit the total number of connections\nto a server. We might choose to defer any handling of this to the\nimplementation of the command being invoked, instead of trying to\ncommunicate that information to jj."
  }, {
    "heading": "command-options",
    "content": "The base command of any jj command should be usable. By default jj run works\non the @ the current working copy."
  }, {
    "heading": "command-options",
    "content": "--command, explicit name of the first argument"
  }, {
    "heading": "command-options",
    "content": "-x, for git compatibility (may alias another command)"
  }, {
    "heading": "command-options",
    "content": "-j, --jobs, the amount of parallelism to use"
  }, {
    "heading": "command-options",
    "content": "-k, --keep-going, continue on failure (may alias another command)"
  }, {
    "heading": "command-options",
    "content": "--show, display the diff for an affected revision"
  }, {
    "heading": "command-options",
    "content": "--dry-run, do the command execution without doing any work, logging all\nintended files and arguments"
  }, {
    "heading": "command-options",
    "content": "--rebase, rebase all parents on the consulitng diff (may alias another\ncommand)"
  }, {
    "heading": "command-options",
    "content": "--reparent, change the parent of an effected revision to the new change\n(may alias another command)"
  }, {
    "heading": "command-options",
    "content": "--clean, remove existing workspaces and remove the ignored files"
  }, {
    "heading": "command-options",
    "content": "--readonly, ignore changes across multiple run invocations"
  }, {
    "heading": "command-options",
    "content": "--error-strategy=continue|stop|fatal, see Dealing with failure"
  }, {
    "heading": "integrating-with-other-commands",
    "content": "jj log: No special handling needed\njj diff: No special handling needed\njj st: For now reprint the final output of jj run\njj op log: No special handling needed, but awaits further discussion in\n#963\njj undo/jj op revert: No special handling needed"
  }, {
    "heading": "open-points",
    "content": "Should the command be working copy backend specific?\nHow do we manage the Processes which the command will spawn?\nConfiguration options, User and Repository Wide?"
  }, {
    "heading": "future-possibilities",
    "content": "We could rewrite the file in memory, which is a neat optimization"
  }, {
    "heading": "future-possibilities",
    "content": "Exposing some internal state, to allow preciser resource constraints"
  }, {
    "heading": "future-possibilities",
    "content": "Integration options for virtual filesystems, which allow them to cache the\nneeded working copies."
  }, {
    "heading": "future-possibilities",
    "content": "A Jujutsu wide concept for a cached working copy, as they could be expensive\nto materialize."
  }, {
    "heading": "future-possibilities",
    "content": `Customized failure messages, this maybe useful for bots, it could be similar
to Bazel's select(..., message = "arch not supported for $project").`
  }, {
    "heading": "future-possibilities",
    "content": "Make jj run asynchronous by spawning a main process, directly return to the\nuser and incrementally updating the output of jj st."
  }],
  "headings": [{
    "id": "preface",
    "content": "Preface"
  }, {
    "id": "context-and-scope",
    "content": "Context and Scope"
  }, {
    "id": "goals-and-non-goals",
    "content": "Goals and Non-Goals"
  }, {
    "id": "goals",
    "content": "Goals"
  }, {
    "id": "non-goals",
    "content": "Non-Goals"
  }, {
    "id": "use-cases-of-jj-run",
    "content": "Use-Cases of jj run"
  }, {
    "id": "design",
    "content": "Design"
  }, {
    "id": "base-design",
    "content": "Base Design"
  }, {
    "id": "modifying-the-working-copy",
    "content": "Modifying the Working Copy"
  }, {
    "id": "modifying-the-repo",
    "content": "Modifying the Repo"
  }, {
    "id": "rewriting-the-revisions",
    "content": "Rewriting the revisions"
  }, {
    "id": "execution-orderparallelism",
    "content": "Execution order/parallelism"
  }, {
    "id": "dealing-with-failure",
    "content": "Dealing with failure"
  }, {
    "id": "resource-constraints",
    "content": "Resource constraints"
  }, {
    "id": "command-options",
    "content": "Command Options"
  }, {
    "id": "integrating-with-other-commands",
    "content": "Integrating with other commands"
  }, {
    "id": "open-points",
    "content": "Open Points"
  }, {
    "id": "future-possibilities",
    "content": "Future possibilities"
  }]
};
const toc = [{
  depth: 2,
  url: "#preface",
  title: jsx(Fragment, {
    children: "Preface"
  })
}, {
  depth: 2,
  url: "#context-and-scope",
  title: jsx(Fragment, {
    children: "Context and Scope"
  })
}, {
  depth: 2,
  url: "#goals-and-non-goals",
  title: jsx(Fragment, {
    children: "Goals and Non-Goals"
  })
}, {
  depth: 3,
  url: "#goals",
  title: jsx(Fragment, {
    children: "Goals"
  })
}, {
  depth: 3,
  url: "#non-goals",
  title: jsx(Fragment, {
    children: "Non-Goals"
  })
}, {
  depth: 2,
  url: "#use-cases-of-jj-run",
  title: jsx(Fragment, {
    children: "Use-Cases of jj run"
  })
}, {
  depth: 2,
  url: "#design",
  title: jsx(Fragment, {
    children: "Design"
  })
}, {
  depth: 3,
  url: "#base-design",
  title: jsx(Fragment, {
    children: "Base Design"
  })
}, {
  depth: 3,
  url: "#modifying-the-working-copy",
  title: jsx(Fragment, {
    children: "Modifying the Working Copy"
  })
}, {
  depth: 3,
  url: "#modifying-the-repo",
  title: jsx(Fragment, {
    children: "Modifying the Repo"
  })
}, {
  depth: 3,
  url: "#rewriting-the-revisions",
  title: jsx(Fragment, {
    children: "Rewriting the revisions"
  })
}, {
  depth: 2,
  url: "#execution-orderparallelism",
  title: jsx(Fragment, {
    children: "Execution order/parallelism"
  })
}, {
  depth: 2,
  url: "#dealing-with-failure",
  title: jsx(Fragment, {
    children: "Dealing with failure"
  })
}, {
  depth: 2,
  url: "#resource-constraints",
  title: jsx(Fragment, {
    children: "Resource constraints"
  })
}, {
  depth: 2,
  url: "#command-options",
  title: jsx(Fragment, {
    children: "Command Options"
  })
}, {
  depth: 3,
  url: "#integrating-with-other-commands",
  title: jsx(Fragment, {
    children: "Integrating with other commands"
  })
}, {
  depth: 2,
  url: "#open-points",
  title: jsx(Fragment, {
    children: "Open Points"
  })
}, {
  depth: 2,
  url: "#future-possibilities",
  title: jsx(Fragment, {
    children: "Future possibilities"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.p, {
      children: ["Authors: ", jsx(_components.a, {
        href: "mailto:philipmetzger@bluewin.ch",
        children: "Philip Metzger"
      }), ", ", jsx(_components.a, {
        href: "mailto:martinvonz@google.com",
        children: "Martin von Zweigberk"
      }), ", ", jsx(_components.a, {
        href: "mailto:hooper@google.com",
        children: "Danny Hooper"
      }), ", ", jsx(_components.a, {
        href: "mailto:me@waleedkhan.name",
        children: "Waleed Khan"
      })]
    }), "\n", jsxs(_components.p, {
      children: ["Initial Version, 10.12.2022 (view full history ", jsx(_components.a, {
        href: "https://docs.google.com/document/d/14BiAoEEy_e-BRPHYpXRFjvHMfgYVKh-pKWzzTDi-v-g/edit",
        children: "here"
      }), ")"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "Summary:"
      }), " This Document documents the design of a new ", jsx(_components.code, {
        children: "run"
      }), " command for\nJujutsu which will be used to seamlessly integrate with build systems, linters\nand formatters. This is achieved by running a user-provided command or script\nacross multiple revisions. For more details, read the\n", jsx(_components.a, {
        href: "#use-cases-of-jj-run",
        children: "Use-Cases of jj run"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "preface",
      children: "Preface"
    }), "\n", jsxs(_components.p, {
      children: ["The goal of this Design Document is to specify the correct behavior of ", jsx(_components.code, {
        children: "jj run"
      }), ".\nThe points we decide on here I (Philip Metzger) will try to implement. There\nexists some prior work in other DVCS:"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "git test"
        }), ": part of ", jsx(_components.a, {
          href: "https://github.com/arxanas/git-branchless",
          children: "git-branchless"
        }), ". Similar to this proposal for ", jsx(_components.code, {
          children: "jj run"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "hg run"
        }), ": Google's internal Mercurial extension. Similar to this proposal for\n", jsx(_components.code, {
          children: "jj run"
        }), ".\nDetails not available."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "hg fix"
        }), ": Google's open source Mercurial extension: ", jsx(_components.a, {
          href: "https://repo.mercurial-scm.org/hg/file/tip/hgext/fix.py",
          children: "source code"
        }), ". A\nmore specialized approach to rewriting file content without full context of the\nworking directory."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "git rebase -x"
        }), ": runs commands opportunistically as part of rebase."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "git bisect run"
        }), ": run a command to determine which commit introduced a bug."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "context-and-scope",
      children: "Context and Scope"
    }), "\n", jsxs(_components.p, {
      children: ["The initial need for some kind of command runner integrated in the VCS, surfaced\nin a ", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/issues/405",
        children: "github discussion"
      }), ". In a ", jsx(_components.a, {
        href: "https://discord.com/channels/968932220549103686/969829516539228222/1047958933161119795",
        children: "discussion on discord"
      }), " about\nthe git-hook model, there was consensus about not repeating their mistakes."]
    }), "\n", jsxs(_components.p, {
      children: ["For ", jsx(_components.code, {
        children: "jj run"
      }), " there is prior art in Mercurial, git branchless and Google's\ninternal Mercurial. Currently git-branchless ", jsx(_components.code, {
        children: "git test"
      }), " and ", jsx(_components.code, {
        children: "hg fix"
      }), " implement\nsome kind of command runner. The Google internal ", jsx(_components.code, {
        children: "hg run"
      }), " works in conjunction\nwith CitC (Clients in the Cloud) which allows it to lazily apply the current\ncommand to any affected file. Currently no open-source Jujutsu backend (Git,\nSimple) has a fancy virtual filesystem supporting it, so we can't apply this\noptimization. We could do the same once we have an implementation of the working\ncopy based on a virtual file system. Until then, we have to run the commands in\nregular local-disk working copies."]
    }), "\n", jsx(_components.h2, {
      id: "goals-and-non-goals",
      children: "Goals and Non-Goals"
    }), "\n", jsx(_components.h3, {
      id: "goals",
      children: "Goals"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "We should be able to apply the command to any revision, published or unpublished."
      }), "\n", jsx(_components.li, {
        children: "We should be able to parallelize running the actual command, while preserving a\ngood console output."
      }), "\n", jsx(_components.li, {
        children: "The run command should be able to work in any commit, the working-copy commit\nitself or any other commit."
      }), "\n", jsx(_components.li, {
        children: "There should exist some way to signal hard failure."
      }), "\n", jsxs(_components.li, {
        children: ["The command should build enough infrastructure for ", jsx(_components.code, {
          children: "jj test"
        }), ", ", jsx(_components.code, {
          children: "jj fix"
        }), " and\n", jsx(_components.code, {
          children: "jj format"
        }), "."]
      }), "\n", jsx(_components.li, {
        children: "The main goal is to be good enough, as we can always expand the functionality\nin the future."
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "non-goals",
      children: "Non-Goals"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["While we should build a base for ", jsx(_components.code, {
          children: "jj test"
        }), ", ", jsx(_components.code, {
          children: "jj format"
        }), " and ", jsx(_components.code, {
          children: "jj fix"
        }), ", we\nshouldn't mash their use-cases into ", jsx(_components.code, {
          children: "jj run"
        }), "."]
      }), "\n", jsx(_components.li, {
        children: "The command shouldn't be too smart, as too many assumptions about workflows\nmakes the command confusing for users."
      }), "\n", jsx(_components.li, {
        children: "The smart caching of outputs, as user input commands can be unpredictable.\nmakes the command confusing for users."
      }), "\n", jsx(_components.li, {
        children: "Avoid the smart caching of outputs, as user input commands can be\nunpredictable."
      }), "\n", jsx(_components.li, {
        children: "Fine grained user facing configuration, as it's unwarranted complexity."
      }), "\n", jsxs(_components.li, {
        children: ["A ", jsx(_components.code, {
          children: "fix"
        }), " subcommand as it cuts too much design space."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "use-cases-of-jj-run",
      children: "Use-Cases of jj run"
    }), "\n", jsx(_components.p, {
      children: jsx(_components.strong, {
        children: "Linting and Formatting:"
      })
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: "jj run 'pre-commit run' -r $revset"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: "jj run 'cargo clippy' -r $revset"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: "jj run 'cargo +nightly fmt'"
        })
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.strong, {
        children: "Large scale changes across repositories, local and remote:"
      })
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: `jj run 'sed /some/test/' -r 'mine() & ~remote_bookmarks(exact:"origin")'`
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: "jj run '$rewrite-tool' -r '$revset'"
        })
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.strong, {
        children: "Build systems:"
      })
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: "jj run 'bazel build //some/target:somewhere'"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: "jj run 'ninja check-lld'"
        })
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["Some of these use-cases should get a specialized command, as this allows\nfurther optimization. A command could be ", jsx(_components.code, {
        children: "jj format"
      }), ", which runs a list of\nformatters over a subset of a file in a revision. Another command could be\n", jsx(_components.code, {
        children: "jj fix"
      }), ", which runs a command like ", jsx(_components.code, {
        children: "rustfmt --fix"
      }), " or ", jsx(_components.code, {
        children: "cargo clippy --fix"
      }), " over\na subset of a file in a revision."]
    }), "\n", jsx(_components.h2, {
      id: "design",
      children: "Design"
    }), "\n", jsx(_components.h3, {
      id: "base-design",
      children: "Base Design"
    }), "\n", jsxs(_components.p, {
      children: ["All the work will be done in the ", jsx(_components.code, {
        children: ".jj/"
      }), " directory. This allows us to hide all\ncomplexity from the users, while preserving the user's current workspace."]
    }), "\n", jsxs(_components.p, {
      children: ["We will copy the approach from git-branchless's ", jsx(_components.code, {
        children: "git test"
      }), " of creating a\ntemporary working copy for each parallel command. The working copies will be\nreused between ", jsx(_components.code, {
        children: "jj run"
      }), " invocations. They will also be reused within ", jsx(_components.code, {
        children: "jj run"
      }), "\ninvocation if there are more commits to run on than there are parallel jobs."]
    }), "\n", jsxs(_components.p, {
      children: ["We will leave ignored files in the temporary directory between runs. That\nenables incremental builds (e.g. by letting cargo reuse its ", jsx(_components.code, {
        children: "target/"
      }), "\ndirectory). However, it also means that runs potentially become less\nreproducible. We will provide a flag for removing ignored files from the\ntemporary working copies to address that."]
    }), "\n", jsxs(_components.p, {
      children: ["Another problem with leaving ignored files in the temporary directories is that\nthey take up space. That is especially problematic in the case of cargo (the\n", jsx(_components.code, {
        children: "target/"
      }), " directory often takes up tens of GBs). The same flag for cleaning up\nignored files can be used to address that. We may want to also have a flag for\ncleaning up temporary working copies ", jsx(_components.em, {
        children: "after"
      }), " running the command."]
    }), "\n", jsxs(_components.p, {
      children: ["An early version of the command will directly use ", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/blob/af85f552b676d66ed0e9ae0d401cd0c4ffbbeb21/lib/src/working_copy.rs#L117",
        children: "Treestate"
      }), " to\nto manage the temporary working copies. That means that running ", jsx(_components.code, {
        children: "jj"
      }), " inside the\ntemporary working copies will not work . We can later extend that to use a full\n", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/blob/af85f552b676d66ed0e9ae0d401cd0c4ffbbeb21/lib/src/workspace.rs#L54",
        children: "Workspace"
      }), ". To prevent operations in the working copies from\nimpacting the repo, we can use a separate ", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/blob/main/lib/src/op_heads_store.rs",
        children: "OpHeadsStore"
      }), " for it."]
    }), "\n", jsx(_components.h3, {
      id: "modifying-the-working-copy",
      children: "Modifying the Working Copy"
    }), "\n", jsxs(_components.p, {
      children: ["Since the subprocesses will run in temporary working copies, they\nwon't interfere with the user's working copy. The user can therefore continue\nto work in it while ", jsx(_components.code, {
        children: "jj run"
      }), " is running."]
    }), "\n", jsxs(_components.p, {
      children: ["We want subprocesses to be able to make changes to the repo by updating their\nassigned working copy. Let's say the user runs ", jsx(_components.code, {
        children: "jj run"
      }), " on just commits A and\nB, where B's parent is A. Any changes made on top of A would be squashed into\nA, forming A'. Similarly B' would be formed by squasing it into B. We can then\neither do a normal rebase of B' onto A', or we can simply update its parent to\nA'. The former is useful, e.g. when the subprocess only makes a partial update\nof the tree based on the parent commit. In addition to these two modes, we may\nwant to have an option to ignore any changes made in the subprocess's working\ncopy."]
    }), "\n", jsx(_components.h3, {
      id: "modifying-the-repo",
      children: "Modifying the Repo"
    }), "\n", jsxs(_components.p, {
      children: ["Once we give the subprocess access to a fork of the repo via separate\n", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/blob/main/lib/src/op_heads_store.rs",
        children: "OpHeadsStore"
      }), ", it will be able to create new operations in its fork.\nIf the user runs ", jsx(_components.code, {
        children: "jj run -r foo"
      }), " and the subprocess checks out another commit,\nit's not clear what that should do. We should probably just verify that the\nworking-copy commit's parents are unchanged after the subprocess returns. Any\noperations created by the subprocess will be ignored."]
    }), "\n", jsx(_components.h3, {
      id: "rewriting-the-revisions",
      children: "Rewriting the revisions"
    }), "\n", jsxs(_components.p, {
      children: ["Like all commands, ", jsx(_components.code, {
        children: "jj run"
      }), " will refuse to rewrite public/immutable commits.\nFor private/unpublished revisions, we either amend or reparent the changes,\nwhich are available as command options."]
    }), "\n", jsx(_components.h2, {
      id: "execution-orderparallelism",
      children: "Execution order/parallelism"
    }), "\n", jsx(_components.p, {
      children: "It may be useful to execute commands in topological order. For example,\ncommands with costs proportional to incremental changes, like build systems.\nThere may also be other relevant heuristics, but topological order is an easy\nand effective way to start."
    }), "\n", jsx(_components.p, {
      children: 'Parallel execution of commands on different commits may choose to schedule\ncommits to still reduce incremental changes in the working copy used by each\nexecution slot/"thread". However, running the command on all commits\nconcurrently should be possible if desired.'
    }), "\n", jsx(_components.p, {
      children: 'Executing commands in topological order allows for more meaningful use of any\npotential features that stop execution "at the first failure". For example,\nwhen running tests on a chain of commits, it might be useful to proceed in\ntopological/chronological order, and stop on the first failure, because it\nmight imply that the remaining executions will be undesirable because they will\nalso fail.'
    }), "\n", jsx(_components.h2, {
      id: "dealing-with-failure",
      children: "Dealing with failure"
    }), "\n", jsx(_components.p, {
      children: "It will be useful to have multiple strategies to deal with failures on a single\nor multiple revisions. The reason for these strategies is to allow customized\nconflict handling. These strategies then can be exposed in the ui with a\nmatching option."
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "Continue:"
      }), " If any subprocess fails, we will continue the work on child\nrevisions. Notify the user on exit about the failed revisions."]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "Stop:"
      }), " Signal a fatal failure and cancel any scheduled work that has not\nyet started running, but let any already started subprocess finish. Notify the\nuser about the failed command and display the generated error from the\nsubprocess."]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "Fatal:"
      }), " Signal a fatal failure and immediately stop processing and kill any\nrunning processes. Notify the user that we failed to apply the command to the\nspecific revision."]
    }), "\n", jsx(_components.p, {
      children: "We will leave any affected commit in its current state, if any subprocess fails.\nThis allows us to provide a better user experience, as leaving revisions in an\nundesirable state, e.g partially formatted, may confuse users."
    }), "\n", jsx(_components.h2, {
      id: "resource-constraints",
      children: "Resource constraints"
    }), "\n", jsx(_components.p, {
      children: "It will be useful to constrain the execution to prevent resource exhaustion.\nRelevant resources could include:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["CPU and memory available on the machine running the commands. ", jsx(_components.code, {
          children: "jj run"
        }), ' can\nprovide some simple mitigations like limiting parallelism to "number of CPUs"\nby default, and limiting parallelism by dividing "available memory" by some\nestimate or measurement of per-invocation memory use of the commands.']
      }), "\n", jsx(_components.li, {
        children: "External resources that are not immediately known to jj. For example,\ncommands run in parallel may wish to limit the total number of connections\nto a server. We might choose to defer any handling of this to the\nimplementation of the command being invoked, instead of trying to\ncommunicate that information to jj."
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "command-options",
      children: "Command Options"
    }), "\n", jsxs(_components.p, {
      children: ["The base command of any jj command should be usable. By default ", jsx(_components.code, {
        children: "jj run"
      }), " works\non the ", jsx(_components.code, {
        children: "@"
      }), " the current working copy."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "--command, explicit name of the first argument"
      }), "\n", jsx(_components.li, {
        children: "-x, for git compatibility (may alias another command)"
      }), "\n", jsx(_components.li, {
        children: "-j, --jobs, the amount of parallelism to use"
      }), "\n", jsx(_components.li, {
        children: "-k, --keep-going, continue on failure (may alias another command)"
      }), "\n", jsx(_components.li, {
        children: "--show, display the diff for an affected revision"
      }), "\n", jsx(_components.li, {
        children: "--dry-run, do the command execution without doing any work, logging all\nintended files and arguments"
      }), "\n", jsx(_components.li, {
        children: "--rebase, rebase all parents on the consulitng diff (may alias another\ncommand)"
      }), "\n", jsx(_components.li, {
        children: "--reparent, change the parent of an effected revision to the new change\n(may alias another command)"
      }), "\n", jsx(_components.li, {
        children: "--clean, remove existing workspaces and remove the ignored files"
      }), "\n", jsx(_components.li, {
        children: "--readonly, ignore changes across multiple run invocations"
      }), "\n", jsxs(_components.li, {
        children: ["--error-strategy=", jsx(_components.code, {
          children: "continue|stop|fatal"
        }), ", see ", jsx(_components.a, {
          href: "#dealing-with-failure",
          children: "Dealing with failure"
        })]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "integrating-with-other-commands",
      children: "Integrating with other commands"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj log"
      }), ": No special handling needed\n", jsx(_components.code, {
        children: "jj diff"
      }), ": No special handling needed\n", jsx(_components.code, {
        children: "jj st"
      }), ": For now reprint the final output of ", jsx(_components.code, {
        children: "jj run"
      }), "\n", jsx(_components.code, {
        children: "jj op log"
      }), ": No special handling needed, but awaits further discussion in\n", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/issues/963",
        children: "#963"
      }), "\n", jsx(_components.code, {
        children: "jj undo/jj op revert"
      }), ": No special handling needed"]
    }), "\n", jsx(_components.h2, {
      id: "open-points",
      children: "Open Points"
    }), "\n", jsx(_components.p, {
      children: "Should the command be working copy backend specific?\nHow do we manage the Processes which the command will spawn?\nConfiguration options, User and Repository Wide?"
    }), "\n", jsx(_components.h2, {
      id: "future-possibilities",
      children: "Future possibilities"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "We could rewrite the file in memory, which is a neat optimization"
      }), "\n", jsx(_components.li, {
        children: "Exposing some internal state, to allow preciser resource constraints"
      }), "\n", jsx(_components.li, {
        children: "Integration options for virtual filesystems, which allow them to cache the\nneeded working copies."
      }), "\n", jsx(_components.li, {
        children: "A Jujutsu wide concept for a cached working copy, as they could be expensive\nto materialize."
      }), "\n", jsxs(_components.li, {
        children: ["Customized failure messages, this maybe useful for bots, it could be similar\nto Bazel's ", jsx(_components.code, {
          children: 'select(..., message = "arch not supported for $project")'
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: ["Make ", jsx(_components.code, {
          children: "jj run"
        }), " asynchronous by spawning a ", jsx(_components.code, {
          children: "main"
        }), " process, directly return to the\nuser and incrementally updating the output of ", jsx(_components.code, {
          children: "jj st"
        }), "."]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

export { MDXContent as default, extractedReferences, frontmatter, structuredData, toc };
//# sourceMappingURL=run-DfuTEuwR.mjs.map
