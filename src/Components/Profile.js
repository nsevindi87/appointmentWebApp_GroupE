import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../Context/UsersContext";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const Profile = () => {
  const {
    user,
    getFilteredAppointments,
    userAppointments,
    setUserAppointments,
  } = useContext(UsersContext);

  useEffect(() => {
    getFilteredAppointments();
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/150"
              alt="User Avatar"
            />
            <Card.Body>
              <Card.Title>{`${user.firstName} ${user.lastName}`}</Card.Title>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>Role: {user.role}</ListGroup.Item>
                  <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          {userAppointments.map((app, index) => (
            <Card key={index} style={{ width: "28rem" }}>
              <Card.Body>
                <Card.Title>{`${user.firstName} ${user.lastName}`}</Card.Title>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Doctor Name: {app.illness}</ListGroup.Item>
                    <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
