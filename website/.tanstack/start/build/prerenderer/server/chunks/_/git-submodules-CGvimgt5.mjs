import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Git submodules"
};
let extractedReferences = [{
  "href": "https://git-scm.com/docs/gitsubmodules"
}, {
  "href": "/design-docs/git-submodule-storage"
}];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "This is an aspirational document that describes how jj will support Git\nsubmodules. Readers are assumed to have some familiarity with Git and Git\nsubmodules."
  }, {
    "heading": void 0,
    "content": "This document is a work in progress; submodules are a big feature, and relevant\ndetails will be filled in incrementally."
  }, {
    "heading": "objective",
    "content": "This proposal aims to replicate the workflows users are used to with Git\nsubmodules, e.g.:"
  }, {
    "heading": "objective",
    "content": "Cloning submodules"
  }, {
    "heading": "objective",
    "content": "Making new submodule commits and updating the superproject"
  }, {
    "heading": "objective",
    "content": "Fetching and pushing updates to the submodule's remote"
  }, {
    "heading": "objective",
    "content": "Viewing submodule history"
  }, {
    "heading": "objective",
    "content": "When it is convenient, this proposal will also aim to make submodules easier to\nuse than Git's implementation."
  }, {
    "heading": "non-goals",
    "content": "Non-Git 'submodules' (e.g. native jj submodules, other VCSes)"
  }, {
    "heading": "non-goals",
    "content": "Non-Git backends (e.g. Google internal backend)"
  }, {
    "heading": "non-goals",
    "content": "Changing how Git submodules are implemented in Git"
  }, {
    "heading": "background",
    "content": "We mainly want to support Git submodules for feature parity, since Git\nsubmodules are a standard feature in Git and are popular enough that we have\nreceived user requests for them. Secondarily (and distantly so), Git submodules\nare notoriously difficult to use, so there is an opportunity to improve the UX\nover Git's implementation."
  }, {
    "heading": "intro-to-git-submodules",
    "content": "Git submodules are a feature of Git\nthat allow a repository (submodule) to be embedded inside another repository\n(the superproject). Notably, a submodule is a full repository, complete with its\nown index, object store and ref store. It can be interacted with like any other\nrepository, regardless of the superproject."
  }, {
    "heading": "intro-to-git-submodules",
    "content": "In a superproject commit, submodule information is captured in two places:"
  }, {
    "heading": "intro-to-git-submodules",
    "content": "A gitlink entry in the commit's tree, where the value of the gitlink entry\nis the submodule commit id. This tells Git what to populate in the working\ntree."
  }, {
    "heading": "intro-to-git-submodules",
    "content": "A top level .gitmodules file. This file is in Git's config syntax and\nentries take the form submodule.<submodule-name>.*. These include many\nsettings about the submodules, but most importantly:"
  }, {
    "heading": "intro-to-git-submodules",
    "content": "submodule<submodule-name>.path contains the path from the root of the tree\nto the gitlink being described."
  }, {
    "heading": "intro-to-git-submodules",
    "content": "submodule<submodule-name>.url contains the url to clone the submodule\nfrom."
  }, {
    "heading": "intro-to-git-submodules",
    "content": `In the working tree, Git notices the presence of a submodule by the .git entry
(signifying the root of a Git repository working tree). This is either the
submodule's actual Git directory (an "old-form" submodule), or a .git file
pointing to <superproject-git-directory>/modules/<submodule-name>. The latter
is sometimes called the "absorbed form", and is Git's preferred mode of
operation.`
  }, {
    "heading": "roadmap",
    "content": "Git submodules should be implemented in an order that supports an increasing set\nof workflows, with the goal of getting feedback early and often. When support is\nincomplete, jj should not crash, but instead provide fallback behavior and warn\nthe user where needed."
  }, {
    "heading": "roadmap",
    "content": "The goal is to land good support for pure Jujutsu repositories, while colocated\nrepositories will be supported when convenient."
  }, {
    "heading": "roadmap",
    "content": "This section should be treated as a set of guidelines, not a strict order of\nwork."
  }, {
    "heading": "phase-1-readonly-submodules",
    "content": "This includes work that inspects submodule contents but does not create new\nobjects in the submodule. This requires a way to store submodules in a jj\nrepository that supports readonly operations."
  }, {
    "heading": "outcomes",
    "content": "Submodules can be cloned anew"
  }, {
    "heading": "outcomes",
    "content": "New submodule commits can be fetched"
  }, {
    "heading": "outcomes",
    "content": "Submodule history and branches can be viewed"
  }, {
    "heading": "outcomes",
    "content": "Submodule contents are populated in the working copy"
  }, {
    "heading": "outcomes",
    "content": "Superproject gitlink can be updated to an existing submodule commit"
  }, {
    "heading": "outcomes",
    "content": "Conflicts in the superproject gitlink can be resolved to an existing submodule\ncommit"
  }, {
    "heading": "phase-2-snapshotting-new-changes",
    "content": "This allows a user to write new contents to a submodule and its remote."
  }, {
    "heading": "outcomes-1",
    "content": "Changes in the working copy can be recorded in a submodule commit"
  }, {
    "heading": "outcomes-1",
    "content": "Submodule branches can be modified"
  }, {
    "heading": "outcomes-1",
    "content": "Submodules and their branches can be pushed to their remote"
  }, {
    "heading": "phase-3-mergingrebasingconflicts",
    "content": "This allows merging and rebasing of superproject commits in a content-aware way\n(in contrast to Git, where only the gitlink commit ids are compared), as well as\nworkflows that make resolving conflicts easy and sensible."
  }, {
    "heading": "phase-3-mergingrebasingconflicts",
    "content": "This can be done in tandem with Phase 2, but will likely require a significant\namount of design work on its own."
  }, {
    "heading": "outcomes-2",
    "content": "Merged/rebased submodules result in merged/rebased working copy content"
  }, {
    "heading": "outcomes-2",
    "content": "Merged/rebased working copy content can be committed, possibly by creating\nsensible merged/rebased submodule commits"
  }, {
    "heading": "outcomes-2",
    "content": "Merge/rebase between submodule and non-submodule gives a sensible result"
  }, {
    "heading": "outcomes-2",
    "content": "Merge/rebase between submodule A and submodule B gives a sensible result"
  }, {
    "heading": "phase--an-ideal-world",
    "content": "I.e. outcomes we would like to see if there were no constraints whatsoever."
  }, {
    "heading": "phase--an-ideal-world",
    "content": "Rewriting submodule commits rewrites descendants correctly and updates\nsuperproject gitlinks."
  }, {
    "heading": "phase--an-ideal-world",
    "content": "Submodule conflicts automatically resolve to the 'correct' submodule commits,\ne.g. a merge between superproject commits creating a merge of the submodule\ncommits."
  }, {
    "heading": "phase--an-ideal-world",
    "content": "Nested submodules are as easy to work with as non-nested submodules."
  }, {
    "heading": "phase--an-ideal-world",
    "content": "The operation log captures changes in the submodule."
  }, {
    "heading": "guiding-principles",
    "content": "TODO"
  }, {
    "heading": "storing-submodules",
    "content": "Possible approaches under discussion. See\n/git-submodule-storage."
  }, {
    "heading": "snapshotting-new-submodule-changes",
    "content": "TODO"
  }, {
    "heading": "mergingrebasing-with-submodules",
    "content": "TODO"
  }],
  "headings": [{
    "id": "objective",
    "content": "Objective"
  }, {
    "id": "non-goals",
    "content": "Non-goals"
  }, {
    "id": "background",
    "content": "Background"
  }, {
    "id": "intro-to-git-submodules",
    "content": "Intro to Git Submodules"
  }, {
    "id": "roadmap",
    "content": "Roadmap"
  }, {
    "id": "phase-1-readonly-submodules",
    "content": "Phase 1: Readonly submodules"
  }, {
    "id": "outcomes",
    "content": "Outcomes"
  }, {
    "id": "phase-2-snapshotting-new-changes",
    "content": "Phase 2: Snapshotting new changes"
  }, {
    "id": "outcomes-1",
    "content": "Outcomes"
  }, {
    "id": "phase-3-mergingrebasingconflicts",
    "content": "Phase 3: Merging/rebasing/conflicts"
  }, {
    "id": "outcomes-2",
    "content": "Outcomes"
  }, {
    "id": "phase--an-ideal-world",
    "content": "Phase ?: An ideal world"
  }, {
    "id": "design",
    "content": "Design"
  }, {
    "id": "guiding-principles",
    "content": "Guiding principles"
  }, {
    "id": "storing-submodules",
    "content": "Storing submodules"
  }, {
    "id": "snapshotting-new-submodule-changes",
    "content": "Snapshotting new submodule changes"
  }, {
    "id": "mergingrebasing-with-submodules",
    "content": "Merging/rebasing with submodules"
  }]
};
const toc = [{
  depth: 2,
  url: "#objective",
  title: jsx(Fragment, {
    children: "Objective"
  })
}, {
  depth: 3,
  url: "#non-goals",
  title: jsx(Fragment, {
    children: "Non-goals"
  })
}, {
  depth: 2,
  url: "#background",
  title: jsx(Fragment, {
    children: "Background"
  })
}, {
  depth: 3,
  url: "#intro-to-git-submodules",
  title: jsx(Fragment, {
    children: "Intro to Git Submodules"
  })
}, {
  depth: 2,
  url: "#roadmap",
  title: jsx(Fragment, {
    children: "Roadmap"
  })
}, {
  depth: 3,
  url: "#phase-1-readonly-submodules",
  title: jsx(Fragment, {
    children: "Phase 1: Readonly submodules"
  })
}, {
  depth: 4,
  url: "#outcomes",
  title: jsx(Fragment, {
    children: "Outcomes"
  })
}, {
  depth: 3,
  url: "#phase-2-snapshotting-new-changes",
  title: jsx(Fragment, {
    children: "Phase 2: Snapshotting new changes"
  })
}, {
  depth: 4,
  url: "#outcomes-1",
  title: jsx(Fragment, {
    children: "Outcomes"
  })
}, {
  depth: 3,
  url: "#phase-3-mergingrebasingconflicts",
  title: jsx(Fragment, {
    children: "Phase 3: Merging/rebasing/conflicts"
  })
}, {
  depth: 4,
  url: "#outcomes-2",
  title: jsx(Fragment, {
    children: "Outcomes"
  })
}, {
  depth: 3,
  url: "#phase--an-ideal-world",
  title: jsx(Fragment, {
    children: "Phase ?: An ideal world"
  })
}, {
  depth: 2,
  url: "#design",
  title: jsx(Fragment, {
    children: "Design"
  })
}, {
  depth: 3,
  url: "#guiding-principles",
  title: jsx(Fragment, {
    children: "Guiding principles"
  })
}, {
  depth: 3,
  url: "#storing-submodules",
  title: jsx(Fragment, {
    children: "Storing submodules"
  })
}, {
  depth: 3,
  url: "#snapshotting-new-submodule-changes",
  title: jsx(Fragment, {
    children: "Snapshotting new submodule changes"
  })
}, {
  depth: 3,
  url: "#mergingrebasing-with-submodules",
  title: jsx(Fragment, {
    children: "Merging/rebasing with submodules"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.p, {
      children: ["This is an aspirational document that describes how jj ", jsx(_components.em, {
        children: "will"
      }), " support Git\nsubmodules. Readers are assumed to have some familiarity with Git and Git\nsubmodules."]
    }), "\n", jsx(_components.p, {
      children: "This document is a work in progress; submodules are a big feature, and relevant\ndetails will be filled in incrementally."
    }), "\n", jsx(_components.h2, {
      id: "objective",
      children: "Objective"
    }), "\n", jsx(_components.p, {
      children: "This proposal aims to replicate the workflows users are used to with Git\nsubmodules, e.g.:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Cloning submodules"
      }), "\n", jsx(_components.li, {
        children: "Making new submodule commits and updating the superproject"
      }), "\n", jsx(_components.li, {
        children: "Fetching and pushing updates to the submodule's remote"
      }), "\n", jsx(_components.li, {
        children: "Viewing submodule history"
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "When it is convenient, this proposal will also aim to make submodules easier to\nuse than Git's implementation."
    }), "\n", jsx(_components.h3, {
      id: "non-goals",
      children: "Non-goals"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Non-Git 'submodules' (e.g. native jj submodules, other VCSes)"
      }), "\n", jsx(_components.li, {
        children: "Non-Git backends (e.g. Google internal backend)"
      }), "\n", jsx(_components.li, {
        children: "Changing how Git submodules are implemented in Git"
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", jsx(_components.p, {
      children: "We mainly want to support Git submodules for feature parity, since Git\nsubmodules are a standard feature in Git and are popular enough that we have\nreceived user requests for them. Secondarily (and distantly so), Git submodules\nare notoriously difficult to use, so there is an opportunity to improve the UX\nover Git's implementation."
    }), "\n", jsx(_components.h3, {
      id: "intro-to-git-submodules",
      children: "Intro to Git Submodules"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.a, {
        href: "https://git-scm.com/docs/gitsubmodules",
        children: "Git submodules"
      }), " are a feature of Git\nthat allow a repository (submodule) to be embedded inside another repository\n(the superproject). Notably, a submodule is a full repository, complete with its\nown index, object store and ref store. It can be interacted with like any other\nrepository, regardless of the superproject."]
    }), "\n", jsx(_components.p, {
      children: "In a superproject commit, submodule information is captured in two places:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["A ", jsx(_components.code, {
            children: "gitlink"
          }), " entry in the commit's tree, where the value of the ", jsx(_components.code, {
            children: "gitlink"
          }), " entry\nis the submodule commit id. This tells Git what to populate in the working\ntree."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["A top level ", jsx(_components.code, {
            children: ".gitmodules"
          }), " file. This file is in Git's config syntax and\nentries take the form ", jsx(_components.code, {
            children: "submodule.<submodule-name>.*"
          }), ". These include many\nsettings about the submodules, but most importantly:"]
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: ["\n", jsxs(_components.p, {
              children: [jsx(_components.code, {
                children: "submodule<submodule-name>.path"
              }), " contains the path from the root of the tree\nto the ", jsx(_components.code, {
                children: "gitlink"
              }), " being described."]
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["\n", jsxs(_components.p, {
              children: [jsx(_components.code, {
                children: "submodule<submodule-name>.url"
              }), " contains the url to clone the submodule\nfrom."]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["In the working tree, Git notices the presence of a submodule by the ", jsx(_components.code, {
        children: ".git"
      }), ` entry
(signifying the root of a Git repository working tree). This is either the
submodule's actual Git directory (an "old-form" submodule), or a `, jsx(_components.code, {
        children: ".git"
      }), " file\npointing to ", jsx(_components.code, {
        children: "<superproject-git-directory>/modules/<submodule-name>"
      }), `. The latter
is sometimes called the "absorbed form", and is Git's preferred mode of
operation.`]
    }), "\n", jsx(_components.h2, {
      id: "roadmap",
      children: "Roadmap"
    }), "\n", jsx(_components.p, {
      children: "Git submodules should be implemented in an order that supports an increasing set\nof workflows, with the goal of getting feedback early and often. When support is\nincomplete, jj should not crash, but instead provide fallback behavior and warn\nthe user where needed."
    }), "\n", jsx(_components.p, {
      children: "The goal is to land good support for pure Jujutsu repositories, while colocated\nrepositories will be supported when convenient."
    }), "\n", jsx(_components.p, {
      children: "This section should be treated as a set of guidelines, not a strict order of\nwork."
    }), "\n", jsx(_components.h3, {
      id: "phase-1-readonly-submodules",
      children: "Phase 1: Readonly submodules"
    }), "\n", jsx(_components.p, {
      children: "This includes work that inspects submodule contents but does not create new\nobjects in the submodule. This requires a way to store submodules in a jj\nrepository that supports readonly operations."
    }), "\n", jsx(_components.h4, {
      id: "outcomes",
      children: "Outcomes"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Submodules can be cloned anew"
      }), "\n", jsx(_components.li, {
        children: "New submodule commits can be fetched"
      }), "\n", jsx(_components.li, {
        children: "Submodule history and branches can be viewed"
      }), "\n", jsx(_components.li, {
        children: "Submodule contents are populated in the working copy"
      }), "\n", jsx(_components.li, {
        children: "Superproject gitlink can be updated to an existing submodule commit"
      }), "\n", jsx(_components.li, {
        children: "Conflicts in the superproject gitlink can be resolved to an existing submodule\ncommit"
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "phase-2-snapshotting-new-changes",
      children: "Phase 2: Snapshotting new changes"
    }), "\n", jsx(_components.p, {
      children: "This allows a user to write new contents to a submodule and its remote."
    }), "\n", jsx(_components.h4, {
      id: "outcomes-1",
      children: "Outcomes"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Changes in the working copy can be recorded in a submodule commit"
      }), "\n", jsx(_components.li, {
        children: "Submodule branches can be modified"
      }), "\n", jsx(_components.li, {
        children: "Submodules and their branches can be pushed to their remote"
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "phase-3-mergingrebasingconflicts",
      children: "Phase 3: Merging/rebasing/conflicts"
    }), "\n", jsx(_components.p, {
      children: "This allows merging and rebasing of superproject commits in a content-aware way\n(in contrast to Git, where only the gitlink commit ids are compared), as well as\nworkflows that make resolving conflicts easy and sensible."
    }), "\n", jsx(_components.p, {
      children: "This can be done in tandem with Phase 2, but will likely require a significant\namount of design work on its own."
    }), "\n", jsx(_components.h4, {
      id: "outcomes-2",
      children: "Outcomes"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Merged/rebased submodules result in merged/rebased working copy content"
      }), "\n", jsx(_components.li, {
        children: "Merged/rebased working copy content can be committed, possibly by creating\nsensible merged/rebased submodule commits"
      }), "\n", jsx(_components.li, {
        children: "Merge/rebase between submodule and non-submodule gives a sensible result"
      }), "\n", jsx(_components.li, {
        children: "Merge/rebase between submodule A and submodule B gives a sensible result"
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "phase--an-ideal-world",
      children: "Phase ?: An ideal world"
    }), "\n", jsx(_components.p, {
      children: "I.e. outcomes we would like to see if there were no constraints whatsoever."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Rewriting submodule commits rewrites descendants correctly and updates\nsuperproject gitlinks."
      }), "\n", jsx(_components.li, {
        children: "Submodule conflicts automatically resolve to the 'correct' submodule commits,\ne.g. a merge between superproject commits creating a merge of the submodule\ncommits."
      }), "\n", jsx(_components.li, {
        children: "Nested submodules are as easy to work with as non-nested submodules."
      }), "\n", jsx(_components.li, {
        children: "The operation log captures changes in the submodule."
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "design",
      children: "Design"
    }), "\n", jsx(_components.h3, {
      id: "guiding-principles",
      children: "Guiding principles"
    }), "\n", jsx(_components.p, {
      children: "TODO"
    }), "\n", jsx(_components.h3, {
      id: "storing-submodules",
      children: "Storing submodules"
    }), "\n", jsxs(_components.p, {
      children: ["Possible approaches under discussion. See\n", jsx(_components.a, {
        href: "/design-docs/git-submodule-storage",
        children: "/git-submodule-storage"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "snapshotting-new-submodule-changes",
      children: "Snapshotting new submodule changes"
    }), "\n", jsx(_components.p, {
      children: "TODO"
    }), "\n", jsx(_components.h3, {
      id: "mergingrebasing-with-submodules",
      children: "Merging/rebasing with submodules"
    }), "\n", jsx(_components.p, {
      children: "TODO"
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
//# sourceMappingURL=git-submodules-CGvimgt5.mjs.map
