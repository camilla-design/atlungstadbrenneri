import MemorialList from './memorialItems/MemorialList';
import MemorialGallery from './memorialItems/MemorialGallery';
import Footer from '../footer/Footer';

import ScrollAnimation from 'react-animate-on-scroll';

import image1 from '../../images/hero/memorial.jpg';


function Memorial(){
    return (
        <>
        <ScrollAnimation animateIn="fadeIn">
        <div className="hero-container mt-5">
        <img className="d-block w-100" alt="hero" src={image1} />
        </div>
        <div class="back-button mt-3 p-3">
       <a href="/spiseriet"><i class="far fa-arrow-alt-circle-left"></i> Tilbake</a>
       </div>
        
        <div className="container">
        <MemorialList />
        <MemorialGallery />
        
        </div>
        </ScrollAnimation>
        <Footer />
        </>
        
    );
}

export default Memorial;