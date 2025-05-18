#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to get user input (can be overridden in tests)
get_user_input() {
    local prompt="$1"
    local default="$2"
    if [ -n "$TEST_MODE" ]; then
        echo "$default"
    else
        read -p "$prompt" input
        echo "${input:-$default}"
    fi
}

# Function to create directory structure
create_directory_structure() {
    local course_name="$1"
    mkdir -p "$course_name/_lamd"
    mkdir -p "$course_name/_lectures"
    mkdir -p "$course_name/_notebooks"
    mkdir -p "$course_name/_practicals"
    mkdir -p "$course_name/assets"
    mkdir -p "$course_name/slides"
}

# Function to update configuration files
update_config_files() {
    local course_name="$1"
    local full_name="$2"
    local institution="$3"
    local website_url="$4"
    local github_username="$5"

    # Update _lamd.yml
    sed -i.bak "s/given: Your/given: ${full_name%% *}/" "$course_name/_lamd/_lamd.yml"
    sed -i.bak "s/family: Name/family: ${full_name#* }/" "$course_name/_lamd/_lamd.yml"
    sed -i.bak "s/institution: Your Institution/institution: $institution/" "$course_name/_lamd/_lamd.yml"
    sed -i.bak "s|url: http://example.com|url: $website_url|" "$course_name/_lamd/_lamd.yml"
    sed -i.bak "s/organization: yourusername/organization: $github_username/" "$course_name/_lamd/_lamd.yml"
    sed -i.bak "s/repository: lamd-lecture/repository: $course_name/" "$course_name/_lamd/_lamd.yml"
    sed -i.bak "s/baseurl: \"lamd-lecture\"/baseurl: \"$course_name\"/" "$course_name/_lamd/_lamd.yml"

    # Update _config.yml
    sed -i.bak "s/title: LaMD Lecture Course/title: $course_name/" "$course_name/_config.yml"
    sed -i.bak "s/description: A template lecture course using LaMD/description: $course_name - A LaMD-based lecture course/" "$course_name/_config.yml"

    # Remove backup files
    rm -f "$course_name/_lamd/_lamd.yml.bak" "$course_name/_config.yml.bak"
}

# Function to initialize git repository
init_git_repo() {
    local course_name="$1"
    cd "$course_name"
    rm -rf .git
    git init
    git add .
    git commit -m "Initial commit"
}

# Function to create GitHub repository
create_github_repo() {
    local course_name="$1"
    local github_username="$2"
    
    if command -v gh &> /dev/null; then
        gh repo create "$github_username/$course_name" --public --source=. --remote=origin
        git push -u origin main
    else
        echo -e "${RED}GitHub CLI not found. Please create the repository manually at:${NC}"
        echo "https://github.com/new"
        echo "Then run:"
        echo "git remote add origin https://github.com/$github_username/$course_name.git"
        echo "git push -u origin main"
    fi
}

# Main installation function
install_lamd_lecture() {
    echo -e "${BLUE}LaMD Lecture Template Installer${NC}"
    echo "This script will help you set up a new LaMD lecture course."
    echo

    # Get course information
    COURSE_NAME=$(get_user_input "Enter course name (e.g., machine-learning): " "test-course")
    FULL_NAME=$(get_user_input "Enter your full name: " "Test User")
    INSTITUTION=$(get_user_input "Enter your institution: " "Test University")
    WEBSITE_URL=$(get_user_input "Enter your website URL: " "http://example.com")
    GITHUB_USERNAME=$(get_user_input "Enter your GitHub username: " "testuser")

    # Create directory and clone template
    echo -e "\n${BLUE}Creating course directory and cloning template...${NC}"
    if [ -z "$TEST_MODE" ]; then
        git clone https://github.com/lawrennd/lamd-lecture.git "$COURSE_NAME"
    else
        create_directory_structure "$COURSE_NAME"
    fi

    # Update configuration files
    echo -e "\n${BLUE}Updating configuration...${NC}"
    update_config_files "$COURSE_NAME" "$FULL_NAME" "$INSTITUTION" "$WEBSITE_URL" "$GITHUB_USERNAME"

    # Initialize git repository
    echo -e "\n${BLUE}Initializing git repository...${NC}"
    init_git_repo "$COURSE_NAME"

    # Create GitHub repository
    if [ -z "$TEST_MODE" ]; then
        echo -e "\n${BLUE}Would you like to create a GitHub repository for this course? (y/n)${NC}"
        CREATE_GITHUB=$(get_user_input "> " "n")
        if [ "$CREATE_GITHUB" = "y" ]; then
            echo -e "\n${BLUE}Creating GitHub repository...${NC}"
            create_github_repo "$COURSE_NAME" "$GITHUB_USERNAME"
        fi
    fi

    echo -e "\n${GREEN}Installation complete!${NC}"
    echo -e "Your course is set up in the ${BLUE}$COURSE_NAME${NC} directory."
    echo -e "To start creating lectures, edit files in the ${BLUE}_lamd${NC} directory."
    echo -e "Run ${BLUE}maketalk${NC} to compile your lectures."
}

# Run installation if not being sourced for testing
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    install_lamd_lecture
fi 