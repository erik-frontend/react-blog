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

function App() {
  const [allPosts, setAllPosts] = useState(() => {
    const savedPosts = localStorage.getItem("posts")
    return savedPosts ? JSON.parse(savedPosts) : posts
  })
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const navigate = useNavigate()

  const handleDelete = (id) => {
    const postList = allPosts.filter(post => post.id !== id)
    setAllPosts(postList)
    localStorage.setItem("posts", JSON.stringify(postList))
    navigate("/")
  }

  useEffect(() => {
    const filterPost = allPosts.filter(post =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase())
    )
    setSearchResult(filterPost.reverse())
  }, [allPosts, search])
  return (
    <Routes>
      <Route path='/' element={<Layout

      />}>
        <Route element={<Home
          allPosts={searchResult}
          search={search}
          setSearch={setSearch}
        />} index />
        <Route element={<Post handleDelete={handleDelete} />} path='post/:id' />
        <Route element={<About />} path='about' />
        <Route element={<Contact />} path='contact' />
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
  )
}

export default App
