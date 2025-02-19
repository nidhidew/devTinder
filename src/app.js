const express = require('express'); //coming from or refrencing from node_modules
const app = express(); //new express js application

app.get("/", (req,res,) => {
    res.send("hello from the main");
}); //request handler 

app.get("/test", (req,res) => {
    res.send("test for test route")
}); //request handler

app.listen(3000, () => {
    console.log("Server is running on port 3000...")
}); // server will listen to 3000 port number
