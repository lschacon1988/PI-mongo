import {
  CREATE_POKEMON,
  FILTER_CREATE,
  FILTER_TYPE,
  GET_POKEMONS,
  GET_TYPE,
  NAME_POKEMON,
  ORDER_BY,
  
} from "../action/actionType";

const initialState = {
  pokemons: [],
  pokemonAll: [],
  allTypes: [],
};

export default function pokemonReducers(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_POKEMONS: {
      return {
        ...state,
        pokemonAll: payload,
        pokemons: payload,
      };
    }
    case GET_TYPE: {
      return {
        ...state,
        allTypes: payload,
      };
    }
    case NAME_POKEMON: {
      return {
        ...state,
        pokemons: payload,
      };
    }
    case FILTER_TYPE: {
      /**filta elementos por tipo */
      const allpokemons = state.pokemonAll;
      const typePokemons =
        payload === "all"
          ? allpokemons
          : allpokemons.filter((e) => {
              return e.types.find((t) => t.name === payload);
            });

      return {
        ...state,
        pokemons: typePokemons,
      };
    }

    case FILTER_CREATE: {
      /**filtra solo los elementos si vienen de la DB o de la api */
      const allpokemons = state.pokemonAll;
      const createPokemon =
        payload === "created"
          ? allpokemons.filter((e) => e.createDb)
          : allpokemons.filter((e) => !e.createDb);
      return {
        ...state,
        pokemons: createPokemon,
      };
    }
    case ORDER_BY: {
      /**comprobar que tipo de ordenamiento se solicita */
      const allpokemons = state.pokemons;
      let pokemonOrder = [];
      if (payload === "asc") {
        pokemonOrder = allpokemons.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (b.name > a.name) return -1;
          return 0;
        });
      }
      if (payload === "desc") {
        pokemonOrder = allpokemons.sort((a, b) => {
          if (a.name > b.name) return -1;
          if (b.name > a.name) return 1;
          return 0;
        });
      }
      if (payload === "max") {
        pokemonOrder = allpokemons.sort((a, b) => {
          if (a.attack > b.attack) return -1;
          if (b.attack > a.attack) return 1;
          return 0;
        });
      }
      if (payload === "min") {
        pokemonOrder = allpokemons.sort((a, b) => {
          if (a.attack > b.attack) return 1;
          if (b.attack > a.attack) return -1;
          return 0;
        });
      }
      pokemonOrder = allpokemons;

     
      return {
        ...state,
        pokemons: pokemonOrder,
      };
    }
    
    case CREATE_POKEMON: {
      return {
        ...state,
        pokemons: [...state.pokemons, payload],
      };
    }

    case "FILTER_PESO": {
      const allpokemons = state.pokemonAll;
      const pokemonPeso = allpokemons.filter((e) => e.weight >= 800);
      return {
        ...state,
        pokemons: pokemonPeso,
      };
    }
    default:
      return state;
  }
}
