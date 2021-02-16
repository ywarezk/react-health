/**
 * 
 
 store.dispatch(action)
 
 reducer(state, action) => state
 
 */
 
import { useDispatch } from 'react-redux';
// import { deposit } from '../redux/actions';
import { deposit } from './state/bank.slice';

export default function Deposit() {
	const dispatch = useDispatch();
	
	/**
	 * deposit 10$ to the amount in redux
	 */
	const handleClick = () => {
		dispatch(deposit(10))
	}
	
	return (
		<button onClick={handleClick}>
			Deposit 10$
		</button>
	)
}