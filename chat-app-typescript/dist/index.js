"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const socketio = require('socket.io');
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server);
// const io = socketio(server)
const port = process.env.PORT || 3000;
const publicDirectoryPath = path_1.default.join(__dirname, "../public");
app.use(express_1.default.static(publicDirectoryPath));
let count = 0;
io.on('connection', (socket) => {
    console.log('New websocket connection');
    socket.emit('Updatedcount');
});
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
