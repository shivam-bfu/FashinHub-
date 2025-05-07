const userModel = require("../models/user");

const addToCart = async (req, res) => {
  try {
    const { user_id, itemId, size } = req.body;


    const user = await userModel.findById(user_id);
    const cart = await user.cart;
    console.log("cart",cart);

    if (cart[itemId]) {
      if (cart[itemId][size]) {
        cart[itemId][size] += 1;
      } else {
        cart[itemId][size] = 1;
      }
    } else {
      cart[itemId] = {};
      cart[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(user, { cart });

    res.json({
      success: true,
      msg: "Product added to cart",
    });
  } catch (err) {
    res.json({
      success: true,
      msg: err.message,
    });
  }
};
const getTheCart = async (req, res) => {
  try {
    const { user_id } = req.body;
    console.log(user_id)
    const user = await userModel.findById(user_id);
    const cart = await user.cart;
    res.json({
      success: true,
      msg: "Cart Updated",
      cart: cart,
    });
  } catch (err) {
    res.json({
      success: true,
      msg: err.message,
    });
  }
};
const updateTheCart = async (req, res) => {
  try {
    const { user_id, items, size, quantity } = req.body;
    
    const user = await userModel.findById(user_id);
    const cart = await user.cart;

    cart[items][size] = quantity;
    await userModel.findByIdAndUpdate(user, { cart });

    res.json({
      success: true,
      msg: "Cart Updated",
    });
  } catch (err) {
    res.json({
      success: false,
      msg: err.message,
    });
  }
};

module.exports = {
  addToCart,
  getTheCart,
  updateTheCart,
};
