const conn=require('../dbconn');

const wishlistschema=conn.Schema({
    fk_emailid:String,
    fk_p_id:Number,
    fk_p_name:String,
    fk_p_img:String,
    fk_cat_id:String,
    fk_p_price:Number,
})

module.exports=conn.model('wishlist_tbls',wishlistschema);