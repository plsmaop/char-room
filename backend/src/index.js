import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import connectHistoryApiFallback from 'connect-history-api-fallback';
import UserData from './userData';

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
  socket.emit('hello', 'Hello World!');
  socket.emit('user list', userPool);
  socket.on('adduser', (name) => {
    console.log(`add a user ${name}`);
    const user = new UserData(name, socket.id);
    userPool.push(user);
    io.emit('user list', userPool);
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
