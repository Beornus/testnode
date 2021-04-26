const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const fs = require("fs");

const User = require("./js/user.js");

///// NETWORKING /////

// Serve files
fs.readdir("clientjs", function (err, files) {
    if(err) {
        return console.log('Unable to scan directory: '+err);
    }
    for(const filepath of files) {
        app.get("/clientjs/"+filepath, (req, res) => {
            res.sendFile(__dirname+"/clientjs/"+filepath);
        });
    }
});

// Serve index file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

let users = {};     // Dictionary of users

// On new connection
io.on('connection', (socket) => {
    console.log('a user connected');

    // Create a new user on server
    const user = new User();

    // Add new user to dict
    users[user.id] = user;

    // On user request UID
    socket.on('getuid', () => {
        // Send UID
        socket.emit('uid', { id: user.id });
    })

    // On disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected');
        delete users[user.id];
    });

});

// Listen for new connections
server.listen(3000, () => {
    console.log('listening on *:3000');
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

    // Get position (TEST)
    const pos = {
        x: 100 * Math.sin(ticks * 0.1),
        y: 100 * Math.cos(ticks * 0.1)
    };

    // https://socket.io/docs/v3/emit-cheatsheet/index.html
    // Send to all connected clients
    io.emit("pos", {
        pos: pos,
        tick: ticks,
        time: time
    });

}