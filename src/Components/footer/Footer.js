import React, { useState } from 'react'
import './footer.css'
import img from "../../Assets/Navbar/Full_Logo.png"
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineYoutube } from 'react-icons/ai'
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const [name, setName] = useState('')
  const [mail, setMail] = useState('')
  const [number, setNumber] = useState('')
  const [address, setAddress] = useState('')
  const [pincode, setPincode] = useState()
  const [message, setMessage] = useState('')
  const [selectedCenterValue, setSelectedCenterValue] = useState();
  const [selectedValue, setSelectedValue] = useState();
  const [selectSchool, setSelectSchool] = useState('');
  const [selectCollege, setSelectCollege] = useState('');
  const [selectCbse, setSelectCbse] = useState();
  const [selectIcse, setSelectIcse] = useState();
  const [selectSsc, setSelectssc] = useState()

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
      } else if (selectSchool == 'IGCSE') {
        const mailtoLink = `mailto:enquiry@nayakstutorials.com?subject=Student requested a callback&body=Name: ${name}%0A
        Phone Number: ${number}%0A
        Email: ${mail}%0A
        Number: ${number}%0A
        Message: ${message}%0A
        Center:${selectedCenterValue}%0A
        Offerings: ${selectedValue}%0A
        School: ${selectSchool}%0A`;
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
    selectIcse: selectIcse
  }

  const mailtoBody = encodeURIComponent(JSON.stringify(body));

  const handleEmailSubmission = (e) => {
    if (name && number && mail) {
      const mailtoLink = `mailto:enquiry@nayakstutorials.com?subject=Student requested a callback&body=Name: ${name}%0A
        Phone Number: ${number}%0A
        Email: ${mail}%0A
        Number: ${number}%0A
        Address: ${address}%0A
        Pincode: ${pincode}%0A
        Message: ${message}%0A
        Offerings: ${selectedValue}%0A
        College: ${selectCollege}%0A
        School: ${selectSchool}%0A
        Cbse: ${selectCbse}%0A
        Icse: ${selectIcse}%0A`;

      window.location.href = mailtoLink; // This will open the email client with the mailtoLink.
    } else {
      alert("Please fill in all required fields before sending the email.");
    }
  };
  return (
    <>
      <div className='MainFooterDiv'>
        <div className='footerFirst'>
          <div className='footerLogoDiv'>
            <img src={img} alt='Logo of coaching classes in thane'></img>
          </div>
          <div className='footerIcons'>
            <a target='_blank' href='https://www.instagram.com/nayakstutorialss/'>
              <div className='FooterIconsInsta'>
                <AiOutlineInstagram id='insta' size={30} style={{ color: 'white' }} />
              </div></a>
            <a target='_blank' href='https://www.facebook.com/nayakstutorialss/'>
              <div className='FooterIconsFB'>
                <BiLogoFacebook id='FB' size={30} style={{ color: 'white' }} />
              </div></a>
            <a target='_blank' href='https://www.youtube.com/@NayaksTutorials13'>
              <div className='FooterIconsYoutube'>
                <AiOutlineYoutube id='youtube' size={25} style={{ color: 'white' }} />
              </div></a>
            <a target='_blank' href='https://x.com/nayaks_tutorial'>
              <div className='FooterIconsYoutube'>
                <FaXTwitter id='youtube' size={25} style={{ color: 'white' }} />
              </div></a>
          </div>
          <div className='fnewAdd'>
            <a style={{ color: '#0a0a0a' }} target='_blank' href='https://maps.app.goo.gl/UtziubohbGU3N2sL6 '>
           <p><FaLocationDot id='Floc' size={22} style={{ color: '#DA1F24' }}/> 209, Vardhaman Industrial Complex, Gokul Nagar,
            Old Agra Road, Thane (West) 400 601, Maharashtra, India</p></a>

            <a style={{ color: '#0a0a0a' }} href="mailto:info@nayakstutorials.com" target='_blank'><p><MdEmail id='fEmail' size={22} style={{ color: '#DA1F24',marginRight:'10px' }}/>info@nayakstutorials.com</p></a>
            
            <p><IoIosCall id='fPhone' size={22} style={{ color: '#DA1F24' }}/><a style={{ color: '#0a0a0a' }} href="tel:+912221723434" target='_blank'>+91 2221723434</a> | <a style={{ color: '#0a0a0a' }} href="tel:+917710010044" target='_blank'>+91 7710010044</a></p>
           
          </div>
        </div>
        <div className='footerSecond'>
          <div className='footerF1'>
            <a href='/cbse-classes' className='footerAnchor'>CBSE </a>
            <a href='/icse-classes' className='footerAnchor'>ICSE</a>
            <a href='/igcse-classes' className='footerAnchor'>IGCSE</a>
            <a href='/classes-for-mh-ssc-board' className='footerAnchor'>SSC</a>
            <a href='/blog' className='footerAnchor'>Blogs</a>
            <a href='/paper' className='footerAnchor'>Practice Paper</a>
          </div>
          <div className='footerF2'>
            <a href='/elevenandTwelth' className='footerAnchor'>11<sup>th</sup> & 12<sup>th</sup></a>
            <a href='/tybcom' className='footerAnchor'>TY Bcom</a>
            <a target='_blank' href='https://milkarjeetayenge.com/' className='footerAnchor'>Pre Engineering </a>
            <a target='_blank' href='https://milkarjeetayenge.com/' className='footerAnchor'>Pre Medical</a>
            <a href='/ca' className='footerAnchor'>CA & CS</a>
            <a href='/8th-9th-10th-cbse-icse-ssc-coaching-classes' className='footerAnchor'>Guiding Students <br />to Success</a>
          </div>
          <div className='footerF3'>
            <a href='/class-10-score-booster-course' className='footerAnchor'>Score Booster</a>
            <a href='/preschool' className='footerAnchor'>Pre-School</a>
            <a href='/career' className='footerAnchor'>Careers</a>
            <a href='/contact' className='footerAnchor'>Contact Us</a>
            <a href='https://nyksfoundation.com/' target='_blank' className='footerAnchor'>Nyks Foundation</a>
            <a style={{display:"none"}} href='/thankyou' className='footerAnchor'>Thank you</a>
            {/* <a href='/Anant' className='footerAnchor'>Anant</a> */}
          </div>
        </div>
        <div className='footerThird'>
          <h3>Admission Open For Batches 2025 - 26</h3>
          {/* <a onClick={openModal} className='footerBtn'>Enquiry</a> */}
          <button style={{ color: 'black' }} type="button" class="btn  footerBtn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">Enquiry</button>
        </div>
      </div>

      <div className='footerLine'>
        <div className='fRedline'></div>
        <div className='fWhiteline'></div>
      </div>

      {/* <div className='row footerRow'>
        <div className='col-lg-4 colFirst'>
          <div className='footerFirst'>
            <div className='footerLogoDiv'>
              <img src={img}></img>
            </div>
            <div className='footerIcons'>
              <div className='FooterIconsInsta'>
                <AiOutlineInstagram id='insta' size={30} style={{ color: 'white' }} />
              </div>
              <div className='FooterIconsFB'>
                <BiLogoFacebook id='FB' size={30} style={{ color: 'white' }} />
              </div>
              <div className='FooterIconsYoutube'>
                <AiOutlineYoutube id='youtube' size={25} style={{ color: 'white' }} />
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-5 colSecond'>
          <div className='footerSecond'>
            <div className='footerF1'>
              <a className='footerAnchor'>School Coaching </a>
              <a className='footerAnchor'>College Coaching</a>
              <a className='footerAnchor'>Pre School Coaching</a>
            </div>
            <div className='footerF2'>
              <a className='footerAnchor'>About Nayak’s</a>
              <a className='footerAnchor'>Career</a>
              <a className='footerAnchor'>Contact Us</a>
            </div>
          </div>
        </div>
        <div className='col-lg-3 colThird'>
          <div className='footerThird'>
            <h3>Admission Open For Batches 2023 - 24</h3>
            <a className='footerBtn'>Online Admission</a>
          </div>
        </div>
      </div> */}

      <div className='respFooterLine'></div>
      {/* style={{display:'none'}} */}
      <div className='footerLastDiv'>
        <div className='copyrightline'><h4>Copyright © 2025 Nayak’s Tutorials   |  <a href='/privaypolicy' className='footerAnchor'>Privacy Policy</a>   |   <a href='/refund' className='footerAnchor'>Refund and Cancellation</a>  |   <a href='/termsConditions' className='footerAnchor'>Terms & Conditions</a></h4></div>


        <div id='copyrightline2' className='copyrightline'><h4>Copyright © 2025 Nayak’s Tutorials  <br /><br />  <a href='/privaypolicy' className='footerAnchor'>Privacy Policy</a>   |   <a href='/refund' className='footerAnchor'>Refund and Cancellation</a>  |   <a href='/termsConditions' className='footerAnchor'>Terms & Conditions</a> <br></br><br></br></h4></div>
        {/* <div  className='copyrightline'><h4>Copyright © 2022 Nayak’s Tutorials | Powered by Nayak’s Tutorials</h4></div> */}
        <div className='pixsonikline'><a target='_blank' href='https://testmate.in/'><h4>Designed by TESTMATE </h4></a></div>
        {/* <div className='pixsonikline'><h4>Designed by PIXSONIK | +91 99999999</h4></div> */}
        {/* <div className='pixsonikline'><h4>Designed by PIXSONIK | +91 9702928787</h4></div> */}
      </div>

      {/* <div className="card-footer text-muted text-center">
        Copyright © 2023 Nayak.testmate.in All rights reserved.  
      </div> */}




      {/* modal  */}
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
                  <div className='col-md-4 inputmargin'><input value={mail} onChange={(e) => setMail(e.target.value)} placeholder='Email (@example.com)' type="text" class="form-control" id="recipient-name" /></div>
                  <div className='col-md-4 mb-3'><input value={number} maxLength={10} onChange={(e) => setNumber(e.target.value)} placeholder='Contact Number' type="text" class="form-control" id="recipient-name" /></div>
                  <div className='col-md-4 mb-3'>
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
                  <div className='col-md-4 mb-3'>
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
                        <option value="School Board"> Select School Board</option>
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
                        <option value="College"> Select College</option>
                        <option value="11th and 12th">11th and 12th</option>
                        <option value="CA & CS">CA & CS</option>
                        <option value="Engineering and medical">Pre Engineering</option>
                        <option value="Engineering and medical">Pre Medi</option>
                        <option value="TY Bcom">TY Bcom</option>
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

                    {selectSchool === 'SSC' ? (
                      <select
                        placeholder='Cbse'
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
                    ) : null}


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


    </>
  )
}
