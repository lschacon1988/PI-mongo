import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getPokemonNAME } from "../store/action";
import  s  from "../style/nav.module.css";

export default function Search({ page }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value.toLowerCase());
    page(1);
  };

  const onSearch = (e) => {
    e.preventDefault();
    dispatch(getPokemonNAME(name));
    setName("");
  };
  return (
    <div>
       <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => handleInputChange(e)}
            />
            <Button className={s.btn}  onClick={(e) => {
            onSearch(e);
          }} variant="outline-success">Search</Button>
          </Form>

      {/* <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar un Pokemon"
          onChange={(e) => handleInputChange(e)}
        />
        <button
          className="btn btn-outline-success"
          
          type="submit"
          onClick={(e) => {
            onSearch(e);
          }}
        >
          Buscar
        </button>
      </form> */}
    </div>
  );
}

//   function handleInputChange(e){
//     e.preventDefault();
//     setName(e.target.value)
//     //console.log(name)
// }

// function handleSubmit(e){
//     e.preventDefault();
//     dispatch(searchRecipesByName(name))
//     .then(()=>{ returnToFirstPage()})
//     setName('')

// }
// import React from 'react';
// import { useState } from 'react';
// import { useDispatch} from 'react-redux';
// import {searchRecipesByName} from '../actions';
// import './SearchBar.css';

// export default function SearchBar({returnToFirstPage}){

//     const dispatch = useDispatch()

//     const [name,setName] = useState('')

// function handleInputChange(e){
//     e.preventDefault();
//     setName(e.target.value)
//     //console.log(name)
// }

// function handleSubmit(e){
//     e.preventDefault();
//     dispatch(searchRecipesB
