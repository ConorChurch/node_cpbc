const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');

});
app.listen(3013);
console.log("Server listening on port 3013");
