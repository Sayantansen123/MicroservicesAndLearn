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

The catch is this will be done when the both the laptop connected with the same router if they are in different connection the things will be different
and thats how the NAT (Network Adress Translation) Introduced , so that enables private IP networks to use the internet and cloud

-----------------------------------------------------------

Whats the use of the NAT

![image](https://github.com/user-attachments/assets/977ecd79-c5e5-443a-a9ee-fa01eff5395c)

So in the above diagram ...

We want to send request in the server which is connected with different server but we cant send the request to the adress because the request cant 
be send to the node js server

so we need to use a public ip to connect with the external node js server

Now , to connect with public ip we need to use routers public ip adress to connect with the node server


![image](https://github.com/user-attachments/assets/0ca50afd-0628-4334-9d72-c427f9979571)

Now this is how we use the public ip of router to send request to the node js server

From which ip adress request is coming , the public router ip and the in which ip the request is going is stored in a area (NAT)

