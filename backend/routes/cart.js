const express = require("express")
const route = express()
const {addToCart} = require('../controllers/cart')
const {updateTheCart} = require('../controllers/cart')
const {getTheCart} = require('../controllers/cart')
const auth  = require("../middleware/auth")

route.post("/addtocart",auth,addToCart)
route.post("/update-cart", auth, updateTheCart)
route.post("/get-the-cart",auth, getTheCart)

module.exports=route