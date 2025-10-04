import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import { useLocation } from 'react-router-dom'
import SscEight from '../ssc8th/SscEight'
import SscNine from '../ssc9th/SscNine'
import SscTen from '../ssc10th/SscTen'

export default function Sscmain() {
    const location = useLocation()
    const [sscstate, setSscstate]=useState(8)
    // console.log(sscstate)
    return (
        <>
            <Navbar />

            <div className='cbseMainBtnGroup' >
                <div className='testBtnDiv'>
                    <a onClick={()=>setSscstate(8)}><div style={{ color: location.hash == '#ssc' ? 'white' : '#D00000', backgroundColor: location.hash == '#ssc' ? '#D00000' : 'white' }} className={`testBtn ${sscstate == 8 ? 'testActive ' : 'nono'}`}>SSC 8<sup>th</sup> STD</div></a>

                    <a onClick={()=>setSscstate(9)}><div style={{ color: location.hash == '/cbsenine' ? 'white' : '#D00000', backgroundColor: location.hash == '#icsc' ? '#D00000' : 'white' }} className={`testBtn ${sscstate == 9 ? 'testActive ' : 'nono'}`}>SSC 9<sup>th</sup> STD</div></a>

                    <a onClick={()=>setSscstate(10)} ><div style={{ color: location.hash == '#cbsc' ? 'white' : '#D00000', backgroundColor: location.hash == '#cbsc' ? '#D00000' : 'white' }} className={`testBtn ${sscstate == 10 ? 'testActive ' : 'nono'}`}>SSC 10<sup>th</sup> STD</div></a>

                </div>
            </div>

            {sscstate==8 ? <SscEight /> : sscstate==9 ? <SscNine /> : sscstate==10 ? <SscTen />:null}

            <Footer />
        </>
    )
}
