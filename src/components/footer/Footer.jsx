import React from 'react'
import "./footer.scss"
const Footer = ({lenght}) => {
    const year = new Date()
  return (
    <footer className='footer'>
        <p className="total-items">Total {lenght} {lenght <= 1 ? "post" : "posts"}</p>
        <p className="copyright">All right recivde {year.getFullYear()}</p>
    </footer>
  )
}

export default Footer