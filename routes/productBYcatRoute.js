const express=require('express');
const schema=require('../models/product_tbls');
const router=express.Router();

router.get('/:fk_cat_id',function(req,res,next){
    schema.find({"fk_cat_id":req.params.fk_cat_id})
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

// router.post('/',function(req,res,next){
//     if(req.body.p_id)
//     {
//         const model=new schema(req.body);
//         model.save()
//         .then(doc=>{
//             res.json(doc);
//         })
//     }
// })


// router.delete('/:p_id',function(req,res,next){
//     if(!req.params.p_id)
//     {
//         return res.status(400).send('p_id is not get')
//     }
//     else
//     {
//         schema.findOneAndDelete({p_id:req.params.p_id})
//         .then(doc=>{
//             res.json(doc);
//         })
//     }
// })



// router.put('/:p_id',function(req,res,next){
//     if(!req.params.p_id)
//     {
//         return res.status(400).send('p_id is not get')
//     }
//     else
//     {
//         schema.findOneAndUpdate({p_id:req.params.p_id},req.body,{new:true})
//         .then(doc=>{
//             res.json(doc);
//         })
//     }
// })
module.exports=router;