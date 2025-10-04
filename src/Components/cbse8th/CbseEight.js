import React from 'react'
import "./cbseeight.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import mainImg from "../../Assets/cbse/mainImg.png"
import dot from "../../Assets/cbse/dot.png"
import dot2 from "../../Assets/faq/dot.png"
import matrix from "../../Assets/cbse/matrix.png"
import trivia from "../../Assets/cbse/newTrivia -8th.png"
import coma from "../../Assets/testimonial/coma.png"
import newAtharv from "../../Assets/testimonial/newAtharv.jpeg"
import nishantParent from "../../Assets/testimonial/Nishant parents.jpg"
import atharv from "../../Assets/testimonial/Atharv.png"
import gargi from "../../Assets/testimonial/gargi.png"
import muskan from "../../Assets/testimonial/muskan.png"
import { FaWhatsapp } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
import Cbsevideo from '../video/Cbsevideo';
import Newnavbar from '../newNavbar/Newnavbar';
import LogoContact from '../logoContact/logoContact';
import Newenqire from '../Enquire Form/Newenqire';


export default function CbseEight() {
    const sliderSettings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 560, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 840, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1200, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    const location = useLocation()
    return (
        <>
            <Helmet>
                {/* <title>Comprehensive CBSE Coaching Classes in Mumbai and Thane| Nayak Tutorials</title> */}
                <title>CBSE Classes in Thane | Grades 8, 9, and 10 (Class X) | Nayak's Tutorials
                </title>
                <meta charSet="utf-8" />
                <meta name="title" content="CBSE Classes in Thane | Grades 8, 9, and 10 (Class X) | Nayak's Tutorials" />
                <meta name="description" content="Nayak's Tutorials offers CBSE coaching in Thane for Class VIII, IX, and X. With expert guidance, students are prepared for success. Admissions are now open." />
                <link rel="canonical" href="https://nayakstutorials.com/cbse-classes/" />


                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Nayak's Tutorials",
                        "image": "https://nayakstutorials.com/static/media/mainImg.2fd512e526d0412ced2e.png",
                        "url": "https://nayakstutorials.com/cbse-classes/",
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
                            "name": "CBSE classes in Thane",
                            "item": "https://nayakstutorials.com/cbse-classes/"
                        }]
                    }`}
                </script>

                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "CBSE classes in Thane",
                        "image": "https://nayakstutorials.com/static/media/mainImg.2fd512e526d0412ced2e.png",
                        "description": "Nayak's Tutorials offers CBSE coaching in Thane for Class VIII, IX, and X. With expert guidance, students are prepared for success. Admissions are now open.",
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

                <div className='eightTopDiv'>
                    <div className='breadcrumbNayak' style={{ marginBottom: "10px" }}><a href='/'>Home »</a><a href='/'>Our Offerings »</a><a>School »</a><a>CBSE</a></div>
                    <div className='eightMain'>
                        <div className='eightLeftDiv'>
                            <img src={mainImg} alt='cbse coaching classes in thane ' />
                        </div>
                        <div className='eightRightDiv'>
                            <h3>Looking for CBSE tuitions? </h3>
                            <p style={{ color: '' }}>Nayak's Tutorials are the best  for CBSE students</p>
                            <p>We are delighted to introduce Nayak's Tutorials, a leading education center offering top-notch CBSE coaching classes for students in standard 8, 9, and 10. Our institute is dedicated to providing a supportive and exciting environment where students can excel academically. With a team of highly qualified and experienced educators, we prioritize a student-centric approach, ensuring that each student receives personalized attention and guidance. Our comprehensive curriculum is designed to align with CBSE standards, covering subjects such as Mathematics, Science, English, and Social Science. Through interactive sessions, innovative teaching methodologies, and regular assessments, we aim to foster a deep understanding of concepts and instill a passion for learning.Join our cbse classes and let's start an awesome journey of learning and personal growth together!</p>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                <div className='eightSecondDiv'>
                    <div className='eightSeconDiv'>
                        <h1>Why choose Nayak’s Tutorials CBSE Classes</h1>
                        <p className='icseeightfirstLine'>Nayak’s Tutorials coaching classes for CBSE ensure you stay focused on your curriculum, preparing you to excel in CBSE board exams by the time you reach the 10th standard.</p>

                        <div className='eightSeconMainDiv'>
                            <div className='eightMultipleText'>
                                <div className='eightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Expert Educators for CBSE Excellence:</h3>
                                </div>
                                <p>Benefit from a team of highly qualified and experienced educators, specializing in CBSE classes, dedicated to guiding you towards academic success.</p>
                            </div>
                            <div className='eightMultipleText'>
                                <div className='eightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Personalized Attention in CBSE Tuition:</h3>
                                </div>
                                <p>Enjoy tailored guidance in our CBSE classes, where your unique learning needs are prioritized for better comprehension.</p>
                            </div>
                            <div className='eightMultipleText'>
                                <div className='eightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Comprehensive CBSE Curriculum:</h3>
                                </div>
                                <p>Explore a curriculum meticulously aligned with CBSE standards, covering key subjects such as Mathematics, Science, English, and Social Science</p>
                            </div>
                            <div className='eightMultipleText'>
                                <div className='eightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Interactive Learning for CBSE Board Preparation:</h3>
                                </div>
                                <p>Engage in interactive sessions and innovative teaching methods specifically designed for CBSE classes, ensuring enjoyable and effective learning experiences.</p>
                            </div>
                            <div className='eightMultipleText'>
                                <div className='eightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Regular Assessments in CBSE Coaching:</h3>
                                </div>
                                <p>Stay on track with our CBSE coaching classes through regular assessments that monitor your progress and highlight areas for improvement.</p>
                            </div>
                            <div className='eightMultipleText'>
                                <div className='eightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Holistic Development in CBSE Tuition:</h3>
                                </div>
                                <p>Beyond academics, our CBSE classes focus on nurturing critical thinking and problem-solving skills, ensuring lifelong success.</p>
                            </div>
                            <div className='eightMultipleText'>
                                <div className='eightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Modern Technology Integration for CBSE Excellence:</h3>
                                </div>
                                <p>Experience a tech-savvy learning environment in our CBSE coaching classes, enhancing accessibility and engagement for effective learning.</p>
                            </div>
                            <div className='eightMultipleText'>
                                <div className='eightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Positive Learning Environment for CBSE Board Success:</h3>
                                </div>
                                <p>Immerse yourself in a supportive and positive atmosphere specifically designed for CBSE tuition, encouraging both academic excellence and personal growth.</p>
                            </div>
                            <div id='cbseHidecon' className='eightMultipleText'>
                                <div className='eightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Positive Learning Environment for CBSE Board Success:</h3>
                                </div>
                                <p>Immerse yourself in a supportive and positive atmosphere specifically designed for CBSE tuition, encouraging both academic excellence and personal growth.</p>
                            </div>
                            <div className='icseeightMultipleText'>
                                <div className='icseeightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Nayak Tutorials CBSE Classes Module</h3>
                                </div>
                                <p>We share study material at the beginning and also in between. CBSE Classes are conducted on a timely manner. We have feedback sessions with parents and students. Special doubt solving sessions are kept keeping the exams in mind. All our CBSE tuition branches have CCTV and no untoward behaviour is ever entertained.</p>

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
                {/* <div className='container'> */}
                <div className='eightThirdDiv'>
                    <h1>Enhanced Learning Experience at Our CBSE Coaching Classes</h1>
                    <div className='eightMainDiv2'>
                        <div id='Simplify' className='eightMultipleText2'>
                            <div className='eightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Study Material Distribution</h3>
                            </div>
                            <p>Receive comprehensive study materials at the beginning and periodically during your academic journey.</p>
                        </div>
                        <div className='eightMultipleText2'>
                            <div className='eightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Timely CBSE Classes</h3>
                            </div>
                            <p>Follow a structured timetable for CBSE classes, ensuring punctuality and effective session management.</p>
                        </div>
                        <div className='eightMultipleText2'>
                            <div className='eightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Feedback Sessions</h3>
                            </div>
                            <p>Engage in valuable feedback sessions involving both parents and students to enhance the learning experience</p>
                        </div>
                        <div className='eightMultipleText2'>
                            <div className='eightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Specialized Doubt-Solving Sessions</h3>
                            </div>
                            <p>Benefit from targeted doubt-solving sessions designed with exams in mind, providing focused exam preparation</p>
                        </div>

                        <div className='eightMultipleText2'>
                            <div className='eightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Secure Learning Environment</h3>
                            </div>
                            <p>All CBSE coaching branches are equipped with CCTV for a secure and positive learning atmosphere, where inappropriate behavior is strictly prohibited.</p>
                        </div>
                        <div id='cbseHidecon' className='eightMultipleText2'>
                            <div className='eightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Secure Learning Environment</h3>
                            </div>
                            <p>All CBSE coaching branches are equipped with CCTV for a secure and positive learning atmosphere, where inappropriate behavior is strictly prohibited.</p>
                        </div>
                        {/* <div id='matrixBoxx' className='eightMultipleText2'>
                        <div className='eightMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Use this matrix</h3>
                        </div>
                        <div className='matrixDiv'>
                            <img src={matrix} />
                        </div>
                    </div> */}
                    </div>
                </div>
                {/* </div> */}

                <Cbsevideo />

                <div className='cbsetestimonial'>
                    <h1 className='testimonialHeading' >Testimonial </h1>
                    {/* <Slider className='featureCaurnew' {...sliderSettings}> */}
                    <div className='mainTestDiv' id='firstTestimonial'>
                        <div className='testimonialfirst'>
                            <div style={{ padding: '10px' }} className='testImgDiv'>
                                <img style={{ borderRadius: '50%' }} src={newAtharv} alt='testimonial by Atharva Panchal on securing 90.8 percentage in CBSE boards' />
                            </div>
                            {/* <p>Saanvi Kulkarni <br></br> X SSC – 94.80 percent <br></br> SVPT Rabodi</p> */}
                            <p>Atharva Panchal <br></br> X CBSE – 90.8 % <br></br> St. Xaviers Global</p>
                        </div>
                        <div className='testimonialsecond'>
                            <h5 className='TName'>Student</h5>
                            <p>Many thanks to all the teachers for their great efforts for giving personal attention to each and every student. <br></br> Conducted Online / Offline lectures, parent meeting as per required, helpline numbers during exams to solve our doubts and the pre board exams which helped us a lot in the board exams.<br></br> Thank you all so much for the hard work and great support.</p>
                        </div>
                        <div className='testimonialthird'>
                            <img src={coma} />
                        </div>
                    </div>
                    <div className='mainTestDiv'>
                        <div className='testimonialfirst'>
                            <div style={{ padding: '10px' }} className='testImgDiv'>
                                <img style={{ borderRadius: '50%' }} src={nishantParent} alt='testimonial by Nishants parents on their kid securing 96.6 percentage in CBSE boards' />
                            </div>
                            {/* <p>Saanvi Kulkarni <br></br> X SSC – 94.80 percent <br></br> SVPT Rabodi</p> */}
                            <p>Nishant Goplani <br></br> X CBSE – 96.6 % <br></br> NPS</p>
                        </div>
                        <div className='testimonialsecond'>
                            <h5 className='TName'>Parent</h5>
                            <p>My ward was a test series student. We just expected you to take timely tests so that he keeps preparing. But apart from conducting tests, there were also timely doubt solving sessions. All our needs were catered to in the best possible way. My ward’s writing speed improved due to these tests. He was also guided well about how to cover up his vast social science syllabus so that he is at ease during boards exams as he had only one holiday before the exam to revise the entire syllabus. <br></br> All the staff were kind and cooperative in providing proper information whenever need be. The 3 pre boards exams conducted provided good practice. So we thank you all for the constant support throughout the academic year. Thank you so much again.</p>
                        </div>
                        <div className='testimonialthird'>
                            <img src={coma} />
                        </div>
                    </div>
                    <div className='mainTestDiv'>
                        <div className='testimonialfirst'>
                            <div className='testImgDiv'>
                                <img src={muskan} alt='testimonial by Muskan on securing 96 percentage in CBSE boards' />
                            </div>
                            {/* <p>Ananyaa Kardale <br></br> X SSC – 97 percent <br></br> Parents</p> */}
                            <p>Muskan Gupta <br></br> X CBSE – 96 %<br></br> Orchids International</p>
                        </div>
                        <div className='testimonialsecond'>
                            <h5 className='TName'>Student</h5>
                            <p>I am very much satisfied with my result. Nayak’s Tutorials has helped us a lot. They conducted weekly tests. Teachers helped us with solving doubts and everything. The mock exam conducted by Nayak’s Tutorials also provided a very good experience.</p>
                        </div>
                        <div className='testimonialthird'>
                            <img src={coma} />
                        </div>
                    </div>
                    <div className='mainTestDiv'>
                        <div className='testimonialfirst'>
                            <div className='testImgDiv'>
                                <img src={gargi} alt='testimonial by Gargi on securing 96.6% in cbse boards' />
                            </div>
                            {/* <p>Ananyaa Kardale <br></br> X SSC – 97 percent <br></br> Parents</p> */}
                            <p>Gargi Patil <br></br> X CBSE – 96.6 % <br></br> NHSS</p>
                        </div>
                        <div className='testimonialsecond'>
                            <h5 className='TName'>Student</h5>
                            <p>I am really happy that I took admission in Nayak’s Tutorials. All the teachers were really very supportive. There were doubt solving sessions arranged from time to time which helped a lot.<br></br> Revision sessions and weekly tests were helpful too.<br></br> Thank you for everything.</p>
                        </div>
                        <div className='testimonialthird'>
                            <img src={coma} />
                        </div>
                    </div>
                    <div className='mainTestDiv' id='lastTestimonial'>
                        <div className='testimonialfirst'>
                            <div style={{ padding: '0px 10px' }} className='testImgDiv'>
                                <img src={atharv} alt='testimonial by Atharva on securing 96.2 percentage in CBSE boards' />
                            </div>
                            {/* <p>Ridhima Tari <br></br> X SSC - 98.2 percent <br></br> A.K.Joshi</p> */}
                            <p>Atharv Patil <br></br> X CBSE - 96.2 % <br></br> SMV</p>
                        </div>
                        <div className='testimonialsecond'>
                            <h5 className='TName'>Student</h5>
                            <p>I am really very proud of my achievement. The credit goes to entire team of Nayak’s Tutorials. I really like their way of teaching. The sessions arranged by them from time to time like those of Paper Writing Skills and doubt solving sessions were really helpful. They always motivated me to give my best.<br></br> Thanks a lot.</p>
                        </div>
                        <div className='testimonialthird'>
                            <img src={coma} />
                        </div>
                    </div>


                    {/* </Slider> */}






                </div>



                <div className='eightLastDiv'>
                    <h3 className='eightFaq'>FAQ's</h3>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What are the courses covered in CBSE coaching classes?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                At Nayak’s Tutorials, we give importance to all the subjects but let our students have more sessions in Maths and Science. We include sessions for English, Hindi, Maths, Science and Social Science in our CBSE classes.
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

                                In the realm of CBSE education, as students advance to higher grades, the complexity of challenges tends to grow. Recognizing this, Nayak’s Tutorial tailors coaching classes uniquely for CBSE classes 8, 9, and 10, offering distinct and effective support to help students excel in their academic journey.

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
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Which grade is best in CBSE?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                In CBSE, grades range from A1 to E2 on a 10-point scale. A1 is excellent, and E2 suggests a need for improvement. The "best" grade depends on individual goals, but understanding subjects and applying knowledge is key.

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
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


                </div>
                {/* <div className='eightTriviaImgDiv'>
                <img src={trivia} />
            </div> */}
                <Footer />

                <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>
                {/* <div className='newenquirediv'><Newenqire /></div> */}
            </div>
        </>
    )
}
