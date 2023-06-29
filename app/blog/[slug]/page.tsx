'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const BlogPage = () => {
	const params = useParams()

	return <div>{params.slug}</div>
}

export default BlogPage
