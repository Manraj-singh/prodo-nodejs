const { createError } = require("../middlewares/error");
const { Product } = require("../models");

//getting all producs from DB
module.exports.getAllProduct = async (req, res, next) => {
  try {
    //finding all products excluding __v field and populating categoryId
    const products = await Product.find({}, { __v: 0 }).populate("categoryId");
    res.status(200).json({
      success: true,
      message: "All products fetched successfully",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};
//getting a product as per given id
module.exports.getProduct = async (req, res, next) => {
  // const {id} = req.params.id
  try {
    const products = await Product.findById(req.params.id).populate(
      "categoryId"
    );
    res.status(200).json({
      success: true,
      message: "products fetched for given id",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

//getting a product with pagination
module.exports.getProductByCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    //finds products , skips the docs given query and returns no of document as per limit
    const products = await Product.find({ categoryId })
      .skip(skip)
      .limit(limit)
      .populate("categoryId");

    res.status(200).json({
      success: true,
      message: "products fetched for given category",
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

//adds a new product
module.exports.addProduct = async (req, res, next) => {
  //checking if required field are present
  const { name, description, categoryId } = req.body;
  if (!(name && description && categoryId)) {
    return next(
      createError(400, "Bad request ,please fill in required fields")
    );
  }
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(200).json({
      success: true,
      message: "products added successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

//updating the product record as per product id
module.exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "products updated successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};
//deleting the product record as per product id

module.exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    res.status(200).json({
      success: true,
      message: "products deleted successfully",
      data: product,
    });
  } catch (error) {
    next(error);
  }
};
