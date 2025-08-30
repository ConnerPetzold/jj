import { jsx, jsxs, Fragment } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Title"
};
let extractedReferences = [{
  "href": "mailto:your-name@reachable.com"
}];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "A cool name for your Project"
  }, {
    "heading": void 0,
    "content": "Author: Your-Name"
  }, {
    "heading": void 0,
    "content": "If there are multiple authors, just list them all"
  }, {
    "heading": "summary",
    "content": "A short summary of your project/re-design/component and what problems it\naddresses in about 3-10 sentences."
  }, {
    "heading": "state-of-the-feature-as-of-version-optional",
    "content": "The state of the feature you want to improve and where it currently falls\nshort. If there's nothing to compare to, leave it out."
  }, {
    "heading": "prior-work-optional",
    "content": "Does this feature exist somewhere else and which tradeoffs it made."
  }, {
    "heading": "prior-work-optional",
    "content": "If there's no prior work, then use the related work section below."
  }, {
    "heading": "goals-and-non-goals",
    "content": "Direct goals of the project and features deemed not worth pursuing."
  }, {
    "heading": "overview",
    "content": "A detailed overview of the project and the improvements it brings."
  }, {
    "heading": "detailed-design",
    "content": "The place to describe all new interfaces and interactions and how it plays into\nthe existing code and behavior. This is the place for all nitty-gritty details\nwhich interact with the system."
  }, {
    "heading": "alternatives-considered-optional",
    "content": "Other alternatives to your suggested approach, and why they fall short."
  }, {
    "heading": "issues-addressed-optional",
    "content": "A list of issues which are addressed by this design."
  }, {
    "heading": "related-work-optional",
    "content": "If there's a feature in another VCS which shares some similarities to your\nproposed work, it belongs here. An example would be Jujutsu sparse workspaces\nand Perforce client workspaces."
  }, {
    "heading": "future-possibilities",
    "content": "The section for things which could be added to it or deemed out of scope during\nthe discussion."
  }],
  "headings": [{
    "id": "summary",
    "content": "Summary"
  }, {
    "id": "state-of-the-feature-as-of-version-optional",
    "content": "State of the Feature as of $VERSION (optional)"
  }, {
    "id": "prior-work-optional",
    "content": "Prior work (optional)"
  }, {
    "id": "goals-and-non-goals",
    "content": "Goals and non-goals"
  }, {
    "id": "overview",
    "content": "Overview"
  }, {
    "id": "detailed-design",
    "content": "Detailed Design"
  }, {
    "id": "alternatives-considered-optional",
    "content": "Alternatives considered (optional)"
  }, {
    "id": "issues-addressed-optional",
    "content": "Issues addressed (optional)"
  }, {
    "id": "related-work-optional",
    "content": "Related Work (optional)"
  }, {
    "id": "future-possibilities",
    "content": "Future Possibilities"
  }]
};
const toc = [{
  depth: 2,
  url: "#summary",
  title: jsx(Fragment, {
    children: "Summary"
  })
}, {
  depth: 2,
  url: "#state-of-the-feature-as-of-version-optional",
  title: jsxs(Fragment, {
    children: ["State of the Feature as of ", jsx("code", {
      children: "$VERSION"
    }), " (optional)"]
  })
}, {
  depth: 2,
  url: "#prior-work-optional",
  title: jsx(Fragment, {
    children: "Prior work (optional)"
  })
}, {
  depth: 2,
  url: "#goals-and-non-goals",
  title: jsx(Fragment, {
    children: "Goals and non-goals"
  })
}, {
  depth: 2,
  url: "#overview",
  title: jsx(Fragment, {
    children: "Overview"
  })
}, {
  depth: 3,
  url: "#detailed-design",
  title: jsx(Fragment, {
    children: "Detailed Design"
  })
}, {
  depth: 2,
  url: "#alternatives-considered-optional",
  title: jsx(Fragment, {
    children: "Alternatives considered (optional)"
  })
}, {
  depth: 2,
  url: "#issues-addressed-optional",
  title: jsx(Fragment, {
    children: "Issues addressed (optional)"
  })
}, {
  depth: 2,
  url: "#related-work-optional",
  title: jsx(Fragment, {
    children: "Related Work (optional)"
  })
}, {
  depth: 2,
  url: "#future-possibilities",
  title: jsx(Fragment, {
    children: "Future Possibilities"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "A cool name for your Project"
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["Author: ", jsx(_components.a, {
        href: "mailto:your-name@reachable.com",
        children: "Your-Name"
      })]
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "If there are multiple authors, just list them all"
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", jsx(_components.p, {
      children: "A short summary of your project/re-design/component and what problems it\naddresses in about 3-10 sentences."
    }), "\n", jsxs(_components.h2, {
      id: "state-of-the-feature-as-of-version-optional",
      children: ["State of the Feature as of ", jsx(_components.code, {
        children: "$VERSION"
      }), " (optional)"]
    }), "\n", jsx(_components.p, {
      children: "The state of the feature you want to improve and where it currently falls\nshort. If there's nothing to compare to, leave it out."
    }), "\n", jsx(_components.h2, {
      id: "prior-work-optional",
      children: "Prior work (optional)"
    }), "\n", jsx(_components.p, {
      children: "Does this feature exist somewhere else and which tradeoffs it made."
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsx(_components.p, {
        children: "If there's no prior work, then use the related work section below."
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "goals-and-non-goals",
      children: "Goals and non-goals"
    }), "\n", jsx(_components.p, {
      children: "Direct goals of the project and features deemed not worth pursuing."
    }), "\n", jsx(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", jsx(_components.p, {
      children: "A detailed overview of the project and the improvements it brings."
    }), "\n", jsx(_components.h3, {
      id: "detailed-design",
      children: "Detailed Design"
    }), "\n", jsx(_components.p, {
      children: "The place to describe all new interfaces and interactions and how it plays into\nthe existing code and behavior. This is the place for all nitty-gritty details\nwhich interact with the system."
    }), "\n", jsx(_components.h2, {
      id: "alternatives-considered-optional",
      children: "Alternatives considered (optional)"
    }), "\n", jsx(_components.p, {
      children: "Other alternatives to your suggested approach, and why they fall short."
    }), "\n", jsx(_components.h2, {
      id: "issues-addressed-optional",
      children: "Issues addressed (optional)"
    }), "\n", jsx(_components.p, {
      children: "A list of issues which are addressed by this design."
    }), "\n", jsx(_components.h2, {
      id: "related-work-optional",
      children: "Related Work (optional)"
    }), "\n", jsx(_components.p, {
      children: "If there's a feature in another VCS which shares some similarities to your\nproposed work, it belongs here. An example would be Jujutsu sparse workspaces\nand Perforce client workspaces."
    }), "\n", jsx(_components.h2, {
      id: "future-possibilities",
      children: "Future Possibilities"
    }), "\n", jsx(_components.p, {
      children: "The section for things which could be added to it or deemed out of scope during\nthe discussion."
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
//# sourceMappingURL=design-doc-blueprint-D3koxAbN.mjs.map
