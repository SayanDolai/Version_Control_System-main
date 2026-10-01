#ifndef INDEX_H
#define INDEX_H

#include <bits/stdc++.h>

using namespace std ;

class Index{
private:
    string indexPath;

public:
    explicit Index(const string& path);

    void add(const string& filePath,const string& blobHash);

    void save();

    void load();
};

#endif