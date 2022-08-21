import * as React from "react";
import { useSelector } from "react-redux";
import s from "../style/filters.module.css";
import { BootstrapInput, styleSelec } from "../style/style";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Form } from "react-bootstrap";

export default function FilterType({ navigate }) {
  const pokemontype = useSelector((state) => state.pokemonReducers.allTypes);

  return (
    <Form.Select
      size="sm"
      style={{ background: "#4d5061", color: "#f29718"}}
      onChange={(e) => navigate(e)} 
          
    >
      <option style={{padding:'2px'}} >Types</option>
      {pokemontype &&
        pokemontype.map((e, i) => (
          <option value={e.name} key={i}>
            {e.name}
          </option>
        ))}
    </Form.Select>

    // <select className=""  style={styleSelec}  onChange={(e) => navigate(e)}>
    //   <option selected value="all">Types</option>
    //   {pokemontype && pokemontype.map(e=>(
    //     <option value={e.name} key={e.name}>{e.name}</option>
    //     ))}
    // </select>
  );
}
