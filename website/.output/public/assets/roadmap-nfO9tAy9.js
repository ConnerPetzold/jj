import{j as e}from"./main-BCYT0j2h.js";let r={title:"Roadmap"},i=[],a={contents:[{heading:void 0,content:"This documents some of the goals we have. Many of them are quite independent."},{heading:void 0,content:`Note: Most people contributing to Jujutsu do so in their spare time, which
means that we cannot attach any target dates to any of the goals below.`},{heading:"support-for-copies-and-renames",content:`We want to support copy tracing in a way that leaves it up to the commit backend
to either record or detect copies. That should let us work with existing Git
repos (Git does not record copies, it detects them on the fly) as well as with
very large repos where detection would be too slow. See
design doc.`},{heading:"forge-integrations",content:`We would like to make it easier to work with various popular forges by providing
something like jj github submit, jj gitlab submit, and jj gerrit send. For
popular forges, we might include that support by default in the standard jj
binary.`},{heading:"submodule-support",content:`Git submodules are used frequently enough in large Git repos that we will
probably need to support them. There are still big open
questions around UX.`},{heading:"better-rust-api-for-uis",content:`UIs like gg currently have to duplicate quite a bit of logic from jj-cli. We
need to make this code not specific to the CLI (e.g. return status objects
instead of printing messages) and move it into jj-lib.`},{heading:"rpc-api",content:`One problem with writing tools using the Rust API is that they will only work
with the backends they were compiled with. For example, a regular gg build
will not work on Google repos because it doesn't have the backends necessary to
load them. We want to provide an RPC API for tools that want to work with an
unknown build of jj by having the tool run something like jj api to give it
an address to talk to.`},{heading:"rpc-api",content:`In addition to helping with the problem of unknown backends, having an RPC API
should make it easier for tools like VS Code that are not written in Rust. The
RPC API will probably be at a higher abstraction level than the Rust API.`},{heading:"rpc-api",content:"See design doc."},{heading:"open-source-cloud-based-repos-server-and-daemon-process",content:`Google has an internal Jujutsu server backed by a database. This server allows
commits and repos (operation logs) to be stored in the cloud (i.e. the database).
Working copies can still be stored locally.`},{heading:"open-source-cloud-based-repos-server-and-daemon-process",content:`In order to reduce latency, there is a local daemon process that caches reads
and writes. It also prefetches of objects it thinks the client might ask for
next. In also helps with write latency by optimistically answering write
requests (it therefore needs to know the server's hashing scheme so it can
return the right IDs).`},{heading:"open-source-cloud-based-repos-server-and-daemon-process",content:`We (the project, not necessarily Google) want to provide a similar experience
for all users. We would therefore like to create a similar server and daemon.
The daemon might be the same process as for the RPC API mentioned above.`},{heading:"virtual-file-system-vfs",content:`For very large projects and/or large files, it can be expensive to update the
working copy. We want to provide a VFS to help with that. Updating the working
copy to another commit can then be done simply by telling the VFS to use the
other commit as base, without needing to download any large files in the target
commit until the user asks for them via the file system. A VFS can also make it
cheap to snapshot the working copy by keeping track of all changes compared to
the base commit.`},{heading:"virtual-file-system-vfs",content:`Having a VFS can also be very benefial for jj run, since we can then
cheaply create temporary working copies for the commands to run in.`},{heading:"better-support-for-large-files",content:`We have talked about somehow using content-defined chunking (CDC) to reduce
storage and transfer costs for large files. Maybe we will store files in our
future cloud-based server using the same model as XetHub.`}],headings:[{id:"support-for-copies-and-renames",content:"Support for copies and renames"},{id:"forge-integrations",content:"Forge integrations"},{id:"submodule-support",content:"Submodule support"},{id:"better-rust-api-for-uis",content:"Better Rust API for UIs"},{id:"rpc-api",content:"RPC API"},{id:"open-source-cloud-based-repos-server-and-daemon-process",content:"Open-source cloud-based repos (server and daemon process)"},{id:"virtual-file-system-vfs",content:"Virtual file system (VFS)"},{id:"better-support-for-large-files",content:"Better support for large files"}]};const l=[{depth:2,url:"#support-for-copies-and-renames",title:e.jsx(e.Fragment,{children:"Support for copies and renames"})},{depth:2,url:"#forge-integrations",title:e.jsx(e.Fragment,{children:"Forge integrations"})},{depth:2,url:"#submodule-support",title:e.jsx(e.Fragment,{children:"Submodule support"})},{depth:2,url:"#better-rust-api-for-uis",title:e.jsx(e.Fragment,{children:"Better Rust API for UIs"})},{depth:2,url:"#rpc-api",title:e.jsx(e.Fragment,{children:"RPC API"})},{depth:2,url:"#open-source-cloud-based-repos-server-and-daemon-process",title:e.jsx(e.Fragment,{children:"Open-source cloud-based repos (server and daemon process)"})},{depth:2,url:"#virtual-file-system-vfs",title:e.jsx(e.Fragment,{children:"Virtual file system (VFS)"})},{depth:2,url:"#better-support-for-large-files",title:e.jsx(e.Fragment,{children:"Better support for large files"})}];function n(o){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",strong:"strong",...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.p,{children:"This documents some of the goals we have. Many of them are quite independent."}),`
`,e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:[e.jsx(t.strong,{children:"Note:"}),` Most people contributing to Jujutsu do so in their spare time, which
means that we cannot attach any target dates to any of the goals below.`]}),`
`]}),`
`,e.jsx(t.h2,{id:"support-for-copies-and-renames",children:"Support for copies and renames"}),`
`,e.jsxs(t.p,{children:[`We want to support copy tracing in a way that leaves it up to the commit backend
to either record or detect copies. That should let us work with existing Git
repos (Git does not record copies, it detects them on the fly) as well as with
very large repos where detection would be too slow. See
`,e.jsx(t.a,{href:"/design-docs/copy-tracking",children:"design doc"}),"."]}),`
`,e.jsx(t.h2,{id:"forge-integrations",children:"Forge integrations"}),`
`,e.jsxs(t.p,{children:[`We would like to make it easier to work with various popular forges by providing
something like `,e.jsx(t.code,{children:"jj github submit"}),", ",e.jsx(t.code,{children:"jj gitlab submit"}),", and ",e.jsx(t.code,{children:"jj gerrit send"}),`. For
popular forges, we might include that support by default in the standard `,e.jsx(t.code,{children:"jj"}),`
binary.`]}),`
`,e.jsx(t.h2,{id:"submodule-support",children:"Submodule support"}),`
`,e.jsxs(t.p,{children:[`Git submodules are used frequently enough in large Git repos that we will
probably need to `,e.jsx(t.a,{href:"https://github.com/jj-vcs/jj/issues/494",children:"support them"}),`. There are still big open
questions around UX.`]}),`
`,e.jsx(t.h2,{id:"better-rust-api-for-uis",children:"Better Rust API for UIs"}),`
`,e.jsxs(t.p,{children:["UIs like ",e.jsx(t.a,{href:"https://github.com/gulbanana/gg",children:"gg"})," currently have to duplicate quite a bit of logic from ",e.jsx(t.code,{children:"jj-cli"}),`. We
need to make this code not specific to the CLI (e.g. return status objects
instead of printing messages) and move it into `,e.jsx(t.code,{children:"jj-lib"}),"."]}),`
`,e.jsx(t.h2,{id:"rpc-api",children:"RPC API"}),`
`,e.jsxs(t.p,{children:[`One problem with writing tools using the Rust API is that they will only work
with the backends they were compiled with. For example, a regular `,e.jsx(t.a,{href:"https://github.com/gulbanana/gg",children:"gg"}),` build
will not work on Google repos because it doesn't have the backends necessary to
load them. We want to provide an RPC API for tools that want to work with an
unknown build of `,e.jsx(t.code,{children:"jj"})," by having the tool run something like ",e.jsx(t.code,{children:"jj api"}),` to give it
an address to talk to.`]}),`
`,e.jsx(t.p,{children:`In addition to helping with the problem of unknown backends, having an RPC API
should make it easier for tools like VS Code that are not written in Rust. The
RPC API will probably be at a higher abstraction level than the Rust API.`}),`
`,e.jsxs(t.p,{children:["See ",e.jsx(t.a,{href:"https://docs.google.com/document/d/1rOKvutee5TVYpFhh_UDNZDxfUKyrJ8rjCNpFaNHOHwU/edit?usp=sharing&resourcekey=0-922ApyoAjuXN_uTKqmCqjg",children:"design doc"}),"."]}),`
`,e.jsx(t.h2,{id:"open-source-cloud-based-repos-server-and-daemon-process",children:"Open-source cloud-based repos (server and daemon process)"}),`
`,e.jsx(t.p,{children:`Google has an internal Jujutsu server backed by a database. This server allows
commits and repos (operation logs) to be stored in the cloud (i.e. the database).
Working copies can still be stored locally.`}),`
`,e.jsx(t.p,{children:`In order to reduce latency, there is a local daemon process that caches reads
and writes. It also prefetches of objects it thinks the client might ask for
next. In also helps with write latency by optimistically answering write
requests (it therefore needs to know the server's hashing scheme so it can
return the right IDs).`}),`
`,e.jsx(t.p,{children:`We (the project, not necessarily Google) want to provide a similar experience
for all users. We would therefore like to create a similar server and daemon.
The daemon might be the same process as for the RPC API mentioned above.`}),`
`,e.jsx(t.h2,{id:"virtual-file-system-vfs",children:"Virtual file system (VFS)"}),`
`,e.jsx(t.p,{children:`For very large projects and/or large files, it can be expensive to update the
working copy. We want to provide a VFS to help with that. Updating the working
copy to another commit can then be done simply by telling the VFS to use the
other commit as base, without needing to download any large files in the target
commit until the user asks for them via the file system. A VFS can also make it
cheap to snapshot the working copy by keeping track of all changes compared to
the base commit.`}),`
`,e.jsxs(t.p,{children:["Having a VFS can also be very benefial for ",e.jsx(t.a,{href:"https://github.com/jj-vcs/jj/issues/1869",children:e.jsx(t.code,{children:"jj run"})}),`, since we can then
cheaply create temporary working copies for the commands to run in.`]}),`
`,e.jsx(t.h2,{id:"better-support-for-large-files",children:"Better support for large files"}),`
`,e.jsxs(t.p,{children:[`We have talked about somehow using content-defined chunking (CDC) to reduce
storage and transfer costs for large files. Maybe we will store files in our
future cloud-based server using the same model as `,e.jsx(t.a,{href:"https://web.archive.org/web/20240914200921/https://xethub.com/assets/docs/concepts/xet-storage",children:"XetHub"}),"."]})]})}function d(o={}){const{wrapper:t}=o.components||{};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{d as default,i as extractedReferences,r as frontmatter,a as structuredData,l as toc};
