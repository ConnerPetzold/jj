import { jsx, jsxs, Fragment } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Bookmarks"
};
let extractedReferences = [{
  "href": "#conflicts"
}, {
  "href": "#manually-tracking-a-bookmark"
}, {
  "href": "#conflicts"
}, {
  "href": "#remotes-and-tracked-bookmarks"
}, {
  "href": "https://git-scm.com/docs/git-push#Documentation/git-push.txt---no-force-with-lease"
}];
let structuredData = {
  "contents": [{
    "heading": "introduction",
    "content": "Bookmarks are named pointers to revisions (just like branches are in Git). You\ncan move them without affecting the target revision's identity. Bookmarks\nautomatically move when revisions are rewritten (e.g. by jj rebase). You can\npass a bookmark's name to commands that want a revision as argument. For example,\njj new main will create a new revision on top of the main bookmark. Use\njj bookmark list to list bookmarks and jj bookmark <subcommand> to create,\nmove, or delete bookmarks. There is currently no concept of an\nactive/current/checked-out bookmark."
  }, {
    "heading": "mapping-to-git-branches",
    "content": "Jujutsu maps its bookmarks to Git branches when interacting with Git repos. For\nexample, jj git push --bookmark foo will push the state of the foo bookmark\nto the foo branch on the Git remote. Similarly, if you create a bar branch\nin the backing Git repo, then a subsequent jj git import will create a bar\nbookmark (reminder: that import happens automatically in\ncolocated repos)."
  }, {
    "heading": "remotes-and-tracked-bookmarks",
    "content": "Jujutsu records the last seen position of a bookmark on each remote (just like\nGit's remote-tracking branches). This record is updated on every jj git fetch\nand jj git push of the bookmark. You can refer to the remembered remote bookmark\npositions with <bookmark name>@<remote name>, such as jj new main@origin. jj\ndoes not provide a way to manually edit these recorded positions."
  }, {
    "heading": "remotes-and-tracked-bookmarks",
    "content": "A remote bookmark can be associated with a local bookmark of the same name. This\nis called a tracked remote bookmark (which maps to a Git remote branch when\nusing the Git backend). When you pull a tracked bookmark from a remote, any\nchanges compared to the current record of the remote's state will be propagated\nto the corresponding local bookmark, which will be created if it doesn't exist\nalready."
  }, {
    "heading": "remotes-and-tracked-bookmarks",
    "content": '!!! note "Details: how fetch pulls bookmarks"'
  }, {
    "heading": "remotes-and-tracked-bookmarks",
    "content": "Let's say you run jj git fetch --remote origin and, during the fetch, jj\ndetermines that the remote's main bookmark has been moved so that its target is\nnow ahead of the local record in main@origin."
  }, {
    "heading": "remotes-and-tracked-bookmarks",
    "content": 'jj will then update main@origin to the new target. If main@origin is\ntracked, jj will also apply the change to the local bookmark main. If the\nlocal target has also been moved compared to main@origin (probably because you\nran jj bookmark set main), then the two updates will be merged. If one is ahead\nof the other, then that target will become the new target. Otherwise, the local\nbookmark will become conflicted (see the "Conflicts" section below\nfor details).'
  }, {
    "heading": "remotes-and-tracked-bookmarks",
    "content": "Most commands don't show the tracked remote bookmark if it has the same target as\nthe local bookmark. The local bookmark (without @<remote name>) is considered the\nbookmark's desired target. Consequently, if you want to update a bookmark on a\nremote, you first update the bookmark locally and then push the update to the\nremote. If a local bookmark also exists on some remote but points to a different\ntarget there, jj log will show the bookmark name with an asterisk suffix (e.g.\nmain*). That is meant to remind you that you may want to push the bookmark to\nsome remote."
  }, {
    "heading": "remotes-and-tracked-bookmarks",
    "content": "If you want to know the internals of bookmark tracking, consult the\nDesign Doc."
  }, {
    "heading": "terminology-summary",
    "content": `A remote bookmark is a bookmark ref on the remote. jj can find out its
actual state only when it's actively communicating with the remote. However,
jj does store the last-seen position of the remote bookmark; this is the
commit jj show <bookmark name>@<remote name> would show. This notion is
completely analogous to Git's "remote-tracking branches".`
  }, {
    "heading": "terminology-summary",
    "content": "A tracked (remote) bookmark is defined above. You can make a remote bookmark\ntracked with the jj bookmark track command, for\nexample."
  }, {
    "heading": "terminology-summary",
    "content": "A tracking (local) bookmark is the local bookmark that jj tries to keep in\nsync with the tracked remote bookmark. For example, after jj bookmark track\nmybookmark@origin, there will be a local bookmark mybookmark that's tracking the\nremote mybookmark@origin bookmark. A local bookmark can track a bookmark of the same\nname on 0 or more remotes."
  }, {
    "heading": "terminology-summary",
    "content": 'The notion of tracked bookmarks serves a similar function to the Git notion of an\n"upstream branch". Unlike Git, a single local bookmark can be tracking remote\nbookmarks on multiple remotes, and the names of the local and remote bookmarks\nmust match.'
  }, {
    "heading": "manually-tracking-a-bookmark",
    "content": "To track a bookmark permanently use jj bookmark track <bookmark name>@<remote name>.\nIt will now be imported as a local bookmark until you untrack it or it is deleted\non the remote."
  }, {
    "heading": "manually-tracking-a-bookmark",
    "content": "Example:"
  }, {
    "heading": "untracking-a-bookmark",
    "content": "To stop following a remote bookmark, you can jj bookmark untrack it. After that,\nsubsequent fetches of that remote will no longer move the local bookmark to match\nthe position of the remote bookmark."
  }, {
    "heading": "untracking-a-bookmark",
    "content": "Example:"
  }, {
    "heading": "listing-tracked-bookmarks",
    "content": "To list tracked bookmarks, you can jj bookmark list --tracked or jj bookmark list -t.\nThis command omits local Git-tracking bookmarks by default."
  }, {
    "heading": "listing-tracked-bookmarks",
    "content": "You can see if a specific bookmark is tracked with jj bookmark list --tracked <bookmark name>."
  }, {
    "heading": "automatic-tracking-of-bookmarks--gitauto-local-bookmark-option",
    "content": "There are two situations where jj tracks bookmarks automatically. jj git\nclone automatically sets up the default remote bookmark (e.g. main@origin) as\ntracked. When you push a local bookmark, the newly created bookmark on the remote is\nmarked as tracked."
  }, {
    "heading": "automatic-tracking-of-bookmarks--gitauto-local-bookmark-option",
    "content": `By default, every other remote bookmark is marked as "not tracked" when it's
fetched. If desired, you need to manually jj bookmark track them. This works
well for repositories where multiple people work on a large number of bookmarks.`
  }, {
    "heading": "automatic-tracking-of-bookmarks--gitauto-local-bookmark-option",
    "content": "The default can be changed by setting the config git.auto-local-bookmark = true.\nThen, jj git fetch tracks every newly fetched bookmark with a local bookmark.\nBranches that already existed before the jj git fetch are not affected. This\nis similar to Mercurial, which fetches all its bookmarks (equivalent to Git's\nbranches) by default."
  }, {
    "heading": "bookmark-movement",
    "content": "Currently Jujutsu automatically moves local bookmarks when these conditions are\nmet:"
  }, {
    "heading": "bookmark-movement",
    "content": "When a commit has been rewritten (e.g, when you rebase) bookmarks and the\nworking-copy will move along with it."
  }, {
    "heading": "bookmark-movement",
    "content": "When a commit has been abandoned, all associated bookmarks will be moved\nto its parent(s). If a working copy was pointing to the abandoned commit,\nthen a new working-copy commit will be created on top of the parent(s)."
  }, {
    "heading": "bookmark-movement",
    "content": "You could describe the movement as following along the change-id of the\ncurrent bookmark commit, even if it isn't entirely accurate."
  }, {
    "heading": "pushing-bookmarks-safety-checks",
    "content": "Before jj git push actually moves, creates, or deletes a remote bookmark, it\nmakes several safety checks."
  }, {
    "heading": "pushing-bookmarks-safety-checks",
    "content": "jj will contact the remote and check that the actual state of the remote\nbookmark matches jj's record of its last known position. If there is a\nconflict, jj will refuse to push the bookmark. In this case, you need to run\njj git fetch --remote <remote name> and resolve the resulting bookmark\nconflict. Then, you can try jj git push again."
  }, {
    "heading": "pushing-bookmarks-safety-checks",
    "content": "If you are familiar with Git, this makes jj git push similar to git\npush --force-with-lease."
  }, {
    "heading": "pushing-bookmarks-safety-checks",
    "content": "There are a few cases where jj git push will succeed even though the remote\nbookmark is in an unexpected location. These are the cases where jj git fetch\nwould not create a bookmark conflict and would not move the local bookmark, e.g.\nif the unexpected location is identical to the local position of the bookmark."
  }, {
    "heading": "pushing-bookmarks-safety-checks",
    "content": "The local bookmark must not be conflicted. If it is, you would\nneed to use jj bookmark move, for example, to resolve the conflict."
  }, {
    "heading": "pushing-bookmarks-safety-checks",
    "content": "This makes jj git push safe even if jj git fetch is performed on a timer\nin the background (this situation is a known issue with some\nforms of git push --force-with-lease). If the bookmark moves on a remote in a\nproblematic way, jj git fetch will create a conflict. This should ensure\nthat the user becomes aware of the conflict before they can jj git push and\noverride the bookmark on the remote."
  }, {
    "heading": "pushing-bookmarks-safety-checks",
    "content": "If the remote bookmark already exists on the remote, it must be\ntracked. If the bookmark does not already\nexist on the remote, there is no problem; jj git push --allow-new will\ncreate the remote bookmark and mark it as tracked."
  }, {
    "heading": "pushing-bookmarks-safety-checks",
    "content": 'See "A general note on safety" in\nhttps://git-scm.com/docs/git-push#Documentation/git-push.txt---no-force-with-lease'
  }, {
    "heading": "conflicts",
    "content": "Bookmarks can end up in a conflicted state. When that happens, jj status will\ninclude information about the conflicted bookmarks (and instructions for how to\nmitigate it). jj bookmark list will have details. jj log will show the bookmark\nname with a double question mark suffix (e.g. main??) on each of the\nconflicted bookmark's potential target revisions. Using the bookmark name to look up\na revision will resolve to all potential targets. That means that jj new main\nwill error out, complaining that the revset resolved to multiple revisions."
  }, {
    "heading": "conflicts",
    "content": "Both local bookmarks (e.g. main) and the remote bookmark (e.g. main@origin) can\nhave conflicts. Both can end up in that state if concurrent operations were run\nin the repo. The local bookmark more typically becomes conflicted because it was\nupdated both locally and on a remote."
  }, {
    "heading": "conflicts",
    "content": "To resolve a conflicted state in a local bookmark (e.g. main), you can move the\nbookmark to the desired target with jj bookmark move. You may want to first either\nmerge the conflicted targets with jj new (e.g. jj new 'all:main'), or you may\nwant to rebase one side on top of the other with jj rebase."
  }, {
    "heading": "conflicts",
    "content": "To resolve a conflicted state in a remote bookmark (e.g. main@origin), simply\npull from the remote (e.g. jj git fetch). The conflict resolution will also\npropagate to the local bookmark (which was presumably also conflicted)."
  }, {
    "heading": "ease-of-use",
    "content": "The use of bookmarks is frequent in some workflows, for example, when\ninteracting with Git repositories containing branches. To this end,\none-letter shortcuts have been implemented, both for the jj bookmark\ncommand itself through an alias (as jj b), and for its subcommands.\nFor example, jj bookmark create BOOKMARK-NAME -r@ can be abbreviated as\njj b c BOOKMARK-NAME -r@."
  }],
  "headings": [{
    "id": "introduction",
    "content": "Introduction"
  }, {
    "id": "mapping-to-git-branches",
    "content": "Mapping to Git branches"
  }, {
    "id": "remotes-and-tracked-bookmarks",
    "content": "Remotes and tracked bookmarks"
  }, {
    "id": "terminology-summary",
    "content": "Terminology summary"
  }, {
    "id": "manually-tracking-a-bookmark",
    "content": "Manually tracking a bookmark"
  }, {
    "id": "untracking-a-bookmark",
    "content": "Untracking a bookmark"
  }, {
    "id": "listing-tracked-bookmarks",
    "content": "Listing tracked bookmarks"
  }, {
    "id": "automatic-tracking-of-bookmarks--gitauto-local-bookmark-option",
    "content": "Automatic tracking of bookmarks & git.auto-local-bookmark option"
  }, {
    "id": "bookmark-movement",
    "content": "Bookmark movement"
  }, {
    "id": "pushing-bookmarks-safety-checks",
    "content": "Pushing bookmarks: Safety checks"
  }, {
    "id": "conflicts",
    "content": "Conflicts"
  }, {
    "id": "ease-of-use",
    "content": "Ease of use"
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
  url: "#mapping-to-git-branches",
  title: jsx(Fragment, {
    children: "Mapping to Git branches"
  })
}, {
  depth: 2,
  url: "#remotes-and-tracked-bookmarks",
  title: jsx(Fragment, {
    children: "Remotes and tracked bookmarks"
  })
}, {
  depth: 3,
  url: "#terminology-summary",
  title: jsx(Fragment, {
    children: "Terminology summary"
  })
}, {
  depth: 3,
  url: "#manually-tracking-a-bookmark",
  title: jsx(Fragment, {
    children: "Manually tracking a bookmark"
  })
}, {
  depth: 3,
  url: "#untracking-a-bookmark",
  title: jsx(Fragment, {
    children: "Untracking a bookmark"
  })
}, {
  depth: 3,
  url: "#listing-tracked-bookmarks",
  title: jsx(Fragment, {
    children: "Listing tracked bookmarks"
  })
}, {
  depth: 3,
  url: "#automatic-tracking-of-bookmarks--gitauto-local-bookmark-option",
  title: jsxs(Fragment, {
    children: ["Automatic tracking of bookmarks & ", jsx("code", {
      children: "git.auto-local-bookmark"
    }), " option"]
  })
}, {
  depth: 2,
  url: "#bookmark-movement",
  title: jsx(Fragment, {
    children: "Bookmark movement"
  })
}, {
  depth: 2,
  url: "#pushing-bookmarks-safety-checks",
  title: jsx(Fragment, {
    children: "Pushing bookmarks: Safety checks"
  })
}, {
  depth: 2,
  url: "#conflicts",
  title: jsx(Fragment, {
    children: "Conflicts"
  })
}, {
  depth: 2,
  url: "#ease-of-use",
  title: jsx(Fragment, {
    children: "Ease of use"
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
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    strong: "strong",
    sup: "sup",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", jsxs(_components.p, {
      children: ["Bookmarks are named pointers to revisions (just like branches are in Git). You\ncan move them without affecting the target revision's identity. Bookmarks\nautomatically move when revisions are rewritten (e.g. by ", jsx(_components.code, {
        children: "jj rebase"
      }), "). You can\npass a bookmark's name to commands that want a revision as argument. For example,\n", jsx(_components.code, {
        children: "jj new main"
      }), " will create a new revision on top of the ", jsx(_components.code, {
        children: "main"
      }), " bookmark. Use\n", jsx(_components.code, {
        children: "jj bookmark list"
      }), " to list bookmarks and ", jsx(_components.code, {
        children: "jj bookmark <subcommand>"
      }), " to create,\nmove, or delete bookmarks. There is currently no concept of an\nactive/current/checked-out bookmark."]
    }), "\n", jsx(_components.h2, {
      id: "mapping-to-git-branches",
      children: "Mapping to Git branches"
    }), "\n", jsxs(_components.p, {
      children: ["Jujutsu maps its bookmarks to Git branches when interacting with Git repos. For\nexample, ", jsx(_components.code, {
        children: "jj git push --bookmark foo"
      }), " will push the state of the ", jsx(_components.code, {
        children: "foo"
      }), " bookmark\nto the ", jsx(_components.code, {
        children: "foo"
      }), " branch on the Git remote. Similarly, if you create a ", jsx(_components.code, {
        children: "bar"
      }), " branch\nin the backing Git repo, then a subsequent ", jsx(_components.code, {
        children: "jj git import"
      }), " will create a ", jsx(_components.code, {
        children: "bar"
      }), "\nbookmark (reminder: that import happens automatically in\n", jsx(_components.a, {
        href: "git-compatibility#colocated-jujutsugit-repos",
        children: "colocated repos"
      }), ")."]
    }), "\n", jsx(_components.h2, {
      id: "remotes-and-tracked-bookmarks",
      children: "Remotes and tracked bookmarks"
    }), "\n", jsxs(_components.p, {
      children: ["Jujutsu records the last seen position of a bookmark on each remote (just like\nGit's remote-tracking branches). This record is updated on every ", jsx(_components.code, {
        children: "jj git fetch"
      }), "\nand ", jsx(_components.code, {
        children: "jj git push"
      }), " of the bookmark. You can refer to the remembered remote bookmark\npositions with ", jsx(_components.code, {
        children: "<bookmark name>@<remote name>"
      }), ", such as ", jsx(_components.code, {
        children: "jj new main@origin"
      }), ". ", jsx(_components.code, {
        children: "jj"
      }), "\ndoes not provide a way to manually edit these recorded positions."]
    }), "\n", jsxs(_components.p, {
      children: ["A remote bookmark can be associated with a local bookmark of the same name. This\nis called a ", jsx(_components.strong, {
        children: "tracked remote bookmark"
      }), " (which maps to a Git remote branch when\nusing the Git backend). When you pull a tracked bookmark from a remote, any\nchanges compared to the current record of the remote's state will be propagated\nto the corresponding local bookmark, which will be created if it doesn't exist\nalready."]
    }), "\n", jsxs(_components.p, {
      children: ['!!! note "Details: how ', jsx(_components.code, {
        children: "fetch"
      }), ' pulls bookmarks"']
    }), "\n", jsxs(_components.p, {
      children: ["Let's say you run ", jsx(_components.code, {
        children: "jj git fetch --remote origin"
      }), " and, during the fetch, ", jsx(_components.code, {
        children: "jj"
      }), "\ndetermines that the remote's ", jsx(_components.code, {
        children: "main"
      }), " bookmark has been moved so that its target is\nnow ahead of the local record in ", jsx(_components.code, {
        children: "main@origin"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj"
      }), " will then update ", jsx(_components.code, {
        children: "main@origin"
      }), " to the new target. If ", jsx(_components.code, {
        children: "main@origin"
      }), " is\n", jsx(_components.strong, {
        children: "tracked"
      }), ", ", jsx(_components.code, {
        children: "jj"
      }), " will also apply the change to the local bookmark ", jsx(_components.code, {
        children: "main"
      }), ". If the\nlocal target has also been moved compared to ", jsx(_components.code, {
        children: "main@origin"
      }), " (probably because you\nran ", jsx(_components.code, {
        children: "jj bookmark set main"
      }), "), then the two updates will be merged. If one is ahead\nof the other, then that target will become the new target. Otherwise, the local\nbookmark will become conflicted (see the ", jsx(_components.a, {
        href: "#conflicts",
        children: '"Conflicts" section'
      }), " below\nfor details)."]
    }), "\n", jsxs(_components.p, {
      children: ["Most commands don't show the tracked remote bookmark if it has the same target as\nthe local bookmark. The local bookmark (without ", jsx(_components.code, {
        children: "@<remote name>"
      }), ") is considered the\nbookmark's desired target. Consequently, if you want to update a bookmark on a\nremote, you first update the bookmark locally and then push the update to the\nremote. If a local bookmark also exists on some remote but points to a different\ntarget there, ", jsx(_components.code, {
        children: "jj log"
      }), " will show the bookmark name with an asterisk suffix (e.g.\n", jsx(_components.code, {
        children: "main*"
      }), "). That is meant to remind you that you may want to push the bookmark to\nsome remote."]
    }), "\n", jsxs(_components.p, {
      children: ["If you want to know the internals of bookmark tracking, consult the\n", jsx(_components.a, {
        href: "design/tracking-branches.md",
        children: "Design Doc"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "terminology-summary",
      children: "Terminology summary"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["A ", jsx(_components.strong, {
          children: "remote bookmark"
        }), " is a bookmark ref on the remote. ", jsx(_components.code, {
          children: "jj"
        }), " can find out its\nactual state only when it's actively communicating with the remote. However,\n", jsx(_components.code, {
          children: "jj"
        }), " does store the last-seen position of the remote bookmark; this is the\ncommit ", jsx(_components.code, {
          children: "jj show <bookmark name>@<remote name>"
        }), ` would show. This notion is
completely analogous to Git's "remote-tracking branches".`]
      }), "\n", jsxs(_components.li, {
        children: ["A ", jsx(_components.strong, {
          children: "tracked (remote) bookmark"
        }), " is defined above. You can make a remote bookmark\ntracked with the ", jsxs(_components.a, {
          href: "#manually-tracking-a-bookmark",
          children: [jsx(_components.code, {
            children: "jj bookmark track"
          }), " command"]
        }), ", for\nexample."]
      }), "\n", jsxs(_components.li, {
        children: ["A ", jsx(_components.strong, {
          children: "tracking (local) bookmark"
        }), " is the local bookmark that ", jsx(_components.code, {
          children: "jj"
        }), " tries to keep in\nsync with the tracked remote bookmark. For example, after ", jsx(_components.code, {
          children: "jj bookmark track mybookmark@origin"
        }), ", there will be a local bookmark ", jsx(_components.code, {
          children: "mybookmark"
        }), " that's tracking the\nremote ", jsx(_components.code, {
          children: "mybookmark@origin"
        }), " bookmark. A local bookmark can track a bookmark of the same\nname on 0 or more remotes."]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: 'The notion of tracked bookmarks serves a similar function to the Git notion of an\n"upstream branch". Unlike Git, a single local bookmark can be tracking remote\nbookmarks on multiple remotes, and the names of the local and remote bookmarks\nmust match.'
    }), "\n", jsx(_components.h3, {
      id: "manually-tracking-a-bookmark",
      children: "Manually tracking a bookmark"
    }), "\n", jsxs(_components.p, {
      children: ["To track a bookmark permanently use ", jsx(_components.code, {
        children: "jj bookmark track <bookmark name>@<remote name>"
      }), ".\nIt will now be imported as a local bookmark until you untrack it or it is deleted\non the remote."]
    }), "\n", jsx(_components.p, {
      children: "Example:"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # List all available bookmarks, as we want our colleague's bookmark."
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " bookmark"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " list"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --all"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # Find the bookmark."
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # [...]"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # Actually track the bookmark."
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " bookmark"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " track"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "bookmark"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " nam"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "e"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "@"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "remote"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " nam"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "e"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # Example: jj bookmark track my-feature@origin"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # From this point on, <bookmark name> will be imported when fetching from <remote name>."
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " git"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " fetch"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --remote"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "remote"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " nam"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "e"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # A local bookmark <bookmark name> should have been created or updated while fetching."
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " new"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "bookmark"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " nam"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "e"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # Do some local testing, etc."
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "untracking-a-bookmark",
      children: "Untracking a bookmark"
    }), "\n", jsxs(_components.p, {
      children: ["To stop following a remote bookmark, you can ", jsx(_components.code, {
        children: "jj bookmark untrack"
      }), " it. After that,\nsubsequent fetches of that remote will no longer move the local bookmark to match\nthe position of the remote bookmark."]
    }), "\n", jsx(_components.p, {
      children: "Example:"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # List all local and remote bookmarks."
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " bookmark"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " list"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --all"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # Find the bookmark we no longer want to track."
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # [...]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# # Actually untrack it."
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " bookmark"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " untrack"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "bookmark"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " nam"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "e"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "@"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "remote"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " nam"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "e"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # Example: jj bookmark untrack stuff@origin"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # From this point on, this remote bookmark won't be imported anymore."
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # The local bookmark (e.g. stuff) is unaffected. It may or may not still"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # be tracking bookmarks on other remotes (e.g. stuff@upstream)."
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "listing-tracked-bookmarks",
      children: "Listing tracked bookmarks"
    }), "\n", jsxs(_components.p, {
      children: ["To list tracked bookmarks, you can ", jsx(_components.code, {
        children: "jj bookmark list --tracked"
      }), " or ", jsx(_components.code, {
        children: "jj bookmark list -t"
      }), ".\nThis command omits local Git-tracking bookmarks by default."]
    }), "\n", jsxs(_components.p, {
      children: ["You can see if a specific bookmark is tracked with ", jsx(_components.code, {
        children: "jj bookmark list --tracked <bookmark name>"
      }), "."]
    }), "\n", jsxs(_components.h3, {
      id: "automatic-tracking-of-bookmarks--gitauto-local-bookmark-option",
      children: ["Automatic tracking of bookmarks & ", jsx(_components.code, {
        children: "git.auto-local-bookmark"
      }), " option"]
    }), "\n", jsxs(_components.p, {
      children: ["There are two situations where ", jsx(_components.code, {
        children: "jj"
      }), " tracks bookmarks automatically. ", jsx(_components.code, {
        children: "jj git clone"
      }), " automatically sets up the default remote bookmark (e.g. ", jsx(_components.code, {
        children: "main@origin"
      }), ") as\ntracked. When you push a local bookmark, the newly created bookmark on the remote is\nmarked as tracked."]
    }), "\n", jsxs(_components.p, {
      children: [`By default, every other remote bookmark is marked as "not tracked" when it's
fetched. If desired, you need to manually `, jsx(_components.code, {
        children: "jj bookmark track"
      }), " them. This works\nwell for repositories where multiple people work on a large number of bookmarks."]
    }), "\n", jsxs(_components.p, {
      children: ["The default can be changed by setting the config ", jsx(_components.code, {
        children: "git.auto-local-bookmark = true"
      }), ".\nThen, ", jsx(_components.code, {
        children: "jj git fetch"
      }), " tracks every ", jsx(_components.em, {
        children: "newly fetched"
      }), " bookmark with a local bookmark.\nBranches that already existed before the ", jsx(_components.code, {
        children: "jj git fetch"
      }), " are not affected. This\nis similar to Mercurial, which fetches all its bookmarks (equivalent to Git's\nbranches) by default."]
    }), "\n", jsx(_components.h2, {
      id: "bookmark-movement",
      children: "Bookmark movement"
    }), "\n", jsx(_components.p, {
      children: "Currently Jujutsu automatically moves local bookmarks when these conditions are\nmet:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "When a commit has been rewritten (e.g, when you rebase) bookmarks and the\nworking-copy will move along with it."
      }), "\n", jsx(_components.li, {
        children: "When a commit has been abandoned, all associated bookmarks will be moved\nto its parent(s). If a working copy was pointing to the abandoned commit,\nthen a new working-copy commit will be created on top of the parent(s)."
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "You could describe the movement as following along the change-id of the\ncurrent bookmark commit, even if it isn't entirely accurate."
    }), "\n", jsx(_components.h2, {
      id: "pushing-bookmarks-safety-checks",
      children: "Pushing bookmarks: Safety checks"
    }), "\n", jsxs(_components.p, {
      children: ["Before ", jsx(_components.code, {
        children: "jj git push"
      }), " actually moves, creates, or deletes a remote bookmark, it\nmakes several safety checks."]
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "jj"
          }), " will contact the remote and check that the actual state of the remote\nbookmark matches ", jsx(_components.code, {
            children: "jj"
          }), "'s record of its last known position. If there is a\nconflict, ", jsx(_components.code, {
            children: "jj"
          }), " will refuse to push the bookmark. In this case, you need to run\n", jsx(_components.code, {
            children: "jj git fetch --remote <remote name>"
          }), " and resolve the resulting bookmark\nconflict. Then, you can try ", jsx(_components.code, {
            children: "jj git push"
          }), " again."]
        }), "\n", jsxs(_components.p, {
          children: ["If you are familiar with Git, this makes ", jsx(_components.code, {
            children: "jj git push"
          }), " similar to ", jsx(_components.code, {
            children: "git push --force-with-lease"
          }), "."]
        }), "\n", jsxs(_components.p, {
          children: ["There are a few cases where ", jsx(_components.code, {
            children: "jj git push"
          }), " will succeed even though the remote\nbookmark is in an unexpected location. These are the cases where ", jsx(_components.code, {
            children: "jj git fetch"
          }), "\nwould not create a bookmark conflict and would not move the local bookmark, e.g.\nif the unexpected location is identical to the local position of the bookmark."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["The local bookmark must not be ", jsx(_components.a, {
            href: "#conflicts",
            children: "conflicted"
          }), ". If it is, you would\nneed to use ", jsx(_components.code, {
            children: "jj bookmark move"
          }), ", for example, to resolve the conflict."]
        }), "\n", jsxs(_components.p, {
          children: ["This makes ", jsx(_components.code, {
            children: "jj git push"
          }), " safe even if ", jsx(_components.code, {
            children: "jj git fetch"
          }), " is performed on a timer\nin the background (this situation is a known issue", jsx(_components.sup, {
            children: jsx(_components.a, {
              href: "#user-content-fn-known-issue",
              id: "user-content-fnref-known-issue",
              "data-footnote-ref": true,
              "aria-describedby": "footnote-label",
              children: "1"
            })
          }), " with some\nforms of ", jsx(_components.code, {
            children: "git push --force-with-lease"
          }), "). If the bookmark moves on a remote in a\nproblematic way, ", jsx(_components.code, {
            children: "jj git fetch"
          }), " will create a conflict. This should ensure\nthat the user becomes aware of the conflict before they can ", jsx(_components.code, {
            children: "jj git push"
          }), " and\noverride the bookmark on the remote."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["If the remote bookmark already exists on the remote, it must be\n", jsx(_components.a, {
            href: "#remotes-and-tracked-bookmarks",
            children: "tracked"
          }), ". If the bookmark does not already\nexist on the remote, there is no problem; ", jsx(_components.code, {
            children: "jj git push --allow-new"
          }), " will\ncreate the remote bookmark and mark it as tracked."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "conflicts",
      children: "Conflicts"
    }), "\n", jsxs(_components.p, {
      children: ["Bookmarks can end up in a conflicted state. When that happens, ", jsx(_components.code, {
        children: "jj status"
      }), " will\ninclude information about the conflicted bookmarks (and instructions for how to\nmitigate it). ", jsx(_components.code, {
        children: "jj bookmark list"
      }), " will have details. ", jsx(_components.code, {
        children: "jj log"
      }), " will show the bookmark\nname with a double question mark suffix (e.g. ", jsx(_components.code, {
        children: "main??"
      }), ") on each of the\nconflicted bookmark's potential target revisions. Using the bookmark name to look up\na revision will resolve to all potential targets. That means that ", jsx(_components.code, {
        children: "jj new main"
      }), "\nwill error out, complaining that the revset resolved to multiple revisions."]
    }), "\n", jsxs(_components.p, {
      children: ["Both local bookmarks (e.g. ", jsx(_components.code, {
        children: "main"
      }), ") and the remote bookmark (e.g. ", jsx(_components.code, {
        children: "main@origin"
      }), ") can\nhave conflicts. Both can end up in that state if concurrent operations were run\nin the repo. The local bookmark more typically becomes conflicted because it was\nupdated both locally and on a remote."]
    }), "\n", jsxs(_components.p, {
      children: ["To resolve a conflicted state in a local bookmark (e.g. ", jsx(_components.code, {
        children: "main"
      }), "), you can move the\nbookmark to the desired target with ", jsx(_components.code, {
        children: "jj bookmark move"
      }), ". You may want to first either\nmerge the conflicted targets with ", jsx(_components.code, {
        children: "jj new"
      }), " (e.g. ", jsx(_components.code, {
        children: "jj new 'all:main'"
      }), "), or you may\nwant to rebase one side on top of the other with ", jsx(_components.code, {
        children: "jj rebase"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["To resolve a conflicted state in a remote bookmark (e.g. ", jsx(_components.code, {
        children: "main@origin"
      }), "), simply\npull from the remote (e.g. ", jsx(_components.code, {
        children: "jj git fetch"
      }), "). The conflict resolution will also\npropagate to the local bookmark (which was presumably also conflicted)."]
    }), "\n", jsx(_components.h2, {
      id: "ease-of-use",
      children: "Ease of use"
    }), "\n", jsxs(_components.p, {
      children: ["The use of bookmarks is frequent in some workflows, for example, when\ninteracting with Git repositories containing branches. To this end,\none-letter shortcuts have been implemented, both for the ", jsx(_components.code, {
        children: "jj bookmark"
      }), "\ncommand itself through an alias (as ", jsx(_components.code, {
        children: "jj b"
      }), "), and for its subcommands.\nFor example, ", jsx(_components.code, {
        children: "jj bookmark create BOOKMARK-NAME -r@"
      }), " can be abbreviated as\n", jsx(_components.code, {
        children: "jj b c BOOKMARK-NAME -r@"
      }), "."]
    }), "\n", jsxs(_components.section, {
      "data-footnotes": true,
      className: "footnotes",
      children: [jsx(_components.h2, {
        className: "sr-only",
        id: "footnote-label",
        children: "Footnotes"
      }), "\n", jsxs(_components.ol, {
        children: ["\n", jsxs(_components.li, {
          id: "user-content-fn-known-issue",
          children: ["\n", jsxs(_components.p, {
            children: ['See "A general note on safety" in\n', jsx(_components.a, {
              href: "https://git-scm.com/docs/git-push#Documentation/git-push.txt---no-force-with-lease",
              children: "https://git-scm.com/docs/git-push#Documentation/git-push.txt---no-force-with-lease"
            }), " ", jsx(_components.a, {
              href: "#user-content-fnref-known-issue",
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
//# sourceMappingURL=bookmarks-H6-HLBIA.mjs.map
