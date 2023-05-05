
const Product = require('../Models/product')

const Brand = Product.Brand;
const Model = Product.Model;


exports.addBrand = async (req, res) => {
    const brand = new Brand(req.body);


    try {
        await brand.save();
        res.status(201).json(req.body);
    } catch (err) {
        error = err
        res.status(400).json(error);
    }
};

exports.addMobile = async (req, res) => {

    const model = new Model(req.body);

    try {
        await model.save();
        res.status(201).send(model);
        console.log(model);
    }
    catch (err) {

        res.status(400).json(err);
    }
};

exports.getBrands = async (req, res) => {

    const brand = await Brand.find()
    res.send(brand)
};

exports.getMobiles = async (request, response) => {
    const model = await Model.find()
    response.send(model);
};

exports.getMobileById = async (req, res) => {
    const _id = req.params.id;

    let error;

    try {
        // const mobile = await Model.findOne({ _id: _id }).exec()
        const mobile = await Model.findById(_id)
        res.send({ mobile })
        console.log(mobile)
    }
    catch (err) {
        error = err
        res.status(400).send(error);
    }

};

// exports.getMobileById = (

//     Model.findById(req.params.id, (err, doc) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Server error');
//         } else if (!doc) {
//             res.status(404).send('Document not found');
//         } else {
//             res.send(doc);
//         }
//     })
// )

exports.updateMobile = async (req, res) => {
    const mobileId = req.params.id;

    var newData = {
        modelName: req.body.modelName,
        color: req.body.color,
        countryOfOrigin: req.body.countryOfOrigin,
        ASIN: req.body.ASIN,
        closingStock: req.body.closingStock
    }

    let error;

    try {
        const mobile = await Model.findByIdAndUpdate(mobileId, newData)
        res.send({ newData })
    }
    catch (err) {
        res.status(400).send(err);
    }

};



