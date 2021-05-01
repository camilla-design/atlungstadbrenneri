import { useEffect, useState } from "react";
import { API_URL } from "../../../constants/api/API_URL";

const API = API_URL + "/workstaffs";


function WorkStaff() {
    const [staffs, setStaff] = useState([]);

    const getApi = () => {
		fetch(API)
            .then((response) => response.json())
            .then((json) => {
                console.log(json) 
                setStaff(json);
            });
			
        };

        useEffect(() => {
            getApi();
        },[]);


return(

            <div>
            {staffs.map(staff => 
            <div className="mb-4 mt-4 card-img">
                <img src={`${API_URL}${staff.image[0].url}`} width="100"/>
                <div className="mb-4 mt-4">
                <h4><i class="fas fa-id-card"></i> {staff.name}</h4>
                <p><i>{staff.title}</i></p>
                <p><i class="fas fa-envelope"></i> <a href={`mailto:${staff.email}`}> {staff.email}</a></p>
                <p><i class="fas fa-phone-alt"></i> <a href={`tel:${staff.phone}`}> {staff.phone}</a></p>
                
                </div>
                </div>
            )}
            </div>
                
);
};

export default WorkStaff;