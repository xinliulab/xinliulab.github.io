# CLAUDE.md

Personal homepage for Xin Liu (FSU), published via GitHub Pages at
https://xinliulab.github.io. Static site: `index.html`, `lab.html`,
`css/`, `js/` (all page content lives in the data arrays at the top of
`js/homepage.js`).

## Git workflow — always, without asking

GitHub is the hub. The same repo is edited from several machines, but only
one machine at a time (single author), so histories never truly diverge.
Treat sync as part of every task, not a separate request:

1. **Before touching any file**: `git fetch` then `git merge --ff-only origin/master`.
   Do this at the start of every session that will make an edit, even if the
   working tree looks clean — another machine has probably pushed since.
2. **After finishing the edit**: `git add` the changed files, commit with a real
   descriptive message, and `git push origin master`.

Do not ask for permission to pull, commit, or push — the user has given
standing authorization for this repo.

**Always report both sync steps explicitly**, in this order, so the user can
see the state of the hub without asking:

- Before the edit: say that the local checkout was synced from the remote, and
  whether anything came down (e.g. "已从远端同步,拉下 3 个 commit" / "已是最新").
- After the edit: say what was changed, that it was committed, and that it was
  pushed to the remote (with the commit hash and message).

Never leave either step silent, even when the pull was a no-op — "已是最新,
无新内容" is the report in that case. The user asked for this confirmation
specifically ("要同步告诉我").

Only stop and ask if something is genuinely ambiguous:
- `--ff-only` fails (real divergence, or an uncommitted local change conflicts)
- the push is rejected
- the working tree already has uncommitted changes of unknown origin

## Local preview

`.claude/launch.json` defines a `homepage` config on port 4173. The sandboxed
dev-server launcher cannot bind it, so serve manually and open a browser tab:

```
python3 -m http.server 4173
```

Then browse `http://localhost:4173/index.html`. Opening `index.html` as a
`file://` URL renders a static snapshot with no JavaScript, so the publication
and news lists come up empty — always verify through the HTTP server.
