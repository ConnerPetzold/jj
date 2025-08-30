import { jsx, jsxs, Fragment } from 'file:///Users/conner/jj/website/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "CLI reference"
};
let extractedReferences = [];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "type: warning"
  }, {
    "heading": void 0,
    "content": "This CLI reference is experimental. It is automatically generated, but\ndoes not match the jj help output exactly."
  }, {
    "heading": void 0,
    "content": "Run jj help <COMMAND> for more authoritative documentation."
  }, {
    "heading": void 0,
    "content": "If you see a significant difference, feel free to file a bug, or a PR to note the difference here."
  }],
  "headings": []
};
const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    ...props.components
  }, { Callout } = _components;
  if (!Callout) _missingMdxReference("Callout");
  return jsxs(Fragment, {
    children: [jsxs(Callout, {
      type: "warning",
      children: [jsxs(_components.p, {
        children: ["This CLI reference is experimental. It is automatically generated, but\ndoes not match the ", jsx(_components.code, {
          children: "jj help"
        }), " output exactly."]
      }), jsxs(_components.p, {
        children: ["Run ", jsx(_components.code, {
          children: "jj help <COMMAND>"
        }), " for more authoritative documentation."]
      }), jsx(_components.p, {
        children: "If you see a significant difference, feel free to file a bug, or a PR to note the difference here."
      })]
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
function _missingMdxReference(id, component) {
  throw new Error("Expected component `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

export { MDXContent as default, extractedReferences, frontmatter, structuredData, toc };
//# sourceMappingURL=cli-reference-yBDk1n-u.mjs.map
