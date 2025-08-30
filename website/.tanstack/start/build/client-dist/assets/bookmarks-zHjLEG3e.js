import{j as e}from"./main-BYx1FFWF.js";let i={title:"Bookmarks"},s=[{href:"#conflicts"},{href:"#manually-tracking-a-bookmark"},{href:"#conflicts"},{href:"#remotes-and-tracked-bookmarks"},{href:"https://git-scm.com/docs/git-push#Documentation/git-push.txt---no-force-with-lease"}],r={contents:[{heading:"introduction",content:`Bookmarks are named pointers to revisions (just like branches are in Git). You
can move them without affecting the target revision's identity. Bookmarks
automatically move when revisions are rewritten (e.g. by jj rebase). You can
pass a bookmark's name to commands that want a revision as argument. For example,
jj new main will create a new revision on top of the main bookmark. Use
jj bookmark list to list bookmarks and jj bookmark <subcommand> to create,
move, or delete bookmarks. There is currently no concept of an
active/current/checked-out bookmark.`},{heading:"mapping-to-git-branches",content:`Jujutsu maps its bookmarks to Git branches when interacting with Git repos. For
example, jj git push --bookmark foo will push the state of the foo bookmark
to the foo branch on the Git remote. Similarly, if you create a bar branch
in the backing Git repo, then a subsequent jj git import will create a bar
bookmark (reminder: that import happens automatically in
colocated repos).`},{heading:"remotes-and-tracked-bookmarks",content:`Jujutsu records the last seen position of a bookmark on each remote (just like
Git's remote-tracking branches). This record is updated on every jj git fetch
and jj git push of the bookmark. You can refer to the remembered remote bookmark
positions with <bookmark name>@<remote name>, such as jj new main@origin. jj
does not provide a way to manually edit these recorded positions.`},{heading:"remotes-and-tracked-bookmarks",content:`A remote bookmark can be associated with a local bookmark of the same name. This
is called a tracked remote bookmark (which maps to a Git remote branch when
using the Git backend). When you pull a tracked bookmark from a remote, any
changes compared to the current record of the remote's state will be propagated
to the corresponding local bookmark, which will be created if it doesn't exist
already.`},{heading:"remotes-and-tracked-bookmarks",content:'!!! note "Details: how fetch pulls bookmarks"'},{heading:"remotes-and-tracked-bookmarks",content:`Let's say you run jj git fetch --remote origin and, during the fetch, jj
determines that the remote's main bookmark has been moved so that its target is
now ahead of the local record in main@origin.`},{heading:"remotes-and-tracked-bookmarks",content:`jj will then update main@origin to the new target. If main@origin is
tracked, jj will also apply the change to the local bookmark main. If the
local target has also been moved compared to main@origin (probably because you
ran jj bookmark set main), then the two updates will be merged. If one is ahead
of the other, then that target will become the new target. Otherwise, the local
bookmark will become conflicted (see the "Conflicts" section below
for details).`},{heading:"remotes-and-tracked-bookmarks",content:`Most commands don't show the tracked remote bookmark if it has the same target as
the local bookmark. The local bookmark (without @<remote name>) is considered the
bookmark's desired target. Consequently, if you want to update a bookmark on a
remote, you first update the bookmark locally and then push the update to the
remote. If a local bookmark also exists on some remote but points to a different
target there, jj log will show the bookmark name with an asterisk suffix (e.g.
main*). That is meant to remind you that you may want to push the bookmark to
some remote.`},{heading:"remotes-and-tracked-bookmarks",content:`If you want to know the internals of bookmark tracking, consult the
Design Doc.`},{heading:"terminology-summary",content:`A remote bookmark is a bookmark ref on the remote. jj can find out its
actual state only when it's actively communicating with the remote. However,
jj does store the last-seen position of the remote bookmark; this is the
commit jj show <bookmark name>@<remote name> would show. This notion is
completely analogous to Git's "remote-tracking branches".`},{heading:"terminology-summary",content:`A tracked (remote) bookmark is defined above. You can make a remote bookmark
tracked with the jj bookmark track command, for
example.`},{heading:"terminology-summary",content:`A tracking (local) bookmark is the local bookmark that jj tries to keep in
sync with the tracked remote bookmark. For example, after jj bookmark track
mybookmark@origin, there will be a local bookmark mybookmark that's tracking the
remote mybookmark@origin bookmark. A local bookmark can track a bookmark of the same
name on 0 or more remotes.`},{heading:"terminology-summary",content:`The notion of tracked bookmarks serves a similar function to the Git notion of an
"upstream branch". Unlike Git, a single local bookmark can be tracking remote
bookmarks on multiple remotes, and the names of the local and remote bookmarks
must match.`},{heading:"manually-tracking-a-bookmark",content:`To track a bookmark permanently use jj bookmark track <bookmark name>@<remote name>.
It will now be imported as a local bookmark until you untrack it or it is deleted
on the remote.`},{heading:"manually-tracking-a-bookmark",content:"Example:"},{heading:"untracking-a-bookmark",content:`To stop following a remote bookmark, you can jj bookmark untrack it. After that,
subsequent fetches of that remote will no longer move the local bookmark to match
the position of the remote bookmark.`},{heading:"untracking-a-bookmark",content:"Example:"},{heading:"listing-tracked-bookmarks",content:`To list tracked bookmarks, you can jj bookmark list --tracked or jj bookmark list -t.
This command omits local Git-tracking bookmarks by default.`},{heading:"listing-tracked-bookmarks",content:"You can see if a specific bookmark is tracked with jj bookmark list --tracked <bookmark name>."},{heading:"automatic-tracking-of-bookmarks--gitauto-local-bookmark-option",content:`There are two situations where jj tracks bookmarks automatically. jj git
clone automatically sets up the default remote bookmark (e.g. main@origin) as
tracked. When you push a local bookmark, the newly created bookmark on the remote is
marked as tracked.`},{heading:"automatic-tracking-of-bookmarks--gitauto-local-bookmark-option",content:`By default, every other remote bookmark is marked as "not tracked" when it's
fetched. If desired, you need to manually jj bookmark track them. This works
well for repositories where multiple people work on a large number of bookmarks.`},{heading:"automatic-tracking-of-bookmarks--gitauto-local-bookmark-option",content:`The default can be changed by setting the config git.auto-local-bookmark = true.
Then, jj git fetch tracks every newly fetched bookmark with a local bookmark.
Branches that already existed before the jj git fetch are not affected. This
is similar to Mercurial, which fetches all its bookmarks (equivalent to Git's
branches) by default.`},{heading:"bookmark-movement",content:`Currently Jujutsu automatically moves local bookmarks when these conditions are
met:`},{heading:"bookmark-movement",content:`When a commit has been rewritten (e.g, when you rebase) bookmarks and the
working-copy will move along with it.`},{heading:"bookmark-movement",content:`When a commit has been abandoned, all associated bookmarks will be moved
to its parent(s). If a working copy was pointing to the abandoned commit,
then a new working-copy commit will be created on top of the parent(s).`},{heading:"bookmark-movement",content:`You could describe the movement as following along the change-id of the
current bookmark commit, even if it isn't entirely accurate.`},{heading:"pushing-bookmarks-safety-checks",content:`Before jj git push actually moves, creates, or deletes a remote bookmark, it
makes several safety checks.`},{heading:"pushing-bookmarks-safety-checks",content:`jj will contact the remote and check that the actual state of the remote
bookmark matches jj's record of its last known position. If there is a
conflict, jj will refuse to push the bookmark. In this case, you need to run
jj git fetch --remote <remote name> and resolve the resulting bookmark
conflict. Then, you can try jj git push again.`},{heading:"pushing-bookmarks-safety-checks",content:`If you are familiar with Git, this makes jj git push similar to git
push --force-with-lease.`},{heading:"pushing-bookmarks-safety-checks",content:`There are a few cases where jj git push will succeed even though the remote
bookmark is in an unexpected location. These are the cases where jj git fetch
would not create a bookmark conflict and would not move the local bookmark, e.g.
if the unexpected location is identical to the local position of the bookmark.`},{heading:"pushing-bookmarks-safety-checks",content:`The local bookmark must not be conflicted. If it is, you would
need to use jj bookmark move, for example, to resolve the conflict.`},{heading:"pushing-bookmarks-safety-checks",content:`This makes jj git push safe even if jj git fetch is performed on a timer
in the background (this situation is a known issue with some
forms of git push --force-with-lease). If the bookmark moves on a remote in a
problematic way, jj git fetch will create a conflict. This should ensure
that the user becomes aware of the conflict before they can jj git push and
override the bookmark on the remote.`},{heading:"pushing-bookmarks-safety-checks",content:`If the remote bookmark already exists on the remote, it must be
tracked. If the bookmark does not already
exist on the remote, there is no problem; jj git push --allow-new will
create the remote bookmark and mark it as tracked.`},{heading:"pushing-bookmarks-safety-checks",content:`See "A general note on safety" in
https://git-scm.com/docs/git-push#Documentation/git-push.txt---no-force-with-lease`},{heading:"conflicts",content:`Bookmarks can end up in a conflicted state. When that happens, jj status will
include information about the conflicted bookmarks (and instructions for how to
mitigate it). jj bookmark list will have details. jj log will show the bookmark
name with a double question mark suffix (e.g. main??) on each of the
conflicted bookmark's potential target revisions. Using the bookmark name to look up
a revision will resolve to all potential targets. That means that jj new main
will error out, complaining that the revset resolved to multiple revisions.`},{heading:"conflicts",content:`Both local bookmarks (e.g. main) and the remote bookmark (e.g. main@origin) can
have conflicts. Both can end up in that state if concurrent operations were run
in the repo. The local bookmark more typically becomes conflicted because it was
updated both locally and on a remote.`},{heading:"conflicts",content:`To resolve a conflicted state in a local bookmark (e.g. main), you can move the
bookmark to the desired target with jj bookmark move. You may want to first either
merge the conflicted targets with jj new (e.g. jj new 'all:main'), or you may
want to rebase one side on top of the other with jj rebase.`},{heading:"conflicts",content:`To resolve a conflicted state in a remote bookmark (e.g. main@origin), simply
pull from the remote (e.g. jj git fetch). The conflict resolution will also
propagate to the local bookmark (which was presumably also conflicted).`},{heading:"ease-of-use",content:`The use of bookmarks is frequent in some workflows, for example, when
interacting with Git repositories containing branches. To this end,
one-letter shortcuts have been implemented, both for the jj bookmark
command itself through an alias (as jj b), and for its subcommands.
For example, jj bookmark create BOOKMARK-NAME -r@ can be abbreviated as
jj b c BOOKMARK-NAME -r@.`}],headings:[{id:"introduction",content:"Introduction"},{id:"mapping-to-git-branches",content:"Mapping to Git branches"},{id:"remotes-and-tracked-bookmarks",content:"Remotes and tracked bookmarks"},{id:"terminology-summary",content:"Terminology summary"},{id:"manually-tracking-a-bookmark",content:"Manually tracking a bookmark"},{id:"untracking-a-bookmark",content:"Untracking a bookmark"},{id:"listing-tracked-bookmarks",content:"Listing tracked bookmarks"},{id:"automatic-tracking-of-bookmarks--gitauto-local-bookmark-option",content:"Automatic tracking of bookmarks & git.auto-local-bookmark option"},{id:"bookmark-movement",content:"Bookmark movement"},{id:"pushing-bookmarks-safety-checks",content:"Pushing bookmarks: Safety checks"},{id:"conflicts",content:"Conflicts"},{id:"ease-of-use",content:"Ease of use"}]};const h=[{depth:2,url:"#introduction",title:e.jsx(e.Fragment,{children:"Introduction"})},{depth:2,url:"#mapping-to-git-branches",title:e.jsx(e.Fragment,{children:"Mapping to Git branches"})},{depth:2,url:"#remotes-and-tracked-bookmarks",title:e.jsx(e.Fragment,{children:"Remotes and tracked bookmarks"})},{depth:3,url:"#terminology-summary",title:e.jsx(e.Fragment,{children:"Terminology summary"})},{depth:3,url:"#manually-tracking-a-bookmark",title:e.jsx(e.Fragment,{children:"Manually tracking a bookmark"})},{depth:3,url:"#untracking-a-bookmark",title:e.jsx(e.Fragment,{children:"Untracking a bookmark"})},{depth:3,url:"#listing-tracked-bookmarks",title:e.jsx(e.Fragment,{children:"Listing tracked bookmarks"})},{depth:3,url:"#automatic-tracking-of-bookmarks--gitauto-local-bookmark-option",title:e.jsxs(e.Fragment,{children:["Automatic tracking of bookmarks & ",e.jsx("code",{children:"git.auto-local-bookmark"})," option"]})},{depth:2,url:"#bookmark-movement",title:e.jsx(e.Fragment,{children:"Bookmark movement"})},{depth:2,url:"#pushing-bookmarks-safety-checks",title:e.jsx(e.Fragment,{children:"Pushing bookmarks: Safety checks"})},{depth:2,url:"#conflicts",title:e.jsx(e.Fragment,{children:"Conflicts"})},{depth:2,url:"#ease-of-use",title:e.jsx(e.Fragment,{children:"Ease of use"})},{depth:2,url:"#footnote-label",title:e.jsx(e.Fragment,{children:"Footnotes"})}];function a(t){const o={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",span:"span",strong:"strong",sup:"sup",ul:"ul",...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h2,{id:"introduction",children:"Introduction"}),`
`,e.jsxs(o.p,{children:[`Bookmarks are named pointers to revisions (just like branches are in Git). You
can move them without affecting the target revision's identity. Bookmarks
automatically move when revisions are rewritten (e.g. by `,e.jsx(o.code,{children:"jj rebase"}),`). You can
pass a bookmark's name to commands that want a revision as argument. For example,
`,e.jsx(o.code,{children:"jj new main"})," will create a new revision on top of the ",e.jsx(o.code,{children:"main"}),` bookmark. Use
`,e.jsx(o.code,{children:"jj bookmark list"})," to list bookmarks and ",e.jsx(o.code,{children:"jj bookmark <subcommand>"}),` to create,
move, or delete bookmarks. There is currently no concept of an
active/current/checked-out bookmark.`]}),`
`,e.jsx(o.h2,{id:"mapping-to-git-branches",children:"Mapping to Git branches"}),`
`,e.jsxs(o.p,{children:[`Jujutsu maps its bookmarks to Git branches when interacting with Git repos. For
example, `,e.jsx(o.code,{children:"jj git push --bookmark foo"})," will push the state of the ",e.jsx(o.code,{children:"foo"}),` bookmark
to the `,e.jsx(o.code,{children:"foo"})," branch on the Git remote. Similarly, if you create a ",e.jsx(o.code,{children:"bar"}),` branch
in the backing Git repo, then a subsequent `,e.jsx(o.code,{children:"jj git import"})," will create a ",e.jsx(o.code,{children:"bar"}),`
bookmark (reminder: that import happens automatically in
`,e.jsx(o.a,{href:"git-compatibility#colocated-jujutsugit-repos",children:"colocated repos"}),")."]}),`
`,e.jsx(o.h2,{id:"remotes-and-tracked-bookmarks",children:"Remotes and tracked bookmarks"}),`
`,e.jsxs(o.p,{children:[`Jujutsu records the last seen position of a bookmark on each remote (just like
Git's remote-tracking branches). This record is updated on every `,e.jsx(o.code,{children:"jj git fetch"}),`
and `,e.jsx(o.code,{children:"jj git push"}),` of the bookmark. You can refer to the remembered remote bookmark
positions with `,e.jsx(o.code,{children:"<bookmark name>@<remote name>"}),", such as ",e.jsx(o.code,{children:"jj new main@origin"}),". ",e.jsx(o.code,{children:"jj"}),`
does not provide a way to manually edit these recorded positions.`]}),`
`,e.jsxs(o.p,{children:[`A remote bookmark can be associated with a local bookmark of the same name. This
is called a `,e.jsx(o.strong,{children:"tracked remote bookmark"}),` (which maps to a Git remote branch when
using the Git backend). When you pull a tracked bookmark from a remote, any
changes compared to the current record of the remote's state will be propagated
to the corresponding local bookmark, which will be created if it doesn't exist
already.`]}),`
`,e.jsxs(o.p,{children:['!!! note "Details: how ',e.jsx(o.code,{children:"fetch"}),' pulls bookmarks"']}),`
`,e.jsxs(o.p,{children:["Let's say you run ",e.jsx(o.code,{children:"jj git fetch --remote origin"})," and, during the fetch, ",e.jsx(o.code,{children:"jj"}),`
determines that the remote's `,e.jsx(o.code,{children:"main"}),` bookmark has been moved so that its target is
now ahead of the local record in `,e.jsx(o.code,{children:"main@origin"}),"."]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"jj"})," will then update ",e.jsx(o.code,{children:"main@origin"})," to the new target. If ",e.jsx(o.code,{children:"main@origin"}),` is
`,e.jsx(o.strong,{children:"tracked"}),", ",e.jsx(o.code,{children:"jj"})," will also apply the change to the local bookmark ",e.jsx(o.code,{children:"main"}),`. If the
local target has also been moved compared to `,e.jsx(o.code,{children:"main@origin"}),` (probably because you
ran `,e.jsx(o.code,{children:"jj bookmark set main"}),`), then the two updates will be merged. If one is ahead
of the other, then that target will become the new target. Otherwise, the local
bookmark will become conflicted (see the `,e.jsx(o.a,{href:"#conflicts",children:'"Conflicts" section'}),` below
for details).`]}),`
`,e.jsxs(o.p,{children:[`Most commands don't show the tracked remote bookmark if it has the same target as
the local bookmark. The local bookmark (without `,e.jsx(o.code,{children:"@<remote name>"}),`) is considered the
bookmark's desired target. Consequently, if you want to update a bookmark on a
remote, you first update the bookmark locally and then push the update to the
remote. If a local bookmark also exists on some remote but points to a different
target there, `,e.jsx(o.code,{children:"jj log"}),` will show the bookmark name with an asterisk suffix (e.g.
`,e.jsx(o.code,{children:"main*"}),`). That is meant to remind you that you may want to push the bookmark to
some remote.`]}),`
`,e.jsxs(o.p,{children:[`If you want to know the internals of bookmark tracking, consult the
`,e.jsx(o.a,{href:"design/tracking-branches.md",children:"Design Doc"}),"."]}),`
`,e.jsx(o.h3,{id:"terminology-summary",children:"Terminology summary"}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:["A ",e.jsx(o.strong,{children:"remote bookmark"})," is a bookmark ref on the remote. ",e.jsx(o.code,{children:"jj"}),` can find out its
actual state only when it's actively communicating with the remote. However,
`,e.jsx(o.code,{children:"jj"}),` does store the last-seen position of the remote bookmark; this is the
commit `,e.jsx(o.code,{children:"jj show <bookmark name>@<remote name>"}),` would show. This notion is
completely analogous to Git's "remote-tracking branches".`]}),`
`,e.jsxs(o.li,{children:["A ",e.jsx(o.strong,{children:"tracked (remote) bookmark"}),` is defined above. You can make a remote bookmark
tracked with the `,e.jsxs(o.a,{href:"#manually-tracking-a-bookmark",children:[e.jsx(o.code,{children:"jj bookmark track"})," command"]}),`, for
example.`]}),`
`,e.jsxs(o.li,{children:["A ",e.jsx(o.strong,{children:"tracking (local) bookmark"})," is the local bookmark that ",e.jsx(o.code,{children:"jj"}),` tries to keep in
sync with the tracked remote bookmark. For example, after `,e.jsx(o.code,{children:"jj bookmark track mybookmark@origin"}),", there will be a local bookmark ",e.jsx(o.code,{children:"mybookmark"}),` that's tracking the
remote `,e.jsx(o.code,{children:"mybookmark@origin"}),` bookmark. A local bookmark can track a bookmark of the same
name on 0 or more remotes.`]}),`
`]}),`
`,e.jsx(o.p,{children:`The notion of tracked bookmarks serves a similar function to the Git notion of an
"upstream branch". Unlike Git, a single local bookmark can be tracking remote
bookmarks on multiple remotes, and the names of the local and remote bookmarks
must match.`}),`
`,e.jsx(o.h3,{id:"manually-tracking-a-bookmark",children:"Manually tracking a bookmark"}),`
`,e.jsxs(o.p,{children:["To track a bookmark permanently use ",e.jsx(o.code,{children:"jj bookmark track <bookmark name>@<remote name>"}),`.
It will now be imported as a local bookmark until you untrack it or it is deleted
on the remote.`]}),`
`,e.jsx(o.p,{children:"Example:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(o.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsxs(o.code,{children:[e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" # List all available bookmarks, as we want our colleague's bookmark."})]}),`
`,e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" jj"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" bookmark"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" list"}),e.jsx(o.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --all"})]}),`
`,e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" # Find the bookmark."})]}),`
`,e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" # [...]"})]}),`
`,e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" # Actually track the bookmark."})]}),`
`,e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" jj"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" bookmark"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" track"}),e.jsx(o.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"bookmark"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" nam"}),e.jsx(o.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"e"}),e.jsx(o.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"@"}),e.jsx(o.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"remote"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" nam"}),e.jsx(o.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"e"}),e.jsx(o.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),e.jsx(o.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" # Example: jj bookmark track my-feature@origin"})]}),`
`,e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" # From this point on, <bookmark name> will be imported when fetching from <remote name>."})]}),`
`,e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" jj"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" git"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" fetch"}),e.jsx(o.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --remote"}),e.jsx(o.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"remote"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" nam"}),e.jsx(o.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"e"}),e.jsx(o.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"})]}),`
`,e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" # A local bookmark <bookmark name> should have been created or updated while fetching."})]}),`
`,e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" jj"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" new"}),e.jsx(o.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"bookmark"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" nam"}),e.jsx(o.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"e"}),e.jsx(o.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),e.jsx(o.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" # Do some local testing, etc."})]})]})})}),`
`,e.jsx(o.h3,{id:"untracking-a-bookmark",children:"Untracking a bookmark"}),`
`,e.jsxs(o.p,{children:["To stop following a remote bookmark, you can ",e.jsx(o.code,{children:"jj bookmark untrack"}),` it. After that,
subsequent fetches of that remote will no longer move the local bookmark to match
the position of the remote bookmark.`]}),`
`,e.jsx(o.p,{children:"Example:"}),`
`,e.jsx(e.Fragment,{children:e.jsx(o.pre,{className:"shiki shiki-themes github-light github-dark",style:{"--shiki-light":"#24292e","--shiki-dark":"#e1e4e8","--shiki-light-bg":"#fff","--shiki-dark-bg":"#24292e"},tabIndex:"0",icon:'<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>',children:e.jsxs(o.code,{children:[e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" # List all local and remote bookmarks."})]}),`
`,e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" jj"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" bookmark"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" list"}),e.jsx(o.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:" --all"})]}),`
`,e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" # Find the bookmark we no longer want to track."})]}),`
`,e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" # [...]"})]}),`
`,e.jsx(o.span,{className:"line",children:e.jsx(o.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:"# # Actually untrack it."})}),`
`,e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" jj"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" bookmark"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" untrack"}),e.jsx(o.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" <"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"bookmark"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" nam"}),e.jsx(o.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"e"}),e.jsx(o.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"@"}),e.jsx(o.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"<"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"remote"}),e.jsx(o.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" nam"}),e.jsx(o.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"e"}),e.jsx(o.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:">"}),e.jsx(o.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" # Example: jj bookmark untrack stuff@origin"})]}),`
`,e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" # From this point on, this remote bookmark won't be imported anymore."})]}),`
`,e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" # The local bookmark (e.g. stuff) is unaffected. It may or may not still"})]}),`
`,e.jsxs(o.span,{className:"line",children:[e.jsx(o.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"$"}),e.jsx(o.span,{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"},children:" # be tracking bookmarks on other remotes (e.g. stuff@upstream)."})]})]})})}),`
`,e.jsx(o.h3,{id:"listing-tracked-bookmarks",children:"Listing tracked bookmarks"}),`
`,e.jsxs(o.p,{children:["To list tracked bookmarks, you can ",e.jsx(o.code,{children:"jj bookmark list --tracked"})," or ",e.jsx(o.code,{children:"jj bookmark list -t"}),`.
This command omits local Git-tracking bookmarks by default.`]}),`
`,e.jsxs(o.p,{children:["You can see if a specific bookmark is tracked with ",e.jsx(o.code,{children:"jj bookmark list --tracked <bookmark name>"}),"."]}),`
`,e.jsxs(o.h3,{id:"automatic-tracking-of-bookmarks--gitauto-local-bookmark-option",children:["Automatic tracking of bookmarks & ",e.jsx(o.code,{children:"git.auto-local-bookmark"})," option"]}),`
`,e.jsxs(o.p,{children:["There are two situations where ",e.jsx(o.code,{children:"jj"})," tracks bookmarks automatically. ",e.jsx(o.code,{children:"jj git clone"})," automatically sets up the default remote bookmark (e.g. ",e.jsx(o.code,{children:"main@origin"}),`) as
tracked. When you push a local bookmark, the newly created bookmark on the remote is
marked as tracked.`]}),`
`,e.jsxs(o.p,{children:[`By default, every other remote bookmark is marked as "not tracked" when it's
fetched. If desired, you need to manually `,e.jsx(o.code,{children:"jj bookmark track"}),` them. This works
well for repositories where multiple people work on a large number of bookmarks.`]}),`
`,e.jsxs(o.p,{children:["The default can be changed by setting the config ",e.jsx(o.code,{children:"git.auto-local-bookmark = true"}),`.
Then, `,e.jsx(o.code,{children:"jj git fetch"})," tracks every ",e.jsx(o.em,{children:"newly fetched"}),` bookmark with a local bookmark.
Branches that already existed before the `,e.jsx(o.code,{children:"jj git fetch"}),` are not affected. This
is similar to Mercurial, which fetches all its bookmarks (equivalent to Git's
branches) by default.`]}),`
`,e.jsx(o.h2,{id:"bookmark-movement",children:"Bookmark movement"}),`
`,e.jsx(o.p,{children:`Currently Jujutsu automatically moves local bookmarks when these conditions are
met:`}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsx(o.li,{children:`When a commit has been rewritten (e.g, when you rebase) bookmarks and the
working-copy will move along with it.`}),`
`,e.jsx(o.li,{children:`When a commit has been abandoned, all associated bookmarks will be moved
to its parent(s). If a working copy was pointing to the abandoned commit,
then a new working-copy commit will be created on top of the parent(s).`}),`
`]}),`
`,e.jsx(o.p,{children:`You could describe the movement as following along the change-id of the
current bookmark commit, even if it isn't entirely accurate.`}),`
`,e.jsx(o.h2,{id:"pushing-bookmarks-safety-checks",children:"Pushing bookmarks: Safety checks"}),`
`,e.jsxs(o.p,{children:["Before ",e.jsx(o.code,{children:"jj git push"}),` actually moves, creates, or deletes a remote bookmark, it
makes several safety checks.`]}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsxs(o.li,{children:[`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"jj"}),` will contact the remote and check that the actual state of the remote
bookmark matches `,e.jsx(o.code,{children:"jj"}),`'s record of its last known position. If there is a
conflict, `,e.jsx(o.code,{children:"jj"}),` will refuse to push the bookmark. In this case, you need to run
`,e.jsx(o.code,{children:"jj git fetch --remote <remote name>"}),` and resolve the resulting bookmark
conflict. Then, you can try `,e.jsx(o.code,{children:"jj git push"})," again."]}),`
`,e.jsxs(o.p,{children:["If you are familiar with Git, this makes ",e.jsx(o.code,{children:"jj git push"})," similar to ",e.jsx(o.code,{children:"git push --force-with-lease"}),"."]}),`
`,e.jsxs(o.p,{children:["There are a few cases where ",e.jsx(o.code,{children:"jj git push"}),` will succeed even though the remote
bookmark is in an unexpected location. These are the cases where `,e.jsx(o.code,{children:"jj git fetch"}),`
would not create a bookmark conflict and would not move the local bookmark, e.g.
if the unexpected location is identical to the local position of the bookmark.`]}),`
`]}),`
`,e.jsxs(o.li,{children:[`
`,e.jsxs(o.p,{children:["The local bookmark must not be ",e.jsx(o.a,{href:"#conflicts",children:"conflicted"}),`. If it is, you would
need to use `,e.jsx(o.code,{children:"jj bookmark move"}),", for example, to resolve the conflict."]}),`
`,e.jsxs(o.p,{children:["This makes ",e.jsx(o.code,{children:"jj git push"})," safe even if ",e.jsx(o.code,{children:"jj git fetch"}),` is performed on a timer
in the background (this situation is a known issue`,e.jsx(o.sup,{children:e.jsx(o.a,{href:"#user-content-fn-known-issue",id:"user-content-fnref-known-issue","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),` with some
forms of `,e.jsx(o.code,{children:"git push --force-with-lease"}),`). If the bookmark moves on a remote in a
problematic way, `,e.jsx(o.code,{children:"jj git fetch"}),` will create a conflict. This should ensure
that the user becomes aware of the conflict before they can `,e.jsx(o.code,{children:"jj git push"}),` and
override the bookmark on the remote.`]}),`
`]}),`
`,e.jsxs(o.li,{children:[`
`,e.jsxs(o.p,{children:[`If the remote bookmark already exists on the remote, it must be
`,e.jsx(o.a,{href:"#remotes-and-tracked-bookmarks",children:"tracked"}),`. If the bookmark does not already
exist on the remote, there is no problem; `,e.jsx(o.code,{children:"jj git push --allow-new"}),` will
create the remote bookmark and mark it as tracked.`]}),`
`]}),`
`]}),`
`,e.jsx(o.h2,{id:"conflicts",children:"Conflicts"}),`
`,e.jsxs(o.p,{children:["Bookmarks can end up in a conflicted state. When that happens, ",e.jsx(o.code,{children:"jj status"}),` will
include information about the conflicted bookmarks (and instructions for how to
mitigate it). `,e.jsx(o.code,{children:"jj bookmark list"})," will have details. ",e.jsx(o.code,{children:"jj log"}),` will show the bookmark
name with a double question mark suffix (e.g. `,e.jsx(o.code,{children:"main??"}),`) on each of the
conflicted bookmark's potential target revisions. Using the bookmark name to look up
a revision will resolve to all potential targets. That means that `,e.jsx(o.code,{children:"jj new main"}),`
will error out, complaining that the revset resolved to multiple revisions.`]}),`
`,e.jsxs(o.p,{children:["Both local bookmarks (e.g. ",e.jsx(o.code,{children:"main"}),") and the remote bookmark (e.g. ",e.jsx(o.code,{children:"main@origin"}),`) can
have conflicts. Both can end up in that state if concurrent operations were run
in the repo. The local bookmark more typically becomes conflicted because it was
updated both locally and on a remote.`]}),`
`,e.jsxs(o.p,{children:["To resolve a conflicted state in a local bookmark (e.g. ",e.jsx(o.code,{children:"main"}),`), you can move the
bookmark to the desired target with `,e.jsx(o.code,{children:"jj bookmark move"}),`. You may want to first either
merge the conflicted targets with `,e.jsx(o.code,{children:"jj new"})," (e.g. ",e.jsx(o.code,{children:"jj new 'all:main'"}),`), or you may
want to rebase one side on top of the other with `,e.jsx(o.code,{children:"jj rebase"}),"."]}),`
`,e.jsxs(o.p,{children:["To resolve a conflicted state in a remote bookmark (e.g. ",e.jsx(o.code,{children:"main@origin"}),`), simply
pull from the remote (e.g. `,e.jsx(o.code,{children:"jj git fetch"}),`). The conflict resolution will also
propagate to the local bookmark (which was presumably also conflicted).`]}),`
`,e.jsx(o.h2,{id:"ease-of-use",children:"Ease of use"}),`
`,e.jsxs(o.p,{children:[`The use of bookmarks is frequent in some workflows, for example, when
interacting with Git repositories containing branches. To this end,
one-letter shortcuts have been implemented, both for the `,e.jsx(o.code,{children:"jj bookmark"}),`
command itself through an alias (as `,e.jsx(o.code,{children:"jj b"}),`), and for its subcommands.
For example, `,e.jsx(o.code,{children:"jj bookmark create BOOKMARK-NAME -r@"}),` can be abbreviated as
`,e.jsx(o.code,{children:"jj b c BOOKMARK-NAME -r@"}),"."]}),`
`,e.jsxs(o.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsx(o.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),`
`,e.jsxs(o.ol,{children:[`
`,e.jsxs(o.li,{id:"user-content-fn-known-issue",children:[`
`,e.jsxs(o.p,{children:[`See "A general note on safety" in
`,e.jsx(o.a,{href:"https://git-scm.com/docs/git-push#Documentation/git-push.txt---no-force-with-lease",children:"https://git-scm.com/docs/git-push#Documentation/git-push.txt---no-force-with-lease"})," ",e.jsx(o.a,{href:"#user-content-fnref-known-issue","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`]}),`
`]})]})}function l(t={}){const{wrapper:o}=t.components||{};return o?e.jsx(o,{...t,children:e.jsx(a,{...t})}):a(t)}export{l as default,s as extractedReferences,i as frontmatter,r as structuredData,h as toc};
