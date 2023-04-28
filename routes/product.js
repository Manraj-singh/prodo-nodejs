const { productController } = require("../controllers");
const {
  getAllProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getProductByCategory,
} = productController;
const router = require("express").Router();

router.get("/", getAllProduct);
router.get("/:id", getProduct);
router.post("/add", addProduct);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);

router.get("/category/:categoryId", getProductByCategory);

module.exports = router;
