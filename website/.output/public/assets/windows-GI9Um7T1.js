import{j as e}from"./main-BYx1FFWF.js";let o={title:"Working on Windows"},l=[{href:"config#eol-conversion-settings"},{href:"config#pager"}],r={contents:[{heading:void 0,content:`Jujutsu works the same on all platforms, but there are some caveats that Windows
users should be aware of.`},{heading:"line-endings-conversion",content:`Jujutsu currently has a setting,
working-copy.eol-conversion, similar to
Git's core.autocrlf, but does not currently honor
.gitattributes and the core.autocrlf git config, so it is recommended to
keep the working-copy.eol-conversion setting and the core.autocrlf git
config in sync.`},{heading:"line-endings-conversion",content:"!!! note"},{heading:"line-endings-conversion",content:`If you created a colocated git repo, forget to keep these 2 settings in
sync, and result in a dirty working copy with only EOL diffs, you can set
the working-copy.eol-conversion setting correctly and run jj abandon to
fix it.`},{heading:"line-endings-conversion",content:`The line endings conversion won't be applied to files detected as a binary files
via a heuristics regardless of the settings. This behavior is subject to
change when we support the text git attribute.`},{heading:"line-endings-conversion",content:`Jujutsu may make incorrect decision on whether a file is a binary file and apply
line conversion incorrectly, but currently, Jujutsu doesn't support configuring
line endings conversion for particular files. If this issue is hit, one should
not enable the line conversion setting.`},{heading:"line-endings-conversion",content:"!!! note"},{heading:"line-endings-conversion",content:`If Jujutsu applies line endings conversion on incorrect files, you should
not enable the line conversion setting and the git core.autocrlf setting.
See below.`},{heading:"line-endings-conversion",content:`To disable line conversion, set the core.autocrlf setting to none or just
remove the setting.`},{heading:"line-endings-conversion",content:`This means that line endings will be checked out exactly as they are committed
and committed exactly as authored.`},{heading:"line-endings-conversion",content:`This setting ensures Git will check out files with LF line endings without
converting them to CRLF. You'll want to make sure any tooling you use,
especially IDEs, preserve LF line endings.`},{heading:"line-endings-conversion",content:`This poses the question if we should support reading the core.autocrlf
setting in colocated repos. See details at the
issue.`},{heading:"line-endings-conversion",content:`To detect if a file is binary, Jujutsu currently checks if there is 0 byte
in the file which is different from the algorithm of
gitoxide or git. Jujutsu
doesn't plan to align the binary detection logic with git.`},{heading:"pagination",content:`On Windows, jj will use its integrated pager called streampager by default,
unless the environment variable %PAGER% or the config ui.pager is explicitly
set. See the pager section of the config docs for more
details.`},{heading:"pagination",content:`If the built-in pager doesn't meet your needs and you have Git installed, you
can switch to using Git's pager as follows:`},{heading:"typing--in-powershell",content:`PowerShell uses @ as part the array sub-expression operator, so it
often needs to be escaped or quoted in commands:`},{heading:"typing--in-powershell",content:`One solution is to create a revset alias. For example, to make HEAD an alias
for @:`},{heading:"wsl-sets-the-execute-bit-on-all-files",content:`When viewing a Windows drive from WSL (via /mnt/c or a similar path), Windows
exposes all files with the execute bit set. Since Jujutsu automatically records
changes to the working copy, this sets the execute bit on all files committed in
your repository.`},{heading:"wsl-sets-the-execute-bit-on-all-files",content:`If you only need to access the repository in WSL, the best solution is to clone
the repository in the Linux file system (for example, in
~/my-repo).`},{heading:"wsl-sets-the-execute-bit-on-all-files",content:`If you need to use the repository in both WSL and Windows, one solution is to
create a workspace in the Linux file system:`},{heading:"wsl-sets-the-execute-bit-on-all-files",content:"Then only use the ~/my-repo workspace from Linux."},{heading:"symbolic-link-support",content:`jj supports symlinks on Windows only when they are enabled by the operating
system. This requires Windows 10 version 14972 or higher, as well as Developer
Mode. If those conditions are not satisfied, jj will materialize symlinks as
ordinary files.`},{heading:"symbolic-link-support",content:`For colocated repositories, Git support must also be enabled using the
git config option core.symlinks=true.`}],headings:[{id:"line-endings-conversion",content:"Line endings conversion"},{id:"pagination",content:"Pagination"},{id:"typing--in-powershell",content:"Typing @ in PowerShell"},{id:"wsl-sets-the-execute-bit-on-all-files",content:"WSL sets the execute bit on all files"},{id:"symbolic-link-support",content:"Symbolic link support"}]};const h=[{depth:2,url:"#line-endings-conversion",title:e.jsx(e.Fragment,{children:"Line endings conversion"})},{depth:2,url:"#pagination",title:e.jsx(e.Fragment,{children:"Pagination"})},{depth:2,url:"#typing--in-powershell",title:e.jsxs(e.Fragment,{children:["Typing ",e.jsx("code",{children:"@"})," in PowerShell"]})},{depth:2,url:"#wsl-sets-the-execute-bit-on-all-files",title:e.jsx(e.Fragment,{children:"WSL sets the execute bit on all files"})},{depth:2,url:"#symbolic-link-support",title:e.jsx(e.Fragment,{children:"Symbolic link support"})},{depth:2,url:"#footnote-label",title:e.jsx(e.Fragment,{children:"Footnotes"})}];function n(s){const i={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",span:"span",sup:"sup",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.p,{children:`Jujutsu works the same on all platforms, but there are some caveats that Windows
users should be aware of.`}),`
`,e.jsx(i.h2,{id:"line-endings-conversion",children:"Line endings conversion"}),`
`,e.jsxs(i.p,{children:[`Jujutsu currently has a setting,
`,e.jsx(i.a,{href:"config#eol-conversion-settings",children:e.jsx(i.code,{children:"working-copy.eol-conversion"})}),`, similar to
Git's `,e.jsx(i.a,{href:"https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#_core_autocrlf",children:e.jsx(i.code,{children:"core.autocrlf"})}),e.jsx(i.sup,{children:e.jsx(i.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),`, but does not currently honor
`,e.jsx(i.code,{children:".gitattributes"})," and the ",e.jsx(i.code,{children:"core.autocrlf"}),` git config, so it is recommended to
keep the `,e.jsx(i.code,{children:"working-copy.eol-conversion"})," setting and the ",e.jsx(i.code,{children:"core.autocrlf"}),` git
config in sync`,e.jsx(i.sup,{children:e.jsx(i.a,{href:"#user-content-fn-1",id:"user-content-fnref-1-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"."]}),`
`,e.jsx(i.p,{children:"!!! note"}),`
`,e.jsxs(i.p,{children:[`If you created a colocated git repo, forget to keep these 2 settings in
sync, and result in a dirty working copy with only EOL diffs, you can set
the `,e.jsx(i.code,{children:"working-copy.eol-conversion"})," setting correctly and run ",e.jsx(i.code,{children:"jj abandon"}),` to
fix it.`]}),`
`,e.jsxs(i.p,{children:[`The line endings conversion won't be applied to files detected as a binary files
via a heuristics`,e.jsx(i.sup,{children:e.jsx(i.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),` regardless of the settings. This behavior is subject to
change when we support the text git attribute.`]}),`
`,e.jsx(i.p,{children:`Jujutsu may make incorrect decision on whether a file is a binary file and apply
line conversion incorrectly, but currently, Jujutsu doesn't support configuring
line endings conversion for particular files. If this issue is hit, one should
not enable the line conversion setting.`}),`
`,e.jsx(i.p,{children:"!!! note"}),`
`,e.jsxs(i.p,{children:[`If Jujutsu applies line endings conversion on incorrect files, you should
not enable the line conversion setting and the git `,e.jsx(i.code,{children:"core.autocrlf"}),` setting.
See below.`]}),`
`,e.jsxs(i.p,{children:["To disable line conversion, set the ",e.jsx(i.code,{children:"core.autocrlf"})," setting to ",e.jsx(i.code,{children:"none"}),` or just
remove the setting.`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"PS"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" git config core.autocrlf input"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# We use none instead of input to avoid applying EOL conversion."})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"PS"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" jj config set "}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"--"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"repo working"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"-"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"copy.eol"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"-"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"conversion none"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# Abandoning the working copy will cause Jujutsu to overwrite all files with"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# CRLF line endings with the line endings they are committed with, probably LF"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"PS"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" jj abandon"})]})]})})}),`
`,e.jsx(i.p,{children:`This means that line endings will be checked out exactly as they are committed
and committed exactly as authored.`}),`
`,e.jsx(i.p,{children:`This setting ensures Git will check out files with LF line endings without
converting them to CRLF. You'll want to make sure any tooling you use,
especially IDEs, preserve LF line endings.`}),`
`,e.jsx(i.h2,{id:"pagination",children:"Pagination"}),`
`,e.jsxs(i.p,{children:["On Windows, ",e.jsx(i.code,{children:"jj"})," will use its integrated pager called ",e.jsx(i.code,{children:"streampager"}),` by default,
unless the environment variable `,e.jsx(i.code,{children:"%PAGER%"})," or the config ",e.jsx(i.code,{children:"ui.pager"}),` is explicitly
set. See the `,e.jsx(i.a,{href:"config#pager",children:"pager section of the config docs"}),` for more
details.`]}),`
`,e.jsx(i.p,{children:`If the built-in pager doesn't meet your needs and you have Git installed, you
can switch to using Git's pager as follows:`}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"PS"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" jj config set "}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"--"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"user ui.pager "}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:`'["C:\\\\Program Files\\\\Git\\\\usr\\\\bin\\\\less.exe", "-FRX"]'`})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"PS"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" jj config set "}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"--"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"user ui.paginate auto"})]})]})})}),`
`,e.jsxs(i.h2,{id:"typing--in-powershell",children:["Typing ",e.jsx(i.code,{children:"@"})," in PowerShell"]}),`
`,e.jsxs(i.p,{children:["PowerShell uses ",e.jsx(i.code,{children:"@"})," as part the ",e.jsx(i.a,{href:"https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_arrays?view=powershell-7.4#the-array-sub-expression-operator",children:"array sub-expression operator"}),`, so it
often needs to be escaped or quoted in commands:`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"PS"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" jj log "}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"-"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"r "}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"`"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"@"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"PS"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" jj log "}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"-"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"r "}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'@'"})]})]})})}),`
`,e.jsxs(i.p,{children:["One solution is to create a revset alias. For example, to make ",e.jsx(i.code,{children:"HEAD"}),` an alias
for `,e.jsx(i.code,{children:"@"}),":"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"PS"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" jj config set "}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"--"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"user revset"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"-"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"aliases.HEAD "}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'@'"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"PS"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" jj log "}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"-"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"r HEAD"})]})]})})}),`
`,e.jsx(i.h2,{id:"wsl-sets-the-execute-bit-on-all-files",children:"WSL sets the execute bit on all files"}),`
`,e.jsxs(i.p,{children:["When viewing a Windows drive from WSL (via ",e.jsx(i.em,{children:"/mnt/c"}),` or a similar path), Windows
exposes all files with the execute bit set. Since Jujutsu automatically records
changes to the working copy, this sets the execute bit on all files committed in
your repository.`]}),`
`,e.jsxs(i.p,{children:[`If you only need to access the repository in WSL, the best solution is to clone
the repository in the Linux file system (for example, in
`,e.jsx(i.code,{children:"~/my-repo"}),")."]}),`
`,e.jsx(i.p,{children:`If you need to use the repository in both WSL and Windows, one solution is to
create a workspace in the Linux file system:`}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"PS"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" jj workspace add "}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"--"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"name wsl ~"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"/"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"my"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"-"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"repo"})]})})})}),`
`,e.jsxs(i.p,{children:["Then only use the ",e.jsx(i.code,{children:"~/my-repo"})," workspace from Linux."]}),`
`,e.jsx(i.h2,{id:"symbolic-link-support",children:"Symbolic link support"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"jj"}),` supports symlinks on Windows only when they are enabled by the operating
system. This requires Windows 10 version 14972 or higher, as well as Developer
Mode. If those conditions are not satisfied, `,e.jsx(i.code,{children:"jj"}),` will materialize symlinks as
ordinary files.`]}),`
`,e.jsxs(i.p,{children:[`For colocated repositories, Git support must also be enabled using the
`,e.jsx(i.code,{children:"git config"})," option ",e.jsx(i.code,{children:"core.symlinks=true"}),"."]}),`
`,e.jsxs(i.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsx(i.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{id:"user-content-fn-1",children:[`
`,e.jsxs(i.p,{children:["This poses the question if we should support reading the ",e.jsx(i.code,{children:"core.autocrlf"}),`
setting in colocated repos. See details at the
`,e.jsx(i.a,{href:"https://github.com/jj-vcs/jj/issues/4048",children:"issue"}),". ",e.jsx(i.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})," ",e.jsxs(i.a,{href:"#user-content-fnref-1-2","data-footnote-backref":"","aria-label":"Back to reference 1-2",className:"data-footnote-backref",children:["↩",e.jsx(i.sup,{children:"2"})]})]}),`
`]}),`
`,e.jsxs(i.li,{id:"user-content-fn-2",children:[`
`,e.jsxs(i.p,{children:[`To detect if a file is binary, Jujutsu currently checks if there is 0 byte
in the file which is different from the algorithm of
`,e.jsx(i.a,{href:"https://github.com/GitoxideLabs/gitoxide/blob/073487b38ed40bcd7eb45dc110ae1ce84f9275a9/gix-filter/src/eol/utils.rs#L98-L100",children:e.jsx(i.code,{children:"gitoxide"})})," or ",e.jsx(i.a,{href:"https://github.com/git/git/blob/f1ca98f609f9a730b9accf24e5558a10a0b41b6c/convert.c#L94-L103",children:e.jsx(i.code,{children:"git"})}),`. Jujutsu
doesn't plan to align the binary detection logic with git. `,e.jsx(i.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function a(s={}){const{wrapper:i}=s.components||{};return i?e.jsx(i,{...s,children:e.jsx(n,{...s})}):n(s)}export{a as default,l as extractedReferences,o as frontmatter,r as structuredData,h as toc};
