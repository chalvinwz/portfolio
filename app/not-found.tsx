'use client'

import { Heading, Text, Button, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
	const router = useRouter()

	return (
		<VStack justify='center' h='80vh' spacing={4}>
			<Heading
				as='h1'
				size='2xl'
				bgGradient='linear(to-r, teal.400, teal.600)'
				backgroundClip='text'
			>
				404
			</Heading>
			<Text fontSize='18px'>Page Not Found</Text>
			<Text>The page you&apos;re looking for does not seem to exist</Text>

			<Button
				colorScheme='teal'
				variant='outline'
				onClick={() => router.push('/')}
			>
				Go to Home
			</Button>
		</VStack>
	)
}
