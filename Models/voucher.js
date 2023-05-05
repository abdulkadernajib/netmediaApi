const mongoose = require('mongoose');
const { Schema } = mongoose;

const partySchema = new Schema({
    businessName: { type: String, required: true, unique: true },
    contactPerson: { type: String, required: true, unique: true },
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

});

exports.Debtors = mongoose.model('debtor', partySchema);
exports.Creditors = mongoose.model('creditor', partySchema);