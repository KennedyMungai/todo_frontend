import { useAppSelector } from '@/Redux/hooks'

const TaskDisplay = () => {
	const { tasks } = useAppSelector((state) => state.tasks)

	return <div>TaskDisplay</div>
}

export default TaskDisplay
