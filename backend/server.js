const http=require('http');
const app=require('./app');
const port=process.env.PORT||3000;
const {initializeSocket}=require('./socket');//socket.io is used for persistent communication between client and server --here in this app Socket.io is used for the communication between user and captain
const server=http.createServer(app);

initializeSocket(server);
server.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);
}
);