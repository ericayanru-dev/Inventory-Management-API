'use strict'

const express = require("express");
const router = express.Router();

const validator = require("../middleware/validator");
const authMiddleware = require("../middleware/auth");
const productController = require("../controllers/product-controller");

// Protected routes (require login)
router.post("/", authMiddleware, validator.validateProduct, productController.createProduct);
router.put("/:id", authMiddleware,  productController.updateProduct);
router.delete("/:id", authMiddleware, productController.deleteProduct);


router.get("/", productController.getAllProducts);

module.exports = router;