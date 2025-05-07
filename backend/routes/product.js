const express= require('express')
const route=express()

const upload=require('../config/multer')

const adminAuth =require('../middleware/adminauth.js')

const {createProduct,deleteProduct,listProduct,singleProduct}=require('../controllers/product')


route.post('/create-product', adminAuth ,upload.fields([{name:"image1", maxCount:1},{name:"image2", maxCount:1},{name:"image3", maxCount:1},{name:"image4", maxCount:1},{name:"image5", maxCount:1}]),createProduct)
route.post('/delete-product', adminAuth ,deleteProduct)
route.get('/list-products',listProduct)
route.get('/single-product' ,singleProduct)

module.exports=route