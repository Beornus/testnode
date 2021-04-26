const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('public')); // Public directory

const User = require("./private/User.js");

///// NETWORKING /////

// Serve index file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

let users = {};     // Dictionary of users

// On new connection
io.on('connection', (socket) => {

    // Create a new user on server
    const user = new User();

    console.log("New user connected (ID: "+user.id+")");

    // Add new user to dict
    users[user.id] = user;

    // On user request UID
    socket.on('getuid', () => {
        // Send UID
        socket.emit('uid', { id: user.id });
    })

    // On disconnect
    socket.on('disconnect', () => {
        console.log("User disconnected (ID: "+user.id+")");
        delete users[user.id];
    });

});

// Listen for new connections
server.listen(3000, () => {
    console.log('Listening on *:3000');
});

///// GAME LOOP /////
const targetTicksPerSecond = 60;
let ticks = 0;
let last = process.hrtime.bigint();
const start = process.hrtime.bigint();

// Execute update function (targetTicksPerSecond) times per second
setInterval(update, (1 / targetTicksPerSecond) * 1000);

function update() {

    const dtNano = Number(process.hrtime.bigint() - last);    // Get elapsed time in nanoseconds
    const dt = dtNano / 1_000_000_000;                              // Convert to seconds
    last = process.hrtime.bigint();                                 // Get new last time

    const time = Number(process.hrtime.bigint() - start) / 1_000_000_000; // Current time since start in seconds

    ticks++;    // Increment tick counter

    // https://socket.io/docs/v3/emit-cheatsheet/index.html
    // Send positions of all connected clients to all connected clients
    let snakes = [];
    for(const [uid, user] of Object.entries(users)) snakes.push(user.snake);
    io.emit("update", {
        snakes: snakes,
        tick: ticks,
        time: time
    });

}