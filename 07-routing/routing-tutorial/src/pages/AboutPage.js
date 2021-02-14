import { useLocation } from 'react-router-dom';



export default function AboutPage() {
	const {search} = useLocation();
	
	return (
		<h1>
			hello about page {search}
		</h1>
	)
}