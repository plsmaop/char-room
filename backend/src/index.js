import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import connectHistoryApiFallback from 'connect-history-api-fallback';

// config
const backend = express();
const server = http.Server(backend);
const io = new SocketIO(server);
const port = process.env.PORT || 3001;

// user data
const userPool = [];

// socket.io
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('adduser', (name) => {
    console.log(`add a user ${name}`);
    userPool.push(name);
    socket.broadcast.emit('newuser', name);
  });

  socket.on('disconnect', () => {
    console.log('a user go out');
  });
});

backend.use('/', (req, res) => {
  console.log('connect in');
  res.json({ text: 'GET!!!' });
});

backend.use('/', connectHistoryApiFallback());

server.listen(port, () => console.log(`listen ${port}`));
