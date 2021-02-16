import { useSelector } from 'react-redux';

export default function DisplayAmount() {
	// what you want to read from redux
	const amount = useSelector((state) => {
		return state.bank.amount;
	})
	
	return (
		<h1>Out bank amount is: {amount}</h1>
	)
}