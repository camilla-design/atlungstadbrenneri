import logo from '../../images/logo/logo.png';
function Footer() {
    
    return(
        <div className="footer-container pt-5">
            <div className="footer-logo">
                <img src={logo} alt="logo" width="100"></img>
            </div>
            <div className="footer-links mt-3">
                <div className="contact-links">
                    <h5>Kontakt oss</h5>
                    <p><i class="fas fa-phone-alt"></i><a href="tel:+4762330055"> 62 33 00 55</a></p>
                    <p><i class="fas fa-envelope"></i><a href="mailto: post@atlungstadbrenneri.no"> post@atlungstadbrenneri.no</a></p>
                    <p><i class="fas fa-map-marker-alt"></i> Sandvikavegen 214, 2312 Ottestad</p>
                </div>
                <div className="social-media-links mt-4">
                    <h5>Sosiale medier</h5>
                    <p><a href="https://www.facebook.com/atlungstadbrenneri" ><i class="fab fa-facebook-f"> Facebook</i></a></p>
                    <p><a href="https://www.instagram.com/atlungstadbrenneri/" ><i class="fab fa-instagram"> Instagram</i></a></p>
                </div>
                <div className="sponsore-links">
                    <h5>Linker</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer;