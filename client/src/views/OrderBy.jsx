//@ts-check
import React from "react";
import { styleSelec } from "../style/style";
export default function OrderBy({ handleOrderAlf,
  halndelPow }) {
  return (
    <div className="d-inline-flex p-2">
      <select className="" aria-label=".form-select-lg example" style={styleSelec} onChange={(e) => handleOrderAlf(e)}>
        <option value="all">Order By Alphabetical</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      <select className="" aria-label=".form-select-lg example" style={styleSelec} onChange={(e) => halndelPow(e)}>
        <option value="default">Order By power</option>
        <option value="max">max</option>
        <option value="min">min</option>
      </select>
    </div>
    
  );
}
