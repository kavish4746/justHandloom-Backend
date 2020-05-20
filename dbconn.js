const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/justhandloom",{useNewUrlParser:true},function(res,err){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Connect");
    }
})

module.exports=mongoose;