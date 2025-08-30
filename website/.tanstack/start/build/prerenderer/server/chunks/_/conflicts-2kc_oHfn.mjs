import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Conflicts"
};
let extractedReferences = [{
  "href": "/technical-details/conflicts"
}, {
  "href": "https://www.mercurial-scm.org/wiki/ChangesetEvolution"
}, {
  "href": "https://git-scm.com/docs/git-rerere"
}, {
  "href": "https://git-scm.com/docs/gitglossary/2.22.0#Documentation/gitglossary.txt-aiddefevilmergeaevilmerge"
}, {
  "href": "https://stackoverflow.com/questions/26370185/how-do-criss-cross-merges-arise-in-git"
}, {
  "href": "https://git-scm.com/docs/git-merge#Documentation/git-merge.txt-octopus"
}, {
  "href": "working-copy#conflicts"
}, {
  "href": "https://git-scm.com/docs/git-merge#_how_conflicts_are_presented"
}];
let structuredData = {
  "contents": [{
    "heading": "introduction",
    "content": "Conflicts happen when Jujutsu can't figure out how to merge different changes\nmade to the same file. For instance, this can happen if two people are working\non the same file and make different changes to the same part of the file, and\nthen their commits are merged together with jj new (or one is rebased onto the\nother with jj rebase)."
  }, {
    "heading": "introduction",
    "content": "Unlike most other VCSs, Jujutsu can record conflicted states in commits. For\nexample, if you rebase a commit and it results in a conflict, the conflict will\nbe recorded in the rebased commit and the rebase operation will succeed. You can\nthen resolve the conflict whenever you want. Conflicted states can be further\nrebased, merged, or backed out. Note that what's stored in the commit is a\nlogical representation of the conflict, not conflict markers; rebasing a\nconflict doesn't result in a nested conflict markers (see\ntechnical doc for how this works)."
  }, {
    "heading": "advantages",
    "content": "The deeper understanding of conflicts has many advantages:"
  }, {
    "heading": "advantages",
    "content": "Removes the need for things like\ngit rebase/merge/cherry-pick/etc --continue. Instead, you get a single\nworkflow for resolving conflicts: check out the conflicted commit, resolve\nconflicts, and amend."
  }, {
    "heading": "advantages",
    "content": `Enables the "auto-rebase" feature, where descendants of rewritten commits
automatically get rewritten. This feature mostly replaces Mercurial's
Changeset Evolution.`
  }, {
    "heading": "advantages",
    "content": "Lets us define the change in a merge commit as being compared to the merged\nparents. That way, we can rebase merge commits correctly (unlike both Git and\nMercurial). That includes conflict resolutions done in the merge commit,\naddressing a common use case for\ngit rerere.\nSince the changes in a merge commit are displayed and rebased as expected,\nevil merges\nare arguably not as evil anymore."
  }, {
    "heading": "advantages",
    "content": "Allows you to postpone conflict resolution until you're ready for it. You\ncan easily keep all your work-in-progress commits rebased onto upstream's head\nif you like."
  }, {
    "heading": "advantages",
    "content": "Criss-cross merges\nand octopus merges\nbecome trivial (implementation-wise); some cases that Git can't currently\nhandle, or that would result in nested conflict markers, can be automatically\nresolved."
  }, {
    "heading": "advantages",
    "content": "Enables collaborative conflict resolution. (This assumes that you can share\nthe conflicts with others, which you probably shouldn't do if some people\ninteract with your project using Git.)"
  }, {
    "heading": "advantages",
    "content": "For information about how conflicts are handled in the working copy, see\nhere."
  }, {
    "heading": "conflict-markers",
    "content": 'Conflicts are "materialized" using conflict markers in various contexts. For\nexample, when you run jj new or jj edit on a commit with a conflict, it will\nbe materialized in the working copy. Conflicts are also materialized when they\nare part of diff output (e.g. jj show on a commit that introduces or resolves\na conflict).'
  }, {
    "heading": "conflict-markers",
    "content": "As an example, imagine that you have a file which contains the following text,\nall in lowercase:"
  }, {
    "heading": "conflict-markers",
    "content": `One person replaces the word "grape" with "grapefruit" in commit A, while
another person changes every line to uppercase in commit B. If you merge the
changes together with jj new A B, the resulting commit will have a conflict
since Jujutsu can't figure out how to combine these changes. Therefore, Jujutsu
will materialize the conflict in the working copy using conflict markers, which
would look like this:`
  }, {
    "heading": "conflict-markers",
    "content": 'The markers <<<<<<< and >>>>>>> indicate the start and end of a conflict\nrespectively. The marker +++++++ indicates the start of a snapshot, while the\nmarker %%%%%%% indicates the start of a diff to apply to the snapshot.\nTherefore, to resolve this conflict, you would apply the diff (changing "grape"\nto "grapefruit") to the snapshot (the side with every line in uppercase),\nediting the file to look like this:'
  }, {
    "heading": "conflict-markers",
    "content": "In practice, conflicts are usually 2-sided, meaning that there's only 2\nconflicting changes being merged together at a time, but Jujutsu supports\nconflicts with arbitrarily many sides, which can happen when merging 3 or more\ncommits at once. In that case, you would see a single snapshot section and\nmultiple diff sections."
  }, {
    "heading": "conflict-markers",
    "content": "Compared to just showing the content of each side of the conflict, the main\nbenefit of Jujutsu's style of conflict markers is that you don't need to spend\ntime manually comparing the sides to spot the differences between them. This is\nespecially beneficial for many-sided conflicts, since resolving them just\nrequires applying each diff to the snapshot one-by-one."
  }, {
    "heading": "alternative-conflict-marker-styles",
    "content": 'If you prefer to just see the contents of each side of the conflict without the\ndiff, Jujutsu also supports a "snapshot" style, which can be enabled by setting\nthe ui.conflict-marker-style config option to "snapshot":'
  }, {
    "heading": "alternative-conflict-marker-styles",
    "content": `Some tools expect Git-style conflict markers, so Jujutsu also supports Git's
"diff3" style
conflict markers by setting the ui.conflict-marker-style config option to
"git":`
  }, {
    "heading": "alternative-conflict-marker-styles",
    "content": 'This conflict marker style only supports 2-sided conflicts though, so it falls\nback to the similar "snapshot" conflict markers if there are more than 2 sides\nto the conflict.'
  }, {
    "heading": "long-conflict-markers",
    "content": "Some files may contain lines which could be confused for conflict markers. For\ninstance, a line could start with =======, which looks like a Git-style\nconflict marker. To ensure that it's always unambiguous which lines are conflict\nmarkers and which are just part of the file contents, jj sometimes uses\nconflict markers which are longer than normal:"
  }, {
    "heading": "conflicts-with-missing-terminating-newline",
    "content": "When materializing conflicts, jj outputs them in a line-based format. This\nformat is easiest to interpret for text files that consist of a series of lines,\nwith each line terminated by a newline character (\\n). This means that a text\nfile should either be empty, or it should end with a newline character."
  }, {
    "heading": "conflicts-with-missing-terminating-newline",
    "content": "While most text files follow this convention, some do not. When jj encounters\na missing terminating newline character in a conflict, it will add a comment to\nthe conflict markers to make the conflict easier to interpret. If you don't care\nabout whether your file ends with a terminating newline character, you can\ngenerally ignore this comment and resolve the conflict normally."
  }, {
    "heading": "conflicts-with-missing-terminating-newline",
    "content": "For instance, if a file originally contained grape with no terminating newline\ncharacter, and one person changed grape to grapefruit, while another person\nadded the missing newline character to make grape\\n, the resulting conflict\nwould look like this:"
  }, {
    "heading": "conflicts-with-missing-terminating-newline",
    "content": "Therefore, a resolution of this conflict could be grapefruit\\n, with the\nterminating newline character added."
  }],
  "headings": [{
    "id": "introduction",
    "content": "Introduction"
  }, {
    "id": "advantages",
    "content": "Advantages"
  }, {
    "id": "conflict-markers",
    "content": "Conflict markers"
  }, {
    "id": "alternative-conflict-marker-styles",
    "content": "Alternative conflict marker styles"
  }, {
    "id": "long-conflict-markers",
    "content": "Long conflict markers"
  }, {
    "id": "conflicts-with-missing-terminating-newline",
    "content": "Conflicts with missing terminating newline"
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
  url: "#advantages",
  title: jsx(Fragment, {
    children: "Advantages"
  })
}, {
  depth: 2,
  url: "#conflict-markers",
  title: jsx(Fragment, {
    children: "Conflict markers"
  })
}, {
  depth: 2,
  url: "#alternative-conflict-marker-styles",
  title: jsx(Fragment, {
    children: "Alternative conflict marker styles"
  })
}, {
  depth: 2,
  url: "#long-conflict-markers",
  title: jsx(Fragment, {
    children: "Long conflict markers"
  })
}, {
  depth: 2,
  url: "#conflicts-with-missing-terminating-newline",
  title: jsx(Fragment, {
    children: "Conflicts with missing terminating newline"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", jsxs(_components.p, {
      children: ["Conflicts happen when Jujutsu can't figure out how to merge different changes\nmade to the same file. For instance, this can happen if two people are working\non the same file and make different changes to the same part of the file, and\nthen their commits are merged together with ", jsx(_components.code, {
        children: "jj new"
      }), " (or one is rebased onto the\nother with ", jsx(_components.code, {
        children: "jj rebase"
      }), ")."]
    }), "\n", jsxs(_components.p, {
      children: ["Unlike most other VCSs, Jujutsu can record conflicted states in commits. For\nexample, if you rebase a commit and it results in a conflict, the conflict will\nbe recorded in the rebased commit and the rebase operation will succeed. You can\nthen resolve the conflict whenever you want. Conflicted states can be further\nrebased, merged, or backed out. Note that what's stored in the commit is a\nlogical representation of the conflict, not conflict ", jsx(_components.em, {
        children: "markers"
      }), "; rebasing a\nconflict doesn't result in a nested conflict markers (see\n", jsx(_components.a, {
        href: "/technical-details/conflicts",
        children: "technical doc"
      }), " for how this works)."]
    }), "\n", jsx(_components.h2, {
      id: "advantages",
      children: "Advantages"
    }), "\n", jsx(_components.p, {
      children: "The deeper understanding of conflicts has many advantages:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["Removes the need for things like\n", jsx(_components.code, {
          children: "git rebase/merge/cherry-pick/etc --continue"
        }), ". Instead, you get a single\nworkflow for resolving conflicts: check out the conflicted commit, resolve\nconflicts, and amend."]
      }), "\n", jsxs(_components.li, {
        children: [`Enables the "auto-rebase" feature, where descendants of rewritten commits
automatically get rewritten. This feature mostly replaces Mercurial's
`, jsx(_components.a, {
          href: "https://www.mercurial-scm.org/wiki/ChangesetEvolution",
          children: "Changeset Evolution"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: ["Lets us define the change in a merge commit as being compared to the merged\nparents. That way, we can rebase merge commits correctly (unlike both Git and\nMercurial). That includes conflict resolutions done in the merge commit,\naddressing a common use case for\n", jsx(_components.a, {
          href: "https://git-scm.com/docs/git-rerere",
          children: "git rerere"
        }), ".\nSince the changes in a merge commit are displayed and rebased as expected,\n", jsx(_components.a, {
          href: "https://git-scm.com/docs/gitglossary/2.22.0#Documentation/gitglossary.txt-aiddefevilmergeaevilmerge",
          children: "evil merges"
        }), "\nare arguably not as evil anymore."]
      }), "\n", jsx(_components.li, {
        children: "Allows you to postpone conflict resolution until you're ready for it. You\ncan easily keep all your work-in-progress commits rebased onto upstream's head\nif you like."
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.a, {
          href: "https://stackoverflow.com/questions/26370185/how-do-criss-cross-merges-arise-in-git",
          children: "Criss-cross merges"
        }), "\nand ", jsx(_components.a, {
          href: "https://git-scm.com/docs/git-merge#Documentation/git-merge.txt-octopus",
          children: "octopus merges"
        }), "\nbecome trivial (implementation-wise); some cases that Git can't currently\nhandle, or that would result in nested conflict markers, can be automatically\nresolved."]
      }), "\n", jsx(_components.li, {
        children: "Enables collaborative conflict resolution. (This assumes that you can share\nthe conflicts with others, which you probably shouldn't do if some people\ninteract with your project using Git.)"
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["For information about how conflicts are handled in the working copy, see\n", jsx(_components.a, {
        href: "working-copy#conflicts",
        children: "here"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "conflict-markers",
      children: "Conflict markers"
    }), "\n", jsxs(_components.p, {
      children: ['Conflicts are "materialized" using ', jsx(_components.em, {
        children: "conflict markers"
      }), " in various contexts. For\nexample, when you run ", jsx(_components.code, {
        children: "jj new"
      }), " or ", jsx(_components.code, {
        children: "jj edit"
      }), " on a commit with a conflict, it will\nbe materialized in the working copy. Conflicts are also materialized when they\nare part of diff output (e.g. ", jsx(_components.code, {
        children: "jj show"
      }), " on a commit that introduces or resolves\na conflict)."]
    }), "\n", jsx(_components.p, {
      children: "As an example, imagine that you have a file which contains the following text,\nall in lowercase:"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "apple"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "grape"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "orange"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ['One person replaces the word "grape" with "grapefruit" in commit A, while\nanother person changes every line to uppercase in commit B. If you merge the\nchanges together with ', jsx(_components.code, {
        children: "jj new A B"
      }), ", the resulting commit will have a conflict\nsince Jujutsu can't figure out how to combine these changes. Therefore, Jujutsu\nwill materialize the conflict in the working copy using conflict markers, which\nwould look like this:"]
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "<<<<<<< Conflict 1 of 1"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "%%%%%%% Changes from base to side #1"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: " apple"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "-grape"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "+grapefruit"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: " orange"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "+++++++ Contents of side #2"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "APPLE"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "GRAPE"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "ORANGE"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: ">>>>>>> Conflict 1 of 1 ends"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["The markers ", jsx(_components.code, {
        children: "<<<<<<<"
      }), " and ", jsx(_components.code, {
        children: ">>>>>>>"
      }), " indicate the start and end of a conflict\nrespectively. The marker ", jsx(_components.code, {
        children: "+++++++"
      }), " indicates the start of a snapshot, while the\nmarker ", jsx(_components.code, {
        children: "%%%%%%%"
      }), ' indicates the start of a diff to apply to the snapshot.\nTherefore, to resolve this conflict, you would apply the diff (changing "grape"\nto "grapefruit") to the snapshot (the side with every line in uppercase),\nediting the file to look like this:']
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "APPLE"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "GRAPEFRUIT"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "ORANGE"
            })
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "In practice, conflicts are usually 2-sided, meaning that there's only 2\nconflicting changes being merged together at a time, but Jujutsu supports\nconflicts with arbitrarily many sides, which can happen when merging 3 or more\ncommits at once. In that case, you would see a single snapshot section and\nmultiple diff sections."
    }), "\n", jsx(_components.p, {
      children: "Compared to just showing the content of each side of the conflict, the main\nbenefit of Jujutsu's style of conflict markers is that you don't need to spend\ntime manually comparing the sides to spot the differences between them. This is\nespecially beneficial for many-sided conflicts, since resolving them just\nrequires applying each diff to the snapshot one-by-one."
    }), "\n", jsx(_components.h2, {
      id: "alternative-conflict-marker-styles",
      children: "Alternative conflict marker styles"
    }), "\n", jsxs(_components.p, {
      children: ['If you prefer to just see the contents of each side of the conflict without the\ndiff, Jujutsu also supports a "snapshot" style, which can be enabled by setting\nthe ', jsx(_components.code, {
        children: "ui.conflict-marker-style"
      }), ' config option to "snapshot":']
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "<<<<<<< Conflict 1 of 1"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "+++++++ Contents of side #1"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "apple"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "grapefruit"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "orange"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "------- Contents of base"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "apple"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "grape"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "orange"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "+++++++ Contents of side #2"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "APPLE"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "GRAPE"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "ORANGE"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: ">>>>>>> Conflict 1 of 1 ends"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Some tools expect Git-style conflict markers, so Jujutsu also supports ", jsx(_components.a, {
        href: "https://git-scm.com/docs/git-merge#_how_conflicts_are_presented",
        children: `Git's
"diff3" style`
      }), "\nconflict markers by setting the ", jsx(_components.code, {
        children: "ui.conflict-marker-style"
      }), ' config option to\n"git":']
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "<<<<<<< Side #1 (Conflict 1 of 1)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "apple"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "grapefruit"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "orange"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "||||||| Base"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "apple"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "grape"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "orange"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "======="
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "APPLE"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "GRAPE"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "ORANGE"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: ">>>>>>> Side #2 (Conflict 1 of 1 ends)"
            })
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: 'This conflict marker style only supports 2-sided conflicts though, so it falls\nback to the similar "snapshot" conflict markers if there are more than 2 sides\nto the conflict.'
    }), "\n", jsx(_components.h2, {
      id: "long-conflict-markers",
      children: "Long conflict markers"
    }), "\n", jsxs(_components.p, {
      children: ["Some files may contain lines which could be confused for conflict markers. For\ninstance, a line could start with ", jsx(_components.code, {
        children: "======="
      }), ", which looks like a Git-style\nconflict marker. To ensure that it's always unambiguous which lines are conflict\nmarkers and which are just part of the file contents, ", jsx(_components.code, {
        children: "jj"
      }), " sometimes uses\nconflict markers which are longer than normal:"]
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "<<<<<<<<<<<<<<< Conflict 1 of 1"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "%%%%%%%%%%%%%%% Changes from base to side #1"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "-Heading"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "+HEADING"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: " ======="
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "+++++++++++++++ Contents of side #2"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "New Heading"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "==========="
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: ">>>>>>>>>>>>>>> Conflict 1 of 1 ends"
            })
          })]
        })
      })
    }), "\n", jsx(_components.h2, {
      id: "conflicts-with-missing-terminating-newline",
      children: "Conflicts with missing terminating newline"
    }), "\n", jsxs(_components.p, {
      children: ["When materializing conflicts, ", jsx(_components.code, {
        children: "jj"
      }), " outputs them in a line-based format. This\nformat is easiest to interpret for text files that consist of a series of lines,\nwith each line terminated by a newline character (", jsx(_components.code, {
        children: "\\n"
      }), "). This means that a text\nfile should either be empty, or it should end with a newline character."]
    }), "\n", jsxs(_components.p, {
      children: ["While most text files follow this convention, some do not. When ", jsx(_components.code, {
        children: "jj"
      }), " encounters\na missing terminating newline character in a conflict, it will add a comment to\nthe conflict markers to make the conflict easier to interpret. If you don't care\nabout whether your file ends with a terminating newline character, you can\ngenerally ignore this comment and resolve the conflict normally."]
    }), "\n", jsxs(_components.p, {
      children: ["For instance, if a file originally contained ", jsx(_components.code, {
        children: "grape"
      }), " with no terminating newline\ncharacter, and one person changed ", jsx(_components.code, {
        children: "grape"
      }), " to ", jsx(_components.code, {
        children: "grapefruit"
      }), ", while another person\nadded the missing newline character to make ", jsx(_components.code, {
        children: "grape\\n"
      }), ", the resulting conflict\nwould look like this:"]
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "<<<<<<< Conflict 1 of 1"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "+++++++ Contents of side #1 (no terminating newline)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "grapefruit"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "%%%%%%% Changes from base to side #2 (adds terminating newline)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "-grape"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "+grape"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: ">>>>>>> Conflict 1 of 1 ends"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Therefore, a resolution of this conflict could be ", jsx(_components.code, {
        children: "grapefruit\\n"
      }), ", with the\nterminating newline character added."]
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
//# sourceMappingURL=conflicts-2kc_oHfn.mjs.map
