import React, { useState } from 'react'
import alg1 from '../../docpdf/X SSC ALG PRAC PAPER 1.pdf'
import alg2 from '../../docpdf/X SSC ALG PRAC PAPER 2.pdf'
import alg3 from '../../docpdf/X SSC ALG PRAC PAPER 3.pdf'

import eng1 from '../../docpdf/X SSC ENG PRAC PAPER 1.pdf'
import eng2 from '../../docpdf/X SSC ENG PRAC PAPER 2.pdf'
import eng3 from '../../docpdf/X SSC ENG PRAC PAPER 3.pdf'

import geog1 from '../../docpdf/X SSC GEOG PRAC PAPER 1.pdf'
import geog2 from '../../docpdf/X SSC GEOG PRAC PAPER 2.pdf'
import geog3 from '../../docpdf/X SSC GEOG PRAC PAPER 3.pdf'

import geom1 from '../../docpdf/X SSC GEOM PRAC PAPER 1.pdf'
import geom2 from '../../docpdf/X SSC GEOM PRAC PAPER 2.pdf'
import geom3 from '../../docpdf/X SSC GEOM PRAC PAPER 3.pdf'

import hist1 from '../../docpdf/X SSC HIST PRAC PAPER 1.pdf'
import hist2 from '../../docpdf/X SSC HIST PRAC PAPER 2.pdf'
import hist3 from '../../docpdf/X SSC HIST PRAC PAPER 3.pdf'

import mar1 from '../../docpdf/X SSC MAR PRAC PAPER 1.pdf'
import mar2 from '../../docpdf/X SSC MAR PRAC PAPER 2.pdf'
import mar3 from '../../docpdf/X SSC MAR PRAC PAPER 3.pdf'

import sci1 from '../../docpdf/X SSC SC 1 PRAC PAPER 1.pdf'
import sci2 from '../../docpdf/X SSC SC 1 PRAC PAPER 2.pdf'
import sci5 from '../../docpdf/X SSC SC 1 PRAC PAPER 3.pdf'

import sci3 from '../../docpdf/X SSC SC 2 PRAC PAPER 1.pdf'
import sci4 from '../../docpdf/X SSC SC 2 PRAC PAPER 2.pdf'
import sci6 from '../../docpdf/X SSC SC 2 PRAC PAPER 3.pdf'

import snk1 from '../../docpdf/X-SSC-SK 100 PRAC PAPER 1.pdf'
import snk2 from '../../docpdf/X-SSC-SK 100 PRAC PAPER 2.pdf'
import snk3 from '../../docpdf/X-SSC-SK 100 PRAC PAPER 3.pdf'

import snk4 from '../../docpdf/X-SSC-SK 50 PRAC PAPER 1.pdf'
import snk5 from '../../docpdf/X-SSC-SK 50 PRAC PAPER 2.pdf'
import snk6 from '../../docpdf/X-SSC-SK 50 PRAC PAPER 3.pdf'

import hin1 from '../../docpdf/X-SSC-HIN 100 PRAC PAPER 1.pdf'
import hin2 from '../../docpdf/X-SSC-HIN 100 PRAC PAPER 2.pdf'
import hin3 from '../../docpdf/X-SSC-HIN 100 PRAC PAPER 3.pdf'

import hin4 from '../../docpdf/X-SSC-HIN 50 PRAC PAPER 1.pdf'
import hin5 from '../../docpdf/X-SSC-HIN 50 PRAC PAPER 2.pdf'
import hin6 from '../../docpdf/X-SSC-HIN 50 PRAC PAPER 3.pdf'

import fr1 from '../../docpdf/X-SSC-FR 50 PRAC PAPER 1.pdf'
import fr2 from '../../docpdf/X-SSC-FR 50 PRAC PAPER 2.pdf'

export default function Sscpaper() {
    const [data, setData] = useState([
        { "id": 1, "heading": "X SSC ALGEBRA PRACTICE PAPER 1", "pdf": alg1 },
        { "id": 2, "heading": "X SSC ALGEBRA PRACTICE PAPER 2", "pdf": alg2 },
        { "id": 26, "heading": "X SSC ALGEBRA PRACTICE PAPER 3", "pdf": alg3 },
        { "id": 3, "heading": "X SSC ENGLISH PRACTICE PAPER 1", "pdf": eng1 },
        { "id": 4, "heading": "X SSC ENGLISH PRACTICE PAPER 2", "pdf": eng2 },
        { "id": 27, "heading": "X SSC ENGLISH PRACTICE PAPER 3", "pdf": eng3 },
        { "id": 5, "heading": "X SSC GEOGRAPHY PRACTICE PAPER 1", "pdf": geog1 },
        { "id": 6, "heading": "X SSC GEOGRAPHY PRACTICE PAPER 2", "pdf": geog2 },
        { "id": 28, "heading": "X SSC GEOGRAPHY PRACTICE PAPER 3", "pdf": geog3 },
        { "id": 7, "heading": "X SSC GEOMETRY PRACTICE PAPER 1", "pdf": geom1 },
        { "id": 8, "heading": "X SSC GEOMETRY PRACTICE PAPER 2", "pdf": geom2 },
        { "id": 29, "heading": "X SSC GEOMETRY PRACTICE PAPER 3", "pdf": geom3 },
        { "id": 9, "heading": "X SSC HISTORY PRACTICE PAPER 1", "pdf": hist1 },
        { "id": 10, "heading": "X SSC HISTORY PRACTICE PAPER 2", "pdf": hist2 },
        { "id": 30, "heading": "X SSC HISTORY PRACTICE PAPER 3", "pdf": hist3 },
        { "id": 11, "heading": "X SSC MARATHI PRACTICE PAPER 1", "pdf": mar1 },
        { "id": 12, "heading": "X SSC MARATHI PRACTICE PAPER 2", "pdf": mar2 },
        { "id": 31, "heading": "X SSC MARATHI PRACTICE PAPER 3", "pdf": mar3 },
        { "id": 22, "heading": "X SSC SCIENCE 1 (PAPER 1)", "pdf": sci1 },
        { "id": 23, "heading": "X SSC SCIENCE 1 (PAPER 2)", "pdf": sci2 },
        { "id": 32, "heading": "X SSC SCIENCE 1 (PAPER 3)", "pdf": sci5 },
        { "id": 24, "heading": "X SSC SCIENCE 2 (PAPER 1)", "pdf": sci3 },
        { "id": 25, "heading": "X SSC SCIENCE 2 (PAPER 2)", "pdf": sci4 },
        { "id": 33, "heading": "X SSC SCIENCE 2 (PAPER 3)", "pdf": sci6 },
        { "id": 34, "heading": "X SSC SANSKRIT 100 PRACTICE PAPER 1", "pdf": snk1 },
        { "id": 35, "heading": "X SSC SANSKRIT 100 PRACTICE PAPER 2", "pdf": snk2 },
        { "id": 36, "heading": "X SSC SANSKRIT 100 PRACTICE PAPER 3", "pdf": snk3 },
        { "id": 37, "heading": "X SSC SANSKRIT 50 PRACTICE PAPER 1", "pdf": snk4 },
        { "id": 38, "heading": "X SSC SANSKRIT 50 PRACTICE PAPER 2", "pdf": snk5 },
        { "id": 39, "heading": "X SSC SANSKRIT 50 PRACTICE PAPER 3", "pdf": snk6 },
        { "id": 40, "heading": "X SSC HINDI 100 PRACTICE PAPER 1", "pdf": hin1 },
        { "id": 41, "heading": "X SSC HINDI 100 PRACTICE PAPER 2", "pdf": hin2 },
        { "id": 42, "heading": "X SSC HINDI 100 PRACTICE PAPER 3", "pdf": hin3 },
        { "id": 40, "heading": "X SSC HINDI 50 PRACTICE PAPER 1", "pdf": hin4 },
        { "id": 41, "heading": "X SSC HINDI 50 PRACTICE PAPER 2", "pdf": hin5 },
        { "id": 42, "heading": "X SSC HINDI 50 PRACTICE PAPER 3", "pdf": hin6 },
        { "id": 43, "heading": "X SSC FRENCH 50 PRACTICE PAPER 1", "pdf": fr1 },
        { "id": 44, "heading": "X SSC FRENCH 50 PRACTICE PAPER 2", "pdf": fr2 },
        
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
