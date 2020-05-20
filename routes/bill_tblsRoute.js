const express=require('express');
const schema=require('../models/bill_tbls');
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

module.exports=router;