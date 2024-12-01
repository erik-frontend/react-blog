import React from 'react'

const EditPost = ({allPosts, setAllPosts}) => {

  const postToEdit = allPosts.find(post => post.id.toString() === id)
 
  const [editTitle, setEditTitle] = useState()

  return (
    <div>EditPost</div>
  )
}

export default EditPost