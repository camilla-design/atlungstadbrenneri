
import Slider from '../home/slider/Slider';
import WelcomeText from './welcomText/WelcomeText';
import Opening from './opening/Opening';
import MenuCard from './card/MenuCard';

import Footer from '../footer/Footer';


function Home(){
    return (
        <>
        <Slider />
        <WelcomeText />
        <Opening />
        <MenuCard />
        <Footer />
        </>
        
    );
}

export default Home;
