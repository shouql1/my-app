import React from 'react'
import "./cssallf.css"
import { Link } from 'react-router-dom'

  
const Header = ({ title }) => {
  return (
    <header className="Header">
    <a href="#"className="log">{title}</a>

      <nav className="navber">
       
      <Link to="Movies-s" className="btn"><a href="#"className="active">MOVIES</a> </Link>
          <Link to="/contact" className="btn">  <a href="#"className="active">Contact</a> </Link>
          <Link to="/about-us" className="btn"> <a href=""className="active">about</a> </Link>
        
        
        
      </nav>
      <ul>
        <li><Link to="/singn-up" className=" btn1">singn up</Link></li> <Link to="/log-in" className=" btn1"> <a href=""className="active">login</a></Link>
     
      </ul>
    </header>
  )
}

export default Header
