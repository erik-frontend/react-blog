import React from 'react'
import { posts } from '../../utils/posts'
import { useParams, useNavigate, Link } from 'react-router-dom'
import "./post.scss"

const Post = ({handleDelete, allPosts}) => {
  const {id} = useParams()
  const navigate = useNavigate()
  // console.log(navigate);
  
  //  console.log(typeof id);
  const post = allPosts.find(post => (post.id).toString() === id)
  // console.log(post);

  
  return (
    <div className='post'>
      {post && 
        <>
          <h2>{post.title}</h2>
          <p className='data'>{post.datetime}</p>
          <p className='text'>{post.body}</p>
          <button onClick={() => handleDelete(post.id)} className='detele'>Delete Post</button>
          <button onClick={() => navigate(`/edit/${post.id}`)} className='edit'>Edit Post</button>
        </>
      } {!post && 
        <>
        <h2>Post not found</h2>
        <p>Wall... that is dissapoint...</p>
        </>
      }
    </div>
  )
}

export default Post