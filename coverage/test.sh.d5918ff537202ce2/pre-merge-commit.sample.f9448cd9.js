var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":"#"},
{"lineNum":"    3","line":"# An example hook script to verify what is about to be committed."},
{"lineNum":"    4","line":"# Called by \"git merge\" with no arguments.  The hook should"},
{"lineNum":"    5","line":"# exit with non-zero status after issuing an appropriate message to"},
{"lineNum":"    6","line":"# stderr if it wants to stop the merge commit."},
{"lineNum":"    7","line":"#"},
{"lineNum":"    8","line":"# To enable this hook, rename this file to \"pre-merge-commit\"."},
{"lineNum":"    9","line":""},
{"lineNum":"   10","line":". git-sh-setup","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   11","line":"test -x \"$GIT_DIR/hooks/pre-commit\" &&","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   12","line":"        exec \"$GIT_DIR/hooks/pre-commit\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   13","line":":","class":"lineNoCov","hits":"0","possible_hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "test.sh", "date" : "2025-05-18 11:23:46", "instrumented" : 4, "covered" : 0,};
var merged_data = [];
