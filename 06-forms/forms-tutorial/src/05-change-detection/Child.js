import { useEffect, useState } from 'react';
import Grand from './Grand';

export default function Child() {
	const [counter, setCounter] = useState(0);
	
	console.log('child rendering');	
	
	useEffect(() => {
		setCounter(counter + 1);
	}, [])
	
	return (
		<>
			<h1 onClick={() => setCounter(counter + 1)}>
				Child component {counter}
			</h1>
			<Grand />
		</>
		
		
	)
}