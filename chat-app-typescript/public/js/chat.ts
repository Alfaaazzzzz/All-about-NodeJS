import { io } from "socket.io-client"

// const io= require('socket.io-client')
const socket= io()

socket.on('countUpdated',()=>{
    console.log('count has been updated')
})

