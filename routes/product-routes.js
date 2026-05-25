const express = require("express");
const router = express.Router();
const productController = require("../controllers/product-controller");

const validator = require("../middleware/validator");

// Create a new product
router.post("/", validator.validateProduct, productController.createProduct);
router.get("/", productController.getAllProducts);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;