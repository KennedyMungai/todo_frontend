import { Box, Card, CardBody, Divider, Flex, Text } from '@chakra-ui/react'

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
		<Card>
			<CardBody>
				<Text>{task_content}</Text>
				<Divider />
				<Flex flexGrow={'grow'}>
					<Text>{date_created.toISOString()}</Text>
					{is_complete ? '😃' : '☹️'}
				</Flex>
			</CardBody>
		</Card>
	)
}

export default SingleTaskDisplay
