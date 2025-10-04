import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import mainImg from "../../Assets/cbse/mainImg.png"
import dot from "../../Assets/cbse/dot.png"
import dot2 from "../../Assets/faq/dot.png"
import matrix from "../../Assets/cbse/matrix.png"
import trivia from "../../Assets/cbse/newTrivia -8th.png"
import person from "../../Assets/testimonial/person.png"
import coma from "../../Assets/testimonial/coma.png"
import sanvi from "../../Assets/testimonial/sanvi.jpeg"
import ananyaParent from "../../Assets/testimonial/Annanya parents.jpg"
import ananya from "../../Assets/testimonial/ananya.png"
import saloni from "../../Assets/testimonial/Saloni.png"
import ridhima from "../../Assets/testimonial/Ridhima.png"
import "./ssceight.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useLocation } from 'react-router-dom'
import { Helmet } from "react-helmet";
import Newnavbar from '../newNavbar/Newnavbar'
import LogoContact from '../logoContact/logoContact'
import { FaWhatsapp } from "react-icons/fa";
import Newenqire from '../Enquire Form/Newenqire'

export default function SscEight() {
    // const location = useLocation()
    // const [sscstate, setSscstate] = useState(8)
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
        if (name && number && mail && selectedValue && selectSchool && selectCbse) {
            const mailtoLink = `mailto:enquiry@nayakstutorials.com?subject=Student requested a callback&body=Name: ${name}%0A
            Phone Number: ${number}%0A
            Email: ${mail}%0A
            Number: ${number}%0A
            Pincode: ${pincode}%0A
            Message: ${message}%0A
            Center:${selectedCenterValue}%0A
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
            <Helmet>
                <meta charSet="utf-8" />
                <title>SSC Classes in Thane | Grades 8, 9, and 10 (Class X) | Nayak's Tutorials</title>
                <meta name="title" content="SSC Classes in Thane | Grades 8, 9, and 10 (Class X) | Nayak's Tutorials" />
                <meta name="description" content="Nayak's Tutorials offers SSC coaching in Thane for Class VIII, IX, and X. With expert guidance, students are set up for success. Admissions are now open." />
                <link rel="canonical" href="https://nayakstutorials.com/classes-for-mh-ssc-board/" />


                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Nayak's Tutorials",
                        "image": "https://nayakstutorials.com/static/media/mainImg.2fd512e526d0412ced2e.png",
                        "url": "https://nayakstutorials.com/classes-for-mh-ssc-board/",
                        "telephone": "77100 10044",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Thane",
                            "addressCountry": "IN"
                        },
                        "logo": "https://nayakstutorials.com/static/media/Full_Logo.34552bea51a0af756476.png",
                        "sameAs": [
                            "https://www.facebook.com/nayakstutorialss/",
                            "https://x.com/nayaks_tutorial",
                            "https://www.instagram.com/nayakstutorialss/",
                            "https://www.youtube.com/channel/UCSEL7iQLhfjOrIoDQWOqbDw"
                        ]
                    }`}
                </script>

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
                            "name": "SSC State Board classes in Thane",
                            "item": "https://nayakstutorials.com/classes-for-mh-ssc-board/"
                        }]
                    }`}
                </script>

                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "SSC State Board classes in Thane",
                        "image": "https://nayakstutorials.com/static/media/mainImg.2fd512e526d0412ced2e.png",
                        "description": "Nayak's Tutorials offers SSC coaching in Thane for Class VIII, IX, and X. With expert guidance, students are set up for success. Admissions are now open.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Nayak's Tutorials"
                        }
                    }`}
                </script>

            </Helmet>
            {/* <Navbar /> */}

            <div className="wpfloat">

                <LogoContact />
                <Newnavbar />


                <div className='ssceightTopDiv'>

                    <div className='breadcrumbNayak' style={{ marginBottom: "10px" }}><a href='/'>Home »</a><a href='/'>Our Offerings »</a><a>School »</a><a>SSC</a></div>
                    <div className='ssceightMain'>
                        <div className='ssceightLeftDiv'>
                            <img src={mainImg} />
                        </div>
                        <div className='ssceightRightDiv'>
                            {/* <h3>SSC – 8<sup style={{textTransform:'lowercase'}}>th</sup> Std</h3> */}
                            <h3>Prepare for SSC Exam with Nayak's Tutorials</h3>
                            <p>To ace the SSC Exams early coaching is really essential especially from the 8th standard itself. At Nayak’s Tutorials, we help our students understand the concepts and be better prepared for the coming years whether you have enrolled in the class 8 coaching or class 9 coaching.
                                SSC classes hold significance as the curriculum becomes progressively challenging each year. Our aim is to align with other schools that cover the syllabus early in preparation for SSC exams, allowing ample time for revision and practice with test papers.
                                Enrolling in Nayak’s Tutorials for class 8 coaching sets an ideal foundation, positioning you in top gear by the time you reach class 10, bringing you closer to achieving the desired rank with continued support through class 9 coaching.



                            </p>
                        </div>
                    </div>
                </div>

                <div className='ssceightSecondDiv'>
                    <div className='ssceightSeconDiv'>
                        <h1>Why choose Nayak’s Tutorials for SSC Classes.</h1>

                        <div className='ssceightSeconMainDiv'>
                            <div className='ssceightMultipleText'>
                                <div className='ssceightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Expert Faculty</h3>
                                </div>
                                <p>Our coaching institute boasts a team of experienced and knowledgeable faculty members who are dedicated to providing quality education. They are adept at simplifying complex concepts, ensuring thorough understanding and clarity for students.</p>
                            </div>
                            <div className='ssceightMultipleText'>
                                <div className='ssceightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Customized Study Plans</h3>
                                </div>
                                <p>We understand that every student has unique learning needs. At Nayak’s Tutorials Coaching, we offer personalized study plans tailored to individual strengths and weaknesses, promoting effective learning and targeted preparation.</p>
                            </div>
                            <div className='ssceightMultipleText'>
                                <div className='ssceightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Regular Mock Tests and Assessments</h3>
                                </div>
                                <p>we conduct regular mock tests and assessments. These recreate the feel of the actual exam, making it easy for students to grasp the pattern and structure of SSC board exams.</p>
                            </div>
                            <div className='ssceightMultipleText'>
                                <div className='ssceightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Focus on Conceptual Understanding</h3>
                                </div>
                                <p>Our teaching methodology encourages critical thinking and problem-solving skills, enabling students to approach SSC exams with confidence and competence</p>
                            </div>
                            <div className='ssceightMultipleText'>
                                <div className='ssceightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Proven Track Record</h3>
                                </div>
                                <p>Nayak’s Tutorials Coaching has a consistent track record of success. Many of our students have achieved commendable results in SSC board exams, reflecting the effectiveness of our coaching methods.</p>
                            </div>
                            <div className='ssceightMultipleText'>
                                <div className='ssceightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Interactive Learning Environment</h3>
                                </div>
                                <p>Classroom sessions are designed to encourage active participation, fostering a positive and collaborative atmosphere conducive to effective learning.
                                    Opting for Nayak’s Tutorials Coaching for SSC board exams entails selecting a comprehensive and student-centric approach to education, emphasizing academic excellence and overall development through specialized SSC classes</p>
                            </div>
                            <div className='ssceightMultipleText'>
                                <div className='ssceightMultipleInnerDiv'>
                                    <img src={dot} />
                                    <h3>Nayak’s Tutorials SSC Coaching Centre Module</h3>
                                </div>
                                <p>This SSC Coaching Centre is completely offline now. Students need to come to our premises for each and every class</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='ssceightThirdDiv'>
                    <h1>Elevate Your Board Exam Preparation with Our SSC Coaching Classes</h1>
                    <div className='ssceightMainDiv2'>
                        <div id='ssceightFirst' className='ssceightMultipleText2'>
                            <div className='ssceightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Comprehensive Study Materials</h3>
                            </div>
                            <p>Access well-structured study materials at the beginning and periodically throughout your SSC board exam preparation.</p>
                        </div>
                        <div className='ssceightMultipleText2'>
                            <div className='ssceightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Scheduled SSC Classes</h3>
                            </div>
                            <p>Follow a systematic timetable for SSC classes, ensuring punctuality and effective session management.</p>
                        </div>
                        <div className='ssceightMultipleText2'>
                            <div className='ssceightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Interactive Feedback Sessions</h3>
                            </div>
                            <p>Participate in insightful feedback sessions involving both parents and students to enhance your learning experience.</p>
                        </div>
                        <div className='ssceightMultipleText2'>
                            <div className='ssceightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Targeted Doubt-Solving Sessions</h3>
                            </div>
                            <p>Take advantage of focused doubt-solving sessions tailored for exam preparation, ensuring a thorough understanding of SSC board topics.</p>
                        </div>
                        <div className='ssceightMultipleText2'>
                            <div className='ssceightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Safe Learning Environment</h3>
                            </div>
                            <p>Our SSC coaching centers are equipped with CCTV for a secure and supportive learning atmosphere, with a strict prohibition on inappropriate behavior.</p>
                        </div>
                        <div id='ssceighthidecon' className='ssceightMultipleText2'>
                            <div className='ssceightMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Safe Learning Environment</h3>
                            </div>
                            <p>Our SSC coaching centers are equipped with CCTV for a secure and supportive learning atmosphere, with a strict prohibition on inappropriate behavior.</p>
                        </div>

                        {/* <div id='matrixBoxx' className='ssceightMultipleText2'>
                        <div className='ssceightMultipleInnerDiv2'>
                            <img src={dot2} />
                            <h3>Use this matrix</h3>
                        </div>
                        <div className='matrixDiv'>
                            <img src={matrix} />
                        </div>
                    </div> */}
                    </div>
                </div>


                <div className='cbsetestimonial'>
                    <h1 className='testimonialHeading' >Testimonial</h1>
                    <div className='mainTestDiv' id='firstTestimonial'>
                        <div className='testimonialfirst'>
                            <div style={{ padding: '10px' }} className='testImgDiv'>
                                <img style={{ borderRadius: '50%' }} src={sanvi} alt='testimonial by Saanvi on securing 94.8 percentage in SSC boards' />
                            </div>
                            <p>Saanvi Kulkarni <br></br> X SSC – 94.80 percent <br></br> SVPT Rabodi</p>
                        </div>
                        <div className='testimonialsecond'>
                            <h5 className='TName'>Student</h5>
                            <p>I was in Nayak’s for my IX and X. I am extremely proud of being in Nayak’s Tutorials. They helped me in my studies in all the subjects. They are a big part of my success. They have been the backbone of helping me with my studies and solved my doubts from time to time. I thank the entire team of Nayak’s for my success. <br></br> Thank you very much. <br></br>I will always be a Proud Nayakaite.</p>
                        </div>
                        <div className='testimonialthird'>
                            <img src={coma} />
                        </div>
                    </div>

                    <div className='mainTestDiv'>
                        <div className='testimonialfirst'>
                            <div className='testImgDiv'>
                                <img src={ananya} alt='testimonial by Ananya on securing 97 percentage in SSC boards' />
                            </div>
                            <p>Ananyaa Kardale <br></br> X SSC – 97 percent <br></br> </p>
                        </div>
                        <div className='testimonialsecond'>
                            <h5 className='TName'>Student</h5>
                            <p>I started my journey in Nayak’s Tutorials from VIII. The entire team of Nayak’s Tutorials helped me get through my studies very smoothly and cleared all my doubts from time to time. They helped me with the little hurdles that I had during my study. I thank the entire team and I am very proud to be a Nayakaite. Thank you.</p>
                        </div>
                        <div className='testimonialthird'>
                            <img src={coma} />
                        </div>
                    </div>
                    <div className='mainTestDiv'>
                        <div className='testimonialfirst'>
                            <div style={{ padding: '10px' }} className='testImgDiv'>
                                <img style={{ borderRadius: '50%' }} src={ananyaParent} />
                            </div>
                            <p>Ananyaa Kardale <br></br> X SSC – 97 percent <br></br> </p>
                        </div>
                        <div className='testimonialsecond'>
                            <h5 className='TName'>Parent</h5>
                            <p>We are delightful with her performance. It was possible because of her hard work as well as with timely mentoring and doubt solving. Her foundation became really strong as she was with Nayak’s Tutorials since VIII grade, one of the reason why she could succeed with flying colours. We as parents, are completely satisfied with Nayak’s Tutorials. We hope their journey proceeds ahead with lot of glory and positivity. I wish they increase their branches throughout Maharashtra and all over India. Our gratitude and best wishes are with them.</p>
                        </div>
                        <div className='testimonialthird'>
                            <img src={coma} />
                        </div>
                    </div>
                    <div className='mainTestDiv'>
                        <div className='testimonialfirst'>
                            <div className='testImgDiv'>
                                <img src={ridhima} alt='testimonial by Riddhima on securing 98.2% in SSC boards' />
                            </div>
                            <p>Ridhima Tari <br></br> X SSC - 98.2 percent <br></br> A.K.Joshi</p>
                        </div>
                        <div className='testimonialsecond'>
                            <h5 className='TName'>Student</h5>
                            <p>I would like to give credit for my success to my parents who took the right decision of enrolling me with Nayak’s Tutorials. Throughout the year, I received immense support from the teachers and well as the non-teaching staff. They pushed me to my highest potential. We were provided with study material that helped a lot. We were also given prep talks from time to time that motivated me to do my best. Thank you so much to the entire team.</p>
                        </div>
                        <div className='testimonialthird'>
                            <img src={coma} />
                        </div>
                    </div>
                    {/* <div className='mainTestDiv'>
                    <div className='testimonialfirst'>
                        <div style={{ padding: '10px' }} className='testImgDiv'>
                            <img src={sanvi} style={{ borderRadius: '50%' }} />
                        </div>
                        <p>Saanvi Kulkarni <br></br> X SSC – 94.80 percent <br></br> SVPT Rabodi</p>
                    </div>
                    <div className='testimonialsecond'>
                        <h5 className='TName'>Parent</h5>
                        <p>Nayak’s Tutorials helped my ward till the very last moment. They have helped us to solve all difficulties and face all the challenges. We are very thankful.</p>
                    </div>
                    <div className='testimonialthird'>
                        <img src={coma} />
                    </div>
                </div> */}
                    <div className='mainTestDiv' id='lastTestimonial'>
                        <div className='testimonialfirst'>
                            <div className='testImgDiv'>
                                <img src={saloni} alt='testimonial by Saloni on securing 96.4 percentage in SSC boards' />
                            </div>
                            <p>Saloni Jadhav <br></br> X SSC - 96.4 percent  <br></br>SES</p>
                        </div>
                        <div className='testimonialsecond'>
                            <h5 className='TName'>Student</h5>
                            <p>Nayak’s Tutorials provided me with excellent education. They guided me and helped me in their best possible way. They provided us with excellent teachers. My parents’ decision to enroll me at Nayak’s Tutorials was the best decision ever. Thank you.</p>
                        </div>
                        <div className='testimonialthird'>
                            <img src={coma} />
                        </div>
                    </div>


                </div>

                <div className='ssceightLastDiv'>
                    <h3 className='ssceightFaq'>FAQ's</h3>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Is SSC the toughest board?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                While opinions vary, SSC exams are often seen as challenging. Our coaching classes provide expert guidance, personalized approaches, and comprehensive study materials to help students excel in their SSC board exams, ensuring they are well-prepared for success.
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    When and how to enroll at Nayak’s Tutorials SSC Classes?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                Admissions for the upcoming academic year typically commence shortly after the results are announced. Secure your preferred branch by enrolling in July or August, ensuring early admission and availability of your desired branch.
                                For admissions, call 022-21724848/7710010044 or <a>  <button style={{ color: 'red', border: 'none', backgroundColor: 'white' }} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@fat">inquire here</button> </a>.

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How can I score good marks in class 10?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                To score well in SSC, joining our Coaching Classes provides a strategic advantage with expert guidance, personalized learning, and comprehensive study materials tailored to enhance your exam preparation and academic performance.


                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What does the 'Best of Five' rule entail for SSC exams?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                The 'Best of Five' rule in SSC refers to considering the highest scores in five subjects out of six, excluding the subject with the lowest marks. This rule helps improve overall grades, and at Nayak’s Tutorials ssc coaching center, we guide you on optimizing this rule to maximize your academic success.


                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    How many hours do toppers study?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                Most toppers do a lot of self-study. So, apart from their school, the self-study and any additional tuition classes can be anywhere between 3 to 5 hours.

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Is 9th tougher than 10th std?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                The difficulty level between 9th and 10th standard can vary based on individual perspectives and subjects. Our Coaching classes provide tailored support for both grades, ensuring students are well-prepared and confident in tackling the challenges of each academic year.


                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    Can SSC students crack IIT?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                Yes, you can. We provide comprehensive support to SSC students aspiring for IIT, offering specialized programs to enhance their chances of success in these competitive exams.

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                    <Accordion allowMultipleExpanded={false} allowZeroExpanded>
                        <AccordionItem >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    What strategy can we use while preparing for SSC Class 10?
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>

                                When preparing for SSC Class 10, adopting a strategic approach is essential. Our Coaching emphasizes a methodical study plan, targeted practice sessions, and regular assessments to ensure thorough comprehension and effective exam readiness for SSC Class 10

                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>

                </div>

                {/* <div className='ssceightTriviaImgDiv'>
                <img src={trivia} />
            </div> */}
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

                                            {selectSchool === 'SSC' && (
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
                <Footer />

                <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>
                {/* <div className='newenquirediv'><Newenqire /></div> */}
            </div>
        </>
    )
}
