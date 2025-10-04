import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import './career.css'
import girlImg from '../../Assets/career/young-tender-curly-girl-holding-documents 1.png'
import ReactCardFlip from 'react-card-flip';
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
import Modal from 'react-modal';
import { Helmet } from "react-helmet";
import Newnavbar from '../newNavbar/Newnavbar'
import LogoContact from '../logoContact/logoContact'
import axios from 'axios';
import { FaWhatsapp } from "react-icons/fa";
import Newenqire from '../Enquire Form/Newenqire'


function Career() {

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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState()
  const [resumefile, setResumefile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResumefile(file);
    console.log(file, "sklnfnd"); // Log immediately after selecting the file
  };


  // const handleEmailSubmission = (e) => {
  //   if (name && number && email) {
  //     const mailtoLink = `mailto:hr@nayakstutorials.com?subject=Job Application&body=Name: ${name}%0A
  //       Phone Number: ${number}%0A
  //       Email: ${email}%0A
  //       Number: ${number}%0A`


  //     window.location.href = mailtoLink;
  //   } else {
  //     alert("Please fill in all required fields before sending the email.");
  //   }
  // }

  // const handleEmailSubmission = async (e) => {
  //   e.preventDefault(); // Prevent default form submission

  //   // Check if all fields are filled out
  //   if (name && email && number ) {
  //     // const formData = new FormData();
  //     // formData.append('name', name);
  //     // formData.append('email', email);
  //     // formData.append('number', number);
  //     // // formData.append('resume', resumefile); 
  //     // console.log("asbkbsa",formData)

  //     const formData = {
  //       name : name,
  //       email: email,
  //       number: number
  //     }

  //     try {
  //       // Send form data to the API endpoint
  //       const response = await axios.post('https://nayakstutorials.com/api/email.php', formData, {
  //         headers: {
  //           'Content-Type': 'multipart/form-data', // Ensure the request is made as a multipart/form-data
  //         },
  //       });

  //       // Check the API response for success or failure
  //       if (response.data.status === 'success') {
  //         alert('Your application has been submitted successfully!');
  //         // Optionally, clear form fields after submission
  //         setName('');
  //         setEmail('');
  //         setNumber('');
  //         setResumefile(null);
  //       } else {
  //         alert('Something went wrong. Please try again.');
  //       }
  //     } catch (error) {
  //       console.error('Error submitting form data:', error);
  //       alert('Error while submitting the form. Please try again.');
  //     }
  //   } else {
  //     alert('Please fill in all required fields and upload a resume.');
  //   }
  // };



  const handleEmailSubmission = async (e) => {
    e.preventDefault();

    if (name && number && email) {
      // FormData for handling file upload
      const formData = new FormData();
      formData.append("full_name", name);
      formData.append("email", email);
      formData.append("number", number);
      if (resumefile) {
        formData.append("resume", resumefile); // Append the file
      }
      try {
        const res = await fetch('https://nayakstutorials.com/api/email.php', {
          method: 'POST',
          body: formData, // Send the FormData as the body
        });

        const result = await res.json();
        console.log("result", result);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      alert("Please fill in all required fields before sending the email.");
    }
  };



  const handleEmailSubmission3 = async (e) => {
    e.preventDefault();
    setIsOpen(true);


    if (name && number && email) {
      // FormData for handling file upload
      const formData = new FormData();
      formData.append("full_name", name);
      formData.append("email", email);
      formData.append("number", number);
      if (resumefile) {
        formData.append("resume", resumefile); // Append the file
      }
      try {
        const res = await fetch('https://nayakstutorials.com/api/email.php', {
          method: 'POST',
          body: formData, // Send the FormData as the body
        });

        const result = await res.json();
        console.log("result", result);
      } catch (err) {
        console.log(err.message);
      }
    } else {
      alert("Please fill in all required fields before sending the email.");
    }
  };




  // const handleEmailSubmission2 = (e) => {
  //   setIsOpen(true);
  //   if (name && number && email) {
  //     const mailtoLink = `mailto:hr@nayakstutorials.com?subject=Job Application&body=Name: ${name}%0A
  //       Phone Number: ${number}%0A
  //       Email: ${email}%0A
  //       Number: ${number}%0A`


  //     window.location.href = mailtoLink;
  //   } else {
  //     alert("Please fill in all required fields before sending the email.");
  //   }
  // }

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

  let subtitle;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      // border: '2px solid black',
      borderRadius: '20px'
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Explore Career Opportunities at Nayak's Tutorials</title>
        <meta name="title" content="Explore Career Opportunities at Nayak's Tutorials" />
        <meta name="description" content="Explore opportunities, growth, and a vibrant work culture. Join us in shaping success!" />
        <link rel="canonical" href="https://nayakstutorials.com/career/" />


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
              "name": "Careers",
              "item": "https://nayakstutorials.com/career/"
            }]
          }`}
        </script>

      </Helmet>
      {/* <Navbar /> */}

      <div className="wpfloat">
        <LogoContact />
        <Newnavbar />


        <div className='career'>
          <div className='girlImg'>
            <img className='girlMainImage' src={girlImg} alt='Prepare for 11th and 12th Grade Science & Commerce Exams with Nayak’s Tutorials' />
          </div>
          <div className='girlImg2'>
            <h3 className='careerHeading'>Careers</h3>
            <p className='careerText'>The world of education and learning is changing much with technological advances, the NEP in work and mindsets of children and parents. We, at Nayak’s Tutorials, are also adapting and changing with the times.  </p>
          </div>
        </div>




        <div className='jobForm'>
          <div className='jobHeading'>
            <h3 style={{ textTransform: 'uppercase' }}>Join our learning tribe </h3>
          </div>

          <div className='jobFormSubmit'>
            <form action="https://nayakstutorials.com/api/email.php" method="POST" enctype="multipart/form-data" onSubmit={handleEmailSubmission}>
              {/* <form onSubmit={handleEmailSubmission}> */}
              <input onChange={(e) => setName(e.target.value)} name='full_name' className='enterFullName' type='text' placeholder='Enter Full Name' />
              <div className='mailNumber'>
                <input onChange={(e) => setEmail(e.target.value)} name='email' className='entermail' type='text' placeholder='Enter Email' />
                <input onChange={(e) => setNumber(e.target.value)} name='number' className='entermail' type='text' maxLength={10} placeholder='Enter Contact Number' />
              </div>
              <div className='mailNumber'>
                {/* <div style={{ display: 'flex', alignItems: 'center', marginTop: "20px" }}>
                <h6 style={{ color: 'white', width: '50%' }}>Upload Resume :</h6>
                <input className='entermail23' type='File' placeholder='Upload Resume' />
              </div> */}

                <div className='uploadResume2' >
                  <div className='carreerResume2'><label className='label' for="upload-photo">Upload Resume</label>
                    <input id="upload-photo" type='file' name='resume' style={{ display: 'none' }} onChange={handleFileChange} />
                  </div>
                </div>
                <div className='entermail2'>
                  <button type='submit' className='sendButton'>Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className='opportunities'>
          <div className='currentOpening'>
            <h3 className='currentOpeninghEADING'>CURRENT OPENINGS</h3>
          </div>
          {/* <div className='currentOpening2'>
          <p className='openingTeacher'>HR Assistant</p>
          <div className='openingDetails'>
            <button onClick={openModal} className='submitOpeing'>Apply</button>
          </div>
        </div>
        <hr className='hrline' style={{ color: '#D00000', margin: '0px' }} /> */}
          <div className='currentOpening2'>
            <p className='openingTeacher'>Course Co-ordinator</p>
            {/* <p>Thane | min 3-4 yrs Experience</p> */}
            <div className='openingDetails'>
              {/* <a style={{ marginBottom: '0px' }}> View Details</a> */}
              <button onClick={openModal} className='submitOpeing'>Apply</button>
            </div>
          </div>
          <hr className='hrline' style={{ color: '#D00000', margin: '0px' }} />
          <div className='currentOpening2'>
            <p className='openingTeacher'>admin staff</p>
            {/* <p>Thane | min 3-4 yrs Experience</p> */}
            <div className='openingDetails'>
              {/* <a style={{ marginBottom: '0px' }}> View Details</a> */}
              <button onClick={openModal} className='submitOpeing'>Apply</button>
            </div>
          </div>
          <hr className='hrline' style={{ color: '#D00000', margin: '0px' }} />
          <div className='currentOpening2'>
            <p className='openingTeacher'>academic counselor</p>
            {/* <p>Thane | min 3-4 yrs Experience</p> */}
            <div className='openingDetails'>
              {/* <a style={{ marginBottom: '0px' }}> View Details</a> */}
              <button onClick={openModal} className='submitOpeing'>Apply</button>
            </div>
          </div>
          <hr className='hrline' style={{ color: '#D00000', margin: '0px' }} />
          <div className='currentOpening2'>
            <p className='openingTeacher'>Administrator</p>
            {/* <p>Thane | min 3-4 yrs Experience</p> */}
            <div className='openingDetails'>
              {/* <a style={{ marginBottom: '0px' }}> View Details</a> */}
              <button onClick={openModal} className='submitOpeing'>Apply</button>
            </div>
          </div>
          <hr className='hrline' style={{ color: '#D00000', margin: '0px' }} />
          <div className='currentOpening2'>
            <p className='openingTeacher'>sales manager</p>
            {/* <p>Thane | min 3-4 yrs Experience</p> */}
            <div className='openingDetails'>
              {/* <a style={{ marginBottom: '0px' }}> View Details</a> */}
              <button onClick={openModal} className='submitOpeing'>Apply</button>
            </div>
          </div>
          <hr className='hrline' style={{ color: '#D00000', margin: '0px' }} />
          <div className='currentOpening2'>
            <p className='openingTeacher'>telecaller</p>
            {/* <p>Thane | min 3-4 yrs Experience</p> */}
            <div className='openingDetails'>
              {/* <a style={{ marginBottom: '0px' }}> View Details</a> */}
              <button onClick={openModal} className='submitOpeing'>Apply</button>
            </div>
          </div>
          <hr className='hrline' style={{ color: '#D00000', margin: '0px' }} />
          <div style={{ paddingBottom: '30px' }} className='currentOpening2'>
            <p className='openingTeacher'>Teachers for english, sanskrit, social science,mathematics,Physics, Chemistry, Biology <br></br> <span style={{ color: 'black', textTransform: 'capitalize', fontWeight: 'normal' }}>for grades 8th to 10th</span><br></br> <span style={{ color: 'black', textTransform: 'capitalize', fontWeight: 'normal' }}>i.c.s.e. ,c.b.s.e. ,s.s.c.</span>  </p>
            {/* <p>Thane | min 3-4 yrs Experience</p> */}
            <div className='openingDetails'>
              {/* <a style={{ marginBottom: '0px' }}> View Details</a> */}
              <button onClick={openModal} className='submitOpeing'>Apply</button>
            </div>
          </div>
        </div>

        <div className='careerTag'>
          <p className='careerTag2'>We ensure every new recruit is also of the same mindset as us <br />and understands the same core values. </p>
        </div>

        <div className='headingDiv2'>
          <h1>Our Core Values</h1>
        </div>

        <div className='psgDivCareer'>
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


        {/* react modal */}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 className='newModalhead' ref={(_subtitle) => (subtitle = _subtitle)}>ENQUIRE NOW</h2>
          {/* <button onClick={closeModal}>close</button> */}
          <form action="https://nayakstutorials.com/api/email.php" method="POST" enctype="multipart/form-data" onSubmit={handleEmailSubmission3}>
            <div class="mt-4 ">
              <input onChange={(e) => setName(e.target.value)} placeholder='Enter Full Name' type="text" class="form-control" id="recipient-name" />
            </div>
            <div className='row '>
              <div className='col-md-12'><input onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email (@example.com)' type="text" class="form-control" id="recipient-name" /></div>
              <div className='col-md-12'><input onChange={(e) => setNumber(e.target.value)} placeholder='Enter Contact Number' type="text" class="form-control" id="recipient-name" /></div>
            </div>

            <div>
              <div className='carreerResume'><label className='label' for="upload-photo">Upload Resume</label>
                <input id="upload-photo" type='file' name='resume' style={{ display: 'none' }} onChange={handleFileChange} />
              </div>
            </div>

            <div className='modalBtn'>
              {/* <button  onClick={handleEmailSubmission2} className='submitOpeing'>Apply</button> */}
              <button type='submit' className='submitOpeing'>Apply</button>
            </div>
          </form>
        </Modal>


        <Footer />

        <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>
        {/* <div className='newenquirediv'><Newenqire /></div> */}
      </div>
    </>
  )
}

export default Career