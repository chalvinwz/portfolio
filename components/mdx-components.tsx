'use client'
import Image from 'next/image'
import { CodeHighlight, CodeHighlightTabs } from '@mantine/code-highlight'
import { Button } from '@mantine/core'
import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
	Image: (props: any) => (
		<Image
			alt='image'
			width={0}
			height={0}
			sizes='100vw'
			style={{ width: 'auto', height: '600px' }}
			{...props}
		/>
	),
	CodeHighlight: (props: any) => (
		<CodeHighlight withCopyButton={false} {...props} mb={20} />
	),
	Button,
}

interface MdxProps {
	code: string
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code)

	return <Component components={components} />
}
