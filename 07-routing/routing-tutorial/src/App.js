import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Error404Page from './pages/Error404Page';

function App() {
  return (
	<BrowserRouter>
		<div className="App">
			<nav>
				<ul>
					<li>
						<Link to="/home/yariv">
							Home page
						</Link>
					</li>
					<li>
						<Link to="/about?foo=bar">
							About page
						</Link>
					</li>
				</ul>
			</nav>
		
			<Switch>
				<Route path="/home/:name" exact>
					<HomePage />
				</Route>
				<Route path="/about">
					<AboutPage />
				</Route>
				<Route>
					<Error404Page />
				</Route>
			</Switch>
			
		</div>
	</BrowserRouter>
  );
}

export default App;
