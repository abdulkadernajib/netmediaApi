const express = require('express');
const Controller = require('../Controller/miscellaneous');
const router = express.Router();


exports.router = router
    .get('/city/:state', Controller.getCity)
    .get('/state', Controller.getState)
    .post('/user/register', Controller.createUser)
    .post('/user', Controller.verifyUser)
