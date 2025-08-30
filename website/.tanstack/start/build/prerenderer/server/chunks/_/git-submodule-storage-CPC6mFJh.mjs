import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Git submodule storage"
};
let extractedReferences = [{
  "href": "/design-docs/git-submodules"
}, {
  "href": "/design-docs/git-submodules"
}];
let structuredData = {
  "contents": [{
    "heading": "objective",
    "content": "Decide what approach(es) to Git submodule storage we should pursue.\nThe decision will be recorded in /git-submodules."
  }, {
    "heading": "use-cases-to-consider",
    "content": 'The submodule storage format should support the workflows specified in the\nsubmodules roadmap. It should be obvious how "Phase 1"\nrequirements will be supported, and we should have an idea of how "Phases 2,3,X"\nmight be supported.'
  }, {
    "heading": "use-cases-to-consider",
    "content": "Notable use cases and workflows are noted below."
  }, {
    "heading": "fetching-submodule-commits",
    "content": "Git's protocol is designed for communicating between copies of the same\nrepository. Notably, a Git fetch calculates the list of required objects by\nperforming reachability checks between the refs on the local and the remote\nside. We should expect that this will only work well if the submodule repository\nis stored as a local Git repository."
  }, {
    "heading": "fetching-submodule-commits",
    "content": "Rolling our own Git fetch is too complex to be worth the effort."
  }, {
    "heading": "jj-op-restore-and-operation-log-format",
    "content": 'We want jj op restore to restore to an "expected" state in the submodule.\nThere is a potential distinction between running jj op restore in the\nsuperproject vs in the submodule, and the expected behavior may be different in\neach case, e.g. in the superproject, it might be enough to restore the submodule\nworking copy, but in the submodule, refs also need to be restored.'
  }, {
    "heading": "jj-op-restore-and-operation-log-format",
    "content": "Currently, the operation log only references objects and refs in the\nsuperproject, so it is likely that proposed approaches will need to extend this\nformat. It is also worth considering that submodules may be added, updated or\nremoved in superproject commits, thus the list of submodules is likely to change\nover the repository's lifetime."
  }, {
    "heading": "nested-submodules",
    "content": "Git submodules may contain submodules themselves, so our chosen storage schemes\nshould support that."
  }, {
    "heading": "nested-submodules",
    "content": "We should consider limiting the recursion depth to avoid nasty edge cases (e.g.\ncyclical submodules.) that might surprise users."
  }, {
    "heading": "supporting-future-extensions",
    "content": "There are certain extensions we may want to make in the future, but we don't\nhave a timeline for them today. Proposed approaches should take these\nextensions into account (e.g. the approach should be theoretically extensible),\nbut a full proposal for implementing them is not necessary."
  }, {
    "heading": "supporting-future-extensions",
    "content": "These extensions are:"
  }, {
    "heading": "supporting-future-extensions",
    "content": "Non-git subrepos"
  }, {
    "heading": "supporting-future-extensions",
    "content": "Colocated Git repos"
  }, {
    "heading": "supporting-future-extensions",
    "content": "The superproject using a non-git backend"
  }, {
    "heading": "proposed-design",
    "content": "Git submodules will be stored as full jj repos. In the code, jj commands will\nonly interact with the submodule's repo as an entire unit, e.g. it cannot query\nthe submodule's commit backend directly. A well-abstracted submodule will extend\nwell to non-git backends and non-git subrepos."
  }, {
    "heading": "proposed-design",
    "content": "The main challenge with this approach is that the submodule repo can be in a\nstate that is internally valid (when considering only the submodule's repo), but\ninvalid when considering the superproject-submodule system. This will be managed\nby requiring all submodule interactions go through the superproject so that\nsuperproject-submodule coordination can occur. For example, jj will not allow\nthe user to work on the submodule's repo without going through the superproject\n(unlike Git)."
  }, {
    "heading": "proposed-design",
    "content": "The notable workflows could be addressed like so:"
  }, {
    "heading": "fetching-submodule-commits-1",
    "content": 'The submodule would fetch using the equivalent of jj git fetch. It remains to\nbe decided how a "recursive" fetch should work, especially if a newly fetched\nsuperproject commit references an unfetched submodule commit. A reasonable\napproximation would be to fetch all branches in the submodule, and then, if the\nsubmodule commit is still missing, gracefully handle it.'
  }, {
    "heading": "jj-op-restore-and-operation-log-format-1",
    "content": "As full repos, each submodule will have its own operation log. We will continue\nto use the existing operation log format, where each operation log tracks their\nown repo's commits. As commands are run in the superproject, corresponding\ncommands will be run in the submodule as necessary, e.g. checking out a\nsuperproject commit will cause a submodule commit to also be checked out."
  }, {
    "heading": "jj-op-restore-and-operation-log-format-1",
    "content": 'Since there is no association between a superproject operation and a submodule\noperation, jj op restore in the superproject will not restore the submodule to\na previous operation. Instead, the appropriate submodule operation(s) will be\ncreated. This is sufficient to preserve the superproject-submodule relationship;\nit precludes "recursive" restore (e.g. restoring branches in the superproject\nand submodules) but it seems unlikely that we will need such a thing.'
  }, {
    "heading": "nested-submodules-1",
    "content": "Since submodules are full repos, they can contain submodules themselves. Nesting\nis unlikely to complicate any of the core features, since the top-level\nsuperproject/submodule relationship is almost identical to the submodule/nested\nsubmodule relationship."
  }, {
    "heading": "extending-to-colocated-git-repos",
    "content": "Git expects submodules to be in .git/modules, so it will not understand this\nstorage format. To support colocated Git repos, we will have to change Git to\nallow a submodule's gitdir to be in an alternate location (e.g. we could add a\nnew submodule.<name>.gitdir config option). This is a simple change, so it\nshould be feasible."
  }, {
    "heading": "git-repos-in-the-main-git-backend",
    "content": "Since the Git backend contains a Git repository, an 'obvious' default would be\nto store them in the Git superproject the same way Git does, i.e. in\n.git/modules. Since Git submodules are full repositories that can have\nsubmodules, this storage scheme naturally extends to nested submodules."
  }, {
    "heading": "git-repos-in-the-main-git-backend",
    "content": "Most of the work in storing submodules and querying them would be well-isolated\nto the Git backend, which gives us a lot of flexibility to make changes without\naffecting the rest of jj. However, the operation log will need a significant\nrework since it isn't designed to reference submodules, and handling edge cases\n(e.g. a submodule being added/removed, nested submodules) will be tricky."
  }, {
    "heading": "git-repos-in-the-main-git-backend",
    "content": "This is rejected because handling that operation log complexity isn't worth it\nwhen very little of the work extends to non-Git backends."
  }, {
    "heading": "store-git-submodules-as-alternate-git-backends",
    "content": "Teach jj to use multiple commit backends and store Git submodules as Git\nbackends. Since submodules are separate from the 'main' backend, a repository\ncan use whatever backend it wants as its 'main' one, while still having Git\nsubmodules in the 'alternate' Git backends."
  }, {
    "heading": "store-git-submodules-as-alternate-git-backends",
    "content": "This approach extends fairly well to non-Git submodules (which would be stored\nin non-Git commit backends). However, this requires significantly reworking the\noperation log to account for multiple commit backends. It is also not clear how\nnested submodules will be supported since there isn't an obvious way to\nrepresent a nested submodule's relationship to its superproject."
  }],
  "headings": [{
    "id": "objective",
    "content": "Objective"
  }, {
    "id": "use-cases-to-consider",
    "content": "Use cases to consider"
  }, {
    "id": "fetching-submodule-commits",
    "content": "Fetching submodule commits"
  }, {
    "id": "jj-op-restore-and-operation-log-format",
    "content": '"jj op restore" and operation log format'
  }, {
    "id": "nested-submodules",
    "content": "Nested submodules"
  }, {
    "id": "supporting-future-extensions",
    "content": "Supporting future extensions"
  }, {
    "id": "proposed-design",
    "content": "Proposed design"
  }, {
    "id": "fetching-submodule-commits-1",
    "content": "Fetching submodule commits"
  }, {
    "id": "jj-op-restore-and-operation-log-format-1",
    "content": '"jj op restore" and operation log format'
  }, {
    "id": "nested-submodules-1",
    "content": "Nested submodules"
  }, {
    "id": "extending-to-colocated-git-repos",
    "content": "Extending to colocated Git repos"
  }, {
    "id": "alternatives-considered",
    "content": "Alternatives considered"
  }, {
    "id": "git-repos-in-the-main-git-backend",
    "content": "Git repos in the main Git backend"
  }, {
    "id": "store-git-submodules-as-alternate-git-backends",
    "content": "Store Git submodules as alternate Git backends"
  }]
};
const toc = [{
  depth: 2,
  url: "#objective",
  title: jsx(Fragment, {
    children: "Objective"
  })
}, {
  depth: 2,
  url: "#use-cases-to-consider",
  title: jsx(Fragment, {
    children: "Use cases to consider"
  })
}, {
  depth: 3,
  url: "#fetching-submodule-commits",
  title: jsx(Fragment, {
    children: "Fetching submodule commits"
  })
}, {
  depth: 3,
  url: "#jj-op-restore-and-operation-log-format",
  title: jsx(Fragment, {
    children: '"jj op restore" and operation log format'
  })
}, {
  depth: 3,
  url: "#nested-submodules",
  title: jsx(Fragment, {
    children: "Nested submodules"
  })
}, {
  depth: 3,
  url: "#supporting-future-extensions",
  title: jsx(Fragment, {
    children: "Supporting future extensions"
  })
}, {
  depth: 2,
  url: "#proposed-design",
  title: jsx(Fragment, {
    children: "Proposed design"
  })
}, {
  depth: 3,
  url: "#fetching-submodule-commits-1",
  title: jsx(Fragment, {
    children: "Fetching submodule commits"
  })
}, {
  depth: 3,
  url: "#jj-op-restore-and-operation-log-format-1",
  title: jsx(Fragment, {
    children: '"jj op restore" and operation log format'
  })
}, {
  depth: 3,
  url: "#nested-submodules-1",
  title: jsx(Fragment, {
    children: "Nested submodules"
  })
}, {
  depth: 3,
  url: "#extending-to-colocated-git-repos",
  title: jsx(Fragment, {
    children: "Extending to colocated Git repos"
  })
}, {
  depth: 2,
  url: "#alternatives-considered",
  title: jsx(Fragment, {
    children: "Alternatives considered"
  })
}, {
  depth: 3,
  url: "#git-repos-in-the-main-git-backend",
  title: jsx(Fragment, {
    children: "Git repos in the main Git backend"
  })
}, {
  depth: 3,
  url: "#store-git-submodules-as-alternate-git-backends",
  title: jsx(Fragment, {
    children: "Store Git submodules as alternate Git backends"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.h2, {
      id: "objective",
      children: "Objective"
    }), "\n", jsxs(_components.p, {
      children: ["Decide what approach(es) to Git submodule storage we should pursue.\nThe decision will be recorded in ", jsx(_components.a, {
        href: "/design-docs/git-submodules",
        children: "/git-submodules"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "use-cases-to-consider",
      children: "Use cases to consider"
    }), "\n", jsxs(_components.p, {
      children: ["The submodule storage format should support the workflows specified in the\n", jsx(_components.a, {
        href: "/design-docs/git-submodules",
        children: "submodules roadmap"
      }), '. It should be obvious how "Phase 1"\nrequirements will be supported, and we should have an idea of how "Phases 2,3,X"\nmight be supported.']
    }), "\n", jsx(_components.p, {
      children: "Notable use cases and workflows are noted below."
    }), "\n", jsx(_components.h3, {
      id: "fetching-submodule-commits",
      children: "Fetching submodule commits"
    }), "\n", jsx(_components.p, {
      children: "Git's protocol is designed for communicating between copies of the same\nrepository. Notably, a Git fetch calculates the list of required objects by\nperforming reachability checks between the refs on the local and the remote\nside. We should expect that this will only work well if the submodule repository\nis stored as a local Git repository."
    }), "\n", jsx(_components.p, {
      children: "Rolling our own Git fetch is too complex to be worth the effort."
    }), "\n", jsx(_components.h3, {
      id: "jj-op-restore-and-operation-log-format",
      children: '"jj op restore" and operation log format'
    }), "\n", jsxs(_components.p, {
      children: ["We want ", jsx(_components.code, {
        children: "jj op restore"
      }), ' to restore to an "expected" state in the submodule.\nThere is a potential distinction between running ', jsx(_components.code, {
        children: "jj op restore"
      }), " in the\nsuperproject vs in the submodule, and the expected behavior may be different in\neach case, e.g. in the superproject, it might be enough to restore the submodule\nworking copy, but in the submodule, refs also need to be restored."]
    }), "\n", jsx(_components.p, {
      children: "Currently, the operation log only references objects and refs in the\nsuperproject, so it is likely that proposed approaches will need to extend this\nformat. It is also worth considering that submodules may be added, updated or\nremoved in superproject commits, thus the list of submodules is likely to change\nover the repository's lifetime."
    }), "\n", jsx(_components.h3, {
      id: "nested-submodules",
      children: "Nested submodules"
    }), "\n", jsx(_components.p, {
      children: "Git submodules may contain submodules themselves, so our chosen storage schemes\nshould support that."
    }), "\n", jsx(_components.p, {
      children: "We should consider limiting the recursion depth to avoid nasty edge cases (e.g.\ncyclical submodules.) that might surprise users."
    }), "\n", jsx(_components.h3, {
      id: "supporting-future-extensions",
      children: "Supporting future extensions"
    }), "\n", jsx(_components.p, {
      children: "There are certain extensions we may want to make in the future, but we don't\nhave a timeline for them today. Proposed approaches should take these\nextensions into account (e.g. the approach should be theoretically extensible),\nbut a full proposal for implementing them is not necessary."
    }), "\n", jsx(_components.p, {
      children: "These extensions are:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Non-git subrepos"
      }), "\n", jsx(_components.li, {
        children: "Colocated Git repos"
      }), "\n", jsx(_components.li, {
        children: "The superproject using a non-git backend"
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "proposed-design",
      children: "Proposed design"
    }), "\n", jsx(_components.p, {
      children: "Git submodules will be stored as full jj repos. In the code, jj commands will\nonly interact with the submodule's repo as an entire unit, e.g. it cannot query\nthe submodule's commit backend directly. A well-abstracted submodule will extend\nwell to non-git backends and non-git subrepos."
    }), "\n", jsx(_components.p, {
      children: "The main challenge with this approach is that the submodule repo can be in a\nstate that is internally valid (when considering only the submodule's repo), but\ninvalid when considering the superproject-submodule system. This will be managed\nby requiring all submodule interactions go through the superproject so that\nsuperproject-submodule coordination can occur. For example, jj will not allow\nthe user to work on the submodule's repo without going through the superproject\n(unlike Git)."
    }), "\n", jsx(_components.p, {
      children: "The notable workflows could be addressed like so:"
    }), "\n", jsx(_components.h3, {
      id: "fetching-submodule-commits-1",
      children: "Fetching submodule commits"
    }), "\n", jsxs(_components.p, {
      children: ["The submodule would fetch using the equivalent of ", jsx(_components.code, {
        children: "jj git fetch"
      }), '. It remains to\nbe decided how a "recursive" fetch should work, especially if a newly fetched\nsuperproject commit references an unfetched submodule commit. A reasonable\napproximation would be to fetch all branches in the submodule, and then, if the\nsubmodule commit is still missing, gracefully handle it.']
    }), "\n", jsx(_components.h3, {
      id: "jj-op-restore-and-operation-log-format-1",
      children: '"jj op restore" and operation log format'
    }), "\n", jsx(_components.p, {
      children: "As full repos, each submodule will have its own operation log. We will continue\nto use the existing operation log format, where each operation log tracks their\nown repo's commits. As commands are run in the superproject, corresponding\ncommands will be run in the submodule as necessary, e.g. checking out a\nsuperproject commit will cause a submodule commit to also be checked out."
    }), "\n", jsxs(_components.p, {
      children: ["Since there is no association between a superproject operation and a submodule\noperation, ", jsx(_components.code, {
        children: "jj op restore"
      }), ' in the superproject will not restore the submodule to\na previous operation. Instead, the appropriate submodule operation(s) will be\ncreated. This is sufficient to preserve the superproject-submodule relationship;\nit precludes "recursive" restore (e.g. restoring branches in the superproject\nand submodules) but it seems unlikely that we will need such a thing.']
    }), "\n", jsx(_components.h3, {
      id: "nested-submodules-1",
      children: "Nested submodules"
    }), "\n", jsx(_components.p, {
      children: "Since submodules are full repos, they can contain submodules themselves. Nesting\nis unlikely to complicate any of the core features, since the top-level\nsuperproject/submodule relationship is almost identical to the submodule/nested\nsubmodule relationship."
    }), "\n", jsx(_components.h3, {
      id: "extending-to-colocated-git-repos",
      children: "Extending to colocated Git repos"
    }), "\n", jsxs(_components.p, {
      children: ["Git expects submodules to be in ", jsx(_components.code, {
        children: ".git/modules"
      }), ", so it will not understand this\nstorage format. To support colocated Git repos, we will have to change Git to\nallow a submodule's gitdir to be in an alternate location (e.g. we could add a\nnew ", jsx(_components.code, {
        children: "submodule.<name>.gitdir"
      }), " config option). This is a simple change, so it\nshould be feasible."]
    }), "\n", jsx(_components.h2, {
      id: "alternatives-considered",
      children: "Alternatives considered"
    }), "\n", jsx(_components.h3, {
      id: "git-repos-in-the-main-git-backend",
      children: "Git repos in the main Git backend"
    }), "\n", jsxs(_components.p, {
      children: ["Since the Git backend contains a Git repository, an 'obvious' default would be\nto store them in the Git superproject the same way Git does, i.e. in\n", jsx(_components.code, {
        children: ".git/modules"
      }), ". Since Git submodules are full repositories that can have\nsubmodules, this storage scheme naturally extends to nested submodules."]
    }), "\n", jsx(_components.p, {
      children: "Most of the work in storing submodules and querying them would be well-isolated\nto the Git backend, which gives us a lot of flexibility to make changes without\naffecting the rest of jj. However, the operation log will need a significant\nrework since it isn't designed to reference submodules, and handling edge cases\n(e.g. a submodule being added/removed, nested submodules) will be tricky."
    }), "\n", jsx(_components.p, {
      children: "This is rejected because handling that operation log complexity isn't worth it\nwhen very little of the work extends to non-Git backends."
    }), "\n", jsx(_components.h3, {
      id: "store-git-submodules-as-alternate-git-backends",
      children: "Store Git submodules as alternate Git backends"
    }), "\n", jsx(_components.p, {
      children: "Teach jj to use multiple commit backends and store Git submodules as Git\nbackends. Since submodules are separate from the 'main' backend, a repository\ncan use whatever backend it wants as its 'main' one, while still having Git\nsubmodules in the 'alternate' Git backends."
    }), "\n", jsx(_components.p, {
      children: "This approach extends fairly well to non-Git submodules (which would be stored\nin non-Git commit backends). However, this requires significantly reworking the\noperation log to account for multiple commit backends. It is also not clear how\nnested submodules will be supported since there isn't an obvious way to\nrepresent a nested submodule's relationship to its superproject."
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
//# sourceMappingURL=git-submodule-storage-CPC6mFJh.mjs.map
