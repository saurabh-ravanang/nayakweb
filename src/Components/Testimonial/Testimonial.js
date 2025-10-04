import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../Navbar/Navbar'
import './testimonial.css'
import coma from "../../Assets/testimonial/coma.png"
import ananya from "../../Assets/testimonial/ananya.png"
import saloni from "../../Assets/testimonial/Saloni.png"
import ridhima from "../../Assets/testimonial/Ridhima.png"
import person from "../../Assets/testimonial/person.png"
import ved from "../../Assets/testimonial/Ved.png"
import atharv from "../../Assets/testimonial/Atharv.png"
import pranav from "../../Assets/testimonial/pranav.png"
import gargi from "../../Assets/testimonial/gargi.png"
import muskan from "../../Assets/testimonial/muskan.png"
import sanvi from "../../Assets/testimonial/sanvi.jpeg"
import newAtharv from "../../Assets/testimonial/newAtharv.jpeg"
import ananyaParent from "../../Assets/testimonial/Annanya parents.jpg"
import nishantParent from "../../Assets/testimonial/Nishant parents.jpg"
import icseT from "../../Assets/offers/ICSE-topper-web2.png"
import sscT from "../../Assets/offers/scc-topper-web2.png"
import cbseT from "../../Assets/offers/cbse-topper-web2.png"

import newsscM from "../../Assets/offers/newssc.png"
import newicseM from "../../Assets/offers/newICSE Toppers of 2024.png"
import newcbseM from "../../Assets/offers/newcbse.png"
import newcet from "../../Assets/offers/newmht-cet.png"
import newjee from "../../Assets/offers/JEEAll.jpg"

import { useLocation } from 'react-router-dom'
import { Helmet } from "react-helmet";
import Newnavbar from '../newNavbar/Newnavbar'
import LogoContact from '../logoContact/logoContact'
import { FaWhatsapp } from "react-icons/fa";
import Newenqire from '../Enquire Form/Newenqire'



export default function Testimonial() {
    const location = useLocation()
    console.log(location.hash, 'locationnnnnn')
    console.log(location.pathname, 'pathname')
    return (
        <>
            <Helmet>
                <title>Student Testimonials | Nayak's Tutorials</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Hear from students & parents, who have benefited from our coaching classes.Discover genuine success stories on our dedicated page." />

                <link rel="canonical" href="https://nayakstutorials.com/testimonial/" />

            </Helmet>
            {/* <Navbar /> */}


            <div className="wpfloat">

                <LogoContact />
                <Newnavbar />
                <div className='FirstheadingDiv'>
                    <h1>success stories</h1>
                </div>
                <div className='testBtnDiv'>
                    <a href='#ssc'><div style={{ color: location.hash == '#ssc' ? 'white' : '#D00000', backgroundColor: location.hash == '#ssc' ? '#D00000' : 'white' }} className={`testBtn ${location.hash == '' ? 'testActive ' : 'nono'}`}>SSC</div></a>
                    <a href='#icsc'><div style={{ color: location.hash == '#icsc' ? 'white' : '#D00000', backgroundColor: location.hash == '#icsc' ? '#D00000' : 'white' }} className='testBtn'>ICSE</div></a>
                    <a href='#cbsc'><div style={{ color: location.hash == '#cbsc' ? 'white' : '#D00000', backgroundColor: location.hash == '#cbsc' ? '#D00000' : 'white' }} className='testBtn'>CBSE</div></a>
                    <a href='#mht-cet'><div style={{ color: location.hash == '#mht-cet' ? 'white' : '#D00000', backgroundColor: location.hash == '#mht-cet' ? '#D00000' : 'white' }} className='testBtn'>MHT-CET</div></a>
                    <a href='#jee'><div style={{ color: location.hash == '#jee' ? 'white' : '#D00000', backgroundColor: location.hash == '#jee' ? '#D00000' : 'white' }} className='testBtn'>JEE</div></a>
                </div>
                {location.hash == '#ssc' || location.hash == '' ? <>
                    {/* <div className='mainTestDiv' id='firstTestimonial'>
                    <div className='testimonialfirst'>
                        <div style={{ padding: '10px' }} className='testImgDiv'>
                            <img style={{ borderRadius: '50%' }} src={sanvi} />
                        </div>
                        <p>Saanvi Kulkarni <br></br> X SSC – 94.80 percent <br></br> SVPT Rabodi</p>
                    </div>
                    <div className='testimonialsecond'>
                        <h5 className='TName'>Student</h5>
                        <p>I was in Nayak’s for my IX and X. I am extremely proud of being in Nayak’s Tutorials. They helped me in my studies in all the subjects. They are a big part of my success. They have been the backbone of helping me with my studies and solved my doubts from time to time. I thank the entire team of Nayak’s for my success. <br></br> Thank you very much. <br></br>I will always be a Proud Nayakaite.</p>
                    </div>
                    <div className='testimonialthird'>
                        <img src={coma} />
                    </div>
                </div> */}

                    <div className='testtopdiv'>
                        <img src={newsscM} />
                    </div>


                </> : null}

                {location.hash == '#icsc' ? <>
                    <div className='testtopdiv'>
                        <img src={newicseM} />
                    </div>
                </> : null}

                {location.hash == '#cbsc' ? <>
                    <div className='testtopdiv'>
                        <img src={newcbseM} />
                    </div>

                </> : null}
                {location.hash == '#mht-cet' ? <>
                    <div className='testtopdiv'>
                        <img src={newcet} />
                    </div>

                </> : null}
                {location.hash == '#jee' ? <>
                    <div className='testtopdiv'>
                        <img src={newjee} />
                    </div>

                </> : null}
                <Footer />


                <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>

                {/* <div className='newenquirediv'><Newenqire /></div> */}
            </div>
        </>
    )
}
