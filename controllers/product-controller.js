const products = require("../models/product-model");

const productController = {};

productController.createProduct = async (req, res) => {
  try {
    const { productName, sku, price, category, quantityInStock, reorderLevel, description, supplierId } = req.body;
if (!productName || !sku || !price || !category || !quantityInStock || !supplierId) {      return res.status(400).json({ message: "All fields required" });
    }

    const body = {
      productName: productName.trim(),
      sku: sku.trim(),
      price: price,
      quantityInStock: quantityInStock,
      category: category.trim(),
      reorderLevel: reorderLevel,
      description: description.trim(),
      supplierId: supplierId,
      updatedAt: Date.now()
    };

    const result = await products.addProduct(body);

    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error: error.message });
  }
};

productController.getAllProducts = async (req, res) => {
  try {
    const result = await products.getAllProducts();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};

productController.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: "Product ID is required" });
    }
    const { productName, sku, price, category, quantityInStock, reorderLevel, description, supplierId } = req.body;


    const body = {}
      if (productName) body.productName = productName.trim();
      if (sku) body.sku = sku.trim();
      if (price) body.price = price;
      if (quantityInStock) body.quantityInStock = quantityInStock;
      if (category) body.category = category.trim();
      if (reorderLevel) body.reorderLevel = reorderLevel;
      if (description) body.description = description.trim();
      if (supplierId) body.supplierId = supplierId;
      body.updatedAt = Date.now();

    const result = await products.updateProduct(id, body);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error: error.message });
  }
};

productController.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if(!id) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const result = await products.deleteProductById(id);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error: error.message });
  }
};
module.exports = productController;