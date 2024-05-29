import React, { useContext, useEffect } from "react";
import { UsersContext } from "../Context/UsersContext";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = () => {
  const { appoFormData, setAppoFormData, user, handleAppointmentSubmit } =
    useContext(UsersContext);

  useEffect(() => {
    setAppoFormData((prevFormData) => ({
      ...prevFormData,
      userId: user.id,
    }));
  }, [user, setAppoFormData]);

  return (
    <Container>
      <Row>
        <h1 className="my-3">Make an Appointment</h1>
        <hr />
        <Col md={5}>
          <Form onSubmit={handleAppointmentSubmit}>
            <Form.Group controlId="illness">
              <Form.Label>Illness</Form.Label>
              <Form.Control
                as="select"
                name="illness"
                value={appoFormData.illness}
                onChange={(e) =>
                  setAppoFormData({
                    ...appoFormData,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              >
                <option value="">Choose Illness</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Cardiovascular">Cardiovascular</option>
                <option value="Pediatrics">Pediatrics</option>
                <option value="Oncology">Oncology</option>
                <option value="Urology">Urology</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="doctor" className="my-4">
              <Form.Label>Doctor</Form.Label>
              <Form.Control
                as="select"
                name="doctorName"
                value={appoFormData.doctor}
                onChange={(e) =>
                  setAppoFormData({
                    ...appoFormData,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              >
                <option value="">Choose Doctor</option>
                {appoFormData.illness === "Orthopedics" && (
                  <>
                    <option value="Dr. John Smith">Dr. John Smith</option>
                    <option value="Dr. Emily Johnson">Dr. Emily Johnson</option>
                    <option value="Dr. Pierre Dupont">Dr. Pierre Dupont</option>
                  </>
                )}
                {appoFormData.illness === "Cardiovascular" && (
                  <>
                    <option value="Dr. Maria Rossi">Dr. Maria Rossi</option>
                    <option value="Dr. Hans Müller">Dr. Hans Müller</option>
                    <option value="Dr. Yoko Tanaka">Dr. Yoko Tanaka</option>
                  </>
                )}
                {appoFormData.illness === "Pediatrics" && (
                  <>
                    <option value="Dr. Li Wei">Dr. Li Wei</option>
                    <option value="Dr. Vladimir Ivanov">
                      Dr. Vladimir Ivanov
                    </option>
                    <option value="Dr. Ana García">Dr. Ana García</option>
                  </>
                )}
                {appoFormData.illness === "Oncology" && (
                  <>
                    <option value="Dr. Ingrid Bergman">
                      Dr. Ingrid Bergman
                    </option>
                    <option value="Dr. Ahmed El-Sayed">
                      Dr. Ahmed El-Sayed
                    </option>
                    <option value="Dr. Olga Petrovna">Dr. Olga Petrovna</option>
                  </>
                )}
                {appoFormData.illness === "Urology" && (
                  <>
                    <option value="Dr. Fatima Al-Farsi">
                      Dr. Fatima Al-Farsi
                    </option>
                    <option value="Dr. Rahul Kapoor">Dr. Rahul Kapoor</option>
                    <option value="Dr. Carmen Hernandez">
                      Dr. Carmen Hernandez
                    </option>
                  </>
                )}
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="date" className="my-4">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={appoFormData.date}
                onChange={(e) =>
                  setAppoFormData({
                    ...appoFormData,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
            </Form.Group>

            <Form.Group controlId="time" className="my-4">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={appoFormData.time}
                onChange={(e) =>
                  setAppoFormData({
                    ...appoFormData,
                    [e.target.name]: e.target.value,
                  })
                }
                required
              />
            </Form.Group>
            <Form.Group controlId="description" className="my-4">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={appoFormData.description}
                onChange={(e) =>
                  setAppoFormData({
                    ...appoFormData,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AppointmentForm;
