import { jsx, jsxs, Fragment } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Configuration"
};
let extractedReferences = [{
  "href": "#specifying-config-on-the-command-line"
}, {
  "href": "https://github.com/jj-vcs/jj/blob/main/cli/src/config/colors.toml"
}, {
  "href": "templates#commit-type"
}, {
  "href": "templates#commit-type"
}, {
  "href": "conflicts#conflict-markers"
}, {
  "href": "#builtin-pager"
}, {
  "href": "https://github.com/markbt/streampager/"
}, {
  "href": "https://github.com/so-fancy/diff-so-fancy"
}, {
  "href": "https://github.com/dandavison/delta"
}, {
  "href": "#using-meld-as-a-diff-editor"
}, {
  "href": "#using-meld-as-a-diff-editor"
}, {
  "href": "https://meldmerge.org/"
}, {
  "href": "https://github.com/ilyagr/diffedit3/releases"
}, {
  "href": "https://jupyter.org/"
}, {
  "href": "https://meldmerge.org"
}, {
  "href": "https://meldmerge.org/"
}, {
  "href": "https://gist.github.com/ilyagr/1b40f6061d8ad320cee4c12843df1a23"
}, {
  "href": "#experimental-3-pane-diff-editing"
}, {
  "href": "#3-way-merge-tools-for-conflict-resolution"
}, {
  "href": "https://code.visualstudio.com/docs/remote/remote-overview"
}, {
  "href": "#conflict-marker-style"
}, {
  "href": "https://man.openbsd.org/ssh-keygen#ALLOWED_SIGNERS"
}, {
  "href": "https://man.openbsd.org/ssh-keygen#KEY_REVOCATION_LISTS"
}, {
  "href": "./cli-reference#jj-sign"
}, {
  "href": "./cli-reference#jj-unsign"
}, {
  "href": "https://github.com/jj-vcs/jj/issues/5786"
}, {
  "href": "./templates#commit-type"
}, {
  "href": "./templates#cryptographicsignature-type"
}, {
  "href": "git-compatibility#colocated-jujutsugit-repos"
}, {
  "href": "#config-files-and-toml"
}, {
  "href": "revsets#string-patterns"
}, {
  "href": "https://facebook.github.io/watchman/docs/install"
}, {
  "href": "/reference/filesets"
}, {
  "href": "/concepts/working-copy#ignored-files"
}, {
  "href": "/concepts/working-copy#ignored-files"
}, {
  "href": "#conditional-variables"
}, {
  "href": "https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml"
}, {
  "href": "https://github.com/neovim/nvim-lspconfig"
}, {
  "href": "https://github.com/tamasfe/taplo"
}, {
  "href": "https://github.com/tamasfe/taplo"
}, {
  "href": "https://plugins.jetbrains.com/plugin/8195-toml"
}, {
  "href": "https://github.com/emacs-lsp/lsp-mode"
}, {
  "href": "https://github.com/dryman/toml-mode.el"
}, {
  "href": "https://github.com/tamasfe/taplo"
}];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "These are the config settings available to jj/Jujutsu."
  }, {
    "heading": "config-files-and-toml",
    "content": "jj loads several types of config settings:"
  }, {
    "heading": "config-files-and-toml",
    "content": "The built-in settings. These cannot be edited. They can be viewed in the\ncli/src/config/ directory in jj's source repo."
  }, {
    "heading": "config-files-and-toml",
    "content": "The user settings. These can be edited with jj config edit --user. User\nsettings are located in the user config files, which can be found with jj\nconfig path --user."
  }, {
    "heading": "config-files-and-toml",
    "content": "The repo settings. These can be edited with jj config edit --repo and are\nlocated in .jj/repo/config.toml."
  }, {
    "heading": "config-files-and-toml",
    "content": "Settings specified in the command-line."
  }, {
    "heading": "config-files-and-toml",
    "content": "These are listed in the order they are loaded; the settings from earlier items\nin the list are overridden by the settings from later items if they disagree.\nEvery type of config except for the built-in settings is optional."
  }, {
    "heading": "config-files-and-toml",
    "content": "You can enable JSON Schema validation in your editor by adding a #:schema\nreference at the top of your TOML config files. See JSON Schema\nSupport for details."
  }, {
    "heading": "config-files-and-toml",
    "content": "See the TOML site and the syntax guide for a detailed description of the\nsyntax. We cover some of the basics below."
  }, {
    "heading": "config-files-and-toml",
    "content": "The first thing to remember is that the value of a setting (the part to the\nright of the = sign) should be surrounded in quotes if it's a string."
  }, {
    "heading": "dotted-style-and-headings",
    "content": 'In TOML, anything under a heading can be dotted instead. For example,\nuser.name = "YOUR NAME" is equivalent to:'
  }, {
    "heading": "dotted-style-and-headings",
    "content": "For future reference, here are a couple of more complicated examples,"
  }, {
    "heading": "dotted-style-and-headings",
    "content": "The docs below refer to keys in text using dotted notation, but example\nblocks will use heading notation to be unambiguous. If you are confident with TOML\nthen use whichever suits you in your config. If you mix dotted keys and headings,\nyou must put the dotted keys before the first heading."
  }, {
    "heading": "dotted-style-and-headings",
    "content": "That's probably enough TOML to keep you out of trouble but the syntax guide is\nvery short if you ever need to check."
  }, {
    "heading": "user-settings",
    "content": "Don't forget to change these to your own details!"
  }, {
    "heading": "colorizing-output",
    "content": "Possible values are always, never, debug and auto (default: auto).\nauto will use color only when writing to a terminal. debug will print the\nactive labels alongside the regular colorized output."
  }, {
    "heading": "colorizing-output",
    "content": "This setting overrides the NO_COLOR environment variable (if set)."
  }, {
    "heading": "custom-colors-and-styles",
    "content": "You can customize the colors used for various elements of the UI. For example:"
  }, {
    "heading": "custom-colors-and-styles",
    "content": "The following colors are available:"
  }, {
    "heading": "custom-colors-and-styles",
    "content": "black"
  }, {
    "heading": "custom-colors-and-styles",
    "content": "red"
  }, {
    "heading": "custom-colors-and-styles",
    "content": "green"
  }, {
    "heading": "custom-colors-and-styles",
    "content": "yellow"
  }, {
    "heading": "custom-colors-and-styles",
    "content": "blue"
  }, {
    "heading": "custom-colors-and-styles",
    "content": "magenta"
  }, {
    "heading": "custom-colors-and-styles",
    "content": "cyan"
  }, {
    "heading": "custom-colors-and-styles",
    "content": "white"
  }, {
    "heading": "custom-colors-and-styles",
    "content": "default"
  }, {
    "heading": "custom-colors-and-styles",
    "content": 'All of them but "default" come in a bright version too, e.g. "bright red". The\n"default" color can be used to override a color defined by a parent style\n(explained below).'
  }, {
    "heading": "custom-colors-and-styles",
    "content": "You can also use a 6-digit hex code for more control over the exact color used:"
  }, {
    "heading": "custom-colors-and-styles",
    "content": "jj also supports colors from the ANSI 256-color palette as ansi-color-<N>,\nwhere <N> is a number between 0 and 255:"
  }, {
    "heading": "custom-colors-and-styles",
    "content": "If you use a string value for a color, as in the examples above, it will be used\nfor the foreground color. You can also set the background color, reverse colors\n(swap foreground and background), or make the text bold, italic, or underlined.\nFor that, you need to use a table:"
  }, {
    "heading": "custom-colors-and-styles",
    "content": 'The key names are called "labels". The above used commit_id as label. You can\nalso create rules combining multiple labels. The rules work a bit like CSS\nselectors. For example, if you want to color commit IDs green in general but\nmake the commit ID of the working-copy commit also be underlined, you can do\nthis:'
  }, {
    "heading": "custom-colors-and-styles",
    "content": "Parts of the style that are not overridden - such as the foreground color in the\nexample above - are inherited from the style of the parent label."
  }, {
    "heading": "custom-colors-and-styles",
    "content": "Which elements can be colored is not yet documented, but see\nthe default color configuration\nfor some examples of what's possible."
  }, {
    "heading": "default-command",
    "content": 'When jj is run with no explicit subcommand, the value of the\nui.default-command setting will be used instead. Possible values are any valid\nsubcommand name, subcommand alias, or user-defined alias (defaults to "log").'
  }, {
    "heading": "default-description",
    "content": "The editor content of a commit description can be populated by the\ndraft_commit_description template. self is a Commit\nobject."
  }, {
    "heading": "default-description",
    "content": "You can override only the default_commit_description value if you like, e.g.:"
  }, {
    "heading": "duplicate-commit-description",
    "content": "By default, jj duplicate copies the descriptions from the original commits.\nYou can customize this behavior by specifying the duplicate_description\ntemplate, which is given a Commit object of the\noriginal commit."
  }, {
    "heading": "bookmark-listing-order",
    "content": "By default, jj bookmark list displays bookmarks sorted alphabetically by name.\nYou can customize this sorting behavior by specifying sort keys in your config\nfile:"
  }, {
    "heading": "bookmark-listing-order",
    "content": "The configuration works identically to using the --sort option for\njj bookmark list. The following sort keys are supported: name, author-name,\nauthor-email, author-date, committer-name, committer-email,\ncommitter-date. Suffix the key with - to sort in descending order. Multiple\nkeys can be supplied here, the first key is the most significant."
  }, {
    "heading": "bookmark-listing-order",
    "content": "When the --sort option is used with jj bookmark list, the configuration\nis ignored."
  }, {
    "heading": "commit-trailers",
    "content": "You can configure automatic addition of one or more trailers to commit\ndescriptions using the commit_trailers template."
  }, {
    "heading": "commit-trailers",
    "content": "Each line of the template is an individual trailer, usually in Key: Value\nformat."
  }, {
    "heading": "commit-trailers",
    "content": "Trailers defined in this template are deduplicated with the existing\ndescription: if the entire line of a trailer is already present, it will not be\nadded again. To deduplicate based only on the trailer key, use the\ntrailers.contains_key(key) method within the template."
  }, {
    "heading": "commit-trailers",
    "content": "Some ready-to-use trailer templates are available for frequently used trailers:"
  }, {
    "heading": "commit-trailers",
    "content": 'format_signed_off_by_trailer(commit) creates a "Signed-off-by" trailer\nusing the committer info.'
  }, {
    "heading": "commit-trailers",
    "content": `format_gerrit_change_id_trailer(commit) creates a "Change-Id" trailer
suitable to be used with Gerrit. It is based Jujutsu's change id.`
  }, {
    "heading": "commit-trailers",
    "content": "Existing trailers are also accessible via commit.trailers()."
  }, {
    "heading": "diff-colors-and-styles",
    "content": "In color-words and git diffs, word-level hunks are rendered with underline. You\ncan override the default style with the following keys:"
  }, {
    "heading": "color-words-diff-options",
    "content": "In color-words diffs, changed words are displayed inline by default. Because\nit's difficult to read a diff line with many removed/added words, there's a\nthreshold to switch to traditional separate-line format. You can also change\nthe default number of lines of context shown."
  }, {
    "heading": "color-words-diff-options",
    "content": "max-inline-alternation: Maximum number of removed/added word alternation to\ninline. For example, <added> ... <added> sequence has 1 alternation, so the\nline will be inline if max-inline-alternation >= 1. <added> ... <removed>\n... <added> sequence has 3 alternation."
  }, {
    "heading": "color-words-diff-options",
    "content": "0: disable inlining, making --color-words more similar to --git"
  }, {
    "heading": "color-words-diff-options",
    "content": "1: inline removes-only or adds-only lines"
  }, {
    "heading": "color-words-diff-options",
    "content": "2, 3, ..: inline up to 2, 3, .. alternation"
  }, {
    "heading": "color-words-diff-options",
    "content": "-1: inline all lines"
  }, {
    "heading": "color-words-diff-options",
    "content": "The default is 3."
  }, {
    "heading": "color-words-diff-options",
    "content": "This parameter is experimental. The definition is subject to change."
  }, {
    "heading": "color-words-diff-options",
    "content": "conflict: How conflicts are processed and displayed."
  }, {
    "heading": "color-words-diff-options",
    "content": '"materialize": compare materialized contents (default)'
  }, {
    "heading": "color-words-diff-options",
    "content": '"pair": compare individual pairs'
  }, {
    "heading": "color-words-diff-options",
    "content": "This parameter is experimental."
  }, {
    "heading": "color-words-diff-options",
    "content": "context: Number of lines of context to show in the diff. The default is 3."
  }, {
    "heading": "git-diff-options",
    "content": "In git diffs you can change the default number of lines of context shown."
  }, {
    "heading": "git-diff-options",
    "content": "context: Number of lines of context to show in the diff. The default is 3."
  }, {
    "heading": "generating-diffs-by-external-command",
    "content": "If ui.diff-formatter is not a builtin format, the specified diff command will\nbe called."
  }, {
    "heading": "generating-diffs-by-external-command",
    "content": "The external diff tool can also be enabled by diff --tool <name> argument.\nFor the tool named <name>, command arguments can be configured as follows."
  }, {
    "heading": "generating-diffs-by-external-command",
    "content": "$left and $right are replaced with the paths to the left and right\ndirectories to diff respectively."
  }, {
    "heading": "generating-diffs-by-external-command",
    "content": 'If diff-args is not specified, ["$left", "$right"] will be used by default.'
  }, {
    "heading": "generating-diffs-by-external-command",
    "content": "If diff-args = [], jj will refuse to use this tool for diff formatting.\nThis is a way to explicitly state that a certain tool (e.g. mergiraf) does\nnot work for viewing diffs."
  }, {
    "heading": "generating-diffs-by-external-command",
    "content": "By default jj will invoke external tools with a directory containing the left\nand right sides. The diff-invocation-mode config can change this to file by file\ninvocations as follows:"
  }, {
    "heading": "generating-diffs-by-external-command",
    "content": "By default jj will display a warning when the command exits with a non-success\nerror code. The diff-expected-exit-codes config can suppress this warning\nmessage for specific exit codes:"
  }, {
    "heading": "conflict-marker-style",
    "content": "You can configure which style of conflict markers to use when materializing\nconflicts:"
  }, {
    "heading": "conflict-marker-style",
    "content": "For more details about these conflict marker styles, see the conflicts\npage."
  }, {
    "heading": "set-of-immutable-commits",
    "content": 'You can configure the set of immutable commits via\nrevset-aliases."immutable_heads()". The default set of immutable heads is\nbuiltin_immutable_heads(), which in turn is defined as\npresent(trunk()) | tags() | untracked_remote_bookmarks(). For example, to\nalso consider the release@origin bookmark immutable:'
  }, {
    "heading": "set-of-immutable-commits",
    "content": "To prevent rewriting commits authored by other users:"
  }, {
    "heading": "set-of-immutable-commits",
    "content": "Ancestors of the configured set are also immutable. The root commit is always\nimmutable even if the set is empty."
  }, {
    "heading": "set-of-immutable-commits",
    "content": "Immutable commits (other than the root commit) can be rewritten using the\n--ignore-immutable CLI flag."
  }, {
    "heading": "set-of-immutable-commits",
    "content": "!!! warning"
  }, {
    "heading": "set-of-immutable-commits",
    "content": "Using --ignore-immutable will allow you to rewrite any commit in the\nhistory, and all descendants, without warning. Use this power wisely, and\nremember jj undo."
  }, {
    "heading": "behavior-of-prev-and-next-commands",
    "content": 'If you prefer using an "edit-based" workflow, rather than squashing\nmodifications into parent changes, you may find yourself using the prev and\nnext commands with their --edit flag often to move between your changes. You\ncan avoid having to type the --edit flag every time you need it by actually\nmaking it the default:'
  }, {
    "heading": "behavior-of-prev-and-next-commands",
    "content": "You can pass the --no-edit flag to prev and next if you find yourself\nneeding the original behavior."
  }, {
    "heading": "default-template",
    "content": "You can configure the template used when no -T is specified."
  }, {
    "heading": "default-template",
    "content": "templates.config_list for jj config list"
  }, {
    "heading": "default-template",
    "content": "If you want to see the config variable origin (type and path) when you do jj config list\nyou can add this to your config:"
  }, {
    "heading": "default-revisions",
    "content": "You can configure the revisions jj log would show when neither -r nor any paths are specified."
  }, {
    "heading": "default-revisions",
    "content": "The default value for revsets.log is\n'present(@) | ancestors(immutable_heads().., 2) | present(trunk())'."
  }, {
    "heading": "prioritize-revsets-in-the-log-over-",
    "content": "In some situations the default graph can be hard to read, for example when working with big merges.\nTo improve this behavior you can configure which revset in the jj log graph is displayed on\nthe left instead of @."
  }, {
    "heading": "prioritize-revsets-in-the-log-over-",
    "content": 'The following example will prioritize the change with the description "megamerge" with a fallback\nto trunk() in case no such change exists:'
  }, {
    "heading": "default-template-1",
    "content": "You can configure the template used when no -T is specified."
  }, {
    "heading": "default-template-1",
    "content": "templates.evolog for jj evolog"
  }, {
    "heading": "default-template-1",
    "content": "templates.log for jj log"
  }, {
    "heading": "default-template-1",
    "content": "templates.show for jj show"
  }, {
    "heading": "default-template-1",
    "content": "templates.op_log for jj op log"
  }, {
    "heading": "default-template-1",
    "content": "templates.op_show for jj op show"
  }, {
    "heading": "default-template-1",
    "content": "If you want to see the full description when you do jj log you can add this to\nyour config:"
  }, {
    "heading": "node-style",
    "content": "The symbols used to represent commits or operations can be customized via\ntemplates."
  }, {
    "heading": "node-style",
    "content": "templates.log_node for commits (with Option<Commit> keywords)"
  }, {
    "heading": "node-style",
    "content": "templates.op_log_node for operations (with Operation keywords)"
  }, {
    "heading": "node-style",
    "content": "For example:"
  }, {
    "heading": "wrap-log-content",
    "content": "If enabled, log/evolog/op log content will be wrapped based on\nthe terminal width."
  }, {
    "heading": "display-of-commit-and-change-ids",
    "content": "Can be customized by the format_short_id() template alias."
  }, {
    "heading": "display-of-commit-and-change-ids",
    "content": "To customize these separately, use the format_short_commit_id() and\nformat_short_change_id() aliases:"
  }, {
    "heading": "display-of-commit-and-change-ids",
    "content": "Operation ids can be customized by the format_short_operation_id() alias:"
  }, {
    "heading": "display-of-commit-and-change-ids",
    "content": "To get shorter prefixes for certain revisions, set revsets.short-prefixes:"
  }, {
    "heading": "relative-timestamps",
    "content": "Can be customized by the format_timestamp() template alias."
  }, {
    "heading": "relative-timestamps",
    "content": "jj op log defaults to relative timestamps. To use absolute timestamps, you\nwill need to modify the format_time_range() template alias."
  }, {
    "heading": "author-format",
    "content": "Can be customized by the format_short_signature() template alias."
  }, {
    "heading": "commit-timestamp",
    "content": 'Commits have both an "author timestamp" and "committer timestamp". By default,\njj displays the committer timestamp, but can be changed to show the author\ntimestamp instead.'
  }, {
    "heading": "commit-timestamp",
    "content": "The function must return a timestamp because the return value will likely be\nformatted with format_timestamp()."
  }, {
    "heading": "signature-format",
    "content": "Can be enabled with ui.show-cryptographic-signatures, and\ncustomized with format_short_cryptographic_signature(sig) and\nformat_detailed_cryptographic_signature(sig)."
  }, {
    "heading": "signature-format",
    "content": "Note that the formatting functions take an Option<CryptographicSignature>.\nThis allows you to emit a custom message if a signature is not present, but\nwill raise an error if you try to access methods on a signature that is not\navailable."
  }, {
    "heading": "pager",
    "content": "The default pager is can be set via ui.pager or the PAGER environment\nvariable. The priority is as follows (environment variables are marked with\na $):"
  }, {
    "heading": "pager",
    "content": "ui.pager > $PAGER"
  }, {
    "heading": "pager",
    "content": "less -FRX is the default pager in the absence of any other setting, except\non Windows where it is :builtin."
  }, {
    "heading": "pager",
    "content": "The special value :builtin enables usage of the integrated\npager."
  }, {
    "heading": "pager",
    "content": "If you are using a standard Linux distro, your system likely already has\n$PAGER set and that will be preferred over the built-in. To use the built-in:"
  }, {
    "heading": "pager",
    "content": "It is possible the default will change to :builtin for all platforms in the\nfuture."
  }, {
    "heading": "pager",
    "content": "Additionally, paging behavior can be toggled via ui.paginate like so:"
  }, {
    "heading": "builtin-pager",
    "content": "Our builtin pager is based on\nstreampager but is configured within\njj's config. It is configured via the ui.streampager table."
  }, {
    "heading": "key-bindings",
    "content": "The built-in pager supports both navigation via arrows and Vim-style navigation.\nBeyond that, here are some useful keybindings for the pager:"
  }, {
    "heading": "key-bindings",
    "content": "Key"
  }, {
    "heading": "key-bindings",
    "content": "Action"
  }, {
    "heading": "key-bindings",
    "content": "Ctrl-c or q"
  }, {
    "heading": "key-bindings",
    "content": "Quit"
  }, {
    "heading": "key-bindings",
    "content": "h or F1"
  }, {
    "heading": "key-bindings",
    "content": "Show all key bindings"
  }, {
    "heading": "key-bindings",
    "content": "Esc"
  }, {
    "heading": "key-bindings",
    "content": "Close help or prompt"
  }, {
    "heading": "key-bindings",
    "content": "\\"
  }, {
    "heading": "key-bindings",
    "content": "Toggle line wrapping"
  }, {
    "heading": "key-bindings",
    "content": "#"
  }, {
    "heading": "key-bindings",
    "content": "Toggle line numbers"
  }, {
    "heading": "key-bindings",
    "content": "Ctrl-r"
  }, {
    "heading": "key-bindings",
    "content": "Toggle the ruler"
  }, {
    "heading": "key-bindings",
    "content": "The built-in pager does not support mouse input."
  }, {
    "heading": "wrapping-config",
    "content": "Wrapping performed by the pager happens in addition to any\nwrapping that jj itself does."
  }, {
    "heading": "auto-exit-clearing-the-screen-on-startup-or-exit",
    "content": "You can configure whether the pager clears the screen on startup or exit, and\nwhether it quits automatically on short inputs. When the pager auto-quits,\nfeatures like word-wrapping are disabled."
  }, {
    "heading": "processing-contents-to-be-paged",
    "content": "If you'd like to pass the output through a formatter e.g.\ndiff-so-fancy before piping it\nthrough a pager you must do it using a subshell as, unlike git or hg, the\ncommand will be executed directly. For example:"
  }, {
    "heading": "processing-contents-to-be-paged",
    "content": "Some formatters (like delta) require\ngit style diffs for formatting. You can configure this style of\ndiff as the default with the ui.diff-formatter setting. For example:"
  }, {
    "heading": "aliases",
    "content": "You can define aliases for commands, including their arguments. For example:"
  }, {
    "heading": "aliases",
    "content": "This alias syntax can only run a single jj command. However, you may want to\nexecute multiple jj commands with a single alias, or run arbitrary scripts that\ncomplement your version control workflow. This can be done, but be aware of the\ndanger:"
  }, {
    "heading": "aliases",
    "content": "!!! warning"
  }, {
    "heading": "aliases",
    "content": "The following technique just provides a convenient syntax for running\narbitrary code on your system. Using it irresponsibly may cause damage\nranging from breaking the behavior of jj undo to wiping your file system.\nExercise the same amount of caution while writing these aliases as you would\nwhen typing commands into the terminal!"
  }, {
    "heading": "aliases",
    "content": "This feature may be removed or replaced by an embedded scripting language in\nthe future."
  }, {
    "heading": "aliases",
    "content": "The command jj util exec will simply run any command you pass to it as an\nargument. Additional arguments are passed through. Here are some examples:"
  }, {
    "heading": "aliases",
    "content": "Note: Shebangs (e.g. #!/usr/bin/env) aren't necessary since you're already\nexplicitly passing your script into the right shell."
  }, {
    "heading": "editor",
    "content": "The default editor is set via ui.editor, though there are several places to\nset it. The priority is as follows (environment variables are marked with\na $):"
  }, {
    "heading": "editor",
    "content": "$JJ_EDITOR > ui.editor > $VISUAL > $EDITOR"
  }, {
    "heading": "editor",
    "content": "Nano is the default editor (Notepad on Windows) in the absence of any other\nsetting, but you could set it explicitly too."
  }, {
    "heading": "editor",
    "content": "To use NeoVim instead:"
  }, {
    "heading": "editor",
    "content": "For GUI editors you possibly need to use a -w or --wait. Some examples:"
  }, {
    "heading": "editor",
    "content": "Obviously, you would only set one line, don't copy them all in!"
  }, {
    "heading": "editing-diffs",
    "content": "The ui.diff-editor setting affects the default tool used for editing diffs\n(e.g. jj split, jj squash -i). If it is not set, the special value\n:builtin is used. It launches a built-in TUI tool (known as scm-diff-editor)\nto edit the diff in your terminal."
  }, {
    "heading": "editing-diffs",
    "content": "You can try a different tool temporarily by doing e.g. jj split --tool meld or\nyou can set the option to change the default. This requires that you have an\nappropriate tool installed, see for example the instructions for using\nMeld."
  }, {
    "heading": "editing-diffs",
    "content": "Suggestion: If possible, it is recommended to try an external diff tool like\nMeld (see below for some other possibilities)\nfor splitting commits and other diff editing, in addition to the built-in diff\neditor. It is good to know the capabilities of both. The built-in diff editor\ndoes not require external tools to be available, is faster for tasks like\npicking hunks, and does not require leaving the terminal. External tools give\nyou the flexibility of picking out portions of lines from the diff or even\narbitrarily editing the text of the files."
  }, {
    "heading": "editing-diffs",
    "content": 'If ui.diff-editor is a string, e.g. "meld", the arguments will be read from\nthe following config keys.'
  }, {
    "heading": "editing-diffs",
    "content": "jj makes the following substitutions:"
  }, {
    "heading": "editing-diffs",
    "content": "$left and $right are replaced with the paths to the left and right\ndirectories to diff respectively."
  }, {
    "heading": "editing-diffs",
    "content": 'If no edit-args are specified, ["$left", "$right"] are set by default.'
  }, {
    "heading": "editing-diffs",
    "content": "If edit-args = [], jj will refuse to use this tool for diff editing. This is a way to explicitly state that a certain tool (e.g. mergiraf) does not work for diff editing."
  }, {
    "heading": "editing-diffs",
    "content": "Finally, ui.diff-editor can be a list that specifies a command and its arguments."
  }, {
    "heading": "editing-diffs",
    "content": "Some examples:"
  }, {
    "heading": "experimental-3-pane-diff-editing",
    "content": 'We offer two special "3-pane" diff editor configs:'
  }, {
    "heading": "experimental-3-pane-diff-editing",
    "content": "meld-3, which requires installing Meld, and"
  }, {
    "heading": "experimental-3-pane-diff-editing",
    "content": "diffedit3, which requires installing diffedit3."
  }, {
    "heading": "experimental-3-pane-diff-editing",
    "content": "Meld is a graphical application that is recommended, but can be difficult to\ninstall in some situations. diffedit3 is designed to be easy to install and to\nbe usable in environments where Meld is difficult to use (e.g. over SSH via port\nforwarding). diffedit3 starts a local server that can be accessed via a web\nbrowser, similarly to Jupyter."
  }, {
    "heading": "experimental-3-pane-diff-editing",
    "content": "There is also the diffedit3-ssh which is similar to diffedit3 but does not\ntry to open the web browser pointing to the local server (the URL\nprinted to the terminal) automatically. diffedit3-ssh also always uses ports in between\n17376-17380 and fails if they are all busy. This can be useful when working\nover SSH. Open the fold below for more details of how to set that up."
  }, {
    "heading": "experimental-3-pane-diff-editing",
    "content": "To use diffedit3 over SSH, you need to set up port forwarding. One way to do\nthis is to start SSH as follows (copy-paste the relevant lines):"
  }, {
    "heading": "experimental-3-pane-diff-editing",
    "content": "diffedit3-ssh is set up to use these 5 ports by default. Usually, only the\nfirst of them will be used. The rest are used if another program happens to use\none of them, or if you run multiple instances of diffedit3 at the same time."
  }, {
    "heading": "experimental-3-pane-diff-editing",
    "content": "Another way is to add a snippet to ~/.ssh/config:"
  }, {
    "heading": "experimental-3-pane-diff-editing",
    "content": "With that configuration, you should be able to simply ssh myhost."
  }, {
    "heading": "experimental-3-pane-diff-editing",
    "content": 'Setting either ui.diff-editor = "meld-3" or ui.diff-editor = "diffedit3"\nwill result in the diff editor showing 3 panes: the diff on the left and right,\nand an editing pane in the middle. This allow you to see both sides of the\noriginal diff while editing.'
  }, {
    "heading": "experimental-3-pane-diff-editing",
    "content": 'If you use ui.diff-editor = "meld-3", note that you can still get the 2-pane\nMeld view using jj diff --tool meld. diffedit3 has a button you can use to\nswitch to a 2-pane view.'
  }, {
    "heading": "experimental-3-pane-diff-editing",
    "content": "To configure other diff editors in this way, you can include $output together\nwith $left and $right in merge-tools.TOOL.edit-args. jj will replace\n$output with the directory where the diff editor will be expected to put the\nresult of the user's edits. Initially, the contents of $output will be the\nsame as the contents of $right."
  }, {
    "heading": "jj-instructions",
    "content": "When editing a diff, jj will include a synthetic file called JJ-INSTRUCTIONS\nin the diff with instructions on how to edit the diff. Any changes you make to\nthis file will be ignored. To suppress the creation of this file, set\nui.diff-instructions = false."
  }, {
    "heading": "using-meld-as-a-diff-editor",
    "content": "Meld is a nice and polished free diff editor. It can be\nobtained as follows:"
  }, {
    "heading": "using-meld-as-a-diff-editor",
    "content": "Linux: use your favorite package manager, e.g. sudo apt install meld."
  }, {
    "heading": "using-meld-as-a-diff-editor",
    "content": "Windows: Meld can be downloaded from https://meldmerge.org/."
  }, {
    "heading": "using-meld-as-a-diff-editor",
    "content": "Mac OS: Install Homebrew and run brew install --cask meld.\nThis will install both an app in /Applications/Meld.app and the command-line\nmeld command that jj uses. You can read about more details and other\noptions but,\nas of this writing, this is by far the easiest."
  }, {
    "heading": "using-meld-as-a-diff-editor",
    "content": "jj has two diff editing configurations that use Meld: meld for a 2-pane view\nand meld-3 for a three-pane view."
  }, {
    "heading": "using-meld-as-a-diff-editor",
    "content": "There is also a meld merge tool\nthat can be useful, but does not support displaying the merge base while\nmerging."
  }, {
    "heading": "using-vim-as-a-diff-editor",
    "content": 'Using ui.diff-editor = "vimdiff" is possible but not recommended. For a better\nexperience, you can follow instructions from the Wiki to configure the\nDirDiff Vim plugin and/or the vimtabdiff Python script.'
  }, {
    "heading": "3-way-merge-tools-for-conflict-resolution",
    "content": "The ui.merge-editor key specifies the tool used for three-way merge tools\nby jj resolve. For example:"
  }, {
    "heading": "3-way-merge-tools-for-conflict-resolution",
    "content": "The following tools can be used out of the box, as long as they are installed:"
  }, {
    "heading": "3-way-merge-tools-for-conflict-resolution",
    "content": '"kdiff3"'
  }, {
    "heading": "3-way-merge-tools-for-conflict-resolution",
    "content": '"meld"'
  }, {
    "heading": "3-way-merge-tools-for-conflict-resolution",
    "content": '"mergiraf"'
  }, {
    "heading": "3-way-merge-tools-for-conflict-resolution",
    "content": '"smerge"'
  }, {
    "heading": "3-way-merge-tools-for-conflict-resolution",
    "content": '"vimdiff"'
  }, {
    "heading": "3-way-merge-tools-for-conflict-resolution",
    "content": '"vscode"'
  }, {
    "heading": "3-way-merge-tools-for-conflict-resolution",
    "content": '"vscodium"'
  }, {
    "heading": "3-way-merge-tools-for-conflict-resolution",
    "content": "Using VS Code as a merge tool works well with VS Code's Remote\nDevelopment\nfunctionality, as long as jj is called from VS Code's terminal."
  }, {
    "heading": "setting-up-a-custom-merge-tool",
    "content": "To use a different tool named TOOL, the arguments to pass to the tool MUST be\nspecified either inline or in the merge-tools.TOOL.merge-args key. As an\nexample of how to set this key and other tool configuration options, here is\nthe out-of-the-box configuration of the three default tools. (There is no need\nto copy it to your config file verbatim, but you are welcome to customize it.)"
  }, {
    "heading": "setting-up-a-custom-merge-tool",
    "content": "jj makes the following substitutions:"
  }, {
    "heading": "setting-up-a-custom-merge-tool",
    "content": "$output (REQUIRED) is replaced with the name of the file that the merge tool\nshould output. jj will read this file after the merge tool exits."
  }, {
    "heading": "setting-up-a-custom-merge-tool",
    "content": "$left and $right are replaced with the paths to two files containing the\ncontent of each side of the conflict."
  }, {
    "heading": "setting-up-a-custom-merge-tool",
    "content": "$base is replaced with the path to a file containing the contents of the\nconflicted file in the last common ancestor of the two sides of the conflict."
  }, {
    "heading": "setting-up-a-custom-merge-tool",
    "content": "$marker_length is replaced with the length of the conflict markers which\nshould be used for the file. This can be useful if the merge tool parses\nand/or generates conflict markers. Usually, jj uses conflict markers of\nlength 7, but they can be longer if necessary to make parsing unambiguous."
  }, {
    "heading": "setting-up-a-custom-merge-tool",
    "content": "Unlike diff-args or edit-args, there is no default value for merge-args.\nIf merge-args are not specified, the tool cannot be used for conflict\nresolution."
  }, {
    "heading": "editing-conflict-markers-with-a-tool-or-a-text-editor",
    "content": "By default, the merge tool starts with an empty output file. If the tool puts\nanything into the output file and exits with the 0 exit code,\njj assumes that the conflict is fully resolved, while if the tool exits with\na non-zero exit code, jj assumes that the merge should be canceled.\nThis is appropriate for most graphical merge tools."
  }, {
    "heading": "editing-conflict-markers-with-a-tool-or-a-text-editor",
    "content": `For merge tools which try to automatically resolve conflicts without user input,
this behavior may not be desired. For instance, some automatic merge tools use
an exit code of 1 to indicate that some conflicts were unable to be resolved and
that the output file should contain conflict markers. In that case, you could
set the config option merge-tools.TOOL.merge-conflict-exit-codes = [1] to tell
jj to expect conflict markers in the output file if the exit code is 1. If a
merge tool produces output using Git's "diff3" conflict style, jj should be
able to parse it correctly, so many Git merge drivers should be usable with jj
as well.`
  }, {
    "heading": "editing-conflict-markers-with-a-tool-or-a-text-editor",
    "content": "Some tools (e.g. vimdiff) can present a multi-way diff but don't resolve\nconflict themselves. When using such tools, jj\ncan help you by populating the output file with conflict markers before starting\nthe merge tool (instead of leaving the output file empty and letting the merge\ntool fill it in). To do that, set the\nmerge-tools.vimdiff.merge-tool-edits-conflict-markers = true option."
  }, {
    "heading": "editing-conflict-markers-with-a-tool-or-a-text-editor",
    "content": "With this option set, if the output file still contains conflict markers after\nthe conflict is done, jj assumes that the conflict was only partially resolved\nand parses the conflict markers to get the new state of the conflict. The\nconflict is considered fully resolved when there are no conflict markers left.\nThe conflict marker style can also be customized per tool using the\nmerge-tools.TOOL.conflict-marker-style option, which takes the same values as\nui.conflict-marker-style."
  }, {
    "heading": "code-formatting-and-other-file-content-transformations",
    "content": "The jj fix command allows you to efficiently rewrite files in complex commit\ngraphs with no risk of introducing conflicts, using tools like clang-format or\nprettier. The tools run as subprocesses that take file content on standard\ninput and repeat it, with any desired changes, on standard output. The file is\nonly rewritten if the subprocess produces a successful exit code."
  }, {
    "heading": "enforce-coding-style-rules",
    "content": "Suppose you want to use clang-format to format your *.c and *.h files,\nas well as sorting their #include directives."
  }, {
    "heading": "enforce-coding-style-rules",
    "content": "jj fix provides the file content anonymously on standard input, but the name\nof the file being formatted may be important for include sorting or other output\nlike error messages. To address this, you can use the $path substitution to\nprovide the name of the file in a command argument."
  }, {
    "heading": "sort-and-remove-duplicate-lines-from-a-file",
    "content": "jj fix can also be used with tools that are not considered code formatters."
  }, {
    "heading": "sort-and-remove-duplicate-lines-from-a-file",
    "content": "Suppose you have a list of words in a text file in your repository, and you want\nto keep the file sorted alphabetically and remove any duplicate words."
  }, {
    "heading": "tools-stored-inside-the-workspace",
    "content": "Some fix tools may be stored inside the workspace. For example, a binary may be\nstored inside node_modules. Use the $root variable to create an absolute\npath to such a program:"
  }, {
    "heading": "execution-order-of-tools",
    "content": "If two or more tools affect the same file, they are executed in the ascending\nlexicographical order of their configured names. This will remain as a tie\nbreaker if other ordering mechanisms are introduced in the future. If you use\nnumbers in tool names to control execution order, remember to include enough\nleading zeros so that, for example, 09 sorts before 10."
  }, {
    "heading": "execution-order-of-tools",
    "content": "Suppose you want to keep only the 10 smallest numbers in a text file that\ncontains one number on each line. This can be accomplished with sort and\nhead, but execution order is important."
  }, {
    "heading": "disabling-and-enabling-tools",
    "content": "Tools can be disabled and enabled with the optional enabled config. This\nallows you to define tools globally but enable them only for specific\nrepositories."
  }, {
    "heading": "disabling-and-enabling-tools",
    "content": "In the user configuration, define a disabled tool for running rustfmt:"
  }, {
    "heading": "disabling-and-enabling-tools",
    "content": "Then to use the tool in a specific repository, set the enabled config:"
  }, {
    "heading": "commit-signing",
    "content": "jj can be configured to sign and verify the commits it creates using either\nGnuPG or SSH signing keys."
  }, {
    "heading": "commit-signing",
    "content": "To do this you need to configure a signing backend."
  }, {
    "heading": "commit-signing",
    "content": 'Setting the backend to "none" disables signing.'
  }, {
    "heading": "gnupg-signing",
    "content": "By default the gpg backend will look for a gpg binary on your path. If you want\nto change the program used or specify a path to gpg explicitly you can set:"
  }, {
    "heading": "gnupg-signing",
    "content": "Also by default the gpg backend will consider key expiry when verifying commit signatures.\nTo consider expired keys as valid you can set:"
  }, {
    "heading": "pkcs12-certificates",
    "content": "PKCS#12 certificates can be used to sign commits using the gpgsm backend."
  }, {
    "heading": "pkcs12-certificates",
    "content": "By default the gpgsm backend will look for a gpgsm binary on your path. If you want\nto change the program used or specify a path to gpgsm explicitly you can set:"
  }, {
    "heading": "pkcs12-certificates",
    "content": "Also by default the gpgsm backend will consider key expiry when verifying commit signatures.\nTo consider expired keys as valid you can set:"
  }, {
    "heading": "ssh-signing",
    "content": "By default the ssh backend will look for a ssh-keygen binary on your path. If you want\nto change the program used or specify a path to ssh-keygen explicitly you can set:"
  }, {
    "heading": "ssh-signing",
    "content": "When verifying commit signatures the ssh backend needs to be provided with an allowed-signers\nfile containing the public keys of authors whose signatures you want to be able to verify."
  }, {
    "heading": "ssh-signing",
    "content": "You can find the format for this file in the\nssh-keygen man page. This can be provided\nas follows:"
  }, {
    "heading": "ssh-signing",
    "content": "Additionally, an SSH KRL or list of revoked public keys (see\nssh-keygen man page) can be provided\nwith the revocation-list option. If a public key is found in this file then any signature\nrelating to it is marked as invalid."
  }, {
    "heading": "manually-signing-commits",
    "content": "You can use jj sign/jj unsign\nto sign/unsign commits manually."
  }, {
    "heading": "manually-signing-commits",
    "content": "!!! warning"
  }, {
    "heading": "manually-signing-commits",
    "content": "jj sign always signs commits, even if they are already signed by the\nuser. While this is cumbersome for users signing via hardware devices, we\ncannot reliably check if a commit is already signed without creating a\nsignature (see this issue)."
  }, {
    "heading": "automatically-signing-commits",
    "content": "The signing.behavior configuration option has four different options for what\nto do with signing commits on modification of a change (e.g., rebasing or edits)."
  }, {
    "heading": "automatically-signing-commits",
    "content": "drop: do not automatically sign; if a change was signed before\nmodification, drop that signing after modification."
  }, {
    "heading": "automatically-signing-commits",
    "content": "keep: if a change was signed before modification, and it was authored by\nyou, attempt to sign it again after the modification."
  }, {
    "heading": "automatically-signing-commits",
    "content": "own: sign all commits that were authored by you when you modify them."
  }, {
    "heading": "automatically-signing-commits",
    "content": "force: sign all commits after modification, always, even if you are not the\nauthor."
  }, {
    "heading": "automatically-signing-commits",
    "content": "Instead of signing all commits during creation when signing.behavior is\nset to own, the git.sign-on-push configuration can be used to sign\ncommits only upon running jj git push. All mutable unsigned commits\nbeing pushed will be signed prior to pushing. This might be preferred if the\nsigning backend requires user interaction or is slow, so that signing is\nperformed in a single batch operation."
  }, {
    "heading": "commit-signature-verification",
    "content": "By default signature verification and display is disabled as it incurs a\nperformance cost when rendering medium to large change logs. You can enable it\nby setting ui.show-cryptographic-signatures to true in your configuration."
  }, {
    "heading": "commit-signature-verification",
    "content": "If you want to display commit signatures in your templates, you can use\ncommit.signature() (see Commit type). The\nreturned CryptographicSignature\nType provides methods to retrieve\nsignature details."
  }, {
    "heading": "default-colocation",
    "content": "When creating a git-backed Jujutsu repository, you can disable colocation which\nplaces the .git directory next to the .jj directory. Colocation allows some\namount of two-way interoperability, but it can perform worse in large repos."
  }, {
    "heading": "default-colocation",
    "content": "The setting git.colocate is a boolean option that controls whether or not the\njj git init and jj git clone commands should create colocated repositories\nby default. By default, git.colocate is set to true."
  }, {
    "heading": "default-colocation",
    "content": "See Colocated Jujutsu/Git repos for more information."
  }, {
    "heading": "default-remotes-for-jj-git-fetch-and-jj-git-push",
    "content": 'By default, if a single remote exists it is used for jj git fetch and jj git\npush; however if multiple remotes exist, the default remote is assumed to be\nnamed "origin", just like in Git. Sometimes this is undesirable, e.g. when you\nwant to fetch from a different remote than you push to, such as a GitHub fork.'
  }, {
    "heading": "default-remotes-for-jj-git-fetch-and-jj-git-push",
    "content": "To change this behavior, you can modify the repository\nconfiguration variable git.fetch, which can be a\nsingle remote, or a list of remotes to fetch from multiple places:"
  }, {
    "heading": "default-remotes-for-jj-git-fetch-and-jj-git-push",
    "content": "By default, the specified remote names matches exactly. You can also use a\nstring pattern to select remotes using patterns:"
  }, {
    "heading": "default-remotes-for-jj-git-fetch-and-jj-git-push",
    "content": "Similarly, you can also set the variable git.push to cause jj git push to\npush to a different remote:"
  }, {
    "heading": "default-remotes-for-jj-git-fetch-and-jj-git-push",
    "content": "Note that unlike git.fetch, git.push can currently only be a single remote.\nThis is not a hard limitation, and could be changed in the future if there is\ndemand."
  }, {
    "heading": "automatic-local-bookmark-creation",
    "content": "When jj imports a new remote-tracking bookmark from Git, it can also create a\nlocal bookmark with the same name. This feature is disabled by default because it\nmay be undesirable in some repositories, e.g.:"
  }, {
    "heading": "automatic-local-bookmark-creation",
    "content": "There is a remote with a lot of historical bookmarks that you don't\nwant to be exported to the colocated Git repo."
  }, {
    "heading": "automatic-local-bookmark-creation",
    "content": "There are multiple remotes with conflicting views of that bookmark,\nresulting in an unhelpful conflicted state."
  }, {
    "heading": "automatic-local-bookmark-creation",
    "content": "You can enable this behavior by setting git.auto-local-bookmark like so,"
  }, {
    "heading": "automatic-local-bookmark-creation",
    "content": "This setting is applied only to new remote bookmarks. Existing remote bookmarks\ncan be tracked individually by using jj bookmark track/untrack commands."
  }, {
    "heading": "automatic-local-bookmark-creation-on-jj-git-clone",
    "content": "When cloning a new Git repository, jj by default creates a local bookmark\ntracking the default remote bookmark (such as main for main@origin.) If you\naren't going to update the main bookmark locally, the tracking bookmark isn't\nnecessary."
  }, {
    "heading": "automatic-local-bookmark-creation-on-jj-git-clone",
    "content": "This behavior can be disabled by"
  }, {
    "heading": "abandon-commits-that-became-unreachable-in-git",
    "content": "By default, when jj imports refs from Git, it will look for commits that used\nto be reachable but no longer are reachable. Those commits will\nthen be abandoned, and any descendant commits will be rebased off of them (as\nusual when commits are abandoned). You can disable this behavior and instead\nleave the Git-unreachable commits in your repo by setting:"
  }, {
    "heading": "allow-pushing-new-bookmarks",
    "content": "jj git push does not push newly-created bookmarks by default.\nIf you do not want to specify --allow-new every time you have created a new\nbookmark, you may want to allow new bookmarks to be pushed by default:"
  }, {
    "heading": "generated-bookmark-names-on-push",
    "content": 'jj git push --change generates bookmark names with a prefix of "push-" by\ndefault. You can pick a different prefix and formatting by setting the\ntemplates.git_push_bookmark template. For example:'
  }, {
    "heading": "generated-bookmark-names-on-push",
    "content": "This template should include expressions like change_id to generate unique and\nstable bookmark."
  }, {
    "heading": "set-of-private-commits",
    "content": "You can configure the set of private commits by setting git.private-commits to\na revset. The value is a revset of commits that Jujutsu will refuse to push. If\nunset, all commits are eligible to be pushed."
  }, {
    "heading": "set-of-private-commits",
    "content": "If a commit is in git.private-commits but is already on the remote, then it is\nnot considered a private commit. Commits that are immutable are also excluded\nfrom the private set."
  }, {
    "heading": "set-of-private-commits",
    "content": "Private commits prevent their descendants from being pushed, since doing so\nwould require pushing the private commit as well."
  }, {
    "heading": "git-subprocessing-behavior",
    "content": "Git remote interactions are handled by spawning a git subprocess.\nIf git is not on your OS path, or you want to specify a particular binary,\nyou can:"
  }, {
    "heading": "granularity-of-hunks",
    "content": "jj by default resolves content conflicts by splitting text into line-level\nhunks and merge them. This can be configured to split hunks further into\nword-level hunks."
  }, {
    "heading": "granularity-of-hunks",
    "content": "line: split into line hunks (default)"
  }, {
    "heading": "granularity-of-hunks",
    "content": "word: split into word hunks"
  }, {
    "heading": "filesystem-monitor",
    "content": 'In large repositories, it may be beneficial to use a "filesystem monitor" to\ntrack changes to the working copy. This allows jj to take working copy\nsnapshots without having to rescan the entire working copy.'
  }, {
    "heading": "filesystem-monitor",
    "content": 'This is governed by the fsmonitor.backend option. Currently, the valid values\nare "none" or "watchman".'
  }, {
    "heading": "watchman",
    "content": 'To configure the Watchman filesystem monitor, set\nfsmonitor.backend = "watchman". Ensure that you have installed the Watchman\nexecutable on your system.'
  }, {
    "heading": "watchman",
    "content": "You can configure jj to use watchman triggers to automatically create\nsnapshots on filesystem changes by setting\nfsmonitor.watchman.register-snapshot-trigger = true."
  }, {
    "heading": "watchman",
    "content": "You can check whether Watchman is enabled and whether it is installed correctly\nusing jj debug watchman status."
  }, {
    "heading": "watchman",
    "content": "Note: watchman heavily uses inotify and sets up a user watch per-file. On\nlarge repositories, this may cause watchman to fail and commands like\njj status to take longer than expected. If you experience this run\njj debug watchman status and tune your inotify limits."
  }, {
    "heading": "paths-to-automatically-track",
    "content": "All new files in the working copy that don't match the ignore patterns are\ntracked by default. You can set the snapshot.auto-track to set which paths\nget automatically tracked when they're added to the working copy. See the\nfileset documentation for the syntax. Files with paths matching\nignore files are never tracked automatically."
  }, {
    "heading": "paths-to-automatically-track",
    "content": "If you set snapshot.auto-track to a non-default value, untracked files can be\ntracked with jj file track."
  }, {
    "heading": "paths-to-automatically-track",
    "content": "You can use jj file untrack to untrack a file while keeping it in the working\ncopy. However, first ignore them or remove them\nfrom the snapshot.auto-track patterns; otherwise they will be immediately\ntracked again."
  }, {
    "heading": "maximum-size-for-new-files",
    "content": "By default, as an anti-footgun measure, jj will refuse to add new files to the\nsnapshot that are larger than a certain size; the default is 1MiB. This can be\nchanged by setting snapshot.max-new-file-size to a different value. For\nexample:"
  }, {
    "heading": "maximum-size-for-new-files",
    "content": "The value can be specified using a human readable string with typical suffixes;\nB, MiB, GB, etc. By default, if no suffix is provided, or the value is a\nraw integer literal, the value is interpreted as if it were specified in bytes."
  }, {
    "heading": "maximum-size-for-new-files",
    "content": "Files that already exist in the working copy are not subject to this limit."
  }, {
    "heading": "maximum-size-for-new-files",
    "content": "Setting this value to zero will disable the limit entirely."
  }, {
    "heading": "eol-conversion-settings",
    "content": "This settings serves the same purpose as the core.autocrlf git\nconfig."
  }, {
    "heading": "eol-conversion-settings",
    "content": "The line endings conversion won't be applied to files detected as binary files\nvia a heuristics regardless of the settings. This is similar to git."
  }, {
    "heading": "eol-conversion-settings",
    "content": "To detect if a file is binary, Jujutsu currently checks if there is NULL\nbyte in the file which is different from the algorithm of\ngitoxide or git. Jujutsu\ndoesn't plan to align the binary detection logic with git."
  }, {
    "heading": "user-config-files",
    "content": "An easy way to find the user config file/directory is:"
  }, {
    "heading": "user-config-files",
    "content": "On all platforms, the user's global jj configurations are by default loaded in\nthe following precedence order (with later configs overriding earlier ones):"
  }, {
    "heading": "user-config-files",
    "content": "$HOME/.jjconfig.toml"
  }, {
    "heading": "user-config-files",
    "content": "<PLATFORM_SPECIFIC>/jj/config.toml (preferred)"
  }, {
    "heading": "user-config-files",
    "content": "<PLATFORM_SPECIFIC>/jj/conf.d/*.toml"
  }, {
    "heading": "user-config-files",
    "content": "where $HOME represents the user's home directory (%USERPROFILE% on Windows),\nand <PLATFORM_SPECIFIC> represents the platform-specific configuration\ndirectory shown in the table below. The platform-specific location is\nrecommended for better integration with platform services."
  }, {
    "heading": "user-config-files",
    "content": "The files in the conf.d directory are loaded in lexicographic order. This allows\nconfigs to be split across multiple files and combines well\nwith Conditional Variables."
  }, {
    "heading": "user-config-files",
    "content": "Platform"
  }, {
    "heading": "user-config-files",
    "content": "Location of <PLATFORM_SPECIFIC> dir"
  }, {
    "heading": "user-config-files",
    "content": "Example config file location"
  }, {
    "heading": "user-config-files",
    "content": "Linux and macOS"
  }, {
    "heading": "user-config-files",
    "content": "$XDG_CONFIG_HOME or $HOME/.config"
  }, {
    "heading": "user-config-files",
    "content": "/home/alice/.config/jj/config.toml"
  }, {
    "heading": "user-config-files",
    "content": "Windows"
  }, {
    "heading": "user-config-files",
    "content": "{FOLDERID_RoamingAppData}"
  }, {
    "heading": "user-config-files",
    "content": "C:\\Users\\Alice\\AppData\\Roaming\\jj\\config.toml"
  }, {
    "heading": "user-config-files",
    "content": "On macOS, jj used to put the user config in ~/Library/Application Support,\nand jj will still look there for backwards compatibility purposes; this is\nconsidered a deprecated location, and you should use the new default\nXDG_CONFIG_HOME."
  }, {
    "heading": "user-config-files",
    "content": "The location of the jj user config files/directories can also be overridden with the\nJJ_CONFIG environment variable. If it is not empty, it will be used instead\nof any configuration files in the default locations. If it is a path to a TOML\nfile, then that file will be loaded instead. If it is a path to a directory,\nthen all the TOML files in that directory will be loaded in lexicographic order\nand merged. Multiple paths can be specified by separating them with a\nplatform-specific path separator (: on Unix-like systems, ; on Windows)."
  }, {
    "heading": "user-config-files",
    "content": "For example, the following could be used to run jj without loading any user configs:"
  }, {
    "heading": "json-schema-support",
    "content": "Many popular editors support TOML file syntax highlighting and validation. To\nenable schema validation in your editor, add this line at the top of your TOML\nconfig files:"
  }, {
    "heading": "json-schema-support",
    "content": "This enables features like:"
  }, {
    "heading": "json-schema-support",
    "content": "Autocomplete for config keys"
  }, {
    "heading": "json-schema-support",
    "content": "Type checking of values"
  }, {
    "heading": "json-schema-support",
    "content": "Documentation on hover"
  }, {
    "heading": "json-schema-support",
    "content": "Validation of settings"
  }, {
    "heading": "json-schema-support",
    "content": "Here are some popular editors with TOML schema validation support:"
  }, {
    "heading": "json-schema-support",
    "content": "VS Code"
  }, {
    "heading": "json-schema-support",
    "content": "Install Even Better TOML"
  }, {
    "heading": "json-schema-support",
    "content": "Neovim/Vim"
  }, {
    "heading": "json-schema-support",
    "content": "Use with nvim-lspconfig and taplo"
  }, {
    "heading": "json-schema-support",
    "content": "Helix"
  }, {
    "heading": "json-schema-support",
    "content": "Install taplo"
  }, {
    "heading": "json-schema-support",
    "content": "JetBrains IDEs (IntelliJ, PyCharm, etc)"
  }, {
    "heading": "json-schema-support",
    "content": "Install TOML plugin"
  }, {
    "heading": "json-schema-support",
    "content": "Emacs"
  }, {
    "heading": "json-schema-support",
    "content": "Install lsp-mode and toml-mode"
  }, {
    "heading": "json-schema-support",
    "content": "Configure taplo as the LSP server"
  }, {
    "heading": "specifying-config-on-the-command-line",
    "content": "You can use one or more --config/--config-file options on the command line\nto specify additional configuration settings. This overrides settings defined in\nconfig files or environment variables. For example,"
  }, {
    "heading": "specifying-config-on-the-command-line",
    "content": "Config value should be specified as a TOML expression. If string value isn't\nenclosed by any TOML constructs (such as array notation), quotes can be omitted.\nHere is an example with more advanced TOML constructs:"
  }, {
    "heading": "specifying-config-on-the-command-line",
    "content": "To load an entire TOML document, use --config-file:"
  }, {
    "heading": "conditional-variables",
    "content": "You can conditionally enable config variables by using --when."
  }, {
    "heading": "using---scope-tables",
    "content": "Variables defined in [[--scope]] tables are expanded to the root table.\n--when specifies the condition to enable the scope table."
  }, {
    "heading": "using---scope-tables",
    "content": "If no conditions are specified, the table is always enabled. If multiple\nconditions are specified, their intersection is used."
  }, {
    "heading": "using-multiple-files",
    "content": "--when can also be used on the top level of a TOML file, which is convenient\nwhen splitting your config across multiple files.\nThe behavior of conditions are the same as when using [[--scope]] tables."
  }, {
    "heading": "available-condition-keys",
    "content": "--when.repositories: List of paths to match the repository path prefix."
  }, {
    "heading": "available-condition-keys",
    "content": "Paths should be absolute. Each path component (directory or file name, drive\nletter, etc.) is compared case-sensitively on all platforms. A path starting\nwith ~ is expanded to the home directory. On Windows, directory separator may\nbe either \\ or /. (Beware that \\ needs escape in double-quoted strings.)"
  }, {
    "heading": "available-condition-keys",
    "content": "Use jj root to see the workspace root directory. Note that the repository path\nis in the main workspace if you're using multiple workspaces with jj\nworkspace."
  }, {
    "heading": "available-condition-keys",
    "content": "--when.commands: List of subcommands to match."
  }, {
    "heading": "available-condition-keys",
    "content": "Subcommands are space-separated and matched by prefix."
  }],
  "headings": [{
    "id": "config-files-and-toml",
    "content": "Config files and TOML"
  }, {
    "id": "dotted-style-and-headings",
    "content": "Dotted style and headings"
  }, {
    "id": "user-settings",
    "content": "User settings"
  }, {
    "id": "ui-settings",
    "content": "UI settings"
  }, {
    "id": "colorizing-output",
    "content": "Colorizing output"
  }, {
    "id": "custom-colors-and-styles",
    "content": "Custom colors and styles"
  }, {
    "id": "default-command",
    "content": "Default command"
  }, {
    "id": "default-description",
    "content": "Default description"
  }, {
    "id": "duplicate-commit-description",
    "content": "Duplicate commit description"
  }, {
    "id": "bookmark-listing-order",
    "content": "Bookmark listing order"
  }, {
    "id": "commit-trailers",
    "content": "Commit trailers"
  }, {
    "id": "diff-colors-and-styles",
    "content": "Diff colors and styles"
  }, {
    "id": "diff-format",
    "content": "Diff format"
  }, {
    "id": "color-words-diff-options",
    "content": "Color-words diff options"
  }, {
    "id": "git-diff-options",
    "content": "Git diff options"
  }, {
    "id": "generating-diffs-by-external-command",
    "content": "Generating diffs by external command"
  }, {
    "id": "conflict-marker-style",
    "content": "Conflict marker style"
  }, {
    "id": "set-of-immutable-commits",
    "content": "Set of immutable commits"
  }, {
    "id": "behavior-of-prev-and-next-commands",
    "content": "Behavior of prev and next commands"
  }, {
    "id": "list",
    "content": "List"
  }, {
    "id": "default-template",
    "content": "Default Template"
  }, {
    "id": "log",
    "content": "Log"
  }, {
    "id": "default-revisions",
    "content": "Default revisions"
  }, {
    "id": "prioritize-revsets-in-the-log-over-",
    "content": "Prioritize Revsets in the Log over @"
  }, {
    "id": "default-template-1",
    "content": "Default Template"
  }, {
    "id": "graph-style",
    "content": "Graph style"
  }, {
    "id": "node-style",
    "content": "Node style"
  }, {
    "id": "wrap-log-content",
    "content": "Wrap log content"
  }, {
    "id": "display-of-commit-and-change-ids",
    "content": "Display of commit and change ids"
  }, {
    "id": "relative-timestamps",
    "content": "Relative timestamps"
  }, {
    "id": "author-format",
    "content": "Author format"
  }, {
    "id": "commit-timestamp",
    "content": "Commit timestamp"
  }, {
    "id": "signature-format",
    "content": "Signature format"
  }, {
    "id": "pager",
    "content": "Pager"
  }, {
    "id": "builtin-pager",
    "content": "Builtin pager"
  }, {
    "id": "key-bindings",
    "content": "Key bindings"
  }, {
    "id": "wrapping-config",
    "content": "Wrapping config"
  }, {
    "id": "auto-exit-clearing-the-screen-on-startup-or-exit",
    "content": "Auto-exit, clearing the screen on startup or exit"
  }, {
    "id": "showing-the-ruler-on-startup",
    "content": "Showing the ruler on startup"
  }, {
    "id": "processing-contents-to-be-paged",
    "content": "Processing contents to be paged"
  }, {
    "id": "aliases",
    "content": "Aliases"
  }, {
    "id": "editor",
    "content": "Editor"
  }, {
    "id": "editing-diffs",
    "content": "Editing diffs"
  }, {
    "id": "experimental-3-pane-diff-editing",
    "content": "Experimental 3-pane diff editing"
  }, {
    "id": "jj-instructions",
    "content": "JJ-INSTRUCTIONS"
  }, {
    "id": "using-meld-as-a-diff-editor",
    "content": "Using Meld as a diff editor"
  }, {
    "id": "using-vim-as-a-diff-editor",
    "content": "Using Vim as a diff editor"
  }, {
    "id": "3-way-merge-tools-for-conflict-resolution",
    "content": "3-way merge tools for conflict resolution"
  }, {
    "id": "setting-up-a-custom-merge-tool",
    "content": "Setting up a custom merge tool"
  }, {
    "id": "editing-conflict-markers-with-a-tool-or-a-text-editor",
    "content": "Editing conflict markers with a tool or a text editor"
  }, {
    "id": "code-formatting-and-other-file-content-transformations",
    "content": "Code formatting and other file content transformations"
  }, {
    "id": "enforce-coding-style-rules",
    "content": "Enforce coding style rules"
  }, {
    "id": "sort-and-remove-duplicate-lines-from-a-file",
    "content": "Sort and remove duplicate lines from a file"
  }, {
    "id": "tools-stored-inside-the-workspace",
    "content": "Tools stored inside the workspace"
  }, {
    "id": "execution-order-of-tools",
    "content": "Execution order of tools"
  }, {
    "id": "disabling-and-enabling-tools",
    "content": "Disabling and enabling tools"
  }, {
    "id": "commit-signing",
    "content": "Commit Signing"
  }, {
    "id": "gnupg-signing",
    "content": "GnuPG Signing"
  }, {
    "id": "pkcs12-certificates",
    "content": "PKCS#12 Certificates"
  }, {
    "id": "ssh-signing",
    "content": "SSH Signing"
  }, {
    "id": "manually-signing-commits",
    "content": "Manually signing commits"
  }, {
    "id": "automatically-signing-commits",
    "content": "Automatically signing commits"
  }, {
    "id": "commit-signature-verification",
    "content": "Commit Signature Verification"
  }, {
    "id": "git-settings",
    "content": "Git settings"
  }, {
    "id": "default-colocation",
    "content": "Default colocation"
  }, {
    "id": "default-remotes-for-jj-git-fetch-and-jj-git-push",
    "content": "Default remotes for jj git fetch and jj git push"
  }, {
    "id": "automatic-local-bookmark-creation",
    "content": "Automatic local bookmark creation"
  }, {
    "id": "automatic-local-bookmark-creation-on-jj-git-clone",
    "content": "Automatic local bookmark creation on jj git clone"
  }, {
    "id": "abandon-commits-that-became-unreachable-in-git",
    "content": "Abandon commits that became unreachable in Git"
  }, {
    "id": "allow-pushing-new-bookmarks",
    "content": "Allow pushing new bookmarks"
  }, {
    "id": "generated-bookmark-names-on-push",
    "content": "Generated bookmark names on push"
  }, {
    "id": "set-of-private-commits",
    "content": "Set of private commits"
  }, {
    "id": "git-subprocessing-behavior",
    "content": "Git subprocessing behavior"
  }, {
    "id": "merge-settings",
    "content": "Merge settings"
  }, {
    "id": "granularity-of-hunks",
    "content": "Granularity of hunks"
  }, {
    "id": "filesystem-monitor",
    "content": "Filesystem monitor"
  }, {
    "id": "watchman",
    "content": "Watchman"
  }, {
    "id": "snapshot-settings",
    "content": "Snapshot settings"
  }, {
    "id": "paths-to-automatically-track",
    "content": "Paths to automatically track"
  }, {
    "id": "maximum-size-for-new-files",
    "content": "Maximum size for new files"
  }, {
    "id": "working-copy-settings",
    "content": "Working copy settings"
  }, {
    "id": "eol-conversion-settings",
    "content": "EOL conversion settings"
  }, {
    "id": "ways-to-specify-jj-config-details",
    "content": "Ways to specify jj config: details"
  }, {
    "id": "user-config-files",
    "content": "User config files"
  }, {
    "id": "json-schema-support",
    "content": "JSON Schema Support"
  }, {
    "id": "specifying-config-on-the-command-line",
    "content": "Specifying config on the command-line"
  }, {
    "id": "conditional-variables",
    "content": "Conditional variables"
  }, {
    "id": "using---scope-tables",
    "content": "Using [[--scope]] tables"
  }, {
    "id": "using-multiple-files",
    "content": "Using multiple files"
  }, {
    "id": "available-condition-keys",
    "content": "Available condition keys"
  }]
};
const toc = [{
  depth: 2,
  url: "#config-files-and-toml",
  title: jsx(Fragment, {
    children: "Config files and TOML"
  })
}, {
  depth: 3,
  url: "#dotted-style-and-headings",
  title: jsx(Fragment, {
    children: "Dotted style and headings"
  })
}, {
  depth: 2,
  url: "#user-settings",
  title: jsx(Fragment, {
    children: "User settings"
  })
}, {
  depth: 2,
  url: "#ui-settings",
  title: jsx(Fragment, {
    children: "UI settings"
  })
}, {
  depth: 3,
  url: "#colorizing-output",
  title: jsx(Fragment, {
    children: "Colorizing output"
  })
}, {
  depth: 3,
  url: "#custom-colors-and-styles",
  title: jsx(Fragment, {
    children: "Custom colors and styles"
  })
}, {
  depth: 3,
  url: "#default-command",
  title: jsx(Fragment, {
    children: "Default command"
  })
}, {
  depth: 3,
  url: "#default-description",
  title: jsx(Fragment, {
    children: "Default description"
  })
}, {
  depth: 3,
  url: "#duplicate-commit-description",
  title: jsx(Fragment, {
    children: "Duplicate commit description"
  })
}, {
  depth: 3,
  url: "#bookmark-listing-order",
  title: jsx(Fragment, {
    children: "Bookmark listing order"
  })
}, {
  depth: 3,
  url: "#commit-trailers",
  title: jsx(Fragment, {
    children: "Commit trailers"
  })
}, {
  depth: 3,
  url: "#diff-colors-and-styles",
  title: jsx(Fragment, {
    children: "Diff colors and styles"
  })
}, {
  depth: 3,
  url: "#diff-format",
  title: jsx(Fragment, {
    children: "Diff format"
  })
}, {
  depth: 4,
  url: "#color-words-diff-options",
  title: jsx(Fragment, {
    children: "Color-words diff options"
  })
}, {
  depth: 4,
  url: "#git-diff-options",
  title: jsx(Fragment, {
    children: "Git diff options"
  })
}, {
  depth: 3,
  url: "#generating-diffs-by-external-command",
  title: jsx(Fragment, {
    children: "Generating diffs by external command"
  })
}, {
  depth: 3,
  url: "#conflict-marker-style",
  title: jsx(Fragment, {
    children: "Conflict marker style"
  })
}, {
  depth: 3,
  url: "#set-of-immutable-commits",
  title: jsx(Fragment, {
    children: "Set of immutable commits"
  })
}, {
  depth: 3,
  url: "#behavior-of-prev-and-next-commands",
  title: jsx(Fragment, {
    children: "Behavior of prev and next commands"
  })
}, {
  depth: 2,
  url: "#list",
  title: jsx(Fragment, {
    children: "List"
  })
}, {
  depth: 3,
  url: "#default-template",
  title: jsx(Fragment, {
    children: "Default Template"
  })
}, {
  depth: 2,
  url: "#log",
  title: jsx(Fragment, {
    children: "Log"
  })
}, {
  depth: 3,
  url: "#default-revisions",
  title: jsx(Fragment, {
    children: "Default revisions"
  })
}, {
  depth: 3,
  url: "#prioritize-revsets-in-the-log-over-",
  title: jsx(Fragment, {
    children: "Prioritize Revsets in the Log over @"
  })
}, {
  depth: 3,
  url: "#default-template-1",
  title: jsx(Fragment, {
    children: "Default Template"
  })
}, {
  depth: 3,
  url: "#graph-style",
  title: jsx(Fragment, {
    children: "Graph style"
  })
}, {
  depth: 4,
  url: "#node-style",
  title: jsx(Fragment, {
    children: "Node style"
  })
}, {
  depth: 3,
  url: "#wrap-log-content",
  title: jsx(Fragment, {
    children: "Wrap log content"
  })
}, {
  depth: 3,
  url: "#display-of-commit-and-change-ids",
  title: jsx(Fragment, {
    children: "Display of commit and change ids"
  })
}, {
  depth: 3,
  url: "#relative-timestamps",
  title: jsx(Fragment, {
    children: "Relative timestamps"
  })
}, {
  depth: 3,
  url: "#author-format",
  title: jsx(Fragment, {
    children: "Author format"
  })
}, {
  depth: 3,
  url: "#commit-timestamp",
  title: jsx(Fragment, {
    children: "Commit timestamp"
  })
}, {
  depth: 3,
  url: "#signature-format",
  title: jsx(Fragment, {
    children: "Signature format"
  })
}, {
  depth: 2,
  url: "#pager",
  title: jsx(Fragment, {
    children: "Pager"
  })
}, {
  depth: 3,
  url: "#builtin-pager",
  title: jsx(Fragment, {
    children: "Builtin pager"
  })
}, {
  depth: 4,
  url: "#key-bindings",
  title: jsx(Fragment, {
    children: "Key bindings"
  })
}, {
  depth: 4,
  url: "#wrapping-config",
  title: jsx(Fragment, {
    children: "Wrapping config"
  })
}, {
  depth: 4,
  url: "#auto-exit-clearing-the-screen-on-startup-or-exit",
  title: jsx(Fragment, {
    children: "Auto-exit, clearing the screen on startup or exit"
  })
}, {
  depth: 4,
  url: "#showing-the-ruler-on-startup",
  title: jsx(Fragment, {
    children: "Showing the ruler on startup"
  })
}, {
  depth: 3,
  url: "#processing-contents-to-be-paged",
  title: jsx(Fragment, {
    children: "Processing contents to be paged"
  })
}, {
  depth: 2,
  url: "#aliases",
  title: jsx(Fragment, {
    children: "Aliases"
  })
}, {
  depth: 2,
  url: "#editor",
  title: jsx(Fragment, {
    children: "Editor"
  })
}, {
  depth: 2,
  url: "#editing-diffs",
  title: jsx(Fragment, {
    children: "Editing diffs"
  })
}, {
  depth: 3,
  url: "#experimental-3-pane-diff-editing",
  title: jsx(Fragment, {
    children: "Experimental 3-pane diff editing"
  })
}, {
  depth: 3,
  url: "#jj-instructions",
  title: jsx(Fragment, {
    children: jsx("code", {
      children: "JJ-INSTRUCTIONS"
    })
  })
}, {
  depth: 3,
  url: "#using-meld-as-a-diff-editor",
  title: jsx(Fragment, {
    children: "Using Meld as a diff editor"
  })
}, {
  depth: 3,
  url: "#using-vim-as-a-diff-editor",
  title: jsx(Fragment, {
    children: "Using Vim as a diff editor"
  })
}, {
  depth: 2,
  url: "#3-way-merge-tools-for-conflict-resolution",
  title: jsx(Fragment, {
    children: "3-way merge tools for conflict resolution"
  })
}, {
  depth: 3,
  url: "#setting-up-a-custom-merge-tool",
  title: jsx(Fragment, {
    children: "Setting up a custom merge tool"
  })
}, {
  depth: 3,
  url: "#editing-conflict-markers-with-a-tool-or-a-text-editor",
  title: jsx(Fragment, {
    children: "Editing conflict markers with a tool or a text editor"
  })
}, {
  depth: 2,
  url: "#code-formatting-and-other-file-content-transformations",
  title: jsx(Fragment, {
    children: "Code formatting and other file content transformations"
  })
}, {
  depth: 3,
  url: "#enforce-coding-style-rules",
  title: jsx(Fragment, {
    children: "Enforce coding style rules"
  })
}, {
  depth: 3,
  url: "#sort-and-remove-duplicate-lines-from-a-file",
  title: jsx(Fragment, {
    children: "Sort and remove duplicate lines from a file"
  })
}, {
  depth: 3,
  url: "#tools-stored-inside-the-workspace",
  title: jsx(Fragment, {
    children: "Tools stored inside the workspace"
  })
}, {
  depth: 3,
  url: "#execution-order-of-tools",
  title: jsx(Fragment, {
    children: "Execution order of tools"
  })
}, {
  depth: 3,
  url: "#disabling-and-enabling-tools",
  title: jsx(Fragment, {
    children: "Disabling and enabling tools"
  })
}, {
  depth: 2,
  url: "#commit-signing",
  title: jsx(Fragment, {
    children: "Commit Signing"
  })
}, {
  depth: 3,
  url: "#gnupg-signing",
  title: jsx(Fragment, {
    children: "GnuPG Signing"
  })
}, {
  depth: 4,
  url: "#pkcs12-certificates",
  title: jsx(Fragment, {
    children: "PKCS#12 Certificates"
  })
}, {
  depth: 3,
  url: "#ssh-signing",
  title: jsx(Fragment, {
    children: "SSH Signing"
  })
}, {
  depth: 3,
  url: "#manually-signing-commits",
  title: jsx(Fragment, {
    children: "Manually signing commits"
  })
}, {
  depth: 3,
  url: "#automatically-signing-commits",
  title: jsx(Fragment, {
    children: "Automatically signing commits"
  })
}, {
  depth: 2,
  url: "#commit-signature-verification",
  title: jsx(Fragment, {
    children: "Commit Signature Verification"
  })
}, {
  depth: 2,
  url: "#git-settings",
  title: jsx(Fragment, {
    children: "Git settings"
  })
}, {
  depth: 3,
  url: "#default-colocation",
  title: jsx(Fragment, {
    children: "Default colocation"
  })
}, {
  depth: 3,
  url: "#default-remotes-for-jj-git-fetch-and-jj-git-push",
  title: jsxs(Fragment, {
    children: ["Default remotes for ", jsx("code", {
      children: "jj git fetch"
    }), " and ", jsx("code", {
      children: "jj git push"
    })]
  })
}, {
  depth: 3,
  url: "#automatic-local-bookmark-creation",
  title: jsx(Fragment, {
    children: "Automatic local bookmark creation"
  })
}, {
  depth: 3,
  url: "#automatic-local-bookmark-creation-on-jj-git-clone",
  title: jsxs(Fragment, {
    children: ["Automatic local bookmark creation on ", jsx("code", {
      children: "jj git clone"
    })]
  })
}, {
  depth: 3,
  url: "#abandon-commits-that-became-unreachable-in-git",
  title: jsx(Fragment, {
    children: "Abandon commits that became unreachable in Git"
  })
}, {
  depth: 3,
  url: "#allow-pushing-new-bookmarks",
  title: jsx(Fragment, {
    children: "Allow pushing new bookmarks"
  })
}, {
  depth: 3,
  url: "#generated-bookmark-names-on-push",
  title: jsx(Fragment, {
    children: "Generated bookmark names on push"
  })
}, {
  depth: 3,
  url: "#set-of-private-commits",
  title: jsx(Fragment, {
    children: "Set of private commits"
  })
}, {
  depth: 3,
  url: "#git-subprocessing-behavior",
  title: jsx(Fragment, {
    children: "Git subprocessing behavior"
  })
}, {
  depth: 2,
  url: "#merge-settings",
  title: jsx(Fragment, {
    children: "Merge settings"
  })
}, {
  depth: 3,
  url: "#granularity-of-hunks",
  title: jsx(Fragment, {
    children: "Granularity of hunks"
  })
}, {
  depth: 2,
  url: "#filesystem-monitor",
  title: jsx(Fragment, {
    children: "Filesystem monitor"
  })
}, {
  depth: 3,
  url: "#watchman",
  title: jsx(Fragment, {
    children: "Watchman"
  })
}, {
  depth: 2,
  url: "#snapshot-settings",
  title: jsx(Fragment, {
    children: "Snapshot settings"
  })
}, {
  depth: 3,
  url: "#paths-to-automatically-track",
  title: jsx(Fragment, {
    children: "Paths to automatically track"
  })
}, {
  depth: 3,
  url: "#maximum-size-for-new-files",
  title: jsx(Fragment, {
    children: "Maximum size for new files"
  })
}, {
  depth: 2,
  url: "#working-copy-settings",
  title: jsx(Fragment, {
    children: "Working copy settings"
  })
}, {
  depth: 3,
  url: "#eol-conversion-settings",
  title: jsx(Fragment, {
    children: "EOL conversion settings"
  })
}, {
  depth: 2,
  url: "#ways-to-specify-jj-config-details",
  title: jsxs(Fragment, {
    children: ["Ways to specify ", jsx("code", {
      children: "jj"
    }), " config: details"]
  })
}, {
  depth: 3,
  url: "#user-config-files",
  title: jsx(Fragment, {
    children: "User config files"
  })
}, {
  depth: 3,
  url: "#json-schema-support",
  title: jsx(Fragment, {
    children: "JSON Schema Support"
  })
}, {
  depth: 3,
  url: "#specifying-config-on-the-command-line",
  title: jsx(Fragment, {
    children: "Specifying config on the command-line"
  })
}, {
  depth: 3,
  url: "#conditional-variables",
  title: jsx(Fragment, {
    children: "Conditional variables"
  })
}, {
  depth: 4,
  url: "#using---scope-tables",
  title: jsxs(Fragment, {
    children: ["Using ", jsx("code", {
      children: "[[--scope]]"
    }), " tables"]
  })
}, {
  depth: 4,
  url: "#using-multiple-files",
  title: jsx(Fragment, {
    children: "Using multiple files"
  })
}, {
  depth: 4,
  url: "#available-condition-keys",
  title: jsx(Fragment, {
    children: "Available condition keys"
  })
}, {
  depth: 2,
  url: "#footnote-label",
  title: jsx(Fragment, {
    children: "Footnotes"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    strong: "strong",
    sup: "sup",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: "These are the config settings available to jj/Jujutsu."
    }), "\n", jsx(_components.h2, {
      id: "config-files-and-toml",
      children: "Config files and TOML"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj"
      }), " loads several types of config settings:"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["The built-in settings. These cannot be edited. They can be viewed in the\n", jsx(_components.code, {
            children: "cli/src/config/"
          }), " directory in ", jsx(_components.code, {
            children: "jj"
          }), "'s source repo."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["The user settings. These can be edited with ", jsx(_components.code, {
            children: "jj config edit --user"
          }), ". User\nsettings are located in ", jsx(_components.a, {
            href: "#user-config-files",
            children: "the user config files"
          }), ", which can be found with ", jsx(_components.code, {
            children: "jj config path --user"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["The repo settings. These can be edited with ", jsx(_components.code, {
            children: "jj config edit --repo"
          }), " and are\nlocated in ", jsx(_components.code, {
            children: ".jj/repo/config.toml"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["Settings ", jsx(_components.a, {
            href: "#specifying-config-on-the-command-line",
            children: "specified in the command-line"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "These are listed in the order they are loaded; the settings from earlier items\nin the list are overridden by the settings from later items if they disagree.\nEvery type of config except for the built-in settings is optional."
    }), "\n", jsxs(_components.p, {
      children: ["You can enable JSON Schema validation in your editor by adding a ", jsx(_components.code, {
        children: "#:schema"
      }), "\nreference at the top of your TOML config files. See ", jsx(_components.a, {
        href: "#json-schema-support",
        children: "JSON Schema\nSupport"
      }), " for details."]
    }), "\n", jsxs(_components.p, {
      children: ["See the ", jsx(_components.a, {
        href: "https://toml.io/en/",
        children: "TOML site"
      }), " and the ", jsx(_components.a, {
        href: "https://toml.io/en/v1.0.0",
        children: "syntax guide"
      }), " for a detailed description of the\nsyntax. We cover some of the basics below."]
    }), "\n", jsxs(_components.p, {
      children: ["The first thing to remember is that the value of a setting (the part to the\nright of the ", jsx(_components.code, {
        children: "="
      }), " sign) should be surrounded in quotes if it's a string."]
    }), "\n", jsx(_components.h3, {
      id: "dotted-style-and-headings",
      children: "Dotted style and headings"
    }), "\n", jsxs(_components.p, {
      children: ["In TOML, anything under a heading can be dotted instead. For example,\n", jsx(_components.code, {
        children: 'user.name = "YOUR NAME"'
      }), " is equivalent to:"]
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
              children: "user"
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
              children: "name = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"YOUR NAME"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "For future reference, here are a couple of more complicated examples,"
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
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Dotted style"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: 'template-aliases."format_short_id(id)" = '
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"id.shortest(12)"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: 'colors."commit_id prefix".bold = '
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# is equivalent to:"
            })
          }), "\n", jsxs(_components.span, {
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
              children: '"format_short_id(id)" = '
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"id.shortest(12)"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
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
              children: "colors"
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
              children: '"commit_id prefix" = { bold = '
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["The docs below refer to keys in text using dotted notation, but example\nblocks will use heading notation to be unambiguous. If you are confident with TOML\nthen use whichever suits you in your config. If you mix dotted keys and headings,\n", jsx(_components.strong, {
        children: "you must put the dotted keys before the first heading"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["That's probably enough TOML to keep you out of trouble but the ", jsx(_components.a, {
        href: "https://toml.io/en/v1.0.0",
        children: "syntax guide"
      }), " is\nvery short if you ever need to check."]
    }), "\n", jsx(_components.h2, {
      id: "user-settings",
      children: "User settings"
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
              children: "user"
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
              children: "name = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"YOUR NAME"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "email = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"YOUR_EMAIL@example.com"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Don't forget to change these to your own details!"
    }), "\n", jsx(_components.h2, {
      id: "ui-settings",
      children: "UI settings"
    }), "\n", jsx(_components.h3, {
      id: "colorizing-output",
      children: "Colorizing output"
    }), "\n", jsxs(_components.p, {
      children: ["Possible values are ", jsx(_components.code, {
        children: "always"
      }), ", ", jsx(_components.code, {
        children: "never"
      }), ", ", jsx(_components.code, {
        children: "debug"
      }), " and ", jsx(_components.code, {
        children: "auto"
      }), " (default: ", jsx(_components.code, {
        children: "auto"
      }), ").\n", jsx(_components.code, {
        children: "auto"
      }), " will use color only when writing to a terminal. ", jsx(_components.code, {
        children: "debug"
      }), " will print the\nactive labels alongside the regular colorized output."]
    }), "\n", jsxs(_components.p, {
      children: ["This setting overrides the ", jsx(_components.code, {
        children: "NO_COLOR"
      }), " environment variable (if set)."]
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
              children: "ui"
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
              children: "color = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"never"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # Turn off color"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "custom-colors-and-styles",
      children: "Custom colors and styles"
    }), "\n", jsx(_components.p, {
      children: "You can customize the colors used for various elements of the UI. For example:"
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
              children: "colors"
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
              children: "commit_id = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"green"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "The following colors are available:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "black"
      }), "\n", jsx(_components.li, {
        children: "red"
      }), "\n", jsx(_components.li, {
        children: "green"
      }), "\n", jsx(_components.li, {
        children: "yellow"
      }), "\n", jsx(_components.li, {
        children: "blue"
      }), "\n", jsx(_components.li, {
        children: "magenta"
      }), "\n", jsx(_components.li, {
        children: "cyan"
      }), "\n", jsx(_components.li, {
        children: "white"
      }), "\n", jsx(_components.li, {
        children: "default"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: 'All of them but "default" come in a bright version too, e.g. "bright red". The\n"default" color can be used to override a color defined by a parent style\n(explained below).'
    }), "\n", jsx(_components.p, {
      children: "You can also use a 6-digit hex code for more control over the exact color used:"
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
              children: "colors"
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
              children: "change_id = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"#ff1525"'
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj"
      }), " also supports colors from the ", jsx(_components.a, {
        href: "https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit",
        children: "ANSI 256-color palette"
      }), " as ", jsx(_components.code, {
        children: "ansi-color-<N>"
      }), ",\nwhere ", jsx(_components.code, {
        children: "<N>"
      }), " is a number between 0 and 255:"]
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
              children: "colors"
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
              children: "commit_id = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"ansi-color-81"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "If you use a string value for a color, as in the examples above, it will be used\nfor the foreground color. You can also set the background color, reverse colors\n(swap foreground and background), or make the text bold, italic, or underlined.\nFor that, you need to use a table:"
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
              children: "colors"
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
              children: "commit_id = { fg = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"green"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", bg = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"#ff1525"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", bold = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", underline = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "change_id = { reverse = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", italic = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ['The key names are called "labels". The above used ', jsx(_components.code, {
        children: "commit_id"
      }), " as label. You can\nalso create rules combining multiple labels. The rules work a bit like CSS\nselectors. For example, if you want to color commit IDs green in general but\nmake the commit ID of the working-copy commit also be underlined, you can do\nthis:"]
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
              children: "colors"
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
              children: "commit_id = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"green"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '"working_copy commit_id" = { underline = '
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Parts of the style that are not overridden - such as the foreground color in the\nexample above - are inherited from the style of the parent label."
    }), "\n", jsxs(_components.p, {
      children: ["Which elements can be colored is not yet documented, but see\nthe ", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/blob/main/cli/src/config/colors.toml",
        children: "default color configuration"
      }), "\nfor some examples of what's possible."]
    }), "\n", jsx(_components.h3, {
      id: "default-command",
      children: "Default command"
    }), "\n", jsxs(_components.p, {
      children: ["When ", jsx(_components.code, {
        children: "jj"
      }), " is run with no explicit subcommand, the value of the\n", jsx(_components.code, {
        children: "ui.default-command"
      }), " setting will be used instead. Possible values are any valid\nsubcommand name, subcommand alias, or user-defined alias (defaults to ", jsx(_components.code, {
        children: '"log"'
      }), ")."]
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
              children: "ui"
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
              children: "default-command = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"log"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"--reversed"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "default-description",
      children: "Default description"
    }), "\n", jsxs(_components.p, {
      children: ["The editor content of a commit description can be populated by the\n", jsx(_components.code, {
        children: "draft_commit_description"
      }), " template. ", jsx(_components.code, {
        children: "self"
      }), " is a ", jsxs(_components.a, {
        href: "templates#commit-type",
        children: [jsx(_components.code, {
          children: "Commit"
        }), "\nobject"]
      }), "."]
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
              children: "templates"
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
              children: "draft_commit_description = "
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
              children: '  coalesce(description, default_commit_description, "\\n"),'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  surround("
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "\\nJJ: This commit contains the following changes:\\n", "",'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    indent("JJ:     ", diff.stat(72)),'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  ),"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "\\nJJ: ignore-rest\\n",'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  diff.git(),"
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
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["You can override only the ", jsx(_components.code, {
        children: "default_commit_description"
      }), " value if you like, e.g.:"]
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
              children: "default_commit_description = "
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
              children: '"'
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "Closes #NNNN"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"'
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
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "duplicate-commit-description",
      children: "Duplicate commit description"
    }), "\n", jsxs(_components.p, {
      children: ["By default, ", jsx(_components.code, {
        children: "jj duplicate"
      }), " copies the descriptions from the original commits.\nYou can customize this behavior by specifying the ", jsx(_components.code, {
        children: "duplicate_description"
      }), "\ntemplate, which is given a ", jsxs(_components.a, {
        href: "templates#commit-type",
        children: [jsx(_components.code, {
          children: "Commit"
        }), " object"]
      }), " of the\noriginal commit."]
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
              children: "templates"
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
              children: "duplicate_description = "
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
              children: "  description,"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "\\n(cherry picked from commit ",'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  commit_id,"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  ")"'
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
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "bookmark-listing-order",
      children: "Bookmark listing order"
    }), "\n", jsxs(_components.p, {
      children: ["By default, ", jsx(_components.code, {
        children: "jj bookmark list"
      }), " displays bookmarks sorted alphabetically by name.\nYou can customize this sorting behavior by specifying sort keys in your config\nfile:"]
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
              children: "ui"
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
              children: "bookmark-list-sort-keys = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"name"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["The configuration works identically to using the ", jsx(_components.code, {
        children: "--sort"
      }), " option for\n", jsx(_components.code, {
        children: "jj bookmark list"
      }), ". The following sort keys are supported: ", jsx(_components.code, {
        children: "name"
      }), ", ", jsx(_components.code, {
        children: "author-name"
      }), ",\n", jsx(_components.code, {
        children: "author-email"
      }), ", ", jsx(_components.code, {
        children: "author-date"
      }), ", ", jsx(_components.code, {
        children: "committer-name"
      }), ", ", jsx(_components.code, {
        children: "committer-email"
      }), ",\n", jsx(_components.code, {
        children: "committer-date"
      }), ". Suffix the key with ", jsx(_components.code, {
        children: "-"
      }), " to sort in descending order. Multiple\nkeys can be supplied here, the first key is the most significant."]
    }), "\n", jsxs(_components.p, {
      children: ["When the ", jsx(_components.code, {
        children: "--sort"
      }), " option is used with ", jsx(_components.code, {
        children: "jj bookmark list"
      }), ", the configuration\nis ignored."]
    }), "\n", jsx(_components.h3, {
      id: "commit-trailers",
      children: "Commit trailers"
    }), "\n", jsxs(_components.p, {
      children: ["You can configure automatic addition of one or more trailers to commit\ndescriptions using the ", jsx(_components.code, {
        children: "commit_trailers"
      }), " template."]
    }), "\n", jsxs(_components.p, {
      children: ["Each line of the template is an individual trailer, usually in ", jsx(_components.code, {
        children: "Key: Value"
      }), "\nformat."]
    }), "\n", jsxs(_components.p, {
      children: ["Trailers defined in this template are deduplicated with the existing\ndescription: if the entire line of a trailer is already present, it will not be\nadded again. To deduplicate based only on the trailer key, use the\n", jsx(_components.code, {
        children: "trailers.contains_key(key)"
      }), " method within the template."]
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
              children: "templates"
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
              children: "commit_trailers = "
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
              children: "format_signed_off_by_trailer(self)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: `++ if(!trailers.contains_key("Change-Id"), format_gerrit_change_id_trailer(self))'''`
            })
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Some ready-to-use trailer templates are available for frequently used trailers:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "format_signed_off_by_trailer(commit)"
        }), ' creates a "Signed-off-by" trailer\nusing the committer info.']
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "format_gerrit_change_id_trailer(commit)"
        }), ` creates a "Change-Id" trailer
suitable to be used with Gerrit. It is based Jujutsu's change id.`]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["Existing trailers are also accessible via ", jsx(_components.code, {
        children: "commit.trailers()"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "diff-colors-and-styles",
      children: "Diff colors and styles"
    }), "\n", jsx(_components.p, {
      children: "In color-words and git diffs, word-level hunks are rendered with underline. You\ncan override the default style with the following keys:"
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
              children: "colors"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Highlight hunks with background"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '"diff removed token" = { bg = '
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"#221111"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", underline = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "false"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '"diff added token" = { bg = '
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"#002200"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", underline = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "false"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Alternatively, swap colors"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '"diff token" = { reverse = '
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", underline = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "false"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " }"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "diff-format",
      children: "Diff format"
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
              children: "ui"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# Builtin formats: ":color-words" (default), ":git",'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '#                  ":summary", ":stat", ":types", ":name-only"'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# or external command name and arguments (see below)"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "diff-formatter = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '":git"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h4, {
      id: "color-words-diff-options",
      children: "Color-words diff options"
    }), "\n", jsx(_components.p, {
      children: "In color-words diffs, changed words are displayed inline by default. Because\nit's difficult to read a diff line with many removed/added words, there's a\nthreshold to switch to traditional separate-line format. You can also change\nthe default number of lines of context shown."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "max-inline-alternation"
          }), ": Maximum number of removed/added word alternation to\ninline. For example, ", jsx(_components.code, {
            children: "<added> ... <added>"
          }), " sequence has 1 alternation, so the\nline will be inline if ", jsx(_components.code, {
            children: "max-inline-alternation >= 1"
          }), ". ", jsx(_components.code, {
            children: "<added> ... <removed> ... <added>"
          }), " sequence has 3 alternation."]
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: [jsx(_components.code, {
              children: "0"
            }), ": disable inlining, making ", jsx(_components.code, {
              children: "--color-words"
            }), " more similar to ", jsx(_components.code, {
              children: "--git"
            })]
          }), "\n", jsxs(_components.li, {
            children: [jsx(_components.code, {
              children: "1"
            }), ": inline removes-only or adds-only lines"]
          }), "\n", jsxs(_components.li, {
            children: [jsx(_components.code, {
              children: "2"
            }), ", ", jsx(_components.code, {
              children: "3"
            }), ", ..: inline up to ", jsx(_components.code, {
              children: "2"
            }), ", ", jsx(_components.code, {
              children: "3"
            }), ", .. alternation"]
          }), "\n", jsxs(_components.li, {
            children: [jsx(_components.code, {
              children: "-1"
            }), ": inline all lines"]
          }), "\n"]
        }), "\n", jsxs(_components.p, {
          children: ["The default is ", jsx(_components.code, {
            children: "3"
          }), "."]
        }), "\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "This parameter is experimental."
          }), " The definition is subject to change."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "conflict"
          }), ": How conflicts are processed and displayed."]
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: [jsx(_components.code, {
              children: '"materialize"'
            }), ": compare materialized contents (default)"]
          }), "\n", jsxs(_components.li, {
            children: [jsx(_components.code, {
              children: '"pair"'
            }), ": compare individual pairs"]
          }), "\n"]
        }), "\n", jsx(_components.p, {
          children: jsx(_components.strong, {
            children: "This parameter is experimental."
          })
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "context"
          }), ": Number of lines of context to show in the diff. The default is ", jsx(_components.code, {
            children: "3"
          }), "."]
        }), "\n"]
      }), "\n"]
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
              children: "diff"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "color-words"
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
              children: "max-inline-alternation = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "3"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "context = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "3"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h4, {
      id: "git-diff-options",
      children: "Git diff options"
    }), "\n", jsx(_components.p, {
      children: "In git diffs you can change the default number of lines of context shown."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "context"
        }), ": Number of lines of context to show in the diff. The default is ", jsx(_components.code, {
          children: "3"
        }), "."]
      }), "\n"]
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
              children: "diff"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "git"
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
              children: "context = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "3"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "generating-diffs-by-external-command",
      children: "Generating diffs by external command"
    }), "\n", jsxs(_components.p, {
      children: ["If ", jsx(_components.code, {
        children: "ui.diff-formatter"
      }), " is not a builtin format, the specified diff command will\nbe called."]
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
              children: "ui"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Use Difftastic by default"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "diff-formatter = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"difft"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"--color=always"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$left"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$right"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# Use tool named "<name>" (see below)'
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "diff-formatter = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"<name>"'
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["The external diff tool can also be enabled by ", jsx(_components.code, {
        children: "diff --tool <name>"
      }), " argument.\nFor the tool named ", jsx(_components.code, {
        children: "<name>"
      }), ", command arguments can be configured as follows."]
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
              children: "merge-tools"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "<name>"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# program = "<name>"  # Defaults to the name of the tool if not specified'
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "diff-args = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"--color=always"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$left"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$right"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "$left"
          }), " and ", jsx(_components.code, {
            children: "$right"
          }), " are replaced with the paths to the left and right\ndirectories to diff respectively."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["If ", jsx(_components.code, {
            children: "diff-args"
          }), " is not specified, ", jsx(_components.code, {
            children: '["$left", "$right"]'
          }), " will be used by default."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["If ", jsx(_components.code, {
            children: "diff-args = []"
          }), ", ", jsx(_components.code, {
            children: "jj"
          }), " will refuse to use this tool for diff formatting.\nThis is a way to explicitly state that a certain tool (e.g. ", jsx(_components.code, {
            children: "mergiraf"
          }), ") does\nnot work for viewing diffs."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["By default ", jsx(_components.code, {
        children: "jj"
      }), " will invoke external tools with a directory containing the left\nand right sides. The ", jsx(_components.code, {
        children: "diff-invocation-mode"
      }), " config can change this to file by file\ninvocations as follows:"]
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
              children: "ui"
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
              children: "diff-formatter = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"vimdiff"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
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
              children: "merge-tools"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "vimdiff"
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
              children: "diff-invocation-mode = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"file-by-file"'
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["By default ", jsx(_components.code, {
        children: "jj"
      }), " will display a warning when the command exits with a non-success\nerror code. The ", jsx(_components.code, {
        children: "diff-expected-exit-codes"
      }), " config can suppress this warning\nmessage for specific exit codes:"]
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
              children: "merge-tools"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "delta"
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
              children: "diff-expected-exit-codes = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "0"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "conflict-marker-style",
      children: "Conflict marker style"
    }), "\n", jsx(_components.p, {
      children: "You can configure which style of conflict markers to use when materializing\nconflicts:"
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
              children: "ui"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Shows a single snapshot and one or more diffs to apply to it"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "conflict-marker-style = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"diff"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Shows a snapshot for each side and base of the conflict"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "conflict-marker-style = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"snapshot"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: `# Uses Git's "diff3" conflict markers to support tools that depend on it`
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "conflict-marker-style = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"git"'
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["For more details about these conflict marker styles, see the ", jsx(_components.a, {
        href: "conflicts#conflict-markers",
        children: "conflicts\npage"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "set-of-immutable-commits",
      children: "Set of immutable commits"
    }), "\n", jsxs(_components.p, {
      children: ["You can configure the set of immutable commits via\n", jsx(_components.code, {
        children: 'revset-aliases."immutable_heads()"'
      }), ". The default set of immutable heads is\n", jsx(_components.code, {
        children: "builtin_immutable_heads()"
      }), ", which in turn is defined as\n", jsx(_components.code, {
        children: "present(trunk()) | tags() | untracked_remote_bookmarks()"
      }), ". For example, to\nalso consider the ", jsx(_components.code, {
        children: "release@origin"
      }), " bookmark immutable:"]
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
              children: '"immutable_heads()" = '
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"builtin_immutable_heads() | release@origin"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "To prevent rewriting commits authored by other users:"
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
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# The `trunk().. &` bit is an optimization to scan for non-`mine()` commits"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# only among commits that are not in `trunk()`."
            })
          }), "\n", jsxs(_components.span, {
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
              children: '"immutable_heads()" = '
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"builtin_immutable_heads() | (trunk().. & ~mine())"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Ancestors of the configured set are also immutable. The root commit is always\nimmutable even if the set is empty."
    }), "\n", jsxs(_components.p, {
      children: ["Immutable commits (other than the root commit) can be rewritten using the\n", jsx(_components.code, {
        children: "--ignore-immutable"
      }), " CLI flag."]
    }), "\n", jsx(_components.p, {
      children: "!!! warning"
    }), "\n", jsxs(_components.p, {
      children: ["Using ", jsx(_components.code, {
        children: "--ignore-immutable"
      }), " will allow you to rewrite any commit in the\nhistory, and all descendants, without warning. Use this power wisely, and\nremember ", jsx(_components.code, {
        children: "jj undo"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "behavior-of-prev-and-next-commands",
      children: "Behavior of prev and next commands"
    }), "\n", jsxs(_components.p, {
      children: ['If you prefer using an "edit-based" workflow, rather than squashing\nmodifications into parent changes, you may find yourself using the ', jsx(_components.code, {
        children: "prev"
      }), " and\n", jsx(_components.code, {
        children: "next"
      }), " commands with their ", jsx(_components.code, {
        children: "--edit"
      }), " flag often to move between your changes. You\ncan avoid having to type the ", jsx(_components.code, {
        children: "--edit"
      }), " flag every time you need it by actually\nmaking it the default:"]
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
              children: "ui"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "movement"
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
              children: "edit = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["You can pass the ", jsx(_components.code, {
        children: "--no-edit"
      }), " flag to ", jsx(_components.code, {
        children: "prev"
      }), " and ", jsx(_components.code, {
        children: "next"
      }), " if you find yourself\nneeding the original behavior."]
    }), "\n", jsx(_components.h2, {
      id: "list",
      children: "List"
    }), "\n", jsx(_components.h3, {
      id: "default-template",
      children: "Default Template"
    }), "\n", jsxs(_components.p, {
      children: ["You can configure the template used when no ", jsx(_components.code, {
        children: "-T"
      }), " is specified."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "templates.config_list"
        }), " for ", jsx(_components.code, {
          children: "jj config list"
        })]
      }), "\n"]
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
              children: "templates"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Use builtin config list template"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "config_list = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"builtin_config_list"'
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["If you want to see the config variable origin (type and path) when you do ", jsx(_components.code, {
        children: "jj config list"
      }), "\nyou can add this to your config:"]
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
              children: "templates"
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
              children: "config_list = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"builtin_config_list_detailed"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h2, {
      id: "log",
      children: "Log"
    }), "\n", jsx(_components.h3, {
      id: "default-revisions",
      children: "Default revisions"
    }), "\n", jsxs(_components.p, {
      children: ["You can configure the revisions ", jsx(_components.code, {
        children: "jj log"
      }), " would show when neither ", jsx(_components.code, {
        children: "-r"
      }), " nor any paths are specified."]
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
              children: "revsets"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Show commits that are not in `main@origin`"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "log = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"main@origin.."'
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["The default value for ", jsx(_components.code, {
        children: "revsets.log"
      }), " is\n", jsx(_components.code, {
        children: "'present(@) | ancestors(immutable_heads().., 2) | present(trunk())'"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "prioritize-revsets-in-the-log-over-",
      children: "Prioritize Revsets in the Log over @"
    }), "\n", jsxs(_components.p, {
      children: ["In some situations the default graph can be hard to read, for example when working with big merges.\nTo improve this behavior you can configure which revset in the ", jsx(_components.code, {
        children: "jj log"
      }), " graph is displayed on\nthe left instead of ", jsx(_components.code, {
        children: "@"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ['The following example will prioritize the change with the description "megamerge" with a fallback\nto ', jsx(_components.code, {
        children: "trunk()"
      }), " in case no such change exists:"]
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
              children: "revsets"
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
              children: "log-graph-prioritize = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"coalesce(description("'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#B31D28",
                "--shiki-light-font-style": "italic",
                "--shiki-dark": "#FDAEB7",
                "--shiki-dark-font-style": "italic"
              },
              children: 'megamerge\\n"), trunk())"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "default-template-1",
      children: "Default Template"
    }), "\n", jsxs(_components.p, {
      children: ["You can configure the template used when no ", jsx(_components.code, {
        children: "-T"
      }), " is specified."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "templates.evolog"
        }), " for ", jsx(_components.code, {
          children: "jj evolog"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "templates.log"
        }), " for ", jsx(_components.code, {
          children: "jj log"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "templates.show"
        }), " for ", jsx(_components.code, {
          children: "jj show"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "templates.op_log"
        }), " for ", jsx(_components.code, {
          children: "jj op log"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "templates.op_show"
        }), " for ", jsx(_components.code, {
          children: "jj op show"
        })]
      }), "\n"]
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
              children: "templates"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Use builtin evolog template"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "evolog = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"builtin_evolog_compact"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Use builtin log template"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "log = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"builtin_log_compact"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Use builtin show template"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "show = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"builtin_log_detailed"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Use builtin op log template"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "op_log = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"builtin_op_log_compact"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Use builtin op log template"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "op_show = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"builtin_op_log_compact"'
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["If you want to see the full description when you do ", jsx(_components.code, {
        children: "jj log"
      }), " you can add this to\nyour config:"]
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
              children: "templates"
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
              children: "log = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"builtin_log_compact_full_description"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "graph-style",
      children: "Graph style"
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
              children: "ui"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# Possible values: "curved" (default), "square", "ascii", "ascii-large"'
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "graph.style = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"square"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h4, {
      id: "node-style",
      children: "Node style"
    }), "\n", jsx(_components.p, {
      children: "The symbols used to represent commits or operations can be customized via\ntemplates."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "templates.log_node"
        }), " for commits (with ", jsx(_components.code, {
          children: "Option<Commit>"
        }), " keywords)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "templates.op_log_node"
        }), " for operations (with ", jsx(_components.code, {
          children: "Operation"
        }), " keywords)"]
      }), "\n"]
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
              children: "templates"
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
              children: "log_node = "
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
              children: "coalesce("
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  if(!self, "\u{1FB80}"),'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  if(current_working_copy, "@"),'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  if(root, "\u2534"),'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  if(immutable, "\u25CF", "\u25CB"),'
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
              children: "op_log_node = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: `'if(current_operation, "@", "\u25CB")'`
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "wrap-log-content",
      children: "Wrap log content"
    }), "\n", jsxs(_components.p, {
      children: ["If enabled, ", jsx(_components.code, {
        children: "log"
      }), "/", jsx(_components.code, {
        children: "evolog"
      }), "/", jsx(_components.code, {
        children: "op log"
      }), " content will be wrapped based on\nthe terminal width."]
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
              children: "ui"
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
              children: "log-word-wrap = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "display-of-commit-and-change-ids",
      children: "Display of commit and change ids"
    }), "\n", jsxs(_components.p, {
      children: ["Can be customized by the ", jsx(_components.code, {
        children: "format_short_id()"
      }), " template alias."]
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
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Highlight unique prefix and show at least 12 characters (default)"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "'format_short_id(id)' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'id.shortest(12)'"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Just the shortest possible unique prefix"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "'format_short_id(id)' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'id.shortest()'"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Show unique prefix and the rest surrounded by brackets"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "'format_short_id(id)' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: `'id.shortest(12).prefix() ++ "[" ++ id.shortest(12).rest() ++ "]"'`
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Always show 12 characters"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "'format_short_id(id)' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'id.short(12)'"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["To customize these separately, use the ", jsx(_components.code, {
        children: "format_short_commit_id()"
      }), " and\n", jsx(_components.code, {
        children: "format_short_change_id()"
      }), " aliases:"]
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
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Uppercase change ids. `jj` treats change and commit ids as case-insensitive."
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "'format_short_change_id(id)' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'format_short_id(id).upper()'"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Operation ids can be customized by the ", jsx(_components.code, {
        children: "format_short_operation_id()"
      }), " alias:"]
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
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Always show 12 characters"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "'format_short_operation_id(id)' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'id.short(12)'"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["To get shorter prefixes for certain revisions, set ", jsx(_components.code, {
        children: "revsets.short-prefixes"
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
              children: "revsets"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Prioritize the current bookmark"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "short-prefixes = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"(main..@)::"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "relative-timestamps",
      children: "Relative timestamps"
    }), "\n", jsxs(_components.p, {
      children: ["Can be customized by the ", jsx(_components.code, {
        children: "format_timestamp()"
      }), " template alias."]
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
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Full timestamp in ISO 8601 format"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "'format_timestamp(timestamp)' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'timestamp'"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# Relative timestamp rendered as "x days/hours/seconds ago"'
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "'format_timestamp(timestamp)' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'timestamp.ago()'"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj op log"
      }), " defaults to relative timestamps. To use absolute timestamps, you\nwill need to modify the ", jsx(_components.code, {
        children: "format_time_range()"
      }), " template alias."]
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
              children: "'format_time_range(time_range)' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: `'time_range.start() ++ " - " ++ time_range.end()'`
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "author-format",
      children: "Author format"
    }), "\n", jsxs(_components.p, {
      children: ["Can be customized by the ", jsx(_components.code, {
        children: "format_short_signature()"
      }), " template alias."]
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
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Full email address (default)"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "'format_short_signature(signature)' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'signature.email()'"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Both name and email address"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "'format_short_signature(signature)' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'signature'"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Username part of the email address"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "'format_short_signature(signature)' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'signature.email().local()'"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "commit-timestamp",
      children: "Commit timestamp"
    }), "\n", jsx(_components.p, {
      children: 'Commits have both an "author timestamp" and "committer timestamp". By default,\njj displays the committer timestamp, but can be changed to show the author\ntimestamp instead.'
    }), "\n", jsxs(_components.p, {
      children: ["The function must return a timestamp because the return value will likely be\nformatted with ", jsx(_components.code, {
        children: "format_timestamp()"
      }), "."]
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
              children: "'commit_timestamp(commit)' = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'commit.author().timestamp()'"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "signature-format",
      children: "Signature format"
    }), "\n", jsxs(_components.p, {
      children: ["Can be enabled with ", jsx(_components.code, {
        children: "ui.show-cryptographic-signatures"
      }), ", and\ncustomized with ", jsx(_components.code, {
        children: "format_short_cryptographic_signature(sig)"
      }), " and\n", jsx(_components.code, {
        children: "format_detailed_cryptographic_signature(sig)"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["Note that the formatting functions take an ", jsx(_components.code, {
        children: "Option<CryptographicSignature>"
      }), ".\nThis allows you to emit a custom message if a signature is not present, but\nwill raise an error if you try to access methods on a signature that is not\navailable."]
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
              children: "ui"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# default is false"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "show-cryptographic-signatures = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
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
              children: "'format_short_cryptographic_signature(sig)' = "
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
              children: "  if(sig,"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    sig.status(),"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "(no sig)",'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  )"
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
          })]
        })
      })
    }), "\n", jsx(_components.h2, {
      id: "pager",
      children: "Pager"
    }), "\n", jsxs(_components.p, {
      children: ["The default pager is can be set via ", jsx(_components.code, {
        children: "ui.pager"
      }), " or the ", jsx(_components.code, {
        children: "PAGER"
      }), " environment\nvariable. The priority is as follows (environment variables are marked with\na ", jsx(_components.code, {
        children: "$"
      }), "):"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "ui.pager"
      }), " > ", jsx(_components.code, {
        children: "$PAGER"
      })]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "less -FRX"
      }), " is the default pager in the absence of any other setting, except\non Windows where it is ", jsx(_components.code, {
        children: ":builtin"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["The special value ", jsx(_components.code, {
        children: ":builtin"
      }), " enables usage of the ", jsx(_components.a, {
        href: "#builtin-pager",
        children: "integrated\npager"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["If you are using a standard Linux distro, your system likely already has\n", jsx(_components.code, {
        children: "$PAGER"
      }), " set and that will be preferred over the built-in. To use the built-in:"]
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
              children: " config"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " set"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --user"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ui.pager"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " :builtin"
            })]
          })
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["It is possible the default will change to ", jsx(_components.code, {
        children: ":builtin"
      }), " for all platforms in the\nfuture."]
    }), "\n", jsxs(_components.p, {
      children: ["Additionally, paging behavior can be toggled via ", jsx(_components.code, {
        children: "ui.paginate"
      }), " like so:"]
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
              children: "ui"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Enable pagination for commands that support it (default)"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "paginate = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"auto"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Disable all pagination, equivalent to using --no-pager"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "paginate = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"never"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "builtin-pager",
      children: "Builtin pager"
    }), "\n", jsxs(_components.p, {
      children: ["Our builtin pager is based on\n", jsx(_components.a, {
        href: "https://github.com/markbt/streampager/",
        children: jsx(_components.code, {
          children: "streampager"
        })
      }), " but is configured within\n", jsx(_components.code, {
        children: "jj"
      }), "'s config. It is configured via the ", jsx(_components.code, {
        children: "ui.streampager"
      }), " table."]
    }), "\n", jsx(_components.h4, {
      id: "key-bindings",
      children: "Key bindings"
    }), "\n", jsx(_components.p, {
      children: "The built-in pager supports both navigation via arrows and Vim-style navigation.\nBeyond that, here are some useful keybindings for the pager:"
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Key"
          }), jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Action"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [jsx(_components.code, {
              children: "Ctrl-c"
            }), " or ", jsx(_components.code, {
              children: "q"
            })]
          }), jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Quit"
          })]
        }), jsxs(_components.tr, {
          children: [jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [jsx(_components.code, {
              children: "h"
            }), " or ", jsx(_components.code, {
              children: "F1"
            })]
          }), jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Show all key bindings"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsx(_components.code, {
              children: "Esc"
            })
          }), jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Close help or prompt"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsx(_components.code, {
              children: "\\"
            })
          }), jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Toggle line wrapping"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsx(_components.code, {
              children: "#"
            })
          }), jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Toggle line numbers"
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsx(_components.code, {
              children: "Ctrl-r"
            })
          }), jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Toggle the ruler"
          })]
        })]
      })]
    }), "\n", jsx(_components.p, {
      children: "The built-in pager does not support mouse input."
    }), "\n", jsx(_components.h4, {
      id: "wrapping-config",
      children: "Wrapping config"
    }), "\n", jsxs(_components.p, {
      children: ["Wrapping performed by the pager happens ", jsx(_components.em, {
        children: "in addition to"
      }), " any\nwrapping that ", jsx(_components.code, {
        children: "jj"
      }), " itself does."]
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
              children: "ui"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "streampager"
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
              children: "wrapping = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"anywhere"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  # wrap at screen edge (default)"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "wrapping = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"word"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "      # wrap on word boundaries"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "wrapping = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"none"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "      # strip long lines, allow scrolling"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "                       # left and right like `less -S`"
            })
          })]
        })
      })
    }), "\n", jsx(_components.h4, {
      id: "auto-exit-clearing-the-screen-on-startup-or-exit",
      children: "Auto-exit, clearing the screen on startup or exit"
    }), "\n", jsx(_components.p, {
      children: "You can configure whether the pager clears the screen on startup or exit, and\nwhether it quits automatically on short inputs. When the pager auto-quits,\nfeatures like word-wrapping are disabled."
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
              children: "ui"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "streampager"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Do not clear screen on exit. Use a full-screen interface for long"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# output only. Like `less -FX`."
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "interface = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"quit-if-one-page"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  # (default)."
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Always use a full-screen interface, ask the terminal to clear the"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# screen on exit. Like `less -+FX`."
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "interface = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"full-screen-clear-output"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Use the alternate screen if the input is either long or takes more"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# than 2 seconds to finish. Similar but not identical to `less -F -+X`."
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "interface = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"quit-quickly-or-clear-output"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h4, {
      id: "showing-the-ruler-on-startup",
      children: "Showing the ruler on startup"
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
              children: "ui"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "streampager"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Start with the ruler showing"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "show-ruler = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # (default)"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Start with the ruler hidden"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "show-ruler = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "false"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "processing-contents-to-be-paged",
      children: "Processing contents to be paged"
    }), "\n", jsxs(_components.p, {
      children: ["If you'd like to pass the output through a formatter e.g.\n", jsx(_components.a, {
        href: "https://github.com/so-fancy/diff-so-fancy",
        children: jsx(_components.code, {
          children: "diff-so-fancy"
        })
      }), " before piping it\nthrough a pager you must do it using a subshell as, unlike ", jsx(_components.code, {
        children: "git"
      }), " or ", jsx(_components.code, {
        children: "hg"
      }), ", the\ncommand will be executed directly. For example:"]
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
              children: "ui"
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
              children: "pager = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"sh"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"-c"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"diff-so-fancy | less -RFX"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Some formatters (like ", jsx(_components.a, {
        href: "https://github.com/dandavison/delta",
        children: jsx(_components.code, {
          children: "delta"
        })
      }), ") require\ngit style diffs for formatting. You can configure this style of\ndiff as the default with the ", jsx(_components.code, {
        children: "ui.diff-formatter"
      }), " setting. For example:"]
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
              children: "ui"
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
              children: "pager = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"delta"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "diff-formatter = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '":git"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h2, {
      id: "aliases",
      children: "Aliases"
    }), "\n", jsx(_components.p, {
      children: "You can define aliases for commands, including their arguments. For example:"
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
              children: "aliases"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# `jj l` shows commits on the working-copy commit's (anonymous) bookmark"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# compared to the `main` bookmark"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "l = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"log"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"-r"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"(main..@):: | (main..@)-"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "This alias syntax can only run a single jj command. However, you may want to\nexecute multiple jj commands with a single alias, or run arbitrary scripts that\ncomplement your version control workflow. This can be done, but be aware of the\ndanger:"
    }), "\n", jsx(_components.p, {
      children: "!!! warning"
    }), "\n", jsxs(_components.p, {
      children: ["The following technique just provides a convenient syntax for running\narbitrary code on your system. Using it irresponsibly may cause damage\nranging from breaking the behavior of ", jsx(_components.code, {
        children: "jj undo"
      }), " to wiping your file system.\nExercise the same amount of caution while writing these aliases as you would\nwhen typing commands into the terminal!"]
    }), "\n", jsx(_components.p, {
      children: "This feature may be removed or replaced by an embedded scripting language in\nthe future."
    }), "\n", jsxs(_components.p, {
      children: ["The command ", jsx(_components.code, {
        children: "jj util exec"
      }), " will simply run any command you pass to it as an\nargument. Additional arguments are passed through. Here are some examples:"]
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
              children: "aliases"
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
              children: "my-script = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"util"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"exec"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"--"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"my-jj-script"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#                            ^^^^"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# This makes sure that flags are passed to your script instead of parsed by jj."
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "my-inline-script = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"util"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"exec"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"--"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"bash"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"-c"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"""'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "set -euo pipefail"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: 'echo "Look Ma, everything in one file!"'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: 'echo "args: $@"'
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"""'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '""'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#    ^^"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# This last empty string will become "$0" in bash, so your actual arguments'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# are all included in "$@" and start at "$1" as expected.'
            })
          })]
        })
      })
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsxs(_components.p, {
        children: ["Note: Shebangs (e.g. ", jsx(_components.code, {
          children: "#!/usr/bin/env"
        }), ") aren't necessary since you're already\nexplicitly passing your script into the right shell."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "editor",
      children: "Editor"
    }), "\n", jsxs(_components.p, {
      children: ["The default editor is set via ", jsx(_components.code, {
        children: "ui.editor"
      }), ", though there are several places to\nset it. The priority is as follows (environment variables are marked with\na ", jsx(_components.code, {
        children: "$"
      }), "):"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "$JJ_EDITOR"
      }), " > ", jsx(_components.code, {
        children: "ui.editor"
      }), " > ", jsx(_components.code, {
        children: "$VISUAL"
      }), " > ", jsx(_components.code, {
        children: "$EDITOR"
      })]
    }), "\n", jsx(_components.p, {
      children: "Nano is the default editor (Notepad on Windows) in the absence of any other\nsetting, but you could set it explicitly too."
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
              children: "ui"
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
              children: "editor = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"pico"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "To use NeoVim instead:"
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
              children: "ui"
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
              children: "editor = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"nvim"'
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["For GUI editors you possibly need to use a ", jsx(_components.code, {
        children: "-w"
      }), " or ", jsx(_components.code, {
        children: "--wait"
      }), ". Some examples:"]
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
              children: "ui"
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
              children: "editor = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"code -w"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "       # VS Code"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "editor = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"code.cmd -w"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "   # VS Code on Windows"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "editor = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"bbedit -w"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "     # BBEdit"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "editor = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"subl -n -w"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "    # Sublime Text"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "editor = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"mate -w"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "       # TextMate"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "editor = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"C:/Program Files/Notepad++/notepad++.exe"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "-multiInst"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"-notabbar"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"-nosession"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"-noPlugin"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "] "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Notepad++"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "editor = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"idea --temp-project --wait"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "   #IntelliJ"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Obviously, you would only set one line, don't copy them all in!"
    }), "\n", jsx(_components.h2, {
      id: "editing-diffs",
      children: "Editing diffs"
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "ui.diff-editor"
      }), " setting affects the default tool used for editing diffs\n(e.g. ", jsx(_components.code, {
        children: "jj split"
      }), ", ", jsx(_components.code, {
        children: "jj squash -i"
      }), "). If it is not set, the special value\n", jsx(_components.code, {
        children: ":builtin"
      }), " is used. It launches a built-in TUI tool (known as ", jsx(_components.a, {
        href: "https://github.com/arxanas/scm-record?tab=readme-ov-file#scm-diff-editor",
        children: "scm-diff-editor"
      }), ")\nto edit the diff in your terminal."]
    }), "\n", jsxs(_components.p, {
      children: ["You can try a different tool temporarily by doing e.g. ", jsx(_components.code, {
        children: "jj split --tool meld"
      }), " or\nyou can set the option to change the default. This requires that you have an\nappropriate tool installed, see for example ", jsx(_components.a, {
        href: "#using-meld-as-a-diff-editor",
        children: "the instructions for using\nMeld"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "Suggestion:"
      }), " If possible, it is recommended to try an external diff tool like\n", jsx(_components.a, {
        href: "#using-meld-as-a-diff-editor",
        children: "Meld"
      }), " (see below for some other possibilities)\nfor splitting commits and other diff editing, in addition to the built-in diff\neditor. It is good to know the capabilities of both. The built-in diff editor\ndoes not require external tools to be available, is faster for tasks like\npicking hunks, and does not require leaving the terminal. External tools give\nyou the flexibility of picking out portions of lines from the diff or even\narbitrarily editing the text of the files."]
    }), "\n", jsxs(_components.p, {
      children: ["If ", jsx(_components.code, {
        children: "ui.diff-editor"
      }), " is a string, e.g. ", jsx(_components.code, {
        children: '"meld"'
      }), ", the arguments will be read from\nthe following config keys."]
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
              children: "merge-tools"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "meld"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# program = "meld"      # Defaults to the name of the tool if not specified'
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "program = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"/path/to/meld"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: " # May be necessary if `meld` is not in the PATH"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "edit-args = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"--newtab"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$left"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$right"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj"
      }), " makes the following substitutions:"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "$left"
          }), " and ", jsx(_components.code, {
            children: "$right"
          }), " are replaced with the paths to the left and right\ndirectories to diff respectively."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["If no ", jsx(_components.code, {
            children: "edit-args"
          }), " are specified, ", jsx(_components.code, {
            children: '["$left", "$right"]'
          }), " are set by default."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["If ", jsx(_components.code, {
            children: "edit-args = []"
          }), ", ", jsx(_components.code, {
            children: "jj"
          }), " will refuse to use this tool for diff editing. This is a way to explicitly state that a certain tool (e.g. ", jsx(_components.code, {
            children: "mergiraf"
          }), ") does not work for diff editing."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["Finally, ", jsx(_components.code, {
        children: "ui.diff-editor"
      }), " can be a list that specifies a command and its arguments."]
    }), "\n", jsx(_components.p, {
      children: "Some examples:"
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
              children: "ui"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Use merge-tools.meld.edit-args"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "diff-editor = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"meld"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  # Or `kdiff3`, or `diffedit3`, ..."
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Specify edit-args inline"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "diff-editor = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"/path/to/binary"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"--be-helpful"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$left"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$right"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# Equivalent to ["binary", "$left", "$right"] arguments by default'
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "diff-editor = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"binary"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "experimental-3-pane-diff-editing",
      children: "Experimental 3-pane diff editing"
    }), "\n", jsx(_components.p, {
      children: 'We offer two special "3-pane" diff editor configs:'
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "meld-3"
        }), ", which requires installing ", jsx(_components.a, {
          href: "https://meldmerge.org/",
          children: "Meld"
        }), ", and"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "diffedit3"
        }), ", which requires installing ", jsx(_components.a, {
          href: "https://github.com/ilyagr/diffedit3/releases",
          children: jsx(_components.code, {
            children: "diffedit3"
          })
        }), "."]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "Meld"
      }), " is a graphical application that is recommended, but can be difficult to\ninstall in some situations. ", jsx(_components.code, {
        children: "diffedit3"
      }), " is designed to be easy to install and to\nbe usable in environments where Meld is difficult to use (e.g. over SSH via port\nforwarding). ", jsx(_components.code, {
        children: "diffedit3"
      }), " starts a local server that can be accessed via a web\nbrowser, similarly to ", jsx(_components.a, {
        href: "https://jupyter.org/",
        children: "Jupyter"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["There is also the ", jsx(_components.code, {
        children: "diffedit3-ssh"
      }), " which is similar to ", jsx(_components.code, {
        children: "diffedit3"
      }), " but does not\ntry to open the web browser pointing to the local server (the URL\nprinted to the terminal) automatically. ", jsx(_components.code, {
        children: "diffedit3-ssh"
      }), " also always uses ports in between\n17376-17380 and fails if they are all busy. This can be useful when working\nover SSH. Open the fold below for more details of how to set that up."]
    }), "\n", jsxs("details", {
      children: [jsxs("summary", {
        children: [" Tips for using ", jsx(_components.code, {
          children: "diffedit3-ssh"
        }), " over SSH "]
      }), jsxs(_components.p, {
        children: ["To use ", jsx(_components.code, {
          children: "diffedit3"
        }), " over SSH, you need to set up port forwarding. One way to do\nthis is to start SSH as follows (copy-paste the relevant lines):"]
      }), jsx(Fragment, {
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
          children: jsxs(_components.code, {
            children: [jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: "ssh"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " -L"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 17376:localhost:17376"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " \\"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    -L"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 17377:localhost:17377"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " \\"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    -L"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 17378:localhost:17378"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " \\"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    -L"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 17379:localhost:17379"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " \\"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "    -L"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: " 17380:localhost:17380"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " \\"
              })]
            }), "\n", jsx(_components.span, {
              className: "line",
              children: jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: "    myhost.example.com"
              })
            })]
          })
        })
      }), jsxs(_components.p, {
        children: [jsx(_components.code, {
          children: "diffedit3-ssh"
        }), " is set up to use these 5 ports by default. Usually, only the\nfirst of them will be used. The rest are used if another program happens to use\none of them, or if you run multiple instances of ", jsx(_components.code, {
          children: "diffedit3"
        }), " at the same time."]
      }), jsxs(_components.p, {
        children: ["Another way is to add a snippet to ", jsx(_components.code, {
          children: "~/.ssh/config"
        }), ":"]
      }), jsx(Fragment, {
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
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "Host"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#6F42C1",
                  "--shiki-dark": "#B392F0"
                },
                children: " myhost"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    User"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "     myself"
              })]
            }), "\n", jsx(_components.span, {
              className: "line",
              children: jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: "    Hostname myhost.example.com"
              })
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    LocalForward"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 17376"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " localhost:"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "17376"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    LocalForward"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 17377"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " localhost:"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "17377"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    LocalForward"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 17378"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " localhost:"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "17378"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    LocalForward"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 17379"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " localhost:"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "17379"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  "--shiki-light": "#D73A49",
                  "--shiki-dark": "#F97583"
                },
                children: "    LocalForward"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: " 17380"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#24292E",
                  "--shiki-dark": "#E1E4E8"
                },
                children: " localhost:"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#005CC5",
                  "--shiki-dark": "#79B8FF"
                },
                children: "17380"
              })]
            })]
          })
        })
      }), jsxs(_components.p, {
        children: ["With that configuration, you should be able to simply ", jsx(_components.code, {
          children: "ssh myhost"
        }), "."]
      })]
    }), "\n", jsxs(_components.p, {
      children: ["Setting either ", jsx(_components.code, {
        children: 'ui.diff-editor = "meld-3"'
      }), " or ", jsx(_components.code, {
        children: 'ui.diff-editor = "diffedit3"'
      }), "\nwill result in the diff editor showing 3 panes: the diff on the left and right,\nand an editing pane in the middle. This allow you to see both sides of the\noriginal diff while editing."]
    }), "\n", jsxs(_components.p, {
      children: ["If you use ", jsx(_components.code, {
        children: 'ui.diff-editor = "meld-3"'
      }), ", note that you can still get the 2-pane\nMeld view using ", jsx(_components.code, {
        children: "jj diff --tool meld"
      }), ". ", jsx(_components.code, {
        children: "diffedit3"
      }), " has a button you can use to\nswitch to a 2-pane view."]
    }), "\n", jsxs(_components.p, {
      children: ["To configure other diff editors in this way, you can include ", jsx(_components.code, {
        children: "$output"
      }), " together\nwith ", jsx(_components.code, {
        children: "$left"
      }), " and ", jsx(_components.code, {
        children: "$right"
      }), " in ", jsx(_components.code, {
        children: "merge-tools.TOOL.edit-args"
      }), ". ", jsx(_components.code, {
        children: "jj"
      }), " will replace\n", jsx(_components.code, {
        children: "$output"
      }), " with the directory where the diff editor will be expected to put the\nresult of the user's edits. Initially, the contents of ", jsx(_components.code, {
        children: "$output"
      }), " will be the\nsame as the contents of ", jsx(_components.code, {
        children: "$right"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "jj-instructions",
      children: jsx(_components.code, {
        children: "JJ-INSTRUCTIONS"
      })
    }), "\n", jsxs(_components.p, {
      children: ["When editing a diff, jj will include a synthetic file called ", jsx(_components.code, {
        children: "JJ-INSTRUCTIONS"
      }), "\nin the diff with instructions on how to edit the diff. Any changes you make to\nthis file will be ignored. To suppress the creation of this file, set\n", jsx(_components.code, {
        children: "ui.diff-instructions = false"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "using-meld-as-a-diff-editor",
      children: "Using Meld as a diff editor"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.a, {
        href: "https://meldmerge.org",
        children: "Meld"
      }), " is a nice and polished free diff editor. It can be\nobtained as follows:"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Linux:"
          }), " use your favorite package manager, e.g. ", jsx(_components.code, {
            children: "sudo apt install meld"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Windows:"
          }), " Meld can be downloaded from ", jsx(_components.a, {
            href: "https://meldmerge.org/",
            children: "https://meldmerge.org/"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Mac OS:"
          }), " Install Homebrew and run ", jsx(_components.code, {
            children: "brew install --cask meld"
          }), ".\nThis will install both an app in ", jsx(_components.code, {
            children: "/Applications/Meld.app"
          }), " and the command-line\n", jsx(_components.code, {
            children: "meld"
          }), " command that ", jsx(_components.code, {
            children: "jj"
          }), " uses. You can read about ", jsx(_components.a, {
            href: "https://gist.github.com/ilyagr/1b40f6061d8ad320cee4c12843df1a23",
            children: "more details and other\noptions"
          }), " but,\nas of this writing, this is by far the easiest."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj"
      }), " has two diff editing configurations that use Meld: ", jsx(_components.code, {
        children: "meld"
      }), " for a 2-pane view\nand ", jsx(_components.code, {
        children: "meld-3"
      }), " for a ", jsx(_components.a, {
        href: "#experimental-3-pane-diff-editing",
        children: "three-pane view"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["There is also a ", jsx(_components.code, {
        children: "meld"
      }), " ", jsx(_components.a, {
        href: "#3-way-merge-tools-for-conflict-resolution",
        children: "merge tool"
      }), "\nthat can be useful, but does not support displaying the merge base while\nmerging."]
    }), "\n", jsx(_components.h3, {
      id: "using-vim-as-a-diff-editor",
      children: "Using Vim as a diff editor"
    }), "\n", jsxs(_components.p, {
      children: ["Using ", jsx(_components.code, {
        children: 'ui.diff-editor = "vimdiff"'
      }), " is possible but not recommended. For a better\nexperience, you can follow ", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/wiki/Vim#using-vim-as-a-diff-tool",
        children: "instructions from the Wiki"
      }), " to configure the\n", jsx(_components.a, {
        href: "https://github.com/will133/vim-dirdiff",
        children: "DirDiff Vim plugin"
      }), " and/or the ", jsx(_components.a, {
        href: "https://github.com/balki/vimtabdiff",
        children: "vimtabdiff Python script"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "3-way-merge-tools-for-conflict-resolution",
      children: "3-way merge tools for conflict resolution"
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "ui.merge-editor"
      }), " key specifies the tool used for three-way merge tools\nby ", jsx(_components.code, {
        children: "jj resolve"
      }), ". For example:"]
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
              children: "ui"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Use merge-tools.meld.merge-args"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "merge-editor = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"meld"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '  # Or "vscode" or "vscodium" or "kdiff3" or "vimdiff"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Specify merge-args inline"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "merge-editor = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"meld"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$left"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$base"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$right"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"-o"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$output"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "The following tools can be used out of the box, as long as they are installed:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: '"kdiff3"'
      }), "\n", jsx(_components.li, {
        children: '"meld"'
      }), "\n", jsx(_components.li, {
        children: '"mergiraf"'
      }), "\n", jsx(_components.li, {
        children: '"smerge"'
      }), "\n", jsx(_components.li, {
        children: '"vimdiff"'
      }), "\n", jsx(_components.li, {
        children: '"vscode"'
      }), "\n", jsx(_components.li, {
        children: '"vscodium"'
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["Using VS Code as a merge tool works well with VS Code's ", jsx(_components.a, {
        href: "https://code.visualstudio.com/docs/remote/remote-overview",
        children: "Remote\nDevelopment"
      }), "\nfunctionality, as long as ", jsx(_components.code, {
        children: "jj"
      }), " is called from VS Code's terminal."]
    }), "\n", jsx(_components.h3, {
      id: "setting-up-a-custom-merge-tool",
      children: "Setting up a custom merge tool"
    }), "\n", jsxs(_components.p, {
      children: ["To use a different tool named ", jsx(_components.code, {
        children: "TOOL"
      }), ", the arguments to pass to the tool MUST be\nspecified either inline or in the ", jsx(_components.code, {
        children: "merge-tools.TOOL.merge-args"
      }), " key. As an\nexample of how to set this key and other tool configuration options, here is\nthe out-of-the-box configuration of the three default tools. (There is no need\nto copy it to your config file verbatim, but you are welcome to customize it.)"]
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
              children: "merge-tools"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "kdiff3"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# program  = "kdiff3"     # Defaults to the name of the tool if not specified'
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "merge-args = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$base"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$left"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$right"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"-o"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$output"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"--auto"'
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
              children: "["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "merge-tools"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "meld"
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
              children: "merge-args = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$left"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$base"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$right"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"-o"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$output"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"--auto-merge"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
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
              children: "merge-tools"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "vimdiff"
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
              children: "merge-args = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"-f"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"-d"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$output"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"-M"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "$left"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$base"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$right"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "-c"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"wincmd J"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"-c"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"set modifiable"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "-c"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"set write"'
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
              children: "program = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"vim"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "merge-tool-edits-conflict-markers = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "    # See below for an explanation"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj"
      }), " makes the following substitutions:"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "$output"
          }), " (REQUIRED) is replaced with the name of the file that the merge tool\nshould output. ", jsx(_components.code, {
            children: "jj"
          }), " will read this file after the merge tool exits."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "$left"
          }), " and ", jsx(_components.code, {
            children: "$right"
          }), " are replaced with the paths to two files containing the\ncontent of each side of the conflict."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "$base"
          }), " is replaced with the path to a file containing the contents of the\nconflicted file in the last common ancestor of the two sides of the conflict."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "$marker_length"
          }), " is replaced with the length of the conflict markers which\nshould be used for the file. This can be useful if the merge tool parses\nand/or generates conflict markers. Usually, ", jsx(_components.code, {
            children: "jj"
          }), " uses conflict markers of\nlength 7, but they can be longer if necessary to make parsing unambiguous."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["Unlike ", jsx(_components.code, {
        children: "diff-args"
      }), " or ", jsx(_components.code, {
        children: "edit-args"
      }), ", there is no default value for ", jsx(_components.code, {
        children: "merge-args"
      }), ".\nIf ", jsx(_components.code, {
        children: "merge-args"
      }), " are not specified, the tool cannot be used for conflict\nresolution."]
    }), "\n", jsx(_components.h3, {
      id: "editing-conflict-markers-with-a-tool-or-a-text-editor",
      children: "Editing conflict markers with a tool or a text editor"
    }), "\n", jsxs(_components.p, {
      children: ["By default, the merge tool starts with an empty output file. If the tool puts\nanything into the output file and exits with the 0 exit code,\n", jsx(_components.code, {
        children: "jj"
      }), " assumes that the conflict is fully resolved, while if the tool exits with\na non-zero exit code, ", jsx(_components.code, {
        children: "jj"
      }), " assumes that the merge should be canceled.\nThis is appropriate for most graphical merge tools."]
    }), "\n", jsxs(_components.p, {
      children: ["For merge tools which try to automatically resolve conflicts without user input,\nthis behavior may not be desired. For instance, some automatic merge tools use\nan exit code of 1 to indicate that some conflicts were unable to be resolved and\nthat the output file should contain conflict markers. In that case, you could\nset the config option ", jsx(_components.code, {
        children: "merge-tools.TOOL.merge-conflict-exit-codes = [1]"
      }), " to tell\n", jsx(_components.code, {
        children: "jj"
      }), ` to expect conflict markers in the output file if the exit code is 1. If a
merge tool produces output using Git's "diff3" conflict style, `, jsx(_components.code, {
        children: "jj"
      }), " should be\nable to parse it correctly, so many Git merge drivers should be usable with ", jsx(_components.code, {
        children: "jj"
      }), "\nas well."]
    }), "\n", jsxs(_components.p, {
      children: ["Some tools (e.g. ", jsx(_components.code, {
        children: "vimdiff"
      }), ") can present a multi-way diff but don't resolve\nconflict themselves. When using such tools, ", jsx(_components.code, {
        children: "jj"
      }), "\ncan help you by populating the output file with conflict markers before starting\nthe merge tool (instead of leaving the output file empty and letting the merge\ntool fill it in). To do that, set the\n", jsx(_components.code, {
        children: "merge-tools.vimdiff.merge-tool-edits-conflict-markers = true"
      }), " option."]
    }), "\n", jsxs(_components.p, {
      children: ["With this option set, if the output file still contains conflict markers after\nthe conflict is done, ", jsx(_components.code, {
        children: "jj"
      }), " assumes that the conflict was only partially resolved\nand parses the conflict markers to get the new state of the conflict. The\nconflict is considered fully resolved when there are no conflict markers left.\nThe conflict marker style can also be customized per tool using the\n", jsx(_components.code, {
        children: "merge-tools.TOOL.conflict-marker-style"
      }), " option, which takes the same values as\n", jsx(_components.a, {
        href: "#conflict-marker-style",
        children: jsx(_components.code, {
          children: "ui.conflict-marker-style"
        })
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "code-formatting-and-other-file-content-transformations",
      children: "Code formatting and other file content transformations"
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "jj fix"
      }), " command allows you to efficiently rewrite files in complex commit\ngraphs with no risk of introducing conflicts, using tools like ", jsx(_components.code, {
        children: "clang-format"
      }), " or\n", jsx(_components.code, {
        children: "prettier"
      }), ". The tools run as subprocesses that take file content on standard\ninput and repeat it, with any desired changes, on standard output. The file is\nonly rewritten if the subprocess produces a successful exit code."]
    }), "\n", jsx(_components.h3, {
      id: "enforce-coding-style-rules",
      children: "Enforce coding style rules"
    }), "\n", jsxs(_components.p, {
      children: ["Suppose you want to use ", jsx(_components.code, {
        children: "clang-format"
      }), " to format your ", jsx(_components.code, {
        children: "*.c"
      }), " and ", jsx(_components.code, {
        children: "*.h"
      }), " files,\nas well as sorting their ", jsx(_components.code, {
        children: "#include"
      }), " directives."]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj fix"
      }), " provides the file content anonymously on standard input, but the name\nof the file being formatted may be important for include sorting or other output\nlike error messages. To address this, you can use the ", jsx(_components.code, {
        children: "$path"
      }), " substitution to\nprovide the name of the file in a command argument."]
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
              children: "fix"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "tools"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "clang-format"
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
              children: "command = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"/usr/bin/clang-format"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"--sort-includes"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"--assume-filename=$path"'
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
              children: "patterns = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: `"glob:'**/*.c'"`
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: `            "glob:'**/*.h'"`
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "sort-and-remove-duplicate-lines-from-a-file",
      children: "Sort and remove duplicate lines from a file"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj fix"
      }), " can also be used with tools that are not considered code formatters."]
    }), "\n", jsx(_components.p, {
      children: "Suppose you have a list of words in a text file in your repository, and you want\nto keep the file sorted alphabetically and remove any duplicate words."
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
              children: "fix"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "tools"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "sort-word-list"
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
              children: "command = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"sort"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"-u"'
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
              children: "patterns = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"word_list.txt"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "tools-stored-inside-the-workspace",
      children: "Tools stored inside the workspace"
    }), "\n", jsxs(_components.p, {
      children: ["Some fix tools may be stored inside the workspace. For example, a binary may be\nstored inside ", jsx(_components.code, {
        children: "node_modules"
      }), ". Use the ", jsx(_components.code, {
        children: "$root"
      }), " variable to create an absolute\npath to such a program:"]
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
              children: "fix"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "tools"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "biome"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Linux and macOS"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "command = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$root/node_modules/@biomejs/cli-linux-x64/biome"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Windows"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "command = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"$root'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\\\\"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "node_modules"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\\\\"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "@biomejs"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\\\\"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "cli-win32-x64"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\\\\"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: 'biome.exe"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "execution-order-of-tools",
      children: "Execution order of tools"
    }), "\n", jsxs(_components.p, {
      children: ["If two or more tools affect the same file, they are executed in the ascending\nlexicographical order of their configured names. This will remain as a tie\nbreaker if other ordering mechanisms are introduced in the future. If you use\nnumbers in tool names to control execution order, remember to include enough\nleading zeros so that, for example, ", jsx(_components.code, {
        children: "09"
      }), " sorts before ", jsx(_components.code, {
        children: "10"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["Suppose you want to keep only the 10 smallest numbers in a text file that\ncontains one number on each line. This can be accomplished with ", jsx(_components.code, {
        children: "sort"
      }), " and\n", jsx(_components.code, {
        children: "head"
      }), ", but execution order is important."]
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
              children: "fix"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "tools"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "1-sort-numbers-file"
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
              children: "command = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"sort"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"-n"'
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
              children: "patterns = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"numbers.txt"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
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
              children: "fix"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "tools"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "2-truncate-numbers-file"
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
              children: "command = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"head"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"-n"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"10"'
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
              children: "patterns = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"numbers.txt"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "disabling-and-enabling-tools",
      children: "Disabling and enabling tools"
    }), "\n", jsxs(_components.p, {
      children: ["Tools can be disabled and enabled with the optional ", jsx(_components.code, {
        children: "enabled"
      }), " config. This\nallows you to define tools globally but enable them only for specific\nrepositories."]
    }), "\n", jsx(_components.p, {
      children: "In the user configuration, define a disabled tool for running rustfmt:"
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
              children: "fix"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "tools"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "rustfmt"
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
              children: "enabled = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "false"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "command = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"rustfmt"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"--emit"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"stdout"'
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
              children: "patterns = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: `"glob:'**/*.rs'"`
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Then to use the tool in a specific repository, set the ", jsx(_components.code, {
        children: "enabled"
      }), " config:"]
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
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " config"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " set"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --repo"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " fix.tools.rustfmt.enabled"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " true"
            })]
          })
        })
      })
    }), "\n", jsx(_components.h2, {
      id: "commit-signing",
      children: "Commit Signing"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj"
      }), " can be configured to sign and verify the commits it creates using either\nGnuPG or SSH signing keys."]
    }), "\n", jsx(_components.p, {
      children: "To do this you need to configure a signing backend."
    }), "\n", jsxs(_components.p, {
      children: ["Setting the backend to ", jsx(_components.code, {
        children: '"none"'
      }), " disables signing."]
    }), "\n", jsx(_components.h3, {
      id: "gnupg-signing",
      children: "GnuPG Signing"
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
              children: "signing"
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
              children: "behavior = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"own"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "backend = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"gpg"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## You can set `key` to anything accepted by `gpg -u`"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## If not set then defaults to the key associated with `user.email`"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# key = "4ED556E9729E000F"'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# key = "signing@example.com"'
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["By default the gpg backend will look for a ", jsx(_components.code, {
        children: "gpg"
      }), " binary on your path. If you want\nto change the program used or specify a path to ", jsx(_components.code, {
        children: "gpg"
      }), " explicitly you can set:"]
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
              children: "signing"
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
              children: "backends.gpg.program = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"gpg2"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Also by default the gpg backend will consider key expiry when verifying commit signatures.\nTo consider expired keys as valid you can set:"
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
              children: "signing"
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
              children: "backends.gpg.allow-expired-keys = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h4, {
      id: "pkcs12-certificates",
      children: "PKCS#12 Certificates"
    }), "\n", jsxs(_components.p, {
      children: ["PKCS#12 certificates can be used to sign commits using the ", jsx(_components.code, {
        children: "gpgsm"
      }), " backend."]
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
              children: "signing"
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
              children: "behavior = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"own"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "backend = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"gpgsm"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## You can set `key` to anything accepted by `gpgsm -u`"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## If not set then defaults to the key associated with `user.email`"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# key = "4ED556E9729E000F"'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# key = "signing@example.com"'
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["By default the gpgsm backend will look for a ", jsx(_components.code, {
        children: "gpgsm"
      }), " binary on your path. If you want\nto change the program used or specify a path to ", jsx(_components.code, {
        children: "gpgsm"
      }), " explicitly you can set:"]
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
              children: "signing"
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
              children: "backends.gpgsm.program = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"gpgsm"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Also by default the gpgsm backend will consider key expiry when verifying commit signatures.\nTo consider expired keys as valid you can set:"
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
              children: "signing"
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
              children: "backends.gpgsm.allow-expired-keys = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "ssh-signing",
      children: "SSH Signing"
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
              children: "signing"
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
              children: "behavior = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"own"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "backend = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"ssh"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "key = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGj+J6N6SO+4P8dOZqfR1oiay2yxhhHnagH52avUqw5h"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "## You can also use a path instead of embedding the key"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# key = "~/.ssh/id_for_signing.pub"'
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["By default the ssh backend will look for a ", jsx(_components.code, {
        children: "ssh-keygen"
      }), " binary on your path. If you want\nto change the program used or specify a path to ", jsx(_components.code, {
        children: "ssh-keygen"
      }), " explicitly you can set:"]
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
              children: "signing"
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
              children: "backends.ssh.program = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"/path/to/ssh-keygen"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "When verifying commit signatures the ssh backend needs to be provided with an allowed-signers\nfile containing the public keys of authors whose signatures you want to be able to verify."
    }), "\n", jsxs(_components.p, {
      children: ["You can find the format for this file in the\n", jsx(_components.a, {
        href: "https://man.openbsd.org/ssh-keygen#ALLOWED_SIGNERS",
        children: "ssh-keygen man page"
      }), ". This can be provided\nas follows:"]
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
              children: "signing"
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
              children: "backends.ssh.allowed-signers = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"/path/to/allowed-signers"'
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Additionally, an SSH KRL or list of revoked public keys (see\n", jsx(_components.a, {
        href: "https://man.openbsd.org/ssh-keygen#KEY_REVOCATION_LISTS",
        children: "ssh-keygen man page"
      }), ") can be provided\nwith the ", jsx(_components.code, {
        children: "revocation-list"
      }), " option. If a public key is found in this file then any signature\nrelating to it is marked as invalid."]
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
              children: "signing"
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
              children: "backends.ssh.revocation-list = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"/path/to/revocation-list"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "manually-signing-commits",
      children: "Manually signing commits"
    }), "\n", jsxs(_components.p, {
      children: ["You can use ", jsx(_components.a, {
        href: "./cli-reference#jj-sign",
        children: jsx(_components.code, {
          children: "jj sign"
        })
      }), "/", jsx(_components.a, {
        href: "./cli-reference#jj-unsign",
        children: jsx(_components.code, {
          children: "jj unsign"
        })
      }), "\nto sign/unsign commits manually."]
    }), "\n", jsx(_components.p, {
      children: "!!! warning"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj sign"
      }), " always signs commits, even if they are already signed by the\nuser. While this is cumbersome for users signing via hardware devices, we\ncannot reliably check if a commit is already signed without creating a\nsignature (see ", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/issues/5786",
        children: "this issue"
      }), ")."]
    }), "\n", jsx(_components.h3, {
      id: "automatically-signing-commits",
      children: "Automatically signing commits"
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "signing.behavior"
      }), " configuration option has four different options for what\nto do with signing commits on modification of a change (e.g., rebasing or edits)."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "drop"
        }), ": do not automatically sign; if a change was signed before\nmodification, drop that signing after modification."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "keep"
        }), ": if a change was signed before modification, and it was authored by\nyou, attempt to sign it again after the modification."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "own"
        }), ": sign all commits that were authored by you when you modify them."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "force"
        }), ": sign all commits after modification, always, even if you are not the\nauthor."]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["Instead of signing all commits during creation when ", jsx(_components.code, {
        children: "signing.behavior"
      }), " is\nset to ", jsx(_components.code, {
        children: "own"
      }), ", the ", jsx(_components.code, {
        children: "git.sign-on-push"
      }), " configuration can be used to sign\ncommits only upon running ", jsx(_components.code, {
        children: "jj git push"
      }), ". All mutable unsigned commits\nbeing pushed will be signed prior to pushing. This might be preferred if the\nsigning backend requires user interaction or is slow, so that signing is\nperformed in a single batch operation."]
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
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Configure signing backend as before, but lazily signing only on push."
            })
          }), "\n", jsxs(_components.span, {
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
              children: "signing"
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
              children: "behavior = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"drop"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "backend = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"ssh"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "key = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGj+J6N6SO+4P8dOZqfR1oiay2yxhhHnagH52avUqw5h"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
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
              children: "git"
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
              children: "sign-on-push = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h2, {
      id: "commit-signature-verification",
      children: "Commit Signature Verification"
    }), "\n", jsxs(_components.p, {
      children: ["By default signature verification and display is ", jsx(_components.strong, {
        children: "disabled"
      }), " as it incurs a\nperformance cost when rendering medium to large change logs. You can enable it\nby setting ", jsx(_components.code, {
        children: "ui.show-cryptographic-signatures"
      }), " to true in your configuration."]
    }), "\n", jsxs(_components.p, {
      children: ["If you want to display commit signatures in your templates, you can use\n", jsx(_components.code, {
        children: "commit.signature()"
      }), " (see ", jsx(_components.a, {
        href: "./templates#commit-type",
        children: "Commit type"
      }), "). The\nreturned ", jsx(_components.a, {
        href: "./templates#cryptographicsignature-type",
        children: "CryptographicSignature\nType"
      }), " provides methods to retrieve\nsignature details."]
    }), "\n", jsx(_components.h2, {
      id: "git-settings",
      children: "Git settings"
    }), "\n", jsx(_components.h3, {
      id: "default-colocation",
      children: "Default colocation"
    }), "\n", jsxs(_components.p, {
      children: ["When creating a git-backed Jujutsu repository, you can disable colocation which\nplaces the ", jsx(_components.code, {
        children: ".git"
      }), " directory next to the ", jsx(_components.code, {
        children: ".jj"
      }), " directory. Colocation allows some\namount of two-way interoperability, but it can perform worse in large repos."]
    }), "\n", jsxs(_components.p, {
      children: ["The setting ", jsx(_components.code, {
        children: "git.colocate"
      }), " is a boolean option that controls whether or not the\n", jsx(_components.code, {
        children: "jj git init"
      }), " and ", jsx(_components.code, {
        children: "jj git clone"
      }), " commands should create colocated repositories\nby default. By default, ", jsx(_components.code, {
        children: "git.colocate"
      }), " is set to ", jsx(_components.code, {
        children: "true"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["See ", jsx(_components.a, {
        href: "git-compatibility#colocated-jujutsugit-repos",
        children: "Colocated Jujutsu/Git repos"
      }), " for more information."]
    }), "\n", jsxs(_components.h3, {
      id: "default-remotes-for-jj-git-fetch-and-jj-git-push",
      children: ["Default remotes for ", jsx(_components.code, {
        children: "jj git fetch"
      }), " and ", jsx(_components.code, {
        children: "jj git push"
      })]
    }), "\n", jsxs(_components.p, {
      children: ["By default, if a single remote exists it is used for ", jsx(_components.code, {
        children: "jj git fetch"
      }), " and ", jsx(_components.code, {
        children: "jj git push"
      }), "; however if multiple remotes exist, the default remote is assumed to be\nnamed ", jsx(_components.code, {
        children: '"origin"'
      }), ", just like in Git. Sometimes this is undesirable, e.g. when you\nwant to fetch from a different remote than you push to, such as a GitHub fork."]
    }), "\n", jsxs(_components.p, {
      children: ["To change this behavior, you can modify the ", jsx(_components.a, {
        href: "#config-files-and-toml",
        children: "repository\nconfiguration"
      }), " variable ", jsx(_components.code, {
        children: "git.fetch"
      }), ", which can be a\nsingle remote, or a list of remotes to fetch from multiple places:"]
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
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
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
              children: " config"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " set"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --repo"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " git.fetch"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "upstream"'
            })]
          }), "\n", jsxs(_components.span, {
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
              children: " config"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " set"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --repo"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " git.fetch"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ` '["origin", "upstream"]'`
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["By default, the specified remote names matches exactly. You can also use a\n", jsx(_components.a, {
        href: "revsets#string-patterns",
        children: "string pattern"
      }), " to select remotes using patterns:"]
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
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
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
              children: " config"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " set"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --repo"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " git.fetch"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "glob:*"'
            })]
          }), "\n", jsxs(_components.span, {
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
              children: " config"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " set"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --repo"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " git.fetch"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ` '["glob:remote*", "glob:upstream*"]'`
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Similarly, you can also set the variable ", jsx(_components.code, {
        children: "git.push"
      }), " to cause ", jsx(_components.code, {
        children: "jj git push"
      }), " to\npush to a different remote:"]
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
              children: " config"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " set"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --repo"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " git.push"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "github"'
            })]
          })
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Note that unlike ", jsx(_components.code, {
        children: "git.fetch"
      }), ", ", jsx(_components.code, {
        children: "git.push"
      }), " can currently only be a single remote.\nThis is not a hard limitation, and could be changed in the future if there is\ndemand."]
    }), "\n", jsx(_components.h3, {
      id: "automatic-local-bookmark-creation",
      children: "Automatic local bookmark creation"
    }), "\n", jsxs(_components.p, {
      children: ["When ", jsx(_components.code, {
        children: "jj"
      }), " imports a new remote-tracking bookmark from Git, it can also create a\nlocal bookmark with the same name. This feature is disabled by default because it\nmay be undesirable in some repositories, e.g.:"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "There is a remote with a lot of historical bookmarks that you don't\nwant to be exported to the colocated Git repo."
      }), "\n", jsx(_components.li, {
        children: "There are multiple remotes with conflicting views of that bookmark,\nresulting in an unhelpful conflicted state."
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["You can enable this behavior by setting ", jsx(_components.code, {
        children: "git.auto-local-bookmark"
      }), " like so,"]
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
              children: "git"
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
              children: "auto-local-bookmark = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["This setting is applied only to new remote bookmarks. Existing remote bookmarks\ncan be tracked individually by using ", jsx(_components.code, {
        children: "jj bookmark track"
      }), "/", jsx(_components.code, {
        children: "untrack"
      }), " commands."]
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
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# import feature1 bookmark and start tracking it"
            })
          }), "\n", jsxs(_components.span, {
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
              children: " bookmark"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " track"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " feature1@origin"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# delete local gh-pages bookmark and stop tracking it"
            })
          }), "\n", jsxs(_components.span, {
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
              children: " bookmark"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " delete"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " gh-pages"
            })]
          }), "\n", jsxs(_components.span, {
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
              children: " bookmark"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " untrack"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " gh-pages@upstream"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.h3, {
      id: "automatic-local-bookmark-creation-on-jj-git-clone",
      children: ["Automatic local bookmark creation on ", jsx(_components.code, {
        children: "jj git clone"
      })]
    }), "\n", jsxs(_components.p, {
      children: ["When cloning a new Git repository, ", jsx(_components.code, {
        children: "jj"
      }), " by default creates a local bookmark\ntracking the default remote bookmark (such as ", jsx(_components.code, {
        children: "main"
      }), " for ", jsx(_components.code, {
        children: "main@origin"
      }), ".) If you\naren't going to update the ", jsx(_components.code, {
        children: "main"
      }), " bookmark locally, the tracking bookmark isn't\nnecessary."]
    }), "\n", jsx(_components.p, {
      children: "This behavior can be disabled by"
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
              children: "git"
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
              children: "track-default-bookmark-on-clone = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "false"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "abandon-commits-that-became-unreachable-in-git",
      children: "Abandon commits that became unreachable in Git"
    }), "\n", jsxs(_components.p, {
      children: ["By default, when ", jsx(_components.code, {
        children: "jj"
      }), " imports refs from Git, it will look for commits that used\nto be ", jsx(_components.a, {
        href: "https://git-scm.com/docs/gitglossary/#Documentation/gitglossary.txt-aiddefreachableareachable",
        children: "reachable"
      }), " but no longer are reachable. Those commits will\nthen be abandoned, and any descendant commits will be rebased off of them (as\nusual when commits are abandoned). You can disable this behavior and instead\nleave the Git-unreachable commits in your repo by setting:"]
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
              children: "git"
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
              children: "abandon-unreachable-commits = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "false"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "allow-pushing-new-bookmarks",
      children: "Allow pushing new bookmarks"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj git push"
      }), " does not push newly-created bookmarks by default.\nIf you do not want to specify ", jsx(_components.code, {
        children: "--allow-new"
      }), " every time you have created a new\nbookmark, you may want to allow new bookmarks to be pushed by default:"]
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
              children: "git"
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
              children: "push-new-bookmarks = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "true"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "generated-bookmark-names-on-push",
      children: "Generated bookmark names on push"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj git push --change"
      }), ' generates bookmark names with a prefix of "push-" by\ndefault. You can pick a different prefix and formatting by setting the\n', jsx(_components.code, {
        children: "templates.git_push_bookmark"
      }), " template. For example:"]
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
              children: "templates"
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
              children: "git_push_bookmark = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: `'"martinvonz/push-" ++ change_id.short()'`
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["This template should include expressions like ", jsx(_components.code, {
        children: "change_id"
      }), " to generate unique and\nstable bookmark."]
    }), "\n", jsx(_components.h3, {
      id: "set-of-private-commits",
      children: "Set of private commits"
    }), "\n", jsxs(_components.p, {
      children: ["You can configure the set of private commits by setting ", jsx(_components.code, {
        children: "git.private-commits"
      }), " to\na revset. The value is a revset of commits that Jujutsu will refuse to push. If\nunset, all commits are eligible to be pushed."]
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
              children: "git"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# Prevent pushing work in progress or anything explicitly labeled "private"'
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "private-commits = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: `"description(glob:'wip:*') | description(glob:'private:*')"`
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["If a commit is in ", jsx(_components.code, {
        children: "git.private-commits"
      }), " but is already on the remote, then it is\nnot considered a private commit. Commits that are immutable are also excluded\nfrom the private set."]
    }), "\n", jsx(_components.p, {
      children: "Private commits prevent their descendants from being pushed, since doing so\nwould require pushing the private commit as well."
    }), "\n", jsx(_components.h3, {
      id: "git-subprocessing-behavior",
      children: "Git subprocessing behavior"
    }), "\n", jsxs(_components.p, {
      children: ["Git remote interactions are handled by spawning a ", jsx(_components.code, {
        children: "git"
      }), " subprocess.\nIf ", jsx(_components.code, {
        children: "git"
      }), " is not on your OS path, or you want to specify a particular binary,\nyou can:"]
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
              children: "git"
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
              children: "executable-path = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"/path/to/git"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h2, {
      id: "merge-settings",
      children: "Merge settings"
    }), "\n", jsx(_components.h3, {
      id: "granularity-of-hunks",
      children: "Granularity of hunks"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj"
      }), " by default resolves content conflicts by splitting text into line-level\nhunks and merge them. This can be configured to split hunks further into\nword-level hunks."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "line"
        }), ": split into line hunks (default)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "word"
        }), ": split into word hunks"]
      }), "\n"]
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
              children: "merge"
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
              children: "hunk-level = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"line"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h2, {
      id: "filesystem-monitor",
      children: "Filesystem monitor"
    }), "\n", jsxs(_components.p, {
      children: ['In large repositories, it may be beneficial to use a "filesystem monitor" to\ntrack changes to the working copy. This allows ', jsx(_components.code, {
        children: "jj"
      }), " to take working copy\nsnapshots without having to rescan the entire working copy."]
    }), "\n", jsxs(_components.p, {
      children: ["This is governed by the ", jsx(_components.code, {
        children: "fsmonitor.backend"
      }), " option. Currently, the valid values\nare ", jsx(_components.code, {
        children: '"none"'
      }), " or ", jsx(_components.code, {
        children: '"watchman"'
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "watchman",
      children: "Watchman"
    }), "\n", jsxs(_components.p, {
      children: ["To configure the Watchman filesystem monitor, set\n", jsx(_components.code, {
        children: 'fsmonitor.backend = "watchman"'
      }), ". Ensure that you have ", jsx(_components.a, {
        href: "https://facebook.github.io/watchman/docs/install",
        children: "installed the Watchman\nexecutable on your system"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["You can configure ", jsx(_components.code, {
        children: "jj"
      }), " to use watchman triggers to automatically create\nsnapshots on filesystem changes by setting\n", jsx(_components.code, {
        children: "fsmonitor.watchman.register-snapshot-trigger = true"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["You can check whether Watchman is enabled and whether it is installed correctly\nusing ", jsx(_components.code, {
        children: "jj debug watchman status"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["Note: ", jsx(_components.code, {
        children: "watchman"
      }), " heavily uses ", jsx(_components.code, {
        children: "inotify"
      }), " and sets up a user watch per-file. On\nlarge repositories, this may cause ", jsx(_components.code, {
        children: "watchman"
      }), " to fail and commands like\n", jsx(_components.code, {
        children: "jj status"
      }), " to take longer than expected. If you experience this run\n", jsx(_components.code, {
        children: "jj debug watchman status"
      }), " and tune your ", jsx(_components.code, {
        children: "inotify"
      }), " limits."]
    }), "\n", jsx(_components.h2, {
      id: "snapshot-settings",
      children: "Snapshot settings"
    }), "\n", jsx(_components.h3, {
      id: "paths-to-automatically-track",
      children: "Paths to automatically track"
    }), "\n", jsxs(_components.p, {
      children: ["All new files in the working copy that don't match the ignore patterns are\ntracked by default. You can set the ", jsx(_components.code, {
        children: "snapshot.auto-track"
      }), " to set which paths\nget automatically tracked when they're added to the working copy. See the\n", jsx(_components.a, {
        href: "/reference/filesets",
        children: "fileset documentation"
      }), " for the syntax. Files with paths matching\n", jsx(_components.a, {
        href: "/concepts/working-copy#ignored-files",
        children: "ignore files"
      }), " are never tracked automatically."]
    }), "\n", jsxs(_components.p, {
      children: ["If you set ", jsx(_components.code, {
        children: "snapshot.auto-track"
      }), " to a non-default value, untracked files can be\ntracked with ", jsx(_components.code, {
        children: "jj file track"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["You can use ", jsx(_components.code, {
        children: "jj file untrack"
      }), " to untrack a file while keeping it in the working\ncopy. However, first ", jsx(_components.a, {
        href: "/concepts/working-copy#ignored-files",
        children: "ignore"
      }), " them or remove them\nfrom the ", jsx(_components.code, {
        children: "snapshot.auto-track"
      }), " patterns; otherwise they will be immediately\ntracked again."]
    }), "\n", jsx(_components.h3, {
      id: "maximum-size-for-new-files",
      children: "Maximum size for new files"
    }), "\n", jsxs(_components.p, {
      children: ["By default, as an anti-footgun measure, ", jsx(_components.code, {
        children: "jj"
      }), " will refuse to add new files to the\nsnapshot that are larger than a certain size; the default is 1MiB. This can be\nchanged by setting ", jsx(_components.code, {
        children: "snapshot.max-new-file-size"
      }), " to a different value. For\nexample:"]
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
              children: "snapshot"
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
              children: "max-new-file-size = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"10MiB"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# the following is equivalent"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "max-new-file-size = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "10485760"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["The value can be specified using a human readable string with typical suffixes;\n", jsx(_components.code, {
        children: "B"
      }), ", ", jsx(_components.code, {
        children: "MiB"
      }), ", ", jsx(_components.code, {
        children: "GB"
      }), ", etc. By default, if no suffix is provided, or the value is a\nraw integer literal, the value is interpreted as if it were specified in bytes."]
    }), "\n", jsx(_components.p, {
      children: "Files that already exist in the working copy are not subject to this limit."
    }), "\n", jsx(_components.p, {
      children: "Setting this value to zero will disable the limit entirely."
    }), "\n", jsx(_components.h2, {
      id: "working-copy-settings",
      children: "Working copy settings"
    }), "\n", jsx(_components.h3, {
      id: "eol-conversion-settings",
      children: "EOL conversion settings"
    }), "\n", jsxs(_components.p, {
      children: ["This settings serves the same purpose as the ", jsx(_components.a, {
        href: "https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#_core_autocrlf",
        children: jsx(_components.code, {
          children: "core.autocrlf"
        })
      }), " git\nconfig."]
    }), "\n", jsxs(_components.p, {
      children: ["The line endings conversion won't be applied to files detected as binary files\nvia a heuristics", jsx(_components.sup, {
        children: jsx(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "1"
        })
      }), " regardless of the settings. This is similar to git."]
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
              children: "working-copy"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# No EOL conversion. Similar to core.autocrlf = false."
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "eol-conversion = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"none"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Apply CRLF to LF EOL conversion when we check files in the backend store from"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# the local file system but not apply EOL conversion when we check out the code"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# from the backend store to the local file system. Similar to core.autocrlf ="
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# input."
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "eol-conversion = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"input"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# Setting this to "input-output" if you want to have CRLF line endings in your'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# working directory and the repository has LF line endings. Similar to"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# core.autocrlf = true."
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "eol-conversion = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"input-output"'
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.h2, {
      id: "ways-to-specify-jj-config-details",
      children: ["Ways to specify ", jsx(_components.code, {
        children: "jj"
      }), " config: details"]
    }), "\n", jsx(_components.h3, {
      id: "user-config-files",
      children: "User config files"
    }), "\n", jsx(_components.p, {
      children: "An easy way to find the user config file/directory is:"
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
              children: " config"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " path"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --user"
            })]
          })
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["On all platforms, the user's global ", jsx(_components.code, {
        children: "jj"
      }), " configurations are by default loaded in\nthe following precedence order (with later configs overriding earlier ones):"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: "$HOME/.jjconfig.toml"
        })
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "<PLATFORM_SPECIFIC>/jj/config.toml"
        }), " (preferred)"]
      }), "\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: "<PLATFORM_SPECIFIC>/jj/conf.d/*.toml"
        })
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["where ", jsx(_components.code, {
        children: "$HOME"
      }), " represents the user's home directory (", jsx(_components.code, {
        children: "%USERPROFILE%"
      }), " on Windows),\nand ", jsx(_components.code, {
        children: "<PLATFORM_SPECIFIC>"
      }), " represents the platform-specific configuration\ndirectory shown in the table below. The platform-specific location is\nrecommended for better integration with platform services."]
    }), "\n", jsxs(_components.p, {
      children: ["The files in the ", jsx(_components.code, {
        children: "conf.d"
      }), " directory are loaded in lexicographic order. This allows\nconfigs to be split across multiple files and combines well\nwith ", jsx(_components.a, {
        href: "#conditional-variables",
        children: "Conditional Variables"
      }), "."]
    }), "\n", jsxs(_components.table, {
      children: [jsx(_components.thead, {
        children: jsxs(_components.tr, {
          children: [jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Platform"
          }), jsxs(_components.th, {
            style: {
              textAlign: "left"
            },
            children: ["Location of ", jsx(_components.code, {
              children: "<PLATFORM_SPECIFIC>"
            }), " dir"]
          }), jsx(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Example config file location"
          })]
        })
      }), jsxs(_components.tbody, {
        children: [jsxs(_components.tr, {
          children: [jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Linux and macOS"
          }), jsxs(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [jsx(_components.code, {
              children: "$XDG_CONFIG_HOME"
            }), " or ", jsx(_components.code, {
              children: "$HOME/.config"
            })]
          }), jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsx(_components.code, {
              children: "/home/alice/.config/jj/config.toml"
            })
          })]
        }), jsxs(_components.tr, {
          children: [jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Windows"
          }), jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsx(_components.code, {
              children: "{FOLDERID_RoamingAppData}"
            })
          }), jsx(_components.td, {
            style: {
              textAlign: "left"
            },
            children: jsx(_components.code, {
              children: "C:\\Users\\Alice\\AppData\\Roaming\\jj\\config.toml"
            })
          })]
        })]
      })]
    }), "\n", jsxs(_components.p, {
      children: ["On macOS, jj used to put the user config in ", jsx(_components.code, {
        children: "~/Library/Application Support"
      }), ",\nand jj will still look there for backwards compatibility purposes; this is\nconsidered a deprecated location, and you should use the new default\n", jsx(_components.code, {
        children: "XDG_CONFIG_HOME"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["The location of the ", jsx(_components.code, {
        children: "jj"
      }), " user config files/directories can also be overridden with the\n", jsx(_components.code, {
        children: "JJ_CONFIG"
      }), " environment variable. If it is not empty, it will be used instead\nof any configuration files in the default locations. If it is a path to a TOML\nfile, then that file will be loaded instead. If it is a path to a directory,\nthen all the TOML files in that directory will be loaded in lexicographic order\nand merged. Multiple paths can be specified by separating them with a\nplatform-specific path separator (", jsx(_components.code, {
        children: ":"
      }), " on Unix-like systems, ", jsx(_components.code, {
        children: ";"
      }), " on Windows)."]
    }), "\n", jsxs(_components.p, {
      children: ["For example, the following could be used to run ", jsx(_components.code, {
        children: "jj"
      }), " without loading any user configs:"]
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "JJ_CONFIG"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " log"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "       # Ignores any settings specified in the config file."
            })]
          })
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "json-schema-support",
      children: "JSON Schema Support"
    }), "\n", jsx(_components.p, {
      children: "Many popular editors support TOML file syntax highlighting and validation. To\nenable schema validation in your editor, add this line at the top of your TOML\nconfig files:"
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
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "#:schema https://jj-vcs.github.io/jj/latest/config-schema.json"
            })
          })
        })
      })
    }), "\n", jsx(_components.p, {
      children: "This enables features like:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Autocomplete for config keys"
      }), "\n", jsx(_components.li, {
        children: "Type checking of values"
      }), "\n", jsx(_components.li, {
        children: "Documentation on hover"
      }), "\n", jsx(_components.li, {
        children: "Validation of settings"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "Here are some popular editors with TOML schema validation support:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "VS Code"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: ["Install ", jsx(_components.a, {
              href: "https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml",
              children: "Even Better TOML"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "Neovim/Vim"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: ["Use with ", jsx(_components.a, {
              href: "https://github.com/neovim/nvim-lspconfig",
              children: "nvim-lspconfig"
            }), " and ", jsx(_components.a, {
              href: "https://github.com/tamasfe/taplo",
              children: "taplo"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "Helix"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: ["Install ", jsx(_components.a, {
              href: "https://github.com/tamasfe/taplo",
              children: "taplo"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "JetBrains IDEs (IntelliJ, PyCharm, etc)"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: ["Install ", jsx(_components.a, {
              href: "https://plugins.jetbrains.com/plugin/8195-toml",
              children: "TOML"
            }), " plugin"]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "Emacs"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: ["Install ", jsx(_components.a, {
              href: "https://github.com/emacs-lsp/lsp-mode",
              children: "lsp-mode"
            }), " and ", jsx(_components.a, {
              href: "https://github.com/dryman/toml-mode.el",
              children: "toml-mode"
            })]
          }), "\n", jsxs(_components.li, {
            children: ["Configure ", jsx(_components.a, {
              href: "https://github.com/tamasfe/taplo",
              children: "taplo"
            }), " as the LSP server"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "specifying-config-on-the-command-line",
      children: "Specifying config on the command-line"
    }), "\n", jsxs(_components.p, {
      children: ["You can use one or more ", jsx(_components.code, {
        children: "--config"
      }), "/", jsx(_components.code, {
        children: "--config-file"
      }), " options on the command line\nto specify additional configuration settings. This overrides settings defined in\nconfig files or environment variables. For example,"]
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
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Must not have spaces around the `=`"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --config"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ui.color=always"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --config"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ui.diff-editor=meld"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " split"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Config value should be specified as a TOML expression. If string value isn't\nenclosed by any TOML constructs (such as array notation), quotes can be omitted.\nHere is an example with more advanced TOML constructs:"
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
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Single quotes and the '\\' are interpreted by the shell and assume a Unix shell"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Double quotes are passed to jj and are parsed as TOML syntax"
            })
          }), "\n", jsxs(_components.span, {
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
              children: " --config"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " \\"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: `  'template-aliases."format_timestamp(timestamp)"="""timestamp.format("%Y-%m-%d %H:%M %:::z")"""'`
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["To load an entire TOML document, use ", jsx(_components.code, {
        children: "--config-file"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --config-file=extra-config.toml"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " log"
            })]
          })
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "conditional-variables",
      children: "Conditional variables"
    }), "\n", jsxs(_components.p, {
      children: ["You can conditionally enable config variables by using ", jsx(_components.code, {
        children: "--when"
      }), "."]
    }), "\n", jsxs(_components.h4, {
      id: "using---scope-tables",
      children: ["Using ", jsx(_components.code, {
        children: "[[--scope]]"
      }), " tables"]
    }), "\n", jsxs(_components.p, {
      children: ["Variables defined in ", jsx(_components.code, {
        children: "[[--scope]]"
      }), " tables are expanded to the root table.\n", jsx(_components.code, {
        children: "--when"
      }), " specifies the condition to enable the scope table."]
    }), "\n", jsx(_components.p, {
      children: "If no conditions are specified, the table is always enabled. If multiple\nconditions are specified, their intersection is used."
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
              children: "user"
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
              children: "name = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"YOUR NAME"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "email = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"YOUR_DEFAULT_EMAIL@example.com"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# override user.email if the repository is located under ~/oss"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "--scope"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]]"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--when.repositories = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"~/oss"'
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
              children: "["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "--scope"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "user"
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
              children: "email = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"YOUR_OSS_EMAIL@example.org"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# disable pagination for `jj status`, use `delta` for `jj diff` and `jj show`"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "--scope"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]]"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--when.commands = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"status"'
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
              children: "["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "--scope"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ui"
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
              children: "paginate = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"never"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "[["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "--scope"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]]"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--when.commands = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"diff"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"show"'
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
              children: "["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "--scope"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "ui"
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
              children: "pager = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"delta"'
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h4, {
      id: "using-multiple-files",
      children: "Using multiple files"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "--when"
      }), " can also be used on the top level of a TOML file, which is convenient\nwhen splitting your config across multiple files.\nThe behavior of conditions are the same as when using ", jsx(_components.code, {
        children: "[[--scope]]"
      }), " tables."]
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
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# In $XDG_CONFIG_HOME/jj/config.toml"
            })
          }), "\n", jsxs(_components.span, {
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
              children: "user"
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
              children: "name = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"YOUR NAME"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "email = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"YOUR_DEFAULT_EMAIL@example.com"'
            })]
          })]
        })
      })
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
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# In $XDG_CONFIG_HOME/jj/conf.d/work.toml"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "--when.repositories = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"~/the/work/repo"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
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
              children: "user"
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
              children: "email = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"YOUR_WORK_EMAIL@workplace.com"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
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
              children: "work = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: `"heads(::@ ~ description(exact:''))::"`
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
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
              children: "aliases"
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
              children: "wip = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"log"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"-r"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"work"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h4, {
      id: "available-condition-keys",
      children: "Available condition keys"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "--when.repositories"
          }), ": List of paths to match the repository path prefix."]
        }), "\n", jsxs(_components.p, {
          children: ["Paths should be absolute. Each path component (directory or file name, drive\nletter, etc.) is compared case-sensitively on all platforms. A path starting\nwith ", jsx(_components.code, {
            children: "~"
          }), " is expanded to the home directory. On Windows, directory separator may\nbe either ", jsx(_components.code, {
            children: "\\"
          }), " or ", jsx(_components.code, {
            children: "/"
          }), ". (Beware that ", jsx(_components.code, {
            children: "\\"
          }), " needs escape in double-quoted strings.)"]
        }), "\n", jsxs(_components.p, {
          children: ["Use ", jsx(_components.code, {
            children: "jj root"
          }), " to see the workspace root directory. Note that the repository path\nis in the main workspace if you're using multiple workspaces with ", jsx(_components.code, {
            children: "jj workspace"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.code, {
            children: "--when.commands"
          }), ": List of subcommands to match."]
        }), "\n", jsx(_components.p, {
          children: "Subcommands are space-separated and matched by prefix."
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
                  children: "--when.commands = ["
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"file"'
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]        "
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# matches `jj file show`, `jj file list`, etc"
                })]
              }), "\n", jsxs(_components.span, {
                className: "line",
                children: [jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "--when.commands = ["
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"file show"'
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "]   "
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# matches `jj file show` but *NOT* `jj file list`"
                })]
              }), "\n", jsxs(_components.span, {
                className: "line",
                children: [jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "--when.commands = ["
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"file"'
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: ", "
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: '"log"'
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#24292E",
                    "--shiki-dark": "#E1E4E8"
                  },
                  children: "] "
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "# matches `jj file` *OR* `jj log` (or subcommand of either)"
                })]
              })]
            })
          })
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.section, {
      "data-footnotes": true,
      className: "footnotes",
      children: [jsx(_components.h2, {
        className: "sr-only",
        id: "footnote-label",
        children: "Footnotes"
      }), "\n", jsxs(_components.ol, {
        children: ["\n", jsxs(_components.li, {
          id: "user-content-fn-1",
          children: ["\n", jsxs(_components.p, {
            children: ["To detect if a file is binary, Jujutsu currently checks if there is NULL\nbyte in the file which is different from the algorithm of\n", jsx(_components.a, {
              href: "https://github.com/GitoxideLabs/gitoxide/blob/073487b38ed40bcd7eb45dc110ae1ce84f9275a9/gix-filter/src/eol/utils.rs#L98-L100",
              children: jsx(_components.code, {
                children: "gitoxide"
              })
            }), " or ", jsx(_components.a, {
              href: "https://github.com/git/git/blob/f1ca98f609f9a730b9accf24e5558a10a0b41b6c/convert.c#L94-L103",
              children: jsx(_components.code, {
                children: "git"
              })
            }), ". Jujutsu\ndoesn't plan to align the binary detection logic with git. ", jsx(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              className: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
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
//# sourceMappingURL=config-RdVj9Tf4.mjs.map
