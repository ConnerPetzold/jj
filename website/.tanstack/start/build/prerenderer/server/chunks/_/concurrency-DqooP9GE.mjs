import { jsx, jsxs, Fragment } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Concurrency"
};
let extractedReferences = [{
  "href": "https://github.com/jj-vcs/jj/issues/2193"
}, {
  "href": "../glossary#colocated-repos"
}, {
  "href": "https://git-scm.com/book/en/v2/Git-Internals-Git-Objects"
}];
let structuredData = {
  "contents": [{
    "heading": "introduction",
    "content": "Concurrent editing is a key feature of DVCSs -- that's why they're called\nDistributed Version Control Systems. A DVCS that didn't let users edit files\nand create commits on separate machines at the same time wouldn't be much\nof a distributed VCS."
  }, {
    "heading": "introduction",
    "content": "When conflicting changes are made in different clones, a DVCS will have to deal\nwith that when you push or pull. For example, when using Mercurial, if the\nremote has updated a bookmark called main (Mercurial's bookmarks are similar\nto a Git's branches) and you had updated the same bookmark locally but made it\npoint to a different target, Mercurial would add a bookmark called main@origin\nto indicate the conflict. Git instead prevents the conflict by renaming pulled\nbranches to origin/main whether or not there was a conflict. However, most\nDVCSs treat local concurrency quite differently, typically by using lock files\nto prevent concurrent edits. Unlike those DVCSs, Jujutsu treats concurrent edits\nthe same whether they're made locally or remotely."
  }, {
    "heading": "introduction",
    "content": "One problem with using lock files is that they don't work when the clone is in a\ndistributed file system. Most clones are of course not stored in distributed\nfile systems, but it is a big problem when they are (Mercurial repos\nfrequently get corrupted, for example)."
  }, {
    "heading": "introduction",
    "content": "Another problem with using lock files is related to complexity of\nimplementation. The simplest way of using lock files is to take coarse-grained\nlocks early: every command that may modify the repo takes a lock at the very\nbeginning. However, that means that operations that wouldn't actually conflict\nwould still have to wait for each other. The user experience can be improved by\nusing finer-grained locks and/or taking the locks later. The drawback of that is\ncomplexity. For example, you need to verify that any assumptions you made before\nlocking are still valid after you take the lock."
  }, {
    "heading": "introduction",
    "content": "To avoid depending on lock files, Jujutsu takes a different approach by\naccepting that concurrent changes can always happen. It instead exposes any\nconflicting changes to the user, much like other DVCSs do for conflicting\nchanges made remotely."
  }, {
    "heading": "syncing-with-rsync-nfs-dropbox-etc",
    "content": `Jujutsu's lock-free concurrency means that it's possible to update copies of the
clone on different machines and then let rsync (or Dropbox, or NFS, etc.)
merge them. The working copy may mismatch what's supposed to be checked out, but
no changes to the repo will be lost (added commits, moved bookmarks, etc.). If
conflicting changes were made, they will appear as conflicts. For example, if a
bookmark was moved to two different locations, they will appear in jj log in
both locations but with a "?" after the name, and jj status will also inform
the user about the conflict.`
  }, {
    "heading": "syncing-with-rsync-nfs-dropbox-etc",
    "content": "Note that, for now, there are known bugs in this area. Most notably, with the\nGit backend, repository corruption is possible because the backend is not\nentirely lock-free. If you know\nabout the bug, it is relatively easy to recover from."
  }, {
    "heading": "syncing-with-rsync-nfs-dropbox-etc",
    "content": "Moreover, such use of Jujutsu is not currently thoroughly tested,\nespecially in the context of colocated\nrepositories. While the contents of commits\nshould be safe, concurrent modification of a repository from different computers\nmight conceivably lose some bookmark pointers. Note that, unlike in pure\nGit, losing a bookmark pointer does not lead to losing commits."
  }, {
    "heading": "operation-log",
    "content": 'The most important piece in the lock-free design is the "operation log". That is\nwhat allows us to detect and merge divergent operations.'
  }, {
    "heading": "operation-log",
    "content": `The operation log is similar to a commit DAG (such as in
Git's object model),
but each commit object is instead an "operation" and each tree object is instead
a "view". The view object contains the set of visible head commits, bookmarks,
tags, and the working-copy commit in each workspace. The operation object
contains a pointer to the view object (like how commit objects point to tree
objects), pointers to parent operation(s) (like how commit objects point to
parent commit(s)), and metadata about the operation. These types are defined
in op_store.proto The operation log is normally linear.
It becomes non-linear if there are divergent operations.`
  }, {
    "heading": "operation-log",
    "content": "When a command starts, it loads the repo at the latest operation. Because the\nassociated view object completely defines the repo state, the running command\nwill not see any changes made by other processes thereafter. When the operation\ncompletes, it is written with the start operation as parent. The operation\ncannot fail to commit (except for disk failures and such). It is left for the\nnext command to notice if there were divergent operations. It will have to be\nable to do that anyway since the concurrent operation could have arrived via a\ndistributed file system. This model -- where each operation sees a consistent\nview of the repo and is guaranteed to be able to commit their changes -- greatly\nsimplifies the implementation of commands."
  }, {
    "heading": "operation-log",
    "content": "It is possible to load the repo at a particular operation with\njj --at-operation=<operation ID> <command>. If the command is mutational, that\nwill result in a fork in the operation log. That works exactly the same as if\nany later operations had not existed when the command started. In other words,\nrunning commands on a repo loaded at an earlier operation works the same way as\nif the operations had been concurrent. This can be useful for simulating\ndivergent operations."
  }, {
    "heading": "merging-divergent-operations",
    "content": 'If Jujutsu tries to load the repo and finds multiple heads in the operation log,\nit will do a 3-way merge of the view objects based on their common ancestor\n(possibly several 3-way merges if there were more than two heads). Conflicts\nare recorded in the resulting view object. For example, if bookmark main was\nmoved from commit A to commit B in one operation and moved to commit C in a\nconcurrent operation, then main will be recorded as "moved from A to B or C".\nSee the RefTarget definition in op_store.proto.'
  }, {
    "heading": "merging-divergent-operations",
    "content": "Because we allow bookmarks (etc.) to be in a conflicted state rather than just\nerroring out when there are multiple heads, the user can continue to use the\nrepo, including performing further operations on the repo. Of course, some\ncommands will fail when using a conflicted bookmark. For example,\njj new main when main is in a conflicted state will result in an error\ntelling you that main resolved to multiple revisions."
  }, {
    "heading": "storage",
    "content": "The operation objects and view objects are stored in content-addressed storage\njust like Git commits are. That makes them safe to write without locking."
  }, {
    "heading": "storage",
    "content": "We also need a way of finding the current head of the operation log. We do that\nby keeping the ID of the current head(s) as a file in a directory. The ID is the\nname of the file; it has no contents. When an operation completes, we add a file\npointing to the new operation and then remove the file pointing to the old\noperation. Writing the new file is what makes the operation visible (if the old\nfile didn't get properly deleted, then future readers will take care of that).\nThis scheme ensures that transactions are atomic."
  }],
  "headings": [{
    "id": "introduction",
    "content": "Introduction"
  }, {
    "id": "syncing-with-rsync-nfs-dropbox-etc",
    "content": "Syncing with rsync, NFS, Dropbox, etc"
  }, {
    "id": "operation-log",
    "content": "Operation log"
  }, {
    "id": "merging-divergent-operations",
    "content": "Merging divergent operations"
  }, {
    "id": "storage",
    "content": "Storage"
  }]
};
const toc = [{
  depth: 2,
  url: "#introduction",
  title: jsx(Fragment, {
    children: "Introduction"
  })
}, {
  depth: 3,
  url: "#syncing-with-rsync-nfs-dropbox-etc",
  title: jsxs(Fragment, {
    children: ["Syncing with ", jsx("code", {
      children: "rsync"
    }), ", NFS, Dropbox, etc"]
  })
}, {
  depth: 2,
  url: "#operation-log",
  title: jsx(Fragment, {
    children: "Operation log"
  })
}, {
  depth: 3,
  url: "#merging-divergent-operations",
  title: jsx(Fragment, {
    children: "Merging divergent operations"
  })
}, {
  depth: 3,
  url: "#storage",
  title: jsx(Fragment, {
    children: "Storage"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", jsxs(_components.p, {
      children: ["Concurrent editing is a key feature of DVCSs -- that's why they're called\n", jsx(_components.em, {
        children: "Distributed"
      }), " Version Control Systems. A DVCS that didn't let users edit files\nand create commits on separate machines at the same time wouldn't be much\nof a distributed VCS."]
    }), "\n", jsxs(_components.p, {
      children: ["When conflicting changes are made in different clones, a DVCS will have to deal\nwith that when you push or pull. For example, when using Mercurial, if the\nremote has updated a bookmark called ", jsx(_components.code, {
        children: "main"
      }), " (Mercurial's bookmarks are similar\nto a Git's branches) and you had updated the same bookmark locally but made it\npoint to a different target, Mercurial would add a bookmark called ", jsx(_components.code, {
        children: "main@origin"
      }), "\nto indicate the conflict. Git instead prevents the conflict by renaming pulled\nbranches to ", jsx(_components.code, {
        children: "origin/main"
      }), " whether or not there was a conflict. However, most\nDVCSs treat local concurrency quite differently, typically by using lock files\nto prevent concurrent edits. Unlike those DVCSs, Jujutsu treats concurrent edits\nthe same whether they're made locally or remotely."]
    }), "\n", jsxs(_components.p, {
      children: ["One problem with using lock files is that they don't work when the clone is in a\ndistributed file system. Most clones are of course not stored in distributed\nfile systems, but it is a ", jsx(_components.em, {
        children: "big"
      }), " problem when they are (Mercurial repos\nfrequently get corrupted, for example)."]
    }), "\n", jsx(_components.p, {
      children: "Another problem with using lock files is related to complexity of\nimplementation. The simplest way of using lock files is to take coarse-grained\nlocks early: every command that may modify the repo takes a lock at the very\nbeginning. However, that means that operations that wouldn't actually conflict\nwould still have to wait for each other. The user experience can be improved by\nusing finer-grained locks and/or taking the locks later. The drawback of that is\ncomplexity. For example, you need to verify that any assumptions you made before\nlocking are still valid after you take the lock."
    }), "\n", jsx(_components.p, {
      children: "To avoid depending on lock files, Jujutsu takes a different approach by\naccepting that concurrent changes can always happen. It instead exposes any\nconflicting changes to the user, much like other DVCSs do for conflicting\nchanges made remotely."
    }), "\n", jsxs(_components.h3, {
      id: "syncing-with-rsync-nfs-dropbox-etc",
      children: ["Syncing with ", jsx(_components.code, {
        children: "rsync"
      }), ", NFS, Dropbox, etc"]
    }), "\n", jsxs(_components.p, {
      children: ["Jujutsu's lock-free concurrency means that it's possible to update copies of the\nclone on different machines and then let ", jsx(_components.code, {
        children: "rsync"
      }), " (or Dropbox, or NFS, etc.)\nmerge them. The working copy may mismatch what's supposed to be checked out, but\nno changes to the repo will be lost (added commits, moved bookmarks, etc.). If\nconflicting changes were made, they will appear as conflicts. For example, if a\nbookmark was moved to two different locations, they will appear in ", jsx(_components.code, {
        children: "jj log"
      }), ' in\nboth locations but with a "?" after the name, and ', jsx(_components.code, {
        children: "jj status"
      }), " will also inform\nthe user about the conflict."]
    }), "\n", jsxs(_components.p, {
      children: ["Note that, for now, there are known bugs in this area. Most notably, with the\nGit backend, ", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/issues/2193",
        children: "repository corruption is possible because the backend is not\nentirely lock-free"
      }), ". If you know\nabout the bug, it is relatively easy to recover from."]
    }), "\n", jsxs(_components.p, {
      children: ["Moreover, such use of Jujutsu is not currently thoroughly tested,\nespecially in the context of ", jsx(_components.a, {
        href: "../glossary#colocated-repos",
        children: "colocated\nrepositories"
      }), ". While the contents of commits\nshould be safe, concurrent modification of a repository from different computers\nmight conceivably lose some bookmark pointers. Note that, unlike in pure\nGit, losing a bookmark pointer does not lead to losing commits."]
    }), "\n", jsx(_components.h2, {
      id: "operation-log",
      children: "Operation log"
    }), "\n", jsx(_components.p, {
      children: 'The most important piece in the lock-free design is the "operation log". That is\nwhat allows us to detect and merge divergent operations.'
    }), "\n", jsxs(_components.p, {
      children: ["The operation log is similar to a commit DAG (such as in\n", jsx(_components.a, {
        href: "https://git-scm.com/book/en/v2/Git-Internals-Git-Objects",
        children: "Git's object model"
      }), '),\nbut each commit object is instead an "operation" and each tree object is instead\na "view". The view object contains the set of visible head commits, bookmarks,\ntags, and the working-copy commit in each workspace. The operation object\ncontains a pointer to the view object (like how commit objects point to tree\nobjects), pointers to parent operation(s) (like how commit objects point to\nparent commit(s)), and metadata about the operation. These types are defined\nin ', jsx(_components.code, {
        children: "op_store.proto"
      }), " The operation log is normally linear.\nIt becomes non-linear if there are divergent operations."]
    }), "\n", jsx(_components.p, {
      children: "When a command starts, it loads the repo at the latest operation. Because the\nassociated view object completely defines the repo state, the running command\nwill not see any changes made by other processes thereafter. When the operation\ncompletes, it is written with the start operation as parent. The operation\ncannot fail to commit (except for disk failures and such). It is left for the\nnext command to notice if there were divergent operations. It will have to be\nable to do that anyway since the concurrent operation could have arrived via a\ndistributed file system. This model -- where each operation sees a consistent\nview of the repo and is guaranteed to be able to commit their changes -- greatly\nsimplifies the implementation of commands."
    }), "\n", jsxs(_components.p, {
      children: ["It is possible to load the repo at a particular operation with\n", jsx(_components.code, {
        children: "jj --at-operation=<operation ID> <command>"
      }), ". If the command is mutational, that\nwill result in a fork in the operation log. That works exactly the same as if\nany later operations had not existed when the command started. In other words,\nrunning commands on a repo loaded at an earlier operation works the same way as\nif the operations had been concurrent. This can be useful for simulating\ndivergent operations."]
    }), "\n", jsx(_components.h3, {
      id: "merging-divergent-operations",
      children: "Merging divergent operations"
    }), "\n", jsxs(_components.p, {
      children: ["If Jujutsu tries to load the repo and finds multiple heads in the operation log,\nit will do a 3-way merge of the view objects based on their common ancestor\n(possibly several 3-way merges if there were more than two heads). Conflicts\nare recorded in the resulting view object. For example, if bookmark ", jsx(_components.code, {
        children: "main"
      }), " was\nmoved from commit A to commit B in one operation and moved to commit C in a\nconcurrent operation, then ", jsx(_components.code, {
        children: "main"
      }), ' will be recorded as "moved from A to B or C".\nSee the ', jsx(_components.code, {
        children: "RefTarget"
      }), " definition in ", jsx(_components.code, {
        children: "op_store.proto"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["Because we allow bookmarks (etc.) to be in a conflicted state rather than just\nerroring out when there are multiple heads, the user can continue to use the\nrepo, including performing further operations on the repo. Of course, some\ncommands will fail when using a conflicted bookmark. For example,\n", jsx(_components.code, {
        children: "jj new main"
      }), " when ", jsx(_components.code, {
        children: "main"
      }), " is in a conflicted state will result in an error\ntelling you that ", jsx(_components.code, {
        children: "main"
      }), " resolved to multiple revisions."]
    }), "\n", jsx(_components.h3, {
      id: "storage",
      children: "Storage"
    }), "\n", jsx(_components.p, {
      children: "The operation objects and view objects are stored in content-addressed storage\njust like Git commits are. That makes them safe to write without locking."
    }), "\n", jsx(_components.p, {
      children: "We also need a way of finding the current head of the operation log. We do that\nby keeping the ID of the current head(s) as a file in a directory. The ID is the\nname of the file; it has no contents. When an operation completes, we add a file\npointing to the new operation and then remove the file pointing to the old\noperation. Writing the new file is what makes the operation visible (if the old\nfile didn't get properly deleted, then future readers will take care of that).\nThis scheme ensures that transactions are atomic."
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
//# sourceMappingURL=concurrency-DqooP9GE.mjs.map
