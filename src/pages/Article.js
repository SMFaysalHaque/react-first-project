import React from 'react'
import { useParams } from 'react-router-dom'
import articleContent from './article-content'
import NotFound from './NotFound'

const Article = () => {
    const { name } = useParams()
    const article = articleContent.find((article) => article.name === name)
    if (!article) return <NotFound />
    return (
        <div>
            <h1 className="sm:text-4xl text-2xl font-bold text-gray-900 my-6">
            { article.title }
            </h1>
            {article.content.map ((paragraph, index) => (
                <p key={index} className="mx-auto leading-relaxed text-base mb-4">
                    { paragraph }
                </p>
            ))}
        </div>
    )
}

export default Article