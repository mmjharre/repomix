window.BENCHMARK_DATA = {
  "lastUpdate": 1777540259753,
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
      }
    ]
  }
}