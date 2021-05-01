import CardItem from './CardItem';
import ScrollAnimation from 'react-animate-on-scroll';

function MenuCard() {
    
    return(
        <ScrollAnimation animateIn="fadeIn">
        <div className="container card-container mt-2 p-5">
            <h1>Atlungstad Brenneri menyer</h1>
            <div className="mt-2">
            <p>God mat betyr en god dag. Menyen vår består av et solid utvalg velsmakende og mettende retter laget av råvarer av ypperste kvalitet.</p>
            </div>
            <div className="mt-4">
            <CardItem />
            </div>

        </div>
        </ScrollAnimation>
    )
}

export default MenuCard;
