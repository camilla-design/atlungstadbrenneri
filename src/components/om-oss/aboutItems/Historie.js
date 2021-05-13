import { useEffect, useState } from "react";
import { API_URL } from "../../../constants/api/API_URL";

const API = API_URL + "/histories";

function Historie() {
   
    const [texts, setText] = useState([]);

    const getApi = () => {
		fetch(API)
            .then((response) => response.json())
            .then((json) => {
                console.log(json) 
                setText(json);
            });
			
        };

        useEffect(() => {
            getApi();
        },[]);


return(

            <div>
            {texts.map(text => 
            <div className="mb-4 mt-4">
                <h1>{text.title}</h1>
                <h4 className="mt-4"><b>{text.intro}</b></h4>
                <p className="mt-3">{text.description}</p>
                
                </div>
            )}
            </div>
                
);
};

export default Historie;

