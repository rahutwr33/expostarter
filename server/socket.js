const express = require('express'); // Fast, unopinionated, minimalist web framework for node.
const app = express(); // Initiate Express Application
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8085);


io.on('connection', function (socket) {
    console.log('A user connected');

 socket.broadcast.emit(' A user connected');


 setTimeout(function() {
    socket.send('Sent a message 4seconds after connection!');
 }, 4000);

 socket.emit('customevent', { description: 'A custom event named testerEvent!'});

 socket.on('disconnect', function () {
    console.log('A user disconnected');
    io.emit('A user disconnected');
  });


});