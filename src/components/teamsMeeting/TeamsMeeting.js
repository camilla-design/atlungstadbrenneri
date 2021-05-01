import TeamMeetingList from './teamMeetingItem/TeamMeetingList';
import Footer from '../footer/Footer';

import ScrollAnimation from 'react-animate-on-scroll';

import image1 from '../../images/hero/team-meeting.jpg';


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
        <TeamMeetingList />
        <p>Les mer om <a href="https://stangevestbygd.no/firmaer/sondre-elton-gard/">Søndre Elton Gård</a></p>
        <div class="order-button mt-3">
                    <a href="mailto:post@atlungstadbrenneri.no">Bestill her</a>
                </div>
       
                </div>
        </ScrollAnimation>
        <Footer />
        </>
        
    );
}

export default Memorial;