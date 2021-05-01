import { useEffect, useState } from "react";
import { API_URL } from "../../../constants/api/API_URL";

const API = API_URL + "/forretters";


function Starter() {
    const [starters, setStarters] = useState([]);

    const getApi = () => {
		fetch(API)
            .then((response) => response.json())
            .then((json) => {
                console.log(json) 
                setStarters(json);
            });
			
        };

        useEffect(() => {
            getApi();
        },[]);


return(

            <div>
            {starters.map(starter => 
            <div className="mb-4 mt-4">
                <h5>{starter.title}</h5>
                <p>{starter.description}</p>
                <p><i>{starter.allergi}</i></p>
                <h5>{starter.price}</h5>
                </div>
            )}
            </div>
                
);
};

export default Starter;

   