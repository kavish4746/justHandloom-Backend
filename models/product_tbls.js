const conn=require('../dbconn');

const productschema=conn.Schema({
    p_id:Number,
    p_name:String,
    p_des:String,
    p_price:Number,
    p_qty:Number,
    fk_cat_id:String,
    p_img:String,
    buffer_stock:Number,
})

module.exports=conn.model('product_tbls',productschema);