var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":"# Convert .pfb fonts to .pfa format"},
{"lineNum":"    3","line":""},
{"lineNum":"    4","line":"# This definition is changed on install to match the"},
{"lineNum":"    5","line":"# executable name set in the makefile"},
{"lineNum":"    6","line":"GS_EXECUTABLE=gs","class":"lineNoCov","hits":"0",},
{"lineNum":"    7","line":"gs=\"`dirname \\\"$0\\\"`/$GS_EXECUTABLE\"","class":"lineNoCov","hits":"0",},
{"lineNum":"    8","line":"if test ! -x \"$gs\"; then","class":"lineNoCov","hits":"0",},
{"lineNum":"    9","line":"\tgs=\"$GS_EXECUTABLE\"","class":"lineNoCov","hits":"0",},
{"lineNum":"   10","line":"fi"},
{"lineNum":"   11","line":"GS_EXECUTABLE=\"$gs\"","class":"lineNoCov","hits":"0",},
{"lineNum":"   12","line":""},
{"lineNum":"   13","line":"if [ $# -eq 2 ]","class":"lineNoCov","hits":"0",},
{"lineNum":"   14","line":"then"},
{"lineNum":"   15","line":"    outfile=$2","class":"lineNoCov","hits":"0",},
{"lineNum":"   16","line":"elif [ $# -eq 1 ]","class":"lineNoCov","hits":"0",},
{"lineNum":"   17","line":"then"},
{"lineNum":"   18","line":"    outfile=`basename \"$1\" \\.pfb`.pfa","class":"lineNoCov","hits":"0",},
{"lineNum":"   19","line":"else"},
{"lineNum":"   20","line":"    echo \"Usage: `basename \\\"$0\\\"` input.pfb [output.pfa]\" 1>&2","class":"lineNoCov","hits":"0",},
{"lineNum":"   21","line":"    exit 1","class":"lineNoCov","hits":"0",},
{"lineNum":"   22","line":"fi"},
{"lineNum":"   23","line":""},
{"lineNum":"   24","line":"exec \"$GS_EXECUTABLE\" -q -P- -dNODISPLAY -- pfbtopfa.ps \"$1\" \"$outfile\"","class":"lineNoCov","hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "bats", "date" : "2025-05-18 11:25:14", "instrumented" : 12, "covered" : 0,};
var merged_data = [];
