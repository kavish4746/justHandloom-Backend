let express = require('express');
let order = require('../models/order_tbls');
let suborder = require('../models/suborder_tbls');
let router = express.Router();

router.get('/:fk_emailid/:status',(req,res)=>{
    order.aggregate([
        {$match:{"status":req.params.status,"fk_emailid":req.params.fk_emailid}},
        {
            $lookup:{
                from:"suborder_tbls",
                localField:"o_id",
                foreignField:"fk_o_id",
                as:"joindata",
            }
        },
     ]).then(doc=>{
        res.json(doc);
    }).catch(err=>{
        res.json(err);
    })
})
module.exports = router;