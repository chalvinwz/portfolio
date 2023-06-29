'use client'

import DownloadResume from '@/components/DownloadResume'
import { Heading, Stack, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

const Home = () => {
	const router = useRouter()

	return (
		<Stack justify='center' h='75vh'>
			<VStack align='left' spacing={4}>
				<Heading>Chalvin Wiradhika</Heading>
				<Text>Software Engineer</Text>
				<DownloadResume />
			</VStack>
		</Stack>
	)
}

export default Home
