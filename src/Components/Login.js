import { Form, Button, Container, Row, Col } from "react-bootstrap";
import React, { useContext } from "react";
import { UsersContext } from "../Context/UsersContext";

const Login = () => {
  const { email, setEmail, password, setPassword, handleLoginSubmit } =
    useContext(UsersContext);

  return (
    <Container>
      <Row>
        <Col md={5}>
          <h2>Login</h2>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
