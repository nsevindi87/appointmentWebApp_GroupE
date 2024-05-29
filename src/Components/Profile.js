import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../Context/UsersContext";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";

const Profile = () => {
  const {
    user,
    getFilteredAppointments,
    userAppointments,
    deleteUserAppointment,
  } = useContext(UsersContext);

  const handleDeleteAppointment = (index) => {
    deleteUserAppointment(index);
  };

  useEffect(() => {
    getFilteredAppointments();
  }, []);
  console.log(userAppointments);
  return (
    <Container className="mt-4">
      <h1>Wellcome {user.firstName}</h1>
      <hr></hr>
      <Row>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/150"
              alt="User Avatar"
            />
            <Card.Body>
              <Card.Title>
                {user.firstName} {user.lastName}
              </Card.Title>
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
          {userAppointments.length > 0 && (
            <h3>You have {userAppointments.length} appointments!</h3>
          )}
          {userAppointments.map((app, index) => (
            <Card key={index} style={{ width: "28rem" }} className="my-3">
              <Card.Body>
                <Card.Title>Doctor Name: {app.doctorName}</Card.Title>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      Date: {new Date(app.date).toLocaleDateString("en-US")}
                    </ListGroup.Item>
                    <ListGroup.Item>Time: {app.time}</ListGroup.Item>
                    <ListGroup.Item>Department: {app.illness}</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteAppointment(app.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
