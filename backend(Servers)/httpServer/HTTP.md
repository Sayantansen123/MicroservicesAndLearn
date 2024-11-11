HTTP = Hyper Text Transfer Protocol

client ==> Browser, python or js code , or any app that make http request

server ==> HTTP web server, e.g. Apache Tomcat , IIS ,Nodejs ,Python Tornado 

HTTP  ===> 

           2. URL
           
           3. Headers
           
           4. Body

           5. Methods

HTTP RESPONSE ==> 

                  1.Status Code 
                  
                  2.Headers
                  
                  3.Body

in browser in devloper tools inside network section u can see how much request is sended when u go to a url

Create a http server -->

1.to create a http server u must install node js and install http-server

2.then create a folder and create a html file

3.to run the html file on a port 

4.just go to terminal and navigate to the folder where the html file is

5.then in terminal write -- http-server .

HTTP 1.0 

   ![http1](https://github.com/user-attachments/assets/abeed719-2249-4a72-9300-64e6cfabf9b7)

   This is the first version of http ... it uses tcp call

   whenever we want to get any request like index.html or any image we need to give a request for each everytime to get a respose

   1.New TCP connection with each request

   2.Slow

   3.Buffering

HTTP 1.1

   1.Persisted TCP connection (dont closes the tcp connection after each call)

   2.Low latency

   3.Streaming with chunk transfer (if u request a image it loads in part by part)

   4.Pipelining (disabled by default) (we can send all the get request together)