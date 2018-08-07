var StandardCard=require("./StandardCard.js");

class CardDeck{
    constructor(start,end){
        this.cards=[];
        
        if(!start)start=StandardCard.prototype.MIN_VALUE;
        if(!end)end=StandardCard.prototype.MAX_VALUE-1;
        console.log("var j="+StandardCard.prototype.MIN_COLOR+";j<="+StandardCard.prototype.MAX_COLOR+";j++);");
        for(var i=start;i<=end;i++){
            for(var j=StandardCard.prototype.MIN_COLOR;j<=StandardCard.prototype.MAX_COLOR;j++){
                this.cards.push(new StandardCard(i,j));
            }
        }
    }

    toString(){
        var chain="";
        for(var i=0;i<this.cards.length;i++){
            chain+=this.cards[i].toString()+"\n";
        }
        return chain;
    }
}

module.exports=CardDeck;