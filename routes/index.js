//THIS IS ENTRY POINT FOR ROUTES

const router = require("express").Router();

//dividing routes for scalability and maintanability
router.use("/categories", require("./category"));
router.use("/products", require("./product"));

//below is a 404 route to handle incorrect routes to avoid server crashing
router.use("*", (req, res, next) => {
  res.status(404).json({
    success: false,
    message: "404 route not found ",
  });
});
module.exports = router;
