import{j as e}from"./main-BYx1FFWF.js";let s={title:"Conflicts"},a=[{href:"/concepts/concurrency"},{href:"../git-compatibility#format-mapping-details"}],c={contents:[{heading:"introduction",content:`Conflicts can happen when two changes are applied to some state. This document
is about conflicts between changes to files (not about conflicts between
changes to bookmark targets, for example).`},{heading:"introduction",content:`For example, if you merge two branches in a repo, there may be conflicting
changes between the two branches. Most DVCSs require you to resolve those
conflicts before you can finish the merge operation. Jujutsu instead records
the conflicts in the commit and lets you resolve the conflict when you feel like
it.`},{heading:"data-model",content:`When a merge conflict happens, it is recorded as an ordered list of tree objects
linked from the commit (instead of the usual single tree per commit). There will
always be an odd number of trees linked from the commit. You can think of the
first tree as a start tree, and the subsequent pairs of trees to apply the diff
between onto the start. Examples:`},{heading:"data-model",content:`If the commit has trees A, B, C, D, and E it means that the contents should be
calculated as A+(C-B)+(E-D).`},{heading:"data-model",content:`A three-way merge between A and C with B as base can be represented as a
commit with trees A, B, and C, also known as A+(C-B).`},{heading:"data-model",content:`The resulting tree contents is calculated on demand. Note that we often don't
need to merge the entire tree. For example, when checking out a commit in the
working copy, we only need to merge parts of the tree that differs from the
tree that was previously checked out in the working copy. As another example,
when listing paths with conflicts, we only need to traverse parts of the tree
that cannot be trivially resolved; if only one side modified lib/, then we
don't need to look for conflicts in that sub-tree.`},{heading:"data-model",content:`When merging trees, if we can't resolve a sub-tree conflict trivially by looking
at just the tree id, we recurse into the sub-tree. Similarly, if we can't
resolve a file conflict trivially by looking at just the id, we recursive into
the hunks within the file.`},{heading:"data-model",content:`See here for how conflicts are
stored when using the Git commit backend.`},{heading:"conflict-simplification",content:`Remember that a 3-way merge can be written A+C-B. If one of those states is
itself a conflict, then we simply insert the conflict expression there. Then we
simplify by removing canceling terms. These two steps are implemented in
Merge::flatten() and Merge::simplify() in merge.rs.`},{heading:"conflict-simplification",content:`For example, let's say commit B is based on A and is rebased to C, where it
results in conflicts (C+(B-A)), which the user leaves unresolved. If the
commit is then rebased to D, the result will be D+((C+(B-A))-C). That expression
can be simplified to D+(B-A), which is a regular 3-way merge between D and B
with A as base (no trace of C). This is what lets the user keep old commits
rebased to head without resolving conflicts and still not get messy recursive
conflicts.`},{heading:"conflict-simplification",content:`As another example, let's go through what happens when you back out a conflicted
commit. Let's say we have the usual E = C+(B-A) conflict on top of
non-conflict state C. We then revert that change. Reverting a change means
applying its reverse diff -(E-C), so the result is E+(C-E) =
(C+(B-A))+(C-(C+(B-A))), which we can simplify to just C (i.e. no conflict).`},{heading:"same-change-rule",content:`When all sides of a conflict make the same change,
we automatically consider it resolved to that value. We call this
"the same-change rule". This behavior matches what Git and Mercurial do.
Darcs, on the other hand, considers it a conflict. The automatic conflict
resolution we do is lossy in terms of conflict algebra; it means that rebasing
a commit onto a commit that has the same changes (or a subset thereof) and then
rebasing it back will lose changes (for a real-life example see bug #6369).
We do it because it is more user-friendly in the vast majority of cases. We
may at some point experiment with a config option to disable the same-change
rule.`}],headings:[{id:"introduction",content:"Introduction"},{id:"data-model",content:"Data model"},{id:"conflict-simplification",content:"Conflict simplification"},{id:"same-change-rule",content:"Same-change rule"}]};const r=[{depth:2,url:"#introduction",title:e.jsx(e.Fragment,{children:"Introduction"})},{depth:2,url:"#data-model",title:e.jsx(e.Fragment,{children:"Data model"})},{depth:2,url:"#conflict-simplification",title:e.jsx(e.Fragment,{children:"Conflict simplification"})},{depth:2,url:"#same-change-rule",title:e.jsx(e.Fragment,{children:"Same-change rule"})}];function i(n){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(t.p,{children:[`Conflicts can happen when two changes are applied to some state. This document
is about conflicts between changes to files (not about `,e.jsx(t.a,{href:"/concepts/concurrency",children:`conflicts between
changes to bookmark targets`}),", for example)."]}),`
`,e.jsx(t.p,{children:`For example, if you merge two branches in a repo, there may be conflicting
changes between the two branches. Most DVCSs require you to resolve those
conflicts before you can finish the merge operation. Jujutsu instead records
the conflicts in the commit and lets you resolve the conflict when you feel like
it.`}),`
`,e.jsx(t.h2,{id:"data-model",children:"Data model"}),`
`,e.jsx(t.p,{children:`When a merge conflict happens, it is recorded as an ordered list of tree objects
linked from the commit (instead of the usual single tree per commit). There will
always be an odd number of trees linked from the commit. You can think of the
first tree as a start tree, and the subsequent pairs of trees to apply the diff
between onto the start. Examples:`}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:`If the commit has trees A, B, C, D, and E it means that the contents should be
calculated as A+(C-B)+(E-D).`}),`
`,e.jsx(t.li,{children:`A three-way merge between A and C with B as base can be represented as a
commit with trees A, B, and C, also known as A+(C-B).`}),`
`]}),`
`,e.jsxs(t.p,{children:[`The resulting tree contents is calculated on demand. Note that we often don't
need to merge the entire tree. For example, when checking out a commit in the
working copy, we only need to merge parts of the tree that differs from the
tree that was previously checked out in the working copy. As another example,
when listing paths with conflicts, we only need to traverse parts of the tree
that cannot be trivially resolved; if only one side modified `,e.jsx(t.code,{children:"lib/"}),`, then we
don't need to look for conflicts in that sub-tree.`]}),`
`,e.jsx(t.p,{children:`When merging trees, if we can't resolve a sub-tree conflict trivially by looking
at just the tree id, we recurse into the sub-tree. Similarly, if we can't
resolve a file conflict trivially by looking at just the id, we recursive into
the hunks within the file.`}),`
`,e.jsxs(t.p,{children:["See ",e.jsx(t.a,{href:"../git-compatibility#format-mapping-details",children:"here"}),` for how conflicts are
stored when using the Git commit backend.`]}),`
`,e.jsx(t.h2,{id:"conflict-simplification",children:"Conflict simplification"}),`
`,e.jsxs(t.p,{children:["Remember that a 3-way merge can be written ",e.jsx(t.code,{children:"A+C-B"}),`. If one of those states is
itself a conflict, then we simply insert the conflict expression there. Then we
simplify by removing canceling terms. These two steps are implemented in
`,e.jsx(t.code,{children:"Merge::flatten()"})," and ",e.jsx(t.code,{children:"Merge::simplify()"})," in ",e.jsx(t.a,{href:"https://github.com/jj-vcs/jj/blob/main/lib/src/merge.rs",children:e.jsx(t.code,{children:"merge.rs"})}),"."]}),`
`,e.jsxs(t.p,{children:[`For example, let's say commit B is based on A and is rebased to C, where it
results in conflicts (`,e.jsx(t.code,{children:"C+(B-A)"}),`), which the user leaves unresolved. If the
commit is then rebased to D, the result will be `,e.jsx(t.code,{children:"D+((C+(B-A))-C)"}),`. That expression
can be simplified to `,e.jsx(t.code,{children:"D+(B-A)"}),`, which is a regular 3-way merge between D and B
with A as base (no trace of C). This is what lets the user keep old commits
rebased to head without resolving conflicts and still not get messy recursive
conflicts.`]}),`
`,e.jsxs(t.p,{children:[`As another example, let's go through what happens when you back out a conflicted
commit. Let's say we have the usual `,e.jsx(t.code,{children:"E = C+(B-A)"}),` conflict on top of
non-conflict state `,e.jsx(t.code,{children:"C"}),`. We then revert that change. Reverting a change means
applying its reverse diff `,e.jsx(t.code,{children:"-(E-C)"}),", so the result is ",e.jsx(t.code,{children:"E+(C-E) = (C+(B-A))+(C-(C+(B-A)))"}),", which we can simplify to just ",e.jsx(t.code,{children:"C"})," (i.e. no conflict)."]}),`
`,e.jsx(t.h2,{id:"same-change-rule",children:"Same-change rule"}),`
`,e.jsxs(t.p,{children:[`When all sides of a conflict make the same change,
`,e.jsx(t.a,{href:"https://github.com/jj-vcs/jj/blob/53272510bf879086d83bb5eea1406f75ba31f138/lib/src/merge.rs#L85-L99",children:"we automatically consider it resolved to that value"}),`. We call this
"the same-change rule". This behavior matches what Git and Mercurial do.
Darcs, on the other hand, considers it a conflict. The automatic conflict
resolution we do is lossy in terms of conflict algebra; it means that rebasing
a commit onto a commit that has the same changes (or a subset thereof) and then
rebasing it back will lose changes (for a real-life example see `,e.jsx(t.a,{href:"https://github.com/jj-vcs/jj/issues/6369",children:"bug #6369"}),`).
We do it because it is more user-friendly in the vast majority of cases. We
may at some point experiment with a config option to disable the same-change
rule.`]})]})}function l(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i(n)}export{l as default,a as extractedReferences,s as frontmatter,c as structuredData,r as toc};
