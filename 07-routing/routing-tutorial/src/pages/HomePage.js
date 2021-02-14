import { useRouteMatch } from 'react-router-dom';

export default function HomePage() {
	// { name: 'yariv'}
	const {params} =  useRouteMatch();
	
	return (
		<h1>
			hello homepage { params.name } 
		</h1>
	)
}