"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_io_client_1 = require("socket.io-client");
// const io= require('socket.io-client')
var socket = (0, socket_io_client_1.io)();
socket.on('countUpdated', function () {
    console.log('count has been updated');
});
