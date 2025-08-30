import { jsx, jsxs, Fragment } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Revsets"
};
let extractedReferences = [{
  "href": "https://www.mercurial-scm.org/repo/hg/help/revsets"
}, {
  "href": "glossary#visible-commits"
}, {
  "href": "#functions"
}, {
  "href": "#string-patterns"
}, {
  "href": "#string-patterns"
}, {
  "href": "#string-patterns"
}, {
  "href": "https://repo.mercurial-scm.org/hg/help/revsets"
}, {
  "href": "https://repo.mercurial-scm.org/hg/help/revsets"
}, {
  "href": "#string-patterns"
}, {
  "href": "#string-patterns"
}, {
  "href": "#string-patterns"
}, {
  "href": "#string-patterns"
}, {
  "href": "#string-patterns"
}, {
  "href": "#date-patterns"
}, {
  "href": "#string-patterns"
}, {
  "href": "#string-patterns"
}, {
  "href": "#string-patterns"
}, {
  "href": "#date-patterns"
}, {
  "href": "/reference/filesets"
}, {
  "href": "https://docs.rs/globset/latest/globset/#syntax"
}, {
  "href": "https://docs.rs/regex/latest/regex/#syntax"
}, {
  "href": "https://github.com/jj-vcs/jj/blob/main/cli/src/config/revsets.toml"
}, {
  "href": "/reference/config"
}, {
  "href": "config#set-of-immutable-commits"
}, {
  "href": "#string-patterns"
}];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": 'Jujutsu supports a functional language for selecting a set of revisions.\nExpressions in this language are called "revsets" (the idea comes from\nMercurial). The language\nconsists of symbols, operators, and functions.'
  }, {
    "heading": void 0,
    "content": "Most jj commands accept a revset (or multiple). Many commands, such as\njj edit <revset> expect the revset to resolve to a single commit; it is an\nerror to pass a revset that resolves to more than one commit (or zero commits)\nto such commands."
  }, {
    "heading": void 0,
    "content": 'The words "revisions" and "commits" are used interchangeably in this document.'
  }, {
    "heading": "hidden-revisions",
    "content": "Most revsets search only the visible commits.\nOther commits are only included if you explicitly mention them (e.g. by commit\nID, <name>@<remote> symbol, or at_operation() function)."
  }, {
    "heading": "hidden-revisions",
    "content": "If hidden commits are specified, their ancestors also become available to the\nsearch space. They are included in all(), x.., ~x, etc., but not in\n..visible_heads(), etc. For example, hidden_id | all() is equivalent to\nhidden_id | ::(hidden_id | visible_heads())."
  }, {
    "heading": "symbols",
    "content": "The @ expression refers to the working copy commit in the current workspace.\nUse <workspace name>@ to refer to the working-copy commit in another\nworkspace. Use <name>@<remote> to refer to a remote-tracking bookmark."
  }, {
    "heading": "symbols",
    "content": "A full commit ID refers to a single commit. A unique prefix of the full commit\nID can also be used. It is an error to use a non-unique prefix."
  }, {
    "heading": "symbols",
    "content": "A full change ID refers to a visible commit with that change ID. A unique prefix\nof the full change ID can also be used. It is an error to use a non-unique\nprefix or a divergent change ID."
  }, {
    "heading": "symbols",
    "content": `Use single or double quotes to prevent a symbol from being
interpreted as an expression. For example, "x-" is the symbol x-, not the
parents of symbol x. Taking shell quoting into account, you may need to use
something like jj log -r '"x-"'.`
  }, {
    "heading": "priority",
    "content": "Jujutsu attempts to resolve a symbol in the following order:"
  }, {
    "heading": "priority",
    "content": "Tag name"
  }, {
    "heading": "priority",
    "content": "Bookmark name"
  }, {
    "heading": "priority",
    "content": "Git ref"
  }, {
    "heading": "priority",
    "content": "Commit ID or change ID"
  }, {
    "heading": "priority",
    "content": "To override the priority, use the appropriate revset function. For\nexample, to resolve abc as a commit ID even if there happens to be a bookmark\nby the same name, use commit_id(abc). This is particularly useful in scripts."
  }, {
    "heading": "operators",
    "content": "The following operators are supported. x and y below can be any revset, not\nonly symbols."
  }, {
    "heading": "operators",
    "content": "x-: Parents of x, can be empty."
  }, {
    "heading": "operators",
    "content": "x+: Children of x, can be empty."
  }, {
    "heading": "operators",
    "content": "x::: Descendants of x, including the commits in x itself. Equivalent to\nx::visible_heads() if no hidden revisions are mentioned."
  }, {
    "heading": "operators",
    "content": "x..: Revisions that are not ancestors of x. Equivalent to ~::x, and\nx..visible_heads() if no hidden revisions are mentioned."
  }, {
    "heading": "operators",
    "content": "::x: Ancestors of x, including the commits in x itself. Shorthand for\nroot()::x."
  }, {
    "heading": "operators",
    "content": "..x: Ancestors of x, including the commits in x itself, but excluding\nthe root commit. Shorthand for root()..x. Equivalent to ::x ~ root()."
  }, {
    "heading": "operators",
    "content": "x::y: Descendants of x that are also ancestors of y. Equivalent\nto x:: & ::y. This is what git log calls --ancestry-path x..y."
  }, {
    "heading": "operators",
    "content": "x..y: Ancestors of y that are not also ancestors of x. Equivalent to\n::y ~ ::x. This is what git log calls x..y (i.e. the same as we call it)."
  }, {
    "heading": "operators",
    "content": "::: All visible commits in the repo. Equivalent to all(), and\nroot()::visible_heads() if no hidden revisions are mentioned."
  }, {
    "heading": "operators",
    "content": "..: All visible commits in the repo, but excluding the root commit.\nEquivalent to ~root(), and root()..visible_heads() if no hidden revisions\nare mentioned."
  }, {
    "heading": "operators",
    "content": "~x: Revisions that are not in x."
  }, {
    "heading": "operators",
    "content": "x & y: Revisions that are in both x and y."
  }, {
    "heading": "operators",
    "content": "x ~ y: Revisions that are in x but not in y."
  }, {
    "heading": "operators",
    "content": "x | y: Revisions that are in either x or y (or both)."
  }, {
    "heading": "operators",
    "content": "(listed in order of binding strengths)"
  }, {
    "heading": "operators",
    "content": "You can use parentheses to control evaluation order, such as (x & y) | z or\nx & (y | z)."
  }, {
    "heading": "operators",
    "content": "??? examples"
  }, {
    "heading": "operators",
    "content": "Given this history:"
  }, {
    "heading": "operators",
    "content": "Operator x-"
  }, {
    "heading": "operators",
    "content": "D- \u21D2 {C,B}"
  }, {
    "heading": "operators",
    "content": "B- \u21D2 {A}"
  }, {
    "heading": "operators",
    "content": "A- \u21D2 {root()}"
  }, {
    "heading": "operators",
    "content": "root()- \u21D2 {} (empty set)"
  }, {
    "heading": "operators",
    "content": "none()- \u21D2 {} (empty set)"
  }, {
    "heading": "operators",
    "content": "(D|A)- \u21D2 {C,B,root()}"
  }, {
    "heading": "operators",
    "content": "(C|B)- \u21D2 {A}"
  }, {
    "heading": "operators",
    "content": "Operator x+"
  }, {
    "heading": "operators",
    "content": "D+ \u21D2 {} (empty set)"
  }, {
    "heading": "operators",
    "content": "B+ \u21D2 {D}"
  }, {
    "heading": "operators",
    "content": "A+ \u21D2 {B,C}"
  }, {
    "heading": "operators",
    "content": "root()+ \u21D2 {A}"
  }, {
    "heading": "operators",
    "content": "none()+ \u21D2 {} (empty set)"
  }, {
    "heading": "operators",
    "content": "(C|B)+ \u21D2 {D}"
  }, {
    "heading": "operators",
    "content": "(B|root())+ \u21D2 {D,A}"
  }, {
    "heading": "operators",
    "content": "Operator x::"
  }, {
    "heading": "operators",
    "content": "D:: \u21D2 {D}"
  }, {
    "heading": "operators",
    "content": "B:: \u21D2 {D,B}"
  }, {
    "heading": "operators",
    "content": "A:: \u21D2 {D,C,B,A}"
  }, {
    "heading": "operators",
    "content": "root():: \u21D2 {D,C,B,A,root()}"
  }, {
    "heading": "operators",
    "content": "none():: \u21D2 {} (empty set)"
  }, {
    "heading": "operators",
    "content": "(C|B):: \u21D2 {D,C,B}"
  }, {
    "heading": "operators",
    "content": "Operator x.."
  }, {
    "heading": "operators",
    "content": "D.. \u21D2 {} (empty set)"
  }, {
    "heading": "operators",
    "content": "B.. \u21D2 {D,C} (note that, unlike B::, this includes C)"
  }, {
    "heading": "operators",
    "content": "A.. \u21D2 {D,C,B}"
  }, {
    "heading": "operators",
    "content": "root().. \u21D2 {D,C,B,A}"
  }, {
    "heading": "operators",
    "content": "none().. \u21D2 {D,C,B,A,root()}"
  }, {
    "heading": "operators",
    "content": "(C|B).. \u21D2 {D}"
  }, {
    "heading": "operators",
    "content": "Operator ::x"
  }, {
    "heading": "operators",
    "content": "::D \u21D2 {D,C,B,A,root()}"
  }, {
    "heading": "operators",
    "content": "::B \u21D2 {B,A,root()}"
  }, {
    "heading": "operators",
    "content": "::A \u21D2 {A,root()}"
  }, {
    "heading": "operators",
    "content": "::root() \u21D2 {root()}"
  }, {
    "heading": "operators",
    "content": "::none() \u21D2 {} (empty set)"
  }, {
    "heading": "operators",
    "content": "::(C|B) \u21D2 {C,B,A,root()}"
  }, {
    "heading": "operators",
    "content": "Operator ..x"
  }, {
    "heading": "operators",
    "content": "..D \u21D2 {D,C,B,A}"
  }, {
    "heading": "operators",
    "content": "..B \u21D2 {B,A}"
  }, {
    "heading": "operators",
    "content": "..A \u21D2 {A}"
  }, {
    "heading": "operators",
    "content": "..root() \u21D2 {} (empty set)"
  }, {
    "heading": "operators",
    "content": "..none() \u21D2 {} (empty set)"
  }, {
    "heading": "operators",
    "content": "..(C|B) \u21D2 {C,B,A}"
  }, {
    "heading": "operators",
    "content": "Operator x::y"
  }, {
    "heading": "operators",
    "content": "D::D \u21D2 {D}"
  }, {
    "heading": "operators",
    "content": "B::D \u21D2 {D,B} (note that, unlike B..D, this includes B and excludes C)"
  }, {
    "heading": "operators",
    "content": "B::C \u21D2 {} (empty set) (note that, unlike B..C, this excludes C)"
  }, {
    "heading": "operators",
    "content": "A::D \u21D2 {D,C,B,A}"
  }, {
    "heading": "operators",
    "content": "root()::D \u21D2 {D,C,B,A,root()}"
  }, {
    "heading": "operators",
    "content": "none()::D \u21D2 {} (empty set)"
  }, {
    "heading": "operators",
    "content": "D::B \u21D2 {} (empty set)"
  }, {
    "heading": "operators",
    "content": "(C|B)::(C|B) \u21D2 {C,B}"
  }, {
    "heading": "operators",
    "content": "Operator x..y"
  }, {
    "heading": "operators",
    "content": "D..D \u21D2 {} (empty set)"
  }, {
    "heading": "operators",
    "content": "B..D \u21D2 {D,C} (note that, unlike B::D, this includes C and excludes B)"
  }, {
    "heading": "operators",
    "content": "B..C \u21D2 {C} (note that, unlike B::C, this includes C)"
  }, {
    "heading": "operators",
    "content": "A..D \u21D2 {D,C,B}"
  }, {
    "heading": "operators",
    "content": "root()..D \u21D2 {D,C,B,A}"
  }, {
    "heading": "operators",
    "content": "none()..D \u21D2 {D,C,B,A,root()}"
  }, {
    "heading": "operators",
    "content": "D..B \u21D2 {} (empty set)"
  }, {
    "heading": "operators",
    "content": "(C|B)..(C|B) \u21D2 {} (empty set)"
  }, {
    "heading": "functions",
    "content": "You can also specify revisions by using functions. Some functions take other\nrevsets (expressions) as arguments."
  }, {
    "heading": "functions",
    "content": '??? note "Function argument syntax"'
  }, {
    "heading": "functions",
    "content": "In this documentation, optional arguments are indicated with square\nbrackets like [arg]. Some arguments also have an optional label which can\nbe used to specify that argument without specifying all previous arguments."
  }, {
    "heading": "functions",
    "content": "For instance, remote_bookmarks([bookmark_pattern], [[remote=]remote_pattern])\nindicates that all of the following usages are valid:"
  }, {
    "heading": "functions",
    "content": "remote_bookmarks()"
  }, {
    "heading": "functions",
    "content": 'remote_bookmarks("main")'
  }, {
    "heading": "functions",
    "content": 'remote_bookmarks("main", "origin")'
  }, {
    "heading": "functions",
    "content": 'remote_bookmarks("main", remote="origin")'
  }, {
    "heading": "functions",
    "content": 'remote_bookmarks(remote="origin")'
  }, {
    "heading": "functions",
    "content": "parents(x, [depth]): parents(x) is the same as x-.\nparents(x, depth) returns the parents of x at the given depth. For\ninstance, parents(x, 3) is equivalent to x---."
  }, {
    "heading": "functions",
    "content": "children(x, [depth]): children(x) is the same as x+.\nchildren(x, depth) returns the children of x at the given depth. For\ninstance, children(x, 3) is equivalent to x+++."
  }, {
    "heading": "functions",
    "content": "ancestors(x, [depth]): ancestors(x) is the same as ::x.\nancestors(x, depth) returns the ancestors of x limited to the given\ndepth."
  }, {
    "heading": "functions",
    "content": "descendants(x, [depth]): descendants(x) is the same as x::.\ndescendants(x, depth) returns the descendants of x limited to the given\ndepth."
  }, {
    "heading": "functions",
    "content": "first_parent(x, [depth]): first_parent(x) is similar to parents(x), but\nfor merges, it only returns the first parent instead of returning all parents.\nThe depth argument also works similarly, so first_parent(x, 2) is\nequivalent to first_parent(first_parent(x))."
  }, {
    "heading": "functions",
    "content": "first_ancestors(x, [depth]): Similar to ancestors(x, [depth]), but only\ntraverses the first parent of each commit. In Git, the first parent of a merge\ncommit is conventionally the branch into which changes are being merged, so\nfirst_ancestors() can be used to exclude changes made on other branches."
  }, {
    "heading": "functions",
    "content": "reachable(srcs, domain): All commits reachable from srcs within\ndomain, traversing all parent and child edges."
  }, {
    "heading": "functions",
    "content": "connected(x): Same as x::x. Useful when x includes several commits."
  }, {
    "heading": "functions",
    "content": "all(): All visible commits and ancestors of commits explicitly mentioned."
  }, {
    "heading": "functions",
    "content": "none(): No commits. This function is rarely useful; it is provided for\ncompleteness."
  }, {
    "heading": "functions",
    "content": "change_id(prefix): Commits with the given change ID prefix. If the specified\nchange is divergent, this resolves to multiple commits. It is an error to use a\nnon-unique prefix. Unmatched prefix isn't an error."
  }, {
    "heading": "functions",
    "content": "commit_id(prefix): Commits with the given commit ID prefix. It is an error\nto use a non-unique prefix. Unmatched prefix isn't an error."
  }, {
    "heading": "functions",
    "content": "bookmarks([pattern]): All local bookmark targets. If pattern is specified,\nthis selects the bookmarks whose name match the given string\npattern. For example, bookmarks(push) would match the\nbookmarks push-123 and repushed but not the bookmark main. If a bookmark is\nin a conflicted state, all its possible targets are included."
  }, {
    "heading": "functions",
    "content": "remote_bookmarks([bookmark_pattern], [[remote=]remote_pattern]): All remote\nbookmarks targets across all remotes. If just the bookmark_pattern is\nspecified, the bookmarks whose names match the given string\npattern across all remotes are selected. If both\nbookmark_pattern and remote_pattern are specified, the selection is\nfurther restricted to just the remotes whose names match remote_pattern."
  }, {
    "heading": "functions",
    "content": "For example, remote_bookmarks(push, ri) would match the bookmarks\npush-123@origin and repushed@private but not push-123@upstream or\nmain@origin or main@upstream. If a bookmark is in a conflicted state, all\nits possible targets are included."
  }, {
    "heading": "functions",
    "content": "While Git-tracking bookmarks can be selected by <name>@git, these bookmarks\naren't included in remote_bookmarks()."
  }, {
    "heading": "functions",
    "content": "tracked_remote_bookmarks([bookmark_pattern], [[remote=]remote_pattern]): All\ntargets of tracked remote bookmarks. Supports the same optional arguments as\nremote_bookmarks()."
  }, {
    "heading": "functions",
    "content": "untracked_remote_bookmarks([bookmark_pattern], [[remote=]remote_pattern]):\nAll targets of untracked remote bookmarks. Supports the same optional arguments\nas remote_bookmarks()."
  }, {
    "heading": "functions",
    "content": "tags([pattern]): All tag targets. If pattern is specified,\nthis selects the tags whose name match the given string\npattern. For example, tags(v1) would match the\ntags v123 and rev1 but not the tag v2. If a tag is\nin a conflicted state, all its possible targets are included."
  }, {
    "heading": "functions",
    "content": "git_refs(): All Git ref targets as of the last import. If a Git ref\nis in a conflicted state, all its possible targets are included."
  }, {
    "heading": "functions",
    "content": "git_head(): The Git HEAD target as of the last import."
  }, {
    "heading": "functions",
    "content": "visible_heads(): All visible heads (same as heads(all()) if no hidden\nrevisions are mentioned)."
  }, {
    "heading": "functions",
    "content": "root(): The virtual commit that is the oldest ancestor of all other commits."
  }, {
    "heading": "functions",
    "content": "heads(x): Commits in x that are not ancestors of other commits in x.\nEquivalent to x ~ ::x-. Note that this is different from\nMercurial's heads(x)\nfunction, which is equivalent to x ~ x-."
  }, {
    "heading": "functions",
    "content": "roots(x): Commits in x that are not descendants of other commits in x.\nEquivalent to x ~ x+::. Note that this is different from\nMercurial's roots(x)\nfunction, which is equivalent to x ~ x+."
  }, {
    "heading": "functions",
    "content": "latest(x, [count]): Latest count commits in x, based on committer\ntimestamp. The default count is 1."
  }, {
    "heading": "functions",
    "content": "fork_point(x): The fork point of all commits in x. The fork point is the\ncommon ancestor(s) of all commits in x which do not have any descendants\nthat are also common ancestors of all commits in x. It is equivalent to\nthe revset heads(::x_1 & ::x_2 & ... & ::x_N), where x_{1..N} are commits\nin x. If x resolves to a single commit, fork_point(x) resolves to x."
  }, {
    "heading": "functions",
    "content": "bisect(x): Finds commits in the input set for which about half of the input\nset are descendants. The current implementation deals somewhat poorly with\nnon-linear history."
  }, {
    "heading": "functions",
    "content": "merges(): Merge commits."
  }, {
    "heading": "functions",
    "content": "description(pattern): Commits that have a description matching the given\nstring pattern."
  }, {
    "heading": "functions",
    "content": 'A non-empty description is usually terminated with newline character. For\nexample, description(exact:"") matches commits without description, and\ndescription(exact:"foo\\n") matches commits with description "foo\\n".'
  }, {
    "heading": "functions",
    "content": "subject(pattern): Commits that have a subject matching the given string\npattern. A subject is the first line of the description\n(without newline character.)"
  }, {
    "heading": "functions",
    "content": "author(pattern): Commits with the author's name or email matching the given\nstring pattern. Equivalent to author_name(pattern) |\nauthor_email(pattern)."
  }, {
    "heading": "functions",
    "content": "author_name(pattern): Commits with the author's name matching the given\nstring pattern."
  }, {
    "heading": "functions",
    "content": "author_email(pattern): Commits with the author's email matching the given\nstring pattern."
  }, {
    "heading": "functions",
    "content": "author_date(pattern): Commits with author dates matching the specified date\npattern."
  }, {
    "heading": "functions",
    "content": "mine(): Commits where the author's email matches the email of the current\nuser. Equivalent to author_email(exact-i:<user-email>)"
  }, {
    "heading": "functions",
    "content": "committer(pattern): Commits with the committer's name or email matching the\ngiven string pattern. Equivalent to\ncommitter_name(pattern) | committer_email(pattern)."
  }, {
    "heading": "functions",
    "content": "committer_name(pattern): Commits with the committer's name matching the\ngiven string pattern."
  }, {
    "heading": "functions",
    "content": "committer_email(pattern): Commits with the committer's email matching the\ngiven string pattern."
  }, {
    "heading": "functions",
    "content": "committer_date(pattern): Commits with committer dates matching the specified\ndate pattern."
  }, {
    "heading": "functions",
    "content": "signed(): Commits that are cryptographically signed."
  }, {
    "heading": "functions",
    "content": "empty(): Commits modifying no files. This also includes merges() without\nuser modifications and root()."
  }, {
    "heading": "functions",
    "content": "files(expression): Commits modifying paths matching the given fileset\nexpression."
  }, {
    "heading": "functions",
    "content": "Paths are relative to the directory jj was invoked from. A directory name\nwill match all files in that directory and its subdirectories."
  }, {
    "heading": "functions",
    "content": "For example, files(foo) will match files foo, foo/bar, foo/bar/baz.\nIt will not match foobar or bar/foo."
  }, {
    "heading": "functions",
    "content": 'Some file patterns might need quoting because the expression must also be\nparsable as a revset. For example, . has to be quoted in files(".").'
  }, {
    "heading": "functions",
    "content": "diff_contains(text, [files]): Commits containing diffs matching the given\ntext pattern line by line."
  }, {
    "heading": "functions",
    "content": "The search paths can be narrowed by the files expression. All modified files\nare scanned by default, but it is likely to change in future version to\nrespect the command line path arguments."
  }, {
    "heading": "functions",
    "content": 'For example, diff_contains("TODO", "src") will search revisions where "TODO"\nis added to or removed from files under "src".'
  }, {
    "heading": "functions",
    "content": "conflicts(): Commits with conflicts."
  }, {
    "heading": "functions",
    "content": "present(x): Same as x, but evaluated to none() if any of the commits\nin x doesn't exist (e.g. is an unknown bookmark name.)"
  }, {
    "heading": "functions",
    "content": "coalesce(revsets...): Commits in the first revset in the list of revsets\nwhich does not evaluate to none(). If all revsets evaluate to none(), then\nthe result of coalesce will also be none()."
  }, {
    "heading": "functions",
    "content": "working_copies(): The working copy commits across all the workspaces."
  }, {
    "heading": "functions",
    "content": "at_operation(op, x): Evaluates x at the specified operation. For\nexample, at_operation(@-, visible_heads()) will return all heads which were\nvisible at the previous operation."
  }, {
    "heading": "functions",
    "content": "Since at_operation(op, x) brings all commits that were visible at the\noperation to the search space, at_operation(op, x) | all() is equivalent to\nat_operation(op, x) | ::(at_operation(op, x | visible_heads()) |\nvisible_heads())."
  }, {
    "heading": "functions",
    "content": "??? examples"
  }, {
    "heading": "functions",
    "content": "Given this history:"
  }, {
    "heading": "functions",
    "content": "function reachable()"
  }, {
    "heading": "functions",
    "content": "reachable(E, A..) \u21D2 {E,D,C,B}"
  }, {
    "heading": "functions",
    "content": "reachable(D, A..) \u21D2 {E,D,C,B}"
  }, {
    "heading": "functions",
    "content": "reachable(C, A..) \u21D2 {E,D,C,B}"
  }, {
    "heading": "functions",
    "content": "reachable(B, A..) \u21D2 {E,D,C,B}"
  }, {
    "heading": "functions",
    "content": "reachable(A, A..) \u21D2 {} (empty set)"
  }, {
    "heading": "functions",
    "content": "function connected()"
  }, {
    "heading": "functions",
    "content": "connected(E|A) \u21D2 {E,B,A}"
  }, {
    "heading": "functions",
    "content": "connected(D|A) \u21D2 {D,C,B,A}"
  }, {
    "heading": "functions",
    "content": "connected(A) \u21D2 {A}"
  }, {
    "heading": "functions",
    "content": "function heads()"
  }, {
    "heading": "functions",
    "content": "heads(E|D) \u21D2 {E,D}"
  }, {
    "heading": "functions",
    "content": "heads(E|C) \u21D2 {E,C}"
  }, {
    "heading": "functions",
    "content": "heads(E|B) \u21D2 {E}"
  }, {
    "heading": "functions",
    "content": "heads(E|A) \u21D2 {E}"
  }, {
    "heading": "functions",
    "content": "heads(A) \u21D2 {A}"
  }, {
    "heading": "functions",
    "content": "function roots()"
  }, {
    "heading": "functions",
    "content": "roots(E|D) \u21D2 {E,D}"
  }, {
    "heading": "functions",
    "content": "roots(E|C) \u21D2 {E,C}"
  }, {
    "heading": "functions",
    "content": "roots(E|B) \u21D2 {B}"
  }, {
    "heading": "functions",
    "content": "roots(E|A) \u21D2 {A}"
  }, {
    "heading": "functions",
    "content": "roots(A) \u21D2 {A}"
  }, {
    "heading": "functions",
    "content": "function fork_point()"
  }, {
    "heading": "functions",
    "content": "fork_point(E|D) \u21D2 {B}"
  }, {
    "heading": "functions",
    "content": "fork_point(E|C) \u21D2 {A}"
  }, {
    "heading": "functions",
    "content": "fork_point(E|B) \u21D2 {B}"
  }, {
    "heading": "functions",
    "content": "fork_point(E|A) \u21D2 {A}"
  }, {
    "heading": "functions",
    "content": "fork_point(D|C) \u21D2 {C}"
  }, {
    "heading": "functions",
    "content": "fork_point(D|B) \u21D2 {B}"
  }, {
    "heading": "functions",
    "content": "fork_point(B|C) \u21D2 {A}"
  }, {
    "heading": "functions",
    "content": "fork_point(A) \u21D2 {A}"
  }, {
    "heading": "functions",
    "content": "fork_point(none()) \u21D2 {}"
  }, {
    "heading": "string-patterns",
    "content": "Functions that perform string matching support the following pattern syntax (the\nquotes are optional):"
  }, {
    "heading": "string-patterns",
    "content": '"string" or substring:"string": Matches strings that contain string.'
  }, {
    "heading": "string-patterns",
    "content": 'exact:"string": Matches strings exactly equal to string.'
  }, {
    "heading": "string-patterns",
    "content": 'glob:"pattern": Matches strings with Unix-style shell wildcard\npattern.'
  }, {
    "heading": "string-patterns",
    "content": 'regex:"pattern": Matches substrings with regular\nexpression pattern.'
  }, {
    "heading": "string-patterns",
    "content": 'You can append -i after the kind to match case\u2010insensitively (e.g.\nglob-i:"fix*jpeg*").'
  }, {
    "heading": "date-patterns",
    "content": "Functions that perform date matching support the following pattern syntax:"
  }, {
    "heading": "date-patterns",
    "content": 'after:"string": Matches dates exactly at or after the given date.'
  }, {
    "heading": "date-patterns",
    "content": 'before:"string": Matches dates before, but not including, the given date.'
  }, {
    "heading": "date-patterns",
    "content": "Date strings can be specified in several forms, including:"
  }, {
    "heading": "date-patterns",
    "content": "2024-02-01"
  }, {
    "heading": "date-patterns",
    "content": "2024-02-01T12:00:00"
  }, {
    "heading": "date-patterns",
    "content": "2024-02-01T12:00:00-08:00"
  }, {
    "heading": "date-patterns",
    "content": "2024-02-01 12:00:00"
  }, {
    "heading": "date-patterns",
    "content": "2 days ago"
  }, {
    "heading": "date-patterns",
    "content": "5 minutes ago"
  }, {
    "heading": "date-patterns",
    "content": "yesterday"
  }, {
    "heading": "date-patterns",
    "content": "yesterday 5pm"
  }, {
    "heading": "date-patterns",
    "content": "yesterday 10:30"
  }, {
    "heading": "date-patterns",
    "content": "yesterday 15:30"
  }, {
    "heading": "aliases",
    "content": "New symbols and functions can be defined in the config file, by using any\ncombination of the predefined symbols/functions and other aliases."
  }, {
    "heading": "aliases",
    "content": "Alias functions can be overloaded by the number of parameters. However, builtin\nfunction will be shadowed by name, and can't co-exist with aliases."
  }, {
    "heading": "aliases",
    "content": "For example:"
  }, {
    "heading": "built-in-aliases",
    "content": "The following aliases are built-in and used for certain operations. These functions\nare defined as aliases in order to allow you to overwrite them as needed.\nSee revsets.toml\nfor a comprehensive list."
  }, {
    "heading": "built-in-aliases",
    "content": "trunk(): Resolves to the head commit for the default bookmark of the default\nremote, or the remote named upstream or origin. This is set at the\nrepository level upon initialization of a Jujutsu repository."
  }, {
    "heading": "built-in-aliases",
    "content": "If the default bookmark cannot be resolved during initialization, the default\nglobal configuration tries the bookmarks main, master, and trunk on the\nupstream and origin remotes. If more than one potential trunk commit\nexists, the newest one is chosen. If none of the bookmarks exist, the revset\nevaluates to root()."
  }, {
    "heading": "built-in-aliases",
    "content": "You can override this as appropriate. If you do, make sure it\nalways resolves to exactly one commit. For example:"
  }, {
    "heading": "built-in-aliases",
    "content": "builtin_immutable_heads(): Resolves to\npresent(trunk()) | tags() | untracked_remote_bookmarks(). It is used as the\ndefault definition for immutable_heads() below. It is not recommended to\nredefine this alias. Prefer to redefine immutable_heads() instead."
  }, {
    "heading": "built-in-aliases",
    "content": "immutable_heads(): Resolves to\npresent(trunk()) | tags() | untracked_remote_bookmarks() by default. It is\nactually defined as builtin_immutable_heads(), and can be overridden as\nrequired. See here for details."
  }, {
    "heading": "built-in-aliases",
    "content": "immutable(): The set of commits that jj treats as immutable. This is\nequivalent to ::(immutable_heads() | root()). It is not recommended to redefine\nthis alias. Note that modifying this will not change whether a commit is immutable.\nTo do that, edit immutable_heads()."
  }, {
    "heading": "built-in-aliases",
    "content": "mutable(): The set of commits that jj treats as mutable. This is\nequivalent to ~immutable(). It is not recommended to redefined this alias.\nNote that modifying this will not change whether a commit is immutable.\nTo do that, edit immutable_heads()."
  }, {
    "heading": "the-all-modifier",
    "content": "Certain commands (such as jj rebase) can take multiple revset arguments, and\neach of these may resolve to one-or-many revisions."
  }, {
    "heading": "the-all-modifier",
    "content": 'If you set the ui.always-allow-large-revsets option to false, jj will not\nallow revsets that resolve to more than one revision \u2014 a so-called "large\nrevset" \u2014 and will ask you to confirm that you want to proceed by\nprefixing it with the all: modifier. This option is planned to be removed.'
  }, {
    "heading": "the-all-modifier",
    "content": "An all: modifier before a revset expression does not otherwise change its\nmeaning. Strictly speaking, it is not part of the revset language. The notation\nis similar to the modifiers like glob: allowed before string\npatterns."
  }, {
    "heading": "the-all-modifier",
    "content": "For example, jj rebase -r w -d xyz+ will rebase w on top of the child of\nxyz as long as xyz has exactly one child."
  }, {
    "heading": "the-all-modifier",
    "content": "If xyz has more than one child, the all: modifier is not specified, and\nui.always-allow-large-revsets is false, jj rebase -r w -d xyz+ will return\nan error."
  }, {
    "heading": "the-all-modifier",
    "content": "If ui.always-allow-large-revsets was true (the default), the above command\nwould act as if all: was set (see the next paragraph)."
  }, {
    "heading": "the-all-modifier",
    "content": "With the all: modifier, jj rebase -r w -d all:xyz+ will make w into a merge\ncommit if xyz has more than one child. The all: modifier confirms that the\nuser expected xyz to have more than one child."
  }, {
    "heading": "the-all-modifier",
    "content": "A more useful example: if w is a merge commit, jj rebase -s w -d all:w- -d\nxyz will add xyz to the list of w's parents."
  }, {
    "heading": "examples",
    "content": "Show the parent(s) of the working-copy commit (like git log -1 HEAD):"
  }, {
    "heading": "examples",
    "content": "Show all ancestors of the working copy (like plain git log)"
  }, {
    "heading": "examples",
    "content": "Show commits not on any remote bookmark:"
  }, {
    "heading": "examples",
    "content": "Show commits not on origin (if you have other remotes like fork):"
  }, {
    "heading": "examples",
    "content": 'Show the initial commits in the repo (the ones Git calls "root commits"):'
  }, {
    "heading": "examples",
    "content": "Show some important commits (like git --simplify-by-decoration):"
  }, {
    "heading": "examples",
    "content": "Show local commits leading up to the working copy, as well as descendants of\nthose commits:"
  }, {
    "heading": "examples",
    "content": 'Show commits authored by "martinvonz" and containing the word "reset" in the\ndescription:'
  }],
  "headings": [{
    "id": "hidden-revisions",
    "content": "Hidden revisions"
  }, {
    "id": "symbols",
    "content": "Symbols"
  }, {
    "id": "priority",
    "content": "Priority"
  }, {
    "id": "operators",
    "content": "Operators"
  }, {
    "id": "functions",
    "content": "Functions"
  }, {
    "id": "string-patterns",
    "content": "String patterns"
  }, {
    "id": "date-patterns",
    "content": "Date patterns"
  }, {
    "id": "aliases",
    "content": "Aliases"
  }, {
    "id": "built-in-aliases",
    "content": "Built-in Aliases"
  }, {
    "id": "the-all-modifier",
    "content": "The all: modifier"
  }, {
    "id": "examples",
    "content": "Examples"
  }]
};
const toc = [{
  depth: 2,
  url: "#hidden-revisions",
  title: jsx(Fragment, {
    children: "Hidden revisions"
  })
}, {
  depth: 2,
  url: "#symbols",
  title: jsx(Fragment, {
    children: "Symbols"
  })
}, {
  depth: 3,
  url: "#priority",
  title: jsx(Fragment, {
    children: "Priority"
  })
}, {
  depth: 2,
  url: "#operators",
  title: jsx(Fragment, {
    children: "Operators"
  })
}, {
  depth: 2,
  url: "#functions",
  title: jsx(Fragment, {
    children: "Functions"
  })
}, {
  depth: 2,
  url: "#string-patterns",
  title: jsx(Fragment, {
    children: "String patterns"
  })
}, {
  depth: 2,
  url: "#date-patterns",
  title: jsx(Fragment, {
    children: "Date patterns"
  })
}, {
  depth: 2,
  url: "#aliases",
  title: jsx(Fragment, {
    children: "Aliases"
  })
}, {
  depth: 3,
  url: "#built-in-aliases",
  title: jsx(Fragment, {
    children: "Built-in Aliases"
  })
}, {
  depth: 2,
  url: "#the-all-modifier",
  title: jsxs(Fragment, {
    children: ["The ", jsx("code", {
      children: "all:"
    }), " modifier"]
  })
}, {
  depth: 2,
  url: "#examples",
  title: jsx(Fragment, {
    children: "Examples"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.p, {
      children: ['Jujutsu supports a functional language for selecting a set of revisions.\nExpressions in this language are called "revsets" (the idea comes from\n', jsx(_components.a, {
        href: "https://www.mercurial-scm.org/repo/hg/help/revsets",
        children: "Mercurial"
      }), "). The language\nconsists of symbols, operators, and functions."]
    }), "\n", jsxs(_components.p, {
      children: ["Most ", jsx(_components.code, {
        children: "jj"
      }), " commands accept a revset (or multiple). Many commands, such as\n", jsx(_components.code, {
        children: "jj edit <revset>"
      }), " expect the revset to resolve to a single commit; it is an\nerror to pass a revset that resolves to more than one commit (or zero commits)\nto such commands."]
    }), "\n", jsx(_components.p, {
      children: 'The words "revisions" and "commits" are used interchangeably in this document.'
    }), "\n", jsx(_components.h2, {
      id: "hidden-revisions",
      children: "Hidden revisions"
    }), "\n", jsxs(_components.p, {
      children: ["Most revsets search only the ", jsx(_components.a, {
        href: "glossary#visible-commits",
        children: "visible commits"
      }), ".\nOther commits are only included if you explicitly mention them (e.g. by commit\nID, ", jsx(_components.code, {
        children: "<name>@<remote>"
      }), " symbol, or ", jsx(_components.code, {
        children: "at_operation()"
      }), " function)."]
    }), "\n", jsxs(_components.p, {
      children: ["If hidden commits are specified, their ancestors also become available to the\nsearch space. They are included in ", jsx(_components.code, {
        children: "all()"
      }), ", ", jsx(_components.code, {
        children: "x.."
      }), ", ", jsx(_components.code, {
        children: "~x"
      }), ", etc., but not in\n", jsx(_components.code, {
        children: "..visible_heads()"
      }), ", etc. For example, ", jsx(_components.code, {
        children: "hidden_id | all()"
      }), " is equivalent to\n", jsx(_components.code, {
        children: "hidden_id | ::(hidden_id | visible_heads())"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "symbols",
      children: "Symbols"
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "@"
      }), " expression refers to the working copy commit in the current workspace.\nUse ", jsx(_components.code, {
        children: "<workspace name>@"
      }), " to refer to the working-copy commit in another\nworkspace. Use ", jsx(_components.code, {
        children: "<name>@<remote>"
      }), " to refer to a remote-tracking bookmark."]
    }), "\n", jsx(_components.p, {
      children: "A full commit ID refers to a single commit. A unique prefix of the full commit\nID can also be used. It is an error to use a non-unique prefix."
    }), "\n", jsxs(_components.p, {
      children: ["A full change ID refers to a visible commit with that change ID. A unique prefix\nof the full change ID can also be used. It is an error to use a non-unique\nprefix or ", jsx(_components.a, {
        href: "glossary#divergent-change",
        children: "a divergent change ID"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["Use ", jsx(_components.a, {
        href: "templates#string-literals",
        children: "single or double quotes"
      }), " to prevent a symbol from being\ninterpreted as an expression. For example, ", jsx(_components.code, {
        children: '"x-"'
      }), " is the symbol ", jsx(_components.code, {
        children: "x-"
      }), ", not the\nparents of symbol ", jsx(_components.code, {
        children: "x"
      }), ". Taking shell quoting into account, you may need to use\nsomething like ", jsx(_components.code, {
        children: `jj log -r '"x-"'`
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "priority",
      children: "Priority"
    }), "\n", jsx(_components.p, {
      children: "Jujutsu attempts to resolve a symbol in the following order:"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "Tag name"
      }), "\n", jsx(_components.li, {
        children: "Bookmark name"
      }), "\n", jsx(_components.li, {
        children: "Git ref"
      }), "\n", jsx(_components.li, {
        children: "Commit ID or change ID"
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["To override the priority, use the appropriate ", jsx(_components.a, {
        href: "#functions",
        children: "revset function"
      }), ". For\nexample, to resolve ", jsx(_components.code, {
        children: "abc"
      }), " as a commit ID even if there happens to be a bookmark\nby the same name, use ", jsx(_components.code, {
        children: "commit_id(abc)"
      }), ". This is particularly useful in scripts."]
    }), "\n", jsx(_components.h2, {
      id: "operators",
      children: "Operators"
    }), "\n", jsxs(_components.p, {
      children: ["The following operators are supported. ", jsx(_components.code, {
        children: "x"
      }), " and ", jsx(_components.code, {
        children: "y"
      }), " below can be any revset, not\nonly symbols."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x-"
        }), ": Parents of ", jsx(_components.code, {
          children: "x"
        }), ", can be empty."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x+"
        }), ": Children of ", jsx(_components.code, {
          children: "x"
        }), ", can be empty."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x::"
        }), ": Descendants of ", jsx(_components.code, {
          children: "x"
        }), ", including the commits in ", jsx(_components.code, {
          children: "x"
        }), " itself. Equivalent to\n", jsx(_components.code, {
          children: "x::visible_heads()"
        }), " if no hidden revisions are mentioned."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x.."
        }), ": Revisions that are not ancestors of ", jsx(_components.code, {
          children: "x"
        }), ". Equivalent to ", jsx(_components.code, {
          children: "~::x"
        }), ", and\n", jsx(_components.code, {
          children: "x..visible_heads()"
        }), " if no hidden revisions are mentioned."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "::x"
        }), ": Ancestors of ", jsx(_components.code, {
          children: "x"
        }), ", including the commits in ", jsx(_components.code, {
          children: "x"
        }), " itself. Shorthand for\n", jsx(_components.code, {
          children: "root()::x"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "..x"
        }), ": Ancestors of ", jsx(_components.code, {
          children: "x"
        }), ", including the commits in ", jsx(_components.code, {
          children: "x"
        }), " itself, but excluding\nthe root commit. Shorthand for ", jsx(_components.code, {
          children: "root()..x"
        }), ". Equivalent to ", jsx(_components.code, {
          children: "::x ~ root()"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x::y"
        }), ": Descendants of ", jsx(_components.code, {
          children: "x"
        }), " that are also ancestors of ", jsx(_components.code, {
          children: "y"
        }), ". Equivalent\nto ", jsx(_components.code, {
          children: "x:: & ::y"
        }), ". This is what ", jsx(_components.code, {
          children: "git log"
        }), " calls ", jsx(_components.code, {
          children: "--ancestry-path x..y"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x..y"
        }), ": Ancestors of ", jsx(_components.code, {
          children: "y"
        }), " that are not also ancestors of ", jsx(_components.code, {
          children: "x"
        }), ". Equivalent to\n", jsx(_components.code, {
          children: "::y ~ ::x"
        }), ". This is what ", jsx(_components.code, {
          children: "git log"
        }), " calls ", jsx(_components.code, {
          children: "x..y"
        }), " (i.e. the same as we call it)."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "::"
        }), ": All visible commits in the repo. Equivalent to ", jsx(_components.code, {
          children: "all()"
        }), ", and\n", jsx(_components.code, {
          children: "root()::visible_heads()"
        }), " if no hidden revisions are mentioned."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".."
        }), ": All visible commits in the repo, but excluding the root commit.\nEquivalent to ", jsx(_components.code, {
          children: "~root()"
        }), ", and ", jsx(_components.code, {
          children: "root()..visible_heads()"
        }), " if no hidden revisions\nare mentioned."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "~x"
        }), ": Revisions that are not in ", jsx(_components.code, {
          children: "x"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x & y"
        }), ": Revisions that are in both ", jsx(_components.code, {
          children: "x"
        }), " and ", jsx(_components.code, {
          children: "y"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x ~ y"
        }), ": Revisions that are in ", jsx(_components.code, {
          children: "x"
        }), " but not in ", jsx(_components.code, {
          children: "y"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x | y"
        }), ": Revisions that are in either ", jsx(_components.code, {
          children: "x"
        }), " or ", jsx(_components.code, {
          children: "y"
        }), " (or both)."]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "(listed in order of binding strengths)"
    }), "\n", jsxs(_components.p, {
      children: ["You can use parentheses to control evaluation order, such as ", jsx(_components.code, {
        children: "(x & y) | z"
      }), " or\n", jsx(_components.code, {
        children: "x & (y | z)"
      }), "."]
    }), "\n", "\n", jsx(_components.p, {
      children: "??? examples"
    }), "\n", jsx(_components.p, {
      children: "Given this history:"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "o D"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "|\\"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "| o C"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "| |"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "o | B"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "|/"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "o A"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "o root()"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "Operator"
      }), " ", jsx(_components.code, {
        children: "x-"
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "D-"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{C,B}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "B-"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{A}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "A-"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{root()}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "root()-"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{}"
        }), " (empty set)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "none()-"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{}"
        }), " (empty set)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "(D|A)-"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{C,B,root()}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "(C|B)-"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{A}"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "Operator"
      }), " ", jsx(_components.code, {
        children: "x+"
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "D+"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{}"
        }), " (empty set)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "B+"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "A+"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{B,C}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "root()+"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{A}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "none()+"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{}"
        }), " (empty set)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "(C|B)+"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "(B|root())+"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,A}"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "Operator"
      }), " ", jsx(_components.code, {
        children: "x::"
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "D::"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "B::"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,B}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "A::"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,C,B,A}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "root()::"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,C,B,A,root()}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "none()::"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{}"
        }), " (empty set)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "(C|B)::"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,C,B}"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "Operator"
      }), " ", jsx(_components.code, {
        children: "x.."
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "D.."
        }), " \u21D2 ", jsx(_components.code, {
          children: "{}"
        }), " (empty set)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "B.."
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,C}"
        }), " (note that, unlike ", jsx(_components.code, {
          children: "B::"
        }), ", this includes ", jsx(_components.code, {
          children: "C"
        }), ")"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "A.."
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,C,B}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "root().."
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,C,B,A}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "none().."
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,C,B,A,root()}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "(C|B).."
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D}"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "Operator"
      }), " ", jsx(_components.code, {
        children: "::x"
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "::D"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,C,B,A,root()}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "::B"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{B,A,root()}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "::A"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{A,root()}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "::root()"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{root()}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "::none()"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{}"
        }), " (empty set)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "::(C|B)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{C,B,A,root()}"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "Operator"
      }), " ", jsx(_components.code, {
        children: "..x"
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "..D"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,C,B,A}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "..B"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{B,A}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "..A"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{A}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "..root()"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{}"
        }), " (empty set)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "..none()"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{}"
        }), " (empty set)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "..(C|B)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{C,B,A}"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "Operator"
      }), " ", jsx(_components.code, {
        children: "x::y"
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "D::D"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "B::D"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,B}"
        }), " (note that, unlike ", jsx(_components.code, {
          children: "B..D"
        }), ", this includes ", jsx(_components.code, {
          children: "B"
        }), " and excludes ", jsx(_components.code, {
          children: "C"
        }), ")"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "B::C"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{}"
        }), " (empty set) (note that, unlike ", jsx(_components.code, {
          children: "B..C"
        }), ", this excludes ", jsx(_components.code, {
          children: "C"
        }), ")"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "A::D"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,C,B,A}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "root()::D"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,C,B,A,root()}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "none()::D"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{}"
        }), " (empty set)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "D::B"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{}"
        }), " (empty set)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "(C|B)::(C|B)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{C,B}"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "Operator"
      }), " ", jsx(_components.code, {
        children: "x..y"
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "D..D"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{}"
        }), " (empty set)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "B..D"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,C}"
        }), " (note that, unlike ", jsx(_components.code, {
          children: "B::D"
        }), ", this includes ", jsx(_components.code, {
          children: "C"
        }), " and excludes ", jsx(_components.code, {
          children: "B"
        }), ")"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "B..C"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{C}"
        }), " (note that, unlike ", jsx(_components.code, {
          children: "B::C"
        }), ", this includes ", jsx(_components.code, {
          children: "C"
        }), ")"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "A..D"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,C,B}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "root()..D"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,C,B,A}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "none()..D"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,C,B,A,root()}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "D..B"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{}"
        }), " (empty set)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "(C|B)..(C|B)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{}"
        }), " (empty set)"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "functions",
      children: "Functions"
    }), "\n", jsx(_components.p, {
      children: "You can also specify revisions by using functions. Some functions take other\nrevsets (expressions) as arguments."
    }), "\n", jsx(_components.p, {
      children: '??? note "Function argument syntax"'
    }), "\n", jsxs(_components.p, {
      children: ["In this documentation, optional arguments are indicated with square\nbrackets like ", jsx(_components.code, {
        children: "[arg]"
      }), ". Some arguments also have an optional label which can\nbe used to specify that argument without specifying all previous arguments."]
    }), "\n", jsxs(_components.p, {
      children: ["For instance, ", jsx(_components.code, {
        children: "remote_bookmarks([bookmark_pattern], [[remote=]remote_pattern])"
      }), "\nindicates that all of the following usages are valid:"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: "remote_bookmarks()"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: 'remote_bookmarks("main")'
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: 'remote_bookmarks("main", "origin")'
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: 'remote_bookmarks("main", remote="origin")'
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: 'remote_bookmarks(remote="origin")'
        })
      }), "\n"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "parents(x, [depth])"
          }), ": ", jsx(_components.code, {
            children: "parents(x)"
          }), " is the same as ", jsx(_components.code, {
            children: "x-"
          }), ".\n", jsx(_components.code, {
            children: "parents(x, depth)"
          }), " returns the parents of ", jsx(_components.code, {
            children: "x"
          }), " at the given ", jsx(_components.code, {
            children: "depth"
          }), ". For\ninstance, ", jsx(_components.code, {
            children: "parents(x, 3)"
          }), " is equivalent to ", jsx(_components.code, {
            children: "x---"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "children(x, [depth])"
          }), ": ", jsx(_components.code, {
            children: "children(x)"
          }), " is the same as ", jsx(_components.code, {
            children: "x+"
          }), ".\n", jsx(_components.code, {
            children: "children(x, depth)"
          }), " returns the children of ", jsx(_components.code, {
            children: "x"
          }), " at the given ", jsx(_components.code, {
            children: "depth"
          }), ". For\ninstance, ", jsx(_components.code, {
            children: "children(x, 3)"
          }), " is equivalent to ", jsx(_components.code, {
            children: "x+++"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "ancestors(x, [depth])"
          }), ": ", jsx(_components.code, {
            children: "ancestors(x)"
          }), " is the same as ", jsx(_components.code, {
            children: "::x"
          }), ".\n", jsx(_components.code, {
            children: "ancestors(x, depth)"
          }), " returns the ancestors of ", jsx(_components.code, {
            children: "x"
          }), " limited to the given\n", jsx(_components.code, {
            children: "depth"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "descendants(x, [depth])"
          }), ": ", jsx(_components.code, {
            children: "descendants(x)"
          }), " is the same as ", jsx(_components.code, {
            children: "x::"
          }), ".\n", jsx(_components.code, {
            children: "descendants(x, depth)"
          }), " returns the descendants of ", jsx(_components.code, {
            children: "x"
          }), " limited to the given\n", jsx(_components.code, {
            children: "depth"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "first_parent(x, [depth])"
          }), ": ", jsx(_components.code, {
            children: "first_parent(x)"
          }), " is similar to ", jsx(_components.code, {
            children: "parents(x)"
          }), ", but\nfor merges, it only returns the first parent instead of returning all parents.\nThe ", jsx(_components.code, {
            children: "depth"
          }), " argument also works similarly, so ", jsx(_components.code, {
            children: "first_parent(x, 2)"
          }), " is\nequivalent to ", jsx(_components.code, {
            children: "first_parent(first_parent(x))"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "first_ancestors(x, [depth])"
          }), ": Similar to ", jsx(_components.code, {
            children: "ancestors(x, [depth])"
          }), ", but only\ntraverses the first parent of each commit. In Git, the first parent of a merge\ncommit is conventionally the branch into which changes are being merged, so\n", jsx(_components.code, {
            children: "first_ancestors()"
          }), " can be used to exclude changes made on other branches."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "reachable(srcs, domain)"
          }), ": All commits reachable from ", jsx(_components.code, {
            children: "srcs"
          }), " within\n", jsx(_components.code, {
            children: "domain"
          }), ", traversing all parent and child edges."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "connected(x)"
          }), ": Same as ", jsx(_components.code, {
            children: "x::x"
          }), ". Useful when ", jsx(_components.code, {
            children: "x"
          }), " includes several commits."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "all()"
          }), ": All visible commits and ancestors of commits explicitly mentioned."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "none()"
          }), ": No commits. This function is rarely useful; it is provided for\ncompleteness."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "change_id(prefix)"
          }), ": Commits with the given change ID prefix. If the specified\nchange is divergent, this resolves to multiple commits. It is an error to use a\nnon-unique prefix. Unmatched prefix isn't an error."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "commit_id(prefix)"
          }), ": Commits with the given commit ID prefix. It is an error\nto use a non-unique prefix. Unmatched prefix isn't an error."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "bookmarks([pattern])"
          }), ": All local bookmark targets. If ", jsx(_components.code, {
            children: "pattern"
          }), " is specified,\nthis selects the bookmarks whose name match the given ", jsx(_components.a, {
            href: "#string-patterns",
            children: "string\npattern"
          }), ". For example, ", jsx(_components.code, {
            children: "bookmarks(push)"
          }), " would match the\nbookmarks ", jsx(_components.code, {
            children: "push-123"
          }), " and ", jsx(_components.code, {
            children: "repushed"
          }), " but not the bookmark ", jsx(_components.code, {
            children: "main"
          }), ". If a bookmark is\nin a conflicted state, all its possible targets are included."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "remote_bookmarks([bookmark_pattern], [[remote=]remote_pattern])"
          }), ": All remote\nbookmarks targets across all remotes. If just the ", jsx(_components.code, {
            children: "bookmark_pattern"
          }), " is\nspecified, the bookmarks whose names match the given ", jsx(_components.a, {
            href: "#string-patterns",
            children: "string\npattern"
          }), " across all remotes are selected. If both\n", jsx(_components.code, {
            children: "bookmark_pattern"
          }), " and ", jsx(_components.code, {
            children: "remote_pattern"
          }), " are specified, the selection is\nfurther restricted to just the remotes whose names match ", jsx(_components.code, {
            children: "remote_pattern"
          }), "."]
        }), "\n", jsxs(_components.p, {
          children: ["For example, ", jsx(_components.code, {
            children: "remote_bookmarks(push, ri)"
          }), " would match the bookmarks\n", jsx(_components.code, {
            children: "push-123@origin"
          }), " and ", jsx(_components.code, {
            children: "repushed@private"
          }), " but not ", jsx(_components.code, {
            children: "push-123@upstream"
          }), " or\n", jsx(_components.code, {
            children: "main@origin"
          }), " or ", jsx(_components.code, {
            children: "main@upstream"
          }), ". If a bookmark is in a conflicted state, all\nits possible targets are included."]
        }), "\n", jsxs(_components.p, {
          children: ["While Git-tracking bookmarks can be selected by ", jsx(_components.code, {
            children: "<name>@git"
          }), ", these bookmarks\naren't included in ", jsx(_components.code, {
            children: "remote_bookmarks()"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "tracked_remote_bookmarks([bookmark_pattern], [[remote=]remote_pattern])"
          }), ": All\ntargets of tracked remote bookmarks. Supports the same optional arguments as\n", jsx(_components.code, {
            children: "remote_bookmarks()"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "untracked_remote_bookmarks([bookmark_pattern], [[remote=]remote_pattern])"
          }), ":\nAll targets of untracked remote bookmarks. Supports the same optional arguments\nas ", jsx(_components.code, {
            children: "remote_bookmarks()"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "tags([pattern])"
          }), ": All tag targets. If ", jsx(_components.code, {
            children: "pattern"
          }), " is specified,\nthis selects the tags whose name match the given ", jsx(_components.a, {
            href: "#string-patterns",
            children: "string\npattern"
          }), ". For example, ", jsx(_components.code, {
            children: "tags(v1)"
          }), " would match the\ntags ", jsx(_components.code, {
            children: "v123"
          }), " and ", jsx(_components.code, {
            children: "rev1"
          }), " but not the tag ", jsx(_components.code, {
            children: "v2"
          }), ". If a tag is\nin a conflicted state, all its possible targets are included."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "git_refs()"
          }), ": All Git ref targets as of the last import. If a Git ref\nis in a conflicted state, all its possible targets are included."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "git_head()"
          }), ": The Git ", jsx(_components.code, {
            children: "HEAD"
          }), " target as of the last import."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "visible_heads()"
          }), ": All visible heads (same as ", jsx(_components.code, {
            children: "heads(all())"
          }), " if no hidden\nrevisions are mentioned)."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "root()"
          }), ": The virtual commit that is the oldest ancestor of all other commits."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "heads(x)"
          }), ": Commits in ", jsx(_components.code, {
            children: "x"
          }), " that are not ancestors of other commits in ", jsx(_components.code, {
            children: "x"
          }), ".\nEquivalent to ", jsx(_components.code, {
            children: "x ~ ::x-"
          }), ". Note that this is different from\n", jsx(_components.a, {
            href: "https://repo.mercurial-scm.org/hg/help/revsets",
            children: "Mercurial's"
          }), " ", jsx(_components.code, {
            children: "heads(x)"
          }), "\nfunction, which is equivalent to ", jsx(_components.code, {
            children: "x ~ x-"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "roots(x)"
          }), ": Commits in ", jsx(_components.code, {
            children: "x"
          }), " that are not descendants of other commits in ", jsx(_components.code, {
            children: "x"
          }), ".\nEquivalent to ", jsx(_components.code, {
            children: "x ~ x+::"
          }), ". Note that this is different from\n", jsx(_components.a, {
            href: "https://repo.mercurial-scm.org/hg/help/revsets",
            children: "Mercurial's"
          }), " ", jsx(_components.code, {
            children: "roots(x)"
          }), "\nfunction, which is equivalent to ", jsx(_components.code, {
            children: "x ~ x+"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "latest(x, [count])"
          }), ": Latest ", jsx(_components.code, {
            children: "count"
          }), " commits in ", jsx(_components.code, {
            children: "x"
          }), ", based on committer\ntimestamp. The default ", jsx(_components.code, {
            children: "count"
          }), " is 1."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "fork_point(x)"
          }), ": The fork point of all commits in ", jsx(_components.code, {
            children: "x"
          }), ". The fork point is the\ncommon ancestor(s) of all commits in ", jsx(_components.code, {
            children: "x"
          }), " which do not have any descendants\nthat are also common ancestors of all commits in ", jsx(_components.code, {
            children: "x"
          }), ". It is equivalent to\nthe revset ", jsx(_components.code, {
            children: "heads(::x_1 & ::x_2 & ... & ::x_N)"
          }), ", where ", jsx(_components.code, {
            children: "x_{1..N}"
          }), " are commits\nin ", jsx(_components.code, {
            children: "x"
          }), ". If ", jsx(_components.code, {
            children: "x"
          }), " resolves to a single commit, ", jsx(_components.code, {
            children: "fork_point(x)"
          }), " resolves to ", jsx(_components.code, {
            children: "x"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "bisect(x)"
          }), ": Finds commits in the input set for which about half of the input\nset are descendants. The current implementation deals somewhat poorly with\nnon-linear history."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "merges()"
          }), ": Merge commits."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "description(pattern)"
          }), ": Commits that have a description matching the given\n", jsx(_components.a, {
            href: "#string-patterns",
            children: "string pattern"
          }), "."]
        }), "\n", jsxs(_components.p, {
          children: ["A non-empty description is usually terminated with newline character. For\nexample, ", jsx(_components.code, {
            children: 'description(exact:"")'
          }), " matches commits without description, and\n", jsx(_components.code, {
            children: 'description(exact:"foo\\n")'
          }), " matches commits with description ", jsx(_components.code, {
            children: '"foo\\n"'
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "subject(pattern)"
          }), ": Commits that have a subject matching the given ", jsx(_components.a, {
            href: "#string-patterns",
            children: "string\npattern"
          }), ". A subject is the first line of the description\n(without newline character.)"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "author(pattern)"
          }), ": Commits with the author's name or email matching the given\n", jsx(_components.a, {
            href: "#string-patterns",
            children: "string pattern"
          }), ". Equivalent to ", jsx(_components.code, {
            children: "author_name(pattern) | author_email(pattern)"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "author_name(pattern)"
          }), ": Commits with the author's name matching the given\n", jsx(_components.a, {
            href: "#string-patterns",
            children: "string pattern"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "author_email(pattern)"
          }), ": Commits with the author's email matching the given\n", jsx(_components.a, {
            href: "#string-patterns",
            children: "string pattern"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "author_date(pattern)"
          }), ": Commits with author dates matching the specified ", jsx(_components.a, {
            href: "#date-patterns",
            children: "date\npattern"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "mine()"
          }), ": Commits where the author's email matches the email of the current\nuser. Equivalent to ", jsx(_components.code, {
            children: "author_email(exact-i:<user-email>)"
          })]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "committer(pattern)"
          }), ": Commits with the committer's name or email matching the\ngiven ", jsx(_components.a, {
            href: "#string-patterns",
            children: "string pattern"
          }), ". Equivalent to\n", jsx(_components.code, {
            children: "committer_name(pattern) | committer_email(pattern)"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "committer_name(pattern)"
          }), ": Commits with the committer's name matching the\ngiven ", jsx(_components.a, {
            href: "#string-patterns",
            children: "string pattern"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "committer_email(pattern)"
          }), ": Commits with the committer's email matching the\ngiven ", jsx(_components.a, {
            href: "#string-patterns",
            children: "string pattern"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "committer_date(pattern)"
          }), ": Commits with committer dates matching the specified\n", jsx(_components.a, {
            href: "#date-patterns",
            children: "date pattern"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "signed()"
          }), ": Commits that are cryptographically signed."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "empty()"
          }), ": Commits modifying no files. This also includes ", jsx(_components.code, {
            children: "merges()"
          }), " without\nuser modifications and ", jsx(_components.code, {
            children: "root()"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "files(expression)"
          }), ": Commits modifying paths matching the given ", jsx(_components.a, {
            href: "/reference/filesets",
            children: "fileset\nexpression"
          }), "."]
        }), "\n", jsxs(_components.p, {
          children: ["Paths are relative to the directory ", jsx(_components.code, {
            children: "jj"
          }), " was invoked from. A directory name\nwill match all files in that directory and its subdirectories."]
        }), "\n", jsxs(_components.p, {
          children: ["For example, ", jsx(_components.code, {
            children: "files(foo)"
          }), " will match files ", jsx(_components.code, {
            children: "foo"
          }), ", ", jsx(_components.code, {
            children: "foo/bar"
          }), ", ", jsx(_components.code, {
            children: "foo/bar/baz"
          }), ".\nIt will ", jsx(_components.em, {
            children: "not"
          }), " match ", jsx(_components.code, {
            children: "foobar"
          }), " or ", jsx(_components.code, {
            children: "bar/foo"
          }), "."]
        }), "\n", jsxs(_components.p, {
          children: ["Some file patterns might need quoting because the ", jsx(_components.code, {
            children: "expression"
          }), " must also be\nparsable as a revset. For example, ", jsx(_components.code, {
            children: "."
          }), " has to be quoted in ", jsx(_components.code, {
            children: 'files(".")'
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "diff_contains(text, [files])"
          }), ": Commits containing diffs matching the given\n", jsx(_components.code, {
            children: "text"
          }), " pattern line by line."]
        }), "\n", jsxs(_components.p, {
          children: ["The search paths can be narrowed by the ", jsx(_components.code, {
            children: "files"
          }), " expression. All modified files\nare scanned by default, but it is likely to change in future version to\nrespect the command line path arguments."]
        }), "\n", jsxs(_components.p, {
          children: ["For example, ", jsx(_components.code, {
            children: 'diff_contains("TODO", "src")'
          }), ' will search revisions where "TODO"\nis added to or removed from files under "src".']
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "conflicts()"
          }), ": Commits with conflicts."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "present(x)"
          }), ": Same as ", jsx(_components.code, {
            children: "x"
          }), ", but evaluated to ", jsx(_components.code, {
            children: "none()"
          }), " if any of the commits\nin ", jsx(_components.code, {
            children: "x"
          }), " doesn't exist (e.g. is an unknown bookmark name.)"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "coalesce(revsets...)"
          }), ": Commits in the first revset in the list of ", jsx(_components.code, {
            children: "revsets"
          }), "\nwhich does not evaluate to ", jsx(_components.code, {
            children: "none()"
          }), ". If all revsets evaluate to ", jsx(_components.code, {
            children: "none()"
          }), ", then\nthe result of ", jsx(_components.code, {
            children: "coalesce"
          }), " will also be ", jsx(_components.code, {
            children: "none()"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "working_copies()"
          }), ": The working copy commits across all the workspaces."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "at_operation(op, x)"
          }), ": Evaluates ", jsx(_components.code, {
            children: "x"
          }), " at the specified ", jsx(_components.a, {
            href: "glossary#operation",
            children: "operation"
          }), ". For\nexample, ", jsx(_components.code, {
            children: "at_operation(@-, visible_heads())"
          }), " will return all heads which were\nvisible at the previous operation."]
        }), "\n", jsxs(_components.p, {
          children: ["Since ", jsx(_components.code, {
            children: "at_operation(op, x)"
          }), " brings all commits that were visible at the\noperation to the search space, ", jsx(_components.code, {
            children: "at_operation(op, x) | all()"
          }), " is equivalent to\n", jsx(_components.code, {
            children: "at_operation(op, x) | ::(at_operation(op, x | visible_heads()) | visible_heads())"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "??? examples"
    }), "\n", jsx(_components.p, {
      children: "Given this history:"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "o E"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "| o D"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "|/|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "| o C"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "| |"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "o | B"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "|/"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "o A"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "o root()"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "function"
      }), " ", jsx(_components.code, {
        children: "reachable()"
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "reachable(E, A..)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{E,D,C,B}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "reachable(D, A..)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{E,D,C,B}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "reachable(C, A..)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{E,D,C,B}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "reachable(B, A..)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{E,D,C,B}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "reachable(A, A..)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{}"
        }), " (empty set)"]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "function"
      }), " ", jsx(_components.code, {
        children: "connected()"
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "connected(E|A)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{E,B,A}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "connected(D|A)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{D,C,B,A}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "connected(A)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{A}"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "function"
      }), " ", jsx(_components.code, {
        children: "heads()"
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "heads(E|D)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{E,D}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "heads(E|C)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{E,C}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "heads(E|B)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{E}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "heads(E|A)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{E}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "heads(A)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{A}"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "function"
      }), " ", jsx(_components.code, {
        children: "roots()"
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "roots(E|D)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{E,D}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "roots(E|C)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{E,C}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "roots(E|B)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{B}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "roots(E|A)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{A}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "roots(A)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{A}"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "function"
      }), " ", jsx(_components.code, {
        children: "fork_point()"
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "fork_point(E|D)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{B}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "fork_point(E|C)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{A}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "fork_point(E|B)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{B}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "fork_point(E|A)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{A}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "fork_point(D|C)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{C}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "fork_point(D|B)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{B}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "fork_point(B|C)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{A}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "fork_point(A)"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{A}"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "fork_point(none())"
        }), " \u21D2 ", jsx(_components.code, {
          children: "{}"
        })]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "string-patterns",
      children: "String patterns"
    }), "\n", jsx(_components.p, {
      children: "Functions that perform string matching support the following pattern syntax (the\nquotes are optional):"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: '"string"'
        }), " or ", jsx(_components.code, {
          children: 'substring:"string"'
        }), ": Matches strings that contain ", jsx(_components.code, {
          children: "string"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: 'exact:"string"'
        }), ": Matches strings exactly equal to ", jsx(_components.code, {
          children: "string"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: 'glob:"pattern"'
        }), ": Matches strings with Unix-style shell ", jsxs(_components.a, {
          href: "https://docs.rs/globset/latest/globset/#syntax",
          children: ["wildcard\n", jsx(_components.code, {
            children: "pattern"
          })]
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: 'regex:"pattern"'
        }), ": Matches substrings with ", jsxs(_components.a, {
          href: "https://docs.rs/regex/latest/regex/#syntax",
          children: ["regular\nexpression ", jsx(_components.code, {
            children: "pattern"
          })]
        }), "."]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["You can append ", jsx(_components.code, {
        children: "-i"
      }), " after the kind to match case\u2010insensitively (e.g.\n", jsx(_components.code, {
        children: 'glob-i:"fix*jpeg*"'
      }), ")."]
    }), "\n", jsx(_components.h2, {
      id: "date-patterns",
      children: "Date patterns"
    }), "\n", jsx(_components.p, {
      children: "Functions that perform date matching support the following pattern syntax:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: 'after:"string"'
        }), ": Matches dates exactly at or after the given date."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: 'before:"string"'
        }), ": Matches dates before, but not including, the given date."]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "Date strings can be specified in several forms, including:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "2024-02-01"
      }), "\n", jsx(_components.li, {
        children: "2024-02-01T12:00:00"
      }), "\n", jsx(_components.li, {
        children: "2024-02-01T12:00:00-08:00"
      }), "\n", jsx(_components.li, {
        children: "2024-02-01 12:00:00"
      }), "\n", jsx(_components.li, {
        children: "2 days ago"
      }), "\n", jsx(_components.li, {
        children: "5 minutes ago"
      }), "\n", jsx(_components.li, {
        children: "yesterday"
      }), "\n", jsx(_components.li, {
        children: "yesterday 5pm"
      }), "\n", jsx(_components.li, {
        children: "yesterday 10:30"
      }), "\n", jsx(_components.li, {
        children: "yesterday 15:30"
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "aliases",
      children: "Aliases"
    }), "\n", jsx(_components.p, {
      children: "New symbols and functions can be defined in the config file, by using any\ncombination of the predefined symbols/functions and other aliases."
    }), "\n", jsx(_components.p, {
      children: "Alias functions can be overloaded by the number of parameters. However, builtin\nfunction will be shadowed by name, and can't co-exist with aliases."
    }), "\n", jsx(_components.p, {
      children: "For example:"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "revset-aliases"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "'HEAD' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'@-'"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "'user()' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: `'user("me@example.org")'`
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "'user(x)' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'author(x) | committer(x)'"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "built-in-aliases",
      children: "Built-in Aliases"
    }), "\n", jsxs(_components.p, {
      children: ["The following aliases are built-in and used for certain operations. These functions\nare defined as aliases in order to allow you to overwrite them as needed.\nSee ", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/blob/main/cli/src/config/revsets.toml",
        children: "revsets.toml"
      }), "\nfor a comprehensive list."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "trunk()"
          }), ": Resolves to the head commit for the default bookmark of the default\nremote, or the remote named ", jsx(_components.code, {
            children: "upstream"
          }), " or ", jsx(_components.code, {
            children: "origin"
          }), ". This is set at the\nrepository level upon initialization of a Jujutsu repository."]
        }), "\n", jsxs(_components.p, {
          children: ["If the default bookmark cannot be resolved during initialization, the default\nglobal configuration tries the bookmarks ", jsx(_components.code, {
            children: "main"
          }), ", ", jsx(_components.code, {
            children: "master"
          }), ", and ", jsx(_components.code, {
            children: "trunk"
          }), " on the\n", jsx(_components.code, {
            children: "upstream"
          }), " and ", jsx(_components.code, {
            children: "origin"
          }), " remotes. If more than one potential trunk commit\nexists, the newest one is chosen. If none of the bookmarks exist, the revset\nevaluates to ", jsx(_components.code, {
            children: "root()"
          }), "."]
        }), "\n", jsxs(_components.p, {
          children: ["You can ", jsx(_components.a, {
            href: "/reference/config",
            children: "override"
          }), " this as appropriate. If you do, make sure it\nalways resolves to exactly one commit. For example:"]
        }), "\n", jsx(Fragment, {
          children: jsx(_components.pre, {
            className: "shiki shiki-themes github-light github-dark",
            style: {
              "--shiki-light": "#24292e",
              "--shiki-dark": "#e1e4e8",
              "--shiki-light-bg": "#fff",
              "--shiki-dark-bg": "#24292e"
            },
            tabIndex: "0",
            icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
            children: jsxs(_components.code, {
              children: [jsxs(_components.span, {
                className: "line",
                children: [jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "["
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: "revset-aliases"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]"
                })]
              }), "\n", jsxs(_components.span, {
                className: "line",
                children: [jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "'trunk()' = "
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: "'your-bookmark@your-remote'"
                })]
              })]
            })
          })
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "builtin_immutable_heads()"
          }), ": Resolves to\n", jsx(_components.code, {
            children: "present(trunk()) | tags() | untracked_remote_bookmarks()"
          }), ". It is used as the\ndefault definition for ", jsx(_components.code, {
            children: "immutable_heads()"
          }), " below. It is not recommended to\nredefine this alias. Prefer to redefine ", jsx(_components.code, {
            children: "immutable_heads()"
          }), " instead."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "immutable_heads()"
          }), ": Resolves to\n", jsx(_components.code, {
            children: "present(trunk()) | tags() | untracked_remote_bookmarks()"
          }), " by default. It is\nactually defined as ", jsx(_components.code, {
            children: "builtin_immutable_heads()"
          }), ", and can be overridden as\nrequired. See ", jsx(_components.a, {
            href: "config#set-of-immutable-commits",
            children: "here"
          }), " for details."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "immutable()"
          }), ": The set of commits that ", jsx(_components.code, {
            children: "jj"
          }), " treats as immutable. This is\nequivalent to ", jsx(_components.code, {
            children: "::(immutable_heads() | root())"
          }), ". It is not recommended to redefine\nthis alias. Note that modifying this will ", jsx(_components.em, {
            children: "not"
          }), " change whether a commit is immutable.\nTo do that, edit ", jsx(_components.code, {
            children: "immutable_heads()"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "mutable()"
          }), ": The set of commits that ", jsx(_components.code, {
            children: "jj"
          }), " treats as mutable. This is\nequivalent to ", jsx(_components.code, {
            children: "~immutable()"
          }), ". It is not recommended to redefined this alias.\nNote that modifying this will ", jsx(_components.em, {
            children: "not"
          }), " change whether a commit is immutable.\nTo do that, edit ", jsx(_components.code, {
            children: "immutable_heads()"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "the-all-modifier",
      children: ["The ", jsx(_components.code, {
        children: "all:"
      }), " modifier"]
    }), "\n", jsxs(_components.p, {
      children: ["Certain commands (such as ", jsx(_components.code, {
        children: "jj rebase"
      }), ") can take multiple revset arguments, and\neach of these may resolve to one-or-many revisions."]
    }), "\n", jsxs(_components.p, {
      children: ["If you set the ", jsx(_components.code, {
        children: "ui.always-allow-large-revsets"
      }), " option to ", jsx(_components.code, {
        children: "false"
      }), ", ", jsx(_components.code, {
        children: "jj"
      }), ' will not\nallow revsets that resolve to more than one revision \u2014 a so-called "large\nrevset" \u2014 and will ask you to confirm that you want to proceed by\nprefixing it with the ', jsx(_components.code, {
        children: "all:"
      }), " modifier. ", jsx(_components.em, {
        children: "This option is planned to be removed."
      })]
    }), "\n", jsxs(_components.p, {
      children: ["An ", jsx(_components.code, {
        children: "all:"
      }), " modifier before a revset expression does not otherwise change its\nmeaning. Strictly speaking, it is not part of the revset language. The notation\nis similar to the modifiers like ", jsx(_components.code, {
        children: "glob:"
      }), " allowed before ", jsx(_components.a, {
        href: "#string-patterns",
        children: "string\npatterns"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["For example, ", jsx(_components.code, {
        children: "jj rebase -r w -d xyz+"
      }), " will rebase ", jsx(_components.code, {
        children: "w"
      }), " on top of the child of\n", jsx(_components.code, {
        children: "xyz"
      }), " as long as ", jsx(_components.code, {
        children: "xyz"
      }), " has exactly one child."]
    }), "\n", jsxs(_components.p, {
      children: ["If ", jsx(_components.code, {
        children: "xyz"
      }), " has more than one child, the ", jsx(_components.code, {
        children: "all:"
      }), " modifier is ", jsx(_components.em, {
        children: "not"
      }), " specified, and\n", jsx(_components.code, {
        children: "ui.always-allow-large-revsets"
      }), " is ", jsx(_components.code, {
        children: "false"
      }), ", ", jsx(_components.code, {
        children: "jj rebase -r w -d xyz+"
      }), " will return\nan error."]
    }), "\n", jsxs(_components.p, {
      children: ["If ", jsx(_components.code, {
        children: "ui.always-allow-large-revsets"
      }), " was ", jsx(_components.code, {
        children: "true"
      }), " (the default), the above command\nwould act as if ", jsx(_components.code, {
        children: "all:"
      }), " was set (see the next paragraph)."]
    }), "\n", jsxs(_components.p, {
      children: ["With the ", jsx(_components.code, {
        children: "all:"
      }), " modifier, ", jsx(_components.code, {
        children: "jj rebase -r w -d all:xyz+"
      }), " will make ", jsx(_components.code, {
        children: "w"
      }), " into a merge\ncommit if ", jsx(_components.code, {
        children: "xyz"
      }), " has more than one child. The ", jsx(_components.code, {
        children: "all:"
      }), " modifier confirms that the\nuser expected ", jsx(_components.code, {
        children: "xyz"
      }), " to have more than one child."]
    }), "\n", jsxs(_components.p, {
      children: ["A more useful example: if ", jsx(_components.code, {
        children: "w"
      }), " is a merge commit, ", jsx(_components.code, {
        children: "jj rebase -s w -d all:w- -d xyz"
      }), " will add ", jsx(_components.code, {
        children: "xyz"
      }), " to the list of ", jsx(_components.code, {
        children: "w"
      }), "'s parents."]
    }), "\n", jsx(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", jsxs(_components.p, {
      children: ["Show the parent(s) of the working-copy commit (like ", jsx(_components.code, {
        children: "git log -1 HEAD"
      }), "):"]
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " log"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -r"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " @-"
            })]
          })
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Show all ancestors of the working copy (like plain ", jsx(_components.code, {
        children: "git log"
      }), ")"]
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " log"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -r"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ::@"
            })]
          })
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Show commits not on any remote bookmark:"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " log"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -r"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'remote_bookmarks()..'"
            })]
          })
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Show commits not on ", jsx(_components.code, {
        children: "origin"
      }), " (if you have other remotes like ", jsx(_components.code, {
        children: "fork"
      }), "):"]
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " log"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -r"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'remote_bookmarks(remote=origin)..'"
            })]
          })
        })
      })
    }), "\n", jsx(_components.p, {
      children: 'Show the initial commits in the repo (the ones Git calls "root commits"):'
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " log"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -r"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'root()+'"
            })]
          })
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Show some important commits (like ", jsx(_components.code, {
        children: "git --simplify-by-decoration"
      }), "):"]
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " log"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -r"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'tags() | bookmarks()'"
            })]
          })
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Show local commits leading up to the working copy, as well as descendants of\nthose commits:"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " log"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -r"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " '(remote_bookmarks()..@)::'"
            })]
          })
        })
      })
    }), "\n", jsx(_components.p, {
      children: 'Show commits authored by "martinvonz" and containing the word "reset" in the\ndescription:'
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " log"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -r"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'author(martinvonz) & description(reset)'"
            })]
          })
        })
      })
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

export { MDXContent as default, extractedReferences, frontmatter, structuredData, toc };
//# sourceMappingURL=revsets-DxQ6CZJM.mjs.map
