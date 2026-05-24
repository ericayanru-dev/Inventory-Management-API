const supplier = require("../models/supplier-model");
const product = require("../models/product-model");

const supplierController = {};

supplierController.createSupplier = async (req, res) => {
  try {
    const { supplierName, contactPerson, email, phone, address } = req.body;

    if (!supplierName || !contactPerson || !email || !phone || !address) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const result = await supplier.createSupplier({
      supplierName: supplierName.trim(),
      contactPerson: contactPerson.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      address: address.trim(),
    });
    res.status(201).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating supplier", error: error.message });
  }
};

supplierController.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await supplier.getAllSuppliers();
    res.status(200).json(suppliers);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching suppliers", error: error.message });
  }
};

supplierController.updateSupplier = async (req, res) => {
  try {
    const { id } = req.params;
    const { supplierName, contactPerson, email, phone, address } = req.body;
    if (!id) {
      return res.status(400).json({ message: "Supplier ID is required" });
    }
    const updateData = {};

    if (supplierName) updateData.supplierName = supplierName.trim();
    if (contactPerson) updateData.contactPerson = contactPerson.trim();
    if (email) updateData.email = email.toLowerCase().trim();
    if (phone) updateData.phone = phone.trim();
    if (address) updateData.address = address.trim();
    updateData.updatedAt = Date.now();

    const updatedSupplier = await supplier.updateSupplier(id, updateData);

    res.status(200).json({
      success: true,
      message: "Supplier updated successfully",
      data: updatedSupplier,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating supplier", error: error.message });
  }
};

supplierController.deleteSupplier = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "Supplier ID is required" });
    }
    const result = await supplier.deleteSupplierById (id);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting supplier", error: error.message });
  }
};

module.exports = supplierController;
