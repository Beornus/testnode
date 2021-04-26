const Snake = require("./Snake");

class User {

    // ----- STATIC -----

    // MEMBERS
    static uid_counter = 0;

    // METHODS

    // ----- INSTANCE -----

    // MEMBERS
    id;         // Unique user ID
    snake;      // Snake Object

    // CONSTRUCTOR
    constructor() {

        this.id = User.uid_counter;     // New ID
        User.uid_counter++;             // Increment ID counter

        this.snake = new Snake();       // Create new Snake object

    }

    // METHODS

}

module.exports = User;