const { Schema, model } = require("mongoose");

const pokemonSchema = new Schema({
  id:{
    type: Schema.Types.ObjectId
  },
  name: {
    type: String, //data.name
  },
  types:[{
    type: Schema.Types.ObjectId,
    ref:'Types' 
  }],

  hp: {
    type: Number,
  },
  attack: {
    type: Number, // stats[0].base_stat
  },
  defense: {
    type: Number, // stats[2].base_stat
  },
  speed: {
    type: Number, // stats[5].base_stat
  },
  height: {
    type: Number, //data.height
  },
  weight: {
    type: Number, //data.weight
  },
  img: {
    type: String, //data.sprites.other.home.front_default
  },
  createDb: {
    type: Boolean,
    default: false,
  },
});

module.exports = model('Pokemon', pokemonSchema)
