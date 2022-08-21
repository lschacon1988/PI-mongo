import { Form } from "react-bootstrap";

export default function FilterCreate({ handle }) {
  return (
    <Form.Select
      style={{ background: "#4d5061", color: "#f29718" }}
      
      onChange={(e) => handle(e)}
      size="sm"
    >
      <option value="all">Filter Create</option>
      <option value="existente">Existente</option>
      <option value="created">Creado</option>
    </Form.Select>

    // <select className=""  style={styleSelec} onChange={(e) => handle(e)} >
    //   <option value="all">Filter Create</option>
    //   <option value="existente">Existente</option>
    //   <option value="created">Creado</option>
    // </select>
  );
}
