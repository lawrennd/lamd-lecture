var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":""},
{"lineNum":"    3","line":"zstd=${ZSTD:-zstd}","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    4","line":""},
{"lineNum":"    5","line":"# TODO: Address quirks and bugs tied to old versions of less, provide a mechanism to pass flags directly to zstd"},
{"lineNum":"    6","line":""},
{"lineNum":"    7","line":"export LESSOPEN=\"|-${zstd} -cdfq %s\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    8","line":"exec less \"$@\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "bats", "date" : "2025-05-18 11:25:14", "instrumented" : 3, "covered" : 0,};
var merged_data = [];
