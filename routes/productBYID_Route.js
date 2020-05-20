const express=require('express');
const schema=require('../models/product_tbls');
const router=express.Router();

router.get('/:_id',function(req,res,next){
    schema.find({"_id":req.params._id})
    .then(doc=>{
        if(doc.length>0)
        {
            res.json(doc);
        }
        else
        {
            console.log("Not Found");
        }
    })
}) 

router.put('/:_id',function(req,res,next){
    if(!req.params._id)
    {
        return res.status(400).send('_id is not get')
    }
    else
    {
        schema.findOneAndUpdate({_id:req.params._id},req.body,{new:true})
        .then(doc=>{
            res.json(doc);
        })
    }
})

router.delete('/:_id',function(req,res,next){
    if(!req.params._id)
    {
        return res.status(400).send('_id is not get')
    }
    else
    {
        schema.findOneAndDelete({_id:req.params._id})
        .then(doc=>{
            res.json(doc);
        })
    }
})

module.exports=router;