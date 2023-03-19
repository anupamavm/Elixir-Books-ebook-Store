import React, { useState } from 'react';
import './login.css';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submit = async (event) => {
		event.preventDefault();
		// handle login logic here
	};

	return (
		<div className='form-container'>
			<form>
				<input
					type='email'
					className='input-field'
					placeholder='Email'
					value={email}
					onChange={(event) => setEmail(event.target.value)}
				/>
				<input
					type='password'
					className='input-field'
					placeholder='Password'
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
				<button type='submit' className='submit-button' onClick={submit}>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
