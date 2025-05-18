var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":"#"},
{"lineNum":"    3","line":"# An example hook script to check the commit log message."},
{"lineNum":"    4","line":"# Called by \"git commit\" with one argument, the name of the file"},
{"lineNum":"    5","line":"# that has the commit message.  The hook should exit with non-zero"},
{"lineNum":"    6","line":"# status after issuing an appropriate message if it wants to stop the"},
{"lineNum":"    7","line":"# commit.  The hook is allowed to edit the commit message file."},
{"lineNum":"    8","line":"#"},
{"lineNum":"    9","line":"# To enable this hook, rename this file to \"commit-msg\"."},
{"lineNum":"   10","line":""},
{"lineNum":"   11","line":"# Uncomment the below to add a Signed-off-by line to the message."},
{"lineNum":"   12","line":"# Doing this in a hook is a bad idea in general, but the prepare-commit-msg"},
{"lineNum":"   13","line":"# hook is more suited to it."},
{"lineNum":"   14","line":"#"},
{"lineNum":"   15","line":"# SOB=$(git var GIT_AUTHOR_IDENT | sed -n \'s/^\\(.*>\\).*$/Signed-off-by: \\1/p\')"},
{"lineNum":"   16","line":"# grep -qs \"^$SOB\" \"$1\" || echo \"$SOB\" >> \"$1\""},
{"lineNum":"   17","line":""},
{"lineNum":"   18","line":"# This example catches duplicate Signed-off-by lines."},
{"lineNum":"   19","line":""},
{"lineNum":"   20","line":"test \"\" = \"$(grep \'^Signed-off-by: \' \"$1\" |","class":"lineNoCov","hits":"0",},
{"lineNum":"   21","line":"\t sort | uniq -c | sed -e \'/^[ \t]*1[ \t]/d\')\" || {","class":"lineNoCov","hits":"0",},
{"lineNum":"   22","line":"\techo >&2 Duplicate Signed-off-by lines.","class":"lineNoCov","hits":"0",},
{"lineNum":"   23","line":"\texit 1","class":"lineNoCov","hits":"0",},
{"lineNum":"   24","line":"}"},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "", "date" : "2025-05-18 12:33:24", "instrumented" : 4, "covered" : 0,};
var merged_data = [];
