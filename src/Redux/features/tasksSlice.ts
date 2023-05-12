import { createSlice } from '@reduxjs/toolkit'
import build from 'next/dist/build'

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
	extraReducers: (builder) => {}
})
