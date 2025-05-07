const productModel = require("../models/product");

const cloudinary = require("cloudinary").v2;

const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      subCategory,
      category,
      size,
      bestSeller,
      date,
    } = req.body;
    const { image1, image2, image3, image4 } = req.files;

    const img1 = image1?.[0];
    const img2 = image2?.[0];
    const img3 = image3?.[0];
    const img4 = image4?.[0];

    const image = [img1, img2, img3, img4].filter((item) => item !== undefined);

    const imageUrl = await Promise.all(
      image.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const product = await productModel.create({
      name,
      description,
      price: Number(price),
      subCategory,
      category,
      size: JSON.parse(size),
      bestSeller: bestSeller === "true" ? "true" : "false",
      date: Date.now(),
      image: imageUrl,
    });

    res.json({
      success: true,
      msg: "product uploded",
      product:product
    });
  } catch (err) {
    console.log(err);
  }
};




const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    if(!productId)
    {
      res.json({
        success: false,
        msg: "Error occurred: Product Doesnot Exit OR Try LogIn Again",
      });
    }
    console.log(productId);

    await productModel.findByIdAndDelete(productId);

    res.json({
      success: true,
      msg: "deleted",
    });
  } catch (err) {
    res.json({
      success: false,
      msg: "Error occurred: " + err.message,
    });
  }
};



const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    console.log(productId);
    const product = await productModel.findById(productId);
    res.json({
      success: true,
      msg: product,
    });
  } catch (err) {
    msg: err;
  }
};




const listProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    res.json({
      success: true,
      msg:"products got ",
      products:products,
    });
  } catch (err) {
    msg: err;
  }
};




module.exports = {
  createProduct,
  deleteProduct,
  singleProduct,
  listProduct,
};
