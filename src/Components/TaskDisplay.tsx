'use client'
import { useAppSelector } from '@/Redux/hooks'
import { Card, CardBody, Flex, Text, Divider } from '@chakra-ui/react'
import SingleTaskDisplay from './SingleTaskDisplay'

const TaskDisplay = () => {
	const { tasks } = useAppSelector((state) => state.tasks)

	return (
		<Flex
			bgColor={'gray.100'}
			justify={'center'}
			align={'center'}
			height={'100vh'}
			width={'100vw'}
		>
			<Flex
				padding={'2rem'}
				bgColor={'slategray'}
				borderRadius={'1rem'}
				width={'50%'}
				height={'75%'}
				align={'center'}
				color={'white'}
				direction={'column'}
			>
				<Text paddingBottom={'0.5rem'} fontSize={'1.5rem'}>
					Testing
				</Text>
				<Divider />
				<Flex direction={'column'} gap={'0.5rem'} p={'0.5rem'}>
					{tasks.map((task) => {
						return <SingleTaskDisplay key={task.id} />
					})}
				</Flex>
			</Flex>
		</Flex>
	)
}

export default TaskDisplay
