import{j as e}from"./main-BYx1FFWF.js";let o={title:"Revsets"},r=[{href:"https://www.mercurial-scm.org/repo/hg/help/revsets"},{href:"glossary#visible-commits"},{href:"#functions"},{href:"#string-patterns"},{href:"#string-patterns"},{href:"#string-patterns"},{href:"https://repo.mercurial-scm.org/hg/help/revsets"},{href:"https://repo.mercurial-scm.org/hg/help/revsets"},{href:"#string-patterns"},{href:"#string-patterns"},{href:"#string-patterns"},{href:"#string-patterns"},{href:"#string-patterns"},{href:"#date-patterns"},{href:"#string-patterns"},{href:"#string-patterns"},{href:"#string-patterns"},{href:"#date-patterns"},{href:"/reference/filesets"},{href:"https://docs.rs/globset/latest/globset/#syntax"},{href:"https://docs.rs/regex/latest/regex/#syntax"},{href:"https://github.com/jj-vcs/jj/blob/main/cli/src/config/revsets.toml"},{href:"/reference/config"},{href:"config#set-of-immutable-commits"},{href:"#string-patterns"}],a={contents:[{heading:void 0,content:`Jujutsu supports a functional language for selecting a set of revisions.
Expressions in this language are called "revsets" (the idea comes from
Mercurial). The language
consists of symbols, operators, and functions.`},{heading:void 0,content:`Most jj commands accept a revset (or multiple). Many commands, such as
jj edit <revset> expect the revset to resolve to a single commit; it is an
error to pass a revset that resolves to more than one commit (or zero commits)
to such commands.`},{heading:void 0,content:'The words "revisions" and "commits" are used interchangeably in this document.'},{heading:"hidden-revisions",content:`Most revsets search only the visible commits.
Other commits are only included if you explicitly mention them (e.g. by commit
ID, <name>@<remote> symbol, or at_operation() function).`},{heading:"hidden-revisions",content:`If hidden commits are specified, their ancestors also become available to the
search space. They are included in all(), x.., ~x, etc., but not in
..visible_heads(), etc. For example, hidden_id | all() is equivalent to
hidden_id | ::(hidden_id | visible_heads()).`},{heading:"symbols",content:`The @ expression refers to the working copy commit in the current workspace.
Use <workspace name>@ to refer to the working-copy commit in another
workspace. Use <name>@<remote> to refer to a remote-tracking bookmark.`},{heading:"symbols",content:`A full commit ID refers to a single commit. A unique prefix of the full commit
ID can also be used. It is an error to use a non-unique prefix.`},{heading:"symbols",content:`A full change ID refers to a visible commit with that change ID. A unique prefix
of the full change ID can also be used. It is an error to use a non-unique
prefix or a divergent change ID.`},{heading:"symbols",content:`Use single or double quotes to prevent a symbol from being
interpreted as an expression. For example, "x-" is the symbol x-, not the
parents of symbol x. Taking shell quoting into account, you may need to use
something like jj log -r '"x-"'.`},{heading:"priority",content:"Jujutsu attempts to resolve a symbol in the following order:"},{heading:"priority",content:"Tag name"},{heading:"priority",content:"Bookmark name"},{heading:"priority",content:"Git ref"},{heading:"priority",content:"Commit ID or change ID"},{heading:"priority",content:`To override the priority, use the appropriate revset function. For
example, to resolve abc as a commit ID even if there happens to be a bookmark
by the same name, use commit_id(abc). This is particularly useful in scripts.`},{heading:"operators",content:`The following operators are supported. x and y below can be any revset, not
only symbols.`},{heading:"operators",content:"x-: Parents of x, can be empty."},{heading:"operators",content:"x+: Children of x, can be empty."},{heading:"operators",content:`x::: Descendants of x, including the commits in x itself. Equivalent to
x::visible_heads() if no hidden revisions are mentioned.`},{heading:"operators",content:`x..: Revisions that are not ancestors of x. Equivalent to ~::x, and
x..visible_heads() if no hidden revisions are mentioned.`},{heading:"operators",content:`::x: Ancestors of x, including the commits in x itself. Shorthand for
root()::x.`},{heading:"operators",content:`..x: Ancestors of x, including the commits in x itself, but excluding
the root commit. Shorthand for root()..x. Equivalent to ::x ~ root().`},{heading:"operators",content:`x::y: Descendants of x that are also ancestors of y. Equivalent
to x:: & ::y. This is what git log calls --ancestry-path x..y.`},{heading:"operators",content:`x..y: Ancestors of y that are not also ancestors of x. Equivalent to
::y ~ ::x. This is what git log calls x..y (i.e. the same as we call it).`},{heading:"operators",content:`::: All visible commits in the repo. Equivalent to all(), and
root()::visible_heads() if no hidden revisions are mentioned.`},{heading:"operators",content:`..: All visible commits in the repo, but excluding the root commit.
Equivalent to ~root(), and root()..visible_heads() if no hidden revisions
are mentioned.`},{heading:"operators",content:"~x: Revisions that are not in x."},{heading:"operators",content:"x & y: Revisions that are in both x and y."},{heading:"operators",content:"x ~ y: Revisions that are in x but not in y."},{heading:"operators",content:"x | y: Revisions that are in either x or y (or both)."},{heading:"operators",content:"(listed in order of binding strengths)"},{heading:"operators",content:`You can use parentheses to control evaluation order, such as (x & y) | z or
x & (y | z).`},{heading:"operators",content:"??? examples"},{heading:"operators",content:"Given this history:"},{heading:"operators",content:"Operator x-"},{heading:"operators",content:"D- ⇒ {C,B}"},{heading:"operators",content:"B- ⇒ {A}"},{heading:"operators",content:"A- ⇒ {root()}"},{heading:"operators",content:"root()- ⇒ {} (empty set)"},{heading:"operators",content:"none()- ⇒ {} (empty set)"},{heading:"operators",content:"(D|A)- ⇒ {C,B,root()}"},{heading:"operators",content:"(C|B)- ⇒ {A}"},{heading:"operators",content:"Operator x+"},{heading:"operators",content:"D+ ⇒ {} (empty set)"},{heading:"operators",content:"B+ ⇒ {D}"},{heading:"operators",content:"A+ ⇒ {B,C}"},{heading:"operators",content:"root()+ ⇒ {A}"},{heading:"operators",content:"none()+ ⇒ {} (empty set)"},{heading:"operators",content:"(C|B)+ ⇒ {D}"},{heading:"operators",content:"(B|root())+ ⇒ {D,A}"},{heading:"operators",content:"Operator x::"},{heading:"operators",content:"D:: ⇒ {D}"},{heading:"operators",content:"B:: ⇒ {D,B}"},{heading:"operators",content:"A:: ⇒ {D,C,B,A}"},{heading:"operators",content:"root():: ⇒ {D,C,B,A,root()}"},{heading:"operators",content:"none():: ⇒ {} (empty set)"},{heading:"operators",content:"(C|B):: ⇒ {D,C,B}"},{heading:"operators",content:"Operator x.."},{heading:"operators",content:"D.. ⇒ {} (empty set)"},{heading:"operators",content:"B.. ⇒ {D,C} (note that, unlike B::, this includes C)"},{heading:"operators",content:"A.. ⇒ {D,C,B}"},{heading:"operators",content:"root().. ⇒ {D,C,B,A}"},{heading:"operators",content:"none().. ⇒ {D,C,B,A,root()}"},{heading:"operators",content:"(C|B).. ⇒ {D}"},{heading:"operators",content:"Operator ::x"},{heading:"operators",content:"::D ⇒ {D,C,B,A,root()}"},{heading:"operators",content:"::B ⇒ {B,A,root()}"},{heading:"operators",content:"::A ⇒ {A,root()}"},{heading:"operators",content:"::root() ⇒ {root()}"},{heading:"operators",content:"::none() ⇒ {} (empty set)"},{heading:"operators",content:"::(C|B) ⇒ {C,B,A,root()}"},{heading:"operators",content:"Operator ..x"},{heading:"operators",content:"..D ⇒ {D,C,B,A}"},{heading:"operators",content:"..B ⇒ {B,A}"},{heading:"operators",content:"..A ⇒ {A}"},{heading:"operators",content:"..root() ⇒ {} (empty set)"},{heading:"operators",content:"..none() ⇒ {} (empty set)"},{heading:"operators",content:"..(C|B) ⇒ {C,B,A}"},{heading:"operators",content:"Operator x::y"},{heading:"operators",content:"D::D ⇒ {D}"},{heading:"operators",content:"B::D ⇒ {D,B} (note that, unlike B..D, this includes B and excludes C)"},{heading:"operators",content:"B::C ⇒ {} (empty set) (note that, unlike B..C, this excludes C)"},{heading:"operators",content:"A::D ⇒ {D,C,B,A}"},{heading:"operators",content:"root()::D ⇒ {D,C,B,A,root()}"},{heading:"operators",content:"none()::D ⇒ {} (empty set)"},{heading:"operators",content:"D::B ⇒ {} (empty set)"},{heading:"operators",content:"(C|B)::(C|B) ⇒ {C,B}"},{heading:"operators",content:"Operator x..y"},{heading:"operators",content:"D..D ⇒ {} (empty set)"},{heading:"operators",content:"B..D ⇒ {D,C} (note that, unlike B::D, this includes C and excludes B)"},{heading:"operators",content:"B..C ⇒ {C} (note that, unlike B::C, this includes C)"},{heading:"operators",content:"A..D ⇒ {D,C,B}"},{heading:"operators",content:"root()..D ⇒ {D,C,B,A}"},{heading:"operators",content:"none()..D ⇒ {D,C,B,A,root()}"},{heading:"operators",content:"D..B ⇒ {} (empty set)"},{heading:"operators",content:"(C|B)..(C|B) ⇒ {} (empty set)"},{heading:"functions",content:`You can also specify revisions by using functions. Some functions take other
revsets (expressions) as arguments.`},{heading:"functions",content:'??? note "Function argument syntax"'},{heading:"functions",content:`In this documentation, optional arguments are indicated with square
brackets like [arg]. Some arguments also have an optional label which can
be used to specify that argument without specifying all previous arguments.`},{heading:"functions",content:`For instance, remote_bookmarks([bookmark_pattern], [[remote=]remote_pattern])
indicates that all of the following usages are valid:`},{heading:"functions",content:"remote_bookmarks()"},{heading:"functions",content:'remote_bookmarks("main")'},{heading:"functions",content:'remote_bookmarks("main", "origin")'},{heading:"functions",content:'remote_bookmarks("main", remote="origin")'},{heading:"functions",content:'remote_bookmarks(remote="origin")'},{heading:"functions",content:`parents(x, [depth]): parents(x) is the same as x-.
parents(x, depth) returns the parents of x at the given depth. For
instance, parents(x, 3) is equivalent to x---.`},{heading:"functions",content:`children(x, [depth]): children(x) is the same as x+.
children(x, depth) returns the children of x at the given depth. For
instance, children(x, 3) is equivalent to x+++.`},{heading:"functions",content:`ancestors(x, [depth]): ancestors(x) is the same as ::x.
ancestors(x, depth) returns the ancestors of x limited to the given
depth.`},{heading:"functions",content:`descendants(x, [depth]): descendants(x) is the same as x::.
descendants(x, depth) returns the descendants of x limited to the given
depth.`},{heading:"functions",content:`first_parent(x, [depth]): first_parent(x) is similar to parents(x), but
for merges, it only returns the first parent instead of returning all parents.
The depth argument also works similarly, so first_parent(x, 2) is
equivalent to first_parent(first_parent(x)).`},{heading:"functions",content:`first_ancestors(x, [depth]): Similar to ancestors(x, [depth]), but only
traverses the first parent of each commit. In Git, the first parent of a merge
commit is conventionally the branch into which changes are being merged, so
first_ancestors() can be used to exclude changes made on other branches.`},{heading:"functions",content:`reachable(srcs, domain): All commits reachable from srcs within
domain, traversing all parent and child edges.`},{heading:"functions",content:"connected(x): Same as x::x. Useful when x includes several commits."},{heading:"functions",content:"all(): All visible commits and ancestors of commits explicitly mentioned."},{heading:"functions",content:`none(): No commits. This function is rarely useful; it is provided for
completeness.`},{heading:"functions",content:`change_id(prefix): Commits with the given change ID prefix. If the specified
change is divergent, this resolves to multiple commits. It is an error to use a
non-unique prefix. Unmatched prefix isn't an error.`},{heading:"functions",content:`commit_id(prefix): Commits with the given commit ID prefix. It is an error
to use a non-unique prefix. Unmatched prefix isn't an error.`},{heading:"functions",content:`bookmarks([pattern]): All local bookmark targets. If pattern is specified,
this selects the bookmarks whose name match the given string
pattern. For example, bookmarks(push) would match the
bookmarks push-123 and repushed but not the bookmark main. If a bookmark is
in a conflicted state, all its possible targets are included.`},{heading:"functions",content:`remote_bookmarks([bookmark_pattern], [[remote=]remote_pattern]): All remote
bookmarks targets across all remotes. If just the bookmark_pattern is
specified, the bookmarks whose names match the given string
pattern across all remotes are selected. If both
bookmark_pattern and remote_pattern are specified, the selection is
further restricted to just the remotes whose names match remote_pattern.`},{heading:"functions",content:`For example, remote_bookmarks(push, ri) would match the bookmarks
push-123@origin and repushed@private but not push-123@upstream or
main@origin or main@upstream. If a bookmark is in a conflicted state, all
its possible targets are included.`},{heading:"functions",content:`While Git-tracking bookmarks can be selected by <name>@git, these bookmarks
aren't included in remote_bookmarks().`},{heading:"functions",content:`tracked_remote_bookmarks([bookmark_pattern], [[remote=]remote_pattern]): All
targets of tracked remote bookmarks. Supports the same optional arguments as
remote_bookmarks().`},{heading:"functions",content:`untracked_remote_bookmarks([bookmark_pattern], [[remote=]remote_pattern]):
All targets of untracked remote bookmarks. Supports the same optional arguments
as remote_bookmarks().`},{heading:"functions",content:`tags([pattern]): All tag targets. If pattern is specified,
this selects the tags whose name match the given string
pattern. For example, tags(v1) would match the
tags v123 and rev1 but not the tag v2. If a tag is
in a conflicted state, all its possible targets are included.`},{heading:"functions",content:`git_refs(): All Git ref targets as of the last import. If a Git ref
is in a conflicted state, all its possible targets are included.`},{heading:"functions",content:"git_head(): The Git HEAD target as of the last import."},{heading:"functions",content:`visible_heads(): All visible heads (same as heads(all()) if no hidden
revisions are mentioned).`},{heading:"functions",content:"root(): The virtual commit that is the oldest ancestor of all other commits."},{heading:"functions",content:`heads(x): Commits in x that are not ancestors of other commits in x.
Equivalent to x ~ ::x-. Note that this is different from
Mercurial's heads(x)
function, which is equivalent to x ~ x-.`},{heading:"functions",content:`roots(x): Commits in x that are not descendants of other commits in x.
Equivalent to x ~ x+::. Note that this is different from
Mercurial's roots(x)
function, which is equivalent to x ~ x+.`},{heading:"functions",content:`latest(x, [count]): Latest count commits in x, based on committer
timestamp. The default count is 1.`},{heading:"functions",content:`fork_point(x): The fork point of all commits in x. The fork point is the
common ancestor(s) of all commits in x which do not have any descendants
that are also common ancestors of all commits in x. It is equivalent to
the revset heads(::x_1 & ::x_2 & ... & ::x_N), where x_{1..N} are commits
in x. If x resolves to a single commit, fork_point(x) resolves to x.`},{heading:"functions",content:`bisect(x): Finds commits in the input set for which about half of the input
set are descendants. The current implementation deals somewhat poorly with
non-linear history.`},{heading:"functions",content:"merges(): Merge commits."},{heading:"functions",content:`description(pattern): Commits that have a description matching the given
string pattern.`},{heading:"functions",content:`A non-empty description is usually terminated with newline character. For
example, description(exact:"") matches commits without description, and
description(exact:"foo\\n") matches commits with description "foo\\n".`},{heading:"functions",content:`subject(pattern): Commits that have a subject matching the given string
pattern. A subject is the first line of the description
(without newline character.)`},{heading:"functions",content:`author(pattern): Commits with the author's name or email matching the given
string pattern. Equivalent to author_name(pattern) |
author_email(pattern).`},{heading:"functions",content:`author_name(pattern): Commits with the author's name matching the given
string pattern.`},{heading:"functions",content:`author_email(pattern): Commits with the author's email matching the given
string pattern.`},{heading:"functions",content:`author_date(pattern): Commits with author dates matching the specified date
pattern.`},{heading:"functions",content:`mine(): Commits where the author's email matches the email of the current
user. Equivalent to author_email(exact-i:<user-email>)`},{heading:"functions",content:`committer(pattern): Commits with the committer's name or email matching the
given string pattern. Equivalent to
committer_name(pattern) | committer_email(pattern).`},{heading:"functions",content:`committer_name(pattern): Commits with the committer's name matching the
given string pattern.`},{heading:"functions",content:`committer_email(pattern): Commits with the committer's email matching the
given string pattern.`},{heading:"functions",content:`committer_date(pattern): Commits with committer dates matching the specified
date pattern.`},{heading:"functions",content:"signed(): Commits that are cryptographically signed."},{heading:"functions",content:`empty(): Commits modifying no files. This also includes merges() without
user modifications and root().`},{heading:"functions",content:`files(expression): Commits modifying paths matching the given fileset
expression.`},{heading:"functions",content:`Paths are relative to the directory jj was invoked from. A directory name
will match all files in that directory and its subdirectories.`},{heading:"functions",content:`For example, files(foo) will match files foo, foo/bar, foo/bar/baz.
It will not match foobar or bar/foo.`},{heading:"functions",content:`Some file patterns might need quoting because the expression must also be
parsable as a revset. For example, . has to be quoted in files(".").`},{heading:"functions",content:`diff_contains(text, [files]): Commits containing diffs matching the given
text pattern line by line.`},{heading:"functions",content:`The search paths can be narrowed by the files expression. All modified files
are scanned by default, but it is likely to change in future version to
respect the command line path arguments.`},{heading:"functions",content:`For example, diff_contains("TODO", "src") will search revisions where "TODO"
is added to or removed from files under "src".`},{heading:"functions",content:"conflicts(): Commits with conflicts."},{heading:"functions",content:`present(x): Same as x, but evaluated to none() if any of the commits
in x doesn't exist (e.g. is an unknown bookmark name.)`},{heading:"functions",content:`coalesce(revsets...): Commits in the first revset in the list of revsets
which does not evaluate to none(). If all revsets evaluate to none(), then
the result of coalesce will also be none().`},{heading:"functions",content:"working_copies(): The working copy commits across all the workspaces."},{heading:"functions",content:`at_operation(op, x): Evaluates x at the specified operation. For
example, at_operation(@-, visible_heads()) will return all heads which were
visible at the previous operation.`},{heading:"functions",content:`Since at_operation(op, x) brings all commits that were visible at the
operation to the search space, at_operation(op, x) | all() is equivalent to
at_operation(op, x) | ::(at_operation(op, x | visible_heads()) |
visible_heads()).`},{heading:"functions",content:"??? examples"},{heading:"functions",content:"Given this history:"},{heading:"functions",content:"function reachable()"},{heading:"functions",content:"reachable(E, A..) ⇒ {E,D,C,B}"},{heading:"functions",content:"reachable(D, A..) ⇒ {E,D,C,B}"},{heading:"functions",content:"reachable(C, A..) ⇒ {E,D,C,B}"},{heading:"functions",content:"reachable(B, A..) ⇒ {E,D,C,B}"},{heading:"functions",content:"reachable(A, A..) ⇒ {} (empty set)"},{heading:"functions",content:"function connected()"},{heading:"functions",content:"connected(E|A) ⇒ {E,B,A}"},{heading:"functions",content:"connected(D|A) ⇒ {D,C,B,A}"},{heading:"functions",content:"connected(A) ⇒ {A}"},{heading:"functions",content:"function heads()"},{heading:"functions",content:"heads(E|D) ⇒ {E,D}"},{heading:"functions",content:"heads(E|C) ⇒ {E,C}"},{heading:"functions",content:"heads(E|B) ⇒ {E}"},{heading:"functions",content:"heads(E|A) ⇒ {E}"},{heading:"functions",content:"heads(A) ⇒ {A}"},{heading:"functions",content:"function roots()"},{heading:"functions",content:"roots(E|D) ⇒ {E,D}"},{heading:"functions",content:"roots(E|C) ⇒ {E,C}"},{heading:"functions",content:"roots(E|B) ⇒ {B}"},{heading:"functions",content:"roots(E|A) ⇒ {A}"},{heading:"functions",content:"roots(A) ⇒ {A}"},{heading:"functions",content:"function fork_point()"},{heading:"functions",content:"fork_point(E|D) ⇒ {B}"},{heading:"functions",content:"fork_point(E|C) ⇒ {A}"},{heading:"functions",content:"fork_point(E|B) ⇒ {B}"},{heading:"functions",content:"fork_point(E|A) ⇒ {A}"},{heading:"functions",content:"fork_point(D|C) ⇒ {C}"},{heading:"functions",content:"fork_point(D|B) ⇒ {B}"},{heading:"functions",content:"fork_point(B|C) ⇒ {A}"},{heading:"functions",content:"fork_point(A) ⇒ {A}"},{heading:"functions",content:"fork_point(none()) ⇒ {}"},{heading:"string-patterns",content:`Functions that perform string matching support the following pattern syntax (the
quotes are optional):`},{heading:"string-patterns",content:'"string" or substring:"string": Matches strings that contain string.'},{heading:"string-patterns",content:'exact:"string": Matches strings exactly equal to string.'},{heading:"string-patterns",content:`glob:"pattern": Matches strings with Unix-style shell wildcard
pattern.`},{heading:"string-patterns",content:`regex:"pattern": Matches substrings with regular
expression pattern.`},{heading:"string-patterns",content:`You can append -i after the kind to match case‐insensitively (e.g.
glob-i:"fix*jpeg*").`},{heading:"date-patterns",content:"Functions that perform date matching support the following pattern syntax:"},{heading:"date-patterns",content:'after:"string": Matches dates exactly at or after the given date.'},{heading:"date-patterns",content:'before:"string": Matches dates before, but not including, the given date.'},{heading:"date-patterns",content:"Date strings can be specified in several forms, including:"},{heading:"date-patterns",content:"2024-02-01"},{heading:"date-patterns",content:"2024-02-01T12:00:00"},{heading:"date-patterns",content:"2024-02-01T12:00:00-08:00"},{heading:"date-patterns",content:"2024-02-01 12:00:00"},{heading:"date-patterns",content:"2 days ago"},{heading:"date-patterns",content:"5 minutes ago"},{heading:"date-patterns",content:"yesterday"},{heading:"date-patterns",content:"yesterday 5pm"},{heading:"date-patterns",content:"yesterday 10:30"},{heading:"date-patterns",content:"yesterday 15:30"},{heading:"aliases",content:`New symbols and functions can be defined in the config file, by using any
combination of the predefined symbols/functions and other aliases.`},{heading:"aliases",content:`Alias functions can be overloaded by the number of parameters. However, builtin
function will be shadowed by name, and can't co-exist with aliases.`},{heading:"aliases",content:"For example:"},{heading:"built-in-aliases",content:`The following aliases are built-in and used for certain operations. These functions
are defined as aliases in order to allow you to overwrite them as needed.
See revsets.toml
for a comprehensive list.`},{heading:"built-in-aliases",content:`trunk(): Resolves to the head commit for the default bookmark of the default
remote, or the remote named upstream or origin. This is set at the
repository level upon initialization of a Jujutsu repository.`},{heading:"built-in-aliases",content:`If the default bookmark cannot be resolved during initialization, the default
global configuration tries the bookmarks main, master, and trunk on the
upstream and origin remotes. If more than one potential trunk commit
exists, the newest one is chosen. If none of the bookmarks exist, the revset
evaluates to root().`},{heading:"built-in-aliases",content:`You can override this as appropriate. If you do, make sure it
always resolves to exactly one commit. For example:`},{heading:"built-in-aliases",content:`builtin_immutable_heads(): Resolves to
present(trunk()) | tags() | untracked_remote_bookmarks(). It is used as the
default definition for immutable_heads() below. It is not recommended to
redefine this alias. Prefer to redefine immutable_heads() instead.`},{heading:"built-in-aliases",content:`immutable_heads(): Resolves to
present(trunk()) | tags() | untracked_remote_bookmarks() by default. It is
actually defined as builtin_immutable_heads(), and can be overridden as
required. See here for details.`},{heading:"built-in-aliases",content:`immutable(): The set of commits that jj treats as immutable. This is
equivalent to ::(immutable_heads() | root()). It is not recommended to redefine
this alias. Note that modifying this will not change whether a commit is immutable.
To do that, edit immutable_heads().`},{heading:"built-in-aliases",content:`mutable(): The set of commits that jj treats as mutable. This is
equivalent to ~immutable(). It is not recommended to redefined this alias.
Note that modifying this will not change whether a commit is immutable.
To do that, edit immutable_heads().`},{heading:"the-all-modifier",content:`Certain commands (such as jj rebase) can take multiple revset arguments, and
each of these may resolve to one-or-many revisions.`},{heading:"the-all-modifier",content:`If you set the ui.always-allow-large-revsets option to false, jj will not
allow revsets that resolve to more than one revision — a so-called "large
revset" — and will ask you to confirm that you want to proceed by
prefixing it with the all: modifier. This option is planned to be removed.`},{heading:"the-all-modifier",content:`An all: modifier before a revset expression does not otherwise change its
meaning. Strictly speaking, it is not part of the revset language. The notation
is similar to the modifiers like glob: allowed before string
patterns.`},{heading:"the-all-modifier",content:`For example, jj rebase -r w -d xyz+ will rebase w on top of the child of
xyz as long as xyz has exactly one child.`},{heading:"the-all-modifier",content:`If xyz has more than one child, the all: modifier is not specified, and
ui.always-allow-large-revsets is false, jj rebase -r w -d xyz+ will return
an error.`},{heading:"the-all-modifier",content:`If ui.always-allow-large-revsets was true (the default), the above command
would act as if all: was set (see the next paragraph).`},{heading:"the-all-modifier",content:`With the all: modifier, jj rebase -r w -d all:xyz+ will make w into a merge
commit if xyz has more than one child. The all: modifier confirms that the
user expected xyz to have more than one child.`},{heading:"the-all-modifier",content:`A more useful example: if w is a merge commit, jj rebase -s w -d all:w- -d
xyz will add xyz to the list of w's parents.`},{heading:"examples",content:"Show the parent(s) of the working-copy commit (like git log -1 HEAD):"},{heading:"examples",content:"Show all ancestors of the working copy (like plain git log)"},{heading:"examples",content:"Show commits not on any remote bookmark:"},{heading:"examples",content:"Show commits not on origin (if you have other remotes like fork):"},{heading:"examples",content:'Show the initial commits in the repo (the ones Git calls "root commits"):'},{heading:"examples",content:"Show some important commits (like git --simplify-by-decoration):"},{heading:"examples",content:`Show local commits leading up to the working copy, as well as descendants of
those commits:`},{heading:"examples",content:`Show commits authored by "martinvonz" and containing the word "reset" in the
description:`}],headings:[{id:"hidden-revisions",content:"Hidden revisions"},{id:"symbols",content:"Symbols"},{id:"priority",content:"Priority"},{id:"operators",content:"Operators"},{id:"functions",content:"Functions"},{id:"string-patterns",content:"String patterns"},{id:"date-patterns",content:"Date patterns"},{id:"aliases",content:"Aliases"},{id:"built-in-aliases",content:"Built-in Aliases"},{id:"the-all-modifier",content:"The all: modifier"},{id:"examples",content:"Examples"}]};const c=[{depth:2,url:"#hidden-revisions",title:e.jsx(e.Fragment,{children:"Hidden revisions"})},{depth:2,url:"#symbols",title:e.jsx(e.Fragment,{children:"Symbols"})},{depth:3,url:"#priority",title:e.jsx(e.Fragment,{children:"Priority"})},{depth:2,url:"#operators",title:e.jsx(e.Fragment,{children:"Operators"})},{depth:2,url:"#functions",title:e.jsx(e.Fragment,{children:"Functions"})},{depth:2,url:"#string-patterns",title:e.jsx(e.Fragment,{children:"String patterns"})},{depth:2,url:"#date-patterns",title:e.jsx(e.Fragment,{children:"Date patterns"})},{depth:2,url:"#aliases",title:e.jsx(e.Fragment,{children:"Aliases"})},{depth:3,url:"#built-in-aliases",title:e.jsx(e.Fragment,{children:"Built-in Aliases"})},{depth:2,url:"#the-all-modifier",title:e.jsxs(e.Fragment,{children:["The ",e.jsx("code",{children:"all:"})," modifier"]})},{depth:2,url:"#examples",title:e.jsx(e.Fragment,{children:"Examples"})}];function t(i){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i.components};return e.jsxs(e.Fragment,{children:[e.jsxs(n.p,{children:[`Jujutsu supports a functional language for selecting a set of revisions.
Expressions in this language are called "revsets" (the idea comes from
`,e.jsx(n.a,{href:"https://www.mercurial-scm.org/repo/hg/help/revsets",children:"Mercurial"}),`). The language
consists of symbols, operators, and functions.`]}),`
`,e.jsxs(n.p,{children:["Most ",e.jsx(n.code,{children:"jj"}),` commands accept a revset (or multiple). Many commands, such as
`,e.jsx(n.code,{children:"jj edit <revset>"}),` expect the revset to resolve to a single commit; it is an
error to pass a revset that resolves to more than one commit (or zero commits)
to such commands.`]}),`
`,e.jsx(n.p,{children:'The words "revisions" and "commits" are used interchangeably in this document.'}),`
`,e.jsx(n.h2,{id:"hidden-revisions",children:"Hidden revisions"}),`
`,e.jsxs(n.p,{children:["Most revsets search only the ",e.jsx(n.a,{href:"glossary#visible-commits",children:"visible commits"}),`.
Other commits are only included if you explicitly mention them (e.g. by commit
ID, `,e.jsx(n.code,{children:"<name>@<remote>"})," symbol, or ",e.jsx(n.code,{children:"at_operation()"})," function)."]}),`
`,e.jsxs(n.p,{children:[`If hidden commits are specified, their ancestors also become available to the
search space. They are included in `,e.jsx(n.code,{children:"all()"}),", ",e.jsx(n.code,{children:"x.."}),", ",e.jsx(n.code,{children:"~x"}),`, etc., but not in
`,e.jsx(n.code,{children:"..visible_heads()"}),", etc. For example, ",e.jsx(n.code,{children:"hidden_id | all()"}),` is equivalent to
`,e.jsx(n.code,{children:"hidden_id | ::(hidden_id | visible_heads())"}),"."]}),`
`,e.jsx(n.h2,{id:"symbols",children:"Symbols"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"@"}),` expression refers to the working copy commit in the current workspace.
Use `,e.jsx(n.code,{children:"<workspace name>@"}),` to refer to the working-copy commit in another
workspace. Use `,e.jsx(n.code,{children:"<name>@<remote>"})," to refer to a remote-tracking bookmark."]}),`
`,e.jsx(n.p,{children:`A full commit ID refers to a single commit. A unique prefix of the full commit
ID can also be used. It is an error to use a non-unique prefix.`}),`
`,e.jsxs(n.p,{children:[`A full change ID refers to a visible commit with that change ID. A unique prefix
of the full change ID can also be used. It is an error to use a non-unique
prefix or `,e.jsx(n.a,{href:"glossary#divergent-change",children:"a divergent change ID"}),"."]}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.a,{href:"templates#string-literals",children:"single or double quotes"}),` to prevent a symbol from being
interpreted as an expression. For example, `,e.jsx(n.code,{children:'"x-"'})," is the symbol ",e.jsx(n.code,{children:"x-"}),`, not the
parents of symbol `,e.jsx(n.code,{children:"x"}),`. Taking shell quoting into account, you may need to use
something like `,e.jsx(n.code,{children:`jj log -r '"x-"'`}),"."]}),`
`,e.jsx(n.h3,{id:"priority",children:"Priority"}),`
`,e.jsx(n.p,{children:"Jujutsu attempts to resolve a symbol in the following order:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Tag name"}),`
`,e.jsx(n.li,{children:"Bookmark name"}),`
`,e.jsx(n.li,{children:"Git ref"}),`
`,e.jsx(n.li,{children:"Commit ID or change ID"}),`
`]}),`
`,e.jsxs(n.p,{children:["To override the priority, use the appropriate ",e.jsx(n.a,{href:"#functions",children:"revset function"}),`. For
example, to resolve `,e.jsx(n.code,{children:"abc"}),` as a commit ID even if there happens to be a bookmark
by the same name, use `,e.jsx(n.code,{children:"commit_id(abc)"}),". This is particularly useful in scripts."]}),`
`,e.jsx(n.h2,{id:"operators",children:"Operators"}),`
`,e.jsxs(n.p,{children:["The following operators are supported. ",e.jsx(n.code,{children:"x"})," and ",e.jsx(n.code,{children:"y"}),` below can be any revset, not
only symbols.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x-"}),": Parents of ",e.jsx(n.code,{children:"x"}),", can be empty."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x+"}),": Children of ",e.jsx(n.code,{children:"x"}),", can be empty."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x::"}),": Descendants of ",e.jsx(n.code,{children:"x"}),", including the commits in ",e.jsx(n.code,{children:"x"}),` itself. Equivalent to
`,e.jsx(n.code,{children:"x::visible_heads()"})," if no hidden revisions are mentioned."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x.."}),": Revisions that are not ancestors of ",e.jsx(n.code,{children:"x"}),". Equivalent to ",e.jsx(n.code,{children:"~::x"}),`, and
`,e.jsx(n.code,{children:"x..visible_heads()"})," if no hidden revisions are mentioned."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::x"}),": Ancestors of ",e.jsx(n.code,{children:"x"}),", including the commits in ",e.jsx(n.code,{children:"x"}),` itself. Shorthand for
`,e.jsx(n.code,{children:"root()::x"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"..x"}),": Ancestors of ",e.jsx(n.code,{children:"x"}),", including the commits in ",e.jsx(n.code,{children:"x"}),` itself, but excluding
the root commit. Shorthand for `,e.jsx(n.code,{children:"root()..x"}),". Equivalent to ",e.jsx(n.code,{children:"::x ~ root()"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x::y"}),": Descendants of ",e.jsx(n.code,{children:"x"})," that are also ancestors of ",e.jsx(n.code,{children:"y"}),`. Equivalent
to `,e.jsx(n.code,{children:"x:: & ::y"}),". This is what ",e.jsx(n.code,{children:"git log"})," calls ",e.jsx(n.code,{children:"--ancestry-path x..y"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x..y"}),": Ancestors of ",e.jsx(n.code,{children:"y"})," that are not also ancestors of ",e.jsx(n.code,{children:"x"}),`. Equivalent to
`,e.jsx(n.code,{children:"::y ~ ::x"}),". This is what ",e.jsx(n.code,{children:"git log"})," calls ",e.jsx(n.code,{children:"x..y"})," (i.e. the same as we call it)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::"}),": All visible commits in the repo. Equivalent to ",e.jsx(n.code,{children:"all()"}),`, and
`,e.jsx(n.code,{children:"root()::visible_heads()"})," if no hidden revisions are mentioned."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".."}),`: All visible commits in the repo, but excluding the root commit.
Equivalent to `,e.jsx(n.code,{children:"~root()"}),", and ",e.jsx(n.code,{children:"root()..visible_heads()"}),` if no hidden revisions
are mentioned.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"~x"}),": Revisions that are not in ",e.jsx(n.code,{children:"x"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x & y"}),": Revisions that are in both ",e.jsx(n.code,{children:"x"})," and ",e.jsx(n.code,{children:"y"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x ~ y"}),": Revisions that are in ",e.jsx(n.code,{children:"x"})," but not in ",e.jsx(n.code,{children:"y"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x | y"}),": Revisions that are in either ",e.jsx(n.code,{children:"x"})," or ",e.jsx(n.code,{children:"y"})," (or both)."]}),`
`]}),`
`,e.jsx(n.p,{children:"(listed in order of binding strengths)"}),`
`,e.jsxs(n.p,{children:["You can use parentheses to control evaluation order, such as ",e.jsx(n.code,{children:"(x & y) | z"}),` or
`,e.jsx(n.code,{children:"x & (y | z)"}),"."]}),`
`,`
`,e.jsx(n.p,{children:"??? examples"}),`
`,e.jsx(n.p,{children:"Given this history:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"o D"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"|\\"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"| o C"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"| |"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"o | B"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"|/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"o A"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"|"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"o root()"})})]})})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Operator"})," ",e.jsx(n.code,{children:"x-"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"D-"})," ⇒ ",e.jsx(n.code,{children:"{C,B}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"B-"})," ⇒ ",e.jsx(n.code,{children:"{A}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"A-"})," ⇒ ",e.jsx(n.code,{children:"{root()}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"root()-"})," ⇒ ",e.jsx(n.code,{children:"{}"})," (empty set)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"none()-"})," ⇒ ",e.jsx(n.code,{children:"{}"})," (empty set)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"(D|A)-"})," ⇒ ",e.jsx(n.code,{children:"{C,B,root()}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"(C|B)-"})," ⇒ ",e.jsx(n.code,{children:"{A}"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Operator"})," ",e.jsx(n.code,{children:"x+"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"D+"})," ⇒ ",e.jsx(n.code,{children:"{}"})," (empty set)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"B+"})," ⇒ ",e.jsx(n.code,{children:"{D}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"A+"})," ⇒ ",e.jsx(n.code,{children:"{B,C}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"root()+"})," ⇒ ",e.jsx(n.code,{children:"{A}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"none()+"})," ⇒ ",e.jsx(n.code,{children:"{}"})," (empty set)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"(C|B)+"})," ⇒ ",e.jsx(n.code,{children:"{D}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"(B|root())+"})," ⇒ ",e.jsx(n.code,{children:"{D,A}"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Operator"})," ",e.jsx(n.code,{children:"x::"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"D::"})," ⇒ ",e.jsx(n.code,{children:"{D}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"B::"})," ⇒ ",e.jsx(n.code,{children:"{D,B}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"A::"})," ⇒ ",e.jsx(n.code,{children:"{D,C,B,A}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"root()::"})," ⇒ ",e.jsx(n.code,{children:"{D,C,B,A,root()}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"none()::"})," ⇒ ",e.jsx(n.code,{children:"{}"})," (empty set)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"(C|B)::"})," ⇒ ",e.jsx(n.code,{children:"{D,C,B}"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Operator"})," ",e.jsx(n.code,{children:"x.."})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"D.."})," ⇒ ",e.jsx(n.code,{children:"{}"})," (empty set)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"B.."})," ⇒ ",e.jsx(n.code,{children:"{D,C}"})," (note that, unlike ",e.jsx(n.code,{children:"B::"}),", this includes ",e.jsx(n.code,{children:"C"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"A.."})," ⇒ ",e.jsx(n.code,{children:"{D,C,B}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"root().."})," ⇒ ",e.jsx(n.code,{children:"{D,C,B,A}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"none().."})," ⇒ ",e.jsx(n.code,{children:"{D,C,B,A,root()}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"(C|B).."})," ⇒ ",e.jsx(n.code,{children:"{D}"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Operator"})," ",e.jsx(n.code,{children:"::x"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::D"})," ⇒ ",e.jsx(n.code,{children:"{D,C,B,A,root()}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::B"})," ⇒ ",e.jsx(n.code,{children:"{B,A,root()}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::A"})," ⇒ ",e.jsx(n.code,{children:"{A,root()}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::root()"})," ⇒ ",e.jsx(n.code,{children:"{root()}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::none()"})," ⇒ ",e.jsx(n.code,{children:"{}"})," (empty set)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"::(C|B)"})," ⇒ ",e.jsx(n.code,{children:"{C,B,A,root()}"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Operator"})," ",e.jsx(n.code,{children:"..x"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"..D"})," ⇒ ",e.jsx(n.code,{children:"{D,C,B,A}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"..B"})," ⇒ ",e.jsx(n.code,{children:"{B,A}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"..A"})," ⇒ ",e.jsx(n.code,{children:"{A}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"..root()"})," ⇒ ",e.jsx(n.code,{children:"{}"})," (empty set)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"..none()"})," ⇒ ",e.jsx(n.code,{children:"{}"})," (empty set)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"..(C|B)"})," ⇒ ",e.jsx(n.code,{children:"{C,B,A}"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Operator"})," ",e.jsx(n.code,{children:"x::y"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"D::D"})," ⇒ ",e.jsx(n.code,{children:"{D}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"B::D"})," ⇒ ",e.jsx(n.code,{children:"{D,B}"})," (note that, unlike ",e.jsx(n.code,{children:"B..D"}),", this includes ",e.jsx(n.code,{children:"B"})," and excludes ",e.jsx(n.code,{children:"C"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"B::C"})," ⇒ ",e.jsx(n.code,{children:"{}"})," (empty set) (note that, unlike ",e.jsx(n.code,{children:"B..C"}),", this excludes ",e.jsx(n.code,{children:"C"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"A::D"})," ⇒ ",e.jsx(n.code,{children:"{D,C,B,A}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"root()::D"})," ⇒ ",e.jsx(n.code,{children:"{D,C,B,A,root()}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"none()::D"})," ⇒ ",e.jsx(n.code,{children:"{}"})," (empty set)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"D::B"})," ⇒ ",e.jsx(n.code,{children:"{}"})," (empty set)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"(C|B)::(C|B)"})," ⇒ ",e.jsx(n.code,{children:"{C,B}"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Operator"})," ",e.jsx(n.code,{children:"x..y"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"D..D"})," ⇒ ",e.jsx(n.code,{children:"{}"})," (empty set)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"B..D"})," ⇒ ",e.jsx(n.code,{children:"{D,C}"})," (note that, unlike ",e.jsx(n.code,{children:"B::D"}),", this includes ",e.jsx(n.code,{children:"C"})," and excludes ",e.jsx(n.code,{children:"B"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"B..C"})," ⇒ ",e.jsx(n.code,{children:"{C}"})," (note that, unlike ",e.jsx(n.code,{children:"B::C"}),", this includes ",e.jsx(n.code,{children:"C"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"A..D"})," ⇒ ",e.jsx(n.code,{children:"{D,C,B}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"root()..D"})," ⇒ ",e.jsx(n.code,{children:"{D,C,B,A}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"none()..D"})," ⇒ ",e.jsx(n.code,{children:"{D,C,B,A,root()}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"D..B"})," ⇒ ",e.jsx(n.code,{children:"{}"})," (empty set)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"(C|B)..(C|B)"})," ⇒ ",e.jsx(n.code,{children:"{}"})," (empty set)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"functions",children:"Functions"}),`
`,e.jsx(n.p,{children:`You can also specify revisions by using functions. Some functions take other
revsets (expressions) as arguments.`}),`
`,e.jsx(n.p,{children:'??? note "Function argument syntax"'}),`
`,e.jsxs(n.p,{children:[`In this documentation, optional arguments are indicated with square
brackets like `,e.jsx(n.code,{children:"[arg]"}),`. Some arguments also have an optional label which can
be used to specify that argument without specifying all previous arguments.`]}),`
`,e.jsxs(n.p,{children:["For instance, ",e.jsx(n.code,{children:"remote_bookmarks([bookmark_pattern], [[remote=]remote_pattern])"}),`
indicates that all of the following usages are valid:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"remote_bookmarks()"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'remote_bookmarks("main")'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'remote_bookmarks("main", "origin")'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'remote_bookmarks("main", remote="origin")'})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:'remote_bookmarks(remote="origin")'})}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"parents(x, [depth])"}),": ",e.jsx(n.code,{children:"parents(x)"})," is the same as ",e.jsx(n.code,{children:"x-"}),`.
`,e.jsx(n.code,{children:"parents(x, depth)"})," returns the parents of ",e.jsx(n.code,{children:"x"})," at the given ",e.jsx(n.code,{children:"depth"}),`. For
instance, `,e.jsx(n.code,{children:"parents(x, 3)"})," is equivalent to ",e.jsx(n.code,{children:"x---"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"children(x, [depth])"}),": ",e.jsx(n.code,{children:"children(x)"})," is the same as ",e.jsx(n.code,{children:"x+"}),`.
`,e.jsx(n.code,{children:"children(x, depth)"})," returns the children of ",e.jsx(n.code,{children:"x"})," at the given ",e.jsx(n.code,{children:"depth"}),`. For
instance, `,e.jsx(n.code,{children:"children(x, 3)"})," is equivalent to ",e.jsx(n.code,{children:"x+++"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ancestors(x, [depth])"}),": ",e.jsx(n.code,{children:"ancestors(x)"})," is the same as ",e.jsx(n.code,{children:"::x"}),`.
`,e.jsx(n.code,{children:"ancestors(x, depth)"})," returns the ancestors of ",e.jsx(n.code,{children:"x"}),` limited to the given
`,e.jsx(n.code,{children:"depth"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"descendants(x, [depth])"}),": ",e.jsx(n.code,{children:"descendants(x)"})," is the same as ",e.jsx(n.code,{children:"x::"}),`.
`,e.jsx(n.code,{children:"descendants(x, depth)"})," returns the descendants of ",e.jsx(n.code,{children:"x"}),` limited to the given
`,e.jsx(n.code,{children:"depth"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"first_parent(x, [depth])"}),": ",e.jsx(n.code,{children:"first_parent(x)"})," is similar to ",e.jsx(n.code,{children:"parents(x)"}),`, but
for merges, it only returns the first parent instead of returning all parents.
The `,e.jsx(n.code,{children:"depth"})," argument also works similarly, so ",e.jsx(n.code,{children:"first_parent(x, 2)"}),` is
equivalent to `,e.jsx(n.code,{children:"first_parent(first_parent(x))"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"first_ancestors(x, [depth])"}),": Similar to ",e.jsx(n.code,{children:"ancestors(x, [depth])"}),`, but only
traverses the first parent of each commit. In Git, the first parent of a merge
commit is conventionally the branch into which changes are being merged, so
`,e.jsx(n.code,{children:"first_ancestors()"})," can be used to exclude changes made on other branches."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"reachable(srcs, domain)"}),": All commits reachable from ",e.jsx(n.code,{children:"srcs"}),` within
`,e.jsx(n.code,{children:"domain"}),", traversing all parent and child edges."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"connected(x)"}),": Same as ",e.jsx(n.code,{children:"x::x"}),". Useful when ",e.jsx(n.code,{children:"x"})," includes several commits."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"all()"}),": All visible commits and ancestors of commits explicitly mentioned."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"none()"}),`: No commits. This function is rarely useful; it is provided for
completeness.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"change_id(prefix)"}),`: Commits with the given change ID prefix. If the specified
change is divergent, this resolves to multiple commits. It is an error to use a
non-unique prefix. Unmatched prefix isn't an error.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"commit_id(prefix)"}),`: Commits with the given commit ID prefix. It is an error
to use a non-unique prefix. Unmatched prefix isn't an error.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"bookmarks([pattern])"}),": All local bookmark targets. If ",e.jsx(n.code,{children:"pattern"}),` is specified,
this selects the bookmarks whose name match the given `,e.jsx(n.a,{href:"#string-patterns",children:`string
pattern`}),". For example, ",e.jsx(n.code,{children:"bookmarks(push)"}),` would match the
bookmarks `,e.jsx(n.code,{children:"push-123"})," and ",e.jsx(n.code,{children:"repushed"})," but not the bookmark ",e.jsx(n.code,{children:"main"}),`. If a bookmark is
in a conflicted state, all its possible targets are included.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"remote_bookmarks([bookmark_pattern], [[remote=]remote_pattern])"}),`: All remote
bookmarks targets across all remotes. If just the `,e.jsx(n.code,{children:"bookmark_pattern"}),` is
specified, the bookmarks whose names match the given `,e.jsx(n.a,{href:"#string-patterns",children:`string
pattern`}),` across all remotes are selected. If both
`,e.jsx(n.code,{children:"bookmark_pattern"})," and ",e.jsx(n.code,{children:"remote_pattern"}),` are specified, the selection is
further restricted to just the remotes whose names match `,e.jsx(n.code,{children:"remote_pattern"}),"."]}),`
`,e.jsxs(n.p,{children:["For example, ",e.jsx(n.code,{children:"remote_bookmarks(push, ri)"}),` would match the bookmarks
`,e.jsx(n.code,{children:"push-123@origin"})," and ",e.jsx(n.code,{children:"repushed@private"})," but not ",e.jsx(n.code,{children:"push-123@upstream"}),` or
`,e.jsx(n.code,{children:"main@origin"})," or ",e.jsx(n.code,{children:"main@upstream"}),`. If a bookmark is in a conflicted state, all
its possible targets are included.`]}),`
`,e.jsxs(n.p,{children:["While Git-tracking bookmarks can be selected by ",e.jsx(n.code,{children:"<name>@git"}),`, these bookmarks
aren't included in `,e.jsx(n.code,{children:"remote_bookmarks()"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"tracked_remote_bookmarks([bookmark_pattern], [[remote=]remote_pattern])"}),`: All
targets of tracked remote bookmarks. Supports the same optional arguments as
`,e.jsx(n.code,{children:"remote_bookmarks()"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"untracked_remote_bookmarks([bookmark_pattern], [[remote=]remote_pattern])"}),`:
All targets of untracked remote bookmarks. Supports the same optional arguments
as `,e.jsx(n.code,{children:"remote_bookmarks()"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"tags([pattern])"}),": All tag targets. If ",e.jsx(n.code,{children:"pattern"}),` is specified,
this selects the tags whose name match the given `,e.jsx(n.a,{href:"#string-patterns",children:`string
pattern`}),". For example, ",e.jsx(n.code,{children:"tags(v1)"}),` would match the
tags `,e.jsx(n.code,{children:"v123"})," and ",e.jsx(n.code,{children:"rev1"})," but not the tag ",e.jsx(n.code,{children:"v2"}),`. If a tag is
in a conflicted state, all its possible targets are included.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"git_refs()"}),`: All Git ref targets as of the last import. If a Git ref
is in a conflicted state, all its possible targets are included.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"git_head()"}),": The Git ",e.jsx(n.code,{children:"HEAD"})," target as of the last import."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"visible_heads()"}),": All visible heads (same as ",e.jsx(n.code,{children:"heads(all())"}),` if no hidden
revisions are mentioned).`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"root()"}),": The virtual commit that is the oldest ancestor of all other commits."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"heads(x)"}),": Commits in ",e.jsx(n.code,{children:"x"})," that are not ancestors of other commits in ",e.jsx(n.code,{children:"x"}),`.
Equivalent to `,e.jsx(n.code,{children:"x ~ ::x-"}),`. Note that this is different from
`,e.jsx(n.a,{href:"https://repo.mercurial-scm.org/hg/help/revsets",children:"Mercurial's"})," ",e.jsx(n.code,{children:"heads(x)"}),`
function, which is equivalent to `,e.jsx(n.code,{children:"x ~ x-"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"roots(x)"}),": Commits in ",e.jsx(n.code,{children:"x"})," that are not descendants of other commits in ",e.jsx(n.code,{children:"x"}),`.
Equivalent to `,e.jsx(n.code,{children:"x ~ x+::"}),`. Note that this is different from
`,e.jsx(n.a,{href:"https://repo.mercurial-scm.org/hg/help/revsets",children:"Mercurial's"})," ",e.jsx(n.code,{children:"roots(x)"}),`
function, which is equivalent to `,e.jsx(n.code,{children:"x ~ x+"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"latest(x, [count])"}),": Latest ",e.jsx(n.code,{children:"count"})," commits in ",e.jsx(n.code,{children:"x"}),`, based on committer
timestamp. The default `,e.jsx(n.code,{children:"count"})," is 1."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"fork_point(x)"}),": The fork point of all commits in ",e.jsx(n.code,{children:"x"}),`. The fork point is the
common ancestor(s) of all commits in `,e.jsx(n.code,{children:"x"}),` which do not have any descendants
that are also common ancestors of all commits in `,e.jsx(n.code,{children:"x"}),`. It is equivalent to
the revset `,e.jsx(n.code,{children:"heads(::x_1 & ::x_2 & ... & ::x_N)"}),", where ",e.jsx(n.code,{children:"x_{1..N}"}),` are commits
in `,e.jsx(n.code,{children:"x"}),". If ",e.jsx(n.code,{children:"x"})," resolves to a single commit, ",e.jsx(n.code,{children:"fork_point(x)"})," resolves to ",e.jsx(n.code,{children:"x"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"bisect(x)"}),`: Finds commits in the input set for which about half of the input
set are descendants. The current implementation deals somewhat poorly with
non-linear history.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"merges()"}),": Merge commits."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"description(pattern)"}),`: Commits that have a description matching the given
`,e.jsx(n.a,{href:"#string-patterns",children:"string pattern"}),"."]}),`
`,e.jsxs(n.p,{children:[`A non-empty description is usually terminated with newline character. For
example, `,e.jsx(n.code,{children:'description(exact:"")'}),` matches commits without description, and
`,e.jsx(n.code,{children:'description(exact:"foo\\n")'})," matches commits with description ",e.jsx(n.code,{children:'"foo\\n"'}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"subject(pattern)"}),": Commits that have a subject matching the given ",e.jsx(n.a,{href:"#string-patterns",children:`string
pattern`}),`. A subject is the first line of the description
(without newline character.)`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"author(pattern)"}),`: Commits with the author's name or email matching the given
`,e.jsx(n.a,{href:"#string-patterns",children:"string pattern"}),". Equivalent to ",e.jsx(n.code,{children:"author_name(pattern) | author_email(pattern)"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"author_name(pattern)"}),`: Commits with the author's name matching the given
`,e.jsx(n.a,{href:"#string-patterns",children:"string pattern"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"author_email(pattern)"}),`: Commits with the author's email matching the given
`,e.jsx(n.a,{href:"#string-patterns",children:"string pattern"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"author_date(pattern)"}),": Commits with author dates matching the specified ",e.jsx(n.a,{href:"#date-patterns",children:`date
pattern`}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"mine()"}),`: Commits where the author's email matches the email of the current
user. Equivalent to `,e.jsx(n.code,{children:"author_email(exact-i:<user-email>)"})]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"committer(pattern)"}),`: Commits with the committer's name or email matching the
given `,e.jsx(n.a,{href:"#string-patterns",children:"string pattern"}),`. Equivalent to
`,e.jsx(n.code,{children:"committer_name(pattern) | committer_email(pattern)"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"committer_name(pattern)"}),`: Commits with the committer's name matching the
given `,e.jsx(n.a,{href:"#string-patterns",children:"string pattern"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"committer_email(pattern)"}),`: Commits with the committer's email matching the
given `,e.jsx(n.a,{href:"#string-patterns",children:"string pattern"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"committer_date(pattern)"}),`: Commits with committer dates matching the specified
`,e.jsx(n.a,{href:"#date-patterns",children:"date pattern"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"signed()"}),": Commits that are cryptographically signed."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"empty()"}),": Commits modifying no files. This also includes ",e.jsx(n.code,{children:"merges()"}),` without
user modifications and `,e.jsx(n.code,{children:"root()"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"files(expression)"}),": Commits modifying paths matching the given ",e.jsx(n.a,{href:"/reference/filesets",children:`fileset
expression`}),"."]}),`
`,e.jsxs(n.p,{children:["Paths are relative to the directory ",e.jsx(n.code,{children:"jj"}),` was invoked from. A directory name
will match all files in that directory and its subdirectories.`]}),`
`,e.jsxs(n.p,{children:["For example, ",e.jsx(n.code,{children:"files(foo)"})," will match files ",e.jsx(n.code,{children:"foo"}),", ",e.jsx(n.code,{children:"foo/bar"}),", ",e.jsx(n.code,{children:"foo/bar/baz"}),`.
It will `,e.jsx(n.em,{children:"not"})," match ",e.jsx(n.code,{children:"foobar"})," or ",e.jsx(n.code,{children:"bar/foo"}),"."]}),`
`,e.jsxs(n.p,{children:["Some file patterns might need quoting because the ",e.jsx(n.code,{children:"expression"}),` must also be
parsable as a revset. For example, `,e.jsx(n.code,{children:"."})," has to be quoted in ",e.jsx(n.code,{children:'files(".")'}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"diff_contains(text, [files])"}),`: Commits containing diffs matching the given
`,e.jsx(n.code,{children:"text"})," pattern line by line."]}),`
`,e.jsxs(n.p,{children:["The search paths can be narrowed by the ",e.jsx(n.code,{children:"files"}),` expression. All modified files
are scanned by default, but it is likely to change in future version to
respect the command line path arguments.`]}),`
`,e.jsxs(n.p,{children:["For example, ",e.jsx(n.code,{children:'diff_contains("TODO", "src")'}),` will search revisions where "TODO"
is added to or removed from files under "src".`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"conflicts()"}),": Commits with conflicts."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"present(x)"}),": Same as ",e.jsx(n.code,{children:"x"}),", but evaluated to ",e.jsx(n.code,{children:"none()"}),` if any of the commits
in `,e.jsx(n.code,{children:"x"})," doesn't exist (e.g. is an unknown bookmark name.)"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"coalesce(revsets...)"}),": Commits in the first revset in the list of ",e.jsx(n.code,{children:"revsets"}),`
which does not evaluate to `,e.jsx(n.code,{children:"none()"}),". If all revsets evaluate to ",e.jsx(n.code,{children:"none()"}),`, then
the result of `,e.jsx(n.code,{children:"coalesce"})," will also be ",e.jsx(n.code,{children:"none()"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"working_copies()"}),": The working copy commits across all the workspaces."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"at_operation(op, x)"}),": Evaluates ",e.jsx(n.code,{children:"x"})," at the specified ",e.jsx(n.a,{href:"glossary#operation",children:"operation"}),`. For
example, `,e.jsx(n.code,{children:"at_operation(@-, visible_heads())"}),` will return all heads which were
visible at the previous operation.`]}),`
`,e.jsxs(n.p,{children:["Since ",e.jsx(n.code,{children:"at_operation(op, x)"}),` brings all commits that were visible at the
operation to the search space, `,e.jsx(n.code,{children:"at_operation(op, x) | all()"}),` is equivalent to
`,e.jsx(n.code,{children:"at_operation(op, x) | ::(at_operation(op, x | visible_heads()) | visible_heads())"}),"."]}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"??? examples"}),`
`,e.jsx(n.p,{children:"Given this history:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(n.code,{children:[e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"o E"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"|"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"| o D"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"|/|"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"| o C"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"| |"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"o | B"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"|/"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"o A"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"|"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:"o root()"})})]})})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"function"})," ",e.jsx(n.code,{children:"reachable()"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reachable(E, A..)"})," ⇒ ",e.jsx(n.code,{children:"{E,D,C,B}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reachable(D, A..)"})," ⇒ ",e.jsx(n.code,{children:"{E,D,C,B}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reachable(C, A..)"})," ⇒ ",e.jsx(n.code,{children:"{E,D,C,B}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reachable(B, A..)"})," ⇒ ",e.jsx(n.code,{children:"{E,D,C,B}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"reachable(A, A..)"})," ⇒ ",e.jsx(n.code,{children:"{}"})," (empty set)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"function"})," ",e.jsx(n.code,{children:"connected()"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"connected(E|A)"})," ⇒ ",e.jsx(n.code,{children:"{E,B,A}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"connected(D|A)"})," ⇒ ",e.jsx(n.code,{children:"{D,C,B,A}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"connected(A)"})," ⇒ ",e.jsx(n.code,{children:"{A}"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"function"})," ",e.jsx(n.code,{children:"heads()"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"heads(E|D)"})," ⇒ ",e.jsx(n.code,{children:"{E,D}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"heads(E|C)"})," ⇒ ",e.jsx(n.code,{children:"{E,C}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"heads(E|B)"})," ⇒ ",e.jsx(n.code,{children:"{E}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"heads(E|A)"})," ⇒ ",e.jsx(n.code,{children:"{E}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"heads(A)"})," ⇒ ",e.jsx(n.code,{children:"{A}"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"function"})," ",e.jsx(n.code,{children:"roots()"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"roots(E|D)"})," ⇒ ",e.jsx(n.code,{children:"{E,D}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"roots(E|C)"})," ⇒ ",e.jsx(n.code,{children:"{E,C}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"roots(E|B)"})," ⇒ ",e.jsx(n.code,{children:"{B}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"roots(E|A)"})," ⇒ ",e.jsx(n.code,{children:"{A}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"roots(A)"})," ⇒ ",e.jsx(n.code,{children:"{A}"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"function"})," ",e.jsx(n.code,{children:"fork_point()"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fork_point(E|D)"})," ⇒ ",e.jsx(n.code,{children:"{B}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fork_point(E|C)"})," ⇒ ",e.jsx(n.code,{children:"{A}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fork_point(E|B)"})," ⇒ ",e.jsx(n.code,{children:"{B}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fork_point(E|A)"})," ⇒ ",e.jsx(n.code,{children:"{A}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fork_point(D|C)"})," ⇒ ",e.jsx(n.code,{children:"{C}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fork_point(D|B)"})," ⇒ ",e.jsx(n.code,{children:"{B}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fork_point(B|C)"})," ⇒ ",e.jsx(n.code,{children:"{A}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fork_point(A)"})," ⇒ ",e.jsx(n.code,{children:"{A}"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fork_point(none())"})," ⇒ ",e.jsx(n.code,{children:"{}"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"string-patterns",children:"String patterns"}),`
`,e.jsx(n.p,{children:`Functions that perform string matching support the following pattern syntax (the
quotes are optional):`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'"string"'})," or ",e.jsx(n.code,{children:'substring:"string"'}),": Matches strings that contain ",e.jsx(n.code,{children:"string"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'exact:"string"'}),": Matches strings exactly equal to ",e.jsx(n.code,{children:"string"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'glob:"pattern"'}),": Matches strings with Unix-style shell ",e.jsxs(n.a,{href:"https://docs.rs/globset/latest/globset/#syntax",children:[`wildcard
`,e.jsx(n.code,{children:"pattern"})]}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'regex:"pattern"'}),": Matches substrings with ",e.jsxs(n.a,{href:"https://docs.rs/regex/latest/regex/#syntax",children:[`regular
expression `,e.jsx(n.code,{children:"pattern"})]}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:["You can append ",e.jsx(n.code,{children:"-i"}),` after the kind to match case‐insensitively (e.g.
`,e.jsx(n.code,{children:'glob-i:"fix*jpeg*"'}),")."]}),`
`,e.jsx(n.h2,{id:"date-patterns",children:"Date patterns"}),`
`,e.jsx(n.p,{children:"Functions that perform date matching support the following pattern syntax:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'after:"string"'}),": Matches dates exactly at or after the given date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'before:"string"'}),": Matches dates before, but not including, the given date."]}),`
`]}),`
`,e.jsx(n.p,{children:"Date strings can be specified in several forms, including:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"2024-02-01"}),`
`,e.jsx(n.li,{children:"2024-02-01T12:00:00"}),`
`,e.jsx(n.li,{children:"2024-02-01T12:00:00-08:00"}),`
`,e.jsx(n.li,{children:"2024-02-01 12:00:00"}),`
`,e.jsx(n.li,{children:"2 days ago"}),`
`,e.jsx(n.li,{children:"5 minutes ago"}),`
`,e.jsx(n.li,{children:"yesterday"}),`
`,e.jsx(n.li,{children:"yesterday 5pm"}),`
`,e.jsx(n.li,{children:"yesterday 10:30"}),`
`,e.jsx(n.li,{children:"yesterday 15:30"}),`
`]}),`
`,e.jsx(n.h2,{id:"aliases",children:"Aliases"}),`
`,e.jsx(n.p,{children:`New symbols and functions can be defined in the config file, by using any
combination of the predefined symbols/functions and other aliases.`}),`
`,e.jsx(n.p,{children:`Alias functions can be overloaded by the number of parameters. However, builtin
function will be shadowed by name, and can't co-exist with aliases.`}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"["}),e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"revset-aliases"}),e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"]"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"'HEAD' = "}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'@-'"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"'user()' = "}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:`'user("me@example.org")'`})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"'user(x)' = "}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'author(x) | committer(x)'"})]})]})})}),`
`,e.jsx(n.h3,{id:"built-in-aliases",children:"Built-in Aliases"}),`
`,e.jsxs(n.p,{children:[`The following aliases are built-in and used for certain operations. These functions
are defined as aliases in order to allow you to overwrite them as needed.
See `,e.jsx(n.a,{href:"https://github.com/jj-vcs/jj/blob/main/cli/src/config/revsets.toml",children:"revsets.toml"}),`
for a comprehensive list.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"trunk()"}),`: Resolves to the head commit for the default bookmark of the default
remote, or the remote named `,e.jsx(n.code,{children:"upstream"})," or ",e.jsx(n.code,{children:"origin"}),`. This is set at the
repository level upon initialization of a Jujutsu repository.`]}),`
`,e.jsxs(n.p,{children:[`If the default bookmark cannot be resolved during initialization, the default
global configuration tries the bookmarks `,e.jsx(n.code,{children:"main"}),", ",e.jsx(n.code,{children:"master"}),", and ",e.jsx(n.code,{children:"trunk"}),` on the
`,e.jsx(n.code,{children:"upstream"})," and ",e.jsx(n.code,{children:"origin"}),` remotes. If more than one potential trunk commit
exists, the newest one is chosen. If none of the bookmarks exist, the revset
evaluates to `,e.jsx(n.code,{children:"root()"}),"."]}),`
`,e.jsxs(n.p,{children:["You can ",e.jsx(n.a,{href:"/reference/config",children:"override"}),` this as appropriate. If you do, make sure it
always resolves to exactly one commit. For example:`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"["}),e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"revset-aliases"}),e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"]"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"'trunk()' = "}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'your-bookmark@your-remote'"})]})]})})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"builtin_immutable_heads()"}),`: Resolves to
`,e.jsx(n.code,{children:"present(trunk()) | tags() | untracked_remote_bookmarks()"}),`. It is used as the
default definition for `,e.jsx(n.code,{children:"immutable_heads()"}),` below. It is not recommended to
redefine this alias. Prefer to redefine `,e.jsx(n.code,{children:"immutable_heads()"})," instead."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"immutable_heads()"}),`: Resolves to
`,e.jsx(n.code,{children:"present(trunk()) | tags() | untracked_remote_bookmarks()"}),` by default. It is
actually defined as `,e.jsx(n.code,{children:"builtin_immutable_heads()"}),`, and can be overridden as
required. See `,e.jsx(n.a,{href:"config#set-of-immutable-commits",children:"here"})," for details."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"immutable()"}),": The set of commits that ",e.jsx(n.code,{children:"jj"}),` treats as immutable. This is
equivalent to `,e.jsx(n.code,{children:"::(immutable_heads() | root())"}),`. It is not recommended to redefine
this alias. Note that modifying this will `,e.jsx(n.em,{children:"not"}),` change whether a commit is immutable.
To do that, edit `,e.jsx(n.code,{children:"immutable_heads()"}),"."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"mutable()"}),": The set of commits that ",e.jsx(n.code,{children:"jj"}),` treats as mutable. This is
equivalent to `,e.jsx(n.code,{children:"~immutable()"}),`. It is not recommended to redefined this alias.
Note that modifying this will `,e.jsx(n.em,{children:"not"}),` change whether a commit is immutable.
To do that, edit `,e.jsx(n.code,{children:"immutable_heads()"}),"."]}),`
`]}),`
`]}),`
`,e.jsxs(n.h2,{id:"the-all-modifier",children:["The ",e.jsx(n.code,{children:"all:"})," modifier"]}),`
`,e.jsxs(n.p,{children:["Certain commands (such as ",e.jsx(n.code,{children:"jj rebase"}),`) can take multiple revset arguments, and
each of these may resolve to one-or-many revisions.`]}),`
`,e.jsxs(n.p,{children:["If you set the ",e.jsx(n.code,{children:"ui.always-allow-large-revsets"})," option to ",e.jsx(n.code,{children:"false"}),", ",e.jsx(n.code,{children:"jj"}),` will not
allow revsets that resolve to more than one revision — a so-called "large
revset" — and will ask you to confirm that you want to proceed by
prefixing it with the `,e.jsx(n.code,{children:"all:"})," modifier. ",e.jsx(n.em,{children:"This option is planned to be removed."})]}),`
`,e.jsxs(n.p,{children:["An ",e.jsx(n.code,{children:"all:"}),` modifier before a revset expression does not otherwise change its
meaning. Strictly speaking, it is not part of the revset language. The notation
is similar to the modifiers like `,e.jsx(n.code,{children:"glob:"})," allowed before ",e.jsx(n.a,{href:"#string-patterns",children:`string
patterns`}),"."]}),`
`,e.jsxs(n.p,{children:["For example, ",e.jsx(n.code,{children:"jj rebase -r w -d xyz+"})," will rebase ",e.jsx(n.code,{children:"w"}),` on top of the child of
`,e.jsx(n.code,{children:"xyz"})," as long as ",e.jsx(n.code,{children:"xyz"})," has exactly one child."]}),`
`,e.jsxs(n.p,{children:["If ",e.jsx(n.code,{children:"xyz"})," has more than one child, the ",e.jsx(n.code,{children:"all:"})," modifier is ",e.jsx(n.em,{children:"not"}),` specified, and
`,e.jsx(n.code,{children:"ui.always-allow-large-revsets"})," is ",e.jsx(n.code,{children:"false"}),", ",e.jsx(n.code,{children:"jj rebase -r w -d xyz+"}),` will return
an error.`]}),`
`,e.jsxs(n.p,{children:["If ",e.jsx(n.code,{children:"ui.always-allow-large-revsets"})," was ",e.jsx(n.code,{children:"true"}),` (the default), the above command
would act as if `,e.jsx(n.code,{children:"all:"})," was set (see the next paragraph)."]}),`
`,e.jsxs(n.p,{children:["With the ",e.jsx(n.code,{children:"all:"})," modifier, ",e.jsx(n.code,{children:"jj rebase -r w -d all:xyz+"})," will make ",e.jsx(n.code,{children:"w"}),` into a merge
commit if `,e.jsx(n.code,{children:"xyz"})," has more than one child. The ",e.jsx(n.code,{children:"all:"}),` modifier confirms that the
user expected `,e.jsx(n.code,{children:"xyz"})," to have more than one child."]}),`
`,e.jsxs(n.p,{children:["A more useful example: if ",e.jsx(n.code,{children:"w"})," is a merge commit, ",e.jsx(n.code,{children:"jj rebase -s w -d all:w- -d xyz"})," will add ",e.jsx(n.code,{children:"xyz"})," to the list of ",e.jsx(n.code,{children:"w"}),"'s parents."]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsxs(n.p,{children:["Show the parent(s) of the working-copy commit (like ",e.jsx(n.code,{children:"git log -1 HEAD"}),"):"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" log"}),e.jsx(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -r"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" @-"})]})})})}),`
`,e.jsxs(n.p,{children:["Show all ancestors of the working copy (like plain ",e.jsx(n.code,{children:"git log"}),")"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" log"}),e.jsx(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -r"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" ::@"})]})})})}),`
`,e.jsx(n.p,{children:"Show commits not on any remote bookmark:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" log"}),e.jsx(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -r"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'remote_bookmarks()..'"})]})})})}),`
`,e.jsxs(n.p,{children:["Show commits not on ",e.jsx(n.code,{children:"origin"})," (if you have other remotes like ",e.jsx(n.code,{children:"fork"}),"):"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" log"}),e.jsx(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -r"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'remote_bookmarks(remote=origin)..'"})]})})})}),`
`,e.jsx(n.p,{children:'Show the initial commits in the repo (the ones Git calls "root commits"):'}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" log"}),e.jsx(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -r"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'root()+'"})]})})})}),`
`,e.jsxs(n.p,{children:["Show some important commits (like ",e.jsx(n.code,{children:"git --simplify-by-decoration"}),"):"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" log"}),e.jsx(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -r"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'tags() | bookmarks()'"})]})})})}),`
`,e.jsx(n.p,{children:`Show local commits leading up to the working copy, as well as descendants of
those commits:`}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" log"}),e.jsx(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -r"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '(remote_bookmarks()..@)::'"})]})})})}),`
`,e.jsx(n.p,{children:`Show commits authored by "martinvonz" and containing the word "reset" in the
description:`}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" log"}),e.jsx(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -r"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'author(martinvonz) & description(reset)'"})]})})})})]})}function d(i={}){const{wrapper:n}=i.components||{};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{d as default,r as extractedReferences,o as frontmatter,a as structuredData,c as toc};
