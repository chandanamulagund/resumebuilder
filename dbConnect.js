const mongoose = require('mongoose');

const URL = 'mongodb+srv://Webtech:chandu3789@cluster0.zfk81qu.mongodb.net/ResumeBuilder'

mongoose.connect(URL,{useUnifiedTopology:true,useNewURLParser:true})

const connection = mongoose.connection

connection.on('connected', ()=>{
    console.log('Mongo DB Connectionn Successfull')
})

connection.on('error', (error)=>{
    console.log('error')
})