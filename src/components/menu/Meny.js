import Footer from '../footer/Footer';


import image1 from '../../images/sliderImages/DSC09270.jpg';

function Meny(){
    return (
        <>
       <img className="d-block w-100" alt="hero" src={image1} />
        <div className="container mt-2 p-5">
        <h2> - Menyer -</h2>


        </div>
        <Footer />
        </>
        
    );
}

export default Meny;