var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":"#"},
{"lineNum":"    3","line":"# An example hook script to make use of push options."},
{"lineNum":"    4","line":"# The example simply echoes all push options that start with \'echoback=\'"},
{"lineNum":"    5","line":"# and rejects all pushes when the \"reject\" push option is used."},
{"lineNum":"    6","line":"#"},
{"lineNum":"    7","line":"# To enable this hook, rename this file to \"pre-receive\"."},
{"lineNum":"    8","line":""},
{"lineNum":"    9","line":"if test -n \"$GIT_PUSH_OPTION_COUNT\"","class":"lineNoCov","hits":"0",},
{"lineNum":"   10","line":"then"},
{"lineNum":"   11","line":"\ti=0","class":"lineNoCov","hits":"0",},
{"lineNum":"   12","line":"\twhile test \"$i\" -lt \"$GIT_PUSH_OPTION_COUNT\"","class":"lineNoCov","hits":"0",},
{"lineNum":"   13","line":"\tdo"},
{"lineNum":"   14","line":"\t\teval \"value=\\$GIT_PUSH_OPTION_$i\"","class":"lineNoCov","hits":"0",},
{"lineNum":"   15","line":"\t\tcase \"$value\" in","class":"lineNoCov","hits":"0",},
{"lineNum":"   16","line":"\t\techoback=*)"},
{"lineNum":"   17","line":"\t\t\techo \"echo from the pre-receive-hook: ${value#*=}\" >&2","class":"lineNoCov","hits":"0",},
{"lineNum":"   18","line":"\t\t\t;;"},
{"lineNum":"   19","line":"\t\treject)"},
{"lineNum":"   20","line":"\t\t\texit 1","class":"lineNoCov","hits":"0",},
{"lineNum":"   21","line":"\t\tesac"},
{"lineNum":"   22","line":"\t\ti=$((i + 1))","class":"lineNoCov","hits":"0",},
{"lineNum":"   23","line":"\tdone"},
{"lineNum":"   24","line":"fi"},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "bats", "date" : "2025-05-18 12:33:24", "instrumented" : 8, "covered" : 0,};
var merged_data = [];
