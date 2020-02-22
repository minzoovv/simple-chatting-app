import socketIo from 'socket.io';
import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));

const server = http.createServer(app);
const io = socketIo(server);

io.origins('https://localhost:3000');

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('init', function(data) {
    console.log(data.name);
    socket.emit('welcome', `hello! ${data.name}`);
  });
});

server.listen(4000, () => {
  console.log('소켓은 잘도도네 돌아가네');
});
