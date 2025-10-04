import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import mainImg from "../../Assets/cbse/mainImg.png"
import dot from "../../Assets/cbse/dot.png"
import dot2 from "../../Assets/faq/dot.png"
import matrix from "../../Assets/cbse/matrix.png"
import trivia from "../../Assets/cbse/newTrivia -10th.png"
import "./tenicse.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useLocation } from 'react-router-dom'

export default function TenIcse() {
    const location = useLocation()
    return (
        <>
            {/* <Navbar /> */}

            {/* <div className='cbseMainBtnGroup'>
                <div className='testBtnDiv'>
                    <a href='/icseten'><div style={{ color: location.hash == '#ssc' ? 'white' : '#D00000', backgroundColor: location.hash == '#ssc' ? '#D00000' : 'white' }} className='testBtn'>ICSE 8<sup>th</sup> STD</div></a>

                    <a href='/icsenine'><div style={{ color: location.hash == '/cbsenine' ? 'white' : '#D00000', backgroundColor: location.hash == '#icsc' ? '#D00000' : 'white' }} className='testBtn'>ICSE 9<sup>th</sup> STD</div></a>

                    <a href='/icseten'><div style={{ color: location.hash == '#ssc' ? 'white' : '#D00000', backgroundColor: location.hash == '#ssc' ? '#D00000' : 'white' }} className={`testBtn ${location.hash == '' ? 'testActive ' : 'nono'}`}>ICSE 10<sup>th</sup> STD</div></a>

                </div>
            </div> */}
            <div className='icsetenTopDiv'>
                <div className='icsetenMain'>
                    <div className='icsetenLeftDiv'>
                        <img src={mainImg} />
                    </div>
                    <div className='icsetenRightDiv'>
                        <h3>ICSE – 10<sup style={{textTransform:'lowercase'}}>th</sup> Std</h3>
                        <p>The final year is here. This year will fly by as you get busy with portion completion, mock tests, unit tests, revision and more. At Nayak’s Tutorials, we help you with additional tests, complex questions, doubt-solving sessions and strategies to be completely prepared for your boards. The meticulously planned programme at Nayak’s Tutorials will help you reach the peak. It’s never too late to join Nayak’s Tutorials. You can join us even in the 10th standard and benefit from the Nayak’s touch.</p>
                    </div>
                </div>
            </div>

            <div className='icsetenSecondDiv'>
                <div className='icsetenSeconDiv'>
                    <h1>How Nayak’s Tutorials helps</h1>

                    <div className='icsetenSeconMainDiv'>
                        <div className='icsetenMultipleText'>
                            <div className='icsetenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Attend regular school</h3>
                            </div>
                            <p>If you are participative in class, you will retain most of what you learn.</p>
                        </div>
                        <div className='icsetenMultipleText'>
                            <div className='icsetenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Attend Nayak’s Tutorials regularly</h3>
                            </div>
                            <p>We go slow in the 8th standard and try to be parallel to most schools, so our students retain more. We help you clear the concepts instead of making you mug up the answers or solutions.</p>
                        </div>
                        <div className='icsetenMultipleText'>
                            <div className='icsetenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Keep some leisure time daily</h3>
                            </div>
                            <p>You are not yet in 10th, so ensure you do have time to spend with friends and family.</p>
                        </div>
                        <div className='icsetenMultipleText'>
                            <div className='icsetenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Get feedback</h3>
                            </div>
                            <p>Personal feedback is given as well as parents are involved to share the progress of each child</p>
                        </div>
                        <div className='icsetenMultipleText'>
                            <div className='icsetenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Use elaborate study material</h3>
                            </div>
                            <p>Worksheets, extra study material, tests and assessment help you learn better</p>
                        </div>
                        <div className='icsetenMultipleText'>
                            <div className='icsetenMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Solve your doubt</h3>
                            </div>
                            <p>Sessions are scheduled before exams to solve last minute doubts</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='icsetenThirdDiv'>
                <h1>Time management tips for 10<sup style={{ textTransform: 'lowercase' }}>th</sup> Standard ICSE students</h1>
                <div className='icsetenMainDiv2'>
                    <div id='icseFirst' className='icsetenMultipleText2'>
                        <div className='icsetenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Learn to prioritize their time correctly</h3>
                        </div>
                        <p>If you have to attend a cousin’s wedding and your exams are 6 months away, then you may attend it. If you have to submit an assignment in 4 days, then you may just begin working on it or start putting a structure to it today. If you were studying till late for a history test and had a long day today, it is perfectly ok to prioritise sleep.</p>
                    </div>
                    <div className='icsetenMultipleText2'>
                        <div className='icsetenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>To-do lists – for 10th standard</h3>
                        </div>
                        <p>- Start practicing and revising NCERT questions <br></br> - Familiarise yourself with exam patterns<br></br> - Give as many mock tests as possible<br></br> - Eat healthy and get proper sleep<br></br> - Keep everything ready for exams</p>
                    </div>
                    <div className='icsetenMultipleText2'>
                        <div className='icsetenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Fix your study pattern</h3>
                        </div>
                        <p>Find out when you are most attentive. Some people can learn better at night and some do it best in the morning. Only you can decide this for yourself. Also, remember that all subjects don’t need equal attention. And if you find any particular topic difficult, devote more time to it.</p>
                    </div>
                    <div className='icsetenMultipleText2'>
                        <div className='icsetenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Smart revision</h3>
                        </div>
                        <p>If you’ve covered a topic in school and have repeated it at Nayak’s Tutorials in the same week, you may go through it again and see how it gets etched in your memory. Also, if your friends need help, go ahead and explain the concept to them. This is an additional revision for your mind.</p>
                    </div>
                    <div className='icsetenMultipleText2'>
                        <div className='icsetenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Extra minutes</h3>
                        </div>
                        <p>What do you do when you reach early? It’s good to chat with your friends, but remember to talk about studies or any problem or how you solved it. This is will help you utilise those extra minutes better and be productive in all sense.</p>
                    </div>
                    <div className='icsetenMultipleText2'>
                        <div className='icsetenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Divide your time efficiently</h3>
                        </div>
                        <p>If you’re studying at a stretch for 3 to 4 hours, you may include different subjects and topics, so you know you will be able to cover most subjects before it’s time for exams. Study smarter, not just harder.</p>
                    </div>
                    <div className='icsetenMultipleText2'>
                        <div className='icsetenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Build a good study plan</h3>
                        </div>
                        <p>You must have a daily timetable  irrespective of any coaching institute. If you wake up early, use this time to study or solve problems. Ensure you have time for a little exercise and proper rest. If you have a long commute, you can revise or solve problems while travelling. Keep some time aside for self-studies</p>
                    </div>
                    <div id='matrixBoxx2' className='icsetenMultipleText2'>
                        <div className='icsetenMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Use this matrix</h3>
                        </div>
                        <div className='matrixDiv2'>
                            <img src={matrix} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='icsetenLastDiv'>
                <h3 className='icsetenFaq'>FAQ's</h3>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Is Class 10 ICSE hard?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            ICSE class 10 board examinations, like any other examination, demands rigorous and exhaustive preparation. There is no shortcut or alternative to the hard work required to score 95+ in ICSE Class 10th board exams 2023.
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What is best of 5 in class 10 ICSE?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            Students have to choose 6 subjects that are divided into 3 groups. ICSE results are calculated based on the best five and the English language is compulsory.
                            As per the Best of Five rule, the main percentage is to be decided by the marks attained in one language subject, i.e., English, and other four subjects for which students secured high scores. The marks of the remaining subjects are not considered to arrive at the main percentage.


                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Do ICSE students have advantage?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            Among the many educational options that are available in India, the Indian Certificate of Secondary Education (ICSE) holds a certain advantage due to its comprehensive idea of education. This, coupled with a conducive and nurturing school environment allows the children to realise their true potential.

                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                How many hours should I study in class 10?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            Although a student should study for 7 to 8 hours a day, all you need to be concerned about is having focused and distraction-free study hours. Study whenever you want, but do it with utmost attention without losing track.



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
                            Currently there are more than 3000 ICSE affiliated schools in India. Apart from that, there are schools affiliated to ICSE in countries like UAE, Indonesia and Malaysia.<br></br>
                            CBSE is a good option for parents who have transferable jobs, they can easily get CBSE affiliated school in every Indian city. There are less number of ICSE affiliated schools, so you may not find an ICSE school if you are moving to a new city.<br></br>
                            CBSE is more focused towards science and mathematics with lots of attention paid to the application of knowledge. CISCE (ICSE), on the other hand, is more balanced with equal focus on language, arts and science.
                            Easy to find quality teachers and books for CBSE. There is a difficulty in finding good quality teachers for ICSE.<br></br>
                            Several entrance tests, scholarship and talent search exams have their syllabus based on CBSE board. ICSE syllabus is more diverse and can help you in improving your analytical skills.




                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                    <AccordionItem >
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What time management strategy can we use while preparing for CBSE Class 10?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>

                            Many students fail to effectively manage their time. You may waste a lot of time at the beginning with less time for revisions. Just follow any of these strategies and ace your exams. <br></br>
                            1.	Odysseus Method – eliminate distractions. Keep your phone out of reach while studying, limit your screen time and spend time with friends wisely.<br></br>
                            2.	Pareto principle – 20-80 rule. Identify the important 20% to get 80% of the output.<br></br>
                            3.	Pomodoro – spaced repetition. This is a time management technique. You need a five minute break after 25 minute stretches of focussed study. So, if you’re studying for 4 hours, take a 30 minute break.<br></br>
                            4.	Parkinson’s principle – set deadlines and don’t breach them. If you don’t stick to deadlines work will expand to fill their time with trivial matters. If you stick to deadlines you will have spare time for revising your ICSE portion.<br></br>
                            5.	Active recall – make your own note after understanding the topic.




                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>

            </div>
            <div className='icsetenTriviaImgDiv'>
                <img src={trivia} />
            </div>

            {/* <Footer /> */}
        </>
    )
}
