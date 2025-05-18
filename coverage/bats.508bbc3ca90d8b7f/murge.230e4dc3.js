var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":""},
{"lineNum":"    3","line":"grep -A99999 \'^<<<<<<<\' | grep -B99999 \'^>>>>>>>\' >murge.X","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    4","line":"grep -A99999 \'^====\' murge.X | egrep -v \'^(=======|<<<<<<<|>>>>>>>|\\|\\|\\|\\|\\|\\|\\|)\' >murge.theirs","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    5","line":"grep -B99999 \'^||||\' murge.X | egrep -v \'^(=======|<<<<<<<|>>>>>>>|\\|\\|\\|\\|\\|\\|\\|)\' >murge.ours","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    6","line":"grep -B99999 \'^====\' murge.X | grep -A99999 \'^||||\' | egrep -v \'^(=======|<<<<<<<|>>>>>>>|\\|\\|\\|\\|\\|\\|\\|)\'  >murge.common","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    7","line":""},
{"lineNum":"    8","line":"colordiff -du $* murge.ours murge.theirs","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    9","line":"grep . murge.common > /dev/null && colordiff -du $* murge.common murge.theirs","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   10","line":"grep . murge.common > /dev/null && colordiff -du $* murge.common murge.ours","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   11","line":"rm murge.theirs murge.common murge.ours murge.X","class":"lineNoCov","hits":"0","possible_hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "bats", "date" : "2025-05-18 11:25:14", "instrumented" : 8, "covered" : 0,};
var merged_data = [];
