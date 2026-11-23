# Trial log — u-0xkianno-one-word-from-grandma-f04bed16

## Competition
- Slug: `u-0xkianno-one-word-from-grandma-f04bed16`
- Title: One Word From Grandma
- Sponsor: u-0xkianno (user-created bounty)
- Prize: $5 total — 1st $1.59, 2nd $1.11, 3rd $0.78, 4th $0.55, 5th $0.38, 6th $0.27, 7th $0.19, 8th $0.13. Free to enter.
- Opens: 2026-11-23T19:06:32Z (24 Nov 03:06 WITA). Deadline: 2026-11-26T19:05:00Z (27 Nov 03:05 WITA).
- Kit limits (competition.yaml): harness program/v1, runtimes node22 / python3.13, sandbox NO network; program writes one text to `/output/entry.txt`; gate = UTF-8, 1–30 characters, not only whitespace; transcripts_required: true; license: osi; repo_created_after_open: true; max 5 submissions/entrant/day; rule Force_Last (last submit before deadline = final entry).
- Judge: z-ai/glm-5.3-flash, pairwise, no ties, margins 1–5; blind rounds, next round 2026-11-24T19:06:01Z. Final heat: top 500 dev-board entrants, 3 Swiss rounds + playoff top 10. House bots may hold paid places (prize refunds to sponsor, no one moves up).
- Judge criteria, in order: (1) reads as the single word a grandma would text about AI; (2) sounds like a real grandmother's texting voice, warm and a little baffled; (3) funny in one word, no caption or context needed; (4) tied to AI, robots or machines, not a word that fits any subject; (5) fresh rather than obvious, still instantly readable. Judge-addressed text is allowed, but the brief says send one word and nothing else, so the word itself carries everything.
- Kit: `~/workspace/make-fun/u-0xkianno-one-word-from-grandma-f04bed16-kit/` (tarball sha256 a24a06193021200fec1d301e5f8af3f68da3a1324ff6802b925c6db863f6dc77; kit.json bundle_sha256 7eba9459b646774c2e972b39ba5680aed60af932dcad3d26d51a8e92f41ad07c — matches the API at https://make.fun/api/competitions/u-0xkianno-one-word-from-grandma-f04bed16/kit, fetched 24 Nov 07:04 WITA).
- Wallet (owner.json): FwUebjzYUBF6uybmEkUkiQf9z35bGGQuUE3GrToXFcUq

## Candidate words (all 1 word, no punctuation, gate 1–30 chars)

| # | Word | Chars | Case for it | Case against it |
|---|---|---|---|---|
| PICK | ChatGTP | 7 | The typo a grandma actually makes when she means ChatGPT: the P and T swap at the end. Names the AI itself, so it is tied to AI more directly than any robot word. The misspelling is the bafflement, so the warmth and the joke land in the same seven letters, with no caption needed. The brief explicitly says a typo she would actually make counts. | A judge could read it as a plain misspelling rather than a voice. Weighed against that: the typo is the most widely recognised grandma typo of the best-known AI name, so the reader gets the intended word instantly. |
| C1 | Robit | 5 | Cute mispronunciation of robot, short, warm, instantly readable. | About robots in general, not AI specifically, so weaker on criterion 4 than the pick. Also reads as internet slang as much as grandma typing. |
| C2 | Computor | 8 | The classic grandma typo for computer, warm and baffled, funny on its own. | About machines in general, not AI. A judge comparing it with a word that names an AI loses it on criterion 4. |
| C3 | Contraption | 11 | A real grandma word for a gadget she does not understand, tied to machines, warm. | Generic: she could call any gadget a contraption, so it is weaker on criterion 4, and it has no typo or misunderstanding to make it funny in one word. |
| C4 | Witchcraft | 10 | Sweet misunderstanding: grandma calling AI witchcraft. Warm, baffled, funny. | Fits any subject at all, so it is the weakest of the five on criterion 4, which the judge weighs before freshness. |
| C5 | Beepboop | 8 | Robot sound, funny, tied to robots, fresh. | A grandma would text ABOUT a robot, not imitate one. Fails criterion 2: it is the robot's voice, not hers. |
| C6 | Robot | 5 | The obvious word, instantly readable, tied to machines. | The obvious word. Every other entrant's first idea, so it loses on criterion 5 and has no joke in it beyond the subject itself. |

## Pick: ChatGTP (7 chars) — why it beats the others, criterion by criterion

Judge criteria in order: (1) the single word a grandma would text about AI; (2) real grandmother's texting voice, warm and a little baffled; (3) funny in one word; (4) tied to AI, robots or machines; (5) fresh, still instantly readable.

- vs C1 Robit: both are grandma misspellings, but the pick names the AI product itself while Robit names robots in general. On criterion 4 the pick wins clearly, and the earlier criteria do not differ enough to overturn that.
- vs C2 Computor: same shape of joke, but Computor is about a computer, not AI. The pick keeps the typo joke and adds the direct AI tie.
- vs C3 Contraption: Contraption is a real word she would use, but it is generic and has no joke without context. The pick is funny the moment you read it, because you hear her typing it.
- vs C4 Witchcraft: Witchcraft is warmer as a misunderstanding, but it would fit any subject, while the pick could only be about ChatGPT. Criterion 4 decides it.
- vs C5 Beepboop: Beepboop imitates the machine; the pick is the grandma herself, typing the name wrong. Criterion 2 decides it.
- vs C6 Robot: Robot is the obvious pick and has no joke in it. The pick is the same idea with the grandma typo doing the work, so it wins on criteria 2, 3 and 5 at once.

The pick against the five criteria: (1) it is exactly the word she would text when she means the AI she has heard about; (2) the swapped letters are her voice, baffled and warm, with no extra words needed; (3) the joke lands on first read, because everyone has seen this typo; (4) it names ChatGPT, the AI itself, not machines in general; (5) it is the familiar name made fresh by the mistake, and the intended word is obvious at a glance.

## Build
- main.ts written fresh with the file-write tool in this session (never copied/moved into place). Node 22, stdlib only, no network, deterministic. Writes the word to `$ENTRY_OUTPUT` or `/output/entry.txt`, no trailing newline.
- Repo: `~/workspace/make-fun/u-0xkianno-one-word-from-grandma-f04bed16/` — main.ts, README.md (3 make.fun badges), LICENSE (MIT), .makefun/owner.json (wallet FwUebjzYUBF6uybmEkUkiQf9z35bGGQuUE3GrToXFcUq). Commit identity rwnliwan <rwnliwan@users.noreply.github.com>.
- Repo created after the opening (2026-11-23T19:06:32Z), public at https://github.com/rwnliwan/u-0xkianno-one-word-from-grandma-f04bed16. NOT pushed by builder (coordinator submits; builder pushes the repo per the brief and verifies ls-remote).
- NOT submitted by builder. Blind round next at 2026-11-24T19:06:01Z — submit before then to move up.

## Preflight (token-free) — PASSED
- Run 1: `ENTRY_OUTPUT=/tmp/grandma-1/entry.txt node main.ts` → exit 0.
- Run 2: `ENTRY_OUTPUT=/tmp/grandma-2/entry.txt node main.ts` → exit 0.
- Determinism: `cmp` run1 vs run2 → **byte-identical**.
- Output: `ChatGTP` — **7 chars, 7 bytes**, gate valid (1–30 chars, non-whitespace), no trailing newline, UTF-8 round-trip OK.
- Run sha256s: run 1 `6aa7166320b74128370b54dc1929bf6061eb1655b767e6d709f75604b552fcc7`, run 2 `6aa7166320b74128370b54dc1929bf6061eb1655b767e6d709f75604b552fcc7` — identical.

## Commit record
- Commit `1e8993391beb1b0cec31c7c3d0816c1c14377e02` — "One Word From Grandma entry: ChatGTP" (main.ts, README.md, LICENSE, .makefun/owner.json, trial-log.md). Repo created 2026-11-23T23:37:51Z (after opening 2026-11-23T19:06:32Z), PUBLIC, pushed, ls-remote HEAD matches local HEAD. About verified: homepage https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16, topics ai-agents, bounties, makefun.
- Note: repo creation was rate-limited by GitHub ("created too many repositories, too quickly") on first tries at 23:04, 23:07 and 23:19 UTC and 23:28 UTC; creation succeeded 23:37 UTC after the fleet burst (10 repos 22:43–22:57 UTC) aged out.

## Submit record (coordinator)
- Bundle: `~/workspace/make-fun/u-0xkianno-one-word-from-grandma-f04bed16-bundle.tar.gz`, sha256 `4444e90da90d9da311f1a2f2f6d1c710fe76eef4de5ff2986ef8e0f0ac233dae`
- Re-check: 14 passed, 0 failed, 5 skipped (thinking_reproduces 79.2%, thinking_priced pass)
- Submitted 2026-11-23T23:40:38.564Z, submission `01a20ac8-7331-76b0-9e23-0ce61ad0e6c8`, commit `2e55b48146fcb34a90f77aca37a13e3267546fad`
- Status verified: stage scored (submit CLI reported "stage submitted" after its 30 s wait; status check ~1 min later showed scored)
- Claim code stored in `~/workspace/make-fun/drive-backup/claim-codes-grandma.txt` (never in chat)
