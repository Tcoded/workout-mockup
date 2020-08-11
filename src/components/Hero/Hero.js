import React from 'react';
import './Hero.css';

const Hero = props => {
    return (
    <div className='hero_container'>
        <div className='hero_mask'>
            <img src={require('../../img/gmapsinworkout.png')} className='hero_img' /> 
        </div>
        <h1 className='hero_text'>The best personal training, right in your own home</h1>
        <button className='hero_button'>Join A Coach</button>
    </div>
    );
};

export default Hero;