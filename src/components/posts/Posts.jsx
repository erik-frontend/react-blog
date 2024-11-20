import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"

const Posts = ({allPosts}) => {
    console.log(allPosts);
    
    return (
        <article className='posts'>
            {allPosts.length > 0 ? (
                allPosts.map(post => {
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