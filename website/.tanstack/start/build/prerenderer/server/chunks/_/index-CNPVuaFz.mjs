import { jsxs, jsx, Fragment } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Jujutsu\u2014a version control system",
  "sidebarTitle": "Home"
};
let extractedReferences = [{
  "href": "/latest"
}, {
  "href": "/prerelease"
}, {
  "href": "https://github.com/jj-vcs/jj"
}, {
  "href": "https://github.com/jj-vcs/jj?tab=readme-ov-file#readme"
}, {
  "href": "./getting-started/install-and-setup"
}, {
  "href": "./getting-started/tutorial"
}, {
  "href": "./getting-started/github"
}, {
  "href": "./roadmap"
}, {
  "href": "./changelog"
}];
let structuredData = {
  "contents": [{
    "heading": "welcome-to-jjs-documentation-website",
    "content": "The complete list of the available documentation pages is located in\nthe sidebar on the left of the page. The sidebar may be hidden; if so,\nyou can open it either by widening your browser window or by clicking\non the hamburger menu that appears in this situation."
  }, {
    "heading": "welcome-to-jjs-documentation-website",
    "content": "Additional help is available using the jj help command if you have\njj installed."
  }, {
    "heading": "welcome-to-jjs-documentation-website",
    "content": "You may want to jump to:"
  }, {
    "heading": "welcome-to-jjs-documentation-website",
    "content": "Documentation for the latest released version of jj."
  }, {
    "heading": "welcome-to-jjs-documentation-website",
    "content": "Documentation for the unreleased version of jj. This version of the docs corresponds to the main branch of the jj repo."
  }, {
    "heading": "some-useful-links",
    "content": "GitHub repo for jj"
  }, {
    "heading": "some-useful-links",
    "content": "Overview of jj in the repo's README"
  }, {
    "heading": "some-useful-links",
    "content": "Installation and setup"
  }, {
    "heading": "some-useful-links",
    "content": "Tutorial and bird's eye view"
  }, {
    "heading": "some-useful-links",
    "content": "Working with GitHub"
  }, {
    "heading": "some-useful-links",
    "content": "Development roadmap"
  }, {
    "heading": "some-useful-links",
    "content": "Changelog"
  }],
  "headings": [{
    "id": "welcome-to-jjs-documentation-website",
    "content": "Welcome to jj's documentation website!"
  }, {
    "id": "some-useful-links",
    "content": "Some useful links"
  }]
};
const toc = [{
  depth: 2,
  url: "#welcome-to-jjs-documentation-website",
  title: jsxs(Fragment, {
    children: ["Welcome to ", jsx("code", {
      children: "jj"
    }), "'s documentation website!"]
  })
}, {
  depth: 2,
  url: "#some-useful-links",
  title: jsx(Fragment, {
    children: "Some useful links"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx("figure", {
      children: jsx("img", {
        title: "jj logo",
        src: "images/jj-logo.svg",
        width: "320",
        height: "320"
      })
    }), "\n", jsxs(_components.h2, {
      id: "welcome-to-jjs-documentation-website",
      children: ["Welcome to ", jsx(_components.code, {
        children: "jj"
      }), "'s documentation website!"]
    }), "\n", "\n", jsx(_components.p, {
      children: "The complete list of the available documentation pages is located in\nthe sidebar on the left of the page. The sidebar may be hidden; if so,\nyou can open it either by widening your browser window or by clicking\non the hamburger menu that appears in this situation."
    }), "\n", jsxs(_components.p, {
      children: ["Additional help is available using the ", jsx(_components.code, {
        children: "jj help"
      }), " command if you have\n", jsx(_components.code, {
        children: "jj"
      }), " installed."]
    }), "\n", jsx(_components.p, {
      children: "You may want to jump to:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["Documentation for the ", jsxs(_components.a, {
          href: "/latest",
          children: ["latest released version of ", jsx(_components.code, {
            children: "jj"
          })]
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: ["Documentation for the ", jsxs(_components.a, {
          href: "/prerelease",
          children: ["unreleased version of ", jsx(_components.code, {
            children: "jj"
          })]
        }), ". This version of the docs corresponds to the ", jsx(_components.code, {
          children: "main"
        }), " branch of the ", jsx(_components.code, {
          children: "jj"
        }), " repo."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "some-useful-links",
      children: "Some useful links"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsxs(_components.a, {
          href: "https://github.com/jj-vcs/jj",
          children: ["GitHub repo for ", jsx(_components.code, {
            children: "jj"
          })]
        })
      }), "\n", jsxs(_components.li, {
        children: ["Overview of ", jsx(_components.code, {
          children: "jj"
        }), " in the repo's ", jsx(_components.a, {
          href: "https://github.com/jj-vcs/jj?tab=readme-ov-file#readme",
          children: "README"
        })]
      }), "\n", jsx(_components.li, {
        children: jsx(_components.a, {
          href: "./getting-started/install-and-setup",
          children: "Installation and setup"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.a, {
          href: "./getting-started/tutorial",
          children: "Tutorial and bird's eye view"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.a, {
          href: "./getting-started/github",
          children: "Working with GitHub"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.a, {
          href: "./roadmap",
          children: "Development roadmap"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.a, {
          href: "./changelog",
          children: "Changelog"
        })
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
//# sourceMappingURL=index-CNPVuaFz.mjs.map
