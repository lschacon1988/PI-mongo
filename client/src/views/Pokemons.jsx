import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pokemon from "../componet/Pokemon";
import {
  filterCreate,
  filterType,
  getpokemonBack,
  ordenBy,
} from "../store/action";
import s from "../style/card.module.css";
import load from "../style/loading.module.css";
import Paginado from "./Paginado";
import React from "react";
import { useEffect } from "react";
import NavBarExample from "./NavBarExample";
import { TabContainer } from "react-bootstrap";

export default function Pokemons(props) {
  const {
    history: { push },
  } = props;

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.app.loading);
  const [order, setOrder] = useState("");
  const pokemons = useSelector((state) => state.pokemonReducers.pokemons);
  useEffect(() => {
    dispatch(getpokemonBack());
  }, []);
  // PAGINADO
  const [currentPage, setCurrentPage] = useState(1);
  const [limitPage, setLimitpage] = useState(12);
  const indexOfLastPage = currentPage * limitPage;
  const indexOffirstpage = indexOfLastPage - limitPage;
  const currentPokemos = pokemons?.slice(indexOffirstpage, indexOfLastPage);
  const next = (e) => {
    e.preventDefault();
    if (currentPokemos.length < 9) {
      return;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  const prev = (e) => {
    e.preventDefault();
    if (currentPage <= 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const paginado = (pag) => {
    setCurrentPage(pag);
  };

  const handleNavigate = (id) => {
    push(`/pokemons/${id}`);
  };

  const handleFilterType = (e) => {
    dispatch(filterType(e.target.value));
    setCurrentPage(1);
  };
  const handleFilterCreate = (e) => {
    dispatch(filterCreate(e.target.value));
    setCurrentPage(1);
  };

  function handleOderBy(e) {
    dispatch(ordenBy(e.target.value));
    // setCurrentPage(1);
    setOrder(e.target.value);
  }

  return (
    <TabContainer>
      <div className={s.container_home}>
        <NavBarExample
          navigate={handleFilterType}
          page={setCurrentPage}
          handle={handleFilterCreate}
          handleOrderBy={handleOderBy}
        />
        <div className={s.contenedor}>
          {loading ? (
            <img
              className={load.loading}
              alt=""
              src={
                "http://dribbble.s3.amazonaws.com/users/121337/screenshots/1024835/loading2.gif"
              }
            />
          ) : (
            currentPokemos?.map((pokemon) => (
              <Pokemon
                key={pokemon.id}
                pokemon={pokemon}
                // key={pokemon.speed}
                navigate={handleNavigate}
              />
            ))
          )}
        </div>
        <Paginado
          currentPokemos={currentPokemos.length}
          next={next}
          prev={prev}
          pokemons={pokemons?.length}
          limitPage={limitPage}
          paginado={paginado}
        />
      </div>
    </TabContainer>
  );
}
