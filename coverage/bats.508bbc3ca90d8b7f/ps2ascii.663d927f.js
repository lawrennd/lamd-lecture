var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":"# Extract ASCII text from a PostScript file.  Usage:"},
{"lineNum":"    3","line":"#\tps2ascii [infile.ps [outfile.txt]]"},
{"lineNum":"    4","line":"# If outfile is omitted, output goes to stdout."},
{"lineNum":"    5","line":"# If both infile and outfile are omitted, ps2ascii acts as a filter,"},
{"lineNum":"    6","line":"# reading from stdin and writing on stdout."},
{"lineNum":"    7","line":""},
{"lineNum":"    8","line":"# This definition is changed on install to match the"},
{"lineNum":"    9","line":"# executable name set in the makefile"},
{"lineNum":"   10","line":"GS_EXECUTABLE=gs","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   11","line":""},
{"lineNum":"   12","line":"trap \"rm -f _temp_.err _temp_.out\" 0 1 2 15","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   13","line":""},
{"lineNum":"   14","line":"OPTIONS=\"-q -dSAFER -sDEVICE=txtwrite\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   15","line":"if ( test $# -eq 0 ) then","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   16","line":"    $GS_EXECUTABLE $OPTIONS -o - -","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   17","line":"elif ( test $# -eq 1 ) then","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   18","line":"    $GS_EXECUTABLE $OPTIONS -o - \"$1\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   19","line":"else"},
{"lineNum":"   20","line":"    $GS_EXECUTABLE $OPTIONS -o \"$2\" \"$1\"","class":"lineNoCov","hits":"0","possible_hits":"0",},
{"lineNum":"   21","line":"fi"},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "bats", "date" : "2025-05-18 11:25:14", "instrumented" : 8, "covered" : 0,};
var merged_data = [];
