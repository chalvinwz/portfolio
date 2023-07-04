import {
	Flex,
	HStack,
	Spacer,
	Link as CLink,
	Image,
	Box,
	Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import DownloadResume from './DownloadResume'

const navLinks = [
	// {
	// 	href: '/about',
	// 	text: 'About',
	// },
	{
		href: '/about',
		text: '',
	},
]

const Navbar = () => {
	const pathname = usePathname()

	return (
		<Flex pos='sticky' top={0} w='100%' bg='black' h={16} align='end'>
			<Box px={2} py={2} bg='white' borderRadius='full'>
				<CLink as={Link} href='/'>
					<Image src='/icon.png' alt='icon' boxSize={8} />
				</CLink>
			</Box>

			<Spacer />

			<HStack spacing={4}>
				{navLinks.map((navLink) => (
					<Text
						key={navLink.text}
						as={Link}
						href={navLink.href}
						fontWeight={navLink.href === pathname ? 'bold' : ''}
					>
						{navLink.text}
					</Text>
				))}
				<DownloadResume />
			</HStack>
		</Flex>
	)
}

export default Navbar
