import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Style guide"
};
let extractedReferences = [];
let structuredData = {
  "contents": [{
    "heading": "panics",
    "content": "Panics are not allowed, especially in code that may run on a server. Calling\n.unwrap() is okay if it's guaranteed to be safe by previous checks or\ndocumented invariants. For example, if a function is documented as requiring\na non-empty slice as input, it's fine to call slice[0] and panic."
  }, {
    "heading": "markdown",
    "content": "Try to wrap at 80 columns. We don't have a formatter yet."
  }, {
    "heading": "prefer-lower-level-tests-to-end-to-end-tests",
    "content": "When possible, prefer lower-level tests that don't use the jj binary.\nEnd-to-end tests are much slower than similar tests that create a repo using\njj-lib (roughly 100x slower). It's also often easier to test edge cases in\nlower-level tests."
  }, {
    "heading": "prefer-lower-level-tests-to-end-to-end-tests",
    "content": "It can still be useful to add a test case or two to check that the lower-level\nfunctionality is correctly hooked up in the CLI. For example, the end-to-end\ntests for jj log don't need to test that all kinds of revsets are evaluated\ncorrectly (we have tests in jj-lib for that), but they should check that the\n-r flag is respected."
  }, {
    "heading": "prefer-lower-level-tests-to-end-to-end-tests",
    "content": "Use end-to-end tests for testing the CLI commands themselves."
  }],
  "headings": [{
    "id": "panics",
    "content": "Panics"
  }, {
    "id": "markdown",
    "content": "Markdown"
  }, {
    "id": "prefer-lower-level-tests-to-end-to-end-tests",
    "content": "Prefer lower-level tests to end-to-end tests"
  }]
};
const toc = [{
  depth: 2,
  url: "#panics",
  title: jsx(Fragment, {
    children: "Panics"
  })
}, {
  depth: 2,
  url: "#markdown",
  title: jsx(Fragment, {
    children: "Markdown"
  })
}, {
  depth: 2,
  url: "#prefer-lower-level-tests-to-end-to-end-tests",
  title: jsx(Fragment, {
    children: "Prefer lower-level tests to end-to-end tests"
  })
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.h2, {
      id: "panics",
      children: "Panics"
    }), "\n", jsxs(_components.p, {
      children: ["Panics are not allowed, especially in code that may run on a server. Calling\n", jsx(_components.code, {
        children: ".unwrap()"
      }), " is okay if it's guaranteed to be safe by previous checks or\ndocumented invariants. For example, if a function is documented as requiring\na non-empty slice as input, it's fine to call ", jsx(_components.code, {
        children: "slice[0]"
      }), " and panic."]
    }), "\n", jsx(_components.h2, {
      id: "markdown",
      children: "Markdown"
    }), "\n", jsx(_components.p, {
      children: "Try to wrap at 80 columns. We don't have a formatter yet."
    }), "\n", jsx(_components.h2, {
      id: "prefer-lower-level-tests-to-end-to-end-tests",
      children: "Prefer lower-level tests to end-to-end tests"
    }), "\n", jsxs(_components.p, {
      children: ["When possible, prefer lower-level tests that don't use the ", jsx(_components.code, {
        children: "jj"
      }), " binary.\nEnd-to-end tests are much slower than similar tests that create a repo using\n", jsx(_components.code, {
        children: "jj-lib"
      }), " (roughly 100x slower). It's also often easier to test edge cases in\nlower-level tests."]
    }), "\n", jsxs(_components.p, {
      children: ["It can still be useful to add a test case or two to check that the lower-level\nfunctionality is correctly hooked up in the CLI. For example, the end-to-end\ntests for ", jsx(_components.code, {
        children: "jj log"
      }), " don't need to test that all kinds of revsets are evaluated\ncorrectly (we have tests in ", jsx(_components.code, {
        children: "jj-lib"
      }), " for that), but they should check that the\n", jsx(_components.code, {
        children: "-r"
      }), " flag is respected."]
    }), "\n", jsx(_components.p, {
      children: "Use end-to-end tests for testing the CLI commands themselves."
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
//# sourceMappingURL=style-guide-BrHAqnAM.mjs.map
