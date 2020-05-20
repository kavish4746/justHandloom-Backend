const conn=require('../dbconn');

const catschema=conn.Schema({
    cat_id:Number,
    cat_name:String,
})
module.exports=conn.model('cat_tbls',catschema);


