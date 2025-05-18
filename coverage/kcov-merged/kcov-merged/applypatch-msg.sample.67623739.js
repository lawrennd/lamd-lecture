var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":"#"},
{"lineNum":"    3","line":"# An example hook script to check the commit log message taken by"},
{"lineNum":"    4","line":"# applypatch from an e-mail message."},
{"lineNum":"    5","line":"#"},
{"lineNum":"    6","line":"# The hook should exit with non-zero status after issuing an"},
{"lineNum":"    7","line":"# appropriate message if it wants to stop the commit.  The hook is"},
{"lineNum":"    8","line":"# allowed to edit the commit message file."},
{"lineNum":"    9","line":"#"},
{"lineNum":"   10","line":"# To enable this hook, rename this file to \"applypatch-msg\"."},
{"lineNum":"   11","line":""},
{"lineNum":"   12","line":". git-sh-setup","class":"lineNoCov","hits":"0",},
{"lineNum":"   13","line":"commitmsg=\"$(git rev-parse --git-path hooks/commit-msg)\"","class":"lineNoCov","hits":"0",},
{"lineNum":"   14","line":"test -x \"$commitmsg\" && exec \"$commitmsg\" ${1+\"$@\"}","class":"lineNoCov","hits":"0",},
{"lineNum":"   15","line":":","class":"lineNoCov","hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "", "date" : "2025-05-18 12:33:24", "instrumented" : 4, "covered" : 0,};
var merged_data = [];
