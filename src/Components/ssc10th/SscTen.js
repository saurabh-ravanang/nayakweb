import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import mainImg from "../../Assets/cbse/mainImg.png"
import dot from "../../Assets/cbse/dot.png"
import dot2 from "../../Assets/faq/dot.png"
import matrix from "../../Assets/cbse/matrix.png"
import trivia from "../../Assets/cbse/newTrivia -10th.png"
import "./sscten.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useLocation } from 'react-router-dom';

export default function SscTen() {
    const location = useLocation()
    const [sscstate, setSscstate]=useState(8)
    return (
        <>
            {/* <Navbar /> */}
            {/* <div className='cbseMainBtnGroup' >
            <div className='testBtnDiv'>
                <a href='/sscmain'><div style={{ color: location.hash == '#ssc' ? 'white' : '#D00000', backgroundColor: location.hash == '#ssc' ? '#D00000' : 'white' }} className='testBtn '>SSC 8<sup>th</sup> STD</div></a>
                <a href='/sscmain'><div style={{ color: location.hash == '/cbsenine' ? 'white' : '#D00000', backgroundColor: location.hash == '#icsc' ? '#D00000' : 'white' }} className='testBtn'>SSC 9<sup>th</sup> STD</div></a>
                <a onClick={()=>setSscstate(10)} href='/sscmain'><div style={{ color: location.hash == '#cbsc' ? 'white' : '#D00000', backgroundColor: location.hash == '#cbsc' ? '#D00000' : 'white' }} className={`testBtn ${location.hash == '' ? 'testActive ' : 'nono'}`}>SSC 10<sup>th</sup> STD</div></a>
            </div> 
            </div> */}


            <div className='ssctenTopDiv'>
                <div className='ssctenMain'>
                    <div className='ssctenLeftDiv'>
                        <img src={mainImg} />
                    </div>
                    <div className='ssctenRightDiv'>
                        <h3>SSC – 10<sup style={{textTransform:'lowercase'}}>th</sup> Std</h3>
                        <p>You’ve finally reached the 10th standard and are gearing up for the boards. You will not realise how the year goes by with umpteen mock tests, unit tests, revision sessions and syllabus completion. At Nayak’s Tutorials, we help you with additional tests, complex questions, doubt-solving sessions and strategies to be completely prepared for your boards. The meticulously planned programme at Nayak’s Tutorials will help you reach the peak. It’s never too late to join Nayak’s Tutorials. You can join us even in the 10th standard and benefit from the Nayak’s touch.</p>
                    </div>
                </div>
            </div>

            <div className='ssctenSecondDiv'>
                <div className='ssctenSeconDiv'>
                    <h1>How Nayak’s Tutorials helps</h1>

                    <div className='ssctenSeconMainDiv'>
                        <div className='ssctenMultipleText'>
                            <div className='ssctenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Attend regular school</h3>
                            </div>
                            <p>If you are participative in class, you will retain most of what you learn.</p>
                        </div>
                        <div className='ssctenMultipleText'>
                            <div className='ssctenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Attend Nayak’s Tutorials regularly</h3>
                            </div>
                            <p>9th standard is quite the game changer. Many people rise up the ranks with our right guidance. We help you clear the concepts instead of making you mug up the answers or solutions.</p>
                        </div>
                        <div className='ssctenMultipleText'>
                            <div className='ssctenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Helping you keep some leisure time daily</h3>
                            </div>
                            <p>You are not yet in 10th, so ensure you do have time to spend with friends and family.</p>
                        </div>
                        <div className='ssctenMultipleText'>
                            <div className='ssctenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Use elaborate study material</h3>
                            </div>
                            <p>Worksheets, extra study material, tests and assessment help you learn better</p>
                        </div>
                        <div className='ssctenMultipleText'>
                            <div className='ssctenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Solve your doubt</h3>
                            </div>
                            <p>Sessions are scheduled before exams to solve last minute doubts</p>
                        </div>
                        <div className='ssctenMultipleText'>
                            <div className='ssctenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Get feedback</h3>
                            </div>
                            <p>Personal feedback is given as well as parents are involved to share the progress of each child</p>
                        </div>
                        <div className='ssctenMultipleText'>
                            <div className='ssctenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Grow in all realms</h3>
                            </div>
                            <p>Many co-curricular activities are conducted and children are urged to participate</p>
                        </div>
                        {/* <div className='ssctenMultipleText'>
                            <div className='ssctenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Learn under the guidance from our panel of best teachers</h3>
                            </div>
                            <p>Our teachers are trained to facilitate students to realise their full potential</p>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className='ssctenThirdDiv'>
                <h1>Time management tips for 10<sup style={{ textTransform: 'lowercase' }}>th</sup> Standard SSC students</h1>
                <div className='ssctenMainDiv2'>
                    <div id='ssctenFirst' className='ssctenMultipleText2'>
                        <div className='ssctenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Learn to prioritize their time correctly</h3>
                        </div>
                        <p>If you have to attend a cousin’s wedding and your exams are 6 months away, then you may attend it. If you have to submit an assignment in 4 days, then you may just begin working on it or start putting a structure to it today. If you were studying till late for a history test and had a long day today, it is perfectly ok to prioritise sleep.</p>
                    </div>
                    <div className='ssctenMultipleText2'>
                        <div className='ssctenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Fix your study pattern</h3>
                        </div>
                        <p>Find out when you are most attentive. Some people can learn better at night and some do it best in the morning. Only you can decide this for yourself. Also, remember that all subjects don’t need equal attention. And if you find any particular topic difficult, devote more time to it.</p>
                    </div>
                    <div className='ssctenMultipleText2'>
                        <div className='ssctenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Smart revision</h3>
                        </div>
                        <p>If you’ve covered a topic in school and have repeated it at Nayak’s Tutorials in the same week, you may go through it again and see how it gets etched in your memory. Also, if your friends need help, go ahead and explain the concept to them. This is an additional revision for your mind.</p>
                    </div>
                    <div className='ssctenMultipleText2'>
                        <div className='ssctenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Extra minutes</h3>
                        </div>
                        <p>What do you do when you reach early? It’s good to chat with your friends, but remember to talk about studies or any problem or how you solved it. This is will help you utilise those extra minutes better and be productive in all sense.</p>
                    </div>
                    <div className='ssctenMultipleText2'>
                        <div className='ssctenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Divide your time efficiently</h3>
                        </div>
                        <p>If you’re studying at a stretch for 3 to 4 hours, you may include different subjects and topics, so you know you will be able to cover most subjects before it’s time for exams.</p>
                    </div>
                    <div className='ssctenMultipleText2'>
                        <div className='ssctenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Study smarter, not just harder</h3>
                        </div>
                        <p>With the help of experts and their time-tested methodology, we help you with detailed and conceptual learning</p>
                    </div>
                    <div id='matrixBoxx' className='ssctenMultipleText2'>
                        <div className='ssctenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Use this matrix</h3>
                        </div>
                        <div className='matrixDiv'>
                            <img src={matrix} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='ssctenLastDiv'>
                <h3 className='ssctenFaq'>FAQ's</h3>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What are some tips to crack SSC 10th standard exams?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            10th in any board is tough. Here is a list of things you can do to ease your stress and manage to give your exams well. <br></br>
                            -	Know the SSC exam pattern and syllabus<br></br>
                            -	Create a study plan<br></br>
                            -	Rely on best resources like Nayak’s Tutorials teachers and study material<br></br>
                            -	Strengthen your basics<br></br>
                            -	Give mock tests<br></br>
                            -	Revise regularly<br></br>
                            -	Stay motivated

                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                How can I score good marks in SSC?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            -	Take your time to read the question paper <br></br>
                            -	If there are options, always choose the one you can answer better <br></br>
                            -	Answer the easy ones first <br></br>
                            -	Keep an eye on the watch <br></br>
                            -	Use the last 10 minutes to read your answers again and correct mistakes, if there are any <br></br>
                            -	Write all your answers neatly <br></br>
                            -	Avoid using slangs and short forms <br></br>


                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            What is the ‘Best of five’ rule in SSC? 
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                        As per the Best of Five rule, you can drop the marks of that one subject that you have scored the least in. 

                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            Can SSC students crack IIT? 
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                        Yes, you can. There have been many in the past from the SSC board who have trained hard and studied extensively to be able to crack IIT. 

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

            <div className='ssctenTriviaImgDiv'>
                <img src={trivia} />
            </div>
            {/* <Footer /> */}
        </>
    )
}
