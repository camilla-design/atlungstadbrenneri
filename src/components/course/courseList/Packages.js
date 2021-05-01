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
                <h1>{pack.title}</h1>
                <p>{pack.description}</p>
                </div>
            )}
            </div>
                
);
};

export default Packages;