import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import { useLocation } from 'react-router-dom'
import Icseicseeight from '../icse8th/IcseEight'
import NineIcse from '../nineIcse/NineIcse'
import TenIcse from '../tenIcse/TenIcse'

export default function Icsemain() {
    const location = useLocation()
    const [icsestate, setIcsestate]=useState(8)
    return (
        <>
            <Navbar />

            <div className='cbseMainBtnGroup' >
                <div className='testBtnDiv'>
                    <a onClick={() => setIcsestate(8)}><div style={{ color: location.hash == '#ssc' ? 'white' : '#D00000', backgroundColor: location.hash == '#ssc' ? '#D00000' : 'white' }} className={`testBtn ${icsestate == 8 ? 'testActive ' : 'nono'}`}>ICSE 8<sup>th</sup> STD</div></a>

                    <a onClick={() => setIcsestate(9)}><div style={{ color: location.hash == '/cbsenine' ? 'white' : '#D00000', backgroundColor: location.hash == '#icsc' ? '#D00000' : 'white' }} className={`testBtn ${icsestate == 9 ? 'testActive ' : 'nono'}`}>ICSE 9<sup>th</sup> STD</div></a>

                    <a onClick={() => setIcsestate(10)} ><div style={{ color: location.hash == '#cbsc' ? 'white' : '#D00000', backgroundColor: location.hash == '#cbsc' ? '#D00000' : 'white' }} className={`testBtn ${icsestate == 10 ? 'testActive ' : 'nono'}`}>ICSE 10<sup>th</sup> STD</div></a>

                </div>
            </div>

            {icsestate == 8 ? <Icseicseeight /> : icsestate == 9 ? <NineIcse /> : icsestate == 10 ? <TenIcse /> : null}

            <Footer />
        </>
    )
}
