import React from "react"
import bgImg from "../../assets/images/tailgate-jumbo.jpg"
import { Link } from "react-router-dom"
import './About.css'

export default function About() {
    return (
        <div className="about-page-container">
            <img src={bgImg} className="about-hero-image" />
            <div className="about-page-content">
                <h1>Don't be lame, rent a sports jersey for the game!</h1>
                <p>At our core, we aspire to empower every fan's fervor by offering affordable sports jerseys that foster a sense of belonging. Our commitment lies in delivering quality jerseys that don't break the bank, so you can effortlessly blend in with the passionate crowd.</p>
                <p> Just as a road trip becomes memorable with the right van, we believe your game day experience is elevated when you wear your team's colors proudly.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your team is waiting.<br />Your kit is ready.</h2>
                <Link className="link-button" to="/vans">Explore our jerseys</Link>
            </div>
        </div>
    );
}