import React, {  } from 'react'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import Singnup from './component/Singnup';
import Login from './component/Login'; 
import About from './component/About';
import Contact from './component/Contact';
import Movie from './component/Movies';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/singn-up" element={<Singnup/>} />
        <Route path="/log-in" element={<Login/>} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="Movies-s" element={<Movie/>} />
        

      </Routes>
    </BrowserRouter>
  )
}

export default App