import { useAppSelector } from '@/Redux/hooks'
import { Card, CardBody, Flex, Text } from '@chakra-ui/react'

const TaskDisplay = () => {
	const { tasks } = useAppSelector((state) => state.tasks)

	return <Flex backdropBlur={'lg'} bgColor={'slateblue'}></Flex>
}

export default TaskDisplay
