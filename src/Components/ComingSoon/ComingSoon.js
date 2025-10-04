import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import comingSoon from '../../Assets/faq/Coming soon_WEB.png'
import "./comingsoon.css";

function ComingSoon() {
  return (
    <>
    <Navbar />
    <div className='comingsoonImg'>
        <img style={{width:'100%'}} src={comingSoon}/>
    </div>
    <Footer />
    </>
  )
}

export default ComingSoon