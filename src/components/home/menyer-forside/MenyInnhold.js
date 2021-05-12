import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL } from "../../../constants/api/API_URL";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function MenyInnhold() {
    const API = API_URL + "/menyer-forsides";
    
    const [cardInfo, setcardInfo] = useState(null)
    
    useEffect(() => {
        axios.get(API)
        .then(response => {
            setcardInfo(response.data)
            console.log(response.data)
        })
    }, [API])


    if(cardInfo) {
        return (
            <>
            <div className="container card-container">
            <Container>
            <Row md={2}>
            <Col>
            <Card className="mt-4">
                <Card.Img variant="top" src={`${cardInfo[0].image[0].url}`} />
                <Card.Body>
                <Card.Title className="card-title">{cardInfo[0].title}</Card.Title>
                <Card.Text>
                
                    {cardInfo[0].description}
                  
                </Card.Text>
                <Button variant="dark"><a href="/spiseriet" variant="dark">Spiseriet</a></Button>
            </Card.Body>
        </Card>
        </Col>
       
        <Col>
        <Card className="mt-4">
                <Card.Img variant="top" src={`${API_URL}${cardInfo[1].image[0].url}`} />
                <Card.Body>
                <Card.Title className="card-title">{cardInfo[1].title}</Card.Title>
                <Card.Text>
                   
                    {cardInfo[1].description}
                   
                </Card.Text>
                <Button variant="dark"><a href="https://ecom.susoft.com/atlungstadtakeaway/home">Take Away</a></Button>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card className="mt-4">
                <Card.Img variant="top" src={`${API_URL}${cardInfo[2].image[0].url}`} />
                <Card.Body>
                <Card.Title className="card-title">{cardInfo[2].title}</Card.Title>
                <Card.Text>
                   
                    {cardInfo[1].description}
                   
                </Card.Text>
                <Button variant="dark"><a href="/opplevelser">Opplevelser</a></Button>
            </Card.Body>
        </Card>
        </Col>
        
        <Col>
        <Card className="mt-4">
                <Card.Img variant="top" src={`${API_URL}${cardInfo[3].image[0].url}`} />
                <Card.Body>
                <Card.Title className="card-title">{cardInfo[3].title}</Card.Title>
                <Card.Text>
                   
                    {cardInfo[1].description}
                   
                </Card.Text>
                <Button variant="dark"><a href="https://ecom.susoft.com/atlungstadbutikk/home">Nettbutikk</a></Button>
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>
        </div>

        </>

        )
    }
    return(
        <div>
            
        </div>
    )
}

export default MenyInnhold;