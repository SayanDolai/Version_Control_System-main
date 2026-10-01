#ifndef GROOT_H
#define GROOT_H

#include <bits/stdc++.h>

using namespace std ;

class Groot{
private:

    // Path to .groot directory
    string repoPath;

    // .groot/objects
    string objectPath;

    // .groot/refs/heads
    string refsPath;

    // .groot/HEAD
    string headPath;

    // .groot/index
    string indexPath;


public:

    // Constructor
    explicit Groot(const string& path = ".");


    // Initialize repository
    void init();
};

#endif