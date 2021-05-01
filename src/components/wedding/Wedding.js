
import WeddingList from './weddingItems/WeddingList';
import WeddingGallery from './weddingItems/WeddigGallery';
import Footer from '../footer/Footer';

import ScrollAnimation from 'react-animate-on-scroll';

import image1 from '../../images/hero/wedding.jpg';


function Wedding(){
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
        <WeddingList />
        <WeddingGallery />
        
        
        

        </div>
        </ScrollAnimation>
        
        <Footer />
        </>
        
    );
}

export default Wedding;