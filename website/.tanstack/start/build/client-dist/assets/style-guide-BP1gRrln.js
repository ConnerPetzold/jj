import{j as e}from"./main-BCYT0j2h.js";let r={title:"Style guide"},a=[],l={contents:[{heading:"panics",content:`Panics are not allowed, especially in code that may run on a server. Calling
.unwrap() is okay if it's guaranteed to be safe by previous checks or
documented invariants. For example, if a function is documented as requiring
a non-empty slice as input, it's fine to call slice[0] and panic.`},{heading:"markdown",content:"Try to wrap at 80 columns. We don't have a formatter yet."},{heading:"prefer-lower-level-tests-to-end-to-end-tests",content:`When possible, prefer lower-level tests that don't use the jj binary.
End-to-end tests are much slower than similar tests that create a repo using
jj-lib (roughly 100x slower). It's also often easier to test edge cases in
lower-level tests.`},{heading:"prefer-lower-level-tests-to-end-to-end-tests",content:`It can still be useful to add a test case or two to check that the lower-level
functionality is correctly hooked up in the CLI. For example, the end-to-end
tests for jj log don't need to test that all kinds of revsets are evaluated
correctly (we have tests in jj-lib for that), but they should check that the
-r flag is respected.`},{heading:"prefer-lower-level-tests-to-end-to-end-tests",content:"Use end-to-end tests for testing the CLI commands themselves."}],headings:[{id:"panics",content:"Panics"},{id:"markdown",content:"Markdown"},{id:"prefer-lower-level-tests-to-end-to-end-tests",content:"Prefer lower-level tests to end-to-end tests"}]};const d=[{depth:2,url:"#panics",title:e.jsx(e.Fragment,{children:"Panics"})},{depth:2,url:"#markdown",title:e.jsx(e.Fragment,{children:"Markdown"})},{depth:2,url:"#prefer-lower-level-tests-to-end-to-end-tests",title:e.jsx(e.Fragment,{children:"Prefer lower-level tests to end-to-end tests"})}];function s(n){const t={code:"code",h2:"h2",p:"p",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{id:"panics",children:"Panics"}),`
`,e.jsxs(t.p,{children:[`Panics are not allowed, especially in code that may run on a server. Calling
`,e.jsx(t.code,{children:".unwrap()"}),` is okay if it's guaranteed to be safe by previous checks or
documented invariants. For example, if a function is documented as requiring
a non-empty slice as input, it's fine to call `,e.jsx(t.code,{children:"slice[0]"})," and panic."]}),`
`,e.jsx(t.h2,{id:"markdown",children:"Markdown"}),`
`,e.jsx(t.p,{children:"Try to wrap at 80 columns. We don't have a formatter yet."}),`
`,e.jsx(t.h2,{id:"prefer-lower-level-tests-to-end-to-end-tests",children:"Prefer lower-level tests to end-to-end tests"}),`
`,e.jsxs(t.p,{children:["When possible, prefer lower-level tests that don't use the ",e.jsx(t.code,{children:"jj"}),` binary.
End-to-end tests are much slower than similar tests that create a repo using
`,e.jsx(t.code,{children:"jj-lib"}),` (roughly 100x slower). It's also often easier to test edge cases in
lower-level tests.`]}),`
`,e.jsxs(t.p,{children:[`It can still be useful to add a test case or two to check that the lower-level
functionality is correctly hooked up in the CLI. For example, the end-to-end
tests for `,e.jsx(t.code,{children:"jj log"}),` don't need to test that all kinds of revsets are evaluated
correctly (we have tests in `,e.jsx(t.code,{children:"jj-lib"}),` for that), but they should check that the
`,e.jsx(t.code,{children:"-r"})," flag is respected."]}),`
`,e.jsx(t.p,{children:"Use end-to-end tests for testing the CLI commands themselves."})]})}function i(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{i as default,a as extractedReferences,r as frontmatter,l as structuredData,d as toc};
