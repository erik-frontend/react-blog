import React from 'react'

const Footer = () => {
    const year = new Date()
  return (
    <footer>
        <p className="copyright">All right recivde {year.getFullYear()}</p>
    </footer>
  )
}

export default Footer