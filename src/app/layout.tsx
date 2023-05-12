import ChakraProviderComponent from '@/Chakra/ChakraProviderComponent'

export const metadata = {
	title: 'Todo List',
	description: 'The frontend of a todo list app'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<ChakraProviderComponent>{children}</ChakraProviderComponent>
			</body>
		</html>
	)
}
