const path = require("path");
const publicPath = path.join(__dirname,"../public");
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const port = process.env.PORT || 3000;
 
const app=  express();
app.use( express.static(publicPath));
var server = http.createServer(app);
var io= socketIO(server);
io.on("connection",(socket)=>{
    console.log("User Connected");

    socket.on("disconnect",()=>{
        console.log("User Disconnected");
    })
    socket.on("createMessage",(message)=>{
        //io.emit("newMessage",message);
        socket.broadcast.emit("newMessage", message)
    })
    
})

server.listen(port,()=>{
    console.log(`Start in Port ${port}`)
})