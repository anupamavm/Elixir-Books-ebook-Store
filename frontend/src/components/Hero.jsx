import React from 'react';
import './hero.css';
import hero from '../assets/hero.jpg';

function Hero() {
	return (
		<div className='Hero'>
			<img src={hero} alt='Hero' className='HeroImage' />
		</div>
	);
}

export default Hero;
