//@ts-check
require("dotenv").config();
const mongoose = require("mongoose");
const { MONGOOSE_URI } = process.env;

const uri = `${MONGOOSE_URI}`;

mongoose.connect(uri).catch((err) => {
  console.log("ERROR AL CONECTAR", err);
});

const db = mongoose.connection;

db.on("open", (_) => {
  console.log("conectado a mongodb");
});
db.on("error", (err) => {
  console.log("error en db", err);
});
