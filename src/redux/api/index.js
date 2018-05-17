import io from 'socket.io-client';

class Socket {
  constructor() {
    this.socket = undefined;
  }
  createSocket() {
    this.socket = io();
  }
  setUserName(name) {
    this.name = name;
  }
  emitUserName(name) {
    this.socket.emit('adduser', name);
  }
}

export const socket = new Socket();
export default {};
