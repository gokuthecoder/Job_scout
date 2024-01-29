const express = require('express')
const app = express()
const db = require('./server/config/db')
const seed = require('./server/config/seed')
const mongoose = require('mongoose')
const cors = require('cors')
var path = require('path');

app.use(cors())

app.use(express.urlencoded({extended:false , limit:'50mb', parameterLimit:300000}))
app.use(express.static(path.join(__dirname,'/server/public')));

const adminRoutes = require('./server/Routes/adminRoutes')
const studentRoutes = require('./server/Routes/studentRoutes')

app.use('/admin',adminRoutes)
app.use('/user',studentRoutes)

app.use(cors())

app.get("/",(req,res)=>{
    res.send('DATABASE CONNECTED');
})

app.listen(4000,(err)=>{
    if(err){
        console.log('Error in server',err);
    }

    else
    console.log("Server is running");
})

