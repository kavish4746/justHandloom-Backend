const express=require('express');
const schema=require('../models/order_tbls');
const router=express.Router();

router.get('/',function(req,res,next){
    schema.find(function(err,doc){
        if(doc.length>0)
        {
            res.json(doc);
        }
        else
        {
            console.log('error');
        }
    })
}) 


router.get('/:_id',function(req,res,next){
    schema.find({"_id":req.params._id})
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

router.post('/',function(req,res,next){ 
        console.log(req.body) ;
        const model=new schema(req.body);
        model.save()
        .then(doc=>{
            res.json(doc);
        })
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



router.put('/',function(req,res,next){
    if(!req.body._id)
    {
        return res.status(400).send('_id is not get')
    }
    else
    {
        schema.findOneAndUpdate({_id:req.body._id},req.body,{new:true})
        .then(doc=>{
            res.json(doc);
        })
    }
})
module.exports=router;