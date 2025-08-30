import{j as e}from"./main-BCYT0j2h.js";let i={title:"Git submodules"},r=[{href:"https://git-scm.com/docs/gitsubmodules"},{href:"/design-docs/git-submodule-storage"}],d={contents:[{heading:void 0,content:`This is an aspirational document that describes how jj will support Git
submodules. Readers are assumed to have some familiarity with Git and Git
submodules.`},{heading:void 0,content:`This document is a work in progress; submodules are a big feature, and relevant
details will be filled in incrementally.`},{heading:"objective",content:`This proposal aims to replicate the workflows users are used to with Git
submodules, e.g.:`},{heading:"objective",content:"Cloning submodules"},{heading:"objective",content:"Making new submodule commits and updating the superproject"},{heading:"objective",content:"Fetching and pushing updates to the submodule's remote"},{heading:"objective",content:"Viewing submodule history"},{heading:"objective",content:`When it is convenient, this proposal will also aim to make submodules easier to
use than Git's implementation.`},{heading:"non-goals",content:"Non-Git 'submodules' (e.g. native jj submodules, other VCSes)"},{heading:"non-goals",content:"Non-Git backends (e.g. Google internal backend)"},{heading:"non-goals",content:"Changing how Git submodules are implemented in Git"},{heading:"background",content:`We mainly want to support Git submodules for feature parity, since Git
submodules are a standard feature in Git and are popular enough that we have
received user requests for them. Secondarily (and distantly so), Git submodules
are notoriously difficult to use, so there is an opportunity to improve the UX
over Git's implementation.`},{heading:"intro-to-git-submodules",content:`Git submodules are a feature of Git
that allow a repository (submodule) to be embedded inside another repository
(the superproject). Notably, a submodule is a full repository, complete with its
own index, object store and ref store. It can be interacted with like any other
repository, regardless of the superproject.`},{heading:"intro-to-git-submodules",content:"In a superproject commit, submodule information is captured in two places:"},{heading:"intro-to-git-submodules",content:`A gitlink entry in the commit's tree, where the value of the gitlink entry
is the submodule commit id. This tells Git what to populate in the working
tree.`},{heading:"intro-to-git-submodules",content:`A top level .gitmodules file. This file is in Git's config syntax and
entries take the form submodule.<submodule-name>.*. These include many
settings about the submodules, but most importantly:`},{heading:"intro-to-git-submodules",content:`submodule<submodule-name>.path contains the path from the root of the tree
to the gitlink being described.`},{heading:"intro-to-git-submodules",content:`submodule<submodule-name>.url contains the url to clone the submodule
from.`},{heading:"intro-to-git-submodules",content:`In the working tree, Git notices the presence of a submodule by the .git entry
(signifying the root of a Git repository working tree). This is either the
submodule's actual Git directory (an "old-form" submodule), or a .git file
pointing to <superproject-git-directory>/modules/<submodule-name>. The latter
is sometimes called the "absorbed form", and is Git's preferred mode of
operation.`},{heading:"roadmap",content:`Git submodules should be implemented in an order that supports an increasing set
of workflows, with the goal of getting feedback early and often. When support is
incomplete, jj should not crash, but instead provide fallback behavior and warn
the user where needed.`},{heading:"roadmap",content:`The goal is to land good support for pure Jujutsu repositories, while colocated
repositories will be supported when convenient.`},{heading:"roadmap",content:`This section should be treated as a set of guidelines, not a strict order of
work.`},{heading:"phase-1-readonly-submodules",content:`This includes work that inspects submodule contents but does not create new
objects in the submodule. This requires a way to store submodules in a jj
repository that supports readonly operations.`},{heading:"outcomes",content:"Submodules can be cloned anew"},{heading:"outcomes",content:"New submodule commits can be fetched"},{heading:"outcomes",content:"Submodule history and branches can be viewed"},{heading:"outcomes",content:"Submodule contents are populated in the working copy"},{heading:"outcomes",content:"Superproject gitlink can be updated to an existing submodule commit"},{heading:"outcomes",content:`Conflicts in the superproject gitlink can be resolved to an existing submodule
commit`},{heading:"phase-2-snapshotting-new-changes",content:"This allows a user to write new contents to a submodule and its remote."},{heading:"outcomes-1",content:"Changes in the working copy can be recorded in a submodule commit"},{heading:"outcomes-1",content:"Submodule branches can be modified"},{heading:"outcomes-1",content:"Submodules and their branches can be pushed to their remote"},{heading:"phase-3-mergingrebasingconflicts",content:`This allows merging and rebasing of superproject commits in a content-aware way
(in contrast to Git, where only the gitlink commit ids are compared), as well as
workflows that make resolving conflicts easy and sensible.`},{heading:"phase-3-mergingrebasingconflicts",content:`This can be done in tandem with Phase 2, but will likely require a significant
amount of design work on its own.`},{heading:"outcomes-2",content:"Merged/rebased submodules result in merged/rebased working copy content"},{heading:"outcomes-2",content:`Merged/rebased working copy content can be committed, possibly by creating
sensible merged/rebased submodule commits`},{heading:"outcomes-2",content:"Merge/rebase between submodule and non-submodule gives a sensible result"},{heading:"outcomes-2",content:"Merge/rebase between submodule A and submodule B gives a sensible result"},{heading:"phase--an-ideal-world",content:"I.e. outcomes we would like to see if there were no constraints whatsoever."},{heading:"phase--an-ideal-world",content:`Rewriting submodule commits rewrites descendants correctly and updates
superproject gitlinks.`},{heading:"phase--an-ideal-world",content:`Submodule conflicts automatically resolve to the 'correct' submodule commits,
e.g. a merge between superproject commits creating a merge of the submodule
commits.`},{heading:"phase--an-ideal-world",content:"Nested submodules are as easy to work with as non-nested submodules."},{heading:"phase--an-ideal-world",content:"The operation log captures changes in the submodule."},{heading:"guiding-principles",content:"TODO"},{heading:"storing-submodules",content:`Possible approaches under discussion. See
/git-submodule-storage.`},{heading:"snapshotting-new-submodule-changes",content:"TODO"},{heading:"mergingrebasing-with-submodules",content:"TODO"}],headings:[{id:"objective",content:"Objective"},{id:"non-goals",content:"Non-goals"},{id:"background",content:"Background"},{id:"intro-to-git-submodules",content:"Intro to Git Submodules"},{id:"roadmap",content:"Roadmap"},{id:"phase-1-readonly-submodules",content:"Phase 1: Readonly submodules"},{id:"outcomes",content:"Outcomes"},{id:"phase-2-snapshotting-new-changes",content:"Phase 2: Snapshotting new changes"},{id:"outcomes-1",content:"Outcomes"},{id:"phase-3-mergingrebasingconflicts",content:"Phase 3: Merging/rebasing/conflicts"},{id:"outcomes-2",content:"Outcomes"},{id:"phase--an-ideal-world",content:"Phase ?: An ideal world"},{id:"design",content:"Design"},{id:"guiding-principles",content:"Guiding principles"},{id:"storing-submodules",content:"Storing submodules"},{id:"snapshotting-new-submodule-changes",content:"Snapshotting new submodule changes"},{id:"mergingrebasing-with-submodules",content:"Merging/rebasing with submodules"}]};const a=[{depth:2,url:"#objective",title:e.jsx(e.Fragment,{children:"Objective"})},{depth:3,url:"#non-goals",title:e.jsx(e.Fragment,{children:"Non-goals"})},{depth:2,url:"#background",title:e.jsx(e.Fragment,{children:"Background"})},{depth:3,url:"#intro-to-git-submodules",title:e.jsx(e.Fragment,{children:"Intro to Git Submodules"})},{depth:2,url:"#roadmap",title:e.jsx(e.Fragment,{children:"Roadmap"})},{depth:3,url:"#phase-1-readonly-submodules",title:e.jsx(e.Fragment,{children:"Phase 1: Readonly submodules"})},{depth:4,url:"#outcomes",title:e.jsx(e.Fragment,{children:"Outcomes"})},{depth:3,url:"#phase-2-snapshotting-new-changes",title:e.jsx(e.Fragment,{children:"Phase 2: Snapshotting new changes"})},{depth:4,url:"#outcomes-1",title:e.jsx(e.Fragment,{children:"Outcomes"})},{depth:3,url:"#phase-3-mergingrebasingconflicts",title:e.jsx(e.Fragment,{children:"Phase 3: Merging/rebasing/conflicts"})},{depth:4,url:"#outcomes-2",title:e.jsx(e.Fragment,{children:"Outcomes"})},{depth:3,url:"#phase--an-ideal-world",title:e.jsx(e.Fragment,{children:"Phase ?: An ideal world"})},{depth:2,url:"#design",title:e.jsx(e.Fragment,{children:"Design"})},{depth:3,url:"#guiding-principles",title:e.jsx(e.Fragment,{children:"Guiding principles"})},{depth:3,url:"#storing-submodules",title:e.jsx(e.Fragment,{children:"Storing submodules"})},{depth:3,url:"#snapshotting-new-submodule-changes",title:e.jsx(e.Fragment,{children:"Snapshotting new submodule changes"})},{depth:3,url:"#mergingrebasing-with-submodules",title:e.jsx(e.Fragment,{children:"Merging/rebasing with submodules"})}];function s(t){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:["This is an aspirational document that describes how jj ",e.jsx(n.em,{children:"will"}),` support Git
submodules. Readers are assumed to have some familiarity with Git and Git
submodules.`]}),`
`,e.jsx(n.p,{children:`This document is a work in progress; submodules are a big feature, and relevant
details will be filled in incrementally.`}),`
`,e.jsx(n.h2,{id:"objective",children:"Objective"}),`
`,e.jsx(n.p,{children:`This proposal aims to replicate the workflows users are used to with Git
submodules, e.g.:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Cloning submodules"}),`
`,e.jsx(n.li,{children:"Making new submodule commits and updating the superproject"}),`
`,e.jsx(n.li,{children:"Fetching and pushing updates to the submodule's remote"}),`
`,e.jsx(n.li,{children:"Viewing submodule history"}),`
`]}),`
`,e.jsx(n.p,{children:`When it is convenient, this proposal will also aim to make submodules easier to
use than Git's implementation.`}),`
`,e.jsx(n.h3,{id:"non-goals",children:"Non-goals"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Non-Git 'submodules' (e.g. native jj submodules, other VCSes)"}),`
`,e.jsx(n.li,{children:"Non-Git backends (e.g. Google internal backend)"}),`
`,e.jsx(n.li,{children:"Changing how Git submodules are implemented in Git"}),`
`]}),`
`,e.jsx(n.h2,{id:"background",children:"Background"}),`
`,e.jsx(n.p,{children:`We mainly want to support Git submodules for feature parity, since Git
submodules are a standard feature in Git and are popular enough that we have
received user requests for them. Secondarily (and distantly so), Git submodules
are notoriously difficult to use, so there is an opportunity to improve the UX
over Git's implementation.`}),`
`,e.jsx(n.h3,{id:"intro-to-git-submodules",children:"Intro to Git Submodules"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://git-scm.com/docs/gitsubmodules",children:"Git submodules"}),` are a feature of Git
that allow a repository (submodule) to be embedded inside another repository
(the superproject). Notably, a submodule is a full repository, complete with its
own index, object store and ref store. It can be interacted with like any other
repository, regardless of the superproject.`]}),`
`,e.jsx(n.p,{children:"In a superproject commit, submodule information is captured in two places:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"gitlink"})," entry in the commit's tree, where the value of the ",e.jsx(n.code,{children:"gitlink"}),` entry
is the submodule commit id. This tells Git what to populate in the working
tree.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:["A top level ",e.jsx(n.code,{children:".gitmodules"}),` file. This file is in Git's config syntax and
entries take the form `,e.jsx(n.code,{children:"submodule.<submodule-name>.*"}),`. These include many
settings about the submodules, but most importantly:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"submodule<submodule-name>.path"}),` contains the path from the root of the tree
to the `,e.jsx(n.code,{children:"gitlink"})," being described."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"submodule<submodule-name>.url"}),` contains the url to clone the submodule
from.`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(n.p,{children:["In the working tree, Git notices the presence of a submodule by the ",e.jsx(n.code,{children:".git"}),` entry
(signifying the root of a Git repository working tree). This is either the
submodule's actual Git directory (an "old-form" submodule), or a `,e.jsx(n.code,{children:".git"}),` file
pointing to `,e.jsx(n.code,{children:"<superproject-git-directory>/modules/<submodule-name>"}),`. The latter
is sometimes called the "absorbed form", and is Git's preferred mode of
operation.`]}),`
`,e.jsx(n.h2,{id:"roadmap",children:"Roadmap"}),`
`,e.jsx(n.p,{children:`Git submodules should be implemented in an order that supports an increasing set
of workflows, with the goal of getting feedback early and often. When support is
incomplete, jj should not crash, but instead provide fallback behavior and warn
the user where needed.`}),`
`,e.jsx(n.p,{children:`The goal is to land good support for pure Jujutsu repositories, while colocated
repositories will be supported when convenient.`}),`
`,e.jsx(n.p,{children:`This section should be treated as a set of guidelines, not a strict order of
work.`}),`
`,e.jsx(n.h3,{id:"phase-1-readonly-submodules",children:"Phase 1: Readonly submodules"}),`
`,e.jsx(n.p,{children:`This includes work that inspects submodule contents but does not create new
objects in the submodule. This requires a way to store submodules in a jj
repository that supports readonly operations.`}),`
`,e.jsx(n.h4,{id:"outcomes",children:"Outcomes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Submodules can be cloned anew"}),`
`,e.jsx(n.li,{children:"New submodule commits can be fetched"}),`
`,e.jsx(n.li,{children:"Submodule history and branches can be viewed"}),`
`,e.jsx(n.li,{children:"Submodule contents are populated in the working copy"}),`
`,e.jsx(n.li,{children:"Superproject gitlink can be updated to an existing submodule commit"}),`
`,e.jsx(n.li,{children:`Conflicts in the superproject gitlink can be resolved to an existing submodule
commit`}),`
`]}),`
`,e.jsx(n.h3,{id:"phase-2-snapshotting-new-changes",children:"Phase 2: Snapshotting new changes"}),`
`,e.jsx(n.p,{children:"This allows a user to write new contents to a submodule and its remote."}),`
`,e.jsx(n.h4,{id:"outcomes-1",children:"Outcomes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Changes in the working copy can be recorded in a submodule commit"}),`
`,e.jsx(n.li,{children:"Submodule branches can be modified"}),`
`,e.jsx(n.li,{children:"Submodules and their branches can be pushed to their remote"}),`
`]}),`
`,e.jsx(n.h3,{id:"phase-3-mergingrebasingconflicts",children:"Phase 3: Merging/rebasing/conflicts"}),`
`,e.jsx(n.p,{children:`This allows merging and rebasing of superproject commits in a content-aware way
(in contrast to Git, where only the gitlink commit ids are compared), as well as
workflows that make resolving conflicts easy and sensible.`}),`
`,e.jsx(n.p,{children:`This can be done in tandem with Phase 2, but will likely require a significant
amount of design work on its own.`}),`
`,e.jsx(n.h4,{id:"outcomes-2",children:"Outcomes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Merged/rebased submodules result in merged/rebased working copy content"}),`
`,e.jsx(n.li,{children:`Merged/rebased working copy content can be committed, possibly by creating
sensible merged/rebased submodule commits`}),`
`,e.jsx(n.li,{children:"Merge/rebase between submodule and non-submodule gives a sensible result"}),`
`,e.jsx(n.li,{children:"Merge/rebase between submodule A and submodule B gives a sensible result"}),`
`]}),`
`,e.jsx(n.h3,{id:"phase--an-ideal-world",children:"Phase ?: An ideal world"}),`
`,e.jsx(n.p,{children:"I.e. outcomes we would like to see if there were no constraints whatsoever."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:`Rewriting submodule commits rewrites descendants correctly and updates
superproject gitlinks.`}),`
`,e.jsx(n.li,{children:`Submodule conflicts automatically resolve to the 'correct' submodule commits,
e.g. a merge between superproject commits creating a merge of the submodule
commits.`}),`
`,e.jsx(n.li,{children:"Nested submodules are as easy to work with as non-nested submodules."}),`
`,e.jsx(n.li,{children:"The operation log captures changes in the submodule."}),`
`]}),`
`,e.jsx(n.h2,{id:"design",children:"Design"}),`
`,e.jsx(n.h3,{id:"guiding-principles",children:"Guiding principles"}),`
`,e.jsx(n.p,{children:"TODO"}),`
`,e.jsx(n.h3,{id:"storing-submodules",children:"Storing submodules"}),`
`,e.jsxs(n.p,{children:[`Possible approaches under discussion. See
`,e.jsx(n.a,{href:"/design-docs/git-submodule-storage",children:"/git-submodule-storage"}),"."]}),`
`,e.jsx(n.h3,{id:"snapshotting-new-submodule-changes",children:"Snapshotting new submodule changes"}),`
`,e.jsx(n.p,{children:"TODO"}),`
`,e.jsx(n.h3,{id:"mergingrebasing-with-submodules",children:"Merging/rebasing with submodules"}),`
`,e.jsx(n.p,{children:"TODO"})]})}function l(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{l as default,r as extractedReferences,i as frontmatter,d as structuredData,a as toc};
