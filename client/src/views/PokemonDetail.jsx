import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import load from '../style/loading.module.css'
import s from "../style/detail.module.css";
import { setLoading } from "../store/action";

export default function PokemonDetail() {
  const { idPokemon } = useParams();
  const [state, setState] = useState();
  const loading = useSelector(state=> state.app.loading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLoading(true))
    axios
      .get(`http://localhost:3001/pokemons/${idPokemon}`)
      .then((response) => {
        dispatch(setLoading(false))
        setState(response.data);
      });
  }, [idPokemon]);
  return (
    
    <div className={s.contenedor}>
    {loading ? 
      <img className={load.loading} alt='' src={'http://dribbble.s3.amazonaws.com/users/121337/screenshots/1024835/loading2.gif'}/>:
      <main className={s.cardDetail}>
      {state &&
        state.map((e) => (
          <div key={e.id? e.id: e._id}>
              <section>
                <h3>Nombre y ID</h3>
                <p>
                  {" "}
                  Name: {e.name} ID: {e.id? e.id: e._id}
                </p>
                <h3>Estadisticas</h3>
                <p>
                  {" "}
                  Vida: {e.hp} Fuerza: {e.attack} Velocidad: {e.speed}
                </p>
                <h3>Dimenciones</h3>
                <p>
                  {" "}
                  Altura: {e.height} Peso: {e.weight}
                </p>
                <Link to="/pokemons">
                  <button>Volver</button>
                </Link>
                <article>
                  <img
                    src={
                      e.img
                      ? e.img
                      : "https://i.pinimg.com/236x/bb/65/ac/bb65acb8eced7c4a1fbce90916211e80--sticker-vinyl-car-decals.jpg"
                    }
                    alt={e.name}
                    />
                </article>
              </section>
            </div>
          ))}
          </main>
        }
          </div>
  );
}
