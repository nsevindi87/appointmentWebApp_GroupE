import React, { useContext, useEffect } from "react";
import { UsersContext } from "../Context/UsersContext";
import { Form, Button, Container } from "react-bootstrap";
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

        <Form.Group controlId="doctor">
          <Form.Label>Doctor</Form.Label>
          <Form.Control
            as="select"
            name="doctorId"
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
            {appoFormData.illness === "eye" && (
              <>
                <option value="1">Dr. John Smith</option>
                <option value="2">Dr. Emily Johnson</option>
                <option value="3">Dr. Pierre Dupont</option>
              </>
            )}
            {appoFormData.illness === "heart" && (
              <>
                <option value="4">Dr. Maria Rossi </option>
                <option value="5">Dr. Hans Müller</option>
                <option value="6">Dr. Yoko Tanaka</option>
              </>
            )}
            {appoFormData.illness === "bone" && (
              <>
                <option value="7">Dr. Li Wei</option>
                <option value="8">Dr. Vladimir Ivanov</option>
                <option value="9">Dr. Ana García</option>
              </>
            )}
            {appoFormData.illness === "skin" && (
              <>
                <option value="10">Dr. Ingrid Bergman</option>
                <option value="11">Dr. Ahmed El-Sayed</option>
                <option value="12">Dr. Olga Petrovna</option>
              </>
            )}
            {appoFormData.illness === "lung" && (
              <>
                <option value="13">Dr. Fatima Al-Farsi</option>
                <option value="14">Dr. Rahul Kapoor</option>
                <option value="15">Dr. Carmen Hernandez</option>
              </>
            )}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="date">
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

        <Form.Group controlId="time">
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
        <Form.Group controlId="description">
          <Form.Label>Açıklama</Form.Label>
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
          Randevu Oluştur
        </Button>
      </Form>
    </Container>
  );
};

export default AppointmentForm;
