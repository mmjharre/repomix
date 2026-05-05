window.BENCHMARK_DATA = {
  "lastUpdate": 1777978284465,
  "repoUrl": "https://github.com/mmjharre/repomix",
  "entries": {
    "Repomix Performance": [
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "758ab51bac0bbca668e073982f3eef423173a8f0",
          "message": "Merge pull request #1521 from yamadashy/claude/sleepy-tesla-LdYQq\n\nperf(core): Automated performance tuning by Claude",
          "timestamp": "2026-04-30T00:46:07+09:00",
          "tree_id": "5a02c96a3f72c02f459aaf39b1f5b2e46979fb50",
          "url": "https://github.com/mmjharre/repomix/commit/758ab51bac0bbca668e073982f3eef423173a8f0"
        },
        "date": 1777540259448,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 931,
            "range": "±235",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 877ms, Q3: 1112ms\nAll times: 815, 827, 827, 847, 853, 870, 874, 877, 880, 882, 883, 887, 893, 897, 899, 931, 974, 982, 997, 1060, 1073, 1085, 1112, 1117, 1130, 1148, 1152, 1286, 1420, 1490ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1361,
            "range": "±18",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1355ms, Q3: 1373ms\nAll times: 1318, 1341, 1342, 1348, 1353, 1355, 1356, 1356, 1357, 1358, 1361, 1363, 1364, 1367, 1371, 1373, 1382, 1416, 1423, 1445ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 2067,
            "range": "±392",
            "unit": "ms",
            "extra": "Median of 19 runs\nQ1: 1738ms, Q3: 2130ms\nAll times: 1706, 1724, 1726, 1727, 1738, 1745, 1756, 1770, 1775, 2067, 2085, 2106, 2118, 2118, 2130, 2139, 2151, 2232, 2239ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b743c9659c81b5229a56df672221ea17f3c3bbdb",
          "message": "Merge pull request #1543 from yamadashy/chore/codex-review-loop-command\n\nchore(agents): Add codex-review-loop command",
          "timestamp": "2026-05-05T16:22:31+09:00",
          "tree_id": "7ca2cc36fe32048c8cb1321fbd3d94202f966783",
          "url": "https://github.com/mmjharre/repomix/commit/b743c9659c81b5229a56df672221ea17f3c3bbdb"
        },
        "date": 1777978283996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 4629,
            "range": "±1913",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 3858ms, Q3: 5771ms\nAll times: 3257, 3270, 3277, 3569, 3622, 3673, 3771, 3858, 4023, 4144, 4161, 4211, 4226, 4252, 4267, 4629, 4647, 4813, 4960, 5079, 5186, 5513, 5771, 6311, 6471, 6640, 6769, 6994, 7100, 7371ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 4420,
            "range": "±43",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 4401ms, Q3: 4444ms\nAll times: 4365, 4368, 4390, 4392, 4397, 4401, 4402, 4407, 4411, 4418, 4420, 4423, 4437, 4440, 4440, 4444, 4448, 4466, 4474, 4484ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1833,
            "range": "±46",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1808ms, Q3: 1854ms\nAll times: 1766, 1786, 1790, 1796, 1804, 1808, 1809, 1820, 1820, 1833, 1833, 1836, 1840, 1842, 1846, 1854, 1855, 1855, 1855, 1872ms"
          }
        ]
      }
    ]
  }
}