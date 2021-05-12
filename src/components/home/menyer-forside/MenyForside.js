import MenyInnhold from './MenyInnhold';
import ScrollAnimation from 'react-animate-on-scroll';

function MenyForside() {
    
    return(
        <ScrollAnimation animateIn="fadeIn">
        <div className="container card-container mt-5 p-5">
            <div className="card-header-content">
            <h1>Atlungstad Brenneri menyer</h1>
            <div className="mt-2">
            <p>God mat betyr en god dag. Menyen vår består av et solid utvalg velsmakende og mettende retter laget av råvarer av ypperste kvalitet.</p>
            </div>
            </div>
            <div className="mt-4">
            <MenyInnhold />
            </div>

        </div>
        </ScrollAnimation>
    )
}

export default MenyForside;
