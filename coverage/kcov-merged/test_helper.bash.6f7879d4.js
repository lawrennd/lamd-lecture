var data = {lines:[
{"lineNum":"    1","line":"#!/usr/bin/env bash"},
{"lineNum":"    2","line":""},
{"lineNum":"    3","line":"# Load the install script"},
{"lineNum":"    4","line":"load() {"},
{"lineNum":"    5","line":"    local name=\"$1\"","class":"lineNoCov","hits":"0",},
{"lineNum":"    6","line":"    local filename","class":"lineNoCov","hits":"0",},
{"lineNum":"    7","line":"    filename=\"${BATS_TEST_DIRNAME}/../install.sh\"","class":"lineNoCov","hits":"0",},
{"lineNum":"    8","line":"    source \"$filename\"","class":"lineNoCov","hits":"0",},
{"lineNum":"    9","line":"}"},
{"lineNum":"   10","line":""},
{"lineNum":"   11","line":"# Export functions for testing"},
{"lineNum":"   12","line":"export -f get_user_input","class":"lineNoCov","hits":"0",},
{"lineNum":"   13","line":"export -f create_directory_structure","class":"lineNoCov","hits":"0",},
{"lineNum":"   14","line":"export -f update_config_files","class":"lineNoCov","hits":"0",},
{"lineNum":"   15","line":"export -f init_git_repo","class":"lineNoCov","hits":"0",},
{"lineNum":"   16","line":"export -f create_github_repo","class":"lineNoCov","hits":"0",},
{"lineNum":"   17","line":"export -f install_lamd_lecture","class":"lineNoCov","hits":"0",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "bats", "date" : "2025-05-18 12:33:24", "instrumented" : 10, "covered" : 0,};
var merged_data = [];
