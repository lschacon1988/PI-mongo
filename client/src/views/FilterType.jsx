
import {  useSelector } from "react-redux";
import s from "../style/filters.module.css";
import {  styleSelec } from "../style/style";


export default function FilterType({ navigate }) {
  
  const pokemontype = useSelector((state) => state.pokemonReducers.allTypes);
  
  return (  
    <select className=""  style={styleSelec}  onChange={(e) => navigate(e)}>
      <option selected value="all">Types</option>
      {pokemontype && pokemontype.map(e=>(
        <option value={e.name} key={e.name}>{e.name}</option>
        ))}
    </select>     
  );
}
