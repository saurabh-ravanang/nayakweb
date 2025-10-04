import React, { useEffect, useState } from 'react'
import './home.css'
import img from "../../Assets/Home/Group 2.png"
// import mainBanner from "../../Assets/Home/mainBanner.png"
// import mainBanner from "../../Assets/Home/mainbanner2.png"
// import mainBanner from "../../Assets/Home/hero banner 1_webadult.png"
import mainBanner from "../../Assets/Home/1.png"
import mainBanner2 from "../../Assets/Home/2.png"
// import mainBanner2 from "../../Assets/Home/banner2.png"
import mainBanner3 from "../../Assets/Home/3.png"
// import mainBanner3 from "../../Assets/Home/banner3.png"
import mainBanner4 from "../../Assets/Home/4.png"
import mainBanner5 from "../../Assets/Home/5.png"
import mainBanner6 from "../../Assets/Home/6.png"
import mainBanner7 from "../../Assets/Home/Itop2324.jpg"
import mainBanner8 from "../../Assets/Home/JEEAll.jpg"
// import mainBanner4 from "../../Assets/Home/banner4.png"
import education from "../../Assets/Home/education.png"
import quality from "../../Assets/Home/quality.png"
import teaching from "../../Assets/Home/teaching.png"
import newEducation from "../../Assets/Home/newEdu.png"
import newQuality from "../../Assets/Home/newQualit.png"
import newTeaching from "../../Assets/Home/newTeaching.png"
import Carousel from 'react-bootstrap/Carousel';
import CountUp from 'react-countup';
import { Helmet } from "react-helmet";




export default function HomeCon() {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')
  const [pincode, setPincode] = useState()
  const [message, setMessage] = useState('')
  const [selectedCenterValue, setSelectedCenterValue] = useState();
  const [selectedValue, setSelectedValue] = useState();
  const [selectSchool, setSelectSchool] = useState();
  const [selectCollege, setSelectCollege] = useState();
  const [selectCbse, setSelectCbse] = useState();
  const [selectIcse, setSelectIcse] = useState();
  const [selectSsc, setSelectssc] = useState()
  const [selectIgcse, setSelectigcse] = useState()

  function handleSelectChange(event) {
    setSelectedValue(event.target.value);
    if (event.target.value == 'College' || event.target.value == 'Performance Booster' || event.target.value == 'Pre-school' || event.target.value == 'saab') {
      setSelectSchool('')
    }
  }

  function handleCenter(event) {
    setSelectedCenterValue(event.target.value)
  }

  function handleSchoolBoard(event) {
    setSelectSchool(event.target.value)
  }

  function handleCollegeBorad(event) {
    setSelectCollege(event.target.value)
  }

  function handleCbseBorad(event) {
    setSelectCbse(event.target.value)
  }

  function handleIcseBorad(event) {
    setSelectIcse(event.target.value)
  }

  function handlesscBorad(event) {
    setSelectssc(event.target.value)
  }
  function handleigcseBorad(event) {
    setSelectigcse(event.target.value)
  }

  

  function schoolchange() {
    if (name && number && mail && selectedCenterValue && selectedValue) {
      if (selectSchool == 'CBSE' && selectCbse) {
        const mailtoLink = `mailto:enquiry@nayakstutorials.com?subject=Student requested a callback&body=Name: ${name}%0A
        Phone Number: ${number}%0A
        Email: ${mail}%0A
        Number: ${number}%0A
        Message: ${message}%0A
        Center:${selectedCenterValue}%0A
        Offerings: ${selectedValue}%0A
        School: ${selectSchool}%0A
        Cbse: ${selectCbse}%0A`;


        window.location.href = mailtoLink;
      } else if (selectSchool == 'ICSE' && selectIcse) {
        const mailtoLink = `mailto:enquiry@nayakstutorials.com?subject=Student requested a callback&body=Name: ${name}%0A
        Phone Number: ${number}%0A
        Email: ${mail}%0A
        Number: ${number}%0A
        Message: ${message}%0A
        Center:${selectedCenterValue}%0A
        Offerings: ${selectedValue}%0A
        School: ${selectSchool}%0A
        Icse: ${selectIcse}%0A`;


        window.location.href = mailtoLink;
      } else if (selectSchool == 'SSC' && selectSsc) {
        const mailtoLink = `mailto:enquiry@nayakstutorials.com?subject=Student requested a callback&body=Name: ${name}%0A
        Phone Number: ${number}%0A
        Email: ${mail}%0A
        Number: ${number}%0A
        Message: ${message}%0A
        Center:${selectedCenterValue}%0A
        Offerings: ${selectedValue}%0A
        School: ${selectSchool}%0A
        Ssc: ${selectSsc}%0A`;
        window.location.href = mailtoLink;
      } else if (selectSchool == 'IGCSE' && selectIgcse) {
        const mailtoLink = `mailto:enquiry@nayakstutorials.com?subject=Student requested a callback&body=Name: ${name}%0A
        Phone Number: ${number}%0A
        Email: ${mail}%0A
        Number: ${number}%0A
        Message: ${message}%0A
        Center:${selectedCenterValue}%0A
        Offerings: ${selectedValue}%0A
        School: ${selectSchool}%0A
        Igcse: ${selectIgcse}%0A`;
        window.location.href = mailtoLink;
      } else if (selectedValue == 'Performance Booster') {
        const mailtoLink = `mailto:enquiry@nayakstutorials.com?subject=Student requested a callback&body=Name: ${name}%0A
        Phone Number: ${number}%0A
        Email: ${mail}%0A
        Number: ${number}%0A
        Message: ${message}%0A
        Center:${selectedCenterValue}%0A
        Offerings: ${selectedValue}%0A`;
        window.location.href = mailtoLink;
      }
      else if (selectedValue == 'Pre-school') {
        const mailtoLink = `mailto:enquiry@nayakstutorials.com?subject=Student requested a callback&body=Name: ${name}%0A
        Phone Number: ${number}%0A
        Email: ${mail}%0A
        Number: ${number}%0A
        Message: ${message}%0A
        Center:${selectedCenterValue}%0A
        Offerings: ${selectedValue}%0A`;
        window.location.href = mailtoLink;
      } else if (selectCollege) {
        const mailtoLink = `mailto:enquiry@nayakstutorials.com?subject=Student requested a callback&body=Name: ${name}%0A
        Phone Number: ${number}%0A
        Email: ${mail}%0A
        Number: ${number}%0A
        Message: ${message}%0A
        Center:${selectedCenterValue}%0A
        Offerings: ${selectedValue}%0A
        College: ${selectCollege}%0A`;
        window.location.href = mailtoLink;
      } else {
        alert("Please fill in all required fields before sending the email.");
      }
    } else {
      alert("Please fill in all required fields before sending the email.");
    }
  }



  const body = {
    name: name,
    number: number,
    mail: mail,
    address: address,
    pincode: pincode,
    message: message,
    selectedValue: selectedValue,
    selectCollege: selectCollege,
    selectSchool: selectSchool,
    selectCbse: selectCbse,
    selectIcse: selectIcse,
    selectSsc: selectSsc,
    selectedCenterValue: selectedCenterValue
  }
  const handleEmailSubmission = (e) => {
    // if (name && number && mail && selectedCenterValue && selectedValue  ) {
    const mailtoLink = `mailto:enquiry@nayakstutorials.com?subject=Student requested a callback&body=Name: ${name}%0A
        Phone Number: ${number}%0A
        Email: ${mail}%0A
        Number: ${number}%0A
        Message: ${message}%0A
        Center:${selectedCenterValue}%0A
        Offerings: ${selectedValue}%0A
        College: ${selectCollege}%0A
        School: ${selectSchool}%0A
        Cbse: ${selectCbse}%0A
        Ssc: ${selectSsc}%0A
        Icse: ${selectIcse}%0A`;

    window.location.href = mailtoLink;
    // }
    // else {
    //   alert("Please fill in all required fields before sending the email.");
    // }
  };



  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Best Coaching in Thane | CBSE, ICSE, IGCSE, SSC, NEET, JEE, CET & Olympiads</title>
        {/* <title>Top Coaching Classes in Mumbai and Thane | Admissions Open for 2024-25</title> */}
        {/* <meta name="title" content="Top Coaching Classes in Mumbai and Thane | Admissions Open for 2024-25" /> */}
        <meta name="title" content="Best Coaching in Thane | CBSE, ICSE, IGCSE, SSC, NEET, JEE, CET & Olympiads" />
        {/* <meta name="description" content="Enhance your academic journey with leading coaching classes for schools, colleges, and Olympiads, with expert guidance" /> */}
        <meta name="description" content="Nayak's Tutorials in Thane offers coaching for Class VIII, IX, X (CBSE, ICSE, IGCSE, SSC) & CA, CS, TYBCOM, NEET, MHCET, JEE prep. Admissions open now!"/>
        <meta name="google-site-verification" content="-lq-L_-JHS5w83DKXKizy9l-HVRpB7TVl3CJ70bbxMg" />

        <link rel="canonical" href="https://nayakstutorials.com/" />

        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Nayak Tutorial",
          "url": "https://nayakstutorials.com/",
          "description": "Unlock success with Nayak’s Tutorials in Mumbai and Thane, your go-to coaching center for comprehensive test preparation.Nayak’s Tutorials has been committed to the success of students since 2000. We offer coaching classes for school boards (CBSE, ICSE, IGCSE, SSC), college (11th and 12th, TYBCOM), and competitive exams like medical, engineering, CA & CS. With a dedicated team of experts, 27 coaching centers, and 500+ tutors across Maharashtra and Gujarat, we're committed to your success. Join the Nayak’s family, where over 3,00,000 alumni have thrived. Let's achieve greatness together!",
          "image": "https://nayakstutorials.com/static/media/mybanner.3ea36cbc92f3107f3e0a.jpg",
          "logo": "https://nayakstutorials.com/static/media/Full_Logo.34552bea51a0af756476.png",
          "sameAs": [
          "https://www.facebook.com/nayakstutorialss?mibextid=ZbWKwL",
          "https://www.instagram.com/nayakstutorialss/",
          "https://www.youtube.com/c/NayaksTutorials13"
          ]
          }`}
        </script>

      </Helmet>
      <div className='mainHomeDiv'>
        <div className='homeFirst'>
          <div className='homeCounter'>
            {/* <img src={newQuality} /> */}
            <span><CountUp end={25} />+ </span>
            <h3> Years of Experience</h3>
          </div>
          <div className='homeCounter1'>
            {/* <img src={newTeaching} /> */}
            <span><CountUp end={500} />+</span>
            <h3> Teaching & Non - Teaching Professionals</h3>
          </div>
          <div className='homeCounter2'>
            {/* <img src={newEducation} /> */}
            <span> <span><CountUp end={300000} />+</span></span>
            <h3> Alumni </h3>
          </div>
          <div className='homeCounter'>
            {/* <img src={newQuality} /> */}
            <span><CountUp end={20} />+ </span>
            <h3> Years – All India Rankers</h3>
          </div>
        </div>
        {/* <div className='homeSecond'>
        <div className='homeMainPic'>
          <img src={mainBanner}></img>
        </div>
      </div> */}

        <Carousel className='homeSecond'>
          <Carousel.Item className='homeMainPic' interval={1000}  >
            <img className="d-block w-100 " src={mainBanner} alt="First slide" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" />
          </Carousel.Item>
          <Carousel.Item className='homeMainPic' interval={2000}  >
            <img className="d-block w-100 " src={mainBanner2} alt="Second slide" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" />
          </Carousel.Item>
          <Carousel.Item className='homeMainPic' interval={1500}  >
            <img className="d-block w-100 " src={mainBanner3} alt="Third slide" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" />
          </Carousel.Item>
          <Carousel.Item className='homeMainPic' interval={1500}  >
            <img className="d-block w-100 " src={mainBanner4} alt="Fourth slide" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" />
          </Carousel.Item>
          <Carousel.Item className='homeMainPic' interval={1500}  >
            <img className="d-block w-100 " src={mainBanner5} alt="SSC slide" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" />
          </Carousel.Item>
          <Carousel.Item className='homeMainPic' interval={1500}  >
            <img className="d-block w-100 " src={mainBanner6} alt="CBSE slide" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" />
          </Carousel.Item>
        </Carousel>




        <div className='homeThird'>
          <div className='homeMobileCounter'>
            {/* <img src={newQuality} /> */}
            <span><CountUp end={25} />+</span>
            <h3> Years of Experience</h3>
          </div>
          <div className='homeMobileCounter1'>
            {/* <img src={newTeaching} /> */}
            <span><CountUp end={500} />+</span>
            <h3> Teaching & Non - Teaching Professionals</h3>
          </div>
          <div className='homeMobileCounter2'>
            {/* <img src={newEducation} /> */}
            <span><span><CountUp end={300000} />+</span></span>
            <h3> Alumni </h3>
          </div>
          <div className='homeMobileCounter'>
            {/* <img src={newQuality} /> */}
            <span><CountUp end={20} />+</span>
            <h3>Years – All India Rankers</h3>
          </div>
        </div>


        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div id='mymodal' class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h3 style={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: '700', marginBottom: '20px' }}>Enquire <span style={{ color: '#D00000' }}>Now</span></h3>
                <form className='EnqForm'>
                  <div class="mb-3">
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name' type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div className='row mb-1'>
                    <div className='col-md-4 inputmargin'><input value={mail} onChange={(e) => setMail(e.target.value)} placeholder='Email (@example.com)' type="email" class="form-control" id="recipient-name" /></div>
                    <div className='col-md-4 '><input value={number} maxLength={10} onChange={(e) => setNumber(e.target.value)} placeholder='Contact Number' type="text" class="form-control" id="recipient-name" /></div>
                    <div className='col-md-4 '>
                      <select placeholder='Our Centers' className='FormSelect' name="cars" id="cars" value={selectedCenterValue} onChange={handleCenter}>
                        <option value="Our Centers">Our Centers</option>
                        <option value="Thane Vardhaman">Thane Vardhaman</option>
                        <option value="Thane Naupada">Thane Naupada</option>
                        <option value="Thane Vartak Nagar">Thane Vartak Nagar</option>
                        <option value="Thane Vasant Vihar">Thane Vasant Vihar</option>
                        <option value="Thane Manpada">Thane Manpada</option>
                        <option value="Thane Hiranandani">Thane Hiranandani</option>
                        <option value="Thane Anand Nagar">Thane Anand Nagar</option>
                        <option value="Kalwa">Kalwa</option>
                        <option value="Mulund Veena Nagar">Mulund Veena Nagar</option>
                        <option value="Mulund East">Mulund East</option>
                        <option value="Mira Road Sec.5">Mira Road Sec.5</option>
                        <option value="Mira Road Jangid">Mira Road Jangid</option>
                        <option value="Satara">Satara</option>
                        <option value="Bandra">Bandra</option>
                        <option value="EDUACE GROUP TUITIONS (Mulund East)">EDUACE GROUP TUITIONS (Mulund East)</option>
                        <option value="EDUACE GROUP TUITIONS (Ghatkopar East)">EDUACE GROUP TUITIONS (Ghatkopar East)</option>
                        <option value="EDUACE GROUP TUITIONS (Mulund West)">EDUACE GROUP TUITIONS (Mulund West)</option>
                      </select>
                    </div>
                  </div>
                  {/* <div className='row mb-3'>
                  <div className='col-md-6 inputmargin'><input value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Enter Address' type="text" class="form-control" id="recipient-name" /></div>
                  <div className='col-md-6'><input value={pincode} maxLength={6} onChange={(e) => setPincode(e.target.value)} placeholder='Enter Pincode' type="number" class="form-control" id="recipient-name" /></div>
                </div> */}
                  <div className='row mb-1'>
                    <div className='col-md-4 '>
                      {/* <input placeholder='Please Select Category' type="text" class="form-control" id="recipient-name" /> */}
                      <select placeholder='Our Offerings' className='FormSelect' name="cars" id="cars" value={selectedValue}
                        onChange={handleSelectChange}>
                        <option value="saab">Our Offerings</option>
                        <option value="School">School</option>
                        <option value="College">College</option>
                        <option value="Performance Booster">Performance Booster</option>
                        <option value="Pre-school">Pre-school</option>
                      </select>
                    </div>
                    <div className='col-md-4 mb-3'>


                      {selectedValue === 'School' && (
                        <select
                          placeholder='School Board'
                          className='FormSelect'
                          name="schoolBoard"
                          value={selectSchool}
                          onChange={handleSchoolBoard}

                        >
                          <option value="School Board">Select Board</option>
                          <option value="CBSE">CBSE</option>
                          <option value="ICSE">ICSE</option>
                          <option value="IGCSE">IGCSE</option>
                          <option value="SSC">SSC</option>
                        </select>
                      )}

                      {selectedValue === 'College' && (
                        <select

                          placeholder='College'
                          className='FormSelect'
                          name="college"
                          value={selectCollege}
                          onChange={handleCollegeBorad}
                        >
                          <option value="College">Select College</option>
                          <option value="11th and 12th">11th and 12th</option>
                          <option value="CA & CS">CA & CS</option>
                          <option value="Engineering and medical">Pre Engineering</option>
                          <option value="Engineering and medical">Pre Medical</option>
                          <option value="Bcom">BCOM</option>
                        </select>
                      )}


                    </div>
                    <div className='col-md-4'>
                      {/* <input placeholder='Please Select Standard' type="text" class="form-control" id="recipient-name" /> */}
                      {selectSchool === 'CBSE' && (
                        <select

                          placeholder='Cbse'
                          className='FormSelect'
                          name="schoolBoard"
                          value={selectCbse}
                          onChange={handleCbseBorad}
                        >
                          <option value="School Board">Select STD</option>
                          <option value="CBSE 8TH">CBSE 8TH</option>
                          <option value="CBSE 9TH">CBSE 9TH</option>
                          <option value="CBSE 10TH">CBSE 10TH</option>
                        </select>
                      )}

                      {selectSchool === 'ICSE' && (
                        <select

                          placeholder='Cbse'
                          className='FormSelect'
                          name="schoolBoard"
                          value={selectIcse}
                          onChange={handleIcseBorad}
                        >
                          <option value="ICSE">Select STD</option>
                          <option value="ICSE 8TH">ICSE 8TH</option>
                          <option value="ICSE 9TH">ICSE 9TH</option>
                          <option value="ICSE 10TH">ICSE 10TH</option>
                        </select>
                      )}

                      {selectSchool === 'SSC' && (
                        <select

                          placeholder='ssc'
                          className='FormSelect'
                          name="schoolBoard"
                          value={selectSsc}
                          onChange={handlesscBorad}
                        >
                          <option value="SSC">Select STD</option>
                          <option value="SSC 8TH">SSC 8TH</option>
                          <option value="SSC 9TH">SSC 9TH</option>
                          <option value="SSC 10TH">SSC 10TH</option>
                        </select>
                      )}

                      {selectSchool === 'IGCSE' && (
                        <select

                          placeholder='igcse'
                          className='FormSelect'
                          name="schoolBoard"
                          value={selectIgcse}
                          onChange={handleigcseBorad}
                        >
                          <option value="IGCSE">Select STD</option>
                          <option value="IGCSE 8TH">IGCSE 8TH</option>
                          <option value="IGCSE 9TH">IGCSE 9TH</option>
                          <option value="IGCSE 10TH">IGCSE 10TH</option>
                        </select>
                      )}


                    </div>
                  </div>
                  <div class="mb-3">
                    <textarea rows="4" cols="50" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter Your Message (Optional)' class="form-control" id="message-text"></textarea>
                  </div>
                  <div className='modalBtn'>
                    <button type="button" className="btn btn-secondary FormSubmit" data-bs-dismiss="modal" onClick={schoolchange}>Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
