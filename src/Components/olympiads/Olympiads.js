import React from 'react'
import './olympiads.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import mainImg from "../../Assets/cbse/Olympiad.jpg"
import dot from "../../Assets/cbse/dot.png"
import dot2 from "../../Assets/faq/dot.png"
import { Helmet } from "react-helmet";
import Newnavbar from '../newNavbar/Newnavbar'
import LogoContact from '../logoContact/logoContact';
import { FaWhatsapp } from "react-icons/fa";
import Newenqire from '../Enquire Form/Newenqire'

export default function Olympiads() {
    return (
        <>
            <Helmet>
                <title>Olympiad Exam Preparation in Thane | Nayak's Tutorials</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Nayak's Tutorials in Thane offers Olympiad exam preparation for subjects like Maths, Science, and English. Get expert guidance to excel in national and international exams." />

                <link rel="canonical" href="https://nayakstutorials.com/olympiads/" />

            </Helmet>
            {/* <Navbar /> */}

            <div className="wpfloat">

                <LogoContact />
                <Newnavbar />

                <div className='olympiadsTopDiv'>

                    <div className='breadcrumbNayak' style={{ marginBottom: "10px" }}><a href='/'>Home »</a><a href='/'>Our Offerings »</a><a>School »</a><a>Olympiads</a></div>

                    <div className='olympiadsMain'>
                        <div className='olympiadsLeftDiv'>
                            <img src={mainImg} alt='Olympiad and School Exam Preparation at Nayak’s Tutorials' />
                        </div>
                        <div className='olympiadsRightDiv'>
                            <h3>Guidance for Various Olympiads with School Exams</h3>
                            <p>At Nayak’s Tutorials, we provide excellent guidance for Olympiads in to grade 8, & 10 students along with the guidance for their school exams. This is provided with the objective of building a strong foundation. Students are guided to prepare for various Olympiads and Talent Search Examinations, which gives them ample insight to understand future challenges, apart from earning credentials that are added to their profiles and scholarships too.
                                Many of the students who started at school in classes 7, 8, 9, or 10 finally end up getting successfully accepted into one of the top-reputed institutions for an UG course of choice immediately after passing the class 12 board.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='olympiadsSecondDiv'>
                    <div className='olympiadsSeconDiv'>
                        <h1>Benefits of Appearing in Olympiads and Talent Search Examinations:</h1>

                        <div className='olympiadsSeconMainDiv'>


                            <div className='olympiadsMultipleText'>
                                <div className='olympiadsMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Competitive Analysis: </h3>
                                </div>
                                <p>Through the Olympiads and Talent Search Examination, you also get a personal benchmark and insights at the regional, national, and global levels.</p>
                            </div>
                            <div className='olympiadsMultipleText'>
                                <div className='olympiadsMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Awards and recognitions:</h3>
                                </div>
                                <p>All certificates and scholarships earned through this examination help build students’ profiles, and in the future, these certificates may even help with admissions to any top institutions in India and abroad.</p>
                            </div>
                            <div className='olympiadsMultipleText'>
                                <div className='olympiadsMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Our Olympiads Workshops:</h3>
                                </div>
                                <p>Nayak’s Tutorials keep organizing various workshops to guide and prepare students for national and international exams and Olympiads. It also broadens the mindset of students to face the competition in the global arena, besides enhancing their knowledge and sharpening their skills in the respective subjects.</p>
                            </div>
                            <div className='olympiadsMultipleText'>
                                <div className='olympiadsMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Early Exposure to Learning and Competition:</h3>
                                </div>
                                <p>Appearing in various Olympiads and Talent Search Examinations at the regional, national, and international levels at the school level gives ample insight to students to understand future challenges, apart from earning credentials that will be added to their profiles and scholarships too.</p>
                            </div>
                            <div className='olympiadsMultipleText'>
                                <div className='olympiadsMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Solid foundation For various competitive exams </h3>
                                </div>
                                <p>Last but not least, students develop a solid foundation, which comes with preparation, appearing and qualifying in various Olympiads and Talent Search examinations, and they will certainly be better prepared for future competitive exams like IIT-JEE, NEET-UG, CA, CUET, CLAT, NDA, and any competitive examinations after classes 10 to 12.</p>
                            </div>

                            <div className='olympiadsMultipleText'>
                                <div className='olympiadsMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Understanding Concepts and Their Applications:</h3>
                                </div>
                                <p>It also helps students to be clearer in understanding concepts and their application, which is certainly going to play an important role in school and all future examinations.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='olympiadsThirdDiv'>
                    <h1>Different Workshops Organized by Nayak's Teachers for:</h1>
                    <div className='olympiadsMainDiv2'>
                        <div id='Simplify' className='olympiadsMultipleText2'>
                            <div className='olympiadsMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>National Talent Search Examination (NTSE (Stage 1 or Stage 2)</h3>
                            </div>
                        </div>
                        <div className='olympiadsMultipleText2'>
                            <div className='olympiadsMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Workshop for various Science and Math Olympiads</h3>
                            </div>
                        </div>
                        <div className='olympiadsMultipleText2'>
                            <div className='olympiadsMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>International Junior Science Olympiad (IJSO)</h3>
                            </div>
                        </div>
                        <div className='olympiadsMultipleText2'>
                            <div className='olympiadsMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>PRMO, RMO, INMO, IMO</h3>
                            </div>
                        </div>

                        <div className='olympiadsMultipleText2'>
                            <div className='olympiadsMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>National Science Olympiad (NSO) - SOF </h3>
                            </div>
                        </div>
                        <div className='olympiadsMultipleText2'>
                            <div className='olympiadsMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>National Mathematics Talent Contest (NMTC) - SOF</h3>
                            </div>
                        </div>
                        <div className='olympiadsMultipleText2'>
                            <div className='olympiadsMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>National Standard Exam in Junior Science (NSEJS) </h3>
                            </div>
                        </div>
                        <div className='olympiadsMultipleText2'>
                            <div className='olympiadsMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>NSTSE (National Level Science Talent Search)</h3>
                            </div>
                        </div>
                        <div className='olympiadsMultipleText2'>
                            <div className='olympiadsMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>The International Junior Science Olympiad (IJSO)</h3>
                            </div>
                        </div>
                        <div className='olympiadsMultipleText2'>
                            <div className='olympiadsMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Summer Camp</h3>
                            </div>
                        </div>
                        <div className='olympiadsMultipleText2'>
                            <div className='olympiadsMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Winter Camp</h3>
                            </div>
                        </div>
                        <div className='olympiadsMultipleText2'>
                            <div className='olympiadsMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>School Enrichment Program & other.</h3>
                            </div>
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
