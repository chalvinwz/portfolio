'use client'

import { Container } from '@chakra-ui/react'
import { Providers } from '@/app/providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const MainContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<Providers>
			<Container maxW='container.md' pb={20}>
				<Navbar />
				{children}
				<Footer />
			</Container>
		</Providers>
	)
}

export default MainContainer
