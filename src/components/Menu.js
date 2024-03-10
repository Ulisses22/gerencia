import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, NavDropdown, Button, Modal, Form } from 'react-bootstrap';

function Menu() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = () => {
    // Lógica de autenticação simulada
    setLoggedInUser(username);
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    // Lógica de logout
    setLoggedInUser(null);
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {loggedInUser && (
              <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/cadastros/fornecedor">Fornecedor</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cadastros/produto">Produto</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cadastro">Cadastro</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          {loggedInUser ? (
            <Nav>
              <Nav.Link disabled>Usuário: {loggedInUser}</Nav.Link>
              <Button variant="outline-primary" onClick={handleLogout}>Logout</Button>
            </Nav>
          ) : (
            <Nav>
              <Button variant="primary" onClick={() => setShowLoginModal(true)}>Login</Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>

      <Modal show={showLoginModal} onHide={() => setShowLoginModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary mt-2 w-100" type="button" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}

export default Menu;
