import{j as e}from"./main-BCYT0j2h.js";let s={title:"Comparison with Sapling"},a=[{href:"https://sapling-scm.com"},{href:"https://www.mercurial-scm.org/"},{href:"/reference/revsets"},{href:"/reference/templates"},{href:"/concepts/working-copy"},{href:"/concepts/conflicts"},{href:"/concepts/operation-log"},{href:"https://sapling-scm.com/docs/internals/metalog"},{href:"https://sapling-scm.com/docs/addons/isl"}],c={contents:[{heading:"introduction",content:`This document attempts to describe how jj is different
from Sapling. Sapling is a VCS developed by Meta. It
was announced about 3 years after development started on jj. It is a heavily
modified fork of Mercurial. Because jj has
copied many ideas from Mercurial, there are many similarities between the two
tools, such as:`},{heading:"introduction",content:"A user-friendly CLI"},{heading:"introduction",content:'A "revset" language for selecting revisions'},{heading:"introduction",content:`Good support for working with stacked commits, including tracking "anonymous
heads" (no "detached HEAD" state like in Git) and split commands, and
automatically rebasing descendant commits when you amend a commit.`},{heading:"introduction",content:"Flexible customization of output using templates"},{heading:"differences",content:"Here is a list of some differences between jj and Sapling."},{heading:"differences",content:`Working copy: When using Sapling (like most VCSs), the
user explicitly tells the tool when to create a commit and which files to
include. When using jj, the working copy
is automatically snapshotted by every command. New files
are automatically tracked and deleted files are automatically untracked. This
has several advantages:`},{heading:"differences",content:"The working copy is effectively backed up every time you run a command."},{heading:"differences",content:`No commands fail because you have changes in the working copy ("abort: 1
conflicting file changes: ..."). No need for sl shelve.`},{heading:"differences",content:`Simpler and more consistent CLI because the working copy is treated like any
other commit.`},{heading:"differences",content:`Conflicts: Like most VCSs, Sapling requires the user to
resolve conflicts before committing. jj lets
you commit conflicts. Note that it's a representation of the
conflict that's committed, not conflict markers (<<<<<<< etc.). This also
has several advantages:`},{heading:"differences",content:"Merge conflicts won't prevent you from checking out another commit."},{heading:"differences",content:"You can resolve the conflicts when you feel like it."},{heading:"differences",content:`Rebasing descendants always succeeds. Like jj, Sapling automatically
rebases, but it will fail if there are conflicts.`},{heading:"differences",content:"Merge commits can be rebased correctly (Sapling sometimes fails)."},{heading:"differences",content:"You can rebase conflicts and conflict resolutions."},{heading:"differences",content:`Undo: jj's undo is powered by the operation log, which
records how the repo has changed over time. Sapling has a similar feature
with its MetaLog.
They seem to provide similar functionality, but jj also exposes the log to the
user via jj op log, so you can tell how far back you want to go back.
Sapling has sl debugmetalog, but that seems to show the history of a single
commit, not the whole repo's history. Thanks to jj snapshotting the working
copy, it's possible to undo changes to the working copy. For example, if
you jj undo a  jj commit, jj diff will show the same changes as
before jj commit, but if you sl undo a sl commit, the working copy will
be clean.`},{heading:"differences",content:`Git interop: Sapling supports cloning, pushing, and pulling from a remote
Git repo. jj also does, and it also supports sharing a working copy with a Git
repo, so you can use jj and git interchangeably in the same repo.`},{heading:"differences",content:`Polish: Sapling is more polished and feature-complete. Sapling has very
nice built-in web UI called
Interactive Smartlog, which lets
you drag and drop commits to rebase them, among other things.`},{heading:"differences",content:`Forge workflow: Sapling has sl pr submit --stack, which lets you
push a stack of commits as separate GitHub PRs, including setting the base
branch. It only supports GitHub. jj doesn't have any direct integration with
GitHub or any other forge. However, it has jj git push --change for
automatically creating branches for specified commits. You have to specify
each commit you want to create a branch for by using
jj git push --change X --change Y ..., and you have to manually set up any
base branches in GitHub's UI (or GitLab's or ...). On subsequent pushes, you
can update all at once by specifying something like jj git push -r main..@
(to push all branches on the current stack of commits from where it forked
from main).`}],headings:[{id:"introduction",content:"Introduction"},{id:"differences",content:"Differences"}]};const r=[{depth:2,url:"#introduction",title:e.jsx(e.Fragment,{children:"Introduction"})},{depth:2,url:"#differences",title:e.jsx(e.Fragment,{children:"Differences"})}];function i(t){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(n.p,{children:[`This document attempts to describe how jj is different
from `,e.jsx(n.a,{href:"https://sapling-scm.com",children:"Sapling"}),`. Sapling is a VCS developed by Meta. It
was announced about 3 years after development started on jj. It is a heavily
modified fork of `,e.jsx(n.a,{href:"https://www.mercurial-scm.org/",children:"Mercurial"}),`. Because jj has
copied many ideas from Mercurial, there are many similarities between the two
tools, such as:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"A user-friendly CLI"}),`
`,e.jsxs(n.li,{children:['A "',e.jsx(n.a,{href:"/reference/revsets",children:"revset"}),'" language for selecting revisions']}),`
`,e.jsxs(n.li,{children:[`Good support for working with stacked commits, including tracking "anonymous
heads" (no "detached HEAD" state like in Git) and `,e.jsx(n.code,{children:"split"}),` commands, and
automatically rebasing descendant commits when you amend a commit.`]}),`
`,e.jsxs(n.li,{children:["Flexible customization of output using ",e.jsx(n.a,{href:"/reference/templates",children:"templates"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"differences",children:"Differences"}),`
`,e.jsx(n.p,{children:"Here is a list of some differences between jj and Sapling."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Working copy:"}),` When using Sapling (like most VCSs), the
user explicitly tells the tool when to create a commit and which files to
include. When using jj, the working copy
is `,e.jsx(n.a,{href:"/concepts/working-copy",children:"automatically snapshotted by every command"}),`. New files
are automatically tracked and deleted files are automatically untracked. This
has several advantages:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"The working copy is effectively backed up every time you run a command."}),`
`,e.jsxs(n.li,{children:[`No commands fail because you have changes in the working copy ("abort: 1
conflicting file changes: ..."). No need for `,e.jsx(n.code,{children:"sl shelve"}),"."]}),`
`,e.jsx(n.li,{children:`Simpler and more consistent CLI because the working copy is treated like any
other commit.`}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Conflicts:"}),` Like most VCSs, Sapling requires the user to
resolve conflicts before committing. jj lets
you `,e.jsx(n.a,{href:"/concepts/conflicts",children:"commit conflicts"}),`. Note that it's a representation of the
conflict that's committed, not conflict markers (`,e.jsx(n.code,{children:"<<<<<<<"}),` etc.). This also
has several advantages:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Merge conflicts won't prevent you from checking out another commit."}),`
`,e.jsx(n.li,{children:"You can resolve the conflicts when you feel like it."}),`
`,e.jsx(n.li,{children:`Rebasing descendants always succeeds. Like jj, Sapling automatically
rebases, but it will fail if there are conflicts.`}),`
`,e.jsx(n.li,{children:"Merge commits can be rebased correctly (Sapling sometimes fails)."}),`
`,e.jsx(n.li,{children:"You can rebase conflicts and conflict resolutions."}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Undo:"})," jj's undo is powered by ",e.jsx(n.a,{href:"/concepts/operation-log",children:"the operation log"}),`, which
records how the repo has changed over time. Sapling has a similar feature
with its `,e.jsx(n.a,{href:"https://sapling-scm.com/docs/internals/metalog",children:"MetaLog"}),`.
They seem to provide similar functionality, but jj also exposes the log to the
user via `,e.jsx(n.code,{children:"jj op log"}),`, so you can tell how far back you want to go back.
Sapling has `,e.jsx(n.code,{children:"sl debugmetalog"}),`, but that seems to show the history of a single
commit, not the whole repo's history. Thanks to jj snapshotting the working
copy, it's possible to undo changes to the working copy. For example, if
you `,e.jsx(n.code,{children:"jj undo"})," a ",e.jsx(n.code,{children:" jj commit"}),", ",e.jsx(n.code,{children:"jj diff"}),` will show the same changes as
before `,e.jsx(n.code,{children:"jj commit"}),", but if you ",e.jsx(n.code,{children:"sl undo"})," a ",e.jsx(n.code,{children:"sl commit"}),`, the working copy will
be clean.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Git interop:"}),` Sapling supports cloning, pushing, and pulling from a remote
Git repo. jj also does, and it also supports sharing a working copy with a Git
repo, so you can use `,e.jsx(n.code,{children:"jj"})," and ",e.jsx(n.code,{children:"git"})," interchangeably in the same repo."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Polish:"}),` Sapling is more polished and feature-complete. Sapling has very
nice built-in web UI called
`,e.jsx(n.a,{href:"https://sapling-scm.com/docs/addons/isl",children:"Interactive Smartlog"}),`, which lets
you drag and drop commits to rebase them, among other things.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Forge workflow:"})," Sapling has ",e.jsx(n.code,{children:"sl pr submit --stack"}),`, which lets you
push a stack of commits as separate GitHub PRs, including setting the base
branch. It only supports GitHub. jj doesn't have any direct integration with
GitHub or any other forge. However, it has `,e.jsx(n.code,{children:"jj git push --change"}),` for
automatically creating branches for specified commits. You have to specify
each commit you want to create a branch for by using
`,e.jsx(n.code,{children:"jj git push --change X --change Y ..."}),`, and you have to manually set up any
base branches in GitHub's UI (or GitLab's or ...). On subsequent pushes, you
can update all at once by specifying something like `,e.jsx(n.code,{children:"jj git push -r main..@"}),`
(to push all branches on the current stack of commits from where it forked
from `,e.jsx(n.code,{children:"main"}),")."]}),`
`]}),`
`]})]})}function l(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{l as default,a as extractedReferences,s as frontmatter,c as structuredData,r as toc};
