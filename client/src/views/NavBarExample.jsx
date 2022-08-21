import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Form,
  Button,
  NavDropdown,
  Nav,
} from "react-bootstrap";
import FilterType from "./FilterType";
import FilterCreate from "./FilterCreate";
import OrderBy from "./OrderBy";
import Search from "./Search";

const NavBarExample = ({page}) => {
  return (
    <Navbar  bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to='/'>Pokemons</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/pokemons/creat'>Crea tu Pokemon</Nav.Link>

            <FilterCreate/>

            <OrderBy/>
            
            <FilterType/>
            
          </Nav>
         <Search page={page} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarExample;
