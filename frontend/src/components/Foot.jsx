import React from 'react';
import './foot.css';

function Foot() {
	const aboutUsClick = () => {
		console.log('Button clicked');
	};
	const privacyPolicyClick = () => {
		console.log('Button clicked');
	};
	const termsAndConditionsClick = () => {
		console.log('Button clicked');
	};

	return (
		<div className='Foot'>
			<button className='btnFoot' onClick={aboutUsClick}>
				About us
			</button>
			<button className='btnFoot' onClick={privacyPolicyClick}>
				Privacy Policy
			</button>
			<button className='btnFoot' onClick={termsAndConditionsClick}>
				Terms and Conditions
			</button>
		</div>
	);
}

export default Foot;
