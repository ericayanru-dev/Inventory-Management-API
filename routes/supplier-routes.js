'use strict'

const express = require("express");
const router = express.Router();

const validator = require("../middleware/validator");
const authMiddleware = require("../middleware/auth");
const supplierController = require("../controllers/supplier-controller");

// Protected routes (require login)
router.post("/", authMiddleware, validator.validateSupplier, supplierController.createSupplier);
router.put("/:id", authMiddleware, supplierController.updateSupplier);
router.delete("/:id", authMiddleware, supplierController.deleteSupplier);


router.get("/", supplierController.getAllSuppliers);

module.exports = router;