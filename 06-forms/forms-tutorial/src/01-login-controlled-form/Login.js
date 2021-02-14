/**

form

email
password
submit

what we want to do with forms:

1. binding
2. validation
3. display errors
4. submit

one way to manage forms in react is controlled forms

- react state is the source of truth of the input state

 */

import { useState } from "react"

// Formik
export default function Login() {
	const [emailValue, setEmailValue] = useState('yariv@nerdeez.com');
	
	const [passwordValue, setPasswordValue] = useState('');
	
	const [formValues, setFormValues] = useState({
		email: 'yariv@nerdeez.com',
		password: ''
	});
	
	/**
	 * print to the console
	 * the email and password that the user entered
	 */
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(`the email is: ${formValues.email}`);
		console.log(`the password is: ${formValues.password}`);
	}
	
	const handleEmailChange = (event) => {
		// setEmailValue(event.target.value);
		setFormValues(
			{
				...formValues,
				email: event.target.value
			}
		)
	}
	
	const handlePasswordChange = (event) => {
		// setPasswordValue(event.target.value);
		
		setFormValues(
			{
				...formValues,
				password: event.target.value
			}
		)
	}
	
	return (
		<form noValidate onSubmit={handleSubmit}>
			{/* onChange={(event) => setEmailValue(event.target.value)} */}
			<input 
				onChange={handleEmailChange}
				value={formValues.email}
				type="email" 				
				placeholder="Enter your mail" 
			/>
			<input 
				value={formValues.password}
				onChange={handlePasswordChange}
				type="password" 
				placeholder="Enter your password" 
			/>
			<button type="submit">
				Login
			</button>
		</form>
	)
}