

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Nyhetsbrev = () => {

    
    return(
        <>
        <div className="container mt-5 pt-5">
            <h1>Nyhetsbrev</h1>
            <p>Meld deg opp til vårt nyhetsbrev her!</p>
        <Form className="mt-5" action="https://atlungstadspiseri.us1.list-manage.com/subscribe/post?u=405781cf28cd069d65bf28399&amp;id=47228a8704" method="post" method="post" id="mc-embedded-subscribe-form">
        
        <Form.Group controlId="formBasicEmail">
    <Form.Label>Email addresse <span class="asterisk">*</span></Form.Label>
    <Form.Control  placeholder="Email adresse"
        type="email" 
        id="mce-EMAIL"
        className="required email"
        required/>
    <Form.Text className="text-muted">
      Vi deler aldri din epost adresse med noen andre
    </Form.Text>
  </Form.Group>
  <Button variant="dark" type="submit" id="mc-embedded-subscribe">
  Ja takk! Jeg vil ha nyhetsbrev
  </Button>
        </Form>
        </div>
        </>
    )
}


export default Nyhetsbrev;



