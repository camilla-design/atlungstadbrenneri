import React from 'react';
import SliderContentMobile from './SliderContentMobile';
import SliderContent from './SliderContent';


/**
 * @function Slider
 */

const Slider = () => {
    return <>
    <div class="slide-content-mobile">
    <SliderContentMobile />
    </div>
    <div className="slide-bigger-screen">
        <SliderContent />
        </div>

        </>
}

export default Slider;