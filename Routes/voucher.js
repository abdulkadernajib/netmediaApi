const express = require('express');
const voucherController = require('../Controller/voucher')
const router = express.Router();



exports.router = router
    .post('/debtor', voucherController.addDebtors)
    .post('/creditor', voucherController.addCreditors)