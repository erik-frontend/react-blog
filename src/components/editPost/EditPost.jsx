import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import "./editPost.scss"

const EditPost = ({allPosts, setAllPosts}) => {
  const {id} = useParams()
  // console.log(allPosts);
  const navigate = useNavigate()

    const postToEdit = allPosts.find(post => post.id.toString() === id)

 
  const [editTitle, setEditTitle] = useState(postToEdit?.title || "")
  const [editBody, setEditBody] = useState(postToEdit?.body || "")

  const handleSave = (e) => {
    e.preventDefault()

    const updatePosts = allPosts.map(post => 
      post.id.toString() === id
        ? {...post, title:editTitle, body:editBody}
        : post
    )

    setAllPosts(updatePosts)
    localStorage.setItem("posts", JSON.stringify(updatePosts))
    navigate("/")
  }

  if(!postToEdit) return <p>Post not Found</p>

  return (
    <div className="editPost">
      <h2>Edit Post</h2>
      <form className='newPostForm' onSubmit={handleSave}>
            <label htmlFor="postTitle">title:</label>
            <input type="text" 
                id="postTitle"
                required
                value={editTitle}
                onChange={e => setEditTitle(e.target.value)}
                placeholder='Enter the Title'
                maxLength="100"
            />
            <label htmlFor="postBody">body:</label>
            <textarea 
                id='postBody'
                required
                value={editBody}
                onChange={e => setEditBody(e.target.value)}
                placeholder='Enter the body'
                maxLength="500"
            />
            <button type='submit'>Submit</button>
        </form>
      </div>
  )
}

export default EditPost