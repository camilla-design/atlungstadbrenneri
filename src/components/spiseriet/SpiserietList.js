import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL } from "../../constants/api/API_URL";



import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';



function SpiserietList() {
    const API = API_URL + "spiseriets";

    const [info, setInfo] = useState(null)
    
    useEffect(() => {
        axios.get(API)
        .then(response => {
            setInfo(response.data)
            console.log(response.data)
        })
    }, [API])
        

    if(info) {
        return (
            <>
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header className="card-background">
      <Accordion.Toggle  variant="dark" as={Button} eventKey="0">
        Meny
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <h3>~ {info[0].title} ~</h3>
        <p>{info[0].description}</p>
        <a href="/meny">Les mer</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="dark" eventKey="1">
        Take Away
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      <h3>~ {info[1].title} ~</h3>
        <p>{info[1].description}</p>
        <a href="https://ecom.susoft.com/atlungstadtakeaway/products/?fbclid=IwAR0tyhdG3aTuqSPrLdqBouHTs2OQJTS98MtA2W3dWsR_BcWHuRTs-1P7lyU">Les mer</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="dark" eventKey="2">
        Bryllup
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <h3>~ {info[2].title} ~</h3>
        <p>{info[2].description}</p>
        <a href="">Les mer</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="dark" eventKey="3">
        Minnesamvær
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
      <h3>~ {info[3].title} ~</h3>
        <p>{info[3].description}</p>
        <a href="">Les mer</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="dark" eventKey="4">
       Teamsmøter
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="4">
      <Card.Body>
      <h3>~ {info[4].title} ~</h3>
        <p>{info[4].description}</p>
        <a href="">Les mer</a>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>




           
        

        </>

        )
    }
    return(
        <div>
            
        </div>
    )
}

export default SpiserietList;