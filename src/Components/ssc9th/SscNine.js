import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import mainImg from "../../Assets/cbse/mainImg.png"
import dot from "../../Assets/cbse/dot.png"
import dot2 from "../../Assets/faq/dot.png"
import matrix from "../../Assets/cbse/matrix.png"
import trivia from "../../Assets/cbse/newTrivia -9th.png"
import "./sscnine.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useLocation } from 'react-router-dom'

export default function SscNine() {
    const location = useLocation()
    const [sscstate, setSscstate]=useState(8)
    return (
        <>
            {/* <Navbar /> */}
            {/* <div className='cbseMainBtnGroup' >
            <div className='testBtnDiv'>
                <a href='/sscmain'><div style={{ color: location.hash == '#ssc' ? 'white' : '#D00000', backgroundColor: location.hash == '#ssc' ? '#D00000' : 'white' }} className='testBtn'>SSC 8<sup>th</sup> STD</div></a>
                <a onClick={()=>setSscstate(9)} href='/sscmain'><div style={{ color: location.hash == '/cbsenine' ? 'white' : '#D00000', backgroundColor: location.hash == '#icsc' ? '#D00000' : 'white' }} className={`testBtn ${location.hash == '' ? 'testActive ' : 'nono'}`}>SSC 9<sup>th</sup> STD</div></a>
                <a href='/sscmain'><div style={{ color: location.hash == '#cbsc' ? 'white' : '#D00000', backgroundColor: location.hash == '#cbsc' ? '#D00000' : 'white' }} className='testBtn'>SSC 10<sup>th</sup> STD</div></a>
            </div> 
            </div> */}


            <div className='sscnineTopDiv'>
                <div className='sscnineMain'>
                    <div className='sscnineLeftDiv'>
                        <img src={mainImg} />
                    </div>
                    <div className='sscnineRightDiv'>
                        <h3>SSC – 9<sup style={{textTransform:'lowercase'}}>th</sup> Std</h3>
                        <p>As you enter 9th standard, you start feeling the pressure. Everyone around you will be talking about boards and future plans. You will also notice most of your teachers will be trying to complete the syllabus. So that you will have more time for self-study in the 10th standard and have more time for mock tests. Joining Nayak’s Tutorials in the 9th standard would be ideal as you will be in the top gear by the time you reach 10th and will be an inch closer to the rank you desire.</p>
                    </div>
                </div>
            </div>

            <div className='sscnineSecondDiv'>
                <div className='sscnineSeconDiv'>
                    <h1>How Nayak’s Tutorials helps</h1>

                    <div className='sscnineSeconMainDiv'>
                        <div className='sscnineMultipleText'>
                            <div className='sscnineMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Attend regular school</h3>
                            </div>
                            <p>If you are participative in class, you will retain most of what you learn.</p>
                        </div>
                        <div className='sscnineMultipleText'>
                            <div className='sscnineMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Attend Nayak’s Tutorials regularly</h3>
                            </div>
                            <p>9th standard is quite the game changer. Many people rise up the ranks with our right guidance. We help you clear the concepts instead of making you mug up the answers or solutions.</p>
                        </div>
                        <div className='sscnineMultipleText'>
                            <div className='sscnineMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Helping you keep some leisure time daily</h3>
                            </div>
                            <p>You are not yet in 10th, so ensure you do have time to spend with friends and family.</p>
                        </div>
                        <div className='sscnineMultipleText'>
                            <div className='sscnineMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Use elaborate study material</h3>
                            </div>
                            <p>Worksheets, extra study material, tests and assessment help you learn better</p>
                        </div>
                        <div className='sscnineMultipleText'>
                            <div className='sscnineMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Solve your doubt</h3>
                            </div>
                            <p>Sessions are scheduled before exams to solve last minute doubts</p>
                        </div>
                        <div className='sscnineMultipleText'>
                            <div className='sscnineMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Get feedback</h3>
                            </div>
                            <p>Personal feedback is given as well as parents are involved to share the progress of each child</p>
                        </div>
                        <div className='sscnineMultipleText'>
                            <div className='sscnineMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Grow in all realms</h3>
                            </div>
                            <p>Many co-curricular activities are conducted and children are urged to participate</p>
                        </div>
                        {/* <div className='sscnineMultipleText'>
                            <div className='sscnineMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Learn under the guidance from our panel of best teachers</h3>
                            </div>
                            <p>Our teachers are trained to facilitate students to realise their full potential</p>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className='sscnineThirdDiv'>
                <h1>Time management tips for 9<sup style={{ textTransform: 'lowercase' }}>th</sup> Standard SSC students</h1>
                <div className='sscnineMainDiv2'>
                    <div id='sscnineFirst' className='sscnineMultipleText2'>
                        <div className='sscnineMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Learn to prioritize their time correctly</h3>
                        </div>
                        <p>If you have to attend a cousin’s wedding and your exams are 6 months away, then you may attend it. If you have to submit an assignment in 4 days, then you may just begin working on it or start putting a structure to it today. If you were studying till late for a history test and had a long day today, it is perfectly ok to prioritise sleep.</p>
                    </div>
                    <div className='sscnineMultipleText2'>
                        <div className='sscnineMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Fix your study pattern</h3>
                        </div>
                        <p>Find out when you are most attentive. Some people can learn better at night and some do it best in the morning. Only you can decide this for yourself. Also, remember that all subjects don’t need equal attention. And if you find any particular topic difficult, devote more time to it.</p>
                    </div>
                    <div className='sscnineMultipleText2'>
                        <div className='sscnineMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Smart revision</h3>
                        </div>
                        <p>If you’ve covered a topic in school and have repeated it at Nayak’s Tutorials in the same week, you may go through it again and see how it gets etched in your memory. Also, if your friends need help, go ahead and explain the concept to them. This is an additional revision for your mind.</p>
                    </div>
                    <div className='sscnineMultipleText2'>
                        <div className='sscnineMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Extra minutes</h3>
                        </div>
                        <p>What do you do when you reach early? It’s good to chat with your friends, but remember to talk about studies or any problem or how you solved it. This is will help you utilise those extra minutes better and be productive in all sense.</p>
                    </div>
                    <div className='sscnineMultipleText2'>
                        <div className='sscnineMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Divide your time efficiently</h3>
                        </div>
                        <p>If you’re studying at a stretch for 3 to 4 hours, you may include different subjects and topics, so you know you will be able to cover most subjects before it’s time for exams.</p>
                    </div>
                    <div className='sscnineMultipleText2'>
                        <div className='sscnineMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Study smarter, not just harder</h3>
                        </div>
                        <p>With the help of experts and their time-tested methodology, we help you with detailed and conceptual learning</p>
                    </div>
                    <div id='matrixBoxx' className='sscnineMultipleText2'>
                        <div className='sscnineMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Use this matrix</h3>
                        </div>
                        <div className='matrixDiv'>
                            <img src={matrix} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='sscnineLastDiv'>
                <h3 className='sscnineFaq'>FAQ's</h3>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Is 9th tougher than 10th std?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            Many people will tell you this. But actually the 9th standard studies are slightly easier than the 10th. But some schools begin the portion of 10th in 9th itself, making it taxing for the students.
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What are the subjects for 9th grade in SSC?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            Maths, Science & Technology, Social Science, Hindi, Marathi and English.

                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Does 9th syllabus come in the 10th boards?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            Technically, no. But some concepts that you learn in 9th standard will help you understand more complex ones in the 10th. Also, some schools may be covering a bit of 10th syllabus in the 9th itself.


                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Which is the toughest subject in 9th std SSC?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            Maths is often perceived as a challenging subject by many. However, if you understand the concepts well and practice enough, you can sail through easily. <br></br>
                            Science can also be tough as complex theories, intricate formulas and practical experiments are introduced this year and students may take time in grasping these.

                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What strategy can we use while preparing for SSC Class 9?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            The strategies to be used: <br></br>
                            Refer to your text books to prepare effectively<br></br>
                            Solve past years’ question papers<br></br>
                            Understand the topics to the core<br></br>
                            Practise the vital topics by making notes<br></br>
                            Allot more time for the complex topics<br></br>
                            Devote extra time on the weak points

                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>

            </div>

            <div className='sscnineTriviaImgDiv'>
                <img src={trivia} />
            </div>
            {/* <Footer /> */}
        </>
    )
}
