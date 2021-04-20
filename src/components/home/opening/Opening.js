import { useEffect, useState } from "react";
import { API_URL } from "../../../constants/api/API_URL";

const API = API_URL + "openings"


function Opening() {
    const [opening, setOpening] = useState([]);

    const getApi = () => {
		fetch(API)
            .then((response) => response.json())
            .then((json) => {
                console.log(json) 
                setOpening(json);
            });
			
        };

        useEffect(() => {
            getApi();
        },[]);

return(
    <div className="opening-hours-contanier mt-2 p-5">
        <h4>Åpningstider</h4>
        <div className="opening-container">
            <div>
            {opening.map(open => 
            <div className="opening-day">
                <p>{open.day}</p>
                </div>
            )}
            </div>
            <div>
            {opening.map(open => 
                <p>{open.time} {open.closed}</p>
                )}
                </div>
                
        </div>
       
    </div>
);
};

    



export default Opening;