import React, { useState } from 'react'
import sci1 from '../../cbsedoc/X CB SCI PRAC PAPER 1.pdf'
import sci2 from '../../cbsedoc/X CB SCI PRAC PAPER 2.pdf'
import sci3 from '../../cbsedoc/X CB SCI PRAC PAPER 3.pdf'
import sst1 from '../../cbsedoc/X CB SST PRAC PAPER 1.pdf'
import sst2 from '../../cbsedoc/X CB SST PRAC PAPER 2.pdf'
import sst3 from '../../cbsedoc/X CB SST PRAC PAPER 3.pdf'
import math1 from '../../cbsedoc/X CB MATH STD PRAC PAPER 1.pdf'
import math2 from '../../cbsedoc/X CB MATH STD PRAC PAPER 2.pdf'
import math3 from '../../cbsedoc/X CB MATH STD PRAC PAPER 3.pdf'
import eng1 from '../../cbsedoc/X CB ENG COMM PRAC PAPER 1.pdf'
import eng2 from '../../cbsedoc/X CB ENG COMM PRAC PAPER 2.pdf'
import eng3 from '../../cbsedoc/X CB ENG COMM PRAC PAPER 3.pdf'
import eng4 from '../../cbsedoc/X CB ENG L & L PRAC PAPER 1.pdf'
import eng5 from '../../cbsedoc/X CB ENG L & L PRAC PAPER 2.pdf'
import eng6 from '../../cbsedoc/X CB ENG L & L PRAC PAPER 3.pdf'


import hindi1 from '../../cbsedoc/X CB HIN B PRAC PAPER 1.pdf'
import hindi2 from '../../cbsedoc/X CB HIN B PRAC PAPER 2.pdf'
import hindi3 from '../../cbsedoc/X CB HIN B PRAC PAPER 3.pdf'

import mar1 from '../../cbsedoc/X CB MAR PRAC PAPER 1.pdf'
import mar2 from '../../cbsedoc/X CB MAR PRAC PAPER 2.pdf'
import mar3 from '../../cbsedoc/X CB MAR PRAC PAPER 3.pdf'

import snk1 from '../../cbsedoc/X CB SK MANIKA PRAC PAPER 1.pdf'
import snk2 from '../../cbsedoc/X CB SK MANIKA PRAC PAPER 2.pdf'
import snk3 from '../../cbsedoc/X CB SK MANIKA PRAC PAPER 3.pdf'

import snk4 from '../../cbsedoc/X CB SK SHEMUSHI PRAC PAPER 1.pdf'
import snk5 from '../../cbsedoc/X CB SK SHEMUSHI PRAC PAPER 2.pdf'
import snk6 from '../../cbsedoc/X CB SK SHEMUSHI PRAC PAPER 3.pdf'



export default function Cbsepaper() {
    const [data, setData] = useState([
        { "id": 1, "heading": "X CBSE SCIENCE PRACTICE PAPER 1", "pdf": sci1 },
        { "id": 2, "heading": "X CBSE SCIENCE PRACTICE PAPER 2", "pdf": sci2 },
        { "id": 3, "heading": "X CBSE SCIENCE PRACTICE PAPER 3", "pdf": sci3 },
        { "id": 4, "heading": "X CBSE SOCIAL SCIENCE PRACTICE PAPER 1", "pdf": sst1 },
        { "id": 5, "heading": "X CBSE SOCIAL SCIENCE PRACTICE PAPER 2", "pdf": sst2 },
        { "id": 6, "heading": "X CBSE SOCIAL SCIENCE PRACTICE PAPER 3", "pdf": sst3 },
        { "id": 7, "heading": "X CBSE MATH PRACTICE PAPER 1", "pdf": math1 },
        { "id": 8, "heading": "X CBSE MATH PRACTICE PAPER 2", "pdf": math2 },
        { "id": 9, "heading": "X CBSE MATH PRACTICE PAPER 3", "pdf": math3 },
        { "id": 10, "heading": "X CBSE ENGLISH COMMUNICATIVE PRACTICE PAPER 1", "pdf": eng1 },
        { "id": 11, "heading": "X CBSE ENGLISH COMMUNICATIVE PRACTICE PAPER 2", "pdf": eng2 },
        { "id": 12, "heading": "X CBSE ENGLISH COMMUNICATIVE PRACTICE PAPER 3", "pdf": eng3 },
        { "id": 13, "heading": "X CBSE ENGLISH LANGUAGE & LITERATURE PRACTICE PAPER 1", "pdf": eng4 },
        { "id": 14, "heading": "X CBSE ENGLISH LANGUAGE & LITERATURE PRACTICE PAPER 2", "pdf": eng5 },
        { "id": 15, "heading": "X CBSE ENGLISH LANGUAGE & LITERATURE PRACTICE PAPER 3", "pdf": eng6 },
        { "id": 16, "heading": "X CBSE HINDI B PRACTICE PAPER 1", "pdf": hindi1 },
        { "id": 17, "heading": "X CBSE HINDI B PRACTICE PAPER 2", "pdf": hindi2 },
        { "id": 18, "heading": "X CBSE HINDI B PRACTICE PAPER 3", "pdf": hindi3 },
        { "id": 19, "heading": "X CBSE MARATHI PRACTICE PAPER 1", "pdf": mar1 },
        { "id": 20, "heading": "X CBSE MARATHI PRACTICE PAPER 2", "pdf": mar2 },
        { "id": 21, "heading": "X CBSE MARATHI PRACTICE PAPER 3", "pdf": mar3 },
        { "id": 22, "heading": "X CBSE SANSKRIT MANIKA PRACTICE PAPER 1", "pdf": snk1 },
        { "id": 23, "heading": "X CBSE SANSKRIT MANIKA PRACTICE PAPER 2", "pdf": snk2 },
        { "id": 24, "heading": "X CBSE SANSKRIT MANIKA PRACTICE PAPER 3", "pdf": snk3 },

        { "id": 25, "heading": "X CBSE SANSKRIT SHEMUSHI PRACTICE PAPER 1", "pdf": snk4 },
        { "id": 26, "heading": "X CBSE SANSKRIT SHEMUSHI PRACTICE PAPER 2", "pdf": snk5 },
        { "id": 27, "heading": "X CBSE SANSKRIT SHEMUSHI PRACTICE PAPER 3", "pdf": snk6 },
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
