var Card=require("./Card.js");

class StandarCard extends Card{
    constructor(value,color){
        super();
        if(value<StandarCard.MIN_VALUE || value>StandarCard.MAX_VALUE)
            throw new Error("value " + value +" is not in standar card range");
        if(value<StandarCard.MIN_COLORS || value>StandarCard.MIN_COLORS)
            throw new Error("color " + value +" is not in standar card colors");
        this.value=value;
        this.color=color;
    }

    getColorFormatted(){
        return StandarCard.prototype.COLORS[this.color];
    }

    getValueFormatted(){
        return StandarCard.prototype.VALUES[this.value-StandarCard.prototype.MIN_VALUE];
    }

    toString(){
        return this.getValueFormatted()+" "+this.getColorFormatted();
    }


}

StandarCard.prototype.COLORS=["♠", "♣", "♥", "♦"];
StandarCard.prototype.VALUES=["2","3","4","5","6","7","8","9","10","J","Q","K","A","O"];

StandarCard.prototype.MIN_VALUE=2;
StandarCard.prototype.MAX_VALUE=15;

StandarCard.prototype.MIN_COLOR=0;
StandarCard.prototype.MAX_COLOR=3;

module.exports=StandarCard;