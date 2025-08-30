import { jsx, jsxs, Fragment } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "How to Contribute"
};
let extractedReferences = [{
  "href": "https://cla.developers.google.com/"
}, {
  "href": "https://www.conventionalcommits.org/en/v1.0.0/"
}, {
  "href": "https://cbea.ms/git-commit/"
}, {
  "href": "https://help.github.com/articles/about-pull-requests/"
}, {
  "href": "/contributing/paid-contributors"
}, {
  "href": "https://opensource.google/conduct/"
}, {
  "href": "/contributing/design-docs"
}, {
  "href": "/contributing/design-docs#process"
}, {
  "href": "https://github.com/jj-vcs/jj/issues/new?template=bug_report.md"
}, {
  "href": "https://jj-vcs.github.io/jj/prerelease"
}, {
  "href": "https://github.com/jj-vcs/jj/tree/main/docs"
}, {
  "href": "#previewing-the-html-documentation"
}, {
  "href": "https://github.com/jj-vcs/jj/tree/main/cli/src/commands"
}, {
  "href": "https://doc.rust-lang.org/book/"
}, {
  "href": "https://www.rust-lang.org/learn"
}, {
  "href": "https://google.github.io/comprehensive-rust/"
}, {
  "href": "/contributing/style-guide"
}, {
  "href": "https://www.rust-lang.org/tools/install"
}, {
  "href": "https://insta.rs/"
}, {
  "href": "https://dystroy.org/bacon/"
}, {
  "href": "https://github.com/rui314/mold"
}, {
  "href": "https://github.com/rui314/mold#how-to-use"
}, {
  "href": "https://mise.jdx.dev/"
}, {
  "href": "https://mise.jdx.dev/configuration.html#mise-toml"
}, {
  "href": "https://jj-vcs.github.io/jj/"
}, {
  "href": "https://github.com/astral-sh/uv/releases"
}, {
  "href": "https://docs.astral.sh/uv/getting-started/installation/"
}, {
  "href": "http://127.0.0.1:8000"
}, {
  "href": "https://jj-vcs.github.io/jj"
}, {
  "href": "https://jj-vcs.github.io/jj/latest"
}, {
  "href": "https://github.com/jimporter/mike"
}, {
  "href": "#previewing-the-html-documentation"
}, {
  "href": "https://jj-vcs.github.com/jj"
}, {
  "href": "https://jj-vcs.github.com/jj"
}, {
  "href": "https://github.com/mstange/samply"
}];
let structuredData = {
  "contents": [{
    "heading": "policies",
    "content": "We'd love to accept your patches and contributions to this project. There are\njust a few small guidelines you need to follow."
  }, {
    "heading": "contributor-license-agreement",
    "content": "Contributions to this project must be accompanied by a Contributor License\nAgreement. You (or your employer) retain the copyright to your contribution;\nthis simply gives us permission to use and redistribute your contributions as\npart of the project. Head over to https://cla.developers.google.com/ to see\nyour current agreements on file or to sign a new one."
  }, {
    "heading": "contributor-license-agreement",
    "content": "You generally only need to submit a CLA once, so if you've already submitted one\n(even if it was for a different project), you probably don't need to do it\nagain."
  }, {
    "heading": "commit-guidelines",
    "content": "Unlike many GitHub projects (but like many VCS projects), we care more about the\ncontents of commits than about the contents of PRs. We review each commit\nseparately, and we don't squash-merge the PR (so please manually squash any\nfixup commits before sending for review)."
  }, {
    "heading": "commit-guidelines",
    "content": "Each commit should ideally do one thing. For example, if you need to refactor a\nfunction in order to add a new feature cleanly, put the refactoring in one\ncommit and the new feature in a different commit. If the refactoring itself\nconsists of many parts, try to separate out those into separate commits. You can\nuse jj split to do it if you didn't realize ahead of time how it should be\nsplit up. Include tests and documentation in the same commit as the code they\ntest and document."
  }, {
    "heading": "commit-guidelines",
    "content": "The commit message should describe the changes in the commit;\nthe PR description can even be empty, but feel free to include a personal\nmessage. We start the commit message with <topic>:  and don't use\nconventional commits. This means if\nyou modified a command in the CLI, use its name as the topic, e.g.\nnext/prev: <your-modification> or conflicts: <your-modification>. We don't\ncurrently have a specific guidelines on what to write in the topic field, but\nthe reviewers will help you provide a topic if you have difficulties choosing\nit. How to Write a Git Commit Message is a good\nguide if you're new to writing good commit messages. We are not particularly\nstrict about the style, but please do explain the reason for the change unless\nit's obvious."
  }, {
    "heading": "code-reviews",
    "content": "All submissions, including submissions by project members, require review. We\nuse GitHub pull requests for this purpose. Consult\nGitHub Help for more\ninformation on using pull requests."
  }, {
    "heading": "code-reviews",
    "content": "When you address comments on a PR, don't make the changes in a commit on top (as\nis typical on GitHub). Instead, please make the changes in the appropriate\ncommit. You can do that by creating a new commit on top of the initial commit\n(jj new <commit>) and then squash in the changes when you're done (jj squash).\njj git push\nwill automatically force-push the bookmark."
  }, {
    "heading": "code-reviews",
    "content": "When your first PR has been approved, we typically invite you to the\njj-vcs/contributors team to give you contributor access,\nso you can address any remaining minor comments and then merge the PR yourself\nwhen you're ready. If you realize that some comments require non-trivial\nchanges, please ask your reviewer to take another look."
  }, {
    "heading": "code-reviews",
    "content": "If your employer pays anyone (not necessarily you) to contribute to Jujutsu,\nplease make sure your GitHub username is recorded.\nTo avoid conflicts of interest, please don't merge a PR that has only been\napproved by someone from the same organization. Similarly, as a reviewer, there\nis no need to approve your coworkers' PRs, since the author should await an\napproval from someone else anyway. It is of course still appreciated if you\nreview and comment on their PRs. Also, if the PR seems completely unrelated to\nyour company's interests, do feel free to approve it."
  }, {
    "heading": "community-guidelines",
    "content": "This project follows Google's Open Source Community\nGuidelines."
  }, {
    "heading": "contributing-large-patches",
    "content": "Before sending a PR for a large change which designs/redesigns or reworks an\nexisting component, we require an architecture review from multiple\nstakeholders, which we do with Design Docs, see the\nprocess here."
  }, {
    "heading": "contributing-to-the-documentation",
    "content": "We appreciate bug\nreports\nabout any problems, however small, lurking in our documentation\nwebsite or in the jj help <command> docs.\nIf a part of the bug report template does not apply, you can\njust delete it."
  }, {
    "heading": "contributing-to-the-documentation",
    "content": `Before reporting a problem with the documentation website, we'd appreciate it if
you could check that the problem still exists in the "prerelease" version of the
documentation (as opposed to the docs for one of the released versions of jj).
You can use the version switcher in the top-left of the website to do so.`
  }, {
    "heading": "contributing-to-the-documentation",
    "content": "If you are willing to make a PR fixing a documentation problem, even better!"
  }, {
    "heading": "contributing-to-the-documentation",
    "content": "The documentation website sources are Markdown files located in the docs/\ndirectory. You do not need to\nknow Rust to work with them. See below for instructions on how to preview the\nHTML docs as you edit the Markdown files.\nDoing so is optional, but recommended."
  }, {
    "heading": "contributing-to-the-documentation",
    "content": 'The jj help docs are sourced from the "docstring" comments inside the Rust\nsources, currently from the cli/src/commands\ndirectory. Working\non them requires setting up a Rust development environment, as described\nbelow, and may occasionally require adjusting a test.'
  }, {
    "heading": "learning-rust",
    "content": 'In addition to the Rust Book and the other\nexcellent resources at https://www.rust-lang.org/learn, we recommend the\n"Comprehensive Rust" mini-course\nfor an overview, especially if you are familiar with C++.'
  }, {
    "heading": "style-guide",
    "content": "See here."
  }, {
    "heading": "setting-up-a-development-environment",
    "content": "To develop jj, the mandatory steps are simply\nto install Rust (the default\ninstaller options are fine), clone the repository, and use cargo build\n, cargo fmt,\ncargo clippy --workspace --all-targets, and\ncargo test --workspace. If you are preparing a PR, there are some additional\nrecommended steps."
  }, {
    "heading": "summary",
    "content": "One-time setup:"
  }, {
    "heading": "summary",
    "content": "rustup toolchain add nightly  # wanted for 'rustfmt'\nrustup toolchain add 1.85     # also specified in Cargo.toml\ncargo install --locked bacon\ncargo install --locked cargo-insta\ncargo install --locked cargo-nextest"
  }, {
    "heading": "summary",
    "content": "During development (adapt according to your preference):"
  }, {
    "heading": "summary",
    "content": "bacon clippy-all\ncargo +nightly fmt # Occasionally\ncargo nextest run --workspace # Occasionally\ncargo insta test --workspace --test-runner nextest # Occasionally"
  }, {
    "heading": "summary",
    "content": "!!! warning"
  }, {
    "heading": "summary",
    "content": "Build artifacts from debug builds and especially from repeated\ninvocations of cargo test can quickly take up 10s of GB of disk space.\nCargo will happily use up your entire hard drive. If this happens, run\ncargo clean."
  }, {
    "heading": "explanation",
    "content": "These are listed roughly in order of decreasing importance."
  }, {
    "heading": "explanation",
    "content": "Nearly any change to jj's CLI will require writing or updating snapshot\ntests that use the insta crate. To make this\nconvenient, install the cargo-insta binary.\nUse cargo insta test --workspace to run tests,\nand cargo insta review --workspace to update the snapshot tests.\nThe --workspace flag is needed to run the tests on all crates; by default,\nonly the crate in the current directory is tested."
  }, {
    "heading": "explanation",
    "content": "GitHub CI checks require that the code is formatted with the nightly\nversion of rustfmt. To do this on your computer, install the nightly\ntoolchain and use cargo +nightly fmt."
  }, {
    "heading": "explanation",
    "content": 'Your code will be rejected if it cannot be compiled with the minimal\nsupported version of Rust ("MSRV"). Currently, jj follows a rather\ncasual MSRV policy: "The current rustc stable version, minus one."\nAs of this writing, that version is 1.85.0.'
  }, {
    "heading": "explanation",
    "content": "Your code needs to pass cargo clippy. You can also\nuse cargo +nightly clippy if you wish to see more warnings."
  }, {
    "heading": "explanation",
    "content": "You may also want to install and use bacon,\nto automatically build, check, and / or run tests."
  }, {
    "heading": "explanation",
    "content": "To run tests more quickly, use cargo nextest run --workspace. To\nuse nextest with insta, use cargo insta test --workspace\n--test-runner nextest."
  }, {
    "heading": "explanation",
    "content": "On Linux, you may be able to speed up nextest even further by using\nthe mold linker, as explained below."
  }, {
    "heading": "configuring-jj-fix-to-run-rustfmt",
    "content": "Run this in the jj repo:"
  }, {
    "heading": "configuring-jj-fix-to-run-rustfmt",
    "content": `Note: users of Nix and direnv should drop the "+nightly" argument above
since the devShell is already configured to pull in a nightly version of
rustfmt:jj config set --repo fix.tools.rustfmt '{ command = ["rustfmt"], patterns = ["glob:**/*.rs"] }'`
  }, {
    "heading": "using-mold-for-faster-tests-on-linux",
    "content": "On a machine with a multi-core CPU, one way to speed up\ncargo nextest on Linux is to use the multi-threaded mold\nlinker. This linker may help\nif, currently, your CPU is underused while Rust is linking test\nbinaries. Before proceeding with mold, you can check whether this is\nan issue worth solving using a system monitoring tool such as htop."
  }, {
    "heading": "using-mold-for-faster-tests-on-linux",
    "content": "mold is packaged for many distributions. On Debian, for example,\nsudo apt install mold should just work."
  }, {
    "heading": "using-mold-for-faster-tests-on-linux",
    "content": "A simple way to use mold is via the -run option, e.g.:"
  }, {
    "heading": "using-mold-for-faster-tests-on-linux",
    "content": "There will be no indication that a different linker is used, except for\nhigher CPU usage while linking and, hopefully, faster completion. You\ncan verify that mold was indeed used by running\nreadelf -p .comment target/debug/jj."
  }, {
    "heading": "using-mold-for-faster-tests-on-linux",
    "content": 'There are also ways of having Rust use mold by default, see the "How\nto use" instructions.'
  }, {
    "heading": "using-mold-for-faster-tests-on-linux",
    "content": "On recent versions of MacOS, the default linker Rust uses is already\nmulti-threaded. It should use all the CPU cores without any configuration."
  }, {
    "heading": "visual-studio-code",
    "content": "We recommend at least these settings:"
  }, {
    "heading": "alternative-development-setup-with-mise",
    "content": "An experimental development setup is available using\nmise. If you try it, file bugs,\nPRs, or tell us on Discord/IRC/discussions if you experience problems\nor if this config is too inflexible. If we can make it work for most\nplatforms and most people's needs, including people previously unfamiliar\nwith mise, we may make mise the recommended way to set up a development\nenvironment."
  }, {
    "heading": "alternative-development-setup-with-mise",
    "content": "This tool manages the necessary dependencies for you, eliminating the need for\na separate setup process. mise automatically installs the required tools when\nthey are needed."
  }, {
    "heading": "alternative-development-setup-with-mise",
    "content": "Here are some of the commands you may find yourself using frequently during\ndevelopment:"
  }, {
    "heading": "alternative-development-setup-with-mise",
    "content": "mise test: Runs all tests."
  }, {
    "heading": "alternative-development-setup-with-mise",
    "content": 'mise test <string>: Runs tests that contain a specific string. For\nexample, mise test squash would run tests with "squash" in their name.'
  }, {
    "heading": "alternative-development-setup-with-mise",
    "content": "mise build: Compiles jj."
  }, {
    "heading": "alternative-development-setup-with-mise",
    "content": "mise build:release: Compiles jj in release mode."
  }, {
    "heading": "alternative-development-setup-with-mise",
    "content": "mise build:docs: Builds the documentation for jj."
  }, {
    "heading": "alternative-development-setup-with-mise",
    "content": "For a complete list of all available tasks, you can run mise tasks or review\nthe configuration file at .config/mise.toml."
  }, {
    "heading": "alternative-development-setup-with-mise",
    "content": "You can customize this configuration using\na mise.local.toml file."
  }, {
    "heading": "previewing-the-html-documentation",
    "content": "The documentation for jj is automatically published online at\nhttps://jj-vcs.github.io/jj/."
  }, {
    "heading": "previewing-the-html-documentation",
    "content": "When editing documentation, you should check your changes locally \u2014 especially\nif you are adding a new page, or doing a major rewrite."
  }, {
    "heading": "install-uv",
    "content": "The only thing you need is uv (version 0.5.1 or newer)."
  }, {
    "heading": "install-uv",
    "content": "uv is a Python project manager written in Rust. It will fetch the right Python\nversion and the dependencies needed to build the docs. Install it like so:"
  }, {
    "heading": "install-uv",
    "content": '=== "macOS/Linux"'
  }, {
    "heading": "install-uv",
    "content": "!!! note\nIf you don't have ~/.local/bin in your PATH, the installer will\nmodify your shell profile. To avoid it:"
  }, {
    "heading": "install-uv",
    "content": '=== "Windows"'
  }, {
    "heading": "install-uv",
    "content": '=== "Homebrew"'
  }, {
    "heading": "install-uv",
    "content": '=== "Cargo"'
  }, {
    "heading": "install-uv",
    "content": '=== "Other options"'
  }, {
    "heading": "install-uv",
    "content": "Directly download the binaries from GitHub: uv releases."
  }, {
    "heading": "install-uv",
    "content": "Even more options: Installing uv."
  }, {
    "heading": "build-the-docs",
    "content": "To build the docs, run while inside the jj repository:"
  }, {
    "heading": "build-the-docs",
    "content": "Open http://127.0.0.1:8000 in your browser to see the docs."
  }, {
    "heading": "build-the-docs",
    "content": "As you edit the .md files in docs/, the website should be rebuilt and\nreloaded in your browser automatically."
  }, {
    "heading": "build-the-docs",
    "content": '!!! note "If the docs are not updating"\nCheck the terminal from which you ran uv run mkdocs serve for any build\nerrors or warnings. Warnings about "GET /versions.json HTTP/1.1" code 404\nare expected and harmless.'
  }, {
    "heading": "offline-distribution",
    "content": "To build the rendered docs for offline distribution or to view them from your file\nsystem, run while inside the jj repository:"
  }, {
    "heading": "building-the-entire-website",
    "content": "!!! tip\nBuilding the entire website is not usually necessary. If you are editing\ndocumentation, the previous section is enough."
  }, {
    "heading": "building-the-entire-website",
    "content": "These instructions are relevant if you are working on the versioning of the\ndocumentation that we currently do with mike."
  }, {
    "heading": "building-the-entire-website",
    "content": "The full jj website includes the documentation for several jj versions\n(prerelease, latest release, and the older releases). The top-level\nURL https://jj-vcs.github.io/jj redirects to\nhttps://jj-vcs.github.io/jj/latest, which in turn redirects to\nthe docs for the last stable version."
  }, {
    "heading": "building-the-entire-website",
    "content": "The different versions of documentation are managed and deployed with\nmike, which can be run with\nuv run mike."
  }, {
    "heading": "building-the-entire-website",
    "content": "On a POSIX system or WSL, one way to build the entire website is as follows (on\nWindows, you'll need to understand and adapt the shell script):"
  }, {
    "heading": "building-the-entire-website",
    "content": "Check out jj (jj git clone), cloned from your fork of jj (e.g.\ngithub.com/jjfan/jj). You can also use a pure Git repo if you prefer."
  }, {
    "heading": "building-the-entire-website",
    "content": "Make sure github.com/jjfan/jj includes the gh-pages bookmark of the jj repo\nand run git fetch origin gh-pages."
  }, {
    "heading": "building-the-entire-website",
    "content": "Go to the GitHub repository settings, enable GitHub Pages, and configure them\nto use the gh-pages bookmark (this is usually the default)."
  }, {
    "heading": "building-the-entire-website",
    "content": "Install uv as explained in Previewing the HTML\ndocumentation, and run the same sh script\nthat is used in GitHub CI (details below):"
  }, {
    "heading": "building-the-entire-website",
    "content": "This should build the version of the docs from the current commit,\ndeploy it as a new commit to the gh-pages bookmark,\nand push the gh-pages bookmark to the origin."
  }, {
    "heading": "building-the-entire-website",
    "content": "Now, you should be able to see the full website, including your latest changes\nto the prerelease version, at https://jjfan.github.io/jj/prerelease/."
  }, {
    "heading": "building-the-entire-website",
    "content": "(Optional) The previous steps actually only rebuild\nhttps://jjfan.github.io/jj/prerelease/ and its alias\nhttps://jjfan.github.io/jj/main/. If you'd like to test out version switching\nback and forth, you can also rebuild the docs for the latest release as follows."
  }, {
    "heading": "building-the-entire-website",
    "content": '(Optional) When you are done, you may want to reset the gh-pages bookmark to the\nsame spot as it is upstream. If you configured the "upstream" remote,\nthis can be done with:'
  }, {
    "heading": "building-the-entire-website",
    "content": "If you want to preserve some of the changes you made, you can do jj bookmark\n    set my-changes -r gh-pages BEFORE running the above commands."
  }, {
    "heading": "explanation-of-the-docs-build-deploy-script",
    "content": "The script sets up a few environment variables and invokes uv run mike deploy\nwith some default arguments and whatever arguments were passed to\ndocs-build-deploy. Run uv run mike help deploy to find out what the\narguments do."
  }, {
    "heading": "explanation-of-the-docs-build-deploy-script",
    "content": "If you need to do something more complicated, you can use uv run mike\n... commands. You can also edit the gh-pages bookmark directly, but take care\nto avoid files that will be overwritten by future invocations of mike. Then,\nyou can submit a PR based on the gh-pages bookmark of\nhttps://jj-vcs.github.com/jj (instead of the usual main bookmark)."
  }, {
    "heading": "explanation-of-the-docs-build-deploy-script",
    "content": "Previously, the version switcher would not work unless the value of the\nsite_url config in mkdocs.yml matched the actual URL the site is being\nserved from. This bug should now be fixed, but if you are not serving the site\nfrom https://jj-vcs.github.com/jj and something fails weirdly, you might want\nto adjust the site_url to something like https://jjfan.github.io/jj."
  }, {
    "heading": "modifying-protobuffers-this-is-not-common",
    "content": "Occasionally, you may need to change the .proto files that define jj's data\nstorage format. In this case, you will need to add a few steps to the above\nworkflow."
  }, {
    "heading": "modifying-protobuffers-this-is-not-common",
    "content": "Install the protoc compiler. This usually means either apt-get install\nprotobuf-compiler or downloading an official release. The\nprost library docs have additional advice."
  }, {
    "heading": "modifying-protobuffers-this-is-not-common",
    "content": "Run cargo run -p gen-protos regularly (or after every edit to a .proto\nfile). This is the same as running cargo run from lib/gen-protos. The\ngen-protos binary will use the prost-build library to compile the\n.proto files into .rs files."
  }, {
    "heading": "modifying-protobuffers-this-is-not-common",
    "content": "If you are adding a new .proto file, you will need to edit the list of\nthese files in lib/gen-protos/src/main.rs."
  }, {
    "heading": "modifying-protobuffers-this-is-not-common",
    "content": "The .rs files generated from .proto files are included in the repository,\nand there is a GitHub CI check that will complain if they do not match."
  }, {
    "heading": "logging",
    "content": "You can print internal jj logs using JJ_LOG. It acts like the RUST_LOG\nenvironment variable, frequent in Rust codebases, and accepts one or more\ndirectives. You can also run JJ_LOG=debug jj to get debug level logs\nenabled for all targets. You can also use the --debug global option, which\nturns on debug log level for jj-lib and jj-cli only."
  }, {
    "heading": "profiling",
    "content": "One easy-to-use sampling profiler\nis samply. For example:"
  }, {
    "heading": "profiling",
    "content": "Then just open the link it prints."
  }, {
    "heading": "profiling",
    "content": "Another option is to use the instrumentation we've added manually (using\ntracing::instrument) in various places. For example:"
  }, {
    "heading": "profiling",
    "content": "Then go to https://ui.perfetto.dev/ in Chrome and load /tmp/trace.json from\nthere."
  }],
  "headings": [{
    "id": "policies",
    "content": "Policies"
  }, {
    "id": "contributor-license-agreement",
    "content": "Contributor License Agreement"
  }, {
    "id": "commit-guidelines",
    "content": "Commit guidelines"
  }, {
    "id": "code-reviews",
    "content": "Code reviews"
  }, {
    "id": "community-guidelines",
    "content": "Community Guidelines"
  }, {
    "id": "contributing-large-patches",
    "content": "Contributing large patches"
  }, {
    "id": "contributing-to-the-documentation",
    "content": "Contributing to the documentation"
  }, {
    "id": "learning-rust",
    "content": "Learning Rust"
  }, {
    "id": "style-guide",
    "content": "Style guide"
  }, {
    "id": "setting-up-a-development-environment",
    "content": "Setting up a development environment"
  }, {
    "id": "summary",
    "content": "Summary"
  }, {
    "id": "explanation",
    "content": "Explanation"
  }, {
    "id": "configuring-jj-fix-to-run-rustfmt",
    "content": "Configuring jj fix to run rustfmt"
  }, {
    "id": "using-mold-for-faster-tests-on-linux",
    "content": "Using mold for faster tests on Linux"
  }, {
    "id": "editor-setup",
    "content": "Editor setup"
  }, {
    "id": "visual-studio-code",
    "content": "Visual Studio Code"
  }, {
    "id": "zed",
    "content": "Zed"
  }, {
    "id": "helix",
    "content": "Helix"
  }, {
    "id": "alternative-development-setup-with-mise",
    "content": "Alternative development setup with mise"
  }, {
    "id": "previewing-the-html-documentation",
    "content": "Previewing the HTML documentation"
  }, {
    "id": "install-uv",
    "content": "Install uv"
  }, {
    "id": "build-the-docs",
    "content": "Build the docs"
  }, {
    "id": "offline-distribution",
    "content": "Offline distribution"
  }, {
    "id": "building-the-entire-website",
    "content": "Building the entire website"
  }, {
    "id": "explanation-of-the-docs-build-deploy-script",
    "content": "Explanation of the docs-build-deploy script"
  }, {
    "id": "modifying-protobuffers-this-is-not-common",
    "content": "Modifying protobuffers (this is not common)"
  }, {
    "id": "logging",
    "content": "Logging"
  }, {
    "id": "profiling",
    "content": "Profiling"
  }]
};
const toc = [{
  depth: 2,
  url: "#policies",
  title: jsx(Fragment, {
    children: "Policies"
  })
}, {
  depth: 3,
  url: "#contributor-license-agreement",
  title: jsx(Fragment, {
    children: "Contributor License Agreement"
  })
}, {
  depth: 3,
  url: "#commit-guidelines",
  title: jsx(Fragment, {
    children: "Commit guidelines"
  })
}, {
  depth: 3,
  url: "#code-reviews",
  title: jsx(Fragment, {
    children: "Code reviews"
  })
}, {
  depth: 3,
  url: "#community-guidelines",
  title: jsx(Fragment, {
    children: "Community Guidelines"
  })
}, {
  depth: 2,
  url: "#contributing-large-patches",
  title: jsx(Fragment, {
    children: "Contributing large patches"
  })
}, {
  depth: 2,
  url: "#contributing-to-the-documentation",
  title: jsx(Fragment, {
    children: "Contributing to the documentation"
  })
}, {
  depth: 2,
  url: "#learning-rust",
  title: jsx(Fragment, {
    children: "Learning Rust"
  })
}, {
  depth: 2,
  url: "#style-guide",
  title: jsx(Fragment, {
    children: "Style guide"
  })
}, {
  depth: 2,
  url: "#setting-up-a-development-environment",
  title: jsx(Fragment, {
    children: "Setting up a development environment"
  })
}, {
  depth: 3,
  url: "#summary",
  title: jsx(Fragment, {
    children: "Summary"
  })
}, {
  depth: 3,
  url: "#explanation",
  title: jsx(Fragment, {
    children: "Explanation"
  })
}, {
  depth: 3,
  url: "#configuring-jj-fix-to-run-rustfmt",
  title: jsxs(Fragment, {
    children: ["Configuring ", jsx("code", {
      children: "jj fix"
    }), " to run ", jsx("code", {
      children: "rustfmt"
    })]
  })
}, {
  depth: 3,
  url: "#using-mold-for-faster-tests-on-linux",
  title: jsxs(Fragment, {
    children: ["Using ", jsx("code", {
      children: "mold"
    }), " for faster tests on Linux"]
  })
}, {
  depth: 3,
  url: "#editor-setup",
  title: jsx(Fragment, {
    children: "Editor setup"
  })
}, {
  depth: 4,
  url: "#visual-studio-code",
  title: jsx(Fragment, {
    children: "Visual Studio Code"
  })
}, {
  depth: 4,
  url: "#zed",
  title: jsx(Fragment, {
    children: "Zed"
  })
}, {
  depth: 4,
  url: "#helix",
  title: jsx(Fragment, {
    children: "Helix"
  })
}, {
  depth: 3,
  url: "#alternative-development-setup-with-mise",
  title: jsxs(Fragment, {
    children: ["Alternative development setup with ", jsx("code", {
      children: "mise"
    })]
  })
}, {
  depth: 2,
  url: "#previewing-the-html-documentation",
  title: jsx(Fragment, {
    children: "Previewing the HTML documentation"
  })
}, {
  depth: 3,
  url: "#install-uv",
  title: jsxs(Fragment, {
    children: ["Install ", jsx("code", {
      children: "uv"
    })]
  })
}, {
  depth: 3,
  url: "#build-the-docs",
  title: jsx(Fragment, {
    children: "Build the docs"
  })
}, {
  depth: 4,
  url: "#offline-distribution",
  title: jsx(Fragment, {
    children: "Offline distribution"
  })
}, {
  depth: 2,
  url: "#building-the-entire-website",
  title: jsx(Fragment, {
    children: "Building the entire website"
  })
}, {
  depth: 3,
  url: "#explanation-of-the-docs-build-deploy-script",
  title: jsxs(Fragment, {
    children: ["Explanation of the ", jsx("code", {
      children: "docs-build-deploy"
    }), " script"]
  })
}, {
  depth: 2,
  url: "#modifying-protobuffers-this-is-not-common",
  title: jsx(Fragment, {
    children: "Modifying protobuffers (this is not common)"
  })
}, {
  depth: 2,
  url: "#logging",
  title: jsx(Fragment, {
    children: "Logging"
  })
}, {
  depth: 2,
  url: "#profiling",
  title: jsx(Fragment, {
    children: "Profiling"
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
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.h2, {
      id: "policies",
      children: "Policies"
    }), "\n", jsx(_components.p, {
      children: "We'd love to accept your patches and contributions to this project. There are\njust a few small guidelines you need to follow."
    }), "\n", jsx(_components.h3, {
      id: "contributor-license-agreement",
      children: "Contributor License Agreement"
    }), "\n", jsxs(_components.p, {
      children: ["Contributions to this project must be accompanied by a Contributor License\nAgreement. You (or your employer) retain the copyright to your contribution;\nthis simply gives us permission to use and redistribute your contributions as\npart of the project. Head over to ", jsx(_components.a, {
        href: "https://cla.developers.google.com/",
        children: "https://cla.developers.google.com/"
      }), " to see\nyour current agreements on file or to sign a new one."]
    }), "\n", jsx(_components.p, {
      children: "You generally only need to submit a CLA once, so if you've already submitted one\n(even if it was for a different project), you probably don't need to do it\nagain."
    }), "\n", jsx(_components.h3, {
      id: "commit-guidelines",
      children: "Commit guidelines"
    }), "\n", jsx(_components.p, {
      children: "Unlike many GitHub projects (but like many VCS projects), we care more about the\ncontents of commits than about the contents of PRs. We review each commit\nseparately, and we don't squash-merge the PR (so please manually squash any\nfixup commits before sending for review)."
    }), "\n", jsxs(_components.p, {
      children: ["Each commit should ideally do one thing. For example, if you need to refactor a\nfunction in order to add a new feature cleanly, put the refactoring in one\ncommit and the new feature in a different commit. If the refactoring itself\nconsists of many parts, try to separate out those into separate commits. You can\nuse ", jsx(_components.code, {
        children: "jj split"
      }), " to do it if you didn't realize ahead of time how it should be\nsplit up. Include tests and documentation in the same commit as the code they\ntest and document."]
    }), "\n", jsxs(_components.p, {
      children: ["The commit message should describe the changes in the commit;\nthe PR description can even be empty, but feel free to include a personal\nmessage. We start the commit message with ", jsx(_components.code, {
        children: "<topic>: "
      }), " and don't use\n", jsx(_components.a, {
        href: "https://www.conventionalcommits.org/en/v1.0.0/",
        children: "conventional commits"
      }), ". This means if\nyou modified a command in the CLI, use its name as the topic, e.g.\n", jsx(_components.code, {
        children: "next/prev: <your-modification>"
      }), " or ", jsx(_components.code, {
        children: "conflicts: <your-modification>"
      }), ". We don't\ncurrently have a specific guidelines on what to write in the topic field, but\nthe reviewers will help you provide a topic if you have difficulties choosing\nit. ", jsx(_components.a, {
        href: "https://cbea.ms/git-commit/",
        children: "How to Write a Git Commit Message"
      }), " is a good\nguide if you're new to writing good commit messages. We are not particularly\nstrict about the style, but please do explain the reason for the change unless\nit's obvious."]
    }), "\n", jsx(_components.h3, {
      id: "code-reviews",
      children: "Code reviews"
    }), "\n", jsxs(_components.p, {
      children: ["All submissions, including submissions by project members, require review. We\nuse GitHub pull requests for this purpose. Consult\n", jsx(_components.a, {
        href: "https://help.github.com/articles/about-pull-requests/",
        children: "GitHub Help"
      }), " for more\ninformation on using pull requests."]
    }), "\n", jsxs(_components.p, {
      children: ["When you address comments on a PR, don't make the changes in a commit on top (as\nis typical on GitHub). Instead, please make the changes in the appropriate\ncommit. You can do that by creating a new commit on top of the initial commit\n(", jsx(_components.code, {
        children: "jj new <commit>"
      }), ") and then squash in the changes when you're done (", jsx(_components.code, {
        children: "jj squash"
      }), ").\n", jsx(_components.code, {
        children: "jj git push"
      }), "\nwill automatically force-push the bookmark."]
    }), "\n", jsxs(_components.p, {
      children: ["When your first PR has been approved, we typically invite you to the\n", jsx(_components.code, {
        children: "jj-vcs/contributors"
      }), " team to give you contributor access,\nso you can address any remaining minor comments and then merge the PR yourself\nwhen you're ready. If you realize that some comments require non-trivial\nchanges, please ask your reviewer to take another look."]
    }), "\n", jsxs(_components.p, {
      children: ["If your employer pays anyone (not necessarily you) to contribute to Jujutsu,\nplease make sure your GitHub username is ", jsx(_components.a, {
        href: "/contributing/paid-contributors",
        children: "recorded"
      }), ".\nTo avoid conflicts of interest, please don't merge a PR that has only been\napproved by someone from the same organization. Similarly, as a reviewer, there\nis no need to approve your coworkers' PRs, since the author should await an\napproval from someone else anyway. It is of course still appreciated if you\nreview and comment on their PRs. Also, if the PR seems completely unrelated to\nyour company's interests, do feel free to approve it."]
    }), "\n", jsx(_components.h3, {
      id: "community-guidelines",
      children: "Community Guidelines"
    }), "\n", jsxs(_components.p, {
      children: ["This project follows ", jsx(_components.a, {
        href: "https://opensource.google/conduct/",
        children: "Google's Open Source Community\nGuidelines"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "contributing-large-patches",
      children: "Contributing large patches"
    }), "\n", jsxs(_components.p, {
      children: ["Before sending a PR for a large change which designs/redesigns or reworks an\nexisting component, we require an architecture review from multiple\nstakeholders, which we do with ", jsx(_components.a, {
        href: "/contributing/design-docs",
        children: "Design Docs"
      }), ", see the\n", jsx(_components.a, {
        href: "/contributing/design-docs#process",
        children: "process here"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "contributing-to-the-documentation",
      children: "Contributing to the documentation"
    }), "\n", jsxs(_components.p, {
      children: ["We appreciate ", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/issues/new?template=bug_report.md",
        children: "bug\nreports"
      }), "\nabout any problems, however small, lurking in ", jsx(_components.a, {
        href: "https://jj-vcs.github.io/jj/prerelease",
        children: "our documentation\nwebsite"
      }), " or in the ", jsx(_components.code, {
        children: "jj help <command>"
      }), " docs.\nIf a part of the bug report template does not apply, you can\njust delete it."]
    }), "\n", jsxs(_components.p, {
      children: [`Before reporting a problem with the documentation website, we'd appreciate it if
you could check that the problem still exists in the "prerelease" version of the
documentation (as opposed to the docs for one of the released versions of `, jsx(_components.code, {
        children: "jj"
      }), ").\nYou can use the version switcher in the top-left of the website to do so."]
    }), "\n", jsx(_components.p, {
      children: "If you are willing to make a PR fixing a documentation problem, even better!"
    }), "\n", jsxs(_components.p, {
      children: ["The documentation website sources are Markdown files located in the ", jsxs(_components.a, {
        href: "https://github.com/jj-vcs/jj/tree/main/docs",
        children: [jsx(_components.code, {
          children: "docs/"
        }), "\ndirectory"]
      }), ". You do not need to\nknow Rust to work with them. See below for ", jsx(_components.a, {
        href: "#previewing-the-html-documentation",
        children: "instructions on how to preview the\nHTML docs"
      }), " as you edit the Markdown files.\nDoing so is optional, but recommended."]
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "jj help"
      }), ' docs are sourced from the "docstring" comments inside the Rust\nsources, currently from the ', jsxs(_components.a, {
        href: "https://github.com/jj-vcs/jj/tree/main/cli/src/commands",
        children: [jsx(_components.code, {
          children: "cli/src/commands"
        }), "\ndirectory"]
      }), ". Working\non them requires setting up a Rust development environment, as described\nbelow, and may occasionally require adjusting a test."]
    }), "\n", jsx(_components.h2, {
      id: "learning-rust",
      children: "Learning Rust"
    }), "\n", jsxs(_components.p, {
      children: ["In addition to the ", jsx(_components.a, {
        href: "https://doc.rust-lang.org/book/",
        children: "Rust Book"
      }), " and the other\nexcellent resources at ", jsx(_components.a, {
        href: "https://www.rust-lang.org/learn",
        children: "https://www.rust-lang.org/learn"
      }), ", we recommend the\n", jsx(_components.a, {
        href: "https://google.github.io/comprehensive-rust/",
        children: '"Comprehensive Rust" mini-course'
      }), "\nfor an overview, especially if you are familiar with C++."]
    }), "\n", jsx(_components.h2, {
      id: "style-guide",
      children: "Style guide"
    }), "\n", jsxs(_components.p, {
      children: ["See ", jsx(_components.a, {
        href: "/contributing/style-guide",
        children: "here"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "setting-up-a-development-environment",
      children: "Setting up a development environment"
    }), "\n", jsxs(_components.p, {
      children: ["To develop ", jsx(_components.code, {
        children: "jj"
      }), ", the mandatory steps are simply\nto ", jsx(_components.a, {
        href: "https://www.rust-lang.org/tools/install",
        children: "install Rust"
      }), " (the default\ninstaller options are fine), clone the repository, and use ", jsx(_components.code, {
        children: "cargo build"
      }), "\n, ", jsx(_components.code, {
        children: "cargo fmt"
      }), ",\n", jsx(_components.code, {
        children: "cargo clippy --workspace --all-targets"
      }), ", and\n", jsx(_components.code, {
        children: "cargo test --workspace"
      }), ". If you are preparing a PR, there are some additional\nrecommended steps."]
    }), "\n", jsx(_components.h3, {
      id: "summary",
      children: "Summary"
    }), "\n", jsx(_components.p, {
      children: "One-time setup:"
    }), "\n", jsx(_components.p, {
      children: "rustup toolchain add nightly  # wanted for 'rustfmt'\nrustup toolchain add 1.85     # also specified in Cargo.toml\ncargo install --locked bacon\ncargo install --locked cargo-insta\ncargo install --locked cargo-nextest"
    }), "\n", jsx(_components.p, {
      children: "During development (adapt according to your preference):"
    }), "\n", jsx(_components.p, {
      children: "bacon clippy-all\ncargo +nightly fmt # Occasionally\ncargo nextest run --workspace # Occasionally\ncargo insta test --workspace --test-runner nextest # Occasionally"
    }), "\n", jsx(_components.p, {
      children: "!!! warning"
    }), "\n", jsxs(_components.p, {
      children: ["Build artifacts from debug builds and especially from repeated\ninvocations of ", jsx(_components.code, {
        children: "cargo test"
      }), " can quickly take up 10s of GB of disk space.\nCargo will happily use up your entire hard drive. If this happens, run\n", jsx(_components.code, {
        children: "cargo clean"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "explanation",
      children: "Explanation"
    }), "\n", jsx(_components.p, {
      children: "These are listed roughly in order of decreasing importance."
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["Nearly any change to ", jsx(_components.code, {
            children: "jj"
          }), "'s CLI will require writing or updating snapshot\ntests that use the ", jsx(_components.a, {
            href: "https://insta.rs/",
            children: jsx(_components.code, {
              children: "insta"
            })
          }), " crate. To make this\nconvenient, install the ", jsx(_components.code, {
            children: "cargo-insta"
          }), " binary.\nUse ", jsx(_components.code, {
            children: "cargo insta test --workspace"
          }), " to run tests,\nand ", jsx(_components.code, {
            children: "cargo insta review --workspace"
          }), " to update the snapshot tests.\nThe ", jsx(_components.code, {
            children: "--workspace"
          }), " flag is needed to run the tests on all crates; by default,\nonly the crate in the current directory is tested."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["GitHub CI checks require that the code is formatted with the ", jsx(_components.em, {
            children: "nightly"
          }), "\nversion of ", jsx(_components.code, {
            children: "rustfmt"
          }), ". To do this on your computer, install the nightly\ntoolchain and use ", jsx(_components.code, {
            children: "cargo +nightly fmt"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ['Your code will be rejected if it cannot be compiled with the minimal\nsupported version of Rust ("MSRV"). Currently, ', jsx(_components.code, {
            children: "jj"
          }), ' follows a rather\ncasual MSRV policy: "The current ', jsx(_components.code, {
            children: "rustc"
          }), ' stable version, minus one."\nAs of this writing, that version is ', jsx(_components.strong, {
            children: "1.85.0"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["Your code needs to pass ", jsx(_components.code, {
            children: "cargo clippy"
          }), ". You can also\nuse ", jsx(_components.code, {
            children: "cargo +nightly clippy"
          }), " if you wish to see more warnings."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["You may also want to install and use ", jsx(_components.a, {
            href: "https://dystroy.org/bacon/",
            children: jsx(_components.code, {
              children: "bacon"
            })
          }), ",\nto automatically build, check, and / or run tests."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["To run tests more quickly, use ", jsx(_components.code, {
            children: "cargo nextest run --workspace"
          }), ". To\nuse ", jsx(_components.code, {
            children: "nextest"
          }), " with ", jsx(_components.code, {
            children: "insta"
          }), ", use ", jsx(_components.code, {
            children: "cargo insta test --workspace --test-runner nextest"
          }), "."]
        }), "\n", jsxs(_components.p, {
          children: ["On Linux, you may be able to speed up ", jsx(_components.code, {
            children: "nextest"
          }), " even further by using\nthe ", jsx(_components.code, {
            children: "mold"
          }), " linker, as explained below."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "configuring-jj-fix-to-run-rustfmt",
      children: ["Configuring ", jsx(_components.code, {
        children: "jj fix"
      }), " to run ", jsx(_components.code, {
        children: "rustfmt"
      })]
    }), "\n", jsx(_components.p, {
      children: "Run this in the jj repo:"
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
              children: " fix.tools.rustfmt"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ` '{ command = ["rustfmt", "+nightly"], patterns = ["glob:**/*.rs"] }'`
            })]
          })
        })
      })
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsxs(_components.p, {
        children: ["Note: users of Nix and ", jsx(_components.code, {
          children: "direnv"
        }), " should drop the ", jsx(_components.code, {
          children: '"+nightly"'
        }), " argument above\nsince the devShell is already configured to pull in a nightly version of\nrustfmt:"]
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
                children: " fix.tools.rustfmt"
              }), jsx(_components.span, {
                style: {
                  "--shiki-light": "#032F62",
                  "--shiki-dark": "#9ECBFF"
                },
                children: ` '{ command = ["rustfmt"], patterns = ["glob:**/*.rs"] }'`
              })]
            })
          })
        })
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "using-mold-for-faster-tests-on-linux",
      children: ["Using ", jsx(_components.code, {
        children: "mold"
      }), " for faster tests on Linux"]
    }), "\n", jsxs(_components.p, {
      children: ["On a machine with a multi-core CPU, one way to speed up\n", jsx(_components.code, {
        children: "cargo nextest"
      }), " on Linux is to use the multi-threaded ", jsxs(_components.a, {
        href: "https://github.com/rui314/mold",
        children: [jsx(_components.code, {
          children: "mold"
        }), "\nlinker"]
      }), ". This linker may help\nif, currently, your CPU is underused while Rust is linking test\nbinaries. Before proceeding with ", jsx(_components.code, {
        children: "mold"
      }), ", you can check whether this is\nan issue worth solving using a system monitoring tool such as ", jsx(_components.code, {
        children: "htop"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "mold"
      }), " is packaged for many distributions. On Debian, for example,\n", jsx(_components.code, {
        children: "sudo apt install mold"
      }), " should just work."]
    }), "\n", jsxs(_components.p, {
      children: ["A simple way to use ", jsx(_components.code, {
        children: "mold"
      }), " is via the ", jsx(_components.code, {
        children: "-run"
      }), " option, e.g.:"]
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
              children: "mold"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -run"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " cargo"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " insta"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " test"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --workspace"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --test-runner"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " nextest"
            })]
          })
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["There will be no indication that a different linker is used, except for\nhigher CPU usage while linking and, hopefully, faster completion. You\ncan verify that ", jsx(_components.code, {
        children: "mold"
      }), " was indeed used by running\n", jsx(_components.code, {
        children: "readelf -p .comment target/debug/jj"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["There are also ways of having Rust use ", jsx(_components.code, {
        children: "mold"
      }), " by default, see the ", jsx(_components.a, {
        href: "https://github.com/rui314/mold#how-to-use",
        children: '"How\nto use" instructions'
      }), "."]
    }), "\n", jsx(_components.p, {
      children: "On recent versions of MacOS, the default linker Rust uses is already\nmulti-threaded. It should use all the CPU cores without any configuration."
    }), "\n", jsx(_components.h3, {
      id: "editor-setup",
      children: "Editor setup"
    }), "\n", jsx(_components.h4, {
      id: "visual-studio-code",
      children: "Visual Studio Code"
    }), "\n", jsx(_components.p, {
      children: "We recommend at least these settings:"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "files.insertFinalNewline"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
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
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "files.trimTrailingWhitespace"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
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
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "[rust]"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "files.trimTrailingWhitespace"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "false"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsx(_components.h4, {
      id: "zed",
      children: "Zed"
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// .zed/settings.json"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "{"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "ensure_final_newline_on_save"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
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
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "remove_trailing_whitespace_on_save"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
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
              children: ","
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "languages"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "    // We don't use a formatter for Markdown files, so format_on_save would just"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "    // mess with others' docs"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "Markdown"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": { "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"format_on_save"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"off"'
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
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "Rust"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "format_on_save"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"on"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "      // Avoid removing trailing spaces within multi-line string literals"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "remove_trailing_whitespace_on_save"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "false"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  },"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  "lsp"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '    "rust-analyzer"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '      "initialization_options"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": {"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "        // If you are working on docs and don't need `cargo check`, uncomment"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "        // this option:"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "        //"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '        //   "checkOnSave": false,'
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "        // Use nightly `rustfmt`, equivalent to `cargo +nightly fmt`"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '        "rustfmt"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": { "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"extraArgs"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ": ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"+nightly"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "] }"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      }"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  }"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsx(_components.h4, {
      id: "helix",
      children: "Helix"
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
              children: "# .helix/languages.toml"
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
              children: "language-server"
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
              children: "rust-analyzer"
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
              children: "config"
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
              children: "extraArgs = ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"+nightly"'
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
    }), "\n", jsxs(_components.h3, {
      id: "alternative-development-setup-with-mise",
      children: ["Alternative development setup with ", jsx(_components.code, {
        children: "mise"
      })]
    }), "\n", jsxs(_components.p, {
      children: ["An experimental development setup is available using\n", jsx(_components.a, {
        href: "https://mise.jdx.dev/",
        children: jsx(_components.code, {
          children: "mise"
        })
      }), ". If you try it, file bugs,\nPRs, or tell us on Discord/IRC/discussions if you experience problems\nor if this config is too inflexible. If we can make it work for most\nplatforms and most people's needs, including people previously unfamiliar\nwith ", jsx(_components.code, {
        children: "mise"
      }), ", we may make ", jsx(_components.code, {
        children: "mise"
      }), " the recommended way to set up a development\nenvironment."]
    }), "\n", jsxs(_components.p, {
      children: ["This tool manages the necessary dependencies for you, eliminating the need for\na separate setup process. ", jsx(_components.code, {
        children: "mise"
      }), " automatically installs the required tools when\nthey are needed."]
    }), "\n", jsx(_components.p, {
      children: "Here are some of the commands you may find yourself using frequently during\ndevelopment:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "mise test"
        }), ": Runs all tests."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "mise test <string>"
        }), ": Runs tests that contain a specific string. For\nexample, ", jsx(_components.code, {
          children: "mise test squash"
        }), ' would run tests with "squash" in their name.']
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "mise build"
        }), ": Compiles ", jsx(_components.code, {
          children: "jj"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "mise build:release"
        }), ": Compiles ", jsx(_components.code, {
          children: "jj"
        }), " in release mode."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "mise build:docs"
        }), ": Builds the documentation for ", jsx(_components.code, {
          children: "jj"
        }), "."]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["For a complete list of all available tasks, you can run ", jsx(_components.code, {
        children: "mise tasks"
      }), " or review\nthe configuration file at ", jsx(_components.code, {
        children: ".config/mise.toml"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["You can customize this configuration using\n", jsxs(_components.a, {
        href: "https://mise.jdx.dev/configuration.html#mise-toml",
        children: ["a ", jsx(_components.code, {
          children: "mise.local.toml"
        }), " file"]
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "previewing-the-html-documentation",
      children: "Previewing the HTML documentation"
    }), "\n", jsxs(_components.p, {
      children: ["The documentation for ", jsx(_components.code, {
        children: "jj"
      }), " is automatically published online at\n", jsx(_components.a, {
        href: "https://jj-vcs.github.io/jj/",
        children: "https://jj-vcs.github.io/jj/"
      }), "."]
    }), "\n", jsx(_components.p, {
      children: "When editing documentation, you should check your changes locally \u2014 especially\nif you are adding a new page, or doing a major rewrite."
    }), "\n", jsxs(_components.h3, {
      id: "install-uv",
      children: ["Install ", jsx(_components.code, {
        children: "uv"
      })]
    }), "\n", jsxs(_components.p, {
      children: ["The only thing you need is ", jsx(_components.a, {
        href: "https://docs.astral.sh/uv/",
        children: jsx(_components.code, {
          children: "uv"
        })
      }), " (version 0.5.1 or newer)."]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "uv"
      }), " is a Python project manager written in Rust. It will fetch the right Python\nversion and the dependencies needed to build the docs. Install it like so:"]
    }), "\n", jsx(_components.p, {
      children: '=== "macOS/Linux"'
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
              children: "curl"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -LsSf"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://astral.sh/uv/install.sh"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " sh"
            })]
          })
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["!!! note\nIf you don't have ", jsx(_components.code, {
        children: "~/.local/bin"
      }), " in your ", jsx(_components.code, {
        children: "PATH"
      }), ", the installer will\nmodify your shell profile. To avoid it:"]
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
              children: "curl"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -LsSf"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://astral.sh/uv/install.sh"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " env"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " INSTALLER_NO_MODIFY_PATH="
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " sh"
            })]
          })
        })
      })
    }), "\n", jsx(_components.p, {
      children: '=== "Windows"'
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
              children: "powershell"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -ExecutionPolicy"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ByPass"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -c"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "irm https://astral.sh/uv/install.ps1 | iex"'
            })]
          })
        })
      })
    }), "\n", jsx(_components.p, {
      children: '=== "Homebrew"'
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
              children: "brew"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " install"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " uv"
            })]
          })
        })
      })
    }), "\n", jsx(_components.p, {
      children: '=== "Cargo"'
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
              children: "# This might take a while"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "cargo"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " install"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --git"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://github.com/astral-sh/uv"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " uv"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: '=== "Other options"'
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["Directly download the binaries from GitHub: ", jsx(_components.a, {
          href: "https://github.com/astral-sh/uv/releases",
          children: "uv releases"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: ["Even more options: ", jsx(_components.a, {
          href: "https://docs.astral.sh/uv/getting-started/installation/",
          children: "Installing uv"
        }), "."]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "build-the-docs",
      children: "Build the docs"
    }), "\n", jsxs(_components.p, {
      children: ["To build the docs, run while inside the ", jsx(_components.code, {
        children: "jj"
      }), " repository:"]
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
              children: "uv"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " run"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " mkdocs"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " serve"
            })]
          })
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Open ", jsx(_components.a, {
        href: "http://127.0.0.1:8000",
        children: "http://127.0.0.1:8000"
      }), " in your browser to see the docs."]
    }), "\n", jsxs(_components.p, {
      children: ["As you edit the ", jsx(_components.code, {
        children: ".md"
      }), " files in ", jsx(_components.code, {
        children: "docs/"
      }), ", the website should be rebuilt and\nreloaded in your browser automatically."]
    }), "\n", jsxs(_components.p, {
      children: ['!!! note "If the docs are not updating"\nCheck the terminal from which you ran ', jsx(_components.code, {
        children: "uv run mkdocs serve"
      }), " for any build\nerrors or warnings. Warnings about ", jsx(_components.code, {
        children: '"GET /versions.json HTTP/1.1" code 404'
      }), "\nare expected and harmless."]
    }), "\n", jsx(_components.h4, {
      id: "offline-distribution",
      children: "Offline distribution"
    }), "\n", jsxs(_components.p, {
      children: ["To build the rendered docs for offline distribution or to view them from your file\nsystem, run while inside the ", jsx(_components.code, {
        children: "jj"
      }), " repository:"]
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
              children: "MKDOCS_OFFLINE"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "true"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " uv"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " run"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " mkdocs"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " build"
            })]
          })
        })
      })
    }), "\n", jsx(_components.h2, {
      id: "building-the-entire-website",
      children: "Building the entire website"
    }), "\n", jsx(_components.p, {
      children: "!!! tip\nBuilding the entire website is not usually necessary. If you are editing\ndocumentation, the previous section is enough."
    }), "\n", jsxs(_components.p, {
      children: ["These instructions are relevant if you are working on the versioning of the\ndocumentation that we currently do with ", jsx(_components.code, {
        children: "mike"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["The full ", jsx(_components.code, {
        children: "jj"
      }), " website includes the documentation for several ", jsx(_components.code, {
        children: "jj"
      }), " versions\n(", jsx(_components.code, {
        children: "prerelease"
      }), ", latest release, and the older releases). The top-level\nURL ", jsx(_components.a, {
        href: "https://jj-vcs.github.io/jj",
        children: "https://jj-vcs.github.io/jj"
      }), " redirects to\n", jsx(_components.a, {
        href: "https://jj-vcs.github.io/jj/latest",
        children: "https://jj-vcs.github.io/jj/latest"
      }), ", which in turn redirects to\nthe docs for the last stable version."]
    }), "\n", jsxs(_components.p, {
      children: ["The different versions of documentation are managed and deployed with\n", jsx(_components.a, {
        href: "https://github.com/jimporter/mike",
        children: jsx(_components.code, {
          children: "mike"
        })
      }), ", which can be run with\n", jsx(_components.code, {
        children: "uv run mike"
      }), "."]
    }), "\n", jsx(_components.p, {
      children: "On a POSIX system or WSL, one way to build the entire website is as follows (on\nWindows, you'll need to understand and adapt the shell script):"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["Check out ", jsx(_components.code, {
            children: "jj"
          }), " (", jsx(_components.code, {
            children: "jj git clone"
          }), "), cloned from your fork of ", jsx(_components.code, {
            children: "jj"
          }), " (e.g.\n", jsx(_components.code, {
            children: "github.com/jjfan/jj"
          }), "). You can also use a pure Git repo if you prefer."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["Make sure ", jsx(_components.code, {
            children: "github.com/jjfan/jj"
          }), " includes the ", jsx(_components.code, {
            children: "gh-pages"
          }), " bookmark of the jj repo\nand run ", jsx(_components.code, {
            children: "git fetch origin gh-pages"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["Go to the GitHub repository settings, enable GitHub Pages, and configure them\nto use the ", jsx(_components.code, {
            children: "gh-pages"
          }), " bookmark (this is usually the default)."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["Install ", jsx(_components.code, {
            children: "uv"
          }), " as explained in ", jsx(_components.a, {
            href: "#previewing-the-html-documentation",
            children: "Previewing the HTML\ndocumentation"
          }), ", and run the same ", jsx(_components.code, {
            children: "sh"
          }), " script\nthat is used in GitHub CI (details below):"]
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
                  children: ".github/scripts/docs-build-deploy"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " prerelease"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " main"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --push"
                })]
              })
            })
          })
        }), "\n", jsxs(_components.p, {
          children: ["This should build the version of the docs from the current commit,\ndeploy it as a new commit to the ", jsx(_components.code, {
            children: "gh-pages"
          }), " bookmark,\nand push the ", jsx(_components.code, {
            children: "gh-pages"
          }), " bookmark to the origin."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["Now, you should be able to see the full website, including your latest changes\nto the ", jsx(_components.code, {
            children: "prerelease"
          }), " version, at ", jsx(_components.code, {
            children: "https://jjfan.github.io/jj/prerelease/"
          }), "."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["(Optional) The previous steps actually only rebuild\n", jsx(_components.code, {
            children: "https://jjfan.github.io/jj/prerelease/"
          }), " and its alias\n", jsx(_components.code, {
            children: "https://jjfan.github.io/jj/main/"
          }), ". If you'd like to test out version switching\nback and forth, you can also rebuild the docs for the latest release as follows."]
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
                  children: " new"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " v1.33.1"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6A737D",
                    "--shiki-dark": "#6A737D"
                  },
                  children: "  # Let's say `jj 1.33.1` is the currently the latest release"
                })]
              }), "\n", jsxs(_components.span, {
                className: "line",
                children: [jsx(_components.span, {
                  style: {
                    "--shiki-light": "#6F42C1",
                    "--shiki-dark": "#B392F0"
                  },
                  children: ".github/scripts/docs-build-deploy"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " v1.33.1"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " latest"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --push"
                })]
              })]
            })
          })
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["(Optional) When you are done, you may want to reset the ", jsx(_components.code, {
            children: "gh-pages"
          }), ' bookmark to the\nsame spot as it is upstream. If you configured the "upstream" remote,\nthis can be done with:']
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
                  children: "# This will LOSE any changes you made to `gh-pages`"
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
                  children: " git"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " fetch"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --remote"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " upstream"
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
                  children: " set"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " gh-pages"
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
                  children: " gh-pages@upstream"
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
                  children: " git"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " push"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --remote"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " origin"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#005CC5",
                    "--shiki-dark": "#79B8FF"
                  },
                  children: " --bookmark"
                }), jsx(_components.span, {
                  style: {
                    "--shiki-light": "#032F62",
                    "--shiki-dark": "#9ECBFF"
                  },
                  children: " gh-pages"
                })]
              })]
            })
          })
        }), "\n", jsxs(_components.p, {
          children: ["If you want to preserve some of the changes you made, you can do ", jsx(_components.code, {
            children: "jj bookmark     set my-changes -r gh-pages"
          }), " BEFORE running the above commands."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "explanation-of-the-docs-build-deploy-script",
      children: ["Explanation of the ", jsx(_components.code, {
        children: "docs-build-deploy"
      }), " script"]
    }), "\n", jsxs(_components.p, {
      children: ["The script sets up a few environment variables and invokes ", jsx(_components.code, {
        children: "uv run mike deploy"
      }), "\nwith some default arguments and whatever arguments were passed to\n", jsx(_components.code, {
        children: "docs-build-deploy"
      }), ". Run ", jsx(_components.code, {
        children: "uv run mike help deploy"
      }), " to find out what the\narguments do."]
    }), "\n", jsxs(_components.p, {
      children: ["If you need to do something more complicated, you can use ", jsx(_components.code, {
        children: "uv run mike ..."
      }), " commands. You can also edit the ", jsx(_components.code, {
        children: "gh-pages"
      }), " bookmark directly, but take care\nto avoid files that will be overwritten by future invocations of ", jsx(_components.code, {
        children: "mike"
      }), ". Then,\nyou can submit a PR based on the ", jsx(_components.code, {
        children: "gh-pages"
      }), " bookmark of\n", jsx(_components.a, {
        href: "https://jj-vcs.github.com/jj",
        children: "https://jj-vcs.github.com/jj"
      }), " (instead of the usual ", jsx(_components.code, {
        children: "main"
      }), " bookmark)."]
    }), "\n", jsxs(_components.p, {
      children: ["Previously, the version switcher would not work unless the value of the\n", jsx(_components.code, {
        children: "site_url"
      }), " config in ", jsx(_components.code, {
        children: "mkdocs.yml"
      }), " matched the actual URL the site is being\nserved from. This bug should now be fixed, but if you are not serving the site\nfrom ", jsx(_components.a, {
        href: "https://jj-vcs.github.com/jj",
        children: "https://jj-vcs.github.com/jj"
      }), " and something fails weirdly, you might want\nto adjust the ", jsx(_components.code, {
        children: "site_url"
      }), " to something like ", jsx(_components.code, {
        children: "https://jjfan.github.io/jj"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "modifying-protobuffers-this-is-not-common",
      children: "Modifying protobuffers (this is not common)"
    }), "\n", jsxs(_components.p, {
      children: ["Occasionally, you may need to change the ", jsx(_components.code, {
        children: ".proto"
      }), " files that define jj's data\nstorage format. In this case, you will need to add a few steps to the above\nworkflow."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["Install the ", jsx(_components.code, {
          children: "protoc"
        }), " compiler. This usually means either ", jsx(_components.code, {
          children: "apt-get install protobuf-compiler"
        }), " or downloading ", jsx(_components.a, {
          href: "https://github.com/protocolbuffers/protobuf/releases",
          children: "an official release"
        }), ". The\n", jsx(_components.code, {
          children: "prost"
        }), " ", jsx(_components.a, {
          href: "https://docs.rs/prost-build/latest/prost_build/#sourcing-protoc",
          children: "library docs"
        }), " have additional advice."]
      }), "\n", jsxs(_components.li, {
        children: ["Run ", jsx(_components.code, {
          children: "cargo run -p gen-protos"
        }), " regularly (or after every edit to a ", jsx(_components.code, {
          children: ".proto"
        }), "\nfile). This is the same as running ", jsx(_components.code, {
          children: "cargo run"
        }), " from ", jsx(_components.code, {
          children: "lib/gen-protos"
        }), ". The\n", jsx(_components.code, {
          children: "gen-protos"
        }), " binary will use the ", jsx(_components.code, {
          children: "prost-build"
        }), " library to compile the\n", jsx(_components.code, {
          children: ".proto"
        }), " files into ", jsx(_components.code, {
          children: ".rs"
        }), " files."]
      }), "\n", jsxs(_components.li, {
        children: ["If you are adding a new ", jsx(_components.code, {
          children: ".proto"
        }), " file, you will need to edit the list of\nthese files in ", jsx(_components.code, {
          children: "lib/gen-protos/src/main.rs"
        }), "."]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: ".rs"
      }), " files generated from ", jsx(_components.code, {
        children: ".proto"
      }), " files are included in the repository,\nand there is a GitHub CI check that will complain if they do not match."]
    }), "\n", jsx(_components.h2, {
      id: "logging",
      children: "Logging"
    }), "\n", jsxs(_components.p, {
      children: ["You can print internal jj logs using ", jsx(_components.code, {
        children: "JJ_LOG"
      }), ". It acts like the ", jsx(_components.code, {
        children: "RUST_LOG"
      }), "\nenvironment variable, frequent in Rust codebases, and accepts one or more\n", jsx(_components.a, {
        href: "https://docs.rs/tracing-subscriber/latest/tracing_subscriber/filter/struct.EnvFilter.html#directives",
        children: "directives"
      }), ". You can also run ", jsx(_components.code, {
        children: "JJ_LOG=debug jj"
      }), " to get ", jsx(_components.code, {
        children: "debug"
      }), " level logs\nenabled for all targets. You can also use the ", jsx(_components.code, {
        children: "--debug"
      }), " global option, which\nturns on ", jsx(_components.code, {
        children: "debug"
      }), " log level for ", jsx(_components.code, {
        children: "jj-lib"
      }), " and ", jsx(_components.code, {
        children: "jj-cli"
      }), " only."]
    }), "\n", jsx(_components.h2, {
      id: "profiling",
      children: "Profiling"
    }), "\n", jsxs(_components.p, {
      children: ["One easy-to-use sampling profiler\nis ", jsx(_components.a, {
        href: "https://github.com/mstange/samply",
        children: "samply"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "cargo"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " install"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " samply"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "samply"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " record"
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
              children: " diff"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Then just open the link it prints."
    }), "\n", jsxs(_components.p, {
      children: ["Another option is to use the instrumentation we've added manually (using\n", jsx(_components.code, {
        children: "tracing::instrument"
      }), ") in various places. For example:"]
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
              children: "JJ_TRACE"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "/tmp/trace.json"
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
              children: " diff"
            })]
          })
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Then go to ", jsx(_components.code, {
        children: "https://ui.perfetto.dev/"
      }), " in Chrome and load ", jsx(_components.code, {
        children: "/tmp/trace.json"
      }), " from\nthere."]
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
//# sourceMappingURL=contributing-Cq8EXt-B.mjs.map
