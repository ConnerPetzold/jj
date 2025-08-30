import { jsx, jsxs, Fragment } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Remote/`@git` tracking branches"
};
let extractedReferences = [{
  "href": "https://github.com/jj-vcs/jj/issues/1278"
}, {
  "href": "https://github.com/jj-vcs/jj/issues/1136"
}, {
  "href": "https://github.com/jj-vcs/jj/issues/1666"
}, {
  "href": "https://github.com/jj-vcs/jj/issues/1690"
}, {
  "href": "https://github.com/jj-vcs/jj/issues/1734"
}, {
  "href": "https://github.com/jj-vcs/jj/pull/1739"
}];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "This is a plan to implement more Git-like remote tracking branch UX."
  }, {
    "heading": "objective",
    "content": "jj imports all remote branches to local branches by default. As described in\n#1136, this doesn't interact nicely with Git if we have multiple Git remotes\nwith a number of branches. The git.auto-local-bookmark config can mitigate this\nproblem, but we'll get locally-deleted branches instead."
  }, {
    "heading": "objective",
    "content": "The goal of this plan is to implement"
  }, {
    "heading": "objective",
    "content": "proper support for tracking/non-tracking remote branches"
  }, {
    "heading": "objective",
    "content": "logically consistent data model for importing/exporting Git refs"
  }, {
    "heading": "current-data-model-as-of-jj-080",
    "content": 'Under the current model, all remote branches are "tracking" branches, and\nremote changes are merged into the local counterparts.'
  }, {
    "heading": "current-data-model-as-of-jj-080",
    "content": 'Remote branches are stored in both branches[name].remote_targets and\ngit_refs["refs/remotes"]. These two are mostly kept in sync, but there\nare two scenarios where remote-tracking branches and git refs can diverge:'
  }, {
    "heading": "current-data-model-as-of-jj-080",
    "content": "jj branch forget"
  }, {
    "heading": "current-data-model-as-of-jj-080",
    "content": "jj op revert/restore in colocated repo"
  }, {
    "heading": "current-data-model-as-of-jj-080",
    "content": 'Pseudo @git tracking branches are stored in git_refs["refs/heads"]. We\nneed special case to resolve @git branches, and their behavior is slightly\ndifferent from the other remote-tracking branches.'
  }, {
    "heading": "proposed-data-model",
    "content": "We'll add a per-remote-branch state to distinguish non-tracking branches\nfrom tracking ones."
  }, {
    "heading": "proposed-data-model",
    "content": `We'll add a per-remote view-like object to record the last known remote
branches. It will replace branches[name].remote_targets in the current model.
@git branches will be stored in remotes["git"].`
  }, {
    "heading": "proposed-data-model",
    "content": "With the proposed data model, we can"
  }, {
    "heading": "proposed-data-model",
    "content": "naturally support remote branches which have no local counterparts"
  }, {
    "heading": "proposed-data-model",
    "content": 'deduplicate branches[name].remote_targets and git_refs["refs/remotes"]'
  }, {
    "heading": "importexport-data-flow",
    "content": "jj git import applies diff between git_refs and remotes[]. git_refs is\nalways copied from the backing Git repo."
  }, {
    "heading": "importexport-data-flow",
    "content": "jj git export copies jj's remotes view back to the Git repo. If a ref in\nthe Git repo has been updated since the last import, the ref isn't exported."
  }, {
    "heading": "importexport-data-flow",
    "content": "jj op restore never rolls back git_refs."
  }, {
    "heading": "tracking-state",
    "content": "The git.auto-local-bookmark config knob is applied when importing new remote\nbranch. jj branch sub commands will be added to change the tracking state."
  }, {
    "heading": "tracking-state",
    "content": "A branch target to be merged is calculated based on the state."
  }, {
    "heading": "mapping-to-the-current-data-model",
    "content": 'New remotes["git"].branches corresponds to git_refs["refs/heads"], but\nforgotten branches are removed from remotes["git"].branches.'
  }, {
    "heading": "mapping-to-the-current-data-model",
    "content": 'New remotes["git"].tags corresponds to git_refs["refs/tags"].'
  }, {
    "heading": "mapping-to-the-current-data-model",
    "content": 'New remotes["git"].head corresponds to git_head.'
  }, {
    "heading": "mapping-to-the-current-data-model",
    "content": "New remotes[remote].branches corresponds to\nbranches[].remote_targets[remote]."
  }, {
    "heading": "mapping-to-the-current-data-model",
    "content": "state = new|tracking doesn't exist in the current model. It's determined\nby git.auto-local-bookmark config."
  }, {
    "heading": "common-command-behaviors",
    "content": "In the following sections, a merge is expressed as adds - removes.\nIn particular, a merge of local and remote targets is\n[local, remote] - [known_remote]."
  }, {
    "heading": "fetchimport",
    "content": "jj git fetch"
  }, {
    "heading": "fetchimport",
    "content": "Fetches remote changes to the backing Git repo."
  }, {
    "heading": "fetchimport",
    "content": "Import changes only for remotes[remote].branches[glob] (see below)"
  }, {
    "heading": "fetchimport",
    "content": "TODO: how about fetched .tags?"
  }, {
    "heading": "fetchimport",
    "content": "jj git import"
  }, {
    "heading": "fetchimport",
    "content": "Copies git_refs from the backing Git repo."
  }, {
    "heading": "fetchimport",
    "content": "Calculates diff from the known remotes to the new git_refs."
  }, {
    "heading": "fetchimport",
    "content": 'git_refs["refs/heads"] - remotes["git"].branches'
  }, {
    "heading": "fetchimport",
    "content": 'git_refs["refs/tags"] - remotes["git"].tags'
  }, {
    "heading": "fetchimport",
    "content": 'TBD: "HEAD" - remotes["git"].head (unused)'
  }, {
    "heading": "fetchimport",
    "content": 'git_refs["refs/remotes/{remote}"] - remotes[remote]'
  }, {
    "heading": "fetchimport",
    "content": "Merges diff in local branches and tags if state is tracking."
  }, {
    "heading": "fetchimport",
    "content": "If the known target is absent, the default state should be\ncalculated. This also applies to previously-forgotten branches."
  }, {
    "heading": "fetchimport",
    "content": "Updates remotes reflecting the import."
  }, {
    "heading": "fetchimport",
    "content": "Abandons commits that are no longer referenced."
  }, {
    "heading": "pushexport",
    "content": "jj git push"
  }, {
    "heading": "pushexport",
    "content": "Calculates diff from the known remotes[remote] to the local changes."
  }, {
    "heading": "pushexport",
    "content": "branches - remotes[remote].branches"
  }, {
    "heading": "pushexport",
    "content": "If state is new (i.e. untracked), the known remote branch target\nis considered absent."
  }, {
    "heading": "pushexport",
    "content": "If state is new, and if the local branch target is absent, the\ndiff [absent, remote] - absent is noop. So it's not allowed to push\ndeleted branch to untracked remote."
  }, {
    "heading": "pushexport",
    "content": "TODO: Copy Git's --force-with-lease behavior?"
  }, {
    "heading": "pushexport",
    "content": "tags (not implemented, but should be the same as branches)"
  }, {
    "heading": "pushexport",
    "content": "Pushes diff to the remote Git repo (as well as remote tracking branches\nin the backing Git repo.)"
  }, {
    "heading": "pushexport",
    "content": "Updates remotes[remote] and git_refs reflecting the push."
  }, {
    "heading": "pushexport",
    "content": "jj git export"
  }, {
    "heading": "pushexport",
    "content": 'Copies local branches/tags back to remotes["git"].'
  }, {
    "heading": "pushexport",
    "content": `Conceptually, remotes["git"].branches[name].state can be set to
untracked. Untracked local branches won't be exported to Git.`
  }, {
    "heading": "pushexport",
    "content": 'If remotes["git"].branches[name] is absent, the default\nstate = tracking applies. This also applies to forgotten branches.'
  }, {
    "heading": "pushexport",
    "content": "tags (not implemented, but should be the same as branches)"
  }, {
    "heading": "pushexport",
    "content": "Calculates diff from the known git_refs to the new remotes[remote]."
  }, {
    "heading": "pushexport",
    "content": "Applies diff to the backing Git repo."
  }, {
    "heading": "pushexport",
    "content": "Updates git_refs reflecting the export."
  }, {
    "heading": "pushexport",
    "content": "If a ref failed to export at the step 3, the preceding steps should also be\nrolled back for that ref."
  }, {
    "heading": "initclone",
    "content": "jj init"
  }, {
    "heading": "initclone",
    "content": "Import, track, and merge per git.auto_local_branch config."
  }, {
    "heading": "initclone",
    "content": "If !git.auto_local_branch, no tracking state will be set."
  }, {
    "heading": "initclone",
    "content": "jj git clone"
  }, {
    "heading": "initclone",
    "content": "Import, track, and merge per git.auto_local_branch config."
  }, {
    "heading": "initclone",
    "content": "The default branch will be tracked regardless of git.auto_local_branch\nconfig. This isn't technically needed, but will help users coming from Git."
  }, {
    "heading": "branch",
    "content": "jj branch set {name}"
  }, {
    "heading": "branch",
    "content": "Sets local branches[name] entry."
  }, {
    "heading": "branch",
    "content": "jj branch delete {name}"
  }, {
    "heading": "branch",
    "content": "Removes local branches[name] entry."
  }, {
    "heading": "branch",
    "content": "jj branch forget {name}"
  }, {
    "heading": "branch",
    "content": "Removes local branches[name] entry if exists."
  }, {
    "heading": "branch",
    "content": "Removes remotes[remote].branches[name] entries if exist.\nTODO: maybe better to not remove non-tracking remote branches?"
  }, {
    "heading": "branch",
    "content": "jj branch track {name}@{remote} (new command)"
  }, {
    "heading": "branch",
    "content": "Merges [local, remote] - [absent] in local branch."
  }, {
    "heading": "branch",
    "content": 'Same as "fetching/importing existing branch from untracked remote".'
  }, {
    "heading": "branch",
    "content": "Sets remotes[remote].branches[name].state = tracking."
  }, {
    "heading": "branch",
    "content": "jj branch untrack {name}@{remote} (new command)"
  }, {
    "heading": "branch",
    "content": "Sets remotes[remote].branches[name].state = new."
  }, {
    "heading": "branch",
    "content": "jj branch list"
  }, {
    "heading": "branch",
    "content": "TODO: hide non-tracking branches by default? ..."
  }, {
    "heading": "branch",
    "content": "Note: desired behavior of jj branch forget is to"
  }, {
    "heading": "branch",
    "content": "discard both local and remote branches (without actually removing branches\nat remotes)"
  }, {
    "heading": "branch",
    "content": "not abandon commits which belongs to those branches (even if the branch is\nremoved at a remote)"
  }, {
    "heading": "fetchimport-1",
    "content": "Fetching/importing new branch"
  }, {
    "heading": "fetchimport-1",
    "content": "Decides new state = new|tracking based on git.auto_local_branch"
  }, {
    "heading": "fetchimport-1",
    "content": "If new state is tracking, merges [absent, new_remote] - [absent]\n(i.e. creates local branch with new_remote target)"
  }, {
    "heading": "fetchimport-1",
    "content": "Sets remotes[remote].branches[name].state"
  }, {
    "heading": "fetchimport-1",
    "content": "Fetching/importing existing branch from tracking remote"
  }, {
    "heading": "fetchimport-1",
    "content": "Merges [local, new_remote] - [known_remote]"
  }, {
    "heading": "fetchimport-1",
    "content": "Fetching/importing existing branch from untracked remote"
  }, {
    "heading": "fetchimport-1",
    "content": "Decides new state = new|tracking based on git.auto_local_branch"
  }, {
    "heading": "fetchimport-1",
    "content": "If new state is tracking, merges [local, new_remote] - [absent]"
  }, {
    "heading": "fetchimport-1",
    "content": "Sets remotes[remote].branches[name].state"
  }, {
    "heading": "fetchimport-1",
    "content": "Fetching/importing remotely-deleted branch from tracking remote"
  }, {
    "heading": "fetchimport-1",
    "content": "Merges [local, absent] - [known_remote]"
  }, {
    "heading": "fetchimport-1",
    "content": "Removes remotes[remote].branches[name] (target becomes absent)\n(i.e. the remote branch is no longer tracked)"
  }, {
    "heading": "fetchimport-1",
    "content": "Abandons commits in the deleted branch"
  }, {
    "heading": "fetchimport-1",
    "content": "Fetching/importing remotely-deleted branch from untracked remote"
  }, {
    "heading": "fetchimport-1",
    "content": "Decides new state = new|tracking based on git.auto_local_branch"
  }, {
    "heading": "fetchimport-1",
    "content": "Noop anyway since [local, absent] - [absent] -> local"
  }, {
    "heading": "fetchimport-1",
    "content": "Fetching previously-forgotten branch from remote"
  }, {
    "heading": "fetchimport-1",
    "content": "Decides new state = new|tracking based on git.auto_local_branch"
  }, {
    "heading": "fetchimport-1",
    "content": "If new state is tracking, merges\n[absent, new_remote] - [absent] -> new_remote"
  }, {
    "heading": "fetchimport-1",
    "content": "Sets remotes[remote].branches[name].state"
  }, {
    "heading": "fetchimport-1",
    "content": "Fetching forgotten and remotely-deleted branch"
  }, {
    "heading": "fetchimport-1",
    "content": 'Same as "remotely-deleted branch from untracked remote" since forgotten\nremote branch should be state = new'
  }, {
    "heading": "fetchimport-1",
    "content": "Therefore, no local commits should be abandoned"
  }, {
    "heading": "push",
    "content": "Pushing new branch, remote doesn't exist"
  }, {
    "heading": "push",
    "content": "Pushes [local, absent] - [absent] -> local"
  }, {
    "heading": "push",
    "content": "Sets remotes[remote].branches[name].target = local, .state = tracking"
  }, {
    "heading": "push",
    "content": "Pushing new branch, untracked remote exists"
  }, {
    "heading": "push",
    "content": "Pushes [local, remote] - [absent]"
  }, {
    "heading": "push",
    "content": "Fails if local moved backwards or sideways"
  }, {
    "heading": "push",
    "content": "Sets remotes[remote].branches[name].target = local, .state = tracking"
  }, {
    "heading": "push",
    "content": "Pushing existing branch to tracking remote"
  }, {
    "heading": "push",
    "content": "Pushes [local, remote] - [remote] -> local"
  }, {
    "heading": "push",
    "content": "Fails if local moved backwards or sideways, and if remote is out of\nsync"
  }, {
    "heading": "push",
    "content": "Sets remotes[remote].branches[name].target = local"
  }, {
    "heading": "push",
    "content": "Pushing existing branch to untracked remote"
  }, {
    "heading": "push",
    "content": 'Same as "new branch"'
  }, {
    "heading": "push",
    "content": "Pushing deleted branch to tracking remote"
  }, {
    "heading": "push",
    "content": "Pushes [absent, remote] - [remote] -> absent"
  }, {
    "heading": "push",
    "content": "TODO: Fails if remote is out of sync?"
  }, {
    "heading": "push",
    "content": "Removes remotes[remote].branches[name] (target becomes absent)"
  }, {
    "heading": "push",
    "content": "Pushing deleted branch to untracked remote"
  }, {
    "heading": "push",
    "content": "Noop since [absent, remote] - [absent] -> remote"
  }, {
    "heading": "push",
    "content": "Perhaps, UI will report error"
  }, {
    "heading": "push",
    "content": "Pushing forgotten branch to untracked remote"
  }, {
    "heading": "push",
    "content": 'Same as "deleted branch to untracked remote"'
  }, {
    "heading": "push",
    "content": "Pushing previously-forgotten branch to remote"
  }, {
    "heading": "push",
    "content": 'Same as "new branch, untracked remote exists"'
  }, {
    "heading": "push",
    "content": "The target of forgotten remote branch is absent"
  }, {
    "heading": "export",
    "content": "Exporting new local branch, git branch doesn't exist"
  }, {
    "heading": "export",
    "content": 'Sets remotes["git"].branches[name].target = local, .state = tracking'
  }, {
    "heading": "export",
    "content": "Exports [local, absent] - [absent] -> local"
  }, {
    "heading": "export",
    "content": "Exporting new local branch, git branch is out of sync"
  }, {
    "heading": "export",
    "content": "Exports [local, git] - [absent] -> fail"
  }, {
    "heading": "export",
    "content": "Exporting existing local branch, git branch is synced"
  }, {
    "heading": "export",
    "content": 'Sets remotes["git"].branches[name].target = local'
  }, {
    "heading": "export",
    "content": "Exports [local, git] - [git] -> local"
  }, {
    "heading": "export",
    "content": "Exporting deleted local branch, git branch is synced"
  }, {
    "heading": "export",
    "content": 'Removes remotes["git"].branches[name]'
  }, {
    "heading": "export",
    "content": "Exports [absent, git] - [git] -> absent"
  }, {
    "heading": "export",
    "content": "Exporting forgotten branches, git branches are synced"
  }, {
    "heading": "export",
    "content": "Exports [absent, git] - [git] -> absent for forgotten local/remote\nbranches"
  }, {
    "heading": "undo-fetch",
    "content": "Exporting undone fetch, git branches are synced"
  }, {
    "heading": "undo-fetch",
    "content": "Exports [old, git] - [git] -> old for undone local/remote branches"
  }, {
    "heading": "undo-fetch",
    "content": "Redoing undone fetch without exporting"
  }, {
    "heading": "undo-fetch",
    "content": "Same as plain fetch since the known git_refs isn't diffed against the\nrefs in the backing Git repo."
  }, {
    "heading": "git-remote",
    "content": "jj branch untrack {name}@git"
  }, {
    "heading": "git-remote",
    "content": "Maybe rejected (to avoid confusion)?"
  }, {
    "heading": "git-remote",
    "content": "Allowing this would mean different local branches of the same name coexist\nin jj and git."
  }, {
    "heading": "git-remote",
    "content": "jj git fetch --remote git"
  }, {
    "heading": "git-remote",
    "content": "Rejected. The implementation is different."
  }, {
    "heading": "git-remote",
    "content": "Conceptually, it's git::import_refs() only for local branches."
  }, {
    "heading": "git-remote",
    "content": "jj git push --remote git"
  }, {
    "heading": "git-remote",
    "content": "Rejected. The implementation is different."
  }, {
    "heading": "git-remote",
    "content": "Conceptually, it's jj branch track and git::export_refs() only for\nlocal branches."
  }, {
    "heading": "remaining-issues",
    "content": "https://github.com/jj-vcs/jj/issues/1278 pushing to tracked remote"
  }, {
    "heading": "remaining-issues",
    "content": "Option could be added to push to all tracking remotes?"
  }, {
    "heading": "remaining-issues",
    "content": "Track remote branch locally with different name"
  }, {
    "heading": "remaining-issues",
    "content": "Local branch name could be stored per remote branch"
  }, {
    "heading": "remaining-issues",
    "content": "Consider UI complexity"
  }, {
    "heading": "remaining-issues",
    "content": '"private" state (suggested by @ilyagr)'
  }, {
    "heading": "remaining-issues",
    "content": '"private" branches can be pushed to their own remote, but not to the\nupstream repo'
  }, {
    "heading": "remaining-issues",
    "content": `This might be a state attached to a local branch (similar to Mercurial's
"secret" phase)`
  }, {
    "heading": "references",
    "content": "https://github.com/jj-vcs/jj/issues/1136"
  }, {
    "heading": "references",
    "content": "https://github.com/jj-vcs/jj/issues/1666"
  }, {
    "heading": "references",
    "content": "https://github.com/jj-vcs/jj/issues/1690"
  }, {
    "heading": "references",
    "content": "https://github.com/jj-vcs/jj/issues/1734"
  }, {
    "heading": "references",
    "content": "https://github.com/jj-vcs/jj/pull/1739"
  }],
  "headings": [{
    "id": "objective",
    "content": "Objective"
  }, {
    "id": "current-data-model-as-of-jj-080",
    "content": "Current data model (as of jj 0.8.0)"
  }, {
    "id": "proposed-data-model",
    "content": "Proposed data model"
  }, {
    "id": "importexport-data-flow",
    "content": "Import/export data flow"
  }, {
    "id": "tracking-state",
    "content": "Tracking state"
  }, {
    "id": "mapping-to-the-current-data-model",
    "content": "Mapping to the current data model"
  }, {
    "id": "common-command-behaviors",
    "content": "Common command behaviors"
  }, {
    "id": "fetchimport",
    "content": "fetch/import"
  }, {
    "id": "pushexport",
    "content": "push/export"
  }, {
    "id": "initclone",
    "content": "init/clone"
  }, {
    "id": "branch",
    "content": "branch"
  }, {
    "id": "command-behavior-examples",
    "content": "Command behavior examples"
  }, {
    "id": "fetchimport-1",
    "content": "fetch/import"
  }, {
    "id": "push",
    "content": "push"
  }, {
    "id": "export",
    "content": "export"
  }, {
    "id": "undo-fetch",
    "content": "undo fetch"
  }, {
    "id": "git-remote",
    "content": "@git remote"
  }, {
    "id": "remaining-issues",
    "content": "Remaining issues"
  }, {
    "id": "references",
    "content": "References"
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
  url: "#current-data-model-as-of-jj-080",
  title: jsx(Fragment, {
    children: "Current data model (as of jj 0.8.0)"
  })
}, {
  depth: 2,
  url: "#proposed-data-model",
  title: jsx(Fragment, {
    children: "Proposed data model"
  })
}, {
  depth: 3,
  url: "#importexport-data-flow",
  title: jsx(Fragment, {
    children: "Import/export data flow"
  })
}, {
  depth: 3,
  url: "#tracking-state",
  title: jsx(Fragment, {
    children: "Tracking state"
  })
}, {
  depth: 3,
  url: "#mapping-to-the-current-data-model",
  title: jsx(Fragment, {
    children: "Mapping to the current data model"
  })
}, {
  depth: 2,
  url: "#common-command-behaviors",
  title: jsx(Fragment, {
    children: "Common command behaviors"
  })
}, {
  depth: 3,
  url: "#fetchimport",
  title: jsx(Fragment, {
    children: "fetch/import"
  })
}, {
  depth: 3,
  url: "#pushexport",
  title: jsx(Fragment, {
    children: "push/export"
  })
}, {
  depth: 3,
  url: "#initclone",
  title: jsx(Fragment, {
    children: "init/clone"
  })
}, {
  depth: 3,
  url: "#branch",
  title: jsx(Fragment, {
    children: "branch"
  })
}, {
  depth: 2,
  url: "#command-behavior-examples",
  title: jsx(Fragment, {
    children: "Command behavior examples"
  })
}, {
  depth: 3,
  url: "#fetchimport-1",
  title: jsx(Fragment, {
    children: "fetch/import"
  })
}, {
  depth: 3,
  url: "#push",
  title: jsx(Fragment, {
    children: "push"
  })
}, {
  depth: 3,
  url: "#export",
  title: jsx(Fragment, {
    children: "export"
  })
}, {
  depth: 3,
  url: "#undo-fetch",
  title: jsx(Fragment, {
    children: "undo fetch"
  })
}, {
  depth: 3,
  url: "#git-remote",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "@git"
    }), " remote"]
  })
}, {
  depth: 2,
  url: "#remaining-issues",
  title: jsx(Fragment, {
    children: "Remaining issues"
  })
}, {
  depth: 2,
  url: "#references",
  title: jsx(Fragment, {
    children: "References"
  })
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    del: "del",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.p, {
      children: "This is a plan to implement more Git-like remote tracking branch UX."
    }), "\n", jsx(_components.h2, {
      id: "objective",
      children: "Objective"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj"
      }), " imports all remote branches to local branches by default. As described in\n", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/issues/1136",
        children: "#1136"
      }), ", this doesn't interact nicely with Git if we have multiple Git remotes\nwith a number of branches. The ", jsx(_components.code, {
        children: "git.auto-local-bookmark"
      }), " config can mitigate this\nproblem, but we'll get locally-deleted branches instead."]
    }), "\n", jsx(_components.p, {
      children: "The goal of this plan is to implement"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "proper support for tracking/non-tracking remote branches"
      }), "\n", jsx(_components.li, {
        children: "logically consistent data model for importing/exporting Git refs"
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "current-data-model-as-of-jj-080",
      children: "Current data model (as of jj 0.8.0)"
    }), "\n", jsx(_components.p, {
      children: 'Under the current model, all remote branches are "tracking" branches, and\nremote changes are merged into the local counterparts.'
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "branches"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "  [name]:"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "    local_target?"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "    remote_targets[remote]: target"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "tags"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "  [name]: target"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "git_refs"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: '  ["refs/heads/{name}"]: target             # last-known local branches'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: '  ["refs/remotes/{remote}/{name}"]: target  # last-known remote branches'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "                                            # (copied to remote_targets)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: '  ["refs/tags/{name}"]: target              # last-known tags'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "git_head: target?"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["Remote branches are stored in both ", jsx(_components.code, {
          children: "branches[name].remote_targets"
        }), " and\n", jsx(_components.code, {
          children: 'git_refs["refs/remotes"]'
        }), ". These two are mostly kept in sync, but there\nare two scenarios where remote-tracking branches and git refs can diverge:", "\n", jsxs(_components.ol, {
          children: ["\n", jsx(_components.li, {
            children: jsx(_components.code, {
              children: "jj branch forget"
            })
          }), "\n", jsxs(_components.li, {
            children: [jsx(_components.code, {
              children: "jj op revert"
            }), "/", jsx(_components.code, {
              children: "restore"
            }), " in colocated repo"]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Pseudo ", jsx(_components.code, {
          children: "@git"
        }), " tracking branches are stored in ", jsx(_components.code, {
          children: 'git_refs["refs/heads"]'
        }), ". We\nneed special case to resolve ", jsx(_components.code, {
          children: "@git"
        }), " branches, and their behavior is slightly\ndifferent from the other remote-tracking branches."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "proposed-data-model",
      children: "Proposed data model"
    }), "\n", jsxs(_components.p, {
      children: ["We'll add a per-remote-branch ", jsx(_components.code, {
        children: "state"
      }), " to distinguish non-tracking branches\nfrom tracking ones."]
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "state = new        # not merged in the local branch or tag"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "      | tracking   # merged in the local branch or tag"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "# `ignored` state could be added if we want to manage it by view, not by"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "# config file. target of ignored remote branch would be absent."
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["We'll add a per-remote view-like object to record the last known remote\nbranches. It will replace ", jsx(_components.code, {
        children: "branches[name].remote_targets"
      }), " in the current model.\n", jsx(_components.code, {
        children: "@git"
      }), " branches will be stored in ", jsx(_components.code, {
        children: 'remotes["git"]'
      }), "."]
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "branches"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "  [name]: target"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "tags"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "  [name]: target"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "remotes"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: '  ["git"]:'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "    branches"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "      [name]: target, state                 # refs/heads/{name}"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "    tags"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "      [name]: target, state = tracking      # refs/tags/{name}"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "    head: target?, state = TBD              # refs/HEAD"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "  [remote]:"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "    branches"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "      [name]: target, state                 # refs/remotes/{remote}/{name}"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "    tags: (empty)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "    head: (empty)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "git_refs                                    # last imported/exported refs"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: '  ["refs/heads/{name}"]: target'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: '  ["refs/remotes/{remote}/{name}"]: target'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: '  ["refs/tags/{name}"]: target'
            })
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "With the proposed data model, we can"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "naturally support remote branches which have no local counterparts"
      }), "\n", jsxs(_components.li, {
        children: ["deduplicate ", jsx(_components.code, {
          children: "branches[name].remote_targets"
        }), " and ", jsx(_components.code, {
          children: 'git_refs["refs/remotes"]'
        })]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "importexport-data-flow",
      children: "Import/export data flow"
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "       export flow                              import flow"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "       -----------                              -----------"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "                        +----------------+                   --."
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "   +------------------->|backing Git repo|---+                 :"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "   |                    +----------------+   |                 : unchanged"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: '   |[update]                                 |[copy]           : on "op restore"'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "   |                      +----------+       |                 :"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "   |      +-------------->| git_refs |<------+                 :"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "   |      |               +----------+       |               --'"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "   +--[compare]                            [diff]--+"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "          |   .--       +---------------+    |     |         --."
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: '          |   :    +--->|remotes["git"] |    |     |           :'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "          +---:    |    |               |<---+     |           :"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "              :    |    |remotes[remote]|          |           : restored"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: `              '--  |    +---------------+          |[merge]    : on "op restore"`
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "                   |                               |           : by default"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "             [copy]|    +---------------+          |           :"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "                   +----| (local)       |<---------+           :"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "                        | branches/tags |                      :"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "                        +---------------+                    --'"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "jj git import"
        }), " applies diff between ", jsx(_components.code, {
          children: "git_refs"
        }), " and ", jsx(_components.code, {
          children: "remotes[]"
        }), ". ", jsx(_components.code, {
          children: "git_refs"
        }), " is\nalways copied from the backing Git repo."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "jj git export"
        }), " copies jj's ", jsx(_components.code, {
          children: "remotes"
        }), " view back to the Git repo. If a ref in\nthe Git repo has been updated since the last import, the ref isn't exported."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "jj op restore"
        }), " never rolls back ", jsx(_components.code, {
          children: "git_refs"
        }), "."]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "tracking-state",
      children: "Tracking state"
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "git.auto-local-bookmark"
      }), " config knob is applied when importing new remote\nbranch. ", jsx(_components.code, {
        children: "jj branch"
      }), " sub commands will be added to change the tracking state."]
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fn"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " default_state_for_newly_imported_branch"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(config, remote) {"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    if"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " remote "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "=="
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "git"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "        State"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "::"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Tracked"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    } "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "else"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " if"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " config["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"git.auto-local-bookmark"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "] {"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "        State"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "::"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Tracked"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    } "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "else"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " {"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "        State"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "::"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "New"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["A branch target to be merged is calculated based on the ", jsx(_components.code, {
        children: "state"
      }), "."]
    }), "\n", jsx(Fragment, {
      children: jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark",
        style: {
          "--shiki-light": "#24292e",
          "--shiki-dark": "#e1e4e8",
          "--shiki-light-bg": "#fff",
          "--shiki-dark-bg": "#24292e"
        },
        tabIndex: "0",
        icon: '<svg viewBox="0 0 24 24"><path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "fn"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " target_in_merge_context"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(known_target, state) {"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "    match"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " state {"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "        State"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "::"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "New"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " =>"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " RefTarget"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "::"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "absent"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "(),"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "        State"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "::"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Tracked"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " =>"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " known_target,"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    }"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "mapping-to-the-current-data-model",
      children: "Mapping to the current data model"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["New ", jsx(_components.code, {
          children: 'remotes["git"].branches'
        }), " corresponds to ", jsx(_components.code, {
          children: 'git_refs["refs/heads"]'
        }), ", but\nforgotten branches are removed from ", jsx(_components.code, {
          children: 'remotes["git"].branches'
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: ["New ", jsx(_components.code, {
          children: 'remotes["git"].tags'
        }), " corresponds to ", jsx(_components.code, {
          children: 'git_refs["refs/tags"]'
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: ["New ", jsx(_components.code, {
          children: 'remotes["git"].head'
        }), " corresponds to ", jsx(_components.code, {
          children: "git_head"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: ["New ", jsx(_components.code, {
          children: "remotes[remote].branches"
        }), " corresponds to\n", jsx(_components.code, {
          children: "branches[].remote_targets[remote]"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "state = new|tracking"
        }), " doesn't exist in the current model. It's determined\nby ", jsx(_components.code, {
          children: "git.auto-local-bookmark"
        }), " config."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "common-command-behaviors",
      children: "Common command behaviors"
    }), "\n", jsxs(_components.p, {
      children: ["In the following sections, a merge is expressed as ", jsx(_components.code, {
        children: "adds - removes"
      }), ".\nIn particular, a merge of local and remote targets is\n", jsx(_components.code, {
        children: "[local, remote] - [known_remote]"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "fetchimport",
      children: "fetch/import"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: jsx(_components.code, {
            children: "jj git fetch"
          })
        }), "\n", jsxs(_components.ol, {
          children: ["\n", jsx(_components.li, {
            children: "Fetches remote changes to the backing Git repo."
          }), "\n", jsxs(_components.li, {
            children: ["Import changes only for ", jsx(_components.code, {
              children: "remotes[remote].branches[glob]"
            }), " (see below)", "\n", jsxs(_components.ul, {
              children: ["\n", jsxs(_components.li, {
                children: ["TODO: how about fetched ", jsx(_components.code, {
                  children: ".tags"
                }), "?"]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: jsx(_components.code, {
            children: "jj git import"
          })
        }), "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Copies ", jsx(_components.code, {
              children: "git_refs"
            }), " from the backing Git repo."]
          }), "\n", jsxs(_components.li, {
            children: ["Calculates diff from the known ", jsx(_components.code, {
              children: "remotes"
            }), " to the new ", jsx(_components.code, {
              children: "git_refs"
            }), ".", "\n", jsxs(_components.ul, {
              children: ["\n", jsx(_components.li, {
                children: jsx(_components.code, {
                  children: 'git_refs["refs/heads"] - remotes["git"].branches'
                })
              }), "\n", jsx(_components.li, {
                children: jsx(_components.code, {
                  children: 'git_refs["refs/tags"] - remotes["git"].tags'
                })
              }), "\n", jsxs(_components.li, {
                children: ["TBD: ", jsx(_components.code, {
                  children: '"HEAD" - remotes["git"].head'
                }), " (unused)"]
              }), "\n", jsx(_components.li, {
                children: jsx(_components.code, {
                  children: 'git_refs["refs/remotes/{remote}"] - remotes[remote]'
                })
              }), "\n"]
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["Merges diff in local ", jsx(_components.code, {
              children: "branches"
            }), " and ", jsx(_components.code, {
              children: "tags"
            }), " if ", jsx(_components.code, {
              children: "state"
            }), " is ", jsx(_components.code, {
              children: "tracking"
            }), ".", "\n", jsxs(_components.ul, {
              children: ["\n", jsxs(_components.li, {
                children: ["If the known ", jsx(_components.code, {
                  children: "target"
                }), " is ", jsx(_components.code, {
                  children: "absent"
                }), ", the default ", jsx(_components.code, {
                  children: "state"
                }), " should be\ncalculated. This also applies to previously-forgotten branches."]
              }), "\n"]
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["Updates ", jsx(_components.code, {
              children: "remotes"
            }), " reflecting the import."]
          }), "\n", jsx(_components.li, {
            children: "Abandons commits that are no longer referenced."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "pushexport",
      children: "push/export"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: jsx(_components.code, {
            children: "jj git push"
          })
        }), "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Calculates diff from the known ", jsx(_components.code, {
              children: "remotes[remote]"
            }), " to the local changes.", "\n", jsxs(_components.ul, {
              children: ["\n", jsxs(_components.li, {
                children: [jsx(_components.code, {
                  children: "branches - remotes[remote].branches"
                }), "\n", jsxs(_components.ul, {
                  children: ["\n", jsxs(_components.li, {
                    children: ["If ", jsx(_components.code, {
                      children: "state"
                    }), " is ", jsx(_components.code, {
                      children: "new"
                    }), " (i.e. untracked), the known remote branch ", jsx(_components.code, {
                      children: "target"
                    }), "\nis considered ", jsx(_components.code, {
                      children: "absent"
                    }), "."]
                  }), "\n", jsxs(_components.li, {
                    children: ["If ", jsx(_components.code, {
                      children: "state"
                    }), " is ", jsx(_components.code, {
                      children: "new"
                    }), ", and if the local branch ", jsx(_components.code, {
                      children: "target"
                    }), " is ", jsx(_components.code, {
                      children: "absent"
                    }), ", the\ndiff ", jsx(_components.code, {
                      children: "[absent, remote] - absent"
                    }), " is noop. So it's not allowed to push\ndeleted branch to untracked remote."]
                  }), "\n", jsxs(_components.li, {
                    children: ["TODO: Copy Git's ", jsx(_components.code, {
                      children: "--force-with-lease"
                    }), " behavior?"]
                  }), "\n"]
                }), "\n"]
              }), "\n", jsxs(_components.li, {
                children: [jsx(_components.del, {
                  children: jsx(_components.code, {
                    children: "tags"
                  })
                }), " (not implemented, but should be the same as ", jsx(_components.code, {
                  children: "branches"
                }), ")"]
              }), "\n"]
            }), "\n"]
          }), "\n", jsx(_components.li, {
            children: "Pushes diff to the remote Git repo (as well as remote tracking branches\nin the backing Git repo.)"
          }), "\n", jsxs(_components.li, {
            children: ["Updates ", jsx(_components.code, {
              children: "remotes[remote]"
            }), " and ", jsx(_components.code, {
              children: "git_refs"
            }), " reflecting the push."]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: jsx(_components.code, {
            children: "jj git export"
          })
        }), "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Copies local ", jsx(_components.code, {
              children: "branches"
            }), "/", jsx(_components.code, {
              children: "tags"
            }), " back to ", jsx(_components.code, {
              children: 'remotes["git"]'
            }), ".", "\n", jsxs(_components.ul, {
              children: ["\n", jsxs(_components.li, {
                children: ["Conceptually, ", jsx(_components.code, {
                  children: 'remotes["git"].branches[name].state'
                }), " can be set to\nuntracked. Untracked local branches won't be exported to Git."]
              }), "\n", jsxs(_components.li, {
                children: ["If ", jsx(_components.code, {
                  children: 'remotes["git"].branches[name]'
                }), " is ", jsx(_components.code, {
                  children: "absent"
                }), ", the default\n", jsx(_components.code, {
                  children: "state = tracking"
                }), " applies. This also applies to forgotten branches."]
              }), "\n", jsxs(_components.li, {
                children: [jsx(_components.del, {
                  children: jsx(_components.code, {
                    children: "tags"
                  })
                }), " (not implemented, but should be the same as ", jsx(_components.code, {
                  children: "branches"
                }), ")"]
              }), "\n"]
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["Calculates diff from the known ", jsx(_components.code, {
              children: "git_refs"
            }), " to the new ", jsx(_components.code, {
              children: "remotes[remote]"
            }), "."]
          }), "\n", jsx(_components.li, {
            children: "Applies diff to the backing Git repo."
          }), "\n", jsxs(_components.li, {
            children: ["Updates ", jsx(_components.code, {
              children: "git_refs"
            }), " reflecting the export."]
          }), "\n"]
        }), "\n", jsx(_components.p, {
          children: "If a ref failed to export at the step 3, the preceding steps should also be\nrolled back for that ref."
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "initclone",
      children: "init/clone"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: jsx(_components.code, {
            children: "jj init"
          })
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: ["Import, track, and merge per ", jsx(_components.code, {
              children: "git.auto_local_branch"
            }), " config."]
          }), "\n", jsxs(_components.li, {
            children: ["If ", jsx(_components.code, {
              children: "!git.auto_local_branch"
            }), ", no ", jsx(_components.code, {
              children: "tracking"
            }), " state will be set."]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: jsx(_components.code, {
            children: "jj git clone"
          })
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: ["Import, track, and merge per ", jsx(_components.code, {
              children: "git.auto_local_branch"
            }), " config."]
          }), "\n", jsxs(_components.li, {
            children: ["The default branch will be tracked regardless of ", jsx(_components.code, {
              children: "git.auto_local_branch"
            }), "\nconfig. This isn't technically needed, but will help users coming from Git."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "branch",
      children: "branch"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "jj branch set {name}"
        }), "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Sets local ", jsx(_components.code, {
              children: "branches[name]"
            }), " entry."]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "jj branch delete {name}"
        }), "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Removes local ", jsx(_components.code, {
              children: "branches[name]"
            }), " entry."]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "jj branch forget {name}"
        }), "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Removes local ", jsx(_components.code, {
              children: "branches[name]"
            }), " entry if exists."]
          }), "\n", jsxs(_components.li, {
            children: ["Removes ", jsx(_components.code, {
              children: "remotes[remote].branches[name]"
            }), " entries if exist.\nTODO: maybe better to not remove non-tracking remote branches?"]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "jj branch track {name}@{remote}"
        }), " (new command)", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Merges ", jsx(_components.code, {
              children: "[local, remote] - [absent]"
            }), " in local branch.", "\n", jsxs(_components.ul, {
              children: ["\n", jsx(_components.li, {
                children: 'Same as "fetching/importing existing branch from untracked remote".'
              }), "\n"]
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["Sets ", jsx(_components.code, {
              children: "remotes[remote].branches[name].state = tracking"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "jj branch untrack {name}@{remote}"
        }), " (new command)", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Sets ", jsx(_components.code, {
              children: "remotes[remote].branches[name].state = new"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "jj branch list"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "TODO: hide non-tracking branches by default? ..."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["Note: desired behavior of ", jsx(_components.code, {
        children: "jj branch forget"
      }), " is to"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "discard both local and remote branches (without actually removing branches\nat remotes)"
      }), "\n", jsx(_components.li, {
        children: "not abandon commits which belongs to those branches (even if the branch is\nremoved at a remote)"
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "command-behavior-examples",
      children: "Command behavior examples"
    }), "\n", jsx(_components.h3, {
      id: "fetchimport-1",
      children: "fetch/import"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["Fetching/importing new branch", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Decides new ", jsx(_components.code, {
              children: "state = new|tracking"
            }), " based on ", jsx(_components.code, {
              children: "git.auto_local_branch"
            })]
          }), "\n", jsxs(_components.li, {
            children: ["If new ", jsx(_components.code, {
              children: "state"
            }), " is ", jsx(_components.code, {
              children: "tracking"
            }), ", merges ", jsx(_components.code, {
              children: "[absent, new_remote] - [absent]"
            }), "\n(i.e. creates local branch with ", jsx(_components.code, {
              children: "new_remote"
            }), " target)"]
          }), "\n", jsxs(_components.li, {
            children: ["Sets ", jsx(_components.code, {
              children: "remotes[remote].branches[name].state"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Fetching/importing existing branch from tracking remote", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Merges ", jsx(_components.code, {
              children: "[local, new_remote] - [known_remote]"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Fetching/importing existing branch from untracked remote", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Decides new ", jsx(_components.code, {
              children: "state = new|tracking"
            }), " based on ", jsx(_components.code, {
              children: "git.auto_local_branch"
            })]
          }), "\n", jsxs(_components.li, {
            children: ["If new ", jsx(_components.code, {
              children: "state"
            }), " is ", jsx(_components.code, {
              children: "tracking"
            }), ", merges ", jsx(_components.code, {
              children: "[local, new_remote] - [absent]"
            })]
          }), "\n", jsxs(_components.li, {
            children: ["Sets ", jsx(_components.code, {
              children: "remotes[remote].branches[name].state"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Fetching/importing remotely-deleted branch from tracking remote", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Merges ", jsx(_components.code, {
              children: "[local, absent] - [known_remote]"
            })]
          }), "\n", jsxs(_components.li, {
            children: ["Removes ", jsx(_components.code, {
              children: "remotes[remote].branches[name]"
            }), " (", jsx(_components.code, {
              children: "target"
            }), " becomes ", jsx(_components.code, {
              children: "absent"
            }), ")\n(i.e. the remote branch is no longer tracked)"]
          }), "\n", jsx(_components.li, {
            children: "Abandons commits in the deleted branch"
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Fetching/importing remotely-deleted branch from untracked remote", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Decides new ", jsx(_components.code, {
              children: "state = new|tracking"
            }), " based on ", jsx(_components.code, {
              children: "git.auto_local_branch"
            })]
          }), "\n", jsxs(_components.li, {
            children: ["Noop anyway since ", jsx(_components.code, {
              children: "[local, absent] - [absent]"
            }), " -> ", jsx(_components.code, {
              children: "local"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Fetching previously-forgotten branch from remote", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Decides new ", jsx(_components.code, {
              children: "state = new|tracking"
            }), " based on ", jsx(_components.code, {
              children: "git.auto_local_branch"
            })]
          }), "\n", jsxs(_components.li, {
            children: ["If new ", jsx(_components.code, {
              children: "state"
            }), " is ", jsx(_components.code, {
              children: "tracking"
            }), ", merges\n", jsx(_components.code, {
              children: "[absent, new_remote] - [absent]"
            }), " -> ", jsx(_components.code, {
              children: "new_remote"
            })]
          }), "\n", jsxs(_components.li, {
            children: ["Sets ", jsx(_components.code, {
              children: "remotes[remote].branches[name].state"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Fetching forgotten and remotely-deleted branch", "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: ['Same as "remotely-deleted branch from untracked remote" since forgotten\nremote branch should be ', jsx(_components.code, {
              children: "state = new"
            })]
          }), "\n", jsx(_components.li, {
            children: "Therefore, no local commits should be abandoned"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "push",
      children: "push"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["Pushing new branch, remote doesn't exist", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Pushes ", jsx(_components.code, {
              children: "[local, absent] - [absent]"
            }), " -> ", jsx(_components.code, {
              children: "local"
            })]
          }), "\n", jsxs(_components.li, {
            children: ["Sets ", jsx(_components.code, {
              children: "remotes[remote].branches[name].target = local"
            }), ", ", jsx(_components.code, {
              children: ".state = tracking"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Pushing new branch, untracked remote exists", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Pushes ", jsx(_components.code, {
              children: "[local, remote] - [absent]"
            }), "\n", jsxs(_components.ul, {
              children: ["\n", jsxs(_components.li, {
                children: ["Fails if ", jsx(_components.code, {
                  children: "local"
                }), " moved backwards or sideways"]
              }), "\n"]
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["Sets ", jsx(_components.code, {
              children: "remotes[remote].branches[name].target = local"
            }), ", ", jsx(_components.code, {
              children: ".state = tracking"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Pushing existing branch to tracking remote", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Pushes ", jsx(_components.code, {
              children: "[local, remote] - [remote]"
            }), " -> ", jsx(_components.code, {
              children: "local"
            }), "\n", jsxs(_components.ul, {
              children: ["\n", jsxs(_components.li, {
                children: ["Fails if ", jsx(_components.code, {
                  children: "local"
                }), " moved backwards or sideways, and if ", jsx(_components.code, {
                  children: "remote"
                }), " is out of\nsync"]
              }), "\n"]
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["Sets ", jsx(_components.code, {
              children: "remotes[remote].branches[name].target = local"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Pushing existing branch to untracked remote", "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: 'Same as "new branch"'
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Pushing deleted branch to tracking remote", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Pushes ", jsx(_components.code, {
              children: "[absent, remote] - [remote]"
            }), " -> ", jsx(_components.code, {
              children: "absent"
            }), "\n", jsxs(_components.ul, {
              children: ["\n", jsxs(_components.li, {
                children: ["TODO: Fails if ", jsx(_components.code, {
                  children: "remote"
                }), " is out of sync?"]
              }), "\n"]
            }), "\n"]
          }), "\n", jsxs(_components.li, {
            children: ["Removes ", jsx(_components.code, {
              children: "remotes[remote].branches[name]"
            }), " (", jsx(_components.code, {
              children: "target"
            }), " becomes ", jsx(_components.code, {
              children: "absent"
            }), ")"]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Pushing deleted branch to untracked remote", "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: ["Noop since ", jsx(_components.code, {
              children: "[absent, remote] - [absent]"
            }), " -> ", jsx(_components.code, {
              children: "remote"
            })]
          }), "\n", jsx(_components.li, {
            children: "Perhaps, UI will report error"
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Pushing forgotten branch to untracked remote", "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: 'Same as "deleted branch to untracked remote"'
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Pushing previously-forgotten branch to remote", "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: 'Same as "new branch, untracked remote exists"'
          }), "\n", jsxs(_components.li, {
            children: ["The ", jsx(_components.code, {
              children: "target"
            }), " of forgotten remote branch is ", jsx(_components.code, {
              children: "absent"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "export",
      children: "export"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["Exporting new local branch, git branch doesn't exist", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Sets ", jsx(_components.code, {
              children: 'remotes["git"].branches[name].target = local'
            }), ", ", jsx(_components.code, {
              children: ".state = tracking"
            })]
          }), "\n", jsxs(_components.li, {
            children: ["Exports ", jsx(_components.code, {
              children: "[local, absent] - [absent]"
            }), " -> ", jsx(_components.code, {
              children: "local"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Exporting new local branch, git branch is out of sync", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Exports ", jsx(_components.code, {
              children: "[local, git] - [absent]"
            }), " -> fail"]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Exporting existing local branch, git branch is synced", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Sets ", jsx(_components.code, {
              children: 'remotes["git"].branches[name].target = local'
            })]
          }), "\n", jsxs(_components.li, {
            children: ["Exports ", jsx(_components.code, {
              children: "[local, git] - [git]"
            }), " -> ", jsx(_components.code, {
              children: "local"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Exporting deleted local branch, git branch is synced", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Removes ", jsx(_components.code, {
              children: 'remotes["git"].branches[name]'
            })]
          }), "\n", jsxs(_components.li, {
            children: ["Exports ", jsx(_components.code, {
              children: "[absent, git] - [git]"
            }), " -> ", jsx(_components.code, {
              children: "absent"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Exporting forgotten branches, git branches are synced", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Exports ", jsx(_components.code, {
              children: "[absent, git] - [git]"
            }), " -> ", jsx(_components.code, {
              children: "absent"
            }), " for forgotten local/remote\nbranches"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "undo-fetch",
      children: "undo fetch"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["Exporting undone fetch, git branches are synced", "\n", jsxs(_components.ol, {
          children: ["\n", jsxs(_components.li, {
            children: ["Exports ", jsx(_components.code, {
              children: "[old, git] - [git]"
            }), " -> ", jsx(_components.code, {
              children: "old"
            }), " for undone local/remote branches"]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Redoing undone fetch without exporting", "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: ["Same as plain fetch since the known ", jsx(_components.code, {
              children: "git_refs"
            }), " isn't diffed against the\nrefs in the backing Git repo."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "git-remote",
      children: [jsx(_components.code, {
        children: "@git"
      }), " remote"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "jj branch untrack {name}@git"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "Maybe rejected (to avoid confusion)?"
          }), "\n", jsx(_components.li, {
            children: "Allowing this would mean different local branches of the same name coexist\nin jj and git."
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "jj git fetch --remote git"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "Rejected. The implementation is different."
          }), "\n", jsxs(_components.li, {
            children: ["Conceptually, it's ", jsx(_components.code, {
              children: "git::import_refs()"
            }), " only for local branches."]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "jj git push --remote git"
        }), "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "Rejected. The implementation is different."
          }), "\n", jsxs(_components.li, {
            children: ["Conceptually, it's ", jsx(_components.code, {
              children: "jj branch track"
            }), " and ", jsx(_components.code, {
              children: "git::export_refs()"
            }), " only for\nlocal branches."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "remaining-issues",
      children: "Remaining issues"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.a, {
          href: "https://github.com/jj-vcs/jj/issues/1278",
          children: "https://github.com/jj-vcs/jj/issues/1278"
        }), " pushing to tracked remote", "\n", jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: ["Option could be added to push to all ", jsx(_components.code, {
              children: "tracking"
            }), " remotes?"]
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["Track remote branch locally with different name", "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: "Local branch name could be stored per remote branch"
          }), "\n", jsx(_components.li, {
            children: "Consider UI complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ['"private" state (suggested by @ilyagr)', "\n", jsxs(_components.ul, {
          children: ["\n", jsx(_components.li, {
            children: '"private" branches can be pushed to their own remote, but not to the\nupstream repo'
          }), "\n", jsx(_components.li, {
            children: `This might be a state attached to a local branch (similar to Mercurial's
"secret" phase)`
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "references",
      children: "References"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.a, {
          href: "https://github.com/jj-vcs/jj/issues/1136",
          children: "https://github.com/jj-vcs/jj/issues/1136"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.a, {
          href: "https://github.com/jj-vcs/jj/issues/1666",
          children: "https://github.com/jj-vcs/jj/issues/1666"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.a, {
          href: "https://github.com/jj-vcs/jj/issues/1690",
          children: "https://github.com/jj-vcs/jj/issues/1690"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.a, {
          href: "https://github.com/jj-vcs/jj/issues/1734",
          children: "https://github.com/jj-vcs/jj/issues/1734"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.a, {
          href: "https://github.com/jj-vcs/jj/pull/1739",
          children: "https://github.com/jj-vcs/jj/pull/1739"
        })
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
//# sourceMappingURL=tracking-branches-CvIc-6q-.mjs.map
