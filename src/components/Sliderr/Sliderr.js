import './Sliderr.css';
import React, { useState, useEffect } from 'react';
import img from '../Asset/img.png'
function Slider() {

    const TOTAL_SLIDE_ITEMS = 12;

    let NUMBER_OF_ITEMS_PER_SCREEN = parseInt(getComputedStyle(document.body).getPropertyValue('--no-of-slides-per-screen'));

    const [sliderIndex, setSliderIndex] = useState(0);

    const [progressItems, setProgressItems] = useState([]);

    const [numberOfSlides, setNumberOfSlides] = useState(TOTAL_SLIDE_ITEMS / NUMBER_OF_ITEMS_PER_SCREEN);

    useEffect(() => {

        document.querySelector(':root').style.setProperty('--slide-index', sliderIndex);

    }, [sliderIndex]);


    function slideRight() {

        if (sliderIndex == numberOfSlides - 1) {
            setSliderIndex(0)
            return;
        }
        setSliderIndex(sliderIndex + 1)
    }
    return (
        <div className='react-slider'>
            <div className='header'>
                <div className='header-items'>
                   
                   
                </div>
            </div>
            <div className='slider'>
               
                <div className='slides'>
                <img src="https://picsum.photos/240" />
                    <img src="https://picsum.photos/211" />
                    <img src="https://picsum.photos/212" />
                    <img src="https://picsum.photos/213" />
                    <img src="https://picsum.photos/214" />
                    <img src="https://picsum.photos/215" />
                    <img src="https://picsum.photos/216" />
                    <img src="https://picsum.photos/217" />
                    <img src="https://picsum.photos/231" />
                    <img src="https://picsum.photos/232" />
                    <img src="https://picsum.photos/233" />
                    <img src="https://picsum.photos/234" />
                   
                </div>
                <div className='handle next' onClick={slideRight}>
                    <div className='handle-icon'><img src={img} /></div>
                </div>
            </div>
        </div>
    );
}

export default Slider;