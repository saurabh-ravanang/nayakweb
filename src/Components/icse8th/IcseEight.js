import React from 'react'
import "./icseeight.css";
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import mainImg from "../../Assets/cbse/mainImg.png"
import dot from "../../Assets/cbse/dot.png"
import dot2 from "../../Assets/faq/dot.png"
import matrix from "../../Assets/cbse/matrix.png"
import trivia from "../../Assets/cbse/newTrivia -8th.png"
import person from "../../Assets/testimonial/person.png"
import coma from "../../Assets/testimonial/coma.png"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Newnavbar from '../newNavbar/Newnavbar';
import LogoContact from '../logoContact/logoContact';
import { FaWhatsapp } from "react-icons/fa";
import Newenqire from '../Enquire Form/Newenqire';


export default function Icseicseeight() {
    const location = useLocation()
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>ICSE Classes in Thane | Grades 8, 9, and 10 (Class X) | Nayak's Tutorials</title>
                <meta name="title" content="ICSE Classes in Thane | Grades 8, 9, and 10 (Class X) | Nayak's Tutorials" />
                <meta name="description" content="Nayak's Tutorials offers ICSE coaching in Thane for Class VIII, IX, and X. With expert guidance, students are set up for success. Admissions are now open." />
                <link rel="canonical" href="https://nayakstutorials.com/icse-classes/" />


                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Nayak's Tutorials",
                        "image": "https://nayakstutorials.com/static/media/mainImg.2fd512e526d0412ced2e.png",
                        "url": "https://nayakstutorials.com/icse-classes/",
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
                            "name": "ICSE Classes in Thane",
                            "item": "https://nayakstutorials.com/icse-classes/"
                        }]
                    }`}
                </script>

                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "ICSE Classes in Thane",
                        "image": "https://nayakstutorials.com/static/media/mainImg.2fd512e526d0412ced2e.png",
                        "description": "Nayak's Tutorials offers ICSE coaching in Thane for Class VIII, IX, and X. With expert guidance, students are set up for success. Admissions are now open.",
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



                <div className='icseeightTopDiv'>
                    <div className='breadcrumbNayak' style={{ marginBottom: "10px" }}><a href='/'>Home »</a><a href='/'>Our Offerings »</a><a>School »</a><a>ICSE</a></div>
                    <div className='icseeightMain'>
                        <div className='icseeightLeftDiv'>
                            <img src={mainImg} />
                        </div>
                        <div className='icseeightRightDiv'>
                            <h3>Excel in your studies with ICSE classes by Nayak's Tutorials</h3>
                            <p>Embark on a path to academic success with Nayak's Tutorials ICSE classes. Our programs are crafted to make learning enjoyable and effective, offering personalized guidance to ensure success in the ICSE curriculum. Join us to discover your full potential and attain exceptional results in your academic journey.</p>
                        </div>
                    </div>
                </div>

                <div className='icseeightSecondDiv'>
                    <div className='icseeightSeconDiv'>
                        <h1>Do ICSE students need coaching?</h1>
                        <p className='icseeightfirstLine'>Despite the proficiency of school teachers, providing equal attention to all students is challenging. The varying learning speeds among students create confusion for teachers, leading to the necessity of ICSE tuition classes. Our coaching classes not only address this challenge but also offer students ample practice, ensuring they are well-prepared for their board exams.</p>

                        <div className='icseeightSeconMainDiv'>
                            <div className='icseeightMultipleText'>
                                <div className='icseeightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Subjects That Need ICSE Tuition</h3>
                                </div>
                                <p>At Nayak's Tutorials, we understand that each student has unique learning needs. Our specialized ICSE classes are designed to cater to those subjects where students often seek additional support. Explore our comprehensive coaching services tailored to enhance understanding and proficiency in the following crucial subjects:</p>

                                <div id='icseeighthoursdiv'>
                                    <div className='icseeightupdatediv'>
                                        <div className='icseeightupdateinnerdiv'>
                                            <p>· English Paper 1</p>
                                            <p>· English Literature – Paper 2</p>
                                            <p>· Maths</p>
                                        </div>
                                        <div className='icseeightupdateinnerdiv'>
                                            <p>· Indian Language</p>
                                            <p>· Physics</p>
                                            <p>· Chemistry</p>
                                        </div>
                                        <div className='icseeightupdateinnerdiv'>
                                            <p>· Biology</p>
                                            <p>· History & Civics</p>
                                            <p>· Geography</p>
                                        </div>
                                        <div className='icseeightupdateinnerdiv'>
                                            <p>· Environmental Science</p>
                                            <p>· Computer2</p>
                                        </div>
                                    </div>
                                </div>

                                <div id='icseeighthoursdiv2'>
                                    <div className='icseeightupdatediv'>
                                        <div className='icseeightupdateinnerdiv'>
                                            <p>· English Paper 1</p>
                                            <p>· English Literature – Paper 2</p>
                                            <p>· Maths</p>
                                            <p>· Indian Language</p>
                                            <p>· Physics</p>
                                            <p>· Chemistry</p>
                                        </div>

                                        <div className='icseeightupdateinnerdiv'>
                                            <p>· Biology</p>
                                            <p>· History & Civics</p>
                                            <p>· Geography</p>
                                            <p>· Environmental Science</p>
                                            <p>· Computer2</p>
                                        </div>
                                    </div>
                                </div>


                                <p>Our mission is to empower students with the knowledge and confidence to excel in every subject. Enroll in our specialized ICSE tuition classes and embark on a journey towards academic success.</p>
                            </div>
                            {/* <div className='icseeightMultipleText'>
                            <div className='icseeightMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Features of our ICSE coaching</h3>
                            </div>
                            <p>At Nayak’s Tutorials, our ICSE classes ensure comprehensive coverage of your curriculum, including multiple mock and unit tests and revision. We help you with additional test, complex questions, doubt-solving sessions and strategies to be completely prepared for your boards. With meticulously planned programme at Nayak’s Tutorials we will help you reach the peak of academic success.</p>
                        </div> */}
                            <div className='icseeightMultipleText'>
                                <div className='icseeightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Nayak's Tutorials ICSE Classes Module</h3>
                                </div>
                                <p>We share study material at the beginning and also in between. ICSE Classes are conducted on a timely manner. We also offer feedback sessions with parents and students. Special doubt solving sessions are also kept close to the exams. CCTV is installed in all our ICSE classes and we keep a keen eye on all types of behaviour.</p>

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

                <div className='icseeightThirdDiv'>
                    <h1>Enhanced Learning Experience at Our ICSE Coaching Classes</h1>
                    <p className='icsefisrtwhiteline' >At Nayak’s Tutorials, our ICSE classes ensure comprehensive coverage of your curriculum, including multiple mock and unit tests and revision. We help you with additional test, complex questions, doubt-solving sessions and strategies to be completely prepared for your boards. With meticulously planned programme at Nayak’s Tutorials we will help you reach the peak of academic success</p>
                    <div className='icseeightMainDiv2'>
                        <div id='icseFirst' className='icseeightMultipleText2'>
                            <div className='icseeightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Study Materials</h3>
                            </div>
                            <p>Get access to easy-to-follow study materials at the start and regularly during your ICSE exam prep.</p>
                        </div>

                        <div className='icseeightMultipleText2'>
                            <div className='icseeightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Organized ICSE Classes</h3>
                            </div>
                            <p>Stick to a clear schedule for our ICSE classes, making sure you're on time and the sessions are well-managed for a smoother learning experience</p>
                        </div>
                        <div className='icseeightMultipleText2'>
                            <div className='icseeightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Engaging Feedback Sessions:</h3>
                            </div>
                            <p>Take part in discussions with both parents and students to get valuable feedback and create a better learning atmosphere during your ICSE exam preparations.</p>
                        </div>
                        <div className='icseeightMultipleText2'>
                            <div className='icseeightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Customized Doubt-Solving Sessions:</h3>
                            </div>
                            <p>Special sessions just for clearing doubts related to your ICSE exam, ensuring you understand the important board topics thoroughly.</p>
                        </div>
                        <div className='icseeightMultipleText2'>
                            <div className='icseeightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Safe Learning Spaces:</h3>
                            </div>
                            <p>Our ICSE coaching centers prioritize safety with CCTV surveillance, creating a secure and supportive environment for learning while maintaining strict rules against inappropriate behavior</p>
                        </div>
                        <div id='icseeighthidecon' className='icseeightMultipleText2'>
                            <div className='icseeightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Safe Learning Spaces:</h3>
                            </div>
                            <p>Our ICSE coaching centers prioritize safety with CCTV surveillance, creating a secure and supportive environment for learning while maintaining strict rules against inappropriate behavior</p>
                        </div>
                        {/* <div id='matrixBoxx2' className='icseeightMultipleText2'>
                        <div className='icseeightMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Use this matrix</h3>
                        </div>
                        <div className='matrixDiv2'>
                            <img src={matrix} />
                        </div>
                    </div> */}
                    </div>
                </div>

                <div className='cbsetestimonial'>
                    <h1 className='testimonialHeading' >Testimonial</h1>
                    <div className='mainTestDiv' id='firstTestimonial'>
                        <div className='testimonialfirst'>
                            <div style={{ padding: '10px' }} className='testImgDiv'>
                                <img src={person} alt='testimonial by Saurabh on securing 97.2 percentage in ICSE boards' />
                            </div>
                            <p>Saurabh Panchal<br></br> X ICSE - 97.2%  <br></br></p>
                        </div>
                        <div className='testimonialsecond'>
                            <h5 className='TName'>Parent</h5>
                            <p>Initially we had opted for their test series during pandemic, which helped him a lot.So for his tenth grade we went for regular class with them. All the teachers, staff had constant interaction with parents, which helped us to understand our ward's progress very well. We are thankful to them as their constant nudging helped him to score a good score of 97.2%. Paper writing skills, detailed discussions on doubts, repetition of difficult topics were some of the important ways that are adopted by the institute which helped him progress. <br></br> Thank you to all for the inspiration and guidance.</p>
                        </div>
                        <div className='testimonialthird'>
                            <img src={coma} />
                        </div>
                    </div>
                    <div className='mainTestDiv' id='lastTestimonial'>
                        <div className='testimonialfirst'>
                            <div style={{ padding: '10px' }} className='testImgDiv'>
                                <img src={person} />
                            </div>
                            {/* <p>Saanvi Kulkarni <br></br> X SSC – 94.80 percent <br></br> SVPT Rabodi</p> */}
                            <p>Ram Sharma <br></br> X ICSE – 86.6 % <br></br> </p>
                        </div>
                        <div className='testimonialsecond'>
                            <h5 className='TName'>Parent</h5>
                            <p>Two things are best about Nayak specially for kids of working parents. <br></br> 1. Great attitude of teachers. They really teach from their heart. <br></br> 2. Supporting Coordinators and mentors. <br></br> I couldn't have asked for more. <br></br> God bless you.</p>
                        </div>
                        <div className='testimonialthird'>
                            <img src={coma} />
                        </div>
                    </div>

                </div>


                <div className='icseeightLastDiv'>
                    <h3 className='icseeightFaq'>FAQ's</h3>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What are some tips for 8th std ICSE students?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                Know the entire syllabus. <br></br>
                                Devise a proper timetable: basis difficulty level of subjects and chapters.<br></br>
                                Clear all the concepts<br></br>
                                Make short notes<br></br>
                                Practice questions<br></br>
                                Regular Revision<br></br>
                                Take mock tests

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What are the benefits of taking mock tests for the 8th ICSE exam?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                Taking mock tests for the 8th ICSE exam improves time management skills and helps students know how prepared they are for the exam.

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What are the benefits of following the 8th ICSE preparation tips?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                Following the 8th ICSE preparation tips help students study more efficiently and maximise their results.

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How many subjects are there in the ICSE syllabus of class 8?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                •	Computer Studies <br></br>
                                •	Environmental Science<br></br>
                                •	Science [Physics, Chemistry and Biology]<br></br>
                                •	History, Civics and Geography<br></br>
                                •	English Second language – Hindi/French<br></br>
                                •	Mathematics




                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How many hours do toppers study?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                Most toppers do a lot of self-study. So, apart from their school, the self-study and any additional tuition classes can be anywhere between 3 to 5 hours.

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>

                </div>
                {/* <div className='icseeightTriviaImgDiv'>
                <img src={trivia} />
            </div> */}
                <Footer />


                <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>
                {/* <div className='newenquirediv'><Newenqire /></div> */}
            </div>
        </>
    )
}
