import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../bitcoin.svg";
import Style from "./header.module.css";

export default function Header({setSearchedValue}) {
  const [value, setValue] = useState('');
  //search input value
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const onSearch = (e)=>{
    e.preventDefault();
    setSearchedValue(value);
    setValue('');
  }
  return (
    <>
      <header>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="60"
                height="60"
                className="d-inline-block"
                alt="React Bootstrap logo"
                animated='true'
              />
              Shitcoin
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* link container import from bootstrap router instead LINK in normal mode */}
                <LinkContainer to={"/"}>
                  <Nav.Link >Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/forum"}>
                  <Nav.Link >Forum</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Dropdown test" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="/">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div className={Style.group}></div>
              <form className="d-flex input-group " id="form1">
                <input
                  type="search"
                  className="form-control col-8"
                  placeholder="type smthing.."
                  onChange={onChangeHandler}
                  value={value}
                />
                <button className="btn btn-outline-light col-2 "
                 variant="dark"
                 onClick={onSearch}
                 >
                  search
                </button>
              </form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
