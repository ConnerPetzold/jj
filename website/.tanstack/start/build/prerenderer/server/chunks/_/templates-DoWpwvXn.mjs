import { jsx, jsxs, Fragment } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Templates"
};
let extractedReferences = [{
  "href": "#commit-type"
}, {
  "href": "#operation-type"
}, {
  "href": "https://github.com/Alhadis/OSC8-Adoption"
}, {
  "href": "config#set-of-immutable-commits"
}, {
  "href": "/reference/revsets"
}, {
  "href": "/reference/filesets"
}, {
  "href": "/reference/filesets"
}, {
  "href": "/concepts/bookmarks#conflicts"
}, {
  "href": "#string-type"
}, {
  "href": "https://docs.rs/chrono/latest/chrono/format/strftime/"
}];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "Jujutsu supports a functional language to customize output of commands.\nThe language consists of literals, keywords, operators, functions, and\nmethods."
  }, {
    "heading": void 0,
    "content": "A couple of jj commands accept a template via -T/--template option."
  }, {
    "heading": "keywords",
    "content": "Keywords represent objects of different types; the types are described in\na follow-up section. In addition to context-specific keywords, the top-level\nobject can be referenced as self."
  }, {
    "heading": "commit-keywords",
    "content": "In jj log templates, all 0-argument methods of the Commit\ntype are available as keywords. For example, commit_id is\nequivalent to self.commit_id()."
  }, {
    "heading": "operation-keywords",
    "content": "In jj op log templates, all 0-argument methods of the Operation\ntype are available as keywords. For example,\ncurrent_operation is equivalent to self.current_operation()."
  }, {
    "heading": "operators",
    "content": "The following operators are supported."
  }, {
    "heading": "operators",
    "content": "x.f(): Method call."
  }, {
    "heading": "operators",
    "content": "-x: Negate integer value."
  }, {
    "heading": "operators",
    "content": "!x: Logical not."
  }, {
    "heading": "operators",
    "content": "x * y, x / y, x % y: Multiplication/division/remainder. Operands must\nbe Integers."
  }, {
    "heading": "operators",
    "content": "x + y, x - y: Addition/subtraction. Operands must be Integers."
  }, {
    "heading": "operators",
    "content": "x >= y, x > y, x <= y, x < y: Greater than or equal/greater than/\nlesser than or equal/lesser than. Operands must be Integers."
  }, {
    "heading": "operators",
    "content": "x == y, x != y: Equal/not equal. Operands must be either Boolean,\nInteger, or String."
  }, {
    "heading": "operators",
    "content": "x && y: Logical and, short-circuiting."
  }, {
    "heading": "operators",
    "content": "x || y: Logical or, short-circuiting."
  }, {
    "heading": "operators",
    "content": "x ++ y: Concatenate x and y templates."
  }, {
    "heading": "operators",
    "content": "(listed in order of binding strengths)"
  }, {
    "heading": "global-functions",
    "content": "The following functions are defined."
  }, {
    "heading": "global-functions",
    "content": "fill(width: Integer, content: Template) -> Template: Fill lines at\nthe given width."
  }, {
    "heading": "global-functions",
    "content": "indent(prefix: Template, content: Template) -> Template: Indent\nnon-empty lines by the given prefix."
  }, {
    "heading": "global-functions",
    "content": "pad_start(width: Integer, content: Template, [fill_char: Template]): Pad (or\nright-justify) content by adding leading fill characters. The content\nshouldn't have newline character."
  }, {
    "heading": "global-functions",
    "content": "pad_end(width: Integer, content: Template, [fill_char: Template]): Pad (or\nleft-justify) content by adding trailing fill characters. The content\nshouldn't have newline character."
  }, {
    "heading": "global-functions",
    "content": "pad_centered(width: Integer, content: Template, [fill_char: Template]): Pad\ncontent by adding both leading and trailing fill characters. If an odd number\nof fill characters are needed, the trailing fill will be one longer than the\nleading fill. The content shouldn't have newline characters."
  }, {
    "heading": "global-functions",
    "content": "truncate_start(width: Integer, content: Template, [ellipsis: Template]):\nTruncate content by removing leading characters. The content shouldn't\nhave newline character. If ellipsis is provided and content was truncated,\nprepend the ellipsis to the result."
  }, {
    "heading": "global-functions",
    "content": "truncate_end(width: Integer, content: Template, [ellipsis: Template]):\nTruncate content by removing trailing characters. The content shouldn't\nhave newline character. If ellipsis is provided and content was truncated,\nappend the ellipsis to the result."
  }, {
    "heading": "global-functions",
    "content": "hash(content: Stringify) -> String:\nHash the input and return a hexadecimal string representation of the digest."
  }, {
    "heading": "global-functions",
    "content": "label(label: Stringify, content: Template) -> Template: Apply label to\nthe content. The label is evaluated as a space-separated string."
  }, {
    "heading": "global-functions",
    "content": "raw_escape_sequence(content: Template) -> Template: Preserves any escape\nsequences in content (i.e., bypasses sanitization) and strips labels.\nNote: This function is intended for escape sequences and as such, its output\nis expected to be invisible / of no display width. Outputting content with\nnonzero display width may break wrapping, indentation etc."
  }, {
    "heading": "global-functions",
    "content": "stringify(content: Stringify) -> String: Format content to string. This\neffectively removes color labels."
  }, {
    "heading": "global-functions",
    "content": "json(value: Serialize) -> String: Serialize value in JSON format."
  }, {
    "heading": "global-functions",
    "content": "if(condition: Boolean, then: Template, [else: Template]) -> Template:\nConditionally evaluate then/else template content."
  }, {
    "heading": "global-functions",
    "content": "coalesce(content: Template...) -> Template: Returns the first non-empty\ncontent."
  }, {
    "heading": "global-functions",
    "content": "concat(content: Template...) -> Template:\nSame as content_1 ++ ... ++ content_n."
  }, {
    "heading": "global-functions",
    "content": "separate(separator: Template, content: Template...) -> Template:\nInsert separator between non-empty contents."
  }, {
    "heading": "global-functions",
    "content": "surround(prefix: Template, suffix: Template, content: Template) -> Template:\nSurround non-empty content with texts such as parentheses."
  }, {
    "heading": "global-functions",
    "content": "config(name: String) -> ConfigValue: Look up configuration value by name."
  }, {
    "heading": "built-in-aliases",
    "content": "hyperlink(url, text): Creates a clickable hyperlink using OSC8 escape sequences.\nThe text will be displayed and clickable, linking to the given url in\nterminals that support OSC8 hyperlinks."
  }, {
    "heading": "annotationline-type",
    "content": "Conversion: Boolean: no, Serialize: no, Template: no"
  }, {
    "heading": "annotationline-type",
    "content": "The following methods are defined."
  }, {
    "heading": "annotationline-type",
    "content": ".commit() -> Commit: Commit responsible for changing the relevant line."
  }, {
    "heading": "annotationline-type",
    "content": ".content() -> Template: Line content including newline character."
  }, {
    "heading": "annotationline-type",
    "content": ".line_number() -> Integer: 1-based line number."
  }, {
    "heading": "annotationline-type",
    "content": ".original_line_number() -> Integer: 1-based line number in the original commit."
  }, {
    "heading": "annotationline-type",
    "content": ".first_line_in_hunk() -> Boolean: False when the directly preceding line\nreferences the same commit."
  }, {
    "heading": "boolean-type",
    "content": "Conversion: Boolean: yes, Serialize: yes, Template: yes"
  }, {
    "heading": "boolean-type",
    "content": "No methods are defined. Can be constructed with false or true literal."
  }, {
    "heading": "commit-type",
    "content": "Conversion: Boolean: no, Serialize: yes, Template: no"
  }, {
    "heading": "commit-type",
    "content": "This type cannot be printed. The following methods are defined."
  }, {
    "heading": "commit-type",
    "content": ".description() -> String"
  }, {
    "heading": "commit-type",
    "content": ".trailers() -> List<Trailer>"
  }, {
    "heading": "commit-type",
    "content": ".change_id() -> ChangeId"
  }, {
    "heading": "commit-type",
    "content": ".commit_id() -> CommitId"
  }, {
    "heading": "commit-type",
    "content": ".parents() -> List<Commit>"
  }, {
    "heading": "commit-type",
    "content": ".author() -> Signature"
  }, {
    "heading": "commit-type",
    "content": ".committer() -> Signature"
  }, {
    "heading": "commit-type",
    "content": ".signature() -> Option<CryptographicSignature>: Cryptographic signature if the\ncommit was signed."
  }, {
    "heading": "commit-type",
    "content": ".mine() -> Boolean: Commits where the author's email matches the email of\nthe current user."
  }, {
    "heading": "commit-type",
    "content": ".working_copies() -> List<WorkspaceRef>: For multi-workspace repositories, returns a list of workspace references for each workspace whose working-copy commit matches the current commit."
  }, {
    "heading": "commit-type",
    "content": ".current_working_copy() -> Boolean: True for the working-copy commit of the\ncurrent workspace."
  }, {
    "heading": "commit-type",
    "content": ".bookmarks() -> List<CommitRef>: Local and remote bookmarks pointing to the\ncommit. A tracking remote bookmark will be included only if its target is\ndifferent from the local one."
  }, {
    "heading": "commit-type",
    "content": ".local_bookmarks() -> List<CommitRef>: All local bookmarks pointing to the\ncommit."
  }, {
    "heading": "commit-type",
    "content": ".remote_bookmarks() -> List<CommitRef>: All remote bookmarks pointing to the\ncommit."
  }, {
    "heading": "commit-type",
    "content": ".tags() -> List<CommitRef>"
  }, {
    "heading": "commit-type",
    "content": ".git_refs() -> List<CommitRef>"
  }, {
    "heading": "commit-type",
    "content": ".git_head() -> Boolean: True for the Git HEAD commit."
  }, {
    "heading": "commit-type",
    "content": ".divergent() -> Boolean: True if the commit's change id corresponds to multiple\nvisible commits."
  }, {
    "heading": "commit-type",
    "content": ".hidden() -> Boolean: True if the commit is not visible (a.k.a. abandoned)."
  }, {
    "heading": "commit-type",
    "content": ".immutable() -> Boolean: True if the commit is included in the set of\nimmutable commits."
  }, {
    "heading": "commit-type",
    "content": ".contained_in(revset: String) -> Boolean: True if the commit is included in the provided revset."
  }, {
    "heading": "commit-type",
    "content": ".conflict() -> Boolean: True if the commit contains merge conflicts."
  }, {
    "heading": "commit-type",
    "content": ".empty() -> Boolean: True if the commit modifies no files."
  }, {
    "heading": "commit-type",
    "content": ".diff([files: String]) -> TreeDiff: Changes from the parents within the\nfiles expression. All files are compared by default, but it is\nlikely to change in future version to respect the command line path arguments."
  }, {
    "heading": "commit-type",
    "content": ".files([files: String]) -> List<TreeEntry>: Files that exist in this commit,\nmatching the files expression. Use .diff().files() to list\nchanged files."
  }, {
    "heading": "commit-type",
    "content": ".root() -> Boolean: True if the commit is the root commit."
  }, {
    "heading": "commitevolutionentry-type",
    "content": "Conversion: Boolean: no, Serialize: yes, Template: no"
  }, {
    "heading": "commitevolutionentry-type",
    "content": "This type cannot be printed. The following methods are defined."
  }, {
    "heading": "commitevolutionentry-type",
    "content": ".commit() -> Commit: New commit."
  }, {
    "heading": "commitevolutionentry-type",
    "content": ".operation() -> Operation: Operation where the commit was created or\nrewritten."
  }, {
    "heading": "changeid-type",
    "content": "Conversion: Boolean: no, Serialize: yes, Template: yes"
  }, {
    "heading": "changeid-type",
    "content": "The following methods are defined."
  }, {
    "heading": "changeid-type",
    "content": '.normal_hex() -> String: Normal hex representation (0-9a-f) instead of the\ncanonical "reversed" (z-k) representation.'
  }, {
    "heading": "changeid-type",
    "content": ".short([len: Integer]) -> String"
  }, {
    "heading": "changeid-type",
    "content": ".shortest([min_len: Integer]) -> ShortestIdPrefix: Shortest unique prefix."
  }, {
    "heading": "commitid-type",
    "content": "Conversion: Boolean: no, Serialize: yes, Template: yes"
  }, {
    "heading": "commitid-type",
    "content": "The following methods are defined."
  }, {
    "heading": "commitid-type",
    "content": ".short([len: Integer]) -> String"
  }, {
    "heading": "commitid-type",
    "content": ".shortest([min_len: Integer]) -> ShortestIdPrefix: Shortest unique prefix."
  }, {
    "heading": "commitref-type",
    "content": "Conversion: Boolean: no, Serialize: yes, Template: yes"
  }, {
    "heading": "commitref-type",
    "content": "The following methods are defined."
  }, {
    "heading": "commitref-type",
    "content": ".name() -> RefSymbol: Local bookmark or tag name."
  }, {
    "heading": "commitref-type",
    "content": ".remote() -> Option<RefSymbol>: Remote name if this is a remote ref."
  }, {
    "heading": "commitref-type",
    "content": ".present() -> Boolean: True if the ref points to any commit."
  }, {
    "heading": "commitref-type",
    "content": ".conflict() -> Boolean: True if the bookmark or tag is\nconflicted."
  }, {
    "heading": "commitref-type",
    "content": ".normal_target() -> Option<Commit>: Target commit if the ref is not\nconflicted and points to a commit."
  }, {
    "heading": "commitref-type",
    "content": ".removed_targets() -> List<Commit>: Old target commits if conflicted."
  }, {
    "heading": "commitref-type",
    "content": '.added_targets() -> List<Commit>: New target commits. The list usually\ncontains one "normal" target.'
  }, {
    "heading": "commitref-type",
    "content": ".tracked() -> Boolean: True if the ref is tracked by a local ref. The local\nref might have been deleted (but not pushed yet.)"
  }, {
    "heading": "commitref-type",
    "content": ".tracking_present() -> Boolean: True if the ref is tracked by a local ref,\nand if the local ref points to any commit."
  }, {
    "heading": "commitref-type",
    "content": ".tracking_ahead_count() -> SizeHint: Number of commits ahead of the tracking\nlocal ref."
  }, {
    "heading": "commitref-type",
    "content": ".tracking_behind_count() -> SizeHint: Number of commits behind of the\ntracking local ref."
  }, {
    "heading": "configvalue-type",
    "content": "Conversion: Boolean: no, Serialize: yes, Template: yes"
  }, {
    "heading": "configvalue-type",
    "content": "This type can be printed in TOML syntax. The following methods are defined."
  }, {
    "heading": "configvalue-type",
    "content": ".as_boolean() -> Boolean: Extract boolean."
  }, {
    "heading": "configvalue-type",
    "content": ".as_integer() -> Integer: Extract integer."
  }, {
    "heading": "configvalue-type",
    "content": ".as_string() -> String: Extract string. This does not convert non-string\nvalue (e.g. integer) to string."
  }, {
    "heading": "configvalue-type",
    "content": ".as_string_list() -> List<String>: Extract list of strings."
  }, {
    "heading": "cryptographicsignature-type",
    "content": "Conversion: Boolean: no, Serialize: no, Template: no"
  }, {
    "heading": "cryptographicsignature-type",
    "content": "The following methods are defined."
  }, {
    "heading": "cryptographicsignature-type",
    "content": `.status() -> String: The signature's status ("good", "bad", "unknown", "invalid").`
  }, {
    "heading": "cryptographicsignature-type",
    "content": ".key() -> String: The signature's key id representation (for GPG, this is the key fingerprint)."
  }, {
    "heading": "cryptographicsignature-type",
    "content": ".display() -> String: The signature's display string (for GPG this is the formatted primary user ID)."
  }, {
    "heading": "cryptographicsignature-type",
    "content": "!!! warning"
  }, {
    "heading": "cryptographicsignature-type",
    "content": "Calling any of .status(), .key(), or .display() is slow, as it incurs\nthe performance cost of verifying the signature (for example shelling out\nto gpg or ssh-keygen). Though consecutive calls will be faster, because\nthe backend caches the verification result."
  }, {
    "heading": "cryptographicsignature-type",
    "content": "!!! info"
  }, {
    "heading": "cryptographicsignature-type",
    "content": "As opposed to calling any of .status(), .key(), or .display(),\nchecking for signature presence through boolean coercion is fast:"
  }, {
    "heading": "diffstats-type",
    "content": "Conversion: Boolean: no, Serialize: no, Template: yes"
  }, {
    "heading": "diffstats-type",
    "content": "This type can be printed as a histogram of the changes. The following methods\nare defined."
  }, {
    "heading": "diffstats-type",
    "content": ".total_added() -> Integer: Total number of insertions."
  }, {
    "heading": "diffstats-type",
    "content": ".total_removed() -> Integer: Total number of deletions."
  }, {
    "heading": "email-type",
    "content": "Conversion: Boolean: yes, Serialize: yes, Template: yes"
  }, {
    "heading": "email-type",
    "content": "The email field of a signature may or may not look like an email address. It may\nbe empty, may not contain the symbol @, and could in principle contain\nmultiple @s."
  }, {
    "heading": "email-type",
    "content": "The following methods are defined."
  }, {
    "heading": "email-type",
    "content": ".local() -> String: the part of the email before the first @, usually the\nusername."
  }, {
    "heading": "email-type",
    "content": ".domain() -> String: the part of the email after the first @ or the empty\nstring."
  }, {
    "heading": "integer-type",
    "content": "Conversion: Boolean: no, Serialize: yes, Template: yes"
  }, {
    "heading": "integer-type",
    "content": "No methods are defined."
  }, {
    "heading": "list-type",
    "content": "Conversion: Boolean: yes, Serialize: maybe, Template: maybe"
  }, {
    "heading": "list-type",
    "content": "A list can be implicitly converted to Boolean. The following methods are\ndefined."
  }, {
    "heading": "list-type",
    "content": ".len() -> Integer: Number of elements in the list."
  }, {
    "heading": "list-type",
    "content": ".join(separator: Template) -> Template: Concatenate elements with\nthe given separator."
  }, {
    "heading": "list-type",
    "content": '.filter(|item| expression) -> List: Filter list elements by predicate\nexpression. Example: description.lines().filter(|s| s.contains("#"))'
  }, {
    "heading": "list-type",
    "content": ".map(|item| expression) -> ListTemplate: Apply template expression\nto each element. Example: parents.map(|c| c.commit_id().short())"
  }, {
    "heading": "list-type",
    "content": '.any(|item| expression) -> Boolean: Returns true if any element satisfies\nthe predicate expression. Example: parents.any(|c| c.description().contains("fix"))'
  }, {
    "heading": "list-type",
    "content": ".all(|item| expression) -> Boolean: Returns true if all elements satisfy\nthe predicate expression. Example: parents.all(|c| c.mine())"
  }, {
    "heading": "listtrailer-type",
    "content": "The following methods are defined. See also the List type."
  }, {
    "heading": "listtrailer-type",
    "content": ".contains_key(key: Stringify) -> Boolean: True if the commit description\ncontains at least one trailer with the key key."
  }, {
    "heading": "listtemplate-type",
    "content": "Conversion: Boolean: no, Serialize: no, Template: yes"
  }, {
    "heading": "listtemplate-type",
    "content": "The following methods are defined. See also the List type."
  }, {
    "heading": "listtemplate-type",
    "content": ".join(separator: Template) -> Template"
  }, {
    "heading": "operation-type",
    "content": "Conversion: Boolean: no, Serialize: yes, Template: no"
  }, {
    "heading": "operation-type",
    "content": "This type cannot be printed. The following methods are defined."
  }, {
    "heading": "operation-type",
    "content": ".current_operation() -> Boolean"
  }, {
    "heading": "operation-type",
    "content": ".description() -> String"
  }, {
    "heading": "operation-type",
    "content": ".id() -> OperationId"
  }, {
    "heading": "operation-type",
    "content": ".tags() -> String"
  }, {
    "heading": "operation-type",
    "content": ".time() -> TimestampRange"
  }, {
    "heading": "operation-type",
    "content": ".user() -> String"
  }, {
    "heading": "operation-type",
    "content": ".snapshot() -> Boolean: True if the operation is a snapshot operation."
  }, {
    "heading": "operation-type",
    "content": ".root() -> Boolean: True if the operation is the root operation."
  }, {
    "heading": "operation-type",
    "content": ".parents() -> List<Operation>"
  }, {
    "heading": "operationid-type",
    "content": "Conversion: Boolean: no, Serialize: yes, Template: yes"
  }, {
    "heading": "operationid-type",
    "content": "The following methods are defined."
  }, {
    "heading": "operationid-type",
    "content": ".short([len: Integer]) -> String"
  }, {
    "heading": "option-type",
    "content": "Conversion: Boolean: yes, Serialize: maybe, Template: maybe"
  }, {
    "heading": "option-type",
    "content": "An option can be implicitly converted to Boolean denoting whether the\ncontained value is set. If set, all methods of the contained value can be\ninvoked. If not set, an error will be reported inline on method call."
  }, {
    "heading": "option-type",
    "content": "On comparison between two optional values or optional and non-optional values,\nunset value is not an error. Unset value is considered less than any set values."
  }, {
    "heading": "refsymbol-type",
    "content": "Conversion: Boolean: no, Serialize: yes, Template: yes"
  }, {
    "heading": "refsymbol-type",
    "content": "A String type, but is formatted as revset symbol by quoting\nand escaping if necessary. Unlike strings, this cannot be implicitly converted\nto Boolean."
  }, {
    "heading": "repopath-type",
    "content": "Conversion: Boolean: no, Serialize: yes, Template: yes"
  }, {
    "heading": "repopath-type",
    "content": "A slash-separated path relative to the repository root. The following methods\nare defined."
  }, {
    "heading": "repopath-type",
    "content": ".display() -> String: Format path for display. The formatted path uses\nplatform-native separator, and is relative to the current working directory."
  }, {
    "heading": "repopath-type",
    "content": ".parent() -> Option<RepoPath>: Parent directory path."
  }, {
    "heading": "serialize-type",
    "content": "An expression that can be serialized in machine-readable format such as JSON."
  }, {
    "heading": "serialize-type",
    "content": "!!! note"
  }, {
    "heading": "serialize-type",
    "content": "Field names and value types in the serialized output are usually stable\nacross jj versions, but the backward compatibility isn't guaranteed. If the\nunderlying data model is updated, the serialized output may change."
  }, {
    "heading": "shortestidprefix-type",
    "content": "Conversion: Boolean: no, Serialize: yes, Template: yes"
  }, {
    "heading": "shortestidprefix-type",
    "content": "The following methods are defined."
  }, {
    "heading": "shortestidprefix-type",
    "content": ".prefix() -> String"
  }, {
    "heading": "shortestidprefix-type",
    "content": ".rest() -> String"
  }, {
    "heading": "shortestidprefix-type",
    "content": ".upper() -> ShortestIdPrefix"
  }, {
    "heading": "shortestidprefix-type",
    "content": ".lower() -> ShortestIdPrefix"
  }, {
    "heading": "signature-type",
    "content": "Conversion: Boolean: no, Serialize: yes, Template: yes"
  }, {
    "heading": "signature-type",
    "content": "The following methods are defined."
  }, {
    "heading": "signature-type",
    "content": ".name() -> String"
  }, {
    "heading": "signature-type",
    "content": ".email() -> Email"
  }, {
    "heading": "signature-type",
    "content": ".timestamp() -> Timestamp"
  }, {
    "heading": "sizehint-type",
    "content": "Conversion: Boolean: no, Serialize: yes, Template: no"
  }, {
    "heading": "sizehint-type",
    "content": "This type cannot be printed. The following methods are defined."
  }, {
    "heading": "sizehint-type",
    "content": ".lower() -> Integer: Lower bound."
  }, {
    "heading": "sizehint-type",
    "content": ".upper() -> Option<Integer>: Upper bound if known."
  }, {
    "heading": "sizehint-type",
    "content": ".exact() -> Option<Integer>: Exact value if upper bound is known and it\nequals to the lower bound."
  }, {
    "heading": "sizehint-type",
    "content": ".zero() -> Boolean: True if upper bound is known and is 0. Equivalent to\n.upper() == 0."
  }, {
    "heading": "string-type",
    "content": "Conversion: Boolean: yes, Serialize: yes, Template: yes"
  }, {
    "heading": "string-type",
    "content": "A string can be implicitly converted to Boolean. The following methods are\ndefined."
  }, {
    "heading": "string-type",
    "content": ".len() -> Integer: Length in UTF-8 bytes."
  }, {
    "heading": "string-type",
    "content": ".contains(needle: Stringify) -> Boolean: Whether the string contains the\nprovided stringifiable value as a substring."
  }, {
    "heading": "string-type",
    "content": ".match(needle: StringPattern) -> String: Extracts\nthe first matching part of the string for the given pattern."
  }, {
    "heading": "string-type",
    "content": "An empty string is returned if there is no match."
  }, {
    "heading": "string-type",
    "content": ".first_line() -> String"
  }, {
    "heading": "string-type",
    "content": ".lines() -> List<String>: Split into lines excluding newline characters."
  }, {
    "heading": "string-type",
    "content": ".upper() -> String"
  }, {
    "heading": "string-type",
    "content": ".lower() -> String"
  }, {
    "heading": "string-type",
    "content": ".starts_with(needle: Stringify) -> Boolean"
  }, {
    "heading": "string-type",
    "content": ".ends_with(needle: Stringify) -> Boolean"
  }, {
    "heading": "string-type",
    "content": ".remove_prefix(needle: Stringify) -> String: Removes the passed prefix, if\npresent."
  }, {
    "heading": "string-type",
    "content": ".remove_suffix(needle: Stringify) -> String: Removes the passed suffix, if\npresent."
  }, {
    "heading": "string-type",
    "content": ".trim() -> String: Removes leading and trailing whitespace"
  }, {
    "heading": "string-type",
    "content": ".trim_start() -> String: Removes leading whitespace"
  }, {
    "heading": "string-type",
    "content": ".trim_end() -> String: Removes trailing whitespace"
  }, {
    "heading": "string-type",
    "content": ".substr(start: Integer, end: Integer) -> String: Extract substring. The\nstart/end indices should be specified in UTF-8 bytes. Negative values\ncount from the end of the string."
  }, {
    "heading": "string-type",
    "content": `.escape_json() -> String: Serializes the string in JSON format. This
function is useful for making machine-readable templates. For example, you
can use it in a template like '{ "foo": ' ++ foo.escape_json() ++ ' }' to
return a JSON/JSONL.`
  }, {
    "heading": "string-literals",
    "content": `String literals must be surrounded by single or double quotes (' or ").
A double-quoted string literal supports the following escape sequences:`
  }, {
    "heading": "string-literals",
    "content": '\\": double quote'
  }, {
    "heading": "string-literals",
    "content": "\\\\: backslash"
  }, {
    "heading": "string-literals",
    "content": "\\t: horizontal tab"
  }, {
    "heading": "string-literals",
    "content": "\\r: carriage return"
  }, {
    "heading": "string-literals",
    "content": "\\n: new line"
  }, {
    "heading": "string-literals",
    "content": "\\0: null"
  }, {
    "heading": "string-literals",
    "content": "\\e: escape (i.e., \\x1b)"
  }, {
    "heading": "string-literals",
    "content": "\\xHH: byte with hex value HH"
  }, {
    "heading": "string-literals",
    "content": `Other escape sequences are not supported. Any UTF-8 characters are allowed
inside a string literal, with two exceptions: unescaped "-s and uses of \\
that don't form a valid escape sequence.`
  }, {
    "heading": "string-literals",
    "content": "A single-quoted string literal has no escape syntax. ' can't be expressed\ninside a single-quoted string literal."
  }, {
    "heading": "stringify-type",
    "content": "An expression that can be converted to a String."
  }, {
    "heading": "stringify-type",
    "content": "Any types that can be converted to Template can also be Stringify. Unlike\nTemplate, color labels are stripped."
  }, {
    "heading": "stringpattern-type",
    "content": "Conversion: Boolean: no, Serialize: no, Template: no"
  }, {
    "heading": "stringpattern-type",
    "content": "These are the exact same as the String pattern type in revsets, except that\nquotes are mandatory."
  }, {
    "heading": "stringpattern-type",
    "content": "Literal strings may be used, which are interpreted as case-sensitive substring\nmatching."
  }, {
    "heading": "stringpattern-type",
    "content": "Currently StringPattern values cannot be passed around as values and may\nonly occur directly in the call site they are used in."
  }, {
    "heading": "template-type",
    "content": "Conversion: Boolean: no, Serialize: no, Template: yes"
  }, {
    "heading": "template-type",
    "content": "Most types can be implicitly converted to Template. No methods are defined."
  }, {
    "heading": "timestamp-type",
    "content": "Conversion: Boolean: no, Serialize: yes, Template: yes"
  }, {
    "heading": "timestamp-type",
    "content": "The following methods are defined."
  }, {
    "heading": "timestamp-type",
    "content": ".ago() -> String: Format as relative timestamp."
  }, {
    "heading": "timestamp-type",
    "content": ".format(format: String) -> String: Format with the specified strftime-like\nformat string."
  }, {
    "heading": "timestamp-type",
    "content": ".utc() -> Timestamp: Convert timestamp into UTC timezone."
  }, {
    "heading": "timestamp-type",
    "content": ".local() -> Timestamp: Convert timestamp into local timezone."
  }, {
    "heading": "timestamp-type",
    "content": ".after(date: String) -> Boolean: True if the timestamp is exactly at or after the given date."
  }, {
    "heading": "timestamp-type",
    "content": ".before(date: String) -> Boolean: True if the timestamp is before, but not including, the given date."
  }, {
    "heading": "timestamprange-type",
    "content": "Conversion: Boolean: no, Serialize: yes, Template: yes"
  }, {
    "heading": "timestamprange-type",
    "content": "The following methods are defined."
  }, {
    "heading": "timestamprange-type",
    "content": ".start() -> Timestamp"
  }, {
    "heading": "timestamprange-type",
    "content": ".end() -> Timestamp"
  }, {
    "heading": "timestamprange-type",
    "content": ".duration() -> String"
  }, {
    "heading": "trailer-type",
    "content": "Conversion: Boolean: no, Serialize: no, Template: yes"
  }, {
    "heading": "trailer-type",
    "content": "The following methods are defined."
  }, {
    "heading": "trailer-type",
    "content": ".key() -> String"
  }, {
    "heading": "trailer-type",
    "content": ".value() -> String"
  }, {
    "heading": "treediff-type",
    "content": "Conversion: Boolean: no, Serialize: no, Template: no"
  }, {
    "heading": "treediff-type",
    "content": "This type cannot be printed. The following methods are defined."
  }, {
    "heading": "treediff-type",
    "content": ".files() -> List<TreeDiffEntry>: Changed files."
  }, {
    "heading": "treediff-type",
    "content": ".color_words([context: Integer]) -> Template: Format as a word-level diff\nwith changes indicated only by color."
  }, {
    "heading": "treediff-type",
    "content": ".git([context: Integer]) -> Template: Format as a Git diff."
  }, {
    "heading": "treediff-type",
    "content": ".stat([width: Integer]) -> DiffStats: Calculate stats of changed lines."
  }, {
    "heading": "treediff-type",
    "content": ".summary() -> Template: Format as a list of status code and path pairs."
  }, {
    "heading": "treediffentry-type",
    "content": "Conversion: Boolean: no, Serialize: no, Template: no"
  }, {
    "heading": "treediffentry-type",
    "content": "This type cannot be printed. The following methods are defined."
  }, {
    "heading": "treediffentry-type",
    "content": ".path() -> RepoPath: Path to the entry. If the entry is a copy/rename, this\npoints to the target (or right) entry."
  }, {
    "heading": "treediffentry-type",
    "content": '.status() -> String: One of "modified", "added", "removed",\n"copied", or "renamed".'
  }, {
    "heading": "treediffentry-type",
    "content": ".source() -> TreeEntry: The source (or left) entry."
  }, {
    "heading": "treediffentry-type",
    "content": ".target() -> TreeEntry: The target (or right) entry."
  }, {
    "heading": "treeentry-type",
    "content": "Conversion: Boolean: no, Serialize: no, Template: no"
  }, {
    "heading": "treeentry-type",
    "content": "This type cannot be printed. The following methods are defined."
  }, {
    "heading": "treeentry-type",
    "content": ".path() -> RepoPath: Path to the entry."
  }, {
    "heading": "treeentry-type",
    "content": ".conflict() -> Boolean: True if the entry is a merge conflict."
  }, {
    "heading": "treeentry-type",
    "content": '.file_type() -> String: One of "file", "symlink", "tree",\n"git-submodule", or "conflict".'
  }, {
    "heading": "treeentry-type",
    "content": ".executable() -> Boolean: True if the entry is an executable file."
  }, {
    "heading": "workspaceref-type",
    "content": "Conversion: Boolean: no, Serialize: yes, Template: yes"
  }, {
    "heading": "workspaceref-type",
    "content": "The following methods are defined."
  }, {
    "heading": "workspaceref-type",
    "content": ".name() -> RefSymbol: Returns the workspace name as a symbol."
  }, {
    "heading": "workspaceref-type",
    "content": ".target() -> Commit: Returns the working-copy commit of this workspace."
  }, {
    "heading": "color-labels",
    "content": "Template fragments are usually labeled with the command name, the context (or\nthe top-level object), and the method names. You can customize the output\ncolors by using these labels."
  }, {
    "heading": "color-labels",
    "content": "For example, the following template is labeled as op_log operation id short:"
  }, {
    "heading": "color-labels",
    "content": "In addition to that, you can insert arbitrary labels by label(label, content)\nfunction."
  }, {
    "heading": "color-labels",
    "content": "To inspect how output fragments are labeled, use --color=debug option."
  }, {
    "heading": "configuration",
    "content": "The default templates and aliases() are defined in the [templates] and\n[template-aliases] sections of the config respectively. The exact definitions\ncan be seen in the cli/src/config/templates.toml file in jj's source\ntree."
  }, {
    "heading": "configuration",
    "content": "New keywords and functions can be defined as aliases, by using any\ncombination of the predefined keywords/functions and other aliases."
  }, {
    "heading": "configuration",
    "content": "Alias functions can be overloaded by the number of parameters. However, builtin\nfunctions will be shadowed by name, and can't co-exist with aliases."
  }, {
    "heading": "configuration",
    "content": "For example:"
  }, {
    "heading": "examples",
    "content": "Get short commit IDs of the working-copy parents:"
  }, {
    "heading": "examples",
    "content": "Show machine-readable list of full commit and change IDs:"
  }],
  "headings": [{
    "id": "keywords",
    "content": "Keywords"
  }, {
    "id": "commit-keywords",
    "content": "Commit keywords"
  }, {
    "id": "operation-keywords",
    "content": "Operation keywords"
  }, {
    "id": "operators",
    "content": "Operators"
  }, {
    "id": "global-functions",
    "content": "Global functions"
  }, {
    "id": "built-in-aliases",
    "content": "Built-in Aliases"
  }, {
    "id": "types",
    "content": "Types"
  }, {
    "id": "annotationline-type",
    "content": "AnnotationLine type"
  }, {
    "id": "boolean-type",
    "content": "Boolean type"
  }, {
    "id": "commit-type",
    "content": "Commit type"
  }, {
    "id": "commitevolutionentry-type",
    "content": "CommitEvolutionEntry type"
  }, {
    "id": "changeid-type",
    "content": "ChangeId type"
  }, {
    "id": "commitid-type",
    "content": "CommitId type"
  }, {
    "id": "commitref-type",
    "content": "CommitRef type"
  }, {
    "id": "configvalue-type",
    "content": "ConfigValue type"
  }, {
    "id": "cryptographicsignature-type",
    "content": "CryptographicSignature type"
  }, {
    "id": "diffstats-type",
    "content": "DiffStats type"
  }, {
    "id": "email-type",
    "content": "Email type"
  }, {
    "id": "integer-type",
    "content": "Integer type"
  }, {
    "id": "list-type",
    "content": "List type"
  }, {
    "id": "listtrailer-type",
    "content": "List<Trailer> type"
  }, {
    "id": "listtemplate-type",
    "content": "ListTemplate type"
  }, {
    "id": "operation-type",
    "content": "Operation type"
  }, {
    "id": "operationid-type",
    "content": "OperationId type"
  }, {
    "id": "option-type",
    "content": "Option type"
  }, {
    "id": "refsymbol-type",
    "content": "RefSymbol type"
  }, {
    "id": "repopath-type",
    "content": "RepoPath type"
  }, {
    "id": "serialize-type",
    "content": "Serialize type"
  }, {
    "id": "shortestidprefix-type",
    "content": "ShortestIdPrefix type"
  }, {
    "id": "signature-type",
    "content": "Signature type"
  }, {
    "id": "sizehint-type",
    "content": "SizeHint type"
  }, {
    "id": "string-type",
    "content": "String type"
  }, {
    "id": "string-literals",
    "content": "String literals"
  }, {
    "id": "stringify-type",
    "content": "Stringify type"
  }, {
    "id": "stringpattern-type",
    "content": "StringPattern type"
  }, {
    "id": "template-type",
    "content": "Template type"
  }, {
    "id": "timestamp-type",
    "content": "Timestamp type"
  }, {
    "id": "timestamprange-type",
    "content": "TimestampRange type"
  }, {
    "id": "trailer-type",
    "content": "Trailer type"
  }, {
    "id": "treediff-type",
    "content": "TreeDiff type"
  }, {
    "id": "treediffentry-type",
    "content": "TreeDiffEntry type"
  }, {
    "id": "treeentry-type",
    "content": "TreeEntry type"
  }, {
    "id": "workspaceref-type",
    "content": "WorkspaceRef type"
  }, {
    "id": "color-labels",
    "content": "Color labels"
  }, {
    "id": "configuration",
    "content": "Configuration"
  }, {
    "id": "examples",
    "content": "Examples"
  }]
};
const toc = [{
  depth: 2,
  url: "#keywords",
  title: jsx(Fragment, {
    children: "Keywords"
  })
}, {
  depth: 3,
  url: "#commit-keywords",
  title: jsx(Fragment, {
    children: "Commit keywords"
  })
}, {
  depth: 3,
  url: "#operation-keywords",
  title: jsx(Fragment, {
    children: "Operation keywords"
  })
}, {
  depth: 2,
  url: "#operators",
  title: jsx(Fragment, {
    children: "Operators"
  })
}, {
  depth: 2,
  url: "#global-functions",
  title: jsx(Fragment, {
    children: "Global functions"
  })
}, {
  depth: 2,
  url: "#built-in-aliases",
  title: jsx(Fragment, {
    children: "Built-in Aliases"
  })
}, {
  depth: 2,
  url: "#types",
  title: jsx(Fragment, {
    children: "Types"
  })
}, {
  depth: 3,
  url: "#annotationline-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "AnnotationLine"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#boolean-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "Boolean"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#commit-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "Commit"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#commitevolutionentry-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "CommitEvolutionEntry"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#changeid-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "ChangeId"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#commitid-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "CommitId"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#commitref-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "CommitRef"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#configvalue-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "ConfigValue"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#cryptographicsignature-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "CryptographicSignature"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#diffstats-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "DiffStats"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#email-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "Email"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#integer-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "Integer"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#list-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "List"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#listtrailer-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "List<Trailer>"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#listtemplate-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "ListTemplate"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#operation-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "Operation"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#operationid-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "OperationId"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#option-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "Option"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#refsymbol-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "RefSymbol"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#repopath-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "RepoPath"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#serialize-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "Serialize"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#shortestidprefix-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "ShortestIdPrefix"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#signature-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "Signature"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#sizehint-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "SizeHint"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#string-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "String"
    }), " type"]
  })
}, {
  depth: 4,
  url: "#string-literals",
  title: jsx(Fragment, {
    children: "String literals"
  })
}, {
  depth: 3,
  url: "#stringify-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "Stringify"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#stringpattern-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "StringPattern"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#template-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "Template"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#timestamp-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "Timestamp"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#timestamprange-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "TimestampRange"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#trailer-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "Trailer"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#treediff-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "TreeDiff"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#treediffentry-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "TreeDiffEntry"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#treeentry-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "TreeEntry"
    }), " type"]
  })
}, {
  depth: 3,
  url: "#workspaceref-type",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "WorkspaceRef"
    }), " type"]
  })
}, {
  depth: 2,
  url: "#color-labels",
  title: jsx(Fragment, {
    children: "Color labels"
  })
}, {
  depth: 2,
  url: "#configuration",
  title: jsx(Fragment, {
    children: "Configuration"
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
    h4: "h4",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: "Jujutsu supports a functional language to customize output of commands.\nThe language consists of literals, keywords, operators, functions, and\nmethods."
    }), "\n", jsxs(_components.p, {
      children: ["A couple of ", jsx(_components.code, {
        children: "jj"
      }), " commands accept a template via ", jsx(_components.code, {
        children: "-T"
      }), "/", jsx(_components.code, {
        children: "--template"
      }), " option."]
    }), "\n", jsx(_components.h2, {
      id: "keywords",
      children: "Keywords"
    }), "\n", jsxs(_components.p, {
      children: ["Keywords represent objects of different types; the types are described in\na follow-up section. In addition to context-specific keywords, the top-level\nobject can be referenced as ", jsx(_components.code, {
        children: "self"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "commit-keywords",
      children: "Commit keywords"
    }), "\n", jsxs(_components.p, {
      children: ["In ", jsx(_components.code, {
        children: "jj log"
      }), " templates, all 0-argument methods of ", jsxs(_components.a, {
        href: "#commit-type",
        children: ["the ", jsx(_components.code, {
          children: "Commit"
        }), "\ntype"]
      }), " are available as keywords. For example, ", jsx(_components.code, {
        children: "commit_id"
      }), " is\nequivalent to ", jsx(_components.code, {
        children: "self.commit_id()"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "operation-keywords",
      children: "Operation keywords"
    }), "\n", jsxs(_components.p, {
      children: ["In ", jsx(_components.code, {
        children: "jj op log"
      }), " templates, all 0-argument methods of ", jsxs(_components.a, {
        href: "#operation-type",
        children: ["the ", jsx(_components.code, {
          children: "Operation"
        }), "\ntype"]
      }), " are available as keywords. For example,\n", jsx(_components.code, {
        children: "current_operation"
      }), " is equivalent to ", jsx(_components.code, {
        children: "self.current_operation()"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "operators",
      children: "Operators"
    }), "\n", jsx(_components.p, {
      children: "The following operators are supported."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x.f()"
        }), ": Method call."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "-x"
        }), ": Negate integer value."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "!x"
        }), ": Logical not."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x * y"
        }), ", ", jsx(_components.code, {
          children: "x / y"
        }), ", ", jsx(_components.code, {
          children: "x % y"
        }), ": Multiplication/division/remainder. Operands must\nbe ", jsx(_components.code, {
          children: "Integer"
        }), "s."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x + y"
        }), ", ", jsx(_components.code, {
          children: "x - y"
        }), ": Addition/subtraction. Operands must be ", jsx(_components.code, {
          children: "Integer"
        }), "s."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x >= y"
        }), ", ", jsx(_components.code, {
          children: "x > y"
        }), ", ", jsx(_components.code, {
          children: "x <= y"
        }), ", ", jsx(_components.code, {
          children: "x < y"
        }), ": Greater than or equal/greater than/\nlesser than or equal/lesser than. Operands must be ", jsx(_components.code, {
          children: "Integer"
        }), "s."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x == y"
        }), ", ", jsx(_components.code, {
          children: "x != y"
        }), ": Equal/not equal. Operands must be either ", jsx(_components.code, {
          children: "Boolean"
        }), ",\n", jsx(_components.code, {
          children: "Integer"
        }), ", or ", jsx(_components.code, {
          children: "String"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x && y"
        }), ": Logical and, short-circuiting."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x || y"
        }), ": Logical or, short-circuiting."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x ++ y"
        }), ": Concatenate ", jsx(_components.code, {
          children: "x"
        }), " and ", jsx(_components.code, {
          children: "y"
        }), " templates."]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "(listed in order of binding strengths)"
    }), "\n", jsx(_components.h2, {
      id: "global-functions",
      children: "Global functions"
    }), "\n", jsx(_components.p, {
      children: "The following functions are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "fill(width: Integer, content: Template) -> Template"
        }), ": Fill lines at\nthe given ", jsx(_components.code, {
          children: "width"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "indent(prefix: Template, content: Template) -> Template"
        }), ": Indent\nnon-empty lines by the given ", jsx(_components.code, {
          children: "prefix"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "pad_start(width: Integer, content: Template, [fill_char: Template])"
        }), ": Pad (or\nright-justify) content by adding leading fill characters. The ", jsx(_components.code, {
          children: "content"
        }), "\nshouldn't have newline character."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "pad_end(width: Integer, content: Template, [fill_char: Template])"
        }), ": Pad (or\nleft-justify) content by adding trailing fill characters. The ", jsx(_components.code, {
          children: "content"
        }), "\nshouldn't have newline character."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "pad_centered(width: Integer, content: Template, [fill_char: Template])"
        }), ": Pad\ncontent by adding both leading and trailing fill characters. If an odd number\nof fill characters are needed, the trailing fill will be one longer than the\nleading fill. The ", jsx(_components.code, {
          children: "content"
        }), " shouldn't have newline characters."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "truncate_start(width: Integer, content: Template, [ellipsis: Template])"
        }), ":\nTruncate ", jsx(_components.code, {
          children: "content"
        }), " by removing leading characters. The ", jsx(_components.code, {
          children: "content"
        }), " shouldn't\nhave newline character. If ", jsx(_components.code, {
          children: "ellipsis"
        }), " is provided and ", jsx(_components.code, {
          children: "content"
        }), " was truncated,\nprepend the ", jsx(_components.code, {
          children: "ellipsis"
        }), " to the result."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "truncate_end(width: Integer, content: Template, [ellipsis: Template])"
        }), ":\nTruncate ", jsx(_components.code, {
          children: "content"
        }), " by removing trailing characters. The ", jsx(_components.code, {
          children: "content"
        }), " shouldn't\nhave newline character. If ", jsx(_components.code, {
          children: "ellipsis"
        }), " is provided and ", jsx(_components.code, {
          children: "content"
        }), " was truncated,\nappend the ", jsx(_components.code, {
          children: "ellipsis"
        }), " to the result."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "hash(content: Stringify) -> String"
        }), ":\nHash the input and return a hexadecimal string representation of the digest."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "label(label: Stringify, content: Template) -> Template"
        }), ": Apply label to\nthe content. The ", jsx(_components.code, {
          children: "label"
        }), " is evaluated as a space-separated string."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "raw_escape_sequence(content: Template) -> Template"
        }), ": Preserves any escape\nsequences in ", jsx(_components.code, {
          children: "content"
        }), " (i.e., bypasses sanitization) and strips labels.\nNote: This function is intended for escape sequences and as such, its output\nis expected to be invisible / of no display width. Outputting content with\nnonzero display width may break wrapping, indentation etc."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "stringify(content: Stringify) -> String"
        }), ": Format ", jsx(_components.code, {
          children: "content"
        }), " to string. This\neffectively removes color labels."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "json(value: Serialize) -> String"
        }), ": Serialize ", jsx(_components.code, {
          children: "value"
        }), " in JSON format."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "if(condition: Boolean, then: Template, [else: Template]) -> Template"
        }), ":\nConditionally evaluate ", jsx(_components.code, {
          children: "then"
        }), "/", jsx(_components.code, {
          children: "else"
        }), " template content."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "coalesce(content: Template...) -> Template"
        }), ": Returns the first ", jsx(_components.strong, {
          children: "non-empty"
        }), "\ncontent."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "concat(content: Template...) -> Template"
        }), ":\nSame as ", jsx(_components.code, {
          children: "content_1 ++ ... ++ content_n"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "separate(separator: Template, content: Template...) -> Template"
        }), ":\nInsert separator between ", jsx(_components.strong, {
          children: "non-empty"
        }), " contents."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "surround(prefix: Template, suffix: Template, content: Template) -> Template"
        }), ":\nSurround ", jsx(_components.strong, {
          children: "non-empty"
        }), " content with texts such as parentheses."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "config(name: String) -> ConfigValue"
        }), ": Look up configuration value by ", jsx(_components.code, {
          children: "name"
        }), "."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "built-in-aliases",
      children: "Built-in Aliases"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "hyperlink(url, text)"
        }), ": Creates a clickable hyperlink using ", jsx(_components.a, {
          href: "https://github.com/Alhadis/OSC8-Adoption",
          children: "OSC8 escape sequences"
        }), ".\nThe ", jsx(_components.code, {
          children: "text"
        }), " will be displayed and clickable, linking to the given ", jsx(_components.code, {
          children: "url"
        }), " in\nterminals that support OSC8 hyperlinks."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "types",
      children: "Types"
    }), "\n", jsxs(_components.h3, {
      id: "annotationline-type",
      children: [jsx(_components.code, {
        children: "AnnotationLine"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": no, ", jsx(_components.code, {
          children: "Template"
        }), ": no"]
      })
    }), "\n", jsx(_components.p, {
      children: "The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".commit() -> Commit"
        }), ": Commit responsible for changing the relevant line."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".content() -> Template"
        }), ": Line content including newline character."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".line_number() -> Integer"
        }), ": 1-based line number."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".original_line_number() -> Integer"
        }), ": 1-based line number in the original commit."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".first_line_in_hunk() -> Boolean"
        }), ": False when the directly preceding line\nreferences the same commit."]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "boolean-type",
      children: [jsx(_components.code, {
        children: "Boolean"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": yes, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsxs(_components.p, {
      children: ["No methods are defined. Can be constructed with ", jsx(_components.code, {
        children: "false"
      }), " or ", jsx(_components.code, {
        children: "true"
      }), " literal."]
    }), "\n", jsxs(_components.h3, {
      id: "commit-type",
      children: [jsx(_components.code, {
        children: "Commit"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": no"]
      })
    }), "\n", jsx(_components.p, {
      children: "This type cannot be printed. The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".description() -> String"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".trailers() -> List<Trailer>"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".change_id() -> ChangeId"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".commit_id() -> CommitId"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".parents() -> List<Commit>"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".author() -> Signature"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".committer() -> Signature"
        })
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".signature() -> Option<CryptographicSignature>"
        }), ": Cryptographic signature if the\ncommit was signed."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".mine() -> Boolean"
        }), ": Commits where the author's email matches the email of\nthe current user."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".working_copies() -> List<WorkspaceRef>"
        }), ": For multi-workspace repositories, returns a list of workspace references for each workspace whose working-copy commit matches the current commit."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".current_working_copy() -> Boolean"
        }), ": True for the working-copy commit of the\ncurrent workspace."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".bookmarks() -> List<CommitRef>"
        }), ": Local and remote bookmarks pointing to the\ncommit. A tracking remote bookmark will be included only if its target is\ndifferent from the local one."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".local_bookmarks() -> List<CommitRef>"
        }), ": All local bookmarks pointing to the\ncommit."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".remote_bookmarks() -> List<CommitRef>"
        }), ": All remote bookmarks pointing to the\ncommit."]
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".tags() -> List<CommitRef>"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".git_refs() -> List<CommitRef>"
        })
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".git_head() -> Boolean"
        }), ": True for the Git ", jsx(_components.code, {
          children: "HEAD"
        }), " commit."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".divergent() -> Boolean"
        }), ": True if the commit's change id corresponds to multiple\nvisible commits."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".hidden() -> Boolean"
        }), ": True if the commit is not visible (a.k.a. abandoned)."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".immutable() -> Boolean"
        }), ": True if the commit is included in ", jsx(_components.a, {
          href: "config#set-of-immutable-commits",
          children: "the set of\nimmutable commits"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".contained_in(revset: String) -> Boolean"
        }), ": True if the commit is included in ", jsx(_components.a, {
          href: "/reference/revsets",
          children: "the provided revset"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".conflict() -> Boolean"
        }), ": True if the commit contains merge conflicts."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".empty() -> Boolean"
        }), ": True if the commit modifies no files."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".diff([files: String]) -> TreeDiff"
        }), ": Changes from the parents within ", jsxs(_components.a, {
          href: "/reference/filesets",
          children: ["the\n", jsx(_components.code, {
            children: "files"
          }), " expression"]
        }), ". All files are compared by default, but it is\nlikely to change in future version to respect the command line path arguments."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".files([files: String]) -> List<TreeEntry>"
        }), ": Files that exist in this commit,\nmatching ", jsxs(_components.a, {
          href: "/reference/filesets",
          children: ["the ", jsx(_components.code, {
            children: "files"
          }), " expression"]
        }), ". Use ", jsx(_components.code, {
          children: ".diff().files()"
        }), " to list\nchanged files."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".root() -> Boolean"
        }), ": True if the commit is the root commit."]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "commitevolutionentry-type",
      children: [jsx(_components.code, {
        children: "CommitEvolutionEntry"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": no"]
      })
    }), "\n", jsx(_components.p, {
      children: "This type cannot be printed. The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".commit() -> Commit"
        }), ": New commit."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".operation() -> Operation"
        }), ": Operation where the commit was created or\nrewritten."]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "changeid-type",
      children: [jsx(_components.code, {
        children: "ChangeId"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsx(_components.p, {
      children: "The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".normal_hex() -> String"
        }), ': Normal hex representation (0-9a-f) instead of the\ncanonical "reversed" (z-k) representation.']
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".short([len: Integer]) -> String"
        })
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".shortest([min_len: Integer]) -> ShortestIdPrefix"
        }), ": Shortest unique prefix."]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "commitid-type",
      children: [jsx(_components.code, {
        children: "CommitId"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsx(_components.p, {
      children: "The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".short([len: Integer]) -> String"
        })
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".shortest([min_len: Integer]) -> ShortestIdPrefix"
        }), ": Shortest unique prefix."]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "commitref-type",
      children: [jsx(_components.code, {
        children: "CommitRef"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsx(_components.p, {
      children: "The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".name() -> RefSymbol"
        }), ": Local bookmark or tag name."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".remote() -> Option<RefSymbol>"
        }), ": Remote name if this is a remote ref."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".present() -> Boolean"
        }), ": True if the ref points to any commit."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".conflict() -> Boolean"
        }), ": True if ", jsx(_components.a, {
          href: "/concepts/bookmarks#conflicts",
          children: "the bookmark or tag is\nconflicted"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".normal_target() -> Option<Commit>"
        }), ": Target commit if the ref is not\nconflicted and points to a commit."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".removed_targets() -> List<Commit>"
        }), ": Old target commits if conflicted."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".added_targets() -> List<Commit>"
        }), ': New target commits. The list usually\ncontains one "normal" target.']
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".tracked() -> Boolean"
        }), ": True if the ref is tracked by a local ref. The local\nref might have been deleted (but not pushed yet.)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".tracking_present() -> Boolean"
        }), ": True if the ref is tracked by a local ref,\nand if the local ref points to any commit."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".tracking_ahead_count() -> SizeHint"
        }), ": Number of commits ahead of the tracking\nlocal ref."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".tracking_behind_count() -> SizeHint"
        }), ": Number of commits behind of the\ntracking local ref."]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "configvalue-type",
      children: [jsx(_components.code, {
        children: "ConfigValue"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsx(_components.p, {
      children: "This type can be printed in TOML syntax. The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".as_boolean() -> Boolean"
        }), ": Extract boolean."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".as_integer() -> Integer"
        }), ": Extract integer."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".as_string() -> String"
        }), ": Extract string. This does not convert non-string\nvalue (e.g. integer) to string."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".as_string_list() -> List<String>"
        }), ": Extract list of strings."]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "cryptographicsignature-type",
      children: [jsx(_components.code, {
        children: "CryptographicSignature"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": no, ", jsx(_components.code, {
          children: "Template"
        }), ": no"]
      })
    }), "\n", jsx(_components.p, {
      children: "The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".status() -> String"
        }), ": The signature's status (", jsx(_components.code, {
          children: '"good"'
        }), ", ", jsx(_components.code, {
          children: '"bad"'
        }), ", ", jsx(_components.code, {
          children: '"unknown"'
        }), ", ", jsx(_components.code, {
          children: '"invalid"'
        }), ")."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".key() -> String"
        }), ": The signature's key id representation (for GPG, this is the key fingerprint)."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".display() -> String"
        }), ": The signature's display string (for GPG this is the formatted primary user ID)."]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "!!! warning"
    }), "\n", jsxs(_components.p, {
      children: ["Calling any of ", jsx(_components.code, {
        children: ".status()"
      }), ", ", jsx(_components.code, {
        children: ".key()"
      }), ", or ", jsx(_components.code, {
        children: ".display()"
      }), " is slow, as it incurs\nthe performance cost of verifying the signature (for example shelling out\nto ", jsx(_components.code, {
        children: "gpg"
      }), " or ", jsx(_components.code, {
        children: "ssh-keygen"
      }), "). Though consecutive calls will be faster, because\nthe backend caches the verification result."]
    }), "\n", jsx(_components.p, {
      children: "!!! info"
    }), "\n", jsxs(_components.p, {
      children: ["As opposed to calling any of ", jsx(_components.code, {
        children: ".status()"
      }), ", ", jsx(_components.code, {
        children: ".key()"
      }), ", or ", jsx(_components.code, {
        children: ".display()"
      }), ",\nchecking for signature presence through boolean coercion is fast:"]
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
        children: jsx(_components.code, {
          children: jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: 'if(commit.signature(), "commit has a signature", "commit is unsigned")'
            })
          })
        })
      })
    }), "\n", jsxs(_components.h3, {
      id: "diffstats-type",
      children: [jsx(_components.code, {
        children: "DiffStats"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": no, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsx(_components.p, {
      children: "This type can be printed as a histogram of the changes. The following methods\nare defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".total_added() -> Integer"
        }), ": Total number of insertions."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".total_removed() -> Integer"
        }), ": Total number of deletions."]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "email-type",
      children: [jsx(_components.code, {
        children: "Email"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": yes, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsxs(_components.p, {
      children: ["The email field of a signature may or may not look like an email address. It may\nbe empty, may not contain the symbol ", jsx(_components.code, {
        children: "@"
      }), ", and could in principle contain\nmultiple ", jsx(_components.code, {
        children: "@"
      }), "s."]
    }), "\n", jsx(_components.p, {
      children: "The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".local() -> String"
        }), ": the part of the email before the first ", jsx(_components.code, {
          children: "@"
        }), ", usually the\nusername."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".domain() -> String"
        }), ": the part of the email after the first ", jsx(_components.code, {
          children: "@"
        }), " or the empty\nstring."]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "integer-type",
      children: [jsx(_components.code, {
        children: "Integer"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsx(_components.p, {
      children: "No methods are defined."
    }), "\n", jsxs(_components.h3, {
      id: "list-type",
      children: [jsx(_components.code, {
        children: "List"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": yes, ", jsx(_components.code, {
          children: "Serialize"
        }), ": maybe, ", jsx(_components.code, {
          children: "Template"
        }), ": maybe"]
      })
    }), "\n", jsxs(_components.p, {
      children: ["A list can be implicitly converted to ", jsx(_components.code, {
        children: "Boolean"
      }), ". The following methods are\ndefined."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".len() -> Integer"
        }), ": Number of elements in the list."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".join(separator: Template) -> Template"
        }), ": Concatenate elements with\nthe given ", jsx(_components.code, {
          children: "separator"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".filter(|item| expression) -> List"
        }), ": Filter list elements by predicate\n", jsx(_components.code, {
          children: "expression"
        }), ". Example: ", jsx(_components.code, {
          children: 'description.lines().filter(|s| s.contains("#"))'
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".map(|item| expression) -> ListTemplate"
        }), ": Apply template ", jsx(_components.code, {
          children: "expression"
        }), "\nto each element. Example: ", jsx(_components.code, {
          children: "parents.map(|c| c.commit_id().short())"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".any(|item| expression) -> Boolean"
        }), ": Returns true if any element satisfies\nthe predicate ", jsx(_components.code, {
          children: "expression"
        }), ". Example: ", jsx(_components.code, {
          children: 'parents.any(|c| c.description().contains("fix"))'
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".all(|item| expression) -> Boolean"
        }), ": Returns true if all elements satisfy\nthe predicate ", jsx(_components.code, {
          children: "expression"
        }), ". Example: ", jsx(_components.code, {
          children: "parents.all(|c| c.mine())"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "listtrailer-type",
      children: [jsx(_components.code, {
        children: "List<Trailer>"
      }), " type"]
    }), "\n", jsxs(_components.p, {
      children: ["The following methods are defined. See also the ", jsx(_components.code, {
        children: "List"
      }), " type."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".contains_key(key: Stringify) -> Boolean"
        }), ": True if the commit description\ncontains at least one trailer with the key ", jsx(_components.code, {
          children: "key"
        }), "."]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "listtemplate-type",
      children: [jsx(_components.code, {
        children: "ListTemplate"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": no, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsxs(_components.p, {
      children: ["The following methods are defined. See also the ", jsx(_components.code, {
        children: "List"
      }), " type."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".join(separator: Template) -> Template"
        })
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "operation-type",
      children: [jsx(_components.code, {
        children: "Operation"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": no"]
      })
    }), "\n", jsx(_components.p, {
      children: "This type cannot be printed. The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".current_operation() -> Boolean"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".description() -> String"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".id() -> OperationId"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".tags() -> String"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".time() -> TimestampRange"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".user() -> String"
        })
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".snapshot() -> Boolean"
        }), ": True if the operation is a snapshot operation."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".root() -> Boolean"
        }), ": True if the operation is the root operation."]
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".parents() -> List<Operation>"
        })
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "operationid-type",
      children: [jsx(_components.code, {
        children: "OperationId"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsx(_components.p, {
      children: "The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".short([len: Integer]) -> String"
        })
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "option-type",
      children: [jsx(_components.code, {
        children: "Option"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": yes, ", jsx(_components.code, {
          children: "Serialize"
        }), ": maybe, ", jsx(_components.code, {
          children: "Template"
        }), ": maybe"]
      })
    }), "\n", jsxs(_components.p, {
      children: ["An option can be implicitly converted to ", jsx(_components.code, {
        children: "Boolean"
      }), " denoting whether the\ncontained value is set. If set, all methods of the contained value can be\ninvoked. If not set, an error will be reported inline on method call."]
    }), "\n", jsx(_components.p, {
      children: "On comparison between two optional values or optional and non-optional values,\nunset value is not an error. Unset value is considered less than any set values."
    }), "\n", jsxs(_components.h3, {
      id: "refsymbol-type",
      children: [jsx(_components.code, {
        children: "RefSymbol"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsxs(_components.p, {
      children: [jsxs(_components.a, {
        href: "#string-type",
        children: ["A ", jsx(_components.code, {
          children: "String"
        }), " type"]
      }), ", but is formatted as revset symbol by quoting\nand escaping if necessary. Unlike strings, this cannot be implicitly converted\nto ", jsx(_components.code, {
        children: "Boolean"
      }), "."]
    }), "\n", jsxs(_components.h3, {
      id: "repopath-type",
      children: [jsx(_components.code, {
        children: "RepoPath"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsx(_components.p, {
      children: "A slash-separated path relative to the repository root. The following methods\nare defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".display() -> String"
        }), ": Format path for display. The formatted path uses\nplatform-native separator, and is relative to the current working directory."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".parent() -> Option<RepoPath>"
        }), ": Parent directory path."]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "serialize-type",
      children: [jsx(_components.code, {
        children: "Serialize"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: "An expression that can be serialized in machine-readable format such as JSON."
    }), "\n", jsx(_components.p, {
      children: "!!! note"
    }), "\n", jsx(_components.p, {
      children: "Field names and value types in the serialized output are usually stable\nacross jj versions, but the backward compatibility isn't guaranteed. If the\nunderlying data model is updated, the serialized output may change."
    }), "\n", jsxs(_components.h3, {
      id: "shortestidprefix-type",
      children: [jsx(_components.code, {
        children: "ShortestIdPrefix"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsx(_components.p, {
      children: "The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".prefix() -> String"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".rest() -> String"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".upper() -> ShortestIdPrefix"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".lower() -> ShortestIdPrefix"
        })
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "signature-type",
      children: [jsx(_components.code, {
        children: "Signature"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsx(_components.p, {
      children: "The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".name() -> String"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".email() -> Email"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".timestamp() -> Timestamp"
        })
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "sizehint-type",
      children: [jsx(_components.code, {
        children: "SizeHint"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": no"]
      })
    }), "\n", jsx(_components.p, {
      children: "This type cannot be printed. The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".lower() -> Integer"
        }), ": Lower bound."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".upper() -> Option<Integer>"
        }), ": Upper bound if known."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".exact() -> Option<Integer>"
        }), ": Exact value if upper bound is known and it\nequals to the lower bound."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".zero() -> Boolean"
        }), ": True if upper bound is known and is ", jsx(_components.code, {
          children: "0"
        }), ". Equivalent to\n", jsx(_components.code, {
          children: ".upper() == 0"
        }), "."]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "string-type",
      children: [jsx(_components.code, {
        children: "String"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": yes, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsxs(_components.p, {
      children: ["A string can be implicitly converted to ", jsx(_components.code, {
        children: "Boolean"
      }), ". The following methods are\ndefined."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: ".len() -> Integer"
          }), ": Length in UTF-8 bytes."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: ".contains(needle: Stringify) -> Boolean"
          }), ": Whether the string contains the\nprovided stringifiable value as a substring."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: ".match(needle: StringPattern) -> String"
          }), ": Extracts\nthe first matching part of the string for the given pattern."]
        }), "\n", jsx(_components.p, {
          children: "An empty string is returned if there is no match."
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: jsx(_components.code, {
            children: ".first_line() -> String"
          })
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: ".lines() -> List<String>"
          }), ": Split into lines excluding newline characters."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: jsx(_components.code, {
            children: ".upper() -> String"
          })
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: jsx(_components.code, {
            children: ".lower() -> String"
          })
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: jsx(_components.code, {
            children: ".starts_with(needle: Stringify) -> Boolean"
          })
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: jsx(_components.code, {
            children: ".ends_with(needle: Stringify) -> Boolean"
          })
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: ".remove_prefix(needle: Stringify) -> String"
          }), ": Removes the passed prefix, if\npresent."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: ".remove_suffix(needle: Stringify) -> String"
          }), ": Removes the passed suffix, if\npresent."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: ".trim() -> String"
          }), ": Removes leading and trailing whitespace"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: ".trim_start() -> String"
          }), ": Removes leading whitespace"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: ".trim_end() -> String"
          }), ": Removes trailing whitespace"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: ".substr(start: Integer, end: Integer) -> String"
          }), ": Extract substring. The\n", jsx(_components.code, {
            children: "start"
          }), "/", jsx(_components.code, {
            children: "end"
          }), " indices should be specified in UTF-8 bytes. Negative values\ncount from the end of the string."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: ".escape_json() -> String"
          }), ": Serializes the string in JSON format. This\nfunction is useful for making machine-readable templates. For example, you\ncan use it in a template like ", jsx(_components.code, {
            children: `'{ "foo": ' ++ foo.escape_json() ++ ' }'`
          }), " to\nreturn a JSON/JSONL."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h4, {
      id: "string-literals",
      children: "String literals"
    }), "\n", jsxs(_components.p, {
      children: ["String literals must be surrounded by single or double quotes (", jsx(_components.code, {
        children: "'"
      }), " or ", jsx(_components.code, {
        children: '"'
      }), ").\nA double-quoted string literal supports the following escape sequences:"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: '\\"'
        }), ": double quote"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "\\\\"
        }), ": backslash"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "\\t"
        }), ": horizontal tab"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "\\r"
        }), ": carriage return"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "\\n"
        }), ": new line"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "\\0"
        }), ": null"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "\\e"
        }), ": escape (i.e., ", jsx(_components.code, {
          children: "\\x1b"
        }), ")"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "\\xHH"
        }), ": byte with hex value ", jsx(_components.code, {
          children: "HH"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["Other escape sequences are not supported. Any UTF-8 characters are allowed\ninside a string literal, with two exceptions: unescaped ", jsx(_components.code, {
        children: '"'
      }), "-s and uses of ", jsx(_components.code, {
        children: "\\"
      }), "\nthat don't form a valid escape sequence."]
    }), "\n", jsxs(_components.p, {
      children: ["A single-quoted string literal has no escape syntax. ", jsx(_components.code, {
        children: "'"
      }), " can't be expressed\ninside a single-quoted string literal."]
    }), "\n", jsxs(_components.h3, {
      id: "stringify-type",
      children: [jsx(_components.code, {
        children: "Stringify"
      }), " type"]
    }), "\n", jsxs(_components.p, {
      children: ["An expression that can be converted to a ", jsx(_components.code, {
        children: "String"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["Any types that can be converted to ", jsx(_components.code, {
        children: "Template"
      }), " can also be ", jsx(_components.code, {
        children: "Stringify"
      }), ". Unlike\n", jsx(_components.code, {
        children: "Template"
      }), ", color labels are stripped."]
    }), "\n", jsxs(_components.h3, {
      id: "stringpattern-type",
      children: [jsx(_components.code, {
        children: "StringPattern"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": no, ", jsx(_components.code, {
          children: "Template"
        }), ": no"]
      })
    }), "\n", jsxs(_components.p, {
      children: ["These are the exact same as the ", jsx(_components.a, {
        href: "revsets#string-patterns",
        children: "String pattern type"
      }), " in revsets, except that\nquotes are mandatory."]
    }), "\n", jsx(_components.p, {
      children: "Literal strings may be used, which are interpreted as case-sensitive substring\nmatching."
    }), "\n", jsxs(_components.p, {
      children: ["Currently ", jsx(_components.code, {
        children: "StringPattern"
      }), " values cannot be passed around as values and may\nonly occur directly in the call site they are used in."]
    }), "\n", jsxs(_components.h3, {
      id: "template-type",
      children: [jsx(_components.code, {
        children: "Template"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": no, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsxs(_components.p, {
      children: ["Most types can be implicitly converted to ", jsx(_components.code, {
        children: "Template"
      }), ". No methods are defined."]
    }), "\n", jsxs(_components.h3, {
      id: "timestamp-type",
      children: [jsx(_components.code, {
        children: "Timestamp"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsx(_components.p, {
      children: "The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".ago() -> String"
        }), ": Format as relative timestamp."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".format(format: String) -> String"
        }), ": Format with ", jsx(_components.a, {
          href: "https://docs.rs/chrono/latest/chrono/format/strftime/",
          children: "the specified strftime-like\nformat string"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".utc() -> Timestamp"
        }), ": Convert timestamp into UTC timezone."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".local() -> Timestamp"
        }), ": Convert timestamp into local timezone."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".after(date: String) -> Boolean"
        }), ": True if the timestamp is exactly at or after the given date."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".before(date: String) -> Boolean"
        }), ": True if the timestamp is before, but not including, the given date."]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "timestamprange-type",
      children: [jsx(_components.code, {
        children: "TimestampRange"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsx(_components.p, {
      children: "The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".start() -> Timestamp"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".end() -> Timestamp"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".duration() -> String"
        })
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "trailer-type",
      children: [jsx(_components.code, {
        children: "Trailer"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": no, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsx(_components.p, {
      children: "The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".key() -> String"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: ".value() -> String"
        })
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "treediff-type",
      children: [jsx(_components.code, {
        children: "TreeDiff"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": no, ", jsx(_components.code, {
          children: "Template"
        }), ": no"]
      })
    }), "\n", jsx(_components.p, {
      children: "This type cannot be printed. The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".files() -> List<TreeDiffEntry>"
        }), ": Changed files."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".color_words([context: Integer]) -> Template"
        }), ": Format as a word-level diff\nwith changes indicated only by color."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".git([context: Integer]) -> Template"
        }), ": Format as a Git diff."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".stat([width: Integer]) -> DiffStats"
        }), ": Calculate stats of changed lines."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".summary() -> Template"
        }), ": Format as a list of status code and path pairs."]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "treediffentry-type",
      children: [jsx(_components.code, {
        children: "TreeDiffEntry"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": no, ", jsx(_components.code, {
          children: "Template"
        }), ": no"]
      })
    }), "\n", jsx(_components.p, {
      children: "This type cannot be printed. The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".path() -> RepoPath"
        }), ": Path to the entry. If the entry is a copy/rename, this\npoints to the target (or right) entry."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".status() -> String"
        }), ": One of ", jsx(_components.code, {
          children: '"modified"'
        }), ", ", jsx(_components.code, {
          children: '"added"'
        }), ", ", jsx(_components.code, {
          children: '"removed"'
        }), ",\n", jsx(_components.code, {
          children: '"copied"'
        }), ", or ", jsx(_components.code, {
          children: '"renamed"'
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".source() -> TreeEntry"
        }), ": The source (or left) entry."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".target() -> TreeEntry"
        }), ": The target (or right) entry."]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "treeentry-type",
      children: [jsx(_components.code, {
        children: "TreeEntry"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": no, ", jsx(_components.code, {
          children: "Template"
        }), ": no"]
      })
    }), "\n", jsx(_components.p, {
      children: "This type cannot be printed. The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".path() -> RepoPath"
        }), ": Path to the entry."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".conflict() -> Boolean"
        }), ": True if the entry is a merge conflict."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".file_type() -> String"
        }), ": One of ", jsx(_components.code, {
          children: '"file"'
        }), ", ", jsx(_components.code, {
          children: '"symlink"'
        }), ", ", jsx(_components.code, {
          children: '"tree"'
        }), ",\n", jsx(_components.code, {
          children: '"git-submodule"'
        }), ", or ", jsx(_components.code, {
          children: '"conflict"'
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".executable() -> Boolean"
        }), ": True if the entry is an executable file."]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "workspaceref-type",
      children: [jsx(_components.code, {
        children: "WorkspaceRef"
      }), " type"]
    }), "\n", jsx(_components.p, {
      children: jsxs(_components.em, {
        children: ["Conversion: ", jsx(_components.code, {
          children: "Boolean"
        }), ": no, ", jsx(_components.code, {
          children: "Serialize"
        }), ": yes, ", jsx(_components.code, {
          children: "Template"
        }), ": yes"]
      })
    }), "\n", jsx(_components.p, {
      children: "The following methods are defined."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".name() -> RefSymbol"
        }), ": Returns the workspace name as a symbol."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: ".target() -> Commit"
        }), ": Returns the working-copy commit of this workspace."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "color-labels",
      children: "Color labels"
    }), "\n", jsxs(_components.p, {
      children: ["Template fragments are usually labeled with the command name, the context (or\nthe top-level object), and the method names. You can ", jsx(_components.a, {
        href: "config#custom-colors-and-styles",
        children: "customize the output\ncolors"
      }), " by using these labels."]
    }), "\n", jsxs(_components.p, {
      children: ["For example, the following template is labeled as ", jsx(_components.code, {
        children: "op_log operation id short"
      }), ":"]
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
              children: " op"
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
              children: " -T"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'self.id().short()'"
            })]
          })
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["In addition to that, you can insert arbitrary labels by ", jsx(_components.code, {
        children: "label(label, content)"
      }), "\nfunction."]
    }), "\n", jsxs(_components.p, {
      children: ["To inspect how output fragments are labeled, use ", jsx(_components.code, {
        children: "--color=debug"
      }), " option."]
    }), "\n", jsx(_components.h2, {
      id: "configuration",
      children: "Configuration"
    }), "\n", jsxs(_components.p, {
      children: ["The default templates and aliases() are defined in the ", jsx(_components.code, {
        children: "[templates]"
      }), " and\n", jsx(_components.code, {
        children: "[template-aliases]"
      }), " sections of the config respectively. The exact definitions\ncan be seen in the ", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/blob/main/cli/src/config/templates.toml",
        children: jsx(_components.code, {
          children: "cli/src/config/templates.toml"
        })
      }), " file in jj's source\ntree."]
    }), "\n", "\n", jsx(_components.p, {
      children: "New keywords and functions can be defined as aliases, by using any\ncombination of the predefined keywords/functions and other aliases."
    }), "\n", jsx(_components.p, {
      children: "Alias functions can be overloaded by the number of parameters. However, builtin\nfunctions will be shadowed by name, and can't co-exist with aliases."
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
              children: "template-aliases"
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
              children: "'commit_change_ids' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'''"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "concat("
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  format_field("Commit ID", commit_id),'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  format_field("Change ID", change_id),'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ")"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'''"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "'format_field(key, value)' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: `'key ++ ": " ++ value ++ "\\n"'`
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", jsx(_components.p, {
      children: "Get short commit IDs of the working-copy parents:"
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
              children: " --no-graph"
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
              children: " @"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -T"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ` 'parents.map(|c| c.commit_id().short()).join(",")'`
            })]
          })
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Show machine-readable list of full commit and change IDs:"
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
              children: " --no-graph"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -T"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ` 'commit_id ++ " " ++ change_id ++ "\\n"'`
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
//# sourceMappingURL=templates-DoWpwvXn.mjs.map
