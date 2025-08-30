import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Jujutsu Design Docs"
};
let extractedReferences = [{
  "href": "/contributing/design-doc-blueprint"
}];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "Jujutsu uses Design Docs to drive technical decisions on large projects and it\nis the place to discuss your proposed design or new component. It is a very\nthorough process, in which the design doc must be approved before PRs for the\nfeature will be accepted. It shares some similarities with Rust RFCs but\nmostly addresses technical problems and gauges the technical and social\nconcerns of all stakeholders."
  }, {
    "heading": void 0,
    "content": "So if you want to start building a native backend or the server component for\nJujutsu, you'll need to go through this process."
  }, {
    "heading": "process",
    "content": "Add a new markdown document to docs/design, named after your improvement\nor project."
  }, {
    "heading": "process",
    "content": "Describe the current state of the world and the things you want to improve."
  }, {
    "heading": "process",
    "content": "Wait for the Maintainers and Stakeholders to show up."
  }, {
    "heading": "process",
    "content": "Iterate until everyone accepts the change in normal codereview fashion."
  }, {
    "heading": "blueprint-template",
    "content": "You can find the base template of a new Design Doc\nhere."
  }],
  "headings": [{
    "id": "process",
    "content": "Process"
  }, {
    "id": "blueprint-template",
    "content": "Blueprint (Template)"
  }]
};
const toc = [{
  depth: 2,
  url: "#process",
  title: jsx(Fragment, {
    children: "Process"
  })
}, {
  depth: 2,
  url: "#blueprint-template",
  title: jsx(Fragment, {
    children: "Blueprint (Template)"
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
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.p, {
      children: ["Jujutsu uses Design Docs to drive technical decisions on large projects and it\nis the place to discuss your proposed design or new component. It is a very\nthorough process, in which the design doc must be approved before PRs for the\nfeature will be accepted. It shares some similarities with ", jsx(_components.a, {
        href: "https://github.com/rust-lang/rfcs",
        children: "Rust RFCs"
      }), " but\nmostly addresses ", jsx(_components.em, {
        children: "technical"
      }), " problems and gauges the technical and social\nconcerns of all stakeholders."]
    }), "\n", jsx(_components.p, {
      children: "So if you want to start building a native backend or the server component for\nJujutsu, you'll need to go through this process."
    }), "\n", jsx(_components.h2, {
      id: "process",
      children: "Process"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["Add a new markdown document to ", jsx(_components.code, {
          children: "docs/design"
        }), ", named after your improvement\nor project."]
      }), "\n", jsx(_components.li, {
        children: "Describe the current state of the world and the things you want to improve."
      }), "\n", jsx(_components.li, {
        children: "Wait for the Maintainers and Stakeholders to show up."
      }), "\n", jsx(_components.li, {
        children: "Iterate until everyone accepts the change in normal codereview fashion."
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "blueprint-template",
      children: "Blueprint (Template)"
    }), "\n", jsxs(_components.p, {
      children: ["You can find the base template of a new Design Doc\n", jsx(_components.a, {
        href: "/contributing/design-doc-blueprint",
        children: "here"
      }), "."]
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
//# sourceMappingURL=design-docs-CeOicsV5.mjs.map
