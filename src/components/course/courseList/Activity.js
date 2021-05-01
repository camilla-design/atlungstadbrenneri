import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL } from "../../../constants/api/API_URL";

function Activity() {
    const API = API_URL + "/activities";
    const [textInfo, setTextInfo] = useState(null)
    
    useEffect(() => {
        axios.get(API)
        .then(response => {
            setTextInfo(response.data)
            console.log(setTextInfo)
            
        })
    }, [API])

    if(textInfo) {
        return (
            <div className="card-box">
                <p>{textInfo[0].description}</p>
                <img src={`${API_URL}${textInfo[0].image[0].url}`} width="240"/>
            </div>
        )
    }
    return(
        <div>
            
        </div>
    )
}

export default Activity;