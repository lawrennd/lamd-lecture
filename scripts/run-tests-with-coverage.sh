#!/bin/bash
# Script to run Bats tests with coverage using kcov

set -e

# Create coverage directory
COVERAGE_DIR="coverage"
mkdir -p "$COVERAGE_DIR"

# Function to run a command with a timeout and proper error handling
run_with_timeout() {
  local timeout_seconds="$1"
  local description="$2"
  shift 2
  echo "Running $description..."
  if ! timeout "$timeout_seconds" "$@" 2>/dev/null; then
    exit_code=$?
    if [ $exit_code -eq 124 ]; then
      echo "Error: $description timed out after $timeout_seconds seconds."
      return 124
    else
      echo "Warning: Error running $description. Exit code: $exit_code"
      return $exit_code
    fi
  fi
  return 0
}

# Check if kcov is installed
if ! command -v kcov >/dev/null 2>&1; then
  echo "Error: kcov is required but not installed."
  echo "Please install kcov and try again."
  echo "  - Ubuntu/Debian: apt-get install libdw-dev binutils-dev libcurl4-openssl-dev zlib1g-dev libiberty-dev cmake"
  echo "  - Then: git clone https://github.com/SimonKagstrom/kcov.git && cd kcov && mkdir build && cd build && cmake .. && make && make install"
  echo "  - macOS: brew install kcov"
  exit 1
fi

# First run kcov directly on the install script to get its coverage
if ! run_with_timeout 30 "coverage for install script" kcov --quiet --include-pattern=install.sh "$COVERAGE_DIR" ./install.sh; then
  if [ $? -eq 124 ]; then
    echo "Aborting due to timeout."
    exit 1
  fi
  echo "Continuing with tests despite error..."
fi

# Then run coverage for Bats tests with a timeout
if ! run_with_timeout 60 "coverage for Bats tests" kcov --quiet --include-pattern=install.sh "$COVERAGE_DIR" bats test/install.bats; then
  if [ $? -eq 124 ]; then
    echo "Aborting due to timeout."
    exit 1
  fi
  echo "Coverage may be incomplete, but continuing..."
fi

# Merge coverage reports for better results
echo "Merging coverage reports..."
echo "Contents of $COVERAGE_DIR before merge:"
ls -l "$COVERAGE_DIR"

# Only include kcov output directories for merging (bats.* and install.sh.*)
subdirs=()
for d in "$COVERAGE_DIR"/*/; do
  dir_no_slash="${d%/}"
  base="$(basename "$dir_no_slash")"
  if [[ "$base" == bats.* || "$base" == install.sh.* ]]; then
    subdirs+=("$dir_no_slash")
  fi
done

echo "Subdirectories to merge: ${subdirs[@]}"

if [ ${#subdirs[@]} -gt 0 ]; then
  echo "Running merging coverage reports..."
  kcov --merge "$COVERAGE_DIR/kcov-merged" "${subdirs[@]}"
  if [ $? -ne 0 ]; then
    echo "Failed to merge coverage reports, but individual reports should still be available."
  fi
else
  echo "No kcov output subdirectories found to merge. Skipping merge step."
fi

echo "Coverage report generated in $COVERAGE_DIR"
echo "Open $COVERAGE_DIR/kcov-merged/index.html to view the merged report"
echo "Or view individual test reports in the coverage directory" 