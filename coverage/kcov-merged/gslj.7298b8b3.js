var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":""},
{"lineNum":"    3","line":"# This definition is changed on install to match the"},
{"lineNum":"    4","line":"# executable name set in the makefile"},
{"lineNum":"    5","line":"GS_EXECUTABLE=gs","class":"lineNoCov","hits":"0",},
{"lineNum":"    6","line":"gs=\"`dirname \\\"$0\\\"`/$GS_EXECUTABLE\"","class":"lineNoCov","hits":"0",},
{"lineNum":"    7","line":"if test ! -x \"$gs\"; then","class":"lineNoCov","hits":"0",},
{"lineNum":"    8","line":"\tgs=\"$GS_EXECUTABLE\"","class":"lineNoCov","hits":"0",},
{"lineNum":"    9","line":"fi"},
{"lineNum":"   10","line":"GS_EXECUTABLE=\"$gs\"","class":"lineNoCov","hits":"0",},
{"lineNum":"   11","line":""},
{"lineNum":"   12","line":"exec \"$GS_EXECUTABLE\" -q -sDEVICE=laserjet -r300 -P- -dSAFER -dNOPAUSE -sPROGNAME=$0 -- gslp.ps --heading-center \"`date`\" \"$@\"","class":"lineNoCov","hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "bats", "date" : "2025-05-18 11:25:14", "instrumented" : 6, "covered" : 0,};
var merged_data = [];
