var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":""},
{"lineNum":"    3","line":"set -o functrace","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    4","line":"trap \'echo \"kcov@${BASH_SOURCE}@${LINENO}@\" >&$KCOV_BASH_XTRACEFD\' DEBUG","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    5","line":"unset BASH_ENV","class":"lineNoCov","hits":"0","possible_hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "test.sh", "date" : "2025-05-18 11:23:46", "instrumented" : 3, "covered" : 0,};
var merged_data = [];
