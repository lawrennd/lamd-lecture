var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":"sed \'/^+[^+]/!s/\t/TaBBaT/g\' |\\","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    3","line":" expand -t $(seq -s , 9 8 200) |\\"},
{"lineNum":"    4","line":" sed \'s/TaBBaT/\t/g\' |\\"},
{"lineNum":"    5","line":" sed \'/^+[^+]/s/ * $//\' |\\"},
{"lineNum":"    6","line":" tr -d \'\\015\' |\\"},
{"lineNum":"    7","line":" tr \'\\n\' \'°\' |\\"},
{"lineNum":"    8","line":" sed \'s/\\(@@[^@]*@@°[^@]*\\)/\\n\\1/g\' |\\"},
{"lineNum":"    9","line":" egrep -v \'@@[^@]*@@°(( [^°]*°)|([+-][[:space:]]*°)|(-[[:space:]]*([^°]*)°\\+[[:space:]]*\\5°))*$\' |\\"},
{"lineNum":"   10","line":" tr -d \'\\n\' |\\"},
{"lineNum":"   11","line":" tr \'°\' \'\\n\'"},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "bats", "date" : "2025-05-18 11:25:14", "instrumented" : 1, "covered" : 0,};
var merged_data = [];
