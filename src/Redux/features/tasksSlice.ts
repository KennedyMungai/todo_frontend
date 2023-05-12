import axios from 'axios'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const getAllTasks = createAsyncThunk('tasks/getAllTasks', async () => {
	const tasks = await axios.get('http://localhost:8000/tasks')
	return tasks.data
})

interface Task {
	task_content: string
	is_complete: boolean
	date_created: Date
	is_loading: boolean
}

const initialState: Task = {
	task_content: '',
	is_complete: false,
	date_created: new Date(),
	is_loading: false
}

const tasksSlice = createSlice({
	name: 'task',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllTasks.pending, (state) => {
				state.is_loading = true
			})
			.addCase(
				getAllTasks.fulfilled,
				(state, action: PayloadAction<Task>) => {
					state.is_loading = false
					state.task_content = action.payload.task_content
					state.is_complete = action.payload.is_complete
					state.date_created = action.payload.date_created
				}
			)
			.addCase(getAllTasks.rejected, (state) => {
				state.is_loading = false
			})
	}
})

export default tasksSlice.reducer
