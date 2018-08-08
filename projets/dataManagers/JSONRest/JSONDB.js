var Model=require("./Model.js");
var fs=require("fs");

class JSONDB{

    constructor(fileName){
        this.fileName=fileName;
    }

    getDBModel(modelName){
        try{
            return JSON.parse(fs.readFileSync(this.fileName+"."+modelName+".json"));
        }catch(err){
            return {};
        }
    }
    
    saveDBModel(modelName,data){
        fs.writeFileSync(this.fileName+"."+modelName+".json",JSON.stringify(data));
    }

    createModel(name,...propsName){
        return new Model(name,propsName,this);
    }
}

module.exports=JSONDB;