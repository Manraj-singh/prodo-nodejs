//ALL THE ROUTES PERTAINING TO PRODUCTS ARE DEFINED HERE

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

//route to get all products
router.get("/", getAllProduct);
//route to get product as per given id
router.get("/:id", getProduct);
//route to add new product
router.post("/add", addProduct);
//route to update a product
router.put("/update/:id", updateProduct);
//route to delete a product
router.delete("/delete/:id", deleteProduct);
//route to get a product as per the category with option of limit and page
router.get("/category/:categoryId", getProductByCategory);

module.exports = router;
