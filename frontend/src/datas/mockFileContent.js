

const fileContents = {
  "README.md": `# Version Control System

A Git-like version control system implemented in C++.

## Features

- Repository initialization
- Object storage
- Staging area
- Commits
- Branches
- File tracking
`,

  "src/main.cpp": `#include <iostream>
#include "repository.h"

int main() {
    std::cout << "MyGit Version Control System" << std::endl;

    return 0;
}
`,

  "src/repository.cpp": `#include "repository.h"

Repository::Repository(const std::string& path)
    : path(path) {
}

void Repository::init() {
    // Initialize repository
}

void Repository::add(const std::string& file) {
    // Add file to staging area
}

void Repository::commit(const std::string& message) {
    // Create commit object
}
`,

  "include/repository.h": `#ifndef REPOSITORY_H
#define REPOSITORY_H

#include <string>

class Repository {
public:

    Repository(const std::string& path);

    void init();

    void add(const std::string& file);

    void commit(const std::string& message);

private:

    std::string path;
};

#endif
`,

  "CMakeLists.txt": `cmake_minimum_required(VERSION 3.20)

project(MyGit)

set(CMAKE_CXX_STANDARD 17)

add_executable(
    mygit
    src/main.cpp
    src/repository.cpp
)
`,
};

export default fileContents;