
import { createReducer } from '@reduxjs/toolkit';
import { deposit } from './actions';

const bankReducer = createReducer(
	{
		amount: 10
	},
	{
		[deposit]: (bankState, depositAction) => {
			bankState.amount+= depositAction.payload;
		}
	}
);

export default bankReducer;