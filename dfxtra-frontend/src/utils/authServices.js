import axios from 'axios';

const URL = `${process.env.REACT_APP_DFXTRA}/api/auth/`;

export const signUp = async (formData) => {
	try {
		console.log(formData);
		const response = await axios.post(URL + 'signup', formData);
		return response.data;
	} catch (e) {
		return { error: e.code, errorMessage: e.message };
	}
};

export const logIn = async (formData) => {
	try {
		const response = await axios.post(URL + 'signin', formData);
		localStorage.setItem('token', response.data.token);
		return response.data;
	} catch (e) {
		return { error: e.code, errorMessage: e.message };
	}
};

export const currentUser = () => {
	if (localStorage.getItem('token')) {
		return localStorage.getItem('token');
	}
	return 0;
};
