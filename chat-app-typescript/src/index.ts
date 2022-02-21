import express from 'express'
import {Server} from 'socket.io'
import path from 'path'
import http from 'http'
// const socketio= require('socket.io')

const app= express()
const server= http.createServer(app)
const io = new Server(server)
// const io = socketio(server)
const port = process.env.PORT || 3000;

const publicDirectoryPath= path.join(__dirname,"../public")

app.use(express.static(publicDirectoryPath));

let count=0

io.on('connection',(socket)=>{
    console.log('New websocket connection')

    socket.emit('countUpdated')

})

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
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