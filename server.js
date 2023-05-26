const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");

const wss = new WebSocket.Server({ server: server }); //socketul foloseste acelasi port cu aplicatia express
//nu exista conflicte deoarece cele 2 folosesc protocoale diferite

const sensorData = {
  date: [
    "01-05-2023",
    "02-05-2023",
    "03-05-2023",
    "04-05-2023",
    "05-05-2023",
    "06-05-2023",
    "07-05-2023",
    "08-05-2023",
    "09-05-2023",
  ],
  temperature: [11, 23, 18, 15, 11, 8, 17, 21, 27],
};

wss.on("connection", function connection(ws) {
  ws.send(JSON.stringify(sensorData));
});

server.listen(3000, () => console.log("Lisening on port 3000"));
