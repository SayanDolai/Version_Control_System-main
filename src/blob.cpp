

#include "../include/blob.h"
#include <filesystem>
#include <bits/stdc++.h>

using namespace std;

namespace fs = filesystem;

Blob::Blob(Objects &obj) : obj(obj) {};

string Blob::calculateHash(const string &content){

    size_t value = hash<string>{}(content);
    return to_string(value) ;
}


string Blob :: createBlob(const string& path){
    
    ifstream file(path) ;

    if(not file){
        throw runtime_error(
            "file not found"
        );
    }

    // read the file
    stringstream buffer ;
    buffer << file.rdbuf() ;

    string contents = buffer.str() ;
    file.close() ;

    // calculate hash 
    string hash = Blob::calculateHash(contents) ;

    // store it
    Blob::obj.writeObject(hash,"blob",contents) ;

    return hash ;
}
