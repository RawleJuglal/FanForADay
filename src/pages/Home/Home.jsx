import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import fanJumbo from '../../assets/images/fan-jumbo.jpg'


const Home = ()=>{
  const homeStyles = {
    backgroundImage: `url(${fanJumbo})`, 
    backgroundSize:'cover', 
    backgroundRepeat:'no-repeat'
  }

  return(
    <div className="home-container flex flex-column flex-center" style={homeStyles}>
        <h1>Want to catch a local game, but lack the swag to fit in</h1>
        <p>Let FanForADay get you the threads you need to at a price that will leave plenty for that beer and hotdog.</p>
        <Link to="jerseys">Find your team</Link>
    </div>
  )
}

export default Home
