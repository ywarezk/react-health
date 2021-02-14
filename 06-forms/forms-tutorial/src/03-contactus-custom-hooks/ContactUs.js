/**

email
message

 */

import { useState } from "react"
import useForm from "./forms.hook"

 
export default function ContactUs() {
	const [ formValues, handleChange ] = useForm({
		email: 'yariv@nerdeez.com',
		message: 'some message'
	});
	
	return (
		<form>
			<input 
				name="email"
				onChange={handleChange}
				value={formValues.email}
				type="email" 
				placeholder="Enter your email" 
			/>
			<textarea 
				onChange={handleChange}
				name="message"
				value={formValues.message}
				placeholder="type your message here"
			>
			
			</textarea>
			<button type="submit">
				Submit form
			</button>
		</form>
	)
}