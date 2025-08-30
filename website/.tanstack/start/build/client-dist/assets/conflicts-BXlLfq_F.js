import{j as e}from"./main-BYx1FFWF.js";let a={title:"Conflicts"},c=[{href:"/technical-details/conflicts"},{href:"https://www.mercurial-scm.org/wiki/ChangesetEvolution"},{href:"https://git-scm.com/docs/git-rerere"},{href:"https://git-scm.com/docs/gitglossary/2.22.0#Documentation/gitglossary.txt-aiddefevilmergeaevilmerge"},{href:"https://stackoverflow.com/questions/26370185/how-do-criss-cross-merges-arise-in-git"},{href:"https://git-scm.com/docs/git-merge#Documentation/git-merge.txt-octopus"},{href:"working-copy#conflicts"},{href:"https://git-scm.com/docs/git-merge#_how_conflicts_are_presented"}],r={contents:[{heading:"introduction",content:`Conflicts happen when Jujutsu can't figure out how to merge different changes
made to the same file. For instance, this can happen if two people are working
on the same file and make different changes to the same part of the file, and
then their commits are merged together with jj new (or one is rebased onto the
other with jj rebase).`},{heading:"introduction",content:`Unlike most other VCSs, Jujutsu can record conflicted states in commits. For
example, if you rebase a commit and it results in a conflict, the conflict will
be recorded in the rebased commit and the rebase operation will succeed. You can
then resolve the conflict whenever you want. Conflicted states can be further
rebased, merged, or backed out. Note that what's stored in the commit is a
logical representation of the conflict, not conflict markers; rebasing a
conflict doesn't result in a nested conflict markers (see
technical doc for how this works).`},{heading:"advantages",content:"The deeper understanding of conflicts has many advantages:"},{heading:"advantages",content:`Removes the need for things like
git rebase/merge/cherry-pick/etc --continue. Instead, you get a single
workflow for resolving conflicts: check out the conflicted commit, resolve
conflicts, and amend.`},{heading:"advantages",content:`Enables the "auto-rebase" feature, where descendants of rewritten commits
automatically get rewritten. This feature mostly replaces Mercurial's
Changeset Evolution.`},{heading:"advantages",content:`Lets us define the change in a merge commit as being compared to the merged
parents. That way, we can rebase merge commits correctly (unlike both Git and
Mercurial). That includes conflict resolutions done in the merge commit,
addressing a common use case for
git rerere.
Since the changes in a merge commit are displayed and rebased as expected,
evil merges
are arguably not as evil anymore.`},{heading:"advantages",content:`Allows you to postpone conflict resolution until you're ready for it. You
can easily keep all your work-in-progress commits rebased onto upstream's head
if you like.`},{heading:"advantages",content:`Criss-cross merges
and octopus merges
become trivial (implementation-wise); some cases that Git can't currently
handle, or that would result in nested conflict markers, can be automatically
resolved.`},{heading:"advantages",content:`Enables collaborative conflict resolution. (This assumes that you can share
the conflicts with others, which you probably shouldn't do if some people
interact with your project using Git.)`},{heading:"advantages",content:`For information about how conflicts are handled in the working copy, see
here.`},{heading:"conflict-markers",content:`Conflicts are "materialized" using conflict markers in various contexts. For
example, when you run jj new or jj edit on a commit with a conflict, it will
be materialized in the working copy. Conflicts are also materialized when they
are part of diff output (e.g. jj show on a commit that introduces or resolves
a conflict).`},{heading:"conflict-markers",content:`As an example, imagine that you have a file which contains the following text,
all in lowercase:`},{heading:"conflict-markers",content:`One person replaces the word "grape" with "grapefruit" in commit A, while
another person changes every line to uppercase in commit B. If you merge the
changes together with jj new A B, the resulting commit will have a conflict
since Jujutsu can't figure out how to combine these changes. Therefore, Jujutsu
will materialize the conflict in the working copy using conflict markers, which
would look like this:`},{heading:"conflict-markers",content:`The markers <<<<<<< and >>>>>>> indicate the start and end of a conflict
respectively. The marker +++++++ indicates the start of a snapshot, while the
marker %%%%%%% indicates the start of a diff to apply to the snapshot.
Therefore, to resolve this conflict, you would apply the diff (changing "grape"
to "grapefruit") to the snapshot (the side with every line in uppercase),
editing the file to look like this:`},{heading:"conflict-markers",content:`In practice, conflicts are usually 2-sided, meaning that there's only 2
conflicting changes being merged together at a time, but Jujutsu supports
conflicts with arbitrarily many sides, which can happen when merging 3 or more
commits at once. In that case, you would see a single snapshot section and
multiple diff sections.`},{heading:"conflict-markers",content:`Compared to just showing the content of each side of the conflict, the main
benefit of Jujutsu's style of conflict markers is that you don't need to spend
time manually comparing the sides to spot the differences between them. This is
especially beneficial for many-sided conflicts, since resolving them just
requires applying each diff to the snapshot one-by-one.`},{heading:"alternative-conflict-marker-styles",content:`If you prefer to just see the contents of each side of the conflict without the
diff, Jujutsu also supports a "snapshot" style, which can be enabled by setting
the ui.conflict-marker-style config option to "snapshot":`},{heading:"alternative-conflict-marker-styles",content:`Some tools expect Git-style conflict markers, so Jujutsu also supports Git's
"diff3" style
conflict markers by setting the ui.conflict-marker-style config option to
"git":`},{heading:"alternative-conflict-marker-styles",content:`This conflict marker style only supports 2-sided conflicts though, so it falls
back to the similar "snapshot" conflict markers if there are more than 2 sides
to the conflict.`},{heading:"long-conflict-markers",content:`Some files may contain lines which could be confused for conflict markers. For
instance, a line could start with =======, which looks like a Git-style
conflict marker. To ensure that it's always unambiguous which lines are conflict
markers and which are just part of the file contents, jj sometimes uses
conflict markers which are longer than normal:`},{heading:"conflicts-with-missing-terminating-newline",content:`When materializing conflicts, jj outputs them in a line-based format. This
format is easiest to interpret for text files that consist of a series of lines,
with each line terminated by a newline character (\\n). This means that a text
file should either be empty, or it should end with a newline character.`},{heading:"conflicts-with-missing-terminating-newline",content:`While most text files follow this convention, some do not. When jj encounters
a missing terminating newline character in a conflict, it will add a comment to
the conflict markers to make the conflict easier to interpret. If you don't care
about whether your file ends with a terminating newline character, you can
generally ignore this comment and resolve the conflict normally.`},{heading:"conflicts-with-missing-terminating-newline",content:`For instance, if a file originally contained grape with no terminating newline
character, and one person changed grape to grapefruit, while another person
added the missing newline character to make grape\\n, the resulting conflict
would look like this:`},{heading:"conflicts-with-missing-terminating-newline",content:`Therefore, a resolution of this conflict could be grapefruit\\n, with the
terminating newline character added.`}],headings:[{id:"introduction",content:"Introduction"},{id:"advantages",content:"Advantages"},{id:"conflict-markers",content:"Conflict markers"},{id:"alternative-conflict-marker-styles",content:"Alternative conflict marker styles"},{id:"long-conflict-markers",content:"Long conflict markers"},{id:"conflicts-with-missing-terminating-newline",content:"Conflicts with missing terminating newline"}]};const o=[{depth:2,url:"#introduction",title:e.jsx(e.Fragment,{children:"Introduction"})},{depth:2,url:"#advantages",title:e.jsx(e.Fragment,{children:"Advantages"})},{depth:2,url:"#conflict-markers",title:e.jsx(e.Fragment,{children:"Conflict markers"})},{depth:2,url:"#alternative-conflict-marker-styles",title:e.jsx(e.Fragment,{children:"Alternative conflict marker styles"})},{depth:2,url:"#long-conflict-markers",title:e.jsx(e.Fragment,{children:"Long conflict markers"})},{depth:2,url:"#conflicts-with-missing-terminating-newline",title:e.jsx(e.Fragment,{children:"Conflicts with missing terminating newline"})}];function t(i){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(n.p,{children:[`Conflicts happen when Jujutsu can't figure out how to merge different changes
made to the same file. For instance, this can happen if two people are working
on the same file and make different changes to the same part of the file, and
then their commits are merged together with `,e.jsx(n.code,{children:"jj new"}),` (or one is rebased onto the
other with `,e.jsx(n.code,{children:"jj rebase"}),")."]}),`
`,e.jsxs(n.p,{children:[`Unlike most other VCSs, Jujutsu can record conflicted states in commits. For
example, if you rebase a commit and it results in a conflict, the conflict will
be recorded in the rebased commit and the rebase operation will succeed. You can
then resolve the conflict whenever you want. Conflicted states can be further
rebased, merged, or backed out. Note that what's stored in the commit is a
logical representation of the conflict, not conflict `,e.jsx(n.em,{children:"markers"}),`; rebasing a
conflict doesn't result in a nested conflict markers (see
`,e.jsx(n.a,{href:"/technical-details/conflicts",children:"technical doc"})," for how this works)."]}),`
`,e.jsx(n.h2,{id:"advantages",children:"Advantages"}),`
`,e.jsx(n.p,{children:"The deeper understanding of conflicts has many advantages:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`Removes the need for things like
`,e.jsx(n.code,{children:"git rebase/merge/cherry-pick/etc --continue"}),`. Instead, you get a single
workflow for resolving conflicts: check out the conflicted commit, resolve
conflicts, and amend.`]}),`
`,e.jsxs(n.li,{children:[`Enables the "auto-rebase" feature, where descendants of rewritten commits
automatically get rewritten. This feature mostly replaces Mercurial's
`,e.jsx(n.a,{href:"https://www.mercurial-scm.org/wiki/ChangesetEvolution",children:"Changeset Evolution"}),"."]}),`
`,e.jsxs(n.li,{children:[`Lets us define the change in a merge commit as being compared to the merged
parents. That way, we can rebase merge commits correctly (unlike both Git and
Mercurial). That includes conflict resolutions done in the merge commit,
addressing a common use case for
`,e.jsx(n.a,{href:"https://git-scm.com/docs/git-rerere",children:"git rerere"}),`.
Since the changes in a merge commit are displayed and rebased as expected,
`,e.jsx(n.a,{href:"https://git-scm.com/docs/gitglossary/2.22.0#Documentation/gitglossary.txt-aiddefevilmergeaevilmerge",children:"evil merges"}),`
are arguably not as evil anymore.`]}),`
`,e.jsx(n.li,{children:`Allows you to postpone conflict resolution until you're ready for it. You
can easily keep all your work-in-progress commits rebased onto upstream's head
if you like.`}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://stackoverflow.com/questions/26370185/how-do-criss-cross-merges-arise-in-git",children:"Criss-cross merges"}),`
and `,e.jsx(n.a,{href:"https://git-scm.com/docs/git-merge#Documentation/git-merge.txt-octopus",children:"octopus merges"}),`
become trivial (implementation-wise); some cases that Git can't currently
handle, or that would result in nested conflict markers, can be automatically
resolved.`]}),`
`,e.jsx(n.li,{children:`Enables collaborative conflict resolution. (This assumes that you can share
the conflicts with others, which you probably shouldn't do if some people
interact with your project using Git.)`}),`
`]}),`
`,e.jsxs(n.p,{children:[`For information about how conflicts are handled in the working copy, see
`,e.jsx(n.a,{href:"working-copy#conflicts",children:"here"}),"."]}),`
`,e.jsx(n.h2,{id:"conflict-markers",children:"Conflict markers"}),`
`,e.jsxs(n.p,{children:['Conflicts are "materialized" using ',e.jsx(n.em,{children:"conflict markers"}),` in various contexts. For
example, when you run `,e.jsx(n.code,{children:"jj new"})," or ",e.jsx(n.code,{children:"jj edit"}),` on a commit with a conflict, it will
be materialized in the working copy. Conflicts are also materialized when they
are part of diff output (e.g. `,e.jsx(n.code,{children:"jj show"}),` on a commit that introduces or resolves
a conflict).`]}),`
`,e.jsx(n.p,{children:`As an example, imagine that you have a file which contains the following text,
all in lowercase:`}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"apple"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"grape"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"orange"})})]})})}),`
`,e.jsxs(n.p,{children:[`One person replaces the word "grape" with "grapefruit" in commit A, while
another person changes every line to uppercase in commit B. If you merge the
changes together with `,e.jsx(n.code,{children:"jj new A B"}),`, the resulting commit will have a conflict
since Jujutsu can't figure out how to combine these changes. Therefore, Jujutsu
will materialize the conflict in the working copy using conflict markers, which
would look like this:`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"<<<<<<< Conflict 1 of 1"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"%%%%%%% Changes from base to side #1"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:" apple"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"-grape"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"+grapefruit"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:" orange"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"+++++++ Contents of side #2"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"APPLE"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"GRAPE"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"ORANGE"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:">>>>>>> Conflict 1 of 1 ends"})})]})})}),`
`,e.jsxs(n.p,{children:["The markers ",e.jsx(n.code,{children:"<<<<<<<"})," and ",e.jsx(n.code,{children:">>>>>>>"}),` indicate the start and end of a conflict
respectively. The marker `,e.jsx(n.code,{children:"+++++++"}),` indicates the start of a snapshot, while the
marker `,e.jsx(n.code,{children:"%%%%%%%"}),` indicates the start of a diff to apply to the snapshot.
Therefore, to resolve this conflict, you would apply the diff (changing "grape"
to "grapefruit") to the snapshot (the side with every line in uppercase),
editing the file to look like this:`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"APPLE"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"GRAPEFRUIT"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"ORANGE"})})]})})}),`
`,e.jsx(n.p,{children:`In practice, conflicts are usually 2-sided, meaning that there's only 2
conflicting changes being merged together at a time, but Jujutsu supports
conflicts with arbitrarily many sides, which can happen when merging 3 or more
commits at once. In that case, you would see a single snapshot section and
multiple diff sections.`}),`
`,e.jsx(n.p,{children:`Compared to just showing the content of each side of the conflict, the main
benefit of Jujutsu's style of conflict markers is that you don't need to spend
time manually comparing the sides to spot the differences between them. This is
especially beneficial for many-sided conflicts, since resolving them just
requires applying each diff to the snapshot one-by-one.`}),`
`,e.jsx(n.h2,{id:"alternative-conflict-marker-styles",children:"Alternative conflict marker styles"}),`
`,e.jsxs(n.p,{children:[`If you prefer to just see the contents of each side of the conflict without the
diff, Jujutsu also supports a "snapshot" style, which can be enabled by setting
the `,e.jsx(n.code,{children:"ui.conflict-marker-style"}),' config option to "snapshot":']}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"<<<<<<< Conflict 1 of 1"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"+++++++ Contents of side #1"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"apple"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"grapefruit"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"orange"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"------- Contents of base"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"apple"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"grape"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"orange"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"+++++++ Contents of side #2"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"APPLE"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"GRAPE"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"ORANGE"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:">>>>>>> Conflict 1 of 1 ends"})})]})})}),`
`,e.jsxs(n.p,{children:["Some tools expect Git-style conflict markers, so Jujutsu also supports ",e.jsx(n.a,{href:"https://git-scm.com/docs/git-merge#_how_conflicts_are_presented",children:`Git's
"diff3" style`}),`
conflict markers by setting the `,e.jsx(n.code,{children:"ui.conflict-marker-style"}),` config option to
"git":`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"<<<<<<< Side #1 (Conflict 1 of 1)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"apple"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"grapefruit"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"orange"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"||||||| Base"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"apple"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"grape"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"orange"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"======="})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"APPLE"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"GRAPE"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"ORANGE"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:">>>>>>> Side #2 (Conflict 1 of 1 ends)"})})]})})}),`
`,e.jsx(n.p,{children:`This conflict marker style only supports 2-sided conflicts though, so it falls
back to the similar "snapshot" conflict markers if there are more than 2 sides
to the conflict.`}),`
`,e.jsx(n.h2,{id:"long-conflict-markers",children:"Long conflict markers"}),`
`,e.jsxs(n.p,{children:[`Some files may contain lines which could be confused for conflict markers. For
instance, a line could start with `,e.jsx(n.code,{children:"======="}),`, which looks like a Git-style
conflict marker. To ensure that it's always unambiguous which lines are conflict
markers and which are just part of the file contents, `,e.jsx(n.code,{children:"jj"}),` sometimes uses
conflict markers which are longer than normal:`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"<<<<<<<<<<<<<<< Conflict 1 of 1"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"%%%%%%%%%%%%%%% Changes from base to side #1"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"-Heading"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"+HEADING"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:" ======="})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"+++++++++++++++ Contents of side #2"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"New Heading"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"==========="})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:">>>>>>>>>>>>>>> Conflict 1 of 1 ends"})})]})})}),`
`,e.jsx(n.h2,{id:"conflicts-with-missing-terminating-newline",children:"Conflicts with missing terminating newline"}),`
`,e.jsxs(n.p,{children:["When materializing conflicts, ",e.jsx(n.code,{children:"jj"}),` outputs them in a line-based format. This
format is easiest to interpret for text files that consist of a series of lines,
with each line terminated by a newline character (`,e.jsx(n.code,{children:"\\n"}),`). This means that a text
file should either be empty, or it should end with a newline character.`]}),`
`,e.jsxs(n.p,{children:["While most text files follow this convention, some do not. When ",e.jsx(n.code,{children:"jj"}),` encounters
a missing terminating newline character in a conflict, it will add a comment to
the conflict markers to make the conflict easier to interpret. If you don't care
about whether your file ends with a terminating newline character, you can
generally ignore this comment and resolve the conflict normally.`]}),`
`,e.jsxs(n.p,{children:["For instance, if a file originally contained ",e.jsx(n.code,{children:"grape"}),` with no terminating newline
character, and one person changed `,e.jsx(n.code,{children:"grape"})," to ",e.jsx(n.code,{children:"grapefruit"}),`, while another person
added the missing newline character to make `,e.jsx(n.code,{children:"grape\\n"}),`, the resulting conflict
would look like this:`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"<<<<<<< Conflict 1 of 1"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"+++++++ Contents of side #1 (no terminating newline)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"grapefruit"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"%%%%%%% Changes from base to side #2 (adds terminating newline)"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"-grape"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"+grape"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:">>>>>>> Conflict 1 of 1 ends"})})]})})}),`
`,e.jsxs(n.p,{children:["Therefore, a resolution of this conflict could be ",e.jsx(n.code,{children:"grapefruit\\n"}),`, with the
terminating newline character added.`]})]})}function l(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{l as default,c as extractedReferences,a as frontmatter,r as structuredData,o as toc};
