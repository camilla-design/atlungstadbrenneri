import { useEffect, useState } from "react";
import { API_URL } from "../../../constants/api/API_URL";


const API = API_URL + "/moteroms";



function Møterom() {
    const [meetings, setMeetings] = useState([]);

    const getApi = () => {
		fetch(API)
            .then((response) => response.json())
            .then((json) => {
                console.log(json) 
                setMeetings(json);
            });
			
        };

        useEffect(() => {
            getApi();
        },[]);


return(

            <div>
            {meetings.map(meeting => 
            <div className="mb-4 mt-4">
                <h1>{meeting.title}</h1>
                <p>{meeting.decription}</p>
                </div>
            )}
            </div>
                
);
};

export default Møterom;