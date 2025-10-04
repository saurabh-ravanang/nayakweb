import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import mainImg from "../../Assets/cbse/mainImg.png"
import dot from "../../Assets/cbse/dot.png"
import dot2 from "../../Assets/faq/dot.png"
import matrix from "../../Assets/cbse/matrix.png"
import trivia from "../../Assets/cbse/newTrivia -10th.png"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import "./cbseten.css";
import { useLocation } from 'react-router-dom'

export default function CbseTen() {
    const location = useLocation()
    return (
        <>
            {/* <Navbar /> */}
            {/* <div className='cbseMainBtnGroup' >
                <div className='testBtnDiv'>
                    <a href='/cbseeight'><div style={{ color: location.hash == '/cbsenine' ? 'white' : '#D00000', backgroundColor: location.hash == '#icsc' ? '#D00000' : 'white' }} className='testBtn'>CBSE 8<sup>th</sup> STD</div></a>
                    <a href='/cbsenine'><div style={{ color: location.hash == '#cbsc' ? 'white' : '#D00000', backgroundColor: location.hash == '#cbsc' ? '#D00000' : 'white' }} className='testBtn'>CBSE 9<sup>th</sup> STD</div></a>
                    <a href='/cbseten'><div style={{ color: location.hash == '#ssc' ? 'white' : '#D00000', backgroundColor: location.hash == '#ssc' ? '#D00000' : 'white' }} className={`testBtn ${location.hash == '' ? 'testActive ' : 'nono'}`}>CBSE 10<sup>th</sup> STD</div></a>
                </div>
            </div> */}
            <div className='cbsetenTopDiv'>
                <div className='cbsetenMain'>
                    <div className='cbsetenLeftDiv'>
                        <img src={mainImg} />
                    </div>
                    <div className='cbsetenRightDiv'>
                        <h3>CBSE – 10<sup style={{textTransform:'lowercase'}}>th</sup> Std</h3>
                        <p>It’s that year that people have been warning you about. You will not realise how the year goes by with umpteen mock tests, unit tests, revision sessions and syllabus completion. At Nayak’s Tutorials, we help you with additional tests, complex questions, doubt-solving sessions and strategies to be completely prepared for your boards. The meticulously planned programme at Nayak’s Tutorials will help you reach the peak. It’s never too late to join Nayak’s Tutorials. You can join us even in the 10th standard and benefit from the Nayak’s touch.</p>
                    </div>
                </div>
            </div>

            <div className='cbsetenSecondDiv'>
                <div className='cbsetenSeconDiv'>
                    <h1>How Nayak’s Tutorials helps</h1>

                    <div className='cbsetenSeconMainDiv'>
                        <div className='cbsetenMultipleText'>
                            <div className='cbsetenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Attend regular school</h3>
                            </div>
                            <p>If you are participative in class, you will retain most of what you learn.</p>
                        </div>
                        <div className='cbsetenMultipleText'>
                            <div className='cbsetenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Attend Nayak’s Tutorials regularly</h3>
                            </div>
                            <p>9th standard is quite the game changer. Many people rise up the ranks with our right guidance. We help you clear the concepts instead of making you mug up the answers or solutions.</p>
                        </div>
                        <div className='cbsetenMultipleText'>
                            <div className='cbsetenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Helping you keep some leisure time daily</h3>
                            </div>
                            <p>You are not yet in 10th, so ensure you do have time to spend with friends and family.</p>
                        </div>
                        <div className='cbsetenMultipleText'>
                            <div className='cbsetenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Use elaborate study material</h3>
                            </div>
                            <p>Worksheets, extra study material, tests and assessment help you learn better</p>
                        </div>
                        <div className='cbsetenMultipleText'>
                            <div className='cbsetenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Solve your doubt</h3>
                            </div>
                            <p>Sessions are scheduled before exams to solve last minute doubts</p>
                        </div>
                        <div className='cbsetenMultipleText'>
                            <div className='cbsetenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Get feedback</h3>
                            </div>
                            <p>Personal feedback is given as well as parents are involved to share the progress of each child</p>
                        </div>
                        <div className='cbsetenMultipleText'>
                            <div className='cbsetenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Grow in all realms</h3>
                            </div>
                            <p>Many co-curricular activities are conducted and children are urged to participate</p>
                        </div>
                        {/* <div className='cbsetenMultipleText'>
                            <div className='cbsetenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Learn under the guidance from our panel of best teachers</h3>
                            </div>
                            <p>Our teachers are trained to facilitate students to realise their full potential</p>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className='cbsetenThirdDiv'>
                <h1>Time management tips for 10<sup style={{ textTransform: 'lowercase' }}>th</sup> Standard CBSE students</h1>
                <div className='cbsetenMainDiv2'>
                    <div id='cbseTenFirst' className='cbsetenMultipleText2'>
                        <div className='cbsetenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Learn to prioritize their time correctly</h3>
                        </div>
                        <p>If you have to attend a cousin’s wedding and your exams are 6 months away, then you may attend it. If you have to submit an assignment in 4 days, then you may just begin working on it or start putting a structure to it today. If you were studying till late for a history test and had a long day today, it is perfectly ok to prioritise sleep.</p>
                    </div>
                    <div className='cbsetenMultipleText2'>
                        <div className='cbsetenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>To-do lists – for 10th standard</h3>
                        </div>
                        <p>- Start practicing and revising NCERT questions <br></br> - Familiarise yourself with exam patterns<br></br> - Give as many mock tests as possible <br></br>- Eat healthy and get proper sleep<br></br> - Keep everything ready for exams</p>
                    </div>
                    <div className='cbsetenMultipleText2'>
                        <div className='cbsetenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Fix your study pattern</h3>
                        </div>
                        <p>Find out when you are most attentive. Some people can learn better at night and some do it best in the morning. Only you can decide this for yourself. Also, remember that all subjects don’t need equal attention. And if you find any particular topic difficult, devote more time to it.</p>
                    </div>
                    <div className='cbsetenMultipleText2'>
                        <div className='cbsetenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Extra minutes</h3>
                        </div>
                        <p>What do you do when you reach early? It’s good to chat with your friends, but remember to talk about studies or any problem or how you solved it. This is will help you utilise those extra minutes better and be productive in all sense.</p>
                    </div>
                    <div className='cbsetenMultipleText2'>
                        <div className='cbsetenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Build a good study plan</h3>
                        </div>
                        <p>You must have a daily timetable – irrespective of any coaching institute. If you wake up early, use this time to study or solve problems. Ensure you have time for a little exercise and proper rest. If you have a long commute, you can revise or solve problems while travelling. Keep some time aside for self-studies.</p>
                    </div>
                    <div className='cbsetenMultipleText2'>
                        <div className='cbsetenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Divide your time efficiently</h3>
                        </div>
                        <p>If you’re studying at a stretch for 3 to 4 hours, you may include different subjects and topics, so you know you will be able to cover most subjects before it’s time for exams. Study smarter, not just harder.</p>
                    </div>
                    <div id='matrixBoxx' className='cbsetenMultipleText2'>
                        <div className='cbsetenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Use this matrix</h3>
                        </div>
                        <div className='matrixDiv'>
                            <img src={matrix} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='cbsetenLastDiv'>
                <h3 className='cbsetenFaq'>FAQ's</h3>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What is 10th std called in CBSE?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            The test that CBSE carries out for class ten students is known as AISSE, while the test is called AISSCE for 12th-grade students.
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What is the ‘Best of five’ rule in CBSE?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            As per the Best of Five rule, the main percentage is to be decided by the marks attained in one language subject, i.e., English, and other four subjects for which students secured high scores. The marks of the remaining subjects are not considered to arrive at the main percentage.

                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Is CBSE good for IIT?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            CBSE board is the preferred choice of students and parents largely because of JEE/NEET favorable syllabus and NCERT textbooks. This doesn’t mean ICSE board students don’t crack JEE and NEET exams. If you are taking coaching for JEE or NEET, it doesn’t matter which board you choose – CBSE or ICSE.

                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What is the difference between CBSE & ICSE Board?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            CBSE is an all India government recognized board. CBSE affiliates all Kendriya Vidyalayas, Jawahar Navodaya Vidyalayas, private schools, and most of the schools approved by the central government of India.
                            The council for the Indian School Certificate Examinations (CISCE) is one of the private national level boards for providing quality education to students. The council every academic year conducts Indian Certificate of Secondary Education (ICSE) for 10th as well as Indian School Certificate (ISC) exams for 12th class. <br></br>
                            CBSE has a universal pattern and syllabus for all CBSE affiliated schools in India and also in other countries. Currently there are more than 20 thousands schools affiliated with CBSE in India. CBSE affiliated schools also have a presence in more than 30 countries like UAE, Qatar, Bahrain, Malaysia, etc.
                            Currently there are more than 3000 ICSE affiliated schools in India. Apart from that, there are schools affiliated to ICSE in countries like UAE, Indonesia and Malaysia.
                            CBSE is a good option for parents who have transferable jobs, they can easily get CBSE affiliated school in every Indian city. There are less number of ICSE affiliated schools, so you may not find an ICSE school if you are moving to a new city. <br></br>
                            CBSE is more focused towards science and mathematics with lots of attention paid to the application of knowledge. CISCE (ICSE), on the other hand, is more balanced with equal focus on language, arts and science.
                            Easy to find quality teachers and books for CBSE. There is a difficulty in finding good quality teachers for ICSE.
                            Several entrance tests, scholarship and talent search exams have their syllabus based on CBSE board. ICSE syllabus is more diverse and can help you in improving your analytical skills.




                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                            What strategy can we use while preparing for CBSE Class 10?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            The strategies to be used: <br></br>
                            Refer to your text books to prepare effectively <br></br>
                            Solve past years’ question papers <br></br>
                            Understand the topics to the core <br></br>
                            Practise the vital topics by making notes <br></br>
                            Allot more time for the complex topics <br></br>
                            Devote extra time on the weaker subjects <br></br>



                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>

            </div>

            <div className='cbsetenTriviaImgDiv'>
                <img src={trivia} />
            </div>
            {/* <Footer /> */}
        </>
    )
}
