const {
  getCategories,
  addCategories,
  updateCategories,
  deleteCategories,
} = require("../controllers/category-controller");

const router = require("express").Router();

router.get("/", getCategories);
router.post("/add", addCategories);
router.put("/update/:id", updateCategories);
router.delete("/delete/:id", deleteCategories);

module.exports = router;
