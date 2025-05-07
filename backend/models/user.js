const mongoose=require('mongoose')

  const user=mongoose.Schema({

    name: {
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    cart:{
        type:Object,
        required:true,

        default:{},
    }

})

const userModel=mongoose.models.user || mongoose.model("user", user)
module.exports=userModel