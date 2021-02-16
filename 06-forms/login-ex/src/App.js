import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
	const [token, setToken] = useState(null);
	
	return (
		<div className="App">
		<Login cb={setToken} />
		
		<TodoList token={token} />
		</div>
	);
}

export default App;
