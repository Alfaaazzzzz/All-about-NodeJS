"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var socket_io_1 = require("socket.io");
var path_1 = __importDefault(require("path"));
var http_1 = __importDefault(require("http"));
// const socketio= require('socket.io')
var app = (0, express_1.default)();
var server = http_1.default.createServer(app);
var io = new socket_io_1.Server(server);
// const io = socketio(server)
var port = process.env.PORT || 3000;
var publicDirectoryPath = path_1.default.join(__dirname, "../public");
app.use(express_1.default.static(publicDirectoryPath));
var count = 0;
io.on('connection', function (socket) {
    console.log('New websocket connection');
    socket.emit('countUpdated');
});
server.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
// interface ServerToClientEvents {
//     noArg: () => void;
//     basicEmit: (a: number, b: string, c: Buffer) => void;
//     withAck: (d: string, callback: (e: number) => void) => void;
//   }
//   interface ClientToServerEvents {
//     hello: () => void;
//   }
//   interface InterServerEvents {
//     ping: () => void;
//   }
//   interface SocketData {
//     name: string;
//     age: number;
//   }
//   const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(server);
