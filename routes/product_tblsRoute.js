const express=require('express');
const schema=require('../models/product_tbls');
const router=express.Router();
let multer  = require('multer');
let path = require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images/products/');
    },
    filename: (req, file, cb) => {
    x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
    });
    var upload = multer({storage: storage});


router.get('/',function(req,res,next){
    schema.find(function(err,doc){
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


router.get('/:p_id',function(req,res,next){
    schema.find({"p_id":req.params.p_id})
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

router.post('/',upload.single('p_img'),(req,res)=>{
    
    if(req.body.p_id)
    {
        const model=new schema(
            {
                p_id:req.body.p_id,
                p_name:req.body.p_name,
                p_des:req.body.p_des,
                p_price:req.body.p_price,
                p_qty:req.body.p_qty,
                fk_cat_id:req.body.fk_cat_id,
                p_img:req.file.filename,
                buffer_stock:req.body.buffer_stock
            }
        );
        model.save()
        .then(doc=>{
            res.json(doc);
        })
    }
})

router.delete('/:p_id',function(req,res,next){
    if(!req.params.p_id)
    {
        return res.status(400).send('p_id is not get')
    }
    else
    {
        schema.findOneAndDelete({p_id:req.params.p_id})
        .then(doc=>{
            res.json(doc);
        })
    }
})



router.put('/:p_id',function(req,res,next){
    if(!req.params.p_id)
    {
        return res.status(400).send('p_id is not get')
    }
    else
    {
        schema.findOneAndUpdate({p_id:req.params.p_id},req.body,{new:true})
        .then(doc=>{
            res.json(doc);
        })
    }
})
module.exports=router;