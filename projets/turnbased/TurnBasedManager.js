var Player=require("./Player.js");

class TurnBasedManager{
    constructor(){
        this.players=[];
        this.currentPlayerTurn=0;
    }

    addPlayer(player){
        this.players.push(player);
    }

    nextPlayerTurn(){
        this.nextPlayerTurn=(this.nextPlayerTurn<this.players.length)?++this.nextPlayerTurn:0;
        this.players[i].play();
    }
}

module.exports=TurnBasedManager;