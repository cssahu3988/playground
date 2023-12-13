const net = require('net');

// Create a server instance
const server = net.createServer((socket) => {
    console.log('Client connected');

    // Handle incoming data from client
    socket.on('data', (data) => {
        console.log('Data received from client:', data.toString());
    });

    // Handle client disconnection
    socket.on('end', () => {
        console.log('Client disconnected');
    });

    // Handle any errors
    socket.on('error', (err) => {
        console.error(err);
    });
});

// Listen on a specific IP address and port
const HOST = 'localhost'; // Your server's IP address
const PORT = 3000;

server.listen(PORT, HOST, () => {
    console.log(`Server listening on ${HOST}:${PORT}`);
});
