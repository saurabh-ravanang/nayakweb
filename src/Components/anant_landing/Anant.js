import React, { useState } from 'react'
import './anant.css'
import LogoContact from '../logoContact/logoContact'
import Newnavbar from '../newNavbar/Newnavbar'
import Footer from '../footer/Footer'


import img1 from "../../Assets/landing/choose1.png"
import img2 from "../../Assets/landing/choose2.png"
import img3 from "../../Assets/landing/choose3.png"
import img4 from "../../Assets/landing/choose4.png"
import courseimg from "../../Assets/landing/course.png"
import nayakbanner from "../../Assets/landing/boys.png"
import person from "../../Assets/testimonial/person.png"
import coma from "../../Assets/testimonial/coma.png"


import mainBanner1 from "../../Assets/landing/topper_banner_CBSE_topper_2024.png"
import mainBanner2 from "../../Assets/landing/topper_banner_ICSE_topper_2024.png"
import mainBanner3 from "../../Assets/landing/topper_banner_SSC_topper_2024.png"
import mainBanner4 from "../../Assets/landing/JEEAll.jpg"
import { FaWhatsapp } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom'
import Newenqire from '../Enquire Form/Newenqire'

import Carousel from 'react-bootstrap/Carousel';

import ananteng from "../../Assets/about/anaNT 2025 (2013 x 1256 px) Eng.jpg"
import anantmarathi from "../../Assets/about/anaNT 2025 (2013 x 1256 px) Marathi.jpg"


function Anant() {
    const sliderSettings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 560, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 840, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1200, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const navigate = useNavigate();


    const submitdata = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        if (name.length <= 3 || mobile.length <= 9) {
            alert('Please fill the form');
            return; // Stop the form submission if validation fails
        }

        // Prepare the form data
        const formData = {
            name: name,
            email: email,
            mobile: mobile
        };

        try {
            // Send a POST request to the given URL
            const response = await fetch('https://nayakstutorials.com/admin/api/formData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Check if the response is successful
            if (response.status) {
                const data = await response.json();
                console.log('Form submitted successfully:', data);
                // alert('Your message has been submitted successfully!');
                navigate('/thankyou');
            } else {
                console.error('Error submitting form:', response.status);
                alert('There was an error submitting your form. Please try again.');
            }
        } catch (error) {
            console.error('Network error:', error);
            alert('There was an error with the network. Please try again.');
        }
    };





    return (
        <>
            <LogoContact />
            {/* <Newnavbar /> */}

            <div className='Hmaindiv'>
                <div className='Hmaininnerdiv'>

                    <div className='hleft'>
                        <h2>AnaNT – Infinite Possibilities, Endless Opportunities</h2>
                        {/* <img className="boysnayaklanding" src={nayakbanner} alt="SSC Top Achievers" /> */}


                        {/* slider  */}

                        <Carousel className='homeSecond boysnayaklanding'>
                            <Carousel.Item className='homeMainPic' interval={1000}  >
                                <img className="d-block w-100 " src={ananteng} alt="First slide" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" />
                            </Carousel.Item>
                            <Carousel.Item className='homeMainPic' interval={2000}  >
                                <img className="d-block w-100 " src={anantmarathi} alt="Second slide" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat" />
                            </Carousel.Item>
                            
                        </Carousel>

                        {/* slider  */}


                    </div>

                    {/* <div className='hright'>
                        <div className='hrightinner'>
                            <form className='EnqFormnew'>
                                <h3>enquire now</h3>
                                <p>Learn from India's best teachers</p>
                                <h5>Enter your Contact Details</h5>
                                <div class="mb-3">
                                    <input value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Your Full Name' type="text" class="form-control2" id="recipient-name" />
                                </div>
                                <div class="mb-3">
                                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter Your Mobile Number' type="text" class="form-control2" id="recipient-name" />
                                </div>
                                <div class="mb-3">
                                    <input value={msg} onChange={(e)=>{setMsg(e.target.value)}} placeholder='Enter Your Email Address' type="text" class="form-control2" id="recipient-name" />
                                </div>

                                <div className='modalBtn'>
                                    <button onClick={submitdata} type="button" className="FormSubmit" data-bs-dismiss="modal" >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div> */}





                    <div className='hrightanant'>
                        <div className='hrightinner'>
                            <form className='EnqFormnew' onSubmit={submitdata}>
                                <h3>Enquire Now</h3>
                                <p>Learn from India's best teachers</p>
                                <h5>Enter your Contact Details</h5>

                                <div className="mb-3">
                                    <input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter Your Full Name"
                                        type="text"
                                        className="form-control2"
                                        id="recipient-name"
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        placeholder="Enter Your Mobile Number"
                                        type="text"
                                        className="form-control2"
                                        id="recipient-name"
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter Your Email Address"
                                        type="text"
                                        className="form-control2"
                                        id="recipient-name"
                                    />
                                </div>

                                <div className="modalBtn">
                                    <button type="submit" className="FormSubmit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>


                        <div class="input-group mySearch">
                            <a href="/downloads/anant form.pdf" download>
                                <button class="fincCenteranant">Download Form</button>
                            </a>
                        </div>
                    </div>










                </div>
            </div>

            {/* <div className='landtopperdiv'>
                <img className="landtopperdivimg" src={mainBanner1} alt="SSC Top Achievers" />
                <img className="landtopperdivimg" src={mainBanner2} alt="First slide" />
                <img className="landtopperdivimg " src={mainBanner3} alt="First slide" />
                <img className="landtopperdivimg " src={mainBanner4} alt="jeeall slide" />
            </div> */}





            <div className='secondsection1'>
                <h4>Executive Summary</h4>
                <p className='secondsectionP'>Nayak's Tutorials, a renowned educational institution, proposes a collaborative
                    project to provide high-quality coaching for financially challenged students
                    aspiring to excel in IIT-JEE, NEET-UG, and MHT-CET.
                </p>
                <p className='secondsectionP'>With AnaNT, our mission is to bridge the gap in educational opportunities, thus
                    fostering a more inclusive and equitable learning environment.</p>
            </div>

            <div className='secondsection1'>
                <h4>Our Commitment</h4>
                <p className='secondsectionP'>At Nayak's Tutorials, we are dedicated to delivering high-quality education that
                    meets the highest standards. We ensure quality education, maintaining high
                    standards without compromising on faculty expertise or resources, though with
                    Zero Coaching Fee*.</p>
            </div>


            <div className='Cmaindiv1'>
                <h2>Our Goal</h2>
                <p className='CmaindivP'>To empower students to achieve academic excellence, regardless of their financial
                    background. Join us in our mission to make quality education a reality for everyone.</p>


                <div className='Coffermaindiv'>
                    <div className='Cofferinnerdiv'>
                        <div className='Coffermainbox'>
                            {/* <div className='Coffercourseicondiv'><img className='' src={courseimg} alt='Logo of coaching classes in thane'></img></div> */}
                            <h4>Expert faculty with proven track records</h4>
                            {/* <p>Structured guidance for CBSE, ICSE, IGCSE, and SSC students from Class 8 to Class 10</p> */}
                        </div>
                        <div className='Coffermainbox'>
                            {/* <div className='Coffercourseicondiv'><img className='' src={courseimg} alt='Logo of coaching classes in thane'></img></div> */}
                            <h4>Comprehensive study materials and resources</h4>
                            {/* <p>Special programs for Science and Commerce streams in Classes 11 & 12</p> */}
                        </div>
                        <div className='Coffermainbox'>
                            {/* <div className='Coffercourseicondiv'><img className='' src={courseimg} alt='Logo of coaching classes in thane'></img></div> */}
                            <h4>Regular assessments and feedback mechanisms</h4>
                            {/* <p> Expert-led coaching for JEE, NEET, CA, CS, and other entrance exams</p> */}
                        </div>
                        <div className='Coffermainbox'>
                            {/* <div className='Coffercourseicondiv'><img className='' src={courseimg} alt='Logo of coaching classes in thane'></img></div> */}
                            <h4>Affordable course fees without compromising on quality</h4>
                            {/* <p> Small batch sizes, one-on-one mentoring, and customized learning plans</p> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='secondsection1'>
                <h4>Impact</h4>
                <p className='secondsectionP'>1. Empowering students from underprivileged backgrounds to achieve academic
                    excellence.<br></br>
                    2. Bridging the educational gap, promoting inclusivity and equity.<br></br>
                    3. Fostering a more skilled and knowledgeable future workforce.</p>
            </div>

            <div className='secondsection1'>
                <h4>About The Course Program</h4>
                <p className='secondsectionP'>This is Course program is targeting to prepare students for national and regional
                    entrance examinations. So, these students can get a seat at one of the reputed
                    national or regional engineering, medical or pharma colleges.<br></br>
                    2-year integrated program for IIT-JEE, NEET-UG, and MHT-CET<br></br>
                    Targeting students from Class X to XI<br></br><br></br>

                    <b>Location of the Project</b><br></br>
                    In Thane, Maharashtra<br></br><br></br>
                    <b>Target Students</b><br></br>
                    - Class X to XI moving student<br></br>
                    - Financially challenged students aspiring to pursue higher education at
                    prestigious institutions.<br></br>
                    - Students from underprivileged backgrounds, including those from rural or urban
                    areas.<br></br><br></br>
                    <b>Total seats</b><br></br>
                    80<br></br><br></br>
                    <b>Student Selection Process</b><br></br>
                    1. Notification to apply through a leading newspaper in Thane.<br></br>
                    2. Application to be submitted to the nearest Nayak’s Tutorials Centre @ Rs. 100.<br></br><br></br>
                    <b>Criteria of Student’s Selection</b><br></br>
                    Criteria for Shortlisting Students for the 'Anant' Project<br></br><br></br>
                    <b>Financial Criteria</b><br></br>
                    1. Family income below a certain threshold (As per annexure A)<br></br>
                    2. Documentation proof of income (e.g., income certificate, salary slips)<br></br>
                    3. Other indicators of financial need (e.g., ration card, BPL certificate, electricity
                    bill)<br></br><br></br>
                    <b>Academic Criteria</b><br></br>
                    1. Excellent academic record (As per annexure A)<br></br>
                    2. High potential for success in IIT-JEE, NEET-UG, or MHT-CET, e.g., Admission Test
                    scores, Class X score & other academic achievements. (As per annexure A)<br></br>
                    3. Demonstrated interest and aptitude in the chosen field (e.g., science,
                    mathematics)<br></br><br></br>
                    <b>Additional Considerations</b><br></br>
                    1. Socio-economic background (e.g., rural, urban slum, marginalized
                    communities)<br></br>
                    2. First-generation learners or students from underrepresented groups<br></br>
                    3. Personal circumstances (e.g., disability, family challenges)<br></br><br></br>
                    <b>Selection Process</b><br></br>
                    1. Application and documentation review<br></br>
                    2. Entrance test or assessment (if required).<br></br>
                    3. A personal interview or interaction (if required).<br></br>
                    4. Final selection based on a holistic evaluation of financial need and academic
                    potential

                </p>


            </div>



            {/* <div className='homeSslider'>
                <Slider className='featureCaurnewlanding' {...sliderSettings}>

                    <img className="cimg2" src={mainBanner1} alt="SSC Top Achievers" />
                    <img className=" cimg2" src={mainBanner2} alt="First slide" />
                    <img className=" cimg2" src={mainBanner3} alt="First slide" />
                    <img className=" cimg2" src={mainBanner4} alt="jeeall slide" />

                </Slider>
            </div> */}






            <div className='Cmaindiv1'>
                <h2>Partnership Opportunities</h2>
                <p className='CmaindivP'><b>We seek Corporate, Trustees & Media House support for the project and how the
                    Corporate & Trustees can support to the cause:</b><br></br>
                    1. Sponsor course fee for deserving students.<br></br>
                    2. Provide resources for infrastructure upgrades.<br></br>
                    3. Contribute to our efforts at making quality education more accessible.<br></br>
                    4. Every sponsor’s name will be associated with the project i.e. as per their
                    willingness<br></br><br></br>
                    <b>How a Media House can support to the cause:</b><br></br>
                    They may partner with us and enabling us to reach to the right audience PR and
                    Program announcement through the newspaper & their digital assets<br></br><br></br>
                    <b>The project will be project as
                        “Nayak’s Tutorials in association with “Media House Name”</b>
                    Presents
                    <b>“AnaNT”</b> “Infinite Possibilities, Endless Opportunities”<br></br><br></br>
                    <b>Partnership Benefits</b><br></br>
                    1. Contributing to social responsibility and community development.<br></br>
                    2. Enhancing corporate reputation through association with a reputable
                    educational initiative.<br></br>
                    3. Supporting the growth of talented individuals who can drive future innovation.<br></br>
                    4. Your brand reputation enhancement.</p>




            </div>

            <div className='landQualitydiv'>
                <h3>Conclusion</h3>

                <p>Nayak's Tutorials invites corporate partners to join us in empowering their dreams
                    through quality education. Together, we can make a meaningful difference in the lives of financially challenged students, shaping a brighter future for generations to
                    come.</p>

                <p id='s'>We look forward to discussing this proposal in detail and exploring opportunities for
                    collaboration. Let's work together to create a more inclusive and equitable
                    educational landscape.</p><br></br><br></br>
                <div class="input-group mySearch">
                    <a href="/downloads/anant form.pdf" download>
                        <button class="fincCenteranant">Download Form</button>
                    </a>
                </div>

            </div>





            <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>


            <div className='newenquirediv'><Newenqire /></div>

            {/* <Footer /> */}
        </>
    )
}

export default Anant
