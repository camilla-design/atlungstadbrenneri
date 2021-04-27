import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL } from "../../../constants/api/API_URL";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CardItem() {
    const API = API_URL + "cards";
    
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
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="http://localhost:3000/static/media/DSC09315.6deb4f3f.jpg" />
                <Card.Body>
                <Card.Title>{cardInfo[0].title}</Card.Title>
                <Card.Text>
                    {cardInfo[0].description}
                </Card.Text>
                <a href="/spiseriet" variant="dark">Spiseriet</a>
            </Card.Body>
        </Card>
        <Card className="mt-5" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="http://localhost:3000/static/media/DSC09315.6deb4f3f.jpg" />
                <Card.Body>
                <Card.Title>{cardInfo[1].title}</Card.Title>
                <Card.Text>
                    {cardInfo[1].description}
                </Card.Text>
                <Button variant="dark">Take Away</Button>
            </Card.Body>
        </Card>

        </>

        )
    }
    return(
        <div>
            
        </div>
    )
}

export default CardItem;