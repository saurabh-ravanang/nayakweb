import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import Igcseeight from '../igcse8th/Igcseeight'
import Igcsenine from '../igcse9th/Igcsenine'
import IgcseTen from '../igcse10th/IgcseTen'

export default function Igcsemain() {
    const location = useLocation()
    const [igcsestate, setIgcsestate] = useState(8)
    return (
        <>
            <Navbar />

            <div className='cbseMainBtnGroup' >
                <div className='testBtnDiv'>
                    <a onClick={() => setIgcsestate(8)}><div style={{ color: location.hash == '#ssc' ? 'white' : '#D00000', backgroundColor: location.hash == '#ssc' ? '#D00000' : 'white' }} className={`testBtn ${igcsestate == 8 ? 'testActive ' : 'nono'}`}>IGCSE 8<sup>th</sup> STD</div></a>

                    <a onClick={() => setIgcsestate(9)}><div style={{ color: location.hash == '/cbsenine' ? 'white' : '#D00000', backgroundColor: location.hash == '#icsc' ? '#D00000' : 'white' }} className={`testBtn ${igcsestate == 9 ? 'testActive ' : 'nono'}`}>IGCSE 9<sup>th</sup> STD</div></a>

                    <a onClick={() => setIgcsestate(10)} ><div style={{ color: location.hash == '#cbsc' ? 'white' : '#D00000', backgroundColor: location.hash == '#cbsc' ? '#D00000' : 'white' }} className={`testBtn ${igcsestate == 10 ? 'testActive ' : 'nono'}`}>IGCSE 10<sup>th</sup> STD</div></a>

                </div>
            </div>

            {igcsestate == 8 ? <Igcseeight /> : igcsestate == 9 ? <Igcsenine /> : igcsestate == 10 ? <IgcseTen /> : null}

            <Footer />
        </>
    )
}
