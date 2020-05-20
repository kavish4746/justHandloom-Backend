const express=require('express');
const schema=require('../models/contactus_tbls');
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


router.get('/:emailid',function(req,res,next){
    schema.find({"u_email":req.params.emailid})
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

router.post('/',function(req,res,next){
    console.log(req.body);
    if(req.body.user_emailid)
    {
        const model=new schema(req.body);
        model.save()
        .then(doc=>{
            res.json(doc);
        })
    }
})


router.put('/:_id',function(req,res,next){
    if(!req.params._id)
    {
        return res.status(400).send('_id is not get')
    }
    else
    {
        console.log(req.body);
        schema.findOneAndUpdate({_id:req.params._id},req.body,{new:true})
        .then(doc=>{
            res.json(doc);
        })
    }
})
module.exports=router;