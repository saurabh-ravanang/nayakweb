import React, { useState } from 'react'
import "./paper.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';

import { Helmet } from "react-helmet";
import Cbsepaper from '../papercbse/Cbsepaper';
import Sscpaper from '../papercbse/Sscpaper';
import Icsepaper from '../papercbse/Icsepaper';
import Newnavbar from '../newNavbar/Newnavbar';
import LogoContact from '../logoContact/logoContact';
import { FaWhatsapp } from "react-icons/fa";
import Newenqire from '../Enquire Form/Newenqire';

export default function Papers() {

    const [state, setState] = useState(8)
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Sample Question Papers for Class X | Nayak's Tutorials</title>
                {/* <title>{state==8?"saurabh":state==9?"rahul":state==10?"ketan":null}</title> */}
                <meta name="title" content="Sample Question Papers for Class X | Nayak's Tutorials" />
                <meta name="description" content="Nayak's Tutorials offers sample question papers for Class X for all boards (CBSE, ICSE, IGCSE, SSC). Download the PDFs now to help with your exam prep." />
                <link rel="canonical" href="https://nayakstutorials.com/paper/" />

            </Helmet>
            {/* <Navbar /> */}

            <div className="wpfloat">

                <LogoContact />
                <Newnavbar />
                <div className='FirstheadingDiv'>
                    <h1>Practice Test Papers</h1>
                </div>
                {/* <div className='cbseMainBtnGroup' > */}
                <div className='testBtnDiv'>
                    <a className='paperanchor' onClick={() => setState(8)}><div className={`testBtn ${state == 8 ? 'testActive ' : 'nono'}`}>SSC</div></a>

                    <a className='paperanchor' onClick={() => setState(9)}><div className={`testBtn ${state == 9 ? 'testActive ' : 'nono'}`}>CBSE</div></a>

                    <a className='paperanchor' onClick={() => setState(10)} ><div className={`testBtn ${state == 10 ? 'testActive ' : 'nono'}`}>ICSE</div></a>

                </div>
                {/* </div> */}
                {/* <div className='practicepaper text-center' ><h1>Practice Test Papers</h1></div> */}

                {state == 8 ? <Sscpaper /> : state == 9 ? <Cbsepaper /> : state == 10 ? <Icsepaper /> : null}
                <Footer />


                <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>
                {/* <div className='newenquirediv'><Newenqire /></div> */}
            </div>
        </>
    )
}
