import { jsxs, jsx, Fragment } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Frequently asked questions",
  "sidebarTitle": "FAQ"
};
let extractedReferences = [{
  "href": "/reference/revsets"
}, {
  "href": "https://man7.org/linux/man-pages/man1/watch.1.html"
}, {
  "href": "https://github.com/blacknon/hwatch?tab=readme-ov-file#configuration"
}, {
  "href": "https://github.com/sachaos/viddy"
}, {
  "href": "https://github.com/tmux/tmux/wiki"
}, {
  "href": "https://www.youtube.com/watch?v=LV0JzI8IcCY"
}, {
  "href": "https://github.com/tim-janik/jj-fzf"
}, {
  "href": "https://github.com/jj-vcs/jj/wiki/GUI-and-TUI"
}, {
  "href": "/comparisons/git-compatibility#colocated-jujutsugit-repos"
}, {
  "href": "/technical-details/conflicts"
}, {
  "href": "https://github.com/jj-vcs/jj/issues/3979"
}, {
  "href": "#how-can-i-keep-my-scratch-files-in-the-repository-without-committing-them"
}, {
  "href": "/reference/config#set-of-private-commits"
}, {
  "href": "/guides/divergence"
}, {
  "href": "https://github.com/vitejs/vite/issues/20036"
}];
let structuredData = {
  "contents": [{
    "heading": "why-does-my-bookmark-not-move-to-the-new-commit-after-jj-newcommit",
    "content": `If you're familiar with Git, you might expect the current bookmark to move forward
when you commit. However, Jujutsu does not have a concept of a "current bookmark".`
  }, {
    "heading": "why-does-my-bookmark-not-move-to-the-new-commit-after-jj-newcommit",
    "content": "To move bookmarks, use jj bookmark move."
  }, {
    "heading": "i-made-a-commit-and-jj-git-push---all-says-nothing-changed-instead-of-pushing-it-what-do-i-do",
    "content": "jj git push --all pushes all bookmarks, not all revisions. You have two\noptions:"
  }, {
    "heading": "i-made-a-commit-and-jj-git-push---all-says-nothing-changed-instead-of-pushing-it-what-do-i-do",
    "content": "Using jj git push --change will automatically create a bookmark and push it."
  }, {
    "heading": "i-made-a-commit-and-jj-git-push---all-says-nothing-changed-instead-of-pushing-it-what-do-i-do",
    "content": "Using jj bookmark commands to create or move a bookmark to either the commit\nyou want to push or a descendant on it. Unlike Git, Jujutsu doesn't do this\nautomatically (see previous question)."
  }, {
    "heading": "where-is-my-commit-why-is-it-not-visible-in-jj-log",
    "content": "Is your commit visible with jj log -r 'all()'?"
  }, {
    "heading": "where-is-my-commit-why-is-it-not-visible-in-jj-log",
    "content": "If yes, you should be aware that jj log only shows a subset of the commits in\nthe repo by default. Most commits that exist on a remote are not shown. Local\ncommits and their immediate parents (for context) are shown. The thinking is\nthat you are more likely to interact with this set of commits. You can configure\nthe set of revisions to show by default by overriding revsets.log as described\nin config."
  }, {
    "heading": "where-is-my-commit-why-is-it-not-visible-in-jj-log",
    "content": `If not, the revision may have been abandoned (e.g. because you
used jj abandon, or because it's an obsolete version that's been rewritten
with jj rebase, jj describe, etc). In that case, jj log -r commit_id
should show the revision as "hidden". jj new commit_id should make the
revision visible again.`
  }, {
    "heading": "where-is-my-commit-why-is-it-not-visible-in-jj-log",
    "content": "See revsets and templates for further guidance."
  }, {
    "heading": "what-are-elided-revisions-in-the-output-of-jj-log-how-can-i-display-them",
    "content": '"Elided revisions" appears in the log when one revision descends from another,\nboth are in the revset, but the revisions connecting them are not in the\nrevset.'
  }, {
    "heading": "what-are-elided-revisions-in-the-output-of-jj-log-how-can-i-display-them",
    "content": "For example, suppose you log the revset tyl|mus which contains exactly two\nrevisions:"
  }, {
    "heading": "what-are-elided-revisions-in-the-output-of-jj-log-how-can-i-display-them",
    "content": 'Only the two revisions in the revset are displayed. The text "(elided\nrevisions)" is shown to indicate that musnqzvt descends from tylynnzk, but\nthe nodes connecting them are not in the revset.'
  }, {
    "heading": "what-are-elided-revisions-in-the-output-of-jj-log-how-can-i-display-them",
    "content": "To view the elided revisions, change the revset expression so it\nincludes the connecting revisions. The connected() revset function does\nexactly this:"
  }, {
    "heading": "how-can-i-get-jj-log-to-show-me-what-git-log-would-show-me",
    "content": "Use jj log -r ... The .. operator lists all visible commits in the repo, excluding the root (which is never interesting and is shared by all repos)."
  }, {
    "heading": "can-i-monitor-how-jj-log-evolves",
    "content": "The simplest way to monitor how the history as shown by jj log evolves is by using the watch(1) command (or hwatch or viddy).\nFor example:"
  }, {
    "heading": "can-i-monitor-how-jj-log-evolves",
    "content": "This will continuously update the (colored) log output in the terminal.\nThe --ignore-working-copy option avoids conflicts with manual operations during the creation of snapshots.\nMartin used watch in a tmux pane during his presentation Jujutsu - A Git-compatible VCS."
  }, {
    "heading": "can-i-monitor-how-jj-log-evolves",
    "content": "Alternatively, you can use jj-fzf, where the central piece is the jj log view and common operations can be carried out via key bindings while the log view updates."
  }, {
    "heading": "can-i-monitor-how-jj-log-evolves",
    "content": "The wiki lists additional TUIs and GUIs beyond the terminal: GUI-and-TUI"
  }, {
    "heading": "should-i-colocate-my-repository",
    "content": "Colocating a Jujutsu repository allows you to use both Jujutsu and Git in the\nsame working copy. The benefits of doing so are:"
  }, {
    "heading": "should-i-colocate-my-repository",
    "content": "You can use Git commands when you're not sure how to do something with\nJujutsu, Jujutsu hasn't yet implemented a feature (e.g., tagging), or you\nsimply prefer Git in some situations."
  }, {
    "heading": "should-i-colocate-my-repository",
    "content": "Tooling that expects a Git repository still works (IDEs, build tooling, etc.)"
  }, {
    "heading": "should-i-colocate-my-repository",
    "content": "The colocation documentation describes the\ndrawbacks but the most\nimportant ones are:"
  }, {
    "heading": "should-i-colocate-my-repository",
    "content": "Interleaving git and jj commands may create confusing bookmark conflicts\nor divergent changes."
  }, {
    "heading": "should-i-colocate-my-repository",
    "content": "If the working copy commit or its parent contain any conflicted files, tools\nexpecting a Git repo may interpret the commit contents or its diff in a wrong\nand confusing way. You should avoid doing mutating operations with Git tools\nand ignore the confusing information such tools present for conflicted commits\n(unless you are curious about the details of how jj stores\nconflicts). See\n#3979 for plans to improve\nthis situation."
  }, {
    "heading": "should-i-colocate-my-repository",
    "content": "Jujutsu commands may be a little slower in very large repositories due to\nimporting and exporting changes to Git. Most repositories are not noticeably\naffected by this."
  }, {
    "heading": "should-i-colocate-my-repository",
    "content": "If you primarily use Jujutsu to modify the repository, the drawbacks are\nunlikely to affect you. Try colocating while you learn Jujutsu, then switch if\nyou find a specific reason not to colocate."
  }, {
    "heading": "jj-is-said-to-record-the-working-copy-after-jj-log-and-every-other-command-where-can-i-see-these-automatic-saves",
    "content": `Indeed, every jj command updates the current "working-copy" revision, marked
with @ in jj log. You can notice this by how the commit ID of the
working copy revision changes when it's updated. Note that, unless you move to
another revision (with jj new or jj edit, for example), the change ID will
not change.`
  }, {
    "heading": "jj-is-said-to-record-the-working-copy-after-jj-log-and-every-other-command-where-can-i-see-these-automatic-saves",
    "content": "If you expected to see a historical view of your working copy changes in the\nparent-child relationships between commits you can see in jj log, this is\nsimply not what they mean. What you can see in jj log is that after the\nworking copy commit gets amended (after any edit), the commit ID changes."
  }, {
    "heading": "jj-is-said-to-record-the-working-copy-after-jj-log-and-every-other-command-where-can-i-see-these-automatic-saves",
    "content": 'You can see the actual history of working copy changes using jj evolog. This\nwill show the history of the commits that were previously the "working-copy\ncommit", since the last time the change id of the working copy commit changed.\nThe obsolete changes will be marked as "hidden". They are still accessible with\nany jj command (jj diff, for example), but you will need to use the commit\nid to refer to hidden commits.'
  }, {
    "heading": "jj-is-said-to-record-the-working-copy-after-jj-log-and-every-other-command-where-can-i-see-these-automatic-saves",
    "content": "You can also use jj evolog -r on revisions that were previously the\nworking-copy revisions (or on any other revisions). Use jj evolog -p as an\neasy way to see the evolution of the commit's contents."
  }, {
    "heading": "can-i-prevent-jujutsu-from-recording-my-unfinished-work-im-not-ready-to-commit-it",
    "content": "Jujutsu automatically records new files in the current working-copy commit and\ndoesn't provide a way to prevent that."
  }, {
    "heading": "can-i-prevent-jujutsu-from-recording-my-unfinished-work-im-not-ready-to-commit-it",
    "content": `However, you can easily record intermediate drafts of your work. If you think
you might want to go back to the current state of the working-copy commit,
simply use jj new. There's no need for the commit to be "finished" or even
have a description.`
  }, {
    "heading": "can-i-prevent-jujutsu-from-recording-my-unfinished-work-im-not-ready-to-commit-it",
    "content": "Then future edits will go into a new working-copy commit on top of the now\nformer working-copy commit. Whenever you are happy with another set of edits,\nuse jj squash to amend the previous commit."
  }, {
    "heading": "can-i-prevent-jujutsu-from-recording-my-unfinished-work-im-not-ready-to-commit-it",
    "content": "If you have changes you never want to put in a public commit, see: How can I\nkeep my scratch files in the repository without committing\nthem?"
  }, {
    "heading": "can-i-prevent-jujutsu-from-recording-my-unfinished-work-im-not-ready-to-commit-it",
    "content": "For more options see the next question."
  }, {
    "heading": "can-i-interactively-create-a-new-commit-from-only-some-of-the-changes-in-the-working-copy-like-git-add--p--git-commit-or-hg-commit--i",
    "content": "Since the changes are already in the working-copy commit, the equivalent to\ngit add -p && git commit/git commit -p/hg commit -i is to split the\nworking-copy commit with jj split -i (or the practically identical\njj commit -i)."
  }, {
    "heading": "can-i-interactively-create-a-new-commit-from-only-some-of-the-changes-in-the-working-copy-like-git-add--p--git-commit-or-hg-commit--i",
    "content": "For the equivalent of git commit --amend -p/hg amend -i, use jj squash -i."
  }, {
    "heading": "is-there-something-like-git-rebase---interactive-or-hg-histedit",
    "content": "It is often sufficient to use some form of jj rebase with -A/-B. For\nexample, if you have a linear chain of revisions A through C and want to\nmove C before B, use jj rebase -r C -B B. See jj help rebase for more\nexamples."
  }, {
    "heading": "is-there-something-like-git-rebase---interactive-or-hg-histedit",
    "content": "There is a tracking issue you can check for updates."
  }, {
    "heading": "is-there-something-like-git-rebase---interactive-or-hg-histedit",
    "content": "To squash or split commits, use jj squash and jj split."
  }, {
    "heading": "how-can-i-keep-my-scratch-files-in-the-repository-without-committing-them",
    "content": 'You can set snapshot.auto-track to only start tracking new files matching the\nconfigured pattern (e.g. "none()"). Changes to already tracked files will\nstill be snapshotted by every command. Files not matching the pattern can be\ntracked with jj file track.'
  }, {
    "heading": "how-can-i-keep-my-scratch-files-in-the-repository-without-committing-them",
    "content": "You can keep your notes and other scratch files in the repository, if you add\na wildcard pattern to either the repo's gitignore or your global gitignore.\nSomething like *.scratch or *.scratchpad should do, after that rename the\nfiles you want to keep around to match the pattern."
  }, {
    "heading": "how-can-i-keep-my-scratch-files-in-the-repository-without-committing-them",
    "content": "If you keep your scratch files in their own directory with no tracked files, you\ncan create a .gitignore file in that directory containing only *. This will\nignore everything in the directory including the .gitignore file itself."
  }, {
    "heading": "how-can-i-keep-my-scratch-files-in-the-repository-without-committing-them",
    "content": "If $EDITOR integration is important, something like scratchpad.* may be more\nhelpful, as you can keep the filename extension intact (it\nmatches scratchpad.md, scratchpad.rs and more). Another option is to add a\ndirectory to the global .gitignore which then stores all your temporary files\nand notes. For example, you could add scratch/ to ~/.git/ignore and then\nstore arbitrary files in <your-git-repo>/scratch/."
  }, {
    "heading": "how-can-i-keep-my-scratch-files-in-the-repository-without-committing-them",
    "content": "You can find more details on gitignore files here."
  }, {
    "heading": "how-can-i-avoid-committing-my-local-only-changes-to-tracked-files",
    "content": "Suppose your repository tracks a file like secret_config.json, and you make\nsome changes to that file to work locally. Since Jujutsu automatically commits\nthe working copy, there's no way to prevent Jujutsu from committing changes to\nthe file. But, you never want to push those changes to the remote repository."
  }, {
    "heading": "how-can-i-avoid-committing-my-local-only-changes-to-tracked-files",
    "content": "One solution is to keep these changes in a separate commit branched from the\ntrunk. To use those changes in your working copy, merge the private commit\ninto your branch."
  }, {
    "heading": "how-can-i-avoid-committing-my-local-only-changes-to-tracked-files",
    "content": 'Suppose you have a commit "Add new feature":'
  }, {
    "heading": "how-can-i-avoid-committing-my-local-only-changes-to-tracked-files",
    "content": "First, create a new commit branched from main and add your private changes:"
  }, {
    "heading": "how-can-i-avoid-committing-my-local-only-changes-to-tracked-files",
    "content": "Now create a merge commit with the branch you're working on and the private\ncommit:"
  }, {
    "heading": "how-can-i-avoid-committing-my-local-only-changes-to-tracked-files",
    "content": "Now you're ready to work:"
  }, {
    "heading": "how-can-i-avoid-committing-my-local-only-changes-to-tracked-files",
    "content": "Your work in progress xxxxxxxx is the first parent of the merge commit."
  }, {
    "heading": "how-can-i-avoid-committing-my-local-only-changes-to-tracked-files",
    "content": "The private commit wwwwwwww is the second parent of the merge commit."
  }, {
    "heading": "how-can-i-avoid-committing-my-local-only-changes-to-tracked-files",
    "content": "The working copy (vvvvvvvv) contains changes from both."
  }, {
    "heading": "how-can-i-avoid-committing-my-local-only-changes-to-tracked-files",
    "content": "As you work, squash your changes using jj squash --into xxxxxxxx."
  }, {
    "heading": "how-can-i-avoid-committing-my-local-only-changes-to-tracked-files",
    "content": "If you need a new empty commit on top of xxxxxxxx you can use the\n--insert-after and --insert-before options (-A and -B for short):"
  }, {
    "heading": "how-can-i-avoid-committing-my-local-only-changes-to-tracked-files",
    "content": "To avoid pushing change wwwwwwww by mistake, use the configuration\ngit.private-commits:"
  }, {
    "heading": "i-accidentally-changed-files-in-the-wrong-commit-how-do-i-move-the-recent-changes-into-another-commit",
    "content": `Let's say we are editing a commit for "featureA", and we forgot to run jj
new or jj commit before doing some work that belongs in a new commit:`
  }, {
    "heading": "i-accidentally-changed-files-in-the-wrong-commit-how-do-i-move-the-recent-changes-into-another-commit",
    "content": "The goal is to restore change lnvvtrzo to its previous state and split the\ndifference into a new child commit."
  }, {
    "heading": "step-1-find-the-commit-id-for-the-last-good-version",
    "content": "If you pushed lnvvtrzo already, then the version you probably want to restore\nis the version on the remote. For example, if the bookmark is feature-a, then\nthe commit you want to restore is feature-a@origin."
  }, {
    "heading": "step-1-find-the-commit-id-for-the-last-good-version",
    "content": 'Otherwise, you can find all the past versions of the working copy revision that\njj has saved by running jj evolog, perhaps with the --patch\noption. The obsolete versions will be marked as "hidden" and will have the same\nchange ID, but will have different commit IDs. This represents the change\nevolving over time.'
  }, {
    "heading": "step-1-find-the-commit-id-for-the-last-good-version",
    "content": "For example, this is what the evolog might look like after you made two edits to\nthe same change:"
  }, {
    "heading": "step-1-find-the-commit-id-for-the-last-good-version",
    "content": "Since commit b800 is hidden, it is considered obsolete and jj log (without\narguments) will not show it, nor can it be accessed by its change ID lnvvtrzo.\nHowever, most jj operations work normally on such commits if you refer to them\nby their commit ID."
  }, {
    "heading": "step-1-find-the-commit-id-for-the-last-good-version",
    "content": "To find out which of these versions is the last time before we started working\non feature B (the point where we should have created a new change, but failed to\ndo so), we can look at the actual changes between the evolog commits by\nrunning jj evolog --patch:"
  }, {
    "heading": "step-1-find-the-commit-id-for-the-last-good-version",
    "content": 'In this example, the version of the change when we were actually done with\nfeature A is when we edited the file to say "Done with feature A". This state\nwas saved in the commit with ID b80 (the second one in the list). The\nfollowing edit (commit 31a) belongs in a new change.'
  }, {
    "heading": "step-2-create-a-new-change-on-top-of-the-original-revision",
    "content": 'The "featureA" change is currently at commit 31a:'
  }, {
    "heading": "step-2-create-a-new-change-on-top-of-the-original-revision",
    "content": `We'd like to create a new "featureB" change with the contents of the current
commit 31a, and we'd like the "featureA" change to be reverted to its former
state at commit b80 (see step 1 above for how we found that commit ID).`
  }, {
    "heading": "step-2-create-a-new-change-on-top-of-the-original-revision",
    "content": "First, we create a new empty child commit on top of b80:"
  }, {
    "heading": "step-2-create-a-new-change-on-top-of-the-original-revision",
    "content": 'Notice the change ID has "??" appended to it. This indicates that change ID\nlnvvtr is now divergent: There are two visible commits\nwith the same change ID (commit b8004ab and 31a347e0). This is okay and will\nbe resolved in the next steps.'
  }, {
    "heading": "step-2-create-a-new-change-on-top-of-the-original-revision",
    "content": "Next, restore the contents of 31a347e0 into the working copy:"
  }, {
    "heading": "step-4-abandon-the-unwanted-revision",
    "content": "Now, we have achieved the exact state we desired:"
  }, {
    "heading": "how-do-i-resume-working-on-an-existing-change",
    "content": "There are two ways to resume working on an earlier change: jj new then jj squash,\nand jj edit. The first is generally recommended, but jj edit can be useful. When\nyou use jj edit, the revision is directly amended with your new changes, making it\ndifficult to tell what exactly you change. You should avoid using jj edit when the\nrevision has a conflict, as you may accidentally break the plain-text annotations on\nyour state without realizing."
  }, {
    "heading": "how-do-i-resume-working-on-an-existing-change",
    "content": "To start, use jj new <rev> to create a change based on that earlier revision. Make\nyour edits, then use jj squash to update the earlier revision with those edits.\nFor when you would use git stashing, use jj edit <rev> for expected behavior.\nOther workflows may prefer jj edit as well."
  }, {
    "heading": "why-are-most-merge-commits-marked-as-empty",
    "content": "Jujutsu, like Git, is a snapshot-based VCS. That means that each commit\nlogically records the state of all current files in the repo. The changes in a\ncommit are not recorded but are instead calculated when needed by comparing the\ncommit's state to the parent commit's state. Jujutsu defines the changes in a\ncommit to be relative to the auto-merged parents (if there's only one parent,\nthen that merge is trivial - it's the parent commit's state). As a result, a\nmerge commit that was a clean merge (no conflict resolution, no additional\nchanges) is considered empty. Conversely, if the merge commit contains conflict\nresolutions or additional changes, then it will be considered non-empty."
  }, {
    "heading": "why-are-most-merge-commits-marked-as-empty",
    "content": "This definition of the changes in a commit is used throughout Jujutsu. It's\nused by jj diff -r and jj log -p to show the changes in a commit. It's used\nby jj rebase to rebase the changes in a commit. It's used in jj log to\nindicate which commits are empty. It's used in the files() revset function\n(and by jj log <path>) to find commits that modify a certain path. And so on."
  }, {
    "heading": "how-do-i-revert-a-merge-commit-jj-revert--r-merge-does-nothing",
    "content": "Jujutsu defines the changes in a merge commit (and non-merge commits) as the\nchanges made compared to the auto-merged parents. That means that merge commits\nare often empty. As a result, jj revert or a merge commit often results in an\nempty commit. To revert the changes merged in from the second parent, instead\nuse jj restore --from <first parent> ."
  }, {
    "heading": "how-do-i-revert-a-merge-commit-jj-revert--r-merge-does-nothing",
    "content": "Example:"
  }, {
    "heading": "how-do-i-revert-a-merge-commit-jj-revert--r-merge-does-nothing",
    "content": 'To revert the merge in C, create a new commit with jj new C,\nthen jj restore --from B, and then describe the message\nwith something like jj desc -m "Revert the merge of D into B. Now, commit @\nundoes the merge of D into B. If necessary, you can now rebase it\nelsewhere, e.g. jj rebase -r @ -d main.'
  }, {
    "heading": "how-do-i-deal-with-divergent-changes--after-the-change-id",
    "content": "See: Handling divergent commits."
  }, {
    "heading": "how-do-i-deal-with-conflicted-bookmarks--after-bookmark-name",
    "content": "A conflicted bookmark is a bookmark that refers to multiple\ndifferent commits because jj couldn't fully resolve its desired position.\nResolving conflicted bookmarks is usually done by setting the bookmark to the\ncorrect commit using jj bookmark move <name> --to <commit ID>."
  }, {
    "heading": "how-do-i-deal-with-conflicted-bookmarks--after-bookmark-name",
    "content": "Usually, the different commits associated with the conflicted bookmark should all\nappear in the log, but if they don't you can use jj bookmark listto show all the\ncommits associated with it."
  }, {
    "heading": "how-do-i-integrate-jujutsu-with-gerrit",
    "content": "Add this to your configuration to automatically add Change-Id trailers to commit messages:"
  }, {
    "heading": "how-do-i-integrate-jujutsu-with-gerrit",
    "content": `Note: If you don't check for the presence of the "Change-Id" trailer, you might
occasionally get duplicate trailers.
This happens when Jujutsu's change-id isn't in sync with the "Change-Id" trailer.
Eg. after jj split, the "Change-Id" trailer generated for the new change would
be different from the original one, it wouldn't be deduplicated.`
  }, {
    "heading": "how-do-i-integrate-jujutsu-with-gerrit",
    "content": "You'll have to manually invoke git push of HEAD on the underlying git repository\ninto the remote Gerrit bookmark refs/for/$BRANCH, where $BRANCH is the base\nbookmark you want your changes to go to (e.g., git push origin\nHEAD:refs/for/main). Using a colocated repo\nwill make the underlying git repo directly accessible from the working\ndirectory."
  }, {
    "heading": "how-do-i-integrate-jujutsu-with-gerrit",
    "content": "We hope to integrate with Gerrit natively in the future."
  }, {
    "heading": "im-experiencing-jj-command-issues-in-a-vitevitest-project-how-do-i-fix-this",
    "content": "When using Vite or Vitest in a Jujutsu repository, you may experience:"
  }, {
    "heading": "im-experiencing-jj-command-issues-in-a-vitevitest-project-how-do-i-fix-this",
    "content": "Very slow vitest startup times"
  }, {
    "heading": "im-experiencing-jj-command-issues-in-a-vitevitest-project-how-do-i-fix-this",
    "content": "Timeout errors in jj terminal commands"
  }, {
    "heading": "im-experiencing-jj-command-issues-in-a-vitevitest-project-how-do-i-fix-this",
    "content": "Errors with 3rd party visual tools like jjk or visual-jj"
  }, {
    "heading": "im-experiencing-jj-command-issues-in-a-vitevitest-project-how-do-i-fix-this",
    "content": "Corrupted working_copy.lock files"
  }, {
    "heading": "im-experiencing-jj-command-issues-in-a-vitevitest-project-how-do-i-fix-this",
    "content": "This happens because Vite watches the .jj directory where Jujutsu stores its internal state.\nThis creates unnecessary overhead as Vite processes Jujutsu's frequent internal file changes,\nwhich can slow down both tools and occasionally cause file access conflicts."
  }, {
    "heading": "im-experiencing-jj-command-issues-in-a-vitevitest-project-how-do-i-fix-this",
    "content": "Solution: Configure Vite to ignore the .jj directory by adding it to the\nserver.watch.ignored array inside your Vite configuration, for example:"
  }, {
    "heading": "im-experiencing-jj-command-issues-in-a-vitevitest-project-how-do-i-fix-this",
    "content": "Note: There was a request to include .jj\nin the default ignore list, but manual configuration remains the recommended approach."
  }, {
    "heading": "i-want-to-write-a-tool-which-integrates-with-jujutsu-should-i-use-the-library-or-parse-the-cli",
    "content": "There are some trade-offs and there is no definitive answer yet."
  }, {
    "heading": "i-want-to-write-a-tool-which-integrates-with-jujutsu-should-i-use-the-library-or-parse-the-cli",
    "content": "Using jj-lib avoids parsing command output and makes error handling easier."
  }, {
    "heading": "i-want-to-write-a-tool-which-integrates-with-jujutsu-should-i-use-the-library-or-parse-the-cli",
    "content": "jj-lib is not a stable API, so you may have to make changes to your tool\nwhen the API changes."
  }, {
    "heading": "i-want-to-write-a-tool-which-integrates-with-jujutsu-should-i-use-the-library-or-parse-the-cli",
    "content": "The CLI is not stable either, so you may need to make your tool detect the\ndifferent versions and call the right command."
  }, {
    "heading": "i-want-to-write-a-tool-which-integrates-with-jujutsu-should-i-use-the-library-or-parse-the-cli",
    "content": "Using the CLI means that your tool will work with custom-built jj binaries,\nlike the one at Google (if you're using the library, you will not be able to\ndetect custom backends and more)."
  }],
  "headings": [{
    "id": "why-does-my-bookmark-not-move-to-the-new-commit-after-jj-newcommit",
    "content": "Why does my bookmark not move to the new commit after jj new/commit?"
  }, {
    "id": "i-made-a-commit-and-jj-git-push---all-says-nothing-changed-instead-of-pushing-it-what-do-i-do",
    "content": 'I made a commit and jj git push --all says "Nothing changed" instead of pushing it. What do I do?'
  }, {
    "id": "where-is-my-commit-why-is-it-not-visible-in-jj-log",
    "content": "Where is my commit, why is it not visible in jj log?"
  }, {
    "id": "what-are-elided-revisions-in-the-output-of-jj-log-how-can-i-display-them",
    "content": "What are elided revisions in the output of jj log? How can I display them?"
  }, {
    "id": "how-can-i-get-jj-log-to-show-me-what-git-log-would-show-me",
    "content": "How can I get jj log to show me what git log would show me?"
  }, {
    "id": "can-i-monitor-how-jj-log-evolves",
    "content": "Can I monitor how jj log evolves?"
  }, {
    "id": "should-i-colocate-my-repository",
    "content": "Should I colocate my repository?"
  }, {
    "id": "jj-is-said-to-record-the-working-copy-after-jj-log-and-every-other-command-where-can-i-see-these-automatic-saves",
    "content": 'jj is said to record the working copy after jj log and every other command. Where can I see these automatic "saves"?'
  }, {
    "id": "can-i-prevent-jujutsu-from-recording-my-unfinished-work-im-not-ready-to-commit-it",
    "content": "Can I prevent Jujutsu from recording my unfinished work? I'm not ready to commit it."
  }, {
    "id": "can-i-interactively-create-a-new-commit-from-only-some-of-the-changes-in-the-working-copy-like-git-add--p--git-commit-or-hg-commit--i",
    "content": "Can I interactively create a new commit from only some of the changes in the working copy, like git add -p && git commit or hg commit -i?"
  }, {
    "id": "is-there-something-like-git-rebase---interactive-or-hg-histedit",
    "content": "Is there something like git rebase --interactive or hg histedit?"
  }, {
    "id": "how-can-i-keep-my-scratch-files-in-the-repository-without-committing-them",
    "content": "How can I keep my scratch files in the repository without committing them?"
  }, {
    "id": "how-can-i-avoid-committing-my-local-only-changes-to-tracked-files",
    "content": "How can I avoid committing my local-only changes to tracked files?"
  }, {
    "id": "i-accidentally-changed-files-in-the-wrong-commit-how-do-i-move-the-recent-changes-into-another-commit",
    "content": "I accidentally changed files in the wrong commit, how do I move the recent changes into another commit?"
  }, {
    "id": "step-1-find-the-commit-id-for-the-last-good-version",
    "content": 'Step 1: Find the commit ID for the "last good version"'
  }, {
    "id": "step-2-create-a-new-change-on-top-of-the-original-revision",
    "content": "Step 2: Create a new change on top of the original revision"
  }, {
    "id": "step-3-move-any-bookmarks-to-the-original-revision",
    "content": "Step 3: Move any bookmarks to the original revision"
  }, {
    "id": "step-4-abandon-the-unwanted-revision",
    "content": "Step 4: Abandon the unwanted revision"
  }, {
    "id": "how-do-i-resume-working-on-an-existing-change",
    "content": "How do I resume working on an existing change?"
  }, {
    "id": "why-are-most-merge-commits-marked-as-empty",
    "content": 'Why are most merge commits marked as "(empty)"?'
  }, {
    "id": "how-do-i-revert-a-merge-commit-jj-revert--r-merge-does-nothing",
    "content": "How do I revert a merge commit? jj revert -r <merge> does nothing"
  }, {
    "id": "how-do-i-deal-with-divergent-changes--after-the-change-id",
    "content": "How do I deal with divergent changes ('??' after the change ID)?"
  }, {
    "id": "how-do-i-deal-with-conflicted-bookmarks--after-bookmark-name",
    "content": "How do I deal with conflicted bookmarks ('??' after bookmark name)?"
  }, {
    "id": "how-do-i-integrate-jujutsu-with-gerrit",
    "content": "How do I integrate Jujutsu with Gerrit?"
  }, {
    "id": "im-experiencing-jj-command-issues-in-a-vitevitest-project-how-do-i-fix-this",
    "content": "I'm experiencing jj command issues in a Vite/Vitest project, how do I fix this?"
  }, {
    "id": "i-want-to-write-a-tool-which-integrates-with-jujutsu-should-i-use-the-library-or-parse-the-cli",
    "content": "I want to write a tool which integrates with Jujutsu. Should I use the library or parse the CLI?"
  }]
};
const toc = [{
  depth: 3,
  url: "#why-does-my-bookmark-not-move-to-the-new-commit-after-jj-newcommit",
  title: jsxs(Fragment, {
    children: ["Why does my bookmark not move to the new commit after ", jsx("code", {
      children: "jj new/commit"
    }), "?"]
  })
}, {
  depth: 3,
  url: "#i-made-a-commit-and-jj-git-push---all-says-nothing-changed-instead-of-pushing-it-what-do-i-do",
  title: jsxs(Fragment, {
    children: ["I made a commit and ", jsx("code", {
      children: "jj git push --all"
    }), ' says "Nothing changed" instead of pushing it. What do I do?']
  })
}, {
  depth: 3,
  url: "#where-is-my-commit-why-is-it-not-visible-in-jj-log",
  title: jsxs(Fragment, {
    children: ["Where is my commit, why is it not visible in ", jsx("code", {
      children: "jj log"
    }), "?"]
  })
}, {
  depth: 3,
  url: "#what-are-elided-revisions-in-the-output-of-jj-log-how-can-i-display-them",
  title: jsxs(Fragment, {
    children: ["What are elided revisions in the output of ", jsx("code", {
      children: "jj log"
    }), "? How can I display them?"]
  })
}, {
  depth: 3,
  url: "#how-can-i-get-jj-log-to-show-me-what-git-log-would-show-me",
  title: jsxs(Fragment, {
    children: ["How can I get ", jsx("code", {
      children: "jj log"
    }), " to show me what ", jsx("code", {
      children: "git log"
    }), " would show me?"]
  })
}, {
  depth: 3,
  url: "#can-i-monitor-how-jj-log-evolves",
  title: jsxs(Fragment, {
    children: ["Can I monitor how ", jsx("code", {
      children: "jj log"
    }), " evolves?"]
  })
}, {
  depth: 3,
  url: "#should-i-colocate-my-repository",
  title: jsx(Fragment, {
    children: "Should I colocate my repository?"
  })
}, {
  depth: 3,
  url: "#jj-is-said-to-record-the-working-copy-after-jj-log-and-every-other-command-where-can-i-see-these-automatic-saves",
  title: jsxs(Fragment, {
    children: [jsx("code", {
      children: "jj"
    }), " is said to record the working copy after ", jsx("code", {
      children: "jj log"
    }), ' and every other command. Where can I see these automatic "saves"?']
  })
}, {
  depth: 3,
  url: "#can-i-prevent-jujutsu-from-recording-my-unfinished-work-im-not-ready-to-commit-it",
  title: jsx(Fragment, {
    children: "Can I prevent Jujutsu from recording my unfinished work? I'm not ready to commit it."
  })
}, {
  depth: 3,
  url: "#can-i-interactively-create-a-new-commit-from-only-some-of-the-changes-in-the-working-copy-like-git-add--p--git-commit-or-hg-commit--i",
  title: jsxs(Fragment, {
    children: ["Can I interactively create a new commit from only some of the changes in the working copy, like ", jsx("code", {
      children: "git add -p && git commit"
    }), " or ", jsx("code", {
      children: "hg commit -i"
    }), "?"]
  })
}, {
  depth: 3,
  url: "#is-there-something-like-git-rebase---interactive-or-hg-histedit",
  title: jsxs(Fragment, {
    children: ["Is there something like ", jsx("code", {
      children: "git rebase --interactive"
    }), " or ", jsx("code", {
      children: "hg histedit"
    }), "?"]
  })
}, {
  depth: 3,
  url: "#how-can-i-keep-my-scratch-files-in-the-repository-without-committing-them",
  title: jsx(Fragment, {
    children: "How can I keep my scratch files in the repository without committing them?"
  })
}, {
  depth: 3,
  url: "#how-can-i-avoid-committing-my-local-only-changes-to-tracked-files",
  title: jsx(Fragment, {
    children: "How can I avoid committing my local-only changes to tracked files?"
  })
}, {
  depth: 3,
  url: "#i-accidentally-changed-files-in-the-wrong-commit-how-do-i-move-the-recent-changes-into-another-commit",
  title: jsx(Fragment, {
    children: "I accidentally changed files in the wrong commit, how do I move the recent changes into another commit?"
  })
}, {
  depth: 4,
  url: "#step-1-find-the-commit-id-for-the-last-good-version",
  title: jsx(Fragment, {
    children: 'Step 1: Find the commit ID for the "last good version"'
  })
}, {
  depth: 4,
  url: "#step-2-create-a-new-change-on-top-of-the-original-revision",
  title: jsx(Fragment, {
    children: "Step 2: Create a new change on top of the original revision"
  })
}, {
  depth: 4,
  url: "#step-3-move-any-bookmarks-to-the-original-revision",
  title: jsx(Fragment, {
    children: "Step 3: Move any bookmarks to the original revision"
  })
}, {
  depth: 4,
  url: "#step-4-abandon-the-unwanted-revision",
  title: jsx(Fragment, {
    children: "Step 4: Abandon the unwanted revision"
  })
}, {
  depth: 3,
  url: "#how-do-i-resume-working-on-an-existing-change",
  title: jsx(Fragment, {
    children: "How do I resume working on an existing change?"
  })
}, {
  depth: 3,
  url: "#why-are-most-merge-commits-marked-as-empty",
  title: jsx(Fragment, {
    children: 'Why are most merge commits marked as "(empty)"?'
  })
}, {
  depth: 2,
  url: "#how-do-i-revert-a-merge-commit-jj-revert--r-merge-does-nothing",
  title: jsxs(Fragment, {
    children: ["How do I revert a merge commit? ", jsx("code", {
      children: "jj revert -r <merge>"
    }), " does nothing"]
  })
}, {
  depth: 3,
  url: "#how-do-i-deal-with-divergent-changes--after-the-change-id",
  title: jsx(Fragment, {
    children: "How do I deal with divergent changes ('??' after the change ID)?"
  })
}, {
  depth: 3,
  url: "#how-do-i-deal-with-conflicted-bookmarks--after-bookmark-name",
  title: jsx(Fragment, {
    children: "How do I deal with conflicted bookmarks ('??' after bookmark name)?"
  })
}, {
  depth: 3,
  url: "#how-do-i-integrate-jujutsu-with-gerrit",
  title: jsx(Fragment, {
    children: "How do I integrate Jujutsu with Gerrit?"
  })
}, {
  depth: 3,
  url: "#im-experiencing-jj-command-issues-in-a-vitevitest-project-how-do-i-fix-this",
  title: jsxs(Fragment, {
    children: ["I'm experiencing ", jsx("code", {
      children: "jj"
    }), " command issues in a Vite/Vitest project, how do I fix this?"]
  })
}, {
  depth: 3,
  url: "#i-want-to-write-a-tool-which-integrates-with-jujutsu-should-i-use-the-library-or-parse-the-cli",
  title: jsx(Fragment, {
    children: "I want to write a tool which integrates with Jujutsu. Should I use the library or parse the CLI?"
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
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.h3, {
      id: "why-does-my-bookmark-not-move-to-the-new-commit-after-jj-newcommit",
      children: ["Why does my bookmark not move to the new commit after ", jsx(_components.code, {
        children: "jj new/commit"
      }), "?"]
    }), "\n", jsx(_components.p, {
      children: `If you're familiar with Git, you might expect the current bookmark to move forward
when you commit. However, Jujutsu does not have a concept of a "current bookmark".`
    }), "\n", jsxs(_components.p, {
      children: ["To move bookmarks, use ", jsx(_components.code, {
        children: "jj bookmark move"
      }), "."]
    }), "\n", jsxs(_components.h3, {
      id: "i-made-a-commit-and-jj-git-push---all-says-nothing-changed-instead-of-pushing-it-what-do-i-do",
      children: ["I made a commit and ", jsx(_components.code, {
        children: "jj git push --all"
      }), ' says "Nothing changed" instead of pushing it. What do I do?']
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj git push --all"
      }), " pushes all ", jsx(_components.em, {
        children: "bookmarks"
      }), ", not all revisions. You have two\noptions:"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["Using ", jsx(_components.code, {
          children: "jj git push --change"
        }), " will automatically create a bookmark and push it."]
      }), "\n", jsxs(_components.li, {
        children: ["Using ", jsx(_components.code, {
          children: "jj bookmark"
        }), " commands to create or move a bookmark to either the commit\nyou want to push or a descendant on it. Unlike Git, Jujutsu doesn't do this\nautomatically (see previous question)."]
      }), "\n"]
    }), "\n", jsxs(_components.h3, {
      id: "where-is-my-commit-why-is-it-not-visible-in-jj-log",
      children: ["Where is my commit, why is it not visible in ", jsx(_components.code, {
        children: "jj log"
      }), "?"]
    }), "\n", jsxs(_components.p, {
      children: ["Is your commit visible with ", jsx(_components.code, {
        children: "jj log -r 'all()'"
      }), "?"]
    }), "\n", jsxs(_components.p, {
      children: ["If yes, you should be aware that ", jsx(_components.code, {
        children: "jj log"
      }), " only shows a subset of the commits in\nthe repo by default. Most commits that exist on a remote are not shown. Local\ncommits and their immediate parents (for context) are shown. The thinking is\nthat you are more likely to interact with this set of commits. You can configure\nthe set of revisions to show by default by overriding ", jsx(_components.code, {
        children: "revsets.log"
      }), " as described\nin ", jsx(_components.a, {
        href: "/reference/config",
        children: "config"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["If not, the revision may have been abandoned (e.g. because you\nused ", jsx(_components.code, {
        children: "jj abandon"
      }), ", or because it's an obsolete version that's been rewritten\nwith ", jsx(_components.code, {
        children: "jj rebase"
      }), ", ", jsx(_components.code, {
        children: "jj describe"
      }), ", etc). In that case, ", jsx(_components.code, {
        children: "jj log -r commit_id"
      }), '\nshould show the revision as "hidden". ', jsx(_components.code, {
        children: "jj new commit_id"
      }), " should make the\nrevision visible again."]
    }), "\n", jsxs(_components.p, {
      children: ["See ", jsx(_components.a, {
        href: "/reference/revsets",
        children: "revsets"
      }), " and ", jsx(_components.a, {
        href: "/reference/templates",
        children: "templates"
      }), " for further guidance."]
    }), "\n", jsxs(_components.h3, {
      id: "what-are-elided-revisions-in-the-output-of-jj-log-how-can-i-display-them",
      children: ["What are elided revisions in the output of ", jsx(_components.code, {
        children: "jj log"
      }), "? How can I display them?"]
    }), "\n", jsxs(_components.p, {
      children: ['"Elided revisions" appears in the log when one revision descends from another,\nboth are in the revset, but the revisions connecting them are ', jsx(_components.em, {
        children: "not"
      }), " in the\nrevset."]
    }), "\n", jsxs(_components.p, {
      children: ["For example, suppose you log the revset ", jsx(_components.code, {
        children: "tyl|mus"
      }), " which contains exactly two\nrevisions:"]
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " log"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -r"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'tyl|mus'"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u25CB"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  musnqzvt"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " me@example.com"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 1"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " minute"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ago"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 9a09f8a5"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u2502"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  Revision"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " C"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "~"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  ("
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "elided"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " revisions"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u25CB"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  tylynnzk"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " me@example.com"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 1"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " minute"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ago"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " f26967c8"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u2502"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  Revision"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " A"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ['Only the two revisions in the revset are displayed. The text "(elided\nrevisions)" is shown to indicate that ', jsx(_components.code, {
        children: "musnqzvt"
      }), " descends from ", jsx(_components.code, {
        children: "tylynnzk"
      }), ", but\nthe nodes connecting them are not in the revset."]
    }), "\n", jsxs(_components.p, {
      children: ["To view the elided revisions, change the ", jsx(_components.a, {
        href: "/reference/revsets",
        children: "revset expression"
      }), " so it\nincludes the connecting revisions. The ", jsx(_components.code, {
        children: "connected()"
      }), " revset function does\nexactly this:"]
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " log"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -r"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 'connected(tyl|mus)'"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u25CB"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  musnqzvt"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " me@example.com"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 43"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " seconds"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ago"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 9a09f8a5"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u2502"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  Revision"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " C"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u25CB"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  rsvnrznr"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " me@example.com"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 43"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " seconds"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ago"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 5b490f30"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u2502"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  Revision"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " B"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u25CB"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  tylynnzk"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " me@example.com"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 43"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " seconds"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ago"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " f26967c8"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u2502"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  Revision"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " A"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.h3, {
      id: "how-can-i-get-jj-log-to-show-me-what-git-log-would-show-me",
      children: ["How can I get ", jsx(_components.code, {
        children: "jj log"
      }), " to show me what ", jsx(_components.code, {
        children: "git log"
      }), " would show me?"]
    }), "\n", jsxs(_components.p, {
      children: ["Use ", jsx(_components.code, {
        children: "jj log -r .."
      }), ". The ", jsx(_components.code, {
        children: ".."
      }), " ", jsx(_components.a, {
        href: "/reference/revsets#operators",
        children: "operator"
      }), " lists all visible commits in the repo, excluding the root (which is never interesting and is shared by all repos)."]
    }), "\n", jsxs(_components.h3, {
      id: "can-i-monitor-how-jj-log-evolves",
      children: ["Can I monitor how ", jsx(_components.code, {
        children: "jj log"
      }), " evolves?"]
    }), "\n", jsxs(_components.p, {
      children: ["The simplest way to monitor how the history as shown by ", jsx(_components.code, {
        children: "jj log"
      }), " evolves is by using the ", jsx(_components.a, {
        href: "https://man7.org/linux/man-pages/man1/watch.1.html",
        children: "watch(1)"
      }), " command (or ", jsx(_components.a, {
        href: "https://github.com/blacknon/hwatch?tab=readme-ov-file#configuration",
        children: "hwatch"
      }), " or ", jsx(_components.a, {
        href: "https://github.com/sachaos/viddy",
        children: "viddy"
      }), ").\nFor example:"]
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "watch"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --color"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --ignore-working-copy"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " log"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --color=always"
            })]
          })
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["This will continuously update the (colored) log output in the terminal.\nThe ", jsx(_components.code, {
        children: "--ignore-working-copy"
      }), " option avoids conflicts with manual operations during the creation of snapshots.\nMartin used watch in a ", jsx(_components.a, {
        href: "https://github.com/tmux/tmux/wiki",
        children: "tmux"
      }), " pane during his presentation ", jsx(_components.a, {
        href: "https://www.youtube.com/watch?v=LV0JzI8IcCY",
        children: "Jujutsu - A Git-compatible VCS"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["Alternatively, you can use ", jsx(_components.a, {
        href: "https://github.com/tim-janik/jj-fzf",
        children: "jj-fzf"
      }), ", where the central piece is the ", jsx(_components.code, {
        children: "jj log"
      }), " view and common operations can be carried out via key bindings while the log view updates."]
    }), "\n", jsxs(_components.p, {
      children: ["The wiki lists additional TUIs and GUIs beyond the terminal: ", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/wiki/GUI-and-TUI",
        children: "GUI-and-TUI"
      })]
    }), "\n", jsx(_components.h3, {
      id: "should-i-colocate-my-repository",
      children: "Should I colocate my repository?"
    }), "\n", jsx(_components.p, {
      children: "Colocating a Jujutsu repository allows you to use both Jujutsu and Git in the\nsame working copy. The benefits of doing so are:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "You can use Git commands when you're not sure how to do something with\nJujutsu, Jujutsu hasn't yet implemented a feature (e.g., tagging), or you\nsimply prefer Git in some situations."
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "Tooling that expects a Git repository still works (IDEs, build tooling, etc.)"
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.a, {
        href: "/comparisons/git-compatibility#colocated-jujutsugit-repos",
        children: "colocation documentation describes the\ndrawbacks"
      }), " but the most\nimportant ones are:"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["Interleaving ", jsx(_components.code, {
            children: "git"
          }), " and ", jsx(_components.code, {
            children: "jj"
          }), " commands may create confusing bookmark conflicts\nor divergent changes."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["If the working copy commit or its parent contain any conflicted files, tools\nexpecting a Git repo may interpret the commit contents or its diff in a wrong\nand confusing way. You should avoid doing mutating operations with Git tools\nand ignore the confusing information such tools present for conflicted commits\n(unless you are curious about ", jsxs(_components.a, {
            href: "/technical-details/conflicts",
            children: ["the details of how ", jsx(_components.code, {
              children: "jj"
            }), " stores\nconflicts"]
          }), "). See\n", jsx(_components.a, {
            href: "https://github.com/jj-vcs/jj/issues/3979",
            children: "#3979"
          }), " for plans to improve\nthis situation."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsx(_components.p, {
          children: "Jujutsu commands may be a little slower in very large repositories due to\nimporting and exporting changes to Git. Most repositories are not noticeably\naffected by this."
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "If you primarily use Jujutsu to modify the repository, the drawbacks are\nunlikely to affect you. Try colocating while you learn Jujutsu, then switch if\nyou find a specific reason not to colocate."
    }), "\n", jsxs(_components.h3, {
      id: "jj-is-said-to-record-the-working-copy-after-jj-log-and-every-other-command-where-can-i-see-these-automatic-saves",
      children: [jsx(_components.code, {
        children: "jj"
      }), " is said to record the working copy after ", jsx(_components.code, {
        children: "jj log"
      }), ' and every other command. Where can I see these automatic "saves"?']
    }), "\n", jsxs(_components.p, {
      children: ["Indeed, every ", jsx(_components.code, {
        children: "jj"
      }), ' command updates the current "working-copy" revision, marked\nwith ', jsx(_components.code, {
        children: "@"
      }), " in ", jsx(_components.code, {
        children: "jj log"
      }), ". You can notice this by how the ", jsx(_components.a, {
        href: "/concepts/glossary#commit-id",
        children: "commit ID"
      }), " of the\nworking copy revision changes when it's updated. Note that, unless you move to\nanother revision (with ", jsx(_components.code, {
        children: "jj new"
      }), " or ", jsx(_components.code, {
        children: "jj edit"
      }), ", for example), the ", jsx(_components.a, {
        href: "/concepts/glossary#change-id",
        children: "change ID"
      }), " will\nnot change."]
    }), "\n", jsxs(_components.p, {
      children: ["If you expected to see a historical view of your working copy changes in the\nparent-child relationships between commits you can see in ", jsx(_components.code, {
        children: "jj log"
      }), ", this is\nsimply not what they mean. What you can see in ", jsx(_components.code, {
        children: "jj log"
      }), " is that after the\nworking copy commit gets amended (after any edit), the commit ID changes."]
    }), "\n", jsxs(_components.p, {
      children: ["You can see the actual history of working copy changes using ", jsx(_components.code, {
        children: "jj evolog"
      }), '. This\nwill show the history of the commits that were previously the "working-copy\ncommit", since the last time the change id of the working copy commit changed.\nThe obsolete changes will be marked as "hidden". They are still accessible with\nany ', jsx(_components.code, {
        children: "jj"
      }), " command (", jsx(_components.code, {
        children: "jj diff"
      }), ", for example), but you will need to use the commit\nid to refer to hidden commits."]
    }), "\n", jsxs(_components.p, {
      children: ["You can also use ", jsx(_components.code, {
        children: "jj evolog -r"
      }), " on revisions that were previously the\nworking-copy revisions (or on any other revisions). Use ", jsx(_components.code, {
        children: "jj evolog -p"
      }), " as an\neasy way to see the evolution of the commit's contents."]
    }), "\n", jsx(_components.h3, {
      id: "can-i-prevent-jujutsu-from-recording-my-unfinished-work-im-not-ready-to-commit-it",
      children: "Can I prevent Jujutsu from recording my unfinished work? I'm not ready to commit it."
    }), "\n", jsx(_components.p, {
      children: "Jujutsu automatically records new files in the current working-copy commit and\ndoesn't provide a way to prevent that."
    }), "\n", jsxs(_components.p, {
      children: ["However, you can easily record intermediate drafts of your work. If you think\nyou might want to go back to the current state of the working-copy commit,\nsimply use ", jsx(_components.code, {
        children: "jj new"
      }), `. There's no need for the commit to be "finished" or even
have a description.`]
    }), "\n", jsxs(_components.p, {
      children: ["Then future edits will go into a new working-copy commit on top of the now\nformer working-copy commit. Whenever you are happy with another set of edits,\nuse ", jsx(_components.code, {
        children: "jj squash"
      }), " to amend the previous commit."]
    }), "\n", jsxs(_components.p, {
      children: ["If you have changes you ", jsx(_components.em, {
        children: "never"
      }), " want to put in a public commit, see: ", jsx(_components.a, {
        href: "#how-can-i-keep-my-scratch-files-in-the-repository-without-committing-them",
        children: "How can I\nkeep my scratch files in the repository without committing\nthem?"
      })]
    }), "\n", jsx(_components.p, {
      children: "For more options see the next question."
    }), "\n", jsxs(_components.h3, {
      id: "can-i-interactively-create-a-new-commit-from-only-some-of-the-changes-in-the-working-copy-like-git-add--p--git-commit-or-hg-commit--i",
      children: ["Can I interactively create a new commit from only some of the changes in the working copy, like ", jsx(_components.code, {
        children: "git add -p && git commit"
      }), " or ", jsx(_components.code, {
        children: "hg commit -i"
      }), "?"]
    }), "\n", jsxs(_components.p, {
      children: ["Since the changes are already in the working-copy commit, the equivalent to\n", jsx(_components.code, {
        children: "git add -p && git commit"
      }), "/", jsx(_components.code, {
        children: "git commit -p"
      }), "/", jsx(_components.code, {
        children: "hg commit -i"
      }), " is to split the\nworking-copy commit with ", jsx(_components.code, {
        children: "jj split -i"
      }), " (or the practically identical\n", jsx(_components.code, {
        children: "jj commit -i"
      }), ")."]
    }), "\n", jsxs(_components.p, {
      children: ["For the equivalent of ", jsx(_components.code, {
        children: "git commit --amend -p"
      }), "/", jsx(_components.code, {
        children: "hg amend -i"
      }), ", use ", jsx(_components.code, {
        children: "jj squash -i"
      }), "."]
    }), "\n", jsxs(_components.h3, {
      id: "is-there-something-like-git-rebase---interactive-or-hg-histedit",
      children: ["Is there something like ", jsx(_components.code, {
        children: "git rebase --interactive"
      }), " or ", jsx(_components.code, {
        children: "hg histedit"
      }), "?"]
    }), "\n", jsxs(_components.p, {
      children: ["It is often sufficient to use some form of ", jsx(_components.code, {
        children: "jj rebase"
      }), " with ", jsx(_components.code, {
        children: "-A/-B"
      }), ". For\nexample, if you have a linear chain of revisions ", jsx(_components.code, {
        children: "A"
      }), " through ", jsx(_components.code, {
        children: "C"
      }), " and want to\nmove ", jsx(_components.code, {
        children: "C"
      }), " before ", jsx(_components.code, {
        children: "B"
      }), ", use ", jsx(_components.code, {
        children: "jj rebase -r C -B B"
      }), ". See ", jsx(_components.code, {
        children: "jj help rebase"
      }), " for more\nexamples."]
    }), "\n", jsxs(_components.p, {
      children: ["There is a ", jsx(_components.a, {
        href: "https://github.com/jj-vcs/jj/issues/1531",
        children: "tracking issue"
      }), " you can check for updates."]
    }), "\n", jsxs(_components.p, {
      children: ["To squash or split commits, use ", jsx(_components.code, {
        children: "jj squash"
      }), " and ", jsx(_components.code, {
        children: "jj split"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "how-can-i-keep-my-scratch-files-in-the-repository-without-committing-them",
      children: "How can I keep my scratch files in the repository without committing them?"
    }), "\n", jsxs(_components.p, {
      children: ["You can set ", jsx(_components.code, {
        children: "snapshot.auto-track"
      }), " to only start tracking new files matching the\nconfigured pattern (e.g. ", jsx(_components.code, {
        children: '"none()"'
      }), "). Changes to already tracked files will\nstill be snapshotted by every command. Files not matching the pattern can be\ntracked with ", jsx(_components.code, {
        children: "jj file track"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["You can keep your notes and other scratch files in the repository, if you add\na wildcard pattern to either the repo's ", jsx(_components.code, {
        children: "gitignore"
      }), " or your global ", jsx(_components.code, {
        children: "gitignore"
      }), ".\nSomething like ", jsx(_components.code, {
        children: "*.scratch"
      }), " or ", jsx(_components.code, {
        children: "*.scratchpad"
      }), " should do, after that rename the\nfiles you want to keep around to match the pattern."]
    }), "\n", jsxs(_components.p, {
      children: ["If you keep your scratch files in their own directory with no tracked files, you\ncan create a ", jsx(_components.code, {
        children: ".gitignore"
      }), " file in that directory containing only ", jsx(_components.code, {
        children: "*"
      }), ". This will\nignore everything in the directory including the ", jsx(_components.code, {
        children: ".gitignore"
      }), " file itself."]
    }), "\n", jsxs(_components.p, {
      children: ["If ", jsx(_components.code, {
        children: "$EDITOR"
      }), " integration is important, something like ", jsx(_components.code, {
        children: "scratchpad.*"
      }), " may be more\nhelpful, as you can keep the filename extension intact (it\nmatches ", jsx(_components.code, {
        children: "scratchpad.md"
      }), ", ", jsx(_components.code, {
        children: "scratchpad.rs"
      }), " and more). Another option is to add a\ndirectory to the global ", jsx(_components.code, {
        children: ".gitignore"
      }), " which then stores all your temporary files\nand notes. For example, you could add ", jsx(_components.code, {
        children: "scratch/"
      }), " to ", jsx(_components.code, {
        children: "~/.git/ignore"
      }), " and then\nstore arbitrary files in ", jsx(_components.code, {
        children: "<your-git-repo>/scratch/"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["You can find more details on ", jsx(_components.code, {
        children: "gitignore"
      }), " files ", jsx(_components.a, {
        href: "https://git-scm.com/docs/gitignore",
        children: "here"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "how-can-i-avoid-committing-my-local-only-changes-to-tracked-files",
      children: "How can I avoid committing my local-only changes to tracked files?"
    }), "\n", jsxs(_components.p, {
      children: ["Suppose your repository tracks a file like ", jsx(_components.code, {
        children: "secret_config.json"
      }), ", and you make\nsome changes to that file to work locally. Since Jujutsu automatically commits\nthe working copy, there's no way to prevent Jujutsu from committing changes to\nthe file. But, you never want to push those changes to the remote repository."]
    }), "\n", jsxs(_components.p, {
      children: ["One solution is to keep these changes in a separate commit branched from the\ntrunk. To use those changes in your working copy, ", jsx(_components.em, {
        children: "merge"
      }), " the private commit\ninto your branch."]
    }), "\n", jsx(_components.p, {
      children: 'Suppose you have a commit "Add new feature":'
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " log"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "@"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  xxxxxxxx"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " me@example.com"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 2024-08-21"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 11:13:21"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ef612875"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u2502"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  Add"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " new"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " feature"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u25C9"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  yyyyyyyy"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " me@example.com"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 2024-08-21"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 11:13:09"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " main"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " b624cf12"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u2502"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  Existing"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " work"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "~"
            })
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "First, create a new commit branched from main and add your private changes:"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " new"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " main"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -m"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "private: my credentials"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Working"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " copy"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  (@) now at: wwwwwwww 861de9eb ("
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "empty"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") private: my credentials"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Parent"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " commit"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (@-)      "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " yyyyyyyy b624cf12 main "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "|"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Existing"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " work"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Added"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 0"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " files,"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " modified"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 1"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " files,"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " removed"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 0"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " files"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " echo"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ` '{ "password": "p@ssw0rd1" }'`
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " >"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " secret_config.json"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Now create a merge commit with the branch you're working on and the private\ncommit:"
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " new"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " xxxxxxxx"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " wwwwwwww"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Working"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " copy"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  (@) now at: vvvvvvvv ac4d9fbe ("
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "empty"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") ("
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "no"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " description"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " set"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Parent"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " commit"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (@-)      "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " xxxxxxxx ef612875 Add new feature"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Parent"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " commit"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (@-)      "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " wwwwwwww 2106921e private: my credentials"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Added"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 0"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " files,"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " modified"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 1"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " files,"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " removed"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " 0"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " files"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " log"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "@"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "    vvvvvvvv"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " me@example.com"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 2024-08-22"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 08:57:40"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ac4d9fbe"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u251C\u2500\u256E"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  (empty) ("
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "no"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " description"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " set"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ")"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u2502"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " \u25C9"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  wwwwwwww"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " me@example.com"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 2024-08-22"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 08:57:40"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 2106921e"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u2502"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " \u2502"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  private:"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " my"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " credentials"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u25C9"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " \u2502"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  xxxxxxxx"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " me@example.com"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 2024-08-21"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 11:13:21"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " ef612875"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u251C\u2500\u256F"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  Add"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " new"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " feature"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u25C9"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  yyyyyyyy"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " me@example.com"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 2024-08-21"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " 11:13:09"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " main"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " b624cf12"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "\u2502"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  Existing"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " work"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "~"
            })
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Now you're ready to work:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["Your work in progress ", jsx(_components.em, {
          children: "xxxxxxxx"
        }), " is the first parent of the merge commit."]
      }), "\n", jsxs(_components.li, {
        children: ["The private commit ", jsx(_components.em, {
          children: "wwwwwwww"
        }), " is the second parent of the merge commit."]
      }), "\n", jsxs(_components.li, {
        children: ["The working copy (", jsx(_components.em, {
          children: "vvvvvvvv"
        }), ") contains changes from both."]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["As you work, squash your changes using ", jsx(_components.code, {
        children: "jj squash --into xxxxxxxx"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["If you need a new empty commit on top of ", jsx(_components.code, {
        children: "xxxxxxxx"
      }), " you can use the\n", jsx(_components.code, {
        children: "--insert-after"
      }), " and ", jsx(_components.code, {
        children: "--insert-before"
      }), " options (", jsx(_components.code, {
        children: "-A"
      }), " and ", jsx(_components.code, {
        children: "-B"
      }), " for short):"]
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Insert a new commit after xxxxxxxx"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " new"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --no-edit"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -A"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " xxxxxxxx"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -m"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "Another feature"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Working"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " copy"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  (@) now at: uuuuuuuu 1c3cff09 ("
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "empty"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") Another feature"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Parent"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " commit"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (@-)      "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " xxxxxxxx ef612875 Add new feature"
            })]
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Insert a new commit between yyyyyyyy and vvvvvvvv"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "$"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " new"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --no-edit"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -A"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " yyyyyyyy"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -B"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " vvvvvvvv"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " -m"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ' "Yet another feature"'
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Working"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " copy"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  (@) now at: tttttttt 938ab831 ("
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "empty"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ") Yet another feature"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "Parent"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " commit"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " (@-)      "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " yyyyyyyy b624cf12 Existing work"
            })]
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["To avoid pushing change ", jsx(_components.em, {
        children: "wwwwwwww"
      }), " by mistake, use the configuration\n", jsx(_components.a, {
        href: "/reference/config#set-of-private-commits",
        children: "git.private-commits"
      }), ":"]
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
        icon: '<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "jj"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " config"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " set"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " --user"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: " git.private-commits"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ` "'''description(glob:'private:*')'''"`
            })]
          })
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "i-accidentally-changed-files-in-the-wrong-commit-how-do-i-move-the-recent-changes-into-another-commit",
      children: "I accidentally changed files in the wrong commit, how do I move the recent changes into another commit?"
    }), "\n", jsxs(_components.p, {
      children: [`Let's say we are editing a commit for "featureA", and we forgot to run `, jsx(_components.code, {
        children: "jj new"
      }), " or ", jsx(_components.code, {
        children: "jj commit"
      }), " before doing some work that belongs in a new commit:"]
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
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj log"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "@  lnvvtrzo jjfan@example.org 2025-02-28 21:01:10 31a347e0"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  featureA"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u25C6  zzzzzzzz root() 00000000"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ cat file  "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '# Oh no, the work on "feature B" should be in a separate commit!'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Done with feature A"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Working on feature B"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["The goal is to restore change ", jsx(_components.code, {
        children: "lnvvtrzo"
      }), " to its previous state and split the\ndifference into a new child commit."]
    }), "\n", jsx(_components.h4, {
      id: "step-1-find-the-commit-id-for-the-last-good-version",
      children: 'Step 1: Find the commit ID for the "last good version"'
    }), "\n", jsxs(_components.p, {
      children: ["If you pushed ", jsx(_components.code, {
        children: "lnvvtrzo"
      }), " already, then the version you probably want to restore\nis the version on the remote. For example, if the bookmark is ", jsx(_components.code, {
        children: "feature-a"
      }), ", then\nthe commit you want to restore is ", jsx(_components.code, {
        children: "feature-a@origin"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["Otherwise, you can find ", jsxs(_components.a, {
        href: "#jj-is-said-to-record-the-working-copy-after-jj-log-and-every-other-command-where-can-i-see-these-automatic-saves",
        children: ["all the past versions of the working copy revision that\n", jsx(_components.code, {
          children: "jj"
        }), " has saved"]
      }), " by running ", jsx(_components.code, {
        children: "jj evolog"
      }), ", perhaps with the ", jsx(_components.code, {
        children: "--patch"
      }), '\noption. The obsolete versions will be marked as "hidden" and will have the same\nchange ID, but will have different commit IDs. This represents the ', jsx(_components.a, {
        href: "/concepts/glossary#change",
        children: "change"
      }), "\nevolving over time."]
    }), "\n", jsx(_components.p, {
      children: "For example, this is what the evolog might look like after you made two edits to\nthe same change:"
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
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ # Note the word "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"hidden"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", the commit IDs on the right,"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ # and the unchanging change ID on the left."
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj evolog"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "@  lnvvtrzo jjfan@example.org 2025-02-28 21:01:10 31a347e0"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  featureA"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  -- operation 3cb7392c092c snapshot working copy"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u25CB  lnvvtrzo hidden jjfan@example.org 2025-02-28 21:00:51 b8004ab8"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  featureA"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  -- operation 1280bfaec893 snapshot working copy"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u25CB  lnvvtrzo hidden jjfan@example.org 2025-02-28 20:50:05 e4d831d"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "   (no description set)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "   -- operation 0418a5aa94b5 snapshot working copy"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Since commit ", jsx(_components.code, {
        children: "b800"
      }), " is hidden, it is considered obsolete and ", jsx(_components.code, {
        children: "jj log"
      }), " (without\narguments) will not show it, nor can it be accessed by its change ID ", jsx(_components.code, {
        children: "lnvvtrzo"
      }), ".\nHowever, most ", jsx(_components.code, {
        children: "jj"
      }), " operations work normally on such commits if you refer to them\nby their commit ID."]
    }), "\n", jsxs(_components.p, {
      children: ["To find out which of these versions is the last time before we started working\non feature B (the point where we should have created a new change, but failed to\ndo so), we can look at the actual changes between the ", jsx(_components.code, {
        children: "evolog"
      }), " commits by\nrunning ", jsx(_components.code, {
        children: "jj evolog --patch"
      }), ":"]
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
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ # When was the last saved point before we started working on feature B"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "?"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj evolog --patch --git  "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# We use `--git` to make diffs clear without colors"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "@  lnvvtrzo jjfan@example.org 2025-02-28 21:01:10 31a347e0"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  featureA"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  -- operation 3cb7392c092c snapshot working copy"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  diff --git a/file b/file"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  index 2b455c4207..2a7e05a01a 100644"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  --- a/file"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  +++ b/file"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  @@ -1,1 +1,2 @@"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502   Done with feature A"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  +Working on feature B"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u25CB  lnvvtrzo hidden jjfan@example.org 2025-02-28 21:00:51 b8004ab8"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  featureA"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  -- operation 1280bfaec893 snapshot working copy"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  diff --git a/file b/file"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  index cb61245109..2b455c4207"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  --- a/file"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  +++ b/file"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  @@ -1,1 +1,1 @@"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  -Working on feature A"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  +Done with feature A"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u25CB  lnvvtrzo hidden jjfan@example.org 2025-02-28 20:50:05 e4d831d"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "   (no description set)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "   -- operation 0418a5aa94b5 snapshot working copy"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "   diff --git a/file b/file"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "   index 0000000000..cb61245109"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "   --- /dev/null"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "   +++ b/file"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "   @@ 0,0 +1,1 @@"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "   +Working on feature A"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ['In this example, the version of the change when we were actually done with\nfeature A is when we edited the file to say "Done with feature A". This state\nwas saved in the commit with ID ', jsx(_components.code, {
        children: "b80"
      }), " (the second one in the list). The\nfollowing edit (commit ", jsx(_components.code, {
        children: "31a"
      }), ") belongs in a new change."]
    }), "\n", jsx(_components.h4, {
      id: "step-2-create-a-new-change-on-top-of-the-original-revision",
      children: "Step 2: Create a new change on top of the original revision"
    }), "\n", jsxs(_components.p, {
      children: ['The "featureA" change is currently at commit ', jsx(_components.code, {
        children: "31a"
      }), ":"]
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
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj log"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "@  lnvvtrzo jjfan@example.org 2025-02-28 21:01:10 31a347e0"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u2502  featureA"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "\u25C6  zzzzzzzz root() 00000000"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: [`We'd like to create a new "featureB" change with the contents of the current
commit `, jsx(_components.code, {
        children: "31a"
      }), `, and we'd like the "featureA" change to be reverted to its former
state at commit `, jsx(_components.code, {
        children: "b80"
      }), " (see step 1 above for how we found that commit ID)."]
    }), "\n", jsxs(_components.p, {
      children: ["First, we create a new empty child commit on top of ", jsx(_components.code, {
        children: "b80"
      }), ":"]
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
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj new b80 -m "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"featureB"'
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Working copy  (@) now at: pvnrkl 47171aa (empty) featureB"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Parent commit (@-)      : lnvvtr?? b8004ab featureA"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ['Notice the change ID has "??" appended to it. This indicates that change ID\n', jsx(_components.code, {
        children: "lnvvtr"
      }), " is now ", jsx(_components.a, {
        href: "/concepts/glossary#divergent-change",
        children: "divergent"
      }), ": There are two visible commits\nwith the same change ID (commit ", jsx(_components.code, {
        children: "b8004ab"
      }), " and ", jsx(_components.code, {
        children: "31a347e0"
      }), "). This is okay and will\nbe resolved in the next steps."]
    }), "\n", jsxs(_components.p, {
      children: ["Next, restore the contents of ", jsx(_components.code, {
        children: "31a347e0"
      }), " into the working copy:"]
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
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj restore --from 31a347e0"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Working copy  (@) now at: pvnrkl 468104c featureB"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Parent commit (@-)      : lnvvtr?? b8004ea featureA"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ cat file"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Done with feature A"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Working on feature B"
            })
          })]
        })
      })
    }), "\n", jsx(_components.h4, {
      id: "step-3-move-any-bookmarks-to-the-original-revision",
      children: "Step 3: Move any bookmarks to the original revision"
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
        children: jsx(_components.code, {
          children: jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj bookmark move --from 31a347e0 --to b8004ea8"
            })
          })
        })
      })
    }), "\n", jsx(_components.h4, {
      id: "step-4-abandon-the-unwanted-revision",
      children: "Step 4: Abandon the unwanted revision"
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
        children: jsx(_components.code, {
          children: jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj abandon 31a347e0"
            })
          })
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Now, we have achieved the exact state we desired:"
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
              children: "$ jj log -p --git"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "@  pvnrklkn jjfan@example.org 2025-02-28 21:39:29 468104c2"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u2502  featureB"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u2502  diff --git a/file b/file"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u2502  index 2b455c4207..2a7e05a01a 100644"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u2502  --- a/file"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u2502  +++ b/file"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u2502  @@ -1,1 +1,2 @@"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u2502   Done with feature A"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u2502  +Working on feature B"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u25CB  lnvvtrzo jjfan@example.org 2025-02-28 21:00:51 b8004ab8"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u2502  featureA"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u2502  diff --git a/file b/file"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u2502  new file mode 100644"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u2502  index 0000000000..2b455c4207"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u2502  --- /dev/null"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u2502  +++ b/file"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u2502  @@ -0,0 +1,1 @@"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u2502  +Done with feature A"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "\u25C6  zzzzzzzz root() 00000000"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "$ jj diff --from b80 --to @- # No output means these are identical"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "$ jj diff --from 31a --to @  # No output means these are identical"
            })
          })]
        })
      })
    }), "\n", jsx(_components.h3, {
      id: "how-do-i-resume-working-on-an-existing-change",
      children: "How do I resume working on an existing change?"
    }), "\n", jsxs(_components.p, {
      children: ["There are two ways to resume working on an earlier change: ", jsx(_components.code, {
        children: "jj new"
      }), " then ", jsx(_components.code, {
        children: "jj squash"
      }), ",\nand ", jsx(_components.code, {
        children: "jj edit"
      }), ". The first is generally recommended, but ", jsx(_components.code, {
        children: "jj edit"
      }), " can be useful. When\nyou use ", jsx(_components.code, {
        children: "jj edit"
      }), ", the revision is directly amended with your new changes, making it\ndifficult to tell what exactly you change. You should avoid using ", jsx(_components.code, {
        children: "jj edit"
      }), " when the\nrevision has a conflict, as you may accidentally break the plain-text annotations on\nyour state without realizing."]
    }), "\n", jsxs(_components.p, {
      children: ["To start, use ", jsx(_components.code, {
        children: "jj new <rev>"
      }), " to create a change based on that earlier revision. Make\nyour edits, then use ", jsx(_components.code, {
        children: "jj squash"
      }), " to update the earlier revision with those edits.\nFor when you would use git stashing, use ", jsx(_components.code, {
        children: "jj edit <rev>"
      }), " for expected behavior.\nOther workflows may prefer ", jsx(_components.code, {
        children: "jj edit"
      }), " as well."]
    }), "\n", jsx(_components.h3, {
      id: "why-are-most-merge-commits-marked-as-empty",
      children: 'Why are most merge commits marked as "(empty)"?'
    }), "\n", jsx(_components.p, {
      children: "Jujutsu, like Git, is a snapshot-based VCS. That means that each commit\nlogically records the state of all current files in the repo. The changes in a\ncommit are not recorded but are instead calculated when needed by comparing the\ncommit's state to the parent commit's state. Jujutsu defines the changes in a\ncommit to be relative to the auto-merged parents (if there's only one parent,\nthen that merge is trivial - it's the parent commit's state). As a result, a\nmerge commit that was a clean merge (no conflict resolution, no additional\nchanges) is considered empty. Conversely, if the merge commit contains conflict\nresolutions or additional changes, then it will be considered non-empty."
    }), "\n", jsxs(_components.p, {
      children: ["This definition of the changes in a commit is used throughout Jujutsu. It's\nused by ", jsx(_components.code, {
        children: "jj diff -r"
      }), " and ", jsx(_components.code, {
        children: "jj log -p"
      }), " to show the changes in a commit. It's used\nby ", jsx(_components.code, {
        children: "jj rebase"
      }), " to rebase the changes in a commit. It's used in ", jsx(_components.code, {
        children: "jj log"
      }), " to\nindicate which commits are empty. It's used in the ", jsx(_components.code, {
        children: "files()"
      }), " revset function\n(and by ", jsx(_components.code, {
        children: "jj log <path>"
      }), ") to find commits that modify a certain path. And so on."]
    }), "\n", jsxs(_components.h2, {
      id: "how-do-i-revert-a-merge-commit-jj-revert--r-merge-does-nothing",
      children: ["How do I revert a merge commit? ", jsx(_components.code, {
        children: "jj revert -r <merge>"
      }), " does nothing"]
    }), "\n", jsxs(_components.p, {
      children: ["Jujutsu defines the changes in a merge commit (and non-merge commits) as the\nchanges made compared to the auto-merged parents. That means that merge commits\nare often empty. As a result, ", jsx(_components.code, {
        children: "jj revert"
      }), " or a merge commit often results in an\nempty commit. To revert the changes merged in from the second parent, instead\nuse ", jsx(_components.code, {
        children: "jj restore --from <first parent>"
      }), " ."]
    }), "\n", jsx(_components.p, {
      children: "Example:"
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
              children: "@"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "C"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "| \\"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "B D"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "|/"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "A"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["To revert the merge in ", jsx(_components.code, {
        children: "C"
      }), ", create a new commit with ", jsx(_components.code, {
        children: "jj new C"
      }), ",\nthen ", jsx(_components.code, {
        children: "jj restore --from B"
      }), ", and then describe the message\nwith something like ", jsx(_components.code, {
        children: 'jj desc -m "Revert the merge of D into B'
      }), ". Now, commit ", jsx(_components.code, {
        children: "@"
      }), "\nundoes the merge of ", jsx(_components.code, {
        children: "D"
      }), " into ", jsx(_components.code, {
        children: "B"
      }), ". If necessary, you can now rebase it\nelsewhere, e.g. ", jsx(_components.code, {
        children: "jj rebase -r @ -d main"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "how-do-i-deal-with-divergent-changes--after-the-change-id",
      children: "How do I deal with divergent changes ('??' after the change ID)?"
    }), "\n", jsxs(_components.p, {
      children: ["See: ", jsx(_components.a, {
        href: "/guides/divergence",
        children: "Handling divergent commits"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "how-do-i-deal-with-conflicted-bookmarks--after-bookmark-name",
      children: "How do I deal with conflicted bookmarks ('??' after bookmark name)?"
    }), "\n", jsxs(_components.p, {
      children: ["A ", jsx(_components.a, {
        href: "/concepts/bookmarks#conflicts",
        children: "conflicted bookmark"
      }), " is a bookmark that refers to multiple\ndifferent commits because jj couldn't fully resolve its desired position.\nResolving conflicted bookmarks is usually done by setting the bookmark to the\ncorrect commit using ", jsx(_components.code, {
        children: "jj bookmark move <name> --to <commit ID>"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["Usually, the different commits associated with the conflicted bookmark should all\nappear in the log, but if they don't you can use ", jsx(_components.code, {
        children: "jj bookmark list"
      }), "to show all the\ncommits associated with it."]
    }), "\n", jsx(_components.h3, {
      id: "how-do-i-integrate-jujutsu-with-gerrit",
      children: "How do I integrate Jujutsu with Gerrit?"
    }), "\n", jsx(_components.p, {
      children: "Add this to your configuration to automatically add Change-Id trailers to commit messages:"
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
          children: [jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "templates"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "]"
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "commit_trailers = "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'''"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "if("
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '  !trailers.contains_key("Change-Id"),'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "  format_gerrit_change_id_trailer(self)"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: ")"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'''"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: [`Note: If you don't check for the presence of the "Change-Id" trailer, you might
occasionally get duplicate trailers.
This happens when Jujutsu's change-id isn't in sync with the "Change-Id" trailer.
Eg. after `, jsx(_components.code, {
        children: "jj split"
      }), `, the "Change-Id" trailer generated for the new change would
be different from the original one, it wouldn't be deduplicated.`]
    }), "\n", jsxs(_components.p, {
      children: ["You'll have to manually invoke ", jsx(_components.code, {
        children: "git push"
      }), " of ", jsx(_components.code, {
        children: "HEAD"
      }), " on the underlying git repository\ninto the remote Gerrit bookmark ", jsx(_components.code, {
        children: "refs/for/$BRANCH"
      }), ", where ", jsx(_components.code, {
        children: "$BRANCH"
      }), " is the base\nbookmark you want your changes to go to (e.g., ", jsx(_components.code, {
        children: "git push origin HEAD:refs/for/main"
      }), "). Using a ", jsx(_components.a, {
        href: "/concepts/glossary#colocated-repos",
        children: "colocated"
      }), " repo\nwill make the underlying git repo directly accessible from the working\ndirectory."]
    }), "\n", jsx(_components.p, {
      children: "We hope to integrate with Gerrit natively in the future."
    }), "\n", jsxs(_components.h3, {
      id: "im-experiencing-jj-command-issues-in-a-vitevitest-project-how-do-i-fix-this",
      children: ["I'm experiencing ", jsx(_components.code, {
        children: "jj"
      }), " command issues in a Vite/Vitest project, how do I fix this?"]
    }), "\n", jsx(_components.p, {
      children: "When using Vite or Vitest in a Jujutsu repository, you may experience:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Very slow vitest startup times"
      }), "\n", jsxs(_components.li, {
        children: ["Timeout errors in ", jsx(_components.code, {
          children: "jj"
        }), " terminal commands"]
      }), "\n", jsxs(_components.li, {
        children: ["Errors with 3rd party visual tools like ", jsx(_components.code, {
          children: "jjk"
        }), " or ", jsx(_components.code, {
          children: "visual-jj"
        })]
      }), "\n", jsxs(_components.li, {
        children: ["Corrupted ", jsx(_components.code, {
          children: "working_copy.lock"
        }), " files"]
      }), "\n"]
    }), "\n", jsxs(_components.p, {
      children: ["This happens because Vite watches the ", jsx(_components.code, {
        children: ".jj"
      }), " directory where Jujutsu stores its internal state.\nThis creates unnecessary overhead as Vite processes Jujutsu's frequent internal file changes,\nwhich can slow down both tools and occasionally cause file access conflicts."]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "Solution"
      }), ": Configure Vite to ignore the ", jsx(_components.code, {
        children: ".jj"
      }), " directory by adding it to the\n", jsx(_components.code, {
        children: "server.watch.ignored"
      }), " array inside your Vite configuration, for example:"]
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
        icon: '<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>',
        children: jsxs(_components.code, {
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// vite.config.js"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "export"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: " default"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " defineConfig"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "({"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "  // ... other config like plugins, test setup, etc."
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  server: {"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    watch: {"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "      ignored: ["
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: '"**/.jj/**"'
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "],"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    },"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "  },"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "});"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Note: There was a ", jsx(_components.a, {
        href: "https://github.com/vitejs/vite/issues/20036",
        children: "request"
      }), " to include ", jsx(_components.code, {
        children: ".jj"
      }), "\nin the default ignore list, but manual configuration remains the recommended approach."]
    }), "\n", jsx(_components.h3, {
      id: "i-want-to-write-a-tool-which-integrates-with-jujutsu-should-i-use-the-library-or-parse-the-cli",
      children: "I want to write a tool which integrates with Jujutsu. Should I use the library or parse the CLI?"
    }), "\n", jsx(_components.p, {
      children: "There are some trade-offs and there is no definitive answer yet."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["Using ", jsx(_components.code, {
          children: "jj-lib"
        }), " avoids parsing command output and makes error handling easier."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "jj-lib"
        }), " is not a stable API, so you may have to make changes to your tool\nwhen the API changes."]
      }), "\n", jsx(_components.li, {
        children: "The CLI is not stable either, so you may need to make your tool detect the\ndifferent versions and call the right command."
      }), "\n", jsxs(_components.li, {
        children: ["Using the CLI means that your tool will work with custom-built ", jsx(_components.code, {
          children: "jj"
        }), " binaries,\nlike the one at Google (if you're using the library, you will not be able to\ndetect custom backends and more)."]
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
//# sourceMappingURL=faq-D0fuGYTT.mjs.map
