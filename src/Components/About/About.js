import React, { useState } from 'react'
import './about.css'
import Navbar from '../Navbar/Navbar'
import honesty from "../../Assets/about/HONESTY.png"
import integrity from "../../Assets/about/INTEGRITY.png"
import twinCore from "../../Assets/about/TWIN CORE VALUE.png"
import Excellence from "../../Assets/about/newEXCELLENCE.png"
import honest from "../../Assets/about/honest.png"
import RFI from "../../Assets/about/RFI.png"
import leadingChange from "../../Assets/about/LEADING CHANGE.png"
import learning from "../../Assets/about/LEARNING&SHARING.png"
import trust from "../../Assets/about/TRUST.png"
import Teamwork from "../../Assets/about/TEAMWORK.png"
import { FaWhatsapp } from "react-icons/fa";
import bHistory from "../../Assets/about/BriefHistory.png"
import bHistory2 from "../../Assets/about/bHistory2.png"
import Brief from "../../Assets/about/brief2.png"
import Footer from '../footer/Footer'
import ReactCardFlip from 'react-card-flip';
import { Helmet } from "react-helmet";
import Newnavbar from '../newNavbar/Newnavbar'
import LogoContact from '../logoContact/logoContact';
import Newenqire from '../Enquire Form/Newenqire'


export default function About() {
  const [flip, setFlip] = useState(false);
  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);
  const [flip4, setFlip4] = useState(false);
  const [flip5, setFlip5] = useState(false);
  const [flip6, setFlip6] = useState(false);
  const [flip7, setFlip7] = useState(false);
  const [flip8, setFlip8] = useState(false);
  const [flip9, setFlip9] = useState(false);

  const handleMouseEnter = () => {
    setFlip(true);
  };
  const handleMouseLeave = () => {
    setFlip(false);
  };
  const handleMouseEnter1 = () => {
    setFlip1(true);
  };
  const handleMouseLeave1 = () => {
    setFlip1(false);
  };
  const handleMouseEnter2 = () => {
    setFlip2(true);
  };
  const handleMouseLeave2 = () => {
    setFlip2(false);
  };
  const handleMouseEnter3 = () => {
    setFlip3(true);
  };
  const handleMouseLeave3 = () => {
    setFlip3(false);
  };
  const handleMouseEnter4 = () => {
    setFlip4(true);
  };
  const handleMouseLeave4 = () => {
    setFlip4(false);
  };
  const handleMouseEnter5 = () => {
    setFlip5(true);
  };
  const handleMouseLeave5 = () => {
    setFlip5(false);
  };
  const handleMouseEnter6 = () => {
    setFlip6(true);
  };
  const handleMouseLeave6 = () => {
    setFlip6(false);
  };
  const handleMouseEnter7 = () => {
    setFlip7(true);
  };
  const handleMouseLeave7 = () => {
    setFlip7(false);
  };
  const handleMouseEnter8 = () => {
    setFlip8(true);
  };
  const handleMouseLeave8 = () => {
    setFlip8(false);
  };
  const handleMouseEnter9 = () => {
    setFlip9(true);
  };
  const handleMouseLeave9 = () => {
    setFlip9(false);
  };
  const leaveThebox = () => {
    handleMouseLeave()
    handleMouseLeave1()
    handleMouseLeave2()
    handleMouseLeave3()
    handleMouseLeave4()
    handleMouseLeave5()
    handleMouseLeave6()
    handleMouseLeave7()
    handleMouseLeave8()
    handleMouseLeave9()
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us | Nayak's Tutorials, Thane</title>
        <meta name="title" content="About Us | Nayak's Tutorials, Thane" />
        <meta name="description" content="Unveil our journey! Explore our coaching legacy and commitment to academic excellence. Discover the story behind our successful educational history." />

        <link rel="canonical" href="https://nayakstutorials.com/about/" />


        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org/", 
            "@type": "BreadcrumbList", 
            "itemListElement": [{
              "@type": "ListItem", 
              "position": 1, 
              "name": "Home",
              "item": "https://nayakstutorials.com/"  
            },{
              "@type": "ListItem", 
              "position": 2, 
              "name": "About us",
              "item": "https://nayakstutorials.com/about/"  
            }]
          }`}
        </script>

      </Helmet>
      {/* <Navbar /> */}


      <div className="wpfloat">

        <LogoContact />
        <Newnavbar />
        <div className='FirstheadingDiv'>
          <h1>About us</h1>
        </div>
        <div className='psgDiv2 aboutBackground'>

          At Nayak’s Tutorials, we believe that investing in children is akin to investing in nation building. The foundation we give them today will help us put our country on a pedestal. We offer comprehensive test preparatory services to students getting ready for school boards, college and competitive exams like medical, engineering, CA & CS. Nayak’s Tutorials has been committed to the success of students since 2000. Spanning across Maharashtra and Gujarat, we offer a range of services from coaching to training. We have a dedicated team of expert professionals devoted to ensuring success and growth of students.  We have a strong presence of 27 coaching centres with 500+ expert tutors. We now accommodate about 15000 students each year and have nearly 3,00,000 people in our alumni. We have also diversified into pre-school and day-care services via Gaalloping Mindss.
        </div>
        <div className='headingDiv'>
          <h1>Brief History</h1>
        </div>
        <div className='psgDiv'>
          Established in 2000 as a coaching institute by our MD, Mr. Manoj S. Nayak along with unwavering support of his <br></br> brothers –  Mr. Vinod S. Nayak and Mr. Deepak S. Nayak in Mulund, a suburb in Mumbai. They launched this coaching institute with just 50 students to help them maximize their academic potential
        </div>
        <div style={{ display: 'none' }} className='briefHistoryImgdiv'>
          {/* <img id='bHistory' src={bHistory} /> */}
          <img id='bHistory2' src={bHistory2} alt='Growth ofNayaks Tutorials - Coaching Classes in thane' />
          <img id='bHistory' src={Brief} alt='Journey of Nayaks Tutorials - coaching classes in thane' />
        </div>
        <div className='headingDiv'>
          <h1>Values</h1>
        </div>
        <div className='psgDiv'>
          <div className='valueFirst'>
            <h3>vision</h3>
            <p>To enable students to develop confidence, reinforce ideas and become intellectually alive.</p>
          </div>
          <div className='valueSecond'>
            <h3>Mission </h3>
            <p>To become the number one institute in India for guiding and coaching students for being successful in academic as well as in competitive exams.</p>
          </div>
        </div>


        {/* <div className='headingDiv'>
        <h1>Strategy</h1>
      </div>
      <div className='psgDiv'>
        <span style={{ color: '#D00000' }}>Diversified Portfolio:</span>
        <br></br> At Nayak’s Tutorials, we believe that to stay ahead of the game, we need to adapt with changing times. Hence, we venture into newer market segments to cater to a growing clientele.

        <br></br>
        <br></br>
        <span style={{ color: '#D00000' }}>Leveraging Nayak’s Brand: </span>
        <br></br> On account of its consistent focus on customer satisfaction, Nayak’s Tutorials has constantly striven towards enhancing its efficiency and maintaining the repute of the brand.
        <br></br>
        <br></br>
        <span style={{ color: '#D00000' }}>Superior Execution: </span>
        <br></br>  Every activity at Nayak’s Tutorials is meticulously planned and executed with excellent finesse, thanks to its stalwart team of executives, who have never failed to manifest their allegiance towards the organization.
        <br></br>
        <br></br>
        <span style={{ color: '#D00000' }}>Excellent Quality: </span>
        <br></br> At Nayak’s Tutorials, emphasis has always been laid on the provision of excellent quality to the clients and measures are recurrently taken to adhere to this motto.
        <br></br>
        <br></br>
        <span style={{ color: '#D00000' }}>No Franchise Model: </span>
        <br></br> To ensure that the root ideologies of Nayak’s Tutorials are unavailingly applied everywhere, the various coaching centers of the organization are self-run. To ensure that the quality is maintained uniformly at all the centers, the managerial staff at each of these centers are trained suitably to adapt themselves to the set pattern.
      </div> */}

        {/* <div className='headingDiv'>
        <h1>our strength</h1>
      </div>
      <div className='psgDiv'>
        <h3 className='strengthHeading'>Established brand name in academics </h3>
        <h3 className='strengthHeading'>Diversified business model </h3>
        <h3 className='strengthHeading'>Identification of new avenues </h3>
        <h3 className='strengthHeading'>Widespread network  </h3>
        <h3 className='strengthHeading'>Experienced and dedicated team </h3>

      </div> */}

        <div className='headingDiv'>
          <h1>Core values</h1>
        </div>
        <div className='psgDiv'>
          <div className='aboutDiv'>

            <ReactCardFlip isFlipped={flip4} flipDirection="horizontal">
              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
                <img src={honesty}></img>
                <p className='flipfrontPara'>Quality</p>
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} onClick={() => leaveThebox()}>
                {/* <img src={honesty}></img> */}
                <p>Quality</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 10px' }}>Quality is never an accident; it is always the result of high intension, sincere effort, intelligent direction and skillfull execution; it represent the wise choice of many alternatives. we believe that QUALITY makes a lasting IMPRESSION. </p>

              </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip5} flipDirection="horizontal">
              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
                <img src={integrity} alt='Core Values: Integrity in Coaching Classes'></img>
                <p className='flipfrontPara'>INTEGRITY</p>
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5} onClick={() => leaveThebox()}>
                {/* <img src={integrity}></img> */}
                <p>INTEGRITY</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 10px' }}>integrity is doing the right thing, even if nobody is watching.</p>
              </div>
            </ReactCardFlip>


            <ReactCardFlip isFlipped={flip7} flipDirection="horizontal">
              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
                <img src={Excellence}></img>
                <p className='flipfrontPara'>EXCELLENCE</p>
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7} onClick={() => leaveThebox()}>
                {/* <img src={Excellence}></img> */}
                <p>EXCELLENCE</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 10px' }}>Excellence is the unlimited ability to improve the quality of what you have to offer.</p>
              </div>
            </ReactCardFlip>

          </div>

          <div className='aboutDiv'>

            <ReactCardFlip isFlipped={flip8} flipDirection="horizontal">
              <div className='aboutImgDiv hideFlip' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
                <img src={trust} alt='Trust - Why Choose Our Coaching Classes'></img>
                <p className='flipfrontPara'>TRUST</p>
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8} onClick={() => leaveThebox()}>
                <p>TRUST</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 10px' }}>Trust is an essential human value. like oil, trust is the lubrication that brings the members together and keeps team marching ahead to achieve success.</p>
              </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={honest}></img>
                <p className='flipfrontPara'>Honesty</p>
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => leaveThebox()}>
                {/* <img src={honest}></img> */}
                <p>Honesty</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 10px' }}>A honest person is who displays integrity, is genuine and not deceptive or fraudulent. honesty is characterized by truth and sincerity.</p>
              </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip1} flipDirection="horizontal">
              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                <img src={RFI}></img>
                <p className='flipfrontPara'>Respect for Individual</p>
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} onClick={() => leaveThebox()}>
                {/* <img src={RFI}></img> */}
                <p>Respect for Individual</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 10px' }}>Respect for ourselves guides our morals; respect for others guides our manners.</p>
              </div>
            </ReactCardFlip>

          </div>

          <div className='aboutDiv'>

            <ReactCardFlip isFlipped={flip2} flipDirection="horizontal">
              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                <img src={leadingChange}></img>
                <p className='flipfrontPara'>LEADING CHANGE</p>
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} onClick={() => leaveThebox()}>
                {/* <img src={leadingChange}></img> */}
                <p>LEADING CHANGE</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 10px' }}>Change is hard because people overestimate the value of what they have and underestimate the value of what they may gain by giving that up.</p>
              </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip3} flipDirection="horizontal">
              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                <img src={learning}></img>
                <p className='flipfrontPara'>LEARNING & SHARING</p>
                {/* <h3>INTEGRITY</h3>
              <p className='IntegrityLine'>We hold ourselves to the highest ethical standards in all that we do.</p> */}
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} onClick={() => leaveThebox()}>
                {/* <img src={learning}></img> */}
                <p>LEARNING & SHARING</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 10px' }}>Thousands of candle can be lit from a single candle,and the life of the candle will not be shortened. happiness never decreases by being shared. you can teach a student a lesson for a day; but if you can teach him to learn by creating curiosity, he will continue the learning process as long as he lives.</p>
              </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip9} flipDirection="horizontal">
              <div className='aboutImgDiv hideFlip' onMouseEnter={handleMouseEnter9} onMouseLeave={handleMouseLeave9}>
                <img src={Teamwork} alt='The Importance of Teamwork in Studying'></img>
                <p className='flipfrontPara'>TEAMWORK</p>
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter9} onMouseLeave={handleMouseLeave9} onClick={() => leaveThebox()}>
                {/* <img src={Teamwork}></img> */}
                <p>TEAMWORK</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 10px' }}>Teamwork is the ability to work together towards a common vision. the ability to direct individual accomplishments towards organizational objectives. it is the fuel that allows common people to attain uncommon results.</p>
              </div>
            </ReactCardFlip>

          </div>


          {/* mobile responsive  */}
          <div className='aboutDiv2'>

            <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={honest}></img>
                <p className='flipfrontPara'>Honesty</p>
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => leaveThebox()}>
                {/* <img src={honest}></img> */}
                <p>Honesty</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 20px' }}>A honest person is who displays integrity, is genuine and not deceptive or fraudulent. honesty is characterized by truth and sincerity.</p>

              </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip1} flipDirection="horizontal">
              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                <img src={RFI}></img>
                <p className='flipfrontPara'>Respect for Individual</p>
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} onClick={() => leaveThebox()}>
                {/* <img src={RFI}></img> */}
                <p>Respect for Individual</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 20px' }}>Respect for ourselves guides our morals; respect for others guides our manners.</p>
              </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip2} flipDirection="horizontal">
              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                <img src={leadingChange}></img>
                <p className='flipfrontPara'>LEADING CHANGE</p>
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} onClick={() => leaveThebox()}>
                {/* <img src={leadingChange}></img> */}
                <p>LEADING CHANGE</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 20px' }}>Change is hard because people overestimate the value of what they have and underestimate the value of what they may gain by giving that up.</p>
              </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip3} flipDirection="horizontal">
              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                <img src={learning}></img>
                <p className='flipfrontPara'>LEARNING & SHARING</p>
                {/* <h3>INTEGRITY</h3>
              <p className='IntegrityLine'>We hold ourselves to the highest ethical standards in all that we do.</p> */}
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} onClick={() => leaveThebox()}>
                {/* <img src={learning}></img> */}
                <p>LEARNING & SHARING</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 20px' }}>Thousands of candle can be lit from a single candle,and the life of the candle will not be shortened. happiness never decreases by being shared. you can teach a student a lesson for a day; but if you can teach him to learn by creating curiosity, he will continue the learning process as long as he lives.</p>
              </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip9} flipDirection="horizontal">
              <div className='aboutImgDiv hideFlip2' onMouseEnter={handleMouseEnter9} onMouseLeave={handleMouseLeave9}>
                <img src={Teamwork} alt='The Importance of Teamwork in Studying'></img>
                <p className='flipfrontPara'>TEAMWORK</p>
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter9} onMouseLeave={handleMouseLeave9} onClick={() => leaveThebox()}>
                {/* <img src={Teamwork}></img> */}
                <p>TEAMWORK</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 20px' }}>Teamwork is the ability to work together towards a common vision. the ability to direct individual accomplishments towards organizational objectives. it is the fuel that allows common people to attain uncommon results.</p>
              </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip4} flipDirection="horizontal">
              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>
                <img src={honesty}></img>
                <p className='flipfrontPara'>Quality</p>
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} onClick={() => leaveThebox()}>
                {/* <img src={honesty}></img> */}
                <p>Quality</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 20px' }}>Quality is never an accident; it is always the result of high intension, sincere effort, intelligent direction and skillfull execution; it represent the wise choice of many alternatives. we believe that QUALITY makes a lasting IMPRESSION.</p>
              </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip5} flipDirection="horizontal">
              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>
                <img src={integrity} alt='Core Values: Integrity in Coaching Classes'></img>
                <p className='flipfrontPara'>INTEGRITY</p>
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5} onClick={() => leaveThebox()}>
                {/* <img src={integrity}></img> */}
                <p>INTEGRITY</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 20px' }}>integrity is doing the right thing, even if nobody is watching.</p>
              </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip7} flipDirection="horizontal">
              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7}>
                <img src={Excellence}></img>
                <p className='flipfrontPara'>EXCELLENCE</p>
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter7} onMouseLeave={handleMouseLeave7} onClick={() => leaveThebox()}>
                {/* <img src={Excellence}></img> */}
                <p>EXCELLENCE</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 20px' }}>Excellence is the unlimited ability to improve the quality of what you have to offer.</p>
              </div>
            </ReactCardFlip>

            <ReactCardFlip isFlipped={flip8} flipDirection="horizontal">
              <div className='aboutImgDiv hideFlip2' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8}>
                <img src={trust} alt='Trust - Why Choose Our Coaching Classes'></img>
                <p className='flipfrontPara'>TRUST</p>
              </div>

              <div className='aboutImgDiv' onMouseEnter={handleMouseEnter8} onMouseLeave={handleMouseLeave8} onClick={() => leaveThebox()}>
                {/* <img src={trust}></img> */}
                <p>TRUST</p>
                <p style={{ fontSize: "12px", textTransform: 'capitalize', padding: '0px 20px' }}>Trust is an essential human value. like oil, trust is the lubrication that brings the members together and keeps team marching ahead to achieve success.</p>
              </div>
            </ReactCardFlip>
          </div>

        </div>
        <Footer />

        <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>

        {/* <div className='newenquirediv'><Newenqire /></div> */}

      </div>
    </>

  )
}
