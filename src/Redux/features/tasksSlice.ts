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
	is_loading: boolean
}

type Tasks = Task[]

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
	extraReducers: (builder) => {}
})

export default tasksSlice.reducer
