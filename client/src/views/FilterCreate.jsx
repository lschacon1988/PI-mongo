
import s from "../style/filters.module.css"
import {styleSelec } from "../style/style";
export default function FilterCreate({ handle }) {
  return (
   
    <select className=""  style={styleSelec} onChange={(e) => handle(e)} >
      <option value="all">Filter Create</option>
      <option value="existente">Existente</option>
      <option value="created">Creado</option>
    </select>
  
  );
}

