import { useEffect, useState } from "react";
import { API_URL } from "../../../constants/api/API_URL";

const API = API_URL + "/memorials";


function MemorialGallery() {
    const [image, setImage] = useState([]);

    const getApi = () => {
		fetch(API)
            .then((response) => response.json())
            .then((json) => {
                console.log(json) 
                setImage(json);
            });
			
        };

        useEffect(() => {
            getApi();
        },[]);


return(

            <div>
            {image.map(gallery => 
            <div className="mb-4 mt-4 image-gallery">
                <div className="responsive-gallery">
                <a target="_blank" href="img_5terre.jpg">
                <img src={`${API_URL}${gallery.image[0].url}`} width="600"/>
                </a>
                </div>
                </div>
            )}
            {image.map(gallery => 
            <div className="mb-4 mt-4 image-gallery">
                <div className="responsive-gallery">
                <a target="_blank" href="img_5terre.jpg">
                <img src={`${API_URL}${gallery.image[1].url}`} width="600"/>
                </a>
                </div>
                </div>
            )}
            </div>
                
);
};

export default MemorialGallery;