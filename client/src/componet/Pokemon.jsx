import { useState } from "react";
import s from "../style/card.module.css";

export default function Pokemon(props) {
  const { pokemon, navigate } = props;
  console.log(pokemon);
  const { name, img, id, _id, types, msg } = pokemon;

  return pokemon.msg ? (
    <h1>{msg}</h1>
  ) : (
    <div
      className="card d-inline-flex p-2"
      style={{
        width: "18rem",
        background: "rgba(0,0, 0,.7)",

        color: "#fafafa",

        borderRadius: "9px",
        boxShadow: "0 2px 2px rgba(0 0 0 0.2)",
        overflow: "hidden",
        margin: " 1.5rem",

        transition: " all 0.25s",
        boxSizing: "border-box",
      }}
    >
      <div className={s.card}>
        <button
          style={{ background: "rgba(0,0, 0,.7)" }}
          className={s.btn}
          onClick={() => navigate(_id ? _id : id)}
        >
          <img
            className="card-img-top"
            style={{
              height: "20%",              
              // maxheight: "100%",
              // height: "100%",
              // maxheight: "100% ",
              position:'relative',
              bottom:'20px'
            }}
            src={
              img
                ? img
                : "https://i.pinimg.com/236x/bb/65/ac/bb65acb8eced7c4a1fbce90916211e80--sticker-vinyl-car-decals.jpg"
            }
            alt={name}
          />
        </button>
        <div className="card-body ">
          <h3 className="card-title">{name}</h3> <b />
          <p className="card-text">
            Types:{" "}
            {types?.map((e) => {
              return (
                <ul key={e.name}>
                  <li>{e.name}</li>
                </ul>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
}
