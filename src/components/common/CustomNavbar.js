import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export default class CustomNavbar extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>BOOK NOTES</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              {this.props.authenticated ? (
                <>
                  <LinkContainer to="/profile">
                    <Nav.Link className="nav-link">Profile</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <Nav.Link
                      className="nav-link"
                      onClick={this.props.handleLogout}
                    >
                      Logout
                    </Nav.Link>
                  </LinkContainer>
                </>
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link className="nav-link">Login</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/signup">
                    <Nav.Link className="nav-link">SignUp</Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
