Lets see how a TCP connection extablish and we send req and get response 

![image](https://github.com/user-attachments/assets/87060647-a5ea-42b5-8f4c-8632bb094a53)

In the above diagram 

There is two laptop with their ip adresses and they are connected with same router

192.168.1.4 ip adress laptop have a node js running on port 8080 server running ....

192.168.1.2 ip adress laptop want to give a get request to the node js server so it will give a get request to the node js server 

in the diagram below u can see the get request is sending to the node js server (in right side its the destination and left is source)

where,

     8992 --> The port generated for the client
     8080 --> server port
     192.168.1.4 --> server ip address
     192.168.1.2 --> client ip address
     GET/ --> Request type


And after that the request is acsessed by the node js server and suppose it will send a json in its response 

so the source will be the server now and destination will be client

![image](https://github.com/user-attachments/assets/dfe616c7-7a9a-448a-aa1a-049bbf554009)