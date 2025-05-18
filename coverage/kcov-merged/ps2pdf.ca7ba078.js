var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":"# Convert PostScript to PDF."},
{"lineNum":"    3","line":""},
{"lineNum":"    4","line":"# Currently, we produce PDF 1.4 by default, but this is not guaranteed"},
{"lineNum":"    5","line":"# not to change in the future."},
{"lineNum":"    6","line":"version=14","class":"lineNoCov","hits":"0",},
{"lineNum":"    7","line":""},
{"lineNum":"    8","line":"ps2pdf=\"`dirname \\\"$0\\\"`/ps2pdf$version\"","class":"lineNoCov","hits":"0",},
{"lineNum":"    9","line":"if test ! -x \"$ps2pdf\"; then","class":"lineNoCov","hits":"0",},
{"lineNum":"   10","line":"\tps2pdf=\"ps2pdf$version\"","class":"lineNoCov","hits":"0",},
{"lineNum":"   11","line":"fi"},
{"lineNum":"   12","line":"exec \"$ps2pdf\" \"$@\"","class":"lineNoCov","hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "bats", "date" : "2025-05-18 11:25:14", "instrumented" : 5, "covered" : 0,};
var merged_data = [];
