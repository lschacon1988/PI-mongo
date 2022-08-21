import FilterCreate from "./FilterCreate";
import FilterType from "./FilterType";
import OrderBy from "./OrderBy";
import Search from "./Search";
import s from "../style/nav.module.css";
import { Link } from "react-router-dom";

export default function Nav({
  navigate,
  handle,
  handleOrderAlf,
  halndelPow,
  page,
}) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark d-flex p-2">
      <div className="container-fluid">
        <label className={s.logo}>
          <Link className={s.link} to="/">
            P
          </Link>
          okemons
        </label>
              
        <ul className={s.ul}>
          <Link to="/pokemons/creat">
            {" "}
            <li className={s.items}>
              <button
                className="btn btn-outline-success"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
              >
                Crear un Pokemon
              </button>
            </li>{" "}
        
          </Link>
          <li className={s.items}>
            <OrderBy handleOrderAlf={handleOrderAlf} halndelPow={halndelPow} />{" "}
          </li>
          <li className={s.items}>
            <FilterType navigate={navigate} />{" "}
          </li>
          <li className={s.items}>
            <FilterCreate handle={handle} />
          </li>
          <li className={s.items}>
            <Search page={page} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

/**
 * <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar scroll</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Link</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
 */
