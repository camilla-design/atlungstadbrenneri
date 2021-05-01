import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL } from "../../../constants/api/API_URL";


function WeddingList() {
    const API = API_URL + "/weddings";
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
            <div className="mt-3 p-4">
                
                <h1> {textInfo[0].title} </h1>
                <h4>Bryllupet er en av livets største begivenheter.</h4>
                <p className="mt-3">{textInfo[0].description}</p>
                <div>
                <div class="order-button mt-3">
                    <a href="mailto:post@atlungstadbrenneri.no">Bestill her</a>
                </div>
            </div>
            </div>
        )
    }
    return(
        <div>
            
        </div>
    )
}

export default WeddingList;