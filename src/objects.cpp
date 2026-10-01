


#include "../include/objects.h"

#include<bits/stdc++.h>
#include<filesystem>

using namespace std ;


namespace fs = filesystem;


Objects::Objects(const string& Path){

    Objects::objPath = (fs::path(Path) / "objects").string() ;
    fs::create_directories(objPath) ;
}

void Objects::writeObject(const string& hash, const string& type, const string& content){

    string hashPath = (fs:: path(objPath) / hash).string() ;
    ofstream file(hashPath) ;

    if(not file){
        throw runtime_error(
            "Failed to create object"
        );
    }

    file << type <<endl ; 
    file << content ;
    file.close() ;
}


string Objects::readObject(const string& hash){

    string hashPath = (fs:: path(objPath) / hash).string() ;
    
    ifstream file(hashPath) ;
    
    if(not file) {
        throw runtime_error(
            "File Not Found ...." 
        );
    }

    stringstream buffer;
    buffer << file.rdbuf();

    string content = buffer.str();

    file.close() ;

    return content ;
}

