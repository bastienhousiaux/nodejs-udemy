var Instance=require("./Instance.js");

class Model{

    constructor(name,propsName,DB){
        this.name=name;
        this.propsName=propsName;
        this.propsName.unshift("id");
        this.DB=DB;
        this.instances=[];
        this.currId=this.updateCurrId();
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

    createInstance(props){
        var instance=new Instance(this);
        if(props){
            for(var key in props){
                instance.set(key,props[key]);
            }
        }
        return instance;
    }

    createInstanceFromJSON(props){
        var instance=new Instance(this,true);
        if(props){
            for(var key in props){
                instance.set(key,props[key]);
            }
        }

        if(props["id"]>this.currId)this.currId=props["id"]+1;
        return instance;
    }

    getById(id){
        this.DB.getDBModel(this.name);
    }

    hasProp(name){
        return this.propsName.indexOf(name)>-1;
    }

    hasPropOrError(name){
        if(!this.hasProp(name))throw new Error("property " + name + " doesn't exists on "+ this.name);
        else return true;
    }

    saveOne(instance){
        var model=this.DB.getDBModel(this.name);
        model[instance.get("id")]=instance.getData();
        this.DB.saveDBModel(this.name,model);
    }

    saveAll(){
        var model=this.DB.getDBModel(this.name);
        for(var i=0;i<this.instances.length;i++)model[instance.get("id")]=instance.getData();
        this.DB.saveDBModel(this.name,model);
    }

    getById(id){
        return this.DB.getDBModel(this.name)[""+id];
    }

    getAll(){
        var instances=[];
        var dbData=this.DB.getDBModel(this.name);
        for(var key in dbData){
            instances.push(this.createInstanceFromJSON(dbData[key]));
        }
        return instances;
    }
    /**
     * 
     * @param {*} props [{name:string,symbol:< > <= >= ==,value:any}]
     */
    getWhere(props){
        for(var key in dbData)this.hasPropOrError(props[key].name);
        var instances=[];
        var dbData=this.DB.getDBModel(this.name);
        for(var key in dbData){
            var currentDB=dbData[key];
            var isValid=true;
            for(var key2 in props){
               
                var current=props[key2];
                console.log(current);
                switch(current['symbol']){
                    case '<':
                        isValid= currentDB[current.name] < current.value; 
                        break;
                    case '>':
                        isValid= currentDB[current.name] > current.value; 
                        break;
                    case '==':
                        isValid= currentDB[current.name] == current.value; 
                        break;
                    case '<=':
                        isValid= currentDB[current.name] <= current.value; 
                        break;
                    case '>=':
                        isValid= currentDB[current.name] >= current.value; 
                        break;
                    default:
                        throw new Error("invalid comparison symbol " +current["symbol"]);
                }
                
            }
            if(isValid)instances.push(this.createInstanceFromJSON(currentDB));
        }
        return instances;
    }

    updateById(id,updates){

    }

    updateWhere(where,updates){

    }

    updateCurrId(){
        var dbData=this.DB.getDBModel(this.name);
        for(var key in dbData){
            if(parseInt(key)>this.currId)this.currId=parseInt(key)+1;
        }
    }

    orderBy(callback){
        this.instances.sort(callback);
    }
    
}
module.exports=Model;