import{j as n}from"./main-BCYT0j2h.js";let i={title:"Core tenets"},a=[],r={contents:[{heading:void 0,content:`Separation of logic and UI: It should be as easy to create new UIs (CLIs,
GUIs, TUIs, servers) without having to duplicate logic.`},{heading:void 0,content:`Easy-to-use APIs: It should be easy to create new commands. For example,
each command should not have to worry about concurrency, working-copy state,
and rebasing descendants of rewritten commits.`},{heading:void 0,content:`User-friendliness: Making the working copy a commit is simpler. This is
how the project started.`},{heading:void 0,content:`The repository is the source of truth: Most commands should operate on the
commit graph. The working copy is just one way of editing commits.`},{heading:void 0,content:`Pluggable storage: Must be easy to integrate with different commit storage,
virtual file systems and more.`},{heading:void 0,content:"Git-interop: Git is everywhere. We need to have good interop to be adopted."},{heading:void 0,content:`All operations must be able to scale to Google-scale repos (lots of commits,
lots of files): Laziness is important, must avoid accessing data
unnecessarily.`},{heading:void 0,content:"Having as few states as possible."},{heading:void 0,content:"Make it incredibly hard to lose work in your repository."},{heading:void 0,content:"Concurrent modifications to the repo should be safe."},{heading:void 0,content:"Allow concurrent edits on any commit, pending or finished."},{heading:void 0,content:'Make a "stacked diffs" workflow as easy as possible.'}],headings:[]};const d=[];function o(t){const e={li:"li",ul:"ul",...t.components};return n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:`Separation of logic and UI: It should be as easy to create new UIs (CLIs,
GUIs, TUIs, servers) without having to duplicate logic.`}),`
`,n.jsx(e.li,{children:`Easy-to-use APIs: It should be easy to create new commands. For example,
each command should not have to worry about concurrency, working-copy state,
and rebasing descendants of rewritten commits.`}),`
`,n.jsx(e.li,{children:`User-friendliness: Making the working copy a commit is simpler. This is
how the project started.`}),`
`,n.jsx(e.li,{children:`The repository is the source of truth: Most commands should operate on the
commit graph. The working copy is just one way of editing commits.`}),`
`,n.jsx(e.li,{children:`Pluggable storage: Must be easy to integrate with different commit storage,
virtual file systems and more.`}),`
`,n.jsx(e.li,{children:"Git-interop: Git is everywhere. We need to have good interop to be adopted."}),`
`,n.jsx(e.li,{children:`All operations must be able to scale to Google-scale repos (lots of commits,
lots of files): Laziness is important, must avoid accessing data
unnecessarily.`}),`
`,n.jsx(e.li,{children:"Having as few states as possible."}),`
`,n.jsx(e.li,{children:"Make it incredibly hard to lose work in your repository."}),`
`,n.jsx(e.li,{children:"Concurrent modifications to the repo should be safe."}),`
`,n.jsx(e.li,{children:"Allow concurrent edits on any commit, pending or finished."}),`
`,n.jsx(e.li,{children:'Make a "stacked diffs" workflow as easy as possible.'}),`
`]})}function c(t={}){const{wrapper:e}=t.components||{};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{c as default,a as extractedReferences,i as frontmatter,r as structuredData,d as toc};
