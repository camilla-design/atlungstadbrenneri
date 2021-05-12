import CookieConsent from 'react-cookie-consent';


import Slider from '../home/slider/Slider';
import Velkomstekst from './velkomstekst/Velkomstekst';
import Åpningstid from './åpningstid/Åpningstid';
import MenyForside from './menyer-forside/MenyForside';

import Footer from '../footer/Footer';


function Home(){
    return (
        <>
        <CookieConsent debug={true}
        location="bottom"
        style={{ background: '#081D6B', textAlign: 'left' }}
        buttonStyle={{ color: '#081D6B', background: '#fff', fontSize: '14px' }}
        buttonText="Jeg forstår!"
        expires={365}
        >
        <h4>Vi bruker cookie</h4>
        <h6>Vi kan plassere disse for analyse av besøkende data, for å forbedre nettstedet vårt, vise personlig innhold og for å gi deg en flott nettsideopplevelse. For mer informasjon om cookien bruker vi innstillingene.</h6>
        <a href="">Les om våre policy her</a>
</CookieConsent>
        <Slider />
        
        <Velkomstekst />
        <Åpningstid  />
        <MenyForside />
       <div class="newslink mt-5 pt-5 mb-5 p-5">
           <p>Ønsker du informasjon fra Brenneriet direkte i din innboks?</p>
           <a href="/nyhetsbrev">Meld deg på vårt nyhetsbrev</a>
       </div>
        <Footer />

        
        </>
        
    );
}

export default Home;
