const conn=require('../dbconn');

const suborderschema=conn.Schema({
   fk_o_id:Number,
   fk_p_id:Number,
   fk_p_name:String,
   fk_p_qty:Number,
   fk_p_price:Number,
   c_price:Number,
})

module.exports=conn.model('suborder_tbls',suborderschema);