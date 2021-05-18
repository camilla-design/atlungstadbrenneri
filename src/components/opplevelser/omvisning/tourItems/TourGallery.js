import { useEffect, useState } from "react";
import { API_URL } from "../../../../constants/api/API_URL";

const API = API_URL + "/omvisnings";

function TourGallery() {
  const [imaga, setImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getApi = () => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => {
        setImage(json);
      });
  };

  useEffect(function () {
    try {
      getApi();
    } catch (error) {
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>An error</div>;
  }

  return (
    <div className="gallery">
      {imaga.map((gallery) => (
        <div className="mb-4 mt-4 image-gallery">
          <div className="responsive-gallery">
            <a target="_blank" rel="noreferrer" href={`${gallery.image[0].url}`}>
              <img src={`${gallery.image[0].url}`} width="600" alt="omvisning" title="credit: Atlungstad Brenneri" />
            </a>
          </div>
        </div>
      ))}
      {imaga.map((gallery) => (
        <div className="mb-4 mt-4 image-gallery">
          <div className="responsive-gallery">
            <a target="_blank" rel="noreferrer" href={`${gallery.image[1].url}`}>
              <img src={`${gallery.image[1].url}`} width="600" alt="omvisning" title="credit: Atlungstad Brenneri" />
            </a>
          </div>
        </div>
      ))}
      {imaga.map((gallery) => (
        <div className="mb-4 mt-4 image-gallery">
          <div className="responsive-gallery">
            <a target="_blank" rel="noreferrer" href={`${gallery.image[2].url}`}>
              <img src={`${gallery.image[2].url}`} width="600" alt="omvisning" title="credit: Atlungstad Brenneri" />
            </a>
          </div>
        </div>
      ))}
      {imaga.map((gallery) => (
        <div className="mb-4 mt-4 image-gallery">
          <div className="responsive-gallery">
            <a target="_blank" rel="noreferrer" href={`${gallery.image[3].url}`}>
              <img src={`${gallery.image[3].url}`} width="600" alt="omvisning" title="credit: Atlungstad Brenneri" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TourGallery;
