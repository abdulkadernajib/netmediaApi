const expressAsyncHandler = require("express-async-handler");
const Product = require('../Models/product')

const Brand = Product.Brand;
const Model = Product.Model;
const Imei = Product.Imei;


exports.addBrand = async (req, res) => {
    // req.body.createdOn = currentDate
    // req.body.lastUpdated = currentDate
    const brandName = req.body.name
    const brand = new Brand(req.body);


    try {
        await brand.save();
        res.status(201).json(`${brandName} added successfully`);
    } catch (error) {
        res.status(400).json(error);
    }
};

exports.addMobile = async (req, res) => {

    const model = new Model(req.body);

    try {
        await model.save();
        res.status(201).json('model added successfully');
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
        res.status(201).send({ mobile })
    }
    catch (err) {
        error = err
        res.status(404).send(error);
    }

};

exports.getMobileByBrand = async (req, res) => {

    const brand = req.params.brand;

    let error;

    try {
        const mobile = await Model.find({ 'brandName.name': brand })
        // const mobile = await Model.findById(_id)
        res.status(201).send(mobile)
    }
    catch (err) {
        error = err
        res.status(400).send(error);
    }
};

exports.updateMobile = async (req, res) => {
    const mobileId = req.params.id;

    var newData = {
        modelName: req.body.modelName,
        color: req.body.color,
        countryOfOrigin: req.body.countryOfOrigin,
        ASIN: req.body.asin,
        closingStock: req.body.closingStock,
        sellingPrice: req.body.sellingPrice,
        gstRate: req.body.gstRate,
        hsn: req.body.hsn
    }


    try {
        const mobile = await Model.findByIdAndUpdate(mobileId, newData)
        res.status(200).json(`${mobileId} updated successfully`)
    }
    catch (err) {
        res.status(400).json(err);
    }

};

exports.deleteMobile = async (req, res) => {
    _id = req.params.id;

    try {
        await Model.findByIdAndDelete(_id)
        res.status(201).json(`_id: ${_id} deleted..`)
    } catch (error) {
        res.status(404).json(error)
    }
}

exports.getProductsImeiList = expressAsyncHandler(async (req, res) => {
    const productId = req.params.modelId ? req.params : {}
    try {
        imeiList = await Imei.find(productId)
        res.status(201).json(imeiList)
    } catch (error) {
        res.status(404).json(error)
    }
})

exports.getUnsoldImeiList = expressAsyncHandler(async (req, res) => {
    const productId = req.params.modelId ? req.params.modelId : ''
    try {
        imeiList = await Imei.find({ modelId: productId, isAvailable: true })
        res.status(201).json(imeiList)
    } catch (error) {
        res.status(404).json(error)
    }
})


