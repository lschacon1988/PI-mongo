import * as React from "react";
import { useSelector } from "react-redux";
import s from "../style/filters.module.css";
import { BootstrapInput, styleSelec } from "../style/style";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function FilterType({ navigate }) {
  const pokemontype = useSelector((state) => state.pokemonReducers.allTypes);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">Types</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="type"
          // value="type"
          onChange={(e) => navigate(e)}
          input={<BootstrapInput/>}
        >
          <MenuItem value='all'>Types</MenuItem>
          {pokemontype &&
            pokemontype.map((e) => (
              //<option value={} key={e.name}>{e.name}</option>
              <MenuItem value={e.name} key={e.name}>
                {e.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>

    // <select className=""  style={styleSelec}  onChange={(e) => navigate(e)}>
    //   <option selected value="all">Types</option>
    //   {pokemontype && pokemontype.map(e=>(
    //     <option value={e.name} key={e.name}>{e.name}</option>
    //     ))}
    // </select>
  );
}
