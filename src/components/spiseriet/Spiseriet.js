import SpiserietList from './SpiserietList';
import Footer from '../footer/Footer';

import image2 from '../../images/sliderImages/DSC09315.jpg';

function Spiseriet(){
    return (
        <>
        <img className="d-block w-100 h-100" alt="hero" src={image2} />
        <div className="container mt-2 p-5">
        <h2> - Spiseriet -</h2>
        <h3>Er du sulten?</h3>
        <p>Her kan du se alle våre
            menyer! Enten du vil spise
            hos oss, eller bestille av vår
          take away meny.</p>


        </div>
        <div className="mt-2 mb-2">
        <SpiserietList />
        </div>
        
        <Footer />
        </>
        
    );
}

export default Spiseriet;