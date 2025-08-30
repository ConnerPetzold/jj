import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

const __img0 = "/assets/types-Cn9U8A0g.svg";
let frontmatter = {
  "title": "Architecture"
};
let extractedReferences = [{
  "href": "https://git-scm.com/book/en/v2/Git-Internals-Git-Objects"
}, {
  "href": "/concepts/concurrency"
}, {
  "href": "/concepts/concurrency#storage"
}];
let structuredData = {
  "contents": [{
    "heading": "data-model",
    "content": "The commit data model is similar\nto Git's object model\n, but with some differences."
  }, {
    "heading": "separation-of-library-from-ui",
    "content": "The jj binary consists of two Rust crates: the library crate (jj-lib) and\nthe CLI crate (jj-cli). The library crate is currently only used by the CLI\ncrate, but it is meant to also be usable from a GUI or TUI, or in a server\nserving requests from multiple users. As a result, the library should avoid\ninteracting directly with the user via the terminal or by other means; all\ninput/output is handled by the CLI crate . Since the library crate is meant\nto usable in a server, it also cannot read configuration from the user's home\ndirectory, or from user-specific environment variables."
  }, {
    "heading": "separation-of-library-from-ui",
    "content": "There are a few exceptions, such as for messages printed during automatic\nupgrades of the repo format"
  }, {
    "heading": "separation-of-library-from-ui",
    "content": `A lot of thought has gone into making the library crate's API easy to use, but
not much has gone into "details" such as which collection types are used, or
which symbols are exposed in the API.`
  }, {
    "heading": "storage-independent-apis",
    "content": `One overarching principle in the design is that it should be easy to change
where data is stored. The goal was to be able to put storage on local-disk by
default but also be able to move storage to the cloud at Google
(and for anyone). To that end, commits (and trees, files, etc.) are stored by
the commit backend, operations (and views) are stored by the operation backend,
the heads of the operation log are stored by the "op heads" backend, the commit
index is stored by the index backend, and the working copy is stored by the
working copy backend. The interfaces are defined in terms of plain Rust data
types, not tied to a specific format. The working copy doesn't have its own
trait defined yet, but its interface is small and easy to create traits for when
needed.`
  }, {
    "heading": "storage-independent-apis",
    "content": "The commit backend to use when loading a repo is specified in\nthe .jj/repo/store/type file. There are similar files for the other backends\n(.jj/repo/index/type, .jj/repo/op_store/type, .jj/repo/op_heads/type)."
  }, {
    "heading": "overview",
    "content": "Here's a diagram showing some important types in the library crate, and how they\nrelate. For example, given a Workspace, you can use it to get a WorkingCopy\nor a RepoLoader. A Transaction is required to acquire a MutableRepo, etc.\nThe following sections describe each component."
  }, {
    "heading": "overview",
    "content": 'This diagram was created with Excalidraw. You can get a copy of it at this\nlocation, and Right Click > "Copy to Clipboard as SVG".'
  }, {
    "heading": "backend",
    "content": "The Backend trait defines the interface each\ncommit backend needs to implement. The current in-tree commit backends\nare GitBackend\nand SimpleBackend."
  }, {
    "heading": "backend",
    "content": "Since there are non-commit backends, the Backend trait should probably be\nrenamed to CommitBackend."
  }, {
    "heading": "gitbackend",
    "content": "The GitBackend stores commits in a Git repository. It uses libgit2 to read\nand write commits and refs."
  }, {
    "heading": "gitbackend",
    "content": "To prevent GC from deleting commits that are still reachable from the operation\nlog, the GitBackend stores a ref for each commit in the operation log in\nthe refs/jj/keep/ namespace."
  }, {
    "heading": "gitbackend",
    "content": "Commit data that is available in Jujutsu's model but not in Git's model is\nstored in a StackedTable in .jj/repo/store/extra/. That is currently the\nchange ID and the list of predecessors. For commits that don't have any data in\nthat table, which is any commit created by git, we use an empty list as\npredecessors, and the bit-reversed commit ID as change ID."
  }, {
    "heading": "gitbackend",
    "content": "Because we use the Git Object ID as commit ID, two commits that differ only in\ntheir change ID, for example, will get the same commit ID, so we error out when\ntrying to write the second one of them."
  }, {
    "heading": "simplebackend",
    "content": "The SimpleBackend is just a proof of concept. It stores objects addressed by\ntheir hash, with one file per object."
  }, {
    "heading": "store",
    "content": "The Store type wraps the Backend and returns wrapped types for commits and\ntrees to make them easier to use. The wrapped objects have a reference to\nthe Store itself, so you can do e.g. commit.parents() without having to\nprovide the Store as an argument."
  }, {
    "heading": "store",
    "content": "The Store type also provides caching of commits and trees."
  }, {
    "heading": "readonlyrepo",
    "content": "A ReadonlyRepo represents the state of a repo at a specific operation. It\nkeeps the view object associated with that operation."
  }, {
    "heading": "readonlyrepo",
    "content": "The repository doesn't know where on disk any working copies live. It knows, via\nthe view object, which commit is supposed to be the current working-copy commit\nin each workspace."
  }, {
    "heading": "mutablerepo",
    "content": "A MutableRepo is a mutable version of ReadonlyRepo. It has a reference to\nits base ReadonlyRepo, but it has its own copy of the view object and lets the\ncaller modify it."
  }, {
    "heading": "transaction",
    "content": "The Transaction object has a MutableRepo and metadata that will go into the\noperation log. When the transaction commits, the MutableRepo becomes a view\nobject in the operation log on disk, and the Transaction object becomes an\noperation object. In memory, Transaction::commit() returns a\nnew ReadonlyRepo."
  }, {
    "heading": "repoloader",
    "content": "The RepoLoader represents a repository at an unspecified operation. You can\nthink of as a pointer to the .jj/repo/ directory. It can create\na ReadonlyRepo given an operation ID."
  }, {
    "heading": "treestate",
    "content": "The TreeState type represents the state of the files in a working copy. It\nkeep track of the mtime and size for each tracked file. It knows the TreeId\nthat the working copy represents. It has a snapshot() method that will use the\nrecorded mtimes and sizes and detect changes in the working copy. If anything\nchanged, it will return a new TreeId. It also has checkout() for updating\nthe files on disk to match a requested TreeId."
  }, {
    "heading": "treestate",
    "content": "The TreeState type supports sparse checkouts. In fact, all working copies are\nsparse; they simply track the full repo in most cases."
  }, {
    "heading": "workingcopy",
    "content": "The WorkingCopy type has a TreeState but also knows which WorkspaceName it\nhas and at which operation it was most recently updated."
  }, {
    "heading": "workspace",
    "content": "The Workspace type represents the combination of a repo and a working copy (\nlike Git's 'worktree' concept)."
  }, {
    "heading": "workspace",
    "content": "The repo view at the current operation determines the desired working-copy\ncommit in each workspace. The WorkingCopy determines what is actually in the\nworking copy. The working copy can become stale if the working-copy commit was\nchanged from another workspace (or if the process updating the working copy\ncrashed, for example)."
  }, {
    "heading": "git",
    "content": "The git module contains functionality for interoperating with a Git repo, at a\nhigher level than the GitBackend. The GitBackend is restricted by\nthe Backend trait; the git module is specifically for Git-backed repos. It\nhas functionality for importing refs from the Git repo and for exporting to refs\nin the Git repo. It also has functionality for pushing and pulling to/from Git\nremotes."
  }, {
    "heading": "revsets",
    "content": "A user-provided revset expression string goes through a few different stages to\nbe evaluated:"
  }, {
    "heading": "revsets",
    "content": "Parse the expression into a RevsetExpression, which is close to an AST"
  }, {
    "heading": "revsets",
    "content": "Resolve symbols and functions like tags() into specific commits. After\nthis stage, the expression is still a RevsetExpression, but it won't have\nany CommitRef variants in it."
  }, {
    "heading": "revsets",
    "content": "Resolve visibility. This stage resolves visible_heads() and all() and\nproduces a ResolvedExpression."
  }, {
    "heading": "revsets",
    "content": "Evaluate the ResolvedExpression into a Revset."
  }, {
    "heading": "revsets",
    "content": "This evaluation step is performed by Index::evaluate_revset(), allowing\nthe Revset implementation to leverage the specifics of a custom index\nimplementation. The first three steps are independent of the index\nimplementation."
  }, {
    "heading": "stackedtable",
    "content": "StackedTable (actually ReadonlyTable and MutableTable) is a simple disk\nformat for storing key-value pairs sorted by key. The keys have to have the same\nsize but the values can have different sizes. We use our own format because we\nwant lock-free concurrency and there doesn't seem to be an\nexisting key-value store we could use."
  }, {
    "heading": "stackedtable",
    "content": "The file format contains a lookup table followed by concatenated values. The\nlookup table is a sorted list of keys, where each key is followed by the\nassociated value's offset in the concatenated values."
  }, {
    "heading": "stackedtable",
    "content": "A table can have a parent table. When looking up a key, if it's not found in the\ncurrent table, the parent table is searched. We never update a table in place.\nIf the number of new entries to write is less than half the number of entries in\nthe parent table, we create a new table with the new entries and a pointer to\nthe parent. Otherwise, we copy the entries from the parent table and the new\nentries into a new table with the grandparent as the parent. We do that\nrecursively so parent tables are at least 2 times as large as child tables. This\nresults in O(log N) amortized insertion time and lookup time."
  }, {
    "heading": "stackedtable",
    "content": "There's no garbage collection of unreachable tables yet."
  }, {
    "heading": "stackedtable",
    "content": "The tables are named by their hash. We keep a separate directory of pointers to\nthe current leaf tables, in the same way as we\ndo for the operation log."
  }, {
    "heading": "templates",
    "content": 'The concept is copied from Mercurial, but the syntax is different. The main\ndifference is that the top-level expression is a template expression, not a\nstring like in Mercurial. There is also no string interpolation (e.g.\n"Commit ID: {node}" in Mercurial).'
  }, {
    "heading": "diff-editing",
    "content": "Diff-editing works by creating two very sparse working copies, containing only\nthe files we want the user to edit. We then let the user edit the right-hand\nside of the diff. Then we simply snapshot that working copy to create the new\ntree."
  }],
  "headings": [{
    "id": "data-model",
    "content": "Data model"
  }, {
    "id": "separation-of-library-from-ui",
    "content": "Separation of library from UI"
  }, {
    "id": "storage-independent-apis",
    "content": "Storage-independent APIs"
  }, {
    "id": "design-of-the-library-crate",
    "content": "Design of the library crate"
  }, {
    "id": "overview",
    "content": "Overview"
  }, {
    "id": "backend",
    "content": "Backend"
  }, {
    "id": "gitbackend",
    "content": "GitBackend"
  }, {
    "id": "simplebackend",
    "content": "SimpleBackend"
  }, {
    "id": "store",
    "content": "Store"
  }, {
    "id": "readonlyrepo",
    "content": "ReadonlyRepo"
  }, {
    "id": "mutablerepo",
    "content": "MutableRepo"
  }, {
    "id": "transaction",
    "content": "Transaction"
  }, {
    "id": "repoloader",
    "content": "RepoLoader"
  }, {
    "id": "treestate",
    "content": "TreeState"
  }, {
    "id": "workingcopy",
    "content": "WorkingCopy"
  }, {
    "id": "workspace",
    "content": "Workspace"
  }, {
    "id": "git",
    "content": "Git"
  }, {
    "id": "revsets",
    "content": "Revsets"
  }, {
    "id": "stackedtable",
    "content": "StackedTable"
  }, {
    "id": "design-of-the-cli-crate",
    "content": "Design of the CLI crate"
  }, {
    "id": "templates",
    "content": "Templates"
  }, {
    "id": "diff-editing",
    "content": "Diff-editing"
  }]
};
const toc = [{
  depth: 2,
  url: "#data-model",
  title: jsx(Fragment, {
    children: "Data model"
  })
}, {
  depth: 2,
  url: "#separation-of-library-from-ui",
  title: jsx(Fragment, {
    children: "Separation of library from UI"
  })
}, {
  depth: 2,
  url: "#storage-independent-apis",
  title: jsx(Fragment, {
    children: "Storage-independent APIs"
  })
}, {
  depth: 2,
  url: "#design-of-the-library-crate",
  title: jsx(Fragment, {
    children: "Design of the library crate"
  })
}, {
  depth: 3,
  url: "#overview",
  title: jsx(Fragment, {
    children: "Overview"
  })
}, {
  depth: 3,
  url: "#backend",
  title: jsx(Fragment, {
    children: "Backend"
  })
}, {
  depth: 3,
  url: "#gitbackend",
  title: jsx(Fragment, {
    children: "GitBackend"
  })
}, {
  depth: 3,
  url: "#simplebackend",
  title: jsx(Fragment, {
    children: "SimpleBackend"
  })
}, {
  depth: 3,
  url: "#store",
  title: jsx(Fragment, {
    children: "Store"
  })
}, {
  depth: 3,
  url: "#readonlyrepo",
  title: jsx(Fragment, {
    children: "ReadonlyRepo"
  })
}, {
  depth: 3,
  url: "#mutablerepo",
  title: jsx(Fragment, {
    children: "MutableRepo"
  })
}, {
  depth: 3,
  url: "#transaction",
  title: jsx(Fragment, {
    children: "Transaction"
  })
}, {
  depth: 3,
  url: "#repoloader",
  title: jsx(Fragment, {
    children: "RepoLoader"
  })
}, {
  depth: 3,
  url: "#treestate",
  title: jsx(Fragment, {
    children: "TreeState"
  })
}, {
  depth: 3,
  url: "#workingcopy",
  title: jsx(Fragment, {
    children: "WorkingCopy"
  })
}, {
  depth: 3,
  url: "#workspace",
  title: jsx(Fragment, {
    children: "Workspace"
  })
}, {
  depth: 3,
  url: "#git",
  title: jsx(Fragment, {
    children: "Git"
  })
}, {
  depth: 3,
  url: "#revsets",
  title: jsx(Fragment, {
    children: "Revsets"
  })
}, {
  depth: 3,
  url: "#stackedtable",
  title: jsx(Fragment, {
    children: "StackedTable"
  })
}, {
  depth: 2,
  url: "#design-of-the-cli-crate",
  title: jsx(Fragment, {
    children: "Design of the CLI crate"
  })
}, {
  depth: 3,
  url: "#templates",
  title: jsx(Fragment, {
    children: "Templates"
  })
}, {
  depth: 3,
  url: "#diff-editing",
  title: jsx(Fragment, {
    children: "Diff-editing"
  })
}, {
  depth: 2,
  url: "#footnote-label",
  title: jsx(Fragment, {
    children: "Footnotes"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    section: "section",
    sup: "sup",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.h2, {
      id: "data-model",
      children: "Data model"
    }), "\n", jsxs(_components.p, {
      children: ["The commit data model is similar\nto ", jsx(_components.a, {
        href: "https://git-scm.com/book/en/v2/Git-Internals-Git-Objects",
        children: "Git's object model"
      }), "\n, but with some differences."]
    }), "\n", jsx(_components.h2, {
      id: "separation-of-library-from-ui",
      children: "Separation of library from UI"
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "jj"
      }), " binary consists of two Rust crates: the library crate (", jsx(_components.code, {
        children: "jj-lib"
      }), ") and\nthe CLI crate (", jsx(_components.code, {
        children: "jj-cli"
      }), "). The library crate is currently only used by the CLI\ncrate, but it is meant to also be usable from a GUI or TUI, or in a server\nserving requests from multiple users. As a result, the library should avoid\ninteracting directly with the user via the terminal or by other means; all\ninput/output is handled by the CLI crate ", jsx(_components.sup, {
        children: jsx(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "1"
        })
      }), ". Since the library crate is meant\nto usable in a server, it also cannot read configuration from the user's home\ndirectory, or from user-specific environment variables."]
    }), "\n", jsx(_components.p, {
      children: `A lot of thought has gone into making the library crate's API easy to use, but
not much has gone into "details" such as which collection types are used, or
which symbols are exposed in the API.`
    }), "\n", jsx(_components.h2, {
      id: "storage-independent-apis",
      children: "Storage-independent APIs"
    }), "\n", jsx(_components.p, {
      children: `One overarching principle in the design is that it should be easy to change
where data is stored. The goal was to be able to put storage on local-disk by
default but also be able to move storage to the cloud at Google
(and for anyone). To that end, commits (and trees, files, etc.) are stored by
the commit backend, operations (and views) are stored by the operation backend,
the heads of the operation log are stored by the "op heads" backend, the commit
index is stored by the index backend, and the working copy is stored by the
working copy backend. The interfaces are defined in terms of plain Rust data
types, not tied to a specific format. The working copy doesn't have its own
trait defined yet, but its interface is small and easy to create traits for when
needed.`
    }), "\n", jsxs(_components.p, {
      children: ["The commit backend to use when loading a repo is specified in\nthe ", jsx(_components.code, {
        children: ".jj/repo/store/type"
      }), " file. There are similar files for the other backends\n(", jsx(_components.code, {
        children: ".jj/repo/index/type"
      }), ", ", jsx(_components.code, {
        children: ".jj/repo/op_store/type"
      }), ", ", jsx(_components.code, {
        children: ".jj/repo/op_heads/type"
      }), ")."]
    }), "\n", jsx(_components.h2, {
      id: "design-of-the-library-crate",
      children: "Design of the library crate"
    }), "\n", jsx(_components.h3, {
      id: "overview",
      children: "Overview"
    }), "\n", jsxs(_components.p, {
      children: ["Here's a diagram showing some important types in the library crate, and how they\nrelate. For example, given a ", jsx(_components.code, {
        children: "Workspace"
      }), ", you can use it to get a ", jsx(_components.code, {
        children: "WorkingCopy"
      }), "\nor a ", jsx(_components.code, {
        children: "RepoLoader"
      }), ". A ", jsx(_components.code, {
        children: "Transaction"
      }), " is required to acquire a ", jsx(_components.code, {
        children: "MutableRepo"
      }), ", etc.\nThe following sections describe each component."]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.img, {
        alt: "Type diagram",
        src: __img0
      })
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["This diagram was created with ", jsx(_components.a, {
          href: "https://excalidraw.com/",
          children: "Excalidraw"
        }), ". You can get a copy of it ", jsx(_components.a, {
          href: "https://excalidraw.com/#json=X081PJVRW2h4iW12qZxc1,H2Yg3qnycVG0Vpq5Z90Miw",
          children: "at this\nlocation"
        }), ', and Right Click > "Copy to Clipboard as SVG".']
      })
    }), "\n", jsx(_components.h3, {
      id: "backend",
      children: "Backend"
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "Backend"
      }), " trait defines the interface each\ncommit backend needs to implement. The current in-tree commit backends\nare ", jsx(_components.code, {
        children: "GitBackend"
      }), "\nand ", jsx(_components.code, {
        children: "SimpleBackend"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["Since there are non-commit backends, the ", jsx(_components.code, {
        children: "Backend"
      }), " trait should probably be\nrenamed to ", jsx(_components.code, {
        children: "CommitBackend"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "gitbackend",
      children: "GitBackend"
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "GitBackend"
      }), " stores commits in a Git repository. It uses ", jsx(_components.code, {
        children: "libgit2"
      }), " to read\nand write commits and refs."]
    }), "\n", jsxs(_components.p, {
      children: ["To prevent GC from deleting commits that are still reachable from the operation\nlog, the ", jsx(_components.code, {
        children: "GitBackend"
      }), " stores a ref for each commit in the operation log in\nthe ", jsx(_components.code, {
        children: "refs/jj/keep/"
      }), " namespace."]
    }), "\n", jsxs(_components.p, {
      children: ["Commit data that is available in Jujutsu's model but not in Git's model is\nstored in a ", jsx(_components.code, {
        children: "StackedTable"
      }), " in ", jsx(_components.code, {
        children: ".jj/repo/store/extra/"
      }), ". That is currently the\nchange ID and the list of predecessors. For commits that don't have any data in\nthat table, which is any commit created by ", jsx(_components.code, {
        children: "git"
      }), ", we use an empty list as\npredecessors, and the bit-reversed commit ID as change ID."]
    }), "\n", jsx(_components.p, {
      children: "Because we use the Git Object ID as commit ID, two commits that differ only in\ntheir change ID, for example, will get the same commit ID, so we error out when\ntrying to write the second one of them."
    }), "\n", jsx(_components.h3, {
      id: "simplebackend",
      children: "SimpleBackend"
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "SimpleBackend"
      }), " is just a proof of concept. It stores objects addressed by\ntheir hash, with one file per object."]
    }), "\n", jsx(_components.h3, {
      id: "store",
      children: "Store"
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "Store"
      }), " type wraps the ", jsx(_components.code, {
        children: "Backend"
      }), " and returns wrapped types for commits and\ntrees to make them easier to use. The wrapped objects have a reference to\nthe ", jsx(_components.code, {
        children: "Store"
      }), " itself, so you can do e.g. ", jsx(_components.code, {
        children: "commit.parents()"
      }), " without having to\nprovide the ", jsx(_components.code, {
        children: "Store"
      }), " as an argument."]
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "Store"
      }), " type also provides caching of commits and trees."]
    }), "\n", jsx(_components.h3, {
      id: "readonlyrepo",
      children: "ReadonlyRepo"
    }), "\n", jsxs(_components.p, {
      children: ["A ", jsx(_components.code, {
        children: "ReadonlyRepo"
      }), " represents the state of a repo at a specific operation. It\nkeeps the view object associated with that operation."]
    }), "\n", jsx(_components.p, {
      children: "The repository doesn't know where on disk any working copies live. It knows, via\nthe view object, which commit is supposed to be the current working-copy commit\nin each workspace."
    }), "\n", jsx(_components.h3, {
      id: "mutablerepo",
      children: "MutableRepo"
    }), "\n", jsxs(_components.p, {
      children: ["A ", jsx(_components.code, {
        children: "MutableRepo"
      }), " is a mutable version of ", jsx(_components.code, {
        children: "ReadonlyRepo"
      }), ". It has a reference to\nits base ", jsx(_components.code, {
        children: "ReadonlyRepo"
      }), ", but it has its own copy of the view object and lets the\ncaller modify it."]
    }), "\n", jsx(_components.h3, {
      id: "transaction",
      children: "Transaction"
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "Transaction"
      }), " object has a ", jsx(_components.code, {
        children: "MutableRepo"
      }), " and metadata that will go into the\noperation log. When the transaction commits, the ", jsx(_components.code, {
        children: "MutableRepo"
      }), " becomes a view\nobject in the operation log on disk, and the ", jsx(_components.code, {
        children: "Transaction"
      }), " object becomes an\noperation object. In memory, ", jsx(_components.code, {
        children: "Transaction::commit()"
      }), " returns a\nnew ", jsx(_components.code, {
        children: "ReadonlyRepo"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "repoloader",
      children: "RepoLoader"
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "RepoLoader"
      }), " represents a repository at an unspecified operation. You can\nthink of as a pointer to the ", jsx(_components.code, {
        children: ".jj/repo/"
      }), " directory. It can create\na ", jsx(_components.code, {
        children: "ReadonlyRepo"
      }), " given an operation ID."]
    }), "\n", jsx(_components.h3, {
      id: "treestate",
      children: "TreeState"
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "TreeState"
      }), " type represents the state of the files in a working copy. It\nkeep track of the mtime and size for each tracked file. It knows the ", jsx(_components.code, {
        children: "TreeId"
      }), "\nthat the working copy represents. It has a ", jsx(_components.code, {
        children: "snapshot()"
      }), " method that will use the\nrecorded mtimes and sizes and detect changes in the working copy. If anything\nchanged, it will return a new ", jsx(_components.code, {
        children: "TreeId"
      }), ". It also has ", jsx(_components.code, {
        children: "checkout()"
      }), " for updating\nthe files on disk to match a requested ", jsx(_components.code, {
        children: "TreeId"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "TreeState"
      }), " type supports sparse checkouts. In fact, all working copies are\nsparse; they simply track the full repo in most cases."]
    }), "\n", jsx(_components.h3, {
      id: "workingcopy",
      children: "WorkingCopy"
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "WorkingCopy"
      }), " type has a ", jsx(_components.code, {
        children: "TreeState"
      }), " but also knows which ", jsx(_components.code, {
        children: "WorkspaceName"
      }), " it\nhas and at which operation it was most recently updated."]
    }), "\n", jsx(_components.h3, {
      id: "workspace",
      children: "Workspace"
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "Workspace"
      }), " type represents the combination of a repo and a working copy (\nlike Git's 'worktree' concept)."]
    }), "\n", jsxs(_components.p, {
      children: ["The repo view at the current operation determines the desired working-copy\ncommit in each workspace. The ", jsx(_components.code, {
        children: "WorkingCopy"
      }), " determines what is actually in the\nworking copy. The working copy can become stale if the working-copy commit was\nchanged from another workspace (or if the process updating the working copy\ncrashed, for example)."]
    }), "\n", jsx(_components.h3, {
      id: "git",
      children: "Git"
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "git"
      }), " module contains functionality for interoperating with a Git repo, at a\nhigher level than the ", jsx(_components.code, {
        children: "GitBackend"
      }), ". The ", jsx(_components.code, {
        children: "GitBackend"
      }), " is restricted by\nthe ", jsx(_components.code, {
        children: "Backend"
      }), " trait; the ", jsx(_components.code, {
        children: "git"
      }), " module is specifically for Git-backed repos. It\nhas functionality for importing refs from the Git repo and for exporting to refs\nin the Git repo. It also has functionality for pushing and pulling to/from Git\nremotes."]
    }), "\n", jsx(_components.h3, {
      id: "revsets",
      children: "Revsets"
    }), "\n", jsx(_components.p, {
      children: "A user-provided revset expression string goes through a few different stages to\nbe evaluated:"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["Parse the expression into a ", jsx(_components.code, {
          children: "RevsetExpression"
        }), ", which is close to an AST"]
      }), "\n", jsxs(_components.li, {
        children: ["Resolve symbols and functions like ", jsx(_components.code, {
          children: "tags()"
        }), " into specific commits. After\nthis stage, the expression is still a ", jsx(_components.code, {
          children: "RevsetExpression"
        }), ", but it won't have\nany ", jsx(_components.code, {
          children: "CommitRef"
        }), " variants in it."]
      }), "\n", jsxs(_components.li, {
        children: ["Resolve visibility. This stage resolves ", jsx(_components.code, {
          children: "visible_heads()"
        }), " and ", jsx(_components.code, {
          children: "all()"
        }), " and\nproduces a ", jsx(_components.code, {
          children: "ResolvedExpression"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: ["Evaluate the ", jsx(_components.code, {
          children: "ResolvedExpression"
        }), " into a ", jsx(_components.code, {
          children: "Revset"
        }), "."]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["This evaluation step is performed by ", jsx(_components.code, {
        children: "Index::evaluate_revset()"
      }), ", allowing\nthe ", jsx(_components.code, {
        children: "Revset"
      }), " implementation to leverage the specifics of a custom index\nimplementation. The first three steps are independent of the index\nimplementation."]
    }), "\n", jsx(_components.h3, {
      id: "stackedtable",
      children: "StackedTable"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "StackedTable"
      }), " (actually ", jsx(_components.code, {
        children: "ReadonlyTable"
      }), " and ", jsx(_components.code, {
        children: "MutableTable"
      }), ") is a simple disk\nformat for storing key-value pairs sorted by key. The keys have to have the same\nsize but the values can have different sizes. We use our own format because we\nwant ", jsx(_components.a, {
        href: "/concepts/concurrency",
        children: "lock-free concurrency"
      }), " and there doesn't seem to be an\nexisting key-value store we could use."]
    }), "\n", jsx(_components.p, {
      children: "The file format contains a lookup table followed by concatenated values. The\nlookup table is a sorted list of keys, where each key is followed by the\nassociated value's offset in the concatenated values."
    }), "\n", jsx(_components.p, {
      children: "A table can have a parent table. When looking up a key, if it's not found in the\ncurrent table, the parent table is searched. We never update a table in place.\nIf the number of new entries to write is less than half the number of entries in\nthe parent table, we create a new table with the new entries and a pointer to\nthe parent. Otherwise, we copy the entries from the parent table and the new\nentries into a new table with the grandparent as the parent. We do that\nrecursively so parent tables are at least 2 times as large as child tables. This\nresults in O(log N) amortized insertion time and lookup time."
    }), "\n", jsx(_components.p, {
      children: "There's no garbage collection of unreachable tables yet."
    }), "\n", jsxs(_components.p, {
      children: ["The tables are named by their hash. We keep a separate directory of pointers to\nthe current leaf tables, in the same way as we\ndo ", jsx(_components.a, {
        href: "/concepts/concurrency#storage",
        children: "for the operation log"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "design-of-the-cli-crate",
      children: "Design of the CLI crate"
    }), "\n", jsx(_components.h3, {
      id: "templates",
      children: "Templates"
    }), "\n", jsxs(_components.p, {
      children: ["The concept is copied from Mercurial, but the syntax is different. The main\ndifference is that the top-level expression is a template expression, not a\nstring like in Mercurial. There is also no string interpolation (e.g.\n", jsx(_components.code, {
        children: '"Commit ID: {node}"'
      }), " in Mercurial)."]
    }), "\n", jsx(_components.h3, {
      id: "diff-editing",
      children: "Diff-editing"
    }), "\n", jsx(_components.p, {
      children: "Diff-editing works by creating two very sparse working copies, containing only\nthe files we want the user to edit. We then let the user edit the right-hand\nside of the diff. Then we simply snapshot that working copy to create the new\ntree."
    }), "\n", jsxs(_components.section, {
      "data-footnotes": true,
      className: "footnotes",
      children: [jsx(_components.h2, {
        className: "sr-only",
        id: "footnote-label",
        children: "Footnotes"
      }), "\n", jsxs(_components.ol, {
        children: ["\n", jsxs(_components.li, {
          id: "user-content-fn-1",
          children: ["\n", jsxs(_components.p, {
            children: ["There are a few exceptions, such as for messages printed during automatic\nupgrades of the repo format ", jsx(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              className: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
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
//# sourceMappingURL=architecture-B6qNkUVL.mjs.map
