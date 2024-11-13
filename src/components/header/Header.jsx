import React from 'react'
import Nav from '../nav/Nav'
import "./style.scss"

const Header = () => {
  return (
    <header className='header'>
        <span className='logo'>React Blog</span>
        <Nav/>
    </header>
  )
}

export default Header