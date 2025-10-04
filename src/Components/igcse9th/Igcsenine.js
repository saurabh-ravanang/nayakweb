import React from 'react'
import mainImg from "../../Assets/cbse/mainImg.png"
import dot from "../../Assets/cbse/dot.png"
import dot2 from "../../Assets/faq/dot.png"
import matrix from "../../Assets/cbse/matrix.png"
import trivia from "../../Assets/cbse/newTrivia -9th.png"
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useLocation } from 'react-router-dom'

export default function Igcsenine() {
    const location = useLocation()
    return (
        <>
            {/* <Navbar /> */}
            {/* <div className='cbseMainBtnGroup'>
                <div className='testBtnDiv'>
                    <a href='/igcseeight'><div style={{ color: location.hash == '#ssc' ? 'white' : '#D00000', backgroundColor: location.hash == '#ssc' ? '#D00000' : 'white' }} className='testBtn'>IGCSE 8<sup>th</sup> STD</div></a>
                    <a href='/igcsenine'><div style={{ color: location.hash == '#ssc' ? 'white' : '#D00000', backgroundColor: location.hash == '#ssc' ? '#D00000' : 'white' }} className={`testBtn ${location.hash == '' ? 'testActive ' : 'nono'}`}>IGCSE 9<sup>th</sup> STD</div></a>
                    <a href='/igcseten'><div style={{ color: location.hash == '#cbsc' ? 'white' : '#D00000', backgroundColor: location.hash == '#cbsc' ? '#D00000' : 'white' }} className='testBtn'>IGCSE 10<sup>th</sup> STD</div></a>
                </div>
            </div> */}

            <div className='icseeightTopDiv'>
                <div className='icseeightMain'>
                    <div className='icseeightLeftDiv'>
                        <img src={mainImg} />
                    </div>
                    <div className='icseeightRightDiv'>
                        <h3>IGCSE – 9<sup style={{textTransform:'lowercase'}}>th</sup> Std</h3>
                        <p>Entering the grade 9 of IGCSE can be challenging even for the best of students. At Nayak’s Tutorials, we ensure that we support all our students in grasping the concepts better, researching on their own, meeting deadlines for their coursework, revision, mock examinations and getting them ready for the external exams at the end of grade 10.
                            We also encourage our students to hone their other skills and participate in co-curricular activities.
                        </p>
                    </div>
                </div>
            </div>

            <div className='icseeightSecondDiv'>
                <div className='icseeightSeconDiv'>
                    <h1>How Nayak’s Tutorials helps</h1>

                    <div className='icseeightSeconMainDiv'>
                        <div className='icseeightMultipleText'>
                            <div className='icseeightMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Attend regular school</h3>
                            </div>
                            <p>If you are participative in class, you will retain most of what you learn.</p>
                        </div>
                        <div className='icseeightMultipleText'>
                            <div className='icseeightMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Attend Nayak’s Tutorials regularly</h3>
                            </div>
                            <p>We go slow in the 8th standard and try to be parallel to most schools, so our students retain more. We help you clear the concepts instead of making you mug up the answers or solutions.</p>
                        </div>
                        <div className='icseeightMultipleText'>
                            <div className='icseeightMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Keep some leisure time daily</h3>
                            </div>
                            <p>You are not yet in 10th, so ensure you do have time to spend with friends and family.</p>
                        </div>
                        <div className='icseeightMultipleText'>
                            <div className='icseeightMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Get feedback</h3>
                            </div>
                            <p>Personal feedback is given as well as parents are involved to share the progress of each child</p>
                        </div>
                        <div className='icseeightMultipleText'>
                            <div className='icseeightMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Use elaborate study material</h3>
                            </div>
                            <p>Worksheets, extra study material, tests and assessment help you learn better</p>
                        </div>

                        <div className='icseeightMultipleText'>
                            <div className='icseeightMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Grow in all realms</h3>
                            </div>
                            <p>Many co-curricular activities are conducted and children are urged to participate</p>
                        </div>
                        <div className='icseeightMultipleText'>
                            <div className='icseeightMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Learn under the guidance from our panel of best teachers</h3>
                            </div>
                            <p>Our teachers are trained to facilitate students to realise their full potential</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='icseeightThirdDiv'>
                <h1>Time management tips for 9<sup style={{ textTransform: 'lowercase' }}>th</sup> Standard IGCSE students</h1>
                <div className='icseeightMainDiv2'>
                    <div id='icseFirst' className='icseeightMultipleText2'>
                        <div className='icseeightMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Learn to prioritize their time correctly</h3>
                        </div>
                        <p>If you have to attend a cousin’s wedding and your exams are 6 months away, then you may attend it. If you have to submit an assignment in 4 days, then you may just begin working on it or start putting a structure to it today. If you were studying till late for a history test and had a long day today, it is perfectly ok to prioritise sleep.</p>
                    </div>
                    {/* <div className='icseeightMultipleText2'>
                        <div className='icseeightMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>To-do lists – for 10th standard</h3>
                        </div>
                        <p>- Start practicing and revising NCERT questions - Familiarise yourself with exam patterns - Give as many mock tests as possible - Eat healthy and get proper sleep - Keep everything ready for exams</p>
                    </div> */}
                    <div className='icseeightMultipleText2'>
                        <div className='icseeightMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Fix your study pattern</h3>
                        </div>
                        <p>Find out when you are most attentive. Some people can learn better at night and some do it best in the morning. Only you can decide this for yourself. Also, remember that all subjects don’t need equal attention. And if you find any particular topic difficult, devote more time to it.</p>
                    </div>
                    <div className='icseeightMultipleText2'>
                        <div className='icseeightMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Smart revision</h3>
                        </div>
                        <p>If you’ve covered a topic in school and have repeated it at Nayak’s Tutorials in the same week, you may go through it again and see how it gets etched in your memory. Also, if your friends need help, go ahead and explain the concept to them. This is an additional revision for your mind.</p>
                    </div>
                    <div className='icseeightMultipleText2'>
                        <div className='icseeightMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Extra minutes</h3>
                        </div>
                        <p>What do you do when you reach early? It’s good to chat with your friends, but remember to talk about studies or any problem or how you solved it. This is will help you utilise those extra minutes better and be productive in all sense.</p>
                    </div>
                    <div className='icseeightMultipleText2'>
                        <div className='icseeightMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Divide your time efficiently</h3>
                        </div>
                        <p>If you’re studying at a stretch for 3 to 4 hours, you may include different subjects and topics, so you know you will be able to cover most subjects before it’s time for exams. Study smarter, not just harder.</p>
                    </div>
                    <div id='matrixBoxx2' className='icseeightMultipleText2'>
                        <div className='icseeightMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Use this matrix</h3>
                        </div>
                        <div className='matrixDiv2'>
                            <img src={matrix} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='icseeightLastDiv'>
                <h3 className='icseeightFaq'>FAQ's</h3>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What are the subjects taught in 9th grade of IGCSE board?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            The IGSCE Class 9 syllabuses for each subject focuses on providing balanced education and allows learners to explore themselves. Main subjects taught in Class 9 are - Art & Design, Science, Mathematics, Computing, Digital Literacy, Physical Education, English, Global Perspectives, ICT, Mathematics, Music and others.
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>

                                Is IGCSE harder than ICSE?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            ICSE is an Indian-based exam that is designed to cater to the educational needs of Indian students. The ICSE board covers a broad range of subjects, including English, Mathematics, Science, Social Studies, and others. The ICSE curriculum is focused on building a strong foundation in core academic subjects, and it is widely recognized in India. <br></br>
                            IGCSE, on the other hand, is an internationally recognized qualification that is offered by the University of Cambridge International Examinations (CIE). The IGCSE curriculum is designed to be more comprehensive and rigorous than the ICSE curriculum. It covers a wide range of subjects, including First Language, Second Language, Mathematics, Sciences, Humanities and Social Sciences, Creative and Vocational, and others. The IGCSE curriculum is recognized globally, and it is designed to prepare students for further education and employment opportunities worldwide.


                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                How is the grading system of IGCSE and ICSE different from each other?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            For ICSE exams, the grading is based on a seven-point grading scale, where each grade corresponds to a particular range of marks. The seven grades are:<br></br>
                            -	A+: 90-100%<br></br>
                            -	A: 80-89%<br></br>
                            -	B: 70-79%<br></br>
                            -	C: 60-69%<br></br>
                            -	D: 50-59%<br></br>
                            -	E: 40-49%<br></br>
                            -	F: Below 40%<br></br>
                            Students who score above 33% in all subjects are deemed to have passed the exam. The final result is calculated by averaging the marks obtained in all subjects.
                            For IGCSE exams, the grading is based on an eight-point grading scale, where each grade corresponds to a particular range of marks. The eighth grades are:<br></br>
                            -	A*: 90-100%<br></br>
                            -	A: 80-89%<br></br>
                            -	B: 70-79%<br></br>
                            -	C: 60-69%<br></br>
                            -	D: 50-59%<br></br>
                            -	E: 40-49%<br></br>
                            -	F: 30-39%<br></br>
                            -	G: Below 30%

                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                How do I prepare for IGCSE?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            -	Start early and begin with the toughest subjects<br></br>
                            -	Understand the concepts<br></br>
                            -	Practice regularly to improve your problem-solving skills and get used to the exam format<br></br>
                            -	Seek help from seniors or experts like Nayak’s Tutorials<br></br>
                            -	Stay motivated


                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Does Nayak’s Tutorials have experienced IGCSE teachers? 
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                        Yes. We have some amazing tutors who have been trained to tutor IGCSE students. 

                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>

            </div>
            <div className='icseeightTriviaImgDiv'>
                <img src={trivia} />
            </div>
            {/* <Footer /> */}
        </>
    )
}
