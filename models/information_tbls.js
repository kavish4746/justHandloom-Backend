const conn=require('../dbconn');

const infoschema=conn.Schema({
    u_email:String,
    u_password:String,
    u_name:String,
    u_address:String,
    u_city:String,
    u_state:String,
    u_mob:Number,
    u_type:String
})

module.exports=conn.model('information_tbls',infoschema);