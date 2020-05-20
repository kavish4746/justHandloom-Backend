const conn=require('../dbconn');

const contactschema=conn.Schema({
    user_name:String,
    user_emailid:String,
    user_message:String,
    status:String
})
module.exports=conn.model('contactus_tbls',contactschema);


