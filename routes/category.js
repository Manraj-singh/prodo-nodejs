//ALL THE ROUTES PERTAINING TO CATEGORY ARE DEFINED HERE

const {
  getCategories,
  addCategories,
  updateCategories,
  deleteCategories,
  getAllCategories,
} = require("../controllers/category-controller");

const router = require("express").Router();

//route to get all the categories
router.get("/", getAllCategories);
//route to get particular category details as per id
router.get("/:id", getCategories);
//route to add new category
router.post("/add", addCategories);
//route to update a category
router.put("/update/:id", updateCategories);
//route to delete a category
router.delete("/delete/:id", deleteCategories);

module.exports = router;
