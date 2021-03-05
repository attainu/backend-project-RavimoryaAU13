// connected with DB
var mongoose = require('mongoose');
// aman_dubey is db name
module.exports =mongoose.connect('mongodb://localhost:27017/aman_dubey',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("connected to mongodb");

}).catch((e)=>{
    console.log('no connection')
})





