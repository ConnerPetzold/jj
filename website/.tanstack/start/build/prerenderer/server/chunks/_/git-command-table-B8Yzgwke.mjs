import { jsx, jsxs, Fragment } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Git command table"
};
let extractedReferences = [];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "Note that all jj commands can be run on any commit (not just the working-copy\ncommit), but that's left out of the table to keep it simple. For example,\njj squash -r <revision> will move the diff from that revision into its\nparent."
  }, {
    "heading": void 0,
    "content": "Use Case"
  }, {
    "heading": void 0,
    "content": "Git Command"
  }, {
    "heading": void 0,
    "content": "Jujutsu Command"
  }, {
    "heading": void 0,
    "content": "Notes"
  }, {
    "heading": void 0,
    "content": "Create a new repo"
  }, {
    "heading": void 0,
    "content": "git init"
  }, {
    "heading": void 0,
    "content": "jj git init [--no-colocate]"
  }, {
    "heading": void 0,
    "content": "Clone an existing repo"
  }, {
    "heading": void 0,
    "content": "git clone <source> <destination> [--origin <remote name>]"
  }, {
    "heading": void 0,
    "content": "jj git clone <source> <destination> [--remote <remote name>]"
  }, {
    "heading": void 0,
    "content": "There is no support for cloning non-Git repos yet."
  }, {
    "heading": void 0,
    "content": "Update the local repo with all bookmarks/branches from a remote"
  }, {
    "heading": void 0,
    "content": "git fetch [<remote>]"
  }, {
    "heading": void 0,
    "content": "jj git fetch [--remote <remote>]"
  }, {
    "heading": void 0,
    "content": "There is no support for fetching into non-Git repos yet."
  }, {
    "heading": void 0,
    "content": "Update a remote repo with all bookmarks/branches from the local repo"
  }, {
    "heading": void 0,
    "content": "git push --all [<remote>]"
  }, {
    "heading": void 0,
    "content": "jj git push --all [--remote <remote>]"
  }, {
    "heading": void 0,
    "content": "There is no support for pushing from non-Git repos yet."
  }, {
    "heading": void 0,
    "content": "Update a remote repo with a single bookmark from the local repo"
  }, {
    "heading": void 0,
    "content": "git push <remote> <bookmark name>"
  }, {
    "heading": void 0,
    "content": "jj git push --bookmark <bookmark name> [--remote <remote>]"
  }, {
    "heading": void 0,
    "content": "There is no support for pushing from non-Git repos yet."
  }, {
    "heading": void 0,
    "content": "Add a remote target to the repo"
  }, {
    "heading": void 0,
    "content": "git remote add <remote> <url>"
  }, {
    "heading": void 0,
    "content": "jj git remote add <remote> <url>"
  }, {
    "heading": void 0,
    "content": "Show summary of current work and repo status"
  }, {
    "heading": void 0,
    "content": "git status"
  }, {
    "heading": void 0,
    "content": "jj st"
  }, {
    "heading": void 0,
    "content": "Show diff of the current change"
  }, {
    "heading": void 0,
    "content": "git diff HEAD"
  }, {
    "heading": void 0,
    "content": "jj diff"
  }, {
    "heading": void 0,
    "content": "Show diff of another change"
  }, {
    "heading": void 0,
    "content": "git diff <revision>^ <revision>"
  }, {
    "heading": void 0,
    "content": "jj diff -r <revision>"
  }, {
    "heading": void 0,
    "content": "Show diff from another change to the current change"
  }, {
    "heading": void 0,
    "content": "git diff <revision>"
  }, {
    "heading": void 0,
    "content": "jj diff --from <revision>"
  }, {
    "heading": void 0,
    "content": "Show diff from change A to change B"
  }, {
    "heading": void 0,
    "content": "git diff A B"
  }, {
    "heading": void 0,
    "content": "jj diff --from A --to B"
  }, {
    "heading": void 0,
    "content": "Show all the changes in A..B"
  }, {
    "heading": void 0,
    "content": "git diff A...B"
  }, {
    "heading": void 0,
    "content": "jj diff -r A..B"
  }, {
    "heading": void 0,
    "content": "Show description and diff of a change"
  }, {
    "heading": void 0,
    "content": "git show <revision>"
  }, {
    "heading": void 0,
    "content": "jj show <revision>"
  }, {
    "heading": void 0,
    "content": "Add a file to the current change"
  }, {
    "heading": void 0,
    "content": "touch filename; git add filename"
  }, {
    "heading": void 0,
    "content": "touch filename"
  }, {
    "heading": void 0,
    "content": "Remove a file from the current change"
  }, {
    "heading": void 0,
    "content": "git rm filename"
  }, {
    "heading": void 0,
    "content": "rm filename"
  }, {
    "heading": void 0,
    "content": "Modify a file in the current change"
  }, {
    "heading": void 0,
    "content": "echo stuff >> filename"
  }, {
    "heading": void 0,
    "content": "echo stuff >> filename"
  }, {
    "heading": void 0,
    "content": "Finish work on the current change and start a new change"
  }, {
    "heading": void 0,
    "content": "git commit -a"
  }, {
    "heading": void 0,
    "content": "jj commit"
  }, {
    "heading": void 0,
    "content": "See log of ancestors of the current commit"
  }, {
    "heading": void 0,
    "content": "git log --oneline --graph --decorate"
  }, {
    "heading": void 0,
    "content": "jj log -r ::@"
  }, {
    "heading": void 0,
    "content": "See log of all reachable commits"
  }, {
    "heading": void 0,
    "content": "git log --oneline --graph --decorate --branches"
  }, {
    "heading": void 0,
    "content": "jj log -r 'all()' or jj log -r ::"
  }, {
    "heading": void 0,
    "content": "Show log of commits not on the main branch"
  }, {
    "heading": void 0,
    "content": "(TODO)"
  }, {
    "heading": void 0,
    "content": "jj log"
  }, {
    "heading": void 0,
    "content": 'Show log of commits adding/removing the string "stuff"'
  }, {
    "heading": void 0,
    "content": "git log -G stuff"
  }, {
    "heading": void 0,
    "content": "jj log -r 'diff_contains(stuff)'"
  }, {
    "heading": void 0,
    "content": "List versioned files in the working copy"
  }, {
    "heading": void 0,
    "content": "git ls-files --cached"
  }, {
    "heading": void 0,
    "content": "jj file list"
  }, {
    "heading": void 0,
    "content": "Search among files versioned in the repository"
  }, {
    "heading": void 0,
    "content": "git grep foo"
  }, {
    "heading": void 0,
    "content": "grep foo $(jj file list) or rg --no-require-git foo"
  }, {
    "heading": void 0,
    "content": "Abandon the current change and start a new change"
  }, {
    "heading": void 0,
    "content": "git reset --hard (cannot be undone)"
  }, {
    "heading": void 0,
    "content": "jj abandon"
  }, {
    "heading": void 0,
    "content": "Make the current change empty"
  }, {
    "heading": void 0,
    "content": 'git reset --hard (same as abandoning a change since Git has no concept of a "change")'
  }, {
    "heading": void 0,
    "content": "jj restore"
  }, {
    "heading": void 0,
    "content": "Abandon the parent of the working copy, but keep its diff in the working copy"
  }, {
    "heading": void 0,
    "content": "git reset --soft HEAD~"
  }, {
    "heading": void 0,
    "content": "jj squash --from @-"
  }, {
    "heading": void 0,
    "content": "Discard working copy changes in some files"
  }, {
    "heading": void 0,
    "content": "git restore <paths>... or git checkout HEAD -- <paths>..."
  }, {
    "heading": void 0,
    "content": "jj restore <paths>..."
  }, {
    "heading": void 0,
    "content": "Edit description (commit message) of the current change"
  }, {
    "heading": void 0,
    "content": "Not supported"
  }, {
    "heading": void 0,
    "content": "jj describe"
  }, {
    "heading": void 0,
    "content": "Edit description (commit message) of the previous change"
  }, {
    "heading": void 0,
    "content": "git commit --amend --only"
  }, {
    "heading": void 0,
    "content": "jj describe @-"
  }, {
    "heading": void 0,
    "content": "Temporarily put away the current change"
  }, {
    "heading": void 0,
    "content": "git stash"
  }, {
    "heading": void 0,
    "content": "jj new @-"
  }, {
    "heading": void 0,
    "content": "The old working-copy commit remains as a sibling commit. The old working-copy commit X can be restored with jj edit X."
  }, {
    "heading": void 0,
    "content": "Start working on a new change based on the main bookmark/branch"
  }, {
    "heading": void 0,
    "content": "git switch -c topic main or git checkout -b topic main (may need to stash or commit first)"
  }, {
    "heading": void 0,
    "content": "jj new main"
  }, {
    "heading": void 0,
    "content": "Merge branch A into the current change"
  }, {
    "heading": void 0,
    "content": "git merge A"
  }, {
    "heading": void 0,
    "content": "jj new @ A"
  }, {
    "heading": void 0,
    "content": "Check out a named revision (or branch) to examine source"
  }, {
    "heading": void 0,
    "content": "git checkout v1.0.1"
  }, {
    "heading": void 0,
    "content": "jj new v1.0.1"
  }, {
    "heading": void 0,
    "content": "Creates new empty change on top (see jj new main)"
  }, {
    "heading": void 0,
    "content": "Move bookmark/branch A onto bookmark/branch B"
  }, {
    "heading": void 0,
    "content": "git rebase B A (may need to rebase other descendant branches separately)"
  }, {
    "heading": void 0,
    "content": "jj rebase -b A -d B"
  }, {
    "heading": void 0,
    "content": "Move change A and its descendants onto change B"
  }, {
    "heading": void 0,
    "content": "git rebase --onto B A^ <some descendant bookmark> (may need to rebase other descendant bookmarks separately)"
  }, {
    "heading": void 0,
    "content": "jj rebase -s A -d B"
  }, {
    "heading": void 0,
    "content": "Reorder changes from A-B-C-D to A-C-B-D"
  }, {
    "heading": void 0,
    "content": "git rebase -i A"
  }, {
    "heading": void 0,
    "content": "jj rebase -r C --before B"
  }, {
    "heading": void 0,
    "content": "Move the diff in the current change into the parent change"
  }, {
    "heading": void 0,
    "content": "git commit --amend -a"
  }, {
    "heading": void 0,
    "content": "jj squash"
  }, {
    "heading": void 0,
    "content": "Interactively move part of the diff in the current change into the parent change"
  }, {
    "heading": void 0,
    "content": "git add -p; git commit --amend"
  }, {
    "heading": void 0,
    "content": "jj squash -i"
  }, {
    "heading": void 0,
    "content": "Move the diff in the working copy into an ancestor"
  }, {
    "heading": void 0,
    "content": "git commit --fixup=X; git rebase -i --autosquash X^"
  }, {
    "heading": void 0,
    "content": "jj squash --into X"
  }, {
    "heading": void 0,
    "content": "Interactively move part of the diff in an arbitrary change to another arbitrary change"
  }, {
    "heading": void 0,
    "content": "Not supported"
  }, {
    "heading": void 0,
    "content": "jj squash -i --from X --into Y"
  }, {
    "heading": void 0,
    "content": "Interactively split the changes in the working copy in two"
  }, {
    "heading": void 0,
    "content": "git commit -p"
  }, {
    "heading": void 0,
    "content": "jj split"
  }, {
    "heading": void 0,
    "content": "Interactively split an arbitrary change in two"
  }, {
    "heading": void 0,
    "content": 'Not supported (can be emulated with the "edit" action in git rebase -i)'
  }, {
    "heading": void 0,
    "content": "jj split -r <revision>"
  }, {
    "heading": void 0,
    "content": "Interactively edit the diff in a given change"
  }, {
    "heading": void 0,
    "content": 'Not supported (can be emulated with the "edit" action in git rebase -i)'
  }, {
    "heading": void 0,
    "content": "jj diffedit -r <revision>"
  }, {
    "heading": void 0,
    "content": "Resolve conflicts and continue interrupted operation"
  }, {
    "heading": void 0,
    "content": "echo resolved > filename; git add filename; git rebase/merge/cherry-pick --continue"
  }, {
    "heading": void 0,
    "content": "echo resolved > filename; jj squash"
  }, {
    "heading": void 0,
    "content": "Operations don't get interrupted, so no need to continue."
  }, {
    "heading": void 0,
    "content": "Create a copy of a commit on top of another commit"
  }, {
    "heading": void 0,
    "content": "git co <destination>; git cherry-pick <source>"
  }, {
    "heading": void 0,
    "content": "jj duplicate <source> -d <destination>"
  }, {
    "heading": void 0,
    "content": "Find the root of the working copy (or check if in a repo)"
  }, {
    "heading": void 0,
    "content": "git rev-parse --show-toplevel"
  }, {
    "heading": void 0,
    "content": "jj workspace root"
  }, {
    "heading": void 0,
    "content": "List bookmarks/branches"
  }, {
    "heading": void 0,
    "content": "git branch"
  }, {
    "heading": void 0,
    "content": "jj bookmark list or jj b l for short"
  }, {
    "heading": void 0,
    "content": "Create a bookmark/branch"
  }, {
    "heading": void 0,
    "content": "git branch <name> <revision>"
  }, {
    "heading": void 0,
    "content": "jj bookmark create <name> -r <revision>"
  }, {
    "heading": void 0,
    "content": "Move a bookmark/branch forward"
  }, {
    "heading": void 0,
    "content": "git branch -f <name> <revision>"
  }, {
    "heading": void 0,
    "content": "jj bookmark move <name> --to <revision> or jj b m <name> --to <revision> for short"
  }, {
    "heading": void 0,
    "content": "Move a bookmark/branch backward or sideways"
  }, {
    "heading": void 0,
    "content": "git branch -f <name> <revision>"
  }, {
    "heading": void 0,
    "content": "jj bookmark move <name> --to <revision> --allow-backwards"
  }, {
    "heading": void 0,
    "content": "Delete a bookmark/branch"
  }, {
    "heading": void 0,
    "content": "git branch --delete <name>"
  }, {
    "heading": void 0,
    "content": "jj bookmark delete <name>"
  }, {
    "heading": void 0,
    "content": "See log of operations performed on the repo"
  }, {
    "heading": void 0,
    "content": "Not supported"
  }, {
    "heading": void 0,
    "content": "jj op log"
  }, {
    "heading": void 0,
    "content": "Undo an earlier operation"
  }, {
    "heading": void 0,
    "content": "Not supported"
  }, {
    "heading": void 0,
    "content": "jj undo"
  }, {
    "heading": void 0,
    "content": "A matching jj redo command exists as well."
  }, {
    "heading": void 0,
    "content": "Create a commit that cancels out a previous commit"
  }, {
    "heading": void 0,
    "content": "git revert <revision>"
  }, {
    "heading": void 0,
    "content": "jj revert -r <revision> -B @"
  }, {
    "heading": void 0,
    "content": "Show what revision and author last modified each line of a file"
  }, {
    "heading": void 0,
    "content": "git blame <file>"
  }, {
    "heading": void 0,
    "content": "jj file annotate <path>"
  }],
  "headings": []
};
const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.p, {
      children: ["Note that all ", jsx(_components.code, {
        children: "jj"
      }), " commands can be run on any commit (not just the working-copy\ncommit), but that's left out of the table to keep it simple. For example,\n", jsx(_components.code, {
        children: "jj squash -r <revision>"
      }), " will move the diff from that revision into its\nparent."]
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            children: "Use Case"
          }), jsx(_components.th, {
            children: "Git Command"
          }), jsx(_components.th, {
            children: "Jujutsu Command"
          }), jsx(_components.th, {
            children: "Notes"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Create a new repo"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git init"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj git init [--no-colocate]"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Clone an existing repo"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git clone <source> <destination> [--origin <remote name>]"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj git clone <source> <destination> [--remote <remote name>]"
            })
          }), jsx(_components.td, {
            children: "There is no support for cloning non-Git repos yet."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Update the local repo with all bookmarks/branches from a remote"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git fetch [<remote>]"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj git fetch [--remote <remote>]"
            })
          }), jsx(_components.td, {
            children: "There is no support for fetching into non-Git repos yet."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Update a remote repo with all bookmarks/branches from the local repo"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git push --all [<remote>]"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj git push --all [--remote <remote>]"
            })
          }), jsx(_components.td, {
            children: "There is no support for pushing from non-Git repos yet."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Update a remote repo with a single bookmark from the local repo"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git push <remote> <bookmark name>"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj git push --bookmark <bookmark name> [--remote <remote>]"
            })
          }), jsx(_components.td, {
            children: "There is no support for pushing from non-Git repos yet."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Add a remote target to the repo"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git remote add <remote> <url>"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj git remote add <remote> <url>"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Show summary of current work and repo status"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git status"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj st"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Show diff of the current change"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git diff HEAD"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj diff"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Show diff of another change"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git diff <revision>^ <revision>"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj diff -r <revision>"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Show diff from another change to the current change"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git diff <revision>"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj diff --from <revision>"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Show diff from change A to change B"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git diff A B"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj diff --from A --to B"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Show all the changes in A..B"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git diff A...B"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj diff -r A..B"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Show description and diff of a change"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git show <revision>"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj show <revision>"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Add a file to the current change"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "touch filename; git add filename"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "touch filename"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Remove a file from the current change"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git rm filename"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "rm filename"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Modify a file in the current change"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "echo stuff >> filename"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "echo stuff >> filename"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Finish work on the current change and start a new change"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git commit -a"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj commit"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "See log of ancestors of the current commit"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git log --oneline --graph --decorate"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj log -r ::@"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "See log of all reachable commits"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git log --oneline --graph --decorate --branches"
            })
          }), jsxs(_components.td, {
            children: [jsx(_components.code, {
              children: "jj log -r 'all()'"
            }), " or ", jsx(_components.code, {
              children: "jj log -r ::"
            })]
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Show log of commits not on the main branch"
          }), jsx(_components.td, {
            children: "(TODO)"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj log"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: 'Show log of commits adding/removing the string "stuff"'
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git log -G stuff"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj log -r 'diff_contains(stuff)'"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "List versioned files in the working copy"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git ls-files --cached"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj file list"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Search among files versioned in the repository"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git grep foo"
            })
          }), jsxs(_components.td, {
            children: [jsx(_components.code, {
              children: "grep foo $(jj file list)"
            }), " or ", jsx(_components.code, {
              children: "rg --no-require-git foo"
            })]
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Abandon the current change and start a new change"
          }), jsxs(_components.td, {
            children: [jsx(_components.code, {
              children: "git reset --hard"
            }), " (cannot be undone)"]
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj abandon"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Make the current change empty"
          }), jsxs(_components.td, {
            children: [jsx(_components.code, {
              children: "git reset --hard"
            }), ' (same as abandoning a change since Git has no concept of a "change")']
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj restore"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Abandon the parent of the working copy, but keep its diff in the working copy"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git reset --soft HEAD~"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj squash --from @-"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Discard working copy changes in some files"
          }), jsxs(_components.td, {
            children: [jsx(_components.code, {
              children: "git restore <paths>..."
            }), " or ", jsx(_components.code, {
              children: "git checkout HEAD -- <paths>..."
            })]
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj restore <paths>..."
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Edit description (commit message) of the current change"
          }), jsx(_components.td, {
            children: "Not supported"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj describe"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Edit description (commit message) of the previous change"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git commit --amend --only"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj describe @-"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Temporarily put away the current change"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git stash"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj new @-"
            })
          }), jsxs(_components.td, {
            children: ["The old working-copy commit remains as a sibling commit. The old working-copy commit X can be restored with ", jsx(_components.code, {
              children: "jj edit X"
            }), "."]
          })]
        }), jsxs(_components.tr, {
          children: [jsxs(_components.td, {
            children: ["Start working on a new change based on the ", jsx(_components.code, {
              children: "main"
            }), " bookmark/branch"]
          }), jsxs(_components.td, {
            children: [jsx(_components.code, {
              children: "git switch -c topic main"
            }), " or ", jsx(_components.code, {
              children: "git checkout -b topic main"
            }), " (may need to stash or commit first)"]
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj new main"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Merge branch A into the current change"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git merge A"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj new @ A"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Check out a named revision (or branch) to examine source"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git checkout v1.0.1"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj new v1.0.1"
            })
          }), jsxs(_components.td, {
            children: ["Creates new empty change on top (see ", jsx(_components.code, {
              children: "jj new main"
            }), ")"]
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Move bookmark/branch A onto bookmark/branch B"
          }), jsxs(_components.td, {
            children: [jsx(_components.code, {
              children: "git rebase B A"
            }), " (may need to rebase other descendant branches separately)"]
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj rebase -b A -d B"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Move change A and its descendants onto change B"
          }), jsxs(_components.td, {
            children: [jsx(_components.code, {
              children: "git rebase --onto B A^ <some descendant bookmark>"
            }), " (may need to rebase other descendant bookmarks separately)"]
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj rebase -s A -d B"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Reorder changes from A-B-C-D to A-C-B-D"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git rebase -i A"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj rebase -r C --before B"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Move the diff in the current change into the parent change"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git commit --amend -a"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj squash"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Interactively move part of the diff in the current change into the parent change"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git add -p; git commit --amend"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj squash -i"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Move the diff in the working copy into an ancestor"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git commit --fixup=X; git rebase -i --autosquash X^"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj squash --into X"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Interactively move part of the diff in an arbitrary change to another arbitrary change"
          }), jsx(_components.td, {
            children: "Not supported"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj squash -i --from X --into Y"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Interactively split the changes in the working copy in two"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git commit -p"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj split"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Interactively split an arbitrary change in two"
          }), jsxs(_components.td, {
            children: ['Not supported (can be emulated with the "edit" action in ', jsx(_components.code, {
              children: "git rebase -i"
            }), ")"]
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj split -r <revision>"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Interactively edit the diff in a given change"
          }), jsxs(_components.td, {
            children: ['Not supported (can be emulated with the "edit" action in ', jsx(_components.code, {
              children: "git rebase -i"
            }), ")"]
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj diffedit -r <revision>"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Resolve conflicts and continue interrupted operation"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "echo resolved > filename; git add filename; git rebase/merge/cherry-pick --continue"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "echo resolved > filename; jj squash"
            })
          }), jsx(_components.td, {
            children: "Operations don't get interrupted, so no need to continue."
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Create a copy of a commit on top of another commit"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git co <destination>; git cherry-pick <source>"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj duplicate <source> -d <destination>"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Find the root of the working copy (or check if in a repo)"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git rev-parse --show-toplevel"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj workspace root"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "List bookmarks/branches"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git branch"
            })
          }), jsxs(_components.td, {
            children: [jsx(_components.code, {
              children: "jj bookmark list"
            }), " or ", jsx(_components.code, {
              children: "jj b l"
            }), " for short"]
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Create a bookmark/branch"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git branch <name> <revision>"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj bookmark create <name> -r <revision>"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Move a bookmark/branch forward"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git branch -f <name> <revision>"
            })
          }), jsxs(_components.td, {
            children: [jsx(_components.code, {
              children: "jj bookmark move <name> --to <revision>"
            }), " or ", jsx(_components.code, {
              children: "jj b m <name> --to <revision>"
            }), " for short"]
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Move a bookmark/branch backward or sideways"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git branch -f <name> <revision>"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj bookmark move <name> --to <revision> --allow-backwards"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Delete a bookmark/branch"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git branch --delete <name>"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj bookmark delete <name>"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "See log of operations performed on the repo"
          }), jsx(_components.td, {
            children: "Not supported"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj op log"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Undo an earlier operation"
          }), jsx(_components.td, {
            children: "Not supported"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj undo"
            })
          }), jsxs(_components.td, {
            children: ["A matching ", jsx(_components.code, {
              children: "jj redo"
            }), " command exists as well."]
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Create a commit that cancels out a previous commit"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git revert <revision>"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj revert -r <revision> -B @"
            })
          }), jsx(_components.td, {})]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            children: "Show what revision and author last modified each line of a file"
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "git blame <file>"
            })
          }), jsx(_components.td, {
            children: jsx(_components.code, {
              children: "jj file annotate <path>"
            })
          }), jsx(_components.td, {})]
        })]
      })]
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
//# sourceMappingURL=git-command-table-B8Yzgwke.mjs.map
