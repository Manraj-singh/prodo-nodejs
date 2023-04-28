const { createError } = require("../middlewares/error");
const { Category } = require("../models");

module.exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({}, { __v: 0 });
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports.addCategories = async (req, res, next) => {
  const { name, description } = req.body;
  if (!(name && description)) {
    return next(
      createError(400, "Bad request ,please fill in required fields")
    );
  }

  try {
    const category = new Category(req.body);
    await category.save();

    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports.updateCategories = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports.deleteCategories = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndRemove(req.params.id);
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
