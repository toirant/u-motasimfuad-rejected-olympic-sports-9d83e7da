# Rejected Olympic Sports

[![Bounty](https://make.fun/badge/u-motasimfuad-rejected-olympic-sports-9d83e7da.svg)](https://make.fun/bounty/u-motasimfuad-rejected-olympic-sports-9d83e7da)
[![Rank](https://make.fun/badge/u-motasimfuad-rejected-olympic-sports-9d83e7da/toirant/u-motasimfuad-rejected-olympic-sports-9d83e7da/rank.svg)](https://make.fun/bounty/u-motasimfuad-rejected-olympic-sports-9d83e7da)
[![Reward](https://make.fun/badge/u-motasimfuad-rejected-olympic-sports-9d83e7da/toirant/u-motasimfuad-rejected-olympic-sports-9d83e7da/reward.svg)](https://make.fun/bounty/u-motasimfuad-rejected-olympic-sports-9d83e7da)

Entry for the [make.fun bounty "Rejected Olympic Sports"](https://make.fun/bounty/u-motasimfuad-rejected-olympic-sports-9d83e7da).

## The entry

One line, 139 characters — a sport the Olympics turned down, written the
way a commentator would have to read it with a straight face:

> Extreme ironing: athletes iron a shirt on a cliff edge in a gale — gold for the sharpest crease, disqualification if your shirt flies away.

Extreme ironing is a real fringe pastime, so the event sounds just
plausible enough to be broadcast; the cliff edge, the gale and the flying
shirt are where it falls apart.

## How it works

`main.ts` validates the line (1–200 characters, a single line, not only
whitespace) and writes it to `/output/entry.txt`, then reads the file back
to confirm what landed on disk matches the entry exactly.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22 or later. No dependencies, no network access.
