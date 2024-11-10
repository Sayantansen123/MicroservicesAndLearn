/*
UDP == transmission control protocol 

PROS 
    1.smaller packets
    2.Less bandwith
    3.Faster than tcp
    4.stateless
    

CONS
    1.No acknowledgement(server dont tell data is recived or not)
    2.No guranteed delivery
    3.connectionless
    4.no congestion control
    5.no ordered packets
    6.security

*/

const dgram = require("dgram")
const socket = dgram.createSocket('udp4')

socket.on('message',(msg,rinfo)=>{
    console.log(`server got : ${msg} from ${rinfo.address}:${rinfo.port}`);
    
})

socket.bind(8081)

//echo "hi" | ncat -w1 -u 127.0.0.1 8081
//then a hi will be send to 