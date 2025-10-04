import React from 'react'
import './faq.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import mainImg from "../../Assets/faq/mainimg.png"
import dot from "../../Assets/faq/dot.png"
import clarity from "../../Assets/faq/clarity.png"
import practice from "../../Assets/faq/Practice.png"
import Revise from "../../Assets/faq/Revise well.png"
import selfStudy from "../../Assets/faq/Self-study.png"
import regular from "../../Assets/faq/regular.png"
import testPaper from "../../Assets/faq/test papers.png"
import sleep from "../../Assets/faq/sleep.png"
import eat from "../../Assets/faq/eat.png"
import calm from "../../Assets/faq/calm.png"

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

export default function Faq() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Master 11th & 12th Board : Expert Coaching for Science & Commerce</title>
        <meta name="title" content="Master 11th & 12th Board : Expert Coaching for Science & Commerce" />
        <meta name="description" content="Elevate learning for grades 11 and 12! Join our coaching classes for comprehensive curriculum support, expert guidance, and exam success. Enroll now" />
        <link rel="canonical" href="https://nayakstutorials.com/eleven&Twelth/" />


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
              "name": "11 & 12 coaching",
              "item": "https://nayakstutorials.com/eleven&Twelth/"
            }]
          }`}
        </script>

      </Helmet>
      {/* <Navbar /> */}

      <div className="wpfloat">
        <LogoContact />
        <Newnavbar />

        <div className='elevenTopDiv'>

          <div className='breadcrumbNayak' style={{ marginBottom: "10px" }}><a href='/'>Home »</a><a href='/'>Our Offerings »</a><a>College »</a><a>11<sup style={{ textTransform: 'lowercase' }}>th</sup>-12<sup style={{ textTransform: 'lowercase' }}>th</sup> Science & Commerce</a></div>

          <div className='elevenMain'>
            <div className='elevenLeftDiv'>
              <img src={mainImg} />
            </div>
            <div className='elevenRightDiv'>
              <h3>11<sup style={{ textTransform: 'lowercase' }}>th</sup>-12<sup style={{ textTransform: 'lowercase' }}>th</sup> SCIENCE & COMMERCE</h3>
              <p>Many students feel that they can rest after the 10th standard. But on the contrary, you need to maintain your percentage, make better decisions for your future and remain focused. It is here that Nayak’s Tutorials steps in and helps you by understanding your strengths and weaknesses. We help each individual by helping them cover the syllabus, understand the concepts and practice for their exams. <br></br> Whether you have taken science or commerce, we ensure you get the best teachers, comprehensive study material and a schedule to study and give your best during the board exams. </p>
            </div>
          </div>
          <div className='ElevenSeconDiv'>
            <h1>Why choose Nayak’s Tutorials  to be your coaching class?</h1>

            <div className='ElevenSeconMainDiv'>
              <div className='elevenMultipleText'>
                <div className='elevenMultipleInnerDiv'>
                  <img src={dot} />
                  <h3>Simplify learning</h3>
                </div>
                <p>With the help of experts and their time-tested methodology, we help you with detailed and conceptual learning</p>
              </div>
              <div className='elevenMultipleText'>
                <div className='elevenMultipleInnerDiv'>
                  <img src={dot} />
                  <h3>Study material</h3>
                </div>
                <p>We help you with in-depth study with our comprehensive material, tech-based learning, and assignments that help you align with the latest exam pattern</p>
              </div>
              <div className='elevenMultipleText'>
                <div className='elevenMultipleInnerDiv'>
                  <img src={dot} />
                  <h3>Regular monitoring</h3>
                </div>
                <p>Along with proper study sessions, we also give you regular tests and assignments to measure your improvement</p>
              </div>
              <div className='elevenMultipleText'>
                <div className='elevenMultipleInnerDiv'>
                  <img src={dot} />
                  <h3>Competitive vibe</h3>
                </div>
                <p>This is a result of students, our focus and results that we get each year. It keeps the competitive vibe on all the time</p>
              </div>
              <div className='elevenMultipleText'>
                <div className='elevenMultipleInnerDiv'>
                  <img src={dot} />
                  <h3>Limited batch size</h3>
                </div>
                <p>We ensure that each teacher can focus on every individual and hence we have a limited number of seats.</p>
              </div>
              <div className='elevenMultipleText'>
                <div className='elevenMultipleInnerDiv'>
                  <img src={dot} />
                  <h3>Proven results</h3>
                </div>
                <p>Year on year, we have proved that Nayak’s Tutorials can help students achieve their dreams.</p>
              </div>
            </div>
          </div>

          <div className='elevenThirdDiv'>
            <h1>Tips for 11<sup style={{ textTransform: 'lowercase' }}>th</sup> & 12<sup style={{ textTransform: 'lowercase' }}>th</sup> std students</h1>

            <div className='elevenMainTips'>
              <div className='elevenTipsDiv'>
                <div className='eleventipsImgDiv'>
                  <img src={clarity} />
                </div>
                <div className='eleventipsInner'>
                  <h3>Conceptual clarity</h3>
                  <p>If you are clear with the basic concepts, you can answer any question you come across. With this belief, we spend more time in ensuring our students have understood the concepts.</p>
                </div>
              </div>
              <div className='elevenTipsDiv'>
                <div className='eleventipsImgDiv'>
                  <img src={practice} />
                </div>
                <div className='eleventipsInner'>
                  <h3>Practice</h3>
                  <p>They say practice makes you perfect. We say, that’s absolutely right. We have tests and assignments at regular intervals so that our students are always well prepared.</p>
                </div>
              </div>
              <div className='elevenTipsDiv'>
                <div className='eleventipsImgDiv'>
                  <img src={regular} alt='time management guidance for students' />
                </div>
                <div className='eleventipsInner'>
                  <h3>Be regular</h3>
                  <p>Whether it’s your college or your classes, please be regular. This helps you revise the topics and gives you the option of asking questions and clearing your doubts.</p>
                </div>
              </div>
              <div className='elevenTipsDiv'>
                <div className='eleventipsImgDiv'>
                  <img src={selfStudy} />
                </div>
                <div className='eleventipsInner'>
                  <h3>Self-study</h3>
                  <p>Even if you’re 100% attentive at your college and classes, you will still need to read and try solving questions on your own. This helps you revise it as well as remember what you’ve been taught. You can make your own short notes, add sticky notes, remembering techniques, charts and more.</p>
                </div>
              </div>
              <div className='elevenTipsDiv'>
                <div className='eleventipsImgDiv'>
                  <img src={Revise} />
                </div>
                <div className='eleventipsInner'>
                  <h3>Revise well</h3>
                  <p>This is extremely important as it will help you retain most of what you’ve studied.</p>
                </div>
              </div>
              <div className='elevenTipsDiv'>
                <div className='eleventipsImgDiv'>
                  <img src={testPaper} />
                </div>
                <div className='eleventipsInner'>
                  <h3>Solve test papers</h3>
                  <p>Whether it’s the earlier years’ test papers or the ones that we provide at Nayak’s Tutorials, invest time in solving these. These help you practice for the final exams and also help you manage time during the exams.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='elevenfourthTips'>
          <div className='elevenfourthInner'>
            <h3>Tips for exam days</h3>
            <div className='elevenFourthMain'>
              <div className='elevenFourthRed'>
                <div className='elevenRedBox'>
                  <div className='redBoxxImgdiv'><img src={sleep} alt='Exam Day Tip: Get Adequate Sleep' /></div>
                </div>
                <p className='redBoxxImghead'>Sleep Well</p>
              </div>
              <div className='elevenFourthRed'>
                <div className='elevenRedBox'>
                  <div className='redBoxxImgdiv'><img src={eat} alt='Exam Day Tip: Eat Healthy Food' /></div>
                </div>
                <p className='redBoxxImghead'>Eat healthy food</p>
              </div>
              <div className='elevenFourthRed'>
                <div className='elevenRedBox'>
                  <div className='redBoxxImgdiv'><img src={calm} alt='Exam Day Tip: Stay Calm, Composed, and Focused' /></div>
                </div>
                <p className='redBoxxImghead'>Be calm, composed  & focused</p>
              </div>
            </div>
          </div>
        </div>

        <div className='elevenLastDiv'>
          <h3 className='elevenFaq'>FAQ's</h3>
          <Accordion allowMultipleExpanded={false} allowZeroExpanded>
            <AccordionItem >
              <AccordionItemHeading>
                <AccordionItemButton>
                  Is PCM tougher or PCB?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>

                Each student is different. For some logical thinking comes easily, while some have amazing memory. You must see your strengths as well as interest and then choose a field that you want to continue in the future.
                Don’t worry about scope, all streams have immense scope to do well and have a fruitful career these days.


              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultipleExpanded={false} allowZeroExpanded>
            <AccordionItem >
              <AccordionItemHeading>
                <AccordionItemButton>
                  Which stream is in more demand – science or commerce?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>

                Both science and commerce streams have a good career scope and offers high salary. The trending jobs in the commerce stream are in the banking, finance and business sectors. In the science stream, the trending ones are in the technology, coding and AI sector.

              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultipleExpanded={false} allowZeroExpanded>
            <AccordionItem >
              <AccordionItemHeading>
                <AccordionItemButton>
                  What is the scope in commerce stream?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>

                Commerce field is diverse and is growing at a high speed. If you take up commerce in 11th & 12th, there are many career options like
                CA,
                CMA,
                CS,
                CFA,
                Business Analyst,
                Digital Marketing,
                Investment Banker,
                Business Consultant.


              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <Accordion allowMultipleExpanded={false} allowZeroExpanded>
            <AccordionItem >
              <AccordionItemHeading>
                <AccordionItemButton>
                  What is the scope in science stream?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>

                Traditionally, science stream used to lead students to either engineering, medical or research-based careers. But today, there are many options, thanks to, technology like machine learning, AI, robotics, Data science and more. After the pandemic, demands in medical industry are also rising. Here is a list of some career options:
                Engineering,
                Medical,
                Nursing,
                Architecture,
                Information Technology,
                Data Science,
                AI and Robotics.


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
      </div >
    </>
  )
}
