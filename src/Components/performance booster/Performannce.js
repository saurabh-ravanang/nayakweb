import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import dot from "../../Assets/faq/dot.png"
import mainImg from "../../Assets/tybcom/performance.png"
import './performance.css'
import { Helmet } from "react-helmet";
import Newnavbar from '../newNavbar/Newnavbar'
import LogoContact from '../logoContact/logoContact'
import { FaWhatsapp } from "react-icons/fa";
import Newenqire from '../Enquire Form/Newenqire'

export default function Performannce() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Std X Score Booster Classes in Thane | Nayak's Tutorials</title>
                <meta name="title" content="Std X Score Booster Classes in Thane | Nayak's Tutorials" />
                <meta name="description" content="Nayak's Tutorials in Thane offers Std X Score Booster classes with weekly tests, paper solving, and expert guidance to help students improve their performance." />

                <link rel="canonical" href="https://nayakstutorials.com/class-10-score-booster-course/" />

                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Nayak's Tutorials",
                        "image": "https://nayakstutorials.com/static/media/mainImg.2fd512e526d0412ced2e.png",
                        "url": "https://nayakstutorials.com/class-10-score-booster-course/",
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
                            "name": "Class X Booster Course in Thane",
                            "item": "https://nayakstutorials.com/class-10-score-booster-course/"
                        }]
                    }`}
                </script>

                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Class X Bosster Course in Thane",
                        "image": "https://nayakstutorials.com/static/media/mainImg.2fd512e526d0412ced2e.png",
                        "description": "Nayak's Tutorials in Thane offers Std X Score Booster classes with weekly tests, paper solving, and expert guidance to help students improve their performance.",
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

                <div className='performanceTopDiv'>
                    <div className='breadcrumbNayak' style={{ marginBottom: "10px" }}><a href='/'>Home »</a><a href='/'>Our Offerings »</a><a>Score Booster</a></div>

                    <div className='perforribbin' ><h3>Score Booster Course for Class 10 Board 2025 (CBSE | ICSE | SSC)</h3></div>
                    <div className='performanceMain'>
                        <div className='performanceLeftDiv'>
                            <img src={mainImg} alt='Strengthen Your Skills for Board and Exam Success' />
                        </div>
                        <div className='performanceRightDiv'>
                            <h3>Score booster</h3>
                            <p>Want to excel in the class 10 Board Exam? <br></br> Enrol for the Score Booster Course at Nayak’s Tutorials. We have specialized courses created for the CBSE, ICSE and SSC Boards.
                                Tailored specifically for the CBSE, ICSE, SSC Board Exam pattern and syllabus, our Nayak’s Score Booster Course is your key to confidence and success. This comprehensive program covers everything you need to excel in your exams, from enhancing subject knowledge to strengthening weak areas and improving problem-solving skills.
                                With our board-focused approach, you'll gain clarity of concepts, bridge learning gaps, and sharpen exam writing skills. Plus, you'll master time management techniques essential for acing your exams.
                                Thousands of students have already benefited from the Nayak’s Tutorials Score Booster dose.</p>
                        </div>
                    </div>

                    <div className='performanceSeconDiv'>
                        <h1>What to expect at your  Score booster classes</h1>

                        <div className='performanceSeconMainDiv'>
                            <div className='performanceMultipleText'>
                                <div className='performanceMultipleInnerDiv'>
                                    {/* <img src={dot} /> */}
                                    <h3>1. Score Booster Course Materials: </h3>
                                </div>
                                <p>With over two decades of experience in guiding students to excel in board exams, our subject experts, meticulously prepare these materials. In these materials, you will find chapter-by-chapter concepts and exercises. As a result, students are better able to understand concepts, apply their knowledge to exercises, gain confidence, and get prepared well before the target exam.Students will receive these materials immediately after admission to this course.</p>
                            </div>
                            <div className='performanceMultipleText'>
                                <div className='performanceMultipleInnerDiv'>
                                    {/* <img src={dot} /> */}
                                    <h3>2. Score Booster Test Series: </h3>
                                </div>
                                <p>There are 3 types of tests conducted in in the Score Booster Test Series , which are as follows:  <br></br>
                                    A.	Concept Clarity Tests:
                                    This is primarily topic-wise weekly test series are also conducted at the centre for all five subjects. There will be 2 tests per week  and the duration of each test is 45 minutes.
                                    The complete test schedule is provided to students at the time of admission. Through  Score Booster Course Materials, students will be able to prepare well according to the test schedule.
                                    Our teachers check all test papers and provide students with feedback and suggestions during paper discussions.
                                    As a result of these topic-specific preparations and tests, you will be able to retain your knowledge and learning more effectively. <br></br>
                                    B. Practice Test Series:
                                    Students also receive a set of practice papers which students can practice and take tests at home at their convenient time. Further they can submit the answer papers to us by visiting the nearest centre.
                                    These answer sheets will also be evaluated by our teachers and given back to students with expert feedback.  <br></br>
                                    C. Three Prelims Test Series:
                                    This part of the Nayak’s Score Booster Course proved to be a real GAME CHANGER.  These tests cover the entire syllabus. During these tests, the environment is similar to that of a Board Exam, conducted at the centre and in a school. In addition to give students awareness of the real board exam, these tests boost their confidence, enhance their exam-taking skills, and improve their scoring abilities.
                                </p>
                            </div>
                            <div className='performanceMultipleText'>
                                <div className='performanceMultipleInnerDiv'>
                                    {/* <img src={dot} /> */}
                                    <h3>3. Planned Revision: </h3>
                                </div>
                                <p>Furthermore, there will be planned revision lectures given by our board expert teachers, deepening your knowledge of each concept and their applications.Revision lectures are a valuable and effective tool for students looking to improve their performance in all subjects. These revision classes are a valuable tool for every student seeking to enhance their academic outcomes for students to review, clarify, and gain confidence in all subjects.</p>
                            </div>
                            <div className='performanceMultipleText'>
                                <div className='performanceMultipleInnerDiv'>
                                    {/* <img src={dot} /> */}
                                    <h3>4. Special Sessions: </h3>
                                </div>
                                <p>On various useful topics, there will be expert & motivational sessions, such as: <br></br>
                                    •	Paper Presenting Guidance <br></br>
                                    •	Subject Preparation Guidance <br></br>
                                    •	Time Management <br></br>
                                    •	Stress Management <br></br>
                                    •	Career Guidance <br></br>
                                    •	Motivational Session <br></br>
                                    •	Parents Session & More <br></br>
                                    It is important not only to prepare students with knowledge, but also to keep their mental level high in order to perform well on the class 10 board examination.</p>
                            </div>
                            <div className='performanceMultipleText'>
                                <div className='performanceMultipleInnerDiv'>
                                    {/* <img src={dot} /> */}
                                    <h3>5. Call to Solve: </h3>
                                </div>
                                <p>Our team of teachers extend their full support, especially during the board exam period, we also refer to it as “Last Minute Support”. In the exam period, students can reach out to them whenever they need assistance. We will have teachers available to assist students in solving problems, clarifying concepts, taking care of oneself, keeping them motivated, and any other assistance required to better their exam performance.</p>
                            </div>
                            <div className='performanceMultipleText'>
                                <div className='performanceMultipleInnerDiv'>
                                    {/* <img src={dot} /> */}
                                    <h3>6. Applause: </h3>
                                </div>
                                <p>The last, but not the least, since student success is the result of the diligent work of students, teachers, and parents, we celebrate it. Applause is a celebration of results, a momentous occasion that honours and recognises our students' outstanding performance on the board exams. It's a chance to acknowledge accomplishments, honour hard effort, and foster a sense of accomplishment and drive for ongoing success.</p>
                            </div>


                            {/* old one  */}

                            {/* <div className='performanceMultipleText'>
                            <div className='performanceMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>1 prelim</h3>
                            </div>
                            <p>In a perfect board environment.</p>
                        </div>
                        <div className='performanceMultipleText'>
                            <div className='performanceMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Counselling</h3>
                            </div>
                            <p>Specifically tailored for board preparation.</p>
                        </div>

                        <div className='performanceMultipleText'>
                            <div className='performanceMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>2 prelims</h3>
                            </div>
                            <p>Mock board exam before the actual boards</p>
                        </div>
                        <div className='performanceMultipleText'>
                            <div className='performanceMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Motivational lectures</h3>
                            </div>
                            <p>It’s easy to lose focus when preparing for a longer duration of time. These help our students be on track all the time.</p>
                        </div>
                        <div className='performanceMultipleText'>
                            <div className='performanceMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>3 prelims</h3>
                            </div>
                            <p>For more practice to achieve perfection.</p>
                        </div>
                        <div className='performanceMultipleText'>
                            <div className='performanceMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Career guidance</h3>
                            </div>
                            <p>To select the right career.</p>
                        </div>
                        <div className='performanceMultipleText'>
                            <div className='performanceMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>4 prelims</h3>
                            </div>
                            <p>For more practice to achieve perfection.</p>
                        </div>
                        <div className='performanceMultipleText'>
                            <div className='performanceMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Applause</h3>
                            </div>
                            <p>To celebrate success.</p>
                        </div>
                        <div className='performanceMultipleText'>
                            <div className='performanceMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>SMS question paper book</h3>
                            </div>
                            <p>For additional practice to score more marks.</p>
                        </div>
                        <div className='performanceMultipleText'>
                            <div className='performanceMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Call to Solve</h3>
                            </div>
                            <p>24×7 HELPLINE for OUR students.</p>
                        </div>
                        <div className='performanceMultipleText'>
                            <div className='performanceMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Paper writing skill lectures</h3>
                            </div>
                            <p>Expert corrector’s tips for scoring best in boards.</p>
                        </div>
                        <div style={{ visibility: 'hidden' }} className='performanceMultipleText'>
                            <div className='performanceMultipleInnerDiv'>
                                <img src={dot} />
                                <h3>Paper writing skill lectures</h3>
                            </div>
                            <p>Expert corrector’s tips for scoring best in boards.</p>
                        </div> */}

                            {/* old one  */}
                        </div>
                    </div>

                </div>
                <Footer />

                <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>
                {/* <div className='newenquirediv'><Newenqire /></div> */}
            </div>
        </>
    )
}
