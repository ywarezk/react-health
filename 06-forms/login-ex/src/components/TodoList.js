import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function TodoList( {token} ) {
	
	const [todoList, setTodos] = useState([]);
	
	useEffect(() => {
		if (!token) return;
		
		fetch('https://academeez-login-ex.herokuapp.com/api/tasks', {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
		.then(
			(response) => {
				return response.json()
			}
		)
		.then((json) => {
			setTodos(json);
		})
	}, [token])
	
	return (
		<ul>
			{
				todoList.map((todoObj) => {
					return (
						<li key={todoObj.id}>
							<h1> { todoObj.title } </h1>
							<p> { todoObj.description } </p>
						</li>
					)
				})
			}
		</ul>
	)
}

TodoList.propTypes = {
	token: PropTypes.string.isRequired
}