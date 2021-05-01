import MapAtlungstad from './MapAtlungstad';
import ContactForm from './ContactForm';


function ContactUs(){
    return (
        <>
       <MapAtlungstad />
       <div className="mb-4 mt-4">
       <p><i class="fas fa-phone-alt"></i> <a href="tel:62 33 00 55"> 62 33 00 55</a></p>
       <p><i class="fas fa-envelope"></i> <a href="mailto:post@atlungstadbrenneri.no"> post@atlungstadbrenneri.no</a></p>
       <p><i class="fas fa-map-marker-alt"></i> Sandvikavegen 214, 2312 Ottestad</p>
       </div>
       <div className="mb-4 mt-4">
           <div className="form-container">
           <h4>Kontakt oss</h4>
        <ContactForm />
        </div>
       </div>
        </>
        
    );
}

export default ContactUs;