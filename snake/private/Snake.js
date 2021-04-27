class Snake {

    // ----- STATIC -----

    // MEMBERS

    // METHODS

    // ----- INSTANCE -----

    // MEMBERS
    pos;    // Game World position
    color;  // RGBA Color String

    // CONSTRUCTOR
    constructor() {

        //this.pos = {x: 0, y: 0};    // Set position to 0, 0

        // Give random position
        this.pos = {
            x: (-200 + (400 * Math.random())),
            y: (-200 + (400 * Math.random()))
        }

        // Give random color
        this.color = "rgba("
            +Math.floor(100 + 155*Math.random())+","
            +Math.floor(100 + 155*Math.random())+","
            +Math.floor(100 + 155*Math.random())+", 1)";

    }

    // METHODS

}
// function to change direction by pressing keys
function changeDirection(keyCode){
    switch (keyCode){
        // left arrow key
        case 37: {
            return { x: -1, y: 0};
        }
        // down arrow key
        case 38: {
            return { x: 0, y: -1};
        }
        // right arrow key
        case 39: {
            return { x: 1, y: 0};
        }
        // up arrow key
        case 40: {
            return { x: 0, y: 1};
        }
    }
}

function startGame(){

}

module.exports = {
    Snake,
    changeDirection,
    startGame,
}