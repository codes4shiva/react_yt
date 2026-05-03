import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <h3> Navbar </h3>
      <div >
        {/* <a href="/">Home</a>
        <a href="/about">About</a>   
        <a href="/Contact">Contact</a> */} // This is the traditional way of navigating between pages, but it causes a full page refresh which is not ideal in a single page application like React.
        <Link to ='/'> Home </Link>
        <Link to ='/about'> About </Link>
        <Link to ='/Contact'> Contact </Link>  // Link is used to navigate without refreshing the page, it is a component provided by react-router-dom
      </div>
     </div>
  )
}

export default Navbar
