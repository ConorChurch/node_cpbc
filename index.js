const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');

});
app.listen(3003);
//console.log("Server listening on port 3003");
