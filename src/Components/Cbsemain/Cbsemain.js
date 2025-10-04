import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import { useLocation } from 'react-router-dom'
import CbseEight from '../cbse8th/CbseEight'
import CbseNine from '../cbse9th/CbseNine'
import CbseTen from '../cbse10th/CbseTen'

export default function Cbsemain() {
    const location = useLocation()
    const [cbsestate, setCbsestate]=useState(8)
    return (
        <>
            <Navbar />
            <div className='cbseMainBtnGroup' >
                <div className='testBtnDiv'>
                    <a onClick={() => setCbsestate(8)}><div style={{ color: location.hash == '#ssc' ? 'white' : '#D00000', backgroundColor: location.hash == '#ssc' ? '#D00000' : 'white' }} className={`testBtn ${cbsestate == 8 ? 'testActive ' : 'nono'}`}>CBSE 8<sup>th</sup> STD</div></a>

                    <a onClick={() => setCbsestate(9)}><div style={{ color: location.hash == '/cbsenine' ? 'white' : '#D00000', backgroundColor: location.hash == '#icsc' ? '#D00000' : 'white' }} className={`testBtn ${cbsestate == 9 ? 'testActive ' : 'nono'}`}>CBSE 9<sup>th</sup> STD</div></a>

                    <a onClick={() => setCbsestate(10)} ><div style={{ color: location.hash == '#cbsc' ? 'white' : '#D00000', backgroundColor: location.hash == '#cbsc' ? '#D00000' : 'white' }} className={`testBtn ${cbsestate == 10 ? 'testActive ' : 'nono'}`}>CBSE 10<sup>th</sup> STD</div></a>

                </div>
            </div>

            {cbsestate==8 ? <CbseEight /> : cbsestate==9 ? <CbseNine /> : cbsestate==10 ? <CbseTen />:null}
            <Footer />
        </>
    )
}
