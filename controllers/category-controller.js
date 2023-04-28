const { createError } = require("../middlewares/error");
const { Category } = require("../models");

//below logic returns all categories
module.exports.getAllCategories = async (req, res, next) => {
  try {
    //find all docs and exclude __v (version) field
    const categories = await Category.find({}, { __v: 0 });
    res.status(200).json({
      success: true,
      message: "All categories fetched successfully",
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};
//below logic requires params id and returns category as per id
module.exports.getCategories = async (req, res, next) => {
  try {
    //find all docs and exclude __v (version) field
    const categories = await Category.findById(req.params.id, { __v: 0 });
    res.status(200).json({
      success: true,
      message: " category fetched for given id",
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

//logic to add new categories in DB
module.exports.addCategories = async (req, res, next) => {
  //checking if required field are present
  const { name, description } = req.body;
  if (!(name && description)) {
    return next(
      createError(400, "Bad request ,please fill in required fields")
    );
  }

  try {
    const category = new Category(req.body);
    await category.save();

    res.status(200).json({
      success: true,
      message: "new category added successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

//updating category as per given param id
module.exports.updateCategories = async (req, res, next) => {
  try {
    // setting new: true ensures that the updated document is returned.
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "category updated successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

//deleting category
module.exports.deleteCategories = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndRemove(req.params.id);
    res.status(200).json({
      success: true,
      message: "category deleted successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};
