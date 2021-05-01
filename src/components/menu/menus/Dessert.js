import { useEffect, useState } from "react";
import { API_URL } from "../../../constants/api/API_URL";

const API = API_URL + "/desserters";


function Dessert() {
    const [desserts, setDesserts] = useState([]);

    const getApi = () => {
		fetch(API)
            .then((response) => response.json())
            .then((json) => {
                console.log(json) 
                setDesserts(json);
            });
			
        };

        useEffect(() => {
            getApi();
        },[]);


return(

            <div>
            {desserts.map(dessert => 
            <div className="mb-4 mt-4">
                <h5>{dessert.title}</h5>
                <p>{dessert.description}</p>
                <p><i>{dessert.allergi}</i></p>
                <h5>{dessert.price}</h5>
                </div>
            )}
            </div>
                
);
};

export default Dessert;