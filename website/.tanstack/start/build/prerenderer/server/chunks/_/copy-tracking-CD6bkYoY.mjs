import { jsx, Fragment, jsxs } from 'file:///Users/conner/jj/website/node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js';

let frontmatter = {
  "title": "Copy Tracking and Tracing Design"
};
let extractedReferences = [{
  "href": "mailto:dploch@google.com"
}, {
  "href": "mailto:martinvonz@google.com"
}, {
  "href": "https://github.com/martinvonz/jj/issues/1027"
}, {
  "href": "https://repo.mercurial-scm.org/hg/rev/49ad315b39ee"
}];
let structuredData = {
  "contents": [{
    "heading": void 0,
    "content": "Authors: Daniel Ploch, Martin von Zweigbergk"
  }, {
    "heading": void 0,
    "content": "Summary: This Document documents an approach to tracking and detecting copy\ninformation in jj repos, in a way that is compatible with both Git's detection\nmodel and with custom backends that have more complicated tracking of copy\ninformation. This design affects the output of diff commands as well as the\nresults of rebasing across remote copies."
  }, {
    "heading": "objective",
    "content": "Add support for copy information that is sufficient for at least the following\nuse cases:"
  }, {
    "heading": "objective",
    "content": "Diffing: If a file has been copied, show a diff compared to the source version\ninstead of showing a full addition."
  }, {
    "heading": "objective",
    "content": "Merging: When one side of a merge (or rebase) has renamed a file and the other\nside has modified it, propagate the changes to the other side. (There are many\nother cases to handle too.)"
  }, {
    "heading": "objective",
    "content": "Log: It should be possible to run something like jj log -p <file> and follow\nthe file backwards when it had been created by copying."
  }, {
    "heading": "objective",
    "content": "Annotate (blame): Similar to the log use case, we should follow the file\nbackwards when it had been created by copying."
  }, {
    "heading": "objective",
    "content": "The solution should support recording and retrieving copy info in a way that\nis performant both for Git, which synthesizes copy info on the fly between\narbitrary trees, and for custom backends which may explicitly record and\nre-serve copy info over arbitrarily large commit ranges."
  }, {
    "heading": "objective",
    "content": "The APIs should be defined in a way that makes it easy for custom backends to\nignore copy info entirely until they are ready to implement it."
  }, {
    "heading": "desired-ux",
    "content": "The following sections describe some scenarios and how we would ideally handle\nthem."
  }, {
    "heading": "desired-ux",
    "content": 'We have not seen much reason to distinguish copies from renames, so a rename\nis simply the same thing as a copy plus a deletion. This means that we cannot\ndistinguish "copy foo to bar and rename foo to baz" from "copy foo\nto baz and rename foo to bar".'
  }, {
    "heading": "restoring-from-a-commit-should-preserve-copies",
    "content": 'For example, jj new X--; jj restore --from X should restore any copies\nmade in X- and X into the new working copy. Transitive copies should\nbe "flattened". For example, if X- renamed foo to bar and X renamed\nbar to baz, then the restored commit should rename foo to baz.'
  }, {
    "heading": "restoring-from-a-commit-should-preserve-copies",
    "content": 'This also applies to reparenting in general, such as for\n"verbatim rebase".'
  }, {
    "heading": "diff-after-restore",
    "content": "jj restore --from X; jj diff --from X should be empty, at least when it comes\nto file contents. It may indicate that renamed file have different history."
  }, {
    "heading": "lossless-round-trip-of-rebase",
    "content": "Except for the A+(A-B)=A rule, rebasing is currently never\nlossy; rebasing a commit and then rebasing it back yields the same content. We\nshould ideally preserve this property when possible."
  }, {
    "heading": "lossless-round-trip-of-rebase",
    "content": "For example:"
  }, {
    "heading": "backing-out-the-parent-commit-should-be-a-no-op",
    "content": "Patches should be reversible so you can make a change and then back it out, and\nend up with an empty diff across both commits."
  }, {
    "heading": "backing-out-the-parent-commit-should-be-a-no-op",
    "content": "For example:"
  }, {
    "heading": "parallelizeserialize",
    "content": "This is a special case of the lossless rebase."
  }, {
    "heading": "copies-inside-merge-commit",
    "content": "We should be able to resolve a naming conflict:"
  }, {
    "heading": "copies-inside-merge-commit",
    "content": "We should also be able to back out that resolution and get back into the\nname-conflicted state."
  }, {
    "heading": "copies-inside-merge-commit",
    "content": "We should be able to rename files that exist on only one side:"
  }, {
    "heading": "copies-across-merge-commit",
    "content": "jj diff --from C --to D should now show a baz->bar rename (just like\njj diff --from C --to B would). jj diff --from B --to D should show\nno renames. That's despite there being a rename in C."
  }, {
    "heading": "high-level-design",
    "content": "Jujutsu uses a snapshot-based model similar to Git's. The algebra for our\nfirst-class conflicts is also based on snapshots and being able to calculate\npatches as differences between states. That means that we have to fit copy\ninformation into that snapshot-based model too ."
  }, {
    "heading": "high-level-design",
    "content": "The proposal is to update tree objects to also contain information about a\nfile's past names. For example, if file foo gets renamed to bar in one\ncommit and then to baz in another commit, we will record that baz previously\nhad names bar and foo."
  }, {
    "heading": "high-level-design",
    "content": "To support merging two files into one, the list of past names is actually a DAG.\nMerging can happen in a merge commit when two sides copy/rename different\nsource files to the same target file. By having support for it in the model, we\ncan also support merging multiple files into one in a regular non-merge commit."
  }, {
    "heading": "high-level-design",
    "content": "To avoid having to store all past paths in the tree object entry, we will write\nthe copy history as an object and the tree will refer to the object by ID. Each\nID refers to a node in the copy history DAG, similar to how commit IDs refer to\na node in the commit DAG."
  }, {
    "heading": "high-level-design",
    "content": "Each node in the copy history DAG stores the path. Having the path in the copy\ngraph can be useful for finding copy sources without having to scan the whole\ntree or having to ask the backend."
  }, {
    "heading": "high-level-design",
    "content": "If we use only the file name as only input to the ID, then we get deterministic\ntree IDs. On the other hand, if we add a salt to the copy graph node, then we\ncan represent that a file was rewritten from scratch. For example, a foo might\nhave copy ID 123 in the previous commit and when the file gets rewritten in\nthe current commit, it gets copy ID 456 even though there was no copy from an\nexisting file involved. That makes logical sense, but I'm not sure how useful\nit will be."
  }, {
    "heading": "high-level-design",
    "content": "The data structure might look like this:"
  }, {
    "heading": "high-level-design",
    "content": "Should we support copy tracking for symlinks? Their history is not very useful\nfor annotation purposes, but knowing the history may at least be useful for\ndetecting directory renames (if all files and symlinks in a directory were\nrenamed)."
  }, {
    "heading": "high-level-design",
    "content": "We probably should not support tracking copied directories because it seems\ncomplicated. I haven't spent much thinking about it, so it's also possible that\nit's not that complicated."
  }, {
    "heading": "diffing",
    "content": "When diffing two trees, we first diff the trees without considering copy info.\nFor any copy IDs that changed in that diff, we walk all of their copy graphs to\nfigure out how they're related and which source file to associate with which\ndestination file."
  }, {
    "heading": "diffing",
    "content": "The details of the algorithm is left for the implementation. The following\nsections provide some examples to hopefully show that it's feasible."
  }, {
    "heading": "example-divergent-copy-and-rename",
    "content": "Let's look at an example of how this model would look in this scenario:"
  }, {
    "heading": "example-divergent-copy-and-rename",
    "content": "Assuming the new files are different in each commit, we get the following trees.\nNotation:"
  }, {
    "heading": "example-divergent-copy-and-rename",
    "content": "idis the hash of the contents (the FileId)"
  }, {
    "heading": "example-divergent-copy-and-rename",
    "content": "The 2:bar->1:foo means that copy ID 2 (i.e. hash of the CopyHistory\nstruct) has file bar, which was copied from copy ID 1, where it was\ncalled foo."
  }, {
    "heading": "example-divergent-copy-and-rename",
    "content": "This graph also shows the relationship between the copy IDs and which commits\nthey appear in:"
  }, {
    "heading": "example-divergent-copy-and-rename",
    "content": "Let's first consider the diff from K to M. Looking at just the trees, that\ndiff finds that copy IDs 1,4,5 were affected. By walking their graphs, we find\n1 and 5 are related, while 4 is not. Considering that copy graph (involving IDs\n1 and 5), since foo doesn't exist in the destination and baz doesn't exist\nin the source, we consider it a rename."
  }, {
    "heading": "example-divergent-copy-and-rename",
    "content": "Let's now consider the diff from L to M. This is the same as the diff of the\ncommit M2 we'd get by running\njj new L; jj bookmark create M2; jj restore --from M --to M2 (which would\nresult in the commit M2 having the same tree as M). Diffing from L to\nM (or M2) finds 1,2,3,4,5 as changed copy IDs. By walking their graphs, we\nfind that 1,2, and 5 are related, while 3 and 4 are not."
  }, {
    "heading": "example-divergent-copy-and-rename",
    "content": "The bar and baz files have unrelated copy graphs, i.e. the copy graphs for\nthe bar file in commit L and the bar file in commit M are disjoint, and\nthe same is true for the baz file. Therefore, we break up their diffs into two\nseparate diffs for each file."
  }, {
    "heading": "example-divergent-copy-and-rename",
    "content": "Among the remaining copy IDs, the shortest path in the copy graph is between\nfoo on the source side and baz on the destination side, so we start with.\nSince foo doesn't exist on the destination side and baz doesn't exist on the\nsource side (with a related copy ID), we consider it a rename."
  }, {
    "heading": "example-divergent-copy-and-rename",
    "content": "The remaining file is bar on the source side. Its closest relative on the\ndestination side is baz. Since we already used baz as a rename target for\nfoo, we won't consider bar renamed to it. So we consider bar as copied\ninto baz."
  }, {
    "heading": "example-divergent-copy-and-rename",
    "content": "So we get these diffs:"
  }, {
    "heading": "example-divergent-copy-and-rename",
    "content": "baz is deleted (deleting content L)"
  }, {
    "heading": "example-divergent-copy-and-rename",
    "content": "bar is created (with content M)"
  }, {
    "heading": "example-divergent-copy-and-rename",
    "content": "foo is renamed to baz (showing diff from K to M)"
  }, {
    "heading": "example-divergent-copy-and-rename",
    "content": "bar is merged into baz (showing diff from L to M)"
  }, {
    "heading": "example-divergent-copy-and-rename-best-rename-target",
    "content": "When diffing L to N, we find that all files are related. Since bar does\nnot exist in the destination, we should find a rename target to match it with.\nWe pick baz because it's closer in the graph than qux is. So the diff is:"
  }, {
    "heading": "example-divergent-copy-and-rename-best-rename-target",
    "content": "bar is renamed to baz"
  }, {
    "heading": "example-divergent-copy-and-rename-best-rename-target",
    "content": "bar is copied to qux"
  }, {
    "heading": "example-copy-onto-deleted-file",
    "content": "When diffing from K to M, we notice that bar has different and unrelated\ncopy IDs. We present one record saying that bar was deleted, and one record\nsaying that bar was copied from foo."
  }, {
    "heading": "example-copy-onto-deleted-file",
    "content": "When diffing from M to K, we will instead present one record that says that\nbar was created, and one record that says that bar was merged into foo."
  }, {
    "heading": "merging",
    "content": "When merging, we need to add a phase before the content-level merging where we\nhandle copies. As before, we start by creating the completely unresolved merged\ntree based on the input trees. To find the relevant copy information, we look at\nthe files changed in each diff and then look up the full copy graph for each.\nFor each copy graph, we can then walk the copy graph to find possible target\npaths, which we then look up in the other side of the merge. If the path exists\nin the tree and has the right copy ID, then we know that the files are related."
  }, {
    "heading": "merging",
    "content": "We assume that the differences between the bases and the first term in the\nconflict can be very large, so we don't look at that diff. Assuming that the\ncommit backend can look up the full copy graph based on a given copy ID, we\ndon't need that diff for correctness."
  }, {
    "heading": "merging",
    "content": "Once we have found all copies involved in the merge, we analyze them to find\nconflicts, such as when two sides of the merge rename a file to the same\ntarget. If there are conflicts, we leave the trees unchanged. The user can then\nresolve the name conflicts using jj resolve (once we've added support for\nthat). Depending on how slow the naming conflict phase turns out to be, we may\nwant to write a flag to commits indicating that they have unresolved naming\nconflicts, so subsequent calls can avoid that phase."
  }, {
    "heading": "merging",
    "content": "When merging trees, we start by rewriting each diff to match any different names\nin the destination tree. For example, if the tree conflict is A+(B-C)+(D-E),\nthen we will rewrite the (B-C) diff and the (D-E) diff to the paths in A.\nTo translate the (B-C) diff, we calculate renames from C to A and then we\napply those renames to both C and B. This may result in conflicts."
  }, {
    "heading": "merging",
    "content": "If a file has a conflict in the copy ID, it will appear as if it doesn't exist\nwhen materialized. It will therefore not show up in the working copy until the\nuser has resolved the conflict."
  }, {
    "heading": "merging",
    "content": "For example:"
  }, {
    "heading": "merging",
    "content": "When rebasing M onto L, we apply the foo->bar rename to the trees in M\nand its parent."
  }, {
    "heading": "merging",
    "content": "Another example:"
  }, {
    "heading": "merging",
    "content": "When rebasing M onto N, we find the foo->bar rename in N, but since it\nis unrelated to the foo file in M (assuming the foo file created in M\nused a different salt), we will not perform any renames. The new foo file\nis then simply created in the rebased M just like it was before the rebase."
  }, {
    "heading": "propagating-changes-across-copies",
    "content": "Should we propagate changes to copies? For example, if you've modified file\nfoo and then rebase it onto a commit that copied foo to bar, should we\napply your change to bar too? Mercurial does that but Git doesn't. It's\nparticularly useful when a file has been split in two. For example, let's say\nyou've made various changes in file foo and then rebase those change onto a\ncommit that split foo into foo1 and foo2 (or foo and bar). If we\npropagate the changes to both files, each change will apply successfully in one\nfile (assuming the changes do not overlap with the split boundary). Each change\nwill have a modify/delete conflicts in the other file. Those can relatively\neasily be resolved in favor of the deleted hunk. If we do not propagate changes,\nthen changes that belong in one of the files will instead only appear as\nmodify/delete conflicts in the first file and you will have to manually copy\nover the changes to the copied file."
  }, {
    "heading": "propagating-changes-across-copies",
    "content": `Propagating changes to copies means that rebasing a commit and then rebasing it
back is no longer a no-op even when ignoring the "same-change rule". For
example, if your commit modifies file foo and you rebase that commit onto a
commit that copied foo to bar, and then you rebase it back, the same change
will be applied twice to foo. However, thanks to the same-change rule, we
won't consider it a conflict, so maybe it actually works well in practice.`
  }, {
    "heading": "propagating-changes-across-copies",
    "content": "A third option is to not leave it up to the user whether to propagate the\nchange across the copy. We can do this by leaving the relevant paths in the\ninput trees unchanged in the conflicted commit. Then we will redo the copy\ntracking process every time the commit is inspected. We can have jj resolve\nask the user if they want to propagate the changes to the copy target with a\nsimple yes/no question per copy target."
  }, {
    "heading": "propagating-changes-across-copies",
    "content": "Decision: Asking the user about propagating copies seems like the best option.\nIt avoids surprises, and it makes the conflict algebra work in more cases."
  }, {
    "heading": "example-propagate-changes-to-copied-file-then-rebase-back",
    "content": "Let's say we rebase M onto L. Since we decided to not automatically\npropagate changes to copies, we will leave the M+(L-K) tree unresolved (i.e.\nwithout making any changes to the three trees). If the user does not resolve\nthe conflict, and instead rebases L back onto K, the conflict will be\nresolved automatically per the usual conflict simplification."
  }, {
    "heading": "example-multiple-copies",
    "content": "Let's say we rebase M onto N. The changes to foo, foo2, and foo3 will\nthen all apply to foo, which means we get a 4-sided conflict."
  }, {
    "heading": "example-convergent-renames",
    "content": 'Consider this "convergent copy/rename" scenario:'
  }, {
    "heading": "example-convergent-renames",
    "content": "It seems clear that baz's copy graph should inherit from both foo and bar,\nproducing a merge in copy graph. The trees would look like this:"
  }, {
    "heading": "example-convergent-renames",
    "content": "We used the same content for both foo and bar above to simplify. If they\nhad been different, we would have had a conflict in the contents but the copy\nID would still have been clear."
  }, {
    "heading": "example-rename-added-file",
    "content": "A well-known and thorny problem in Mercurial occurs in the following scenario:"
  }, {
    "heading": "example-rename-added-file",
    "content": "The problem here for Mercurial is that after squashing C into A, the new A has\nfile bar but no record that it used to be called foo. The design proposed\nabove handles this case because we keep the copy ID of bar after squashing,\nso we can detect that the modifications to foo in commit B should be\npropagated to bar."
  }, {
    "heading": "example-divergent-renames",
    "content": 'Consider this "divergent rename" scenario:'
  }, {
    "heading": "example-divergent-renames",
    "content": "In this scenario, the regular 3-way merge of the trees without considering copy\ninfo results in a tree without conflicts. However, the user might reasonably\nexpect to have to choose between the bar and baz names. Here's what Git says\nin this scenario:"
  }, {
    "heading": "example-divergent-renames",
    "content": "Interestingly, Git seems to represent this state by using index states that\nwould not normally end up in the index as a result of conflicts."
  }, {
    "heading": "example-divergent-renames",
    "content": "Here's what Mercurial says:"
  }, {
    "heading": "example-divergent-renames",
    "content": "Mercurial doesn't have a place to record this state, so it just prints that\nnote and leaves it at that."
  }, {
    "heading": "example-divergent-renames",
    "content": "The model and algorithm described in this document would result in a conflict\nin the copy ID at both paths after propagating the renames."
  }, {
    "heading": "example-jonathantanmys-test-case",
    "content": "TODO: fill this out"
  }, {
    "heading": "example-jonathantanmys-test-case",
    "content": "If F is empty (auto-merged), it should have the same state as E before."
  }, {
    "heading": "log",
    "content": "The copy graph contains all past paths and copy IDs of a file, so when doing\njj log <filename>, we might want to translate that to a revset that's similar\nto files() but matches specific (path, copy ID) pairs instead of specific\npaths."
  }, {
    "heading": "annotate",
    "content": "TBD"
  }, {
    "heading": "representation-in-git",
    "content": "Do we ever want to record renames in the Git backend? If we do, we would\npresumably store it outside the Git object, similar to how we store the change\nid for commits."
  }, {
    "heading": "representation-in-git",
    "content": "What do we use for trees where we don't have any copy graph recorded? If we\nsimply create a new copy graph based on the current path, then the caller will\nnever find any copies. Do we need an indexing pass to detect all renames in a\nrepo when running jj git init? That can be very expensive for large repos.\nFor reference, git log --summary --find-copies-harder takes about 165 seconds\nin the git.git repo on my computer, and about 13 hours in the Nixpkgs repo."
  }, {
    "heading": "representation-in-git",
    "content": "An alternative is to do copy indexing in the background after cloning a repo.\nThat would mean that copy information would not show up until some time later.\nIt would also be more work to implement it this way."
  }, {
    "heading": "representation-in-git",
    "content": "How to deal with two trees having the same content but different file ids?\nActually store the additional data linked from the commit object? That would\nnot work if we point to trees from somewhere that's not a commit. We point to a\ntree from the working-copy state."
  }, {
    "heading": "representation-in-git",
    "content": "One could imagine not storing any copy info in Git and instead making the model\ndescribed above an implementation detail of the backend. Then it could be used\nby the native backend and the Google backend, while we still use on-the-fly\ncopy detection in the Git backend. However, if we want to be able to tell the\nuser about details of conflicting copy IDs so they can decide how to resolve\nsuch conflicts, then we would have to somehow represent that abstractly too."
  }, {
    "heading": "representation-in-cloud-repo-eg-google",
    "content": "Let's say you have a commit with some files you've modified. You now want to\nsync (rebase) that to an updated main branch. If some of the files you modified\nno longer exist on the main branch, we want to figure out if they were renamed\nso we should propagate your changes to the new file location. As described\nearlier, we can do that by finding files that have a different copy ID since the\nlast time you synced with the main branch. However, if there are 10 million new\ncommits on the main branch, there's perhaps tens of thousands of such files\nspread across the entire tree. That can therefore can be very expensive to\ncalculate. We therefore need to be able to get help from a custom backend\nimplementation with this query."
  }, {
    "heading": "representation-in-cloud-repo-eg-google",
    "content": "Since we are only interested in copy graphs that involve files modified in the\nrebased commit, it should be sufficient if the backend provides a method to\nfetch the whole copy graph for a given copy ID (or list of copy IDs). We would\nthen first find all copy IDs involved in the diff of the rebased commit. Then\nwe query the backend to get the full copy graphs. We then need to walk the copy\ngraphs to see if a node exists in the destination tree."
  }, {
    "heading": "representation-in-cloud-repo-eg-google",
    "content": "A weakness of this solution is that the search gets expensive if there are very\nmany related files. That's probably not much of a problem in practice. The\nserver might want to populate the the index only for public/immutable commits.\nOtherwise, a user could poison the index by creating tons of copies\n(intentionally or by mistake), which would make all future queries about those\nfiles expensive."
  }, {
    "heading": "implementation-plan",
    "content": "A rough implementation plan may look like this:"
  }, {
    "heading": "implementation-plan",
    "content": "Implement support for copy-tracking in the test backend"
  }, {
    "heading": "implementation-plan",
    "content": "Implement diff algorithm and test it"
  }, {
    "heading": "implementation-plan",
    "content": "Implement merge algorithm and test it"
  }, {
    "heading": "implementation-plan",
    "content": "Implement blame algorithm and test it"
  }, {
    "heading": "implementation-plan",
    "content": "Implement file-following log algorithm and test it"
  }, {
    "heading": "implementation-plan",
    "content": "Extract some queries to the commit backend trait so cloud-based backends\n(like the Google backend) can provide versions implemented using database\nindexes"
  }, {
    "heading": "implementation-plan",
    "content": "Implement support for copy-tracking in the Git backend. This may involve\nbackfilling, possibly lazily. Or it may involve new abstractions in the\ncommit backend trait."
  }, {
    "heading": "implementation-plan",
    "content": "Implement CLI for recording copies and for resolving conflicts in copies"
  }, {
    "heading": "detect-copies-like-git",
    "content": "Git doesn't record copy info. Instead, it infers it when comparing two trees."
  }, {
    "heading": "detect-copies-like-git",
    "content": "It's hard to make this model scale to very large repos. For example, let's say\nyou're rebasing your local commit to a new upstream commit that's 1 million\ncommits ahead. We would then want to find if any of the files in your local\ncommit has been copied upstream. That's very expensive to do by comparing the\nold and the new base trees. However, since the query APIs defined above take\ncommits (not trees) as input, we allow the backend to take the history into\naccount when calculating the copies. A backend can then create an index based\non the input files (in your local commit) and find if it's been copied without\ncomparing the full trees."
  }, {
    "heading": "record-logical-file-identifiers-in-trees-bitkeeper-like-model",
    "content": "BitKeeper records a file ID (which identifies a logical file, unlike our FileId\ntype) for each path (or maybe it's a path for each file ID). That way you can\ncompare two arbitrary trees, find the added and deleted files and just compare\nthe file IDs to figure out which of them are renames."
  }, {
    "heading": "record-logical-file-identifiers-in-trees-bitkeeper-like-model",
    "content": "This model doesn't seem to be easily extensible to support copies (it only\nsupports renames)."
  }, {
    "heading": "record-logical-file-identifiers-in-trees-bitkeeper-like-model",
    "content": "To perform a rebase across millions of commits, we would not want to diff the\nfull trees because that would be too expensive (probably millions of modified\nfiles). We could perhaps instead find renames by bisecting to find commits that\ndeleted any of the files modified in the commit we're rebasing."
  }, {
    "heading": "record-logical-file-identifiers-in-trees-bitkeeper-like-model",
    "content": "Another problem is how to synthesize the file IDs in the Git backend. That could\nperhaps be done by walking from the root commits and persisting an index."
  }, {
    "heading": "include-copy-info-in-the-fileid-mercurial-like-model",
    "content": "Mercurial stores copy info in a metadata section in the file content itself\n. That means that a file will get a new file\n(content) ID if its copy history changes. That's quite similar to the proposal\nin this document. One difference is that Mercurial's model stores information\nonly about the most recent copy. If the file is then modified, it will get a new\nfile ID. One therefore has to walk the history of the file to find the previous\nname (which is usually not much of a problem because Mercurial stores a revision\nDAG per file in addition to the revision DAG at the commit level)."
  }, {
    "heading": "hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",
    "content": "We considered storing copy info about the copies/renames in the commit object.\nThat has some significant impact on the data model:"
  }, {
    "heading": "hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",
    "content": "Without copy info, if there's a linear chain of commits A..D, you can find\nthe total diff by diffing just D-A. That works because (B-A)+(C-B)+(D-C)\nsimplifies to just D-A. However, if there is copy info, the total diff will\ninvolve copy info. If that's associated with the individual commits, we will\nneed to aggregate it somehow."
  }, {
    "heading": "hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",
    "content": "Restoring from another tree is no longer just a matter of copying that tree;\nwe also need to figure out copies between the old tree and the new tree."
  }, {
    "heading": "hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",
    "content": "Conflict states are represented by a series of states to add and remove. This\ndoes not work with the patch-based copy info. We spent a lot of time trying\nto figure out a solution that works, but it seems like the snapshot-based\nconflict model and the patch-based copy info model are not reconcilable.\nTherefore, we won't track conflicted copy info, such as between a foo->baz\nrename and a bar->baz rename."
  }, {
    "heading": "hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",
    "content": "Since copy records are relative to the auto-merged parents, that unfortunately\nmeans that the records will depend on the merge algorithm, so it's possible\nthat a future change to the merge algorithm will make some copy records\ninvalid. We will therefore need to not assume that the copy source exists."
  }, {
    "heading": "hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",
    "content": "For the state in conflicted commits, we considered using a representation like\nthis:"
  }, {
    "heading": "hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",
    "content": "That works for calculating the resulting tree, but it does not seem to allow for\ndoing the conflict algebra we currently do. That means that things like\nparallelizing commits and then serializing them again would lose copy\ninformation."
  }, {
    "heading": "hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",
    "content": "This took me (@martinvonz) months to really understand."
  }, {
    "heading": "hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",
    "content": "From around\nhttps://repo.mercurial-scm.org/hg/rev/49ad315b39ee, Mercurial also\nsupports storing copy info in commits. That made it the kind of\nsnapshot/patch model we described above as not working well."
  }],
  "headings": [{
    "id": "objective",
    "content": "Objective"
  }, {
    "id": "desired-ux",
    "content": "Desired UX"
  }, {
    "id": "restoring-from-a-commit-should-preserve-copies",
    "content": "Restoring from a commit should preserve copies"
  }, {
    "id": "diff-after-restore",
    "content": "Diff after restore"
  }, {
    "id": "lossless-round-trip-of-rebase",
    "content": "Lossless round-trip of rebase"
  }, {
    "id": "backing-out-the-parent-commit-should-be-a-no-op",
    "content": "Backing out the parent commit should be a no-op"
  }, {
    "id": "parallelizeserialize",
    "content": "Parallelize/serialize"
  }, {
    "id": "copies-inside-merge-commit",
    "content": "Copies inside merge commit"
  }, {
    "id": "copies-across-merge-commit",
    "content": "Copies across merge commit"
  }, {
    "id": "high-level-design",
    "content": "High-level Design"
  }, {
    "id": "diffing",
    "content": "Diffing"
  }, {
    "id": "example-divergent-copy-and-rename",
    "content": "Example: Divergent copy and rename"
  }, {
    "id": "example-divergent-copy-and-rename-best-rename-target",
    "content": "Example: Divergent copy and rename (best rename target)"
  }, {
    "id": "example-copy-onto-deleted-file",
    "content": "Example: Copy onto deleted file"
  }, {
    "id": "merging",
    "content": "Merging"
  }, {
    "id": "propagating-changes-across-copies",
    "content": "Propagating changes across copies?"
  }, {
    "id": "example-propagate-changes-to-copied-file-then-rebase-back",
    "content": "Example: Propagate changes to copied file, then rebase back"
  }, {
    "id": "example-multiple-copies",
    "content": "Example: Multiple copies"
  }, {
    "id": "example-convergent-renames",
    "content": "Example: Convergent renames"
  }, {
    "id": "example-rebasing",
    "content": "Example: Rebasing"
  }, {
    "id": "example-rename-added-file",
    "content": "Example: Rename added file"
  }, {
    "id": "example-divergent-renames",
    "content": "Example: Divergent renames"
  }, {
    "id": "example-jonathantanmys-test-case",
    "content": "Example: @jonathantanmy's test case:"
  }, {
    "id": "log",
    "content": "Log"
  }, {
    "id": "annotate",
    "content": "Annotate"
  }, {
    "id": "representation-in-git",
    "content": "Representation in Git"
  }, {
    "id": "representation-in-cloud-repo-eg-google",
    "content": "Representation in cloud repo (e.g. Google)"
  }, {
    "id": "implementation-plan",
    "content": "Implementation plan"
  }, {
    "id": "alternatives-considered",
    "content": "Alternatives considered"
  }, {
    "id": "detect-copies-like-git",
    "content": "Detect copies (like Git)"
  }, {
    "id": "record-logical-file-identifiers-in-trees-bitkeeper-like-model",
    "content": "Record logical file identifiers in trees (BitKeeper-like model)"
  }, {
    "id": "include-copy-info-in-the-fileid-mercurial-like-model",
    "content": "Include copy info in the FileId (Mercurial-like model)"
  }, {
    "id": "hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",
    "content": "Hybrid snapshot/patch model with copy info stored in commits"
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
  url: "#desired-ux",
  title: jsx(Fragment, {
    children: "Desired UX"
  })
}, {
  depth: 4,
  url: "#restoring-from-a-commit-should-preserve-copies",
  title: jsx(Fragment, {
    children: "Restoring from a commit should preserve copies"
  })
}, {
  depth: 4,
  url: "#diff-after-restore",
  title: jsx(Fragment, {
    children: "Diff after restore"
  })
}, {
  depth: 4,
  url: "#lossless-round-trip-of-rebase",
  title: jsx(Fragment, {
    children: "Lossless round-trip of rebase"
  })
}, {
  depth: 4,
  url: "#backing-out-the-parent-commit-should-be-a-no-op",
  title: jsx(Fragment, {
    children: "Backing out the parent commit should be a no-op"
  })
}, {
  depth: 4,
  url: "#parallelizeserialize",
  title: jsx(Fragment, {
    children: "Parallelize/serialize"
  })
}, {
  depth: 4,
  url: "#copies-inside-merge-commit",
  title: jsx(Fragment, {
    children: "Copies inside merge commit"
  })
}, {
  depth: 4,
  url: "#copies-across-merge-commit",
  title: jsx(Fragment, {
    children: "Copies across merge commit"
  })
}, {
  depth: 2,
  url: "#high-level-design",
  title: jsx(Fragment, {
    children: "High-level Design"
  })
}, {
  depth: 3,
  url: "#diffing",
  title: jsx(Fragment, {
    children: "Diffing"
  })
}, {
  depth: 4,
  url: "#example-divergent-copy-and-rename",
  title: jsx(Fragment, {
    children: "Example: Divergent copy and rename"
  })
}, {
  depth: 4,
  url: "#example-divergent-copy-and-rename-best-rename-target",
  title: jsx(Fragment, {
    children: "Example: Divergent copy and rename (best rename target)"
  })
}, {
  depth: 4,
  url: "#example-copy-onto-deleted-file",
  title: jsx(Fragment, {
    children: "Example: Copy onto deleted file"
  })
}, {
  depth: 3,
  url: "#merging",
  title: jsx(Fragment, {
    children: "Merging"
  })
}, {
  depth: 4,
  url: "#propagating-changes-across-copies",
  title: jsx(Fragment, {
    children: "Propagating changes across copies?"
  })
}, {
  depth: 4,
  url: "#example-propagate-changes-to-copied-file-then-rebase-back",
  title: jsx(Fragment, {
    children: "Example: Propagate changes to copied file, then rebase back"
  })
}, {
  depth: 4,
  url: "#example-multiple-copies",
  title: jsx(Fragment, {
    children: "Example: Multiple copies"
  })
}, {
  depth: 4,
  url: "#example-convergent-renames",
  title: jsx(Fragment, {
    children: "Example: Convergent renames"
  })
}, {
  depth: 4,
  url: "#example-rebasing",
  title: jsx(Fragment, {
    children: "Example: Rebasing"
  })
}, {
  depth: 4,
  url: "#example-rename-added-file",
  title: jsx(Fragment, {
    children: "Example: Rename added file"
  })
}, {
  depth: 4,
  url: "#example-divergent-renames",
  title: jsx(Fragment, {
    children: "Example: Divergent renames"
  })
}, {
  depth: 4,
  url: "#example-jonathantanmys-test-case",
  title: jsx(Fragment, {
    children: "Example: @jonathantanmy's test case:"
  })
}, {
  depth: 3,
  url: "#log",
  title: jsx(Fragment, {
    children: "Log"
  })
}, {
  depth: 3,
  url: "#annotate",
  title: jsx(Fragment, {
    children: "Annotate"
  })
}, {
  depth: 3,
  url: "#representation-in-git",
  title: jsx(Fragment, {
    children: "Representation in Git"
  })
}, {
  depth: 3,
  url: "#representation-in-cloud-repo-eg-google",
  title: jsx(Fragment, {
    children: "Representation in cloud repo (e.g. Google)"
  })
}, {
  depth: 2,
  url: "#implementation-plan",
  title: jsx(Fragment, {
    children: "Implementation plan"
  })
}, {
  depth: 2,
  url: "#alternatives-considered",
  title: jsx(Fragment, {
    children: "Alternatives considered"
  })
}, {
  depth: 3,
  url: "#detect-copies-like-git",
  title: jsx(Fragment, {
    children: "Detect copies (like Git)"
  })
}, {
  depth: 3,
  url: "#record-logical-file-identifiers-in-trees-bitkeeper-like-model",
  title: jsx(Fragment, {
    children: "Record logical file identifiers in trees (BitKeeper-like model)"
  })
}, {
  depth: 3,
  url: "#include-copy-info-in-the-fileid-mercurial-like-model",
  title: jsx(Fragment, {
    children: "Include copy info in the FileId (Mercurial-like model)"
  })
}, {
  depth: 3,
  url: "#hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",
  title: jsx(Fragment, {
    children: "Hybrid snapshot/patch model with copy info stored in commits"
  })
}, {
  depth: 2,
  url: "#footnote-label",
  title: jsx(Fragment, {
    children: "Footnotes"
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
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
    strong: "strong",
    sup: "sup",
    ul: "ul",
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.p, {
      children: ["Authors: ", jsx(_components.a, {
        href: "mailto:dploch@google.com",
        children: "Daniel Ploch"
      }), ", ", jsx(_components.a, {
        href: "mailto:martinvonz@google.com",
        children: "Martin von Zweigbergk"
      })]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.strong, {
        children: "Summary:"
      }), " This Document documents an approach to tracking and detecting copy\ninformation in jj repos, in a way that is compatible with both Git's detection\nmodel and with custom backends that have more complicated tracking of copy\ninformation. This design affects the output of diff commands as well as the\nresults of rebasing across remote copies."]
    }), "\n", jsx(_components.h2, {
      id: "objective",
      children: "Objective"
    }), "\n", jsx(_components.p, {
      children: "Add support for copy information that is sufficient for at least the following\nuse cases:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Diffing: If a file has been copied, show a diff compared to the source version\ninstead of showing a full addition."
      }), "\n", jsx(_components.li, {
        children: "Merging: When one side of a merge (or rebase) has renamed a file and the other\nside has modified it, propagate the changes to the other side. (There are many\nother cases to handle too.)"
      }), "\n", jsxs(_components.li, {
        children: ["Log: It should be possible to run something like ", jsx(_components.code, {
          children: "jj log -p <file>"
        }), " and follow\nthe file backwards when it had been created by copying."]
      }), "\n", jsx(_components.li, {
        children: "Annotate (blame): Similar to the log use case, we should follow the file\nbackwards when it had been created by copying."
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "The solution should support recording and retrieving copy info in a way that\nis performant both for Git, which synthesizes copy info on the fly between\narbitrary trees, and for custom backends which may explicitly record and\nre-serve copy info over arbitrarily large commit ranges."
    }), "\n", jsx(_components.p, {
      children: "The APIs should be defined in a way that makes it easy for custom backends to\nignore copy info entirely until they are ready to implement it."
    }), "\n", jsx(_components.h3, {
      id: "desired-ux",
      children: "Desired UX"
    }), "\n", jsx(_components.p, {
      children: "The following sections describe some scenarios and how we would ideally handle\nthem."
    }), "\n", jsxs(_components.p, {
      children: ['We have not seen much reason to distinguish copies from renames, so a rename\nis simply the same thing as a copy plus a deletion. This means that we cannot\ndistinguish "copy ', jsx(_components.code, {
        children: "foo"
      }), " to ", jsx(_components.code, {
        children: "bar"
      }), " and rename ", jsx(_components.code, {
        children: "foo"
      }), " to ", jsx(_components.code, {
        children: "baz"
      }), '" from "copy ', jsx(_components.code, {
        children: "foo"
      }), "\nto ", jsx(_components.code, {
        children: "baz"
      }), " and rename ", jsx(_components.code, {
        children: "foo"
      }), " to ", jsx(_components.code, {
        children: "bar"
      }), '".']
    }), "\n", jsx(_components.h4, {
      id: "restoring-from-a-commit-should-preserve-copies",
      children: "Restoring from a commit should preserve copies"
    }), "\n", jsxs(_components.p, {
      children: ["For example, ", jsx(_components.code, {
        children: "jj new X--; jj restore --from X"
      }), " should restore any copies\nmade in ", jsx(_components.code, {
        children: "X-"
      }), " and ", jsx(_components.code, {
        children: "X"
      }), ' into the new working copy. Transitive copies should\nbe "flattened". For example, if ', jsx(_components.code, {
        children: "X-"
      }), " renamed ", jsx(_components.code, {
        children: "foo"
      }), " to ", jsx(_components.code, {
        children: "bar"
      }), " and ", jsx(_components.code, {
        children: "X"
      }), " renamed\n", jsx(_components.code, {
        children: "bar"
      }), " to ", jsx(_components.code, {
        children: "baz"
      }), ", then the restored commit should rename ", jsx(_components.code, {
        children: "foo"
      }), " to ", jsx(_components.code, {
        children: "baz"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["This also applies to reparenting in general, such as for\n", jsx(_components.a, {
        href: "https://github.com/martinvonz/jj/issues/1027",
        children: '"verbatim rebase"'
      }), "."]
    }), "\n", jsx(_components.h4, {
      id: "diff-after-restore",
      children: "Diff after restore"
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj restore --from X; jj diff --from X"
      }), " should be empty, at least when it comes\nto file contents. It may indicate that renamed file have different history."]
    }), "\n", jsx(_components.h4, {
      id: "lossless-round-trip-of-rebase",
      children: "Lossless round-trip of rebase"
    }), "\n", jsxs(_components.p, {
      children: ["Except for the ", jsxs(_components.a, {
        href: "https://github.com/martinvonz/jj/blob/560d66ecee5a9904b42dbc0b89333f0c27c683de/lib/src/merge.rs#L98-L111",
        children: [jsx(_components.code, {
          children: "A+(A-B)=A"
        }), " rule"]
      }), ", rebasing is currently never\nlossy; rebasing a commit and then rebasing it back yields the same content. We\nshould ideally preserve this property when possible."]
    }), "\n", jsx(_components.p, {
      children: "For example:"
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
              children: "C rename bar->baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "B rename foo->bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "A add foo"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj rebase -r C -d A"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj rebase -r C -d B "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Takes us back to the state above"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h4, {
      id: "backing-out-the-parent-commit-should-be-a-no-op",
      children: "Backing out the parent commit should be a no-op"
    }), "\n", jsx(_components.p, {
      children: "Patches should be reversible so you can make a change and then back it out, and\nend up with an empty diff across both commits."
    }), "\n", jsx(_components.p, {
      children: "For example:"
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
              children: "B rename foo->bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "A add foo"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj backout -r B -d B"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj diff --from B- --to B+ "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Should be empty"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h4, {
      id: "parallelizeserialize",
      children: "Parallelize/serialize"
    }), "\n", jsx(_components.p, {
      children: "This is a special case of the lossless rebase."
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
              children: "E edit qux"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "D rename baz->qux"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "C rename bar->baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "B rename foo->bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "A add foo"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj parallelize B::D"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "# There should be no conflict in E and it should look like a"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "# regular edit just like before"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj rebase -r C -A B"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj rebase -r D -A C"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "# Now we"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#032F62",
                "--shiki-dark": "#9ECBFF"
              },
              children: "'re back to the same graph as before."
            })]
          })]
        })
      })
    }), "\n", jsx(_components.h4, {
      id: "copies-inside-merge-commit",
      children: "Copies inside merge commit"
    }), "\n", jsx(_components.p, {
      children: "We should be able to resolve a naming conflict:"
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
              children: "D  resolve naming conflict by choosing `foo` as the source"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|\\"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "C | rename bar->baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| |"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| B rename foo->baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|/"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "A add foo and bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj file annotate baz "
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "# Should not include changes from C"
            })]
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "We should also be able to back out that resolution and get back into the\nname-conflicted state."
    }), "\n", jsx(_components.p, {
      children: "We should be able to rename files that exist on only one side:"
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
              children: "D  rename foo2->foo3 and bar2->bar3"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|\\"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "C | rename bar->bar2"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| |"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| B rename foo->foo2"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|/"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "A add foo and bar"
            })
          })]
        })
      })
    }), "\n", jsx(_components.h4, {
      id: "copies-across-merge-commit",
      children: "Copies across merge commit"
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
              children: "D delete baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|\\"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "C | rename foo->baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| |"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| B rename foo->bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|/"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "A add foo"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "jj diff --from C --to D"
      }), " should now show a baz->bar rename (just like\n", jsx(_components.code, {
        children: "jj diff --from C --to B"
      }), " would). ", jsx(_components.code, {
        children: "jj diff --from B --to D"
      }), " should show\nno renames. That's despite there being a rename in C."]
    }), "\n", jsx(_components.h2, {
      id: "high-level-design",
      children: "High-level Design"
    }), "\n", jsxs(_components.p, {
      children: ["Jujutsu uses a snapshot-based model similar to Git's. The algebra for our\nfirst-class conflicts is also based on snapshots and being able to calculate\npatches as differences between states. That means that we have to fit copy\ninformation into that snapshot-based model too ", jsx(_components.sup, {
        children: jsx(_components.a, {
          href: "#user-content-fn-martinvonz_slow",
          id: "user-content-fnref-martinvonz_slow",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "1"
        })
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["The proposal is to update tree objects to also contain information about a\nfile's past names. For example, if file ", jsx(_components.code, {
        children: "foo"
      }), " gets renamed to ", jsx(_components.code, {
        children: "bar"
      }), " in one\ncommit and then to ", jsx(_components.code, {
        children: "baz"
      }), " in another commit, we will record that ", jsx(_components.code, {
        children: "baz"
      }), " previously\nhad names ", jsx(_components.code, {
        children: "bar"
      }), " and ", jsx(_components.code, {
        children: "foo"
      }), "."]
    }), "\n", jsx(_components.p, {
      children: "To support merging two files into one, the list of past names is actually a DAG.\nMerging can happen in a merge commit when two sides copy/rename different\nsource files to the same target file. By having support for it in the model, we\ncan also support merging multiple files into one in a regular non-merge commit."
    }), "\n", jsx(_components.p, {
      children: "To avoid having to store all past paths in the tree object entry, we will write\nthe copy history as an object and the tree will refer to the object by ID. Each\nID refers to a node in the copy history DAG, similar to how commit IDs refer to\na node in the commit DAG."
    }), "\n", jsx(_components.p, {
      children: "Each node in the copy history DAG stores the path. Having the path in the copy\ngraph can be useful for finding copy sources without having to scan the whole\ntree or having to ask the backend."
    }), "\n", jsxs(_components.p, {
      children: ["If we use only the file name as only input to the ID, then we get deterministic\ntree IDs. On the other hand, if we add a salt to the copy graph node, then we\ncan represent that a file was rewritten from scratch. For example, a ", jsx(_components.code, {
        children: "foo"
      }), " might\nhave copy ID ", jsx(_components.code, {
        children: "123"
      }), " in the previous commit and when the file gets rewritten in\nthe current commit, it gets copy ID ", jsx(_components.code, {
        children: "456"
      }), " even though there was no copy from an\nexisting file involved. That makes logical sense, but I'm not sure how useful\nit will be."]
    }), "\n", jsx(_components.p, {
      children: "The data structure might look like this:"
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
          children: [jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// Current `TreeValue::File` variant:"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "File"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { id"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " FileId"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", executable"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " bool"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " },"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "// New `TreeValue::File` variant:"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "File"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " { id"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " FileId"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", executable"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " bool"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ", copy_id"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " CopyId"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: " },"
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
              children: "// A CopyId is a hash of this struct:"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "struct"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " CopyHistory"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    path"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " RepoPath"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    parents"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Vec"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "CopyId"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">"
            })]
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
    }), "\n", jsx(_components.p, {
      children: "Should we support copy tracking for symlinks? Their history is not very useful\nfor annotation purposes, but knowing the history may at least be useful for\ndetecting directory renames (if all files and symlinks in a directory were\nrenamed)."
    }), "\n", jsx(_components.p, {
      children: "We probably should not support tracking copied directories because it seems\ncomplicated. I haven't spent much thinking about it, so it's also possible that\nit's not that complicated."
    }), "\n", jsx(_components.h3, {
      id: "diffing",
      children: "Diffing"
    }), "\n", jsx(_components.p, {
      children: "When diffing two trees, we first diff the trees without considering copy info.\nFor any copy IDs that changed in that diff, we walk all of their copy graphs to\nfigure out how they're related and which source file to associate with which\ndestination file."
    }), "\n", jsx(_components.p, {
      children: "The details of the algorithm is left for the implementation. The following\nsections provide some examples to hopefully show that it's feasible."
    }), "\n", jsx(_components.h4, {
      id: "example-divergent-copy-and-rename",
      children: "Example: Divergent copy and rename"
    }), "\n", jsx(_components.p, {
      children: "Let's look at an example of how this model would look in this scenario:"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "M rename foo->baz, create bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| L copy foo->bar, create baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|/"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "K add foo"
            })
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Assuming the new files are different in each commit, we get the following trees.\nNotation:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "id"
        }), "is the hash of the contents (the ", jsx(_components.code, {
          children: "FileId"
        }), ")"]
      }), "\n", jsxs(_components.li, {
        children: ["The ", jsx(_components.code, {
          children: "2:bar->1:foo"
        }), " means that copy ID 2 (i.e. hash of the ", jsx(_components.code, {
          children: "CopyHistory"
        }), "\nstruct) has file ", jsx(_components.code, {
          children: "bar"
        }), ", which was copied from copy ID ", jsx(_components.code, {
          children: "1"
        }), ", where it was\ncalled ", jsx(_components.code, {
          children: "foo"
        }), "."]
      }), "\n"]
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Commit K:"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "name: foo, id: K, copy_id: 1:foo"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Commit L:"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "name: bar, id: L, copy_id: 2:bar->1:foo"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "name: baz, id: L, copy_id: 3:baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "name: foo, id: K, copy_id: 1:foo"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Commit M:"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "name: bar, id: M, copy_id: 4:bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "name: baz, id: M, copy_id: 5:baz->1:foo"
            })
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "This graph also shows the relationship between the copy IDs and which commits\nthey appear in:"
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
              children: "graph LR"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '    subgraph L["Commit L"]'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '        2["2:bar"]'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '        3["3:baz"]'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '        subgraph K["Commit K"]'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '            1["1:foo"]'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "        end"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    end"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '    subgraph M["Commit M"]'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '        4["4:bar"]'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: '        5["5:baz"]'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    end"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    2 --> 1"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    5 --> 1"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Let's first consider the diff from ", jsx(_components.code, {
        children: "K"
      }), " to ", jsx(_components.code, {
        children: "M"
      }), ". Looking at just the trees, that\ndiff finds that copy IDs 1,4,5 were affected. By walking their graphs, we find\n1 and 5 are related, while 4 is not. Considering that copy graph (involving IDs\n1 and 5), since ", jsx(_components.code, {
        children: "foo"
      }), " doesn't exist in the destination and ", jsx(_components.code, {
        children: "baz"
      }), " doesn't exist\nin the source, we consider it a rename."]
    }), "\n", jsxs(_components.p, {
      children: ["Let's now consider the diff from ", jsx(_components.code, {
        children: "L"
      }), " to ", jsx(_components.code, {
        children: "M"
      }), ". This is the same as the diff of the\ncommit ", jsx(_components.code, {
        children: "M2"
      }), " we'd get by running\n", jsx(_components.code, {
        children: "jj new L; jj bookmark create M2; jj restore --from M --to M2"
      }), " (which would\nresult in the commit ", jsx(_components.code, {
        children: "M2"
      }), " having the same tree as ", jsx(_components.code, {
        children: "M"
      }), "). Diffing from ", jsx(_components.code, {
        children: "L"
      }), " to\n", jsx(_components.code, {
        children: "M"
      }), " (or ", jsx(_components.code, {
        children: "M2"
      }), ") finds 1,2,3,4,5 as changed copy IDs. By walking their graphs, we\nfind that 1,2, and 5 are related, while 3 and 4 are not."]
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "bar"
      }), " and ", jsx(_components.code, {
        children: "baz"
      }), " files have unrelated copy graphs, i.e. the copy graphs for\nthe ", jsx(_components.code, {
        children: "bar"
      }), " file in commit ", jsx(_components.code, {
        children: "L"
      }), " and the ", jsx(_components.code, {
        children: "bar"
      }), " file in commit ", jsx(_components.code, {
        children: "M"
      }), " are disjoint, and\nthe same is true for the ", jsx(_components.code, {
        children: "baz"
      }), " file. Therefore, we break up their diffs into two\nseparate diffs for each file."]
    }), "\n", jsxs(_components.p, {
      children: ["Among the remaining copy IDs, the shortest path in the copy graph is between\n", jsx(_components.code, {
        children: "foo"
      }), " on the source side and ", jsx(_components.code, {
        children: "baz"
      }), " on the destination side, so we start with.\nSince ", jsx(_components.code, {
        children: "foo"
      }), " doesn't exist on the destination side and ", jsx(_components.code, {
        children: "baz"
      }), " doesn't exist on the\nsource side (with a related copy ID), we consider it a rename."]
    }), "\n", jsxs(_components.p, {
      children: ["The remaining file is ", jsx(_components.code, {
        children: "bar"
      }), " on the source side. Its closest relative on the\ndestination side is ", jsx(_components.code, {
        children: "baz"
      }), ". Since we already used ", jsx(_components.code, {
        children: "baz"
      }), " as a rename target for\n", jsx(_components.code, {
        children: "foo"
      }), ", we won't consider ", jsx(_components.code, {
        children: "bar"
      }), " renamed to it. So we consider ", jsx(_components.code, {
        children: "bar"
      }), " as copied\ninto ", jsx(_components.code, {
        children: "baz"
      }), "."]
    }), "\n", jsx(_components.p, {
      children: "So we get these diffs:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "baz"
        }), " is deleted (deleting content ", jsx(_components.code, {
          children: "L"
        }), ")"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "bar"
        }), " is created (with content ", jsx(_components.code, {
          children: "M"
        }), ")"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "foo"
        }), " is renamed to ", jsx(_components.code, {
          children: "baz"
        }), " (showing diff from ", jsx(_components.code, {
          children: "K"
        }), " to ", jsx(_components.code, {
          children: "M"
        }), ")"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "bar"
        }), " is merged into ", jsx(_components.code, {
          children: "baz"
        }), " (showing diff from ", jsx(_components.code, {
          children: "L"
        }), " to ", jsx(_components.code, {
          children: "M"
        }), ")"]
      }), "\n"]
    }), "\n", jsx(_components.h4, {
      id: "example-divergent-copy-and-rename-best-rename-target",
      children: "Example: Divergent copy and rename (best rename target)"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "N copy baz->qux"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "M rename foo->baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| L rename foo->bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|/"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "K add foo"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["When diffing ", jsx(_components.code, {
        children: "L"
      }), " to ", jsx(_components.code, {
        children: "N"
      }), ", we find that all files are related. Since ", jsx(_components.code, {
        children: "bar"
      }), " does\nnot exist in the destination, we should find a rename target to match it with.\nWe pick ", jsx(_components.code, {
        children: "baz"
      }), " because it's closer in the graph than ", jsx(_components.code, {
        children: "qux"
      }), " is. So the diff is:"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "bar"
        }), " is renamed to ", jsx(_components.code, {
          children: "baz"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "bar"
        }), " is copied to ", jsx(_components.code, {
          children: "qux"
        })]
      }), "\n"]
    }), "\n", jsx(_components.h4, {
      id: "example-copy-onto-deleted-file",
      children: "Example: Copy onto deleted file"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "M copy foo->bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "L delete bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "K add foo, bar"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["When diffing from ", jsx(_components.code, {
        children: "K"
      }), " to ", jsx(_components.code, {
        children: "M"
      }), ", we notice that ", jsx(_components.code, {
        children: "bar"
      }), " has different and unrelated\ncopy IDs. We present one record saying that ", jsx(_components.code, {
        children: "bar"
      }), " was deleted, and one record\nsaying that ", jsx(_components.code, {
        children: "bar"
      }), " was copied from ", jsx(_components.code, {
        children: "foo"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["When diffing from ", jsx(_components.code, {
        children: "M"
      }), " to ", jsx(_components.code, {
        children: "K"
      }), ", we will instead present one record that says that\n", jsx(_components.code, {
        children: "bar"
      }), " was created, and one record that says that ", jsx(_components.code, {
        children: "bar"
      }), " was merged into ", jsx(_components.code, {
        children: "foo"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "merging",
      children: "Merging"
    }), "\n", jsx(_components.p, {
      children: "When merging, we need to add a phase before the content-level merging where we\nhandle copies. As before, we start by creating the completely unresolved merged\ntree based on the input trees. To find the relevant copy information, we look at\nthe files changed in each diff and then look up the full copy graph for each.\nFor each copy graph, we can then walk the copy graph to find possible target\npaths, which we then look up in the other side of the merge. If the path exists\nin the tree and has the right copy ID, then we know that the files are related."
    }), "\n", jsx(_components.p, {
      children: "We assume that the differences between the bases and the first term in the\nconflict can be very large, so we don't look at that diff. Assuming that the\ncommit backend can look up the full copy graph based on a given copy ID, we\ndon't need that diff for correctness."
    }), "\n", jsxs(_components.p, {
      children: ["Once we have found all copies involved in the merge, we analyze them to find\nconflicts, such as when two sides of the merge rename a file to the same\ntarget. If there are conflicts, we leave the trees unchanged. The user can then\nresolve the name conflicts using ", jsx(_components.code, {
        children: "jj resolve"
      }), " (once we've added support for\nthat). Depending on how slow the naming conflict phase turns out to be, we may\nwant to write a flag to commits indicating that they have unresolved naming\nconflicts, so subsequent calls can avoid that phase."]
    }), "\n", jsxs(_components.p, {
      children: ["When merging trees, we start by rewriting each diff to match any different names\nin the destination tree. For example, if the tree conflict is ", jsx(_components.code, {
        children: "A+(B-C)+(D-E)"
      }), ",\nthen we will rewrite the ", jsx(_components.code, {
        children: "(B-C)"
      }), " diff and the ", jsx(_components.code, {
        children: "(D-E)"
      }), " diff to the paths in ", jsx(_components.code, {
        children: "A"
      }), ".\nTo translate the ", jsx(_components.code, {
        children: "(B-C)"
      }), " diff, we calculate renames from ", jsx(_components.code, {
        children: "C"
      }), " to ", jsx(_components.code, {
        children: "A"
      }), " and then we\napply those renames to both ", jsx(_components.code, {
        children: "C"
      }), " and ", jsx(_components.code, {
        children: "B"
      }), ". This may result in conflicts."]
    }), "\n", jsx(_components.p, {
      children: "If a file has a conflict in the copy ID, it will appear as if it doesn't exist\nwhen materialized. It will therefore not show up in the working copy until the\nuser has resolved the conflict."
    }), "\n", jsx(_components.p, {
      children: "For example:"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: 'M set foo="bye"'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| L rename foo->bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|/"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: 'K add foo="hello"'
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["When rebasing ", jsx(_components.code, {
        children: "M"
      }), " onto ", jsx(_components.code, {
        children: "L"
      }), ", we apply the ", jsx(_components.code, {
        children: "foo->bar"
      }), " rename to the trees in ", jsx(_components.code, {
        children: "M"
      }), "\nand its parent."]
    }), "\n", jsx(_components.p, {
      children: "Another example:"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "N rename foo->bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '| M create foo="M"'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| |"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| L delete foo"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|/"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: 'K add foo="K"'
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["When rebasing ", jsx(_components.code, {
        children: "M"
      }), " onto ", jsx(_components.code, {
        children: "N"
      }), ", we find the ", jsx(_components.code, {
        children: "foo->bar"
      }), " rename in ", jsx(_components.code, {
        children: "N"
      }), ", but since it\nis unrelated to the ", jsx(_components.code, {
        children: "foo"
      }), " file in ", jsx(_components.code, {
        children: "M"
      }), " (assuming the ", jsx(_components.code, {
        children: "foo"
      }), " file created in ", jsx(_components.code, {
        children: "M"
      }), "\nused a different salt), we will not perform any renames. The new ", jsx(_components.code, {
        children: "foo"
      }), " file\nis then simply created in the rebased ", jsx(_components.code, {
        children: "M"
      }), " just like it was before the rebase."]
    }), "\n", jsx(_components.h4, {
      id: "propagating-changes-across-copies",
      children: "Propagating changes across copies?"
    }), "\n", jsxs(_components.p, {
      children: ["Should we propagate changes to copies? For example, if you've modified file\n", jsx(_components.code, {
        children: "foo"
      }), " and then rebase it onto a commit that copied ", jsx(_components.code, {
        children: "foo"
      }), " to ", jsx(_components.code, {
        children: "bar"
      }), ", should we\napply your change to ", jsx(_components.code, {
        children: "bar"
      }), " too? Mercurial does that but Git doesn't. It's\nparticularly useful when a file has been split in two. For example, let's say\nyou've made various changes in file ", jsx(_components.code, {
        children: "foo"
      }), " and then rebase those change onto a\ncommit that split ", jsx(_components.code, {
        children: "foo"
      }), " into ", jsx(_components.code, {
        children: "foo1"
      }), " and ", jsx(_components.code, {
        children: "foo2"
      }), " (or ", jsx(_components.code, {
        children: "foo"
      }), " and ", jsx(_components.code, {
        children: "bar"
      }), "). If we\npropagate the changes to both files, each change will apply successfully in one\nfile (assuming the changes do not overlap with the split boundary). Each change\nwill have a modify/delete conflicts in the other file. Those can relatively\neasily be resolved in favor of the deleted hunk. If we do not propagate changes,\nthen changes that belong in one of the files will instead only appear as\nmodify/delete conflicts in the first file and you will have to manually copy\nover the changes to the copied file."]
    }), "\n", jsxs(_components.p, {
      children: ['Propagating changes to copies means that rebasing a commit and then rebasing it\nback is no longer a no-op even when ignoring the "same-change rule". For\nexample, if your commit modifies file ', jsx(_components.code, {
        children: "foo"
      }), " and you rebase that commit onto a\ncommit that copied ", jsx(_components.code, {
        children: "foo"
      }), " to ", jsx(_components.code, {
        children: "bar"
      }), ", and then you rebase it back, the same change\nwill be applied twice to ", jsx(_components.code, {
        children: "foo"
      }), ". However, thanks to the same-change rule, we\nwon't consider it a conflict, so maybe it actually works well in practice."]
    }), "\n", jsxs(_components.p, {
      children: ["A third option is to not leave it up to the user whether to propagate the\nchange across the copy. We can do this by leaving the relevant paths in the\ninput trees unchanged in the conflicted commit. Then we will redo the copy\ntracking process every time the commit is inspected. We can have ", jsx(_components.code, {
        children: "jj resolve"
      }), "\nask the user if they want to propagate the changes to the copy target with a\nsimple yes/no question per copy target."]
    }), "\n", jsx(_components.p, {
      children: "Decision: Asking the user about propagating copies seems like the best option.\nIt avoids surprises, and it makes the conflict algebra work in more cases."
    }), "\n", jsx(_components.h4, {
      id: "example-propagate-changes-to-copied-file-then-rebase-back",
      children: "Example: Propagate changes to copied file, then rebase back"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: 'M foo="M"'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| L copy foo->bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|/"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: 'K add foo="K"'
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Let's say we rebase ", jsx(_components.code, {
        children: "M"
      }), " onto ", jsx(_components.code, {
        children: "L"
      }), ". Since we decided to not automatically\npropagate changes to copies, we will leave the ", jsx(_components.code, {
        children: "M+(L-K)"
      }), " tree unresolved (i.e.\nwithout making any changes to the three trees). If the user does not resolve\nthe conflict, and instead rebases ", jsx(_components.code, {
        children: "L"
      }), " back onto ", jsx(_components.code, {
        children: "K"
      }), ", the conflict will be\nresolved automatically per the usual conflict simplification."]
    }), "\n", jsx(_components.h4, {
      id: "example-multiple-copies",
      children: "Example: Multiple copies"
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
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: 'N foo="N"'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '| M foo="M, foo2="M2", foo3="M3"'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| |"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| L copy foo->foo2, copy foo->foo3"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|/"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: 'K add foo="K"'
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["Let's say we rebase ", jsx(_components.code, {
        children: "M"
      }), " onto ", jsx(_components.code, {
        children: "N"
      }), ". The changes to ", jsx(_components.code, {
        children: "foo"
      }), ", ", jsx(_components.code, {
        children: "foo2"
      }), ", and", jsx(_components.code, {
        children: " foo3"
      }), " will\nthen all apply to ", jsx(_components.code, {
        children: "foo"
      }), ", which means we get a 4-sided conflict."]
    }), "\n", jsx(_components.h4, {
      id: "example-convergent-renames",
      children: "Example: Convergent renames"
    }), "\n", jsx(_components.p, {
      children: 'Consider this "convergent copy/rename" scenario:'
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
              children: "C rename bar->baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| B rename foo->baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|/"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "A add foo, add bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj new B C"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["It seems clear that ", jsx(_components.code, {
        children: "baz"
      }), "'s copy graph should inherit from both ", jsx(_components.code, {
        children: "foo"
      }), " and ", jsx(_components.code, {
        children: "bar"
      }), ",\nproducing a merge in copy graph. The trees would look like this:"]
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
              children: "Commit A:"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "name: foo, id: aaa111, copy_id: 1:foo"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "name: bar, id: aaa111, copy_id: 2:bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {})
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "Commit B:"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "name: bar, id: aaa111, copy_id: 2:bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "name: baz, id: aaa111, copy_id: 3:baz->1:foo"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {})
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "Commit C:"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "name: foo, id: aaa111, copy_id: 1:foo"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "name: baz, id: aaa111, copy_id: 4:baz->2:bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {})
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "Merge commit:"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              children: "name: baz, id: aaa111, copy_id: 5:baz->{3:baz->1:foo,4:baz->2:bar}"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["We used the same content for both ", jsx(_components.code, {
        children: "foo"
      }), " and ", jsx(_components.code, {
        children: "bar"
      }), " above to simplify. If they\nhad been different, we would have had a conflict in the contents but the copy\nID would still have been clear."]
    }), "\n", jsx(_components.h4, {
      id: "example-rebasing",
      children: "Example: Rebasing"
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
              children: "C rename bar->baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "B rename foo->bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "A add foo"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj rebase -r C -d A"
            })
          })]
        })
      })
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
              children: "C rename foo->baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| B rename foo->bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|/"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "A add foo"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj rebase -r C -d B"
            })
          })]
        })
      })
    }), "\n", jsx(_components.h4, {
      id: "example-rename-added-file",
      children: "Example: Rename added file"
    }), "\n", jsx(_components.p, {
      children: "A well-known and thorny problem in Mercurial occurs in the following scenario:"
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
              children: "C rename foo->bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| B modify foo"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|/"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "A add foo"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj squash --from C --into A"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["The problem here for Mercurial is that after squashing C into A, the new A has\nfile ", jsx(_components.code, {
        children: "bar"
      }), " but no record that it used to be called ", jsx(_components.code, {
        children: "foo"
      }), ". The design proposed\nabove handles this case because we keep the copy ID of ", jsx(_components.code, {
        children: "bar"
      }), " after squashing,\nso we can detect that the modifications to ", jsx(_components.code, {
        children: "foo"
      }), " in commit B should be\npropagated to ", jsx(_components.code, {
        children: "bar"
      }), "."]
    }), "\n", jsx(_components.h4, {
      id: "example-divergent-renames",
      children: "Example: Divergent renames"
    }), "\n", jsx(_components.p, {
      children: 'Consider this "divergent rename" scenario:'
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
              children: "C rename foo->baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| B rename foo->bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|/"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "A add foo"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj new B C"
            })
          })]
        })
      })
    }), "\n", jsxs(_components.p, {
      children: ["In this scenario, the regular 3-way merge of the trees without considering copy\ninfo results in a tree without conflicts. However, the user might reasonably\nexpect to have to choose between the ", jsx(_components.code, {
        children: "bar"
      }), " and ", jsx(_components.code, {
        children: "baz"
      }), " names. Here's what Git says\nin this scenario:"]
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
              children: "$ git merge main"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "CONFLICT (rename/rename): foo renamed to baz in HEAD and to bar in main."
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Automatic merge failed; fix conflicts and then commit the result."
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ git st"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "HEAD detached from ab0b8e3"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "You have unmerged paths."
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  (fix conflicts and run "git commit")'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  (use "git merge --abort" to abort the merge)'
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "Unmerged paths:"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: '  (use "git add/rm <file>..." as appropriate to mark resolution)'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "        added by them:   bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "        added by us:     baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "        both deleted:    foo"
            })
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Interestingly, Git seems to represent this state by using index states that\nwould not normally end up in the index as a result of conflicts."
    }), "\n", jsx(_components.p, {
      children: "Here's what Mercurial says:"
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
              children: "$ hg merge main"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "note: possible conflict - foo was renamed multiple times to:"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " bar"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: " baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "1 files updated, 0 files merged, 0 files removed, 0 files unresolved"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "(branch merge, don't forget to commit)"
            })
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "Mercurial doesn't have a place to record this state, so it just prints that\nnote and leaves it at that."
    }), "\n", jsx(_components.p, {
      children: "The model and algorithm described in this document would result in a conflict\nin the copy ID at both paths after propagating the renames."
    }), "\n", jsx(_components.h4, {
      id: "example-jonathantanmys-test-case",
      children: "Example: @jonathantanmy's test case:"
    }), "\n", jsx(_components.p, {
      children: "TODO: fill this out"
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
              children: 'E baz="baz" (resolves conflict)'
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "D <conflict>"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|\\"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "C | rename bar->baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| |"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "| B rename foo->baz"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: "|/"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#005CC5",
                "--shiki-dark": "#79B8FF"
              },
              children: 'A add foo="foo" and bar="bar"'
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj rebase -r E -d C"
            })
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "$ jj new D E -m F"
            })
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "If F is empty (auto-merged), it should have the same state as E before."
    }), "\n", jsx(_components.h3, {
      id: "log",
      children: "Log"
    }), "\n", jsxs(_components.p, {
      children: ["The copy graph contains all past paths and copy IDs of a file, so when doing\n", jsx(_components.code, {
        children: "jj log <filename>"
      }), ", we might want to translate that to a revset that's similar\nto ", jsx(_components.code, {
        children: "files()"
      }), " but matches specific (path, copy ID) pairs instead of specific\npaths."]
    }), "\n", jsx(_components.h3, {
      id: "annotate",
      children: "Annotate"
    }), "\n", jsx(_components.p, {
      children: "TBD"
    }), "\n", jsx(_components.h3, {
      id: "representation-in-git",
      children: "Representation in Git"
    }), "\n", jsx(_components.p, {
      children: "Do we ever want to record renames in the Git backend? If we do, we would\npresumably store it outside the Git object, similar to how we store the change\nid for commits."
    }), "\n", jsxs(_components.p, {
      children: ["What do we use for trees where we ", jsx(_components.em, {
        children: "don't"
      }), " have any copy graph recorded? If we\nsimply create a new copy graph based on the current path, then the caller will\nnever find any copies. Do we need an indexing pass to detect all renames in a\nrepo when running ", jsx(_components.code, {
        children: "jj git init"
      }), "? That can be very expensive for large repos.\nFor reference, ", jsx(_components.code, {
        children: "git log --summary --find-copies-harder"
      }), " takes about 165 seconds\nin the git.git repo on my computer, and about 13 hours in the Nixpkgs repo."]
    }), "\n", jsx(_components.p, {
      children: "An alternative is to do copy indexing in the background after cloning a repo.\nThat would mean that copy information would not show up until some time later.\nIt would also be more work to implement it this way."
    }), "\n", jsx(_components.p, {
      children: "How to deal with two trees having the same content but different file ids?\nActually store the additional data linked from the commit object? That would\nnot work if we point to trees from somewhere that's not a commit. We point to a\ntree from the working-copy state."
    }), "\n", jsx(_components.p, {
      children: "One could imagine not storing any copy info in Git and instead making the model\ndescribed above an implementation detail of the backend. Then it could be used\nby the native backend and the Google backend, while we still use on-the-fly\ncopy detection in the Git backend. However, if we want to be able to tell the\nuser about details of conflicting copy IDs so they can decide how to resolve\nsuch conflicts, then we would have to somehow represent that abstractly too."
    }), "\n", jsx(_components.h3, {
      id: "representation-in-cloud-repo-eg-google",
      children: "Representation in cloud repo (e.g. Google)"
    }), "\n", jsx(_components.p, {
      children: "Let's say you have a commit with some files you've modified. You now want to\nsync (rebase) that to an updated main branch. If some of the files you modified\nno longer exist on the main branch, we want to figure out if they were renamed\nso we should propagate your changes to the new file location. As described\nearlier, we can do that by finding files that have a different copy ID since the\nlast time you synced with the main branch. However, if there are 10 million new\ncommits on the main branch, there's perhaps tens of thousands of such files\nspread across the entire tree. That can therefore can be very expensive to\ncalculate. We therefore need to be able to get help from a custom backend\nimplementation with this query."
    }), "\n", jsx(_components.p, {
      children: "Since we are only interested in copy graphs that involve files modified in the\nrebased commit, it should be sufficient if the backend provides a method to\nfetch the whole copy graph for a given copy ID (or list of copy IDs). We would\nthen first find all copy IDs involved in the diff of the rebased commit. Then\nwe query the backend to get the full copy graphs. We then need to walk the copy\ngraphs to see if a node exists in the destination tree."
    }), "\n", jsx(_components.p, {
      children: "A weakness of this solution is that the search gets expensive if there are very\nmany related files. That's probably not much of a problem in practice. The\nserver might want to populate the the index only for public/immutable commits.\nOtherwise, a user could poison the index by creating tons of copies\n(intentionally or by mistake), which would make all future queries about those\nfiles expensive."
    }), "\n", jsx(_components.h2, {
      id: "implementation-plan",
      children: "Implementation plan"
    }), "\n", jsx(_components.p, {
      children: "A rough implementation plan may look like this:"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsx(_components.li, {
        children: "Implement support for copy-tracking in the test backend"
      }), "\n", jsx(_components.li, {
        children: "Implement diff algorithm and test it"
      }), "\n", jsx(_components.li, {
        children: "Implement merge algorithm and test it"
      }), "\n", jsx(_components.li, {
        children: "Implement blame algorithm and test it"
      }), "\n", jsx(_components.li, {
        children: "Implement file-following log algorithm and test it"
      }), "\n", jsx(_components.li, {
        children: "Extract some queries to the commit backend trait so cloud-based backends\n(like the Google backend) can provide versions implemented using database\nindexes"
      }), "\n", jsx(_components.li, {
        children: "Implement support for copy-tracking in the Git backend. This may involve\nbackfilling, possibly lazily. Or it may involve new abstractions in the\ncommit backend trait."
      }), "\n", jsx(_components.li, {
        children: "Implement CLI for recording copies and for resolving conflicts in copies"
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "alternatives-considered",
      children: "Alternatives considered"
    }), "\n", jsx(_components.h3, {
      id: "detect-copies-like-git",
      children: "Detect copies (like Git)"
    }), "\n", jsx(_components.p, {
      children: "Git doesn't record copy info. Instead, it infers it when comparing two trees."
    }), "\n", jsx(_components.p, {
      children: "It's hard to make this model scale to very large repos. For example, let's say\nyou're rebasing your local commit to a new upstream commit that's 1 million\ncommits ahead. We would then want to find if any of the files in your local\ncommit has been copied upstream. That's very expensive to do by comparing the\nold and the new base trees. However, since the query APIs defined above take\ncommits (not trees) as input, we allow the backend to take the history into\naccount when calculating the copies. A backend can then create an index based\non the input files (in your local commit) and find if it's been copied without\ncomparing the full trees."
    }), "\n", jsx(_components.h3, {
      id: "record-logical-file-identifiers-in-trees-bitkeeper-like-model",
      children: "Record logical file identifiers in trees (BitKeeper-like model)"
    }), "\n", jsxs(_components.p, {
      children: ["BitKeeper records a file ID (which identifies a logical file, unlike our ", jsx(_components.code, {
        children: "FileId"
      }), "\ntype) for each path (or maybe it's a path for each file ID). That way you can\ncompare two arbitrary trees, find the added and deleted files and just compare\nthe file IDs to figure out which of them are renames."]
    }), "\n", jsx(_components.p, {
      children: "This model doesn't seem to be easily extensible to support copies (it only\nsupports renames)."
    }), "\n", jsx(_components.p, {
      children: "To perform a rebase across millions of commits, we would not want to diff the\nfull trees because that would be too expensive (probably millions of modified\nfiles). We could perhaps instead find renames by bisecting to find commits that\ndeleted any of the files modified in the commit we're rebasing."
    }), "\n", jsx(_components.p, {
      children: "Another problem is how to synthesize the file IDs in the Git backend. That could\nperhaps be done by walking from the root commits and persisting an index."
    }), "\n", jsx(_components.h3, {
      id: "include-copy-info-in-the-fileid-mercurial-like-model",
      children: "Include copy info in the FileId (Mercurial-like model)"
    }), "\n", jsxs(_components.p, {
      children: ["Mercurial stores copy info in a metadata section in the file content itself\n", jsx(_components.sup, {
        children: jsx(_components.a, {
          href: "#user-content-fn-mercurial_changeset_copies",
          id: "user-content-fnref-mercurial_changeset_copies",
          "data-footnote-ref": true,
          "aria-describedby": "footnote-label",
          children: "2"
        })
      }), ". That means that a file will get a new file\n(content) ID if its copy history changes. That's quite similar to the proposal\nin this document. One difference is that Mercurial's model stores information\nonly about the most recent copy. If the file is then modified, it will get a new\nfile ID. One therefore has to walk the history of the file to find the previous\nname (which is usually not much of a problem because Mercurial stores a revision\nDAG per file in addition to the revision DAG at the commit level)."]
    }), "\n", jsx(_components.h3, {
      id: "hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",
      children: "Hybrid snapshot/patch model with copy info stored in commits"
    }), "\n", jsx(_components.p, {
      children: "We considered storing copy info about the copies/renames in the commit object.\nThat has some significant impact on the data model:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Without copy info, if there's a linear chain of commits A..D, you can find\nthe total diff by diffing just D-A. That works because (B-A)+(C-B)+(D-C)\nsimplifies to just D-A. However, if there is copy info, the total diff will\ninvolve copy info. If that's associated with the individual commits, we will\nneed to aggregate it somehow."
      }), "\n", jsx(_components.li, {
        children: "Restoring from another tree is no longer just a matter of copying that tree;\nwe also need to figure out copies between the old tree and the new tree."
      }), "\n", jsxs(_components.li, {
        children: ["Conflict states are represented by a series of states to add and remove. This\ndoes not work with the patch-based copy info. We spent a lot of time trying\nto figure out a solution that works, but it seems like the snapshot-based\nconflict model and the patch-based copy info model are not reconcilable.\nTherefore, we won't track conflicted copy info, such as between a ", jsx(_components.code, {
          children: "foo"
        }), "->", jsx(_components.code, {
          children: "baz"
        }), "\nrename and a ", jsx(_components.code, {
          children: "bar"
        }), "->", jsx(_components.code, {
          children: "baz"
        }), " rename."]
      }), "\n", jsx(_components.li, {
        children: "Since copy records are relative to the auto-merged parents, that unfortunately\nmeans that the records will depend on the merge algorithm, so it's possible\nthat a future change to the merge algorithm will make some copy records\ninvalid. We will therefore need to not assume that the copy source exists."
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "For the state in conflicted commits, we considered using a representation like\nthis:"
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
              children: "struct"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " MergedTree"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    snapshot"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Tree"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    diffs"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Diff"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "struct"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Diff"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    before"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Tree"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    after"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Tree"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "    /// Copies from `before` to `after`"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    copies"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Vec"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "CopyInfo"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">,"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: "    /// Copies from `before` to `snapshot`"
            })
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    copies_to_snapshot"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " Vec"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "<"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: "CopyInfo"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ">,"
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "}"
            })
          }), "\n", jsx(_components.span, {
            className: "line"
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: "struct"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " CopyInfo"
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
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    source"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " RepoPathBuf"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: "    target"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#D73A49",
                "--shiki-dark": "#F97583"
              },
              children: ":"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#6F42C1",
                "--shiki-dark": "#B392F0"
              },
              children: " RepoPathBuf"
            }), jsx(_components.span, {
              style: {
                "--shiki-light": "#24292E",
                "--shiki-dark": "#E1E4E8"
              },
              children: ","
            })]
          }), "\n", jsx(_components.span, {
            className: "line",
            children: jsx(_components.span, {
              style: {
                "--shiki-light": "#6A737D",
                "--shiki-dark": "#6A737D"
              },
              children: '    // Maybe more fields here for e.g. "do not propagate"'
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
    }), "\n", jsx(_components.p, {
      children: "That works for calculating the resulting tree, but it does not seem to allow for\ndoing the conflict algebra we currently do. That means that things like\nparallelizing commits and then serializing them again would lose copy\ninformation."
    }), "\n", jsxs(_components.section, {
      "data-footnotes": true,
      className: "footnotes",
      children: [jsx(_components.h2, {
        className: "sr-only",
        id: "footnote-label",
        children: "Footnotes"
      }), "\n", jsxs(_components.ol, {
        children: ["\n", jsxs(_components.li, {
          id: "user-content-fn-martinvonz_slow",
          children: ["\n", jsxs(_components.p, {
            children: ["This took me (@martinvonz) months to really understand. ", jsx(_components.a, {
              href: "#user-content-fnref-martinvonz_slow",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 1",
              className: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n", jsxs(_components.li, {
          id: "user-content-fn-mercurial_changeset_copies",
          children: ["\n", jsxs(_components.p, {
            children: ["From around\n", jsx(_components.a, {
              href: "https://repo.mercurial-scm.org/hg/rev/49ad315b39ee",
              children: "https://repo.mercurial-scm.org/hg/rev/49ad315b39ee"
            }), ", Mercurial also\nsupports storing copy info in commits. That made it the kind of\nsnapshot/patch model we described above as not working well. ", jsx(_components.a, {
              href: "#user-content-fnref-mercurial_changeset_copies",
              "data-footnote-backref": "",
              "aria-label": "Back to reference 2",
              className: "data-footnote-backref",
              children: "\u21A9"
            })]
          }), "\n"]
        }), "\n"]
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
//# sourceMappingURL=copy-tracking-CD6bkYoY.mjs.map
