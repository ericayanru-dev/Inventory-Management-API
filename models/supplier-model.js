require("dotenv").config();
const mongoose = require("mongoose");
const schema = require("../Schema/schema");
const db = require("../db-connection/mongodb-connection");

const supplier = {};

supplier.createSupplier = async (body) => {
  try {
    const dbConnection = await db();
    const myModel = dbConnection.model("Supplier", schema.supplier);
    const supplier = await myModel.findOne({ email: body.email });
    const supplierByName = await myModel.findOne({ supplierName: body.supplierName });

    if (supplier || supplierByName) {
      return { message: "Supplier  already exists" };
    }
    else {
      const newSupplier = new myModel(body);
      await newSupplier.save();
      return { message: "Supplier created successfully", supplier: newSupplier };
    }
  } catch (error) {
    return { message: "Error creating Supplier model" };
  }
};

supplier.getAllSuppliers = async () => {
  try {
    const dbConnection = await db();
    const myModel = dbConnection.model("Supplier", schema.supplier);
    const suppliers = await myModel.find();
    return suppliers;
  } catch (error) {
    return { message: "Error fetching suppliers" };
  }
};


supplier.updateSupplier = async (id, updateData) => {
  try {
    const dbConnection = await db();
    const myModel = dbConnection.model("Supplier", schema.supplier);

    const user = await myModel.findById(id);
    if (!user) {
      return { message: "Supplier not found" };
    }
    
    const updatedSupplier = await myModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

    return updatedSupplier;
  } catch (error) {
    return { message: "Error updating supplier" };
  }
};

supplier.deleteSupplierById = async (id) => {
  try {
    const dbConnection = await db();
    const myModel = dbConnection.model("Supplier", schema.supplier);

    const result = await myModel.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return { message: "Supplier not found" };
    }
    return { message: "Supplier deleted successfully" };
  } catch (error) {
    return { message: "Error deleting supplier" };
  }
};



module.exports = supplier;
