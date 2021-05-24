const express = require('express');
const app = express();

//Start Server
app.listen(3000);

//Routes
app.get('/', (req,res)=>{
    res.send("Server Up")
})