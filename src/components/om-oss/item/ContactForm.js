import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactForm() {
  const [state, handleSubmit] = useForm("myylkany");
  if (state.succeeded) {
    return (
      <p className="succeeded">
        <i class="fas fa-check-circle"></i> Takk for din melding, vi kontakter
        deg så fort som mulig!
      </p>
    );
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label>Navn</Form.Label>

      <Form.Control id="name" name="name" placeholder="Ditt navn" />
      <Form.Label>Email Adresse</Form.Label>

      <Form.Control
        id="email"
        type="email"
        name="email"
        placeholder="Din epost adresse"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <Form.Label>Melding</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        id="message"
        name="message"
        placeholder="Skriv din melding"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <Button type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;
