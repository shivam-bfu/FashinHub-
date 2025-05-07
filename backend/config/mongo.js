const mongoose = require('mongoose')

const connectMongoose= ()=>{
    try{

    mongoose.connect('mongodb://127.0.0.1:27017/ecom');
             
    console.log('database connected');

    
    }
    catch(err){
        console.log("something not right eith mongo", err);
        
    }

}

module.exports= connectMongoose