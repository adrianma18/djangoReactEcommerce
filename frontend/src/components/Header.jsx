import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';


function Header() {
  return (
    <header>
      <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Neon Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarColor02" />
          <Navbar.Collapse id="navbarColor02">
            <Nav className="mr-auto">
              <Nav.Link href="/cart" active><i className="fas fa-shopping-cart"></i> Cart <span className="visually-hidden">(current)</span></Nav.Link>
              <Nav.Link href="/login" active><i className="fas fa-user"></i> Login <span className="visually-hidden">(current)</span></Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header