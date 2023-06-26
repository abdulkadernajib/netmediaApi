const express = require('express');
const productController = require('../Controller/products')
const router = express.Router();



exports.router = router
    .post('/mobile', productController.addMobile)
    .post('/brands', productController.addBrand)
    .get('/brands/all', productController.getBrands)
    .get('/mobile/all', productController.getMobiles)
    .get('/mobile/:id', productController.getMobileById)
    .get('/mobile/brand/:brand', productController.getMobileByBrand)
    .put('/mobile/:id', productController.updateMobile)
    .delete('/mobile/:id', productController.deleteMobile)
    .get('/imei/:modelId', productController.getProductsImeiList)