import './Slider.css';
import React, { useState, useEffect } from 'react';
import img from '../Asset/img.png'
function Slider() {

    const TOTAL_SLIDE_ITEMS = 42;

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
                <img src="https://picsum.photos/211" />
                    <img src="https://picsum.photos/212" />
                    <img src="https://picsum.photos/200" />
                    <img src="https://picsum.photos/201" />
                    <img src="https://picsum.photos/202" />
                    <img src="https://picsum.photos/203" />
                    <img src="https://picsum.photos/204" />
                    <img src="https://picsum.photos/205" />
                    <img src="https://picsum.photos/206" />
                    <img src="https://picsum.photos/207" />
                    <img src="https://picsum.photos/208" />
                    <img src="https://picsum.photos/209" />
                    <img src="https://picsum.photos/210" />
                    <img src="https://picsum.photos/212" />

                    <img src="https://picsum.photos/248" />
                    <img src="https://picsum.photos/259" />
                    <img src="https://picsum.photos/250" />
                    <img src="https://picsum.photos/212" />     
                    <img src="https://picsum.photos/259" />
                    <img src="https://picsum.photos/230" />
                    <img src="https://picsum.photos/262" />     
                    <img src="https://picsum.photos/269" />
                    <img src="https://picsum.photos/220" />
                    <img src="https://picsum.photos/229" />


                   
                </div>
                <div className='handle next' onClick={slideRight}>
                    <div className='handle-icon'><img src={img} /></div>
                </div>
            </div>
        </div>
    );
}

export default Slider;