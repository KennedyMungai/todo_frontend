import { Box, Card, CardBody, Flex, Text } from '@chakra-ui/react'

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
				<Text>
					View a summary of all your customers over the last month.
				</Text>
			</CardBody>
		</Card>
	)
}

export default SingleTaskDisplay
