import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL } from "../../../constants/api/API_URL";

function WelcomeText() {
    const API = API_URL + "welcometexts";
    const [textInfo, setTextInfo] = useState(null)
    
    useEffect(() => {
        axios.get(API)
        .then(response => {
            setTextInfo(response.data)
        })
    }, [API])

    if(textInfo) {
        return (
            <div className="container mt-2 p-5">
                <h4>{textInfo[0].title}</h4>
                <p>{textInfo[0].description}</p>
            </div>
        )
    }
    return(
        <div>
            
        </div>
    )
}

export default WelcomeText;
