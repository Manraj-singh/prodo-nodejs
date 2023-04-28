const { createError } = require("../middlewares/error");
const { Product } = require("../models");

module.exports.getAllProduct = async (req, res, next) => {
  try {
    const products = await Product.find({}, { __v: 0 }).populate("categoryId");
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports.getProduct = async (req, res, next) => {
  // const {id} = req.params.id
  try {
    const products = await Product.findById(req.params.id);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.getProductByCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const products = await Product.find({ categoryId }).skip(skip).limit(limit);

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.addProduct = async (req, res, next) => {
  const { name, description, categoryId } = req.body;
  if (!(name && description && categoryId)) {
    return next(
      createError(400, "Bad request ,please fill in required fields")
    );
  }
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
