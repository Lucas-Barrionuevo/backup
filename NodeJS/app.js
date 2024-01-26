const express = require('express')
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.get('/get', (req, res,next)=> {
    res.send('Hola mundo desde un get')
});
app.post('/post',(req,res,next)=>{
    const body = req.body;
    console.log(body);
    res.send('Hola mundo desde un post')
});
app.put('/put',(req,res,next)=>{
    res.send('Hola mundo desde un put')
});
app.delete('/delete',(req,res,next)=>{
    res.send('Hola mundo desde un delete')
});
app.listen(8080)