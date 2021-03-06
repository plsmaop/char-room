import io from 'socket.io-client';

class Socket {
  constructor() {
    this.socket = undefined;
  }
  createSocket() {
    this.socket = io();
  }
  emitUserName(name) {
    this.socket.emit('add user', name);
  }
  createChatRoom(id, targetId) {
    this.socket.emit('create chat room', { id, targetId });
  }
  emitMsg(id, targetId, msg) {
    const msgPacket = {
      from: id,
      to: targetId,
      msg,
    };
    this.socket.emit('msg', msgPacket);
  }
  pong() {
    this.socket.emit('dickkk', 'pong');
    console.log('pong');
  }
}

export const socket = new Socket();
export default {};
