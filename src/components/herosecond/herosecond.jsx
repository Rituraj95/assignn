import React from 'react';
import './herosecond.css'
import Slider from '../Slider/Slider';

export default function herosecond() {
  
    return (
        <div className='text-left pl-20 pt-20 text-3xl text-white herosecond'>
            <div>
                <h1>Explore Our Top</h1>
                <h1>Academics</h1>
            </div>

            <div className='w=3/4 m-auto '>
                <div className='mt-20'>
                    <Slider></Slider>
                   
                </div>
            </div>
        </div>
    )
}

