const { request } = require('express');
const express = require('express');
const morgan = require('morgan');
const {v4:uuidv4} = require('uuid');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

morgan.token('id',(req)=>{
    return req.id;
})

const accessLogStream = fs.createWriteStream(path.join(__dirname,'access.log'),{flags:'a'});

morgan.token('param',(req,res,param)=>{
    return 'userToken';
})

const assignid = (req,res,next)=>{
    req.id = uuidv4();
    next();
}

app.use(assignid);

// app.use(morgan(':id :param :method :status :url "HTTP/:http-version"'));

// app.use(morgan(':id :param :method :status :url "HTTP/:http-version"',{stream:accessLogStream}));

app.get('/',(req,res)=>{
    res.end('Morgan Logger App');
})

app.listen(port,()=>console.log('hey,the server has started.'));
