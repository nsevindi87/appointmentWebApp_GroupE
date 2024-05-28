import React, { useContext } from "react";
import { UsersContext } from "../Context/UsersContext";
import { Form, Button } from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = () => {
  const { appoFormData, setAppoFormData, user } = useContext(UsersContext);

  // Form verileri için state

  // Form verilerini güncelleme fonksiyonu
  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;
    setAppoFormData({ ...appoFormData, [name]: value });
  };

  // Formun gönderilmesi
  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    // TODO: Form verilerini backende gönderme
    console.log(appoFormData);
  };

  return (
    <Form onSubmit={handleAppointmentSubmit}>
      <Form.Group controlId="illness">
        <Form.Label>Hastalık</Form.Label>
        <Form.Control
          as="select"
          name="illness"
          value={appoFormData.illness}
          onChange={handleAppointmentChange}
          required
        >
          <option value="">Hastalık Seçin</option>
          <option value="eye">Göz Hastalığı</option>
          <option value="heart">Kalp Hastalığı</option>
          <option value="bone">Kemik Hastalığı</option>
          <option value="skin">Cilt Hastalığı</option>
          <option value="lung">Akciğer Hastalığı</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="doctor">
        <Form.Label>Doktor</Form.Label>
        <Form.Control
          as="select"
          name="doctor"
          value={appoFormData.doctor}
          onChange={handleAppointmentChange}
          required
        >
          <option value="">Doktor Seçin</option>
          {appoFormData.illness === "eye" && (
            <>
              <option value="Dr. Ahmet">Dr. Ahmet</option>
              <option value="Dr. Ayşe">Dr. Ayşe</option>
              <option value="Dr. Mehmet">Dr. Mehmet</option>
            </>
          )}
          {appoFormData.illness === "heart" && (
            <>
              <option value="Dr. Fatma">Dr. Fatma</option>
              <option value="Dr. Gökhan">Dr. Gökhan</option>
              <option value="Dr. Zeynep">Dr. Zeynep</option>
            </>
          )}
          {/* Diğer hastalıklar için benzer şekilde */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="date">
        <Form.Label>Tarih</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={appoFormData.date}
          onChange={handleAppointmentChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="time">
        <Form.Label>Saat</Form.Label>
        <Form.Control
          type="time"
          name="time"
          value={appoFormData.time}
          onChange={handleAppointmentChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Açıklama</Form.Label>
        <Form.Control
          as="textarea" // Text alanı olarak belirtiliyor
          rows={3} // Satır sayısı belirlenebilir
          name="description"
          value={appoFormData.description}
          onChange={handleAppointmentChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Randevu Oluştur
      </Button>
    </Form>
  );
};

export default AppointmentForm;
