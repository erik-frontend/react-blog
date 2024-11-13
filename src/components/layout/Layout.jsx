import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { posts } from '../../utils/posts'

const Layout = () => {
  return (
    <>
      <Header/>
      <main>
          <Outlet/>
      </main>
      <Footer lenght={posts.length}/>
    </>
  )
}

export default Layout