import { useState } from 'react'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Post from './pages/post/Post'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import { posts } from './utils/posts'

function App() {
  const [allPosts, setAllPosts] = useState(posts)
    const navigate = useNavigate()
    const handleDelete = (id) => {
        const postList = posts.filter(post => post.id !== id)
        setAllPosts(postList)
        navigate("/")
    }
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route element={<Home/>} index/>
        <Route element={<Post handleDelete={handleDelete}/>} path='post/:id'/>
        <Route element={<About/>} path='about'/>
        <Route element={<Contact/>} path='contact'/>
      </Route>
    </Routes>
  )
}

export default App
