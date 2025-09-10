// Copyright 2024 The Jujutsu Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

use insta::assert_binary_snapshot;

use crate::common::TestEnvironment;

const PREAMBLE: &str = r#"---
title: CLI reference
---

<Callout type="warning">
This CLI reference is experimental. It is automatically generated, but
does not match the `jj help` output exactly.

Run `jj help <COMMAND>` for more authoritative documentation.

If you see a significant difference, feel free to file a bug, or a PR to note the difference here.

</Callout>
"#;

#[test]
fn test_generate_markdown_docs_in_docs_dir() {
    let test_env = TestEnvironment::default();
    let mut markdown_help = PREAMBLE.to_string();
    markdown_help.push_str(
        test_env
            .run_jj_in(".", ["util", "markdown-help"])
            .success()
            .stdout
            .raw(),
    );

    insta::with_settings!({
        snapshot_path => ".",
        prepend_module_to_snapshot => false,
    },
    { assert_binary_snapshot!("cli-reference.mdx", markdown_help.into()) });
}
