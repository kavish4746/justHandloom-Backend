const express=require('express');
const schema=require('../models/cat_tbls');
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


router.get('/:cat_id',function(req,res,next){
    schema.find({"cat_id":req.params.cat_id})
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
    if(req.body.cat_id)
    {
        const model=new schema(req.body);
        model.save()
        .then(doc=>{
            res.json(doc);
        })
    }
})

router.put('/:cat_id',function(req,res,next){
    if(!req.params.cat_id)
    {
        return res.status(400).send('cat_id is not get')
    }
    else
    {
        schema.findOneAndUpdate({cat_id:req.params.cat_id},req.body,{new:true})
        .then(doc=>{
            res.json(doc);
        })
    }
})



router.delete('/:cat_id',function(req,res,next){
    if(!req.params.cat_id)
    {
        return res.status(400).send('cat_id is not get')
    }
    else
    {
        schema.findOneAndDelete({cat_id:req.params.cat_id})
        .then(doc=>{
            res.json(doc);
        })
    }
})
module.exports=router;