import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL } from "../../../../constants/api/API_URL";

function LectureList() {
    const API = API_URL + "/foredrags";
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
            <div className="mt-2 p-4">
                <h1>{textInfo[0].title}</h1>
                <h6><b>{textInfo[0].intro}</b></h6>
                <p>{textInfo[0].description}</p>
            </div>
        )
    }
    return(
        <div>
            
        </div>
    )
}

export default LectureList;