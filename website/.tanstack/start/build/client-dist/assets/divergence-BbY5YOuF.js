import{j as e}from"./main-BYx1FFWF.js";let a={title:"Handling divergent changes"},h=[],r={contents:[{heading:"what-are-divergent-changes",content:`A divergent change occurs when multiple visible commits have the same change
ID.`},{heading:"what-are-divergent-changes",content:`Normally, when commits are rewritten, the original version (the "predecessor")
becomes hidden and the new commit (the "successor") is visible. Thus, only one
commit with a given change ID is visible at a time.`},{heading:"what-are-divergent-changes",content:"But, a hidden commit can become visible again. This can happen if:"},{heading:"what-are-divergent-changes",content:`A visible descendant is added locally. For example, jj new REV will make
REV visible even if it was hidden before.`},{heading:"what-are-divergent-changes",content:`A visible descendant is fetched from a remote. If the hidden commit was pushed
to a remote, others may base new commits off of them. When their new commits are
fetched, their visibility makes the hidden commit visible again.`},{heading:"what-are-divergent-changes",content:`It is made the working copy. jj edit REV will make REV and all its
ancestors visible if it wasn't already.`},{heading:"what-are-divergent-changes",content:`Some other operations make hidden commits visible. For example, adding a
bookmark to a hidden commit makes it visible with the assumption that you are
now working with that commit again.`},{heading:"what-are-divergent-changes",content:`Divergent changes also occur if two different users or processes amend the same
change, creating two visible successors. This can happen when:`},{heading:"what-are-divergent-changes",content:`Another author modifies commits in a branch that you have also modified
locally.`},{heading:"what-are-divergent-changes",content:`You perform operations on the same change from different workspaces of the
same repository.`},{heading:"what-are-divergent-changes",content:`Two programs modify the repository at the same time. For example, you run
jj describe and, while writing your commit description, an IDE integration
fetches and rebases the branch you're working on.`},{heading:"how-do-i-resolve-divergent-changes",content:`When you encounter divergent changes, you have several strategies to choose
from. The best approach depends on whether you want to keep the content from one
commit, both commits, or merge them together.`},{heading:"how-do-i-resolve-divergent-changes",content:`Note that revsets must refer to the divergent commit using its commit ID since
the change ID is ambiguous.`},{heading:"strategy-1-abandon-one-of-the-commits",content:`If one of the divergent commits is clearly obsolete or incorrect, simply abandon
it:`},{heading:"strategy-1-abandon-one-of-the-commits",content:"This is the simplest solution when you know which version to keep."},{heading:"strategy-2-duplicate-and-abandon",content:`If you want to keep both versions as separate changes with different change IDs,
you can duplicate one of the commits to generate a new change ID, then abandon
the original:`},{heading:"strategy-2-duplicate-and-abandon",content:"This preserves both versions of the content while resolving the divergence."},{heading:"strategy-3-squash-the-commits-together",content:"When you want to combine the content from both divergent commits:"},{heading:"strategy-3-squash-the-commits-together",content:`This combines the changes from both commits into a single commit. The source
commit will be abandoned.`},{heading:"strategy-4-ignore-the-divergence",content:`Divergence isn't an error. If the divergence doesn't cause immediate problems,
you can leave it as-is. If both commits are part of immutable history, this may
be your only option.`},{heading:"strategy-4-ignore-the-divergence",content:`However, it can be inconvenient since you cannot refer to divergent changes
unambiguously using their change ID.`}],headings:[{id:"what-are-divergent-changes",content:"What are divergent changes?"},{id:"how-do-i-resolve-divergent-changes",content:"How do I resolve divergent changes?"},{id:"strategy-1-abandon-one-of-the-commits",content:"Strategy 1: Abandon one of the commits"},{id:"strategy-2-duplicate-and-abandon",content:"Strategy 2: Duplicate and abandon"},{id:"strategy-3-squash-the-commits-together",content:"Strategy 3: Squash the commits together"},{id:"strategy-4-ignore-the-divergence",content:"Strategy 4: Ignore the divergence"}]};const o=[{depth:2,url:"#what-are-divergent-changes",title:e.jsx(e.Fragment,{children:"What are divergent changes?"})},{depth:2,url:"#how-do-i-resolve-divergent-changes",title:e.jsx(e.Fragment,{children:"How do I resolve divergent changes?"})},{depth:3,url:"#strategy-1-abandon-one-of-the-commits",title:e.jsx(e.Fragment,{children:"Strategy 1: Abandon one of the commits"})},{depth:3,url:"#strategy-2-duplicate-and-abandon",title:e.jsx(e.Fragment,{children:"Strategy 2: Duplicate and abandon"})},{depth:3,url:"#strategy-3-squash-the-commits-together",title:e.jsx(e.Fragment,{children:"Strategy 3: Squash the commits together"})},{depth:3,url:"#strategy-4-ignore-the-divergence",title:e.jsx(e.Fragment,{children:"Strategy 4: Ignore the divergence"})}];function t(n){const i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h2,{id:"what-are-divergent-changes",children:"What are divergent changes?"}),`
`,e.jsxs(i.p,{children:["A ",e.jsx(i.a,{href:"../glossary#divergent-change",children:"divergent change"})," occurs when multiple ",e.jsx(i.a,{href:"../glossary#visible-commits",children:"visible commits"}),` have the same change
ID.`]}),`
`,e.jsx(i.p,{children:`Normally, when commits are rewritten, the original version (the "predecessor")
becomes hidden and the new commit (the "successor") is visible. Thus, only one
commit with a given change ID is visible at a time.`}),`
`,e.jsx(i.p,{children:"But, a hidden commit can become visible again. This can happen if:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["A visible descendant is added locally. For example, ",e.jsx(i.code,{children:"jj new REV"}),` will make
`,e.jsx(i.code,{children:"REV"})," visible even if it was hidden before."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:`A visible descendant is fetched from a remote. If the hidden commit was pushed
to a remote, others may base new commits off of them. When their new commits are
fetched, their visibility makes the hidden commit visible again.`}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["It is made the working copy. ",e.jsx(i.code,{children:"jj edit REV"})," will make ",e.jsx(i.code,{children:"REV"}),` and all its
ancestors visible if it wasn't already.`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:`Some other operations make hidden commits visible. For example, adding a
bookmark to a hidden commit makes it visible with the assumption that you are
now working with that commit again.`}),`
`]}),`
`]}),`
`,e.jsx(i.p,{children:`Divergent changes also occur if two different users or processes amend the same
change, creating two visible successors. This can happen when:`}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:`Another author modifies commits in a branch that you have also modified
locally.`}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsx(i.p,{children:`You perform operations on the same change from different workspaces of the
same repository.`}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[`Two programs modify the repository at the same time. For example, you run
`,e.jsx(i.code,{children:"jj describe"}),` and, while writing your commit description, an IDE integration
fetches and rebases the branch you're working on.`]}),`
`]}),`
`]}),`
`,e.jsx(i.h2,{id:"how-do-i-resolve-divergent-changes",children:"How do I resolve divergent changes?"}),`
`,e.jsx(i.p,{children:`When you encounter divergent changes, you have several strategies to choose
from. The best approach depends on whether you want to keep the content from one
commit, both commits, or merge them together.`}),`
`,e.jsx(i.p,{children:`Note that revsets must refer to the divergent commit using its commit ID since
the change ID is ambiguous.`}),`
`,e.jsx(i.h3,{id:"strategy-1-abandon-one-of-the-commits",children:"Strategy 1: Abandon one of the commits"}),`
`,e.jsx(i.p,{children:`If one of the divergent commits is clearly obsolete or incorrect, simply abandon
it:`}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# Abandon the unwanted commit using its commit ID"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" abandon"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"unwanted-commit-i"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"d"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"})]}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# You can abandon several at once with:"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# jj abandon abc def 123"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# jj abandon abc::"})})]})})}),`
`,e.jsx(i.p,{children:"This is the simplest solution when you know which version to keep."}),`
`,e.jsx(i.h3,{id:"strategy-2-duplicate-and-abandon",children:"Strategy 2: Duplicate and abandon"}),`
`,e.jsx(i.p,{children:`If you want to keep both versions as separate changes with different change IDs,
you can duplicate one of the commits to generate a new change ID, then abandon
the original:`}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# Duplicate one of the commits to create a new change ID"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" duplicate"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"commit-i"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"d"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"})]}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# Abandon the original commit"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" abandon"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"commit-i"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"d"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"})]})]})})}),`
`,e.jsx(i.p,{children:"This preserves both versions of the content while resolving the divergence."}),`
`,e.jsx(i.h3,{id:"strategy-3-squash-the-commits-together",children:"Strategy 3: Squash the commits together"}),`
`,e.jsx(i.p,{children:"When you want to combine the content from both divergent commits:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# Squash one commit into the other"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" squash"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --from"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"source-commit-i"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"d"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --into"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"target-commit-i"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"d"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"})]})]})})}),`
`,e.jsx(i.p,{children:`This combines the changes from both commits into a single commit. The source
commit will be abandoned.`}),`
`,e.jsx(i.h3,{id:"strategy-4-ignore-the-divergence",children:"Strategy 4: Ignore the divergence"}),`
`,e.jsx(i.p,{children:`Divergence isn't an error. If the divergence doesn't cause immediate problems,
you can leave it as-is. If both commits are part of immutable history, this may
be your only option.`}),`
`,e.jsx(i.p,{children:`However, it can be inconvenient since you cannot refer to divergent changes
unambiguously using their change ID.`})]})}function c(n={}){const{wrapper:i}=n.components||{};return i?e.jsx(i,{...n,children:e.jsx(t,{...n})}):t(n)}export{c as default,h as extractedReferences,a as frontmatter,r as structuredData,o as toc};
