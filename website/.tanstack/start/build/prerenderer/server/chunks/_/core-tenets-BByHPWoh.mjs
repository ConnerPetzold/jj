import { jsx, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Core tenets"
};
let extractedReferences = [];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "Separation of logic and UI: It should be as easy to create new UIs (CLIs,\nGUIs, TUIs, servers) without having to duplicate logic."
  }, {
    "heading": void 0,
    "content": "Easy-to-use APIs: It should be easy to create new commands. For example,\neach command should not have to worry about concurrency, working-copy state,\nand rebasing descendants of rewritten commits."
  }, {
    "heading": void 0,
    "content": "User-friendliness: Making the working copy a commit is simpler. This is\nhow the project started."
  }, {
    "heading": void 0,
    "content": "The repository is the source of truth: Most commands should operate on the\ncommit graph. The working copy is just one way of editing commits."
  }, {
    "heading": void 0,
    "content": "Pluggable storage: Must be easy to integrate with different commit storage,\nvirtual file systems and more."
  }, {
    "heading": void 0,
    "content": "Git-interop: Git is everywhere. We need to have good interop to be adopted."
  }, {
    "heading": void 0,
    "content": "All operations must be able to scale to Google-scale repos (lots of commits,\nlots of files): Laziness is important, must avoid accessing data\nunnecessarily."
  }, {
    "heading": void 0,
    "content": "Having as few states as possible."
  }, {
    "heading": void 0,
    "content": "Make it incredibly hard to lose work in your repository."
  }, {
    "heading": void 0,
    "content": "Concurrent modifications to the repo should be safe."
  }, {
    "heading": void 0,
    "content": "Allow concurrent edits on any commit, pending or finished."
  }, {
    "heading": void 0,
    "content": 'Make a "stacked diffs" workflow as easy as possible.'
  }],
  "headings": []
};
const toc = [];
function _createMdxContent(props) {
  const _components = {
    li: "li",
    ul: "ul",
    ...props.components
  };
  return jsxs(_components.ul, {
    children: ["\n", jsx(_components.li, {
      children: "Separation of logic and UI: It should be as easy to create new UIs (CLIs,\nGUIs, TUIs, servers) without having to duplicate logic."
    }), "\n", jsx(_components.li, {
      children: "Easy-to-use APIs: It should be easy to create new commands. For example,\neach command should not have to worry about concurrency, working-copy state,\nand rebasing descendants of rewritten commits."
    }), "\n", jsx(_components.li, {
      children: "User-friendliness: Making the working copy a commit is simpler. This is\nhow the project started."
    }), "\n", jsx(_components.li, {
      children: "The repository is the source of truth: Most commands should operate on the\ncommit graph. The working copy is just one way of editing commits."
    }), "\n", jsx(_components.li, {
      children: "Pluggable storage: Must be easy to integrate with different commit storage,\nvirtual file systems and more."
    }), "\n", jsx(_components.li, {
      children: "Git-interop: Git is everywhere. We need to have good interop to be adopted."
    }), "\n", jsx(_components.li, {
      children: "All operations must be able to scale to Google-scale repos (lots of commits,\nlots of files): Laziness is important, must avoid accessing data\nunnecessarily."
    }), "\n", jsx(_components.li, {
      children: "Having as few states as possible."
    }), "\n", jsx(_components.li, {
      children: "Make it incredibly hard to lose work in your repository."
    }), "\n", jsx(_components.li, {
      children: "Concurrent modifications to the repo should be safe."
    }), "\n", jsx(_components.li, {
      children: "Allow concurrent edits on any commit, pending or finished."
    }), "\n", jsx(_components.li, {
      children: 'Make a "stacked diffs" workflow as easy as possible.'
    }), "\n"]
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
//# sourceMappingURL=core-tenets-BByHPWoh.mjs.map
