/*
TCP == transmission control protocol 
allow us to send information from one to another server by specifying the ip

PROS 
    1.Acknowledgement
    2.Guaranteed delivery
    3.Connection based ( To transfer data they need to establish a connection between client and server )
    4.Congestion Control (control traffic)
    5.ordered packets

CONS
    1.Larger Packets
    2.More bandwith (in 2g or 3g connection getting information is too much slow as the packets are larger)
    3.slower than udp
    4.stateful(server carries the information about connection if we shut down the server and restart it user cant resume its task)
    5.server memory (DOS)

*/

const net = require("net")

const server = net.createServer(socket =>{
    socket.write("Hello.") //when a user connectwe send them this message
    socket.on("data",data=>{
        console.log(data.toString())
    })
})

server.listen(8080)

//go to terminal and write => telnet 127.0.0.1 8080 
//if we kill the server then the all status will be end
