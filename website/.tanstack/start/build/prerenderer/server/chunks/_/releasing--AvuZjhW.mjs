import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "How to do a release"
};
let extractedReferences = [{
  "href": "https://github.com/jj-vcs/jj/pull/5215"
}, {
  "href": "https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28#compare-two-commits"
}, {
  "href": "https://github.com/martinvonz"
}, {
  "href": "https://github.com/jj-vcs/jj/releases"
}, {
  "href": "https://github.com/jj-vcs/jj/blob/b95628c398c6c3d11f41bdf53d0aef11f92ee96d/lib/Cargo.toml#L15-L22"
}];
let structuredData = {
  "contents": [{
    "heading": "update-changelog-and-cargo-versions",
    "content": "Send a PR similar to https://github.com/jj-vcs/jj/pull/5215. Feel free to\ncopy-edit the changelog in order to:"
  }, {
    "heading": "update-changelog-and-cargo-versions",
    "content": 'Populate "Release highlights" if relevant'
  }, {
    "heading": "update-changelog-and-cargo-versions",
    "content": "Put more important items first so the reader doesn't miss them"
  }, {
    "heading": "update-changelog-and-cargo-versions",
    "content": "Make items consistent when it comes to language and formatting"
  }, {
    "heading": "update-changelog-and-cargo-versions",
    "content": "Catch any misplaced changelog items by looking at the CHANGELOG diff."
  }, {
    "heading": "update-changelog-and-cargo-versions",
    "content": "To get the CHANGELOG diff, you can run"
  }, {
    "heading": "update-changelog-and-cargo-versions",
    "content": "Producing the list of contributors is a bit annoying. The current suggestion is\nto run something like this:"
  }, {
    "heading": "update-changelog-and-cargo-versions",
    "content": "https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28#compare-two-commits"
  }, {
    "heading": "update-changelog-and-cargo-versions",
    "content": "Alternatively, the list can be produced locally:"
  }, {
    "heading": "update-changelog-and-cargo-versions",
    "content": "Then try to find the right GitHub username for each person and copy their name\nand username from the GitHub page for the person\n(e.g. https://github.com/martinvonz)."
  }, {
    "heading": "update-changelog-and-cargo-versions",
    "content": "Get the PR through review and get it merged as usual."
  }, {
    "heading": "create-a-tag-and-a-github-release",
    "content": 'Go to https://github.com/jj-vcs/jj/releases and click "Draft a new release"'
  }, {
    "heading": "create-a-tag-and-a-github-release",
    "content": 'Click "Choose a tag" and enter "v0.<number>.0" (e.g. "v0.26.0") to create a\nnew tag'
  }, {
    "heading": "create-a-tag-and-a-github-release",
    "content": 'Click "Target", then "Recent commits", and select the commit from your merged\nPR'
  }, {
    "heading": "create-a-tag-and-a-github-release",
    "content": 'Use the name (e.g. "v0.26.0") as "Release title". Paste the changelog entries\ninto the message body'
  }, {
    "heading": "create-a-tag-and-a-github-release",
    "content": 'Check "Create a discussion for this release"'
  }, {
    "heading": "create-a-tag-and-a-github-release",
    "content": 'Click "Publish release"'
  }, {
    "heading": "publish-the-crates-to-cratesio",
    "content": "Go to a terminal and create a new clone of the repo :"
  }, {
    "heading": "publish-the-crates-to-cratesio",
    "content": "Publish each crate:"
  }, {
    "heading": "publish-the-crates-to-cratesio",
    "content": "We recommend publishing from a new clone because cargo publish will\narchive ignored files if they match the patterns in [include]\n(example),\nso it's a security risk to run it an existing clone where you may have\nleft sensitive content in an ignored file."
  }],
  "headings": [{
    "id": "update-changelog-and-cargo-versions",
    "content": "Update changelog and Cargo versions"
  }, {
    "id": "create-a-tag-and-a-github-release",
    "content": "Create a tag and a GitHub release"
  }, {
    "id": "publish-the-crates-to-cratesio",
    "content": "Publish the crates to crates.io"
  }]
};
const toc = [{
  depth: 2,
  url: "#update-changelog-and-cargo-versions",
  title: jsx(Fragment, {
    children: "Update changelog and Cargo versions"
  })
}, {
  depth: 2,
  url: "#create-a-tag-and-a-github-release",
  title: jsx(Fragment, {
    children: "Create a tag and a GitHub release"
  })
}, {
  depth: 2,
  url: "#publish-the-crates-to-cratesio",
  title: jsx(Fragment, {
    children: "Publish the crates to crates.io"
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
    code: "code",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    sup: "sup",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.h2, {
      id: "update-changelog-and-cargo-versions",
      children: "Update changelog and Cargo versions"
    }), "\n", jsxs(_components.p, {
      children: ["Send a PR similar to ", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/pull/5215",
        children: "https://github.com/jj-vcs/jj/pull/5215"
      }), ". Feel free to\ncopy-edit the changelog in order to:"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: 'Populate "Release highlights" if relevant'
      }), "\n", jsx(_components.li, {
        children: "Put more important items first so the reader doesn't miss them"
      }), "\n", jsx(_components.li, {
        children: "Make items consistent when it comes to language and formatting"
      }), "\n", jsx(_components.li, {
        children: "Catch any misplaced changelog items by looking at the CHANGELOG diff."
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "To get the CHANGELOG diff, you can run"
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
              children: " 'heads(tags())'"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  # Check that this shows the previous version"
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
              children: " diff"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --from"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'heads(tags())'"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --to"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " main"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " CHANGELOG.md"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Producing the list of contributors is a bit annoying. The current suggestion is\nto run something like this:"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "root"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "="
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$("
            }), jsx(_components.span, {
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
              children: ` 'heads(tags(glob:"v*.*.*") & ::trunk())'`
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
              children: " commit_id"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "filter"
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
              children: "'"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '   map(.commits[] | select(.author.login | endswith("[bot]") | not))'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "   | unique_by(.author.login)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '   | map("* \\(.commit.author.name) (@\\(.author.login))")'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "   | .[]"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "gh"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " api"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "/repos/jj-vcs/jj/compare/'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$root"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '...main"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --paginate"
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
              children: " jq"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -sr"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$filter"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"'
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
              children: " sort"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -f"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: jsx(_components.a, {
        href: "https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28#compare-two-commits",
        children: "https://docs.github.com/en/rest/commits/commits?apiVersion=2022-11-28#compare-two-commits"
      })
    }), "\n", jsx(_components.p, {
      children: "Alternatively, the list can be produced locally:"
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
              children: " 'heads(tags())..main'"
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
              children: ` '"* " ++ author ++ "\\n"'`
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
              children: " sort"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -fu"
            })]
          })
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Then try to find the right GitHub username for each person and copy their name\nand username from the GitHub page for the person\n(e.g. ", jsx(_components.a, {
        href: "https://github.com/martinvonz",
        children: "https://github.com/martinvonz"
      }), ")."]
    }), "\n", jsx(_components.p, {
      children: "Get the PR through review and get it merged as usual."
    }), "\n", jsx(_components.h2, {
      id: "create-a-tag-and-a-github-release",
      children: "Create a tag and a GitHub release"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["Go to ", jsx(_components.a, {
          href: "https://github.com/jj-vcs/jj/releases",
          children: "https://github.com/jj-vcs/jj/releases"
        }), ' and click "Draft a new release"']
      }), "\n", jsx(_components.li, {
        children: 'Click "Choose a tag" and enter "v0.<number>.0" (e.g. "v0.26.0") to create a\nnew tag'
      }), "\n", jsx(_components.li, {
        children: 'Click "Target", then "Recent commits", and select the commit from your merged\nPR'
      }), "\n", jsx(_components.li, {
        children: 'Use the name (e.g. "v0.26.0") as "Release title". Paste the changelog entries\ninto the message body'
      }), "\n", jsx(_components.li, {
        children: 'Check "Create a discussion for this release"'
      }), "\n", jsx(_components.li, {
        children: 'Click "Publish release"'
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "publish-the-crates-to-cratesio",
      children: "Publish the crates to crates.io"
    }), "\n", jsxs(_components.p, {
      children: ["Go to a terminal and create a new clone of the repo ", jsx(_components.sup, {
        children: jsx(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "1"
        })
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
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "cd"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " $("
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "mktemp"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -d"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
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
              children: " clone"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " https://github.com/jj-vcs/jj"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "cd"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " jj"
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
              children: " new"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " v0."
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "numbe"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "r"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ".0"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Publish each crate:"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "cd"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " lib/proc-macros"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " && "
            }), jsx(_components.span, {
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
              children: " publish"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "cd"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " lib"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " && "
            }), jsx(_components.span, {
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
              children: " publish"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "("
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "cd"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " cli"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " && "
            }), jsx(_components.span, {
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
              children: " publish"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          })]
        })
      })
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
            children: ["We recommend publishing from a new clone because ", jsx(_components.code, {
              children: "cargo publish"
            }), " will\narchive ignored files if they match the patterns in ", jsx(_components.code, {
              children: "[include]"
            }), "\n(", jsx(_components.a, {
              href: "https://github.com/jj-vcs/jj/blob/b95628c398c6c3d11f41bdf53d0aef11f92ee96d/lib/Cargo.toml#L15-L22",
              children: "example"
            }), "),\nso it's a security risk to run it an existing clone where you may have\nleft sensitive content in an ignored file. ", jsx(_components.a, {
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
//# sourceMappingURL=releasing--AvuZjhW.mjs.map
