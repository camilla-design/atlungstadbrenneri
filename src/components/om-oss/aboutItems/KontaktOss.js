import MapAtlungstad from './MapAtlungstad';
import ContactForm from './ContactForm';
import { Component } from 'react';


class KontaktOss extends Component{
    render() {
    return (
        <>
        
            <div className="staff-map">
       <MapAtlungstad />
       </div>
       <div className="contact-card">
       
       <div className="mb-4 mt-4 staff-information">
       <p><i class="fas fa-phone-alt"></i> <a href="tel:62 33 00 55"> 62 33 00 55</a></p>
       <p><i class="fas fa-envelope"></i> <a href="mailto:post@atlungstadbrenneri.no"> post@atlungstadbrenneri.no</a></p>
       <p><i class="fas fa-map-marker-alt"></i> Sandvikavegen 214, 2312 Ottestad</p>
       </div>
       
           <div className="form-container">
           <h4>Kontakt oss</h4>
        <ContactForm />
       </div>
       </div>
        </>

        
    );
    }
}

export default KontaktOss;