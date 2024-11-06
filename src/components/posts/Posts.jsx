import React from 'react'
import { posts } from '../../utils/posts'
import { Link } from 'react-router-dom'

const Posts = () => {
    return (
        <article className='post'>
            {posts.length > 0 ? (
                posts.map(post => {
                    const {body, datetime, id, title} = post
                    return (
                         <a key={id} href={`/post/${id}`}>
                        <h2>{title}</h2>
                        <span className='post-data'>{datetime}</span>
                        <p className='post-body'>{
                            (body.length <= 25 ? body : `${body.slice(0, 25)}...`)
                            }</p>
                    </a>
                    )
                })
            ) : (
                <p>No display posts</p>
            )}
        </article>
    )
}

export default Posts