import { ReactNode } from 'react'

type Props = {
	children: ReactNode
}

const ChakraProviderComponent = ({ children }: Props) => {
	return <div>{children}</div>
}

export default ChakraProviderComponent
