import { useState, useEffect } from 'react'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Post from './pages/post/Post'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import { posts } from './utils/posts'
import Posts from './components/posts/Posts'
import { Error } from './pages/error/Error'
import NewPost from './pages/newPost/NewPost'
import { format } from 'date-fns'
import { id } from 'date-fns/locale'
import EditPost from './components/editPost/EditPost'

function App() {
  const [allPosts, setAllPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts")
    return savedPosts ? JSON.parse(savedPosts) : []
  })

  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const navigate = useNavigate()
  
  // NewPost
  const [postTitle, setPostTitle] = useState("")
  const [postBody, setPostBody] = useState("")

  const handleDelete = (id) => {
    const postList = allPosts.filter(post => post.id !== id)
    setAllPosts(postList)
    localStorage.setItem("posts", JSON.stringify(postList))
    navigate("/")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = allPosts.length ? allPosts[allPosts.length - 1].id + 1 : 1

    const dateTime = format(new Date(), "MMM dd, yyyy pp")
    const newPost = {
      id,
      title: postTitle,
      body: postBody,
      datetime: dateTime
    }
    const updatePosts = [...allPosts, newPost]
    setAllPosts(updatePosts)
    localStorage.setItem("posts", JSON.stringify(updatePosts))
    setPostTitle("")
    setPostBody("")
    navigate("/")
  }

  useEffect(() => {
    const filterPost = allPosts.filter(post =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase())
    )
    setSearchResult(filterPost.reverse())
  }, [allPosts, search])

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(allPosts))
  }, [allPosts])
  return (
    <Routes>
      <Route path='/' element={<Layout

      />}>
        <Route element={<Home
          allPosts={searchResult}
          search={search}
          setSearch={setSearch}
        />} index />
        <Route element={<Post 
          allPosts={allPosts}
          handleDelete={handleDelete} />} path='post/:id' />
        <Route element={<About />} path='about' />
        <Route element={<Contact />} path='contact' />
        <Route element={<NewPost
          postTitle={postTitle}
          postBody={postBody}
          setPostTitle={setPostTitle}
          setPostBody={setPostBody}
          handleSubmit={handleSubmit}
        />} path='post' />
        <Route
          path='edit/:id'
          element={<EditPost
            allPosts={allPosts}
            setAllPosts={setAllPosts}
          />}
        />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  )
}

export default App
