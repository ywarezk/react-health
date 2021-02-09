// import Hello from './01-components-introduction/Hello';
import { useState } from 'react';
import HelloWithProps from './02-props/HelloWithProps';
import HelloWithState from './03-state-machine/HelloWithState';
import Counter from './04-component-lifecycle/Counter';

function App() {
	const [initialCount, setInitialCount] = useState(10);
	
	return (
		<div className="App">
		{/* <Hello /> */}
		
		{/* <HelloWithProps />
		
		<HelloWithProps name={"Yariv" + Math.random()} /> */}
		
		{/* <HelloWithState /> */}
		
		<Counter initialCount={initialCount} />
		</div>
	);
}

export default App;
