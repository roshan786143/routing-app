const express = require('express');
const app = express();
const route = require('./router');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
const port = process.env.port || 3000;

app.get('/',(req,res)=>{
    res.end('routing app');
})

app.use('/api',route);

app.listen(port,()=>console.log('hey,server is Up...'));