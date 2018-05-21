import io from 'socket.io-client';

class Socket {
  constructor() {
    this.socket = undefined;
  }
  createSocket() {
    this.socket = io(
      'http://localhost:3001',
      {
        transports: ['websocket'],
        upgrade: false,
      },
    );
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
}

export const socket = new Socket();
export default {};
