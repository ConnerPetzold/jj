import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Working copy"
};
let extractedReferences = [{
  "href": "/reference/filesets"
}, {
  "href": "#ignored-files"
}, {
  "href": "#ignored-files"
}, {
  "href": "https://github.com/jj-vcs/jj/issues/19"
}, {
  "href": "https://git-scm.com/docs/gitignore"
}];
let structuredData = {
  "contents": [{
    "heading": "introduction",
    "content": "The working copy is where the current working-copy commit's files are written so\nyou can interact with them. It is also where files are read from in order to\ncreate new commits (though there are many other ways of creating new commits)."
  }, {
    "heading": "introduction",
    "content": "Unlike most other VCSs, Jujutsu will automatically create commits from the\nworking-copy contents when they have changed. Most jj commands you run will\ncommit the working-copy changes if they have changed. The resulting revision\nwill replace the previous working-copy revision."
  }, {
    "heading": "introduction",
    "content": "Also unlike most other VCSs, added files are implicitly tracked by default. That\nmeans that if you add a new file to the working copy, it will be automatically\ncommitted once you run e.g. jj st. Similarly, if you remove a file from the\nworking copy, it will implicitly be untracked."
  }, {
    "heading": "introduction",
    "content": "The snapshot.auto-track config option controls which paths get automatically\ntracked when they're added to the working copy. See the\nfileset documentation for the syntax. Files with paths matching\nignore files are never tracked automatically."
  }, {
    "heading": "introduction",
    "content": "If you set snapshot.auto-track to a non-default value, untracked files can be\ntracked with jj file track."
  }, {
    "heading": "introduction",
    "content": "You can use jj file untrack to untrack a file while keeping it in the working\ncopy. However, first ignore them or remove them from the\nsnapshot.auto-track patterns; otherwise they will be immediately tracked again."
  }, {
    "heading": "conflicts",
    "content": "When you check out a commit with conflicts, those conflicts need to be\nrepresented in the working copy somehow. However, the file system doesn't\nunderstand conflicts. Jujutsu's solution is to add conflict markers to\nconflicted files when it writes them to the working copy. It also keeps track of\nthe (typically 3) different parts involved in the conflict. Whenever it scans\nthe working copy thereafter, it parses the conflict markers and recreates the\nconflict state from them. You can resolve conflicts by replacing the conflict\nmarkers by the resolved text. You don't need to resolve all conflicts at once.\nYou can even resolve part of a conflict by updating the different parts of the\nconflict marker."
  }, {
    "heading": "conflicts",
    "content": "To resolve conflicts in a commit, use jj new <commit> to create a working-copy\ncommit on top. You would then have the same conflicts in the working-copy\ncommit. Once you have resolved the conflicts, you can inspect the conflict\nresolutions with jj diff. Then run jj squash to move the conflict\nresolutions into the conflicted commit. Alternatively, you can edit the commit\nwith conflicts directly in the working copy by using jj edit <commit>. The\nmain disadvantage of that is that it's harder to inspect the conflict\nresolutions."
  }, {
    "heading": "conflicts",
    "content": "With the jj resolve command, you can use an external merge tool to resolve\nconflicts that have 2 sides and a base. There is not yet a good way of\nresolving conflicts between directories, files, and symlinks\n(https://github.com/jj-vcs/jj/issues/19). You can use jj restore to choose\none side of the conflict, but there's no way to even see where the involved\nparts came from."
  }, {
    "heading": "ignored-files",
    "content": "You probably don't want build outputs and temporary files to be under version\ncontrol. You can tell Jujutsu to not automatically track certain files by using\n.gitignore files (there's no such thing as .jjignore yet). See\nhttps://git-scm.com/docs/gitignore for details about the format. .gitignore\nfiles are supported in any directory in the working copy, as well as in\n$XDG_CONFIG_HOME/git/ignore and $GIT_DIR/info/exclude."
  }, {
    "heading": "ignored-files",
    "content": "Ignored files are never tracked automatically (regardless of the value of\nsnapshot.auto-track), but files that were already tracked will remain tracked\neven if they match ignore patterns. You can untrack such files with the\njj file untrack command."
  }, {
    "heading": "workspaces",
    "content": 'You can have multiple working copies backed by a single repo. Use\njj workspace add to create a new working copy. The working copy will have a\n.jj/ directory linked to the main repo. The working copy and the .jj/\ndirectory together is called a "workspace". Each workspace can have a different\ncommit checked out.'
  }, {
    "heading": "workspaces",
    "content": "Having multiple workspaces can be useful for running long-running tests in a one\nwhile you continue developing in another, for example. If needed,\njj workspace root prints the root path of the current workspace."
  }, {
    "heading": "workspaces",
    "content": "When you're done using a workspace, use jj workspace forget to make the repo\nforget about it. The files can be deleted from disk separately (either before or\nafter)."
  }, {
    "heading": "stale-working-copy",
    "content": "Almost all commands go through three main steps:"
  }, {
    "heading": "stale-working-copy",
    "content": "Snapshot the working copy (which gets recorded as an operation)"
  }, {
    "heading": "stale-working-copy",
    "content": 'Create new commits etc. "in memory" and record that as a new operation'
  }, {
    "heading": "stale-working-copy",
    "content": "Update the working copy to match the new operation, i.e. to the commit that\nthe operation says that @ should point to"
  }, {
    "heading": "stale-working-copy",
    "content": `If step 3 doesn't happen for some reason, the working copy is considered
"stale". We can detect that because the working copy (.jj/working_copy/)
keeps track of which operation it was last updated to. When the working copy is
stale, use jj workspace update-stale to update the files in the working copy.`
  }, {
    "heading": "stale-working-copy",
    "content": "A common reason that step 3 doesn't happen for a working copy is that you\nrewrote the commit from another workspace. When you modify workspace A's\nworking-copy commit from workspace B, workspace A's working copy will become\nstale."
  }, {
    "heading": "stale-working-copy",
    "content": `A working copy can also become stale because some error, such as ^C prevented
step 3 from completing. It's also possible that it was successfully updated in
step 3 but the operation has then been lost (e.g. by jj op abandon or
"spontaneously" by certain storage backends). If the operation has been lost,
then jj workspace update-stale will create a recovery commit with the
contents of the working copy but parented to the current operation's
working-copy commit.`
  }],
  "headings": [{
    "id": "introduction",
    "content": "Introduction"
  }, {
    "id": "conflicts",
    "content": "Conflicts"
  }, {
    "id": "ignored-files",
    "content": "Ignored files"
  }, {
    "id": "workspaces",
    "content": "Workspaces"
  }, {
    "id": "stale-working-copy",
    "content": "Stale working copy"
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
  url: "#conflicts",
  title: jsx(Fragment, {
    children: "Conflicts"
  })
}, {
  depth: 2,
  url: "#ignored-files",
  title: jsx(Fragment, {
    children: "Ignored files"
  })
}, {
  depth: 2,
  url: "#workspaces",
  title: jsx(Fragment, {
    children: "Workspaces"
  })
}, {
  depth: 2,
  url: "#stale-working-copy",
  title: jsx(Fragment, {
    children: "Stale working copy"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", jsx(_components.p, {
      children: "The working copy is where the current working-copy commit's files are written so\nyou can interact with them. It is also where files are read from in order to\ncreate new commits (though there are many other ways of creating new commits)."
    }), "\n", jsxs(_components.p, {
      children: ["Unlike most other VCSs, Jujutsu will automatically create commits from the\nworking-copy contents when they have changed. Most ", jsx(_components.code, {
        children: "jj"
      }), " commands you run will\ncommit the working-copy changes if they have changed. The resulting revision\nwill replace the previous working-copy revision."]
    }), "\n", jsxs(_components.p, {
      children: ["Also unlike most other VCSs, added files are implicitly tracked by default. That\nmeans that if you add a new file to the working copy, it will be automatically\ncommitted once you run e.g. ", jsx(_components.code, {
        children: "jj st"
      }), ". Similarly, if you remove a file from the\nworking copy, it will implicitly be untracked."]
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "snapshot.auto-track"
      }), " config option controls which paths get automatically\ntracked when they're added to the working copy. See the\n", jsx(_components.a, {
        href: "/reference/filesets",
        children: "fileset documentation"
      }), " for the syntax. Files with paths matching\n", jsx(_components.a, {
        href: "#ignored-files",
        children: "ignore files"
      }), " are never tracked automatically."]
    }), "\n", jsxs(_components.p, {
      children: ["If you set ", jsx(_components.code, {
        children: "snapshot.auto-track"
      }), " to a non-default value, untracked files can be\ntracked with ", jsx(_components.code, {
        children: "jj file track"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["You can use ", jsx(_components.code, {
        children: "jj file untrack"
      }), " to untrack a file while keeping it in the working\ncopy. However, first ", jsx(_components.a, {
        href: "#ignored-files",
        children: "ignore"
      }), " them or remove them from the\n", jsx(_components.code, {
        children: "snapshot.auto-track"
      }), " patterns; otherwise they will be immediately tracked again."]
    }), "\n", jsx(_components.h2, {
      id: "conflicts",
      children: "Conflicts"
    }), "\n", jsx(_components.p, {
      children: "When you check out a commit with conflicts, those conflicts need to be\nrepresented in the working copy somehow. However, the file system doesn't\nunderstand conflicts. Jujutsu's solution is to add conflict markers to\nconflicted files when it writes them to the working copy. It also keeps track of\nthe (typically 3) different parts involved in the conflict. Whenever it scans\nthe working copy thereafter, it parses the conflict markers and recreates the\nconflict state from them. You can resolve conflicts by replacing the conflict\nmarkers by the resolved text. You don't need to resolve all conflicts at once.\nYou can even resolve part of a conflict by updating the different parts of the\nconflict marker."
    }), "\n", jsxs(_components.p, {
      children: ["To resolve conflicts in a commit, use ", jsx(_components.code, {
        children: "jj new <commit>"
      }), " to create a working-copy\ncommit on top. You would then have the same conflicts in the working-copy\ncommit. Once you have resolved the conflicts, you can inspect the conflict\nresolutions with ", jsx(_components.code, {
        children: "jj diff"
      }), ". Then run ", jsx(_components.code, {
        children: "jj squash"
      }), " to move the conflict\nresolutions into the conflicted commit. Alternatively, you can edit the commit\nwith conflicts directly in the working copy by using ", jsx(_components.code, {
        children: "jj edit <commit>"
      }), ". The\nmain disadvantage of that is that it's harder to inspect the conflict\nresolutions."]
    }), "\n", jsxs(_components.p, {
      children: ["With the ", jsx(_components.code, {
        children: "jj resolve"
      }), " command, you can use an external merge tool to resolve\nconflicts that have 2 sides and a base. There is not yet a good way of\nresolving conflicts between directories, files, and symlinks\n(", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/issues/19",
        children: "https://github.com/jj-vcs/jj/issues/19"
      }), "). You can use ", jsx(_components.code, {
        children: "jj restore"
      }), " to choose\none side of the conflict, but there's no way to even see where the involved\nparts came from."]
    }), "\n", jsx(_components.h2, {
      id: "ignored-files",
      children: "Ignored files"
    }), "\n", jsxs(_components.p, {
      children: ["You probably don't want build outputs and temporary files to be under version\ncontrol. You can tell Jujutsu to not automatically track certain files by using\n", jsx(_components.code, {
        children: ".gitignore"
      }), " files (there's no such thing as ", jsx(_components.code, {
        children: ".jjignore"
      }), " yet). See\n", jsx(_components.a, {
        href: "https://git-scm.com/docs/gitignore",
        children: "https://git-scm.com/docs/gitignore"
      }), " for details about the format. ", jsx(_components.code, {
        children: ".gitignore"
      }), "\nfiles are supported in any directory in the working copy, as well as in\n", jsx(_components.code, {
        children: "$XDG_CONFIG_HOME/git/ignore"
      }), " and ", jsx(_components.code, {
        children: "$GIT_DIR/info/exclude"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["Ignored files are never tracked automatically (regardless of the value of\n", jsx(_components.code, {
        children: "snapshot.auto-track"
      }), "), but files that were already tracked will remain tracked\neven if they match ignore patterns. You can untrack such files with the\n", jsx(_components.code, {
        children: "jj file untrack"
      }), " command."]
    }), "\n", jsx(_components.h2, {
      id: "workspaces",
      children: "Workspaces"
    }), "\n", jsxs(_components.p, {
      children: ["You can have multiple working copies backed by a single repo. Use\n", jsx(_components.code, {
        children: "jj workspace add"
      }), " to create a new working copy. The working copy will have a\n", jsx(_components.code, {
        children: ".jj/"
      }), " directory linked to the main repo. The working copy and the ", jsx(_components.code, {
        children: ".jj/"
      }), '\ndirectory together is called a "workspace". Each workspace can have a different\ncommit checked out.']
    }), "\n", jsxs(_components.p, {
      children: ["Having multiple workspaces can be useful for running long-running tests in a one\nwhile you continue developing in another, for example. If needed,\n", jsx(_components.code, {
        children: "jj workspace root"
      }), " prints the root path of the current workspace."]
    }), "\n", jsxs(_components.p, {
      children: ["When you're done using a workspace, use ", jsx(_components.code, {
        children: "jj workspace forget"
      }), " to make the repo\nforget about it. The files can be deleted from disk separately (either before or\nafter)."]
    }), "\n", jsx(_components.h2, {
      id: "stale-working-copy",
      children: "Stale working copy"
    }), "\n", jsx(_components.p, {
      children: "Almost all commands go through three main steps:"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "Snapshot the working copy (which gets recorded as an operation)"
      }), "\n", jsx(_components.li, {
        children: 'Create new commits etc. "in memory" and record that as a new operation'
      }), "\n", jsxs(_components.li, {
        children: ["Update the working copy to match the new operation, i.e. to the commit that\nthe operation says that ", jsx(_components.code, {
          children: "@"
        }), " should point to"]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: [`If step 3 doesn't happen for some reason, the working copy is considered
"stale". We can detect that because the working copy (`, jsx(_components.code, {
        children: ".jj/working_copy/"
      }), ")\nkeeps track of which operation it was last updated to. When the working copy is\nstale, use ", jsx(_components.code, {
        children: "jj workspace update-stale"
      }), " to update the files in the working copy."]
    }), "\n", jsx(_components.p, {
      children: "A common reason that step 3 doesn't happen for a working copy is that you\nrewrote the commit from another workspace. When you modify workspace A's\nworking-copy commit from workspace B, workspace A's working copy will become\nstale."
    }), "\n", jsxs(_components.p, {
      children: ["A working copy can also become stale because some error, such as ", jsx(_components.code, {
        children: "^C"
      }), " prevented\nstep 3 from completing. It's also possible that it was successfully updated in\nstep 3 but the operation has then been lost (e.g. by ", jsx(_components.code, {
        children: "jj op abandon"
      }), ' or\n"spontaneously" by certain storage backends). If the operation has been lost,\nthen ', jsx(_components.code, {
        children: "jj workspace update-stale"
      }), " will create a recovery commit with the\ncontents of the working copy but parented to the current operation's\nworking-copy commit."]
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
//# sourceMappingURL=working-copy-Cp8cvM6b.mjs.map
