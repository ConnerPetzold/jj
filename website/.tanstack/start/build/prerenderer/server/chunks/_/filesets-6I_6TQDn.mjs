import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Filesets"
};
let extractedReferences = [{
  "href": "https://repo.mercurial-scm.org/hg/help/filesets"
}, {
  "href": "#quoting-file-names"
}];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": 'Jujutsu supports a functional language for selecting a set of files.\nExpressions in this language are called "filesets" (the idea comes from\nMercurial). The language\nconsists of file patterns, operators, and functions.'
  }, {
    "heading": "quoting-file-names",
    "content": "Many jj commands accept fileset expressions as positional arguments. File\nnames passed to these commands must be quoted if they contain\nwhitespace or meta characters. However, as a special case, quotes can be omitted\nif the expression has no operators nor function calls. For example:"
  }, {
    "heading": "quoting-file-names",
    "content": "jj diff 'Foo Bar' (shell quotes are required, but inner quotes are optional)"
  }, {
    "heading": "quoting-file-names",
    "content": `jj diff '~"Foo Bar"' (both shell and inner quotes are required)`
  }, {
    "heading": "quoting-file-names",
    "content": `jj diff '"Foo(1)"' (both shell and inner quotes are required)`
  }, {
    "heading": "quoting-file-names",
    "content": "Glob characters aren't considered meta characters, but shell quotes are still\nrequired:"
  }, {
    "heading": "quoting-file-names",
    "content": "jj diff '~glob:**/*.rs'"
  }, {
    "heading": "file-patterns",
    "content": 'The following patterns are supported. In all cases, we do not mention any shell\nquoting that might be necessary, and the quotes around "path" are optional if\nthe path has no special characters.'
  }, {
    "heading": "file-patterns",
    "content": '"path" or cwd:"path": Matches cwd-relative path prefix (file or files\nunder directory recursively.)'
  }, {
    "heading": "file-patterns",
    "content": 'file:"path" or cwd-file:"path": Matches cwd-relative file (or exact) path.'
  }, {
    "heading": "file-patterns",
    "content": 'glob:"pattern" or cwd-glob:"pattern": Matches file paths with cwd-relative\nUnix-style shell wildcard pattern. For example, glob:"*.c" will\nmatch all .c files in the current working directory non-recursively.'
  }, {
    "heading": "file-patterns",
    "content": 'glob-i:"pattern" or cwd-glob-i:"pattern": Like glob: but\ncase-insensitive. For example, glob-i:"*.TXT" will match both file.txt\nand FILE.TXT.'
  }, {
    "heading": "file-patterns",
    "content": 'root:"path": Matches workspace-relative path prefix (file or files under\ndirectory recursively.)'
  }, {
    "heading": "file-patterns",
    "content": 'root-file:"path": Matches workspace-relative file (or exact) path.'
  }, {
    "heading": "file-patterns",
    "content": 'root-glob:"pattern": Matches file paths with workspace-relative Unix-style\nshell wildcard pattern.'
  }, {
    "heading": "file-patterns",
    "content": 'root-glob-i:"pattern": Like root-glob: but case-insensitive.'
  }, {
    "heading": "operators",
    "content": "The following operators are supported. x and y below can be any fileset\nexpressions."
  }, {
    "heading": "operators",
    "content": "~x: Matches everything but x."
  }, {
    "heading": "operators",
    "content": "x & y: Matches both x and y."
  }, {
    "heading": "operators",
    "content": "x ~ y: Matches x but not y."
  }, {
    "heading": "operators",
    "content": "x | y: Matches either x or y (or both)."
  }, {
    "heading": "operators",
    "content": "(listed in order of binding strengths)"
  }, {
    "heading": "operators",
    "content": "You can use parentheses to control evaluation order, such as (x & y) | z or\nx & (y | z)."
  }, {
    "heading": "functions",
    "content": "You can also specify patterns by using functions."
  }, {
    "heading": "functions",
    "content": "all(): Matches everything."
  }, {
    "heading": "functions",
    "content": "none(): Matches nothing."
  }, {
    "heading": "examples",
    "content": "Show diff excluding Cargo.lock."
  }, {
    "heading": "examples",
    "content": "List files in src excluding Rust sources."
  }, {
    "heading": "examples",
    "content": "Split a revision in two, putting foo into the second commit."
  }],
  "headings": [{
    "id": "quoting-file-names",
    "content": "Quoting file names"
  }, {
    "id": "file-patterns",
    "content": "File patterns"
  }, {
    "id": "operators",
    "content": "Operators"
  }, {
    "id": "functions",
    "content": "Functions"
  }, {
    "id": "examples",
    "content": "Examples"
  }]
};
const toc = [{
  depth: 2,
  url: "#quoting-file-names",
  title: jsx(Fragment, {
    children: "Quoting file names"
  })
}, {
  depth: 2,
  url: "#file-patterns",
  title: jsx(Fragment, {
    children: "File patterns"
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
  url: "#examples",
  title: jsx(Fragment, {
    children: "Examples"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.p, {
      children: ['Jujutsu supports a functional language for selecting a set of files.\nExpressions in this language are called "filesets" (the idea comes from\n', jsx(_components.a, {
        href: "https://repo.mercurial-scm.org/hg/help/filesets",
        children: "Mercurial"
      }), "). The language\nconsists of file patterns, operators, and functions."]
    }), "\n", jsx(_components.h2, {
      id: "quoting-file-names",
      children: "Quoting file names"
    }), "\n", jsxs(_components.p, {
      children: ["Many ", jsx(_components.code, {
        children: "jj"
      }), " commands accept fileset expressions as positional arguments. File\nnames passed to these commands ", jsx(_components.a, {
        href: "templates#string-literals",
        children: "must be quoted"
      }), " if they contain\nwhitespace or meta characters. However, as a special case, quotes can be omitted\nif the expression has no operators nor function calls. For example:"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "jj diff 'Foo Bar'"
        }), " (shell quotes are required, but inner quotes are optional)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: `jj diff '~"Foo Bar"'`
        }), " (both shell and inner quotes are required)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: `jj diff '"Foo(1)"'`
        }), " (both shell and inner quotes are required)"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "Glob characters aren't considered meta characters, but shell quotes are still\nrequired:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.code, {
          children: "jj diff '~glob:**/*.rs'"
        })
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "file-patterns",
      children: "File patterns"
    }), "\n", jsxs(_components.p, {
      children: ["The following patterns are supported. In all cases, we do not mention any shell\nquoting that might be necessary, and the quotes around ", jsx(_components.code, {
        children: '"path"'
      }), " are optional if\nthe path ", jsx(_components.a, {
        href: "#quoting-file-names",
        children: "has no special characters"
      }), "."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: '"path"'
        }), " or ", jsx(_components.code, {
          children: 'cwd:"path"'
        }), ": Matches cwd-relative path prefix (file or files\nunder directory recursively.)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: 'file:"path"'
        }), " or ", jsx(_components.code, {
          children: 'cwd-file:"path"'
        }), ": Matches cwd-relative file (or exact) path."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: 'glob:"pattern"'
        }), " or ", jsx(_components.code, {
          children: 'cwd-glob:"pattern"'
        }), ": Matches file paths with cwd-relative\nUnix-style shell ", jsxs(_components.a, {
          href: "https://docs.rs/globset/latest/globset/#syntax",
          children: ["wildcard ", jsx(_components.code, {
            children: "pattern"
          })]
        }), ". For example, ", jsx(_components.code, {
          children: 'glob:"*.c"'
        }), " will\nmatch all ", jsx(_components.code, {
          children: ".c"
        }), " files in the current working directory non-recursively."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: 'glob-i:"pattern"'
        }), " or ", jsx(_components.code, {
          children: 'cwd-glob-i:"pattern"'
        }), ": Like ", jsx(_components.code, {
          children: "glob:"
        }), " but\ncase-insensitive. For example, ", jsx(_components.code, {
          children: 'glob-i:"*.TXT"'
        }), " will match both ", jsx(_components.code, {
          children: "file.txt"
        }), "\nand ", jsx(_components.code, {
          children: "FILE.TXT"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: 'root:"path"'
        }), ": Matches workspace-relative path prefix (file or files under\ndirectory recursively.)"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: 'root-file:"path"'
        }), ": Matches workspace-relative file (or exact) path."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: 'root-glob:"pattern"'
        }), ": Matches file paths with workspace-relative Unix-style\nshell ", jsxs(_components.a, {
          href: "https://docs.rs/globset/latest/globset/#syntax",
          children: ["wildcard ", jsx(_components.code, {
            children: "pattern"
          })]
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: 'root-glob-i:"pattern"'
        }), ": Like ", jsx(_components.code, {
          children: "root-glob:"
        }), " but case-insensitive."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "operators",
      children: "Operators"
    }), "\n", jsxs(_components.p, {
      children: ["The following operators are supported. ", jsx(_components.code, {
        children: "x"
      }), " and ", jsx(_components.code, {
        children: "y"
      }), " below can be any fileset\nexpressions."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "~x"
        }), ": Matches everything but ", jsx(_components.code, {
          children: "x"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x & y"
        }), ": Matches both ", jsx(_components.code, {
          children: "x"
        }), " and ", jsx(_components.code, {
          children: "y"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x ~ y"
        }), ": Matches ", jsx(_components.code, {
          children: "x"
        }), " but not ", jsx(_components.code, {
          children: "y"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "x | y"
        }), ": Matches either ", jsx(_components.code, {
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
    }), "\n", jsx(_components.h2, {
      id: "functions",
      children: "Functions"
    }), "\n", jsx(_components.p, {
      children: "You can also specify patterns by using functions."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "all()"
        }), ": Matches everything."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "none()"
        }), ": Matches nothing."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", jsxs(_components.p, {
      children: ["Show diff excluding ", jsx(_components.code, {
        children: "Cargo.lock"
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
              children: " diff"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " '~Cargo.lock'"
            })]
          })
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["List files in ", jsx(_components.code, {
        children: "src"
      }), " excluding Rust sources."]
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
              children: " file"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " list"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ` 'src ~ glob:"**/*.rs"'`
            })]
          })
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Split a revision in two, putting ", jsx(_components.code, {
        children: "foo"
      }), " into the second commit."]
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
              children: " split"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " '~foo'"
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
//# sourceMappingURL=filesets-6I_6TQDn.mjs.map
