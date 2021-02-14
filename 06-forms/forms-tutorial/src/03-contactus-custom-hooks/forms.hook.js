/**

custom hook

 */

import { useState } from "react";



export default function useForm(initialValues) {
	const [formValues, setFormValues] = useState(initialValues);
	
	const handleChange = (event) => {
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value
		});
	}
	
	return [formValues, handleChange];
}