import React from 'react'
import './enginnering.css'
import mainImg from "../../Assets/faq/medical_engineering.png"
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


export default function Enginnering() {
  return (
    <>
      <Navbar />
      <div className='enginnerTopDiv'>
        <div className='enginnerMain'>
          <div className='enginnerLeftDiv'>
            <img src={mainImg} />
          </div>
          <div className='enginnerRightDiv'>
            <h3>Engineering & Medical</h3>
            <p>Students who wish to appear for engineering or medical entrance exams, can begin studying immediately after 10th standard to ensure they have a strong foundation. Remember, that most of what you study in 11th and 12th std., come handy while preparing for engineering and medical entrance exams. <br></br>With assistance from Nayak’s Tutorials, you can prepare well and ensure you reserve a seat for yourself. We help you create a study-schedule, help you focus on topics you are weaker in and give you enough practice before you sit for your entrance. </p>
          </div>
        </div>
        <div className='enginnerSeconDiv'>
          <h1>Here are some tips from Nayak’s Tutorials for getting ready for medical and engineering entrance exam.</h1>

          <div className='enginnerSeconMainDiv'>
            <div className='enginnerMultipleText'>
              <div className='enginnerMultipleInnerDiv'>
                <img src={dot} />
                <h3>Start Early</h3>
              </div>
              <p>Avoid last-minute stress and begin early. Create a schedule that allots enough time for each subject</p>
            </div>
            <div className='enginnerMultipleText'>
              <div className='enginnerMultipleInnerDiv'>
                <img src={dot} />
                <h3>Identify your strength and weakness</h3>
              </div>
              <p>Once you know what subjects you are weak in, you can pay more attention to it and improve in those areas</p>
            </div>
            <div className='enginnerMultipleText'>
              <div className='enginnerMultipleInnerDiv'>
                <img src={dot} />
                <h3>Know the syllabus</h3>
              </div>
              <p>Most questions come from the 11th & 12th syllabus, so if you’ve studied well for your exams, you should not worry</p>
            </div>
            <div className='enginnerMultipleText'>
              <div className='enginnerMultipleInnerDiv'>
                <img src={dot} />
                <h3>Know the exam format</h3>
              </div>
              <p>Take time in understanding the kind of questions like multiple choice, essay type, and know the marking scheme as well as the time limits</p>
            </div>
            <div className='enginnerMultipleText'>
              <div className='enginnerMultipleInnerDiv'>
                <img src={dot} />
                <h3>Break it down</h3>
              </div>
              <p>We know that the portion is not small. Break it down into smaller sections and topics. And focus on any one at a time</p>
            </div>
            <div className='enginnerMultipleText'>
              <div className='enginnerMultipleInnerDiv'>
                <img src={dot} />
                <h3>Organize</h3>
              </div>
              <p>Keep your study materials, notes, other books close at hand. This will save you time when revising and help you locate important information. Use folders, color-coding or digital notepads to ensure your study material is well structured</p>
            </div>
            <div className='enginnerMultipleText'>
              <div className='enginnerMultipleInnerDiv'>
                <img src={dot} />
                <h3>Practice test papers</h3>
              </div>
              <p>Solving questions papers from yesteryears will help you familiarize with the exam pattern and help you your weak points</p>
            </div>
            <div className='enginnerMultipleText'>
              <div className='enginnerMultipleInnerDiv'>
                <img src={dot} />
                <h3>Take breaks</h3>
              </div>
              <p>Prolonged hours of studying can lead to mental fatigue and reduced productivity. Take short breaks – drink water, stretch, do a quick physical activity</p>
            </div>
            <div className='enginnerMultipleText'>
              <div className='enginnerMultipleInnerDiv'>
                <img src={dot} />
                <h3>Do active learning</h3>
              </div>
              <p>Reading or memorizing is not a great method. Instead, summarize in your own words, create diagrams or mind maps or even explain it to someone else</p>
            </div>
            <div className='enginnerMultipleText'>
              <div className='enginnerMultipleInnerDiv'>
                <img src={dot} />
                <h3>Seek clarification</h3>
              </div>
              <p>The teachers at Nayak’s Tutorials are always there to clear your doubts or help you with a question. Reach out to us.</p>
            </div>
            <div className='enginnerMultipleText'>
              <div className='enginnerMultipleInnerDiv'>
                <img src={dot} />
                <h3>Stay healthy</h3>
              </div>
              <p>This is a vital one. You must take care of your physical and mental well-being during exams. Get enough sleep, eat nutritious meals, limit caffeine and maintain a positive mindset</p>
            </div>
            <div id='engHidden'  className='enginnerMultipleText'>
              <div className='enginnerMultipleInnerDiv'>
                <img src={dot} />
                <h3>Stay healthy</h3>
              </div>
              <p>This is a vital one. You must take care of your physical and mental well-being during exams. Get enough sleep, eat nutritious meals, limit caffeine and maintain a positive mindset</p>
            </div>
          </div>
        </div>
      </div>
      <div className='enginnerLastDiv'>
        <h3 className='enginnerFaq'>FAQ's</h3>
        <Accordion allowMultipleExpanded={false} allowZeroExpanded>
          <AccordionItem >
            <AccordionItemHeading>
              <AccordionItemButton>
                Should I go for engineering or medicine?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>

              This completely depends on the aptitude of the student as well as their interest levels. Remember, that you may feel you will begin earning earlier as an engineer and with an MBBS, internship and more professional experience, you may take time to establish yourself.


            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultipleExpanded={false} allowZeroExpanded>
          <AccordionItem >
            <AccordionItemHeading>
              <AccordionItemButton>
                Which is easier medical or engineering?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>

              The skill sets are quite different for both these streams – you need to remember so much more for a medical entrance and for engineering, you need to have advanced thinking skills.

            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultipleExpanded={false} allowZeroExpanded>
          <AccordionItem >
            <AccordionItemHeading>
              <AccordionItemButton>
                What are the advantages of both streams?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>

              Both streams may begin from science, but they are both very different. Here are some advantages mentioned:<br></br>
              Medical <br></br>
              •	Lucrative Wages <br></br>
              •	High Employment Scope <br></br>
              •	Travel Opportunities <br></br>
              •	Sense Of Fulfilment <br></br>
              •	Job Stability
              <br></br> <br></br>
              Engineering <br></br>
              •	Employability <br></br>
              •	Potential For A High Salary <br></br>
              •	International Stage Opportunities <br></br>
              •	Better The World <br></br>
              •	Use Imagination



            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultipleExpanded={false} allowZeroExpanded>
          <AccordionItem >
            <AccordionItemHeading>
              <AccordionItemButton>
              Which profession has a better pay package?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>

            Both streams promise good income but getting established as a doctor takes much longer. 

            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultipleExpanded={false} allowZeroExpanded>
          <AccordionItem >
            <AccordionItemHeading>
              <AccordionItemButton>
              Which profession will give me inner satisfaction? 
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>

            In a medical profession, you may be saving lives and this feels like more fulfilling. But even an engineer’s life is full of challenges. They feel satisfied when they can solve real-life problems for people. 

            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowMultipleExpanded={false} allowZeroExpanded>
          <AccordionItem >
            <AccordionItemHeading>
              <AccordionItemButton>
              In which profession can I get a job quickly? 
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>

            While the medical profession takes time in establishing you, most medical students get placed at a hospital early and get to establish themselves. Whereas for engineers, there is a huge competition that you have to face for getting placement.  

            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>


      </div>
      <Footer />
    </>
  )
}
