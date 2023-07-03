const mongoose = require('mongoose');
const { Schema } = mongoose;

const partySchema = new Schema({
    businessName: { type: String, required: true, unique: true },
    contactPerson: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    phone2: { type: String },
    address: {
        address: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        pinCode: { type: Number, required: true }
    },
    compliance: {
        gstNo: String,
        gstType: String,
        panNo: String
    },
    bankDetails: {
        accountNo: Number,
        bankName: String,
        ifsc: String,
        branch: String
    },
    closingBalance: Number,
    createdOn: Date,
    updatedOn: Date,

});


const purchaseSchema = new Schema({
    creditor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "creditors"
    },
    date: { type: Date },
    invoiceNo: {
        type: String,
        required: true
    },
    voucherNo: { type: Number },
    total: { type: Number },
    isIntraState: { Type: Boolean },
    cgst: { type: Number },
    sgst: { type: Number },
    igst: { type: Number },
    details: {
        type: [{
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "models"
            },
            imei: { type: String },
            amount: { type: Number }
        }], required: true
    }
},
    { timestamps: true }
)

const salesSchema = new Schema({
    debtor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "debtors"
    },
    date: { type: Date },
    invoiceNo: {
        type: String,
        required: true,
        unique: true,
    },
    voucherNo: { type: Number },
    deliveryAddress: { type: String },
    delPhone: { type: String },
    total: { type: Number },
    isIntraState: { Type: Boolean },
    cgst: { type: Number },
    sgst: { type: Number },
    igst: { type: Number },
    details: {
        type: [{
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "models"
            },
            imei: { type: String },
            amount: { type: Number }
        }], required: true
    }
},
    { timestamps: true }
)

exports.Debtors = mongoose.model('debtor', partySchema);
exports.Creditors = mongoose.model('creditor', partySchema);
exports.Purchases = mongoose.model('purchase', purchaseSchema)
exports.Sales = mongoose.model('sale', salesSchema)