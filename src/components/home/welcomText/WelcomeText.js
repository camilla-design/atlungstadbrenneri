import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL } from "../../../constants/api/API_URL";
import ScrollAnimation from 'react-animate-on-scroll';


import historyImage from "../../../images/hero/history1.jpg"

function WelcomeText() {
    const API = API_URL + "/welcometexts";
    const [textInfo, setTextInfo] = useState(null)
    
    useEffect(() => {
        axios.get(API)
        .then(response => {
            setTextInfo(response.data)
        })
    }, [API])

    if(textInfo) {
        return (
            <ScrollAnimation animateIn="fadeIn">
          
            <div className="container mt-5 p-4">
                <div class="flex-container">
                <div className="text-container">
                <h1>{textInfo[0].title}</h1>
                <p className="mt-3">{textInfo[0].description}</p>
                <div class="read-more-button mt-3">
                    <a href="">Les mer</a>
                </div>
                </div>
                <div className="mt-3 image-container">
                    <img src={historyImage} width="300" />
                </div>
                </div>
            </div>

            </ScrollAnimation>
        
           
        )
    }
    return(
        <div>
            
        </div>
    )
}

export default WelcomeText;
