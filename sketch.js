//all the objects that we require for this game
 var gameState = 0;
 var playerCount;
 var database;
 var form, player, game;

function setup(){

//for the canvas
   createCanvas(500,500);
//for fetching into the code
    database = firebase.database();


game = new Game();
game.getState();
game.start()


}

function draw(){
//for the bg color


    
}
