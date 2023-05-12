import axios from 'axios'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getAllTasks = createAsyncThunk('tasks/getAllTasks', async () => {
	const tasks: Tasks = await axios.get('http://localhost:8000/tasks')
	return tasks
})

interface Task {
	task_content: string
	is_complete: boolean
	date_created: Date
}

type TasksType = Task[]

interface Tasks {
	tasks: TasksType
	is_loading: boolean
}

const initialState: Tasks = {
	tasks: [],
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
				(state, action: PayloadAction<Tasks>) => {
					state.is_loading = false
					state.tasks = action.payload.tasks
				}
			)
			.addCase(getAllTasks.rejected, (state) => {
				state.is_loading = false
			})
	}
})

export default tasksSlice.reducer
