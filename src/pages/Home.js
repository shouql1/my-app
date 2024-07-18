import React from 'react'
import Header from '../component/Header'
import Form from '../component/Form'
import Footer from '../component/Footer'
import Login from '../component/Login'
import Singnup from '../component/Singnup'
import Contact from '../component/Contact'
import About from '../component/About'
import Movies from '../component/Movies'

const Home = () => {
  return ( 
    <div>
      <Header/>
      <Form/>
       {/* <Login/>
      <Singnup/> 
      <Movies/> 
      <Contact/>
      <About/> */}
      <Footer/>
    </div>
  )
}

export default Home
