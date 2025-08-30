import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Glossary"
};
let extractedReferences = [{
  "href": "#bookmark"
}, {
  "href": "#view"
}, {
  "href": "#head"
}, {
  "href": "#operation-log"
}, {
  "href": "#commit"
}, {
  "href": "#branch"
}, {
  "href": "https://wiki.mercurial-scm.org/Bookmarks"
}, {
  "href": "/concepts/bookmarks"
}, {
  "href": "#rewrite"
}, {
  "href": "#anonymous-branch"
}, {
  "href": "#bookmark"
}, {
  "href": "#rewrite"
}, {
  "href": "#change"
}, {
  "href": "#tree"
}, {
  "href": "https://en.wikipedia.org/wiki/Directed_acyclic_graph"
}, {
  "href": "#commit"
}, {
  "href": "#backend"
}, {
  "href": "git-compatibility#colocated-jujutsugit-repos"
}, {
  "href": "/concepts/conflicts"
}, {
  "href": "#bookmark"
}, {
  "href": "bookmarks#conflicts"
}, {
  "href": "#change"
}, {
  "href": "#divergent-change"
}, {
  "href": "#change"
}, {
  "href": "#visible-commits"
}, {
  "href": "revsets#functions"
}, {
  "href": "#view"
}, {
  "href": "#operation"
}, {
  "href": "https://git-scm.com/book/en/v2/Git-Internals-Git-References#ref_the_ref"
}, {
  "href": "#visible-commits"
}, {
  "href": "#visible-commits"
}, {
  "href": "#bookmark"
}, {
  "href": "#view"
}, {
  "href": "https://en.wikipedia.org/wiki/Directed_acyclic_graph"
}, {
  "href": "#operation"
}, {
  "href": "#operation"
}, {
  "href": "#commit"
}, {
  "href": "https://github.com"
}, {
  "href": "https://gitlab.com"
}, {
  "href": "https://codeberg.org/"
}, {
  "href": "#commit"
}, {
  "href": "/reference/revsets"
}, {
  "href": "#commit-id"
}, {
  "href": "#change-id"
}, {
  "href": "#revset"
}, {
  "href": "bookmarks#terminology-summary"
}, {
  "href": "#view"
}, {
  "href": "#change-id"
}, {
  "href": "#rewrite"
}, {
  "href": "#commit-id"
}, {
  "href": "#visible-commits"
}, {
  "href": "#tree"
}, {
  "href": "#operation"
}, {
  "href": "#commit"
}, {
  "href": "#working-copy"
}, {
  "href": "#repository"
}, {
  "href": "#commit"
}, {
  "href": "#operation"
}, {
  "href": "working-copy#workspaces"
}, {
  "href": "#working-copy-commit"
}, {
  "href": "/concepts/working-copy"
}, {
  "href": "#workspace"
}, {
  "href": "#operation-log"
}];
let structuredData = {
  "contents": [{
    "heading": "anonymous-branch",
    "content": "An anonymous branch is a chain of commits that doesn't necessarily have any\nbookmarks pointing to it or to any of its descendants. Unlike Git,\nJujutsu keeps commits on anonymous branches around until they are explicitly\nabandoned. Visible anonymous branches are tracked by the view, which\nstores a list of heads of such branches."
  }, {
    "heading": "backend",
    "content": "A backend is an implementation of the storage layer. There is currently only one\nproduction-ready builtin commit backend: the Git backend. The Git backend stores\ncommits in a Git repository. There are several backends used for testing. Google\nalso has its own cloud-based backend."
  }, {
    "heading": "backend",
    "content": 'There are also pluggable backends for storing other information than commits,\nsuch as the "operation store backend" for storing\nthe operation log.'
  }, {
    "heading": "bookmark",
    "content": "A bookmark is a named pointer to a commit. They are similar to Git's\nbranches and even more similar to Mercurial's\nbookmarks. See here\nfor details."
  }, {
    "heading": "bookmark",
    "content": 'Unlike in Git, there is no concept of a "current bookmark"; bookmarks do not\nmove when you create a new commit. Bookmarks do automatically follow the\ncommit if it gets rewritten.'
  }, {
    "heading": "branch",
    "content": `In the context of jj, the work "branch" usually refers to an anonymous
branch or, less formally, a branch of the commit "tree"
(which is itself an informal way to refer to the commit graph, parts of which
might resemble a tree even when it's not mathematically a tree).`
  }, {
    "heading": "branch",
    "content": "We also sometimes discuss Git's branches and branches on Git remotes. Locally,\nthese correspond to bookmarks. In a colocated repository, each\nlocal Git branch corresponds to a jj bookmark."
  }, {
    "heading": "change",
    "content": "A change is a commit as it evolves over time. Changes themselves\ndon't exist as an object in the data model; only the change ID does. The change\nID is a property of a commit."
  }, {
    "heading": "change-id",
    "content": 'A change ID is a unique identifier for a change. They are typically\n16 bytes long and are often randomly generated. By default, jj log presents\nthem as a sequence of 12 letters in the k-z range, at the beginning of a line.\nThese are actually hexadecimal numbers that use "digits" z-k instead of 0-9a-f.'
  }, {
    "heading": "commit",
    "content": "A snapshot of the files in the repository at a given point in time (technically\na tree object), together with some metadata. The metadata includes the\nauthor, the date, and pointers to the commit's parents. Through the pointers to\nthe parents, the commits form a\nDirected Acyclic Graph (DAG)\n."
  }, {
    "heading": "commit",
    "content": "Note that even though commits are stored as snapshots, they are often treated\nas differences between snapshots, namely compared to their parent's snapshot. If\nthey have more than one parent, then the difference is computed against the\nresult of merging the parents. For example, jj diff will show the differences\nintroduced by a commit compared to its parent(s), and jj rebase will apply\nthose changes onto another base commit."
  }, {
    "heading": "commit",
    "content": 'The word "revision" is used as a synonym for "commit".'
  }, {
    "heading": "commit-id",
    "content": "A commit ID is a unique identifier for a commit. They are 20 bytes\nlong when using the Git backend. They are presented in regular hexadecimal\nformat at the end of the line in jj log, using 12 hexadecimal digits by\ndefault. When using the Git backend, the commit ID is the Git commit ID."
  }, {
    "heading": "colocated-repos",
    "content": "When using the Git backend and the backing Git repository's .git/\ndirectory is a sibling of .jj/, we call the repository colocated. Most\ntools designed for Git can be easily used on such repositories. jj and git\ncommands can be used interchangeably."
  }, {
    "heading": "colocated-repos",
    "content": "See here for details."
  }, {
    "heading": "conflict",
    "content": 'Conflicts can occur in many places. The most common type is conflicts in files.\nThose are the conflicts that users coming from other VCSs are usually familiar\nwith. You can see them in jj status and in jj log (the red "conflict"\nlabel at the end of the line). See here for details.'
  }, {
    "heading": "conflict",
    "content": "Conflicts can also occur in bookmarks. For example, if you moved a\nbookmark locally, and it was also moved on the remote, then the bookmark will be\nin a conflicted state after you pull from the remote.\nSee here for details."
  }, {
    "heading": "conflict",
    "content": "Similar to a bookmark conflict, when a change is rewritten locally\nand remotely, for example, then the change will be in a conflicted state. We\ncall that a divergent change."
  }, {
    "heading": "divergent-change",
    "content": "A divergent change is a change that has more than one\nvisible commit."
  }, {
    "heading": "head",
    "content": "A head is a commit with no descendants. The context in which it has no\ndescendants varies. For example, the heads(X)\nrevset function returns commits that have no descendants\nwithin the set X itself. The view records which\nanonymous heads (heads without a bookmark pointing to them) are visible at a\ngiven operation. Note that this is quite different from Git's\nHEAD."
  }, {
    "heading": "hidden-commits-abandoned-commits",
    "content": "See visible commits."
  }, {
    "heading": "operation",
    "content": "A snapshot of the visible commits and bookmarks\nat a given point in time (technically a view object), together with\nsome metadata. The metadata includes the username, hostname, timestamps, and\npointers to the operation's parents."
  }, {
    "heading": "operation-log",
    "content": `The operation log is the
DAG formed by
operation objects, much in the same way that commits form a DAG,
which is sometimes called the "commit history". When operations happen in
sequence, they form a single line in the graph. Operations that happen
concurrently from jj's perspective result in forks and merges in the DAG.`
  }, {
    "heading": "repository",
    "content": "Basically everything under .jj/, i.e. the full set of operations\nand commits."
  }, {
    "heading": "remote",
    "content": "A remote is a reference to a copy of your repository. The most common case is\nthat the remote is hosted on the internet or another network, but local remotes\nare also possible. Remotes are useful when working on a project with multiple\ncollaborators. As Jujutsu is compatible with Git you can use all popular\nproviders that are also available for Git. For example\nGitHub, GitLab or\nCodeberg."
  }, {
    "heading": "revision",
    "content": "A synonym for Commit."
  }, {
    "heading": "revset",
    "content": 'Jujutsu supports a functional language for selecting a set of revisions.\nExpressions in this language are called "revsets". See here for\ndetails. We also often use the term "revset" for the set of revisions selected\nby a revset.'
  }, {
    "heading": "rewrite",
    "content": 'To "rewrite" a commit means to create a new version of that commit with\ndifferent contents, metadata (including parent pointers), or both. Rewriting a\ncommit results in a new commit, and thus a new commit ID, but the\nchange ID generally remains the same. Some examples of rewriting a\ncommit would be changing its description or rebasing it. Modifying the working\ncopy rewrites the working copy commit.'
  }, {
    "heading": "root-commit",
    "content": `The root commit is a virtual commit at the root of every repository. It has a
commit ID consisting of all '0's (00000000...) and a change ID consisting of
all 'z's (zzzzzzzz...). It can be referred to in revsets by the
function root(). Note that our definition of "root commit" is different from
Git's; Git's "root commits" are the first commit(s) in the repository, i.e. the
commits jj log -r 'root()+' will show.`
  }, {
    "heading": "tree",
    "content": "A tree object represents a snapshot of a directory in the repository. Tree\nobjects are defined recursively; each tree object only has the files and\ndirectories contained directly in the directory it represents."
  }, {
    "heading": "tracked-bookmarks-and-tracking-bookmarks",
    "content": 'A remote bookmark can be made "tracked" with the jj bookmark track command. This\nresults in a "tracking" local bookmark that tracks the remote bookmark.'
  }, {
    "heading": "tracked-bookmarks-and-tracking-bookmarks",
    "content": "See the bookmarks documentation for a more\ndetailed definition of these terms."
  }, {
    "heading": "visible-commits",
    "content": "Visible commits are the commits you see in jj log -r 'all()'. They are the\ncommits that are reachable from an anonymous head in the view.\nAncestors of a visible commit are implicitly visible."
  }, {
    "heading": "visible-commits",
    "content": `Intuitively, visible commits are the "latest versions" of a revision with a
given change id. A commit that's abandoned or
rewritten stops being visible and is labeled as "hidden". Such
commits are no longer accessible using a change id, but they are still
accessible by their commit id.`
  }, {
    "heading": "view",
    "content": "A view is a snapshot of bookmarks and their targets, anonymous heads,\nand working-copy commits. The anonymous heads define which commits\nare visible."
  }, {
    "heading": "view",
    "content": "A view object is similar to a tree object in that it represents a\nsnapshot without history, and an operation object is similar to a\ncommit object in that it adds metadata and history."
  }, {
    "heading": "workspace",
    "content": "A workspace is a working copy and an\nassociated repository. There can be multiple workspaces for a\nsingle repository. Each workspace has a .jj/ directory, but the\ncommits and operations will be stored in the initial\nworkspace; the other workspaces will have pointers to the initial workspace. See\nhere for details."
  }, {
    "heading": "workspace",
    "content": 'This is what Git calls a "worktree".'
  }, {
    "heading": "working-copy",
    "content": "The working copy contains the files you're currently working on. It is\nautomatically snapshot at the beginning of almost every jj command, thus\ncreating a new working-copy commit if any changes had\nbeen made in the working copy. Conversely, the working copy is automatically\nupdated to the state of the working-copy commit at the end of almost every jj\ncommand. See here for details."
  }, {
    "heading": "working-copy",
    "content": 'This is what Git calls a "working tree".'
  }, {
    "heading": "working-copy-commit",
    "content": "A commit that corresponds to the current state of the working copy. There is\none working-copy commit per workspace. The current working-copy\ncommits are tracked in the operation log."
  }],
  "headings": [{
    "id": "anonymous-branch",
    "content": "Anonymous branch"
  }, {
    "id": "backend",
    "content": "Backend"
  }, {
    "id": "bookmark",
    "content": "Bookmark"
  }, {
    "id": "branch",
    "content": "Branch"
  }, {
    "id": "change",
    "content": "Change"
  }, {
    "id": "change-id",
    "content": "Change ID"
  }, {
    "id": "commit",
    "content": "Commit"
  }, {
    "id": "commit-id",
    "content": "Commit ID"
  }, {
    "id": "colocated-repos",
    "content": "Colocated repos"
  }, {
    "id": "conflict",
    "content": "Conflict"
  }, {
    "id": "divergent-change",
    "content": "Divergent change"
  }, {
    "id": "head",
    "content": "Head"
  }, {
    "id": "hidden-commits-abandoned-commits",
    "content": "Hidden commits, abandoned commits"
  }, {
    "id": "operation",
    "content": "Operation"
  }, {
    "id": "operation-log",
    "content": "Operation log"
  }, {
    "id": "repository",
    "content": "Repository"
  }, {
    "id": "remote",
    "content": "Remote"
  }, {
    "id": "revision",
    "content": "Revision"
  }, {
    "id": "revset",
    "content": "Revset"
  }, {
    "id": "rewrite",
    "content": "Rewrite"
  }, {
    "id": "root-commit",
    "content": "Root commit"
  }, {
    "id": "tree",
    "content": "Tree"
  }, {
    "id": "tracked-bookmarks-and-tracking-bookmarks",
    "content": "Tracked bookmarks and tracking bookmarks"
  }, {
    "id": "visible-commits",
    "content": "Visible commits"
  }, {
    "id": "view",
    "content": "View"
  }, {
    "id": "workspace",
    "content": "Workspace"
  }, {
    "id": "working-copy",
    "content": "Working copy"
  }, {
    "id": "working-copy-commit",
    "content": "Working-copy commit"
  }]
};
const toc = [{
  depth: 2,
  url: "#anonymous-branch",
  title: jsx(Fragment, {
    children: "Anonymous branch"
  })
}, {
  depth: 2,
  url: "#backend",
  title: jsx(Fragment, {
    children: "Backend"
  })
}, {
  depth: 2,
  url: "#bookmark",
  title: jsx(Fragment, {
    children: "Bookmark"
  })
}, {
  depth: 2,
  url: "#branch",
  title: jsx(Fragment, {
    children: "Branch"
  })
}, {
  depth: 2,
  url: "#change",
  title: jsx(Fragment, {
    children: "Change"
  })
}, {
  depth: 2,
  url: "#change-id",
  title: jsx(Fragment, {
    children: "Change ID"
  })
}, {
  depth: 2,
  url: "#commit",
  title: jsx(Fragment, {
    children: "Commit"
  })
}, {
  depth: 2,
  url: "#commit-id",
  title: jsx(Fragment, {
    children: "Commit ID"
  })
}, {
  depth: 2,
  url: "#colocated-repos",
  title: jsx(Fragment, {
    children: "Colocated repos"
  })
}, {
  depth: 2,
  url: "#conflict",
  title: jsx(Fragment, {
    children: "Conflict"
  })
}, {
  depth: 2,
  url: "#divergent-change",
  title: jsx(Fragment, {
    children: "Divergent change"
  })
}, {
  depth: 2,
  url: "#head",
  title: jsx(Fragment, {
    children: "Head"
  })
}, {
  depth: 2,
  url: "#hidden-commits-abandoned-commits",
  title: jsx(Fragment, {
    children: "Hidden commits, abandoned commits"
  })
}, {
  depth: 2,
  url: "#operation",
  title: jsx(Fragment, {
    children: "Operation"
  })
}, {
  depth: 2,
  url: "#operation-log",
  title: jsx(Fragment, {
    children: "Operation log"
  })
}, {
  depth: 2,
  url: "#repository",
  title: jsx(Fragment, {
    children: "Repository"
  })
}, {
  depth: 2,
  url: "#remote",
  title: jsx(Fragment, {
    children: "Remote"
  })
}, {
  depth: 2,
  url: "#revision",
  title: jsx(Fragment, {
    children: "Revision"
  })
}, {
  depth: 2,
  url: "#revset",
  title: jsx(Fragment, {
    children: "Revset"
  })
}, {
  depth: 2,
  url: "#rewrite",
  title: jsx(Fragment, {
    children: "Rewrite"
  })
}, {
  depth: 2,
  url: "#root-commit",
  title: jsx(Fragment, {
    children: "Root commit"
  })
}, {
  depth: 2,
  url: "#tree",
  title: jsx(Fragment, {
    children: "Tree"
  })
}, {
  depth: 2,
  url: "#tracked-bookmarks-and-tracking-bookmarks",
  title: jsx(Fragment, {
    children: "Tracked bookmarks and tracking bookmarks"
  })
}, {
  depth: 2,
  url: "#visible-commits",
  title: jsx(Fragment, {
    children: "Visible commits"
  })
}, {
  depth: 2,
  url: "#view",
  title: jsx(Fragment, {
    children: "View"
  })
}, {
  depth: 2,
  url: "#workspace",
  title: jsx(Fragment, {
    children: "Workspace"
  })
}, {
  depth: 2,
  url: "#working-copy",
  title: jsx(Fragment, {
    children: "Working copy"
  })
}, {
  depth: 2,
  url: "#working-copy-commit",
  title: jsx(Fragment, {
    children: "Working-copy commit"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.h2, {
      id: "anonymous-branch",
      children: "Anonymous branch"
    }), "\n", jsxs(_components.p, {
      children: ["An anonymous branch is a chain of commits that doesn't necessarily have any\n", jsx(_components.a, {
        href: "#bookmark",
        children: "bookmarks"
      }), " pointing to it or to any of its descendants. Unlike Git,\nJujutsu keeps commits on anonymous branches around until they are explicitly\nabandoned. Visible anonymous branches are tracked by the ", jsx(_components.a, {
        href: "#view",
        children: "view"
      }), ", which\nstores a list of ", jsx(_components.a, {
        href: "#head",
        children: "heads"
      }), " of such branches."]
    }), "\n", jsx(_components.h2, {
      id: "backend",
      children: "Backend"
    }), "\n", jsx(_components.p, {
      children: "A backend is an implementation of the storage layer. There is currently only one\nproduction-ready builtin commit backend: the Git backend. The Git backend stores\ncommits in a Git repository. There are several backends used for testing. Google\nalso has its own cloud-based backend."
    }), "\n", jsxs(_components.p, {
      children: ['There are also pluggable backends for storing other information than commits,\nsuch as the "operation store backend" for storing\n', jsx(_components.a, {
        href: "#operation-log",
        children: "the operation log"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "bookmark",
      children: "Bookmark"
    }), "\n", jsxs(_components.p, {
      children: ["A bookmark is a named pointer to a ", jsx(_components.a, {
        href: "#commit",
        children: "commit"
      }), ". They are similar to Git's\n", jsx(_components.a, {
        href: "#branch",
        children: "branches"
      }), " and even more similar to ", jsx(_components.a, {
        href: "https://wiki.mercurial-scm.org/Bookmarks",
        children: "Mercurial's\nbookmarks"
      }), ". See ", jsx(_components.a, {
        href: "/concepts/bookmarks",
        children: "here"
      }), "\nfor details."]
    }), "\n", jsxs(_components.p, {
      children: ['Unlike in Git, there is no concept of a "current bookmark"; bookmarks ', jsx(_components.em, {
        children: "do not"
      }), "\nmove when you create a new commit. Bookmarks ", jsx(_components.em, {
        children: "do"
      }), " automatically follow the\ncommit if it gets ", jsx(_components.a, {
        href: "#rewrite",
        children: "rewritten"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "branch",
      children: "Branch"
    }), "\n", jsxs(_components.p, {
      children: ["In the context of ", jsx(_components.code, {
        children: "jj"
      }), ', the work "branch" usually refers to an ', jsx(_components.a, {
        href: "#anonymous-branch",
        children: "anonymous\nbranch"
      }), ` or, less formally, a branch of the commit "tree"
(which is itself an informal way to refer to the commit graph, parts of which
might resemble a tree even when it's not mathematically a tree).`]
    }), "\n", jsxs(_components.p, {
      children: ["We also sometimes discuss Git's branches and branches on Git remotes. Locally,\nthese correspond to ", jsx(_components.a, {
        href: "#bookmark",
        children: "bookmarks"
      }), ". In a colocated repository, each\nlocal Git branch corresponds to a ", jsx(_components.code, {
        children: "jj"
      }), " bookmark."]
    }), "\n", jsx(_components.h2, {
      id: "change",
      children: "Change"
    }), "\n", jsxs(_components.p, {
      children: ["A change is a commit as it ", jsx(_components.a, {
        href: "#rewrite",
        children: "evolves over time"
      }), ". Changes themselves\ndon't exist as an object in the data model; only the change ID does. The change\nID is a property of a commit."]
    }), "\n", jsx(_components.h2, {
      id: "change-id",
      children: "Change ID"
    }), "\n", jsxs(_components.p, {
      children: ["A change ID is a unique identifier for a ", jsx(_components.a, {
        href: "#change",
        children: "change"
      }), ". They are typically\n16 bytes long and are often randomly generated. By default, ", jsx(_components.code, {
        children: "jj log"
      }), ' presents\nthem as a sequence of 12 letters in the k-z range, at the beginning of a line.\nThese are actually hexadecimal numbers that use "digits" z-k instead of 0-9a-f.']
    }), "\n", jsx(_components.h2, {
      id: "commit",
      children: "Commit"
    }), "\n", jsxs(_components.p, {
      children: ["A snapshot of the files in the repository at a given point in time (technically\na ", jsx(_components.a, {
        href: "#tree",
        children: "tree object"
      }), "), together with some metadata. The metadata includes the\nauthor, the date, and pointers to the commit's parents. Through the pointers to\nthe parents, the commits form a\n", jsx(_components.a, {
        href: "https://en.wikipedia.org/wiki/Directed_acyclic_graph",
        children: "Directed Acyclic Graph (DAG)"
      }), "\n."]
    }), "\n", jsxs(_components.p, {
      children: ["Note that even though commits are stored as snapshots, they are often treated\nas differences between snapshots, namely compared to their parent's snapshot. If\nthey have more than one parent, then the difference is computed against the\nresult of merging the parents. For example, ", jsx(_components.code, {
        children: "jj diff"
      }), " will show the differences\nintroduced by a commit compared to its parent(s), and ", jsx(_components.code, {
        children: "jj rebase"
      }), " will apply\nthose changes onto another base commit."]
    }), "\n", jsx(_components.p, {
      children: 'The word "revision" is used as a synonym for "commit".'
    }), "\n", jsx(_components.h2, {
      id: "commit-id",
      children: "Commit ID"
    }), "\n", jsxs(_components.p, {
      children: ["A commit ID is a unique identifier for a ", jsx(_components.a, {
        href: "#commit",
        children: "commit"
      }), ". They are 20 bytes\nlong when using the Git backend. They are presented in regular hexadecimal\nformat at the end of the line in ", jsx(_components.code, {
        children: "jj log"
      }), ", using 12 hexadecimal digits by\ndefault. When using the Git backend, the commit ID is the Git commit ID."]
    }), "\n", jsx(_components.h2, {
      id: "colocated-repos",
      children: "Colocated repos"
    }), "\n", jsxs(_components.p, {
      children: ["When using the Git ", jsx(_components.a, {
        href: "#backend",
        children: "backend"
      }), " and the backing Git repository's ", jsx(_components.code, {
        children: ".git/"
      }), "\ndirectory is a sibling of ", jsx(_components.code, {
        children: ".jj/"
      }), ", we call the repository colocated. Most\ntools designed for Git can be easily used on such repositories. ", jsx(_components.code, {
        children: "jj"
      }), " and ", jsx(_components.code, {
        children: "git"
      }), "\ncommands can be used interchangeably."]
    }), "\n", jsxs(_components.p, {
      children: ["See ", jsx(_components.a, {
        href: "git-compatibility#colocated-jujutsugit-repos",
        children: "here"
      }), " for details."]
    }), "\n", jsx(_components.h2, {
      id: "conflict",
      children: "Conflict"
    }), "\n", jsxs(_components.p, {
      children: ["Conflicts can occur in many places. The most common type is conflicts in files.\nThose are the conflicts that users coming from other VCSs are usually familiar\nwith. You can see them in ", jsx(_components.code, {
        children: "jj status"
      }), " and in ", jsx(_components.code, {
        children: "jj log"
      }), ' (the red "conflict"\nlabel at the end of the line). See ', jsx(_components.a, {
        href: "/concepts/conflicts",
        children: "here"
      }), " for details."]
    }), "\n", jsxs(_components.p, {
      children: ["Conflicts can also occur in ", jsx(_components.a, {
        href: "#bookmark",
        children: "bookmarks"
      }), ". For example, if you moved a\nbookmark locally, and it was also moved on the remote, then the bookmark will be\nin a conflicted state after you pull from the remote.\nSee ", jsx(_components.a, {
        href: "bookmarks#conflicts",
        children: "here"
      }), " for details."]
    }), "\n", jsxs(_components.p, {
      children: ["Similar to a bookmark conflict, when a ", jsx(_components.a, {
        href: "#change",
        children: "change"
      }), " is rewritten locally\nand remotely, for example, then the change will be in a conflicted state. We\ncall that a ", jsx(_components.a, {
        href: "#divergent-change",
        children: "divergent change"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "divergent-change",
      children: "Divergent change"
    }), "\n", jsxs(_components.p, {
      children: ["A divergent change is a ", jsx(_components.a, {
        href: "#change",
        children: "change"
      }), " that has more than one\n", jsx(_components.a, {
        href: "#visible-commits",
        children: "visible commit"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "head",
      children: "Head"
    }), "\n", jsxs(_components.p, {
      children: ["A head is a commit with no descendants. The context in which it has no\ndescendants varies. For example, the ", jsx(_components.code, {
        children: "heads(X)"
      }), "\n", jsx(_components.a, {
        href: "revsets#functions",
        children: "revset function"
      }), " returns commits that have no descendants\nwithin the set ", jsx(_components.code, {
        children: "X"
      }), " itself. The ", jsx(_components.a, {
        href: "#view",
        children: "view"
      }), " records which\nanonymous heads (heads without a bookmark pointing to them) are visible at a\ngiven ", jsx(_components.a, {
        href: "#operation",
        children: "operation"
      }), ". Note that this is quite different from Git's\n", jsx(_components.a, {
        href: "https://git-scm.com/book/en/v2/Git-Internals-Git-References#ref_the_ref",
        children: "HEAD"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "hidden-commits-abandoned-commits",
      children: "Hidden commits, abandoned commits"
    }), "\n", jsxs(_components.p, {
      children: ["See ", jsx(_components.a, {
        href: "#visible-commits",
        children: "visible commits"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "operation",
      children: "Operation"
    }), "\n", jsxs(_components.p, {
      children: ["A snapshot of the ", jsx(_components.a, {
        href: "#visible-commits",
        children: "visible commits"
      }), " and ", jsx(_components.a, {
        href: "#bookmark",
        children: "bookmarks"
      }), "\nat a given point in time (technically a ", jsx(_components.a, {
        href: "#view",
        children: "view object"
      }), "), together with\nsome metadata. The metadata includes the username, hostname, timestamps, and\npointers to the operation's parents."]
    }), "\n", jsx(_components.h2, {
      id: "operation-log",
      children: "Operation log"
    }), "\n", jsxs(_components.p, {
      children: ["The operation log is the\n", jsx(_components.a, {
        href: "https://en.wikipedia.org/wiki/Directed_acyclic_graph",
        children: "DAG"
      }), " formed by\n", jsx(_components.a, {
        href: "#operation",
        children: "operation"
      }), ` objects, much in the same way that commits form a DAG,
which is sometimes called the "commit history". When operations happen in
sequence, they form a single line in the graph. Operations that happen
concurrently from jj's perspective result in forks and merges in the DAG.`]
    }), "\n", jsx(_components.h2, {
      id: "repository",
      children: "Repository"
    }), "\n", jsxs(_components.p, {
      children: ["Basically everything under ", jsx(_components.code, {
        children: ".jj/"
      }), ", i.e. the full set of ", jsx(_components.a, {
        href: "#operation",
        children: "operations"
      }), "\nand ", jsx(_components.a, {
        href: "#commit",
        children: "commits"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "remote",
      children: "Remote"
    }), "\n", jsxs(_components.p, {
      children: ["A remote is a reference to a copy of your repository. The most common case is\nthat the remote is hosted on the internet or another network, but local remotes\nare also possible. Remotes are useful when working on a project with multiple\ncollaborators. As Jujutsu is compatible with Git you can use all popular\nproviders that are also available for Git. For example\n", jsx(_components.a, {
        href: "https://github.com",
        children: "GitHub"
      }), ", ", jsx(_components.a, {
        href: "https://gitlab.com",
        children: "GitLab"
      }), " or\n", jsx(_components.a, {
        href: "https://codeberg.org/",
        children: "Codeberg"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "revision",
      children: "Revision"
    }), "\n", jsxs(_components.p, {
      children: ["A synonym for ", jsx(_components.a, {
        href: "#commit",
        children: "Commit"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "revset",
      children: "Revset"
    }), "\n", jsxs(_components.p, {
      children: ['Jujutsu supports a functional language for selecting a set of revisions.\nExpressions in this language are called "revsets". See ', jsx(_components.a, {
        href: "/reference/revsets",
        children: "here"
      }), ' for\ndetails. We also often use the term "revset" for the set of revisions selected\nby a revset.']
    }), "\n", jsx(_components.h2, {
      id: "rewrite",
      children: "Rewrite"
    }), "\n", jsxs(_components.p, {
      children: ['To "rewrite" a commit means to create a new version of that commit with\ndifferent contents, metadata (including parent pointers), or both. Rewriting a\ncommit results in a new commit, and thus a new ', jsx(_components.a, {
        href: "#commit-id",
        children: "commit ID"
      }), ", but the\n", jsx(_components.a, {
        href: "#change-id",
        children: "change ID"
      }), " generally remains the same. Some examples of rewriting a\ncommit would be changing its description or rebasing it. Modifying the working\ncopy rewrites the working copy commit."]
    }), "\n", jsx(_components.h2, {
      id: "root-commit",
      children: "Root commit"
    }), "\n", jsxs(_components.p, {
      children: ["The root commit is a virtual commit at the root of every repository. It has a\ncommit ID consisting of all '0's (", jsx(_components.code, {
        children: "00000000..."
      }), ") and a change ID consisting of\nall 'z's (", jsx(_components.code, {
        children: "zzzzzzzz..."
      }), "). It can be referred to in ", jsx(_components.a, {
        href: "#revset",
        children: "revsets"
      }), " by the\nfunction ", jsx(_components.code, {
        children: "root()"
      }), `. Note that our definition of "root commit" is different from
Git's; Git's "root commits" are the first commit(s) in the repository, i.e. the
commits `, jsx(_components.code, {
        children: "jj log -r 'root()+'"
      }), " will show."]
    }), "\n", jsx(_components.h2, {
      id: "tree",
      children: "Tree"
    }), "\n", jsx(_components.p, {
      children: "A tree object represents a snapshot of a directory in the repository. Tree\nobjects are defined recursively; each tree object only has the files and\ndirectories contained directly in the directory it represents."
    }), "\n", jsx(_components.h2, {
      id: "tracked-bookmarks-and-tracking-bookmarks",
      children: "Tracked bookmarks and tracking bookmarks"
    }), "\n", jsxs(_components.p, {
      children: ['A remote bookmark can be made "tracked" with the ', jsx(_components.code, {
        children: "jj bookmark track"
      }), ' command. This\nresults in a "tracking" local bookmark that tracks the remote bookmark.']
    }), "\n", jsxs(_components.p, {
      children: ["See ", jsx(_components.a, {
        href: "bookmarks#terminology-summary",
        children: "the bookmarks documentation"
      }), " for a more\ndetailed definition of these terms."]
    }), "\n", jsx(_components.h2, {
      id: "visible-commits",
      children: "Visible commits"
    }), "\n", jsxs(_components.p, {
      children: ["Visible commits are the commits you see in ", jsx(_components.code, {
        children: "jj log -r 'all()'"
      }), ". They are the\ncommits that are reachable from an anonymous head in the ", jsx(_components.a, {
        href: "#view",
        children: "view"
      }), ".\nAncestors of a visible commit are implicitly visible."]
    }), "\n", jsxs(_components.p, {
      children: ['Intuitively, visible commits are the "latest versions" of a revision with a\ngiven ', jsx(_components.a, {
        href: "#change-id",
        children: "change id"
      }), ". A commit that's abandoned or\n", jsx(_components.a, {
        href: "#rewrite",
        children: "rewritten"
      }), ' stops being visible and is labeled as "hidden". Such\ncommits are no longer accessible using a change id, but they are still\naccessible by their ', jsx(_components.a, {
        href: "#commit-id",
        children: "commit id"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "view",
      children: "View"
    }), "\n", jsxs(_components.p, {
      children: ["A view is a snapshot of bookmarks and their targets, anonymous heads,\nand working-copy commits. The anonymous heads define which commits\nare ", jsx(_components.a, {
        href: "#visible-commits",
        children: "visible"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["A view object is similar to a ", jsx(_components.a, {
        href: "#tree",
        children: "tree"
      }), " object in that it represents a\nsnapshot without history, and an ", jsx(_components.a, {
        href: "#operation",
        children: "operation"
      }), " object is similar to a\n", jsx(_components.a, {
        href: "#commit",
        children: "commit"
      }), " object in that it adds metadata and history."]
    }), "\n", jsx(_components.h2, {
      id: "workspace",
      children: "Workspace"
    }), "\n", jsxs(_components.p, {
      children: ["A workspace is a ", jsx(_components.a, {
        href: "#working-copy",
        children: "working copy"
      }), " and an\nassociated ", jsx(_components.a, {
        href: "#repository",
        children: "repository"
      }), ". There can be multiple workspaces for a\nsingle repository. Each workspace has a ", jsx(_components.code, {
        children: ".jj/"
      }), " directory, but the\n", jsx(_components.a, {
        href: "#commit",
        children: "commits"
      }), " and ", jsx(_components.a, {
        href: "#operation",
        children: "operations"
      }), " will be stored in the initial\nworkspace; the other workspaces will have pointers to the initial workspace. See\n", jsx(_components.a, {
        href: "working-copy#workspaces",
        children: "here"
      }), " for details."]
    }), "\n", jsx(_components.p, {
      children: 'This is what Git calls a "worktree".'
    }), "\n", jsx(_components.h2, {
      id: "working-copy",
      children: "Working copy"
    }), "\n", jsxs(_components.p, {
      children: ["The working copy contains the files you're currently working on. It is\nautomatically snapshot at the beginning of almost every ", jsx(_components.code, {
        children: "jj"
      }), " command, thus\ncreating a new ", jsx(_components.a, {
        href: "#working-copy-commit",
        children: "working-copy commit"
      }), " if any changes had\nbeen made in the working copy. Conversely, the working copy is automatically\nupdated to the state of the working-copy commit at the end of almost every ", jsx(_components.code, {
        children: "jj"
      }), "\ncommand. See ", jsx(_components.a, {
        href: "/concepts/working-copy",
        children: "here"
      }), " for details."]
    }), "\n", jsx(_components.p, {
      children: 'This is what Git calls a "working tree".'
    }), "\n", jsx(_components.h2, {
      id: "working-copy-commit",
      children: "Working-copy commit"
    }), "\n", jsxs(_components.p, {
      children: ["A commit that corresponds to the current state of the working copy. There is\none working-copy commit per ", jsx(_components.a, {
        href: "#workspace",
        children: "workspace"
      }), ". The current working-copy\ncommits are tracked in the ", jsx(_components.a, {
        href: "#operation-log",
        children: "operation log"
      }), "."]
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
//# sourceMappingURL=glossary-D69oKx_p.mjs.map
