const Model = require('../Models/voucher');

const Debtors = Model.Debtors;
const Creditors = Model.Creditors;

exports.addDebtors = async (req, res) => {
    const debtors = new Debtors(req.body);

    try {
        await debtors.save()
        res.status(200).send('Debtor added succesfully');
    }
    catch (err) {
        res.status(400).send(err);
    }
};

exports.addCreditors = async (req, res) => {
    const creditors = new Creditors(req.body);


    try {
        await creditors.save()
        res.status(200).send('Creditor added succesfully');
    }
    catch (err) {
        res.status(400).send(err);
    }
};