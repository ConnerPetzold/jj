import{j as e}from"./main-BYx1FFWF.js";let o={title:"Templates"},r=[{href:"#commit-type"},{href:"#operation-type"},{href:"https://github.com/Alhadis/OSC8-Adoption"},{href:"config#set-of-immutable-commits"},{href:"/reference/revsets"},{href:"/reference/filesets"},{href:"/reference/filesets"},{href:"/concepts/bookmarks#conflicts"},{href:"#string-type"},{href:"https://docs.rs/chrono/latest/chrono/format/strftime/"}],l={contents:[{heading:void 0,content:`Jujutsu supports a functional language to customize output of commands.
The language consists of literals, keywords, operators, functions, and
methods.`},{heading:void 0,content:"A couple of jj commands accept a template via -T/--template option."},{heading:"keywords",content:`Keywords represent objects of different types; the types are described in
a follow-up section. In addition to context-specific keywords, the top-level
object can be referenced as self.`},{heading:"commit-keywords",content:`In jj log templates, all 0-argument methods of the Commit
type are available as keywords. For example, commit_id is
equivalent to self.commit_id().`},{heading:"operation-keywords",content:`In jj op log templates, all 0-argument methods of the Operation
type are available as keywords. For example,
current_operation is equivalent to self.current_operation().`},{heading:"operators",content:"The following operators are supported."},{heading:"operators",content:"x.f(): Method call."},{heading:"operators",content:"-x: Negate integer value."},{heading:"operators",content:"!x: Logical not."},{heading:"operators",content:`x * y, x / y, x % y: Multiplication/division/remainder. Operands must
be Integers.`},{heading:"operators",content:"x + y, x - y: Addition/subtraction. Operands must be Integers."},{heading:"operators",content:`x >= y, x > y, x <= y, x < y: Greater than or equal/greater than/
lesser than or equal/lesser than. Operands must be Integers.`},{heading:"operators",content:`x == y, x != y: Equal/not equal. Operands must be either Boolean,
Integer, or String.`},{heading:"operators",content:"x && y: Logical and, short-circuiting."},{heading:"operators",content:"x || y: Logical or, short-circuiting."},{heading:"operators",content:"x ++ y: Concatenate x and y templates."},{heading:"operators",content:"(listed in order of binding strengths)"},{heading:"global-functions",content:"The following functions are defined."},{heading:"global-functions",content:`fill(width: Integer, content: Template) -> Template: Fill lines at
the given width.`},{heading:"global-functions",content:`indent(prefix: Template, content: Template) -> Template: Indent
non-empty lines by the given prefix.`},{heading:"global-functions",content:`pad_start(width: Integer, content: Template, [fill_char: Template]): Pad (or
right-justify) content by adding leading fill characters. The content
shouldn't have newline character.`},{heading:"global-functions",content:`pad_end(width: Integer, content: Template, [fill_char: Template]): Pad (or
left-justify) content by adding trailing fill characters. The content
shouldn't have newline character.`},{heading:"global-functions",content:`pad_centered(width: Integer, content: Template, [fill_char: Template]): Pad
content by adding both leading and trailing fill characters. If an odd number
of fill characters are needed, the trailing fill will be one longer than the
leading fill. The content shouldn't have newline characters.`},{heading:"global-functions",content:`truncate_start(width: Integer, content: Template, [ellipsis: Template]):
Truncate content by removing leading characters. The content shouldn't
have newline character. If ellipsis is provided and content was truncated,
prepend the ellipsis to the result.`},{heading:"global-functions",content:`truncate_end(width: Integer, content: Template, [ellipsis: Template]):
Truncate content by removing trailing characters. The content shouldn't
have newline character. If ellipsis is provided and content was truncated,
append the ellipsis to the result.`},{heading:"global-functions",content:`hash(content: Stringify) -> String:
Hash the input and return a hexadecimal string representation of the digest.`},{heading:"global-functions",content:`label(label: Stringify, content: Template) -> Template: Apply label to
the content. The label is evaluated as a space-separated string.`},{heading:"global-functions",content:`raw_escape_sequence(content: Template) -> Template: Preserves any escape
sequences in content (i.e., bypasses sanitization) and strips labels.
Note: This function is intended for escape sequences and as such, its output
is expected to be invisible / of no display width. Outputting content with
nonzero display width may break wrapping, indentation etc.`},{heading:"global-functions",content:`stringify(content: Stringify) -> String: Format content to string. This
effectively removes color labels.`},{heading:"global-functions",content:"json(value: Serialize) -> String: Serialize value in JSON format."},{heading:"global-functions",content:`if(condition: Boolean, then: Template, [else: Template]) -> Template:
Conditionally evaluate then/else template content.`},{heading:"global-functions",content:`coalesce(content: Template...) -> Template: Returns the first non-empty
content.`},{heading:"global-functions",content:`concat(content: Template...) -> Template:
Same as content_1 ++ ... ++ content_n.`},{heading:"global-functions",content:`separate(separator: Template, content: Template...) -> Template:
Insert separator between non-empty contents.`},{heading:"global-functions",content:`surround(prefix: Template, suffix: Template, content: Template) -> Template:
Surround non-empty content with texts such as parentheses.`},{heading:"global-functions",content:"config(name: String) -> ConfigValue: Look up configuration value by name."},{heading:"built-in-aliases",content:`hyperlink(url, text): Creates a clickable hyperlink using OSC8 escape sequences.
The text will be displayed and clickable, linking to the given url in
terminals that support OSC8 hyperlinks.`},{heading:"annotationline-type",content:"Conversion: Boolean: no, Serialize: no, Template: no"},{heading:"annotationline-type",content:"The following methods are defined."},{heading:"annotationline-type",content:".commit() -> Commit: Commit responsible for changing the relevant line."},{heading:"annotationline-type",content:".content() -> Template: Line content including newline character."},{heading:"annotationline-type",content:".line_number() -> Integer: 1-based line number."},{heading:"annotationline-type",content:".original_line_number() -> Integer: 1-based line number in the original commit."},{heading:"annotationline-type",content:`.first_line_in_hunk() -> Boolean: False when the directly preceding line
references the same commit.`},{heading:"boolean-type",content:"Conversion: Boolean: yes, Serialize: yes, Template: yes"},{heading:"boolean-type",content:"No methods are defined. Can be constructed with false or true literal."},{heading:"commit-type",content:"Conversion: Boolean: no, Serialize: yes, Template: no"},{heading:"commit-type",content:"This type cannot be printed. The following methods are defined."},{heading:"commit-type",content:".description() -> String"},{heading:"commit-type",content:".trailers() -> List<Trailer>"},{heading:"commit-type",content:".change_id() -> ChangeId"},{heading:"commit-type",content:".commit_id() -> CommitId"},{heading:"commit-type",content:".parents() -> List<Commit>"},{heading:"commit-type",content:".author() -> Signature"},{heading:"commit-type",content:".committer() -> Signature"},{heading:"commit-type",content:`.signature() -> Option<CryptographicSignature>: Cryptographic signature if the
commit was signed.`},{heading:"commit-type",content:`.mine() -> Boolean: Commits where the author's email matches the email of
the current user.`},{heading:"commit-type",content:".working_copies() -> List<WorkspaceRef>: For multi-workspace repositories, returns a list of workspace references for each workspace whose working-copy commit matches the current commit."},{heading:"commit-type",content:`.current_working_copy() -> Boolean: True for the working-copy commit of the
current workspace.`},{heading:"commit-type",content:`.bookmarks() -> List<CommitRef>: Local and remote bookmarks pointing to the
commit. A tracking remote bookmark will be included only if its target is
different from the local one.`},{heading:"commit-type",content:`.local_bookmarks() -> List<CommitRef>: All local bookmarks pointing to the
commit.`},{heading:"commit-type",content:`.remote_bookmarks() -> List<CommitRef>: All remote bookmarks pointing to the
commit.`},{heading:"commit-type",content:".tags() -> List<CommitRef>"},{heading:"commit-type",content:".git_refs() -> List<CommitRef>"},{heading:"commit-type",content:".git_head() -> Boolean: True for the Git HEAD commit."},{heading:"commit-type",content:`.divergent() -> Boolean: True if the commit's change id corresponds to multiple
visible commits.`},{heading:"commit-type",content:".hidden() -> Boolean: True if the commit is not visible (a.k.a. abandoned)."},{heading:"commit-type",content:`.immutable() -> Boolean: True if the commit is included in the set of
immutable commits.`},{heading:"commit-type",content:".contained_in(revset: String) -> Boolean: True if the commit is included in the provided revset."},{heading:"commit-type",content:".conflict() -> Boolean: True if the commit contains merge conflicts."},{heading:"commit-type",content:".empty() -> Boolean: True if the commit modifies no files."},{heading:"commit-type",content:`.diff([files: String]) -> TreeDiff: Changes from the parents within the
files expression. All files are compared by default, but it is
likely to change in future version to respect the command line path arguments.`},{heading:"commit-type",content:`.files([files: String]) -> List<TreeEntry>: Files that exist in this commit,
matching the files expression. Use .diff().files() to list
changed files.`},{heading:"commit-type",content:".root() -> Boolean: True if the commit is the root commit."},{heading:"commitevolutionentry-type",content:"Conversion: Boolean: no, Serialize: yes, Template: no"},{heading:"commitevolutionentry-type",content:"This type cannot be printed. The following methods are defined."},{heading:"commitevolutionentry-type",content:".commit() -> Commit: New commit."},{heading:"commitevolutionentry-type",content:`.operation() -> Operation: Operation where the commit was created or
rewritten.`},{heading:"changeid-type",content:"Conversion: Boolean: no, Serialize: yes, Template: yes"},{heading:"changeid-type",content:"The following methods are defined."},{heading:"changeid-type",content:`.normal_hex() -> String: Normal hex representation (0-9a-f) instead of the
canonical "reversed" (z-k) representation.`},{heading:"changeid-type",content:".short([len: Integer]) -> String"},{heading:"changeid-type",content:".shortest([min_len: Integer]) -> ShortestIdPrefix: Shortest unique prefix."},{heading:"commitid-type",content:"Conversion: Boolean: no, Serialize: yes, Template: yes"},{heading:"commitid-type",content:"The following methods are defined."},{heading:"commitid-type",content:".short([len: Integer]) -> String"},{heading:"commitid-type",content:".shortest([min_len: Integer]) -> ShortestIdPrefix: Shortest unique prefix."},{heading:"commitref-type",content:"Conversion: Boolean: no, Serialize: yes, Template: yes"},{heading:"commitref-type",content:"The following methods are defined."},{heading:"commitref-type",content:".name() -> RefSymbol: Local bookmark or tag name."},{heading:"commitref-type",content:".remote() -> Option<RefSymbol>: Remote name if this is a remote ref."},{heading:"commitref-type",content:".present() -> Boolean: True if the ref points to any commit."},{heading:"commitref-type",content:`.conflict() -> Boolean: True if the bookmark or tag is
conflicted.`},{heading:"commitref-type",content:`.normal_target() -> Option<Commit>: Target commit if the ref is not
conflicted and points to a commit.`},{heading:"commitref-type",content:".removed_targets() -> List<Commit>: Old target commits if conflicted."},{heading:"commitref-type",content:`.added_targets() -> List<Commit>: New target commits. The list usually
contains one "normal" target.`},{heading:"commitref-type",content:`.tracked() -> Boolean: True if the ref is tracked by a local ref. The local
ref might have been deleted (but not pushed yet.)`},{heading:"commitref-type",content:`.tracking_present() -> Boolean: True if the ref is tracked by a local ref,
and if the local ref points to any commit.`},{heading:"commitref-type",content:`.tracking_ahead_count() -> SizeHint: Number of commits ahead of the tracking
local ref.`},{heading:"commitref-type",content:`.tracking_behind_count() -> SizeHint: Number of commits behind of the
tracking local ref.`},{heading:"configvalue-type",content:"Conversion: Boolean: no, Serialize: yes, Template: yes"},{heading:"configvalue-type",content:"This type can be printed in TOML syntax. The following methods are defined."},{heading:"configvalue-type",content:".as_boolean() -> Boolean: Extract boolean."},{heading:"configvalue-type",content:".as_integer() -> Integer: Extract integer."},{heading:"configvalue-type",content:`.as_string() -> String: Extract string. This does not convert non-string
value (e.g. integer) to string.`},{heading:"configvalue-type",content:".as_string_list() -> List<String>: Extract list of strings."},{heading:"cryptographicsignature-type",content:"Conversion: Boolean: no, Serialize: no, Template: no"},{heading:"cryptographicsignature-type",content:"The following methods are defined."},{heading:"cryptographicsignature-type",content:`.status() -> String: The signature's status ("good", "bad", "unknown", "invalid").`},{heading:"cryptographicsignature-type",content:".key() -> String: The signature's key id representation (for GPG, this is the key fingerprint)."},{heading:"cryptographicsignature-type",content:".display() -> String: The signature's display string (for GPG this is the formatted primary user ID)."},{heading:"cryptographicsignature-type",content:"!!! warning"},{heading:"cryptographicsignature-type",content:`Calling any of .status(), .key(), or .display() is slow, as it incurs
the performance cost of verifying the signature (for example shelling out
to gpg or ssh-keygen). Though consecutive calls will be faster, because
the backend caches the verification result.`},{heading:"cryptographicsignature-type",content:"!!! info"},{heading:"cryptographicsignature-type",content:`As opposed to calling any of .status(), .key(), or .display(),
checking for signature presence through boolean coercion is fast:`},{heading:"diffstats-type",content:"Conversion: Boolean: no, Serialize: no, Template: yes"},{heading:"diffstats-type",content:`This type can be printed as a histogram of the changes. The following methods
are defined.`},{heading:"diffstats-type",content:".total_added() -> Integer: Total number of insertions."},{heading:"diffstats-type",content:".total_removed() -> Integer: Total number of deletions."},{heading:"email-type",content:"Conversion: Boolean: yes, Serialize: yes, Template: yes"},{heading:"email-type",content:`The email field of a signature may or may not look like an email address. It may
be empty, may not contain the symbol @, and could in principle contain
multiple @s.`},{heading:"email-type",content:"The following methods are defined."},{heading:"email-type",content:`.local() -> String: the part of the email before the first @, usually the
username.`},{heading:"email-type",content:`.domain() -> String: the part of the email after the first @ or the empty
string.`},{heading:"integer-type",content:"Conversion: Boolean: no, Serialize: yes, Template: yes"},{heading:"integer-type",content:"No methods are defined."},{heading:"list-type",content:"Conversion: Boolean: yes, Serialize: maybe, Template: maybe"},{heading:"list-type",content:`A list can be implicitly converted to Boolean. The following methods are
defined.`},{heading:"list-type",content:".len() -> Integer: Number of elements in the list."},{heading:"list-type",content:`.join(separator: Template) -> Template: Concatenate elements with
the given separator.`},{heading:"list-type",content:`.filter(|item| expression) -> List: Filter list elements by predicate
expression. Example: description.lines().filter(|s| s.contains("#"))`},{heading:"list-type",content:`.map(|item| expression) -> ListTemplate: Apply template expression
to each element. Example: parents.map(|c| c.commit_id().short())`},{heading:"list-type",content:`.any(|item| expression) -> Boolean: Returns true if any element satisfies
the predicate expression. Example: parents.any(|c| c.description().contains("fix"))`},{heading:"list-type",content:`.all(|item| expression) -> Boolean: Returns true if all elements satisfy
the predicate expression. Example: parents.all(|c| c.mine())`},{heading:"listtrailer-type",content:"The following methods are defined. See also the List type."},{heading:"listtrailer-type",content:`.contains_key(key: Stringify) -> Boolean: True if the commit description
contains at least one trailer with the key key.`},{heading:"listtemplate-type",content:"Conversion: Boolean: no, Serialize: no, Template: yes"},{heading:"listtemplate-type",content:"The following methods are defined. See also the List type."},{heading:"listtemplate-type",content:".join(separator: Template) -> Template"},{heading:"operation-type",content:"Conversion: Boolean: no, Serialize: yes, Template: no"},{heading:"operation-type",content:"This type cannot be printed. The following methods are defined."},{heading:"operation-type",content:".current_operation() -> Boolean"},{heading:"operation-type",content:".description() -> String"},{heading:"operation-type",content:".id() -> OperationId"},{heading:"operation-type",content:".tags() -> String"},{heading:"operation-type",content:".time() -> TimestampRange"},{heading:"operation-type",content:".user() -> String"},{heading:"operation-type",content:".snapshot() -> Boolean: True if the operation is a snapshot operation."},{heading:"operation-type",content:".root() -> Boolean: True if the operation is the root operation."},{heading:"operation-type",content:".parents() -> List<Operation>"},{heading:"operationid-type",content:"Conversion: Boolean: no, Serialize: yes, Template: yes"},{heading:"operationid-type",content:"The following methods are defined."},{heading:"operationid-type",content:".short([len: Integer]) -> String"},{heading:"option-type",content:"Conversion: Boolean: yes, Serialize: maybe, Template: maybe"},{heading:"option-type",content:`An option can be implicitly converted to Boolean denoting whether the
contained value is set. If set, all methods of the contained value can be
invoked. If not set, an error will be reported inline on method call.`},{heading:"option-type",content:`On comparison between two optional values or optional and non-optional values,
unset value is not an error. Unset value is considered less than any set values.`},{heading:"refsymbol-type",content:"Conversion: Boolean: no, Serialize: yes, Template: yes"},{heading:"refsymbol-type",content:`A String type, but is formatted as revset symbol by quoting
and escaping if necessary. Unlike strings, this cannot be implicitly converted
to Boolean.`},{heading:"repopath-type",content:"Conversion: Boolean: no, Serialize: yes, Template: yes"},{heading:"repopath-type",content:`A slash-separated path relative to the repository root. The following methods
are defined.`},{heading:"repopath-type",content:`.display() -> String: Format path for display. The formatted path uses
platform-native separator, and is relative to the current working directory.`},{heading:"repopath-type",content:".parent() -> Option<RepoPath>: Parent directory path."},{heading:"serialize-type",content:"An expression that can be serialized in machine-readable format such as JSON."},{heading:"serialize-type",content:"!!! note"},{heading:"serialize-type",content:`Field names and value types in the serialized output are usually stable
across jj versions, but the backward compatibility isn't guaranteed. If the
underlying data model is updated, the serialized output may change.`},{heading:"shortestidprefix-type",content:"Conversion: Boolean: no, Serialize: yes, Template: yes"},{heading:"shortestidprefix-type",content:"The following methods are defined."},{heading:"shortestidprefix-type",content:".prefix() -> String"},{heading:"shortestidprefix-type",content:".rest() -> String"},{heading:"shortestidprefix-type",content:".upper() -> ShortestIdPrefix"},{heading:"shortestidprefix-type",content:".lower() -> ShortestIdPrefix"},{heading:"signature-type",content:"Conversion: Boolean: no, Serialize: yes, Template: yes"},{heading:"signature-type",content:"The following methods are defined."},{heading:"signature-type",content:".name() -> String"},{heading:"signature-type",content:".email() -> Email"},{heading:"signature-type",content:".timestamp() -> Timestamp"},{heading:"sizehint-type",content:"Conversion: Boolean: no, Serialize: yes, Template: no"},{heading:"sizehint-type",content:"This type cannot be printed. The following methods are defined."},{heading:"sizehint-type",content:".lower() -> Integer: Lower bound."},{heading:"sizehint-type",content:".upper() -> Option<Integer>: Upper bound if known."},{heading:"sizehint-type",content:`.exact() -> Option<Integer>: Exact value if upper bound is known and it
equals to the lower bound.`},{heading:"sizehint-type",content:`.zero() -> Boolean: True if upper bound is known and is 0. Equivalent to
.upper() == 0.`},{heading:"string-type",content:"Conversion: Boolean: yes, Serialize: yes, Template: yes"},{heading:"string-type",content:`A string can be implicitly converted to Boolean. The following methods are
defined.`},{heading:"string-type",content:".len() -> Integer: Length in UTF-8 bytes."},{heading:"string-type",content:`.contains(needle: Stringify) -> Boolean: Whether the string contains the
provided stringifiable value as a substring.`},{heading:"string-type",content:`.match(needle: StringPattern) -> String: Extracts
the first matching part of the string for the given pattern.`},{heading:"string-type",content:"An empty string is returned if there is no match."},{heading:"string-type",content:".first_line() -> String"},{heading:"string-type",content:".lines() -> List<String>: Split into lines excluding newline characters."},{heading:"string-type",content:".upper() -> String"},{heading:"string-type",content:".lower() -> String"},{heading:"string-type",content:".starts_with(needle: Stringify) -> Boolean"},{heading:"string-type",content:".ends_with(needle: Stringify) -> Boolean"},{heading:"string-type",content:`.remove_prefix(needle: Stringify) -> String: Removes the passed prefix, if
present.`},{heading:"string-type",content:`.remove_suffix(needle: Stringify) -> String: Removes the passed suffix, if
present.`},{heading:"string-type",content:".trim() -> String: Removes leading and trailing whitespace"},{heading:"string-type",content:".trim_start() -> String: Removes leading whitespace"},{heading:"string-type",content:".trim_end() -> String: Removes trailing whitespace"},{heading:"string-type",content:`.substr(start: Integer, end: Integer) -> String: Extract substring. The
start/end indices should be specified in UTF-8 bytes. Negative values
count from the end of the string.`},{heading:"string-type",content:`.escape_json() -> String: Serializes the string in JSON format. This
function is useful for making machine-readable templates. For example, you
can use it in a template like '{ "foo": ' ++ foo.escape_json() ++ ' }' to
return a JSON/JSONL.`},{heading:"string-literals",content:`String literals must be surrounded by single or double quotes (' or ").
A double-quoted string literal supports the following escape sequences:`},{heading:"string-literals",content:'\\": double quote'},{heading:"string-literals",content:"\\\\: backslash"},{heading:"string-literals",content:"\\t: horizontal tab"},{heading:"string-literals",content:"\\r: carriage return"},{heading:"string-literals",content:"\\n: new line"},{heading:"string-literals",content:"\\0: null"},{heading:"string-literals",content:"\\e: escape (i.e., \\x1b)"},{heading:"string-literals",content:"\\xHH: byte with hex value HH"},{heading:"string-literals",content:`Other escape sequences are not supported. Any UTF-8 characters are allowed
inside a string literal, with two exceptions: unescaped "-s and uses of \\
that don't form a valid escape sequence.`},{heading:"string-literals",content:`A single-quoted string literal has no escape syntax. ' can't be expressed
inside a single-quoted string literal.`},{heading:"stringify-type",content:"An expression that can be converted to a String."},{heading:"stringify-type",content:`Any types that can be converted to Template can also be Stringify. Unlike
Template, color labels are stripped.`},{heading:"stringpattern-type",content:"Conversion: Boolean: no, Serialize: no, Template: no"},{heading:"stringpattern-type",content:`These are the exact same as the String pattern type in revsets, except that
quotes are mandatory.`},{heading:"stringpattern-type",content:`Literal strings may be used, which are interpreted as case-sensitive substring
matching.`},{heading:"stringpattern-type",content:`Currently StringPattern values cannot be passed around as values and may
only occur directly in the call site they are used in.`},{heading:"template-type",content:"Conversion: Boolean: no, Serialize: no, Template: yes"},{heading:"template-type",content:"Most types can be implicitly converted to Template. No methods are defined."},{heading:"timestamp-type",content:"Conversion: Boolean: no, Serialize: yes, Template: yes"},{heading:"timestamp-type",content:"The following methods are defined."},{heading:"timestamp-type",content:".ago() -> String: Format as relative timestamp."},{heading:"timestamp-type",content:`.format(format: String) -> String: Format with the specified strftime-like
format string.`},{heading:"timestamp-type",content:".utc() -> Timestamp: Convert timestamp into UTC timezone."},{heading:"timestamp-type",content:".local() -> Timestamp: Convert timestamp into local timezone."},{heading:"timestamp-type",content:".after(date: String) -> Boolean: True if the timestamp is exactly at or after the given date."},{heading:"timestamp-type",content:".before(date: String) -> Boolean: True if the timestamp is before, but not including, the given date."},{heading:"timestamprange-type",content:"Conversion: Boolean: no, Serialize: yes, Template: yes"},{heading:"timestamprange-type",content:"The following methods are defined."},{heading:"timestamprange-type",content:".start() -> Timestamp"},{heading:"timestamprange-type",content:".end() -> Timestamp"},{heading:"timestamprange-type",content:".duration() -> String"},{heading:"trailer-type",content:"Conversion: Boolean: no, Serialize: no, Template: yes"},{heading:"trailer-type",content:"The following methods are defined."},{heading:"trailer-type",content:".key() -> String"},{heading:"trailer-type",content:".value() -> String"},{heading:"treediff-type",content:"Conversion: Boolean: no, Serialize: no, Template: no"},{heading:"treediff-type",content:"This type cannot be printed. The following methods are defined."},{heading:"treediff-type",content:".files() -> List<TreeDiffEntry>: Changed files."},{heading:"treediff-type",content:`.color_words([context: Integer]) -> Template: Format as a word-level diff
with changes indicated only by color.`},{heading:"treediff-type",content:".git([context: Integer]) -> Template: Format as a Git diff."},{heading:"treediff-type",content:".stat([width: Integer]) -> DiffStats: Calculate stats of changed lines."},{heading:"treediff-type",content:".summary() -> Template: Format as a list of status code and path pairs."},{heading:"treediffentry-type",content:"Conversion: Boolean: no, Serialize: no, Template: no"},{heading:"treediffentry-type",content:"This type cannot be printed. The following methods are defined."},{heading:"treediffentry-type",content:`.path() -> RepoPath: Path to the entry. If the entry is a copy/rename, this
points to the target (or right) entry.`},{heading:"treediffentry-type",content:`.status() -> String: One of "modified", "added", "removed",
"copied", or "renamed".`},{heading:"treediffentry-type",content:".source() -> TreeEntry: The source (or left) entry."},{heading:"treediffentry-type",content:".target() -> TreeEntry: The target (or right) entry."},{heading:"treeentry-type",content:"Conversion: Boolean: no, Serialize: no, Template: no"},{heading:"treeentry-type",content:"This type cannot be printed. The following methods are defined."},{heading:"treeentry-type",content:".path() -> RepoPath: Path to the entry."},{heading:"treeentry-type",content:".conflict() -> Boolean: True if the entry is a merge conflict."},{heading:"treeentry-type",content:`.file_type() -> String: One of "file", "symlink", "tree",
"git-submodule", or "conflict".`},{heading:"treeentry-type",content:".executable() -> Boolean: True if the entry is an executable file."},{heading:"workspaceref-type",content:"Conversion: Boolean: no, Serialize: yes, Template: yes"},{heading:"workspaceref-type",content:"The following methods are defined."},{heading:"workspaceref-type",content:".name() -> RefSymbol: Returns the workspace name as a symbol."},{heading:"workspaceref-type",content:".target() -> Commit: Returns the working-copy commit of this workspace."},{heading:"color-labels",content:`Template fragments are usually labeled with the command name, the context (or
the top-level object), and the method names. You can customize the output
colors by using these labels.`},{heading:"color-labels",content:"For example, the following template is labeled as op_log operation id short:"},{heading:"color-labels",content:`In addition to that, you can insert arbitrary labels by label(label, content)
function.`},{heading:"color-labels",content:"To inspect how output fragments are labeled, use --color=debug option."},{heading:"configuration",content:`The default templates and aliases() are defined in the [templates] and
[template-aliases] sections of the config respectively. The exact definitions
can be seen in the cli/src/config/templates.toml file in jj's source
tree.`},{heading:"configuration",content:`New keywords and functions can be defined as aliases, by using any
combination of the predefined keywords/functions and other aliases.`},{heading:"configuration",content:`Alias functions can be overloaded by the number of parameters. However, builtin
functions will be shadowed by name, and can't co-exist with aliases.`},{heading:"configuration",content:"For example:"},{heading:"examples",content:"Get short commit IDs of the working-copy parents:"},{heading:"examples",content:"Show machine-readable list of full commit and change IDs:"}],headings:[{id:"keywords",content:"Keywords"},{id:"commit-keywords",content:"Commit keywords"},{id:"operation-keywords",content:"Operation keywords"},{id:"operators",content:"Operators"},{id:"global-functions",content:"Global functions"},{id:"built-in-aliases",content:"Built-in Aliases"},{id:"types",content:"Types"},{id:"annotationline-type",content:"AnnotationLine type"},{id:"boolean-type",content:"Boolean type"},{id:"commit-type",content:"Commit type"},{id:"commitevolutionentry-type",content:"CommitEvolutionEntry type"},{id:"changeid-type",content:"ChangeId type"},{id:"commitid-type",content:"CommitId type"},{id:"commitref-type",content:"CommitRef type"},{id:"configvalue-type",content:"ConfigValue type"},{id:"cryptographicsignature-type",content:"CryptographicSignature type"},{id:"diffstats-type",content:"DiffStats type"},{id:"email-type",content:"Email type"},{id:"integer-type",content:"Integer type"},{id:"list-type",content:"List type"},{id:"listtrailer-type",content:"List<Trailer> type"},{id:"listtemplate-type",content:"ListTemplate type"},{id:"operation-type",content:"Operation type"},{id:"operationid-type",content:"OperationId type"},{id:"option-type",content:"Option type"},{id:"refsymbol-type",content:"RefSymbol type"},{id:"repopath-type",content:"RepoPath type"},{id:"serialize-type",content:"Serialize type"},{id:"shortestidprefix-type",content:"ShortestIdPrefix type"},{id:"signature-type",content:"Signature type"},{id:"sizehint-type",content:"SizeHint type"},{id:"string-type",content:"String type"},{id:"string-literals",content:"String literals"},{id:"stringify-type",content:"Stringify type"},{id:"stringpattern-type",content:"StringPattern type"},{id:"template-type",content:"Template type"},{id:"timestamp-type",content:"Timestamp type"},{id:"timestamprange-type",content:"TimestampRange type"},{id:"trailer-type",content:"Trailer type"},{id:"treediff-type",content:"TreeDiff type"},{id:"treediffentry-type",content:"TreeDiffEntry type"},{id:"treeentry-type",content:"TreeEntry type"},{id:"workspaceref-type",content:"WorkspaceRef type"},{id:"color-labels",content:"Color labels"},{id:"configuration",content:"Configuration"},{id:"examples",content:"Examples"}]};const a=[{depth:2,url:"#keywords",title:e.jsx(e.Fragment,{children:"Keywords"})},{depth:3,url:"#commit-keywords",title:e.jsx(e.Fragment,{children:"Commit keywords"})},{depth:3,url:"#operation-keywords",title:e.jsx(e.Fragment,{children:"Operation keywords"})},{depth:2,url:"#operators",title:e.jsx(e.Fragment,{children:"Operators"})},{depth:2,url:"#global-functions",title:e.jsx(e.Fragment,{children:"Global functions"})},{depth:2,url:"#built-in-aliases",title:e.jsx(e.Fragment,{children:"Built-in Aliases"})},{depth:2,url:"#types",title:e.jsx(e.Fragment,{children:"Types"})},{depth:3,url:"#annotationline-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"AnnotationLine"})," type"]})},{depth:3,url:"#boolean-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"Boolean"})," type"]})},{depth:3,url:"#commit-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"Commit"})," type"]})},{depth:3,url:"#commitevolutionentry-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"CommitEvolutionEntry"})," type"]})},{depth:3,url:"#changeid-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"ChangeId"})," type"]})},{depth:3,url:"#commitid-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"CommitId"})," type"]})},{depth:3,url:"#commitref-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"CommitRef"})," type"]})},{depth:3,url:"#configvalue-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"ConfigValue"})," type"]})},{depth:3,url:"#cryptographicsignature-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"CryptographicSignature"})," type"]})},{depth:3,url:"#diffstats-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"DiffStats"})," type"]})},{depth:3,url:"#email-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"Email"})," type"]})},{depth:3,url:"#integer-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"Integer"})," type"]})},{depth:3,url:"#list-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"List"})," type"]})},{depth:3,url:"#listtrailer-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"List<Trailer>"})," type"]})},{depth:3,url:"#listtemplate-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"ListTemplate"})," type"]})},{depth:3,url:"#operation-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"Operation"})," type"]})},{depth:3,url:"#operationid-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"OperationId"})," type"]})},{depth:3,url:"#option-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"Option"})," type"]})},{depth:3,url:"#refsymbol-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"RefSymbol"})," type"]})},{depth:3,url:"#repopath-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"RepoPath"})," type"]})},{depth:3,url:"#serialize-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"Serialize"})," type"]})},{depth:3,url:"#shortestidprefix-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"ShortestIdPrefix"})," type"]})},{depth:3,url:"#signature-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"Signature"})," type"]})},{depth:3,url:"#sizehint-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"SizeHint"})," type"]})},{depth:3,url:"#string-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"String"})," type"]})},{depth:4,url:"#string-literals",title:e.jsx(e.Fragment,{children:"String literals"})},{depth:3,url:"#stringify-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"Stringify"})," type"]})},{depth:3,url:"#stringpattern-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"StringPattern"})," type"]})},{depth:3,url:"#template-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"Template"})," type"]})},{depth:3,url:"#timestamp-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"Timestamp"})," type"]})},{depth:3,url:"#timestamprange-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"TimestampRange"})," type"]})},{depth:3,url:"#trailer-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"Trailer"})," type"]})},{depth:3,url:"#treediff-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"TreeDiff"})," type"]})},{depth:3,url:"#treediffentry-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"TreeDiffEntry"})," type"]})},{depth:3,url:"#treeentry-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"TreeEntry"})," type"]})},{depth:3,url:"#workspaceref-type",title:e.jsxs(e.Fragment,{children:[e.jsx("code",{children:"WorkspaceRef"})," type"]})},{depth:2,url:"#color-labels",title:e.jsx(e.Fragment,{children:"Color labels"})},{depth:2,url:"#configuration",title:e.jsx(e.Fragment,{children:"Configuration"})},{depth:2,url:"#examples",title:e.jsx(e.Fragment,{children:"Examples"})}];function i(t){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.p,{children:`Jujutsu supports a functional language to customize output of commands.
The language consists of literals, keywords, operators, functions, and
methods.`}),`
`,e.jsxs(n.p,{children:["A couple of ",e.jsx(n.code,{children:"jj"})," commands accept a template via ",e.jsx(n.code,{children:"-T"}),"/",e.jsx(n.code,{children:"--template"})," option."]}),`
`,e.jsx(n.h2,{id:"keywords",children:"Keywords"}),`
`,e.jsxs(n.p,{children:[`Keywords represent objects of different types; the types are described in
a follow-up section. In addition to context-specific keywords, the top-level
object can be referenced as `,e.jsx(n.code,{children:"self"}),"."]}),`
`,e.jsx(n.h3,{id:"commit-keywords",children:"Commit keywords"}),`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.code,{children:"jj log"})," templates, all 0-argument methods of ",e.jsxs(n.a,{href:"#commit-type",children:["the ",e.jsx(n.code,{children:"Commit"}),`
type`]})," are available as keywords. For example, ",e.jsx(n.code,{children:"commit_id"}),` is
equivalent to `,e.jsx(n.code,{children:"self.commit_id()"}),"."]}),`
`,e.jsx(n.h3,{id:"operation-keywords",children:"Operation keywords"}),`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.code,{children:"jj op log"})," templates, all 0-argument methods of ",e.jsxs(n.a,{href:"#operation-type",children:["the ",e.jsx(n.code,{children:"Operation"}),`
type`]}),` are available as keywords. For example,
`,e.jsx(n.code,{children:"current_operation"})," is equivalent to ",e.jsx(n.code,{children:"self.current_operation()"}),"."]}),`
`,e.jsx(n.h2,{id:"operators",children:"Operators"}),`
`,e.jsx(n.p,{children:"The following operators are supported."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x.f()"}),": Method call."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"-x"}),": Negate integer value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"!x"}),": Logical not."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x * y"}),", ",e.jsx(n.code,{children:"x / y"}),", ",e.jsx(n.code,{children:"x % y"}),`: Multiplication/division/remainder. Operands must
be `,e.jsx(n.code,{children:"Integer"}),"s."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x + y"}),", ",e.jsx(n.code,{children:"x - y"}),": Addition/subtraction. Operands must be ",e.jsx(n.code,{children:"Integer"}),"s."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x >= y"}),", ",e.jsx(n.code,{children:"x > y"}),", ",e.jsx(n.code,{children:"x <= y"}),", ",e.jsx(n.code,{children:"x < y"}),`: Greater than or equal/greater than/
lesser than or equal/lesser than. Operands must be `,e.jsx(n.code,{children:"Integer"}),"s."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x == y"}),", ",e.jsx(n.code,{children:"x != y"}),": Equal/not equal. Operands must be either ",e.jsx(n.code,{children:"Boolean"}),`,
`,e.jsx(n.code,{children:"Integer"}),", or ",e.jsx(n.code,{children:"String"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x && y"}),": Logical and, short-circuiting."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x || y"}),": Logical or, short-circuiting."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"x ++ y"}),": Concatenate ",e.jsx(n.code,{children:"x"})," and ",e.jsx(n.code,{children:"y"})," templates."]}),`
`]}),`
`,e.jsx(n.p,{children:"(listed in order of binding strengths)"}),`
`,e.jsx(n.h2,{id:"global-functions",children:"Global functions"}),`
`,e.jsx(n.p,{children:"The following functions are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"fill(width: Integer, content: Template) -> Template"}),`: Fill lines at
the given `,e.jsx(n.code,{children:"width"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"indent(prefix: Template, content: Template) -> Template"}),`: Indent
non-empty lines by the given `,e.jsx(n.code,{children:"prefix"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pad_start(width: Integer, content: Template, [fill_char: Template])"}),`: Pad (or
right-justify) content by adding leading fill characters. The `,e.jsx(n.code,{children:"content"}),`
shouldn't have newline character.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pad_end(width: Integer, content: Template, [fill_char: Template])"}),`: Pad (or
left-justify) content by adding trailing fill characters. The `,e.jsx(n.code,{children:"content"}),`
shouldn't have newline character.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"pad_centered(width: Integer, content: Template, [fill_char: Template])"}),`: Pad
content by adding both leading and trailing fill characters. If an odd number
of fill characters are needed, the trailing fill will be one longer than the
leading fill. The `,e.jsx(n.code,{children:"content"})," shouldn't have newline characters."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"truncate_start(width: Integer, content: Template, [ellipsis: Template])"}),`:
Truncate `,e.jsx(n.code,{children:"content"})," by removing leading characters. The ",e.jsx(n.code,{children:"content"}),` shouldn't
have newline character. If `,e.jsx(n.code,{children:"ellipsis"})," is provided and ",e.jsx(n.code,{children:"content"}),` was truncated,
prepend the `,e.jsx(n.code,{children:"ellipsis"})," to the result."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"truncate_end(width: Integer, content: Template, [ellipsis: Template])"}),`:
Truncate `,e.jsx(n.code,{children:"content"})," by removing trailing characters. The ",e.jsx(n.code,{children:"content"}),` shouldn't
have newline character. If `,e.jsx(n.code,{children:"ellipsis"})," is provided and ",e.jsx(n.code,{children:"content"}),` was truncated,
append the `,e.jsx(n.code,{children:"ellipsis"})," to the result."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hash(content: Stringify) -> String"}),`:
Hash the input and return a hexadecimal string representation of the digest.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"label(label: Stringify, content: Template) -> Template"}),`: Apply label to
the content. The `,e.jsx(n.code,{children:"label"})," is evaluated as a space-separated string."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"raw_escape_sequence(content: Template) -> Template"}),`: Preserves any escape
sequences in `,e.jsx(n.code,{children:"content"}),` (i.e., bypasses sanitization) and strips labels.
Note: This function is intended for escape sequences and as such, its output
is expected to be invisible / of no display width. Outputting content with
nonzero display width may break wrapping, indentation etc.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"stringify(content: Stringify) -> String"}),": Format ",e.jsx(n.code,{children:"content"}),` to string. This
effectively removes color labels.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"json(value: Serialize) -> String"}),": Serialize ",e.jsx(n.code,{children:"value"})," in JSON format."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"if(condition: Boolean, then: Template, [else: Template]) -> Template"}),`:
Conditionally evaluate `,e.jsx(n.code,{children:"then"}),"/",e.jsx(n.code,{children:"else"})," template content."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"coalesce(content: Template...) -> Template"}),": Returns the first ",e.jsx(n.strong,{children:"non-empty"}),`
content.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"concat(content: Template...) -> Template"}),`:
Same as `,e.jsx(n.code,{children:"content_1 ++ ... ++ content_n"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"separate(separator: Template, content: Template...) -> Template"}),`:
Insert separator between `,e.jsx(n.strong,{children:"non-empty"})," contents."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"surround(prefix: Template, suffix: Template, content: Template) -> Template"}),`:
Surround `,e.jsx(n.strong,{children:"non-empty"})," content with texts such as parentheses."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"config(name: String) -> ConfigValue"}),": Look up configuration value by ",e.jsx(n.code,{children:"name"}),"."]}),`
`]}),`
`,e.jsx(n.h2,{id:"built-in-aliases",children:"Built-in Aliases"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"hyperlink(url, text)"}),": Creates a clickable hyperlink using ",e.jsx(n.a,{href:"https://github.com/Alhadis/OSC8-Adoption",children:"OSC8 escape sequences"}),`.
The `,e.jsx(n.code,{children:"text"})," will be displayed and clickable, linking to the given ",e.jsx(n.code,{children:"url"}),` in
terminals that support OSC8 hyperlinks.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"types",children:"Types"}),`
`,e.jsxs(n.h3,{id:"annotationline-type",children:[e.jsx(n.code,{children:"AnnotationLine"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": no, ",e.jsx(n.code,{children:"Template"}),": no"]})}),`
`,e.jsx(n.p,{children:"The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".commit() -> Commit"}),": Commit responsible for changing the relevant line."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".content() -> Template"}),": Line content including newline character."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".line_number() -> Integer"}),": 1-based line number."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".original_line_number() -> Integer"}),": 1-based line number in the original commit."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".first_line_in_hunk() -> Boolean"}),`: False when the directly preceding line
references the same commit.`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"boolean-type",children:[e.jsx(n.code,{children:"Boolean"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": yes, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsxs(n.p,{children:["No methods are defined. Can be constructed with ",e.jsx(n.code,{children:"false"})," or ",e.jsx(n.code,{children:"true"})," literal."]}),`
`,e.jsxs(n.h3,{id:"commit-type",children:[e.jsx(n.code,{children:"Commit"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": no"]})}),`
`,e.jsx(n.p,{children:"This type cannot be printed. The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".description() -> String"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".trailers() -> List<Trailer>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".change_id() -> ChangeId"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".commit_id() -> CommitId"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".parents() -> List<Commit>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".author() -> Signature"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".committer() -> Signature"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".signature() -> Option<CryptographicSignature>"}),`: Cryptographic signature if the
commit was signed.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".mine() -> Boolean"}),`: Commits where the author's email matches the email of
the current user.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".working_copies() -> List<WorkspaceRef>"}),": For multi-workspace repositories, returns a list of workspace references for each workspace whose working-copy commit matches the current commit."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".current_working_copy() -> Boolean"}),`: True for the working-copy commit of the
current workspace.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".bookmarks() -> List<CommitRef>"}),`: Local and remote bookmarks pointing to the
commit. A tracking remote bookmark will be included only if its target is
different from the local one.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".local_bookmarks() -> List<CommitRef>"}),`: All local bookmarks pointing to the
commit.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".remote_bookmarks() -> List<CommitRef>"}),`: All remote bookmarks pointing to the
commit.`]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".tags() -> List<CommitRef>"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".git_refs() -> List<CommitRef>"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".git_head() -> Boolean"}),": True for the Git ",e.jsx(n.code,{children:"HEAD"})," commit."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".divergent() -> Boolean"}),`: True if the commit's change id corresponds to multiple
visible commits.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".hidden() -> Boolean"}),": True if the commit is not visible (a.k.a. abandoned)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".immutable() -> Boolean"}),": True if the commit is included in ",e.jsx(n.a,{href:"config#set-of-immutable-commits",children:`the set of
immutable commits`}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".contained_in(revset: String) -> Boolean"}),": True if the commit is included in ",e.jsx(n.a,{href:"/reference/revsets",children:"the provided revset"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".conflict() -> Boolean"}),": True if the commit contains merge conflicts."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".empty() -> Boolean"}),": True if the commit modifies no files."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".diff([files: String]) -> TreeDiff"}),": Changes from the parents within ",e.jsxs(n.a,{href:"/reference/filesets",children:[`the
`,e.jsx(n.code,{children:"files"})," expression"]}),`. All files are compared by default, but it is
likely to change in future version to respect the command line path arguments.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".files([files: String]) -> List<TreeEntry>"}),`: Files that exist in this commit,
matching `,e.jsxs(n.a,{href:"/reference/filesets",children:["the ",e.jsx(n.code,{children:"files"})," expression"]}),". Use ",e.jsx(n.code,{children:".diff().files()"}),` to list
changed files.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".root() -> Boolean"}),": True if the commit is the root commit."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"commitevolutionentry-type",children:[e.jsx(n.code,{children:"CommitEvolutionEntry"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": no"]})}),`
`,e.jsx(n.p,{children:"This type cannot be printed. The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".commit() -> Commit"}),": New commit."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".operation() -> Operation"}),`: Operation where the commit was created or
rewritten.`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"changeid-type",children:[e.jsx(n.code,{children:"ChangeId"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsx(n.p,{children:"The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".normal_hex() -> String"}),`: Normal hex representation (0-9a-f) instead of the
canonical "reversed" (z-k) representation.`]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".short([len: Integer]) -> String"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".shortest([min_len: Integer]) -> ShortestIdPrefix"}),": Shortest unique prefix."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"commitid-type",children:[e.jsx(n.code,{children:"CommitId"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsx(n.p,{children:"The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".short([len: Integer]) -> String"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".shortest([min_len: Integer]) -> ShortestIdPrefix"}),": Shortest unique prefix."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"commitref-type",children:[e.jsx(n.code,{children:"CommitRef"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsx(n.p,{children:"The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".name() -> RefSymbol"}),": Local bookmark or tag name."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".remote() -> Option<RefSymbol>"}),": Remote name if this is a remote ref."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".present() -> Boolean"}),": True if the ref points to any commit."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".conflict() -> Boolean"}),": True if ",e.jsx(n.a,{href:"/concepts/bookmarks#conflicts",children:`the bookmark or tag is
conflicted`}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".normal_target() -> Option<Commit>"}),`: Target commit if the ref is not
conflicted and points to a commit.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".removed_targets() -> List<Commit>"}),": Old target commits if conflicted."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".added_targets() -> List<Commit>"}),`: New target commits. The list usually
contains one "normal" target.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".tracked() -> Boolean"}),`: True if the ref is tracked by a local ref. The local
ref might have been deleted (but not pushed yet.)`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".tracking_present() -> Boolean"}),`: True if the ref is tracked by a local ref,
and if the local ref points to any commit.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".tracking_ahead_count() -> SizeHint"}),`: Number of commits ahead of the tracking
local ref.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".tracking_behind_count() -> SizeHint"}),`: Number of commits behind of the
tracking local ref.`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"configvalue-type",children:[e.jsx(n.code,{children:"ConfigValue"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsx(n.p,{children:"This type can be printed in TOML syntax. The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".as_boolean() -> Boolean"}),": Extract boolean."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".as_integer() -> Integer"}),": Extract integer."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".as_string() -> String"}),`: Extract string. This does not convert non-string
value (e.g. integer) to string.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".as_string_list() -> List<String>"}),": Extract list of strings."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"cryptographicsignature-type",children:[e.jsx(n.code,{children:"CryptographicSignature"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": no, ",e.jsx(n.code,{children:"Template"}),": no"]})}),`
`,e.jsx(n.p,{children:"The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".status() -> String"}),": The signature's status (",e.jsx(n.code,{children:'"good"'}),", ",e.jsx(n.code,{children:'"bad"'}),", ",e.jsx(n.code,{children:'"unknown"'}),", ",e.jsx(n.code,{children:'"invalid"'}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".key() -> String"}),": The signature's key id representation (for GPG, this is the key fingerprint)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".display() -> String"}),": The signature's display string (for GPG this is the formatted primary user ID)."]}),`
`]}),`
`,e.jsx(n.p,{children:"!!! warning"}),`
`,e.jsxs(n.p,{children:["Calling any of ",e.jsx(n.code,{children:".status()"}),", ",e.jsx(n.code,{children:".key()"}),", or ",e.jsx(n.code,{children:".display()"}),` is slow, as it incurs
the performance cost of verifying the signature (for example shelling out
to `,e.jsx(n.code,{children:"gpg"})," or ",e.jsx(n.code,{children:"ssh-keygen"}),`). Though consecutive calls will be faster, because
the backend caches the verification result.`]}),`
`,e.jsx(n.p,{children:"!!! info"}),`
`,e.jsxs(n.p,{children:["As opposed to calling any of ",e.jsx(n.code,{children:".status()"}),", ",e.jsx(n.code,{children:".key()"}),", or ",e.jsx(n.code,{children:".display()"}),`,
checking for signature presence through boolean coercion is fast:`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsx(n.code,{children:e.jsx(n.span,{className:"line",children:e.jsx(n.span,{children:'if(commit.signature(), "commit has a signature", "commit is unsigned")'})})})})}),`
`,e.jsxs(n.h3,{id:"diffstats-type",children:[e.jsx(n.code,{children:"DiffStats"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": no, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsx(n.p,{children:`This type can be printed as a histogram of the changes. The following methods
are defined.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".total_added() -> Integer"}),": Total number of insertions."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".total_removed() -> Integer"}),": Total number of deletions."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"email-type",children:[e.jsx(n.code,{children:"Email"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": yes, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsxs(n.p,{children:[`The email field of a signature may or may not look like an email address. It may
be empty, may not contain the symbol `,e.jsx(n.code,{children:"@"}),`, and could in principle contain
multiple `,e.jsx(n.code,{children:"@"}),"s."]}),`
`,e.jsx(n.p,{children:"The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".local() -> String"}),": the part of the email before the first ",e.jsx(n.code,{children:"@"}),`, usually the
username.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".domain() -> String"}),": the part of the email after the first ",e.jsx(n.code,{children:"@"}),` or the empty
string.`]}),`
`]}),`
`,e.jsxs(n.h3,{id:"integer-type",children:[e.jsx(n.code,{children:"Integer"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsx(n.p,{children:"No methods are defined."}),`
`,e.jsxs(n.h3,{id:"list-type",children:[e.jsx(n.code,{children:"List"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": yes, ",e.jsx(n.code,{children:"Serialize"}),": maybe, ",e.jsx(n.code,{children:"Template"}),": maybe"]})}),`
`,e.jsxs(n.p,{children:["A list can be implicitly converted to ",e.jsx(n.code,{children:"Boolean"}),`. The following methods are
defined.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".len() -> Integer"}),": Number of elements in the list."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".join(separator: Template) -> Template"}),`: Concatenate elements with
the given `,e.jsx(n.code,{children:"separator"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".filter(|item| expression) -> List"}),`: Filter list elements by predicate
`,e.jsx(n.code,{children:"expression"}),". Example: ",e.jsx(n.code,{children:'description.lines().filter(|s| s.contains("#"))'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".map(|item| expression) -> ListTemplate"}),": Apply template ",e.jsx(n.code,{children:"expression"}),`
to each element. Example: `,e.jsx(n.code,{children:"parents.map(|c| c.commit_id().short())"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".any(|item| expression) -> Boolean"}),`: Returns true if any element satisfies
the predicate `,e.jsx(n.code,{children:"expression"}),". Example: ",e.jsx(n.code,{children:'parents.any(|c| c.description().contains("fix"))'})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".all(|item| expression) -> Boolean"}),`: Returns true if all elements satisfy
the predicate `,e.jsx(n.code,{children:"expression"}),". Example: ",e.jsx(n.code,{children:"parents.all(|c| c.mine())"})]}),`
`]}),`
`,e.jsxs(n.h3,{id:"listtrailer-type",children:[e.jsx(n.code,{children:"List<Trailer>"})," type"]}),`
`,e.jsxs(n.p,{children:["The following methods are defined. See also the ",e.jsx(n.code,{children:"List"})," type."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".contains_key(key: Stringify) -> Boolean"}),`: True if the commit description
contains at least one trailer with the key `,e.jsx(n.code,{children:"key"}),"."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"listtemplate-type",children:[e.jsx(n.code,{children:"ListTemplate"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": no, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsxs(n.p,{children:["The following methods are defined. See also the ",e.jsx(n.code,{children:"List"})," type."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".join(separator: Template) -> Template"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"operation-type",children:[e.jsx(n.code,{children:"Operation"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": no"]})}),`
`,e.jsx(n.p,{children:"This type cannot be printed. The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".current_operation() -> Boolean"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".description() -> String"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".id() -> OperationId"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".tags() -> String"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".time() -> TimestampRange"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".user() -> String"})}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".snapshot() -> Boolean"}),": True if the operation is a snapshot operation."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".root() -> Boolean"}),": True if the operation is the root operation."]}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".parents() -> List<Operation>"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"operationid-type",children:[e.jsx(n.code,{children:"OperationId"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsx(n.p,{children:"The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".short([len: Integer]) -> String"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"option-type",children:[e.jsx(n.code,{children:"Option"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": yes, ",e.jsx(n.code,{children:"Serialize"}),": maybe, ",e.jsx(n.code,{children:"Template"}),": maybe"]})}),`
`,e.jsxs(n.p,{children:["An option can be implicitly converted to ",e.jsx(n.code,{children:"Boolean"}),` denoting whether the
contained value is set. If set, all methods of the contained value can be
invoked. If not set, an error will be reported inline on method call.`]}),`
`,e.jsx(n.p,{children:`On comparison between two optional values or optional and non-optional values,
unset value is not an error. Unset value is considered less than any set values.`}),`
`,e.jsxs(n.h3,{id:"refsymbol-type",children:[e.jsx(n.code,{children:"RefSymbol"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.a,{href:"#string-type",children:["A ",e.jsx(n.code,{children:"String"})," type"]}),`, but is formatted as revset symbol by quoting
and escaping if necessary. Unlike strings, this cannot be implicitly converted
to `,e.jsx(n.code,{children:"Boolean"}),"."]}),`
`,e.jsxs(n.h3,{id:"repopath-type",children:[e.jsx(n.code,{children:"RepoPath"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsx(n.p,{children:`A slash-separated path relative to the repository root. The following methods
are defined.`}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".display() -> String"}),`: Format path for display. The formatted path uses
platform-native separator, and is relative to the current working directory.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".parent() -> Option<RepoPath>"}),": Parent directory path."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"serialize-type",children:[e.jsx(n.code,{children:"Serialize"})," type"]}),`
`,e.jsx(n.p,{children:"An expression that can be serialized in machine-readable format such as JSON."}),`
`,e.jsx(n.p,{children:"!!! note"}),`
`,e.jsx(n.p,{children:`Field names and value types in the serialized output are usually stable
across jj versions, but the backward compatibility isn't guaranteed. If the
underlying data model is updated, the serialized output may change.`}),`
`,e.jsxs(n.h3,{id:"shortestidprefix-type",children:[e.jsx(n.code,{children:"ShortestIdPrefix"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsx(n.p,{children:"The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".prefix() -> String"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".rest() -> String"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".upper() -> ShortestIdPrefix"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".lower() -> ShortestIdPrefix"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"signature-type",children:[e.jsx(n.code,{children:"Signature"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsx(n.p,{children:"The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".name() -> String"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".email() -> Email"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".timestamp() -> Timestamp"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"sizehint-type",children:[e.jsx(n.code,{children:"SizeHint"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": no"]})}),`
`,e.jsx(n.p,{children:"This type cannot be printed. The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".lower() -> Integer"}),": Lower bound."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".upper() -> Option<Integer>"}),": Upper bound if known."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".exact() -> Option<Integer>"}),`: Exact value if upper bound is known and it
equals to the lower bound.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".zero() -> Boolean"}),": True if upper bound is known and is ",e.jsx(n.code,{children:"0"}),`. Equivalent to
`,e.jsx(n.code,{children:".upper() == 0"}),"."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"string-type",children:[e.jsx(n.code,{children:"String"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": yes, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsxs(n.p,{children:["A string can be implicitly converted to ",e.jsx(n.code,{children:"Boolean"}),`. The following methods are
defined.`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".len() -> Integer"}),": Length in UTF-8 bytes."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".contains(needle: Stringify) -> Boolean"}),`: Whether the string contains the
provided stringifiable value as a substring.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".match(needle: StringPattern) -> String"}),`: Extracts
the first matching part of the string for the given pattern.`]}),`
`,e.jsx(n.p,{children:"An empty string is returned if there is no match."}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:".first_line() -> String"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".lines() -> List<String>"}),": Split into lines excluding newline characters."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:".upper() -> String"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:".lower() -> String"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:".starts_with(needle: Stringify) -> Boolean"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:".ends_with(needle: Stringify) -> Boolean"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".remove_prefix(needle: Stringify) -> String"}),`: Removes the passed prefix, if
present.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".remove_suffix(needle: Stringify) -> String"}),`: Removes the passed suffix, if
present.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".trim() -> String"}),": Removes leading and trailing whitespace"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".trim_start() -> String"}),": Removes leading whitespace"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".trim_end() -> String"}),": Removes trailing whitespace"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".substr(start: Integer, end: Integer) -> String"}),`: Extract substring. The
`,e.jsx(n.code,{children:"start"}),"/",e.jsx(n.code,{children:"end"}),` indices should be specified in UTF-8 bytes. Negative values
count from the end of the string.`]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".escape_json() -> String"}),`: Serializes the string in JSON format. This
function is useful for making machine-readable templates. For example, you
can use it in a template like `,e.jsx(n.code,{children:`'{ "foo": ' ++ foo.escape_json() ++ ' }'`}),` to
return a JSON/JSONL.`]}),`
`]}),`
`]}),`
`,e.jsx(n.h4,{id:"string-literals",children:"String literals"}),`
`,e.jsxs(n.p,{children:["String literals must be surrounded by single or double quotes (",e.jsx(n.code,{children:"'"})," or ",e.jsx(n.code,{children:'"'}),`).
A double-quoted string literal supports the following escape sequences:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:'\\"'}),": double quote"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"\\\\"}),": backslash"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"\\t"}),": horizontal tab"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"\\r"}),": carriage return"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"\\n"}),": new line"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"\\0"}),": null"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"\\e"}),": escape (i.e., ",e.jsx(n.code,{children:"\\x1b"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"\\xHH"}),": byte with hex value ",e.jsx(n.code,{children:"HH"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[`Other escape sequences are not supported. Any UTF-8 characters are allowed
inside a string literal, with two exceptions: unescaped `,e.jsx(n.code,{children:'"'}),"-s and uses of ",e.jsx(n.code,{children:"\\"}),`
that don't form a valid escape sequence.`]}),`
`,e.jsxs(n.p,{children:["A single-quoted string literal has no escape syntax. ",e.jsx(n.code,{children:"'"}),` can't be expressed
inside a single-quoted string literal.`]}),`
`,e.jsxs(n.h3,{id:"stringify-type",children:[e.jsx(n.code,{children:"Stringify"})," type"]}),`
`,e.jsxs(n.p,{children:["An expression that can be converted to a ",e.jsx(n.code,{children:"String"}),"."]}),`
`,e.jsxs(n.p,{children:["Any types that can be converted to ",e.jsx(n.code,{children:"Template"})," can also be ",e.jsx(n.code,{children:"Stringify"}),`. Unlike
`,e.jsx(n.code,{children:"Template"}),", color labels are stripped."]}),`
`,e.jsxs(n.h3,{id:"stringpattern-type",children:[e.jsx(n.code,{children:"StringPattern"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": no, ",e.jsx(n.code,{children:"Template"}),": no"]})}),`
`,e.jsxs(n.p,{children:["These are the exact same as the ",e.jsx(n.a,{href:"revsets#string-patterns",children:"String pattern type"}),` in revsets, except that
quotes are mandatory.`]}),`
`,e.jsx(n.p,{children:`Literal strings may be used, which are interpreted as case-sensitive substring
matching.`}),`
`,e.jsxs(n.p,{children:["Currently ",e.jsx(n.code,{children:"StringPattern"}),` values cannot be passed around as values and may
only occur directly in the call site they are used in.`]}),`
`,e.jsxs(n.h3,{id:"template-type",children:[e.jsx(n.code,{children:"Template"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": no, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsxs(n.p,{children:["Most types can be implicitly converted to ",e.jsx(n.code,{children:"Template"}),". No methods are defined."]}),`
`,e.jsxs(n.h3,{id:"timestamp-type",children:[e.jsx(n.code,{children:"Timestamp"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsx(n.p,{children:"The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".ago() -> String"}),": Format as relative timestamp."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".format(format: String) -> String"}),": Format with ",e.jsx(n.a,{href:"https://docs.rs/chrono/latest/chrono/format/strftime/",children:`the specified strftime-like
format string`}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".utc() -> Timestamp"}),": Convert timestamp into UTC timezone."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".local() -> Timestamp"}),": Convert timestamp into local timezone."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".after(date: String) -> Boolean"}),": True if the timestamp is exactly at or after the given date."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".before(date: String) -> Boolean"}),": True if the timestamp is before, but not including, the given date."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"timestamprange-type",children:[e.jsx(n.code,{children:"TimestampRange"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsx(n.p,{children:"The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".start() -> Timestamp"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".end() -> Timestamp"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".duration() -> String"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"trailer-type",children:[e.jsx(n.code,{children:"Trailer"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": no, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsx(n.p,{children:"The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".key() -> String"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:".value() -> String"})}),`
`]}),`
`,e.jsxs(n.h3,{id:"treediff-type",children:[e.jsx(n.code,{children:"TreeDiff"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": no, ",e.jsx(n.code,{children:"Template"}),": no"]})}),`
`,e.jsx(n.p,{children:"This type cannot be printed. The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".files() -> List<TreeDiffEntry>"}),": Changed files."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".color_words([context: Integer]) -> Template"}),`: Format as a word-level diff
with changes indicated only by color.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".git([context: Integer]) -> Template"}),": Format as a Git diff."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".stat([width: Integer]) -> DiffStats"}),": Calculate stats of changed lines."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".summary() -> Template"}),": Format as a list of status code and path pairs."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"treediffentry-type",children:[e.jsx(n.code,{children:"TreeDiffEntry"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": no, ",e.jsx(n.code,{children:"Template"}),": no"]})}),`
`,e.jsx(n.p,{children:"This type cannot be printed. The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".path() -> RepoPath"}),`: Path to the entry. If the entry is a copy/rename, this
points to the target (or right) entry.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".status() -> String"}),": One of ",e.jsx(n.code,{children:'"modified"'}),", ",e.jsx(n.code,{children:'"added"'}),", ",e.jsx(n.code,{children:'"removed"'}),`,
`,e.jsx(n.code,{children:'"copied"'}),", or ",e.jsx(n.code,{children:'"renamed"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".source() -> TreeEntry"}),": The source (or left) entry."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".target() -> TreeEntry"}),": The target (or right) entry."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"treeentry-type",children:[e.jsx(n.code,{children:"TreeEntry"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": no, ",e.jsx(n.code,{children:"Template"}),": no"]})}),`
`,e.jsx(n.p,{children:"This type cannot be printed. The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".path() -> RepoPath"}),": Path to the entry."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".conflict() -> Boolean"}),": True if the entry is a merge conflict."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".file_type() -> String"}),": One of ",e.jsx(n.code,{children:'"file"'}),", ",e.jsx(n.code,{children:'"symlink"'}),", ",e.jsx(n.code,{children:'"tree"'}),`,
`,e.jsx(n.code,{children:'"git-submodule"'}),", or ",e.jsx(n.code,{children:'"conflict"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".executable() -> Boolean"}),": True if the entry is an executable file."]}),`
`]}),`
`,e.jsxs(n.h3,{id:"workspaceref-type",children:[e.jsx(n.code,{children:"WorkspaceRef"})," type"]}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Conversion: ",e.jsx(n.code,{children:"Boolean"}),": no, ",e.jsx(n.code,{children:"Serialize"}),": yes, ",e.jsx(n.code,{children:"Template"}),": yes"]})}),`
`,e.jsx(n.p,{children:"The following methods are defined."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".name() -> RefSymbol"}),": Returns the workspace name as a symbol."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:".target() -> Commit"}),": Returns the working-copy commit of this workspace."]}),`
`]}),`
`,e.jsx(n.h2,{id:"color-labels",children:"Color labels"}),`
`,e.jsxs(n.p,{children:[`Template fragments are usually labeled with the command name, the context (or
the top-level object), and the method names. You can `,e.jsx(n.a,{href:"config#custom-colors-and-styles",children:`customize the output
colors`})," by using these labels."]}),`
`,e.jsxs(n.p,{children:["For example, the following template is labeled as ",e.jsx(n.code,{children:"op_log operation id short"}),":"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" op"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" log"}),e.jsx(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -T"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" 'self.id().short()'"})]})})})}),`
`,e.jsxs(n.p,{children:["In addition to that, you can insert arbitrary labels by ",e.jsx(n.code,{children:"label(label, content)"}),`
function.`]}),`
`,e.jsxs(n.p,{children:["To inspect how output fragments are labeled, use ",e.jsx(n.code,{children:"--color=debug"})," option."]}),`
`,e.jsx(n.h2,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(n.p,{children:["The default templates and aliases() are defined in the ",e.jsx(n.code,{children:"[templates]"}),` and
`,e.jsx(n.code,{children:"[template-aliases]"}),` sections of the config respectively. The exact definitions
can be seen in the `,e.jsx(n.a,{href:"https://github.com/jj-vcs/jj/blob/main/cli/src/config/templates.toml",children:e.jsx(n.code,{children:"cli/src/config/templates.toml"})}),` file in jj's source
tree.`]}),`
`,`
`,e.jsx(n.p,{children:`New keywords and functions can be defined as aliases, by using any
combination of the predefined keywords/functions and other aliases.`}),`
`,e.jsx(n.p,{children:`Alias functions can be overloaded by the number of parameters. However, builtin
functions will be shadowed by name, and can't co-exist with aliases.`}),`
`,e.jsx(n.p,{children:"For example:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(n.code,{children:[e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"["}),e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"template-aliases"}),e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"]"})]}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"'commit_change_ids' = "}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'''"})]}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"concat("})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'  format_field("Commit ID", commit_id),'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'  format_field("Change ID", change_id),'})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:")"})}),`
`,e.jsx(n.span,{className:"line",children:e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'''"})}),`
`,e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"'format_field(key, value)' = "}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:`'key ++ ": " ++ value ++ "\\n"'`})]})]})})}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.p,{children:"Get short commit IDs of the working-copy parents:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" log"}),e.jsx(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --no-graph"}),e.jsx(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -r"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" @"}),e.jsx(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -T"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:` 'parents.map(|c| c.commit_id().short()).join(",")'`})]})})})}),`
`,e.jsx(n.p,{children:"Show machine-readable list of full commit and change IDs:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" log"}),e.jsx(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --no-graph"}),e.jsx(n.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -T"}),e.jsx(n.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:` 'commit_id ++ " " ++ change_id ++ "\\n"'`})]})})})})]})}function d(t={}){const{wrapper:n}=t.components||{};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{d as default,r as extractedReferences,o as frontmatter,l as structuredData,a as toc};
