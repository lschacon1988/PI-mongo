const { Schema, model } = require("mongoose");

const typeSchema = new Schema({
  name: {
    type: String, //data.name
  },
});

module.exports = model('Types', typeSchema)
