/**

a slice contains portion of our state

{
	bank: {}
}

portion === reducer bank + actions bank

 */
 
import { createSlice } from '@reduxjs/toolkit';

// { reducer: bankReducer, actions: {deposit}}
const bankSlice = createSlice({
	name: 'bank',
	initialState: {
		amount: 10
	},
	reducers: {
		deposit: (bankState, depositAction) => {
			bankState.amount+= depositAction.payload;
		}
	}
});

export default bankSlice.reducer;

export const { deposit } = bankSlice.actions;