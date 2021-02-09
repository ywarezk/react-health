/**
 * 
 
 - function
 - return jsx
 - 
 
 <Hello name="Yariv" age={35} />
 
 <Hello name={someExpressionThatReturnsString} />
 
 <Hello />
 
 
 */
 
import PropTypes from 'prop-types';

/**
 
 import { FC} from 'react'; 
 
 interface Props {
	 name: string;
 }
 
 const HelloWithProps: FC<Props> = ( {name} ) => {
	 
 }
 
 */

// props => { name: "Yariv", age: 35 }
export default function HelloWithProps( { 
	name = 'Yariv'
} ) {
	
	return (
		<h1>
			Hello world {name}
		</h1>
	)
}

// specify what props i want to get
// and what are there type
// https://reactjs.org/docs/typechecking-with-proptypes.html
HelloWithProps.propTypes = {
	name: PropTypes.string
}