import React, { useState } from 'react'
import math1 from '../../icsedoc/X IC MATH PRAC PAPER 1.pdf'
import math2 from '../../icsedoc/X IC MATH PRAC PAPER 2.pdf'
import math3 from '../../icsedoc/X IC MATH PRAC PAPER 3.pdf'

import eng1 from '../../icsedoc/X IC ENG 1 PRAC PAPER 1.pdf'
import eng2 from '../../icsedoc/X IC ENG 1 PRAC PAPER 2.pdf'
import eng3 from '../../icsedoc/X IC ENG 1 PRAC PAPER 3.pdf'

import eng4 from '../../icsedoc/X IC ENG 2 PRAC PAPER 1.pdf'
import eng5 from '../../icsedoc/X IC ENG 2 PRAC PAPER 2.pdf'
import eng6 from '../../icsedoc/X IC ENG 2 PRAC PAPER 3.pdf'

import che1 from '../../icsedoc/X IC CHEM PRAC PAPER 1.pdf'
import che2 from '../../icsedoc/X IC CHEM PRAC PAPER 2.pdf'
import che3 from '../../icsedoc/X IC CHEM PRAC PAPER 3.pdf'

import bio1 from '../../icsedoc/X IC BIO PRAC PAPER 1.pdf'
import bio2 from '../../icsedoc/X IC BIO PRAC PAPER 2.pdf'
import bio3 from '../../icsedoc/X IC BIO PRAC PAPER 3.pdf'

import phy1 from '../../icsedoc/X IC PHY PRAC PAPER 1.pdf'
import phy2 from '../../icsedoc/X IC PHY PRAC PAPER 2.pdf'
import phy3 from '../../icsedoc/X IC PHY PRAC PAPER 3.pdf'

import his1 from '../../icsedoc/X IC HIST PRAC PAPER 1.pdf'
import his2 from '../../icsedoc/X IC HIST PRAC PAPER 2.pdf'
import his3 from '../../icsedoc/X IC HIST PRAC PAPER 3.pdf'

import geog1 from '../../icsedoc/X IC GEOG PRAC PAPER 1.pdf'
import geog2 from '../../icsedoc/X IC GEOG PRAC PAPER 2.pdf'
import geog3 from '../../icsedoc/X IC GEOG PRAC PAPER 3.pdf'

import ecoA1 from '../../icsedoc/ECO APP PRAC PAPER 1.pdf'
import ecoA2 from '../../icsedoc/ECO APP PRAC PAPER 2.pdf'
import ecoA3 from '../../icsedoc/ECO APP PRAC PAPER 3.pdf'


import com1 from '../../icsedoc/X IC COMP APP PRAC PAPER 1.pdf'
import com2 from '../../icsedoc/X IC COMP APP PRAC PAPER 2.pdf'
import com3 from '../../icsedoc/X IC COMP APP PRAC PAPER 3.pdf'

import comS1 from '../../icsedoc/X IC CS PRAC PAPER 1.pdf'
import comS2 from '../../icsedoc/X IC CS PRAC PAPER 2.pdf'
import comS3 from '../../icsedoc/X IC CS PRAC PAPER 3.pdf'

import eco1 from '../../icsedoc/X IC ECO PRAC PAPER 1.pdf'
import eco2 from '../../icsedoc/X IC ECO PRAC PAPER 2.pdf'
import eco3 from '../../icsedoc/X IC ECO PRAC PAPER 3.pdf'

import hindi1 from '../../icsedoc/X IC HINDI PRAC PAPER 1.pdf'
import hindi2 from '../../icsedoc/X IC HINDI PRAC PAPER 2.pdf'
import hindi3 from '../../icsedoc/X IC HINDI PRAC PAPER 3.pdf'

import marathi1 from '../../icsedoc/X IC MAR PRAC PAPER 1.pdf'
import marathi2 from '../../icsedoc/X IC MAR PRAC PAPER 2.pdf'
import marathi3 from '../../icsedoc/X IC MAR PRAC PAPER 3.pdf'





export default function Icsepaper() {
    const [data, setData] = useState([
        { "id": 1, "heading": "X ICSE MATH PRACTICE PAPER 1", "pdf": math1 },
        { "id": 2, "heading": "X ICSE MATH PRACTICE PAPER 2", "pdf": math2 },
        { "id": 3, "heading": "X ICSE MATH PRACTICE PAPER 3", "pdf": math3 },
        { "id": 4, "heading": "X ICSE ENGLISH PRACTICE PAPER 1", "pdf": eng1 },
        { "id": 5, "heading": "X ICSE ENGLISH PRACTICE PAPER 2", "pdf": eng2 },
        { "id": 6, "heading": "X ICSE ENGLISH PRACTICE PAPER 3", "pdf": eng3 },
        { "id": 7, "heading": "X ICSE CHEMISTRY  PRACTICE PAPER 1", "pdf": che1 },
        { "id": 8, "heading": "X ICSE CHEMISTRY PRACTICE PAPER 2", "pdf": che2 },
        { "id": 9, "heading": "X ICSE CHEMISTRY PRACTICE PAPER 3", "pdf": che3 },
        { "id": 10, "heading": "X ICSE BIOLOGY  PRACTICE PAPER 1", "pdf": bio1 },
        { "id": 11, "heading": "X ICSE BIOLOGY PRACTICE PAPER 2", "pdf": bio2 },
        { "id": 12, "heading": "X ICSE BIOLOGY PRACTICE PAPER 3", "pdf": bio3 },
        { "id": 13, "heading": "X ICSE PHYSICS  PRACTICE PAPER 1", "pdf": phy1 },
        { "id": 14, "heading": "X ICSE PHYSICS PRACTICE PAPER 2", "pdf": phy2 },
        { "id": 15, "heading": "X ICSE PHYSICS PRACTICE PAPER 3", "pdf": phy3 },
        { "id": 16, "heading": "X ICSE HISTORY  PRACTICE PAPER 1", "pdf": his1 },
        { "id": 17, "heading": "X ICSE HISTORY PRACTICE PAPER 2", "pdf": his2 },
        { "id": 18, "heading": "X ICSE HISTORY PRACTICE PAPER 3", "pdf": his3 },
        { "id": 19, "heading": "X ICSE GEOGRAPHY  PRACTICE PAPER 1", "pdf":geog1 },
        { "id": 20, "heading": "X ICSE GEOGRAPHY PRACTICE PAPER 2", "pdf": geog2 },
        { "id": 21, "heading": "X ICSE GEOGRAPHY PRACTICE PAPER 3", "pdf": geog3 },
        { "id": 22, "heading":"X ICSE ECONOMIC APPLICATION PRACTICE PAPER 1", "pdf":ecoA1},
        { "id": 23, "heading":"X ICSE ECONOMIC APPLICATION PRACTICE PAPER 2", "pdf":ecoA2},
        { "id": 24, "heading":"X ICSE ECONOMIC APPLICATION PRACTICE PAPER 3", "pdf":ecoA3},
        { "id": 25, "heading":"X ICSE COMPUTER APPLICATION PRACTICE PAPER 1", "pdf":com1},
        { "id": 26, "heading":"X ICSE COMPUTER APPLICATION PRACTICE PAPER 2", "pdf":com2},
        { "id": 27, "heading":"X ICSE COMPUTER APPLICATION PRACTICE PAPER 3", "pdf":com3},
        { "id": 28, "heading":"X ICSE COMMERCIAL STUDIES PRACTICE PAPER 1", "pdf":comS1}, 
        { "id": 29, "heading":"X ICSE COMMERCIAL STUDIES PRACTICE PAPER 2", "pdf":comS2},
        { "id": 30, "heading":"X ICSE COMMERCIAL STUDIES PRACTICE PAPER 3", "pdf":comS3},
        { "id": 31, "heading":"X ICSE ECONOMICS PRACTICE PAPER 1", "pdf":eco1}, 
        { "id": 32, "heading":"X ICSE ECONOMICS PRACTICE PAPER 2", "pdf":eco2},
        { "id": 33, "heading":"X ICSE ECONOMICS PRACTICE PAPER 3", "pdf":eco3},
        { "id": 34, "heading":"X ICSE ENGLISH 2 PRACTICE PAPER 1", "pdf":eng4}, 
        { "id": 35, "heading":"X ICSE ENGLISH 2 PRACTICE PAPER 2", "pdf":eng5},
        { "id": 36, "heading":"X ICSE ENGLISH 2 PRACTICE PAPER 3", "pdf":eng6},
        { "id": 37, "heading":"X ICSE HINDI PRACTICE PAPER 1", "pdf":hindi1}, 
        { "id": 38, "heading":"X ICSE HINDI PRACTICE PAPER 2", "pdf":hindi2},
        { "id": 39, "heading":"X ICSE HINDI PRACTICE PAPER 3", "pdf":hindi3},

        { "id": 40, "heading":"X ICSE MARATHI PRACTICE PAPER 1", "pdf":marathi1}, 
        { "id": 41, "heading":"X ICSE MARATHI PRACTICE PAPER 2", "pdf":marathi2},
        { "id": 42, "heading":"X ICSE MARATHI PRACTICE PAPER 3", "pdf":marathi3}
    ])
    return (
        <>
            <div className='papermaindiv'>
                {data.map((item, index) => {
                    return (
                        <a href={item.pdf} target='_blank'>
                            <div className='papersection'>
                                <h1 className='paperheading'>{item.heading}</h1>
                            </div>
                        </a>
                    )
                })}

            </div>
        </>
    )
}
