/**
				button onclick
hello world -------------------->   -----

				button onclick
hello world <--------------------   -----

 */
 
import { useState } from 'react';
 
export default function HelloWithState() {
	// state
	
	// [ isTextShowing, (newValue) => void ]
	const [isTextShowing, setIsTextShowing] = useState(true);
	
	const [name, setName] = useState('Yariv');
	
	// const isTextShowing = true;
	
	/**
	 * this function will run when the button is clicked
	 */
	const handleClick = () => {
		setIsTextShowing(!isTextShowing);
	}
	
	return (
		<div>
			{
				isTextShowing && (
					<h1>
						hello world - Toggle me
					</h1>
				)
			}
			
			<button onClick={handleClick}>
				Toggle text
			</button>
		</div>
	)
}