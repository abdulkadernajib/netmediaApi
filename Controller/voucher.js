const mongoose = require('mongoose')
const assert = mongoose.assert
const Model = require('../Models/voucher');
const Model2 = require('../Models/product');
const expressAsyncHandler = require("express-async-handler");

const Debtors = Model.Debtors;
const Creditors = Model.Creditors;
const Purchases = Model.Purchases
const Sales = Model.Sales
const Product = Model2.Model
const Imei = Model2.Imei
const currentDate = new Date().toString();

exports.addDebtors = expressAsyncHandler(async (req, res) => {
    req.body.createdOn = currentDate
    req.body.updatedOn = currentDate
    const debtors = new Debtors(req.body);

    try {
        await debtors.save()
        res.status(201).json('Debtor created successfully');
    }
    catch (error) {
        if (error.code === 11000) {
            const kv = error.keyValue
            res.status(400).send(kv);
        }
        else {
            res.status(400).send(error);
        }
    }
});

exports.addCreditors = expressAsyncHandler(async (req, res) => {
    req.body.createdOn = currentDate
    req.body.updatedOn = currentDate
    const creditors = new Creditors(req.body);


    try {
        await creditors.save()
        res.status(201).json('Creditor created successfully');
    }
    catch (err) {
        if (error.code === 11000) {
            const kv = error.keyValue
            res.status(400).send(kv);
        }
        else {
            res.status(400).send(error);
        }
    }
});

exports.getDebtors = expressAsyncHandler(async (req, res) => {
    const debtors = await Debtors.find();
    res.status(201).send(debtors)
});

exports.getCreditor = expressAsyncHandler(async (req, res) => {
    const creditors = await Creditors.find();
    res.status(201).send(creditors)
});

exports.getCreditorById = expressAsyncHandler(async (req, res) => {

    const _id = req.params.id;

    let error;

    try {
        // const mobile = await Model.findOne({ _id: _id }).exec()
        const creditor = await Creditors.findById(_id)
        res.status(200).json(creditor)
    }
    catch (err) {
        error = err
        res.status(400).send(error);
    }

});
exports.getDebtorById = expressAsyncHandler(async (req, res) => {

    const _id = req.params.id;

    let error;

    try {
        // const mobile = await Model.findOne({ _id: _id }).exec()
        const debtor = await Debtors.findById(_id)
        res.send({ debtor })
    }
    catch (err) {
        error = err
        res.status(400).send(error);
    }
});

exports.updateDebtor = expressAsyncHandler(async (req, res) => {
    const _id = req.params.id;

    var newData = {
        businessName: req.body.businessName,
        contactPerson: req.body.contactPerson,
        phone: req.body.phone,
        phone2: req.body.phone2,
        address: {
            address: req.body.address.address,
            city: req.body.address.city,
            state: req.body.address.state,
            pinCode: req.body.address.pinCode,
        },
        compliance: {
            gstNo: req.body.compliance.gstNo,
            gstType: req.body.compliance.gstType,
            panNo: req.body.compliance.panNo
        },
        bankDetails: {
            accountNo: req.body.bankDetails.accountNo,
            bankName: req.body.bankDetails.bankName,
            ifsc: req.body.bankDetails.ifsc,
            branch: req.body.bankDetails.branch
        },
        closingBalance: req.body.closingBalance,
        updatedOn: currentDate
    }

    try {
        await Debtors.findByIdAndUpdate(_id, newData);
        res.status(201).json(_id + 'updated successfully')
    } catch (error) {
        res.status(400).json(error)
    }
});

exports.deleteDebtor = expressAsyncHandler(async (req, res) => {
    _id = req.params.id

    try {
        await Debtors.findByIdAndDelete(_id);
        res.status(200).json(`Debtor with _id: ${_id} deleted..`)
    } catch (error) {
        res.status(400).send(error)

    }
});

exports.updateCreditor = expressAsyncHandler(async (req, res) => {
    const _id = req.params.id;

    var newData = {
        businessName: req.body.businessName,
        contactPerson: req.body.contactPerson,
        phone: req.body.phone,
        phone2: req.body.phone2,
        address: {
            address: req.body.address.address,
            city: req.body.address.city,
            state: req.body.address.state,
            pinCode: req.body.address.pinCode,
        },
        compliance: {
            gstNo: req.body.compliance.gstNo,
            gstType: req.body.compliance.gstType,
            panNo: req.body.compliance.panNo
        },
        bankDetails: {
            accountNo: req.body.bankDetails.accountNo,
            bankName: req.body.bankDetails.bankName,
            ifsc: req.body.bankDetails.ifsc,
            branch: req.body.bankDetails.branch
        },
        closingBalance: req.body.closingBalance,
        updatedOn: currentDate
    }

    try {
        await Creditors.findByIdAndUpdate(_id, newData);
        res.status(201).json(_id + 'updated successfully')
    } catch (error) {
        res.status(400).json(error)
    }
});

exports.deleteCreditor = expressAsyncHandler(async (req, res) => {
    _id = req.params.id

    try {
        await Creditors.findByIdAndDelete(_id);
        res.status(200).json(`Creditor with _id: ${_id} deleted..`)
    } catch (error) {
        res.status(400).send(error)

    }
});

exports.addPurchaseInvoice = expressAsyncHandler(async (req, res) => {

    purchase = new Purchases(req.body);
    const details = req.body.details

    try {
        details.forEach(async item => {
            let imei = item.imei;
            let modelId = item.product;

            createImei = new Imei({
                imeiNumber: imei,
                modelId: modelId,
                costPrice: item.amount,
                isAvailable: true
            })
            await createImei.save();

        });
        await purchase.save();
        res.status(201).json('Purchase added')

    } catch (error) {
        if (error.code === 11000) {
            const kv = error.keyValue
            const msg = `Invoice No ${kv.invoiceNo} already exist`
            res.status(400).json(msg);
        }
        else {
            res.status(400).send(error);
        }
    }

});

exports.getPurchases = expressAsyncHandler(async (req, res) => {
    const _id = req.params._id ? req.params : {}
    purchase = await Purchases.find(_id)
    res.status(200).json(purchase);
})

exports.addSalesInvoice = expressAsyncHandler(async (req, res) => {

    sales = new Sales(req.body);
    const details = req.body.details

    try {
        details.forEach(async item => {
            let imei = item.imei;

            updateImei = await Imei.findByIdAndUpdate(imei, {
                salesPrice: item.amount,
                isAvailable: false
            })

        });
        await sales.save();
        res.status(201).json('Sales complete')

    } catch (error) {
        if (error.code === 11000) {
            const kv = error.keyValue
            const msg = `Invoice No ${kv.invoiceNo} already exist`
            res.status(400).json(msg);
        }
        else {
            res.status(400).send(error);
        }
    }

});

exports.getSales = expressAsyncHandler(async (req, res) => {
    const _id = req.params._id ? req.params : {}
    sales = await Sales.find(_id)
    res.status(200).json(sales);
})

exports.getPurRefNo = expressAsyncHandler(async (req, res) => {
    var count = await Purchases.countDocuments() + 1
    let refNo = count.toString().padStart(5, '0')
    res.status(200).json(refNo)
})
exports.getSalInvNo = expressAsyncHandler(async (req, res) => {
    var count = await Sales.countDocuments() + 1
    let invNo = count.toString().padStart(5, '0')
    res.status(200).json(invNo)
})