import{j as e}from"./main-BCYT0j2h.js";let r={title:"Filesets"},l=[{href:"https://repo.mercurial-scm.org/hg/help/filesets"},{href:"#quoting-file-names"}],a={contents:[{heading:void 0,content:`Jujutsu supports a functional language for selecting a set of files.
Expressions in this language are called "filesets" (the idea comes from
Mercurial). The language
consists of file patterns, operators, and functions.`},{heading:"quoting-file-names",content:`Many jj commands accept fileset expressions as positional arguments. File
names passed to these commands must be quoted if they contain
whitespace or meta characters. However, as a special case, quotes can be omitted
if the expression has no operators nor function calls. For example:`},{heading:"quoting-file-names",content:"jj diff 'Foo Bar' (shell quotes are required, but inner quotes are optional)"},{heading:"quoting-file-names",content:`jj diff '~"Foo Bar"' (both shell and inner quotes are required)`},{heading:"quoting-file-names",content:`jj diff '"Foo(1)"' (both shell and inner quotes are required)`},{heading:"quoting-file-names",content:`Glob characters aren't considered meta characters, but shell quotes are still
required:`},{heading:"quoting-file-names",content:"jj diff '~glob:**/*.rs'"},{heading:"file-patterns",content:`The following patterns are supported. In all cases, we do not mention any shell
quoting that might be necessary, and the quotes around "path" are optional if
the path has no special characters.`},{heading:"file-patterns",content:`"path" or cwd:"path": Matches cwd-relative path prefix (file or files
under directory recursively.)`},{heading:"file-patterns",content:'file:"path" or cwd-file:"path": Matches cwd-relative file (or exact) path.'},{heading:"file-patterns",content:`glob:"pattern" or cwd-glob:"pattern": Matches file paths with cwd-relative
Unix-style shell wildcard pattern. For example, glob:"*.c" will
match all .c files in the current working directory non-recursively.`},{heading:"file-patterns",content:`glob-i:"pattern" or cwd-glob-i:"pattern": Like glob: but
case-insensitive. For example, glob-i:"*.TXT" will match both file.txt
and FILE.TXT.`},{heading:"file-patterns",content:`root:"path": Matches workspace-relative path prefix (file or files under
directory recursively.)`},{heading:"file-patterns",content:'root-file:"path": Matches workspace-relative file (or exact) path.'},{heading:"file-patterns",content:`root-glob:"pattern": Matches file paths with workspace-relative Unix-style
shell wildcard pattern.`},{heading:"file-patterns",content:'root-glob-i:"pattern": Like root-glob: but case-insensitive.'},{heading:"operators",content:`The following operators are supported. x and y below can be any fileset
expressions.`},{heading:"operators",content:"~x: Matches everything but x."},{heading:"operators",content:"x & y: Matches both x and y."},{heading:"operators",content:"x ~ y: Matches x but not y."},{heading:"operators",content:"x | y: Matches either x or y (or both)."},{heading:"operators",content:"(listed in order of binding strengths)"},{heading:"operators",content:`You can use parentheses to control evaluation order, such as (x & y) | z or
x & (y | z).`},{heading:"functions",content:"You can also specify patterns by using functions."},{heading:"functions",content:"all(): Matches everything."},{heading:"functions",content:"none(): Matches nothing."},{heading:"examples",content:"Show diff excluding Cargo.lock."},{heading:"examples",content:"List files in src excluding Rust sources."},{heading:"examples",content:"Split a revision in two, putting foo into the second commit."}],headings:[{id:"quoting-file-names",content:"Quoting file names"},{id:"file-patterns",content:"File patterns"},{id:"operators",content:"Operators"},{id:"functions",content:"Functions"},{id:"examples",content:"Examples"}]};const o=[{depth:2,url:"#quoting-file-names",title:e.jsx(e.Fragment,{children:"Quoting file names"})},{depth:2,url:"#file-patterns",title:e.jsx(e.Fragment,{children:"File patterns"})},{depth:2,url:"#operators",title:e.jsx(e.Fragment,{children:"Operators"})},{depth:2,url:"#functions",title:e.jsx(e.Fragment,{children:"Functions"})},{depth:2,url:"#examples",title:e.jsx(e.Fragment,{children:"Examples"})}];function s(i){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",span:"span",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:[`Jujutsu supports a functional language for selecting a set of files.
Expressions in this language are called "filesets" (the idea comes from
`,e.jsx(n.a,{href:"https://repo.mercurial-scm.org/hg/help/filesets",children:"Mercurial"}),`). The language
consists of file patterns, operators, and functions.`]}),`
`,e.jsx(n.h2,{id:"quoting-file-names",children:"Quoting file names"}),`
`,e.jsxs(n.p,{children:["Many ",e.jsx(n.code,{children:"jj"}),` commands accept fileset expressions as positional arguments. File
names passed to these commands `,e.jsx(n.a,{href:"templates#string-literals",children:"must be quoted"}),` if they contain
whitespace or meta characters. However, as a special case, quotes can be omitted
if the expression has no operators nor function calls. For example:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"jj diff 'Foo Bar'"})," (shell quotes are required, but inner quotes are optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:`jj diff '~"Foo Bar"'`})," (both shell and inner quotes are required)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:`jj diff '"Foo(1)"'`})," (both shell and inner quotes are required)"]}),`
`]}),`
`,e.jsx(n.p,{children:`Glob characters aren't considered meta characters, but shell quotes are still
required:`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"jj diff '~glob:**/*.rs'"})}),`
`]}),`
`,e.jsx(n.h2,{id:"file-patterns",children:"File patterns"}),`
`,e.jsxs(n.p,{children:[`The following patterns are supported. In all cases, we do not mention any shell
quoting that might be necessary, and the quotes around `,e.jsx(n.code,{children:'"path"'}),` are optional if
the path `,e.jsx(n.a,{href:"#quoting-file-names",children:"has no special characters"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"path"'})," or ",e.jsx(n.code,{children:'cwd:"path"'}),`: Matches cwd-relative path prefix (file or files
under directory recursively.)`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'file:"path"'})," or ",e.jsx(n.code,{children:'cwd-file:"path"'}),": Matches cwd-relative file (or exact) path."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'glob:"pattern"'})," or ",e.jsx(n.code,{children:'cwd-glob:"pattern"'}),`: Matches file paths with cwd-relative
Unix-style shell `,e.jsxs(n.a,{href:"https://docs.rs/globset/latest/globset/#syntax",children:["wildcard ",e.jsx(n.code,{children:"pattern"})]}),". For example, ",e.jsx(n.code,{children:'glob:"*.c"'}),` will
match all `,e.jsx(n.code,{children:".c"})," files in the current working directory non-recursively."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'glob-i:"pattern"'})," or ",e.jsx(n.code,{children:'cwd-glob-i:"pattern"'}),": Like ",e.jsx(n.code,{children:"glob:"}),` but
case-insensitive. For example, `,e.jsx(n.code,{children:'glob-i:"*.TXT"'})," will match both ",e.jsx(n.code,{children:"file.txt"}),`
and `,e.jsx(n.code,{children:"FILE.TXT"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'root:"path"'}),`: Matches workspace-relative path prefix (file or files under
directory recursively.)`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'root-file:"path"'}),": Matches workspace-relative file (or exact) path."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'root-glob:"pattern"'}),`: Matches file paths with workspace-relative Unix-style
shell `,e.jsxs(n.a,{href:"https://docs.rs/globset/latest/globset/#syntax",children:["wildcard ",e.jsx(n.code,{children:"pattern"})]}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'root-glob-i:"pattern"'}),": Like ",e.jsx(n.code,{children:"root-glob:"})," but case-insensitive."]}),`
`]}),`
`,e.jsx(n.h2,{id:"operators",children:"Operators"}),`
`,e.jsxs(n.p,{children:["The following operators are supported. ",e.jsx(n.code,{children:"x"})," and ",e.jsx(n.code,{children:"y"}),` below can be any fileset
expressions.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"~x"}),": Matches everything but ",e.jsx(n.code,{children:"x"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x & y"}),": Matches both ",e.jsx(n.code,{children:"x"})," and ",e.jsx(n.code,{children:"y"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x ~ y"}),": Matches ",e.jsx(n.code,{children:"x"})," but not ",e.jsx(n.code,{children:"y"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x | y"}),": Matches either ",e.jsx(n.code,{children:"x"})," or ",e.jsx(n.code,{children:"y"})," (or both)."]}),`
`]}),`
`,e.jsx(n.p,{children:"(listed in order of binding strengths)"}),`
`,e.jsxs(n.p,{children:["You can use parentheses to control evaluation order, such as ",e.jsx(n.code,{children:"(x & y) | z"}),` or
`,e.jsx(n.code,{children:"x & (y | z)"}),"."]}),`
`,e.jsx(n.h2,{id:"functions",children:"Functions"}),`
`,e.jsx(n.p,{children:"You can also specify patterns by using functions."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"all()"}),": Matches everything."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"none()"}),": Matches nothing."]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.p,{children:["Show diff excluding ",e.jsx(n.code,{children:"Cargo.lock"}),"."]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" diff"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '~Cargo.lock'"})]})})})}),`
`,e.jsxs(n.p,{children:["List files in ",e.jsx(n.code,{children:"src"})," excluding Rust sources."]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" file"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" list"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:` 'src ~ glob:"**/*.rs"'`})]})})})}),`
`,e.jsxs(n.p,{children:["Split a revision in two, putting ",e.jsx(n.code,{children:"foo"})," into the second commit."]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" split"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '~foo'"})]})})})})]})}function c(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{c as default,l as extractedReferences,r as frontmatter,a as structuredData,o as toc};
