const mongoose = require("mongoose")
const usersSchema = new mongoose.Schema({
    username: type = String,
    password: type = String,


});
const Admindata = new mongoose.model("Admindata", usersSchema);
module.exports = Admindata