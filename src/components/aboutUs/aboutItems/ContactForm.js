
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ContactForm(){
   
    
  return (
    <>

<Form>
  <Form.Group controlId="name">
    <Form.Label>Navn</Form.Label>
    <Form.Control type="name" placeholder="Skriv inn ditt navn" />
  </Form.Group>

  <Form.Group controlId="email">
    <Form.Label>Epost</Form.Label>
    <Form.Control type="email" placeholder="Epost adresse" />
  </Form.Group>
  <Form.Group controlId="text">
    <Form.Label>Melding</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Skriv inn din melding"/>
  </Form.Group>
  <Button variant="primary" type="submit">
    Send
  </Button>
</Form>


    </>
  );
}

export default ContactForm;