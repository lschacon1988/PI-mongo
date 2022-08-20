//@ts-check
import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BootstrapInput } from "../style/style";
export default function OrderBy({ handleOrderAlf,
  halndelPow }) {
  return (

     
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      {/* <BootstrapInput id="demo-customized-textbox" /> */}
      
      {/* <InputLabel id="demo-select-small">Alphabetica</InputLabel> */}
      <Select
        labelId="demo-select-small"
        id="demo-select-small"        
        label="Order"
        onChange={(e) => handleOrderAlf(e)}
        input={<BootstrapInput/>}
        placeholder='Alphabetica'
      >
        <MenuItem value="">
          <em>Order By Alphabetical</em>
        </MenuItem>        
        <MenuItem value="asc">A-Z</MenuItem>
        <MenuItem value="desc">Z-A</MenuItem>
      </Select>
      
      {/* //<InputLabel id="demo-select-small">Order By power</InputLabel> */}
      
    <Select
      style={{color: 'red'}}
      labelId="demo-select-small"
      id="demo-select-small"      
      label="Order"
      onChange={(e) => halndelPow(e)}
      input={<BootstrapInput/>}
      placeholder='power'
      >
        <MenuItem value="">
          <em>Order By power</em>
        </MenuItem>        
        <MenuItem value="max">max</MenuItem>
        <MenuItem value="min">min</MenuItem>
      </Select>
    </FormControl>
    
    
  );
}
