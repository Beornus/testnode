class User {

    ///// STATIC /////
    static uid_counter = 0;

    ///// INSTANCE /////

    // Members
    id;

    constructor() {
        this.id = User.uid_counter;
        User.uid_counter++;
    }

}

module.exports = User;