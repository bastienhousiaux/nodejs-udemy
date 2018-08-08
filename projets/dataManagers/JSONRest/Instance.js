var Model=require("./Model.js");

class Instance{
    constructor(model,fromDB){
        this.model=model;
        this.data=model.getDataObject();
        if(!fromDB)this.data.id=this.model.currId++;
        model.instances.push(this);
    }

    getData(){
        return this.data;
    }

    save(){
        this.model.saveOne(this);
    }
    

    get(name){
        if(this.model.hasPropOrError(name))return this.data[name];
    }

    set(name,value){
        if(this.model.hasPropOrError(name))this.data[name]=value;
    }

    populateById(id){
        
    }
}

module.exports=Instance;