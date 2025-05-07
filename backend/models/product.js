const mongoose=require('mongoose')

  const product=mongoose.Schema({

    name: {
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    subCategory:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    size:{
        type:Array,
        required:true,
    },
    image:{
        type:Array,
        required:true,
    },
    bestSeller:{
        type:Boolean,
    },
    date:{
        type:Number,
        requierd:true,
    }

})

const productModel=mongoose.models.product || mongoose.model("product", product)
module.exports=productModel