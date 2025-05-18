var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":"# Make an AFM file from PFB / PFA and (optionally) PFM files.  Usage:"},
{"lineNum":"    3","line":"#\tpf2afm fontfilename"},
{"lineNum":"    4","line":"# Output goes to fontfilename.afm, which must not already exist."},
{"lineNum":"    5","line":"# See pf2afm.ps for more details."},
{"lineNum":"    6","line":""},
{"lineNum":"    7","line":"# This definition is changed on install to match the"},
{"lineNum":"    8","line":"# executable name set in the makefile"},
{"lineNum":"    9","line":"GS_EXECUTABLE=gs","class":"lineNoCov","hits":"0",},
{"lineNum":"   10","line":"gs=\"`dirname \\\"$0\\\"`/$GS_EXECUTABLE\"","class":"lineNoCov","hits":"0",},
{"lineNum":"   11","line":"if test ! -x \"$gs\"; then","class":"lineNoCov","hits":"0",},
{"lineNum":"   12","line":"\tgs=\"$GS_EXECUTABLE\"","class":"lineNoCov","hits":"0",},
{"lineNum":"   13","line":"fi"},
{"lineNum":"   14","line":"GS_EXECUTABLE=\"$gs\"","class":"lineNoCov","hits":"0",},
{"lineNum":"   15","line":""},
{"lineNum":"   16","line":"exec \"$GS_EXECUTABLE\" -q -dNODISPLAY -P- -dSAFER -dDELAYSAFER  -- pf2afm.ps \"$@\"","class":"lineNoCov","hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "bats", "date" : "2025-05-18 11:25:14", "instrumented" : 6, "covered" : 0,};
var merged_data = [];
