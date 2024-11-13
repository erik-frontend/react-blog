import React from 'react'
import { posts } from '../../utils/posts'
import { Link } from 'react-router-dom'
import "./style.scss"

const Posts = () => {
    return (
        <article className='posts'>
            {posts.length > 0 ? (
                posts.map(post => {
                    const {body, datetime, id, title} = post
                    return (
                         <Link className='posts-link' key={id} to={`/post/${id}`}>
                        <h2>{title}</h2>
                        <span className='post-data'>{datetime}</span>
                        <p className='post-body'>{
                            (body.length <= 30 ? body : `${body.slice(0, 30)}...`)
                            }</p>
                    </Link>
                    )
                })
            ) : (
                <p>No display posts</p>
            )}
        </article>
    )
}

export default Posts