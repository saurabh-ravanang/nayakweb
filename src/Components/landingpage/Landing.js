import React, { useState } from 'react'
import './landing.css'
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

function Landing() {
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
                        <h2>Nayak’s Tutorials – Guiding Students to Success Since 2000</h2>
                        <img className="boysnayaklanding" src={nayakbanner} alt="SSC Top Achievers" />

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





                    <div className='hright'>
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
                    </div>










                </div>
            </div>

            <div className='landtopperdiv'>
                <img className="landtopperdivimg" src={mainBanner1} alt="SSC Top Achievers" />
                <img className="landtopperdivimg" src={mainBanner2} alt="First slide" />
                <img className="landtopperdivimg " src={mainBanner3} alt="First slide" />
                <img className="landtopperdivimg " src={mainBanner4} alt="jeeall slide" />
            </div>


            <div id='landtestimonialmain' className='cbsetestimonial'>
                <h1 className='testimonialHeading' >Testimonial</h1>
                <div className='mainTestDiv' id='firstTestimonial'>
                    <div className='testimonialfirst'>
                        <div style={{ padding: '10px' }} className='testImgDiv'>
                            <img src={person} alt='testimonial by Sanjana Sawant' />
                        </div>
                        <p>Sanjana Sawant<br></br> 97.60%  <br></br></p>
                    </div>
                    <div className='testimonialsecond'>
                        <h5 className='TName'>Student</h5>
                        <p>I'm Sanjana Sawant, I scored 97.60% in my 10th boards. I was in Nayak's Tutorials since 9th Std. I'm very grateful for enrolling in Nayak's Tutorials because they have supported me and the guidance has been very helpful at every stage from 9th to 10th & the teachers have been very helpful. Everyone from the management was very helpful to us to score such an immense score & am very happy & jolly to be part of Nayak's & to be a proud Nayakaite.</p>
                    </div>
                    <div className='testimonialthird'>
                        <img src={coma} />
                    </div>
                </div>
                <div className='mainTestDiv' id='lastTestimonial'>
                    <div className='testimonialfirst'>
                        <div style={{ padding: '10px' }} className='testImgDiv'>
                            <img src={person} />
                        </div>
                        {/* <p>Saanvi Kulkarni <br></br> X SSC – 94.80 percent <br></br> SVPT Rabodi</p> */}
                        <p>Vidhi Patil<br></br>97.60%<br></br> </p>
                    </div>
                    <div className='testimonialsecond'>
                        <h5 className='TName'>Student</h5>
                        <p>I'm Vidhi Patil, I'm very grateful that I have enrolled in Nayak's Tutorials it is such a distinct institution. I've got an opportunity to score such a big score & it's really all about hard work. Hard work has brought me till this far. Yes am a proud Nayakaite.</p>
                    </div>
                    <div className='testimonialthird'>
                        <img src={coma} />
                    </div>
                </div>
                <div className='mainTestDiv' id='lastTestimonial'>
                    <div className='testimonialfirst'>
                        <div style={{ padding: '10px' }} className='testImgDiv'>
                            <img src={person} alt='testimonial by Bhumi Sharma' />
                        </div>
                        <p>Bhumi Sharma<br></br> 95.80%  <br></br></p>
                    </div>
                    <div className='testimonialsecond'>
                        <h5 className='TName'>Parent</h5>
                        <p>I took admission for my daughter for 9th and 10th standard. I would like to confirm that they did an excellent job and we could see the progress in her studies and she finally scored 96% in her CBSE board exams. Their planning for each student is spot on. They even conducted a dummy board exams level pre boards which really helped a lot. This is one of the best classes for 10th standard.</p>
                    </div>
                    <div className='testimonialthird'>
                        <img src={coma} />
                    </div>
                </div>
                <div className='mainTestDiv' id='lastTestimonial'>
                    <div className='testimonialfirst'>
                        <div style={{ padding: '10px' }} className='testImgDiv'>
                            <img src={person} />
                        </div>
                        {/* <p>Saanvi Kulkarni <br></br> X SSC – 94.80 percent <br></br> SVPT Rabodi</p> */}
                        <p>Tanishka Kamble<br></br>94.00%<br></br> </p>
                    </div>
                    <div className='testimonialsecond'>
                        <h5 className='TName'>Student</h5>
                        <p>Hello everyone, this is Tanishka Kamble, am a CBSE student at TVH centre. I scored 94% in my board exams. I'm very proud & satisfied & first of all am very grateful to all the teachers staff members & friends at Nayak's Tutorials for all the support & guidance. Thank you so much, thanks a lot & special thanks to Pooja Ma'am, Love You.</p>
                    </div>
                    <div className='testimonialthird'>
                        <img src={coma} />
                    </div>
                </div>
                <div className='mainTestDiv' id='lastTestimonial'>
                    <div className='testimonialfirst'>
                        <div style={{ padding: '10px' }} className='testImgDiv'>
                            <img src={person} />
                        </div>
                        {/* <p>Saanvi Kulkarni <br></br> X SSC – 94.80 percent <br></br> SVPT Rabodi</p> */}
                        <p>Lole Nagle<br></br>97.40%<br></br> </p>
                    </div>
                    <div className='testimonialsecond'>
                        <h5 className='TName'>Student</h5>
                        <p>I scored 97.40% in 10th Std. ICSE Board exams. I'm from Vasant Vihar centre. I would like to express my heartful gratitude towards all of my beloved teachers & the entire Nayak's Tutorials' staff who has been there with me throughout my journey supporting & motivating me all along the way. Thanks to them. Without them this wouldn't have been possible.</p>
                    </div>
                    <div className='testimonialthird'>
                        <img src={coma} />
                    </div>
                </div>
                <div className='mainTestDiv' id='lastTestimonial'>
                    <div className='testimonialfirst'>
                        <div style={{ padding: '10px' }} className='testImgDiv'>
                            <img src={person} />
                        </div>
                        {/* <p>Saanvi Kulkarni <br></br> X SSC – 94.80 percent <br></br> SVPT Rabodi</p> */}
                        <p>Nidhi Shenolikar<br></br>96.40%<br></br> </p>
                    </div>
                    <div className='testimonialsecond'>
                        <h5 className='TName'>Parent</h5>
                        <p>Hello this is proud parent of Nidhi Shenolikar who has scored brilliant marks & we are very proud of her not just marks & % but her entire journey throughout the year, be it in Nayak's, be it in school, be it extra curriculum, 10 on 10 for everything specially for the efforts she along with the teachers & all the mentors have gone through it together. Hats Off! As far as Nayak's is considered, we are very happy with Nayak's Tutorials. All the teachers were excellent. She herself said "now I started loving

                            Mathematics because of my teachers", which is MRO sir, Pramila Ma'am. Indrayani Ma'am is again one of the favourites. These teachers really are valued not only for the subject but also as a person. Thank you to the entire team of Nayak's, for the opportunity to express.</p>
                    </div>
                    <div className='testimonialthird'>
                        <img src={coma} />
                    </div>
                </div>

            </div>


            <div className='secondsection'>
                <h4>Your Trusted Partner in Education</h4>
                <p className='secondsectionP'>For over two decades, Nayak's Tutorials has been a leading name in the field of education, providing expert coaching to students across school boards (CBSE, ICSE, IGCSE, SSC), college, and competitive exams (JEE, NEET, CA, CS). With a legacy of excellence, we continue to empower students with quality education, expert mentorship, and a result-oriented approach.</p>
            </div>


            <div className='whymaindivnew'>
                <h2>Why Choose Nayak’s Tutorials?</h2>

                <div className='whyinnerdivnew'>
                    <div className='whymainboxnew'>
                        {/* <div className='whymainboximgdivnew'><img className='whymainboximgnew' src={img1} alt='Logo of coaching classes in thane'></img></div> */}
                        <div className='whymainboximgdivnew'><div className='landrecdiv'></div></div>

                        <div className='whymainboxtextdivnew'>
                            <h3>Established in 2000</h3>
                            <p>Over 25+ years of academic excellence</p>
                        </div>
                    </div>

                    <div className='whymainboxnew'>
                        {/* <div className='whymainboximgdivnew'><img className='whymainboximgnew' src={img3} alt='Logo of coaching classes in thane'></img></div> */}
                        <div className='whymainboximgdivnew'><div className='landrecdiv2'></div></div>
                        <div className='whymainboxtextdivnew'>
                            <h3>10,000+ Students Annually</h3>
                            <p>A trusted choice for students and parents</p>
                        </div>
                    </div>

                    <div className='whymainboxnew'>
                        {/* <div className='whymainboximgdivnew'><img className='whymainboximgnew' src={img4} alt='Logo of coaching classes in thane'></img></div> */}
                        <div className='whymainboximgdivnew'><div className='landrecdiv3'></div></div>
                        <div className='whymainboxtextdivnew'>
                            <h3> Easily accessible learning hubs</h3>
                            <p>17+ Centers Across Maharashtra</p>
                        </div>
                    </div>
                    <div className='whymainboxnew'>
                        {/* <div className='whymainboximgdivnew'><img className='whymainboximgnew' src={img2} alt='Logo of coaching classes in thane'></img></div> */}
                        <div className='whymainboximgdivnew'><div className='landrecdiv4'></div></div>
                        <div className='whymainboxtextdivnew'>
                            <h3>500+ Expert Tutors</h3>
                            <p>Dedicated and experienced faculty</p>
                        </div>
                    </div>
                    <div className='whymainboxnew'>
                        {/* <div className='whymainboximgdivnew'><img className='whymainboximgnew' src={img1} alt='Logo of coaching classes in thane'></img></div> */}
                        <div className='whymainboximgdivnew'><div className='landrecdiv5'></div></div>
                        <div className='whymainboxtextdivnew'>
                            <h3>Tailored for every student’s success</h3>
                            <p> Comprehensive Study Material & Personalized Coaching</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className='homeSslider'>
                <Slider className='featureCaurnewlanding' {...sliderSettings}>

                    <img className="cimg2" src={mainBanner1} alt="SSC Top Achievers" />
                    <img className=" cimg2" src={mainBanner2} alt="First slide" />
                    <img className=" cimg2" src={mainBanner3} alt="First slide" />
                    <img className=" cimg2" src={mainBanner4} alt="jeeall slide" />

                </Slider>
            </div> */}


            



            <div className='Cmaindiv'>
                <h2>A Holistic Approach to Learning</h2>
                <p className='CmaindivP'>At Nayak's Tutorials, we believe in nurturing young minds with a conceptual, practical, and student-centric approach. Our programs focus on strong fundamentals, skill-building, and exam strategies to ensure academic success.</p>


                <div className='Coffermaindiv'>
                    <div className='Cofferinnerdiv'>
                        <div className='Coffermainbox'>
                            {/* <div className='Coffercourseicondiv'><img className='' src={courseimg} alt='Logo of coaching classes in thane'></img></div> */}
                            <h4>School <br></br> Coaching</h4>
                            <p>Structured guidance for CBSE, ICSE, IGCSE, and SSC students from Class 8 to Class 10</p>
                        </div>
                        <div className='Coffermainbox'>
                            {/* <div className='Coffercourseicondiv'><img className='' src={courseimg} alt='Logo of coaching classes in thane'></img></div> */}
                            <h4>Junior & Senior <br></br> College Coaching</h4>
                            <p>Special programs for Science and Commerce streams in Classes 11 & 12</p>
                        </div>
                        <div className='Coffermainbox'>
                            {/* <div className='Coffercourseicondiv'><img className='' src={courseimg} alt='Logo of coaching classes in thane'></img></div> */}
                            <h4>Competitive Exam <br></br> Preparation</h4>
                            <p> Expert-led coaching for JEE, NEET, CA, CS, and other entrance exams</p>
                        </div>
                        <div className='Coffermainbox'>
                            {/* <div className='Coffercourseicondiv'><img className='' src={courseimg} alt='Logo of coaching classes in thane'></img></div> */}
                            <h4>Personalized Tuition & <br></br> Doubt Solving</h4>
                            <p> Small batch sizes, one-on-one mentoring, and customized learning plans</p>
                        </div>
                    </div>
                </div>

            </div>



           



            <div className='landQualitydiv'>
                <h3>Where Quality Meets Convenience</h3>

                <p>With multiple centers across Maharashtra, students can find the best coaching classes near them. Whether you are looking for CBSE tuition, ICSE coaching, IGCSE guidance, or SSC preparation, Nayak's Tutorials ensures expert mentoring at your convenience.</p>

                <p id='s'>📍 Find a Nayak Tutorials Center Near You! <br></br> 📞 Enroll Today! Call us at <a href='tel:+917710010044' className='landQualityNo'>+917710010044</a> or visit your nearest Nayak Tutorials center.</p>
            </div>




            <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>


            <div className='newenquirediv'><Newenqire /></div>

            {/* <Footer /> */}
        </>
    )
}

export default Landing
