const express = require('express');
const route = express.Router(); 
const accounts = require('./database');

route.get('/accounts',(req,res)=>{
    res.json({userData : accounts});
})

route.post('/accounts',(req,res)=>{
    const incomingAccount = req.body;
    accounts.push(incomingAccount);
    res.json(accounts);
})

module.exports = route;