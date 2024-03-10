import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function CadastroProduto() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar dados para o servidor
  };

  return (
    <Container className="my-4">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="mb-4 text-center">Cadastro de Produto</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formNome" className="mb-3">
              <Form.Label>Nome do Produto</Form.Label>
              <Form.Control
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite o nome do produto"
              />
            </Form.Group>

            <Form.Group controlId="formPreco" className="mb-3">
              <Form.Label>Preço</Form.Label>
              <Form.Control
                type="number"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                placeholder="Digite o preço do produto"
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Cadastrar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CadastroProduto;
