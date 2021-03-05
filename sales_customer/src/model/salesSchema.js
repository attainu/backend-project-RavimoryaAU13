var mongoose = require('mongoose');

var saleSchema = new mongoose.Schema({
    _id: Number,
    pet_catogary:String,
    pet_breed:String,
    order_customer_id: Number,
    order_Amount:Number,
    order_date:{
        type:Date,
        default:Date.now(),
    },
});

const Order = mongoose.model('Order',saleSchema);
module.exports = Order;
