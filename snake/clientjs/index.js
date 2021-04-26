import { Input } from "./input.js";

///// SETUP /////

// Create input event handler
Input.init();

// Create canvas
const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Get drawing context
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = true;
// Append canvas to body
const body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

// Storing a position sent by server
let position = {x: 0, y: 0};

///// NETWORKING /////
let socket = io('http://localhost:3000');

let uid = null;
// On connection to server
socket.on("connect", () => {

    // Request ID from server
    socket.emit("getuid");
});

// On recieving ID
socket.on("uid", (data) => {
    if(!uid && data.id) {   // If ID is not assigned and ID from server is valid
        uid = data.id;      // Assign new ID
        start();            // Start frame loop
    }
})

// On position update
let lastPosTick = -1;
socket.on("pos", (data) => {

    if(data.tick > lastPosTick) { // If the message is newer than the last recieved
        position = data.pos;        // Set position
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
    ctx.fillStyle = "rgba(0, 0, 0, 1)";               // Set context fill color to black
    ctx.fillRect(0, 0, canvas.width, canvas.height);  // Fill a rectangle covering entire screen

    // Draw a circle at position sent by server
    ctx.translate(canvas.width / 2, canvas.height / 2);           // Move drawing context to center of screen
    const circle = new Path2D();                                  // Create path object
    circle.arc(position.x, position.y, 10, 0, 2*Math.PI, false);  // Draw circle to path object
    ctx.fillStyle = "rgba(255, 0, 0, 1)";                         // Set context fill color to red
    ctx.fill(circle);                                             // Fill the circle
    ctx.translate( - (canvas.width / 2), - (canvas.height / 2) ); // Move drawing context back

    ////////////////////

    window.requestAnimationFrame(frame); // Request new frame
}

// "Loading screen"
// Black fill
ctx.fillStyle = "rgba(0, 0, 0, 1)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
// Text
ctx.fillStyle = "rgba(255, 255, 255, 1)";
ctx.font = "20px Courier New";
ctx.textAlign = "center";
ctx.fillText("Connecting to server...", canvas.width / 2, canvas.height / 2);
