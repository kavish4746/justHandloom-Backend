const conn=require('../dbconn');

const billdetailschema=conn.Schema({
   fk_bill_id:Number,
   fk_p_id:Number,
   fk_p_name:String,
   fk_p_qty:Number,
   fk_p_price:Number,
   c_price:Number,
})

module.exports=conn.model('billdetail_tbls',billdetailschema);