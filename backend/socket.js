const socketIo=require('socket.io');//importing socket.io library for real-time communication
const userModel=require('./models/user.model');
const captainModel=require('./models/captain.model');

let io;//here io is variable that will store the lot of information about the socket connection and will be used to send messages to specific clients based on their socket ID. It is initialized in the initializeSocket function when the server is created and will be used throughout the application to manage real-time communication between clients and the server.



function initializeSocket(server)
{
   io=socketIo(server,{
    cors:
    {
        origin: '*',
        methods:['GET','POST']
    }
   });
   io.on('connection',(socket)=>
{
    console.log(`Client connected:${socket.id}`);

    socket.on('join',async(data)=>{
        const {userId,userType}=data;

        if(userType==='user')
        {
            await userModel.findByIdAndUpdate(userId,{socketId:socket.id});
        }
        else if(userType==='captain')
        {
            await captainModel.findByIdAndUpdate(userId,{socketId:socket.id});
        }
    });
    socket.on('update-location-captain',async(data)=>
    {
        const {userId,location}=data;

        if(!location || !location.ltd || !location.lng)
        {
            return socket.emit('error',{message:'Invalid location data'});
        }

        await captainModel.findByIdAndUpdate(userId,{
            location:
            {
                ltd:location.ltd,
                lng:location.lng
            }
        });
    });
    socket.on('disconnect',()=>
    {
        console.log(`Client disconnected:${socket.id}`);
    });
});
}

const sendMessageToSocketId=(socketId,messageObject)=>
{
    console.log(messageObject);
    if(io)
    {
        io.to(socketId).emit(messageObject.event,messageObject.data);
    }
    else{
        console.log('Socket.io not initialized')
    }
}

module.exports={initializeSocket,sendMessageToSocketId};
