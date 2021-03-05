const express = require('express')
const db = require('./config/db');
const app = express()
const PORT = 8000
const mongoose = require("mongoose")


app.use(express.json())
app.use(express.urlencoded({extended:true}));

const sales = require('./router/sales')

app.use('/sales',sales)
app.get("/", (req,res) => {
    res.send("Health is ok")
} )


app.listen(PORT,()=>{
    console.log('server started',PORT)
})

