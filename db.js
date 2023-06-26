const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://doublebatteryofficial:${process.env.DB_PW}@cluster0.iqjfuqz.mongodb.net/netmedia`);
  console.log("Database Connected")
}

module.exports = main;