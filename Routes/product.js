const express = require('express');
const productController = require('../Controller/products')
const router = express.Router();



exports.router = router
    .get('/brands', productController.getBrands)
    .post('/brands', productController.addBrand)
    .get('/mobile', productController.getMobiles)
    .post('/mobile', productController.addMobile)
    .get('/mobile/:id', productController.getMobileById)
    .put('/mobile/:id', productController.updateMobile)