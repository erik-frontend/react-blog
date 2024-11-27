import React from 'react'

const NewPost = ({postTitle, postBody, setPostTitle, setPostBody, handleSubmit}) => {
  return (
    <div className='newPost'>
        <h2>New Post</h2>
        <form className='newPostForm' onSubmit={handleSubmit}>
            <label htmlFor="postTitle">title:</label>
            <input type="text" 
                id="postTitle"
                required
                value={postTitle}
                onChange={e => setPostTitle(e.target.value)}
                placeholder='Enter the Title'
                maxLength="100"
            />
            <label htmlFor="postBody">body:</label>
            <textarea 
                id='postBody'
                required
                value={postBody}
                onChange={e => setPostBody(e.target.value)}
                placeholder='Enter the body'
                maxLength="500"
            />
            <button type='submit' disabled={!postTitle || !postBody}>Submit</button>
        </form>
    </div>
  )
}

export default NewPost