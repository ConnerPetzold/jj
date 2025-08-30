import { jsx, jsxs, Fragment } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Working on Windows"
};
let extractedReferences = [{
  "href": "config#eol-conversion-settings"
}, {
  "href": "config#pager"
}];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "Jujutsu works the same on all platforms, but there are some caveats that Windows\nusers should be aware of."
  }, {
    "heading": "line-endings-conversion",
    "content": "Jujutsu currently has a setting,\nworking-copy.eol-conversion, similar to\nGit's core.autocrlf, but does not currently honor\n.gitattributes and the core.autocrlf git config, so it is recommended to\nkeep the working-copy.eol-conversion setting and the core.autocrlf git\nconfig in sync."
  }, {
    "heading": "line-endings-conversion",
    "content": "!!! note"
  }, {
    "heading": "line-endings-conversion",
    "content": "If you created a colocated git repo, forget to keep these 2 settings in\nsync, and result in a dirty working copy with only EOL diffs, you can set\nthe working-copy.eol-conversion setting correctly and run jj abandon to\nfix it."
  }, {
    "heading": "line-endings-conversion",
    "content": "The line endings conversion won't be applied to files detected as a binary files\nvia a heuristics regardless of the settings. This behavior is subject to\nchange when we support the text git attribute."
  }, {
    "heading": "line-endings-conversion",
    "content": "Jujutsu may make incorrect decision on whether a file is a binary file and apply\nline conversion incorrectly, but currently, Jujutsu doesn't support configuring\nline endings conversion for particular files. If this issue is hit, one should\nnot enable the line conversion setting."
  }, {
    "heading": "line-endings-conversion",
    "content": "!!! note"
  }, {
    "heading": "line-endings-conversion",
    "content": "If Jujutsu applies line endings conversion on incorrect files, you should\nnot enable the line conversion setting and the git core.autocrlf setting.\nSee below."
  }, {
    "heading": "line-endings-conversion",
    "content": "To disable line conversion, set the core.autocrlf setting to none or just\nremove the setting."
  }, {
    "heading": "line-endings-conversion",
    "content": "This means that line endings will be checked out exactly as they are committed\nand committed exactly as authored."
  }, {
    "heading": "line-endings-conversion",
    "content": "This setting ensures Git will check out files with LF line endings without\nconverting them to CRLF. You'll want to make sure any tooling you use,\nespecially IDEs, preserve LF line endings."
  }, {
    "heading": "line-endings-conversion",
    "content": "This poses the question if we should support reading the core.autocrlf\nsetting in colocated repos. See details at the\nissue."
  }, {
    "heading": "line-endings-conversion",
    "content": "To detect if a file is binary, Jujutsu currently checks if there is 0 byte\nin the file which is different from the algorithm of\ngitoxide or git. Jujutsu\ndoesn't plan to align the binary detection logic with git."
  }, {
    "heading": "pagination",
    "content": "On Windows, jj will use its integrated pager called streampager by default,\nunless the environment variable %PAGER% or the config ui.pager is explicitly\nset. See the pager section of the config docs for more\ndetails."
  }, {
    "heading": "pagination",
    "content": "If the built-in pager doesn't meet your needs and you have Git installed, you\ncan switch to using Git's pager as follows:"
  }, {
    "heading": "typing--in-powershell",
    "content": "PowerShell uses @ as part the array sub-expression operator, so it\noften needs to be escaped or quoted in commands:"
  }, {
    "heading": "typing--in-powershell",
    "content": "One solution is to create a revset alias. For example, to make HEAD an alias\nfor @:"
  }, {
    "heading": "wsl-sets-the-execute-bit-on-all-files",
    "content": "When viewing a Windows drive from WSL (via /mnt/c or a similar path), Windows\nexposes all files with the execute bit set. Since Jujutsu automatically records\nchanges to the working copy, this sets the execute bit on all files committed in\nyour repository."
  }, {
    "heading": "wsl-sets-the-execute-bit-on-all-files",
    "content": "If you only need to access the repository in WSL, the best solution is to clone\nthe repository in the Linux file system (for example, in\n~/my-repo)."
  }, {
    "heading": "wsl-sets-the-execute-bit-on-all-files",
    "content": "If you need to use the repository in both WSL and Windows, one solution is to\ncreate a workspace in the Linux file system:"
  }, {
    "heading": "wsl-sets-the-execute-bit-on-all-files",
    "content": "Then only use the ~/my-repo workspace from Linux."
  }, {
    "heading": "symbolic-link-support",
    "content": "jj supports symlinks on Windows only when they are enabled by the operating\nsystem. This requires Windows 10 version 14972 or higher, as well as Developer\nMode. If those conditions are not satisfied, jj will materialize symlinks as\nordinary files."
  }, {
    "heading": "symbolic-link-support",
    "content": "For colocated repositories, Git support must also be enabled using the\ngit config option core.symlinks=true."
  }],
  "headings": [{
    "id": "line-endings-conversion",
    "content": "Line endings conversion"
  }, {
    "id": "pagination",
    "content": "Pagination"
  }, {
    "id": "typing--in-powershell",
    "content": "Typing @ in PowerShell"
  }, {
    "id": "wsl-sets-the-execute-bit-on-all-files",
    "content": "WSL sets the execute bit on all files"
  }, {
    "id": "symbolic-link-support",
    "content": "Symbolic link support"
  }]
};
const toc = [{
  depth: 2,
  url: "#line-endings-conversion",
  title: jsx(Fragment, {
    children: "Line endings conversion"
  })
}, {
  depth: 2,
  url: "#pagination",
  title: jsx(Fragment, {
    children: "Pagination"
  })
}, {
  depth: 2,
  url: "#typing--in-powershell",
  title: jsxs(Fragment, {
    children: ["Typing ", jsx("code", {
      children: "@"
    }), " in PowerShell"]
  })
}, {
  depth: 2,
  url: "#wsl-sets-the-execute-bit-on-all-files",
  title: jsx(Fragment, {
    children: "WSL sets the execute bit on all files"
  })
}, {
  depth: 2,
  url: "#symbolic-link-support",
  title: jsx(Fragment, {
    children: "Symbolic link support"
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
    em: "em",
    h2: "h2",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    sup: "sup",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: "Jujutsu works the same on all platforms, but there are some caveats that Windows\nusers should be aware of."
    }), "\n", jsx(_components.h2, {
      id: "line-endings-conversion",
      children: "Line endings conversion"
    }), "\n", jsxs(_components.p, {
      children: ["Jujutsu currently has a setting,\n", jsx(_components.a, {
        href: "config#eol-conversion-settings",
        children: jsx(_components.code, {
          children: "working-copy.eol-conversion"
        })
      }), ", similar to\nGit's ", jsx(_components.a, {
        href: "https://git-scm.com/book/en/v2/Customizing-Git-Git-Configuration#_core_autocrlf",
        children: jsx(_components.code, {
          children: "core.autocrlf"
        })
      }), jsx(_components.sup, {
        children: jsx(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "1"
        })
      }), ", but does not currently honor\n", jsx(_components.code, {
        children: ".gitattributes"
      }), " and the ", jsx(_components.code, {
        children: "core.autocrlf"
      }), " git config, so it is recommended to\nkeep the ", jsx(_components.code, {
        children: "working-copy.eol-conversion"
      }), " setting and the ", jsx(_components.code, {
        children: "core.autocrlf"
      }), " git\nconfig in sync", jsx(_components.sup, {
        children: jsx(_components.a, {
          href: "#user-content-fn-1",
          id: "user-content-fnref-1-2",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "1"
        })
      }), "."]
    }), "\n", jsx(_components.p, {
      children: "!!! note"
    }), "\n", jsxs(_components.p, {
      children: ["If you created a colocated git repo, forget to keep these 2 settings in\nsync, and result in a dirty working copy with only EOL diffs, you can set\nthe ", jsx(_components.code, {
        children: "working-copy.eol-conversion"
      }), " setting correctly and run ", jsx(_components.code, {
        children: "jj abandon"
      }), " to\nfix it."]
    }), "\n", jsxs(_components.p, {
      children: ["The line endings conversion won't be applied to files detected as a binary files\nvia a heuristics", jsx(_components.sup, {
        children: jsx(_components.a, {
          href: "#user-content-fn-2",
          id: "user-content-fnref-2",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "2"
        })
      }), " regardless of the settings. This behavior is subject to\nchange when we support the text git attribute."]
    }), "\n", jsx(_components.p, {
      children: "Jujutsu may make incorrect decision on whether a file is a binary file and apply\nline conversion incorrectly, but currently, Jujutsu doesn't support configuring\nline endings conversion for particular files. If this issue is hit, one should\nnot enable the line conversion setting."
    }), "\n", jsx(_components.p, {
      children: "!!! note"
    }), "\n", jsxs(_components.p, {
      children: ["If Jujutsu applies line endings conversion on incorrect files, you should\nnot enable the line conversion setting and the git ", jsx(_components.code, {
        children: "core.autocrlf"
      }), " setting.\nSee below."]
    }), "\n", jsxs(_components.p, {
      children: ["To disable line conversion, set the ", jsx(_components.code, {
        children: "core.autocrlf"
      }), " setting to ", jsx(_components.code, {
        children: "none"
      }), " or just\nremove the setting."]
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
              children: "PS"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " git config core.autocrlf input"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# We use none instead of input to avoid applying EOL conversion."
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "PS"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " jj config set "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "--"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "repo working"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "copy.eol"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "conversion none"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Abandoning the working copy will cause Jujutsu to overwrite all files with"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# CRLF line endings with the line endings they are committed with, probably LF"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "PS"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " jj abandon"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "This means that line endings will be checked out exactly as they are committed\nand committed exactly as authored."
    }), "\n", jsx(_components.p, {
      children: "This setting ensures Git will check out files with LF line endings without\nconverting them to CRLF. You'll want to make sure any tooling you use,\nespecially IDEs, preserve LF line endings."
    }), "\n", jsx(_components.h2, {
      id: "pagination",
      children: "Pagination"
    }), "\n", jsxs(_components.p, {
      children: ["On Windows, ", jsx(_components.code, {
        children: "jj"
      }), " will use its integrated pager called ", jsx(_components.code, {
        children: "streampager"
      }), " by default,\nunless the environment variable ", jsx(_components.code, {
        children: "%PAGER%"
      }), " or the config ", jsx(_components.code, {
        children: "ui.pager"
      }), " is explicitly\nset. See the ", jsx(_components.a, {
        href: "config#pager",
        children: "pager section of the config docs"
      }), " for more\ndetails."]
    }), "\n", jsx(_components.p, {
      children: "If the built-in pager doesn't meet your needs and you have Git installed, you\ncan switch to using Git's pager as follows:"
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
              children: "PS"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " jj config set "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "--"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "user ui.pager "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: `'["C:\\\\Program Files\\\\Git\\\\usr\\\\bin\\\\less.exe", "-FRX"]'`
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "PS"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " jj config set "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "--"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "user ui.paginate auto"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.h2, {
      id: "typing--in-powershell",
      children: ["Typing ", jsx(_components.code, {
        children: "@"
      }), " in PowerShell"]
    }), "\n", jsxs(_components.p, {
      children: ["PowerShell uses ", jsx(_components.code, {
        children: "@"
      }), " as part the ", jsx(_components.a, {
        href: "https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_arrays?view=powershell-7.4#the-array-sub-expression-operator",
        children: "array sub-expression operator"
      }), ", so it\noften needs to be escaped or quoted in commands:"]
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
              children: "PS"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " jj log "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "r "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "`"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "@"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "PS"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " jj log "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "r "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'@'"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["One solution is to create a revset alias. For example, to make ", jsx(_components.code, {
        children: "HEAD"
      }), " an alias\nfor ", jsx(_components.code, {
        children: "@"
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
              children: "PS"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " jj config set "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "--"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "user revset"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "aliases.HEAD "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'@'"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "PS"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " jj log "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "r HEAD"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h2, {
      id: "wsl-sets-the-execute-bit-on-all-files",
      children: "WSL sets the execute bit on all files"
    }), "\n", jsxs(_components.p, {
      children: ["When viewing a Windows drive from WSL (via ", jsx(_components.em, {
        children: "/mnt/c"
      }), " or a similar path), Windows\nexposes all files with the execute bit set. Since Jujutsu automatically records\nchanges to the working copy, this sets the execute bit on all files committed in\nyour repository."]
    }), "\n", jsxs(_components.p, {
      children: ["If you only need to access the repository in WSL, the best solution is to clone\nthe repository in the Linux file system (for example, in\n", jsx(_components.code, {
        children: "~/my-repo"
      }), ")."]
    }), "\n", jsx(_components.p, {
      children: "If you need to use the repository in both WSL and Windows, one solution is to\ncreate a workspace in the Linux file system:"
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
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "PS"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ">"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " jj workspace add "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "--"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "name wsl ~"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "/"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "my"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "-"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "repo"
            })]
          })
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Then only use the ", jsx(_components.code, {
        children: "~/my-repo"
      }), " workspace from Linux."]
    }), "\n", jsx(_components.h2, {
      id: "symbolic-link-support",
      children: "Symbolic link support"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj"
      }), " supports symlinks on Windows only when they are enabled by the operating\nsystem. This requires Windows 10 version 14972 or higher, as well as Developer\nMode. If those conditions are not satisfied, ", jsx(_components.code, {
        children: "jj"
      }), " will materialize symlinks as\nordinary files."]
    }), "\n", jsxs(_components.p, {
      children: ["For colocated repositories, Git support must also be enabled using the\n", jsx(_components.code, {
        children: "git config"
      }), " option ", jsx(_components.code, {
        children: "core.symlinks=true"
      }), "."]
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
            children: ["This poses the question if we should support reading the ", jsx(_components.code, {
              children: "core.autocrlf"
            }), "\nsetting in colocated repos. See details at the\n", jsx(_components.a, {
              href: "https://github.com/jj-vcs/jj/issues/4048",
              children: "issue"
            }), ". ", jsx(_components.a, {
              href: "#user-content-fnref-1",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              className: "data-footnote-backref",
              children: "\u21A9"
            }), " ", jsxs(_components.a, {
              href: "#user-content-fnref-1-2",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1-2",
              className: "data-footnote-backref",
              children: ["\u21A9", jsx(_components.sup, {
                children: "2"
              })]
            })]
          }), "\n"]
        }), "\n", jsxs(_components.li, {
          id: "user-content-fn-2",
          children: ["\n", jsxs(_components.p, {
            children: ["To detect if a file is binary, Jujutsu currently checks if there is 0 byte\nin the file which is different from the algorithm of\n", jsx(_components.a, {
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
              href: "#user-content-fnref-2",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 2",
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
//# sourceMappingURL=windows-Cy0fZiMf.mjs.map
