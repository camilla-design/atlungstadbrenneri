import LectureList from './lectureItems/LectureList';
import LectureGallery from './lectureItems/LectureGallery';
import Footer from '../../footer/Footer';

import image1 from '../../../images/hero/lecture.jpg';
import Button from 'react-bootstrap/Button';


function Foredrag(){
    return (
        <>
        
        <div className="hero-container mt-5">
        <img className="d-block w-100" alt="hero" src={image1} />
        </div>
        <div class="back-button mt-3 p-3">
       <a href="/opplevelser"><i class="far fa-arrow-alt-circle-left"></i> Tilbake</a>
       </div>
       <LectureList />
       <Button className="order-button" variant="primary"><a href="#">Bestill</a></Button>
       <div className="container">
       <LectureGallery />
       </div>
       
        <Footer />
        </>
        
    );
}

export default Foredrag;