class Model{
    constructor(name,propsName,DB){
        this.name=name;
        this.propsName=propsName;
        this.DB=DB;
    }


    getDataObject(){
        var data={};
        for(var key in this.propsName)data[this.propsName[key]]=null;
        return data;
    }

    logProps(){
        console.log("keys for "+this.name+"\n========");
        for(var key in this.propsName)console.log(this.propsName[key]);
    }

    create(){
        return new Instance(this);
    }

    hasProp(name){
        return this.propsName.indexOf(name)>-1;
    }

    hasPropOrError(name){
        if(!this.hasProp(name))throw new Error("property " + name + " doesn't exists on "+ this.name);
        else return true;
    }
}

module.exports=Model;