//@ts-check
const { Router } = require("express");
const { creatType } = require("./controladores/controladores");
const getPokemon = require("./modelRouter/getPkemon")

const router = Router();

router.use('/', getPokemon)

router.get("/types", async (req, res, next) => {
    try {
      const type = await creatType();
      
      res.json(type);
    } catch (error) {
      next(error);
    }
  });
module.exports = router;