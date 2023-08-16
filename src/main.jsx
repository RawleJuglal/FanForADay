import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import './index.css'
import ffadLogo from './assets/images/FFAD-LOGO.png'

const App = ()=>{
  return(
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">
          <img src={ffadLogo} alt="logo of a stadium" />
        </Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
    
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />} />
      </Routes> 
    </BrowserRouter> 
  )
}

ReactDOM.createRoot(document.getElementById('root'))
.render(<App />)

