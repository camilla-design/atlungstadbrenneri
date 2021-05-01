import SpiserietList from './SpiserietList';
import Footer from '../footer/Footer';

import ScrollAnimation from 'react-animate-on-scroll';

import image2 from '../../images/sliderImages/DSC09315.jpg';

function Spiseriet(){
    return (
        <>
        <ScrollAnimation animateIn="fadeIn">
         <div class="hero-container mt-5">
        <img className="d-block w-100 h-100" alt="hero" src={image2} />
        </div>
        <div className="category-container p-3 pt-5">
        <h1> - Spiseriet -</h1>
        <h3>Er du sulten?</h3>
        <p>Her kan du se alle våre
            menyer! Enten du vil spise
            hos oss, eller bestille av vår
          take away meny.</p>


        
        <div className="pt-4 mb-5">
        <SpiserietList />
        </div>
        </div>
        </ScrollAnimation>
     
        
        <Footer />
        
        </>
        
    );
}

export default Spiseriet;