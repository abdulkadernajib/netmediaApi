const Model = require('../Models/miscellaneos')

const City = Model.City;
const State = Model.State;
const User = Model.User;

exports.getCity = async (req, res) => {
    state = req.params.state
    const city = await City.find({ state: state })
    res.status(200).send(city);
}

exports.getState = async (req, res) => {
    const state = await State.find()
    res.status(201).send(state);
}

exports.createUser = async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).json(`welcome ${req.body.email}`);
    } catch (error) {
        res.status(400).json(error);
    }
}

exports.verifyUser = async (req, res) => {
    const user = new User(req.body);
    const email = req.body.email;

    try {
        await user.find({ email: email });
        res.status(200).json(`${req.body.email} logged in`)
    } catch (error) {
        res.status(404).json(error)
    }

}