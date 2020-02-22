import socketIo from "socket.io";
import http from "http";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const httpServer = http.createServer(app);
const io = socketIo(httpServer);

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.static("static"));
app.io = io;

app.io.on("connection", function(socket) {
  console.log("a user connected");
  socket.on("init", function(data) {
    console.log(data.name);
    socket.emit("welcom", `hello! ${data.name}`);
  });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`running on ${process.env.SERVER_PORT}`);
});
