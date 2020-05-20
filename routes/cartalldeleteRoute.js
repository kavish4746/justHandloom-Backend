const express=require('express');
const schema=require('../models/cart_tbls');
const router=express.Router();

router.delete('/:fk_emailid',function(req,res,next){
    if(!req.params.fk_emailid)
    {
        return res.status(400).send('fk_emailid is not get')
    }
    else
    {
        schema.deleteMany({fk_emailid:req.params.fk_emailid})
        .then(doc=>{
            res.json(doc);
        })
    }
})

module.exports=router;