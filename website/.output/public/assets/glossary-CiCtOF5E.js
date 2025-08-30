import{j as e}from"./main-BCYT0j2h.js";let r={title:"Glossary"},a=[{href:"#bookmark"},{href:"#view"},{href:"#head"},{href:"#operation-log"},{href:"#commit"},{href:"#branch"},{href:"https://wiki.mercurial-scm.org/Bookmarks"},{href:"/concepts/bookmarks"},{href:"#rewrite"},{href:"#anonymous-branch"},{href:"#bookmark"},{href:"#rewrite"},{href:"#change"},{href:"#tree"},{href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph"},{href:"#commit"},{href:"#backend"},{href:"git-compatibility#colocated-jujutsugit-repos"},{href:"/concepts/conflicts"},{href:"#bookmark"},{href:"bookmarks#conflicts"},{href:"#change"},{href:"#divergent-change"},{href:"#change"},{href:"#visible-commits"},{href:"revsets#functions"},{href:"#view"},{href:"#operation"},{href:"https://git-scm.com/book/en/v2/Git-Internals-Git-References#ref_the_ref"},{href:"#visible-commits"},{href:"#visible-commits"},{href:"#bookmark"},{href:"#view"},{href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph"},{href:"#operation"},{href:"#operation"},{href:"#commit"},{href:"https://github.com"},{href:"https://gitlab.com"},{href:"https://codeberg.org/"},{href:"#commit"},{href:"/reference/revsets"},{href:"#commit-id"},{href:"#change-id"},{href:"#revset"},{href:"bookmarks#terminology-summary"},{href:"#view"},{href:"#change-id"},{href:"#rewrite"},{href:"#commit-id"},{href:"#visible-commits"},{href:"#tree"},{href:"#operation"},{href:"#commit"},{href:"#working-copy"},{href:"#repository"},{href:"#commit"},{href:"#operation"},{href:"working-copy#workspaces"},{href:"#working-copy-commit"},{href:"/concepts/working-copy"},{href:"#workspace"},{href:"#operation-log"}],s={contents:[{heading:"anonymous-branch",content:`An anonymous branch is a chain of commits that doesn't necessarily have any
bookmarks pointing to it or to any of its descendants. Unlike Git,
Jujutsu keeps commits on anonymous branches around until they are explicitly
abandoned. Visible anonymous branches are tracked by the view, which
stores a list of heads of such branches.`},{heading:"backend",content:`A backend is an implementation of the storage layer. There is currently only one
production-ready builtin commit backend: the Git backend. The Git backend stores
commits in a Git repository. There are several backends used for testing. Google
also has its own cloud-based backend.`},{heading:"backend",content:`There are also pluggable backends for storing other information than commits,
such as the "operation store backend" for storing
the operation log.`},{heading:"bookmark",content:`A bookmark is a named pointer to a commit. They are similar to Git's
branches and even more similar to Mercurial's
bookmarks. See here
for details.`},{heading:"bookmark",content:`Unlike in Git, there is no concept of a "current bookmark"; bookmarks do not
move when you create a new commit. Bookmarks do automatically follow the
commit if it gets rewritten.`},{heading:"branch",content:`In the context of jj, the work "branch" usually refers to an anonymous
branch or, less formally, a branch of the commit "tree"
(which is itself an informal way to refer to the commit graph, parts of which
might resemble a tree even when it's not mathematically a tree).`},{heading:"branch",content:`We also sometimes discuss Git's branches and branches on Git remotes. Locally,
these correspond to bookmarks. In a colocated repository, each
local Git branch corresponds to a jj bookmark.`},{heading:"change",content:`A change is a commit as it evolves over time. Changes themselves
don't exist as an object in the data model; only the change ID does. The change
ID is a property of a commit.`},{heading:"change-id",content:`A change ID is a unique identifier for a change. They are typically
16 bytes long and are often randomly generated. By default, jj log presents
them as a sequence of 12 letters in the k-z range, at the beginning of a line.
These are actually hexadecimal numbers that use "digits" z-k instead of 0-9a-f.`},{heading:"commit",content:`A snapshot of the files in the repository at a given point in time (technically
a tree object), together with some metadata. The metadata includes the
author, the date, and pointers to the commit's parents. Through the pointers to
the parents, the commits form a
Directed Acyclic Graph (DAG)
.`},{heading:"commit",content:`Note that even though commits are stored as snapshots, they are often treated
as differences between snapshots, namely compared to their parent's snapshot. If
they have more than one parent, then the difference is computed against the
result of merging the parents. For example, jj diff will show the differences
introduced by a commit compared to its parent(s), and jj rebase will apply
those changes onto another base commit.`},{heading:"commit",content:'The word "revision" is used as a synonym for "commit".'},{heading:"commit-id",content:`A commit ID is a unique identifier for a commit. They are 20 bytes
long when using the Git backend. They are presented in regular hexadecimal
format at the end of the line in jj log, using 12 hexadecimal digits by
default. When using the Git backend, the commit ID is the Git commit ID.`},{heading:"colocated-repos",content:`When using the Git backend and the backing Git repository's .git/
directory is a sibling of .jj/, we call the repository colocated. Most
tools designed for Git can be easily used on such repositories. jj and git
commands can be used interchangeably.`},{heading:"colocated-repos",content:"See here for details."},{heading:"conflict",content:`Conflicts can occur in many places. The most common type is conflicts in files.
Those are the conflicts that users coming from other VCSs are usually familiar
with. You can see them in jj status and in jj log (the red "conflict"
label at the end of the line). See here for details.`},{heading:"conflict",content:`Conflicts can also occur in bookmarks. For example, if you moved a
bookmark locally, and it was also moved on the remote, then the bookmark will be
in a conflicted state after you pull from the remote.
See here for details.`},{heading:"conflict",content:`Similar to a bookmark conflict, when a change is rewritten locally
and remotely, for example, then the change will be in a conflicted state. We
call that a divergent change.`},{heading:"divergent-change",content:`A divergent change is a change that has more than one
visible commit.`},{heading:"head",content:`A head is a commit with no descendants. The context in which it has no
descendants varies. For example, the heads(X)
revset function returns commits that have no descendants
within the set X itself. The view records which
anonymous heads (heads without a bookmark pointing to them) are visible at a
given operation. Note that this is quite different from Git's
HEAD.`},{heading:"hidden-commits-abandoned-commits",content:"See visible commits."},{heading:"operation",content:`A snapshot of the visible commits and bookmarks
at a given point in time (technically a view object), together with
some metadata. The metadata includes the username, hostname, timestamps, and
pointers to the operation's parents.`},{heading:"operation-log",content:`The operation log is the
DAG formed by
operation objects, much in the same way that commits form a DAG,
which is sometimes called the "commit history". When operations happen in
sequence, they form a single line in the graph. Operations that happen
concurrently from jj's perspective result in forks and merges in the DAG.`},{heading:"repository",content:`Basically everything under .jj/, i.e. the full set of operations
and commits.`},{heading:"remote",content:`A remote is a reference to a copy of your repository. The most common case is
that the remote is hosted on the internet or another network, but local remotes
are also possible. Remotes are useful when working on a project with multiple
collaborators. As Jujutsu is compatible with Git you can use all popular
providers that are also available for Git. For example
GitHub, GitLab or
Codeberg.`},{heading:"revision",content:"A synonym for Commit."},{heading:"revset",content:`Jujutsu supports a functional language for selecting a set of revisions.
Expressions in this language are called "revsets". See here for
details. We also often use the term "revset" for the set of revisions selected
by a revset.`},{heading:"rewrite",content:`To "rewrite" a commit means to create a new version of that commit with
different contents, metadata (including parent pointers), or both. Rewriting a
commit results in a new commit, and thus a new commit ID, but the
change ID generally remains the same. Some examples of rewriting a
commit would be changing its description or rebasing it. Modifying the working
copy rewrites the working copy commit.`},{heading:"root-commit",content:`The root commit is a virtual commit at the root of every repository. It has a
commit ID consisting of all '0's (00000000...) and a change ID consisting of
all 'z's (zzzzzzzz...). It can be referred to in revsets by the
function root(). Note that our definition of "root commit" is different from
Git's; Git's "root commits" are the first commit(s) in the repository, i.e. the
commits jj log -r 'root()+' will show.`},{heading:"tree",content:`A tree object represents a snapshot of a directory in the repository. Tree
objects are defined recursively; each tree object only has the files and
directories contained directly in the directory it represents.`},{heading:"tracked-bookmarks-and-tracking-bookmarks",content:`A remote bookmark can be made "tracked" with the jj bookmark track command. This
results in a "tracking" local bookmark that tracks the remote bookmark.`},{heading:"tracked-bookmarks-and-tracking-bookmarks",content:`See the bookmarks documentation for a more
detailed definition of these terms.`},{heading:"visible-commits",content:`Visible commits are the commits you see in jj log -r 'all()'. They are the
commits that are reachable from an anonymous head in the view.
Ancestors of a visible commit are implicitly visible.`},{heading:"visible-commits",content:`Intuitively, visible commits are the "latest versions" of a revision with a
given change id. A commit that's abandoned or
rewritten stops being visible and is labeled as "hidden". Such
commits are no longer accessible using a change id, but they are still
accessible by their commit id.`},{heading:"view",content:`A view is a snapshot of bookmarks and their targets, anonymous heads,
and working-copy commits. The anonymous heads define which commits
are visible.`},{heading:"view",content:`A view object is similar to a tree object in that it represents a
snapshot without history, and an operation object is similar to a
commit object in that it adds metadata and history.`},{heading:"workspace",content:`A workspace is a working copy and an
associated repository. There can be multiple workspaces for a
single repository. Each workspace has a .jj/ directory, but the
commits and operations will be stored in the initial
workspace; the other workspaces will have pointers to the initial workspace. See
here for details.`},{heading:"workspace",content:'This is what Git calls a "worktree".'},{heading:"working-copy",content:`The working copy contains the files you're currently working on. It is
automatically snapshot at the beginning of almost every jj command, thus
creating a new working-copy commit if any changes had
been made in the working copy. Conversely, the working copy is automatically
updated to the state of the working-copy commit at the end of almost every jj
command. See here for details.`},{heading:"working-copy",content:'This is what Git calls a "working tree".'},{heading:"working-copy-commit",content:`A commit that corresponds to the current state of the working copy. There is
one working-copy commit per workspace. The current working-copy
commits are tracked in the operation log.`}],headings:[{id:"anonymous-branch",content:"Anonymous branch"},{id:"backend",content:"Backend"},{id:"bookmark",content:"Bookmark"},{id:"branch",content:"Branch"},{id:"change",content:"Change"},{id:"change-id",content:"Change ID"},{id:"commit",content:"Commit"},{id:"commit-id",content:"Commit ID"},{id:"colocated-repos",content:"Colocated repos"},{id:"conflict",content:"Conflict"},{id:"divergent-change",content:"Divergent change"},{id:"head",content:"Head"},{id:"hidden-commits-abandoned-commits",content:"Hidden commits, abandoned commits"},{id:"operation",content:"Operation"},{id:"operation-log",content:"Operation log"},{id:"repository",content:"Repository"},{id:"remote",content:"Remote"},{id:"revision",content:"Revision"},{id:"revset",content:"Revset"},{id:"rewrite",content:"Rewrite"},{id:"root-commit",content:"Root commit"},{id:"tree",content:"Tree"},{id:"tracked-bookmarks-and-tracking-bookmarks",content:"Tracked bookmarks and tracking bookmarks"},{id:"visible-commits",content:"Visible commits"},{id:"view",content:"View"},{id:"workspace",content:"Workspace"},{id:"working-copy",content:"Working copy"},{id:"working-copy-commit",content:"Working-copy commit"}]};const c=[{depth:2,url:"#anonymous-branch",title:e.jsx(e.Fragment,{children:"Anonymous branch"})},{depth:2,url:"#backend",title:e.jsx(e.Fragment,{children:"Backend"})},{depth:2,url:"#bookmark",title:e.jsx(e.Fragment,{children:"Bookmark"})},{depth:2,url:"#branch",title:e.jsx(e.Fragment,{children:"Branch"})},{depth:2,url:"#change",title:e.jsx(e.Fragment,{children:"Change"})},{depth:2,url:"#change-id",title:e.jsx(e.Fragment,{children:"Change ID"})},{depth:2,url:"#commit",title:e.jsx(e.Fragment,{children:"Commit"})},{depth:2,url:"#commit-id",title:e.jsx(e.Fragment,{children:"Commit ID"})},{depth:2,url:"#colocated-repos",title:e.jsx(e.Fragment,{children:"Colocated repos"})},{depth:2,url:"#conflict",title:e.jsx(e.Fragment,{children:"Conflict"})},{depth:2,url:"#divergent-change",title:e.jsx(e.Fragment,{children:"Divergent change"})},{depth:2,url:"#head",title:e.jsx(e.Fragment,{children:"Head"})},{depth:2,url:"#hidden-commits-abandoned-commits",title:e.jsx(e.Fragment,{children:"Hidden commits, abandoned commits"})},{depth:2,url:"#operation",title:e.jsx(e.Fragment,{children:"Operation"})},{depth:2,url:"#operation-log",title:e.jsx(e.Fragment,{children:"Operation log"})},{depth:2,url:"#repository",title:e.jsx(e.Fragment,{children:"Repository"})},{depth:2,url:"#remote",title:e.jsx(e.Fragment,{children:"Remote"})},{depth:2,url:"#revision",title:e.jsx(e.Fragment,{children:"Revision"})},{depth:2,url:"#revset",title:e.jsx(e.Fragment,{children:"Revset"})},{depth:2,url:"#rewrite",title:e.jsx(e.Fragment,{children:"Rewrite"})},{depth:2,url:"#root-commit",title:e.jsx(e.Fragment,{children:"Root commit"})},{depth:2,url:"#tree",title:e.jsx(e.Fragment,{children:"Tree"})},{depth:2,url:"#tracked-bookmarks-and-tracking-bookmarks",title:e.jsx(e.Fragment,{children:"Tracked bookmarks and tracking bookmarks"})},{depth:2,url:"#visible-commits",title:e.jsx(e.Fragment,{children:"Visible commits"})},{depth:2,url:"#view",title:e.jsx(e.Fragment,{children:"View"})},{depth:2,url:"#workspace",title:e.jsx(e.Fragment,{children:"Workspace"})},{depth:2,url:"#working-copy",title:e.jsx(e.Fragment,{children:"Working copy"})},{depth:2,url:"#working-copy-commit",title:e.jsx(e.Fragment,{children:"Working-copy commit"})}];function o(n){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{id:"anonymous-branch",children:"Anonymous branch"}),`
`,e.jsxs(t.p,{children:[`An anonymous branch is a chain of commits that doesn't necessarily have any
`,e.jsx(t.a,{href:"#bookmark",children:"bookmarks"}),` pointing to it or to any of its descendants. Unlike Git,
Jujutsu keeps commits on anonymous branches around until they are explicitly
abandoned. Visible anonymous branches are tracked by the `,e.jsx(t.a,{href:"#view",children:"view"}),`, which
stores a list of `,e.jsx(t.a,{href:"#head",children:"heads"})," of such branches."]}),`
`,e.jsx(t.h2,{id:"backend",children:"Backend"}),`
`,e.jsx(t.p,{children:`A backend is an implementation of the storage layer. There is currently only one
production-ready builtin commit backend: the Git backend. The Git backend stores
commits in a Git repository. There are several backends used for testing. Google
also has its own cloud-based backend.`}),`
`,e.jsxs(t.p,{children:[`There are also pluggable backends for storing other information than commits,
such as the "operation store backend" for storing
`,e.jsx(t.a,{href:"#operation-log",children:"the operation log"}),"."]}),`
`,e.jsx(t.h2,{id:"bookmark",children:"Bookmark"}),`
`,e.jsxs(t.p,{children:["A bookmark is a named pointer to a ",e.jsx(t.a,{href:"#commit",children:"commit"}),`. They are similar to Git's
`,e.jsx(t.a,{href:"#branch",children:"branches"})," and even more similar to ",e.jsx(t.a,{href:"https://wiki.mercurial-scm.org/Bookmarks",children:`Mercurial's
bookmarks`}),". See ",e.jsx(t.a,{href:"/concepts/bookmarks",children:"here"}),`
for details.`]}),`
`,e.jsxs(t.p,{children:['Unlike in Git, there is no concept of a "current bookmark"; bookmarks ',e.jsx(t.em,{children:"do not"}),`
move when you create a new commit. Bookmarks `,e.jsx(t.em,{children:"do"}),` automatically follow the
commit if it gets `,e.jsx(t.a,{href:"#rewrite",children:"rewritten"}),"."]}),`
`,e.jsx(t.h2,{id:"branch",children:"Branch"}),`
`,e.jsxs(t.p,{children:["In the context of ",e.jsx(t.code,{children:"jj"}),', the work "branch" usually refers to an ',e.jsx(t.a,{href:"#anonymous-branch",children:`anonymous
branch`}),` or, less formally, a branch of the commit "tree"
(which is itself an informal way to refer to the commit graph, parts of which
might resemble a tree even when it's not mathematically a tree).`]}),`
`,e.jsxs(t.p,{children:[`We also sometimes discuss Git's branches and branches on Git remotes. Locally,
these correspond to `,e.jsx(t.a,{href:"#bookmark",children:"bookmarks"}),`. In a colocated repository, each
local Git branch corresponds to a `,e.jsx(t.code,{children:"jj"})," bookmark."]}),`
`,e.jsx(t.h2,{id:"change",children:"Change"}),`
`,e.jsxs(t.p,{children:["A change is a commit as it ",e.jsx(t.a,{href:"#rewrite",children:"evolves over time"}),`. Changes themselves
don't exist as an object in the data model; only the change ID does. The change
ID is a property of a commit.`]}),`
`,e.jsx(t.h2,{id:"change-id",children:"Change ID"}),`
`,e.jsxs(t.p,{children:["A change ID is a unique identifier for a ",e.jsx(t.a,{href:"#change",children:"change"}),`. They are typically
16 bytes long and are often randomly generated. By default, `,e.jsx(t.code,{children:"jj log"}),` presents
them as a sequence of 12 letters in the k-z range, at the beginning of a line.
These are actually hexadecimal numbers that use "digits" z-k instead of 0-9a-f.`]}),`
`,e.jsx(t.h2,{id:"commit",children:"Commit"}),`
`,e.jsxs(t.p,{children:[`A snapshot of the files in the repository at a given point in time (technically
a `,e.jsx(t.a,{href:"#tree",children:"tree object"}),`), together with some metadata. The metadata includes the
author, the date, and pointers to the commit's parents. Through the pointers to
the parents, the commits form a
`,e.jsx(t.a,{href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph",children:"Directed Acyclic Graph (DAG)"}),`
.`]}),`
`,e.jsxs(t.p,{children:[`Note that even though commits are stored as snapshots, they are often treated
as differences between snapshots, namely compared to their parent's snapshot. If
they have more than one parent, then the difference is computed against the
result of merging the parents. For example, `,e.jsx(t.code,{children:"jj diff"}),` will show the differences
introduced by a commit compared to its parent(s), and `,e.jsx(t.code,{children:"jj rebase"}),` will apply
those changes onto another base commit.`]}),`
`,e.jsx(t.p,{children:'The word "revision" is used as a synonym for "commit".'}),`
`,e.jsx(t.h2,{id:"commit-id",children:"Commit ID"}),`
`,e.jsxs(t.p,{children:["A commit ID is a unique identifier for a ",e.jsx(t.a,{href:"#commit",children:"commit"}),`. They are 20 bytes
long when using the Git backend. They are presented in regular hexadecimal
format at the end of the line in `,e.jsx(t.code,{children:"jj log"}),`, using 12 hexadecimal digits by
default. When using the Git backend, the commit ID is the Git commit ID.`]}),`
`,e.jsx(t.h2,{id:"colocated-repos",children:"Colocated repos"}),`
`,e.jsxs(t.p,{children:["When using the Git ",e.jsx(t.a,{href:"#backend",children:"backend"})," and the backing Git repository's ",e.jsx(t.code,{children:".git/"}),`
directory is a sibling of `,e.jsx(t.code,{children:".jj/"}),`, we call the repository colocated. Most
tools designed for Git can be easily used on such repositories. `,e.jsx(t.code,{children:"jj"})," and ",e.jsx(t.code,{children:"git"}),`
commands can be used interchangeably.`]}),`
`,e.jsxs(t.p,{children:["See ",e.jsx(t.a,{href:"git-compatibility#colocated-jujutsugit-repos",children:"here"})," for details."]}),`
`,e.jsx(t.h2,{id:"conflict",children:"Conflict"}),`
`,e.jsxs(t.p,{children:[`Conflicts can occur in many places. The most common type is conflicts in files.
Those are the conflicts that users coming from other VCSs are usually familiar
with. You can see them in `,e.jsx(t.code,{children:"jj status"})," and in ",e.jsx(t.code,{children:"jj log"}),` (the red "conflict"
label at the end of the line). See `,e.jsx(t.a,{href:"/concepts/conflicts",children:"here"})," for details."]}),`
`,e.jsxs(t.p,{children:["Conflicts can also occur in ",e.jsx(t.a,{href:"#bookmark",children:"bookmarks"}),`. For example, if you moved a
bookmark locally, and it was also moved on the remote, then the bookmark will be
in a conflicted state after you pull from the remote.
See `,e.jsx(t.a,{href:"bookmarks#conflicts",children:"here"})," for details."]}),`
`,e.jsxs(t.p,{children:["Similar to a bookmark conflict, when a ",e.jsx(t.a,{href:"#change",children:"change"}),` is rewritten locally
and remotely, for example, then the change will be in a conflicted state. We
call that a `,e.jsx(t.a,{href:"#divergent-change",children:"divergent change"}),"."]}),`
`,e.jsx(t.h2,{id:"divergent-change",children:"Divergent change"}),`
`,e.jsxs(t.p,{children:["A divergent change is a ",e.jsx(t.a,{href:"#change",children:"change"}),` that has more than one
`,e.jsx(t.a,{href:"#visible-commits",children:"visible commit"}),"."]}),`
`,e.jsx(t.h2,{id:"head",children:"Head"}),`
`,e.jsxs(t.p,{children:[`A head is a commit with no descendants. The context in which it has no
descendants varies. For example, the `,e.jsx(t.code,{children:"heads(X)"}),`
`,e.jsx(t.a,{href:"revsets#functions",children:"revset function"}),` returns commits that have no descendants
within the set `,e.jsx(t.code,{children:"X"})," itself. The ",e.jsx(t.a,{href:"#view",children:"view"}),` records which
anonymous heads (heads without a bookmark pointing to them) are visible at a
given `,e.jsx(t.a,{href:"#operation",children:"operation"}),`. Note that this is quite different from Git's
`,e.jsx(t.a,{href:"https://git-scm.com/book/en/v2/Git-Internals-Git-References#ref_the_ref",children:"HEAD"}),"."]}),`
`,e.jsx(t.h2,{id:"hidden-commits-abandoned-commits",children:"Hidden commits, abandoned commits"}),`
`,e.jsxs(t.p,{children:["See ",e.jsx(t.a,{href:"#visible-commits",children:"visible commits"}),"."]}),`
`,e.jsx(t.h2,{id:"operation",children:"Operation"}),`
`,e.jsxs(t.p,{children:["A snapshot of the ",e.jsx(t.a,{href:"#visible-commits",children:"visible commits"})," and ",e.jsx(t.a,{href:"#bookmark",children:"bookmarks"}),`
at a given point in time (technically a `,e.jsx(t.a,{href:"#view",children:"view object"}),`), together with
some metadata. The metadata includes the username, hostname, timestamps, and
pointers to the operation's parents.`]}),`
`,e.jsx(t.h2,{id:"operation-log",children:"Operation log"}),`
`,e.jsxs(t.p,{children:[`The operation log is the
`,e.jsx(t.a,{href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph",children:"DAG"}),` formed by
`,e.jsx(t.a,{href:"#operation",children:"operation"}),` objects, much in the same way that commits form a DAG,
which is sometimes called the "commit history". When operations happen in
sequence, they form a single line in the graph. Operations that happen
concurrently from jj's perspective result in forks and merges in the DAG.`]}),`
`,e.jsx(t.h2,{id:"repository",children:"Repository"}),`
`,e.jsxs(t.p,{children:["Basically everything under ",e.jsx(t.code,{children:".jj/"}),", i.e. the full set of ",e.jsx(t.a,{href:"#operation",children:"operations"}),`
and `,e.jsx(t.a,{href:"#commit",children:"commits"}),"."]}),`
`,e.jsx(t.h2,{id:"remote",children:"Remote"}),`
`,e.jsxs(t.p,{children:[`A remote is a reference to a copy of your repository. The most common case is
that the remote is hosted on the internet or another network, but local remotes
are also possible. Remotes are useful when working on a project with multiple
collaborators. As Jujutsu is compatible with Git you can use all popular
providers that are also available for Git. For example
`,e.jsx(t.a,{href:"https://github.com",children:"GitHub"}),", ",e.jsx(t.a,{href:"https://gitlab.com",children:"GitLab"}),` or
`,e.jsx(t.a,{href:"https://codeberg.org/",children:"Codeberg"}),"."]}),`
`,e.jsx(t.h2,{id:"revision",children:"Revision"}),`
`,e.jsxs(t.p,{children:["A synonym for ",e.jsx(t.a,{href:"#commit",children:"Commit"}),"."]}),`
`,e.jsx(t.h2,{id:"revset",children:"Revset"}),`
`,e.jsxs(t.p,{children:[`Jujutsu supports a functional language for selecting a set of revisions.
Expressions in this language are called "revsets". See `,e.jsx(t.a,{href:"/reference/revsets",children:"here"}),` for
details. We also often use the term "revset" for the set of revisions selected
by a revset.`]}),`
`,e.jsx(t.h2,{id:"rewrite",children:"Rewrite"}),`
`,e.jsxs(t.p,{children:[`To "rewrite" a commit means to create a new version of that commit with
different contents, metadata (including parent pointers), or both. Rewriting a
commit results in a new commit, and thus a new `,e.jsx(t.a,{href:"#commit-id",children:"commit ID"}),`, but the
`,e.jsx(t.a,{href:"#change-id",children:"change ID"}),` generally remains the same. Some examples of rewriting a
commit would be changing its description or rebasing it. Modifying the working
copy rewrites the working copy commit.`]}),`
`,e.jsx(t.h2,{id:"root-commit",children:"Root commit"}),`
`,e.jsxs(t.p,{children:[`The root commit is a virtual commit at the root of every repository. It has a
commit ID consisting of all '0's (`,e.jsx(t.code,{children:"00000000..."}),`) and a change ID consisting of
all 'z's (`,e.jsx(t.code,{children:"zzzzzzzz..."}),"). It can be referred to in ",e.jsx(t.a,{href:"#revset",children:"revsets"}),` by the
function `,e.jsx(t.code,{children:"root()"}),`. Note that our definition of "root commit" is different from
Git's; Git's "root commits" are the first commit(s) in the repository, i.e. the
commits `,e.jsx(t.code,{children:"jj log -r 'root()+'"})," will show."]}),`
`,e.jsx(t.h2,{id:"tree",children:"Tree"}),`
`,e.jsx(t.p,{children:`A tree object represents a snapshot of a directory in the repository. Tree
objects are defined recursively; each tree object only has the files and
directories contained directly in the directory it represents.`}),`
`,e.jsx(t.h2,{id:"tracked-bookmarks-and-tracking-bookmarks",children:"Tracked bookmarks and tracking bookmarks"}),`
`,e.jsxs(t.p,{children:['A remote bookmark can be made "tracked" with the ',e.jsx(t.code,{children:"jj bookmark track"}),` command. This
results in a "tracking" local bookmark that tracks the remote bookmark.`]}),`
`,e.jsxs(t.p,{children:["See ",e.jsx(t.a,{href:"bookmarks#terminology-summary",children:"the bookmarks documentation"}),` for a more
detailed definition of these terms.`]}),`
`,e.jsx(t.h2,{id:"visible-commits",children:"Visible commits"}),`
`,e.jsxs(t.p,{children:["Visible commits are the commits you see in ",e.jsx(t.code,{children:"jj log -r 'all()'"}),`. They are the
commits that are reachable from an anonymous head in the `,e.jsx(t.a,{href:"#view",children:"view"}),`.
Ancestors of a visible commit are implicitly visible.`]}),`
`,e.jsxs(t.p,{children:[`Intuitively, visible commits are the "latest versions" of a revision with a
given `,e.jsx(t.a,{href:"#change-id",children:"change id"}),`. A commit that's abandoned or
`,e.jsx(t.a,{href:"#rewrite",children:"rewritten"}),` stops being visible and is labeled as "hidden". Such
commits are no longer accessible using a change id, but they are still
accessible by their `,e.jsx(t.a,{href:"#commit-id",children:"commit id"}),"."]}),`
`,e.jsx(t.h2,{id:"view",children:"View"}),`
`,e.jsxs(t.p,{children:[`A view is a snapshot of bookmarks and their targets, anonymous heads,
and working-copy commits. The anonymous heads define which commits
are `,e.jsx(t.a,{href:"#visible-commits",children:"visible"}),"."]}),`
`,e.jsxs(t.p,{children:["A view object is similar to a ",e.jsx(t.a,{href:"#tree",children:"tree"}),` object in that it represents a
snapshot without history, and an `,e.jsx(t.a,{href:"#operation",children:"operation"}),` object is similar to a
`,e.jsx(t.a,{href:"#commit",children:"commit"})," object in that it adds metadata and history."]}),`
`,e.jsx(t.h2,{id:"workspace",children:"Workspace"}),`
`,e.jsxs(t.p,{children:["A workspace is a ",e.jsx(t.a,{href:"#working-copy",children:"working copy"}),` and an
associated `,e.jsx(t.a,{href:"#repository",children:"repository"}),`. There can be multiple workspaces for a
single repository. Each workspace has a `,e.jsx(t.code,{children:".jj/"}),` directory, but the
`,e.jsx(t.a,{href:"#commit",children:"commits"})," and ",e.jsx(t.a,{href:"#operation",children:"operations"}),` will be stored in the initial
workspace; the other workspaces will have pointers to the initial workspace. See
`,e.jsx(t.a,{href:"working-copy#workspaces",children:"here"})," for details."]}),`
`,e.jsx(t.p,{children:'This is what Git calls a "worktree".'}),`
`,e.jsx(t.h2,{id:"working-copy",children:"Working copy"}),`
`,e.jsxs(t.p,{children:[`The working copy contains the files you're currently working on. It is
automatically snapshot at the beginning of almost every `,e.jsx(t.code,{children:"jj"}),` command, thus
creating a new `,e.jsx(t.a,{href:"#working-copy-commit",children:"working-copy commit"}),` if any changes had
been made in the working copy. Conversely, the working copy is automatically
updated to the state of the working-copy commit at the end of almost every `,e.jsx(t.code,{children:"jj"}),`
command. See `,e.jsx(t.a,{href:"/concepts/working-copy",children:"here"})," for details."]}),`
`,e.jsx(t.p,{children:'This is what Git calls a "working tree".'}),`
`,e.jsx(t.h2,{id:"working-copy-commit",children:"Working-copy commit"}),`
`,e.jsxs(t.p,{children:[`A commit that corresponds to the current state of the working copy. There is
one working-copy commit per `,e.jsx(t.a,{href:"#workspace",children:"workspace"}),`. The current working-copy
commits are tracked in the `,e.jsx(t.a,{href:"#operation-log",children:"operation log"}),"."]})]})}function h(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{h as default,a as extractedReferences,r as frontmatter,s as structuredData,c as toc};
