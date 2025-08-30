import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Comparison with Git"
};
let extractedReferences = [{
  "href": "/comparisons/git-compatibility"
}, {
  "href": "/comparisons/git-command-table"
}, {
  "href": "/comparisons/git-command-table"
}, {
  "href": "/concepts/working-copy"
}, {
  "href": "#the-index"
}, {
  "href": "/concepts/glossary#bookmark"
}, {
  "href": "/concepts/conflicts"
}, {
  "href": "/concepts/bookmarks"
}, {
  "href": "/concepts/operation-log"
}, {
  "href": "https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified"
}];
let structuredData = {
  "contents": [{
    "heading": "introduction",
    "content": "This document attempts to describe how Jujutsu is different from Git. See\nthe Git-compatibility doc for information about how\nthe jj command interoperates with Git repos. See\nthe Git command table for a table of similar commands."
  }, {
    "heading": "overview",
    "content": "Here is a list of conceptual differences between Jujutsu and Git, along with\nlinks to more details where applicable and available. There's a\ntable explaining how to achieve various use cases."
  }, {
    "heading": "overview",
    "content": "The working copy is automatically committed. That results in a simpler and\nmore consistent CLI because the working copy is now treated like any other\ncommit. Details."
  }, {
    "heading": "overview",
    "content": "There's no index (staging area). Because the working copy is automatically\ncommitted, an index-like concept doesn't make sense. The index is very similar\nto an intermediate commit between HEAD and the working copy, so workflows\nthat depend on it can be modeled using proper commits instead. Jujutsu has\nexcellent support for moving changes between commits. Details."
  }, {
    "heading": "overview",
    "content": `No need for branch names (but they are supported as
bookmarks). Git lets you check out a commit without
attaching a branch to it. It calls this state "detached HEAD". This is the
normal state in Jujutsu (there's actually no way -- yet, at least -- to have
an active branch/bookmark). However, Jujutsu keeps track of all visible heads
(leaves) of the commit graph, so the commits won't get lost or
garbage-collected.`
  }, {
    "heading": "overview",
    "content": "No current branch. Git lets you check out a branch, making it the 'current\nbranch', and new commits will automatically update the branch. This is\nnecessary in Git because Git might otherwise lose track of the new commits."
  }, {
    "heading": "overview",
    "content": "Jujutsu does not have a corresponding concept of a 'current bookmark';\ninstead, you update bookmarks manually. For example, if you start work on top\nof a commit with a bookmark, new commits are created on top of the bookmark,\nthen you issue a later command to update the bookmark."
  }, {
    "heading": "overview",
    "content": "Conflicts can be committed. No commands fail because of merge conflicts.\nThe conflicts are instead recorded in commits and you can resolve them later.\nDetails."
  }, {
    "heading": "overview",
    "content": "Descendant commits are automatically rebased. Whenever you rewrite a\ncommit (e.g. by running jj rebase), all its descendants commits will\nautomatically be rebased on top. Branches pointing to it will also get\nupdated, and so will the working copy if it points to any of the rebased\ncommits."
  }, {
    "heading": "overview",
    "content": "Bookmarks/branches are identified by their names (across remotes). For\nexample, if you pull from a remote that has a main branch, you'll get a\nbookmark by that name in your local repo. If you then move it and push back to\nthe remote, the main branch on the remote will be updated.\nDetails."
  }, {
    "heading": "overview",
    "content": "The operation log replaces reflogs. The operation log is similar to\nreflogs, but is much more powerful. It keeps track of atomic updates to all\nrefs at once (Jujutsu thus improves on Git's per-ref history much in the same\nway that Subversion improved on RCS's per-file history). The operation log\npowers e.g. the undo functionality. Details."
  }, {
    "heading": "overview",
    "content": `There's a single, virtual root commit. Like Mercurial, Jujutsu has a
virtual commit (with a hash consisting of only zeros) called the "root commit"
(called the "null revision" in Mercurial). This commit is a common ancestor of
all commits. That removes the awkward state Git calls the "unborn branch"
state (which is the state a newly initialized Git repo is in), and related
command-line flags (e.g. git rebase --root, git checkout --orphan).`
  }, {
    "heading": "the-index",
    "content": `Git's "index" has
multiple roles. One role is as a cache of file system information. Jujutsu has
something similar. Unfortunately, Git exposes the index to the user, which makes
the CLI unnecessarily complicated (learning what the different flavors of
git reset do, especially when combined with commits and/or paths, usually
takes a while). Jujutsu, like Mercurial, doesn't make that mistake.`
  }, {
    "heading": "the-index",
    "content": "As a Git power-user, you may think that you need the power of the index to\ncommit only part of the working copy. However, Jujutsu provides commands for\nmore directly achieving most use cases you're used to using Git's index for. For\nexample, to create a commit from part of the changes in the working copy, you\nmight be used to using git add -p; git commit. With Jujutsu, you'd instead\nuse jj split to split the working-copy commit into two commits. To add more\nchanges into the parent commit, which you might normally use\ngit add -p; git commit --amend for, you can instead use jj squash -i to\nchoose which changes to move into the parent commit, or jj squash <file> to\nmove a specific file."
  }],
  "headings": [{
    "id": "introduction",
    "content": "Introduction"
  }, {
    "id": "overview",
    "content": "Overview"
  }, {
    "id": "the-index",
    "content": "The index"
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
  url: "#overview",
  title: jsx(Fragment, {
    children: "Overview"
  })
}, {
  depth: 2,
  url: "#the-index",
  title: jsx(Fragment, {
    children: "The index"
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
      children: ["This document attempts to describe how Jujutsu is different from Git. See\n", jsx(_components.a, {
        href: "/comparisons/git-compatibility",
        children: "the Git-compatibility doc"
      }), " for information about how\nthe ", jsx(_components.code, {
        children: "jj"
      }), " command interoperates with Git repos. See\n", jsx(_components.a, {
        href: "/comparisons/git-command-table",
        children: "the Git command table"
      }), " for a table of similar commands."]
    }), "\n", jsx(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", jsxs(_components.p, {
      children: ["Here is a list of conceptual differences between Jujutsu and Git, along with\nlinks to more details where applicable and available. There's a\n", jsx(_components.a, {
        href: "/comparisons/git-command-table",
        children: "table"
      }), " explaining how to achieve various use cases."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "The working copy is automatically committed."
          }), " That results in a simpler and\nmore consistent CLI because the working copy is now treated like any other\ncommit. ", jsx(_components.a, {
            href: "/concepts/working-copy",
            children: "Details"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "There's no index (staging area)."
          }), " Because the working copy is automatically\ncommitted, an index-like concept doesn't make sense. The index is very similar\nto an intermediate commit between ", jsx(_components.code, {
            children: "HEAD"
          }), " and the working copy, so workflows\nthat depend on it can be modeled using proper commits instead. Jujutsu has\nexcellent support for moving changes between commits. ", jsx(_components.a, {
            href: "#the-index",
            children: "Details"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsxs(_components.strong, {
            children: ["No need for branch names (but they are supported as\n", jsx(_components.a, {
              href: "/concepts/glossary#bookmark",
              children: "bookmarks"
            }), ")."]
          }), ` Git lets you check out a commit without
attaching a branch to it. It calls this state "detached HEAD". This is the
normal state in Jujutsu (there's actually no way -- yet, at least -- to have
an active branch/bookmark). However, Jujutsu keeps track of all visible heads
(leaves) of the commit graph, so the commits won't get lost or
garbage-collected.`]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "No current branch."
          }), " Git lets you check out a branch, making it the 'current\nbranch', and new commits will automatically update the branch. This is\nnecessary in Git because Git might otherwise lose track of the new commits."]
        }), "\n", jsx(_components.p, {
          children: "Jujutsu does not have a corresponding concept of a 'current bookmark';\ninstead, you update bookmarks manually. For example, if you start work on top\nof a commit with a bookmark, new commits are created on top of the bookmark,\nthen you issue a later command to update the bookmark."
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Conflicts can be committed."
          }), " No commands fail because of merge conflicts.\nThe conflicts are instead recorded in commits and you can resolve them later.\n", jsx(_components.a, {
            href: "/concepts/conflicts",
            children: "Details"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Descendant commits are automatically rebased."
          }), " Whenever you rewrite a\ncommit (e.g. by running ", jsx(_components.code, {
            children: "jj rebase"
          }), "), all its descendants commits will\nautomatically be rebased on top. Branches pointing to it will also get\nupdated, and so will the working copy if it points to any of the rebased\ncommits."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Bookmarks/branches are identified by their names (across remotes)."
          }), " For\nexample, if you pull from a remote that has a ", jsx(_components.code, {
            children: "main"
          }), " branch, you'll get a\nbookmark by that name in your local repo. If you then move it and push back to\nthe remote, the ", jsx(_components.code, {
            children: "main"
          }), " branch on the remote will be updated.\n", jsx(_components.a, {
            href: "/concepts/bookmarks",
            children: "Details"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "The operation log replaces reflogs."
          }), " The operation log is similar to\nreflogs, but is much more powerful. It keeps track of atomic updates to all\nrefs at once (Jujutsu thus improves on Git's per-ref history much in the same\nway that Subversion improved on RCS's per-file history). The operation log\npowers e.g. the undo functionality. ", jsx(_components.a, {
            href: "/concepts/operation-log",
            children: "Details"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "There's a single, virtual root commit."
          }), ' Like Mercurial, Jujutsu has a\nvirtual commit (with a hash consisting of only zeros) called the "root commit"\n(called the "null revision" in Mercurial). This commit is a common ancestor of\nall commits. That removes the awkward state Git calls the "unborn branch"\nstate (which is the state a newly initialized Git repo is in), and related\ncommand-line flags (e.g. ', jsx(_components.code, {
            children: "git rebase --root"
          }), ", ", jsx(_components.code, {
            children: "git checkout --orphan"
          }), ")."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "the-index",
      children: "The index"
    }), "\n", jsxs(_components.p, {
      children: ["Git's ", jsx(_components.a, {
        href: "https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified",
        children: '"index"'
      }), " has\nmultiple roles. One role is as a cache of file system information. Jujutsu has\nsomething similar. Unfortunately, Git exposes the index to the user, which makes\nthe CLI unnecessarily complicated (learning what the different flavors of\n", jsx(_components.code, {
        children: "git reset"
      }), " do, especially when combined with commits and/or paths, usually\ntakes a while). Jujutsu, like Mercurial, doesn't make that mistake."]
    }), "\n", jsxs(_components.p, {
      children: ["As a Git power-user, you may think that you need the power of the index to\ncommit only part of the working copy. However, Jujutsu provides commands for\nmore directly achieving most use cases you're used to using Git's index for. For\nexample, to create a commit from part of the changes in the working copy, you\nmight be used to using ", jsx(_components.code, {
        children: "git add -p; git commit"
      }), ". With Jujutsu, you'd instead\nuse ", jsx(_components.code, {
        children: "jj split"
      }), " to split the working-copy commit into two commits. To add more\nchanges into the parent commit, which you might normally use\n", jsx(_components.code, {
        children: "git add -p; git commit --amend"
      }), " for, you can instead use ", jsx(_components.code, {
        children: "jj squash -i"
      }), " to\nchoose which changes to move into the parent commit, or ", jsx(_components.code, {
        children: "jj squash <file>"
      }), " to\nmove a specific file."]
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
//# sourceMappingURL=git-Coiz0kim.mjs.map
