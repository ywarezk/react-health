/**

<Hello message="hello world" />

display hello world on the screen

 */

import { ReactElement, ReactNode, FC } from 'react';

// React.createElement
const reactElement: ReactElement = <h1>hello</h1>

// ReactNode = string | number | ReactElement | ReactFragment | boolean | null | undefined
const myNode : ReactNode = undefined;

interface HelloProps {
	message?: string;
}
 
const Hello: FC<HelloProps> = ( { 
	message = 'hello world'
} ) => {
	
	return (
		<>
			<h1>
				Hello world {message}
			</h1>
		</>
	)
}

export default Hello;