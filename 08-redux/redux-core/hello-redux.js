/**

Redux.*

to play with Redux

 */
 
// state 


/**
the state in redux is immutable
state = {
	
	
	bank: {
		amount: 0,
		loans: []	
	}
	
	
	user: {
		firstName: 'Yariv',
		lastName: 'Katz',
		token: 'safadfasf',	
	}
	
	
	
}

 */
 
// createStore(reducer, preloadedState, enhancer)
// store holds our data
const store = Redux.createStore(
	
	// the reducer is a function that decides
	// how the state will change if i get an action
	(state, action) => {
		if (action.type === 'DEPOSIT') {
			// state.bank.amount+=action.payload;
			return {
				...state,
				bank: {
					...state.bank,
					amount: state.bank.amount + action.payload
				}
			}
		} else {
			return state;
		}
	},
	
	
	{
		bank: {
			amount: 0,
			loans: []	
		},
		user: {
			firstName: 'Yariv',
			lastName: 'Katz',
			token: 'safadfasf',	
		}
	}
);

console.log(store.getState());

store.subscribe(() => {
	// this will jump every time the data is changing
	
	document.getElementById('display-amount').innerText = `${store.getState().bank.amount}$`	
});




document.getElementById('deposit-button').addEventListener('click', () => {
	// this will change the data
	// { type: 'DEPOSIT', payload: 10 }
	store.dispatch( { type: 'DEPOSIT', payload: 10 } )	
})