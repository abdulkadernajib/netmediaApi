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
    creditorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "creditors"
    },
    creditorName: { type: String },
    invoiceNo: {
        type: String,
        required: true,
        unique: true,
    },
    voucherNo: { type: Number },
    address: { type: String },
    phone: { type: String },
    phone2: { type: String },
    total: { type: Number },
    gst: { type: Number },
    netTotal: { type: Number },
    details: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "models"
        },
        imei: { type: String },
        cost: { type: Number }
    }]
},
    { timestamps: true }
)

const salesSchema = new Schema({
    creditorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "debtors"
    },
    creditorName: { type: String },
    invoiceNo: {
        type: String,
        required: true,
        unique: true,
    },
    voucherNo: { type: Number },
    address: { type: String },
    deliveryAddress: { type: String },
    phone: { type: String },
    phone2: { type: String },
    total: { type: Number },
    gst: { type: Number },
    netTotal: { type: Number },
    details: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "models"
        },
        imei: { type: String },
        amount: { type: Number }
    }]
},
    { timestamps: true }
)

exports.Debtors = mongoose.model('debtor', partySchema);
exports.Creditors = mongoose.model('creditor', partySchema);
exports.Purchases = mongoose.model('purchase', purchaseSchema)
exports.Sales = mongoose.model('sale', salesSchema)