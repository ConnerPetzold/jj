import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Comparison with Sapling"
};
let extractedReferences = [{
  "href": "https://sapling-scm.com"
}, {
  "href": "https://www.mercurial-scm.org/"
}, {
  "href": "/reference/revsets"
}, {
  "href": "/reference/templates"
}, {
  "href": "/concepts/working-copy"
}, {
  "href": "/concepts/conflicts"
}, {
  "href": "/concepts/operation-log"
}, {
  "href": "https://sapling-scm.com/docs/internals/metalog"
}, {
  "href": "https://sapling-scm.com/docs/addons/isl"
}];
let structuredData = {
  "contents": [{
    "heading": "introduction",
    "content": "This document attempts to describe how jj is different\nfrom Sapling. Sapling is a VCS developed by Meta. It\nwas announced about 3 years after development started on jj. It is a heavily\nmodified fork of Mercurial. Because jj has\ncopied many ideas from Mercurial, there are many similarities between the two\ntools, such as:"
  }, {
    "heading": "introduction",
    "content": "A user-friendly CLI"
  }, {
    "heading": "introduction",
    "content": 'A "revset" language for selecting revisions'
  }, {
    "heading": "introduction",
    "content": 'Good support for working with stacked commits, including tracking "anonymous\nheads" (no "detached HEAD" state like in Git) and split commands, and\nautomatically rebasing descendant commits when you amend a commit.'
  }, {
    "heading": "introduction",
    "content": "Flexible customization of output using templates"
  }, {
    "heading": "differences",
    "content": "Here is a list of some differences between jj and Sapling."
  }, {
    "heading": "differences",
    "content": "Working copy: When using Sapling (like most VCSs), the\nuser explicitly tells the tool when to create a commit and which files to\ninclude. When using jj, the working copy\nis automatically snapshotted by every command. New files\nare automatically tracked and deleted files are automatically untracked. This\nhas several advantages:"
  }, {
    "heading": "differences",
    "content": "The working copy is effectively backed up every time you run a command."
  }, {
    "heading": "differences",
    "content": 'No commands fail because you have changes in the working copy ("abort: 1\nconflicting file changes: ..."). No need for sl shelve.'
  }, {
    "heading": "differences",
    "content": "Simpler and more consistent CLI because the working copy is treated like any\nother commit."
  }, {
    "heading": "differences",
    "content": "Conflicts: Like most VCSs, Sapling requires the user to\nresolve conflicts before committing. jj lets\nyou commit conflicts. Note that it's a representation of the\nconflict that's committed, not conflict markers (<<<<<<< etc.). This also\nhas several advantages:"
  }, {
    "heading": "differences",
    "content": "Merge conflicts won't prevent you from checking out another commit."
  }, {
    "heading": "differences",
    "content": "You can resolve the conflicts when you feel like it."
  }, {
    "heading": "differences",
    "content": "Rebasing descendants always succeeds. Like jj, Sapling automatically\nrebases, but it will fail if there are conflicts."
  }, {
    "heading": "differences",
    "content": "Merge commits can be rebased correctly (Sapling sometimes fails)."
  }, {
    "heading": "differences",
    "content": "You can rebase conflicts and conflict resolutions."
  }, {
    "heading": "differences",
    "content": "Undo: jj's undo is powered by the operation log, which\nrecords how the repo has changed over time. Sapling has a similar feature\nwith its MetaLog.\nThey seem to provide similar functionality, but jj also exposes the log to the\nuser via jj op log, so you can tell how far back you want to go back.\nSapling has sl debugmetalog, but that seems to show the history of a single\ncommit, not the whole repo's history. Thanks to jj snapshotting the working\ncopy, it's possible to undo changes to the working copy. For example, if\nyou jj undo a  jj commit, jj diff will show the same changes as\nbefore jj commit, but if you sl undo a sl commit, the working copy will\nbe clean."
  }, {
    "heading": "differences",
    "content": "Git interop: Sapling supports cloning, pushing, and pulling from a remote\nGit repo. jj also does, and it also supports sharing a working copy with a Git\nrepo, so you can use jj and git interchangeably in the same repo."
  }, {
    "heading": "differences",
    "content": "Polish: Sapling is more polished and feature-complete. Sapling has very\nnice built-in web UI called\nInteractive Smartlog, which lets\nyou drag and drop commits to rebase them, among other things."
  }, {
    "heading": "differences",
    "content": "Forge workflow: Sapling has sl pr submit --stack, which lets you\npush a stack of commits as separate GitHub PRs, including setting the base\nbranch. It only supports GitHub. jj doesn't have any direct integration with\nGitHub or any other forge. However, it has jj git push --change for\nautomatically creating branches for specified commits. You have to specify\neach commit you want to create a branch for by using\njj git push --change X --change Y ..., and you have to manually set up any\nbase branches in GitHub's UI (or GitLab's or ...). On subsequent pushes, you\ncan update all at once by specifying something like jj git push -r main..@\n(to push all branches on the current stack of commits from where it forked\nfrom main)."
  }],
  "headings": [{
    "id": "introduction",
    "content": "Introduction"
  }, {
    "id": "differences",
    "content": "Differences"
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
  url: "#differences",
  title: jsx(Fragment, {
    children: "Differences"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", jsxs(_components.p, {
      children: ["This document attempts to describe how jj is different\nfrom ", jsx(_components.a, {
        href: "https://sapling-scm.com",
        children: "Sapling"
      }), ". Sapling is a VCS developed by Meta. It\nwas announced about 3 years after development started on jj. It is a heavily\nmodified fork of ", jsx(_components.a, {
        href: "https://www.mercurial-scm.org/",
        children: "Mercurial"
      }), ". Because jj has\ncopied many ideas from Mercurial, there are many similarities between the two\ntools, such as:"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "A user-friendly CLI"
      }), "\n", jsxs(_components.li, {
        children: ['A "', jsx(_components.a, {
          href: "/reference/revsets",
          children: "revset"
        }), '" language for selecting revisions']
      }), "\n", jsxs(_components.li, {
        children: ['Good support for working with stacked commits, including tracking "anonymous\nheads" (no "detached HEAD" state like in Git) and ', jsx(_components.code, {
          children: "split"
        }), " commands, and\nautomatically rebasing descendant commits when you amend a commit."]
      }), "\n", jsxs(_components.li, {
        children: ["Flexible customization of output using ", jsx(_components.a, {
          href: "/reference/templates",
          children: "templates"
        })]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "differences",
      children: "Differences"
    }), "\n", jsx(_components.p, {
      children: "Here is a list of some differences between jj and Sapling."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Working copy:"
          }), " When using Sapling (like most VCSs), the\nuser explicitly tells the tool when to create a commit and which files to\ninclude. When using jj, the working copy\nis ", jsx(_components.a, {
            href: "/concepts/working-copy",
            children: "automatically snapshotted by every command"
          }), ". New files\nare automatically tracked and deleted files are automatically untracked. This\nhas several advantages:"]
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "The working copy is effectively backed up every time you run a command."
          }), "\n", jsxs(_components.li, {
            children: ['No commands fail because you have changes in the working copy ("abort: 1\nconflicting file changes: ..."). No need for ', jsx(_components.code, {
              children: "sl shelve"
            }), "."]
          }), "\n", jsx(_components.li, {
            children: "Simpler and more consistent CLI because the working copy is treated like any\nother commit."
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Conflicts:"
          }), " Like most VCSs, Sapling requires the user to\nresolve conflicts before committing. jj lets\nyou ", jsx(_components.a, {
            href: "/concepts/conflicts",
            children: "commit conflicts"
          }), ". Note that it's a representation of the\nconflict that's committed, not conflict markers (", jsx(_components.code, {
            children: "<<<<<<<"
          }), " etc.). This also\nhas several advantages:"]
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "Merge conflicts won't prevent you from checking out another commit."
          }), "\n", jsx(_components.li, {
            children: "You can resolve the conflicts when you feel like it."
          }), "\n", jsx(_components.li, {
            children: "Rebasing descendants always succeeds. Like jj, Sapling automatically\nrebases, but it will fail if there are conflicts."
          }), "\n", jsx(_components.li, {
            children: "Merge commits can be rebased correctly (Sapling sometimes fails)."
          }), "\n", jsx(_components.li, {
            children: "You can rebase conflicts and conflict resolutions."
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Undo:"
          }), " jj's undo is powered by ", jsx(_components.a, {
            href: "/concepts/operation-log",
            children: "the operation log"
          }), ", which\nrecords how the repo has changed over time. Sapling has a similar feature\nwith its ", jsx(_components.a, {
            href: "https://sapling-scm.com/docs/internals/metalog",
            children: "MetaLog"
          }), ".\nThey seem to provide similar functionality, but jj also exposes the log to the\nuser via ", jsx(_components.code, {
            children: "jj op log"
          }), ", so you can tell how far back you want to go back.\nSapling has ", jsx(_components.code, {
            children: "sl debugmetalog"
          }), ", but that seems to show the history of a single\ncommit, not the whole repo's history. Thanks to jj snapshotting the working\ncopy, it's possible to undo changes to the working copy. For example, if\nyou ", jsx(_components.code, {
            children: "jj undo"
          }), " a ", jsx(_components.code, {
            children: " jj commit"
          }), ", ", jsx(_components.code, {
            children: "jj diff"
          }), " will show the same changes as\nbefore ", jsx(_components.code, {
            children: "jj commit"
          }), ", but if you ", jsx(_components.code, {
            children: "sl undo"
          }), " a ", jsx(_components.code, {
            children: "sl commit"
          }), ", the working copy will\nbe clean."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Git interop:"
          }), " Sapling supports cloning, pushing, and pulling from a remote\nGit repo. jj also does, and it also supports sharing a working copy with a Git\nrepo, so you can use ", jsx(_components.code, {
            children: "jj"
          }), " and ", jsx(_components.code, {
            children: "git"
          }), " interchangeably in the same repo."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Polish:"
          }), " Sapling is more polished and feature-complete. Sapling has very\nnice built-in web UI called\n", jsx(_components.a, {
            href: "https://sapling-scm.com/docs/addons/isl",
            children: "Interactive Smartlog"
          }), ", which lets\nyou drag and drop commits to rebase them, among other things."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Forge workflow:"
          }), " Sapling has ", jsx(_components.code, {
            children: "sl pr submit --stack"
          }), ", which lets you\npush a stack of commits as separate GitHub PRs, including setting the base\nbranch. It only supports GitHub. jj doesn't have any direct integration with\nGitHub or any other forge. However, it has ", jsx(_components.code, {
            children: "jj git push --change"
          }), " for\nautomatically creating branches for specified commits. You have to specify\neach commit you want to create a branch for by using\n", jsx(_components.code, {
            children: "jj git push --change X --change Y ..."
          }), ", and you have to manually set up any\nbase branches in GitHub's UI (or GitLab's or ...). On subsequent pushes, you\ncan update all at once by specifying something like ", jsx(_components.code, {
            children: "jj git push -r main..@"
          }), "\n(to push all branches on the current stack of commits from where it forked\nfrom ", jsx(_components.code, {
            children: "main"
          }), ")."]
        }), "\n"]
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
//# sourceMappingURL=sapling-cDx9TRBY.mjs.map
