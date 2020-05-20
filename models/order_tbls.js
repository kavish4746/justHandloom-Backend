const conn=require('../dbconn');

const orderschema=conn.Schema({
    o_id:Number,
    o_price:Number,
    o_date:Date,
    fk_emailid:String,
    fk_address:String,
    status:String,
})

module.exports=conn.model('order_tbls',orderschema);