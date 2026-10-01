

#include<bits/stdc++.h>

using namespace std ;


class Objects{

private :

    string objPath ;

public :

    explicit Objects(const string& path) ;
    void writeObject(const string& hash, const string& type, const string& content) ;
    string readObject(const string& path) ;
};