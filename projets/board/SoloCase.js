require("./Case.js");

class SoloCase extends Case{
    constructor(){
        this.content=null;
    }

    isOccupied(){
        return this.content != null;
    }

    setOccupant(occupant){
        this.occupant=occupant;
    }

    getOccupant(){
        return this.occupant;
    }
}

module.exports=SoloCase;