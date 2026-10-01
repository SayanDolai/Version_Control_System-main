#include "../include/Groot.h"

#include <filesystem>
#include <fstream>
#include <iostream>

using namespace std ;


namespace fs = filesystem;


// Constructor
Groot::Groot(const string& path){
    repoPath = (fs::path(path) / ".groot").string();

    objectPath = (fs::path(repoPath) / "objects").string();

    refsPath = (fs::path(repoPath) / "refs" / "heads").string();

    headPath = (fs::path(repoPath) / "HEAD").string();

    indexPath = (fs::path(repoPath) / "index").string();
}


// Initialize Groot repository
void Groot::init(){

    // Check if repository already exists
    if (fs::exists(repoPath)){
        std::cout << "Groot repository already initialized.\n";
        return;
    }

    // Create .groot/objects
    fs::create_directories(objectPath); 

    // Create .groot/refs/heads
    fs::create_directories(refsPath);

    // Create HEAD
    ofstream headFile(headPath);

    headFile << "ref: refs/heads/main\n";

    headFile.close();


    // Create index
    std::ofstream indexFile(indexPath);

    indexFile << "[]";

    indexFile.close();


    cout << "Initialized empty Groot repository.\n";
}