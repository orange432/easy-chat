import dotenv from 'dotenv';
dotenv.config({path: '../.env'});
import app from './app';
import http from 'http';
const server = http.createServer(app);
import { Server } from 'socket.io';
const io = new Server(server,{
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

io.on('connection', (socket: any)=>{
  console.log('CONNECTION MADE!');
  socket.on('message',(args: any)=>{
    const { name, message } = args;
    console.log(name,message);
    io.emit('message',{name,message})
  })
  socket.on('join',(args: any)=>{
    console.log(socket.request.connection.remoteAddress)
    socket.join(args.userId);
  })
})

const PORT = process.env.PORT || 8000;

server.listen(PORT,()=>console.log(`App listening at http://localhost:${PORT}`));