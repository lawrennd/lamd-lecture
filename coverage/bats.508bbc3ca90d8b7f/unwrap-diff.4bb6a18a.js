var data = {lines:[
{"lineNum":"    1","line":"#!/bin/sh"},
{"lineNum":"    2","line":"tr \'\\n\' \'\\001\' | sed \'s/\\x01\\x01/\\x01 \\x01/g\' | sed \'s/\\x01\\([^-+ @]\\)/ \\1/g\' | tr \'\\001\' \'\\n\'","class":"lineNoCov","hits":"0","possible_hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "bats", "date" : "2025-05-18 11:25:14", "instrumented" : 1, "covered" : 0,};
var merged_data = [];
