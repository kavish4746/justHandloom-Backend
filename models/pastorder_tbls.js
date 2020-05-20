const conn=require('../dbconn');

const pastorderschema=conn.Schema({
    emailid:String,
    name:String,
    price:Number,
    qty:Number,
    date:Date,
    status:String,
})

module.exports=conn.model('pastorder_tbls',pastorderschema);