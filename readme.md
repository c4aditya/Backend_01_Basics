it is the basics of the backend development were we lurn about - 
 1 - How to create the server.
 2 - File structire of the backend development. 
 3 - How to use postman.
 4 - How to use MongoDb. 


1 - Backend 
    it is the way of doning thing that is abstract form the user and only show the functions and working of the page.

how the links work
 a - It sends the HTTP request it is the protocal it help the retrive the data from the server it is also called the [client ] ----------------- [server]  client and the server interaction means client send some request  to the server and then server give the responce to the client as a [responce]. it not means that we can only make interaction with HTTP it is the another way for client server interection it is a standrad way.

# HTTP
When ever we use the HTTP protacal we have four type of request 

1 - GET   -  Fetch/retrive the date -- ex- user get the product details for flipkart 
2 - PUT   -  Update the data  ex- user add more quantity or update the address then PUTuse
3 - POST  -  Create a new Data and submit the data - ex-when user enter the new inforamtion  like add new items in cart or regestaratio for the new customer 
4 - DELETE-  Removing the  data ex- deleting exesting the data 

# Steps for creating the Servers

1 - Creating a server 

we use express.js for creating a server  express.js is the framework which help to iniseate the server. 

Step 1 - Create a new  file redierict the path to this file in terminal.  
Step 2 - open terminal init -y [it will create a packge.json].
Step 3 - Install express [npm i  express]
Step 4 - Create the file with some name ex- Server.js and write the code for creating the server 

# Use GET request 

1 creating the get request 

// importing express and initlize it in variable which name is express
const express  = require('express)

// when we call the express function , then it gives us the functionalites for creating the server and Express Applicaation it also provide the functionalites for handle the HTTP request 

cosnt app = express()

// app is the variable which helps us to create the rotes , listen servers  , addind middlewares on the server and start the server 

app.listen(3000 , ()=>{
console.log("the port is started on the server 3000")
})

// cereating the get request 
// it will take two parameters  1- routes , 2 - resquest and response 
app.get('/' , (req , res )=>{
    res.send("the the get request work properly")
})
