const Model = require('../Models/miscellaneos')

const City = Model.City;
const State = Model.State;

exports.getCity = async (req, res) => {
    const mh = 'Maharashtra'
    const city = await City.find({ state: /Maharashtra/ }, 'name')
    res.status(201).send(city);
}

exports.getState = async (req, res) => {
    const state = await State.find()
    res.status(201).send(state);
}