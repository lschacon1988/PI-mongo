
import { FormControl, MenuItem, Select } from "@mui/material";
import s from "../style/filters.module.css"
import {BootstrapInput, styleSelec } from "../style/style";
export default function FilterCreate({ handle }) {
  return (

    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
    {/* <BootstrapInput id="demo-customized-textbox" /> */}
    
    {/* <InputLabel id="demo-select-small">Alphabetica</InputLabel> */}
    <Select
      labelId="demo-select-small"
      id="demo-select-small"
      
      label="Order"
      onChange={(e) => handle(e)}
      input={<BootstrapInput/>}
      
    >
      <MenuItem value="all">
        <em>Filter Create</em>
      </MenuItem>        
      <MenuItem value="existente">Existente</MenuItem>
      <MenuItem value="created">Creado</MenuItem>
    </Select>
    </FormControl>
   
    // <select className=""  style={styleSelec} onChange={(e) => handle(e)} >
    //   <option value="all">Filter Create</option>
    //   <option value="existente">Existente</option>
    //   <option value="created">Creado</option>
    // </select>
  
  );
}

