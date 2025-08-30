import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Git compatibility"
};
let extractedReferences = [{
  "href": "/comparisons/git"
}, {
  "href": "https://github.com/jj-vcs/jj/issues/4889"
}, {
  "href": "/concepts/bookmarks"
}, {
  "href": "#branches"
}, {
  "href": "https://github.com/jj-vcs/jj/issues/53"
}, {
  "href": "https://github.com/jj-vcs/jj/issues/405"
}, {
  "href": "https://pre-commit.com"
}, {
  "href": "git-comparison#the-index"
}, {
  "href": "https://github.com/jj-vcs/jj/issues/12"
}, {
  "href": "config#commit-signing"
}, {
  "href": "https://github.com/jj-vcs/jj/issues/80"
}, {
  "href": "https://git-scm.com/docs/git-worktree"
}, {
  "href": "glossary#divergent-change"
}, {
  "href": "technical/concurrency#syncing-with-rsync-nfs-dropbox-etc"
}];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "Jujutsu has two backends for storing commits. One of them uses a regular Git\nrepo, which means that you can collaborate with Git users without them even\nknowing that you're not using the git CLI."
  }, {
    "heading": void 0,
    "content": "See jj help git for help about the jj git family of commands, and e.g.\njj help git push for help about a specific command (use jj git push -h for\nbriefer help)."
  }, {
    "heading": "supported-features",
    "content": "The following list describes which Git features Jujutsu is compatible with. For\na comparison with Git, including how workflows are different, see the\nGit-comparison doc."
  }, {
    "heading": "supported-features",
    "content": "Configuration: Partial. The only configuration from Git (e.g. in\n~/.gitconfig) that's respected is the following. Feel free to file a bug if\nyou miss any particular configuration options."
  }, {
    "heading": "supported-features",
    "content": 'The configuration of remotes ([remote "<name>"]). Only the names and URLs\nare respected (simple fetch refspecs are respected when branches are not\nexplicitly specified on the CLI, and only the last\npushurl is respected).'
  }, {
    "heading": "supported-features",
    "content": "core.excludesFile"
  }, {
    "heading": "supported-features",
    "content": "Authentication: Yes. git is used for remote operations under the hood."
  }, {
    "heading": "supported-features",
    "content": "Branches: Yes. You can read more about\nhow branches work in Jujutsu\nand how they interoperate with Git."
  }, {
    "heading": "supported-features",
    "content": "Tags: Partial. You can check out tagged commits by name (pointed to be\neither annotated or lightweight tags), but you cannot create new tags."
  }, {
    "heading": "supported-features",
    "content": ".gitignore: Yes. Patterns in .gitignore files are supported. So are\nignores in .git/info/exclude or configured via Git's core.excludesfile\nconfig. Since working-copy files are snapshotted by every jj command, you\nmight need to run jj file untrack to exclude newly ignored files from the\nworking-copy commit. It's recommended to set up the ignore patterns earlier.\nThe .gitignore support uses a native implementation, so please report a bug\nif you notice any difference compared to git."
  }, {
    "heading": "supported-features",
    "content": ".gitattributes: No. There's #53\nabout adding support for at least the eol attribute."
  }, {
    "heading": "supported-features",
    "content": "Hooks: No. There's #405\nspecifically for providing the checks from https://pre-commit.com."
  }, {
    "heading": "supported-features",
    "content": "Merge commits: Yes. Octopus merges (i.e. with more than 2 parents) are\nalso supported."
  }, {
    "heading": "supported-features",
    "content": "Detached HEAD: Yes. Jujutsu supports anonymous branches, so this is a\nnatural state."
  }, {
    "heading": "supported-features",
    "content": 'Orphan branch: Yes. Jujutsu has a virtual root commit that appears as\nparent of all commits Git would call "root commits".'
  }, {
    "heading": "supported-features",
    "content": "Staging area: Kind of. The staging area will be ignored. For example,\njj diff will show a diff from the Git HEAD to the working copy. There are\nways of fulfilling your use cases without a staging\narea."
  }, {
    "heading": "supported-features",
    "content": "Garbage collection: Yes. It should be safe to run git gc in the Git\nrepo, but it's not tested, so it's probably a good idea to make a backup of\nthe whole workspace first. There's no garbage collection and repacking of\nJujutsu's own data structures yet,\nhowever."
  }, {
    "heading": "supported-features",
    "content": "Bare repositories: Yes. You can use jj git init --git-repo=<path> to\ncreate a repo backed by a bare Git repo."
  }, {
    "heading": "supported-features",
    "content": "Submodules: No. They will not show up in the working copy, but they will\nnot be lost either."
  }, {
    "heading": "supported-features",
    "content": "Partial clones: No."
  }, {
    "heading": "supported-features",
    "content": "Shallow clones: Kind of. Shallow commits all have the virtual root commit as\ntheir parent. However, deepening or fully unshallowing a repository is currently not yet\nsupported and will cause issues."
  }, {
    "heading": "supported-features",
    "content": "git-worktree: No. However, there's native support for multiple working\ncopies backed by a single repo. See the jj workspace family of commands."
  }, {
    "heading": "supported-features",
    "content": "Sparse checkouts: No. However, there's native support for sparse\ncheckouts. See the jj sparse command."
  }, {
    "heading": "supported-features",
    "content": "Signed commits: Yes.\nYou can sign commits automatically by configuration,\nor use the jj sign command."
  }, {
    "heading": "supported-features",
    "content": "Git LFS: No. (#80)"
  }, {
    "heading": "creating-an-empty-repo",
    "content": "To create an empty repo using the Git backend, use jj init --git <name>. Since\nthe command creates a Jujutsu repo, it will have a .jj/ directory. The\nunderlying Git repo will be inside of that directory (currently in\n.jj/repo/store/git/)."
  }, {
    "heading": "creating-a-repo-backed-by-an-existing-git-repo",
    "content": "To create a Jujutsu repo backed by a Git repo you already have on disk, use\njj git init --git-repo=<path to Git repo> <name>. The repo will work similar\nto a Git worktree, meaning that the\nworking copies files and the record of the working-copy commit will be separate,\nbut the commits will be accessible in both repos. Use jj git import to update\nthe Jujutsu repo with changes made in the Git repo. Use jj git export to\nupdate the Git repo with changes made in the Jujutsu repo."
  }, {
    "heading": "creating-a-repo-by-cloning-a-git-repo",
    "content": `To create a Jujutsu repo from a remote Git URL, use jj git clone <URL>
[<destination>]. For example, jj git clone
https://github.com/octocat/Hello-World will clone GitHub's "Hello-World" repo
into a directory by the same name.`
  }, {
    "heading": "creating-a-repo-by-cloning-a-git-repo",
    "content": "By default, the remote repository will be named origin. You can use\na name of your choice by adding --remote <remote name> to the jj\ngit clone command."
  }, {
    "heading": "colocated-jujutsugit-repos",
    "content": "A colocated Jujutsu repo is a hybrid Jujutsu/Git repo. This is the default\nfor Git-backed repositories created with jj git init or jj git clone.\nThe Git repo and the Jujutsu repo then share the same working copy. Jujutsu will\nimport and export from and to the Git repo on every jj command automatically."
  }, {
    "heading": "colocated-jujutsugit-repos",
    "content": "This mode is very convenient when tools (e.g. build tools) expect a Git repo to\nbe present."
  }, {
    "heading": "colocated-jujutsugit-repos",
    "content": 'It is allowed to mix jj and git commands in such a repo in any order.\nHowever, it may be easier to keep track of what is going on if you mostly use\nread-only git commands and use jj to make changes to the repo. One reason\nfor this (see below for more) is that jj commands will usually put the git\nrepo in a "detached HEAD" state, since in jj there is not concept of a\n"currently tracked branch". Before doing mutating Git commands, you may need to\ntell Git what the current branch should be with a git switch command.'
  }, {
    "heading": "colocated-jujutsugit-repos",
    "content": 'You can undo the results of mutating git commands using jj undo and jj op\nrestore. Inside jj op log, changes by git will be represented as an "import\ngit refs" operation.'
  }, {
    "heading": "colocated-jujutsugit-repos",
    "content": "There are a few downsides to this mode of operation. Generally, using colocated\nrepos may require you to deal with more involved Jujutsu and Git concepts.\nYou can disable colocation with the --no-colocate flag on the commands\njj git init and jj git clone or by setting the configuration\ngit.colocate = false."
  }, {
    "heading": "colocated-jujutsugit-repos",
    "content": "Interleaving jj and git commands increases the chance of confusing branch\nconflicts or conflicted (AKA divergent) change\nids. These never lose data, but can be\nannoying."
  }, {
    "heading": "colocated-jujutsugit-repos",
    "content": "Such interleaving can happen unknowingly. For example, some IDEs can cause\nit because they automatically run git fetch in the background from time to\ntime."
  }, {
    "heading": "colocated-jujutsugit-repos",
    "content": "In colocated repos with a very large number of branches or other refs, jj\ncommands can get noticeably slower because of the automatic jj git import\nexecuted on each command. This can be mitigated by occasionally running jj util\ngc to speed up the import (that command includes packing the Git refs)."
  }, {
    "heading": "colocated-jujutsugit-repos",
    "content": "Git tools will have trouble with revisions that contain conflicted files. While\njj renders these files with conflict markers in the working copy, they are\nstored in a non-human-readable fashion inside the repo. Git tools will often\nsee this non-human-readable representation."
  }, {
    "heading": "colocated-jujutsugit-repos",
    "content": 'When a jj branch is conflicted, the position of the branch in the Git repo\nwill disagree with one or more of the conflicted positions. The state of that\nbranch in git will be labeled as though it belongs to a remote named "git",\ne.g. branch@git.'
  }, {
    "heading": "colocated-jujutsugit-repos",
    "content": "Jujutsu will ignore Git's staging area. It will not understand merge conflicts\nas Git represents them, unfinished git rebase states, as well as other less\ncommon states a Git repository can be in."
  }, {
    "heading": "colocated-jujutsugit-repos",
    "content": "Colocated repositories are less resilient to\nconcurrency\nissues if you share the repo using an NFS filesystem or Dropbox. In general,\nsuch use of Jujutsu is not currently thoroughly tested."
  }, {
    "heading": "colocated-jujutsugit-repos",
    "content": "There may still be bugs when interleaving mutating jj and git commands,\nusually having to do with a branch pointer ending up in the wrong place. We\nare working on the known ones, and are not aware of any major ones. Please\nreport any new ones you find, or if any of the known bugs are less minor than\nthey appear."
  }, {
    "heading": "converting-a-repo-into-a-colocated-repo",
    "content": "A Jujutsu repo backed by a Git repo has a full Git repo inside, so it is\ntechnically possible (though not officially supported) to convert it into a\ncolocated repo like so:"
  }, {
    "heading": "converting-a-repo-into-a-colocated-repo",
    "content": "!!! warning"
  }, {
    "heading": "converting-a-repo-into-a-colocated-repo",
    "content": "On Windows, the echo command will append line endings and cause jj\nto complain about the contents of git_target."
  }, {
    "heading": "converting-a-repo-into-a-colocated-repo",
    "content": "Instead of the echo -n ... line, use:\nSet-Content -Path .jj/repo/store/git_target -Value ../../../.git -NoNewLine"
  }, {
    "heading": "converting-a-repo-into-a-colocated-repo",
    "content": "We may officially support this in the future. If you try this, we would\nappreciate feedback and bug reports."
  }, {
    "heading": "branches",
    "content": "TODO: Describe how branches are mapped"
  }, {
    "heading": "format-mapping-details",
    "content": "Paths are assumed to be UTF-8. I have no current plans to support paths with\nother encodings."
  }, {
    "heading": "format-mapping-details",
    "content": "Commits created by jj have a ref starting with refs/jj/ to prevent GC."
  }, {
    "heading": "format-mapping-details",
    "content": "Commit metadata that cannot be represented in Git commits (such as the Change\nID and information about conflicts) is stored outside of the Git repo (currently\nin .jj/store/extra/)."
  }, {
    "heading": "format-mapping-details",
    "content": "Commits with conflicts cannot be represented in Git. They appear in the Git\ncommit as as root directories called.jjconflict-base-*/ and\n.jjconflict-side-*/. Note that the purpose of this representation is only to\nprevent GC of the relevant trees; the authoritative information is in the\nGit-external storage mentioned in the paragraph above. As long as you use jj\ncommands to work with them, you won't notice those paths. If, on the other hand,\nyou use e.g. git switch to check one of them out, you will see those\ndirectories in your working copy. If you then run e.g. jj status, the\nresulting snapshot will contain those directories, making it look like they\nreplaced all the other paths in your repo. You will probably want to run\njj abandon to get back to the state with the unresolved conflicts."
  }, {
    "heading": "format-mapping-details",
    "content": "Change IDs are stored in git commit headers as reverse hex encodings. These is\na non-standard header and is not preserved by all git tooling. For example,\nthe header is preserved by a git commit --amend, but is not preserved through\na rebase operation. GitHub and other major forges seem to preserve them for the\nmost part. This functionality is currently behind a git.write-change-id-header\nflag."
  }],
  "headings": [{
    "id": "supported-features",
    "content": "Supported features"
  }, {
    "id": "creating-an-empty-repo",
    "content": "Creating an empty repo"
  }, {
    "id": "creating-a-repo-backed-by-an-existing-git-repo",
    "content": "Creating a repo backed by an existing Git repo"
  }, {
    "id": "creating-a-repo-by-cloning-a-git-repo",
    "content": "Creating a repo by cloning a Git repo"
  }, {
    "id": "colocated-jujutsugit-repos",
    "content": "Colocated Jujutsu/Git repos"
  }, {
    "id": "converting-a-repo-into-a-colocated-repo",
    "content": "Converting a repo into a colocated repo"
  }, {
    "id": "branches",
    "content": "Branches"
  }, {
    "id": "format-mapping-details",
    "content": "Format mapping details"
  }]
};
const toc = [{
  depth: 2,
  url: "#supported-features",
  title: jsx(Fragment, {
    children: "Supported features"
  })
}, {
  depth: 2,
  url: "#creating-an-empty-repo",
  title: jsx(Fragment, {
    children: "Creating an empty repo"
  })
}, {
  depth: 2,
  url: "#creating-a-repo-backed-by-an-existing-git-repo",
  title: jsx(Fragment, {
    children: "Creating a repo backed by an existing Git repo"
  })
}, {
  depth: 2,
  url: "#creating-a-repo-by-cloning-a-git-repo",
  title: jsx(Fragment, {
    children: "Creating a repo by cloning a Git repo"
  })
}, {
  depth: 2,
  url: "#colocated-jujutsugit-repos",
  title: jsx(Fragment, {
    children: "Colocated Jujutsu/Git repos"
  })
}, {
  depth: 3,
  url: "#converting-a-repo-into-a-colocated-repo",
  title: jsx(Fragment, {
    children: "Converting a repo into a colocated repo"
  })
}, {
  depth: 2,
  url: "#branches",
  title: jsx(Fragment, {
    children: "Branches"
  })
}, {
  depth: 2,
  url: "#format-mapping-details",
  title: jsx(Fragment, {
    children: "Format mapping details"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.p, {
      children: ["Jujutsu has two backends for storing commits. One of them uses a regular Git\nrepo, which means that you can collaborate with Git users without them even\nknowing that you're not using the ", jsx(_components.code, {
        children: "git"
      }), " CLI."]
    }), "\n", jsxs(_components.p, {
      children: ["See ", jsx(_components.code, {
        children: "jj help git"
      }), " for help about the ", jsx(_components.code, {
        children: "jj git"
      }), " family of commands, and e.g.\n", jsx(_components.code, {
        children: "jj help git push"
      }), " for help about a specific command (use ", jsx(_components.code, {
        children: "jj git push -h"
      }), " for\nbriefer help)."]
    }), "\n", jsx(_components.h2, {
      id: "supported-features",
      children: "Supported features"
    }), "\n", jsxs(_components.p, {
      children: ["The following list describes which Git features Jujutsu is compatible with. For\na comparison with Git, including how workflows are different, see the\n", jsx(_components.a, {
        href: "/comparisons/git",
        children: "Git-comparison doc"
      }), "."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Configuration: Partial."
        }), " The only configuration from Git (e.g. in\n", jsx(_components.code, {
          children: "~/.gitconfig"
        }), ") that's respected is the following. Feel free to file a bug if\nyou miss any particular configuration options.", "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: ["The configuration of remotes (", jsx(_components.code, {
              children: '[remote "<name>"]'
            }), "). Only the names and URLs\nare respected (simple fetch refspecs are respected when branches are not\nexplicitly specified on the CLI, and ", jsx(_components.a, {
              href: "https://github.com/jj-vcs/jj/issues/4889",
              children: "only the last\npushurl"
            }), " is respected)."]
          }), "\n", jsx(_components.li, {
            children: jsx(_components.code, {
              children: "core.excludesFile"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Authentication: Yes."
        }), " ", jsx(_components.code, {
          children: "git"
        }), " is used for remote operations under the hood."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Branches: Yes."
        }), " You can read more about\n", jsx(_components.a, {
          href: "/concepts/bookmarks",
          children: "how branches work in Jujutsu"
        }), "\nand ", jsx(_components.a, {
          href: "#branches",
          children: "how they interoperate with Git"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Tags: Partial."
        }), " You can check out tagged commits by name (pointed to be\neither annotated or lightweight tags), but you cannot create new tags."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: ".gitignore: Yes."
        }), " Patterns in ", jsx(_components.code, {
          children: ".gitignore"
        }), " files are supported. So are\nignores in ", jsx(_components.code, {
          children: ".git/info/exclude"
        }), " or configured via Git's ", jsx(_components.code, {
          children: "core.excludesfile"
        }), "\nconfig. Since working-copy files are snapshotted by every ", jsx(_components.code, {
          children: "jj"
        }), " command, you\nmight need to run ", jsx(_components.code, {
          children: "jj file untrack"
        }), " to exclude newly ignored files from the\nworking-copy commit. It's recommended to set up the ignore patterns earlier.\nThe ", jsx(_components.code, {
          children: ".gitignore"
        }), " support uses a native implementation, so please report a bug\nif you notice any difference compared to ", jsx(_components.code, {
          children: "git"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: ".gitattributes: No."
        }), " There's ", jsx(_components.a, {
          href: "https://github.com/jj-vcs/jj/issues/53",
          children: "#53"
        }), "\nabout adding support for at least the ", jsx(_components.code, {
          children: "eol"
        }), " attribute."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Hooks: No."
        }), " There's ", jsx(_components.a, {
          href: "https://github.com/jj-vcs/jj/issues/405",
          children: "#405"
        }), "\nspecifically for providing the checks from ", jsx(_components.a, {
          href: "https://pre-commit.com",
          children: "https://pre-commit.com"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Merge commits: Yes."
        }), " Octopus merges (i.e. with more than 2 parents) are\nalso supported."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Detached HEAD: Yes."
        }), " Jujutsu supports anonymous branches, so this is a\nnatural state."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Orphan branch: Yes."
        }), ' Jujutsu has a virtual root commit that appears as\nparent of all commits Git would call "root commits".']
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Staging area: Kind of."
        }), " The staging area will be ignored. For example,\n", jsx(_components.code, {
          children: "jj diff"
        }), " will show a diff from the Git HEAD to the working copy. There are\n", jsx(_components.a, {
          href: "git-comparison#the-index",
          children: "ways of fulfilling your use cases without a staging\narea"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Garbage collection: Yes."
        }), " It should be safe to run ", jsx(_components.code, {
          children: "git gc"
        }), " in the Git\nrepo, but it's not tested, so it's probably a good idea to make a backup of\nthe whole workspace first. There's ", jsx(_components.a, {
          href: "https://github.com/jj-vcs/jj/issues/12",
          children: "no garbage collection and repacking of\nJujutsu's own data structures yet"
        }), ",\nhowever."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Bare repositories: Yes."
        }), " You can use ", jsx(_components.code, {
          children: "jj git init --git-repo=<path>"
        }), " to\ncreate a repo backed by a bare Git repo."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Submodules: No."
        }), " They will not show up in the working copy, but they will\nnot be lost either."]
      }), "\n", jsx(_components.li, {
        children: jsx(_components.strong, {
          children: "Partial clones: No."
        })
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Shallow clones: Kind of."
        }), " Shallow commits all have the virtual root commit as\ntheir parent. However, deepening or fully unshallowing a repository is currently not yet\nsupported and will cause issues."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "git-worktree: No."
        }), " However, there's native support for multiple working\ncopies backed by a single repo. See the ", jsx(_components.code, {
          children: "jj workspace"
        }), " family of commands."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Sparse checkouts: No."
        }), " However, there's native support for sparse\ncheckouts. See the ", jsx(_components.code, {
          children: "jj sparse"
        }), " command."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Signed commits: Yes."
        }), "\nYou can sign commits automatically ", jsx(_components.a, {
          href: "config#commit-signing",
          children: "by configuration"
        }), ",\nor use the ", jsx(_components.code, {
          children: "jj sign"
        }), " command."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Git LFS: No."
        }), " (", jsx(_components.a, {
          href: "https://github.com/jj-vcs/jj/issues/80",
          children: "#80"
        }), ")"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "creating-an-empty-repo",
      children: "Creating an empty repo"
    }), "\n", jsxs(_components.p, {
      children: ["To create an empty repo using the Git backend, use ", jsx(_components.code, {
        children: "jj init --git <name>"
      }), ". Since\nthe command creates a Jujutsu repo, it will have a ", jsx(_components.code, {
        children: ".jj/"
      }), " directory. The\nunderlying Git repo will be inside of that directory (currently in\n", jsx(_components.code, {
        children: ".jj/repo/store/git/"
      }), ")."]
    }), "\n", jsx(_components.h2, {
      id: "creating-a-repo-backed-by-an-existing-git-repo",
      children: "Creating a repo backed by an existing Git repo"
    }), "\n", jsxs(_components.p, {
      children: ["To create a Jujutsu repo backed by a Git repo you already have on disk, use\n", jsx(_components.code, {
        children: "jj git init --git-repo=<path to Git repo> <name>"
      }), ". The repo will work similar\nto a ", jsx(_components.a, {
        href: "https://git-scm.com/docs/git-worktree",
        children: "Git worktree"
      }), ", meaning that the\nworking copies files and the record of the working-copy commit will be separate,\nbut the commits will be accessible in both repos. Use ", jsx(_components.code, {
        children: "jj git import"
      }), " to update\nthe Jujutsu repo with changes made in the Git repo. Use ", jsx(_components.code, {
        children: "jj git export"
      }), " to\nupdate the Git repo with changes made in the Jujutsu repo."]
    }), "\n", jsx(_components.h2, {
      id: "creating-a-repo-by-cloning-a-git-repo",
      children: "Creating a repo by cloning a Git repo"
    }), "\n", jsxs(_components.p, {
      children: ["To create a Jujutsu repo from a remote Git URL, use ", jsx(_components.code, {
        children: "jj git clone <URL> [<destination>]"
      }), ". For example, ", jsx(_components.code, {
        children: "jj git clone https://github.com/octocat/Hello-World"
      }), ` will clone GitHub's "Hello-World" repo
into a directory by the same name.`]
    }), "\n", jsxs(_components.p, {
      children: ["By default, the remote repository will be named ", jsx(_components.code, {
        children: "origin"
      }), ". You can use\na name of your choice by adding ", jsx(_components.code, {
        children: "--remote <remote name>"
      }), " to the ", jsx(_components.code, {
        children: "jj git clone"
      }), " command."]
    }), "\n", jsx(_components.h2, {
      id: "colocated-jujutsugit-repos",
      children: "Colocated Jujutsu/Git repos"
    }), "\n", jsxs(_components.p, {
      children: ["A colocated Jujutsu repo is a hybrid Jujutsu/Git repo. This is the default\nfor Git-backed repositories created with ", jsx(_components.code, {
        children: "jj git init"
      }), " or ", jsx(_components.code, {
        children: "jj git clone"
      }), ".\nThe Git repo and the Jujutsu repo then share the same working copy. Jujutsu will\nimport and export from and to the Git repo on every ", jsx(_components.code, {
        children: "jj"
      }), " command automatically."]
    }), "\n", jsx(_components.p, {
      children: "This mode is very convenient when tools (e.g. build tools) expect a Git repo to\nbe present."
    }), "\n", jsxs(_components.p, {
      children: ["It is allowed to mix ", jsx(_components.code, {
        children: "jj"
      }), " and ", jsx(_components.code, {
        children: "git"
      }), " commands in such a repo in any order.\nHowever, it may be easier to keep track of what is going on if you mostly use\nread-only ", jsx(_components.code, {
        children: "git"
      }), " commands and use ", jsx(_components.code, {
        children: "jj"
      }), " to make changes to the repo. One reason\nfor this (see below for more) is that ", jsx(_components.code, {
        children: "jj"
      }), ' commands will usually put the git\nrepo in a "detached HEAD" state, since in ', jsx(_components.code, {
        children: "jj"
      }), ' there is not concept of a\n"currently tracked branch". Before doing mutating Git commands, you may need to\ntell Git what the current branch should be with a ', jsx(_components.code, {
        children: "git switch"
      }), " command."]
    }), "\n", jsxs(_components.p, {
      children: ["You can undo the results of mutating ", jsx(_components.code, {
        children: "git"
      }), " commands using ", jsx(_components.code, {
        children: "jj undo"
      }), " and ", jsx(_components.code, {
        children: "jj op restore"
      }), ". Inside ", jsx(_components.code, {
        children: "jj op log"
      }), ", changes by ", jsx(_components.code, {
        children: "git"
      }), ' will be represented as an "import\ngit refs" operation.']
    }), "\n", jsxs(_components.p, {
      children: ["There are a few downsides to this mode of operation. Generally, using colocated\nrepos may require you to deal with more involved Jujutsu and Git concepts.\nYou can disable colocation with the ", jsx(_components.code, {
        children: "--no-colocate"
      }), " flag on the commands\n", jsx(_components.code, {
        children: "jj git init"
      }), " and ", jsx(_components.code, {
        children: "jj git clone"
      }), " or by setting the configuration\n", jsx(_components.code, {
        children: "git.colocate = false"
      }), "."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["Interleaving ", jsx(_components.code, {
            children: "jj"
          }), " and ", jsx(_components.code, {
            children: "git"
          }), " commands increases the chance of confusing branch\nconflicts or ", jsx(_components.a, {
            href: "glossary#divergent-change",
            children: "conflicted (AKA divergent) change\nids"
          }), ". These never lose data, but can be\nannoying."]
        }), "\n", jsxs(_components.p, {
          children: ["Such interleaving can happen unknowingly. For example, some IDEs can cause\nit because they automatically run ", jsx(_components.code, {
            children: "git fetch"
          }), " in the background from time to\ntime."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["In colocated repos with a very large number of branches or other refs, ", jsx(_components.code, {
            children: "jj"
          }), "\ncommands can get noticeably slower because of the automatic ", jsx(_components.code, {
            children: "jj git import"
          }), "\nexecuted on each command. This can be mitigated by occasionally running ", jsx(_components.code, {
            children: "jj util gc"
          }), " to speed up the import (that command includes packing the Git refs)."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["Git tools will have trouble with revisions that contain conflicted files. While\n", jsx(_components.code, {
            children: "jj"
          }), " renders these files with conflict markers in the working copy, they are\nstored in a non-human-readable fashion inside the repo. Git tools will often\nsee this non-human-readable representation."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["When a ", jsx(_components.code, {
            children: "jj"
          }), ' branch is conflicted, the position of the branch in the Git repo\nwill disagree with one or more of the conflicted positions. The state of that\nbranch in git will be labeled as though it belongs to a remote named "git",\ne.g. ', jsx(_components.code, {
            children: "branch@git"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["Jujutsu will ignore Git's staging area. It will not understand merge conflicts\nas Git represents them, unfinished ", jsx(_components.code, {
            children: "git rebase"
          }), " states, as well as other less\ncommon states a Git repository can be in."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["Colocated repositories are less resilient to\n", jsx(_components.a, {
            href: "technical/concurrency#syncing-with-rsync-nfs-dropbox-etc",
            children: "concurrency"
          }), "\nissues if you share the repo using an NFS filesystem or Dropbox. In general,\nsuch use of Jujutsu is not currently thoroughly tested."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["There may still be bugs when interleaving mutating ", jsx(_components.code, {
            children: "jj"
          }), " and ", jsx(_components.code, {
            children: "git"
          }), " commands,\nusually having to do with a branch pointer ending up in the wrong place. We\nare working on the known ones, and are not aware of any major ones. Please\nreport any new ones you find, or if any of the known bugs are less minor than\nthey appear."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "converting-a-repo-into-a-colocated-repo",
      children: "Converting a repo into a colocated repo"
    }), "\n", jsx(_components.p, {
      children: "A Jujutsu repo backed by a Git repo has a full Git repo inside, so it is\ntechnically possible (though not officially supported) to convert it into a\ncolocated repo like so:"
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
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Ignore the .jj directory in Git"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "echo"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " '/*'"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " >"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " .jj/.gitignore"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Move the Git repo"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "mv"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " .jj/repo/store/git"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " .git"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Tell jj where to find it (do not use on Windows! See below.)"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "echo"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -n"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " '../../../.git'"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " >"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " .jj/repo/store/git_target"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Make the Git repository non-bare and set HEAD"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "git"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " config"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --unset"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " core.bare"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Convince jj to update .git/HEAD to point to the working-copy commit's parent"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " new"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " && "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " undo"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "!!! warning"
    }), "\n", jsxs(_components.p, {
      children: ["On Windows, the ", jsx(_components.code, {
        children: "echo"
      }), " command will append line endings and cause ", jsx(_components.code, {
        children: "jj"
      }), "\nto complain about the contents of ", jsx(_components.code, {
        children: "git_target"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["Instead of the ", jsx(_components.code, {
        children: "echo -n ..."
      }), " line, use:\n", jsx(_components.code, {
        children: "Set-Content -Path .jj/repo/store/git_target -Value ../../../.git -NoNewLine"
      })]
    }), "\n", jsx(_components.p, {
      children: "We may officially support this in the future. If you try this, we would\nappreciate feedback and bug reports."
    }), "\n", jsx(_components.h2, {
      id: "branches",
      children: "Branches"
    }), "\n", jsx(_components.p, {
      children: "TODO: Describe how branches are mapped"
    }), "\n", jsx(_components.h2, {
      id: "format-mapping-details",
      children: "Format mapping details"
    }), "\n", jsx(_components.p, {
      children: "Paths are assumed to be UTF-8. I have no current plans to support paths with\nother encodings."
    }), "\n", jsxs(_components.p, {
      children: ["Commits created by ", jsx(_components.code, {
        children: "jj"
      }), " have a ref starting with ", jsx(_components.code, {
        children: "refs/jj/"
      }), " to prevent GC."]
    }), "\n", jsxs(_components.p, {
      children: ["Commit metadata that cannot be represented in Git commits (such as the Change\nID and information about conflicts) is stored outside of the Git repo (currently\nin ", jsx(_components.code, {
        children: ".jj/store/extra/"
      }), ")."]
    }), "\n", jsxs(_components.p, {
      children: ["Commits with conflicts cannot be represented in Git. They appear in the Git\ncommit as as root directories called", jsx(_components.code, {
        children: ".jjconflict-base-*/"
      }), " and\n", jsx(_components.code, {
        children: ".jjconflict-side-*/"
      }), ". Note that the purpose of this representation is only to\nprevent GC of the relevant trees; the authoritative information is in the\nGit-external storage mentioned in the paragraph above. As long as you use ", jsx(_components.code, {
        children: "jj"
      }), "\ncommands to work with them, you won't notice those paths. If, on the other hand,\nyou use e.g. ", jsx(_components.code, {
        children: "git switch"
      }), " to check one of them out, you will see those\ndirectories in your working copy. If you then run e.g. ", jsx(_components.code, {
        children: "jj status"
      }), ", the\nresulting snapshot will contain those directories, making it look like they\nreplaced all the other paths in your repo. You will probably want to run\n", jsx(_components.code, {
        children: "jj abandon"
      }), " to get back to the state with the unresolved conflicts."]
    }), "\n", jsxs(_components.p, {
      children: ["Change IDs are stored in git commit headers as reverse hex encodings. These is\na non-standard header and is not preserved by all ", jsx(_components.code, {
        children: "git"
      }), " tooling. For example,\nthe header is preserved by a ", jsx(_components.code, {
        children: "git commit --amend"
      }), ", but is not preserved through\na rebase operation. GitHub and other major forges seem to preserve them for the\nmost part. This functionality is currently behind a ", jsx(_components.code, {
        children: "git.write-change-id-header"
      }), "\nflag."]
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
//# sourceMappingURL=git-compatibility-BZUL4tMI.mjs.map
