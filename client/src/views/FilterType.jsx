import * as React from "react";
import { useSelector } from "react-redux";
import { Form } from "react-bootstrap";

export default function FilterType({ navigate }) {
  const pokemontype = useSelector((state) => state.pokemonReducers.allTypes);

  return (
    <Form.Select
      size="sm"
      style={{ background: "#4d5061", color: "#f29718" }}
      onChange={(e) => navigate(e)}
    >
      <option style={{ padding: "2px" }}>Types</option>
      {pokemontype &&
        pokemontype.map((e, i) => (
          <option value={e.name} key={i}>
            {e.name}
          </option>
        ))}
    </Form.Select>
  );
}
