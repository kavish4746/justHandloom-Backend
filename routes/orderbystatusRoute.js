const express=require('express');
const schema=require('../models/order_tbls');
const router=express.Router();

router.get('/:status',function(req,res,next){
    schema.find({"status":req.params.status})
    .then(doc=>{
        if(doc.length>0)
        {
            res.json(doc);
        }
        else
        {
            res.json(doc);
        }
    })
}) 
module.exports=router;