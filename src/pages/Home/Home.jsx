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
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link to="vans">Find your van</Link>
    </div>
  )
}

export default Home
