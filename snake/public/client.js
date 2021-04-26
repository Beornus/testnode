import { Input } from "./js/Input.js";
import { Graphics } from "./js/Graphics.js";

///// SETUP /////

// Create input event handler
Input.init();

// Create canvas and context
Graphics.init();

///// NETWORKING /////
let socket = io();

let uid = null;

// On recieving ID
socket.on("uid", (data) => {
    if(!uid && data.id) {   // If ID is not assigned and ID from server is valid
        uid = data.id;      // Assign new ID
        start();            // Start frame loop
    }
});

// On connection to server
socket.on("connect", () => {

    // Request ID from server
    socket.emit("getuid");
});

// On game update
let lastPosTick = -1;
let snakes = [];
socket.on("update", (data) => {

    if(data.tick > lastPosTick) { // If the message is newer than the last recieved

        snakes = data.snakes;

        lastPosTick = data.tick;    // Set last tick to this message's tick
    }

});

///// GAME LOOP /////

function start() {
    requestAnimationFrame(frame); // Request the first frame
}

let last = 0;
function frame(timestamp) {

    const dt = (timestamp - last) / 1000; // Get elapsed time
    last = timestamp;                     // Get new last time

    ///// Do stuff /////

    if(Input.Key.W) {
        console.log("TEST");
    }

    // Clear canvas
    Graphics.clear();

    // Draw all snakes
    Graphics.center({x: 0, y: 0});

    for(const snake of snakes) {
        Graphics.drawCircle(snake.pos, 10, snake.color);
    }

    ////////////////////

    window.requestAnimationFrame(frame); // Request new frame
}

///// OTHER /////

// Draw loading screen while waiting for server
Graphics.drawLoadingScreen("Connecting to server");
