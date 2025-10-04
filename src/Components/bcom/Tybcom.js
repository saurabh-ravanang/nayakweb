import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import dot from "../../Assets/faq/dot.png"
import mainImg from "../../Assets/tybcom/mainimg.png"
import clarity from "../../Assets/tybcom/clarity.png"
import regular from "../../Assets/tybcom/regular.png"
import testPaper from "../../Assets/tybcom/test papers.png"
import book from "../../Assets/tybcom/book.png"
import news from "../../Assets/tybcom/news.png"
import teamwork from "../../Assets/tybcom/teamwork.png"
import work from "../../Assets/tybcom/work.png"
import thought from "../../Assets/tybcom/thought.png"
import './tybcom.css'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Helmet } from "react-helmet";
import Newnavbar from '../newNavbar/Newnavbar'
import LogoContact from '../logoContact/logoContact'
import { FaWhatsapp } from "react-icons/fa";
import Newenqire from '../Enquire Form/Newenqire'


export default function Tybcom() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>TYBCOM (Bachelor of Commerce) Classes in Thane | Nayak's Tutorials</title>
                <meta name="title" content="TYBCOM (Bachelor of Commerce) Classes in Thane | Nayak's Tutorials" />
                <meta name="description" content="TY BCom classes in Thane by Nayak's Tutorials offer expert guidance to help students excel in their final year of commerce studies. Admissions open." />

                <link rel="canonical" href="https://nayakstutorials.com/tybcom/" />

                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Nayak's Tutorials",
                        "image": "https://nayakstutorials.com/static/media/mainImg.2fd512e526d0412ced2e.png",
                        "url": "https://nayakstutorials.com/tybcom/",
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
                            "name": "TY BCom classes in Thane",
                            "item": "https://nayakstutorials.com/tybcom/"
                        }]
                    }`}
                </script>

                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "TY BCom classes in Thane",
                        "image": "https://nayakstutorials.com/static/media/mainImg.2fd512e526d0412ced2e.png",
                        "description": "TY BCom classes in Thane by Nayak's Tutorials offer expert guidance to help students excel in their final year of commerce studies. Admissions open.",
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
                <div className='tybcomTopDiv'>
                    <div className='breadcrumbNayak' style={{ marginBottom: "10px" }}><a href='/'>Home »</a><a href='/'>Our Offerings »</a><a>College »</a><a>B.Com</a></div>

                    <div className='tybcomMain'>
                        <div className='tybcomLeftDiv'>
                            <img src={mainImg} alt='B.Com support and exam preparation at Nayak’s Tutorials.' />
                        </div>
                        <div className='tybcomRightDiv'>
                            <h3>B.Com</h3>
                            <p>Bachelor of Commerce is a fairly complex course for students. They need a good foundation to understand the complex structure of the course. At Nayak’s Tutorials, we help students go through all the three years of their B.Com degree with ease. We help each individual by helping them cover the syllabus, understand the concepts and practice for their exams. </p>
                        </div>
                    </div>
                    <div className='tybcomSeconDiv'>
                        <h1>Why choose Nayak’s Tutorials  to be your coaching class?</h1>

                        <div className='tybcomSeconMainDiv'>
                            <div className='tybcomMultipleText'>
                                <div className='tybcomMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Equipped classrooms</h3>
                                </div>
                                <p>Our classrooms are large, airy, can accommodate many students and has all facilities like the white board, digital board and more.</p>
                            </div>
                            <div className='tybcomMultipleText'>
                                <div className='tybcomMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Study material</h3>
                                </div>
                                <p>The material we provide is the mixture of books recommended by your college and extensive research material.</p>
                            </div>
                            <div className='tybcomMultipleText'>
                                <div className='tybcomMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Qualified faculty</h3>
                                </div>
                                <p>Our teachers are qualified, experienced and love interacting with students</p>
                            </div>
                            <div className='tybcomMultipleText'>
                                <div className='tybcomMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Limited students per batch</h3>
                                </div>
                                <p>To ensure we offer quality education to every student, we have a limited batch strength and this is decided on a first come, first serve basis.</p>
                            </div>
                            <div className='tybcomMultipleText'>
                                <div className='tybcomMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Personal attention</h3>
                                </div>
                                <p>Limited strength helps us in providing personal attention to every student</p>
                            </div>
                            <div className='tybcomMultipleText'>
                                <div className='tybcomMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Doubt clearing</h3>
                                </div>
                                <p>We ensure we give enough time to our students to come and ask questions and clear any doubts</p>
                            </div>
                            <div className='tybcomMultipleText'>
                                <div className='tybcomMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Mock tests</h3>
                                </div>
                                <p>We offer revision lectures, tips for cracking the paper and regular mock tests before the exams</p>
                            </div>
                            <div className='tybcomMultipleText'>
                                <div className='tybcomMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Proven results</h3>
                                </div>
                                <p>Year on year, we have proved that Nayak’s Tutorials can help students achieve their dreams</p>
                            </div>
                            <div className='visibleTY tybcomMultipleText'>
                                <div className='tybcomMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Proven results</h3>
                                </div>
                                <p>Year on year, we have proved that Nayak’s Tutorials can help students achieve their dreams</p>
                            </div>
                        </div>
                    </div>

                    <div className='tybcomThirdDiv'>
                        <h1>Tips for B.Com students</h1>

                        <div className='tybcomMainTips'>
                            <div className='tybcomTipsDiv'>
                                <div className='tybcomtipsImgDiv'>
                                    <img src={clarity} />
                                </div>
                                <div className='tybcomtipsInner'>
                                    <h3>Know your syllabus</h3>
                                    <p>Familiarize yourself with the entire curriculum of all the subjects.</p>
                                </div>
                            </div>
                            <div className='tybcomTipsDiv'>
                                <div className='tybcomtipsImgDiv'>
                                    <img src={book} />
                                </div>
                                <div className='tybcomtipsInner'>
                                    <h3>Attend your classes regularly</h3>
                                    <p>Regular attendance is not just important for being allowed in the exams but also to understand the subject well. At Nayak’s Tutorials, we help you strengthen your hold on all subjects further.</p>
                                </div>
                            </div>
                            <div className='tybcomTipsDiv'>
                                <div className='tybcomtipsImgDiv'>
                                    <img src={regular} />
                                </div>
                                <div className='tybcomtipsInner'>
                                    <h3>Manage time</h3>
                                    <p>Ensure you balance your studies, assignments, projects and preparing for exams.</p>
                                </div>
                            </div>
                            <div className='tybcomTipsDiv'>
                                <div className='tybcomtipsImgDiv'>
                                    <img src={thought} />
                                </div>
                                <div className='tybcomtipsInner'>
                                    <h3>Develop analytical and critical thinking</h3>
                                    <p>Practice problem-solving exercises, case studies and real-world examples to sharpen your analytical and critical thinking skills.</p>
                                </div>
                            </div>
                            <div className='tybcomTipsDiv'>
                                <div className='tybcomtipsImgDiv'>
                                    <img src={teamwork} />
                                </div>
                                <div className='tybcomtipsInner'>
                                    <h3>Collaborate with friends</h3>
                                    <p>Engage in group studies, discussions that are relevant to commerce. Collaborating with classmates, coaching classmates help you learn challenging concepts, gain different perspectives and also strengthens your teamwork skills.</p>
                                </div>
                            </div>
                            <div className='tybcomTipsDiv'>
                                <div className='tybcomtipsImgDiv'>
                                    <img src={testPaper} />
                                </div>
                                <div className='tybcomtipsInner'>
                                    <h3>Practice mock test papers</h3>
                                    <p>The more you practice, the more you will hone your skills. Pick up test papers from earlier years, from different colleges and also attempt mock papers.</p>
                                </div>
                            </div>
                            <div className='tybcomTipsDiv'>
                                <div className='tybcomtipsImgDiv'>
                                    <img src={news} />
                                </div>
                                <div className='tybcomtipsInner'>
                                    <h3>Be abreast of current affairs</h3>
                                    <p>Commerce is everywhere, so being in touch with current economic trends, business news and regulatory changes always helps.</p>
                                </div>
                            </div>
                            <div className='tybcomTipsDiv'>
                                <div className='tybcomtipsImgDiv'>
                                    <img src={work} />
                                </div>
                                <div className='tybcomtipsInner'>
                                    <h3>Do an internship</h3>
                                    <p>See if you can do an internship or part-time jobs as this will give you practical exposure in knowing the concepts of commerce and also helps you build professional network.</p>
                                </div>
                            </div>
                            <div className='visibleTY tybcomTipsDiv'>
                                <div className='tybcomtipsImgDiv'>
                                    <img src={work} />
                                </div>
                                <div className='tybcomtipsInner'>
                                    <h3>Do an internship</h3>
                                    <p>See if you can do an internship or part-time jobs as this will give you practical exposure in knowing the concepts of commerce and also helps you build professional network.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='tybcomLastDiv'>
                    <h3 className='tybcomFaq'>FAQ's</h3>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What else can I study along with B Com?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                You can take up any of the below topics to study as an extra subject. <br></br>
                                •	Auditing<br></br>
                                •	Business Law<br></br>
                                •	Corporate Governance<br></br>
                                •	Corporate Taxation<br></br>
                                •	Financial Management<br></br>
                                •	Forensic Accounting<br></br>
                                •	International Accounting<br></br>
                                •	International Taxation<br></br>
                                •	Management Accounting<br></br>
                                •	Public Sector Accounting<br></br>
                                •	Risk Management<br></br>
                                These are only some suggestions, check with your teachers to see what suits your skillsets and ambitions best.


                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What are the benefits of doing B. Com
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                Vast Career choice <br></br>
                                B.Com students have a range of courses to opt for like M.Com, MBA, CA, CS, MCA etc.<br></br>
                                Vast Job Profile<br></br>
                                A B.Com graduate can choose from various roles like accountant, auditor, consultant, company secretary, business analyst, finance officer, sales analyst, tax accountant, stock broker, economist and more.<br></br>
                                Vast Job Areas<br></br>
                                Job areas for commerce graduate are in Business Consultancies, Educational Institutes, Industrial Houses, Public Accounting Firms, Policy Planning, Foreign Trade, Banks, Budget Planning, Inventory Control, Merchant Banking, Marketing, Working Capital Management, Treasury and Forex Department, Investment Banking etc.<br></br>
                                Handsome Salary<br></br>
                                Salaries depend on the nature of the organization and type of job in which student decides to choose a career option. However, it ranges from Rs. 10,000 and Rs. 25,000 per month for a fresh hire. The average salary of a CA in the company is around 5 lakh to 10 lakh per annum.


                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What are the career prospects of doing B.Com?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                The greatest benefit of pursuing B.Com is it offers well-paid jobs. As B.Com offers specialization in different profiles. However, it offers different job profiles like Auditor, Accountant, Business Analyst, Stock Boker, Finance Officer, Finance Consultant, Teacher, Budget Analyst, Finance and Accounting Managers, etc.

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Why people choose MBA after B.Com?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                Specializations in Sync with Commerce: Students will find various specializations to choose from in MBA. MBA Finance is the most popular course for commerce students if they do not want to change their field.<br></br>
                                Learning for Leadership Roles: MBA prepares students to take on leadership roles. Individuals with a basic understanding of commerce, finance and accountancy will excel a lot after knowing the nuances of management.<br></br>
                                Hands-on Industry Experience: MBA students have internships at the end of the first year. Apart from this, they also have various projects which help them understand the workings of the industry.<br></br>
                                Entrepreneur Skills: MBA provides knowledge about running a business or corporation. Students can use this knowledge and skills to run their own business ventures.<br></br>
                                Similar Curriculum: There are many similar subjects between BCom and MBA. Macroeconomics, Business Environment, Computer Applications, E-Commerce, International Business, HR Management are some of the subjects that are present in both BCom and MBA.


                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What are the highest paid jobs in commerce?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                The highest paid jobs in commerce are Actuary, Investment Banker, Budget Analyst, Company Secretary, CEO, Chartered Accountant (CA), Human Resource Manager, Product Manager, and others.
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>


                </div>

                <Footer />

                <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>
                {/* <div className='newenquirediv'><Newenqire /></div> */}
            </div>
        </>
    )
}
