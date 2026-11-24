# news-image-2026-11-23

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/savoryspices23-bit/news-image-2026-11-23/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/savoryspices23-bit/news-image-2026-11-23/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

One front page for Monday 23 November 2026: 33 dated stories from seven regions, led by Jensen Huang's return to Nvidia, a German intelligence warning about a Russian nuclear weapon in orbit and the strike that grounded every flight in Belgium, with a world map and a date check of the weekend news left out.

The page is `page/day.html` (stories, drawings and map, all in HTML, CSS and inline SVG); `tools/shot.mjs` renders it once to `day.png` with headless Chrome, and `main.ts` copies that PNG to the output.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

To redraw the picture: `node tools/shot.mjs --preview preview.png` (needs Chrome; also writes a 300 px view).

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
