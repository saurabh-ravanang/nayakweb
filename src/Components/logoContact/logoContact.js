import React from 'react'
// import '../Navbar/navbar.css';
import './logocontact.css';
// import img from "../../Assets/Navbar/Nayaks_logo.png"
// import img from "../../Assets/Navbar/Full_Logo.png"
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineYoutube } from 'react-icons/ai'
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

function LogoContact() {
    return (
        <>
            <div className='topBglatest'>
                <div className='topBglatestIcons'>
                    <a target='_blank' href='https://www.instagram.com/nayakstutorialss/'>
                        <div className='topBglatestcircle'>
                            <AiOutlineInstagram id='' size={22} style={{ color: 'white' }} />
                        </div></a>
                    <a target='_blank' href='https://www.facebook.com/nayakstutorialss/'>
                        <div className='topBglatestcircle'>
                            <BiLogoFacebook id='' size={22} style={{ color: 'white' }} />
                        </div></a>
                    <a target='_blank' href='https://www.youtube.com/@NayaksTutorials13'>
                        <div className='topBglatestcircle'>
                            <AiOutlineYoutube id='' size={22} style={{ color: 'white' }} />
                        </div></a>
                    <a target='_blank' href='https://x.com/nayaks_tutorial'>
                        <div className='topBglatestcircle'>
                            <FaXTwitter id='' size={22} style={{ color: 'white' }} />
                        </div></a>
                </div>

                <div className='topBglatestAdd'>
                    <a href="mailto:info@nayakstutorials.com" target='_blank'><p id='topBglatestAddemail'><MdEmail size={22} style={{ color: 'white', marginRight: '10px' }} />info@nayakstutorials.com</p></a>
                    
                    
                    <p id='topBglatestAddcall'><IoIosCall size={22} style={{ color: 'white' }} /><a style={{ color: 'white' }} href="tel:+912221723434" target='_blank'>+91 2221723434</a>  | <a style={{ color: 'white' }} href="tel:+917710010044" target='_blank'>+91 7710010044</a></p>

                </div>
            </div>

        </>
    )
}

export default LogoContact
