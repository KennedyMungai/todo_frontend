import { createSlice } from '@reduxjs/toolkit'

interface Task {
	task_content: string
	is_complete: boolean
	date_created: Date
	is_loading: boolean
}

const initialState: Task
{
	task_content: ''
	is_complete: false
	date_created: Date.now()
	is_loading: false
}
