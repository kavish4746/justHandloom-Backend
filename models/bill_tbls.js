const conn=require('../dbconn');

const billschema=conn.Schema({
    bill_id:Number,
    o_price:Number,
    o_date:Date,
    fk_emailid:String,
    fk_address:String,
})

module.exports=conn.model('bill_tbls',billschema);