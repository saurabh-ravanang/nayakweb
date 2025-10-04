import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import mainImg from "../../Assets/cbse/mainImg.png"
import dot from "../../Assets/cbse/dot.png"
import dot2 from "../../Assets/faq/dot.png"
import matrix from "../../Assets/cbse/matrix.png"
import trivia from "../../Assets/cbse/newTrivia -8th.png"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useLocation } from 'react-router-dom';
import "./igcseeight.css";
import { Helmet } from "react-helmet";
import Newnavbar from '../newNavbar/Newnavbar'
import LogoContact from '../logoContact/logoContact'
import { FaWhatsapp } from "react-icons/fa";
import Newenqire from '../Enquire Form/Newenqire'

export default function Igcseeight() {
    const location = useLocation()
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>IGCSE Classes in Thane | Grades 8, 9, and 10 (Class X)| Nayak's Tutorials</title>
                <meta name="title" content="IGCSE Classes in Thane | Grades 8, 9, and 10 (Class X)| Nayak's Tutorials" />
                <meta name="description" content="Nayak's Tutorials offers IGCSE coaching in Thane for Class VIII, IX, X. Admissions are now open, with expert guidance to help students succeed." />

                <link rel="canonical" href="https://nayakstutorials.com/igcse-classes/" />


                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Nayak's Tutorials",
                        "image": "https://nayakstutorials.com/static/media/mainImg.2fd512e526d0412ced2e.png",
                        "url": "https://nayakstutorials.com/igcse-classes/",
                        "telephone": "77100 10044",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Thane",
                            "addressCountry": "IN"
                        },
                        "logo": "https://nayakstutorials.com/static/media/Full_Logo.34552bea51a0af756476.png",
                        "sameAs": [
                            "https://www.facebook.com/nayakstutorialss/",
                            "https://x.com/nayaks_tutorial",
                            "https://www.instagram.com/nayakstutorialss/",
                            "https://www.youtube.com/channel/UCSEL7iQLhfjOrIoDQWOqbDw"
                        ]
                    }`}
                </script>

                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org/",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://nayakstutorials.com/"
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "IGCSE Classes in Thane",
                            "item": "https://nayakstutorials.com/igcse-classes/"
                        }]
                    }`}
                </script>

                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "IGCSE Classes in Thane",
                        "image": "https://nayakstutorials.com/static/media/mainImg.2fd512e526d0412ced2e.png",
                        "description": "Nayak's Tutorials offers IGCSE coaching in Thane for Class VIII, IX, and X. Admissions are now open, with expert guidance to help students succeed.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Nayak's Tutorials"
                        }
                    }`}
                </script>



            </Helmet>
            {/* <Navbar /> */}

            <div className="wpfloat">

                <LogoContact />
                <Newnavbar />



                <div className='igcseeightTopDiv'>

                    <div className='breadcrumbNayak' style={{ marginBottom: "10px" }}><a href='/'>Home »</a><a href='/'>Our Offerings »</a><a>School »</a><a>IGCSE</a></div>

                    <div className='igcseeightMain'>
                        <div className='igcseeightLeftDiv'>
                            <img src={mainImg} />
                        </div>
                        <div className='igcseeightRightDiv'>
                            <h3>Boost your Preparation with IGCSE classes</h3>
                            <p>IGCSE has a comprehensive syllabus and mostly tests each child’s creative thinking and problem-solving ability. Their syllabus is vast and requires students to put in extra effort on their own. At Nayak’s Tutorials, our teachers assist and guide each student to bring out their best and get better grades than earlier through our IGCSE classes.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='igcseeightSecondDiv'>
                    <div className='igcseeightSeconDiv'>
                        <h1>Why choose tuition for IGCSE in Mumbai  </h1>
                        <p className='icseeightfirstLine'>Choosing tuition for IGCSE in Mumbai can offer several advantages for students aiming to excel in their International General Certificate of Secondary Education (IGCSE) examinations.</p>

                        <div className='igcseeightSeconMainDiv'>
                            <div className='igcseeightMultipleText'>
                                <div className='igcseeightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Expert Guidance:</h3>
                                </div>
                                <p>IGCSE classes provides students with expert guidance from experienced tutors who are well-versed in the IGCSE curriculum. Our tutors offer insights, tips, and strategies to help students grasp complex concepts.</p>
                            </div>
                            <div className='igcseeightMultipleText'>
                                <div className='igcseeightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Personalized Attention:</h3>
                                </div>
                                <p>Our tuition classes often have smaller class sizes, allowing for more personalized attention. This enables tutors to address individual learning needs, focus on areas of difficulty, and tailor teaching methods to match students' learning styles.</p>
                            </div>
                            <div className='igcseeightMultipleText'>
                                <div className='igcseeightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Supplementary Resources:</h3>
                                </div>
                                <p>We provide additional learning materials, resources, and practice exams to complement the standard IGCSE curriculum. These resources can enhance understanding and preparation for the examinations.</p>
                            </div>
                            <div className='igcseeightMultipleText'>
                                <div className='igcseeightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Structured Learning Environment:</h3>
                                </div>
                                <p>Nayak’s Tutorials IGCSE classes offer a structured and disciplined learning environment, promoting a focused approach to studying. This can be especially beneficial for students who thrive in a more organized setting.</p>
                            </div>
                            <div className='igcseeightMultipleText'>
                                <div className='igcseeightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Consistent Practice and Revision:</h3>
                                </div>
                                <p>We offer regular practice tests and revision sessions, helping students reinforce their knowledge and track their progress. This consistent practice can boost confidence and readiness for the exams.</p>
                            </div>
                            <div className='igcseeightMultipleText'>
                                <div className='igcseeightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Clarification of Doubts:</h3>
                                </div>
                                <p>Our IGCSE classes provide a platform for students to ask questions and clarify doubts in real-time. This interactive communication fosters a better understanding of concepts and promotes a proactive approach to learning.</p>
                            </div>
                            <div className='icseeightMultipleText'>
                                <div className='icseeightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Nayak’s Tutorials has a comprehensive syllabus for IGCSE coaching</h3>
                                </div>
                                <p>We offer IGCSE coaching for lower secondary (grades 8 & 9) as well as upper secondary (grade 10). Our coaching for IGCSE is designed to provide a broad and balanced curriculum, allowing students to pay attention to all their subjects. We are here for those students who seek additional support, guidance and structured preparation.</p>
                            </div>
                            <div className='icseeightMultipleText'>
                                <div className='icseeightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>IGCSE Coaching Timings</h3>
                                </div>
                                <p>IGCSE coaching classes are conducted on a timely manner. We try and teach the same topics that schools are covering. This helps the students grasp concepts in a better manner.   Every branch has different timings for individual classes. But we try and stick to offering the same amount of time each week.</p>

                                <div className='icseeightupdatediv2'>
                                    <div className='icseeightupdateinnerdiv2'>
                                        <p style={{ fontWeight: 700, fontSize: '20px' }}>Class 8 coaching</p>
                                        <p>Hrs per day – 2-3 hrs</p>
                                        <p>Days per week – 5 days</p>
                                        <p>Tests per week – 2</p>
                                    </div>
                                    <div className='icseeightupdateinnerdiv2'>
                                        <p style={{ fontWeight: 700, fontSize: '20px' }}>Class 9 coaching</p>
                                        <p>Hrs per day – 2-3 hrs</p>
                                        <p>Days per week – 5 days</p>
                                        <p>Tests per week – 2</p>
                                    </div>
                                    <div className='icseeightupdateinnerdiv2'>
                                        <p style={{ fontWeight: 700, fontSize: '20px' }}>Class 10 coaching</p>
                                        <p>Hrs per day (vacation) – 3-5 hrs</p>
                                        <p>Hrs per day (regular) – 2-3 hrs</p>
                                        <p>Days per week – 6 days</p>
                                        <p>Tests per week – 2</p>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className='igcseeightThirdDiv'>
                    <h1>Notable features of our IGCSE Tuition in Mumbai</h1>
                    <div className='igcseeightMainDiv2'>
                        <div id='icseFirst' className='igcseeightMultipleText2'>
                            <div className='igcseeightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Experienced and Qualified Tutors:</h3>
                            </div>
                            <p>We have a set of experienced and qualified teachers who cater to just IGCSE students.</p>
                        </div>

                        <div className='igcseeightMultipleText2'>
                            <div className='igcseeightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Personalized Attention:</h3>
                            </div>
                            <p>We have small batches so we can focus on every child in our IGCSE tuitions.</p>
                        </div>
                        <div className='igcseeightMultipleText2'>
                            <div className='igcseeightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Comprehensive IGCSE Curriculum Coverage:</h3>
                            </div>
                            <p>Whether it's core subjects, optional subjects, or practical components, you will receive thorough preparation.</p>
                        </div>
                        <div className='igcseeightMultipleText2'>
                            <div className='igcseeightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Interactive Teaching Methods:</h3>
                            </div>
                            <p>In our IGCSE classes we use blended methodology that includes multimedia resources, e-learning platforms, discussions, and hands-on activities that cater to different learning styles.</p>
                        </div>
                        <div className='igcseeightMultipleText2'>
                            <div className='igcseeightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Regular Assessment and Progress Tracking:</h3>
                            </div>
                            <p>We provide feedback on performance, helping students understand their strengths and areas for improvement.</p>
                        </div>
                        <div className='igcseeightMultipleText2'>
                            <div className='igcseeightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Parent-Teacher Communication:</h3>
                            </div>
                            <p>We share regular updates on their child's progress, parent-teacher meetings, and opportunities for collaborative support.</p>
                        </div>
                        {/* <div id='matrixBoxx2' className='igcseeightMultipleText2'>
                        <div className='igcseeightMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Use this matrix</h3>
                        </div>
                        <div className='matrixDiv2'>
                            <img src={matrix} />
                        </div>
                    </div> */}
                    </div>
                </div>

                <div className='igcseeightLastDiv'>
                    <h3 className='igcseeightFaq'>FAQ's</h3>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How do I prepare for IGCSE?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                -	Start early and begin with the toughest subjects <br></br>
                                -	Understand the concepts <br></br>
                                -	Practice regularly to improve your problem-solving skills and get used to the exam format <br></br>
                                -	Seek help from seniors or experts like Nayak’s Tutorials <br></br>
                                -	Stay motivated <br></br>


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

                                Yes. We have amazing tutors who have been trained to tutor IGCSE students.

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Do you need tuition for IGCSE?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                Yes. You definitely need tuitions for IGCSE board. The curriculum is really complex and correct guidance helps you overcome any learning issues you are having. If you have transitioned from another board, then you definitely need guidance to adapt to the new methods of teaching and to be able to write exams in the way it is expected out of an IGCSE student.


                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What are the subjects taught in 8th grade of IGCSE board?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                The IGSCE Class 8 syllabuses for each subject focus on providing balanced education and allows learners to explore themselves. Main subjects taught in Class 8 are - Art & Design, Science, Mathematics, Computing, Digital Literacy, Physical Education, English, Global Perspectives, ICT, Mathematics, Music and others.

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Is IGCSE harder than ICSE or CBSE?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                Each curriculum, be it IGCSE, ICSE, or CBSE, has its unique strengths and challenges. Our coaching classes cater to individual learning preferences, providing personalized guidance to help students excel in their respective courses.

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

                                The grading systems of IGCSE and ICSE differ in their assessment methods and criteria. Our coaching classes provide insights into these distinctions, ensuring students understand and navigate the grading systems effectively.

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What is the highest grade in IGCSE?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                A*(a*) is the highest grade and G(g) the lowest. • ‘UNGRADED’ shows that the candidate failed to reach the standard required for grade G(g).
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Can I apply to IIT after IGCSE?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                Most certainly. IGCSE is an accepted board and students can apply to IIT and other competitive exams in the country.  Our coaching classes offer guidance tailored to the specific requirements of IIT admissions for IGCSE students.

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>

                </div>
                {/* <div className='igcseeightTriviaImgDiv'>
                <img src={trivia} />
            </div> */}
                <Footer />

                <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>

                {/* <div className='newenquirediv'><Newenqire /></div> */}
            </div>
        </>
    )
}
