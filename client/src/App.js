import { Route } from "react-router-dom";
import Home from "../src/views/Home";
import Pokemons from "../src/views/Pokemons";
import PokemonDetail from "../src/views/PokemonDetail";
import PokemonCreate from "./views/PokemonCreate";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getpokemonBack, getType } from "./store/action";



function App() {
  const state= useSelector(state => state.pokemonReducers.pokemons)
  const dispatch = useDispatch();
useEffect(() => {
    dispatch(getType());    
  }, [dispatch]);  
  useEffect(() => {
    dispatch(getpokemonBack());
  }, [dispatch]);
  
  return (
    <div>     
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Pokemons} />
       <Route path='/pokemons' exact component={PokemonCreate}/> 
      <Route path="/pokemons/:idPokemon" exact component={PokemonDetail} />
    </div>
  );
}

export default App;
