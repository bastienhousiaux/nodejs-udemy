require("./Model.js");

class Instance{
    constructor(model){
        this.model=model;
        this.data=this.model.getDataObject();
    }

    save(){
        
    }
    

    get(name){
        if(this.model.hasPropOrError(name))return this.data[name];
    }

    set(name,value){
        if(this.model.hasPropOrError(name))this.data[name]=value;
    }
}

module.exports=Instance;