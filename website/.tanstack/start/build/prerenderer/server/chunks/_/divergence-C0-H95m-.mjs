import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Handling divergent changes"
};
let extractedReferences = [];
let structuredData = {
  "contents": [{
    "heading": "what-are-divergent-changes",
    "content": "A divergent change occurs when multiple visible commits have the same change\nID."
  }, {
    "heading": "what-are-divergent-changes",
    "content": 'Normally, when commits are rewritten, the original version (the "predecessor")\nbecomes hidden and the new commit (the "successor") is visible. Thus, only one\ncommit with a given change ID is visible at a time.'
  }, {
    "heading": "what-are-divergent-changes",
    "content": "But, a hidden commit can become visible again. This can happen if:"
  }, {
    "heading": "what-are-divergent-changes",
    "content": "A visible descendant is added locally. For example, jj new REV will make\nREV visible even if it was hidden before."
  }, {
    "heading": "what-are-divergent-changes",
    "content": "A visible descendant is fetched from a remote. If the hidden commit was pushed\nto a remote, others may base new commits off of them. When their new commits are\nfetched, their visibility makes the hidden commit visible again."
  }, {
    "heading": "what-are-divergent-changes",
    "content": "It is made the working copy. jj edit REV will make REV and all its\nancestors visible if it wasn't already."
  }, {
    "heading": "what-are-divergent-changes",
    "content": "Some other operations make hidden commits visible. For example, adding a\nbookmark to a hidden commit makes it visible with the assumption that you are\nnow working with that commit again."
  }, {
    "heading": "what-are-divergent-changes",
    "content": "Divergent changes also occur if two different users or processes amend the same\nchange, creating two visible successors. This can happen when:"
  }, {
    "heading": "what-are-divergent-changes",
    "content": "Another author modifies commits in a branch that you have also modified\nlocally."
  }, {
    "heading": "what-are-divergent-changes",
    "content": "You perform operations on the same change from different workspaces of the\nsame repository."
  }, {
    "heading": "what-are-divergent-changes",
    "content": "Two programs modify the repository at the same time. For example, you run\njj describe and, while writing your commit description, an IDE integration\nfetches and rebases the branch you're working on."
  }, {
    "heading": "how-do-i-resolve-divergent-changes",
    "content": "When you encounter divergent changes, you have several strategies to choose\nfrom. The best approach depends on whether you want to keep the content from one\ncommit, both commits, or merge them together."
  }, {
    "heading": "how-do-i-resolve-divergent-changes",
    "content": "Note that revsets must refer to the divergent commit using its commit ID since\nthe change ID is ambiguous."
  }, {
    "heading": "strategy-1-abandon-one-of-the-commits",
    "content": "If one of the divergent commits is clearly obsolete or incorrect, simply abandon\nit:"
  }, {
    "heading": "strategy-1-abandon-one-of-the-commits",
    "content": "This is the simplest solution when you know which version to keep."
  }, {
    "heading": "strategy-2-duplicate-and-abandon",
    "content": "If you want to keep both versions as separate changes with different change IDs,\nyou can duplicate one of the commits to generate a new change ID, then abandon\nthe original:"
  }, {
    "heading": "strategy-2-duplicate-and-abandon",
    "content": "This preserves both versions of the content while resolving the divergence."
  }, {
    "heading": "strategy-3-squash-the-commits-together",
    "content": "When you want to combine the content from both divergent commits:"
  }, {
    "heading": "strategy-3-squash-the-commits-together",
    "content": "This combines the changes from both commits into a single commit. The source\ncommit will be abandoned."
  }, {
    "heading": "strategy-4-ignore-the-divergence",
    "content": "Divergence isn't an error. If the divergence doesn't cause immediate problems,\nyou can leave it as-is. If both commits are part of immutable history, this may\nbe your only option."
  }, {
    "heading": "strategy-4-ignore-the-divergence",
    "content": "However, it can be inconvenient since you cannot refer to divergent changes\nunambiguously using their change ID."
  }],
  "headings": [{
    "id": "what-are-divergent-changes",
    "content": "What are divergent changes?"
  }, {
    "id": "how-do-i-resolve-divergent-changes",
    "content": "How do I resolve divergent changes?"
  }, {
    "id": "strategy-1-abandon-one-of-the-commits",
    "content": "Strategy 1: Abandon one of the commits"
  }, {
    "id": "strategy-2-duplicate-and-abandon",
    "content": "Strategy 2: Duplicate and abandon"
  }, {
    "id": "strategy-3-squash-the-commits-together",
    "content": "Strategy 3: Squash the commits together"
  }, {
    "id": "strategy-4-ignore-the-divergence",
    "content": "Strategy 4: Ignore the divergence"
  }]
};
const toc = [{
  depth: 2,
  url: "#what-are-divergent-changes",
  title: jsx(Fragment, {
    children: "What are divergent changes?"
  })
}, {
  depth: 2,
  url: "#how-do-i-resolve-divergent-changes",
  title: jsx(Fragment, {
    children: "How do I resolve divergent changes?"
  })
}, {
  depth: 3,
  url: "#strategy-1-abandon-one-of-the-commits",
  title: jsx(Fragment, {
    children: "Strategy 1: Abandon one of the commits"
  })
}, {
  depth: 3,
  url: "#strategy-2-duplicate-and-abandon",
  title: jsx(Fragment, {
    children: "Strategy 2: Duplicate and abandon"
  })
}, {
  depth: 3,
  url: "#strategy-3-squash-the-commits-together",
  title: jsx(Fragment, {
    children: "Strategy 3: Squash the commits together"
  })
}, {
  depth: 3,
  url: "#strategy-4-ignore-the-divergence",
  title: jsx(Fragment, {
    children: "Strategy 4: Ignore the divergence"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.h2, {
      id: "what-are-divergent-changes",
      children: "What are divergent changes?"
    }), "\n", jsxs(_components.p, {
      children: ["A ", jsx(_components.a, {
        href: "../glossary#divergent-change",
        children: "divergent change"
      }), " occurs when multiple ", jsx(_components.a, {
        href: "../glossary#visible-commits",
        children: "visible commits"
      }), " have the same change\nID."]
    }), "\n", jsx(_components.p, {
      children: 'Normally, when commits are rewritten, the original version (the "predecessor")\nbecomes hidden and the new commit (the "successor") is visible. Thus, only one\ncommit with a given change ID is visible at a time.'
    }), "\n", jsx(_components.p, {
      children: "But, a hidden commit can become visible again. This can happen if:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["A visible descendant is added locally. For example, ", jsx(_components.code, {
            children: "jj new REV"
          }), " will make\n", jsx(_components.code, {
            children: "REV"
          }), " visible even if it was hidden before."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "A visible descendant is fetched from a remote. If the hidden commit was pushed\nto a remote, others may base new commits off of them. When their new commits are\nfetched, their visibility makes the hidden commit visible again."
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["It is made the working copy. ", jsx(_components.code, {
            children: "jj edit REV"
          }), " will make ", jsx(_components.code, {
            children: "REV"
          }), " and all its\nancestors visible if it wasn't already."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "Some other operations make hidden commits visible. For example, adding a\nbookmark to a hidden commit makes it visible with the assumption that you are\nnow working with that commit again."
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "Divergent changes also occur if two different users or processes amend the same\nchange, creating two visible successors. This can happen when:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "Another author modifies commits in a branch that you have also modified\nlocally."
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "You perform operations on the same change from different workspaces of the\nsame repository."
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["Two programs modify the repository at the same time. For example, you run\n", jsx(_components.code, {
            children: "jj describe"
          }), " and, while writing your commit description, an IDE integration\nfetches and rebases the branch you're working on."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "how-do-i-resolve-divergent-changes",
      children: "How do I resolve divergent changes?"
    }), "\n", jsx(_components.p, {
      children: "When you encounter divergent changes, you have several strategies to choose\nfrom. The best approach depends on whether you want to keep the content from one\ncommit, both commits, or merge them together."
    }), "\n", jsx(_components.p, {
      children: "Note that revsets must refer to the divergent commit using its commit ID since\nthe change ID is ambiguous."
    }), "\n", jsx(_components.h3, {
      id: "strategy-1-abandon-one-of-the-commits",
      children: "Strategy 1: Abandon one of the commits"
    }), "\n", jsx(_components.p, {
      children: "If one of the divergent commits is clearly obsolete or incorrect, simply abandon\nit:"
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
              children: "# Abandon the unwanted commit using its commit ID"
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
              children: " abandon"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "unwanted-commit-i"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
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
              children: "# You can abandon several at once with:"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# jj abandon abc def 123"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# jj abandon abc::"
            })
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "This is the simplest solution when you know which version to keep."
    }), "\n", jsx(_components.h3, {
      id: "strategy-2-duplicate-and-abandon",
      children: "Strategy 2: Duplicate and abandon"
    }), "\n", jsx(_components.p, {
      children: "If you want to keep both versions as separate changes with different change IDs,\nyou can duplicate one of the commits to generate a new change ID, then abandon\nthe original:"
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
              children: "# Duplicate one of the commits to create a new change ID"
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
              children: " duplicate"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "commit-i"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
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
              children: "# Abandon the original commit"
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
              children: " abandon"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "commit-i"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "This preserves both versions of the content while resolving the divergence."
    }), "\n", jsx(_components.h3, {
      id: "strategy-3-squash-the-commits-together",
      children: "Strategy 3: Squash the commits together"
    }), "\n", jsx(_components.p, {
      children: "When you want to combine the content from both divergent commits:"
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
              children: "# Squash one commit into the other"
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
              children: " squash"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --from"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "source-commit-i"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --into"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " <"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "target-commit-i"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "d"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "This combines the changes from both commits into a single commit. The source\ncommit will be abandoned."
    }), "\n", jsx(_components.h3, {
      id: "strategy-4-ignore-the-divergence",
      children: "Strategy 4: Ignore the divergence"
    }), "\n", jsx(_components.p, {
      children: "Divergence isn't an error. If the divergence doesn't cause immediate problems,\nyou can leave it as-is. If both commits are part of immutable history, this may\nbe your only option."
    }), "\n", jsx(_components.p, {
      children: "However, it can be inconvenient since you cannot refer to divergent changes\nunambiguously using their change ID."
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
//# sourceMappingURL=divergence-C0-H95m-.mjs.map
