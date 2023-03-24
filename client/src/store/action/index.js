import {
  CREATE_POKEMON,
    FILTER_CREATE,
  FILTER_TYPE,
  GET_POKEMONS,
  GET_TYPE,
  NAME_POKEMON,
  ORDER_BY,
  ORDER_BY_POWER,
} from "./actionType";
import axios from "axios";

function setPokemons(type, payload) {
  return { type: type, payload };
}
export function setLoading(payload){
  return{type:'SET_LOADING',payload}
}

export function getpokemonBack() {
  return async (dispatch) => {
    dispatch(setLoading(true))
    console.log(axios.get())
    const response = await axios.get("/pokemons");
    const { data } = response;
    if(data.length>0){
      dispatch(setLoading(false))
     return dispatch(setPokemons(GET_POKEMONS, data));

    }
  };
}

export function getPokemonNAME(name) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    const response = await axios.get(
      `/pokemons?name=${name}` 
    );
    const { data } = response;
    if(data.length>0){
      dispatch(setLoading(false))
      return dispatch({ type: NAME_POKEMON, payload: data });
    }    
  };
}

export function getType(){
  return async (dispatch) =>{
    const response = await axios.get('/types')
    const {data} = response    
    return dispatch({type: GET_TYPE, payload: data})
  }
}
export function postPokemon (payload){  
  return async function (dispatch){
      const response = await axios.post('/pokemons/creat',payload);
      const {data} =response
     
      return dispatch({type: CREATE_POKEMON, payload: data})     
  }
}

export function ordenBy(payload) {
  return {
    type: ORDER_BY,
    payload: payload,
  }
}


export function filterType(payload) {
  return {
    type: FILTER_TYPE,
    payload: payload,
  };
}

export function filterCreate(payload){
    return{
        type : FILTER_CREATE,
        payload: payload
    }
}

export function filterpeso(payload){
  return{
    type : 'FILTER_PESO',
    payload: payload
  }
}