import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Conflicts"
};
let extractedReferences = [{
  "href": "/concepts/concurrency"
}, {
  "href": "../git-compatibility#format-mapping-details"
}];
let structuredData = {
  "contents": [{
    "heading": "introduction",
    "content": "Conflicts can happen when two changes are applied to some state. This document\nis about conflicts between changes to files (not about conflicts between\nchanges to bookmark targets, for example)."
  }, {
    "heading": "introduction",
    "content": "For example, if you merge two branches in a repo, there may be conflicting\nchanges between the two branches. Most DVCSs require you to resolve those\nconflicts before you can finish the merge operation. Jujutsu instead records\nthe conflicts in the commit and lets you resolve the conflict when you feel like\nit."
  }, {
    "heading": "data-model",
    "content": "When a merge conflict happens, it is recorded as an ordered list of tree objects\nlinked from the commit (instead of the usual single tree per commit). There will\nalways be an odd number of trees linked from the commit. You can think of the\nfirst tree as a start tree, and the subsequent pairs of trees to apply the diff\nbetween onto the start. Examples:"
  }, {
    "heading": "data-model",
    "content": "If the commit has trees A, B, C, D, and E it means that the contents should be\ncalculated as A+(C-B)+(E-D)."
  }, {
    "heading": "data-model",
    "content": "A three-way merge between A and C with B as base can be represented as a\ncommit with trees A, B, and C, also known as A+(C-B)."
  }, {
    "heading": "data-model",
    "content": "The resulting tree contents is calculated on demand. Note that we often don't\nneed to merge the entire tree. For example, when checking out a commit in the\nworking copy, we only need to merge parts of the tree that differs from the\ntree that was previously checked out in the working copy. As another example,\nwhen listing paths with conflicts, we only need to traverse parts of the tree\nthat cannot be trivially resolved; if only one side modified lib/, then we\ndon't need to look for conflicts in that sub-tree."
  }, {
    "heading": "data-model",
    "content": "When merging trees, if we can't resolve a sub-tree conflict trivially by looking\nat just the tree id, we recurse into the sub-tree. Similarly, if we can't\nresolve a file conflict trivially by looking at just the id, we recursive into\nthe hunks within the file."
  }, {
    "heading": "data-model",
    "content": "See here for how conflicts are\nstored when using the Git commit backend."
  }, {
    "heading": "conflict-simplification",
    "content": "Remember that a 3-way merge can be written A+C-B. If one of those states is\nitself a conflict, then we simply insert the conflict expression there. Then we\nsimplify by removing canceling terms. These two steps are implemented in\nMerge::flatten() and Merge::simplify() in merge.rs."
  }, {
    "heading": "conflict-simplification",
    "content": "For example, let's say commit B is based on A and is rebased to C, where it\nresults in conflicts (C+(B-A)), which the user leaves unresolved. If the\ncommit is then rebased to D, the result will be D+((C+(B-A))-C). That expression\ncan be simplified to D+(B-A), which is a regular 3-way merge between D and B\nwith A as base (no trace of C). This is what lets the user keep old commits\nrebased to head without resolving conflicts and still not get messy recursive\nconflicts."
  }, {
    "heading": "conflict-simplification",
    "content": "As another example, let's go through what happens when you back out a conflicted\ncommit. Let's say we have the usual E = C+(B-A) conflict on top of\nnon-conflict state C. We then revert that change. Reverting a change means\napplying its reverse diff -(E-C), so the result is E+(C-E) =\n(C+(B-A))+(C-(C+(B-A))), which we can simplify to just C (i.e. no conflict)."
  }, {
    "heading": "same-change-rule",
    "content": 'When all sides of a conflict make the same change,\nwe automatically consider it resolved to that value. We call this\n"the same-change rule". This behavior matches what Git and Mercurial do.\nDarcs, on the other hand, considers it a conflict. The automatic conflict\nresolution we do is lossy in terms of conflict algebra; it means that rebasing\na commit onto a commit that has the same changes (or a subset thereof) and then\nrebasing it back will lose changes (for a real-life example see bug #6369).\nWe do it because it is more user-friendly in the vast majority of cases. We\nmay at some point experiment with a config option to disable the same-change\nrule.'
  }],
  "headings": [{
    "id": "introduction",
    "content": "Introduction"
  }, {
    "id": "data-model",
    "content": "Data model"
  }, {
    "id": "conflict-simplification",
    "content": "Conflict simplification"
  }, {
    "id": "same-change-rule",
    "content": "Same-change rule"
  }]
};
const toc = [{
  depth: 2,
  url: "#introduction",
  title: jsx(Fragment, {
    children: "Introduction"
  })
}, {
  depth: 2,
  url: "#data-model",
  title: jsx(Fragment, {
    children: "Data model"
  })
}, {
  depth: 2,
  url: "#conflict-simplification",
  title: jsx(Fragment, {
    children: "Conflict simplification"
  })
}, {
  depth: 2,
  url: "#same-change-rule",
  title: jsx(Fragment, {
    children: "Same-change rule"
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
    children: [jsx(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", jsxs(_components.p, {
      children: ["Conflicts can happen when two changes are applied to some state. This document\nis about conflicts between changes to files (not about ", jsx(_components.a, {
        href: "/concepts/concurrency",
        children: "conflicts between\nchanges to bookmark targets"
      }), ", for example)."]
    }), "\n", jsx(_components.p, {
      children: "For example, if you merge two branches in a repo, there may be conflicting\nchanges between the two branches. Most DVCSs require you to resolve those\nconflicts before you can finish the merge operation. Jujutsu instead records\nthe conflicts in the commit and lets you resolve the conflict when you feel like\nit."
    }), "\n", jsx(_components.h2, {
      id: "data-model",
      children: "Data model"
    }), "\n", jsx(_components.p, {
      children: "When a merge conflict happens, it is recorded as an ordered list of tree objects\nlinked from the commit (instead of the usual single tree per commit). There will\nalways be an odd number of trees linked from the commit. You can think of the\nfirst tree as a start tree, and the subsequent pairs of trees to apply the diff\nbetween onto the start. Examples:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "If the commit has trees A, B, C, D, and E it means that the contents should be\ncalculated as A+(C-B)+(E-D)."
      }), "\n", jsx(_components.li, {
        children: "A three-way merge between A and C with B as base can be represented as a\ncommit with trees A, B, and C, also known as A+(C-B)."
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["The resulting tree contents is calculated on demand. Note that we often don't\nneed to merge the entire tree. For example, when checking out a commit in the\nworking copy, we only need to merge parts of the tree that differs from the\ntree that was previously checked out in the working copy. As another example,\nwhen listing paths with conflicts, we only need to traverse parts of the tree\nthat cannot be trivially resolved; if only one side modified ", jsx(_components.code, {
        children: "lib/"
      }), ", then we\ndon't need to look for conflicts in that sub-tree."]
    }), "\n", jsx(_components.p, {
      children: "When merging trees, if we can't resolve a sub-tree conflict trivially by looking\nat just the tree id, we recurse into the sub-tree. Similarly, if we can't\nresolve a file conflict trivially by looking at just the id, we recursive into\nthe hunks within the file."
    }), "\n", jsxs(_components.p, {
      children: ["See ", jsx(_components.a, {
        href: "../git-compatibility#format-mapping-details",
        children: "here"
      }), " for how conflicts are\nstored when using the Git commit backend."]
    }), "\n", jsx(_components.h2, {
      id: "conflict-simplification",
      children: "Conflict simplification"
    }), "\n", jsxs(_components.p, {
      children: ["Remember that a 3-way merge can be written ", jsx(_components.code, {
        children: "A+C-B"
      }), ". If one of those states is\nitself a conflict, then we simply insert the conflict expression there. Then we\nsimplify by removing canceling terms. These two steps are implemented in\n", jsx(_components.code, {
        children: "Merge::flatten()"
      }), " and ", jsx(_components.code, {
        children: "Merge::simplify()"
      }), " in ", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/blob/main/lib/src/merge.rs",
        children: jsx(_components.code, {
          children: "merge.rs"
        })
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["For example, let's say commit B is based on A and is rebased to C, where it\nresults in conflicts (", jsx(_components.code, {
        children: "C+(B-A)"
      }), "), which the user leaves unresolved. If the\ncommit is then rebased to D, the result will be ", jsx(_components.code, {
        children: "D+((C+(B-A))-C)"
      }), ". That expression\ncan be simplified to ", jsx(_components.code, {
        children: "D+(B-A)"
      }), ", which is a regular 3-way merge between D and B\nwith A as base (no trace of C). This is what lets the user keep old commits\nrebased to head without resolving conflicts and still not get messy recursive\nconflicts."]
    }), "\n", jsxs(_components.p, {
      children: ["As another example, let's go through what happens when you back out a conflicted\ncommit. Let's say we have the usual ", jsx(_components.code, {
        children: "E = C+(B-A)"
      }), " conflict on top of\nnon-conflict state ", jsx(_components.code, {
        children: "C"
      }), ". We then revert that change. Reverting a change means\napplying its reverse diff ", jsx(_components.code, {
        children: "-(E-C)"
      }), ", so the result is ", jsx(_components.code, {
        children: "E+(C-E) = (C+(B-A))+(C-(C+(B-A)))"
      }), ", which we can simplify to just ", jsx(_components.code, {
        children: "C"
      }), " (i.e. no conflict)."]
    }), "\n", jsx(_components.h2, {
      id: "same-change-rule",
      children: "Same-change rule"
    }), "\n", jsxs(_components.p, {
      children: ["When all sides of a conflict make the same change,\n", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/blob/53272510bf879086d83bb5eea1406f75ba31f138/lib/src/merge.rs#L85-L99",
        children: "we automatically consider it resolved to that value"
      }), '. We call this\n"the same-change rule". This behavior matches what Git and Mercurial do.\nDarcs, on the other hand, considers it a conflict. The automatic conflict\nresolution we do is lossy in terms of conflict algebra; it means that rebasing\na commit onto a commit that has the same changes (or a subset thereof) and then\nrebasing it back will lose changes (for a real-life example see ', jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/issues/6369",
        children: "bug #6369"
      }), ").\nWe do it because it is more user-friendly in the vast majority of cases. We\nmay at some point experiment with a config option to disable the same-change\nrule."]
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
//# sourceMappingURL=conflicts-CRfUSldF.mjs.map
