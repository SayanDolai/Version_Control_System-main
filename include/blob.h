

#include<bits/stdc++.h>
#include "../include/objects.h"

using namespace std ;


class Blob{

private :
    Objects& obj ; 
    string calculateHash(const string& content) ;

public :

    explicit Blob(Objects& obj) ;
    string createBlob(const string& path) ;

};