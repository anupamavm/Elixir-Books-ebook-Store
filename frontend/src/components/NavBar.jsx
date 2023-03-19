import React from 'react';
import './navbar.css';
import logo from '../assets/logo.png';
import user from '../assets/user.png';
import cart from '../assets/cart.png';

export default function NavBar() {
	const logoClick = () => {
		console.log('Button clicked');
	};

	const shopClick = () => {
		console.log('Button clicked');
	};
	const contactUsClick = () => {
		console.log('Button clicked');
	};
	const cartClick = () => {
		console.log('Button clicked');
	};
	const profileClick = () => {
		console.log('Button clicked');
	};

	return (
		<div className='NavBar'>
			<button onClick={logoClick} className='btn'>
				<img src={logo} alt='Logo' className='logoButton' />
			</button>

			<button onClick={shopClick} className='btn'>
				Shop
			</button>

			<button onClick={contactUsClick} className='btn'>
				Contact Us
			</button>

			<button onClick={profileClick} className='btn'>
				<img src={user} alt='user' className='icon' />
			</button>

			<button onClick={cartClick} className='btn'>
				<img src={cart} alt='cart' className='icon' />
			</button>
		</div>
	);
}
