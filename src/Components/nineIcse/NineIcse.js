import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import mainImg from "../../Assets/cbse/mainImg.png"
import dot from "../../Assets/cbse/dot.png"
import dot2 from "../../Assets/faq/dot.png"
import matrix from "../../Assets/cbse/matrix.png"
import trivia from "../../Assets/cbse/newTrivia -9th.png"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useLocation } from 'react-router-dom'

export default function NineIcse() {
    const location = useLocation()
    return (
        <>
            {/* <Navbar /> */}

            {/* <div className='cbseMainBtnGroup'>
                <div className='testBtnDiv'>
                    <a href='/icseeight'><div style={{ color: location.hash == '#ssc' ? 'white' : '#D00000', backgroundColor: location.hash == '#ssc' ? '#D00000' : 'white' }} className='testBtn'>ICSE 8<sup>th</sup> STD</div></a>
                    <a href='/icsenine'><div style={{ color: location.hash == '#ssc' ? 'white' : '#D00000', backgroundColor: location.hash == '#ssc' ? '#D00000' : 'white' }} className={`testBtn ${location.hash == '' ? 'testActive ' : 'nono'}`}>ICSE 9<sup>th</sup> STD</div></a>
                    <a href='/icseten'><div style={{ color: location.hash == '#cbsc' ? 'white' : '#D00000', backgroundColor: location.hash == '#cbsc' ? '#D00000' : 'white' }} className='testBtn'>ICSE 10<sup>th</sup> STD</div></a>
                </div>
            </div> */}
            <div className='icseeightTopDiv'>
                <div className='icseeightMain'>
                    <div className='icseeightLeftDiv'>
                        <img src={mainImg} />
                    </div>
                    <div className='icseeightRightDiv'>
                        <h3>ICSE – 9<sup style={{textTransform:'lowercase'}}>th</sup> Std</h3>
                        <p>We know that the 8th standard in an ICSE board comes with its own share of ambitions and inhibitions. We know you want to do well in your studies and understand that this is the foundation year for the upcoming 9th and 10th std. Whatever, you may be planning for your future, with Nayak’s Tutorials you can begin to give it shape from this year itself. Join Nayak’s Tutorials in the 8th standard itself, and see how you actually attain the marks you are worthy of. </p>
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
                                <h3>Solve your doubt</h3>
                            </div>
                            <p>Sessions are scheduled before exams to solve last minute doubts</p>
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
                <h1>Time management tips for 9<sup style={{ textTransform: 'lowercase' }}>th</sup> Standard ICSE students</h1>
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
                                Is class 9 easy or hard?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            Although class 9th is easy from other higher secondary classes but much tougher than any intermediate classes. The reason why class 9th is a bit difficult is that the syllabus is designed in a way that students will be introduced to the basics of the concepts which they will learn in their higher classes.
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                How many subjects are there in ICSE class 9?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            There are 11 subjects in ICSE class 9, such as English (Paper-1), English literature (Paper-2), Maths, Indian language, Physics, Chemistry, Biology, History and Civics, Geography, Environmental Science and Computer.

                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What is the minimum passing mark in ICSE class 9 exam?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            Students must score 35% to pass ICSE class 9 2023.

                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Can I start solving previous years’ 10th standard papers in the 9th itself?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            Yes, if you come across questions that you have covered. When you come to Nayak’s Tutorials, we help you with questions that will come in your exams.

                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                How can I prepare well for ICSE 9th std?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            Make your timetable: If you know the syllabus for ICSE board class 9, then you make your own timetable and divide the time for each subject. Allocate at least 1 and a half hours for each subject. Dedicate more time to cover difficult topics. Take frequent breaks in between to refresh your mind. Follow a study routine religiously.
                            Refer to the best study materials and books provided by your school and Nayak’s Tutorials.
                            Practice more: Once you have completed your studies, practice the questions from the chapters; the more you practice, you will remember them for a long time.
                            Solve older test papers: Previous year papers give you insights into the questions and the marking scheme. Solve at least 5 to 6 question papers before the exam.
                            Attempt mock tests: Mock tests is the most efficient way of practice. Taking mock tests regularly will give insights into your performance and highlight the areas of improvement.


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
