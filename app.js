const express = require('express');
require('dotenv').config()
const app = express();
const bodyParser = require('body-parser');
const authorize = require('./authorize')
const ProductRouter = require('./Routes/product')
const VoucherRouter = require('./Routes/voucher')
const miscellaneos = require('./Routes/miscellaneous')
const cors = require('cors')
const { Db } = require('./db')

// console.log('env',process.env.DB_PW)

//.use method is used for middleware
// app.use(authorize)
app.use(express.json()) //to parse Json data
app.use(cors({ origin: 'http://localhost:4200' }));
app.use('/api/', ProductRouter.router);
app.use('/api/', VoucherRouter.router);
app.use('/api/', miscellaneos.router);
app.use(bodyParser.json())
// app.use(express.urlencoded({extended:true}))

//Setting Port
const currentDate = new Date().toDateString()
port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port} ...${currentDate}`));