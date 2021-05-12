import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL } from "../../../../constants/api/API_URL";

function LabList() {
    const API = API_URL + "/blandelabs";
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
                <h1>{textInfo[0].title}</h1>
                <p>{textInfo[0].description}</p>
            </div>
        )
    }
    return(
        <div>
            
        </div>
    )
}

export default LabList;