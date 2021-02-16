/**

{
	todo: {
		tasks: []
	}
}

 */
 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// store.dispatch(fetchTodo);
export const fetchTodo = createAsyncThunk(
	'todo/fetchTodo',
	async () => {
		const response = await fetch('https://nztodo.herokuapp.com/api/tasks/?format=json');
		const todoList = await response.json();
		return todoList
	}
)

// {reducer: , actions: {}}
const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		tasks: []
	},
	reducers: {
			
	},
	extraReducers: {
		[fetchTodo.fulfilled]: (todoState, action) => {
			todoState.tasks = action.payload;
		}
	}
});



export default todoSlice.reducer;

export const {} = todoSlice.actions;