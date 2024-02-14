import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


function Header() {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>

          <LinkContainer to="/">
            <Navbar.Brand>Neon Shop</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="navbarColor02" />
          <Navbar.Collapse id="navbarColor02">
            <Nav className="mr-auto">

              <LinkContainer to="/cart">
                <Nav.Link><i className="fas fa-shopping-cart"></i> Cart <span className="visually-hidden">(current)</span></Nav.Link>
              </LinkContainer>

              <LinkContainer to="/login">
                <Nav.Link ><i className="fas fa-user"></i> Login <span className="visually-hidden">(current)</span></Nav.Link>
              </LinkContainer>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header