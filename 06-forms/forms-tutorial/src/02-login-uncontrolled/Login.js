/**

uncontrolled form

the browser is managing the state of the input
react query the browser for that state


 */
 
import { useRef } from 'react';
 
// react hook forms
export default function Login() {
	// { current: null }
	// { current: DOMElementInput }
	// this.saveValue = 42;
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(`the email is: ${emailRef.current.value}`);
		console.log(`the password is: ${passwordRef.current.value}`);
	}
	
	return (
		<form noValidate onSubmit={handleSubmit}>
			<input 
				ref={ emailRef }
				type="email" 				
				placeholder="Enter your mail" 
			/>
			<input 
				ref={ passwordRef }
				type="password" 
				placeholder="Enter your password" 
			/>
			<button type="submit">
				Login
			</button>
		</form>
	)
}