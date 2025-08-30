import{j as e}from"./main-BYx1FFWF.js";let a={title:"Copy Tracking and Tracing Design"},l=[{href:"mailto:dploch@google.com"},{href:"mailto:martinvonz@google.com"},{href:"https://github.com/martinvonz/jj/issues/1027"},{href:"https://repo.mercurial-scm.org/hg/rev/49ad315b39ee"}],h={contents:[{heading:void 0,content:"Authors: Daniel Ploch, Martin von Zweigbergk"},{heading:void 0,content:`Summary: This Document documents an approach to tracking and detecting copy
information in jj repos, in a way that is compatible with both Git's detection
model and with custom backends that have more complicated tracking of copy
information. This design affects the output of diff commands as well as the
results of rebasing across remote copies.`},{heading:"objective",content:`Add support for copy information that is sufficient for at least the following
use cases:`},{heading:"objective",content:`Diffing: If a file has been copied, show a diff compared to the source version
instead of showing a full addition.`},{heading:"objective",content:`Merging: When one side of a merge (or rebase) has renamed a file and the other
side has modified it, propagate the changes to the other side. (There are many
other cases to handle too.)`},{heading:"objective",content:`Log: It should be possible to run something like jj log -p <file> and follow
the file backwards when it had been created by copying.`},{heading:"objective",content:`Annotate (blame): Similar to the log use case, we should follow the file
backwards when it had been created by copying.`},{heading:"objective",content:`The solution should support recording and retrieving copy info in a way that
is performant both for Git, which synthesizes copy info on the fly between
arbitrary trees, and for custom backends which may explicitly record and
re-serve copy info over arbitrarily large commit ranges.`},{heading:"objective",content:`The APIs should be defined in a way that makes it easy for custom backends to
ignore copy info entirely until they are ready to implement it.`},{heading:"desired-ux",content:`The following sections describe some scenarios and how we would ideally handle
them.`},{heading:"desired-ux",content:`We have not seen much reason to distinguish copies from renames, so a rename
is simply the same thing as a copy plus a deletion. This means that we cannot
distinguish "copy foo to bar and rename foo to baz" from "copy foo
to baz and rename foo to bar".`},{heading:"restoring-from-a-commit-should-preserve-copies",content:`For example, jj new X--; jj restore --from X should restore any copies
made in X- and X into the new working copy. Transitive copies should
be "flattened". For example, if X- renamed foo to bar and X renamed
bar to baz, then the restored commit should rename foo to baz.`},{heading:"restoring-from-a-commit-should-preserve-copies",content:`This also applies to reparenting in general, such as for
"verbatim rebase".`},{heading:"diff-after-restore",content:`jj restore --from X; jj diff --from X should be empty, at least when it comes
to file contents. It may indicate that renamed file have different history.`},{heading:"lossless-round-trip-of-rebase",content:`Except for the A+(A-B)=A rule, rebasing is currently never
lossy; rebasing a commit and then rebasing it back yields the same content. We
should ideally preserve this property when possible.`},{heading:"lossless-round-trip-of-rebase",content:"For example:"},{heading:"backing-out-the-parent-commit-should-be-a-no-op",content:`Patches should be reversible so you can make a change and then back it out, and
end up with an empty diff across both commits.`},{heading:"backing-out-the-parent-commit-should-be-a-no-op",content:"For example:"},{heading:"parallelizeserialize",content:"This is a special case of the lossless rebase."},{heading:"copies-inside-merge-commit",content:"We should be able to resolve a naming conflict:"},{heading:"copies-inside-merge-commit",content:`We should also be able to back out that resolution and get back into the
name-conflicted state.`},{heading:"copies-inside-merge-commit",content:"We should be able to rename files that exist on only one side:"},{heading:"copies-across-merge-commit",content:`jj diff --from C --to D should now show a baz->bar rename (just like
jj diff --from C --to B would). jj diff --from B --to D should show
no renames. That's despite there being a rename in C.`},{heading:"high-level-design",content:`Jujutsu uses a snapshot-based model similar to Git's. The algebra for our
first-class conflicts is also based on snapshots and being able to calculate
patches as differences between states. That means that we have to fit copy
information into that snapshot-based model too .`},{heading:"high-level-design",content:`The proposal is to update tree objects to also contain information about a
file's past names. For example, if file foo gets renamed to bar in one
commit and then to baz in another commit, we will record that baz previously
had names bar and foo.`},{heading:"high-level-design",content:`To support merging two files into one, the list of past names is actually a DAG.
Merging can happen in a merge commit when two sides copy/rename different
source files to the same target file. By having support for it in the model, we
can also support merging multiple files into one in a regular non-merge commit.`},{heading:"high-level-design",content:`To avoid having to store all past paths in the tree object entry, we will write
the copy history as an object and the tree will refer to the object by ID. Each
ID refers to a node in the copy history DAG, similar to how commit IDs refer to
a node in the commit DAG.`},{heading:"high-level-design",content:`Each node in the copy history DAG stores the path. Having the path in the copy
graph can be useful for finding copy sources without having to scan the whole
tree or having to ask the backend.`},{heading:"high-level-design",content:`If we use only the file name as only input to the ID, then we get deterministic
tree IDs. On the other hand, if we add a salt to the copy graph node, then we
can represent that a file was rewritten from scratch. For example, a foo might
have copy ID 123 in the previous commit and when the file gets rewritten in
the current commit, it gets copy ID 456 even though there was no copy from an
existing file involved. That makes logical sense, but I'm not sure how useful
it will be.`},{heading:"high-level-design",content:"The data structure might look like this:"},{heading:"high-level-design",content:`Should we support copy tracking for symlinks? Their history is not very useful
for annotation purposes, but knowing the history may at least be useful for
detecting directory renames (if all files and symlinks in a directory were
renamed).`},{heading:"high-level-design",content:`We probably should not support tracking copied directories because it seems
complicated. I haven't spent much thinking about it, so it's also possible that
it's not that complicated.`},{heading:"diffing",content:`When diffing two trees, we first diff the trees without considering copy info.
For any copy IDs that changed in that diff, we walk all of their copy graphs to
figure out how they're related and which source file to associate with which
destination file.`},{heading:"diffing",content:`The details of the algorithm is left for the implementation. The following
sections provide some examples to hopefully show that it's feasible.`},{heading:"example-divergent-copy-and-rename",content:"Let's look at an example of how this model would look in this scenario:"},{heading:"example-divergent-copy-and-rename",content:`Assuming the new files are different in each commit, we get the following trees.
Notation:`},{heading:"example-divergent-copy-and-rename",content:"idis the hash of the contents (the FileId)"},{heading:"example-divergent-copy-and-rename",content:`The 2:bar->1:foo means that copy ID 2 (i.e. hash of the CopyHistory
struct) has file bar, which was copied from copy ID 1, where it was
called foo.`},{heading:"example-divergent-copy-and-rename",content:`This graph also shows the relationship between the copy IDs and which commits
they appear in:`},{heading:"example-divergent-copy-and-rename",content:`Let's first consider the diff from K to M. Looking at just the trees, that
diff finds that copy IDs 1,4,5 were affected. By walking their graphs, we find
1 and 5 are related, while 4 is not. Considering that copy graph (involving IDs
1 and 5), since foo doesn't exist in the destination and baz doesn't exist
in the source, we consider it a rename.`},{heading:"example-divergent-copy-and-rename",content:`Let's now consider the diff from L to M. This is the same as the diff of the
commit M2 we'd get by running
jj new L; jj bookmark create M2; jj restore --from M --to M2 (which would
result in the commit M2 having the same tree as M). Diffing from L to
M (or M2) finds 1,2,3,4,5 as changed copy IDs. By walking their graphs, we
find that 1,2, and 5 are related, while 3 and 4 are not.`},{heading:"example-divergent-copy-and-rename",content:`The bar and baz files have unrelated copy graphs, i.e. the copy graphs for
the bar file in commit L and the bar file in commit M are disjoint, and
the same is true for the baz file. Therefore, we break up their diffs into two
separate diffs for each file.`},{heading:"example-divergent-copy-and-rename",content:`Among the remaining copy IDs, the shortest path in the copy graph is between
foo on the source side and baz on the destination side, so we start with.
Since foo doesn't exist on the destination side and baz doesn't exist on the
source side (with a related copy ID), we consider it a rename.`},{heading:"example-divergent-copy-and-rename",content:`The remaining file is bar on the source side. Its closest relative on the
destination side is baz. Since we already used baz as a rename target for
foo, we won't consider bar renamed to it. So we consider bar as copied
into baz.`},{heading:"example-divergent-copy-and-rename",content:"So we get these diffs:"},{heading:"example-divergent-copy-and-rename",content:"baz is deleted (deleting content L)"},{heading:"example-divergent-copy-and-rename",content:"bar is created (with content M)"},{heading:"example-divergent-copy-and-rename",content:"foo is renamed to baz (showing diff from K to M)"},{heading:"example-divergent-copy-and-rename",content:"bar is merged into baz (showing diff from L to M)"},{heading:"example-divergent-copy-and-rename-best-rename-target",content:`When diffing L to N, we find that all files are related. Since bar does
not exist in the destination, we should find a rename target to match it with.
We pick baz because it's closer in the graph than qux is. So the diff is:`},{heading:"example-divergent-copy-and-rename-best-rename-target",content:"bar is renamed to baz"},{heading:"example-divergent-copy-and-rename-best-rename-target",content:"bar is copied to qux"},{heading:"example-copy-onto-deleted-file",content:`When diffing from K to M, we notice that bar has different and unrelated
copy IDs. We present one record saying that bar was deleted, and one record
saying that bar was copied from foo.`},{heading:"example-copy-onto-deleted-file",content:`When diffing from M to K, we will instead present one record that says that
bar was created, and one record that says that bar was merged into foo.`},{heading:"merging",content:`When merging, we need to add a phase before the content-level merging where we
handle copies. As before, we start by creating the completely unresolved merged
tree based on the input trees. To find the relevant copy information, we look at
the files changed in each diff and then look up the full copy graph for each.
For each copy graph, we can then walk the copy graph to find possible target
paths, which we then look up in the other side of the merge. If the path exists
in the tree and has the right copy ID, then we know that the files are related.`},{heading:"merging",content:`We assume that the differences between the bases and the first term in the
conflict can be very large, so we don't look at that diff. Assuming that the
commit backend can look up the full copy graph based on a given copy ID, we
don't need that diff for correctness.`},{heading:"merging",content:`Once we have found all copies involved in the merge, we analyze them to find
conflicts, such as when two sides of the merge rename a file to the same
target. If there are conflicts, we leave the trees unchanged. The user can then
resolve the name conflicts using jj resolve (once we've added support for
that). Depending on how slow the naming conflict phase turns out to be, we may
want to write a flag to commits indicating that they have unresolved naming
conflicts, so subsequent calls can avoid that phase.`},{heading:"merging",content:`When merging trees, we start by rewriting each diff to match any different names
in the destination tree. For example, if the tree conflict is A+(B-C)+(D-E),
then we will rewrite the (B-C) diff and the (D-E) diff to the paths in A.
To translate the (B-C) diff, we calculate renames from C to A and then we
apply those renames to both C and B. This may result in conflicts.`},{heading:"merging",content:`If a file has a conflict in the copy ID, it will appear as if it doesn't exist
when materialized. It will therefore not show up in the working copy until the
user has resolved the conflict.`},{heading:"merging",content:"For example:"},{heading:"merging",content:`When rebasing M onto L, we apply the foo->bar rename to the trees in M
and its parent.`},{heading:"merging",content:"Another example:"},{heading:"merging",content:`When rebasing M onto N, we find the foo->bar rename in N, but since it
is unrelated to the foo file in M (assuming the foo file created in M
used a different salt), we will not perform any renames. The new foo file
is then simply created in the rebased M just like it was before the rebase.`},{heading:"propagating-changes-across-copies",content:`Should we propagate changes to copies? For example, if you've modified file
foo and then rebase it onto a commit that copied foo to bar, should we
apply your change to bar too? Mercurial does that but Git doesn't. It's
particularly useful when a file has been split in two. For example, let's say
you've made various changes in file foo and then rebase those change onto a
commit that split foo into foo1 and foo2 (or foo and bar). If we
propagate the changes to both files, each change will apply successfully in one
file (assuming the changes do not overlap with the split boundary). Each change
will have a modify/delete conflicts in the other file. Those can relatively
easily be resolved in favor of the deleted hunk. If we do not propagate changes,
then changes that belong in one of the files will instead only appear as
modify/delete conflicts in the first file and you will have to manually copy
over the changes to the copied file.`},{heading:"propagating-changes-across-copies",content:`Propagating changes to copies means that rebasing a commit and then rebasing it
back is no longer a no-op even when ignoring the "same-change rule". For
example, if your commit modifies file foo and you rebase that commit onto a
commit that copied foo to bar, and then you rebase it back, the same change
will be applied twice to foo. However, thanks to the same-change rule, we
won't consider it a conflict, so maybe it actually works well in practice.`},{heading:"propagating-changes-across-copies",content:`A third option is to not leave it up to the user whether to propagate the
change across the copy. We can do this by leaving the relevant paths in the
input trees unchanged in the conflicted commit. Then we will redo the copy
tracking process every time the commit is inspected. We can have jj resolve
ask the user if they want to propagate the changes to the copy target with a
simple yes/no question per copy target.`},{heading:"propagating-changes-across-copies",content:`Decision: Asking the user about propagating copies seems like the best option.
It avoids surprises, and it makes the conflict algebra work in more cases.`},{heading:"example-propagate-changes-to-copied-file-then-rebase-back",content:`Let's say we rebase M onto L. Since we decided to not automatically
propagate changes to copies, we will leave the M+(L-K) tree unresolved (i.e.
without making any changes to the three trees). If the user does not resolve
the conflict, and instead rebases L back onto K, the conflict will be
resolved automatically per the usual conflict simplification.`},{heading:"example-multiple-copies",content:`Let's say we rebase M onto N. The changes to foo, foo2, and foo3 will
then all apply to foo, which means we get a 4-sided conflict.`},{heading:"example-convergent-renames",content:'Consider this "convergent copy/rename" scenario:'},{heading:"example-convergent-renames",content:`It seems clear that baz's copy graph should inherit from both foo and bar,
producing a merge in copy graph. The trees would look like this:`},{heading:"example-convergent-renames",content:`We used the same content for both foo and bar above to simplify. If they
had been different, we would have had a conflict in the contents but the copy
ID would still have been clear.`},{heading:"example-rename-added-file",content:"A well-known and thorny problem in Mercurial occurs in the following scenario:"},{heading:"example-rename-added-file",content:`The problem here for Mercurial is that after squashing C into A, the new A has
file bar but no record that it used to be called foo. The design proposed
above handles this case because we keep the copy ID of bar after squashing,
so we can detect that the modifications to foo in commit B should be
propagated to bar.`},{heading:"example-divergent-renames",content:'Consider this "divergent rename" scenario:'},{heading:"example-divergent-renames",content:`In this scenario, the regular 3-way merge of the trees without considering copy
info results in a tree without conflicts. However, the user might reasonably
expect to have to choose between the bar and baz names. Here's what Git says
in this scenario:`},{heading:"example-divergent-renames",content:`Interestingly, Git seems to represent this state by using index states that
would not normally end up in the index as a result of conflicts.`},{heading:"example-divergent-renames",content:"Here's what Mercurial says:"},{heading:"example-divergent-renames",content:`Mercurial doesn't have a place to record this state, so it just prints that
note and leaves it at that.`},{heading:"example-divergent-renames",content:`The model and algorithm described in this document would result in a conflict
in the copy ID at both paths after propagating the renames.`},{heading:"example-jonathantanmys-test-case",content:"TODO: fill this out"},{heading:"example-jonathantanmys-test-case",content:"If F is empty (auto-merged), it should have the same state as E before."},{heading:"log",content:`The copy graph contains all past paths and copy IDs of a file, so when doing
jj log <filename>, we might want to translate that to a revset that's similar
to files() but matches specific (path, copy ID) pairs instead of specific
paths.`},{heading:"annotate",content:"TBD"},{heading:"representation-in-git",content:`Do we ever want to record renames in the Git backend? If we do, we would
presumably store it outside the Git object, similar to how we store the change
id for commits.`},{heading:"representation-in-git",content:`What do we use for trees where we don't have any copy graph recorded? If we
simply create a new copy graph based on the current path, then the caller will
never find any copies. Do we need an indexing pass to detect all renames in a
repo when running jj git init? That can be very expensive for large repos.
For reference, git log --summary --find-copies-harder takes about 165 seconds
in the git.git repo on my computer, and about 13 hours in the Nixpkgs repo.`},{heading:"representation-in-git",content:`An alternative is to do copy indexing in the background after cloning a repo.
That would mean that copy information would not show up until some time later.
It would also be more work to implement it this way.`},{heading:"representation-in-git",content:`How to deal with two trees having the same content but different file ids?
Actually store the additional data linked from the commit object? That would
not work if we point to trees from somewhere that's not a commit. We point to a
tree from the working-copy state.`},{heading:"representation-in-git",content:`One could imagine not storing any copy info in Git and instead making the model
described above an implementation detail of the backend. Then it could be used
by the native backend and the Google backend, while we still use on-the-fly
copy detection in the Git backend. However, if we want to be able to tell the
user about details of conflicting copy IDs so they can decide how to resolve
such conflicts, then we would have to somehow represent that abstractly too.`},{heading:"representation-in-cloud-repo-eg-google",content:`Let's say you have a commit with some files you've modified. You now want to
sync (rebase) that to an updated main branch. If some of the files you modified
no longer exist on the main branch, we want to figure out if they were renamed
so we should propagate your changes to the new file location. As described
earlier, we can do that by finding files that have a different copy ID since the
last time you synced with the main branch. However, if there are 10 million new
commits on the main branch, there's perhaps tens of thousands of such files
spread across the entire tree. That can therefore can be very expensive to
calculate. We therefore need to be able to get help from a custom backend
implementation with this query.`},{heading:"representation-in-cloud-repo-eg-google",content:`Since we are only interested in copy graphs that involve files modified in the
rebased commit, it should be sufficient if the backend provides a method to
fetch the whole copy graph for a given copy ID (or list of copy IDs). We would
then first find all copy IDs involved in the diff of the rebased commit. Then
we query the backend to get the full copy graphs. We then need to walk the copy
graphs to see if a node exists in the destination tree.`},{heading:"representation-in-cloud-repo-eg-google",content:`A weakness of this solution is that the search gets expensive if there are very
many related files. That's probably not much of a problem in practice. The
server might want to populate the the index only for public/immutable commits.
Otherwise, a user could poison the index by creating tons of copies
(intentionally or by mistake), which would make all future queries about those
files expensive.`},{heading:"implementation-plan",content:"A rough implementation plan may look like this:"},{heading:"implementation-plan",content:"Implement support for copy-tracking in the test backend"},{heading:"implementation-plan",content:"Implement diff algorithm and test it"},{heading:"implementation-plan",content:"Implement merge algorithm and test it"},{heading:"implementation-plan",content:"Implement blame algorithm and test it"},{heading:"implementation-plan",content:"Implement file-following log algorithm and test it"},{heading:"implementation-plan",content:`Extract some queries to the commit backend trait so cloud-based backends
(like the Google backend) can provide versions implemented using database
indexes`},{heading:"implementation-plan",content:`Implement support for copy-tracking in the Git backend. This may involve
backfilling, possibly lazily. Or it may involve new abstractions in the
commit backend trait.`},{heading:"implementation-plan",content:"Implement CLI for recording copies and for resolving conflicts in copies"},{heading:"detect-copies-like-git",content:"Git doesn't record copy info. Instead, it infers it when comparing two trees."},{heading:"detect-copies-like-git",content:`It's hard to make this model scale to very large repos. For example, let's say
you're rebasing your local commit to a new upstream commit that's 1 million
commits ahead. We would then want to find if any of the files in your local
commit has been copied upstream. That's very expensive to do by comparing the
old and the new base trees. However, since the query APIs defined above take
commits (not trees) as input, we allow the backend to take the history into
account when calculating the copies. A backend can then create an index based
on the input files (in your local commit) and find if it's been copied without
comparing the full trees.`},{heading:"record-logical-file-identifiers-in-trees-bitkeeper-like-model",content:`BitKeeper records a file ID (which identifies a logical file, unlike our FileId
type) for each path (or maybe it's a path for each file ID). That way you can
compare two arbitrary trees, find the added and deleted files and just compare
the file IDs to figure out which of them are renames.`},{heading:"record-logical-file-identifiers-in-trees-bitkeeper-like-model",content:`This model doesn't seem to be easily extensible to support copies (it only
supports renames).`},{heading:"record-logical-file-identifiers-in-trees-bitkeeper-like-model",content:`To perform a rebase across millions of commits, we would not want to diff the
full trees because that would be too expensive (probably millions of modified
files). We could perhaps instead find renames by bisecting to find commits that
deleted any of the files modified in the commit we're rebasing.`},{heading:"record-logical-file-identifiers-in-trees-bitkeeper-like-model",content:`Another problem is how to synthesize the file IDs in the Git backend. That could
perhaps be done by walking from the root commits and persisting an index.`},{heading:"include-copy-info-in-the-fileid-mercurial-like-model",content:`Mercurial stores copy info in a metadata section in the file content itself
. That means that a file will get a new file
(content) ID if its copy history changes. That's quite similar to the proposal
in this document. One difference is that Mercurial's model stores information
only about the most recent copy. If the file is then modified, it will get a new
file ID. One therefore has to walk the history of the file to find the previous
name (which is usually not much of a problem because Mercurial stores a revision
DAG per file in addition to the revision DAG at the commit level).`},{heading:"hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",content:`We considered storing copy info about the copies/renames in the commit object.
That has some significant impact on the data model:`},{heading:"hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",content:`Without copy info, if there's a linear chain of commits A..D, you can find
the total diff by diffing just D-A. That works because (B-A)+(C-B)+(D-C)
simplifies to just D-A. However, if there is copy info, the total diff will
involve copy info. If that's associated with the individual commits, we will
need to aggregate it somehow.`},{heading:"hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",content:`Restoring from another tree is no longer just a matter of copying that tree;
we also need to figure out copies between the old tree and the new tree.`},{heading:"hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",content:`Conflict states are represented by a series of states to add and remove. This
does not work with the patch-based copy info. We spent a lot of time trying
to figure out a solution that works, but it seems like the snapshot-based
conflict model and the patch-based copy info model are not reconcilable.
Therefore, we won't track conflicted copy info, such as between a foo->baz
rename and a bar->baz rename.`},{heading:"hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",content:`Since copy records are relative to the auto-merged parents, that unfortunately
means that the records will depend on the merge algorithm, so it's possible
that a future change to the merge algorithm will make some copy records
invalid. We will therefore need to not assume that the copy source exists.`},{heading:"hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",content:`For the state in conflicted commits, we considered using a representation like
this:`},{heading:"hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",content:`That works for calculating the resulting tree, but it does not seem to allow for
doing the conflict algebra we currently do. That means that things like
parallelizing commits and then serializing them again would lose copy
information.`},{heading:"hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",content:"This took me (@martinvonz) months to really understand."},{heading:"hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",content:`From around
https://repo.mercurial-scm.org/hg/rev/49ad315b39ee, Mercurial also
supports storing copy info in commits. That made it the kind of
snapshot/patch model we described above as not working well.`}],headings:[{id:"objective",content:"Objective"},{id:"desired-ux",content:"Desired UX"},{id:"restoring-from-a-commit-should-preserve-copies",content:"Restoring from a commit should preserve copies"},{id:"diff-after-restore",content:"Diff after restore"},{id:"lossless-round-trip-of-rebase",content:"Lossless round-trip of rebase"},{id:"backing-out-the-parent-commit-should-be-a-no-op",content:"Backing out the parent commit should be a no-op"},{id:"parallelizeserialize",content:"Parallelize/serialize"},{id:"copies-inside-merge-commit",content:"Copies inside merge commit"},{id:"copies-across-merge-commit",content:"Copies across merge commit"},{id:"high-level-design",content:"High-level Design"},{id:"diffing",content:"Diffing"},{id:"example-divergent-copy-and-rename",content:"Example: Divergent copy and rename"},{id:"example-divergent-copy-and-rename-best-rename-target",content:"Example: Divergent copy and rename (best rename target)"},{id:"example-copy-onto-deleted-file",content:"Example: Copy onto deleted file"},{id:"merging",content:"Merging"},{id:"propagating-changes-across-copies",content:"Propagating changes across copies?"},{id:"example-propagate-changes-to-copied-file-then-rebase-back",content:"Example: Propagate changes to copied file, then rebase back"},{id:"example-multiple-copies",content:"Example: Multiple copies"},{id:"example-convergent-renames",content:"Example: Convergent renames"},{id:"example-rebasing",content:"Example: Rebasing"},{id:"example-rename-added-file",content:"Example: Rename added file"},{id:"example-divergent-renames",content:"Example: Divergent renames"},{id:"example-jonathantanmys-test-case",content:"Example: @jonathantanmy's test case:"},{id:"log",content:"Log"},{id:"annotate",content:"Annotate"},{id:"representation-in-git",content:"Representation in Git"},{id:"representation-in-cloud-repo-eg-google",content:"Representation in cloud repo (e.g. Google)"},{id:"implementation-plan",content:"Implementation plan"},{id:"alternatives-considered",content:"Alternatives considered"},{id:"detect-copies-like-git",content:"Detect copies (like Git)"},{id:"record-logical-file-identifiers-in-trees-bitkeeper-like-model",content:"Record logical file identifiers in trees (BitKeeper-like model)"},{id:"include-copy-info-in-the-fileid-mercurial-like-model",content:"Include copy info in the FileId (Mercurial-like model)"},{id:"hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",content:"Hybrid snapshot/patch model with copy info stored in commits"}]};const o=[{depth:2,url:"#objective",title:e.jsx(e.Fragment,{children:"Objective"})},{depth:3,url:"#desired-ux",title:e.jsx(e.Fragment,{children:"Desired UX"})},{depth:4,url:"#restoring-from-a-commit-should-preserve-copies",title:e.jsx(e.Fragment,{children:"Restoring from a commit should preserve copies"})},{depth:4,url:"#diff-after-restore",title:e.jsx(e.Fragment,{children:"Diff after restore"})},{depth:4,url:"#lossless-round-trip-of-rebase",title:e.jsx(e.Fragment,{children:"Lossless round-trip of rebase"})},{depth:4,url:"#backing-out-the-parent-commit-should-be-a-no-op",title:e.jsx(e.Fragment,{children:"Backing out the parent commit should be a no-op"})},{depth:4,url:"#parallelizeserialize",title:e.jsx(e.Fragment,{children:"Parallelize/serialize"})},{depth:4,url:"#copies-inside-merge-commit",title:e.jsx(e.Fragment,{children:"Copies inside merge commit"})},{depth:4,url:"#copies-across-merge-commit",title:e.jsx(e.Fragment,{children:"Copies across merge commit"})},{depth:2,url:"#high-level-design",title:e.jsx(e.Fragment,{children:"High-level Design"})},{depth:3,url:"#diffing",title:e.jsx(e.Fragment,{children:"Diffing"})},{depth:4,url:"#example-divergent-copy-and-rename",title:e.jsx(e.Fragment,{children:"Example: Divergent copy and rename"})},{depth:4,url:"#example-divergent-copy-and-rename-best-rename-target",title:e.jsx(e.Fragment,{children:"Example: Divergent copy and rename (best rename target)"})},{depth:4,url:"#example-copy-onto-deleted-file",title:e.jsx(e.Fragment,{children:"Example: Copy onto deleted file"})},{depth:3,url:"#merging",title:e.jsx(e.Fragment,{children:"Merging"})},{depth:4,url:"#propagating-changes-across-copies",title:e.jsx(e.Fragment,{children:"Propagating changes across copies?"})},{depth:4,url:"#example-propagate-changes-to-copied-file-then-rebase-back",title:e.jsx(e.Fragment,{children:"Example: Propagate changes to copied file, then rebase back"})},{depth:4,url:"#example-multiple-copies",title:e.jsx(e.Fragment,{children:"Example: Multiple copies"})},{depth:4,url:"#example-convergent-renames",title:e.jsx(e.Fragment,{children:"Example: Convergent renames"})},{depth:4,url:"#example-rebasing",title:e.jsx(e.Fragment,{children:"Example: Rebasing"})},{depth:4,url:"#example-rename-added-file",title:e.jsx(e.Fragment,{children:"Example: Rename added file"})},{depth:4,url:"#example-divergent-renames",title:e.jsx(e.Fragment,{children:"Example: Divergent renames"})},{depth:4,url:"#example-jonathantanmys-test-case",title:e.jsx(e.Fragment,{children:"Example: @jonathantanmy's test case:"})},{depth:3,url:"#log",title:e.jsx(e.Fragment,{children:"Log"})},{depth:3,url:"#annotate",title:e.jsx(e.Fragment,{children:"Annotate"})},{depth:3,url:"#representation-in-git",title:e.jsx(e.Fragment,{children:"Representation in Git"})},{depth:3,url:"#representation-in-cloud-repo-eg-google",title:e.jsx(e.Fragment,{children:"Representation in cloud repo (e.g. Google)"})},{depth:2,url:"#implementation-plan",title:e.jsx(e.Fragment,{children:"Implementation plan"})},{depth:2,url:"#alternatives-considered",title:e.jsx(e.Fragment,{children:"Alternatives considered"})},{depth:3,url:"#detect-copies-like-git",title:e.jsx(e.Fragment,{children:"Detect copies (like Git)"})},{depth:3,url:"#record-logical-file-identifiers-in-trees-bitkeeper-like-model",title:e.jsx(e.Fragment,{children:"Record logical file identifiers in trees (BitKeeper-like model)"})},{depth:3,url:"#include-copy-info-in-the-fileid-mercurial-like-model",title:e.jsx(e.Fragment,{children:"Include copy info in the FileId (Mercurial-like model)"})},{depth:3,url:"#hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",title:e.jsx(e.Fragment,{children:"Hybrid snapshot/patch model with copy info stored in commits"})},{depth:2,url:"#footnote-label",title:e.jsx(e.Fragment,{children:"Footnotes"})}];function s(n){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",span:"span",strong:"strong",sup:"sup",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(i.p,{children:["Authors: ",e.jsx(i.a,{href:"mailto:dploch@google.com",children:"Daniel Ploch"}),", ",e.jsx(i.a,{href:"mailto:martinvonz@google.com",children:"Martin von Zweigbergk"})]}),`
`,e.jsxs(i.p,{children:[e.jsx(i.strong,{children:"Summary:"}),` This Document documents an approach to tracking and detecting copy
information in jj repos, in a way that is compatible with both Git's detection
model and with custom backends that have more complicated tracking of copy
information. This design affects the output of diff commands as well as the
results of rebasing across remote copies.`]}),`
`,e.jsx(i.h2,{id:"objective",children:"Objective"}),`
`,e.jsx(i.p,{children:`Add support for copy information that is sufficient for at least the following
use cases:`}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:`Diffing: If a file has been copied, show a diff compared to the source version
instead of showing a full addition.`}),`
`,e.jsx(i.li,{children:`Merging: When one side of a merge (or rebase) has renamed a file and the other
side has modified it, propagate the changes to the other side. (There are many
other cases to handle too.)`}),`
`,e.jsxs(i.li,{children:["Log: It should be possible to run something like ",e.jsx(i.code,{children:"jj log -p <file>"}),` and follow
the file backwards when it had been created by copying.`]}),`
`,e.jsx(i.li,{children:`Annotate (blame): Similar to the log use case, we should follow the file
backwards when it had been created by copying.`}),`
`]}),`
`,e.jsx(i.p,{children:`The solution should support recording and retrieving copy info in a way that
is performant both for Git, which synthesizes copy info on the fly between
arbitrary trees, and for custom backends which may explicitly record and
re-serve copy info over arbitrarily large commit ranges.`}),`
`,e.jsx(i.p,{children:`The APIs should be defined in a way that makes it easy for custom backends to
ignore copy info entirely until they are ready to implement it.`}),`
`,e.jsx(i.h3,{id:"desired-ux",children:"Desired UX"}),`
`,e.jsx(i.p,{children:`The following sections describe some scenarios and how we would ideally handle
them.`}),`
`,e.jsxs(i.p,{children:[`We have not seen much reason to distinguish copies from renames, so a rename
is simply the same thing as a copy plus a deletion. This means that we cannot
distinguish "copy `,e.jsx(i.code,{children:"foo"})," to ",e.jsx(i.code,{children:"bar"})," and rename ",e.jsx(i.code,{children:"foo"})," to ",e.jsx(i.code,{children:"baz"}),'" from "copy ',e.jsx(i.code,{children:"foo"}),`
to `,e.jsx(i.code,{children:"baz"})," and rename ",e.jsx(i.code,{children:"foo"})," to ",e.jsx(i.code,{children:"bar"}),'".']}),`
`,e.jsx(i.h4,{id:"restoring-from-a-commit-should-preserve-copies",children:"Restoring from a commit should preserve copies"}),`
`,e.jsxs(i.p,{children:["For example, ",e.jsx(i.code,{children:"jj new X--; jj restore --from X"}),` should restore any copies
made in `,e.jsx(i.code,{children:"X-"})," and ",e.jsx(i.code,{children:"X"}),` into the new working copy. Transitive copies should
be "flattened". For example, if `,e.jsx(i.code,{children:"X-"})," renamed ",e.jsx(i.code,{children:"foo"})," to ",e.jsx(i.code,{children:"bar"})," and ",e.jsx(i.code,{children:"X"}),` renamed
`,e.jsx(i.code,{children:"bar"})," to ",e.jsx(i.code,{children:"baz"}),", then the restored commit should rename ",e.jsx(i.code,{children:"foo"})," to ",e.jsx(i.code,{children:"baz"}),"."]}),`
`,e.jsxs(i.p,{children:[`This also applies to reparenting in general, such as for
`,e.jsx(i.a,{href:"https://github.com/martinvonz/jj/issues/1027",children:'"verbatim rebase"'}),"."]}),`
`,e.jsx(i.h4,{id:"diff-after-restore",children:"Diff after restore"}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"jj restore --from X; jj diff --from X"}),` should be empty, at least when it comes
to file contents. It may indicate that renamed file have different history.`]}),`
`,e.jsx(i.h4,{id:"lossless-round-trip-of-rebase",children:"Lossless round-trip of rebase"}),`
`,e.jsxs(i.p,{children:["Except for the ",e.jsxs(i.a,{href:"https://github.com/martinvonz/jj/blob/560d66ecee5a9904b42dbc0b89333f0c27c683de/lib/src/merge.rs#L98-L111",children:[e.jsx(i.code,{children:"A+(A-B)=A"})," rule"]}),`, rebasing is currently never
lossy; rebasing a commit and then rebasing it back yields the same content. We
should ideally preserve this property when possible.`]}),`
`,e.jsx(i.p,{children:"For example:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj log"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"C rename bar->baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"B rename foo->bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"A add foo"})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj rebase -r C -d A"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj rebase -r C -d B "}),e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# Takes us back to the state above"})]})]})})}),`
`,e.jsx(i.h4,{id:"backing-out-the-parent-commit-should-be-a-no-op",children:"Backing out the parent commit should be a no-op"}),`
`,e.jsx(i.p,{children:`Patches should be reversible so you can make a change and then back it out, and
end up with an empty diff across both commits.`}),`
`,e.jsx(i.p,{children:"For example:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj log"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"B rename foo->bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"A add foo"})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj backout -r B -d B"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj diff --from B- --to B+ "}),e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# Should be empty"})]})]})})}),`
`,e.jsx(i.h4,{id:"parallelizeserialize",children:"Parallelize/serialize"}),`
`,e.jsx(i.p,{children:"This is a special case of the lossless rebase."}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj log"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"E edit qux"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"D rename baz->qux"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"C rename bar->baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"B rename foo->bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"A add foo"})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj parallelize B::D"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"# There should be no conflict in E and it should look like a"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"# regular edit just like before"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj rebase -r C -A B"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj rebase -r D -A C"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"# Now we"}),e.jsx(i.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'re back to the same graph as before."})]})]})})}),`
`,e.jsx(i.h4,{id:"copies-inside-merge-commit",children:"Copies inside merge commit"}),`
`,e.jsx(i.p,{children:"We should be able to resolve a naming conflict:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj log"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"D  resolve naming conflict by choosing `foo` as the source"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|\\"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"C | rename bar->baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| |"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| B rename foo->baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|/"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"A add foo and bar"})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj file annotate baz "}),e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# Should not include changes from C"})]})]})})}),`
`,e.jsx(i.p,{children:`We should also be able to back out that resolution and get back into the
name-conflicted state.`}),`
`,e.jsx(i.p,{children:"We should be able to rename files that exist on only one side:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj log"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"D  rename foo2->foo3 and bar2->bar3"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|\\"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"C | rename bar->bar2"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| |"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| B rename foo->foo2"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|/"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"A add foo and bar"})})]})})}),`
`,e.jsx(i.h4,{id:"copies-across-merge-commit",children:"Copies across merge commit"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj log"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"D delete baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|\\"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"C | rename foo->baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| |"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| B rename foo->bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|/"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"A add foo"})})]})})}),`
`,e.jsxs(i.p,{children:[e.jsx(i.code,{children:"jj diff --from C --to D"}),` should now show a baz->bar rename (just like
`,e.jsx(i.code,{children:"jj diff --from C --to B"})," would). ",e.jsx(i.code,{children:"jj diff --from B --to D"}),` should show
no renames. That's despite there being a rename in C.`]}),`
`,e.jsx(i.h2,{id:"high-level-design",children:"High-level Design"}),`
`,e.jsxs(i.p,{children:[`Jujutsu uses a snapshot-based model similar to Git's. The algebra for our
first-class conflicts is also based on snapshots and being able to calculate
patches as differences between states. That means that we have to fit copy
information into that snapshot-based model too `,e.jsx(i.sup,{children:e.jsx(i.a,{href:"#user-content-fn-martinvonz_slow",id:"user-content-fnref-martinvonz_slow","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"."]}),`
`,e.jsxs(i.p,{children:[`The proposal is to update tree objects to also contain information about a
file's past names. For example, if file `,e.jsx(i.code,{children:"foo"})," gets renamed to ",e.jsx(i.code,{children:"bar"}),` in one
commit and then to `,e.jsx(i.code,{children:"baz"})," in another commit, we will record that ",e.jsx(i.code,{children:"baz"}),` previously
had names `,e.jsx(i.code,{children:"bar"})," and ",e.jsx(i.code,{children:"foo"}),"."]}),`
`,e.jsx(i.p,{children:`To support merging two files into one, the list of past names is actually a DAG.
Merging can happen in a merge commit when two sides copy/rename different
source files to the same target file. By having support for it in the model, we
can also support merging multiple files into one in a regular non-merge commit.`}),`
`,e.jsx(i.p,{children:`To avoid having to store all past paths in the tree object entry, we will write
the copy history as an object and the tree will refer to the object by ID. Each
ID refers to a node in the copy history DAG, similar to how commit IDs refer to
a node in the commit DAG.`}),`
`,e.jsx(i.p,{children:`Each node in the copy history DAG stores the path. Having the path in the copy
graph can be useful for finding copy sources without having to scan the whole
tree or having to ask the backend.`}),`
`,e.jsxs(i.p,{children:[`If we use only the file name as only input to the ID, then we get deterministic
tree IDs. On the other hand, if we add a salt to the copy graph node, then we
can represent that a file was rewritten from scratch. For example, a `,e.jsx(i.code,{children:"foo"}),` might
have copy ID `,e.jsx(i.code,{children:"123"}),` in the previous commit and when the file gets rewritten in
the current commit, it gets copy ID `,e.jsx(i.code,{children:"456"}),` even though there was no copy from an
existing file involved. That makes logical sense, but I'm not sure how useful
it will be.`]}),`
`,e.jsx(i.p,{children:"The data structure might look like this:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// Current `TreeValue::File` variant:"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"File"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { id"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" FileId"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", executable"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" bool"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" },"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// New `TreeValue::File` variant:"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"File"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { id"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" FileId"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", executable"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" bool"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", copy_id"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" CopyId"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" },"})]}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"// A CopyId is a hash of this struct:"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"struct"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" CopyHistory"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    path"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" RepoPath"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    parents"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Vec"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"CopyId"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})})}),`
`,e.jsx(i.p,{children:`Should we support copy tracking for symlinks? Their history is not very useful
for annotation purposes, but knowing the history may at least be useful for
detecting directory renames (if all files and symlinks in a directory were
renamed).`}),`
`,e.jsx(i.p,{children:`We probably should not support tracking copied directories because it seems
complicated. I haven't spent much thinking about it, so it's also possible that
it's not that complicated.`}),`
`,e.jsx(i.h3,{id:"diffing",children:"Diffing"}),`
`,e.jsx(i.p,{children:`When diffing two trees, we first diff the trees without considering copy info.
For any copy IDs that changed in that diff, we walk all of their copy graphs to
figure out how they're related and which source file to associate with which
destination file.`}),`
`,e.jsx(i.p,{children:`The details of the algorithm is left for the implementation. The following
sections provide some examples to hopefully show that it's feasible.`}),`
`,e.jsx(i.h4,{id:"example-divergent-copy-and-rename",children:"Example: Divergent copy and rename"}),`
`,e.jsx(i.p,{children:"Let's look at an example of how this model would look in this scenario:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"M rename foo->baz, create bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| L copy foo->bar, create baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|/"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"K add foo"})})]})})}),`
`,e.jsx(i.p,{children:`Assuming the new files are different in each commit, we get the following trees.
Notation:`}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"id"}),"is the hash of the contents (the ",e.jsx(i.code,{children:"FileId"}),")"]}),`
`,e.jsxs(i.li,{children:["The ",e.jsx(i.code,{children:"2:bar->1:foo"})," means that copy ID 2 (i.e. hash of the ",e.jsx(i.code,{children:"CopyHistory"}),`
struct) has file `,e.jsx(i.code,{children:"bar"}),", which was copied from copy ID ",e.jsx(i.code,{children:"1"}),`, where it was
called `,e.jsx(i.code,{children:"foo"}),"."]}),`
`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"Commit K:"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"name: foo, id: K, copy_id: 1:foo"})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"Commit L:"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"name: bar, id: L, copy_id: 2:bar->1:foo"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"name: baz, id: L, copy_id: 3:baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"name: foo, id: K, copy_id: 1:foo"})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"Commit M:"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"name: bar, id: M, copy_id: 4:bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"name: baz, id: M, copy_id: 5:baz->1:foo"})})]})})}),`
`,e.jsx(i.p,{children:`This graph also shows the relationship between the copy IDs and which commits
they appear in:`}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"graph LR"})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:'    subgraph L["Commit L"]'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:'        2["2:bar"]'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:'        3["3:baz"]'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:'        subgraph K["Commit K"]'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:'            1["1:foo"]'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"        end"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    end"})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:'    subgraph M["Commit M"]'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:'        4["4:bar"]'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:'        5["5:baz"]'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    end"})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    2 --> 1"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    5 --> 1"})})]})})}),`
`,e.jsxs(i.p,{children:["Let's first consider the diff from ",e.jsx(i.code,{children:"K"})," to ",e.jsx(i.code,{children:"M"}),`. Looking at just the trees, that
diff finds that copy IDs 1,4,5 were affected. By walking their graphs, we find
1 and 5 are related, while 4 is not. Considering that copy graph (involving IDs
1 and 5), since `,e.jsx(i.code,{children:"foo"})," doesn't exist in the destination and ",e.jsx(i.code,{children:"baz"}),` doesn't exist
in the source, we consider it a rename.`]}),`
`,e.jsxs(i.p,{children:["Let's now consider the diff from ",e.jsx(i.code,{children:"L"})," to ",e.jsx(i.code,{children:"M"}),`. This is the same as the diff of the
commit `,e.jsx(i.code,{children:"M2"}),` we'd get by running
`,e.jsx(i.code,{children:"jj new L; jj bookmark create M2; jj restore --from M --to M2"}),` (which would
result in the commit `,e.jsx(i.code,{children:"M2"})," having the same tree as ",e.jsx(i.code,{children:"M"}),"). Diffing from ",e.jsx(i.code,{children:"L"}),` to
`,e.jsx(i.code,{children:"M"})," (or ",e.jsx(i.code,{children:"M2"}),`) finds 1,2,3,4,5 as changed copy IDs. By walking their graphs, we
find that 1,2, and 5 are related, while 3 and 4 are not.`]}),`
`,e.jsxs(i.p,{children:["The ",e.jsx(i.code,{children:"bar"})," and ",e.jsx(i.code,{children:"baz"}),` files have unrelated copy graphs, i.e. the copy graphs for
the `,e.jsx(i.code,{children:"bar"})," file in commit ",e.jsx(i.code,{children:"L"})," and the ",e.jsx(i.code,{children:"bar"})," file in commit ",e.jsx(i.code,{children:"M"}),` are disjoint, and
the same is true for the `,e.jsx(i.code,{children:"baz"}),` file. Therefore, we break up their diffs into two
separate diffs for each file.`]}),`
`,e.jsxs(i.p,{children:[`Among the remaining copy IDs, the shortest path in the copy graph is between
`,e.jsx(i.code,{children:"foo"})," on the source side and ",e.jsx(i.code,{children:"baz"}),` on the destination side, so we start with.
Since `,e.jsx(i.code,{children:"foo"})," doesn't exist on the destination side and ",e.jsx(i.code,{children:"baz"}),` doesn't exist on the
source side (with a related copy ID), we consider it a rename.`]}),`
`,e.jsxs(i.p,{children:["The remaining file is ",e.jsx(i.code,{children:"bar"}),` on the source side. Its closest relative on the
destination side is `,e.jsx(i.code,{children:"baz"}),". Since we already used ",e.jsx(i.code,{children:"baz"}),` as a rename target for
`,e.jsx(i.code,{children:"foo"}),", we won't consider ",e.jsx(i.code,{children:"bar"})," renamed to it. So we consider ",e.jsx(i.code,{children:"bar"}),` as copied
into `,e.jsx(i.code,{children:"baz"}),"."]}),`
`,e.jsx(i.p,{children:"So we get these diffs:"}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"baz"})," is deleted (deleting content ",e.jsx(i.code,{children:"L"}),")"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"bar"})," is created (with content ",e.jsx(i.code,{children:"M"}),")"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"foo"})," is renamed to ",e.jsx(i.code,{children:"baz"})," (showing diff from ",e.jsx(i.code,{children:"K"})," to ",e.jsx(i.code,{children:"M"}),")"]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"bar"})," is merged into ",e.jsx(i.code,{children:"baz"})," (showing diff from ",e.jsx(i.code,{children:"L"})," to ",e.jsx(i.code,{children:"M"}),")"]}),`
`]}),`
`,e.jsx(i.h4,{id:"example-divergent-copy-and-rename-best-rename-target",children:"Example: Divergent copy and rename (best rename target)"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"N copy baz->qux"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"M rename foo->baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| L rename foo->bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|/"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"K add foo"})})]})})}),`
`,e.jsxs(i.p,{children:["When diffing ",e.jsx(i.code,{children:"L"})," to ",e.jsx(i.code,{children:"N"}),", we find that all files are related. Since ",e.jsx(i.code,{children:"bar"}),` does
not exist in the destination, we should find a rename target to match it with.
We pick `,e.jsx(i.code,{children:"baz"})," because it's closer in the graph than ",e.jsx(i.code,{children:"qux"})," is. So the diff is:"]}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"bar"})," is renamed to ",e.jsx(i.code,{children:"baz"})]}),`
`,e.jsxs(i.li,{children:[e.jsx(i.code,{children:"bar"})," is copied to ",e.jsx(i.code,{children:"qux"})]}),`
`]}),`
`,e.jsx(i.h4,{id:"example-copy-onto-deleted-file",children:"Example: Copy onto deleted file"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"M copy foo->bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"L delete bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"K add foo, bar"})})]})})}),`
`,e.jsxs(i.p,{children:["When diffing from ",e.jsx(i.code,{children:"K"})," to ",e.jsx(i.code,{children:"M"}),", we notice that ",e.jsx(i.code,{children:"bar"}),` has different and unrelated
copy IDs. We present one record saying that `,e.jsx(i.code,{children:"bar"}),` was deleted, and one record
saying that `,e.jsx(i.code,{children:"bar"})," was copied from ",e.jsx(i.code,{children:"foo"}),"."]}),`
`,e.jsxs(i.p,{children:["When diffing from ",e.jsx(i.code,{children:"M"})," to ",e.jsx(i.code,{children:"K"}),`, we will instead present one record that says that
`,e.jsx(i.code,{children:"bar"})," was created, and one record that says that ",e.jsx(i.code,{children:"bar"})," was merged into ",e.jsx(i.code,{children:"foo"}),"."]}),`
`,e.jsx(i.h3,{id:"merging",children:"Merging"}),`
`,e.jsx(i.p,{children:`When merging, we need to add a phase before the content-level merging where we
handle copies. As before, we start by creating the completely unresolved merged
tree based on the input trees. To find the relevant copy information, we look at
the files changed in each diff and then look up the full copy graph for each.
For each copy graph, we can then walk the copy graph to find possible target
paths, which we then look up in the other side of the merge. If the path exists
in the tree and has the right copy ID, then we know that the files are related.`}),`
`,e.jsx(i.p,{children:`We assume that the differences between the bases and the first term in the
conflict can be very large, so we don't look at that diff. Assuming that the
commit backend can look up the full copy graph based on a given copy ID, we
don't need that diff for correctness.`}),`
`,e.jsxs(i.p,{children:[`Once we have found all copies involved in the merge, we analyze them to find
conflicts, such as when two sides of the merge rename a file to the same
target. If there are conflicts, we leave the trees unchanged. The user can then
resolve the name conflicts using `,e.jsx(i.code,{children:"jj resolve"}),` (once we've added support for
that). Depending on how slow the naming conflict phase turns out to be, we may
want to write a flag to commits indicating that they have unresolved naming
conflicts, so subsequent calls can avoid that phase.`]}),`
`,e.jsxs(i.p,{children:[`When merging trees, we start by rewriting each diff to match any different names
in the destination tree. For example, if the tree conflict is `,e.jsx(i.code,{children:"A+(B-C)+(D-E)"}),`,
then we will rewrite the `,e.jsx(i.code,{children:"(B-C)"})," diff and the ",e.jsx(i.code,{children:"(D-E)"})," diff to the paths in ",e.jsx(i.code,{children:"A"}),`.
To translate the `,e.jsx(i.code,{children:"(B-C)"})," diff, we calculate renames from ",e.jsx(i.code,{children:"C"})," to ",e.jsx(i.code,{children:"A"}),` and then we
apply those renames to both `,e.jsx(i.code,{children:"C"})," and ",e.jsx(i.code,{children:"B"}),". This may result in conflicts."]}),`
`,e.jsx(i.p,{children:`If a file has a conflict in the copy ID, it will appear as if it doesn't exist
when materialized. It will therefore not show up in the working copy until the
user has resolved the conflict.`}),`
`,e.jsx(i.p,{children:"For example:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'M set foo="bye"'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| L rename foo->bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|/"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'K add foo="hello"'})})]})})}),`
`,e.jsxs(i.p,{children:["When rebasing ",e.jsx(i.code,{children:"M"})," onto ",e.jsx(i.code,{children:"L"}),", we apply the ",e.jsx(i.code,{children:"foo->bar"})," rename to the trees in ",e.jsx(i.code,{children:"M"}),`
and its parent.`]}),`
`,e.jsx(i.p,{children:"Another example:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"N rename foo->bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'| M create foo="M"'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| |"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| L delete foo"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|/"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'K add foo="K"'})})]})})}),`
`,e.jsxs(i.p,{children:["When rebasing ",e.jsx(i.code,{children:"M"})," onto ",e.jsx(i.code,{children:"N"}),", we find the ",e.jsx(i.code,{children:"foo->bar"})," rename in ",e.jsx(i.code,{children:"N"}),`, but since it
is unrelated to the `,e.jsx(i.code,{children:"foo"})," file in ",e.jsx(i.code,{children:"M"})," (assuming the ",e.jsx(i.code,{children:"foo"})," file created in ",e.jsx(i.code,{children:"M"}),`
used a different salt), we will not perform any renames. The new `,e.jsx(i.code,{children:"foo"}),` file
is then simply created in the rebased `,e.jsx(i.code,{children:"M"})," just like it was before the rebase."]}),`
`,e.jsx(i.h4,{id:"propagating-changes-across-copies",children:"Propagating changes across copies?"}),`
`,e.jsxs(i.p,{children:[`Should we propagate changes to copies? For example, if you've modified file
`,e.jsx(i.code,{children:"foo"})," and then rebase it onto a commit that copied ",e.jsx(i.code,{children:"foo"})," to ",e.jsx(i.code,{children:"bar"}),`, should we
apply your change to `,e.jsx(i.code,{children:"bar"}),` too? Mercurial does that but Git doesn't. It's
particularly useful when a file has been split in two. For example, let's say
you've made various changes in file `,e.jsx(i.code,{children:"foo"}),` and then rebase those change onto a
commit that split `,e.jsx(i.code,{children:"foo"})," into ",e.jsx(i.code,{children:"foo1"})," and ",e.jsx(i.code,{children:"foo2"})," (or ",e.jsx(i.code,{children:"foo"})," and ",e.jsx(i.code,{children:"bar"}),`). If we
propagate the changes to both files, each change will apply successfully in one
file (assuming the changes do not overlap with the split boundary). Each change
will have a modify/delete conflicts in the other file. Those can relatively
easily be resolved in favor of the deleted hunk. If we do not propagate changes,
then changes that belong in one of the files will instead only appear as
modify/delete conflicts in the first file and you will have to manually copy
over the changes to the copied file.`]}),`
`,e.jsxs(i.p,{children:[`Propagating changes to copies means that rebasing a commit and then rebasing it
back is no longer a no-op even when ignoring the "same-change rule". For
example, if your commit modifies file `,e.jsx(i.code,{children:"foo"}),` and you rebase that commit onto a
commit that copied `,e.jsx(i.code,{children:"foo"})," to ",e.jsx(i.code,{children:"bar"}),`, and then you rebase it back, the same change
will be applied twice to `,e.jsx(i.code,{children:"foo"}),`. However, thanks to the same-change rule, we
won't consider it a conflict, so maybe it actually works well in practice.`]}),`
`,e.jsxs(i.p,{children:[`A third option is to not leave it up to the user whether to propagate the
change across the copy. We can do this by leaving the relevant paths in the
input trees unchanged in the conflicted commit. Then we will redo the copy
tracking process every time the commit is inspected. We can have `,e.jsx(i.code,{children:"jj resolve"}),`
ask the user if they want to propagate the changes to the copy target with a
simple yes/no question per copy target.`]}),`
`,e.jsx(i.p,{children:`Decision: Asking the user about propagating copies seems like the best option.
It avoids surprises, and it makes the conflict algebra work in more cases.`}),`
`,e.jsx(i.h4,{id:"example-propagate-changes-to-copied-file-then-rebase-back",children:"Example: Propagate changes to copied file, then rebase back"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'M foo="M"'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| L copy foo->bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|/"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'K add foo="K"'})})]})})}),`
`,e.jsxs(i.p,{children:["Let's say we rebase ",e.jsx(i.code,{children:"M"})," onto ",e.jsx(i.code,{children:"L"}),`. Since we decided to not automatically
propagate changes to copies, we will leave the `,e.jsx(i.code,{children:"M+(L-K)"}),` tree unresolved (i.e.
without making any changes to the three trees). If the user does not resolve
the conflict, and instead rebases `,e.jsx(i.code,{children:"L"})," back onto ",e.jsx(i.code,{children:"K"}),`, the conflict will be
resolved automatically per the usual conflict simplification.`]}),`
`,e.jsx(i.h4,{id:"example-multiple-copies",children:"Example: Multiple copies"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'N foo="N"'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'| M foo="M, foo2="M2", foo3="M3"'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| |"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| L copy foo->foo2, copy foo->foo3"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|/"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'K add foo="K"'})})]})})}),`
`,e.jsxs(i.p,{children:["Let's say we rebase ",e.jsx(i.code,{children:"M"})," onto ",e.jsx(i.code,{children:"N"}),". The changes to ",e.jsx(i.code,{children:"foo"}),", ",e.jsx(i.code,{children:"foo2"}),", and",e.jsx(i.code,{children:" foo3"}),` will
then all apply to `,e.jsx(i.code,{children:"foo"}),", which means we get a 4-sided conflict."]}),`
`,e.jsx(i.h4,{id:"example-convergent-renames",children:"Example: Convergent renames"}),`
`,e.jsx(i.p,{children:'Consider this "convergent copy/rename" scenario:'}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj log"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"C rename bar->baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| B rename foo->baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|/"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"A add foo, add bar"})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj new B C"})})]})})}),`
`,e.jsxs(i.p,{children:["It seems clear that ",e.jsx(i.code,{children:"baz"}),"'s copy graph should inherit from both ",e.jsx(i.code,{children:"foo"})," and ",e.jsx(i.code,{children:"bar"}),`,
producing a merge in copy graph. The trees would look like this:`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{children:"Commit A:"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{children:"name: foo, id: aaa111, copy_id: 1:foo"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{children:"name: bar, id: aaa111, copy_id: 2:bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{children:"Commit B:"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{children:"name: bar, id: aaa111, copy_id: 2:bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{children:"name: baz, id: aaa111, copy_id: 3:baz->1:foo"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{children:"Commit C:"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{children:"name: foo, id: aaa111, copy_id: 1:foo"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{children:"name: baz, id: aaa111, copy_id: 4:baz->2:bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{children:"Merge commit:"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{children:"name: baz, id: aaa111, copy_id: 5:baz->{3:baz->1:foo,4:baz->2:bar}"})})]})})}),`
`,e.jsxs(i.p,{children:["We used the same content for both ",e.jsx(i.code,{children:"foo"})," and ",e.jsx(i.code,{children:"bar"}),` above to simplify. If they
had been different, we would have had a conflict in the contents but the copy
ID would still have been clear.`]}),`
`,e.jsx(i.h4,{id:"example-rebasing",children:"Example: Rebasing"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj log"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"C rename bar->baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"B rename foo->bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"A add foo"})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj rebase -r C -d A"})})]})})}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj log"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"C rename foo->baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| B rename foo->bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|/"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"A add foo"})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj rebase -r C -d B"})})]})})}),`
`,e.jsx(i.h4,{id:"example-rename-added-file",children:"Example: Rename added file"}),`
`,e.jsx(i.p,{children:"A well-known and thorny problem in Mercurial occurs in the following scenario:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj log"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"C rename foo->bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| B modify foo"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|/"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"A add foo"})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj squash --from C --into A"})})]})})}),`
`,e.jsxs(i.p,{children:[`The problem here for Mercurial is that after squashing C into A, the new A has
file `,e.jsx(i.code,{children:"bar"})," but no record that it used to be called ",e.jsx(i.code,{children:"foo"}),`. The design proposed
above handles this case because we keep the copy ID of `,e.jsx(i.code,{children:"bar"}),` after squashing,
so we can detect that the modifications to `,e.jsx(i.code,{children:"foo"}),` in commit B should be
propagated to `,e.jsx(i.code,{children:"bar"}),"."]}),`
`,e.jsx(i.h4,{id:"example-divergent-renames",children:"Example: Divergent renames"}),`
`,e.jsx(i.p,{children:'Consider this "divergent rename" scenario:'}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj log"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"C rename foo->baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| B rename foo->bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|/"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"A add foo"})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj new B C"})})]})})}),`
`,e.jsxs(i.p,{children:[`In this scenario, the regular 3-way merge of the trees without considering copy
info results in a tree without conflicts. However, the user might reasonably
expect to have to choose between the `,e.jsx(i.code,{children:"bar"})," and ",e.jsx(i.code,{children:"baz"}),` names. Here's what Git says
in this scenario:`]}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ git merge main"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"CONFLICT (rename/rename): foo renamed to baz in HEAD and to bar in main."})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"Automatic merge failed; fix conflicts and then commit the result."})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ git st"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"HEAD detached from ab0b8e3"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"You have unmerged paths."})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'  (fix conflicts and run "git commit")'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'  (use "git merge --abort" to abort the merge)'})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"Unmerged paths:"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'  (use "git add/rm <file>..." as appropriate to mark resolution)'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"        added by them:   bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"        added by us:     baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"        both deleted:    foo"})})]})})}),`
`,e.jsx(i.p,{children:`Interestingly, Git seems to represent this state by using index states that
would not normally end up in the index as a result of conflicts.`}),`
`,e.jsx(i.p,{children:"Here's what Mercurial says:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ hg merge main"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"note: possible conflict - foo was renamed multiple times to:"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" bar"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"1 files updated, 0 files merged, 0 files removed, 0 files unresolved"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"(branch merge, don't forget to commit)"})})]})})}),`
`,e.jsx(i.p,{children:`Mercurial doesn't have a place to record this state, so it just prints that
note and leaves it at that.`}),`
`,e.jsx(i.p,{children:`The model and algorithm described in this document would result in a conflict
in the copy ID at both paths after propagating the renames.`}),`
`,e.jsx(i.h4,{id:"example-jonathantanmys-test-case",children:"Example: @jonathantanmy's test case:"}),`
`,e.jsx(i.p,{children:"TODO: fill this out"}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj log"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'E baz="baz" (resolves conflict)'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"D <conflict>"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|\\"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"C | rename bar->baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| |"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"| B rename foo->baz"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"|/"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:'A add foo="foo" and bar="bar"'})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj rebase -r E -d C"})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"$ jj new D E -m F"})})]})})}),`
`,e.jsx(i.p,{children:"If F is empty (auto-merged), it should have the same state as E before."}),`
`,e.jsx(i.h3,{id:"log",children:"Log"}),`
`,e.jsxs(i.p,{children:[`The copy graph contains all past paths and copy IDs of a file, so when doing
`,e.jsx(i.code,{children:"jj log <filename>"}),`, we might want to translate that to a revset that's similar
to `,e.jsx(i.code,{children:"files()"}),` but matches specific (path, copy ID) pairs instead of specific
paths.`]}),`
`,e.jsx(i.h3,{id:"annotate",children:"Annotate"}),`
`,e.jsx(i.p,{children:"TBD"}),`
`,e.jsx(i.h3,{id:"representation-in-git",children:"Representation in Git"}),`
`,e.jsx(i.p,{children:`Do we ever want to record renames in the Git backend? If we do, we would
presumably store it outside the Git object, similar to how we store the change
id for commits.`}),`
`,e.jsxs(i.p,{children:["What do we use for trees where we ",e.jsx(i.em,{children:"don't"}),` have any copy graph recorded? If we
simply create a new copy graph based on the current path, then the caller will
never find any copies. Do we need an indexing pass to detect all renames in a
repo when running `,e.jsx(i.code,{children:"jj git init"}),`? That can be very expensive for large repos.
For reference, `,e.jsx(i.code,{children:"git log --summary --find-copies-harder"}),` takes about 165 seconds
in the git.git repo on my computer, and about 13 hours in the Nixpkgs repo.`]}),`
`,e.jsx(i.p,{children:`An alternative is to do copy indexing in the background after cloning a repo.
That would mean that copy information would not show up until some time later.
It would also be more work to implement it this way.`}),`
`,e.jsx(i.p,{children:`How to deal with two trees having the same content but different file ids?
Actually store the additional data linked from the commit object? That would
not work if we point to trees from somewhere that's not a commit. We point to a
tree from the working-copy state.`}),`
`,e.jsx(i.p,{children:`One could imagine not storing any copy info in Git and instead making the model
described above an implementation detail of the backend. Then it could be used
by the native backend and the Google backend, while we still use on-the-fly
copy detection in the Git backend. However, if we want to be able to tell the
user about details of conflicting copy IDs so they can decide how to resolve
such conflicts, then we would have to somehow represent that abstractly too.`}),`
`,e.jsx(i.h3,{id:"representation-in-cloud-repo-eg-google",children:"Representation in cloud repo (e.g. Google)"}),`
`,e.jsx(i.p,{children:`Let's say you have a commit with some files you've modified. You now want to
sync (rebase) that to an updated main branch. If some of the files you modified
no longer exist on the main branch, we want to figure out if they were renamed
so we should propagate your changes to the new file location. As described
earlier, we can do that by finding files that have a different copy ID since the
last time you synced with the main branch. However, if there are 10 million new
commits on the main branch, there's perhaps tens of thousands of such files
spread across the entire tree. That can therefore can be very expensive to
calculate. We therefore need to be able to get help from a custom backend
implementation with this query.`}),`
`,e.jsx(i.p,{children:`Since we are only interested in copy graphs that involve files modified in the
rebased commit, it should be sufficient if the backend provides a method to
fetch the whole copy graph for a given copy ID (or list of copy IDs). We would
then first find all copy IDs involved in the diff of the rebased commit. Then
we query the backend to get the full copy graphs. We then need to walk the copy
graphs to see if a node exists in the destination tree.`}),`
`,e.jsx(i.p,{children:`A weakness of this solution is that the search gets expensive if there are very
many related files. That's probably not much of a problem in practice. The
server might want to populate the the index only for public/immutable commits.
Otherwise, a user could poison the index by creating tons of copies
(intentionally or by mistake), which would make all future queries about those
files expensive.`}),`
`,e.jsx(i.h2,{id:"implementation-plan",children:"Implementation plan"}),`
`,e.jsx(i.p,{children:"A rough implementation plan may look like this:"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsx(i.li,{children:"Implement support for copy-tracking in the test backend"}),`
`,e.jsx(i.li,{children:"Implement diff algorithm and test it"}),`
`,e.jsx(i.li,{children:"Implement merge algorithm and test it"}),`
`,e.jsx(i.li,{children:"Implement blame algorithm and test it"}),`
`,e.jsx(i.li,{children:"Implement file-following log algorithm and test it"}),`
`,e.jsx(i.li,{children:`Extract some queries to the commit backend trait so cloud-based backends
(like the Google backend) can provide versions implemented using database
indexes`}),`
`,e.jsx(i.li,{children:`Implement support for copy-tracking in the Git backend. This may involve
backfilling, possibly lazily. Or it may involve new abstractions in the
commit backend trait.`}),`
`,e.jsx(i.li,{children:"Implement CLI for recording copies and for resolving conflicts in copies"}),`
`]}),`
`,e.jsx(i.h2,{id:"alternatives-considered",children:"Alternatives considered"}),`
`,e.jsx(i.h3,{id:"detect-copies-like-git",children:"Detect copies (like Git)"}),`
`,e.jsx(i.p,{children:"Git doesn't record copy info. Instead, it infers it when comparing two trees."}),`
`,e.jsx(i.p,{children:`It's hard to make this model scale to very large repos. For example, let's say
you're rebasing your local commit to a new upstream commit that's 1 million
commits ahead. We would then want to find if any of the files in your local
commit has been copied upstream. That's very expensive to do by comparing the
old and the new base trees. However, since the query APIs defined above take
commits (not trees) as input, we allow the backend to take the history into
account when calculating the copies. A backend can then create an index based
on the input files (in your local commit) and find if it's been copied without
comparing the full trees.`}),`
`,e.jsx(i.h3,{id:"record-logical-file-identifiers-in-trees-bitkeeper-like-model",children:"Record logical file identifiers in trees (BitKeeper-like model)"}),`
`,e.jsxs(i.p,{children:["BitKeeper records a file ID (which identifies a logical file, unlike our ",e.jsx(i.code,{children:"FileId"}),`
type) for each path (or maybe it's a path for each file ID). That way you can
compare two arbitrary trees, find the added and deleted files and just compare
the file IDs to figure out which of them are renames.`]}),`
`,e.jsx(i.p,{children:`This model doesn't seem to be easily extensible to support copies (it only
supports renames).`}),`
`,e.jsx(i.p,{children:`To perform a rebase across millions of commits, we would not want to diff the
full trees because that would be too expensive (probably millions of modified
files). We could perhaps instead find renames by bisecting to find commits that
deleted any of the files modified in the commit we're rebasing.`}),`
`,e.jsx(i.p,{children:`Another problem is how to synthesize the file IDs in the Git backend. That could
perhaps be done by walking from the root commits and persisting an index.`}),`
`,e.jsx(i.h3,{id:"include-copy-info-in-the-fileid-mercurial-like-model",children:"Include copy info in the FileId (Mercurial-like model)"}),`
`,e.jsxs(i.p,{children:[`Mercurial stores copy info in a metadata section in the file content itself
`,e.jsx(i.sup,{children:e.jsx(i.a,{href:"#user-content-fn-mercurial_changeset_copies",id:"user-content-fnref-mercurial_changeset_copies","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),`. That means that a file will get a new file
(content) ID if its copy history changes. That's quite similar to the proposal
in this document. One difference is that Mercurial's model stores information
only about the most recent copy. If the file is then modified, it will get a new
file ID. One therefore has to walk the history of the file to find the previous
name (which is usually not much of a problem because Mercurial stores a revision
DAG per file in addition to the revision DAG at the commit level).`]}),`
`,e.jsx(i.h3,{id:"hybrid-snapshotpatch-model-with-copy-info-stored-in-commits",children:"Hybrid snapshot/patch model with copy info stored in commits"}),`
`,e.jsx(i.p,{children:`We considered storing copy info about the copies/renames in the commit object.
That has some significant impact on the data model:`}),`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:`Without copy info, if there's a linear chain of commits A..D, you can find
the total diff by diffing just D-A. That works because (B-A)+(C-B)+(D-C)
simplifies to just D-A. However, if there is copy info, the total diff will
involve copy info. If that's associated with the individual commits, we will
need to aggregate it somehow.`}),`
`,e.jsx(i.li,{children:`Restoring from another tree is no longer just a matter of copying that tree;
we also need to figure out copies between the old tree and the new tree.`}),`
`,e.jsxs(i.li,{children:[`Conflict states are represented by a series of states to add and remove. This
does not work with the patch-based copy info. We spent a lot of time trying
to figure out a solution that works, but it seems like the snapshot-based
conflict model and the patch-based copy info model are not reconcilable.
Therefore, we won't track conflicted copy info, such as between a `,e.jsx(i.code,{children:"foo"}),"->",e.jsx(i.code,{children:"baz"}),`
rename and a `,e.jsx(i.code,{children:"bar"}),"->",e.jsx(i.code,{children:"baz"})," rename."]}),`
`,e.jsx(i.li,{children:`Since copy records are relative to the auto-merged parents, that unfortunately
means that the records will depend on the merge algorithm, so it's possible
that a future change to the merge algorithm will make some copy records
invalid. We will therefore need to not assume that the copy source exists.`}),`
`]}),`
`,e.jsx(i.p,{children:`For the state in conflicted commits, we considered using a representation like
this:`}),`
`,e.jsx(e.Fragment,{children:e.jsx(i.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z" fill="currentColor" /></svg>',children:e.jsxs(i.code,{children:[e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"struct"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" MergedTree"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    snapshot"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Tree"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    diffs"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Diff"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"struct"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Diff"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    before"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Tree"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    after"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Tree"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    /// Copies from `before` to `after`"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    copies"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Vec"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"CopyInfo"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">,"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"    /// Copies from `before` to `snapshot`"})}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    copies_to_snapshot"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" Vec"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"<"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"CopyInfo"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:">,"})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})}),`
`,e.jsx(i.span,{className:"line"}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"struct"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" CopyInfo"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    source"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" RepoPathBuf"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),`
`,e.jsxs(i.span,{className:"line",children:[e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    target"}),e.jsx(i.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:":"}),e.jsx(i.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" RepoPathBuf"}),e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:'    // Maybe more fields here for e.g. "do not propagate"'})}),`
`,e.jsx(i.span,{className:"line",children:e.jsx(i.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})})}),`
`,e.jsx(i.p,{children:`That works for calculating the resulting tree, but it does not seem to allow for
doing the conflict algebra we currently do. That means that things like
parallelizing commits and then serializing them again would lose copy
information.`}),`
`,e.jsxs(i.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsx(i.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),`
`,e.jsxs(i.ol,{children:[`
`,e.jsxs(i.li,{id:"user-content-fn-martinvonz_slow",children:[`
`,e.jsxs(i.p,{children:["This took me (@martinvonz) months to really understand. ",e.jsx(i.a,{href:"#user-content-fnref-martinvonz_slow","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(i.li,{id:"user-content-fn-mercurial_changeset_copies",children:[`
`,e.jsxs(i.p,{children:[`From around
`,e.jsx(i.a,{href:"https://repo.mercurial-scm.org/hg/rev/49ad315b39ee",children:"https://repo.mercurial-scm.org/hg/rev/49ad315b39ee"}),`, Mercurial also
supports storing copy info in commits. That made it the kind of
snapshot/patch model we described above as not working well. `,e.jsx(i.a,{href:"#user-content-fnref-mercurial_changeset_copies","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function r(n={}){const{wrapper:i}=n.components||{};return i?e.jsx(i,{...n,children:e.jsx(s,{...n})}):s(n)}export{r as default,l as extractedReferences,a as frontmatter,h as structuredData,o as toc};
