const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Relay the offer to the specific receiver
  socket.on('offer', (offer) => {
    console.log('Received offer');
    socket.broadcast.emit('offer', offer);
  });

  // Relay the answer to the specific sender
  socket.on('answer', (answer) => {
    console.log('Received answer');
    socket.broadcast.emit('answer', answer);
  });

  // Handle ICE Candidate
  socket.on('candidate', (candidate) => {
    console.log('Received candidate');
    socket.broadcast.emit('candidate', candidate);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
