import '@mantine/core/styles.css'
import '@mantine/code-highlight/styles.css'

import { MantineProvider, ColorSchemeScript, Container } from '@mantine/core'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
	title: 'My Mantine app',
	description: 'I have followed setup instructions carefully',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<head>
				<ColorSchemeScript />
			</head>
			<body suppressHydrationWarning={true}>
				<MantineProvider>
					<Container>
						<Header />
						{children}
						<Footer />
					</Container>
				</MantineProvider>
			</body>
		</html>
	)
}
