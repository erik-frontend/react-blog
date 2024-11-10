import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  const navItems = [
    {
        name:"Home",
        path:"/"
    },
    {
        name:"About me",
        path:"/about"
    },
    {
        name:"Post",
        path:"/post"
    },
    {
        name:"Contact",
        path:"/contact"
    }
  ]
    return (
    <ul className='nav-list'>
        {navItems.map((item, index) => (
            <li className="nav-item" key={index}>
                <Link to={item.path}>{item.name}</Link>
            </li>
        ))}
    </ul>
  )
}

export default Nav