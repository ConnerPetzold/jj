import { jsx, jsxs, Fragment } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Related work"
};
let extractedReferences = [{
  "href": "https://github.com/arxanas/git-branchless"
}, {
  "href": "https://sapling-scm.com/"
}, {
  "href": "https://www.mercurial-scm.org/"
}, {
  "href": "https://sapling-scm.com/docs/addons/isl"
}, {
  "href": "/comparisons/sapling"
}, {
  "href": "https://gitup.co/"
}, {
  "href": "https://github.com/git-up/GitUp#gitupkit"
}, {
  "href": "https://gitless.com/"
}, {
  "href": "https://www.breezy-vcs.org/"
}, {
  "href": "https://gitbutler.com/"
}];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "Similar tools:"
  }, {
    "heading": void 0,
    "content": "git-branchless: Helps you use a\nbranchless workflow in your Git repo. Supports anonymous branching, undo,\nand faster rebase (git move). Under heavy development and quickly gaining\nnew features."
  }, {
    "heading": void 0,
    "content": "Sapling: A heavily modified fork of\nMercurial developed and used at Meta. It\nis compatible with Git, has undo functionality, and\na graphical interface.\nSee how it is different from Jujutsu."
  }, {
    "heading": void 0,
    "content": "GitUp: A Mac-only GUI for Git. Like Jujutsu, supports\nundo and restoring the repo to an earlier snapshot. Backed by its\nGitUpKit library."
  }, {
    "heading": void 0,
    "content": `Gitless: Another attempt at providing a simpler
interface for Git. Like Jujutsu, does not have an "index"/"staging area"
concept. Also doesn't move the working-copy changes between branches (which
we do simply as a consequence of making the working copy a commit).`
  }, {
    "heading": void 0,
    "content": "Breezy: Another VCS that's similar in that it\nhas multiple storage backends, including its own format as well as .git\nsupport."
  }, {
    "heading": void 0,
    "content": "GitButler: A Git client that works with multiple\nvirtual branches simultaneously, first-class conflicts, and operations history."
  }],
  "headings": []
};
const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: "Similar tools:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.a, {
          href: "https://github.com/arxanas/git-branchless",
          children: "git-branchless"
        }), ": Helps you use a\nbranchless workflow in your Git repo. Supports anonymous branching, undo,\nand faster rebase (", jsx(_components.code, {
          children: "git move"
        }), "). Under heavy development and quickly gaining\nnew features."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.a, {
          href: "https://sapling-scm.com/",
          children: "Sapling"
        }), ": A heavily modified fork of\n", jsx(_components.a, {
          href: "https://www.mercurial-scm.org/",
          children: "Mercurial"
        }), " developed and used at Meta. It\nis compatible with Git, has undo functionality, and\n", jsx(_components.a, {
          href: "https://sapling-scm.com/docs/addons/isl",
          children: "a graphical interface"
        }), ".\nSee ", jsx(_components.a, {
          href: "/comparisons/sapling",
          children: "how it is different from Jujutsu"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.a, {
          href: "https://gitup.co/",
          children: "GitUp"
        }), ": A Mac-only GUI for Git. Like Jujutsu, supports\nundo and restoring the repo to an earlier snapshot. Backed by its\n", jsx(_components.a, {
          href: "https://github.com/git-up/GitUp#gitupkit",
          children: "GitUpKit library"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.a, {
          href: "https://gitless.com/",
          children: "Gitless"
        }), `: Another attempt at providing a simpler
interface for Git. Like Jujutsu, does not have an "index"/"staging area"
concept. Also doesn't move the working-copy changes between branches (which
we do simply as a consequence of making the working copy a commit).`]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.a, {
          href: "https://www.breezy-vcs.org/",
          children: "Breezy"
        }), ": Another VCS that's similar in that it\nhas multiple storage backends, including its own format as well as .git\nsupport."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.a, {
          href: "https://gitbutler.com/",
          children: "GitButler"
        }), ": A Git client that works with multiple\nvirtual branches simultaneously, first-class conflicts, and operations history."]
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
//# sourceMappingURL=related-work-zJVkpdFI.mjs.map
