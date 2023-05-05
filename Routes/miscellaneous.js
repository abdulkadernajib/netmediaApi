const express = require('express');
const Controller = require('../Controller/miscellaneous');
const router = express.Router();


exports.router = router
    .get('/city', Controller.getCity)
    .get('/state', Controller.getState)
