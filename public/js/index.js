var socket = io();
socket.on("connect",()=>{
    console.log("New User Connected");
    socket.emit("createMessage",{
        "from":"Moji",
        "to":"Hi,there",
        "at":new Date().getTime()
    })
});
socket.on("disconnect",()=>{
    console.log("User Disconnect")
})
socket.on("newMessage",(data)=>{
    console.log("new message",data)
})
