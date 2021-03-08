const express = require('express')
const db = require('./config/db');
const path = require("path")
const app = express()
const PORT = 8000
const hbs = require("hbs")
const mongoose = require("mongoose")

// const views = path.join(__dirname, "./views/navbar.html")

app.set("views",path.join(__dirname,"views"))
app.set("view engine", "hbs")


app.use(express.json())
app.use(express.urlencoded({extended:true}));

const sales = require('./router/sales')
const admin = require('./router/admin')

app.use('/sales',sales)
app.use('/',admin)
app.get("/", (req,res) => {
    res.render("navbar")
} );


app.listen(PORT,()=>{
    console.log('server started',PORT)
})



