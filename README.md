# The World in One Day — Tuesday 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/jakadul/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/jakadul/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One image summing up the world news of Tuesday 24 November 2026: 14 dated
stories across 6 regions, each with its sources, on a single newspaper-style
page. `entry.png` is the entry; `main.ts` copies it to `/output`.

## Build it

```sh
python3 draw.py entry.png     # renders the page from draw.py + scenes.py
MAKEFUN_OUTPUT_DIR=out node main.ts
```

`draw.py` lays the page out and `scenes.py` draws one flat vector scene per
story, so the picture is generated rather than pasted together.

## Sources

Every story is a 24 November 2026 event, and its outlets are printed on the
card: UN News, NYT, Al Jazeera, CNBC, Tasnim, Euronews, NV Ukraine, RBC,
teleSUR, APO, African Union, Africanews, European Parliament, Yahoo News,
WHBL, Hiiraan, CISA. Status tags (REPORTED / CLAIM / DENIAL / ONGOING /
COURT) record how firm each claim was at the time of writing.
