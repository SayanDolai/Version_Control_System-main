import path from 'path' 
import fs from 'fs/promises'
import crypto from 'crypto'

class Groot{
    constructor(repoPath = '.'){
        // after git init .git folder will be created
        this.repoPath = path.join(repoPath,'.groot')
        //this will create .git/object folder
        this.objectPath = path.join(this.repoPath,'object')
        // same for head .groot/HEAD
        this.headPath = path.join(this.repoPath,'HEAD')
        //to store the data at the staging area
        this.indexPath = path.join(this.repoPath,'index')
    }

    async init(){
        // create directory
        await fs.mkdir(this.objectPath,{recursive:true})
        try{
            //create HEAD file
            await fs.writeFile(this.headPath,'',{flag:'wx'})
            await fs.writeFile(this.indexPath,JSON.stringify([]),{flag:'wx'})
        }catch(error){
            console.log("already initialized .goot folder")
        }
    }
    hashObject(content){
        return crypto.createHash('sha1').update(content, 'utf-8').digest('hex') ;
    }
    async add(file){
        const fileData = await fs.readFile(file ,{encoding:'utf-8'})
        const fileHash = this.hashObject(fileData)
        console.log(fileHash)
        const hashedObjectPath = path.join(this.objectPath,fileHash) ;
        await fs.writeFile(hashedObjectPath,fileData)
        await this.updateStagingArea(file,fileHash)
        console.log(`${file} is successfully added`) 
    }

    async updateStagingArea(filePath, fileHash){
        const index = JSON.parse(await fs.readFile(this.indexPath, {encoding : 'utf-8'}))
        index.push({path : filePath , hash : fileHash})
        await fs.writeFile(this.indexPath , JSON.stringify(index))
    }

    async currentHEAD(){
        // HEAD points to the last commit 
        try{
            return await fs.readFile(this.headPath,{encoding:'utf-8'})
        }catch(error){
           return null ;
        }
    }

    async commit(message){
        // read the all data from staging area means index
        const index = JSON.parse(await fs.readFile(this.indexPath, {encodeing : 'utf-8'}))
        const parentCommit = await this.currentHEAD() ;
        // store the datas
        const commitDatas = {
            timestamp : new Date().toISOString(),
            message : message ,
            files : index ,
            parent : parentCommit ,
        }  
        const commitHash = this.hashObject(JSON.stringify(commitDatas)) 
        const commitPath = path.join(this.objectPath,commitHash)
        await fs.writeFile(commitPath,JSON.stringify(commitDatas))
        await fs.writeFile(this.headPath,commitHash)
        //clear the staging area
        await fs.writeFile(this.indexPath,JSON.stringify([])) 
        console.log(`commit successfully created : ${commitHash}`)
    }

    async log(){
        let currCommitHead = await this.currentHEAD() ;
        while(currCommitHead){
            const commitPath = path.join(this.objectPath, currCommitHead);
            const commitData = JSON.parse(await fs.readFile(commitPath, { encoding: "utf-8" }));
            console.log('---------------\n')
            console.log(`Commit : ${currCommitHead}\nData:${commitData.timestamp}\n\n`)
            currCommitHead = commitData.parent 
        }
    }
}
const groot = new Groot() 
await groot.init() ;
await groot.add('sample.txt')
await groot.commit('third commit')
await groot.log()