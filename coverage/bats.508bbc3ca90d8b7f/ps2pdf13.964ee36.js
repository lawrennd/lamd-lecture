var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":"# Convert PostScript to PDF 1.3 (Acrobat 4-and-later compatible)."},
{"lineNum":"    3","line":"ps2pdfwr=\"`dirname \\\"$0\\\"`/ps2pdfwr\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    4","line":"if test ! -x \"$ps2pdfwr\"; then","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    5","line":"\tps2pdfwr=\"ps2pdfwr\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"    6","line":"fi"},
{"lineNum":"    7","line":"exec \"$ps2pdfwr\" -dCompatibilityLevel=1.3 -dWriteXRefStm=false -dWriteObjStms=false \"$@\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "bats", "date" : "2025-05-18 11:25:14", "instrumented" : 4, "covered" : 0,};
var merged_data = [];
