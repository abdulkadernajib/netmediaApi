const mongoose = require('mongoose');
const { Schema } = mongoose;

const citySchema = new Schema({
    name: { type: String, required: true },
    state: { type: String, required: true }
});

const stateSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true }
});

exports.City = mongoose.model('cities', citySchema);
exports.State = mongoose.model('state', stateSchema);