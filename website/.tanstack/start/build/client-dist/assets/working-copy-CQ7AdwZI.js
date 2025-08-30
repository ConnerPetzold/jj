import{j as e}from"./main-BCYT0j2h.js";let r={title:"Working copy"},c=[{href:"/reference/filesets"},{href:"#ignored-files"},{href:"#ignored-files"},{href:"https://github.com/jj-vcs/jj/issues/19"},{href:"https://git-scm.com/docs/gitignore"}],s={contents:[{heading:"introduction",content:`The working copy is where the current working-copy commit's files are written so
you can interact with them. It is also where files are read from in order to
create new commits (though there are many other ways of creating new commits).`},{heading:"introduction",content:`Unlike most other VCSs, Jujutsu will automatically create commits from the
working-copy contents when they have changed. Most jj commands you run will
commit the working-copy changes if they have changed. The resulting revision
will replace the previous working-copy revision.`},{heading:"introduction",content:`Also unlike most other VCSs, added files are implicitly tracked by default. That
means that if you add a new file to the working copy, it will be automatically
committed once you run e.g. jj st. Similarly, if you remove a file from the
working copy, it will implicitly be untracked.`},{heading:"introduction",content:`The snapshot.auto-track config option controls which paths get automatically
tracked when they're added to the working copy. See the
fileset documentation for the syntax. Files with paths matching
ignore files are never tracked automatically.`},{heading:"introduction",content:`If you set snapshot.auto-track to a non-default value, untracked files can be
tracked with jj file track.`},{heading:"introduction",content:`You can use jj file untrack to untrack a file while keeping it in the working
copy. However, first ignore them or remove them from the
snapshot.auto-track patterns; otherwise they will be immediately tracked again.`},{heading:"conflicts",content:`When you check out a commit with conflicts, those conflicts need to be
represented in the working copy somehow. However, the file system doesn't
understand conflicts. Jujutsu's solution is to add conflict markers to
conflicted files when it writes them to the working copy. It also keeps track of
the (typically 3) different parts involved in the conflict. Whenever it scans
the working copy thereafter, it parses the conflict markers and recreates the
conflict state from them. You can resolve conflicts by replacing the conflict
markers by the resolved text. You don't need to resolve all conflicts at once.
You can even resolve part of a conflict by updating the different parts of the
conflict marker.`},{heading:"conflicts",content:`To resolve conflicts in a commit, use jj new <commit> to create a working-copy
commit on top. You would then have the same conflicts in the working-copy
commit. Once you have resolved the conflicts, you can inspect the conflict
resolutions with jj diff. Then run jj squash to move the conflict
resolutions into the conflicted commit. Alternatively, you can edit the commit
with conflicts directly in the working copy by using jj edit <commit>. The
main disadvantage of that is that it's harder to inspect the conflict
resolutions.`},{heading:"conflicts",content:`With the jj resolve command, you can use an external merge tool to resolve
conflicts that have 2 sides and a base. There is not yet a good way of
resolving conflicts between directories, files, and symlinks
(https://github.com/jj-vcs/jj/issues/19). You can use jj restore to choose
one side of the conflict, but there's no way to even see where the involved
parts came from.`},{heading:"ignored-files",content:`You probably don't want build outputs and temporary files to be under version
control. You can tell Jujutsu to not automatically track certain files by using
.gitignore files (there's no such thing as .jjignore yet). See
https://git-scm.com/docs/gitignore for details about the format. .gitignore
files are supported in any directory in the working copy, as well as in
$XDG_CONFIG_HOME/git/ignore and $GIT_DIR/info/exclude.`},{heading:"ignored-files",content:`Ignored files are never tracked automatically (regardless of the value of
snapshot.auto-track), but files that were already tracked will remain tracked
even if they match ignore patterns. You can untrack such files with the
jj file untrack command.`},{heading:"workspaces",content:`You can have multiple working copies backed by a single repo. Use
jj workspace add to create a new working copy. The working copy will have a
.jj/ directory linked to the main repo. The working copy and the .jj/
directory together is called a "workspace". Each workspace can have a different
commit checked out.`},{heading:"workspaces",content:`Having multiple workspaces can be useful for running long-running tests in a one
while you continue developing in another, for example. If needed,
jj workspace root prints the root path of the current workspace.`},{heading:"workspaces",content:`When you're done using a workspace, use jj workspace forget to make the repo
forget about it. The files can be deleted from disk separately (either before or
after).`},{heading:"stale-working-copy",content:"Almost all commands go through three main steps:"},{heading:"stale-working-copy",content:"Snapshot the working copy (which gets recorded as an operation)"},{heading:"stale-working-copy",content:'Create new commits etc. "in memory" and record that as a new operation'},{heading:"stale-working-copy",content:`Update the working copy to match the new operation, i.e. to the commit that
the operation says that @ should point to`},{heading:"stale-working-copy",content:`If step 3 doesn't happen for some reason, the working copy is considered
"stale". We can detect that because the working copy (.jj/working_copy/)
keeps track of which operation it was last updated to. When the working copy is
stale, use jj workspace update-stale to update the files in the working copy.`},{heading:"stale-working-copy",content:`A common reason that step 3 doesn't happen for a working copy is that you
rewrote the commit from another workspace. When you modify workspace A's
working-copy commit from workspace B, workspace A's working copy will become
stale.`},{heading:"stale-working-copy",content:`A working copy can also become stale because some error, such as ^C prevented
step 3 from completing. It's also possible that it was successfully updated in
step 3 but the operation has then been lost (e.g. by jj op abandon or
"spontaneously" by certain storage backends). If the operation has been lost,
then jj workspace update-stale will create a recovery commit with the
contents of the working copy but parented to the current operation's
working-copy commit.`}],headings:[{id:"introduction",content:"Introduction"},{id:"conflicts",content:"Conflicts"},{id:"ignored-files",content:"Ignored files"},{id:"workspaces",content:"Workspaces"},{id:"stale-working-copy",content:"Stale working copy"}]};const a=[{depth:2,url:"#introduction",title:e.jsx(e.Fragment,{children:"Introduction"})},{depth:2,url:"#conflicts",title:e.jsx(e.Fragment,{children:"Conflicts"})},{depth:2,url:"#ignored-files",title:e.jsx(e.Fragment,{children:"Ignored files"})},{depth:2,url:"#workspaces",title:e.jsx(e.Fragment,{children:"Workspaces"})},{depth:2,url:"#stale-working-copy",title:e.jsx(e.Fragment,{children:"Stale working copy"})}];function n(o){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsx(t.p,{children:`The working copy is where the current working-copy commit's files are written so
you can interact with them. It is also where files are read from in order to
create new commits (though there are many other ways of creating new commits).`}),`
`,e.jsxs(t.p,{children:[`Unlike most other VCSs, Jujutsu will automatically create commits from the
working-copy contents when they have changed. Most `,e.jsx(t.code,{children:"jj"}),` commands you run will
commit the working-copy changes if they have changed. The resulting revision
will replace the previous working-copy revision.`]}),`
`,e.jsxs(t.p,{children:[`Also unlike most other VCSs, added files are implicitly tracked by default. That
means that if you add a new file to the working copy, it will be automatically
committed once you run e.g. `,e.jsx(t.code,{children:"jj st"}),`. Similarly, if you remove a file from the
working copy, it will implicitly be untracked.`]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"snapshot.auto-track"}),` config option controls which paths get automatically
tracked when they're added to the working copy. See the
`,e.jsx(t.a,{href:"/reference/filesets",children:"fileset documentation"}),` for the syntax. Files with paths matching
`,e.jsx(t.a,{href:"#ignored-files",children:"ignore files"})," are never tracked automatically."]}),`
`,e.jsxs(t.p,{children:["If you set ",e.jsx(t.code,{children:"snapshot.auto-track"}),` to a non-default value, untracked files can be
tracked with `,e.jsx(t.code,{children:"jj file track"}),"."]}),`
`,e.jsxs(t.p,{children:["You can use ",e.jsx(t.code,{children:"jj file untrack"}),` to untrack a file while keeping it in the working
copy. However, first `,e.jsx(t.a,{href:"#ignored-files",children:"ignore"}),` them or remove them from the
`,e.jsx(t.code,{children:"snapshot.auto-track"})," patterns; otherwise they will be immediately tracked again."]}),`
`,e.jsx(t.h2,{id:"conflicts",children:"Conflicts"}),`
`,e.jsx(t.p,{children:`When you check out a commit with conflicts, those conflicts need to be
represented in the working copy somehow. However, the file system doesn't
understand conflicts. Jujutsu's solution is to add conflict markers to
conflicted files when it writes them to the working copy. It also keeps track of
the (typically 3) different parts involved in the conflict. Whenever it scans
the working copy thereafter, it parses the conflict markers and recreates the
conflict state from them. You can resolve conflicts by replacing the conflict
markers by the resolved text. You don't need to resolve all conflicts at once.
You can even resolve part of a conflict by updating the different parts of the
conflict marker.`}),`
`,e.jsxs(t.p,{children:["To resolve conflicts in a commit, use ",e.jsx(t.code,{children:"jj new <commit>"}),` to create a working-copy
commit on top. You would then have the same conflicts in the working-copy
commit. Once you have resolved the conflicts, you can inspect the conflict
resolutions with `,e.jsx(t.code,{children:"jj diff"}),". Then run ",e.jsx(t.code,{children:"jj squash"}),` to move the conflict
resolutions into the conflicted commit. Alternatively, you can edit the commit
with conflicts directly in the working copy by using `,e.jsx(t.code,{children:"jj edit <commit>"}),`. The
main disadvantage of that is that it's harder to inspect the conflict
resolutions.`]}),`
`,e.jsxs(t.p,{children:["With the ",e.jsx(t.code,{children:"jj resolve"}),` command, you can use an external merge tool to resolve
conflicts that have 2 sides and a base. There is not yet a good way of
resolving conflicts between directories, files, and symlinks
(`,e.jsx(t.a,{href:"https://github.com/jj-vcs/jj/issues/19",children:"https://github.com/jj-vcs/jj/issues/19"}),"). You can use ",e.jsx(t.code,{children:"jj restore"}),` to choose
one side of the conflict, but there's no way to even see where the involved
parts came from.`]}),`
`,e.jsx(t.h2,{id:"ignored-files",children:"Ignored files"}),`
`,e.jsxs(t.p,{children:[`You probably don't want build outputs and temporary files to be under version
control. You can tell Jujutsu to not automatically track certain files by using
`,e.jsx(t.code,{children:".gitignore"})," files (there's no such thing as ",e.jsx(t.code,{children:".jjignore"}),` yet). See
`,e.jsx(t.a,{href:"https://git-scm.com/docs/gitignore",children:"https://git-scm.com/docs/gitignore"})," for details about the format. ",e.jsx(t.code,{children:".gitignore"}),`
files are supported in any directory in the working copy, as well as in
`,e.jsx(t.code,{children:"$XDG_CONFIG_HOME/git/ignore"})," and ",e.jsx(t.code,{children:"$GIT_DIR/info/exclude"}),"."]}),`
`,e.jsxs(t.p,{children:[`Ignored files are never tracked automatically (regardless of the value of
`,e.jsx(t.code,{children:"snapshot.auto-track"}),`), but files that were already tracked will remain tracked
even if they match ignore patterns. You can untrack such files with the
`,e.jsx(t.code,{children:"jj file untrack"})," command."]}),`
`,e.jsx(t.h2,{id:"workspaces",children:"Workspaces"}),`
`,e.jsxs(t.p,{children:[`You can have multiple working copies backed by a single repo. Use
`,e.jsx(t.code,{children:"jj workspace add"}),` to create a new working copy. The working copy will have a
`,e.jsx(t.code,{children:".jj/"})," directory linked to the main repo. The working copy and the ",e.jsx(t.code,{children:".jj/"}),`
directory together is called a "workspace". Each workspace can have a different
commit checked out.`]}),`
`,e.jsxs(t.p,{children:[`Having multiple workspaces can be useful for running long-running tests in a one
while you continue developing in another, for example. If needed,
`,e.jsx(t.code,{children:"jj workspace root"})," prints the root path of the current workspace."]}),`
`,e.jsxs(t.p,{children:["When you're done using a workspace, use ",e.jsx(t.code,{children:"jj workspace forget"}),` to make the repo
forget about it. The files can be deleted from disk separately (either before or
after).`]}),`
`,e.jsx(t.h2,{id:"stale-working-copy",children:"Stale working copy"}),`
`,e.jsx(t.p,{children:"Almost all commands go through three main steps:"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsx(t.li,{children:"Snapshot the working copy (which gets recorded as an operation)"}),`
`,e.jsx(t.li,{children:'Create new commits etc. "in memory" and record that as a new operation'}),`
`,e.jsxs(t.li,{children:[`Update the working copy to match the new operation, i.e. to the commit that
the operation says that `,e.jsx(t.code,{children:"@"})," should point to"]}),`
`]}),`
`,e.jsxs(t.p,{children:[`If step 3 doesn't happen for some reason, the working copy is considered
"stale". We can detect that because the working copy (`,e.jsx(t.code,{children:".jj/working_copy/"}),`)
keeps track of which operation it was last updated to. When the working copy is
stale, use `,e.jsx(t.code,{children:"jj workspace update-stale"})," to update the files in the working copy."]}),`
`,e.jsx(t.p,{children:`A common reason that step 3 doesn't happen for a working copy is that you
rewrote the commit from another workspace. When you modify workspace A's
working-copy commit from workspace B, workspace A's working copy will become
stale.`}),`
`,e.jsxs(t.p,{children:["A working copy can also become stale because some error, such as ",e.jsx(t.code,{children:"^C"}),` prevented
step 3 from completing. It's also possible that it was successfully updated in
step 3 but the operation has then been lost (e.g. by `,e.jsx(t.code,{children:"jj op abandon"}),` or
"spontaneously" by certain storage backends). If the operation has been lost,
then `,e.jsx(t.code,{children:"jj workspace update-stale"}),` will create a recovery commit with the
contents of the working copy but parented to the current operation's
working-copy commit.`]})]})}function h(o={}){const{wrapper:t}=o.components||{};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{h as default,c as extractedReferences,r as frontmatter,s as structuredData,a as toc};
