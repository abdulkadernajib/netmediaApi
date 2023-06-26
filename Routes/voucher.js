const express = require('express');
const voucherController = require('../Controller/voucher')
const router = express.Router();



exports.router = router
    .post('/debtor', voucherController.addDebtors)
    .post('/creditor', voucherController.addCreditors)
    .post('/purchase', voucherController.addPurchaseInvoice)
    .post('/sales', voucherController.addSalesInvoice)
    .get('/purchase/:_id?', voucherController.getPurchases)
    .get('/sales/:_id?', voucherController.getSales)
    .get('/debtor/all', voucherController.getDebtors)
    .get('/creditor/all', voucherController.getCreditor)
    .get('/creditor/:id', voucherController.getCreditorById)
    .get('/debtor/:id', voucherController.getDebtorById)
    .put('/debtor/:id', voucherController.updateDebtor)
    .delete('/debtor/:id', voucherController.deleteDebtor)
    .put('/creditor/:id', voucherController.updateCreditor)
    .delete('/creditor/:id', voucherController.deleteCreditor)