/**

save in redux the todo list we are getting from the server.



 */

import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo } from './state/todo.slice';

 
export default function TodoList() {
	const dispatch = useDispatch();
	const tasks = useSelector((state) => {
		return state.todo.tasks;
	})
	
	useEffect(() => {
		dispatch(fetchTodo());
	}, [])
	
	return (
		<ul>
			{
				tasks.map(task => (
					<li key={task.id}>
						{task.title}
					</li>
				))
			}
		</ul>
	)
}