#!/bin/bash

# Create coverage directory
mkdir -p coverage/output

# Run tests with kcov
kcov --include-path=. \
     --exclude-path=coverage \
     --exclude-pattern=bats \
     coverage/output \
     bats test/install.bats 