import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Operation log"
};
let extractedReferences = [];
let structuredData = {
  "contents": [{
    "heading": "introduction",
    "content": 'Jujutsu records each operation that modifies the repo in the "operation log".\nYou can see the log with jj op log. Each operation object contains a snapshot\nof how the repo looked at the end of the operation. We call this snapshot a\n"view" object. The view contains information about where each bookmark, tag, and\nGit ref (in Git-backed repos) pointed, as well as the set of heads in the repo,\nand the current working-copy commit in each workspace. The operation object also\n(in addition to the view) contains pointers to the operation(s) immediately\nbefore it, as well as metadata about the operation, such as timestamps,\nusername, hostname, description.'
  }, {
    "heading": "introduction",
    "content": "The operation log allows you to undo operations one-by-one (jj undo) or even\nrevert a specific one which isn't the most recent operation (jj op revert). It\nalso lets you restore the entire repo to the way it looked at an earlier point\n(jj op restore)."
  }, {
    "heading": "introduction",
    "content": "When referring to operations, you can use @ to represent the current\noperation."
  }, {
    "heading": "introduction",
    "content": "The following operators are supported:"
  }, {
    "heading": "introduction",
    "content": "x-: Parents of x (e.g. @-)"
  }, {
    "heading": "introduction",
    "content": "x+: Children of x"
  }, {
    "heading": "divergent-operations",
    "content": "One benefit of the operation log (and the reason for its creation) is that it\nallows lock-free concurrency -- you can run concurrent jj commands without\ncorrupting the repo, even if you run the commands on different machines that\naccess the repo via a distributed file system (as long as the file system\nguarantees that a write is only visible once previous writes are visible). When\nyou run a jj command, it will start by loading the repo at the latest\noperation. It will not see any changes written by concurrent commands. If there\nare conflicts, you will be informed of them by subsequent jj st and/or\njj log commands."
  }, {
    "heading": "divergent-operations",
    "content": "As an example, let's say you had started editing the description of a change and\nthen also update the contents of the change (maybe because you had forgotten the\neditor). When you eventually close your editor, the command will succeed and\ne.g. jj log will indicate that the change has diverged."
  }, {
    "heading": "loading-an-old-version-of-the-repo",
    "content": "The top-level --at-operation/--at-op option allows you to load the repo at a\nspecific operation. This can be useful for understanding how your repo got into\nthe current state. It can be even more useful for understanding why someone\nelse's repo got into its current state."
  }, {
    "heading": "loading-an-old-version-of-the-repo",
    "content": "When you use --at-op, the automatic snapshotting of the working copy will not\ntake place. When referring to a revision with the @ symbol (as many commands\ndo by default), that will resolve to the working-copy commit recorded in the\noperation's view (which is actually how it always works -- it's just the\nsnapshotting that's skipped with --at-op)."
  }, {
    "heading": "loading-an-old-version-of-the-repo",
    "content": "As a top-level option, --at-op can be passed to any command. However, you\nwill typically only want to run read-only commands. For example, jj log,\njj st, and jj diff all make sense. It's still possible to run e.g.\njj --at-op=<some operation ID> describe. That's equivalent to having started\njj describe back when the specified operation was the most recent operation\nand then let it run until now (which can be done for that particular command by\nnot closing the editor). There's practically no good reason to do that other\nthan to simulate concurrent commands."
  }],
  "headings": [{
    "id": "introduction",
    "content": "Introduction"
  }, {
    "id": "divergent-operations",
    "content": "Divergent operations"
  }, {
    "id": "loading-an-old-version-of-the-repo",
    "content": "Loading an old version of the repo"
  }]
};
const toc = [{
  depth: 2,
  url: "#introduction",
  title: jsx(Fragment, {
    children: "Introduction"
  })
}, {
  depth: 2,
  url: "#divergent-operations",
  title: jsx(Fragment, {
    children: "Divergent operations"
  })
}, {
  depth: 2,
  url: "#loading-an-old-version-of-the-repo",
  title: jsx(Fragment, {
    children: "Loading an old version of the repo"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", jsxs(_components.p, {
      children: ['Jujutsu records each operation that modifies the repo in the "operation log".\nYou can see the log with ', jsx(_components.code, {
        children: "jj op log"
      }), '. Each operation object contains a snapshot\nof how the repo looked at the end of the operation. We call this snapshot a\n"view" object. The view contains information about where each bookmark, tag, and\nGit ref (in Git-backed repos) pointed, as well as the set of heads in the repo,\nand the current working-copy commit in each workspace. The operation object also\n(in addition to the view) contains pointers to the operation(s) immediately\nbefore it, as well as metadata about the operation, such as timestamps,\nusername, hostname, description.']
    }), "\n", jsxs(_components.p, {
      children: ["The operation log allows you to undo operations one-by-one (", jsx(_components.code, {
        children: "jj undo"
      }), ") or even\nrevert a specific one which isn't the most recent operation (", jsx(_components.code, {
        children: "jj op revert"
      }), "). It\nalso lets you restore the entire repo to the way it looked at an earlier point\n(", jsx(_components.code, {
        children: "jj op restore"
      }), ")."]
    }), "\n", jsxs(_components.p, {
      children: ["When referring to operations, you can use ", jsx(_components.code, {
        children: "@"
      }), " to represent the current\noperation."]
    }), "\n", jsx(_components.p, {
      children: "The following operators are supported:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x-"
        }), ": Parents of ", jsx(_components.code, {
          children: "x"
        }), " (e.g. ", jsx(_components.code, {
          children: "@-"
        }), ")"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x+"
        }), ": Children of ", jsx(_components.code, {
          children: "x"
        })]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "divergent-operations",
      children: "Divergent operations"
    }), "\n", jsxs(_components.p, {
      children: ["One benefit of the operation log (and the reason for its creation) is that it\nallows lock-free concurrency -- you can run concurrent ", jsx(_components.code, {
        children: "jj"
      }), " commands without\ncorrupting the repo, even if you run the commands on different machines that\naccess the repo via a distributed file system (as long as the file system\nguarantees that a write is only visible once previous writes are visible). When\nyou run a ", jsx(_components.code, {
        children: "jj"
      }), " command, it will start by loading the repo at the latest\noperation. It will not see any changes written by concurrent commands. If there\nare conflicts, you will be informed of them by subsequent ", jsx(_components.code, {
        children: "jj st"
      }), " and/or\n", jsx(_components.code, {
        children: "jj log"
      }), " commands."]
    }), "\n", jsxs(_components.p, {
      children: ["As an example, let's say you had started editing the description of a change and\nthen also update the contents of the change (maybe because you had forgotten the\neditor). When you eventually close your editor, the command will succeed and\ne.g. ", jsx(_components.code, {
        children: "jj log"
      }), " will indicate that the change has diverged."]
    }), "\n", jsx(_components.h2, {
      id: "loading-an-old-version-of-the-repo",
      children: "Loading an old version of the repo"
    }), "\n", jsxs(_components.p, {
      children: ["The top-level ", jsx(_components.code, {
        children: "--at-operation/--at-op"
      }), " option allows you to load the repo at a\nspecific operation. This can be useful for understanding how your repo got into\nthe current state. It can be even more useful for understanding why someone\nelse's repo got into its current state."]
    }), "\n", jsxs(_components.p, {
      children: ["When you use ", jsx(_components.code, {
        children: "--at-op"
      }), ", the automatic snapshotting of the working copy will not\ntake place. When referring to a revision with the ", jsx(_components.code, {
        children: "@"
      }), " symbol (as many commands\ndo by default), that will resolve to the working-copy commit recorded in the\noperation's view (which is actually how it always works -- it's just the\nsnapshotting that's skipped with ", jsx(_components.code, {
        children: "--at-op"
      }), ")."]
    }), "\n", jsxs(_components.p, {
      children: ["As a top-level option, ", jsx(_components.code, {
        children: "--at-op"
      }), " can be passed to any command. However, you\nwill typically only want to run read-only commands. For example, ", jsx(_components.code, {
        children: "jj log"
      }), ",\n", jsx(_components.code, {
        children: "jj st"
      }), ", and ", jsx(_components.code, {
        children: "jj diff"
      }), " all make sense. It's still possible to run e.g.\n", jsx(_components.code, {
        children: "jj --at-op=<some operation ID> describe"
      }), ". That's equivalent to having started\n", jsx(_components.code, {
        children: "jj describe"
      }), " back when the specified operation was the most recent operation\nand then let it run until now (which can be done for that particular command by\nnot closing the editor). There's practically no good reason to do that other\nthan to simulate concurrent commands."]
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
//# sourceMappingURL=operation-log-DEJpl5lj.mjs.map
