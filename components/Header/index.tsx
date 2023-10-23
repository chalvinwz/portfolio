'use client'
import { Burger, Drawer, Group, Image, Stack } from '@mantine/core'
import ColorModeToggler from '../ColorModeToggler'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import classes from './index.module.css'
import { useState } from 'react'

const links = [
	{ link: '/', label: 'Home', blank: false },
	{ link: '/blog', label: 'Blog', blank: false },
	{ link: 'https://flowcv.com/resume/tcmu9sut98', label: 'CV', blank: true },
]

const Header = () => {
	const [opened, { open, close }] = useDisclosure(false)
	const [active, setActive] = useState(links[0].link)

	const items = links.map((link) => (
		<Link
			key={link.label}
			href={link.link}
			className={classes.link}
			data-active={active === link.link || undefined}
			target={link.blank ? '_blank' : '_self'}
			onClick={() => {
				!link.blank ? setActive(link.link) : ''
			}}
		>
			{link.label}
		</Link>
	))

	return (
		<header className={classes.header}>
			<Group py={8} justify='space-between'>
				<Image radius='md' w={48} src='icon.png' alt='logo' />

				<Group gap='lg'>
					<Group visibleFrom='sm'>{items}</Group>
					<ColorModeToggler />

					<Group hiddenFrom='sm'>
						<Drawer
							position='top'
							size='100%'
							opened={opened}
							onClose={close}
							title={<Image radius='md' w={48} src='icon.png' alt='logo' />}
							closeButtonProps={{ size: 'xl' }}
						>
							<Stack onClick={close}>{items}</Stack>
						</Drawer>
						<Burger opened={opened} onClick={open} />
					</Group>
				</Group>
			</Group>
		</header>
	)
}
export default Header
