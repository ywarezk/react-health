/**

store = {
	bank: {
		amount: 0	
	},
	user: {
		
	}
}

 */
 
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bankReducer from './bank.reducer';

const store = configureStore({
	reducer: combineReducers({
		bank: bankReducer,
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
