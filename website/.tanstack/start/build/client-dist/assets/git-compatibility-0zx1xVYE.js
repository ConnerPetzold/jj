import{j as e}from"./main-BCYT0j2h.js";let s={title:"Git compatibility"},r=[{href:"/comparisons/git"},{href:"https://github.com/jj-vcs/jj/issues/4889"},{href:"/concepts/bookmarks"},{href:"#branches"},{href:"https://github.com/jj-vcs/jj/issues/53"},{href:"https://github.com/jj-vcs/jj/issues/405"},{href:"https://pre-commit.com"},{href:"git-comparison#the-index"},{href:"https://github.com/jj-vcs/jj/issues/12"},{href:"config#commit-signing"},{href:"https://github.com/jj-vcs/jj/issues/80"},{href:"https://git-scm.com/docs/git-worktree"},{href:"glossary#divergent-change"},{href:"technical/concurrency#syncing-with-rsync-nfs-dropbox-etc"}],a={contents:[{heading:void 0,content:`Jujutsu has two backends for storing commits. One of them uses a regular Git
repo, which means that you can collaborate with Git users without them even
knowing that you're not using the git CLI.`},{heading:void 0,content:`See jj help git for help about the jj git family of commands, and e.g.
jj help git push for help about a specific command (use jj git push -h for
briefer help).`},{heading:"supported-features",content:`The following list describes which Git features Jujutsu is compatible with. For
a comparison with Git, including how workflows are different, see the
Git-comparison doc.`},{heading:"supported-features",content:`Configuration: Partial. The only configuration from Git (e.g. in
~/.gitconfig) that's respected is the following. Feel free to file a bug if
you miss any particular configuration options.`},{heading:"supported-features",content:`The configuration of remotes ([remote "<name>"]). Only the names and URLs
are respected (simple fetch refspecs are respected when branches are not
explicitly specified on the CLI, and only the last
pushurl is respected).`},{heading:"supported-features",content:"core.excludesFile"},{heading:"supported-features",content:"Authentication: Yes. git is used for remote operations under the hood."},{heading:"supported-features",content:`Branches: Yes. You can read more about
how branches work in Jujutsu
and how they interoperate with Git.`},{heading:"supported-features",content:`Tags: Partial. You can check out tagged commits by name (pointed to be
either annotated or lightweight tags), but you cannot create new tags.`},{heading:"supported-features",content:`.gitignore: Yes. Patterns in .gitignore files are supported. So are
ignores in .git/info/exclude or configured via Git's core.excludesfile
config. Since working-copy files are snapshotted by every jj command, you
might need to run jj file untrack to exclude newly ignored files from the
working-copy commit. It's recommended to set up the ignore patterns earlier.
The .gitignore support uses a native implementation, so please report a bug
if you notice any difference compared to git.`},{heading:"supported-features",content:`.gitattributes: No. There's #53
about adding support for at least the eol attribute.`},{heading:"supported-features",content:`Hooks: No. There's #405
specifically for providing the checks from https://pre-commit.com.`},{heading:"supported-features",content:`Merge commits: Yes. Octopus merges (i.e. with more than 2 parents) are
also supported.`},{heading:"supported-features",content:`Detached HEAD: Yes. Jujutsu supports anonymous branches, so this is a
natural state.`},{heading:"supported-features",content:`Orphan branch: Yes. Jujutsu has a virtual root commit that appears as
parent of all commits Git would call "root commits".`},{heading:"supported-features",content:`Staging area: Kind of. The staging area will be ignored. For example,
jj diff will show a diff from the Git HEAD to the working copy. There are
ways of fulfilling your use cases without a staging
area.`},{heading:"supported-features",content:`Garbage collection: Yes. It should be safe to run git gc in the Git
repo, but it's not tested, so it's probably a good idea to make a backup of
the whole workspace first. There's no garbage collection and repacking of
Jujutsu's own data structures yet,
however.`},{heading:"supported-features",content:`Bare repositories: Yes. You can use jj git init --git-repo=<path> to
create a repo backed by a bare Git repo.`},{heading:"supported-features",content:`Submodules: No. They will not show up in the working copy, but they will
not be lost either.`},{heading:"supported-features",content:"Partial clones: No."},{heading:"supported-features",content:`Shallow clones: Kind of. Shallow commits all have the virtual root commit as
their parent. However, deepening or fully unshallowing a repository is currently not yet
supported and will cause issues.`},{heading:"supported-features",content:`git-worktree: No. However, there's native support for multiple working
copies backed by a single repo. See the jj workspace family of commands.`},{heading:"supported-features",content:`Sparse checkouts: No. However, there's native support for sparse
checkouts. See the jj sparse command.`},{heading:"supported-features",content:`Signed commits: Yes.
You can sign commits automatically by configuration,
or use the jj sign command.`},{heading:"supported-features",content:"Git LFS: No. (#80)"},{heading:"creating-an-empty-repo",content:`To create an empty repo using the Git backend, use jj init --git <name>. Since
the command creates a Jujutsu repo, it will have a .jj/ directory. The
underlying Git repo will be inside of that directory (currently in
.jj/repo/store/git/).`},{heading:"creating-a-repo-backed-by-an-existing-git-repo",content:`To create a Jujutsu repo backed by a Git repo you already have on disk, use
jj git init --git-repo=<path to Git repo> <name>. The repo will work similar
to a Git worktree, meaning that the
working copies files and the record of the working-copy commit will be separate,
but the commits will be accessible in both repos. Use jj git import to update
the Jujutsu repo with changes made in the Git repo. Use jj git export to
update the Git repo with changes made in the Jujutsu repo.`},{heading:"creating-a-repo-by-cloning-a-git-repo",content:`To create a Jujutsu repo from a remote Git URL, use jj git clone <URL>
[<destination>]. For example, jj git clone
https://github.com/octocat/Hello-World will clone GitHub's "Hello-World" repo
into a directory by the same name.`},{heading:"creating-a-repo-by-cloning-a-git-repo",content:`By default, the remote repository will be named origin. You can use
a name of your choice by adding --remote <remote name> to the jj
git clone command.`},{heading:"colocated-jujutsugit-repos",content:`A colocated Jujutsu repo is a hybrid Jujutsu/Git repo. This is the default
for Git-backed repositories created with jj git init or jj git clone.
The Git repo and the Jujutsu repo then share the same working copy. Jujutsu will
import and export from and to the Git repo on every jj command automatically.`},{heading:"colocated-jujutsugit-repos",content:`This mode is very convenient when tools (e.g. build tools) expect a Git repo to
be present.`},{heading:"colocated-jujutsugit-repos",content:`It is allowed to mix jj and git commands in such a repo in any order.
However, it may be easier to keep track of what is going on if you mostly use
read-only git commands and use jj to make changes to the repo. One reason
for this (see below for more) is that jj commands will usually put the git
repo in a "detached HEAD" state, since in jj there is not concept of a
"currently tracked branch". Before doing mutating Git commands, you may need to
tell Git what the current branch should be with a git switch command.`},{heading:"colocated-jujutsugit-repos",content:`You can undo the results of mutating git commands using jj undo and jj op
restore. Inside jj op log, changes by git will be represented as an "import
git refs" operation.`},{heading:"colocated-jujutsugit-repos",content:`There are a few downsides to this mode of operation. Generally, using colocated
repos may require you to deal with more involved Jujutsu and Git concepts.
You can disable colocation with the --no-colocate flag on the commands
jj git init and jj git clone or by setting the configuration
git.colocate = false.`},{heading:"colocated-jujutsugit-repos",content:`Interleaving jj and git commands increases the chance of confusing branch
conflicts or conflicted (AKA divergent) change
ids. These never lose data, but can be
annoying.`},{heading:"colocated-jujutsugit-repos",content:`Such interleaving can happen unknowingly. For example, some IDEs can cause
it because they automatically run git fetch in the background from time to
time.`},{heading:"colocated-jujutsugit-repos",content:`In colocated repos with a very large number of branches or other refs, jj
commands can get noticeably slower because of the automatic jj git import
executed on each command. This can be mitigated by occasionally running jj util
gc to speed up the import (that command includes packing the Git refs).`},{heading:"colocated-jujutsugit-repos",content:`Git tools will have trouble with revisions that contain conflicted files. While
jj renders these files with conflict markers in the working copy, they are
stored in a non-human-readable fashion inside the repo. Git tools will often
see this non-human-readable representation.`},{heading:"colocated-jujutsugit-repos",content:`When a jj branch is conflicted, the position of the branch in the Git repo
will disagree with one or more of the conflicted positions. The state of that
branch in git will be labeled as though it belongs to a remote named "git",
e.g. branch@git.`},{heading:"colocated-jujutsugit-repos",content:`Jujutsu will ignore Git's staging area. It will not understand merge conflicts
as Git represents them, unfinished git rebase states, as well as other less
common states a Git repository can be in.`},{heading:"colocated-jujutsugit-repos",content:`Colocated repositories are less resilient to
concurrency
issues if you share the repo using an NFS filesystem or Dropbox. In general,
such use of Jujutsu is not currently thoroughly tested.`},{heading:"colocated-jujutsugit-repos",content:`There may still be bugs when interleaving mutating jj and git commands,
usually having to do with a branch pointer ending up in the wrong place. We
are working on the known ones, and are not aware of any major ones. Please
report any new ones you find, or if any of the known bugs are less minor than
they appear.`},{heading:"converting-a-repo-into-a-colocated-repo",content:`A Jujutsu repo backed by a Git repo has a full Git repo inside, so it is
technically possible (though not officially supported) to convert it into a
colocated repo like so:`},{heading:"converting-a-repo-into-a-colocated-repo",content:"!!! warning"},{heading:"converting-a-repo-into-a-colocated-repo",content:`On Windows, the echo command will append line endings and cause jj
to complain about the contents of git_target.`},{heading:"converting-a-repo-into-a-colocated-repo",content:`Instead of the echo -n ... line, use:
Set-Content -Path .jj/repo/store/git_target -Value ../../../.git -NoNewLine`},{heading:"converting-a-repo-into-a-colocated-repo",content:`We may officially support this in the future. If you try this, we would
appreciate feedback and bug reports.`},{heading:"branches",content:"TODO: Describe how branches are mapped"},{heading:"format-mapping-details",content:`Paths are assumed to be UTF-8. I have no current plans to support paths with
other encodings.`},{heading:"format-mapping-details",content:"Commits created by jj have a ref starting with refs/jj/ to prevent GC."},{heading:"format-mapping-details",content:`Commit metadata that cannot be represented in Git commits (such as the Change
ID and information about conflicts) is stored outside of the Git repo (currently
in .jj/store/extra/).`},{heading:"format-mapping-details",content:`Commits with conflicts cannot be represented in Git. They appear in the Git
commit as as root directories called.jjconflict-base-*/ and
.jjconflict-side-*/. Note that the purpose of this representation is only to
prevent GC of the relevant trees; the authoritative information is in the
Git-external storage mentioned in the paragraph above. As long as you use jj
commands to work with them, you won't notice those paths. If, on the other hand,
you use e.g. git switch to check one of them out, you will see those
directories in your working copy. If you then run e.g. jj status, the
resulting snapshot will contain those directories, making it look like they
replaced all the other paths in your repo. You will probably want to run
jj abandon to get back to the state with the unresolved conflicts.`},{heading:"format-mapping-details",content:`Change IDs are stored in git commit headers as reverse hex encodings. These is
a non-standard header and is not preserved by all git tooling. For example,
the header is preserved by a git commit --amend, but is not preserved through
a rebase operation. GitHub and other major forges seem to preserve them for the
most part. This functionality is currently behind a git.write-change-id-header
flag.`}],headings:[{id:"supported-features",content:"Supported features"},{id:"creating-an-empty-repo",content:"Creating an empty repo"},{id:"creating-a-repo-backed-by-an-existing-git-repo",content:"Creating a repo backed by an existing Git repo"},{id:"creating-a-repo-by-cloning-a-git-repo",content:"Creating a repo by cloning a Git repo"},{id:"colocated-jujutsugit-repos",content:"Colocated Jujutsu/Git repos"},{id:"converting-a-repo-into-a-colocated-repo",content:"Converting a repo into a colocated repo"},{id:"branches",content:"Branches"},{id:"format-mapping-details",content:"Format mapping details"}]};const c=[{depth:2,url:"#supported-features",title:e.jsx(e.Fragment,{children:"Supported features"})},{depth:2,url:"#creating-an-empty-repo",title:e.jsx(e.Fragment,{children:"Creating an empty repo"})},{depth:2,url:"#creating-a-repo-backed-by-an-existing-git-repo",title:e.jsx(e.Fragment,{children:"Creating a repo backed by an existing Git repo"})},{depth:2,url:"#creating-a-repo-by-cloning-a-git-repo",title:e.jsx(e.Fragment,{children:"Creating a repo by cloning a Git repo"})},{depth:2,url:"#colocated-jujutsugit-repos",title:e.jsx(e.Fragment,{children:"Colocated Jujutsu/Git repos"})},{depth:3,url:"#converting-a-repo-into-a-colocated-repo",title:e.jsx(e.Fragment,{children:"Converting a repo into a colocated repo"})},{depth:2,url:"#branches",title:e.jsx(e.Fragment,{children:"Branches"})},{depth:2,url:"#format-mapping-details",title:e.jsx(e.Fragment,{children:"Format mapping details"})}];function i(n){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.p,{children:[`Jujutsu has two backends for storing commits. One of them uses a regular Git
repo, which means that you can collaborate with Git users without them even
knowing that you're not using the `,e.jsx(t.code,{children:"git"})," CLI."]}),`
`,e.jsxs(t.p,{children:["See ",e.jsx(t.code,{children:"jj help git"})," for help about the ",e.jsx(t.code,{children:"jj git"}),` family of commands, and e.g.
`,e.jsx(t.code,{children:"jj help git push"})," for help about a specific command (use ",e.jsx(t.code,{children:"jj git push -h"}),` for
briefer help).`]}),`
`,e.jsx(t.h2,{id:"supported-features",children:"Supported features"}),`
`,e.jsxs(t.p,{children:[`The following list describes which Git features Jujutsu is compatible with. For
a comparison with Git, including how workflows are different, see the
`,e.jsx(t.a,{href:"/comparisons/git",children:"Git-comparison doc"}),"."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Configuration: Partial."}),` The only configuration from Git (e.g. in
`,e.jsx(t.code,{children:"~/.gitconfig"}),`) that's respected is the following. Feel free to file a bug if
you miss any particular configuration options.`,`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:["The configuration of remotes (",e.jsx(t.code,{children:'[remote "<name>"]'}),`). Only the names and URLs
are respected (simple fetch refspecs are respected when branches are not
explicitly specified on the CLI, and `,e.jsx(t.a,{href:"https://github.com/jj-vcs/jj/issues/4889",children:`only the last
pushurl`})," is respected)."]}),`
`,e.jsx(t.li,{children:e.jsx(t.code,{children:"core.excludesFile"})}),`
`]}),`
`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Authentication: Yes."})," ",e.jsx(t.code,{children:"git"})," is used for remote operations under the hood."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Branches: Yes."}),` You can read more about
`,e.jsx(t.a,{href:"/concepts/bookmarks",children:"how branches work in Jujutsu"}),`
and `,e.jsx(t.a,{href:"#branches",children:"how they interoperate with Git"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Tags: Partial."}),` You can check out tagged commits by name (pointed to be
either annotated or lightweight tags), but you cannot create new tags.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:".gitignore: Yes."})," Patterns in ",e.jsx(t.code,{children:".gitignore"}),` files are supported. So are
ignores in `,e.jsx(t.code,{children:".git/info/exclude"})," or configured via Git's ",e.jsx(t.code,{children:"core.excludesfile"}),`
config. Since working-copy files are snapshotted by every `,e.jsx(t.code,{children:"jj"}),` command, you
might need to run `,e.jsx(t.code,{children:"jj file untrack"}),` to exclude newly ignored files from the
working-copy commit. It's recommended to set up the ignore patterns earlier.
The `,e.jsx(t.code,{children:".gitignore"}),` support uses a native implementation, so please report a bug
if you notice any difference compared to `,e.jsx(t.code,{children:"git"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:".gitattributes: No."})," There's ",e.jsx(t.a,{href:"https://github.com/jj-vcs/jj/issues/53",children:"#53"}),`
about adding support for at least the `,e.jsx(t.code,{children:"eol"})," attribute."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Hooks: No."})," There's ",e.jsx(t.a,{href:"https://github.com/jj-vcs/jj/issues/405",children:"#405"}),`
specifically for providing the checks from `,e.jsx(t.a,{href:"https://pre-commit.com",children:"https://pre-commit.com"}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Merge commits: Yes."}),` Octopus merges (i.e. with more than 2 parents) are
also supported.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Detached HEAD: Yes."}),` Jujutsu supports anonymous branches, so this is a
natural state.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Orphan branch: Yes."}),` Jujutsu has a virtual root commit that appears as
parent of all commits Git would call "root commits".`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Staging area: Kind of."}),` The staging area will be ignored. For example,
`,e.jsx(t.code,{children:"jj diff"}),` will show a diff from the Git HEAD to the working copy. There are
`,e.jsx(t.a,{href:"git-comparison#the-index",children:`ways of fulfilling your use cases without a staging
area`}),"."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Garbage collection: Yes."})," It should be safe to run ",e.jsx(t.code,{children:"git gc"}),` in the Git
repo, but it's not tested, so it's probably a good idea to make a backup of
the whole workspace first. There's `,e.jsx(t.a,{href:"https://github.com/jj-vcs/jj/issues/12",children:`no garbage collection and repacking of
Jujutsu's own data structures yet`}),`,
however.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Bare repositories: Yes."})," You can use ",e.jsx(t.code,{children:"jj git init --git-repo=<path>"}),` to
create a repo backed by a bare Git repo.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Submodules: No."}),` They will not show up in the working copy, but they will
not be lost either.`]}),`
`,e.jsx(t.li,{children:e.jsx(t.strong,{children:"Partial clones: No."})}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Shallow clones: Kind of."}),` Shallow commits all have the virtual root commit as
their parent. However, deepening or fully unshallowing a repository is currently not yet
supported and will cause issues.`]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"git-worktree: No."}),` However, there's native support for multiple working
copies backed by a single repo. See the `,e.jsx(t.code,{children:"jj workspace"})," family of commands."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Sparse checkouts: No."}),` However, there's native support for sparse
checkouts. See the `,e.jsx(t.code,{children:"jj sparse"})," command."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Signed commits: Yes."}),`
You can sign commits automatically `,e.jsx(t.a,{href:"config#commit-signing",children:"by configuration"}),`,
or use the `,e.jsx(t.code,{children:"jj sign"})," command."]}),`
`,e.jsxs(t.li,{children:[e.jsx(t.strong,{children:"Git LFS: No."})," (",e.jsx(t.a,{href:"https://github.com/jj-vcs/jj/issues/80",children:"#80"}),")"]}),`
`]}),`
`,e.jsx(t.h2,{id:"creating-an-empty-repo",children:"Creating an empty repo"}),`
`,e.jsxs(t.p,{children:["To create an empty repo using the Git backend, use ",e.jsx(t.code,{children:"jj init --git <name>"}),`. Since
the command creates a Jujutsu repo, it will have a `,e.jsx(t.code,{children:".jj/"}),` directory. The
underlying Git repo will be inside of that directory (currently in
`,e.jsx(t.code,{children:".jj/repo/store/git/"}),")."]}),`
`,e.jsx(t.h2,{id:"creating-a-repo-backed-by-an-existing-git-repo",children:"Creating a repo backed by an existing Git repo"}),`
`,e.jsxs(t.p,{children:[`To create a Jujutsu repo backed by a Git repo you already have on disk, use
`,e.jsx(t.code,{children:"jj git init --git-repo=<path to Git repo> <name>"}),`. The repo will work similar
to a `,e.jsx(t.a,{href:"https://git-scm.com/docs/git-worktree",children:"Git worktree"}),`, meaning that the
working copies files and the record of the working-copy commit will be separate,
but the commits will be accessible in both repos. Use `,e.jsx(t.code,{children:"jj git import"}),` to update
the Jujutsu repo with changes made in the Git repo. Use `,e.jsx(t.code,{children:"jj git export"}),` to
update the Git repo with changes made in the Jujutsu repo.`]}),`
`,e.jsx(t.h2,{id:"creating-a-repo-by-cloning-a-git-repo",children:"Creating a repo by cloning a Git repo"}),`
`,e.jsxs(t.p,{children:["To create a Jujutsu repo from a remote Git URL, use ",e.jsx(t.code,{children:"jj git clone <URL> [<destination>]"}),". For example, ",e.jsx(t.code,{children:"jj git clone https://github.com/octocat/Hello-World"}),` will clone GitHub's "Hello-World" repo
into a directory by the same name.`]}),`
`,e.jsxs(t.p,{children:["By default, the remote repository will be named ",e.jsx(t.code,{children:"origin"}),`. You can use
a name of your choice by adding `,e.jsx(t.code,{children:"--remote <remote name>"})," to the ",e.jsx(t.code,{children:"jj git clone"})," command."]}),`
`,e.jsx(t.h2,{id:"colocated-jujutsugit-repos",children:"Colocated Jujutsu/Git repos"}),`
`,e.jsxs(t.p,{children:[`A colocated Jujutsu repo is a hybrid Jujutsu/Git repo. This is the default
for Git-backed repositories created with `,e.jsx(t.code,{children:"jj git init"})," or ",e.jsx(t.code,{children:"jj git clone"}),`.
The Git repo and the Jujutsu repo then share the same working copy. Jujutsu will
import and export from and to the Git repo on every `,e.jsx(t.code,{children:"jj"})," command automatically."]}),`
`,e.jsx(t.p,{children:`This mode is very convenient when tools (e.g. build tools) expect a Git repo to
be present.`}),`
`,e.jsxs(t.p,{children:["It is allowed to mix ",e.jsx(t.code,{children:"jj"})," and ",e.jsx(t.code,{children:"git"}),` commands in such a repo in any order.
However, it may be easier to keep track of what is going on if you mostly use
read-only `,e.jsx(t.code,{children:"git"})," commands and use ",e.jsx(t.code,{children:"jj"}),` to make changes to the repo. One reason
for this (see below for more) is that `,e.jsx(t.code,{children:"jj"}),` commands will usually put the git
repo in a "detached HEAD" state, since in `,e.jsx(t.code,{children:"jj"}),` there is not concept of a
"currently tracked branch". Before doing mutating Git commands, you may need to
tell Git what the current branch should be with a `,e.jsx(t.code,{children:"git switch"})," command."]}),`
`,e.jsxs(t.p,{children:["You can undo the results of mutating ",e.jsx(t.code,{children:"git"})," commands using ",e.jsx(t.code,{children:"jj undo"})," and ",e.jsx(t.code,{children:"jj op restore"}),". Inside ",e.jsx(t.code,{children:"jj op log"}),", changes by ",e.jsx(t.code,{children:"git"}),` will be represented as an "import
git refs" operation.`]}),`
`,e.jsxs(t.p,{children:[`There are a few downsides to this mode of operation. Generally, using colocated
repos may require you to deal with more involved Jujutsu and Git concepts.
You can disable colocation with the `,e.jsx(t.code,{children:"--no-colocate"}),` flag on the commands
`,e.jsx(t.code,{children:"jj git init"})," and ",e.jsx(t.code,{children:"jj git clone"}),` or by setting the configuration
`,e.jsx(t.code,{children:"git.colocate = false"}),"."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["Interleaving ",e.jsx(t.code,{children:"jj"})," and ",e.jsx(t.code,{children:"git"}),` commands increases the chance of confusing branch
conflicts or `,e.jsx(t.a,{href:"glossary#divergent-change",children:`conflicted (AKA divergent) change
ids`}),`. These never lose data, but can be
annoying.`]}),`
`,e.jsxs(t.p,{children:[`Such interleaving can happen unknowingly. For example, some IDEs can cause
it because they automatically run `,e.jsx(t.code,{children:"git fetch"}),` in the background from time to
time.`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["In colocated repos with a very large number of branches or other refs, ",e.jsx(t.code,{children:"jj"}),`
commands can get noticeably slower because of the automatic `,e.jsx(t.code,{children:"jj git import"}),`
executed on each command. This can be mitigated by occasionally running `,e.jsx(t.code,{children:"jj util gc"})," to speed up the import (that command includes packing the Git refs)."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[`Git tools will have trouble with revisions that contain conflicted files. While
`,e.jsx(t.code,{children:"jj"}),` renders these files with conflict markers in the working copy, they are
stored in a non-human-readable fashion inside the repo. Git tools will often
see this non-human-readable representation.`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["When a ",e.jsx(t.code,{children:"jj"}),` branch is conflicted, the position of the branch in the Git repo
will disagree with one or more of the conflicted positions. The state of that
branch in git will be labeled as though it belongs to a remote named "git",
e.g. `,e.jsx(t.code,{children:"branch@git"}),"."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[`Jujutsu will ignore Git's staging area. It will not understand merge conflicts
as Git represents them, unfinished `,e.jsx(t.code,{children:"git rebase"}),` states, as well as other less
common states a Git repository can be in.`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[`Colocated repositories are less resilient to
`,e.jsx(t.a,{href:"technical/concurrency#syncing-with-rsync-nfs-dropbox-etc",children:"concurrency"}),`
issues if you share the repo using an NFS filesystem or Dropbox. In general,
such use of Jujutsu is not currently thoroughly tested.`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:["There may still be bugs when interleaving mutating ",e.jsx(t.code,{children:"jj"})," and ",e.jsx(t.code,{children:"git"}),` commands,
usually having to do with a branch pointer ending up in the wrong place. We
are working on the known ones, and are not aware of any major ones. Please
report any new ones you find, or if any of the known bugs are less minor than
they appear.`]}),`
`]}),`
`]}),`
`,e.jsx(t.h3,{id:"converting-a-repo-into-a-colocated-repo",children:"Converting a repo into a colocated repo"}),`
`,e.jsx(t.p,{children:`A Jujutsu repo backed by a Git repo has a full Git repo inside, so it is
technically possible (though not officially supported) to convert it into a
colocated repo like so:`}),`
`,e.jsx(e.Fragment,{children:e.jsx(t.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsxs(t.code,{children:[e.jsx(t.span,{className:"line",children:e.jsx(t.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# Ignore the .jj directory in Git"})}),`
`,e.jsxs(t.span,{className:"line",children:[e.jsx(t.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"echo"}),e.jsx(t.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '/*'"}),e.jsx(t.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" >"}),e.jsx(t.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" .jj/.gitignore"})]}),`
`,e.jsx(t.span,{className:"line",children:e.jsx(t.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# Move the Git repo"})}),`
`,e.jsxs(t.span,{className:"line",children:[e.jsx(t.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"mv"}),e.jsx(t.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" .jj/repo/store/git"}),e.jsx(t.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" .git"})]}),`
`,e.jsx(t.span,{className:"line",children:e.jsx(t.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# Tell jj where to find it (do not use on Windows! See below.)"})}),`
`,e.jsxs(t.span,{className:"line",children:[e.jsx(t.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"echo"}),e.jsx(t.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -n"}),e.jsx(t.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '../../../.git'"}),e.jsx(t.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" >"}),e.jsx(t.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" .jj/repo/store/git_target"})]}),`
`,e.jsx(t.span,{className:"line",children:e.jsx(t.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# Make the Git repository non-bare and set HEAD"})}),`
`,e.jsxs(t.span,{className:"line",children:[e.jsx(t.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"git"}),e.jsx(t.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" config"}),e.jsx(t.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --unset"}),e.jsx(t.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" core.bare"})]}),`
`,e.jsx(t.span,{className:"line",children:e.jsx(t.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# Convince jj to update .git/HEAD to point to the working-copy commit's parent"})}),`
`,e.jsxs(t.span,{className:"line",children:[e.jsx(t.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(t.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" new"}),e.jsx(t.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" && "}),e.jsx(t.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(t.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" undo"})]})]})})}),`
`,e.jsx(t.p,{children:"!!! warning"}),`
`,e.jsxs(t.p,{children:["On Windows, the ",e.jsx(t.code,{children:"echo"})," command will append line endings and cause ",e.jsx(t.code,{children:"jj"}),`
to complain about the contents of `,e.jsx(t.code,{children:"git_target"}),"."]}),`
`,e.jsxs(t.p,{children:["Instead of the ",e.jsx(t.code,{children:"echo -n ..."}),` line, use:
`,e.jsx(t.code,{children:"Set-Content -Path .jj/repo/store/git_target -Value ../../../.git -NoNewLine"})]}),`
`,e.jsx(t.p,{children:`We may officially support this in the future. If you try this, we would
appreciate feedback and bug reports.`}),`
`,e.jsx(t.h2,{id:"branches",children:"Branches"}),`
`,e.jsx(t.p,{children:"TODO: Describe how branches are mapped"}),`
`,e.jsx(t.h2,{id:"format-mapping-details",children:"Format mapping details"}),`
`,e.jsx(t.p,{children:`Paths are assumed to be UTF-8. I have no current plans to support paths with
other encodings.`}),`
`,e.jsxs(t.p,{children:["Commits created by ",e.jsx(t.code,{children:"jj"})," have a ref starting with ",e.jsx(t.code,{children:"refs/jj/"})," to prevent GC."]}),`
`,e.jsxs(t.p,{children:[`Commit metadata that cannot be represented in Git commits (such as the Change
ID and information about conflicts) is stored outside of the Git repo (currently
in `,e.jsx(t.code,{children:".jj/store/extra/"}),")."]}),`
`,e.jsxs(t.p,{children:[`Commits with conflicts cannot be represented in Git. They appear in the Git
commit as as root directories called`,e.jsx(t.code,{children:".jjconflict-base-*/"}),` and
`,e.jsx(t.code,{children:".jjconflict-side-*/"}),`. Note that the purpose of this representation is only to
prevent GC of the relevant trees; the authoritative information is in the
Git-external storage mentioned in the paragraph above. As long as you use `,e.jsx(t.code,{children:"jj"}),`
commands to work with them, you won't notice those paths. If, on the other hand,
you use e.g. `,e.jsx(t.code,{children:"git switch"}),` to check one of them out, you will see those
directories in your working copy. If you then run e.g. `,e.jsx(t.code,{children:"jj status"}),`, the
resulting snapshot will contain those directories, making it look like they
replaced all the other paths in your repo. You will probably want to run
`,e.jsx(t.code,{children:"jj abandon"})," to get back to the state with the unresolved conflicts."]}),`
`,e.jsxs(t.p,{children:[`Change IDs are stored in git commit headers as reverse hex encodings. These is
a non-standard header and is not preserved by all `,e.jsx(t.code,{children:"git"}),` tooling. For example,
the header is preserved by a `,e.jsx(t.code,{children:"git commit --amend"}),`, but is not preserved through
a rebase operation. GitHub and other major forges seem to preserve them for the
most part. This functionality is currently behind a `,e.jsx(t.code,{children:"git.write-change-id-header"}),`
flag.`]})]})}function h(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{h as default,r as extractedReferences,s as frontmatter,a as structuredData,c as toc};
