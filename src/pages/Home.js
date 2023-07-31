import React from 'react'
import { Link } from 'react-router-dom';
import BannerImage from '../assests/homepic.jpg'
import "../styles/Home.css"
import "../components/Footer"

const Home = () => {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`} }>
        <div className='headerContainer'>
          <h1>PIZZAMANIA</h1>

          <p>ELEVATING PIZZA TO A WHOLE NEW LEVEL</p>

          <Link to="/menu">
          <button> ORDER NOW </button>
          </Link>
        </div>
    </div>
  )
}

export default Home