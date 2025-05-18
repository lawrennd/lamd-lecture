#!/usr/bin/env bats

setup() {
    # Create a temporary directory for testing
    TEST_DIR=$(mktemp -d)
    cd "$TEST_DIR"
    source "$BATS_TEST_DIRNAME/../install.sh"
}

teardown() {
    # Clean up the temporary directory
    rm -rf "$TEST_DIR"
}

@test "get_user_input returns default value in test mode" {
    TEST_MODE=1
    run get_user_input "test prompt" "default value"
    [ "$status" -eq 0 ]
    [ "$output" = "default value" ]
}

@test "create_directory_structure creates all required directories" {
    run create_directory_structure "test-course"
    [ "$status" -eq 0 ]
    [ -d "test-course/_lamd" ]
    [ -d "test-course/_lectures" ]
    [ -d "test-course/_notebooks" ]
    [ -d "test-course/_practicals" ]
    [ -d "test-course/assets" ]
    [ -d "test-course/slides" ]
}

@test "update_config_files updates _lamd.yml correctly" {
    # Create test directory structure
    mkdir -p "test-course/_lamd"
    
    # Create test _lamd.yml
    cat > "test-course/_lamd/_lamd.yml" << EOF
author:
- given: Your
  family: Name
  institution: Your Institution
  url: http://example.com
layout: lecture
organization: yourusername
repository: lamd-lecture
baseurl: "lamd-lecture"
EOF

    # Create test _config.yml
    mkdir -p "test-course"
    cat > "test-course/_config.yml" << EOF
title: LaMD Lecture Course
description: A template lecture course using LaMD
EOF

    run update_config_files "test-course" "John Doe" "Test University" "http://test.com" "testuser"
    [ "$status" -eq 0 ]

    # Check _lamd.yml updates
    grep "given: John" "test-course/_lamd/_lamd.yml"
    grep "family: Doe" "test-course/_lamd/_lamd.yml"
    grep "institution: Test University" "test-course/_lamd/_lamd.yml"
    grep "url: http://test.com" "test-course/_lamd/_lamd.yml"
    grep "organization: testuser" "test-course/_lamd/_lamd.yml"
    grep "repository: test-course" "test-course/_lamd/_lamd.yml"
    grep "baseurl: \"test-course\"" "test-course/_lamd/_lamd.yml"

    # Check _config.yml updates
    grep "title: test-course" "test-course/_config.yml"
    grep "description: test-course - A LaMD-based lecture course" "test-course/_config.yml"
}

@test "init_git_repo initializes git repository" {
    mkdir -p "test-course"
    touch "test-course/README.md"
    git config --global user.email "test@example.com"
    git config --global user.name "Test User"
    run init_git_repo "test-course"
    echo "status: $status"
    echo "output: $output"
    [ "$status" -eq 0 ]
    [ -d "test-course/.git" ]
}

@test "full installation in test mode" {
    TEST_MODE=1
    run install_lamd_lecture
    [ "$status" -eq 0 ]
    [ -d "test-course" ]
    [ -d "test-course/_lamd" ]
    [ -d "test-course/.git" ]
} 