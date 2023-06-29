import {
	Box,
	Flex,
	HStack,
	Heading,
	Spacer,
	Text,
	Button,
} from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
	{
		href: '/blog',
		text: 'Blog',
	},
	{
		href: '/about',
		text: 'About',
	},
	{
		href: '/resume',
		text: 'Resume',
	},
]

const Navbar = () => {
	const pathname = usePathname()

	return (
		<Flex pos='sticky' top={0} w='100%' bg='black' h={16} align='center'>
			<Heading as={Link} href='/' size='sm'>
				Chalvin Wiradhika
			</Heading>

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
			</HStack>
		</Flex>
	)
}

export default Navbar
