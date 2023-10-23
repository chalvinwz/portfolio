'use client'
import { Container, Group, ActionIcon, rem, Center } from '@mantine/core'
import {
	IconBrandGithub,
	IconBrandGitlab,
	IconBrandLinkedin,
} from '@tabler/icons-react'
import classes from './index.module.css'
import Link from 'next/link'
import { link } from 'fs'

const links = [
	{
		link: 'https://github.com/chalvinwz',
		label: 'GitHub',
		icon: (
			<IconBrandGithub
				style={{ width: rem(24), height: rem(24) }}
				stroke={1.5}
			/>
		),
	},
	{
		link: 'https://gitlab.com/chalvinwz',
		label: 'GitLab',
		icon: (
			<IconBrandGitlab
				style={{ width: rem(24), height: rem(24) }}
				stroke={1.5}
			/>
		),
	},
	{
		link: 'https://www.linkedin.com/in/chalvinwiradhika/',
		label: 'LinkedIn',
		icon: (
			<IconBrandLinkedin
				style={{ width: rem(24), height: rem(24) }}
				stroke={1.5}
			/>
		),
	},
]

export default function Footer() {
	return (
		<footer className={classes.footer}>
			<Container>
				<Center mt={8} py={8}>
					<Group>
						{links.map((link) => (
							<ActionIcon
								key={link.link}
								component={Link}
								href={link.link}
								size='lg'
								color='gray'
								variant='subtle'
								target='_blank'
							>
								{link.icon}
							</ActionIcon>
						))}
					</Group>
				</Center>
			</Container>
		</footer>
	)
}
