import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import UserData from './userData';

// config
const backend = express();
const server = http.Server(backend);
const io = new SocketIO(server);
const port = process.env.PORT || 3001;

// user data
let userPool = [];
const robot = new UserData('Badass Robot', 'suck');
userPool.push(robot);

// chat history
const chatHistory = {};

// socket.io
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('socket id', socket.id);
  console.log(socket.id);
  socket.emit('user list', userPool);

  socket.on('dickkk', () => {
    console.log('pong');
    socket.emit('dickkk');
  });

  // add new user
  socket.on('add user', (name) => {
    console.log(`add a user ${name}, id: ${socket.id}`);
    const user = new UserData(name, socket.id);
    userPool.push(user);
    io.emit('user list', userPool);
    // socket.handshake.session.save();
  });

  // load chat history
  socket.on('create chat room', (packet) => {
    const { id, targetId } = packet;
    console.log(`${id} wants to chat with ${targetId}`);
    const chatHistoryEntry1 = id + targetId;
    const chatHistoryEntry2 = targetId + id;
    if (typeof (chatHistory[chatHistoryEntry1]) === 'undefined') {
      if (typeof (chatHistory[chatHistoryEntry2]) !== 'undefined') {
        chatHistory[chatHistoryEntry1] = chatHistory[chatHistoryEntry2];
      }
      else {
        const chatHistryArray = [];
        chatHistory[chatHistoryEntry1] = chatHistryArray;
        chatHistory[chatHistoryEntry2] = chatHistryArray;
      }
    }
    socket.emit('load chat history', chatHistory[chatHistoryEntry1]);
  });

  // deliver msg
  socket.on('msg', (msgPacket) => {
    const { from, to } = msgPacket;
    const chatHistoryEntry1 = from + to;
    const chatHistoryEntry2 = to + from;
    if (typeof (chatHistory[chatHistoryEntry1]) === 'undefined') {
      if (typeof (chatHistory[chatHistoryEntry2]) !== 'undefined') {
        chatHistory[chatHistoryEntry1] = chatHistory[chatHistoryEntry2];
      }
      else {
        const chatHistryArray = [];
        chatHistory[chatHistoryEntry1] = chatHistryArray;
        chatHistory[chatHistoryEntry2] = chatHistryArray;
      }
    }
    chatHistory[chatHistoryEntry1].push(msgPacket);
    io.to(from).emit('msg', msgPacket);
    console.log(chatHistory[chatHistoryEntry1]);
    console.log(chatHistory[chatHistoryEntry2]);
    if (to === 'suck') {
      const badAssPacket = {
        from: 'suck',
        to: from,
        msg: 'You Suck!!',
      };
      io.to(from).emit('msg', badAssPacket);
      chatHistory[chatHistoryEntry1].push(badAssPacket);
      return;
    }
    io.to(to).emit('msg', msgPacket);
  });

  socket.on('disconnect', () => {
    console.log('a user go out');
    userPool = userPool.filter(user => user.id !== socket.id);
    io.emit('user list', userPool);
  });
});

// backend.use('/', (req, res) => res.sendFile(__dirname+'/build/index.html'));
// backend.use(express.static(__dirname+'/build'));

server.listen(port, () => console.log(`listen ${port}`));
