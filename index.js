const WebSocket = require("ws");

const arrMsgs = ["Cool", "Smart", "Bad ASS"];

const ws = new WebSocket.Server({ port: 4333 });;
ws.on('connection', (connection) => {
    connection.send("Let's start conversation");
    connection.on("close", () => {
        console.log("Connection lost")
    });
    connection.on('message', (message) => {
        console.log('received: %s', message);
        connection.send(`You said ${message}. But I am saying you're ${arrMsgs[Math.floor(Math.random() * Math.floor(3))]}!!!`);
    });
});
