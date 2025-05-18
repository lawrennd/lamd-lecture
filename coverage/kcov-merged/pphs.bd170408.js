var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":"# Print the Primary Hint Stream from a linearized PDF file.  Usage:"},
{"lineNum":"    3","line":"#\tpphs filename.pdf"},
{"lineNum":"    4","line":"# Output goes to stdout."},
{"lineNum":"    5","line":""},
{"lineNum":"    6","line":"# This definition is changed on install to match the"},
{"lineNum":"    7","line":"# executable name set in the makefile"},
{"lineNum":"    8","line":"GS_EXECUTABLE=gs","class":"lineNoCov","hits":"0",},
{"lineNum":"    9","line":"gs=\"`dirname \\\"$0\\\"`/$GS_EXECUTABLE\"","class":"lineNoCov","hits":"0",},
{"lineNum":"   10","line":"if test ! -x \"$gs\"; then","class":"lineNoCov","hits":"0",},
{"lineNum":"   11","line":"\tgs=\"$GS_EXECUTABLE\"","class":"lineNoCov","hits":"0",},
{"lineNum":"   12","line":"fi"},
{"lineNum":"   13","line":"GS_EXECUTABLE=\"$gs\"","class":"lineNoCov","hits":"0",},
{"lineNum":"   14","line":""},
{"lineNum":"   15","line":"exec \"$GS_EXECUTABLE\" -q -P- -dSAFER -dNODISPLAY -- pphs.ps \"$@\"","class":"lineNoCov","hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "bats", "date" : "2025-05-18 11:25:14", "instrumented" : 6, "covered" : 0,};
var merged_data = [];
