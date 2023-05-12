import ChakraProviderComponent from '@/Chakra/ChakraProviderComponent'
import ProviderComponent from '@/Redux/ProviderComponent'

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
				<ProviderComponent>
					<ChakraProviderComponent>
						{children}
					</ChakraProviderComponent>
				</ProviderComponent>
			</body>
		</html>
	)
}
