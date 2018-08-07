require("./Model.js");

class JSONDB{

    constructor(fileName){
        this.fileName=fileName;
    }

    createModel(name,...propsName,this){
        return new Model(name,propsName);
    }
}