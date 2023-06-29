import { Center, HStack, Text, Link as CLink } from '@chakra-ui/react'
import { Github, Linkedin, Instagram } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
	{
		href: 'https://www.github.com/chalvinwz',
		icon: <Github />,
		text: 'github',
	},
	{
		href: 'https://www.linkedin/en/chalvinwiradhika',
		icon: <Linkedin />,
		text: 'linkedin',
	},
	{
		href: 'https://www.instagram.com/chalvinwz',
		icon: <Instagram />,
		text: 'instagram',
	},
]

const Footer = () => {
	return (
		<Center pos='sticky' bottom={0} w='100%' bg='black' h={16}>
			<HStack spacing={4}>
				{navLinks.map((navLink) => (
					<CLink key={navLink.text} as={Link} href={navLink.href} isExternal>
						{navLink.icon}
					</CLink>
				))}
			</HStack>
		</Center>
	)
}

export default Footer
