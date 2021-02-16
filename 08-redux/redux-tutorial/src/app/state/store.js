/**

store = {
	bank: {
		amount: 0	
	},
	
	todo: {
		tasks: []
	}
}

 */
 
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import bankReducer from './bank.reducer';
import bankReducer from '../../bank/state/bank.slice';
import todoReducer from '../../todo/state/todo.slice';

const store = configureStore({
	reducer: combineReducers({
		bank: bankReducer,
		todo: todoReducer
		// user: userReducer
	})
	// ,
	// preloadedState: {
	// 	bank: {
	// 		amount: 100
	// 	}
	// }
});

export default store;
