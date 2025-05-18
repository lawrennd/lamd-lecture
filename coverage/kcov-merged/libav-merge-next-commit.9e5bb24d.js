var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":""},
{"lineNum":"    3","line":"if [ \"$1\" != \"merge\" -a \"$1\" != \"noop\" ]; then","class":"lineNoCov","hits":"0",},
{"lineNum":"    4","line":"    printf \"Usage: $0 <merge|noop [REF_HASH]>\\n\"","class":"lineNoCov","hits":"0",},
{"lineNum":"    5","line":"    exit 0","class":"lineNoCov","hits":"0",},
{"lineNum":"    6","line":"fi"},
{"lineNum":"    7","line":""},
{"lineNum":"    8","line":"[ \"$1\" = \"noop\" ] && merge_opts=\"-s ours\"","class":"lineNoCov","hits":"0",},
{"lineNum":"    9","line":""},
{"lineNum":"   10","line":"nextrev=$(git rev-list libav/master --not master --no-merges | tail -n1)","class":"lineNoCov","hits":"0",},
{"lineNum":"   11","line":"if [ -z \"$nextrev\" ]; then","class":"lineNoCov","hits":"0",},
{"lineNum":"   12","line":"    printf \"Nothing to merge..\\n\"","class":"lineNoCov","hits":"0",},
{"lineNum":"   13","line":"    exit 0","class":"lineNoCov","hits":"0",},
{"lineNum":"   14","line":"fi"},
{"lineNum":"   15","line":"printf \"Merging $(git log -n 1 --oneline $nextrev)\\n\"","class":"lineNoCov","hits":"0",},
{"lineNum":"   16","line":"git merge --no-commit $merge_opts --no-ff --log $nextrev","class":"lineNoCov","hits":"0",},
{"lineNum":"   17","line":""},
{"lineNum":"   18","line":"if [ \"$1\" = \"noop\" -a -n \"$2\" ]; then","class":"lineNoCov","hits":"0",},
{"lineNum":"   19","line":"    printf \"\\nThis commit is a noop, see $2\\n\" >> .git/MERGE_MSG","class":"lineNoCov","hits":"0",},
{"lineNum":"   20","line":"fi"},
{"lineNum":"   21","line":""},
{"lineNum":"   22","line":"printf \"\\nMerged-by: $(git config --get user.name) <$(git config --get user.email)>\\n\" >> .git/MERGE_MSG","class":"lineNoCov","hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "bats", "date" : "2025-05-18 11:25:14", "instrumented" : 13, "covered" : 0,};
var merged_data = [];
