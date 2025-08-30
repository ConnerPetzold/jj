import{j as e}from"./main-BCYT0j2h.js";let i={title:"Git submodule storage"},r=[{href:"/design-docs/git-submodules"},{href:"/design-docs/git-submodules"}],a={contents:[{heading:"objective",content:`Decide what approach(es) to Git submodule storage we should pursue.
The decision will be recorded in /git-submodules.`},{heading:"use-cases-to-consider",content:`The submodule storage format should support the workflows specified in the
submodules roadmap. It should be obvious how "Phase 1"
requirements will be supported, and we should have an idea of how "Phases 2,3,X"
might be supported.`},{heading:"use-cases-to-consider",content:"Notable use cases and workflows are noted below."},{heading:"fetching-submodule-commits",content:`Git's protocol is designed for communicating between copies of the same
repository. Notably, a Git fetch calculates the list of required objects by
performing reachability checks between the refs on the local and the remote
side. We should expect that this will only work well if the submodule repository
is stored as a local Git repository.`},{heading:"fetching-submodule-commits",content:"Rolling our own Git fetch is too complex to be worth the effort."},{heading:"jj-op-restore-and-operation-log-format",content:`We want jj op restore to restore to an "expected" state in the submodule.
There is a potential distinction between running jj op restore in the
superproject vs in the submodule, and the expected behavior may be different in
each case, e.g. in the superproject, it might be enough to restore the submodule
working copy, but in the submodule, refs also need to be restored.`},{heading:"jj-op-restore-and-operation-log-format",content:`Currently, the operation log only references objects and refs in the
superproject, so it is likely that proposed approaches will need to extend this
format. It is also worth considering that submodules may be added, updated or
removed in superproject commits, thus the list of submodules is likely to change
over the repository's lifetime.`},{heading:"nested-submodules",content:`Git submodules may contain submodules themselves, so our chosen storage schemes
should support that.`},{heading:"nested-submodules",content:`We should consider limiting the recursion depth to avoid nasty edge cases (e.g.
cyclical submodules.) that might surprise users.`},{heading:"supporting-future-extensions",content:`There are certain extensions we may want to make in the future, but we don't
have a timeline for them today. Proposed approaches should take these
extensions into account (e.g. the approach should be theoretically extensible),
but a full proposal for implementing them is not necessary.`},{heading:"supporting-future-extensions",content:"These extensions are:"},{heading:"supporting-future-extensions",content:"Non-git subrepos"},{heading:"supporting-future-extensions",content:"Colocated Git repos"},{heading:"supporting-future-extensions",content:"The superproject using a non-git backend"},{heading:"proposed-design",content:`Git submodules will be stored as full jj repos. In the code, jj commands will
only interact with the submodule's repo as an entire unit, e.g. it cannot query
the submodule's commit backend directly. A well-abstracted submodule will extend
well to non-git backends and non-git subrepos.`},{heading:"proposed-design",content:`The main challenge with this approach is that the submodule repo can be in a
state that is internally valid (when considering only the submodule's repo), but
invalid when considering the superproject-submodule system. This will be managed
by requiring all submodule interactions go through the superproject so that
superproject-submodule coordination can occur. For example, jj will not allow
the user to work on the submodule's repo without going through the superproject
(unlike Git).`},{heading:"proposed-design",content:"The notable workflows could be addressed like so:"},{heading:"fetching-submodule-commits-1",content:`The submodule would fetch using the equivalent of jj git fetch. It remains to
be decided how a "recursive" fetch should work, especially if a newly fetched
superproject commit references an unfetched submodule commit. A reasonable
approximation would be to fetch all branches in the submodule, and then, if the
submodule commit is still missing, gracefully handle it.`},{heading:"jj-op-restore-and-operation-log-format-1",content:`As full repos, each submodule will have its own operation log. We will continue
to use the existing operation log format, where each operation log tracks their
own repo's commits. As commands are run in the superproject, corresponding
commands will be run in the submodule as necessary, e.g. checking out a
superproject commit will cause a submodule commit to also be checked out.`},{heading:"jj-op-restore-and-operation-log-format-1",content:`Since there is no association between a superproject operation and a submodule
operation, jj op restore in the superproject will not restore the submodule to
a previous operation. Instead, the appropriate submodule operation(s) will be
created. This is sufficient to preserve the superproject-submodule relationship;
it precludes "recursive" restore (e.g. restoring branches in the superproject
and submodules) but it seems unlikely that we will need such a thing.`},{heading:"nested-submodules-1",content:`Since submodules are full repos, they can contain submodules themselves. Nesting
is unlikely to complicate any of the core features, since the top-level
superproject/submodule relationship is almost identical to the submodule/nested
submodule relationship.`},{heading:"extending-to-colocated-git-repos",content:`Git expects submodules to be in .git/modules, so it will not understand this
storage format. To support colocated Git repos, we will have to change Git to
allow a submodule's gitdir to be in an alternate location (e.g. we could add a
new submodule.<name>.gitdir config option). This is a simple change, so it
should be feasible.`},{heading:"git-repos-in-the-main-git-backend",content:`Since the Git backend contains a Git repository, an 'obvious' default would be
to store them in the Git superproject the same way Git does, i.e. in
.git/modules. Since Git submodules are full repositories that can have
submodules, this storage scheme naturally extends to nested submodules.`},{heading:"git-repos-in-the-main-git-backend",content:`Most of the work in storing submodules and querying them would be well-isolated
to the Git backend, which gives us a lot of flexibility to make changes without
affecting the rest of jj. However, the operation log will need a significant
rework since it isn't designed to reference submodules, and handling edge cases
(e.g. a submodule being added/removed, nested submodules) will be tricky.`},{heading:"git-repos-in-the-main-git-backend",content:`This is rejected because handling that operation log complexity isn't worth it
when very little of the work extends to non-Git backends.`},{heading:"store-git-submodules-as-alternate-git-backends",content:`Teach jj to use multiple commit backends and store Git submodules as Git
backends. Since submodules are separate from the 'main' backend, a repository
can use whatever backend it wants as its 'main' one, while still having Git
submodules in the 'alternate' Git backends.`},{heading:"store-git-submodules-as-alternate-git-backends",content:`This approach extends fairly well to non-Git submodules (which would be stored
in non-Git commit backends). However, this requires significantly reworking the
operation log to account for multiple commit backends. It is also not clear how
nested submodules will be supported since there isn't an obvious way to
represent a nested submodule's relationship to its superproject.`}],headings:[{id:"objective",content:"Objective"},{id:"use-cases-to-consider",content:"Use cases to consider"},{id:"fetching-submodule-commits",content:"Fetching submodule commits"},{id:"jj-op-restore-and-operation-log-format",content:'"jj op restore" and operation log format'},{id:"nested-submodules",content:"Nested submodules"},{id:"supporting-future-extensions",content:"Supporting future extensions"},{id:"proposed-design",content:"Proposed design"},{id:"fetching-submodule-commits-1",content:"Fetching submodule commits"},{id:"jj-op-restore-and-operation-log-format-1",content:'"jj op restore" and operation log format'},{id:"nested-submodules-1",content:"Nested submodules"},{id:"extending-to-colocated-git-repos",content:"Extending to colocated Git repos"},{id:"alternatives-considered",content:"Alternatives considered"},{id:"git-repos-in-the-main-git-backend",content:"Git repos in the main Git backend"},{id:"store-git-submodules-as-alternate-git-backends",content:"Store Git submodules as alternate Git backends"}]};const l=[{depth:2,url:"#objective",title:e.jsx(e.Fragment,{children:"Objective"})},{depth:2,url:"#use-cases-to-consider",title:e.jsx(e.Fragment,{children:"Use cases to consider"})},{depth:3,url:"#fetching-submodule-commits",title:e.jsx(e.Fragment,{children:"Fetching submodule commits"})},{depth:3,url:"#jj-op-restore-and-operation-log-format",title:e.jsx(e.Fragment,{children:'"jj op restore" and operation log format'})},{depth:3,url:"#nested-submodules",title:e.jsx(e.Fragment,{children:"Nested submodules"})},{depth:3,url:"#supporting-future-extensions",title:e.jsx(e.Fragment,{children:"Supporting future extensions"})},{depth:2,url:"#proposed-design",title:e.jsx(e.Fragment,{children:"Proposed design"})},{depth:3,url:"#fetching-submodule-commits-1",title:e.jsx(e.Fragment,{children:"Fetching submodule commits"})},{depth:3,url:"#jj-op-restore-and-operation-log-format-1",title:e.jsx(e.Fragment,{children:'"jj op restore" and operation log format'})},{depth:3,url:"#nested-submodules-1",title:e.jsx(e.Fragment,{children:"Nested submodules"})},{depth:3,url:"#extending-to-colocated-git-repos",title:e.jsx(e.Fragment,{children:"Extending to colocated Git repos"})},{depth:2,url:"#alternatives-considered",title:e.jsx(e.Fragment,{children:"Alternatives considered"})},{depth:3,url:"#git-repos-in-the-main-git-backend",title:e.jsx(e.Fragment,{children:"Git repos in the main Git backend"})},{depth:3,url:"#store-git-submodules-as-alternate-git-backends",title:e.jsx(e.Fragment,{children:"Store Git submodules as alternate Git backends"})}];function n(o){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{id:"objective",children:"Objective"}),`
`,e.jsxs(t.p,{children:[`Decide what approach(es) to Git submodule storage we should pursue.
The decision will be recorded in `,e.jsx(t.a,{href:"/design-docs/git-submodules",children:"/git-submodules"}),"."]}),`
`,e.jsx(t.h2,{id:"use-cases-to-consider",children:"Use cases to consider"}),`
`,e.jsxs(t.p,{children:[`The submodule storage format should support the workflows specified in the
`,e.jsx(t.a,{href:"/design-docs/git-submodules",children:"submodules roadmap"}),`. It should be obvious how "Phase 1"
requirements will be supported, and we should have an idea of how "Phases 2,3,X"
might be supported.`]}),`
`,e.jsx(t.p,{children:"Notable use cases and workflows are noted below."}),`
`,e.jsx(t.h3,{id:"fetching-submodule-commits",children:"Fetching submodule commits"}),`
`,e.jsx(t.p,{children:`Git's protocol is designed for communicating between copies of the same
repository. Notably, a Git fetch calculates the list of required objects by
performing reachability checks between the refs on the local and the remote
side. We should expect that this will only work well if the submodule repository
is stored as a local Git repository.`}),`
`,e.jsx(t.p,{children:"Rolling our own Git fetch is too complex to be worth the effort."}),`
`,e.jsx(t.h3,{id:"jj-op-restore-and-operation-log-format",children:'"jj op restore" and operation log format'}),`
`,e.jsxs(t.p,{children:["We want ",e.jsx(t.code,{children:"jj op restore"}),` to restore to an "expected" state in the submodule.
There is a potential distinction between running `,e.jsx(t.code,{children:"jj op restore"}),` in the
superproject vs in the submodule, and the expected behavior may be different in
each case, e.g. in the superproject, it might be enough to restore the submodule
working copy, but in the submodule, refs also need to be restored.`]}),`
`,e.jsx(t.p,{children:`Currently, the operation log only references objects and refs in the
superproject, so it is likely that proposed approaches will need to extend this
format. It is also worth considering that submodules may be added, updated or
removed in superproject commits, thus the list of submodules is likely to change
over the repository's lifetime.`}),`
`,e.jsx(t.h3,{id:"nested-submodules",children:"Nested submodules"}),`
`,e.jsx(t.p,{children:`Git submodules may contain submodules themselves, so our chosen storage schemes
should support that.`}),`
`,e.jsx(t.p,{children:`We should consider limiting the recursion depth to avoid nasty edge cases (e.g.
cyclical submodules.) that might surprise users.`}),`
`,e.jsx(t.h3,{id:"supporting-future-extensions",children:"Supporting future extensions"}),`
`,e.jsx(t.p,{children:`There are certain extensions we may want to make in the future, but we don't
have a timeline for them today. Proposed approaches should take these
extensions into account (e.g. the approach should be theoretically extensible),
but a full proposal for implementing them is not necessary.`}),`
`,e.jsx(t.p,{children:"These extensions are:"}),`
`,e.jsxs(t.ul,{children:[`
`,e.jsx(t.li,{children:"Non-git subrepos"}),`
`,e.jsx(t.li,{children:"Colocated Git repos"}),`
`,e.jsx(t.li,{children:"The superproject using a non-git backend"}),`
`]}),`
`,e.jsx(t.h2,{id:"proposed-design",children:"Proposed design"}),`
`,e.jsx(t.p,{children:`Git submodules will be stored as full jj repos. In the code, jj commands will
only interact with the submodule's repo as an entire unit, e.g. it cannot query
the submodule's commit backend directly. A well-abstracted submodule will extend
well to non-git backends and non-git subrepos.`}),`
`,e.jsx(t.p,{children:`The main challenge with this approach is that the submodule repo can be in a
state that is internally valid (when considering only the submodule's repo), but
invalid when considering the superproject-submodule system. This will be managed
by requiring all submodule interactions go through the superproject so that
superproject-submodule coordination can occur. For example, jj will not allow
the user to work on the submodule's repo without going through the superproject
(unlike Git).`}),`
`,e.jsx(t.p,{children:"The notable workflows could be addressed like so:"}),`
`,e.jsx(t.h3,{id:"fetching-submodule-commits-1",children:"Fetching submodule commits"}),`
`,e.jsxs(t.p,{children:["The submodule would fetch using the equivalent of ",e.jsx(t.code,{children:"jj git fetch"}),`. It remains to
be decided how a "recursive" fetch should work, especially if a newly fetched
superproject commit references an unfetched submodule commit. A reasonable
approximation would be to fetch all branches in the submodule, and then, if the
submodule commit is still missing, gracefully handle it.`]}),`
`,e.jsx(t.h3,{id:"jj-op-restore-and-operation-log-format-1",children:'"jj op restore" and operation log format'}),`
`,e.jsx(t.p,{children:`As full repos, each submodule will have its own operation log. We will continue
to use the existing operation log format, where each operation log tracks their
own repo's commits. As commands are run in the superproject, corresponding
commands will be run in the submodule as necessary, e.g. checking out a
superproject commit will cause a submodule commit to also be checked out.`}),`
`,e.jsxs(t.p,{children:[`Since there is no association between a superproject operation and a submodule
operation, `,e.jsx(t.code,{children:"jj op restore"}),` in the superproject will not restore the submodule to
a previous operation. Instead, the appropriate submodule operation(s) will be
created. This is sufficient to preserve the superproject-submodule relationship;
it precludes "recursive" restore (e.g. restoring branches in the superproject
and submodules) but it seems unlikely that we will need such a thing.`]}),`
`,e.jsx(t.h3,{id:"nested-submodules-1",children:"Nested submodules"}),`
`,e.jsx(t.p,{children:`Since submodules are full repos, they can contain submodules themselves. Nesting
is unlikely to complicate any of the core features, since the top-level
superproject/submodule relationship is almost identical to the submodule/nested
submodule relationship.`}),`
`,e.jsx(t.h3,{id:"extending-to-colocated-git-repos",children:"Extending to colocated Git repos"}),`
`,e.jsxs(t.p,{children:["Git expects submodules to be in ",e.jsx(t.code,{children:".git/modules"}),`, so it will not understand this
storage format. To support colocated Git repos, we will have to change Git to
allow a submodule's gitdir to be in an alternate location (e.g. we could add a
new `,e.jsx(t.code,{children:"submodule.<name>.gitdir"}),` config option). This is a simple change, so it
should be feasible.`]}),`
`,e.jsx(t.h2,{id:"alternatives-considered",children:"Alternatives considered"}),`
`,e.jsx(t.h3,{id:"git-repos-in-the-main-git-backend",children:"Git repos in the main Git backend"}),`
`,e.jsxs(t.p,{children:[`Since the Git backend contains a Git repository, an 'obvious' default would be
to store them in the Git superproject the same way Git does, i.e. in
`,e.jsx(t.code,{children:".git/modules"}),`. Since Git submodules are full repositories that can have
submodules, this storage scheme naturally extends to nested submodules.`]}),`
`,e.jsx(t.p,{children:`Most of the work in storing submodules and querying them would be well-isolated
to the Git backend, which gives us a lot of flexibility to make changes without
affecting the rest of jj. However, the operation log will need a significant
rework since it isn't designed to reference submodules, and handling edge cases
(e.g. a submodule being added/removed, nested submodules) will be tricky.`}),`
`,e.jsx(t.p,{children:`This is rejected because handling that operation log complexity isn't worth it
when very little of the work extends to non-Git backends.`}),`
`,e.jsx(t.h3,{id:"store-git-submodules-as-alternate-git-backends",children:"Store Git submodules as alternate Git backends"}),`
`,e.jsx(t.p,{children:`Teach jj to use multiple commit backends and store Git submodules as Git
backends. Since submodules are separate from the 'main' backend, a repository
can use whatever backend it wants as its 'main' one, while still having Git
submodules in the 'alternate' Git backends.`}),`
`,e.jsx(t.p,{children:`This approach extends fairly well to non-Git submodules (which would be stored
in non-Git commit backends). However, this requires significantly reworking the
operation log to account for multiple commit backends. It is also not clear how
nested submodules will be supported since there isn't an obvious way to
represent a nested submodule's relationship to its superproject.`})]})}function d(o={}){const{wrapper:t}=o.components||{};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{d as default,r as extractedReferences,i as frontmatter,a as structuredData,l as toc};
