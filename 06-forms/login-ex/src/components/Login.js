/**

React function component
with a login form
  - email
  - password
  
with formik manage the form
with validation

 */
 
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

let loginSchema = yup.object().shape({
	email: yup.string().email('Bad email format').required('This field is required'),
	password: yup.string().required().min(5, 'please enter more characters')
})
 
export default function Login( { cb } ) {
	
	const handleSubmit = async (values) => {
		const response = await fetch(
			'https://academeez-login-ex.herokuapp.com/api/users/login',
			{
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		const loginToken = await response.json();
		console.log(loginToken);
		cb(loginToken.token);
	}
	
	return (
		<Formik
			initialValues={ { email: 'yariv@nerdeez.com', password: ''} }
			onSubmit={handleSubmit}
			validationSchema={loginSchema}
		>
			<Form noValidate>
				<Field name="email" type="email" placeholder="enter your mail" />
				<ErrorMessage name="email" />
				<Field name="password" type="password" placeholder="enter your password" />
				<ErrorMessage name="password" />
				<button type="submit">
					Login
				</button>
			</Form>
		</Formik>
	)
}

Login.propTypes = {
	cb: PropTypes.func.isRequired
}