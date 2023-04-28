const router = require("express").Router();

router.use("/categories", require("./category"));
router.use("/products", require("./product"));

module.exports = router;
