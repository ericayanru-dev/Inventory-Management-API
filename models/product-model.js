const Schema = require("mongoose").Schema;
const ObjectId = Schema.Types.ObjectId;

const db = require("../db-connection/mongodb-connection");
const schema = require("../Schema/schema")

const  dbConnection = db();
  

const products = {}

products.addProduct = async (body) => {
  try {
    const  dbConnection = await db();
    const myModel = dbConnection.model("Product", schema.product);

    const existingProduct = await myModel.findOne({ sku: body.sku });

    if (existingProduct) {
      const result = await myModel.updateOne(
        { sku: body.sku },
         { $inc: { quantityInStock: body.quantityInStock } }, 
        { runValidators: true }
      )
      return {
        message: "Added to exixting product", 
        update: result
      };
    }
    else {
      const newProduct = new myModel(body);
      await newProduct.save();
      return { message: "Product created successfully", product: newProduct };
    }
  } catch (error) {
    return {
      message: "Error creating Product model",
      error: error.message
     };
  }
};

products.getAllProducts = async () => {
  try {
    const dbConnection = await db();
    const myModel = dbConnection.model("Product", schema.product);
    const products = await myModel.find();
    return products;
  } catch (error) {
    throw new Error("Error fetching all products");
  }
};

products.updateProduct = async (id, updateData) => {
  try {
    const dbConnection = await db();
    const myModel = dbConnection.model("Product", schema.product);

    const updatedProduct = await myModel.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

    return updatedProduct;
  } catch (error) {
    throw new Error("Error updating product");
  }
};

products.deleteProductById = async (id) => {
  try {
    const dbConnection = await db();
    const myModel = dbConnection.model("Product", schema.product); 
    const result = await myModel.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return { message: "Product not found" };
    }
    return { message: "Product deleted successfully" };
  } catch (error) {
    throw new Error("Error deleting product");
  }
};
module.exports = products;
