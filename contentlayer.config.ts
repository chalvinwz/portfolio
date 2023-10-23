import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields: any = {
	slug: {
		type: 'string',
		resolve: (doc: any) => `/${doc._raw.flattenedPath}`,
	},
	slugAsParams: {
		type: 'string',
		resolve: (doc: any) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
	},
}

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `blog/**/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		description: {
			type: 'string',
			required: true,
		},
		date: {
			type: 'date',
			required: true,
		},
	},
	computedFields,
}))

export default makeSource({
	contentDirPath: 'content',
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [],
	},
})
