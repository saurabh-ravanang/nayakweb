import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import "./mainFaq.css";
import { Helmet } from "react-helmet";
import LogoContact from '../logoContact/logoContact';
import Newnavbar from '../newNavbar/Newnavbar';
import { FaWhatsapp } from "react-icons/fa";
import Newenqire from '../Enquire Form/Newenqire';

export default function MainFaq() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Get Answers to All Your Tuitions & Exam Related Queries</title>
                <meta name="title" content="Get Answers to All Your Tuitions & Exam Related Queries" />
                <meta name="description" content="Find answers to all your tuition and exam-related queries. Get expert guidance and support to help you excel in your studies and exams." />

                <link rel="canonical" href="https://nayakstutorials.com/mainfaq/" />


                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [{
                            "@type": "Question",
                            "name": "What competitive exams does Nayak’s Tutorials covers?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We have excellent track record in competitive exams as well. We train students to ace Medical, Engineering, CA & CS."
                            }
                        }, {
                            "@type": "Question",
                            "name": "Which month does the admission begin and when does the batch starts?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We normally begin admission once all the results are out. Expect this to be around July every year. the batch begins when the academic year begins except for 10th standard, wherein we begin the batches during the summer holidays."
                            }
                        }, {
                            "@type": "Question",
                            "name": "In which grade should a student start Nayak’s Tutorials?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "We have a pre-school at Nayak’s Tutorials that takes admission for Playgroup or Nursery when your children are one and a half years old or two years old. We also have a day care here that offers space and time up to 12 years old. But the real training begins when your child is in the 8th standard. This is when all the boards start to build a base. Hence, it is ideal to enroll in the 8th standard itself. However, we have many students who enroll in the 9th as well as 10th standard. Even they are able to benefit from our classes. But many feel that had they enrolled in the 8th standard, they would have benefitted more."
                            }
                        }]
                    }`}
                </script>

            </Helmet>
            {/* <Navbar /> */}

            <div className="wpfloat">


                <LogoContact />
                <Newnavbar />
                <div className='MainFaq'>

                    <h3 className='headingFaq'>FAQ'S</h3>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    In which grade should a student start Nayak’s Tutorials?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                We have a pre-school at Nayak’s Tutorials that takes admission for Playgroup or Nursery when your children are one and a half years old or two years old. We also have a day care here that offers space and time up to 12 years old. But the real training begins when your child is in the 8th standard. This is when all the boards start to build a base. Hence, it is ideal to enroll in the 8th standard itself. However, we have many students who enroll in the 9th as well as 10th standard. Even they are able to benefit from our classes. But many feel that had they enrolled in the 8th standard, they would have benefitted more.

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Why should I enroll in Nayak’s Tutorials?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                Apart from the fact that we have excellent track record and have been proud mentors of toppers all across the boards, we have many more things that we boast of. <br />
                                Student-first policy – We always prioritize our students and their progress. Everything else comes later. <br />
                                ISO 9001:2015 Certified Institution – We not only have an impeccable record we are also certified. <br />
                                All India Rankers for over 20 years – This, we are mighty proud of. <br />
                                23 years of trust – We completed 23 years since inception in 2023. And we want to continue this legacy for a long time. <br />
                                3,00,000+ Alumni – Apart from the toppers, we have a huge list of students who have really benefitted from our coaching. <br />
                                Blended Teaching Method – This is not just the need of the hour but also the best form of imparting knowledge. <br />
                                State Toppers for more than a decade – Apart from helping students ace the ICSE and CBSE boards, we also help students crack the SSC board. <br />
                                520+ dedicated hands – Thanks to the teaching and non-teaching staff we function in perfect synchrony. <br />



                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Is the Nayak’s Tutorials syllabus similar to the school/college?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                Yes. Since we are helping students prepare for boards, we try and teach the same topics that they learn in school or college. This helps them retain and understand the concepts better.


                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How can I track my child’s progress?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                We understand that the parents are also tensed when it comes to boards. We occasionally meet with the parents and keep them updated about their child’s progress. We also communicate with them via email if necessary.

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Will you be opening branches in other states as well?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                Currently, we are quite happy with the branches we have and definitely have expansion on our mind. However, we would like to stick to Maharashtra and Gujarat at the moment. We will definitely open our branches in other states in the coming years.


                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>


                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Do you provide counselling related to students' problems and career planning?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                Yes. We believe that counselling is a very important aspect of student life. They face many issues apart from career planning. We try and give them counselling in as many areas as we can.


                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What competitive exams does Nayak’s Tutorials covers?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                We have excellent track record in competitive exams as well. We train students to ace Medical, Engineering, CA & CS.


                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Which month does the admission begin and when does the batch starts?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                We normally begin admission once all the results are out. Expect this to be around July every year. the batch begins when the academic year begins except for 10th standard, wherein we begin the batches during the summer holidays.

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Does Nayak’s Tutorials have an online session as well?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                No. We do not have any online sessions as of now.


                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Is there a refund policy, if I have not been able to attend the classes?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                Yes. We have a refund policy if there is a genuine reason the student wants to opt out, you can do so.


                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What are the different ways I can pay for my admission?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                We accept most forms of payment like cheque deposit, online transfer or even payment by debit card or credit card.
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
