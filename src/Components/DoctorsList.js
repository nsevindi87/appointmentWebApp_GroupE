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
      <h1>Doctor List</h1>
      <hr></hr>
      <Row>
        {doctorList.map((doc, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card style={{ width: "22rem", height: "42rem" }}>
              <Card.Header>
                <Card.Title>
                  {doc.firstName} {doc.lastName}
                </Card.Title>
              </Card.Header>
              <Card.Img
                variant="top"
                src={doc.pictureURL}
                alt="User Avatar"
                className="card-img"
              />
              <Card.Body>
                <Card.Text>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Branch: {doc.branch}</ListGroup.Item>
                    <ListGroup.Item>Role: {doc.role}</ListGroup.Item>
                  </ListGroup>
                  <Button variant="primary" className="w-100 mb-2">
                    Profile
                  </Button>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">{doc.email}</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DoctorsList;
