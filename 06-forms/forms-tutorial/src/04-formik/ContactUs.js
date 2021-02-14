/**

contact us

email
message

binding
validation
error message
submit

Formik

 */
 
import { Formik, Form, Field, useFormikContext, ErrorMessage } from 'formik';
import { useEffect } from 'react';
import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
	email: Yup.string().email('Bad email format').required('this field is required'),
	message: Yup.string().required('this field is required')
})
 
export default function ContactUs() {
	// {email: what@user.typed, message: 'what the user types' }
	const handleSubmit = (values) => {
		console.log(values);
	}
	
	// const context = useFormikContext();
	
	/*
	useEffect(() => {
		
	}, [values.email])
	
	const handleChange = (event) => {
		debugger;
	}
	*/
	
	return (
		<Formik
			initialValues={ {
				email: 'yariv@nerdeez.com',
				message: 'hello message'
			} }
			onSubmit={handleSubmit}
			validationSchema={contactSchema}
		>
			<Form>
				<Field	
							 
					name="email"
					type="email" 
					placeholder="Enter your email" 
				/>
				<ErrorMessage name="email" />
				<Field 
					as="textarea"
					name="message"
					placeholder="type your message here"
				/>
				<ErrorMessage name="message" />
				<button type="submit">
					Submit form
				</button>
			</Form>
		</Formik>
	)
}