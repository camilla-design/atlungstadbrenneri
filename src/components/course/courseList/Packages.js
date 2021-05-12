import { useEffect, useState } from "react";
import { API_URL } from "../../../constants/api/API_URL";


const API = API_URL + "/packages";



function Packages() {
    const [packages, setPackages] = useState([]);

    const getApi = () => {
		fetch(API)
            .then((response) => response.json())
            .then((json) => {
                console.log(json) 
                setPackages(json);
            });
			
        };

        useEffect(() => {
            getApi();
        },[]);


return(

            <div>
            {packages.map(pack => 
            <div className="mb-4 mt-4">
                <p>Vi har fler ulike møtepakker på Brenneriet, vi tilpasser også etter dine behov og ønsker,
slik at du får ditt skreddersydde arrangement i våre unike og historiske lokaler
Kontakt oss for planleggingen av ditt møte</p>
                <h1>{pack.title}</h1>
                <p>{pack.description}</p>
                </div>
            )}
            </div>
                
);
};

export default Packages;