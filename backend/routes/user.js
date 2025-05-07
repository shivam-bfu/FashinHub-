const express=require('express')
const route=express();
const {register,login,admin}= require('../controllers/userAuth.js')
const adminAuth =require('../middleware/adminauth.js')


route.post('/register', register)
route.post('/login', login)
route.post('/admin', admin)


module.exports=route;