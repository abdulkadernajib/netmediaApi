const mongoose = require('mongoose');
const { Schema } = mongoose;


//Schema
const brandsSchema = new Schema({
  name:
  {
    type: String,
    required: true
  }
});

const modelsSchema = new Schema({
  brandName: { type: brandsSchema, required: true },
  modelName: { type: String, required: true },
  color: { type: String },
  countryOfOrigin: { type: String },
  asin: { type: String },
  sellingPrice: { type: Number },
  gstRate: { type: Number },
  hsn: { type: String }
},
  { timestamps: true }
);

const imeiSchema = new Schema({
  imeiNumber: String,
  modelId: { type: mongoose.Schema.Types.ObjectId, ref: 'models' },
  costPrice: Number,
  salesPrice: Number,
  isAvailable: Boolean
})


exports.Brand = mongoose.model('brand', brandsSchema);
exports.Model = mongoose.model('model', modelsSchema);
exports.Imei = mongoose.model('imei', imeiSchema);