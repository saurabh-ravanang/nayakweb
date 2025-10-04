import React from 'react'
// import '../../../src/';
import Navbar from '../Navbar/Navbar';
import img from '../../Assets/Navbar/Nayaks_logo.png'
import whatsapp from '../../Assets/Home/chat.png'
import HomeCon from '../HomeMain/HomeCon';
import Why from '../Why nayak/Why';
import Offers from '../offers/Offers';
import Toppers from '../toppers/Toppers';
import Branch from '../search branch/Branch';
import Video from '../video/Video';
import Footer from '../footer/Footer';
import NewOffer from '../../newOffers/NewOffer';
import { FaWhatsapp } from "react-icons/fa";
import './mainhome.css'
import Advantage from '../advantage/Advantage';
import Newnavbar from '../newNavbar/Newnavbar';
import LogoContact from '../logoContact/logoContact';
import Newenqire from '../Enquire Form/Newenqire';

const Home = () => {
  return (
    <>
      <div className="wpfloat">

        {/* <Navbar /> */}
        <LogoContact />
        <Newnavbar />
        <HomeCon />
        <Why />
        {/* <Newnayak /> */}
        {/* <Offers /> */}
        <NewOffer />
        <Advantage />
        <Toppers />
        <Branch />
        <Video />
        <Footer />

        {/* <a href="https://wa.me/+919702928787" target="_blank"><img className='wpicon' src={whatsapp} alt="" /></a> */}

        <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>


        {/* <div className='newenquirediv'><Newenqire /></div> */}
      </div>
    </>
  )
}

export default Home