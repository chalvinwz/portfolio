import { Container, Title, Text, Button, Group } from '@mantine/core'
import { Illustration } from './Illustration'
import classes from './NothingFoundBackground.module.css'

export function NothingFoundBackground() {
	return (
		<Container className={classes.root}>
			<div className={classes.inner}>
				<Illustration className={classes.image} />
				<div className={classes.content}>
					<Title className={classes.title}>Nothing to see here</Title>
					<Text
						c='dimmed'
						size='lg'
						ta='center'
						className={classes.description}
					>
						This site is under construction
					</Text>
				</div>
			</div>
		</Container>
	)
}
