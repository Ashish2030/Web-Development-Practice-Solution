const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const app = express();
const server = http.Server(app);
const io = socketio(server);
const path = require('path');


app.use('/', express.static(path.join(__dirname, 'static')));

io.on('connection', (socket) => {
    console.log(`${socket.id} =====> Connected Successfully`);

    socket.emit('successfull', {
        msg:'Hello from the socket server'
    })

    socket.on('btn-clicked', () => {
        socket.emit('click-success');
    })

});



server.listen(8080, () => {
    console.log('Server running at port 8080');
})









