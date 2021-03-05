const router = require("express").Router();
const bodyParser = require('body-parser');
const order = require('../model/salesSchema')

router.get("/", (req, res )=> {
    res.send("Sales page")
}),

router.post('/addOrder',async(req,res)=>{
    const orderexist = await order.findOne({_id:req.body.id});
    if (orderexist) return res.status(403).send("order already exits");
    const Order = new order({
        _id:req.body.id,
        pet_catogary:req.body.pet_catogary,
        pet_breed:req.body.pet_breed,
        order_customer_id: req.body.order_customer_id,
        order_Amount:req.body.order_Amount

    });
    try{
        const savedOrder=await Order.save();
        res.send(savedOrder);
    }catch (err){
        res.status(400).send(err.message);
    }
});

router.get('/:id',async(req,res)=>{
    const Order = await order.findById(req.params.id)
    // db.order.findById({"id":req.params.id})
    res.json(Order)
});
router.get('/:id',async(req,res)=>{
    const Order = await order.findById(req.params.id)
    // db.order.findById({"id":req.params.id})
    res.json(Order)
});
router.get('/:id',async(req,res)=>{
    const Order = await order.findById(req.params.id)
    // db.order.findById({"id":req.params.id})
    res.json(Order)
});
router.get('/:id',async(req,res)=>{
    const Order = await order.findById(req.params.id)
    // db.order.findById({"id":req.params.id})
    res.json(Order)
});

module.exports = router;
