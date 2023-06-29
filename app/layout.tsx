'use client'
import { Container } from '@chakra-ui/react'
import { Providers } from '@/app/providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning={true}>
				<Providers>
					<Container maxW='container.md'>
						<Navbar />
						{children}
						<Footer />
					</Container>
				</Providers>
			</body>
		</html>
	)
}
