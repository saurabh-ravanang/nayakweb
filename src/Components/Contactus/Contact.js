import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import { GrMail } from 'react-icons/gr'
import { IoIosCall } from 'react-icons/io'
import { MdLocationPin } from 'react-icons/md'
import Location from '../../Assets/location-dot-solid.svg'
import phone from '../../Assets/phone-solid.svg'
import "./contact.css";
import Branch from '../search branch/Branch'
import { Helmet } from "react-helmet";
import LogoContact from '../logoContact/logoContact'
import Newnavbar from '../newNavbar/Newnavbar'
import { FaWhatsapp } from "react-icons/fa";
import Newenqire from '../Enquire Form/Newenqire'

export default function Contact() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Get in Touch | Contact Our Main Branch</title>
                <meta name="title" content="Get in Touch | Contact Our Main Branch" />
                <meta name="description" content="Get in touch with us! Whether you have inquiries, need support. we’re here to help. Your questions are important to us, and we’re ready to assist you." />

                <link rel="canonical" href="https://nayakstutorials.com/contact/" />

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
              "name": "Contact us",
              "item": "https://nayakstutorials.com/contact/"  
            }]
          }`}
                </script>

            </Helmet>
            {/* <Navbar /> */}


            <div className="wpfloat">
                <LogoContact />
                <Newnavbar />
                <div className="contactBackground">
                    <div className='mainPrivacy2'>


                        <h2 className="contactush2" >contact <span>us</span></h2>
                        <div className="contactUsDiv">
                            <div className="row1"  >
                                <div className="rownewcontact ">
                                    <a className='contactAnchor' target='_blank' style={{ textDecoration: 'none', color: 'white' }} > <span style={{ display: 'flex', gap: '10px' }}><img src={Location} style={{ width: '15px', marginTop: '2px', color: 'white', fontWeight: '500' }} /><p style={{ marginBottom: '0px', fontWeight: '500', fontSize: '17px', color: 'black' }} >209, Vardhaman Industrial Complex, Gokul Nagar,<br /> Old Agra Road, Thane (West) 400601, Maharashtra, India</p></span></a>
                                    <a className='contactAnchor' target='_blank' href="mailto: info@nayakstutorials.com" style={{ textDecoration: 'none', color: 'white' }}><span style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px', marginBottom: '8px' }}><GrMail style={{ fontSize: '18px', color: 'black' }} /><p style={{ marginBottom: '0px', fontWeight: '500', fontSize: '17px', color: 'black' }}>info@nayakstutorials.com</p></span></a>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><img src={phone} style={{ width: '15px', color: 'white' }} /><p style={{ color: 'red', marginBottom: '0px', fontSize: '17px' }}> <a href='tel: 22 21723434' className="aboutUsNo contactAnchor" style={{ textDecoration: 'none', color: 'red', fontWeight: '500', color: 'black' }}>+91 2221723434 </a>| <a target='_blank' style={{ textDecoration: 'none', color: 'red', fontWeight: '500', color: 'black' }} className="aboutUsNo contactAnchor" href='tel: 77100 10044'>+91 7710010044</a></p></span>
                                </div>

                                <div className="googleMap mt-4">
                                    {/* <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q=nayak%27s%20tutorials&amp;t=m&amp;z=12&amp;output=embed&amp;iwloc=near" title="nayak's tutorials" aria-label="nayak's tutorials" width="460" height="380"></iframe> */}


                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.704144621394!2d72.97558547520869!3d19.20812028202389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b944f8bc26c5%3A0x5a2f1f2e1b1a36a9!2sNayak%E2%80%99s%20Tutorials%7C%20Coaching%20Classes%20in%20Vardhaman%20%2CThane%20(W)%7C%20CBSE%7C%20ICSE%7C%20IGCSE%7C%20SSC%20Board%20class%20viii%20ix%20x%20NEET%20JEE!5e0!3m2!1sen!2sin!4v1739957535514!5m2!1sen!2sin" width="460" height="380" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            {/* <div className='contactForm'>
                            <form className='EnqForm2'>
                                <div class="mb-3">
                                    <input placeholder='Enter Full Name' type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div className='row mb-4'>
                                    <div className='col-md-6 inputmargin'><input placeholder='Enter Email (@example.com)' type="text" class="form-control" id="recipient-name" /></div>
                                    <div className='col-md-6'><input placeholder='Enter Contact Number' type="text" class="form-control" id="recipient-name" /></div>
                                </div>
                                <div className='row mb-4'>
                                    <div className='col-md-6 inputmargin'><input placeholder='Enter Address' type="text" class="form-control" id="recipient-name" /></div>
                                    <div className='col-md-6'><input placeholder='Enter Pincode' type="text" class="form-control" id="recipient-name" /></div>
                                </div>
                                <div className='row mb-4'>
                                    <div className='col-md-4 mb-3'>
                                        <select placeholder='Please Select Category' className='FormSelect' name="cars" id="cars">
                                            <option value="saab">Please Select Category</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                    <div className='col-md-4 mb-3'>
                                        <select placeholder='Please Select Board' className='FormSelect' name="cars" id="cars">
                                            <option value="volvo">Please Select Board</option>
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                    <div className='col-md-4'>
                                        <select placeholder='Please Select Standard' className='FormSelect' name="cars" id="cars">
                                            <option value="saab">Please Select Standard</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <textarea rows="4" cols="50" placeholder='Enter Your Message (Optional)' class="form-control" id="message-text"></textarea>
                                </div>
                                <div className='modalBtn d-flex justify-content-center text-align-center'>
                                    <button type="button" class="btn btn-secondary FormSubmit" data-bs-dismiss="modal">Submit</button>
                                </div>
                            </form>
                        </div> */}
                        </div>
                    </div>
                </div>
                <div className='contactBranch' >

                    <Branch />
                </div>
                <Footer />

                <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>

                {/* <div className='newenquirediv'><Newenqire /></div> */}

            </div>
        </>
    )
}
