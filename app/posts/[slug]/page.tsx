import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { Mdx } from '@/components/mdx-components'
import { notFound } from 'next/navigation'

export const generateStaticParams = async () =>
	allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
	const post = allPosts.find((post) => post.slugAsParams === params.slug)

	return { title: post?.title }
}

const Page = ({ params }: { params: { slug: string } }) => {
	const post = allPosts.find((post) => post.slugAsParams === params.slug)

	if (!post) {
		notFound()
	}

	return (
		<article>
			<div>
				<time dateTime={post.date}>
					{format(parseISO(post.date), 'LLLL d, yyyy')}
				</time>
				<h1>{post.title}</h1>
			</div>
			<Mdx code={post.body.code} />
		</article>
	)
}
export default Page
