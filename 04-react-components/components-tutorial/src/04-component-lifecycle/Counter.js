/**
		lifecycle
state1 -----------> state2

0..1..2..3

<Counter initialCount={10} />

setInterval(() => {
	state++	
}, 1000)


 */

import { useState, useEffect } from 'react'; 
import PropTypes from 'prop-types';

export default function Counter(
	{
		initialCount = 0
	}
) {
	// counter = 0
	const [counter, setCounter] = useState(initialCount);
	console.log('main function: ' + counter);
	
	/**
	
	ngOnInit, AfterViewChecked + ngOnDestroy
	[] => ngOnInit
	
	 */
	useEffect(
		() => {
			const intervalId = setInterval(() => {
				console.log('setInterval: ' + counter);
				setCounter((currentCounter) => {
					return currentCounter + 1;
				});
						
			}, 1000)
			
			
			// cleaning function
			// when you open infinite stuff
			// you have to clean
			return () => {
				clearInterval(intervalId);
			}
		},
		[]
	)
	
	/*
	
	NO!!!!!
	setInterval(() => {
		
	})
	
	setCounter
	
	{{ counter() }}
	[  ]
	
	()
	
	*/
	
	
	useEffect(
		() => {
			setCounter(initialCount);
		},
		 
		// when to run the function 
		// run the function when initialCount changed
		// ngOnInit + someupdate
		[ initialCount ]
	)
	
	return (
		<h1>
			{ counter }	
		</h1>
	)
}

Counter.propTypes = {
	initialCount: PropTypes.number 
}