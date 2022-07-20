require("../../db");
const Pokemon = require("../../models/Pokemon");
const Types = require("../../models/Types");
const { getInfo, getDb, models, getType } = require("../service");

module.exports = {
  getAllPoke: async () => {
    let pokeApi = await getInfo();
    let pokeDb = await getDb();
    let all = pokeApi.concat(pokeDb);
    return all;
  },

  getName: async (name) => {
    try {
      name = name.toLowerCase();
      let pokeDb = await Pokemon.find({ name: name }).populate("types", {
        name: 1,
        _id: 0,
      });

      if (pokeDb.length) {
        return pokeDb;
      } else {
        const pokeName = await models(name);
        if (pokeName) {
          return pokeName;
        } else {
        }
      }
      return [{ msg: "Pokemon Not Found" }];
    } catch (error) {
      console.log(error);
    }
  },
  creatType: async () => {
    let arrType = await getType();
    const types = await arrType.map(async (e) => {
      const aux = new Types({ name: e });
      await aux.save();
      return aux;
    });
    const typedb = await Promise.all(types);

    return typedb;
  },
  pokeDetail: async (id) => {
    try {
      if (id.length > 8) {
        let idDb = await Pokemon.find({ _id: id }).populate("types", {
          name: 1,
          _id: 0,
        });
        if (idDb.length) {
          return idDb;
        }
      }
      const detali = await models(id);

      if (detali.length) return detali;

      return { msg: "Pokemon Not Found" };
    } catch (error) {
      console.log("FALLO EL DETALLE", error);
    }
  },
};
