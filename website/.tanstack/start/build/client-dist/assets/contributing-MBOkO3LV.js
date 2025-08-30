import{j as e}from"./main-BCYT0j2h.js";let o={title:"How to Contribute"},r=[{href:"https://cla.developers.google.com/"},{href:"https://www.conventionalcommits.org/en/v1.0.0/"},{href:"https://cbea.ms/git-commit/"},{href:"https://help.github.com/articles/about-pull-requests/"},{href:"/contributing/paid-contributors"},{href:"https://opensource.google/conduct/"},{href:"/contributing/design-docs"},{href:"/contributing/design-docs#process"},{href:"https://github.com/jj-vcs/jj/issues/new?template=bug_report.md"},{href:"https://jj-vcs.github.io/jj/prerelease"},{href:"https://github.com/jj-vcs/jj/tree/main/docs"},{href:"#previewing-the-html-documentation"},{href:"https://github.com/jj-vcs/jj/tree/main/cli/src/commands"},{href:"https://doc.rust-lang.org/book/"},{href:"https://www.rust-lang.org/learn"},{href:"https://google.github.io/comprehensive-rust/"},{href:"/contributing/style-guide"},{href:"https://www.rust-lang.org/tools/install"},{href:"https://insta.rs/"},{href:"https://dystroy.org/bacon/"},{href:"https://github.com/rui314/mold"},{href:"https://github.com/rui314/mold#how-to-use"},{href:"https://mise.jdx.dev/"},{href:"https://mise.jdx.dev/configuration.html#mise-toml"},{href:"https://jj-vcs.github.io/jj/"},{href:"https://github.com/astral-sh/uv/releases"},{href:"https://docs.astral.sh/uv/getting-started/installation/"},{href:"http://127.0.0.1:8000"},{href:"https://jj-vcs.github.io/jj"},{href:"https://jj-vcs.github.io/jj/latest"},{href:"https://github.com/jimporter/mike"},{href:"#previewing-the-html-documentation"},{href:"https://jj-vcs.github.com/jj"},{href:"https://jj-vcs.github.com/jj"},{href:"https://github.com/mstange/samply"}],l={contents:[{heading:"policies",content:`We'd love to accept your patches and contributions to this project. There are
just a few small guidelines you need to follow.`},{heading:"contributor-license-agreement",content:`Contributions to this project must be accompanied by a Contributor License
Agreement. You (or your employer) retain the copyright to your contribution;
this simply gives us permission to use and redistribute your contributions as
part of the project. Head over to https://cla.developers.google.com/ to see
your current agreements on file or to sign a new one.`},{heading:"contributor-license-agreement",content:`You generally only need to submit a CLA once, so if you've already submitted one
(even if it was for a different project), you probably don't need to do it
again.`},{heading:"commit-guidelines",content:`Unlike many GitHub projects (but like many VCS projects), we care more about the
contents of commits than about the contents of PRs. We review each commit
separately, and we don't squash-merge the PR (so please manually squash any
fixup commits before sending for review).`},{heading:"commit-guidelines",content:`Each commit should ideally do one thing. For example, if you need to refactor a
function in order to add a new feature cleanly, put the refactoring in one
commit and the new feature in a different commit. If the refactoring itself
consists of many parts, try to separate out those into separate commits. You can
use jj split to do it if you didn't realize ahead of time how it should be
split up. Include tests and documentation in the same commit as the code they
test and document.`},{heading:"commit-guidelines",content:`The commit message should describe the changes in the commit;
the PR description can even be empty, but feel free to include a personal
message. We start the commit message with <topic>:  and don't use
conventional commits. This means if
you modified a command in the CLI, use its name as the topic, e.g.
next/prev: <your-modification> or conflicts: <your-modification>. We don't
currently have a specific guidelines on what to write in the topic field, but
the reviewers will help you provide a topic if you have difficulties choosing
it. How to Write a Git Commit Message is a good
guide if you're new to writing good commit messages. We are not particularly
strict about the style, but please do explain the reason for the change unless
it's obvious.`},{heading:"code-reviews",content:`All submissions, including submissions by project members, require review. We
use GitHub pull requests for this purpose. Consult
GitHub Help for more
information on using pull requests.`},{heading:"code-reviews",content:`When you address comments on a PR, don't make the changes in a commit on top (as
is typical on GitHub). Instead, please make the changes in the appropriate
commit. You can do that by creating a new commit on top of the initial commit
(jj new <commit>) and then squash in the changes when you're done (jj squash).
jj git push
will automatically force-push the bookmark.`},{heading:"code-reviews",content:`When your first PR has been approved, we typically invite you to the
jj-vcs/contributors team to give you contributor access,
so you can address any remaining minor comments and then merge the PR yourself
when you're ready. If you realize that some comments require non-trivial
changes, please ask your reviewer to take another look.`},{heading:"code-reviews",content:`If your employer pays anyone (not necessarily you) to contribute to Jujutsu,
please make sure your GitHub username is recorded.
To avoid conflicts of interest, please don't merge a PR that has only been
approved by someone from the same organization. Similarly, as a reviewer, there
is no need to approve your coworkers' PRs, since the author should await an
approval from someone else anyway. It is of course still appreciated if you
review and comment on their PRs. Also, if the PR seems completely unrelated to
your company's interests, do feel free to approve it.`},{heading:"community-guidelines",content:`This project follows Google's Open Source Community
Guidelines.`},{heading:"contributing-large-patches",content:`Before sending a PR for a large change which designs/redesigns or reworks an
existing component, we require an architecture review from multiple
stakeholders, which we do with Design Docs, see the
process here.`},{heading:"contributing-to-the-documentation",content:`We appreciate bug
reports
about any problems, however small, lurking in our documentation
website or in the jj help <command> docs.
If a part of the bug report template does not apply, you can
just delete it.`},{heading:"contributing-to-the-documentation",content:`Before reporting a problem with the documentation website, we'd appreciate it if
you could check that the problem still exists in the "prerelease" version of the
documentation (as opposed to the docs for one of the released versions of jj).
You can use the version switcher in the top-left of the website to do so.`},{heading:"contributing-to-the-documentation",content:"If you are willing to make a PR fixing a documentation problem, even better!"},{heading:"contributing-to-the-documentation",content:`The documentation website sources are Markdown files located in the docs/
directory. You do not need to
know Rust to work with them. See below for instructions on how to preview the
HTML docs as you edit the Markdown files.
Doing so is optional, but recommended.`},{heading:"contributing-to-the-documentation",content:`The jj help docs are sourced from the "docstring" comments inside the Rust
sources, currently from the cli/src/commands
directory. Working
on them requires setting up a Rust development environment, as described
below, and may occasionally require adjusting a test.`},{heading:"learning-rust",content:`In addition to the Rust Book and the other
excellent resources at https://www.rust-lang.org/learn, we recommend the
"Comprehensive Rust" mini-course
for an overview, especially if you are familiar with C++.`},{heading:"style-guide",content:"See here."},{heading:"setting-up-a-development-environment",content:`To develop jj, the mandatory steps are simply
to install Rust (the default
installer options are fine), clone the repository, and use cargo build
, cargo fmt,
cargo clippy --workspace --all-targets, and
cargo test --workspace. If you are preparing a PR, there are some additional
recommended steps.`},{heading:"summary",content:"One-time setup:"},{heading:"summary",content:`rustup toolchain add nightly  # wanted for 'rustfmt'
rustup toolchain add 1.85     # also specified in Cargo.toml
cargo install --locked bacon
cargo install --locked cargo-insta
cargo install --locked cargo-nextest`},{heading:"summary",content:"During development (adapt according to your preference):"},{heading:"summary",content:`bacon clippy-all
cargo +nightly fmt # Occasionally
cargo nextest run --workspace # Occasionally
cargo insta test --workspace --test-runner nextest # Occasionally`},{heading:"summary",content:"!!! warning"},{heading:"summary",content:`Build artifacts from debug builds and especially from repeated
invocations of cargo test can quickly take up 10s of GB of disk space.
Cargo will happily use up your entire hard drive. If this happens, run
cargo clean.`},{heading:"explanation",content:"These are listed roughly in order of decreasing importance."},{heading:"explanation",content:`Nearly any change to jj's CLI will require writing or updating snapshot
tests that use the insta crate. To make this
convenient, install the cargo-insta binary.
Use cargo insta test --workspace to run tests,
and cargo insta review --workspace to update the snapshot tests.
The --workspace flag is needed to run the tests on all crates; by default,
only the crate in the current directory is tested.`},{heading:"explanation",content:`GitHub CI checks require that the code is formatted with the nightly
version of rustfmt. To do this on your computer, install the nightly
toolchain and use cargo +nightly fmt.`},{heading:"explanation",content:`Your code will be rejected if it cannot be compiled with the minimal
supported version of Rust ("MSRV"). Currently, jj follows a rather
casual MSRV policy: "The current rustc stable version, minus one."
As of this writing, that version is 1.85.0.`},{heading:"explanation",content:`Your code needs to pass cargo clippy. You can also
use cargo +nightly clippy if you wish to see more warnings.`},{heading:"explanation",content:`You may also want to install and use bacon,
to automatically build, check, and / or run tests.`},{heading:"explanation",content:`To run tests more quickly, use cargo nextest run --workspace. To
use nextest with insta, use cargo insta test --workspace
--test-runner nextest.`},{heading:"explanation",content:`On Linux, you may be able to speed up nextest even further by using
the mold linker, as explained below.`},{heading:"configuring-jj-fix-to-run-rustfmt",content:"Run this in the jj repo:"},{heading:"configuring-jj-fix-to-run-rustfmt",content:`Note: users of Nix and direnv should drop the "+nightly" argument above
since the devShell is already configured to pull in a nightly version of
rustfmt:jj config set --repo fix.tools.rustfmt '{ command = ["rustfmt"], patterns = ["glob:**/*.rs"] }'`},{heading:"using-mold-for-faster-tests-on-linux",content:`On a machine with a multi-core CPU, one way to speed up
cargo nextest on Linux is to use the multi-threaded mold
linker. This linker may help
if, currently, your CPU is underused while Rust is linking test
binaries. Before proceeding with mold, you can check whether this is
an issue worth solving using a system monitoring tool such as htop.`},{heading:"using-mold-for-faster-tests-on-linux",content:`mold is packaged for many distributions. On Debian, for example,
sudo apt install mold should just work.`},{heading:"using-mold-for-faster-tests-on-linux",content:"A simple way to use mold is via the -run option, e.g.:"},{heading:"using-mold-for-faster-tests-on-linux",content:`There will be no indication that a different linker is used, except for
higher CPU usage while linking and, hopefully, faster completion. You
can verify that mold was indeed used by running
readelf -p .comment target/debug/jj.`},{heading:"using-mold-for-faster-tests-on-linux",content:`There are also ways of having Rust use mold by default, see the "How
to use" instructions.`},{heading:"using-mold-for-faster-tests-on-linux",content:`On recent versions of MacOS, the default linker Rust uses is already
multi-threaded. It should use all the CPU cores without any configuration.`},{heading:"visual-studio-code",content:"We recommend at least these settings:"},{heading:"alternative-development-setup-with-mise",content:`An experimental development setup is available using
mise. If you try it, file bugs,
PRs, or tell us on Discord/IRC/discussions if you experience problems
or if this config is too inflexible. If we can make it work for most
platforms and most people's needs, including people previously unfamiliar
with mise, we may make mise the recommended way to set up a development
environment.`},{heading:"alternative-development-setup-with-mise",content:`This tool manages the necessary dependencies for you, eliminating the need for
a separate setup process. mise automatically installs the required tools when
they are needed.`},{heading:"alternative-development-setup-with-mise",content:`Here are some of the commands you may find yourself using frequently during
development:`},{heading:"alternative-development-setup-with-mise",content:"mise test: Runs all tests."},{heading:"alternative-development-setup-with-mise",content:`mise test <string>: Runs tests that contain a specific string. For
example, mise test squash would run tests with "squash" in their name.`},{heading:"alternative-development-setup-with-mise",content:"mise build: Compiles jj."},{heading:"alternative-development-setup-with-mise",content:"mise build:release: Compiles jj in release mode."},{heading:"alternative-development-setup-with-mise",content:"mise build:docs: Builds the documentation for jj."},{heading:"alternative-development-setup-with-mise",content:`For a complete list of all available tasks, you can run mise tasks or review
the configuration file at .config/mise.toml.`},{heading:"alternative-development-setup-with-mise",content:`You can customize this configuration using
a mise.local.toml file.`},{heading:"previewing-the-html-documentation",content:`The documentation for jj is automatically published online at
https://jj-vcs.github.io/jj/.`},{heading:"previewing-the-html-documentation",content:`When editing documentation, you should check your changes locally — especially
if you are adding a new page, or doing a major rewrite.`},{heading:"install-uv",content:"The only thing you need is uv (version 0.5.1 or newer)."},{heading:"install-uv",content:`uv is a Python project manager written in Rust. It will fetch the right Python
version and the dependencies needed to build the docs. Install it like so:`},{heading:"install-uv",content:'=== "macOS/Linux"'},{heading:"install-uv",content:`!!! note
If you don't have ~/.local/bin in your PATH, the installer will
modify your shell profile. To avoid it:`},{heading:"install-uv",content:'=== "Windows"'},{heading:"install-uv",content:'=== "Homebrew"'},{heading:"install-uv",content:'=== "Cargo"'},{heading:"install-uv",content:'=== "Other options"'},{heading:"install-uv",content:"Directly download the binaries from GitHub: uv releases."},{heading:"install-uv",content:"Even more options: Installing uv."},{heading:"build-the-docs",content:"To build the docs, run while inside the jj repository:"},{heading:"build-the-docs",content:"Open http://127.0.0.1:8000 in your browser to see the docs."},{heading:"build-the-docs",content:`As you edit the .md files in docs/, the website should be rebuilt and
reloaded in your browser automatically.`},{heading:"build-the-docs",content:`!!! note "If the docs are not updating"
Check the terminal from which you ran uv run mkdocs serve for any build
errors or warnings. Warnings about "GET /versions.json HTTP/1.1" code 404
are expected and harmless.`},{heading:"offline-distribution",content:`To build the rendered docs for offline distribution or to view them from your file
system, run while inside the jj repository:`},{heading:"building-the-entire-website",content:`!!! tip
Building the entire website is not usually necessary. If you are editing
documentation, the previous section is enough.`},{heading:"building-the-entire-website",content:`These instructions are relevant if you are working on the versioning of the
documentation that we currently do with mike.`},{heading:"building-the-entire-website",content:`The full jj website includes the documentation for several jj versions
(prerelease, latest release, and the older releases). The top-level
URL https://jj-vcs.github.io/jj redirects to
https://jj-vcs.github.io/jj/latest, which in turn redirects to
the docs for the last stable version.`},{heading:"building-the-entire-website",content:`The different versions of documentation are managed and deployed with
mike, which can be run with
uv run mike.`},{heading:"building-the-entire-website",content:`On a POSIX system or WSL, one way to build the entire website is as follows (on
Windows, you'll need to understand and adapt the shell script):`},{heading:"building-the-entire-website",content:`Check out jj (jj git clone), cloned from your fork of jj (e.g.
github.com/jjfan/jj). You can also use a pure Git repo if you prefer.`},{heading:"building-the-entire-website",content:`Make sure github.com/jjfan/jj includes the gh-pages bookmark of the jj repo
and run git fetch origin gh-pages.`},{heading:"building-the-entire-website",content:`Go to the GitHub repository settings, enable GitHub Pages, and configure them
to use the gh-pages bookmark (this is usually the default).`},{heading:"building-the-entire-website",content:`Install uv as explained in Previewing the HTML
documentation, and run the same sh script
that is used in GitHub CI (details below):`},{heading:"building-the-entire-website",content:`This should build the version of the docs from the current commit,
deploy it as a new commit to the gh-pages bookmark,
and push the gh-pages bookmark to the origin.`},{heading:"building-the-entire-website",content:`Now, you should be able to see the full website, including your latest changes
to the prerelease version, at https://jjfan.github.io/jj/prerelease/.`},{heading:"building-the-entire-website",content:`(Optional) The previous steps actually only rebuild
https://jjfan.github.io/jj/prerelease/ and its alias
https://jjfan.github.io/jj/main/. If you'd like to test out version switching
back and forth, you can also rebuild the docs for the latest release as follows.`},{heading:"building-the-entire-website",content:`(Optional) When you are done, you may want to reset the gh-pages bookmark to the
same spot as it is upstream. If you configured the "upstream" remote,
this can be done with:`},{heading:"building-the-entire-website",content:`If you want to preserve some of the changes you made, you can do jj bookmark
    set my-changes -r gh-pages BEFORE running the above commands.`},{heading:"explanation-of-the-docs-build-deploy-script",content:`The script sets up a few environment variables and invokes uv run mike deploy
with some default arguments and whatever arguments were passed to
docs-build-deploy. Run uv run mike help deploy to find out what the
arguments do.`},{heading:"explanation-of-the-docs-build-deploy-script",content:`If you need to do something more complicated, you can use uv run mike
... commands. You can also edit the gh-pages bookmark directly, but take care
to avoid files that will be overwritten by future invocations of mike. Then,
you can submit a PR based on the gh-pages bookmark of
https://jj-vcs.github.com/jj (instead of the usual main bookmark).`},{heading:"explanation-of-the-docs-build-deploy-script",content:`Previously, the version switcher would not work unless the value of the
site_url config in mkdocs.yml matched the actual URL the site is being
served from. This bug should now be fixed, but if you are not serving the site
from https://jj-vcs.github.com/jj and something fails weirdly, you might want
to adjust the site_url to something like https://jjfan.github.io/jj.`},{heading:"modifying-protobuffers-this-is-not-common",content:`Occasionally, you may need to change the .proto files that define jj's data
storage format. In this case, you will need to add a few steps to the above
workflow.`},{heading:"modifying-protobuffers-this-is-not-common",content:`Install the protoc compiler. This usually means either apt-get install
protobuf-compiler or downloading an official release. The
prost library docs have additional advice.`},{heading:"modifying-protobuffers-this-is-not-common",content:`Run cargo run -p gen-protos regularly (or after every edit to a .proto
file). This is the same as running cargo run from lib/gen-protos. The
gen-protos binary will use the prost-build library to compile the
.proto files into .rs files.`},{heading:"modifying-protobuffers-this-is-not-common",content:`If you are adding a new .proto file, you will need to edit the list of
these files in lib/gen-protos/src/main.rs.`},{heading:"modifying-protobuffers-this-is-not-common",content:`The .rs files generated from .proto files are included in the repository,
and there is a GitHub CI check that will complain if they do not match.`},{heading:"logging",content:`You can print internal jj logs using JJ_LOG. It acts like the RUST_LOG
environment variable, frequent in Rust codebases, and accepts one or more
directives. You can also run JJ_LOG=debug jj to get debug level logs
enabled for all targets. You can also use the --debug global option, which
turns on debug log level for jj-lib and jj-cli only.`},{heading:"profiling",content:`One easy-to-use sampling profiler
is samply. For example:`},{heading:"profiling",content:"Then just open the link it prints."},{heading:"profiling",content:`Another option is to use the instrumentation we've added manually (using
tracing::instrument) in various places. For example:`},{heading:"profiling",content:`Then go to https://ui.perfetto.dev/ in Chrome and load /tmp/trace.json from
there.`}],headings:[{id:"policies",content:"Policies"},{id:"contributor-license-agreement",content:"Contributor License Agreement"},{id:"commit-guidelines",content:"Commit guidelines"},{id:"code-reviews",content:"Code reviews"},{id:"community-guidelines",content:"Community Guidelines"},{id:"contributing-large-patches",content:"Contributing large patches"},{id:"contributing-to-the-documentation",content:"Contributing to the documentation"},{id:"learning-rust",content:"Learning Rust"},{id:"style-guide",content:"Style guide"},{id:"setting-up-a-development-environment",content:"Setting up a development environment"},{id:"summary",content:"Summary"},{id:"explanation",content:"Explanation"},{id:"configuring-jj-fix-to-run-rustfmt",content:"Configuring jj fix to run rustfmt"},{id:"using-mold-for-faster-tests-on-linux",content:"Using mold for faster tests on Linux"},{id:"editor-setup",content:"Editor setup"},{id:"visual-studio-code",content:"Visual Studio Code"},{id:"zed",content:"Zed"},{id:"helix",content:"Helix"},{id:"alternative-development-setup-with-mise",content:"Alternative development setup with mise"},{id:"previewing-the-html-documentation",content:"Previewing the HTML documentation"},{id:"install-uv",content:"Install uv"},{id:"build-the-docs",content:"Build the docs"},{id:"offline-distribution",content:"Offline distribution"},{id:"building-the-entire-website",content:"Building the entire website"},{id:"explanation-of-the-docs-build-deploy-script",content:"Explanation of the docs-build-deploy script"},{id:"modifying-protobuffers-this-is-not-common",content:"Modifying protobuffers (this is not common)"},{id:"logging",content:"Logging"},{id:"profiling",content:"Profiling"}]};const h=[{depth:2,url:"#policies",title:e.jsx(e.Fragment,{children:"Policies"})},{depth:3,url:"#contributor-license-agreement",title:e.jsx(e.Fragment,{children:"Contributor License Agreement"})},{depth:3,url:"#commit-guidelines",title:e.jsx(e.Fragment,{children:"Commit guidelines"})},{depth:3,url:"#code-reviews",title:e.jsx(e.Fragment,{children:"Code reviews"})},{depth:3,url:"#community-guidelines",title:e.jsx(e.Fragment,{children:"Community Guidelines"})},{depth:2,url:"#contributing-large-patches",title:e.jsx(e.Fragment,{children:"Contributing large patches"})},{depth:2,url:"#contributing-to-the-documentation",title:e.jsx(e.Fragment,{children:"Contributing to the documentation"})},{depth:2,url:"#learning-rust",title:e.jsx(e.Fragment,{children:"Learning Rust"})},{depth:2,url:"#style-guide",title:e.jsx(e.Fragment,{children:"Style guide"})},{depth:2,url:"#setting-up-a-development-environment",title:e.jsx(e.Fragment,{children:"Setting up a development environment"})},{depth:3,url:"#summary",title:e.jsx(e.Fragment,{children:"Summary"})},{depth:3,url:"#explanation",title:e.jsx(e.Fragment,{children:"Explanation"})},{depth:3,url:"#configuring-jj-fix-to-run-rustfmt",title:e.jsxs(e.Fragment,{children:["Configuring ",e.jsx("code",{children:"jj fix"})," to run ",e.jsx("code",{children:"rustfmt"})]})},{depth:3,url:"#using-mold-for-faster-tests-on-linux",title:e.jsxs(e.Fragment,{children:["Using ",e.jsx("code",{children:"mold"})," for faster tests on Linux"]})},{depth:3,url:"#editor-setup",title:e.jsx(e.Fragment,{children:"Editor setup"})},{depth:4,url:"#visual-studio-code",title:e.jsx(e.Fragment,{children:"Visual Studio Code"})},{depth:4,url:"#zed",title:e.jsx(e.Fragment,{children:"Zed"})},{depth:4,url:"#helix",title:e.jsx(e.Fragment,{children:"Helix"})},{depth:3,url:"#alternative-development-setup-with-mise",title:e.jsxs(e.Fragment,{children:["Alternative development setup with ",e.jsx("code",{children:"mise"})]})},{depth:2,url:"#previewing-the-html-documentation",title:e.jsx(e.Fragment,{children:"Previewing the HTML documentation"})},{depth:3,url:"#install-uv",title:e.jsxs(e.Fragment,{children:["Install ",e.jsx("code",{children:"uv"})]})},{depth:3,url:"#build-the-docs",title:e.jsx(e.Fragment,{children:"Build the docs"})},{depth:4,url:"#offline-distribution",title:e.jsx(e.Fragment,{children:"Offline distribution"})},{depth:2,url:"#building-the-entire-website",title:e.jsx(e.Fragment,{children:"Building the entire website"})},{depth:3,url:"#explanation-of-the-docs-build-deploy-script",title:e.jsxs(e.Fragment,{children:["Explanation of the ",e.jsx("code",{children:"docs-build-deploy"})," script"]})},{depth:2,url:"#modifying-protobuffers-this-is-not-common",title:e.jsx(e.Fragment,{children:"Modifying protobuffers (this is not common)"})},{depth:2,url:"#logging",title:e.jsx(e.Fragment,{children:"Logging"})},{depth:2,url:"#profiling",title:e.jsx(e.Fragment,{children:"Profiling"})}];function n(s){const i={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i.h2,{id:"policies",children:"Policies"}),`
`,e.jsx(i.p,{children:`We'd love to accept your patches and contributions to this project. There are
just a few small guidelines you need to follow.`}),`
`,e.jsx(i.h3,{id:"contributor-license-agreement",children:"Contributor License Agreement"}),`
`,e.jsxs(i.p,{children:[`Contributions to this project must be accompanied by a Contributor License
Agreement. You (or your employer) retain the copyright to your contribution;
this simply gives us permission to use and redistribute your contributions as
part of the project. Head over to `,e.jsx(i.a,{href:"https://cla.developers.google.com/",children:"https://cla.developers.google.com/"}),` to see
your current agreements on file or to sign a new one.`]}),`
`,e.jsx(i.p,{children:`You generally only need to submit a CLA once, so if you've already submitted one
(even if it was for a different project), you probably don't need to do it
again.`}),`
`,e.jsx(i.h3,{id:"commit-guidelines",children:"Commit guidelines"}),`
`,e.jsx(i.p,{children:`Unlike many GitHub projects (but like many VCS projects), we care more about the
contents of commits than about the contents of PRs. We review each commit
separately, and we don't squash-merge the PR (so please manually squash any
fixup commits before sending for review).`}),`
`,e.jsxs(i.p,{children:[`Each commit should ideally do one thing. For example, if you need to refactor a
function in order to add a new feature cleanly, put the refactoring in one
commit and the new feature in a different commit. If the refactoring itself
consists of many parts, try to separate out those into separate commits. You can
use `,e.jsx(i.code,{children:"jj split"}),` to do it if you didn't realize ahead of time how it should be
split up. Include tests and documentation in the same commit as the code they
test and document.`]}),`
`,e.jsxs(i.p,{children:[`The commit message should describe the changes in the commit;
the PR description can even be empty, but feel free to include a personal
message. We start the commit message with `,e.jsx(i.code,{children:"<topic>: "}),` and don't use
`,e.jsx(i.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/",children:"conventional commits"}),`. This means if
you modified a command in the CLI, use its name as the topic, e.g.
`,e.jsx(i.code,{children:"next/prev: <your-modification>"})," or ",e.jsx(i.code,{children:"conflicts: <your-modification>"}),`. We don't
currently have a specific guidelines on what to write in the topic field, but
the reviewers will help you provide a topic if you have difficulties choosing
it. `,e.jsx(i.a,{href:"https://cbea.ms/git-commit/",children:"How to Write a Git Commit Message"}),` is a good
guide if you're new to writing good commit messages. We are not particularly
strict about the style, but please do explain the reason for the change unless
it's obvious.`]}),`
`,e.jsx(i.h3,{id:"code-reviews",children:"Code reviews"}),`
`,e.jsxs(i.p,{children:[`All submissions, including submissions by project members, require review. We
use GitHub pull requests for this purpose. Consult
`,e.jsx(i.a,{href:"https://help.github.com/articles/about-pull-requests/",children:"GitHub Help"}),` for more
information on using pull requests.`]}),`
`,e.jsxs(i.p,{children:[`When you address comments on a PR, don't make the changes in a commit on top (as
is typical on GitHub). Instead, please make the changes in the appropriate
commit. You can do that by creating a new commit on top of the initial commit
(`,e.jsx(i.code,{children:"jj new <commit>"}),") and then squash in the changes when you're done (",e.jsx(i.code,{children:"jj squash"}),`).
`,e.jsx(i.code,{children:"jj git push"}),`
will automatically force-push the bookmark.`]}),`
`,e.jsxs(i.p,{children:[`When your first PR has been approved, we typically invite you to the
`,e.jsx(i.code,{children:"jj-vcs/contributors"}),` team to give you contributor access,
so you can address any remaining minor comments and then merge the PR yourself
when you're ready. If you realize that some comments require non-trivial
changes, please ask your reviewer to take another look.`]}),`
`,e.jsxs(i.p,{children:[`If your employer pays anyone (not necessarily you) to contribute to Jujutsu,
please make sure your GitHub username is `,e.jsx(i.a,{href:"/contributing/paid-contributors",children:"recorded"}),`.
To avoid conflicts of interest, please don't merge a PR that has only been
approved by someone from the same organization. Similarly, as a reviewer, there
is no need to approve your coworkers' PRs, since the author should await an
approval from someone else anyway. It is of course still appreciated if you
review and comment on their PRs. Also, if the PR seems completely unrelated to
your company's interests, do feel free to approve it.`]}),`
`,e.jsx(i.h3,{id:"community-guidelines",children:"Community Guidelines"}),`
`,e.jsxs(i.p,{children:["This project follows ",e.jsx(i.a,{href:"https://opensource.google/conduct/",children:`Google's Open Source Community
Guidelines`}),"."]}),`
`,e.jsx(i.h2,{id:"contributing-large-patches",children:"Contributing large patches"}),`
`,e.jsxs(i.p,{children:[`Before sending a PR for a large change which designs/redesigns or reworks an
existing component, we require an architecture review from multiple
stakeholders, which we do with `,e.jsx(i.a,{href:"/contributing/design-docs",children:"Design Docs"}),`, see the
`,e.jsx(i.a,{href:"/contributing/design-docs#process",children:"process here"}),"."]}),`
`,e.jsx(i.h2,{id:"contributing-to-the-documentation",children:"Contributing to the documentation"}),`
`,e.jsxs(i.p,{children:["We appreciate ",e.jsx(i.a,{href:"https://github.com/jj-vcs/jj/issues/new?template=bug_report.md",children:`bug
reports`}),`
about any problems, however small, lurking in `,e.jsx(i.a,{href:"https://jj-vcs.github.io/jj/prerelease",children:`our documentation
website`})," or in the ",e.jsx(i.code,{children:"jj help <command>"}),` docs.
If a part of the bug report template does not apply, you can
just delete it.`]}),`
`,e.jsxs(i.p,{children:[`Before reporting a problem with the documentation website, we'd appreciate it if
you could check that the problem still exists in the "prerelease" version of the
documentation (as opposed to the docs for one of the released versions of `,e.jsx(i.code,{children:"jj"}),`).
You can use the version switcher in the top-left of the website to do so.`]}),`
`,e.jsx(i.p,{children:"If you are willing to make a PR fixing a documentation problem, even better!"}),`
`,e.jsxs(i.p,{children:["The documentation website sources are Markdown files located in the ",e.jsxs(i.a,{href:"https://github.com/jj-vcs/jj/tree/main/docs",children:[e.jsx(i.code,{children:"docs/"}),`
directory`]}),`. You do not need to
know Rust to work with them. See below for `,e.jsx(i.a,{href:"#previewing-the-html-documentation",children:`instructions on how to preview the
HTML docs`}),` as you edit the Markdown files.
Doing so is optional, but recommended.`]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"jj help"}),` docs are sourced from the "docstring" comments inside the Rust
sources, currently from the `,e.jsxs(i.a,{href:"https://github.com/jj-vcs/jj/tree/main/cli/src/commands",children:[e.jsx(i.code,{children:"cli/src/commands"}),`
directory`]}),`. Working
on them requires setting up a Rust development environment, as described
below, and may occasionally require adjusting a test.`]}),`
`,e.jsx(i.h2,{id:"learning-rust",children:"Learning Rust"}),`
`,e.jsxs(i.p,{children:["In addition to the ",e.jsx(i.a,{href:"https://doc.rust-lang.org/book/",children:"Rust Book"}),` and the other
excellent resources at `,e.jsx(i.a,{href:"https://www.rust-lang.org/learn",children:"https://www.rust-lang.org/learn"}),`, we recommend the
`,e.jsx(i.a,{href:"https://google.github.io/comprehensive-rust/",children:'"Comprehensive Rust" mini-course'}),`
for an overview, especially if you are familiar with C++.`]}),`
`,e.jsx(i.h2,{id:"style-guide",children:"Style guide"}),`
`,e.jsxs(i.p,{children:["See ",e.jsx(i.a,{href:"/contributing/style-guide",children:"here"}),"."]}),`
`,e.jsx(i.h2,{id:"setting-up-a-development-environment",children:"Setting up a development environment"}),`
`,e.jsxs(i.p,{children:["To develop ",e.jsx(i.code,{children:"jj"}),`, the mandatory steps are simply
to `,e.jsx(i.a,{href:"https://www.rust-lang.org/tools/install",children:"install Rust"}),` (the default
installer options are fine), clone the repository, and use `,e.jsx(i.code,{children:"cargo build"}),`
, `,e.jsx(i.code,{children:"cargo fmt"}),`,
`,e.jsx(i.code,{children:"cargo clippy --workspace --all-targets"}),`, and
`,e.jsx(i.code,{children:"cargo test --workspace"}),`. If you are preparing a PR, there are some additional
recommended steps.`]}),`
`,e.jsx(i.h3,{id:"summary",children:"Summary"}),`
`,e.jsx(i.p,{children:"One-time setup:"}),`
`,e.jsx(i.p,{children:`rustup toolchain add nightly  # wanted for 'rustfmt'
rustup toolchain add 1.85     # also specified in Cargo.toml
cargo install --locked bacon
cargo install --locked cargo-insta
cargo install --locked cargo-nextest`}),`
`,e.jsx(i.p,{children:"During development (adapt according to your preference):"}),`
`,e.jsx(i.p,{children:`bacon clippy-all
cargo +nightly fmt # Occasionally
cargo nextest run --workspace # Occasionally
cargo insta test --workspace --test-runner nextest # Occasionally`}),`
`,e.jsx(i.p,{children:"!!! warning"}),`
`,e.jsxs(i.p,{children:[`Build artifacts from debug builds and especially from repeated
invocations of `,e.jsx(i.code,{children:"cargo test"}),` can quickly take up 10s of GB of disk space.
Cargo will happily use up your entire hard drive. If this happens, run
`,e.jsx(i.code,{children:"cargo clean"}),"."]}),`
`,e.jsx(i.h3,{id:"explanation",children:"Explanation"}),`
`,e.jsx(i.p,{children:"These are listed roughly in order of decreasing importance."}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Nearly any change to ",e.jsx(i.code,{children:"jj"}),`'s CLI will require writing or updating snapshot
tests that use the `,e.jsx(i.a,{href:"https://insta.rs/",children:e.jsx(i.code,{children:"insta"})}),` crate. To make this
convenient, install the `,e.jsx(i.code,{children:"cargo-insta"}),` binary.
Use `,e.jsx(i.code,{children:"cargo insta test --workspace"}),` to run tests,
and `,e.jsx(i.code,{children:"cargo insta review --workspace"}),` to update the snapshot tests.
The `,e.jsx(i.code,{children:"--workspace"}),` flag is needed to run the tests on all crates; by default,
only the crate in the current directory is tested.`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["GitHub CI checks require that the code is formatted with the ",e.jsx(i.em,{children:"nightly"}),`
version of `,e.jsx(i.code,{children:"rustfmt"}),`. To do this on your computer, install the nightly
toolchain and use `,e.jsx(i.code,{children:"cargo +nightly fmt"}),"."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[`Your code will be rejected if it cannot be compiled with the minimal
supported version of Rust ("MSRV"). Currently, `,e.jsx(i.code,{children:"jj"}),` follows a rather
casual MSRV policy: "The current `,e.jsx(i.code,{children:"rustc"}),` stable version, minus one."
As of this writing, that version is `,e.jsx(i.strong,{children:"1.85.0"}),"."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Your code needs to pass ",e.jsx(i.code,{children:"cargo clippy"}),`. You can also
use `,e.jsx(i.code,{children:"cargo +nightly clippy"})," if you wish to see more warnings."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["You may also want to install and use ",e.jsx(i.a,{href:"https://dystroy.org/bacon/",children:e.jsx(i.code,{children:"bacon"})}),`,
to automatically build, check, and / or run tests.`]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["To run tests more quickly, use ",e.jsx(i.code,{children:"cargo nextest run --workspace"}),`. To
use `,e.jsx(i.code,{children:"nextest"})," with ",e.jsx(i.code,{children:"insta"}),", use ",e.jsx(i.code,{children:"cargo insta test --workspace --test-runner nextest"}),"."]}),`
`,e.jsxs(i.p,{children:["On Linux, you may be able to speed up ",e.jsx(i.code,{children:"nextest"}),` even further by using
the `,e.jsx(i.code,{children:"mold"})," linker, as explained below."]}),`
`]}),`
`]}),`
`,e.jsxs(i.h3,{id:"configuring-jj-fix-to-run-rustfmt",children:["Configuring ",e.jsx(i.code,{children:"jj fix"})," to run ",e.jsx(i.code,{children:"rustfmt"})]}),`
`,e.jsx(i.p,{children:"Run this in the jj repo:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" config"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" set"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --repo"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" fix.tools.rustfmt"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:` '{ command = ["rustfmt", "+nightly"], patterns = ["glob:**/*.rs"] }'`})]})})})}),`
`,e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["Note: users of Nix and ",e.jsx(i.code,{children:"direnv"})," should drop the ",e.jsx(i.code,{children:'"+nightly"'}),` argument above
since the devShell is already configured to pull in a nightly version of
rustfmt:`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" config"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" set"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --repo"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" fix.tools.rustfmt"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:` '{ command = ["rustfmt"], patterns = ["glob:**/*.rs"] }'`})]})})})}),`
`]}),`
`,e.jsxs(i.h3,{id:"using-mold-for-faster-tests-on-linux",children:["Using ",e.jsx(i.code,{children:"mold"})," for faster tests on Linux"]}),`
`,e.jsxs(i.p,{children:[`On a machine with a multi-core CPU, one way to speed up
`,e.jsx(i.code,{children:"cargo nextest"})," on Linux is to use the multi-threaded ",e.jsxs(i.a,{href:"https://github.com/rui314/mold",children:[e.jsx(i.code,{children:"mold"}),`
linker`]}),`. This linker may help
if, currently, your CPU is underused while Rust is linking test
binaries. Before proceeding with `,e.jsx(i.code,{children:"mold"}),`, you can check whether this is
an issue worth solving using a system monitoring tool such as `,e.jsx(i.code,{children:"htop"}),"."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"mold"}),` is packaged for many distributions. On Debian, for example,
`,e.jsx(i.code,{children:"sudo apt install mold"})," should just work."]}),`
`,e.jsxs(i.p,{children:["A simple way to use ",e.jsx(i.code,{children:"mold"})," is via the ",e.jsx(i.code,{children:"-run"})," option, e.g.:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"mold"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -run"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" cargo"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" insta"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" test"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --workspace"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --test-runner"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" nextest"})]})})})}),`
`,e.jsxs(i.p,{children:[`There will be no indication that a different linker is used, except for
higher CPU usage while linking and, hopefully, faster completion. You
can verify that `,e.jsx(i.code,{children:"mold"}),` was indeed used by running
`,e.jsx(i.code,{children:"readelf -p .comment target/debug/jj"}),"."]}),`
`,e.jsxs(i.p,{children:["There are also ways of having Rust use ",e.jsx(i.code,{children:"mold"})," by default, see the ",e.jsx(i.a,{href:"https://github.com/rui314/mold#how-to-use",children:`"How
to use" instructions`}),"."]}),`
`,e.jsx(i.p,{children:`On recent versions of MacOS, the default linker Rust uses is already
multi-threaded. It should use all the CPU cores without any configuration.`}),`
`,e.jsx(i.h3,{id:"editor-setup",children:"Editor setup"}),`
`,e.jsx(i.h4,{id:"visual-studio-code",children:"Visual Studio Code"}),`
`,e.jsx(i.p,{children:"We recommend at least these settings:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"{"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'    "files.insertFinalNewline"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"true"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'    "files.trimTrailingWhitespace"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"true"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'    "[rust]"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": {"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'        "files.trimTrailingWhitespace"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"false"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})})}),`
`,e.jsx(i.h4,{id:"zed",children:"Zed"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// .zed/settings.json"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"{"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'  "ensure_final_newline_on_save"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"true"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'  "remove_trailing_whitespace_on_save"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"true"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'  "languages"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": {"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // We don't use a formatter for Markdown files, so format_on_save would just"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    // mess with others' docs"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'    "Markdown"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": { "}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"format_on_save"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"off"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" }"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'    "Rust"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": {"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'      "format_on_save"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"on"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"      // Avoid removing trailing spaces within multi-line string literals"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'      "remove_trailing_whitespace_on_save"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": "}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"false"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  },"})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'  "lsp"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": {"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'    "rust-analyzer"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": {"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'      "initialization_options"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": {"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        // If you are working on docs and don't need `cargo check`, uncomment"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        // this option:"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        //"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:'        //   "checkOnSave": false,'})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"        // Use nightly `rustfmt`, equivalent to `cargo +nightly fmt`"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'        "rustfmt"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": { "}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"extraArgs"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:": ["}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"+nightly"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"] }"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      }"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  }"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})})}),`
`,e.jsx(i.h4,{id:"helix",children:"Helix"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# .helix/languages.toml"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"["}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"language-server"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"."}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"rust-analyzer"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"."}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"config"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"."}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"rustfmt"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"]"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"extraArgs = ["}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:'"+nightly"'}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"]"})]})]})})}),`
`,e.jsxs(i.h3,{id:"alternative-development-setup-with-mise",children:["Alternative development setup with ",e.jsx(i.code,{children:"mise"})]}),`
`,e.jsxs(i.p,{children:[`An experimental development setup is available using
`,e.jsx(i.a,{href:"https://mise.jdx.dev/",children:e.jsx(i.code,{children:"mise"})}),`. If you try it, file bugs,
PRs, or tell us on Discord/IRC/discussions if you experience problems
or if this config is too inflexible. If we can make it work for most
platforms and most people's needs, including people previously unfamiliar
with `,e.jsx(i.code,{children:"mise"}),", we may make ",e.jsx(i.code,{children:"mise"}),` the recommended way to set up a development
environment.`]}),`
`,e.jsxs(i.p,{children:[`This tool manages the necessary dependencies for you, eliminating the need for
a separate setup process. `,e.jsx(i.code,{children:"mise"}),` automatically installs the required tools when
they are needed.`]}),`
`,e.jsx(i.p,{children:`Here are some of the commands you may find yourself using frequently during
development:`}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"mise test"}),": Runs all tests."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"mise test <string>"}),`: Runs tests that contain a specific string. For
example, `,e.jsx(i.code,{children:"mise test squash"}),' would run tests with "squash" in their name.']}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"mise build"}),": Compiles ",e.jsx(i.code,{children:"jj"}),"."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"mise build:release"}),": Compiles ",e.jsx(i.code,{children:"jj"})," in release mode."]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"mise build:docs"}),": Builds the documentation for ",e.jsx(i.code,{children:"jj"}),"."]}),`
`]}),`
`,e.jsxs(i.p,{children:["For a complete list of all available tasks, you can run ",e.jsx(i.code,{children:"mise tasks"}),` or review
the configuration file at `,e.jsx(i.code,{children:".config/mise.toml"}),"."]}),`
`,e.jsxs(i.p,{children:[`You can customize this configuration using
`,e.jsxs(i.a,{href:"https://mise.jdx.dev/configuration.html#mise-toml",children:["a ",e.jsx(i.code,{children:"mise.local.toml"})," file"]}),"."]}),`
`,e.jsx(i.h2,{id:"previewing-the-html-documentation",children:"Previewing the HTML documentation"}),`
`,e.jsxs(i.p,{children:["The documentation for ",e.jsx(i.code,{children:"jj"}),` is automatically published online at
`,e.jsx(i.a,{href:"https://jj-vcs.github.io/jj/",children:"https://jj-vcs.github.io/jj/"}),"."]}),`
`,e.jsx(i.p,{children:`When editing documentation, you should check your changes locally — especially
if you are adding a new page, or doing a major rewrite.`}),`
`,e.jsxs(i.h3,{id:"install-uv",children:["Install ",e.jsx(i.code,{children:"uv"})]}),`
`,e.jsxs(i.p,{children:["The only thing you need is ",e.jsx(i.a,{href:"https://docs.astral.sh/uv/",children:e.jsx(i.code,{children:"uv"})})," (version 0.5.1 or newer)."]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"uv"}),` is a Python project manager written in Rust. It will fetch the right Python
version and the dependencies needed to build the docs. Install it like so:`]}),`
`,e.jsx(i.p,{children:'=== "macOS/Linux"'}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"curl"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -LsSf"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" https://astral.sh/uv/install.sh"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" |"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" sh"})]})})})}),`
`,e.jsxs(i.p,{children:[`!!! note
If you don't have `,e.jsx(i.code,{children:"~/.local/bin"})," in your ",e.jsx(i.code,{children:"PATH"}),`, the installer will
modify your shell profile. To avoid it:`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"curl"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -LsSf"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" https://astral.sh/uv/install.sh"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" |"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" env"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" INSTALLER_NO_MODIFY_PATH="}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" sh"})]})})})}),`
`,e.jsx(i.p,{children:'=== "Windows"'}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"powershell"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -ExecutionPolicy"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" ByPass"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -c"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:' "irm https://astral.sh/uv/install.ps1 | iex"'})]})})})}),`
`,e.jsx(i.p,{children:'=== "Homebrew"'}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"brew"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" install"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" uv"})]})})})}),`
`,e.jsx(i.p,{children:'=== "Cargo"'}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# This might take a while"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"cargo"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" install"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --git"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" https://github.com/astral-sh/uv"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" uv"})]})]})})}),`
`,e.jsx(i.p,{children:'=== "Other options"'}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Directly download the binaries from GitHub: ",e.jsx(i.a,{href:"https://github.com/astral-sh/uv/releases",children:"uv releases"}),"."]}),`
`,e.jsxs(i.li,{children:["Even more options: ",e.jsx(i.a,{href:"https://docs.astral.sh/uv/getting-started/installation/",children:"Installing uv"}),"."]}),`
`]}),`
`,e.jsx(i.h3,{id:"build-the-docs",children:"Build the docs"}),`
`,e.jsxs(i.p,{children:["To build the docs, run while inside the ",e.jsx(i.code,{children:"jj"})," repository:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"uv"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" run"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" mkdocs"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" serve"})]})})})}),`
`,e.jsxs(i.p,{children:["Open ",e.jsx(i.a,{href:"http://127.0.0.1:8000",children:"http://127.0.0.1:8000"})," in your browser to see the docs."]}),`
`,e.jsxs(i.p,{children:["As you edit the ",e.jsx(i.code,{children:".md"})," files in ",e.jsx(i.code,{children:"docs/"}),`, the website should be rebuilt and
reloaded in your browser automatically.`]}),`
`,e.jsxs(i.p,{children:[`!!! note "If the docs are not updating"
Check the terminal from which you ran `,e.jsx(i.code,{children:"uv run mkdocs serve"}),` for any build
errors or warnings. Warnings about `,e.jsx(i.code,{children:'"GET /versions.json HTTP/1.1" code 404'}),`
are expected and harmless.`]}),`
`,e.jsx(i.h4,{id:"offline-distribution",children:"Offline distribution"}),`
`,e.jsxs(i.p,{children:[`To build the rendered docs for offline distribution or to view them from your file
system, run while inside the `,e.jsx(i.code,{children:"jj"})," repository:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"MKDOCS_OFFLINE"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"true"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" uv"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" run"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" mkdocs"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" build"})]})})})}),`
`,e.jsx(i.h2,{id:"building-the-entire-website",children:"Building the entire website"}),`
`,e.jsx(i.p,{children:`!!! tip
Building the entire website is not usually necessary. If you are editing
documentation, the previous section is enough.`}),`
`,e.jsxs(i.p,{children:[`These instructions are relevant if you are working on the versioning of the
documentation that we currently do with `,e.jsx(i.code,{children:"mike"}),"."]}),`
`,e.jsxs(i.p,{children:["The full ",e.jsx(i.code,{children:"jj"})," website includes the documentation for several ",e.jsx(i.code,{children:"jj"}),` versions
(`,e.jsx(i.code,{children:"prerelease"}),`, latest release, and the older releases). The top-level
URL `,e.jsx(i.a,{href:"https://jj-vcs.github.io/jj",children:"https://jj-vcs.github.io/jj"}),` redirects to
`,e.jsx(i.a,{href:"https://jj-vcs.github.io/jj/latest",children:"https://jj-vcs.github.io/jj/latest"}),`, which in turn redirects to
the docs for the last stable version.`]}),`
`,e.jsxs(i.p,{children:[`The different versions of documentation are managed and deployed with
`,e.jsx(i.a,{href:"https://github.com/jimporter/mike",children:e.jsx(i.code,{children:"mike"})}),`, which can be run with
`,e.jsx(i.code,{children:"uv run mike"}),"."]}),`
`,e.jsx(i.p,{children:`On a POSIX system or WSL, one way to build the entire website is as follows (on
Windows, you'll need to understand and adapt the shell script):`}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Check out ",e.jsx(i.code,{children:"jj"})," (",e.jsx(i.code,{children:"jj git clone"}),"), cloned from your fork of ",e.jsx(i.code,{children:"jj"}),` (e.g.
`,e.jsx(i.code,{children:"github.com/jjfan/jj"}),"). You can also use a pure Git repo if you prefer."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Make sure ",e.jsx(i.code,{children:"github.com/jjfan/jj"})," includes the ",e.jsx(i.code,{children:"gh-pages"}),` bookmark of the jj repo
and run `,e.jsx(i.code,{children:"git fetch origin gh-pages"}),"."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[`Go to the GitHub repository settings, enable GitHub Pages, and configure them
to use the `,e.jsx(i.code,{children:"gh-pages"})," bookmark (this is usually the default)."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["Install ",e.jsx(i.code,{children:"uv"})," as explained in ",e.jsx(i.a,{href:"#previewing-the-html-documentation",children:`Previewing the HTML
documentation`}),", and run the same ",e.jsx(i.code,{children:"sh"}),` script
that is used in GitHub CI (details below):`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:".github/scripts/docs-build-deploy"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" prerelease"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" main"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --push"})]})})})}),`
`,e.jsxs(i.p,{children:[`This should build the version of the docs from the current commit,
deploy it as a new commit to the `,e.jsx(i.code,{children:"gh-pages"}),` bookmark,
and push the `,e.jsx(i.code,{children:"gh-pages"})," bookmark to the origin."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[`Now, you should be able to see the full website, including your latest changes
to the `,e.jsx(i.code,{children:"prerelease"})," version, at ",e.jsx(i.code,{children:"https://jjfan.github.io/jj/prerelease/"}),"."]}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:[`(Optional) The previous steps actually only rebuild
`,e.jsx(i.code,{children:"https://jjfan.github.io/jj/prerelease/"}),` and its alias
`,e.jsx(i.code,{children:"https://jjfan.github.io/jj/main/"}),`. If you'd like to test out version switching
back and forth, you can also rebuild the docs for the latest release as follows.`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" new"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" v1.33.1"}),e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"  # Let's say `jj 1.33.1` is the currently the latest release"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:".github/scripts/docs-build-deploy"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" v1.33.1"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" latest"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --push"})]})]})})}),`
`]}),`
`,e.jsxs(i.li,{children:[`
`,e.jsxs(i.p,{children:["(Optional) When you are done, you may want to reset the ",e.jsx(i.code,{children:"gh-pages"}),` bookmark to the
same spot as it is upstream. If you configured the "upstream" remote,
this can be done with:`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# This will LOSE any changes you made to `gh-pages`"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" git"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" fetch"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --remote"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" upstream"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" bookmark"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" set"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" gh-pages"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" -r"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" gh-pages@upstream"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"jj"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" git"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" push"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --remote"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" origin"}),e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --bookmark"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" gh-pages"})]})]})})}),`
`,e.jsxs(i.p,{children:["If you want to preserve some of the changes you made, you can do ",e.jsx(i.code,{children:"jj bookmark     set my-changes -r gh-pages"})," BEFORE running the above commands."]}),`
`]}),`
`]}),`
`,e.jsxs(i.h3,{id:"explanation-of-the-docs-build-deploy-script",children:["Explanation of the ",e.jsx(i.code,{children:"docs-build-deploy"})," script"]}),`
`,e.jsxs(i.p,{children:["The script sets up a few environment variables and invokes ",e.jsx(i.code,{children:"uv run mike deploy"}),`
with some default arguments and whatever arguments were passed to
`,e.jsx(i.code,{children:"docs-build-deploy"}),". Run ",e.jsx(i.code,{children:"uv run mike help deploy"}),` to find out what the
arguments do.`]}),`
`,e.jsxs(i.p,{children:["If you need to do something more complicated, you can use ",e.jsx(i.code,{children:"uv run mike ..."})," commands. You can also edit the ",e.jsx(i.code,{children:"gh-pages"}),` bookmark directly, but take care
to avoid files that will be overwritten by future invocations of `,e.jsx(i.code,{children:"mike"}),`. Then,
you can submit a PR based on the `,e.jsx(i.code,{children:"gh-pages"}),` bookmark of
`,e.jsx(i.a,{href:"https://jj-vcs.github.com/jj",children:"https://jj-vcs.github.com/jj"})," (instead of the usual ",e.jsx(i.code,{children:"main"})," bookmark)."]}),`
`,e.jsxs(i.p,{children:[`Previously, the version switcher would not work unless the value of the
`,e.jsx(i.code,{children:"site_url"})," config in ",e.jsx(i.code,{children:"mkdocs.yml"}),` matched the actual URL the site is being
served from. This bug should now be fixed, but if you are not serving the site
from `,e.jsx(i.a,{href:"https://jj-vcs.github.com/jj",children:"https://jj-vcs.github.com/jj"}),` and something fails weirdly, you might want
to adjust the `,e.jsx(i.code,{children:"site_url"})," to something like ",e.jsx(i.code,{children:"https://jjfan.github.io/jj"}),"."]}),`
`,e.jsx(i.h2,{id:"modifying-protobuffers-this-is-not-common",children:"Modifying protobuffers (this is not common)"}),`
`,e.jsxs(i.p,{children:["Occasionally, you may need to change the ",e.jsx(i.code,{children:".proto"}),` files that define jj's data
storage format. In this case, you will need to add a few steps to the above
workflow.`]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Install the ",e.jsx(i.code,{children:"protoc"})," compiler. This usually means either ",e.jsx(i.code,{children:"apt-get install protobuf-compiler"})," or downloading ",e.jsx(i.a,{href:"https://github.com/protocolbuffers/protobuf/releases",children:"an official release"}),`. The
`,e.jsx(i.code,{children:"prost"})," ",e.jsx(i.a,{href:"https://docs.rs/prost-build/latest/prost_build/#sourcing-protoc",children:"library docs"})," have additional advice."]}),`
`,e.jsxs(i.li,{children:["Run ",e.jsx(i.code,{children:"cargo run -p gen-protos"})," regularly (or after every edit to a ",e.jsx(i.code,{children:".proto"}),`
file). This is the same as running `,e.jsx(i.code,{children:"cargo run"})," from ",e.jsx(i.code,{children:"lib/gen-protos"}),`. The
`,e.jsx(i.code,{children:"gen-protos"})," binary will use the ",e.jsx(i.code,{children:"prost-build"}),` library to compile the
`,e.jsx(i.code,{children:".proto"})," files into ",e.jsx(i.code,{children:".rs"})," files."]}),`
`,e.jsxs(i.li,{children:["If you are adding a new ",e.jsx(i.code,{children:".proto"}),` file, you will need to edit the list of
these files in `,e.jsx(i.code,{children:"lib/gen-protos/src/main.rs"}),"."]}),`
`]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:".rs"})," files generated from ",e.jsx(i.code,{children:".proto"}),` files are included in the repository,
and there is a GitHub CI check that will complain if they do not match.`]}),`
`,e.jsx(i.h2,{id:"logging",children:"Logging"}),`
`,e.jsxs(i.p,{children:["You can print internal jj logs using ",e.jsx(i.code,{children:"JJ_LOG"}),". It acts like the ",e.jsx(i.code,{children:"RUST_LOG"}),`
environment variable, frequent in Rust codebases, and accepts one or more
`,e.jsx(i.a,{href:"https://docs.rs/tracing-subscriber/latest/tracing_subscriber/filter/struct.EnvFilter.html#directives",children:"directives"}),". You can also run ",e.jsx(i.code,{children:"JJ_LOG=debug jj"})," to get ",e.jsx(i.code,{children:"debug"}),` level logs
enabled for all targets. You can also use the `,e.jsx(i.code,{children:"--debug"}),` global option, which
turns on `,e.jsx(i.code,{children:"debug"})," log level for ",e.jsx(i.code,{children:"jj-lib"})," and ",e.jsx(i.code,{children:"jj-cli"})," only."]}),`
`,e.jsx(i.h2,{id:"profiling",children:"Profiling"}),`
`,e.jsxs(i.p,{children:[`One easy-to-use sampling profiler
is `,e.jsx(i.a,{href:"https://github.com/mstange/samply",children:"samply"}),". For example:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"cargo"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" install"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" samply"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"samply"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" record"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" jj"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" diff"})]})]})})}),`
`,e.jsx(i.p,{children:"Then just open the link it prints."}),`
`,e.jsxs(i.p,{children:[`Another option is to use the instrumentation we've added manually (using
`,e.jsx(i.code,{children:"tracing::instrument"}),") in various places. For example:"]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsx(i.code,{children:e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"JJ_TRACE"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"/tmp/trace.json"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" jj"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" diff"})]})})})}),`
`,e.jsxs(i.p,{children:["Then go to ",e.jsx(i.code,{children:"https://ui.perfetto.dev/"})," in Chrome and load ",e.jsx(i.code,{children:"/tmp/trace.json"}),` from
there.`]})]})}function a(s={}){const{wrapper:i}=s.components||{};return i?e.jsx(i,{...s,children:e.jsx(n,{...s})}):n(s)}export{a as default,r as extractedReferences,o as frontmatter,l as structuredData,h as toc};
