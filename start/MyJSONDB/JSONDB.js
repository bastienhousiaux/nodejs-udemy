const fs=require("fs");

class JSONDB{


    constructor(fileName){
        this.fileName=fileName;
        this.getDB();
        this.models=[];
    }
    
    getDB(){
        try{
            this.db=fs.readFileSync(this.fileName+".json");
        }catch(err){
            this.db={};
        }
    }

    saveDB(){
        // fs.writeFileSync(this.fileName+".json",JSON.stringify(this.db));
        // for(var i=0)
    }

    createModel(name,columns){
        var model=new JSONModel(name,columns,this);
        this.models.push(model);
        return model;
    }


}

class JSONModel{
    
    constructor(name,columns,jsonDB){
        this.name=name;
        this.columns=columns;
        this.jsonDB=jsonDB;
        if(!JSONModel.currId)JSONModel.currId=0;
        this.jsonDB.db[this.name]=[];
    }

    

    create(values={}){
        for(var i=0;i<this.columns.length;i++){
            if(values[this.columns[i]]===undefined)return false;
        }
        values.id=JSONModel.currId++;
        this.jsonDB.db[this.name].push(values);
    }

    getAll(){
        return this.jsonDB.db[this.name];
    }

    getIndexOfId(id){
        return this.getAll().findIndex((value,i)=>{
            return value.id===id;
        })
    }

    getById(id){
        return this.getAll().find((obj,i)=>{
            return obj.id===id;
        });
    }

    update(id,values){
        var obj=this.getById(id);
        for( var value in values){
            obj[value]=values[value];
        }
    }

    delete(id){
        var indexDelete=this.getIndexOfId(id);
        if(indexDelete)this.getAll().splice(indexDelete,1);
    }

    toJSON(){
        return JSON.stringify(this);
    }
}



// class JSONEntry{
//     id;

// }

module.exports=JSONDB;