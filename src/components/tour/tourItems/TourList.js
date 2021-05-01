import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL } from "../../../constants/api/API_URL";

function TourList() {
    const API = API_URL + "/tours";
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
            <div className="mt-2 p-5">
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

export default TourList;