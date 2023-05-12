import { createSlice } from '@reduxjs/toolkit'

interface Task {
	task_content: string
	is_complete: boolean
	date_created: string
	is_loading: boolean
}
