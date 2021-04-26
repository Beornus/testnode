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

module.exports = Snake;