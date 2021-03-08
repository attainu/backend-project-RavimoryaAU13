const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const AdminData = require("../model/adminSchema")
router.get("/admin", (req, res) => {
    res.render('admin.hbs')

})
router.post("/admin", async (req, res) => {
    try {
        
        var AdminName = req.body.AdminName
        var password = req.body.password
        console.log(password);
        const user = await AdminData.findOne({ password: password })
        if (!user) {
            res.send("Invalid Credentials")
        } else {
            res.send("Welcome Admin")
        }
    } catch (err) {
        console.log(err)
    }


})


module.exports = router