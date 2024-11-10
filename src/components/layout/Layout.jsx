import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Nav from '../nav/Nav'

const Layout = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <main>
          <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout