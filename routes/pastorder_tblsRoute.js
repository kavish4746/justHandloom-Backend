const express=require('express');
const schema=require('../models/pastorder_tbls');
const router=express.Router();

router.get('/:emailid/:status',function(req,res,next){
    schema.find({"emailid":req.params.emailid,"status":req.params.status})
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