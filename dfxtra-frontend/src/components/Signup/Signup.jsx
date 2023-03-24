import React, { useState } from 'react';
import { signUp } from '../../utils/authServices';

const Signup = () => {
	const [signUpFormData, setSignUpFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	});
	const signupChangeHandler = (e) => {
		setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
	};

	const signupSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			await signUp(signUpFormData);
			alert("You've successfully signed up!");
		} catch (err) {
			return { error: err.message };
		}
	};

	return (
		<>
			<div className="login-form">
				<h3>Sign Up</h3>
				<form onSubmit={signupSubmitHandler}>
					<div className="form-group">
						<label>First Name: </label>
						<br />
						<input type="text" name="firstName" id="firstName" placeholder="Enter your First Name" onChange={signupChangeHandler} />
					</div>

					<div className="form-group">
						<label>Last Name: </label>
						<br />
						<input type="text" name="lastName" id="lastName" placeholder="Enter your Last Name" onChange={signupChangeHandler} />
					</div>

					<div className="form-group">
						<label>Email: </label>
						<br />
						<input type="email" name="email" id="email" placeholder="Enter your email" onChange={signupChangeHandler} />
					</div>

					<div className="form-group">
						<label>Password: </label>
						<br />
						<input type="password" name="userPassword" id="userPassword" placeholder="Enter a password" onChange={signupChangeHandler} />
					</div>

					<button type="submit" className="btn btn-primary">
						Sign Up
					</button>
				</form>
			</div>
		</>
	);
};

export default Signup;