// importing the express js freamwork 
const express = require('express');
const app = express();
// body parser 
// basically we use body paerser for geting the data from the PUT request ki body se 
const bodyParser = requer('body-parser')
// yha pe jashon data pass kr ke hum request ki body me add kr rhe hai 
app.use(bodyParser.json());
// listen is the express.js function which allow to start the server 

app.listen(3000 , ()=>{
    console.log("the server is start at port no 3000")
})

// to see on the browser 

//create the route page 

app.get('/' , (req , res)=>{
res.send("hii");
})

app.post('/cars', (req ,res) =>{
    res.send("this is the cars part ")
})