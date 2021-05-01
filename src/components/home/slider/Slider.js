import React from 'react';
import SliderContent from './SliderContent';
import SliderContentMobile from './SliderContentMobile';

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