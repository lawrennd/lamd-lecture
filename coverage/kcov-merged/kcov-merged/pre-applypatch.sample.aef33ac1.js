var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":"#"},
{"lineNum":"    3","line":"# An example hook script to verify what is about to be committed"},
{"lineNum":"    4","line":"# by applypatch from an e-mail message."},
{"lineNum":"    5","line":"#"},
{"lineNum":"    6","line":"# The hook should exit with non-zero status after issuing an"},
{"lineNum":"    7","line":"# appropriate message if it wants to stop the commit."},
{"lineNum":"    8","line":"#"},
{"lineNum":"    9","line":"# To enable this hook, rename this file to \"pre-applypatch\"."},
{"lineNum":"   10","line":""},
{"lineNum":"   11","line":". git-sh-setup","class":"lineNoCov","hits":"0",},
{"lineNum":"   12","line":"precommit=\"$(git rev-parse --git-path hooks/pre-commit)\"","class":"lineNoCov","hits":"0",},
{"lineNum":"   13","line":"test -x \"$precommit\" && exec \"$precommit\" ${1+\"$@\"}","class":"lineNoCov","hits":"0",},
{"lineNum":"   14","line":":","class":"lineNoCov","hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "", "date" : "2025-05-18 12:33:24", "instrumented" : 4, "covered" : 0,};
var merged_data = [];
