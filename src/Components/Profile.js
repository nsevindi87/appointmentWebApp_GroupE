import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../Context/UsersContext";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const Profile = () => {
  const {
    user,
    fetchAppointments,
    appointments,
    allUsers,
    getAllUsers,
    setAppointments,
  } = useContext(UsersContext);

  const [userAppointments, setUserAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
    getAllUsers();
    if (user && appointments.length > 0) {
      const filteredAppointments = appointments.filter(
        (appointment) => appointment.userId === user.id
      );
      setUserAppointments(filteredAppointments);
    }
  }, [user]);

  console.log(user);
  console.log(appointments);
  console.log(userAppointments);
  console.log(allUsers);

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
