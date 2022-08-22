import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Button, Nav } from "react-bootstrap";
import FilterType from "./FilterType";
import FilterCreate from "./FilterCreate";
import OrderBy from "./OrderBy";
import Search from "./Search";
import s from "../style/nav.module.css";

const NavBarExample = ({ page, navigate, handle, handleOrderBy }) => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand
          style={{ color: "#f29718", fontSize: "25px" }}
          as={Link}
          to="/"
        >
          Pokemons
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Item className={s.itemBoot}>
              <Button className={s.btn} as={Link} to="/pokemons/creat">
                Crea un Pokemon
              </Button>
            </Nav.Item>
            <Nav.Item className={s.itemBoot}>
              <FilterCreate handle={handle} />
            </Nav.Item>
            <Nav.Item className={s.itemBoot}>
              <OrderBy handleOrderBy={handleOrderBy} />
            </Nav.Item>
            <Nav.Item className={s.itemBoot}>
              <FilterType navigate={navigate} />
            </Nav.Item>
          </Nav>
          <Search page={page} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarExample;
