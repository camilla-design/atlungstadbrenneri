import AboutList from './aboutItems/AboutList';
import Footer from '../footer/Footer';

import image2 from '../../images/hero/about.jpg';

function AboutUs(){
    return (
        <>
        <div className="hero-container mt-5">
        <img className="d-block w-100 h-100" alt="hero" src={image2} />
        </div>
        <div className="category-container mt-4 p-3">
        <h1> - Om Oss -</h1>
        <div className="mt-4 mb-2">
        <AboutList />


       
        
        
        </div>
        </div>
        
        <Footer />
        </>
        
    );
}

export default AboutUs;