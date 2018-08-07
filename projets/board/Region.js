require("./Case.js");

class Region{
    constructor(name,nbCases){
        this.cases=new Array(nbCases);
        this.nbCases=nbCases;
    }

    addCase(_case){
        this.cases.push(_case);
    }
}

module.exports=Region;