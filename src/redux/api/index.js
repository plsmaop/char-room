import io from 'socket.io-client';

class Socket {
  constructor() {
    this.socket = undefined;
    this.name = '';
  }
  createSocket() {
    this.socket = io();
  }
  setUserName(name) {
    this.name = name;
  }
  emitUserName() {
    this.socket.emit('adduser', this.name);
  }
}

export const socket = new Socket();
export default {};
