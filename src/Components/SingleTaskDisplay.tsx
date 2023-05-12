import { Box, Flex, Text } from '@chakra-ui/react'

type Props = {
	task_content: string
	is_complete: boolean
	date_created: Date
}

const SingleTaskDisplay = ({
	task_content,
	is_complete,
	date_created
}: Props) => {
	return (
		<Flex direction='column'>
			<Box>
				<Text>{task_content}</Text>
			</Box>
			<Flex gap={'full'}>
				<Text>{date_created.toISOString()}</Text>
				{is_complete ? '😄' : '😠'}
			</Flex>
		</Flex>
	)
}

export default SingleTaskDisplay
