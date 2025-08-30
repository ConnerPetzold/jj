import{j as e}from"./main-BYx1FFWF.js";const i="/assets/types-Cn9U8A0g.svg";let r={title:"Architecture"},s=[{href:"https://git-scm.com/book/en/v2/Git-Internals-Git-Objects"},{href:"/concepts/concurrency"},{href:"/concepts/concurrency#storage"}],c={contents:[{heading:"data-model",content:`The commit data model is similar
to Git's object model
, but with some differences.`},{heading:"separation-of-library-from-ui",content:`The jj binary consists of two Rust crates: the library crate (jj-lib) and
the CLI crate (jj-cli). The library crate is currently only used by the CLI
crate, but it is meant to also be usable from a GUI or TUI, or in a server
serving requests from multiple users. As a result, the library should avoid
interacting directly with the user via the terminal or by other means; all
input/output is handled by the CLI crate . Since the library crate is meant
to usable in a server, it also cannot read configuration from the user's home
directory, or from user-specific environment variables.`},{heading:"separation-of-library-from-ui",content:`There are a few exceptions, such as for messages printed during automatic
upgrades of the repo format`},{heading:"separation-of-library-from-ui",content:`A lot of thought has gone into making the library crate's API easy to use, but
not much has gone into "details" such as which collection types are used, or
which symbols are exposed in the API.`},{heading:"storage-independent-apis",content:`One overarching principle in the design is that it should be easy to change
where data is stored. The goal was to be able to put storage on local-disk by
default but also be able to move storage to the cloud at Google
(and for anyone). To that end, commits (and trees, files, etc.) are stored by
the commit backend, operations (and views) are stored by the operation backend,
the heads of the operation log are stored by the "op heads" backend, the commit
index is stored by the index backend, and the working copy is stored by the
working copy backend. The interfaces are defined in terms of plain Rust data
types, not tied to a specific format. The working copy doesn't have its own
trait defined yet, but its interface is small and easy to create traits for when
needed.`},{heading:"storage-independent-apis",content:`The commit backend to use when loading a repo is specified in
the .jj/repo/store/type file. There are similar files for the other backends
(.jj/repo/index/type, .jj/repo/op_store/type, .jj/repo/op_heads/type).`},{heading:"overview",content:`Here's a diagram showing some important types in the library crate, and how they
relate. For example, given a Workspace, you can use it to get a WorkingCopy
or a RepoLoader. A Transaction is required to acquire a MutableRepo, etc.
The following sections describe each component.`},{heading:"overview",content:`This diagram was created with Excalidraw. You can get a copy of it at this
location, and Right Click > "Copy to Clipboard as SVG".`},{heading:"backend",content:`The Backend trait defines the interface each
commit backend needs to implement. The current in-tree commit backends
are GitBackend
and SimpleBackend.`},{heading:"backend",content:`Since there are non-commit backends, the Backend trait should probably be
renamed to CommitBackend.`},{heading:"gitbackend",content:`The GitBackend stores commits in a Git repository. It uses libgit2 to read
and write commits and refs.`},{heading:"gitbackend",content:`To prevent GC from deleting commits that are still reachable from the operation
log, the GitBackend stores a ref for each commit in the operation log in
the refs/jj/keep/ namespace.`},{heading:"gitbackend",content:`Commit data that is available in Jujutsu's model but not in Git's model is
stored in a StackedTable in .jj/repo/store/extra/. That is currently the
change ID and the list of predecessors. For commits that don't have any data in
that table, which is any commit created by git, we use an empty list as
predecessors, and the bit-reversed commit ID as change ID.`},{heading:"gitbackend",content:`Because we use the Git Object ID as commit ID, two commits that differ only in
their change ID, for example, will get the same commit ID, so we error out when
trying to write the second one of them.`},{heading:"simplebackend",content:`The SimpleBackend is just a proof of concept. It stores objects addressed by
their hash, with one file per object.`},{heading:"store",content:`The Store type wraps the Backend and returns wrapped types for commits and
trees to make them easier to use. The wrapped objects have a reference to
the Store itself, so you can do e.g. commit.parents() without having to
provide the Store as an argument.`},{heading:"store",content:"The Store type also provides caching of commits and trees."},{heading:"readonlyrepo",content:`A ReadonlyRepo represents the state of a repo at a specific operation. It
keeps the view object associated with that operation.`},{heading:"readonlyrepo",content:`The repository doesn't know where on disk any working copies live. It knows, via
the view object, which commit is supposed to be the current working-copy commit
in each workspace.`},{heading:"mutablerepo",content:`A MutableRepo is a mutable version of ReadonlyRepo. It has a reference to
its base ReadonlyRepo, but it has its own copy of the view object and lets the
caller modify it.`},{heading:"transaction",content:`The Transaction object has a MutableRepo and metadata that will go into the
operation log. When the transaction commits, the MutableRepo becomes a view
object in the operation log on disk, and the Transaction object becomes an
operation object. In memory, Transaction::commit() returns a
new ReadonlyRepo.`},{heading:"repoloader",content:`The RepoLoader represents a repository at an unspecified operation. You can
think of as a pointer to the .jj/repo/ directory. It can create
a ReadonlyRepo given an operation ID.`},{heading:"treestate",content:`The TreeState type represents the state of the files in a working copy. It
keep track of the mtime and size for each tracked file. It knows the TreeId
that the working copy represents. It has a snapshot() method that will use the
recorded mtimes and sizes and detect changes in the working copy. If anything
changed, it will return a new TreeId. It also has checkout() for updating
the files on disk to match a requested TreeId.`},{heading:"treestate",content:`The TreeState type supports sparse checkouts. In fact, all working copies are
sparse; they simply track the full repo in most cases.`},{heading:"workingcopy",content:`The WorkingCopy type has a TreeState but also knows which WorkspaceName it
has and at which operation it was most recently updated.`},{heading:"workspace",content:`The Workspace type represents the combination of a repo and a working copy (
like Git's 'worktree' concept).`},{heading:"workspace",content:`The repo view at the current operation determines the desired working-copy
commit in each workspace. The WorkingCopy determines what is actually in the
working copy. The working copy can become stale if the working-copy commit was
changed from another workspace (or if the process updating the working copy
crashed, for example).`},{heading:"git",content:`The git module contains functionality for interoperating with a Git repo, at a
higher level than the GitBackend. The GitBackend is restricted by
the Backend trait; the git module is specifically for Git-backed repos. It
has functionality for importing refs from the Git repo and for exporting to refs
in the Git repo. It also has functionality for pushing and pulling to/from Git
remotes.`},{heading:"revsets",content:`A user-provided revset expression string goes through a few different stages to
be evaluated:`},{heading:"revsets",content:"Parse the expression into a RevsetExpression, which is close to an AST"},{heading:"revsets",content:`Resolve symbols and functions like tags() into specific commits. After
this stage, the expression is still a RevsetExpression, but it won't have
any CommitRef variants in it.`},{heading:"revsets",content:`Resolve visibility. This stage resolves visible_heads() and all() and
produces a ResolvedExpression.`},{heading:"revsets",content:"Evaluate the ResolvedExpression into a Revset."},{heading:"revsets",content:`This evaluation step is performed by Index::evaluate_revset(), allowing
the Revset implementation to leverage the specifics of a custom index
implementation. The first three steps are independent of the index
implementation.`},{heading:"stackedtable",content:`StackedTable (actually ReadonlyTable and MutableTable) is a simple disk
format for storing key-value pairs sorted by key. The keys have to have the same
size but the values can have different sizes. We use our own format because we
want lock-free concurrency and there doesn't seem to be an
existing key-value store we could use.`},{heading:"stackedtable",content:`The file format contains a lookup table followed by concatenated values. The
lookup table is a sorted list of keys, where each key is followed by the
associated value's offset in the concatenated values.`},{heading:"stackedtable",content:`A table can have a parent table. When looking up a key, if it's not found in the
current table, the parent table is searched. We never update a table in place.
If the number of new entries to write is less than half the number of entries in
the parent table, we create a new table with the new entries and a pointer to
the parent. Otherwise, we copy the entries from the parent table and the new
entries into a new table with the grandparent as the parent. We do that
recursively so parent tables are at least 2 times as large as child tables. This
results in O(log N) amortized insertion time and lookup time.`},{heading:"stackedtable",content:"There's no garbage collection of unreachable tables yet."},{heading:"stackedtable",content:`The tables are named by their hash. We keep a separate directory of pointers to
the current leaf tables, in the same way as we
do for the operation log.`},{heading:"templates",content:`The concept is copied from Mercurial, but the syntax is different. The main
difference is that the top-level expression is a template expression, not a
string like in Mercurial. There is also no string interpolation (e.g.
"Commit ID: {node}" in Mercurial).`},{heading:"diff-editing",content:`Diff-editing works by creating two very sparse working copies, containing only
the files we want the user to edit. We then let the user edit the right-hand
side of the diff. Then we simply snapshot that working copy to create the new
tree.`}],headings:[{id:"data-model",content:"Data model"},{id:"separation-of-library-from-ui",content:"Separation of library from UI"},{id:"storage-independent-apis",content:"Storage-independent APIs"},{id:"design-of-the-library-crate",content:"Design of the library crate"},{id:"overview",content:"Overview"},{id:"backend",content:"Backend"},{id:"gitbackend",content:"GitBackend"},{id:"simplebackend",content:"SimpleBackend"},{id:"store",content:"Store"},{id:"readonlyrepo",content:"ReadonlyRepo"},{id:"mutablerepo",content:"MutableRepo"},{id:"transaction",content:"Transaction"},{id:"repoloader",content:"RepoLoader"},{id:"treestate",content:"TreeState"},{id:"workingcopy",content:"WorkingCopy"},{id:"workspace",content:"Workspace"},{id:"git",content:"Git"},{id:"revsets",content:"Revsets"},{id:"stackedtable",content:"StackedTable"},{id:"design-of-the-cli-crate",content:"Design of the CLI crate"},{id:"templates",content:"Templates"},{id:"diff-editing",content:"Diff-editing"}]};const d=[{depth:2,url:"#data-model",title:e.jsx(e.Fragment,{children:"Data model"})},{depth:2,url:"#separation-of-library-from-ui",title:e.jsx(e.Fragment,{children:"Separation of library from UI"})},{depth:2,url:"#storage-independent-apis",title:e.jsx(e.Fragment,{children:"Storage-independent APIs"})},{depth:2,url:"#design-of-the-library-crate",title:e.jsx(e.Fragment,{children:"Design of the library crate"})},{depth:3,url:"#overview",title:e.jsx(e.Fragment,{children:"Overview"})},{depth:3,url:"#backend",title:e.jsx(e.Fragment,{children:"Backend"})},{depth:3,url:"#gitbackend",title:e.jsx(e.Fragment,{children:"GitBackend"})},{depth:3,url:"#simplebackend",title:e.jsx(e.Fragment,{children:"SimpleBackend"})},{depth:3,url:"#store",title:e.jsx(e.Fragment,{children:"Store"})},{depth:3,url:"#readonlyrepo",title:e.jsx(e.Fragment,{children:"ReadonlyRepo"})},{depth:3,url:"#mutablerepo",title:e.jsx(e.Fragment,{children:"MutableRepo"})},{depth:3,url:"#transaction",title:e.jsx(e.Fragment,{children:"Transaction"})},{depth:3,url:"#repoloader",title:e.jsx(e.Fragment,{children:"RepoLoader"})},{depth:3,url:"#treestate",title:e.jsx(e.Fragment,{children:"TreeState"})},{depth:3,url:"#workingcopy",title:e.jsx(e.Fragment,{children:"WorkingCopy"})},{depth:3,url:"#workspace",title:e.jsx(e.Fragment,{children:"Workspace"})},{depth:3,url:"#git",title:e.jsx(e.Fragment,{children:"Git"})},{depth:3,url:"#revsets",title:e.jsx(e.Fragment,{children:"Revsets"})},{depth:3,url:"#stackedtable",title:e.jsx(e.Fragment,{children:"StackedTable"})},{depth:2,url:"#design-of-the-cli-crate",title:e.jsx(e.Fragment,{children:"Design of the CLI crate"})},{depth:3,url:"#templates",title:e.jsx(e.Fragment,{children:"Templates"})},{depth:3,url:"#diff-editing",title:e.jsx(e.Fragment,{children:"Diff-editing"})},{depth:2,url:"#footnote-label",title:e.jsx(e.Fragment,{children:"Footnotes"})}];function o(n){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h2,{id:"data-model",children:"Data model"}),`
`,e.jsxs(t.p,{children:[`The commit data model is similar
to `,e.jsx(t.a,{href:"https://git-scm.com/book/en/v2/Git-Internals-Git-Objects",children:"Git's object model"}),`
, but with some differences.`]}),`
`,e.jsx(t.h2,{id:"separation-of-library-from-ui",children:"Separation of library from UI"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"jj"})," binary consists of two Rust crates: the library crate (",e.jsx(t.code,{children:"jj-lib"}),`) and
the CLI crate (`,e.jsx(t.code,{children:"jj-cli"}),`). The library crate is currently only used by the CLI
crate, but it is meant to also be usable from a GUI or TUI, or in a server
serving requests from multiple users. As a result, the library should avoid
interacting directly with the user via the terminal or by other means; all
input/output is handled by the CLI crate `,e.jsx(t.sup,{children:e.jsx(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),`. Since the library crate is meant
to usable in a server, it also cannot read configuration from the user's home
directory, or from user-specific environment variables.`]}),`
`,e.jsx(t.p,{children:`A lot of thought has gone into making the library crate's API easy to use, but
not much has gone into "details" such as which collection types are used, or
which symbols are exposed in the API.`}),`
`,e.jsx(t.h2,{id:"storage-independent-apis",children:"Storage-independent APIs"}),`
`,e.jsx(t.p,{children:`One overarching principle in the design is that it should be easy to change
where data is stored. The goal was to be able to put storage on local-disk by
default but also be able to move storage to the cloud at Google
(and for anyone). To that end, commits (and trees, files, etc.) are stored by
the commit backend, operations (and views) are stored by the operation backend,
the heads of the operation log are stored by the "op heads" backend, the commit
index is stored by the index backend, and the working copy is stored by the
working copy backend. The interfaces are defined in terms of plain Rust data
types, not tied to a specific format. The working copy doesn't have its own
trait defined yet, but its interface is small and easy to create traits for when
needed.`}),`
`,e.jsxs(t.p,{children:[`The commit backend to use when loading a repo is specified in
the `,e.jsx(t.code,{children:".jj/repo/store/type"}),` file. There are similar files for the other backends
(`,e.jsx(t.code,{children:".jj/repo/index/type"}),", ",e.jsx(t.code,{children:".jj/repo/op_store/type"}),", ",e.jsx(t.code,{children:".jj/repo/op_heads/type"}),")."]}),`
`,e.jsx(t.h2,{id:"design-of-the-library-crate",children:"Design of the library crate"}),`
`,e.jsx(t.h3,{id:"overview",children:"Overview"}),`
`,e.jsxs(t.p,{children:[`Here's a diagram showing some important types in the library crate, and how they
relate. For example, given a `,e.jsx(t.code,{children:"Workspace"}),", you can use it to get a ",e.jsx(t.code,{children:"WorkingCopy"}),`
or a `,e.jsx(t.code,{children:"RepoLoader"}),". A ",e.jsx(t.code,{children:"Transaction"})," is required to acquire a ",e.jsx(t.code,{children:"MutableRepo"}),`, etc.
The following sections describe each component.`]}),`
`,e.jsx(t.p,{children:e.jsx(t.img,{alt:"Type diagram",src:i})}),`
`,e.jsx(t.p,{children:e.jsxs(t.em,{children:["This diagram was created with ",e.jsx(t.a,{href:"https://excalidraw.com/",children:"Excalidraw"}),". You can get a copy of it ",e.jsx(t.a,{href:"https://excalidraw.com/#json=X081PJVRW2h4iW12qZxc1,H2Yg3qnycVG0Vpq5Z90Miw",children:`at this
location`}),', and Right Click > "Copy to Clipboard as SVG".']})}),`
`,e.jsx(t.h3,{id:"backend",children:"Backend"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Backend"}),` trait defines the interface each
commit backend needs to implement. The current in-tree commit backends
are `,e.jsx(t.code,{children:"GitBackend"}),`
and `,e.jsx(t.code,{children:"SimpleBackend"}),"."]}),`
`,e.jsxs(t.p,{children:["Since there are non-commit backends, the ",e.jsx(t.code,{children:"Backend"}),` trait should probably be
renamed to `,e.jsx(t.code,{children:"CommitBackend"}),"."]}),`
`,e.jsx(t.h3,{id:"gitbackend",children:"GitBackend"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"GitBackend"})," stores commits in a Git repository. It uses ",e.jsx(t.code,{children:"libgit2"}),` to read
and write commits and refs.`]}),`
`,e.jsxs(t.p,{children:[`To prevent GC from deleting commits that are still reachable from the operation
log, the `,e.jsx(t.code,{children:"GitBackend"}),` stores a ref for each commit in the operation log in
the `,e.jsx(t.code,{children:"refs/jj/keep/"})," namespace."]}),`
`,e.jsxs(t.p,{children:[`Commit data that is available in Jujutsu's model but not in Git's model is
stored in a `,e.jsx(t.code,{children:"StackedTable"})," in ",e.jsx(t.code,{children:".jj/repo/store/extra/"}),`. That is currently the
change ID and the list of predecessors. For commits that don't have any data in
that table, which is any commit created by `,e.jsx(t.code,{children:"git"}),`, we use an empty list as
predecessors, and the bit-reversed commit ID as change ID.`]}),`
`,e.jsx(t.p,{children:`Because we use the Git Object ID as commit ID, two commits that differ only in
their change ID, for example, will get the same commit ID, so we error out when
trying to write the second one of them.`}),`
`,e.jsx(t.h3,{id:"simplebackend",children:"SimpleBackend"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"SimpleBackend"}),` is just a proof of concept. It stores objects addressed by
their hash, with one file per object.`]}),`
`,e.jsx(t.h3,{id:"store",children:"Store"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Store"})," type wraps the ",e.jsx(t.code,{children:"Backend"}),` and returns wrapped types for commits and
trees to make them easier to use. The wrapped objects have a reference to
the `,e.jsx(t.code,{children:"Store"})," itself, so you can do e.g. ",e.jsx(t.code,{children:"commit.parents()"}),` without having to
provide the `,e.jsx(t.code,{children:"Store"})," as an argument."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Store"})," type also provides caching of commits and trees."]}),`
`,e.jsx(t.h3,{id:"readonlyrepo",children:"ReadonlyRepo"}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.code,{children:"ReadonlyRepo"}),` represents the state of a repo at a specific operation. It
keeps the view object associated with that operation.`]}),`
`,e.jsx(t.p,{children:`The repository doesn't know where on disk any working copies live. It knows, via
the view object, which commit is supposed to be the current working-copy commit
in each workspace.`}),`
`,e.jsx(t.h3,{id:"mutablerepo",children:"MutableRepo"}),`
`,e.jsxs(t.p,{children:["A ",e.jsx(t.code,{children:"MutableRepo"})," is a mutable version of ",e.jsx(t.code,{children:"ReadonlyRepo"}),`. It has a reference to
its base `,e.jsx(t.code,{children:"ReadonlyRepo"}),`, but it has its own copy of the view object and lets the
caller modify it.`]}),`
`,e.jsx(t.h3,{id:"transaction",children:"Transaction"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Transaction"})," object has a ",e.jsx(t.code,{children:"MutableRepo"}),` and metadata that will go into the
operation log. When the transaction commits, the `,e.jsx(t.code,{children:"MutableRepo"}),` becomes a view
object in the operation log on disk, and the `,e.jsx(t.code,{children:"Transaction"}),` object becomes an
operation object. In memory, `,e.jsx(t.code,{children:"Transaction::commit()"}),` returns a
new `,e.jsx(t.code,{children:"ReadonlyRepo"}),"."]}),`
`,e.jsx(t.h3,{id:"repoloader",children:"RepoLoader"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"RepoLoader"}),` represents a repository at an unspecified operation. You can
think of as a pointer to the `,e.jsx(t.code,{children:".jj/repo/"}),` directory. It can create
a `,e.jsx(t.code,{children:"ReadonlyRepo"})," given an operation ID."]}),`
`,e.jsx(t.h3,{id:"treestate",children:"TreeState"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"TreeState"}),` type represents the state of the files in a working copy. It
keep track of the mtime and size for each tracked file. It knows the `,e.jsx(t.code,{children:"TreeId"}),`
that the working copy represents. It has a `,e.jsx(t.code,{children:"snapshot()"}),` method that will use the
recorded mtimes and sizes and detect changes in the working copy. If anything
changed, it will return a new `,e.jsx(t.code,{children:"TreeId"}),". It also has ",e.jsx(t.code,{children:"checkout()"}),` for updating
the files on disk to match a requested `,e.jsx(t.code,{children:"TreeId"}),"."]}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"TreeState"}),` type supports sparse checkouts. In fact, all working copies are
sparse; they simply track the full repo in most cases.`]}),`
`,e.jsx(t.h3,{id:"workingcopy",children:"WorkingCopy"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"WorkingCopy"})," type has a ",e.jsx(t.code,{children:"TreeState"})," but also knows which ",e.jsx(t.code,{children:"WorkspaceName"}),` it
has and at which operation it was most recently updated.`]}),`
`,e.jsx(t.h3,{id:"workspace",children:"Workspace"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"Workspace"}),` type represents the combination of a repo and a working copy (
like Git's 'worktree' concept).`]}),`
`,e.jsxs(t.p,{children:[`The repo view at the current operation determines the desired working-copy
commit in each workspace. The `,e.jsx(t.code,{children:"WorkingCopy"}),` determines what is actually in the
working copy. The working copy can become stale if the working-copy commit was
changed from another workspace (or if the process updating the working copy
crashed, for example).`]}),`
`,e.jsx(t.h3,{id:"git",children:"Git"}),`
`,e.jsxs(t.p,{children:["The ",e.jsx(t.code,{children:"git"}),` module contains functionality for interoperating with a Git repo, at a
higher level than the `,e.jsx(t.code,{children:"GitBackend"}),". The ",e.jsx(t.code,{children:"GitBackend"}),` is restricted by
the `,e.jsx(t.code,{children:"Backend"})," trait; the ",e.jsx(t.code,{children:"git"}),` module is specifically for Git-backed repos. It
has functionality for importing refs from the Git repo and for exporting to refs
in the Git repo. It also has functionality for pushing and pulling to/from Git
remotes.`]}),`
`,e.jsx(t.h3,{id:"revsets",children:"Revsets"}),`
`,e.jsx(t.p,{children:`A user-provided revset expression string goes through a few different stages to
be evaluated:`}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{children:["Parse the expression into a ",e.jsx(t.code,{children:"RevsetExpression"}),", which is close to an AST"]}),`
`,e.jsxs(t.li,{children:["Resolve symbols and functions like ",e.jsx(t.code,{children:"tags()"}),` into specific commits. After
this stage, the expression is still a `,e.jsx(t.code,{children:"RevsetExpression"}),`, but it won't have
any `,e.jsx(t.code,{children:"CommitRef"})," variants in it."]}),`
`,e.jsxs(t.li,{children:["Resolve visibility. This stage resolves ",e.jsx(t.code,{children:"visible_heads()"})," and ",e.jsx(t.code,{children:"all()"}),` and
produces a `,e.jsx(t.code,{children:"ResolvedExpression"}),"."]}),`
`,e.jsxs(t.li,{children:["Evaluate the ",e.jsx(t.code,{children:"ResolvedExpression"})," into a ",e.jsx(t.code,{children:"Revset"}),"."]}),`
`]}),`
`,e.jsxs(t.p,{children:["This evaluation step is performed by ",e.jsx(t.code,{children:"Index::evaluate_revset()"}),`, allowing
the `,e.jsx(t.code,{children:"Revset"}),` implementation to leverage the specifics of a custom index
implementation. The first three steps are independent of the index
implementation.`]}),`
`,e.jsx(t.h3,{id:"stackedtable",children:"StackedTable"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"StackedTable"})," (actually ",e.jsx(t.code,{children:"ReadonlyTable"})," and ",e.jsx(t.code,{children:"MutableTable"}),`) is a simple disk
format for storing key-value pairs sorted by key. The keys have to have the same
size but the values can have different sizes. We use our own format because we
want `,e.jsx(t.a,{href:"/concepts/concurrency",children:"lock-free concurrency"}),` and there doesn't seem to be an
existing key-value store we could use.`]}),`
`,e.jsx(t.p,{children:`The file format contains a lookup table followed by concatenated values. The
lookup table is a sorted list of keys, where each key is followed by the
associated value's offset in the concatenated values.`}),`
`,e.jsx(t.p,{children:`A table can have a parent table. When looking up a key, if it's not found in the
current table, the parent table is searched. We never update a table in place.
If the number of new entries to write is less than half the number of entries in
the parent table, we create a new table with the new entries and a pointer to
the parent. Otherwise, we copy the entries from the parent table and the new
entries into a new table with the grandparent as the parent. We do that
recursively so parent tables are at least 2 times as large as child tables. This
results in O(log N) amortized insertion time and lookup time.`}),`
`,e.jsx(t.p,{children:"There's no garbage collection of unreachable tables yet."}),`
`,e.jsxs(t.p,{children:[`The tables are named by their hash. We keep a separate directory of pointers to
the current leaf tables, in the same way as we
do `,e.jsx(t.a,{href:"/concepts/concurrency#storage",children:"for the operation log"}),"."]}),`
`,e.jsx(t.h2,{id:"design-of-the-cli-crate",children:"Design of the CLI crate"}),`
`,e.jsx(t.h3,{id:"templates",children:"Templates"}),`
`,e.jsxs(t.p,{children:[`The concept is copied from Mercurial, but the syntax is different. The main
difference is that the top-level expression is a template expression, not a
string like in Mercurial. There is also no string interpolation (e.g.
`,e.jsx(t.code,{children:'"Commit ID: {node}"'})," in Mercurial)."]}),`
`,e.jsx(t.h3,{id:"diff-editing",children:"Diff-editing"}),`
`,e.jsx(t.p,{children:`Diff-editing works by creating two very sparse working copies, containing only
the files we want the user to edit. We then let the user edit the right-hand
side of the diff. Then we simply snapshot that working copy to create the new
tree.`}),`
`,e.jsxs(t.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsx(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),`
`,e.jsxs(t.ol,{children:[`
`,e.jsxs(t.li,{id:"user-content-fn-1",children:[`
`,e.jsxs(t.p,{children:[`There are a few exceptions, such as for messages printed during automatic
upgrades of the repo format `,e.jsx(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function h(n={}){const{wrapper:t}=n.components||{};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{h as default,s as extractedReferences,r as frontmatter,c as structuredData,d as toc};
