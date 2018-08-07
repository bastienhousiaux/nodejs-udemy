require("./Region.js");

class Board{
    contructor(){
        this.regions=[];
    }

    addRegion(region){
        this.regions.push(region);
    }
}

module.exports=Board;