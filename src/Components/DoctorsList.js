import React, { useContext, useEffect } from "react";
import { UsersContext } from "../Context/UsersContext";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";

const DoctorsList = () => {
  const { doctorList, getDoctorList } = useContext(UsersContext);

  useEffect(() => {
    getDoctorList();
  }, []);

  console.log("doktor listesi" + doctorList);
  return (
    <Container className="mt-4">
      <h1>Doctor Lists</h1>
      <hr></hr>
      <Row>
        {doctorList.map((doc, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150"
                alt="User Avatar"
              />
              <Card.Body>
                <Card.Title>
                  Name: {doc.firstName} {doc.lastName}
                </Card.Title>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Role: {doc.branch}</ListGroup.Item>
                    <ListGroup.Item>Email: {doc.email}</ListGroup.Item>
                  </ListGroup>
                  <Button variant="primary" className="w-100 mb-2">
                    Profile
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DoctorsList;
