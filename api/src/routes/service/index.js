const axios = require("axios");
require("../../db");
const Pokemon = require("../../models/Pokemon");
const Types = require("../../models/Types");

exports.getInfo = async () => {
  try {
    const pokeApi = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const resApi = await axios.get(pokeApi.data.next);
    const resApi2 = await axios.get(resApi.data.next);
    const allRes = pokeApi.data.results
      .concat(resApi.data.results)
      .concat(resApi2.data.results);
    const allPoke = await Promise.all(
      allRes.map(async (e) => {
        let p = await axios(e.url);
        return {
          id: p.data.id,
          name: p.data.name,
          hp: p.data.stats[0].base_stat,
          types: p.data.types.map((e) => {
            return { name: e.type.name };
          }),
          attack: p.data.stats[1].base_stat,
          defense: p.data.stats[2].base_stat,
          speed: p.data.stats[5].base_stat,
          height: p.data.height,
          weight: p.data.weight,
          img: p.data.sprites.other.home.front_default,
        };
      })
    );
    return allPoke;
  } catch (error) {
    console.log("FALLO LA FUNCION DE INFO DE LA API", error);
  }
};

exports.getDb = async () => {
  try {
    const pokemonEnDb = await Pokemon.find().populate("types", {
      name: 1,
      _id:0,
    });
    return pokemonEnDb;
  } catch (error) {
    console.log("FALLO LA FUNCION DE DATA BASE", error);
  }
};

exports.models = async (data) => {
  try {
    const modelo = await axios(`https://pokeapi.co/api/v2/pokemon/${data}`);
    if (modelo) {
      const pokeModel = [
        {
          id: modelo.data.id,
          name: modelo.data.name,
          hp: modelo.data.stats[0].base_stat,
          types: modelo.data.types.map((e) => {
            return { name: e.type.name };
          }),
          attack: modelo.data.stats[1].base_stat,
          defense: modelo.data.stats[2].base_stat,
          speed: modelo.data.stats[5].base_stat,
          height: modelo.data.height,
          weight: modelo.data.weight,
          img: modelo.data.sprites.other.home.front_default,
        },
      ];
      return pokeModel;
    }
  } catch (error) {
    console.log("FALLO EL MODELO", error);
  }
};

exports.getType = async () => {
  try {
    const result = await axios("https://pokeapi.co/api/v2/type");
    const type = result.data.results.map((e) => e.name);
    return type;
  } catch (error) {
    console.log("FALLARON LOS TIPOS", error);
  }
};
