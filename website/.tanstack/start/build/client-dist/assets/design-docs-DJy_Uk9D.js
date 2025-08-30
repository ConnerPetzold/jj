import{j as e}from"./main-BCYT0j2h.js";let r={title:"Jujutsu Design Docs"},i=[{href:"/contributing/design-doc-blueprint"}],c={contents:[{heading:void 0,content:`Jujutsu uses Design Docs to drive technical decisions on large projects and it
is the place to discuss your proposed design or new component. It is a very
thorough process, in which the design doc must be approved before PRs for the
feature will be accepted. It shares some similarities with Rust RFCs but
mostly addresses technical problems and gauges the technical and social
concerns of all stakeholders.`},{heading:void 0,content:`So if you want to start building a native backend or the server component for
Jujutsu, you'll need to go through this process.`},{heading:"process",content:`Add a new markdown document to docs/design, named after your improvement
or project.`},{heading:"process",content:"Describe the current state of the world and the things you want to improve."},{heading:"process",content:"Wait for the Maintainers and Stakeholders to show up."},{heading:"process",content:"Iterate until everyone accepts the change in normal codereview fashion."},{heading:"blueprint-template",content:`You can find the base template of a new Design Doc
here.`}],headings:[{id:"process",content:"Process"},{id:"blueprint-template",content:"Blueprint (Template)"}]};const a=[{depth:2,url:"#process",title:e.jsx(e.Fragment,{children:"Process"})},{depth:2,url:"#blueprint-template",title:e.jsx(e.Fragment,{children:"Blueprint (Template)"})}];function o(n){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(t.p,{children:[`Jujutsu uses Design Docs to drive technical decisions on large projects and it
is the place to discuss your proposed design or new component. It is a very
thorough process, in which the design doc must be approved before PRs for the
feature will be accepted. It shares some similarities with `,e.jsx(t.a,{href:"https://github.com/rust-lang/rfcs",children:"Rust RFCs"}),` but
mostly addresses `,e.jsx(t.em,{children:"technical"}),` problems and gauges the technical and social
concerns of all stakeholders.`]}),`
`,e.jsx(t.p,{children:`So if you want to start building a native backend or the server component for
Jujutsu, you'll need to go through this process.`}),`
`,e.jsx(t.h2,{id:"process",children:"Process"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["Add a new markdown document to ",e.jsx(t.code,{children:"docs/design"}),`, named after your improvement
or project.`]}),`
`,e.jsx(t.li,{children:"Describe the current state of the world and the things you want to improve."}),`
`,e.jsx(t.li,{children:"Wait for the Maintainers and Stakeholders to show up."}),`
`,e.jsx(t.li,{children:"Iterate until everyone accepts the change in normal codereview fashion."}),`
`]}),`
`,e.jsx(t.h2,{id:"blueprint-template",children:"Blueprint (Template)"}),`
`,e.jsxs(t.p,{children:[`You can find the base template of a new Design Doc
`,e.jsx(t.a,{href:"/contributing/design-doc-blueprint",children:"here"}),"."]})]})}function d(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{d as default,i as extractedReferences,r as frontmatter,c as structuredData,a as toc};
