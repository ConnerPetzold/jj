import{j as e}from"./main-BYx1FFWF.js";let a={title:"Comparison with Git"},s=[{href:"/comparisons/git-compatibility"},{href:"/comparisons/git-command-table"},{href:"/comparisons/git-command-table"},{href:"/concepts/working-copy"},{href:"#the-index"},{href:"/concepts/glossary#bookmark"},{href:"/concepts/conflicts"},{href:"/concepts/bookmarks"},{href:"/concepts/operation-log"},{href:"https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified"}],r={contents:[{heading:"introduction",content:`This document attempts to describe how Jujutsu is different from Git. See
the Git-compatibility doc for information about how
the jj command interoperates with Git repos. See
the Git command table for a table of similar commands.`},{heading:"overview",content:`Here is a list of conceptual differences between Jujutsu and Git, along with
links to more details where applicable and available. There's a
table explaining how to achieve various use cases.`},{heading:"overview",content:`The working copy is automatically committed. That results in a simpler and
more consistent CLI because the working copy is now treated like any other
commit. Details.`},{heading:"overview",content:`There's no index (staging area). Because the working copy is automatically
committed, an index-like concept doesn't make sense. The index is very similar
to an intermediate commit between HEAD and the working copy, so workflows
that depend on it can be modeled using proper commits instead. Jujutsu has
excellent support for moving changes between commits. Details.`},{heading:"overview",content:`No need for branch names (but they are supported as
bookmarks). Git lets you check out a commit without
attaching a branch to it. It calls this state "detached HEAD". This is the
normal state in Jujutsu (there's actually no way -- yet, at least -- to have
an active branch/bookmark). However, Jujutsu keeps track of all visible heads
(leaves) of the commit graph, so the commits won't get lost or
garbage-collected.`},{heading:"overview",content:`No current branch. Git lets you check out a branch, making it the 'current
branch', and new commits will automatically update the branch. This is
necessary in Git because Git might otherwise lose track of the new commits.`},{heading:"overview",content:`Jujutsu does not have a corresponding concept of a 'current bookmark';
instead, you update bookmarks manually. For example, if you start work on top
of a commit with a bookmark, new commits are created on top of the bookmark,
then you issue a later command to update the bookmark.`},{heading:"overview",content:`Conflicts can be committed. No commands fail because of merge conflicts.
The conflicts are instead recorded in commits and you can resolve them later.
Details.`},{heading:"overview",content:`Descendant commits are automatically rebased. Whenever you rewrite a
commit (e.g. by running jj rebase), all its descendants commits will
automatically be rebased on top. Branches pointing to it will also get
updated, and so will the working copy if it points to any of the rebased
commits.`},{heading:"overview",content:`Bookmarks/branches are identified by their names (across remotes). For
example, if you pull from a remote that has a main branch, you'll get a
bookmark by that name in your local repo. If you then move it and push back to
the remote, the main branch on the remote will be updated.
Details.`},{heading:"overview",content:`The operation log replaces reflogs. The operation log is similar to
reflogs, but is much more powerful. It keeps track of atomic updates to all
refs at once (Jujutsu thus improves on Git's per-ref history much in the same
way that Subversion improved on RCS's per-file history). The operation log
powers e.g. the undo functionality. Details.`},{heading:"overview",content:`There's a single, virtual root commit. Like Mercurial, Jujutsu has a
virtual commit (with a hash consisting of only zeros) called the "root commit"
(called the "null revision" in Mercurial). This commit is a common ancestor of
all commits. That removes the awkward state Git calls the "unborn branch"
state (which is the state a newly initialized Git repo is in), and related
command-line flags (e.g. git rebase --root, git checkout --orphan).`},{heading:"the-index",content:`Git's "index" has
multiple roles. One role is as a cache of file system information. Jujutsu has
something similar. Unfortunately, Git exposes the index to the user, which makes
the CLI unnecessarily complicated (learning what the different flavors of
git reset do, especially when combined with commits and/or paths, usually
takes a while). Jujutsu, like Mercurial, doesn't make that mistake.`},{heading:"the-index",content:`As a Git power-user, you may think that you need the power of the index to
commit only part of the working copy. However, Jujutsu provides commands for
more directly achieving most use cases you're used to using Git's index for. For
example, to create a commit from part of the changes in the working copy, you
might be used to using git add -p; git commit. With Jujutsu, you'd instead
use jj split to split the working-copy commit into two commits. To add more
changes into the parent commit, which you might normally use
git add -p; git commit --amend for, you can instead use jj squash -i to
choose which changes to move into the parent commit, or jj squash <file> to
move a specific file.`}],headings:[{id:"introduction",content:"Introduction"},{id:"overview",content:"Overview"},{id:"the-index",content:"The index"}]};const c=[{depth:2,url:"#introduction",title:e.jsx(e.Fragment,{children:"Introduction"})},{depth:2,url:"#overview",title:e.jsx(e.Fragment,{children:"Overview"})},{depth:2,url:"#the-index",title:e.jsx(e.Fragment,{children:"The index"})}];function n(o){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(t.p,{children:[`This document attempts to describe how Jujutsu is different from Git. See
`,e.jsx(t.a,{href:"/comparisons/git-compatibility",children:"the Git-compatibility doc"}),` for information about how
the `,e.jsx(t.code,{children:"jj"}),` command interoperates with Git repos. See
`,e.jsx(t.a,{href:"/comparisons/git-command-table",children:"the Git command table"})," for a table of similar commands."]}),`
`,e.jsx(t.h2,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:[`Here is a list of conceptual differences between Jujutsu and Git, along with
links to more details where applicable and available. There's a
`,e.jsx(t.a,{href:"/comparisons/git-command-table",children:"table"})," explaining how to achieve various use cases."]}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"The working copy is automatically committed."}),` That results in a simpler and
more consistent CLI because the working copy is now treated like any other
commit. `,e.jsx(t.a,{href:"/concepts/working-copy",children:"Details"}),"."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"There's no index (staging area)."}),` Because the working copy is automatically
committed, an index-like concept doesn't make sense. The index is very similar
to an intermediate commit between `,e.jsx(t.code,{children:"HEAD"}),` and the working copy, so workflows
that depend on it can be modeled using proper commits instead. Jujutsu has
excellent support for moving changes between commits. `,e.jsx(t.a,{href:"#the-index",children:"Details"}),"."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsxs(t.strong,{children:[`No need for branch names (but they are supported as
`,e.jsx(t.a,{href:"/concepts/glossary#bookmark",children:"bookmarks"}),")."]}),` Git lets you check out a commit without
attaching a branch to it. It calls this state "detached HEAD". This is the
normal state in Jujutsu (there's actually no way -- yet, at least -- to have
an active branch/bookmark). However, Jujutsu keeps track of all visible heads
(leaves) of the commit graph, so the commits won't get lost or
garbage-collected.`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"No current branch."}),` Git lets you check out a branch, making it the 'current
branch', and new commits will automatically update the branch. This is
necessary in Git because Git might otherwise lose track of the new commits.`]}),`
`,e.jsx(t.p,{children:`Jujutsu does not have a corresponding concept of a 'current bookmark';
instead, you update bookmarks manually. For example, if you start work on top
of a commit with a bookmark, new commits are created on top of the bookmark,
then you issue a later command to update the bookmark.`}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Conflicts can be committed."}),` No commands fail because of merge conflicts.
The conflicts are instead recorded in commits and you can resolve them later.
`,e.jsx(t.a,{href:"/concepts/conflicts",children:"Details"}),"."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Descendant commits are automatically rebased."}),` Whenever you rewrite a
commit (e.g. by running `,e.jsx(t.code,{children:"jj rebase"}),`), all its descendants commits will
automatically be rebased on top. Branches pointing to it will also get
updated, and so will the working copy if it points to any of the rebased
commits.`]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Bookmarks/branches are identified by their names (across remotes)."}),` For
example, if you pull from a remote that has a `,e.jsx(t.code,{children:"main"}),` branch, you'll get a
bookmark by that name in your local repo. If you then move it and push back to
the remote, the `,e.jsx(t.code,{children:"main"}),` branch on the remote will be updated.
`,e.jsx(t.a,{href:"/concepts/bookmarks",children:"Details"}),"."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"The operation log replaces reflogs."}),` The operation log is similar to
reflogs, but is much more powerful. It keeps track of atomic updates to all
refs at once (Jujutsu thus improves on Git's per-ref history much in the same
way that Subversion improved on RCS's per-file history). The operation log
powers e.g. the undo functionality. `,e.jsx(t.a,{href:"/concepts/operation-log",children:"Details"}),"."]}),`
`]}),`
`,e.jsxs(t.li,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"There's a single, virtual root commit."}),` Like Mercurial, Jujutsu has a
virtual commit (with a hash consisting of only zeros) called the "root commit"
(called the "null revision" in Mercurial). This commit is a common ancestor of
all commits. That removes the awkward state Git calls the "unborn branch"
state (which is the state a newly initialized Git repo is in), and related
command-line flags (e.g. `,e.jsx(t.code,{children:"git rebase --root"}),", ",e.jsx(t.code,{children:"git checkout --orphan"}),")."]}),`
`]}),`
`]}),`
`,e.jsx(t.h2,{id:"the-index",children:"The index"}),`
`,e.jsxs(t.p,{children:["Git's ",e.jsx(t.a,{href:"https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified",children:'"index"'}),` has
multiple roles. One role is as a cache of file system information. Jujutsu has
something similar. Unfortunately, Git exposes the index to the user, which makes
the CLI unnecessarily complicated (learning what the different flavors of
`,e.jsx(t.code,{children:"git reset"}),` do, especially when combined with commits and/or paths, usually
takes a while). Jujutsu, like Mercurial, doesn't make that mistake.`]}),`
`,e.jsxs(t.p,{children:[`As a Git power-user, you may think that you need the power of the index to
commit only part of the working copy. However, Jujutsu provides commands for
more directly achieving most use cases you're used to using Git's index for. For
example, to create a commit from part of the changes in the working copy, you
might be used to using `,e.jsx(t.code,{children:"git add -p; git commit"}),`. With Jujutsu, you'd instead
use `,e.jsx(t.code,{children:"jj split"}),` to split the working-copy commit into two commits. To add more
changes into the parent commit, which you might normally use
`,e.jsx(t.code,{children:"git add -p; git commit --amend"})," for, you can instead use ",e.jsx(t.code,{children:"jj squash -i"}),` to
choose which changes to move into the parent commit, or `,e.jsx(t.code,{children:"jj squash <file>"}),` to
move a specific file.`]})]})}function h(o={}){const{wrapper:t}=o.components||{};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{h as default,s as extractedReferences,a as frontmatter,r as structuredData,c as toc};
