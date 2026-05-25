const express = require("express");
const router = express.Router();

const validator = require("../middleware/validator");

const supplierController = require("../controllers/supplier-controller");

// Create a new supplier
router.post("/", validator.validateSupplier, supplierController.createSupplier);

router.get("/", supplierController.getAllSuppliers);

router.put("/:id", supplierController.updateSupplier);

router.delete("/:id", supplierController.deleteSupplier);

module.exports = router;