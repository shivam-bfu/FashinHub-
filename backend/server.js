const express = require('express')
const app= express()
const cors=require('cors')
const connectCloudinary=require('./config/cloudinary.js')
const connectMongoose=require('./config/mongo.js')
const productModel =require('./models/product.js')
const userModel=require('./models/user.js')
const userRoute=require('./routes/user.js')
const productRoute=require('./routes/product.js')
const cartRoute=require("./routes/cart.js")
const cookieParser=require('cookie-parser')

require('dotenv').config();



app.use(express.json())
app.use(cors())
app.use(cookieParser())


connectCloudinary();
connectMongoose();



app.use('/api/user',userRoute)
app.use('/api/product',productRoute)
app.use('/api/cart',cartRoute)


app.listen(3000,()=>{
    console.log('sever is running port Number 3000');
    
})