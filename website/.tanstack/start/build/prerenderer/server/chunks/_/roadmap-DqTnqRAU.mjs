import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Roadmap"
};
let extractedReferences = [];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "This documents some of the goals we have. Many of them are quite independent."
  }, {
    "heading": void 0,
    "content": "Note: Most people contributing to Jujutsu do so in their spare time, which\nmeans that we cannot attach any target dates to any of the goals below."
  }, {
    "heading": "support-for-copies-and-renames",
    "content": "We want to support copy tracing in a way that leaves it up to the commit backend\nto either record or detect copies. That should let us work with existing Git\nrepos (Git does not record copies, it detects them on the fly) as well as with\nvery large repos where detection would be too slow. See\ndesign doc."
  }, {
    "heading": "forge-integrations",
    "content": "We would like to make it easier to work with various popular forges by providing\nsomething like jj github submit, jj gitlab submit, and jj gerrit send. For\npopular forges, we might include that support by default in the standard jj\nbinary."
  }, {
    "heading": "submodule-support",
    "content": "Git submodules are used frequently enough in large Git repos that we will\nprobably need to support them. There are still big open\nquestions around UX."
  }, {
    "heading": "better-rust-api-for-uis",
    "content": "UIs like gg currently have to duplicate quite a bit of logic from jj-cli. We\nneed to make this code not specific to the CLI (e.g. return status objects\ninstead of printing messages) and move it into jj-lib."
  }, {
    "heading": "rpc-api",
    "content": "One problem with writing tools using the Rust API is that they will only work\nwith the backends they were compiled with. For example, a regular gg build\nwill not work on Google repos because it doesn't have the backends necessary to\nload them. We want to provide an RPC API for tools that want to work with an\nunknown build of jj by having the tool run something like jj api to give it\nan address to talk to."
  }, {
    "heading": "rpc-api",
    "content": "In addition to helping with the problem of unknown backends, having an RPC API\nshould make it easier for tools like VS Code that are not written in Rust. The\nRPC API will probably be at a higher abstraction level than the Rust API."
  }, {
    "heading": "rpc-api",
    "content": "See design doc."
  }, {
    "heading": "open-source-cloud-based-repos-server-and-daemon-process",
    "content": "Google has an internal Jujutsu server backed by a database. This server allows\ncommits and repos (operation logs) to be stored in the cloud (i.e. the database).\nWorking copies can still be stored locally."
  }, {
    "heading": "open-source-cloud-based-repos-server-and-daemon-process",
    "content": "In order to reduce latency, there is a local daemon process that caches reads\nand writes. It also prefetches of objects it thinks the client might ask for\nnext. In also helps with write latency by optimistically answering write\nrequests (it therefore needs to know the server's hashing scheme so it can\nreturn the right IDs)."
  }, {
    "heading": "open-source-cloud-based-repos-server-and-daemon-process",
    "content": "We (the project, not necessarily Google) want to provide a similar experience\nfor all users. We would therefore like to create a similar server and daemon.\nThe daemon might be the same process as for the RPC API mentioned above."
  }, {
    "heading": "virtual-file-system-vfs",
    "content": "For very large projects and/or large files, it can be expensive to update the\nworking copy. We want to provide a VFS to help with that. Updating the working\ncopy to another commit can then be done simply by telling the VFS to use the\nother commit as base, without needing to download any large files in the target\ncommit until the user asks for them via the file system. A VFS can also make it\ncheap to snapshot the working copy by keeping track of all changes compared to\nthe base commit."
  }, {
    "heading": "virtual-file-system-vfs",
    "content": "Having a VFS can also be very benefial for jj run, since we can then\ncheaply create temporary working copies for the commands to run in."
  }, {
    "heading": "better-support-for-large-files",
    "content": "We have talked about somehow using content-defined chunking (CDC) to reduce\nstorage and transfer costs for large files. Maybe we will store files in our\nfuture cloud-based server using the same model as XetHub."
  }],
  "headings": [{
    "id": "support-for-copies-and-renames",
    "content": "Support for copies and renames"
  }, {
    "id": "forge-integrations",
    "content": "Forge integrations"
  }, {
    "id": "submodule-support",
    "content": "Submodule support"
  }, {
    "id": "better-rust-api-for-uis",
    "content": "Better Rust API for UIs"
  }, {
    "id": "rpc-api",
    "content": "RPC API"
  }, {
    "id": "open-source-cloud-based-repos-server-and-daemon-process",
    "content": "Open-source cloud-based repos (server and daemon process)"
  }, {
    "id": "virtual-file-system-vfs",
    "content": "Virtual file system (VFS)"
  }, {
    "id": "better-support-for-large-files",
    "content": "Better support for large files"
  }]
};
const toc = [{
  depth: 2,
  url: "#support-for-copies-and-renames",
  title: jsx(Fragment, {
    children: "Support for copies and renames"
  })
}, {
  depth: 2,
  url: "#forge-integrations",
  title: jsx(Fragment, {
    children: "Forge integrations"
  })
}, {
  depth: 2,
  url: "#submodule-support",
  title: jsx(Fragment, {
    children: "Submodule support"
  })
}, {
  depth: 2,
  url: "#better-rust-api-for-uis",
  title: jsx(Fragment, {
    children: "Better Rust API for UIs"
  })
}, {
  depth: 2,
  url: "#rpc-api",
  title: jsx(Fragment, {
    children: "RPC API"
  })
}, {
  depth: 2,
  url: "#open-source-cloud-based-repos-server-and-daemon-process",
  title: jsx(Fragment, {
    children: "Open-source cloud-based repos (server and daemon process)"
  })
}, {
  depth: 2,
  url: "#virtual-file-system-vfs",
  title: jsx(Fragment, {
    children: "Virtual file system (VFS)"
  })
}, {
  depth: 2,
  url: "#better-support-for-large-files",
  title: jsx(Fragment, {
    children: "Better support for large files"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: "This documents some of the goals we have. Many of them are quite independent."
    }), "\n", jsxs(_components.blockquote, {
      children: ["\n", jsxs(_components.p, {
        children: [jsx(_components.strong, {
          children: "Note:"
        }), " Most people contributing to Jujutsu do so in their spare time, which\nmeans that we cannot attach any target dates to any of the goals below."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "support-for-copies-and-renames",
      children: "Support for copies and renames"
    }), "\n", jsxs(_components.p, {
      children: ["We want to support copy tracing in a way that leaves it up to the commit backend\nto either record or detect copies. That should let us work with existing Git\nrepos (Git does not record copies, it detects them on the fly) as well as with\nvery large repos where detection would be too slow. See\n", jsx(_components.a, {
        href: "/design-docs/copy-tracking",
        children: "design doc"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "forge-integrations",
      children: "Forge integrations"
    }), "\n", jsxs(_components.p, {
      children: ["We would like to make it easier to work with various popular forges by providing\nsomething like ", jsx(_components.code, {
        children: "jj github submit"
      }), ", ", jsx(_components.code, {
        children: "jj gitlab submit"
      }), ", and ", jsx(_components.code, {
        children: "jj gerrit send"
      }), ". For\npopular forges, we might include that support by default in the standard ", jsx(_components.code, {
        children: "jj"
      }), "\nbinary."]
    }), "\n", jsx(_components.h2, {
      id: "submodule-support",
      children: "Submodule support"
    }), "\n", jsxs(_components.p, {
      children: ["Git submodules are used frequently enough in large Git repos that we will\nprobably need to ", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/issues/494",
        children: "support them"
      }), ". There are still big open\nquestions around UX."]
    }), "\n", jsx(_components.h2, {
      id: "better-rust-api-for-uis",
      children: "Better Rust API for UIs"
    }), "\n", jsxs(_components.p, {
      children: ["UIs like ", jsx(_components.a, {
        href: "https://github.com/gulbanana/gg",
        children: "gg"
      }), " currently have to duplicate quite a bit of logic from ", jsx(_components.code, {
        children: "jj-cli"
      }), ". We\nneed to make this code not specific to the CLI (e.g. return status objects\ninstead of printing messages) and move it into ", jsx(_components.code, {
        children: "jj-lib"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "rpc-api",
      children: "RPC API"
    }), "\n", jsxs(_components.p, {
      children: ["One problem with writing tools using the Rust API is that they will only work\nwith the backends they were compiled with. For example, a regular ", jsx(_components.a, {
        href: "https://github.com/gulbanana/gg",
        children: "gg"
      }), " build\nwill not work on Google repos because it doesn't have the backends necessary to\nload them. We want to provide an RPC API for tools that want to work with an\nunknown build of ", jsx(_components.code, {
        children: "jj"
      }), " by having the tool run something like ", jsx(_components.code, {
        children: "jj api"
      }), " to give it\nan address to talk to."]
    }), "\n", jsx(_components.p, {
      children: "In addition to helping with the problem of unknown backends, having an RPC API\nshould make it easier for tools like VS Code that are not written in Rust. The\nRPC API will probably be at a higher abstraction level than the Rust API."
    }), "\n", jsxs(_components.p, {
      children: ["See ", jsx(_components.a, {
        href: "https://docs.google.com/document/d/1rOKvutee5TVYpFhh_UDNZDxfUKyrJ8rjCNpFaNHOHwU/edit?usp=sharing&resourcekey=0-922ApyoAjuXN_uTKqmCqjg",
        children: "design doc"
      }), "."]
    }), "\n", jsx(_components.h2, {
      id: "open-source-cloud-based-repos-server-and-daemon-process",
      children: "Open-source cloud-based repos (server and daemon process)"
    }), "\n", jsx(_components.p, {
      children: "Google has an internal Jujutsu server backed by a database. This server allows\ncommits and repos (operation logs) to be stored in the cloud (i.e. the database).\nWorking copies can still be stored locally."
    }), "\n", jsx(_components.p, {
      children: "In order to reduce latency, there is a local daemon process that caches reads\nand writes. It also prefetches of objects it thinks the client might ask for\nnext. In also helps with write latency by optimistically answering write\nrequests (it therefore needs to know the server's hashing scheme so it can\nreturn the right IDs)."
    }), "\n", jsx(_components.p, {
      children: "We (the project, not necessarily Google) want to provide a similar experience\nfor all users. We would therefore like to create a similar server and daemon.\nThe daemon might be the same process as for the RPC API mentioned above."
    }), "\n", jsx(_components.h2, {
      id: "virtual-file-system-vfs",
      children: "Virtual file system (VFS)"
    }), "\n", jsx(_components.p, {
      children: "For very large projects and/or large files, it can be expensive to update the\nworking copy. We want to provide a VFS to help with that. Updating the working\ncopy to another commit can then be done simply by telling the VFS to use the\nother commit as base, without needing to download any large files in the target\ncommit until the user asks for them via the file system. A VFS can also make it\ncheap to snapshot the working copy by keeping track of all changes compared to\nthe base commit."
    }), "\n", jsxs(_components.p, {
      children: ["Having a VFS can also be very benefial for ", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/issues/1869",
        children: jsx(_components.code, {
          children: "jj run"
        })
      }), ", since we can then\ncheaply create temporary working copies for the commands to run in."]
    }), "\n", jsx(_components.h2, {
      id: "better-support-for-large-files",
      children: "Better support for large files"
    }), "\n", jsxs(_components.p, {
      children: ["We have talked about somehow using content-defined chunking (CDC) to reduce\nstorage and transfer costs for large files. Maybe we will store files in our\nfuture cloud-based server using the same model as ", jsx(_components.a, {
        href: "https://web.archive.org/web/20240914200921/https://xethub.com/assets/docs/concepts/xet-storage",
        children: "XetHub"
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
//# sourceMappingURL=roadmap-DqTnqRAU.mjs.map
