import MainContainer from '@/components/MainContainer'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Chalvin Wiradhika',
	description: "Chalvin Wiradhika's Portfolio Website",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning={true}>
				<MainContainer>{children}</MainContainer>
			</body>
		</html>
	)
}
