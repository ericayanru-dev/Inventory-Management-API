const Schema = require("mongoose").Schema
const ObjectId = Schema.Types.ObjectId;

const schema = {}

schema.supplier = new Schema({
    supplierName: { type: String, required: true },
    contactPerson: { type: String, required: true },
    email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now },
    updatedAt: { type: Date, required: true, default: Date.now }
});

schema.product = new Schema({
  
  productName: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  quantityInStock: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true, min: 1 },
  supplierId: { type: ObjectId, ref: "Supplier", required: true },
  reorderLevel: { type: Number, default: 10 },
  description: { type: String },
  createdAt: { type: Date,required: true, default: Date.now },
  updatedAt: { type: Date,required: true, default: Date.now }
});
  
module.exports = schema;