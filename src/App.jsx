import { useState } from 'react'
import Layout from './components/layout/Layout'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'
import Post from './pages/post/Post'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route element={<Home/>} index/>
        <Route element={<Post/>} path='post'/>
        <Route element={<About/>} path='about'/>
        <Route element={<Contact/>} path='contact'/>
      </Route>
    </Routes>
  )
}

export default App
