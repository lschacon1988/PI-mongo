const { Router } = require("express");
require("../../db");
const Pokemon = require("../../models/Pokemon");
const Types = require("../../models/Types");
const {
  getName,
  getAllPoke,
  pokeDetail,
} = require("../controladores/controladores");

const router = Router();
router.get("/pokemons", async (req, res, next) => {
  const { name } = req.query;
  
  try {
    if (name) {
      let p = await getName(name);
      return res.json(p);
    } else {
      let allPoke = await getAllPoke();
      return res.json(allPoke);
    }
  } catch (error) {
    next(error);
  }
});
router.get("/pokemons/:idPokemon", async (req, res, next) => {
  const { idPokemon } = req.params;
  try {
    let p = await pokeDetail(idPokemon);
    if (p) return res.json(p);
  } catch (error) {
    next(error);
  }
});
router.post("/pokemons", async (req, res, next) => {
  const { name, hp, types, attack, defense, speed, height, weight, img } =
    req.body;
  try {
    const typesDb = await types?.map(async (e) => await Types.find({ name: e }));
    const type = await Promise.all(typesDb);

    const typeid = type?.map((e) => e?.find((e) => e._id));
    let newPoke = await new Pokemon({
      name: name,
      hp: hp,
      attack: attack,
      defense: defense,
      speed: speed,
      height: height,
      weight: weight,
      types: typeid,
      img: img,
      createDb: true,
    });
    await newPoke.save();
    let pokeDb = await Pokemon.find({
      name: name,
    }).populate('types',{
      name:1,      
      _id:0
    });
    

    res.json(pokeDb);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
