import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import faculty from "../../Assets/advantage/Faculty.png"
import study from "../../Assets/advantage/Study Material.png"
import test from "../../Assets/advantage/Test.png"
import assessment from "../../Assets/advantage/assessment.png"
import counseling from "../../Assets/advantage/counselling.png"
import pti from "../../Assets/advantage/PTI.png"
import feedback from "../../Assets/advantage/feedback.png"
import exam from "../../Assets/advantage/exam guidance.png"
import motivation from "../../Assets/advantage/Motivation.png"
import revision from "../../Assets/advantage/revision.png"
import doubt from "../../Assets/advantage/Daubt solving.png"
import development from "../../Assets/advantage/360 development.png"
import extracurcular from "../../Assets/advantage/extracurricular-activities.png"
import appriciation from "../../Assets/advantage/good-job.png"
import './advantage.css'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';



export default function Advantage() {

    const sliderSettings2 = {
        dots: true,
        autoplay: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 560, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 940, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1140, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1200, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };


const[heading,setHeading]=useState("")
const[subheading,setSubHeading]=useState("")


    const modalValue = [
        {  "content": "Our faculty comprises of specially trained professionals and experts  from their respective fields who guide and facilitate the students to realise their full potential and drive them towards their goals.", "index": "0" , "id": 1, "img": faculty, "heading": "Faculty" },

        {  "content": "Elaborate study material, systematically prepared with well-researched inputs and simplified language, are provided to all our students. Numerous customized worksheets pertaining to every subject, every topic and different levels of intellect are provided to the students. ", "index": "1", "id": 2, "img": study, "heading": "Study Material" , },

        {  "content": "Regular series of periodic tests as per school/college schedules are conducted religiously. Also, mock tests of challenging levels are help to gauge the performance potential of students.  ", "index": "2", "id": 3, "img": test, "heading": "Test" },

        {  "content": "Test and exam papers, assessed by highly qualified and competent teachers, are distributed within 15 days after the tests followed by a thorough discussion of the paper providing the students with tips and tricks to better their performance.", "index": "3", "id": 4, "img": assessment, "heading": "Assessment" },

        {  "content": "In-house professional counsellors motivate and guide our students. They ensure that students remain stress-free so that their performance is enhanced. Customized guidance regarding their study pattern, study plan and time management is provided.", "index": "4", "id": 5, "img": counseling, "heading": "Counseling" },
        
        {  "content": "Parents and teachers interact regularly so that each know very clearly what their roles are in enhancing the academic caliber of the students. ", "index": "5", "id": 6, "img": pti, "heading": "PTI" },
        
        {  "content": "Regular feedback of the student’s progress is provided to the parents & feedback from the parents is also taken from time to time. ", "index": "6", "id": 7, "img": feedback, "heading": "Feedback" },

        {  "content": "Special lectures with suitable guidelines for paper presentation and time management are arranged. This ensures improvement in marks of our students at the Board emans.", "index": "8", "id": 8, "img": exam, "heading": "Exam guidance" },
        
        {  "content": "At the appropriate time, when students need the final push, motivational sessions are conducted so that they can stay focused and reach their goal. ", "index": "9",  "id": 9, "img": motivation, "heading": "Motivation" },
        
        {  "content": "Revision lectures help students to revisit topics that were taught to them earlier. Our expert faculty clarifies the smallest doubts, focuses on and guides the students regarding the errors made in the previous exams.  ", "index": "10",  "id": 10, "img": revision, "heading": "Revision" },

        {  "content": "Sessions are scheduled before exams to solve the last-minute doubts of the students. These doubts are cleared in person or virtually.  ", "index": "11",  "id": 11, "img": doubt, "heading": "Doubt Solving" },
        
        {  "content": "We, at Nayak’s Tutorials, believe in overall development of our students. Not only do we facilitate excellent results, but also ensure 360⁰ development of the students enabling them to become more disciplined. Sincere, hardworking and adaptable. ", "index": "12",  "id": 12, "img": development, "heading": "360 Development" },

        {  "content": "All work and no play makes Jack/Jill a dull boy/girl, as per this axiom we encourage students to participate in co-curricular activities, fun-filled competitions conducted for the students throughout the year. Their talents and achievement pertaining to extra-curriculars are encouraged, displayed and appreciated by the team and faculty alike.  ", "index": "13",  "id": 13, "img": extracurcular, "heading": "Extracurricular"},

        {  "content": "We believe that we are only the first rung of the ladder of achievement encouraging them to scale the ladder of success. We appreciate the immense efforts put in by the students and the parents. On this journey students and the parents are aptly rewarded for their achievements during the special annual function. ", "index": "14",  "id": 14, "img": appriciation, "heading": "Appreciation"},
    ]


    


    let subtitle;
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '0%',
            transform: 'translate(-50%, -50%)',
            // border: '2px solid black',
            borderRadius: '20px',

        },
    };

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = (element) => {
        // console.log("elee",element)
        setHeading(element.heading)
        setSubHeading(element.content)
        setIsOpen(true)
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    // function closeModal() {
    //     setIsOpen(false);
    // }

    // function openModal(id) {
    //     setIsOpen(true);
    // }



    return (
        <>
            <div className='advantageMainDiv'>
                {/* <h1 className='advantageHeading'>Nayak’s Advantage</h1> */}
                <div className='higheradvantage'>
                    <div className='newsmallHeadingadvan'><h1>Nayak’s ADVANTAGE</h1></div>
                    <div className='mainOfferDivadvan'>
                        <div className='BigHeadingadvan'><h1>Nayak’s ADVANTAGE</h1></div>
                        <div className='smallHeadingadvan'><h1>Nayak’s ADVANTAGE</h1></div>
                    </div>
                </div>

                <div className='advanslider'>
                    <Slider className='featureCaurnew' {...sliderSettings2}>

                        {modalValue.map((element, index) => {
                            return (<>
                                <div onClick={() => openModal(element)} key={index} href='#' className='advantageinnerDiv' style={{cursor:'pointer'}}>
                                    <img className="cimg2" src={element.img} alt="First slide" />
                                    <h3>{element.heading}</h3>
                                </div>
                            </>)
                        })}
                        {/* <div onClick={openModal} href='#' className='advantageinnerDiv'>
                            <img className="cimg2" src={faculty} alt="First slide" />
                            <h3>FACULTY</h3>
                        </div> */}

                        {/* <a onClick={openModal} className='advantageinnerDiv'>
                            <img className="cimg2" src={study} alt="First slide" />
                            <h3>Study Material</h3>
                        </a>
                        <a className='advantageinnerDiv'>
                            <img className="cimg2" src={test} alt="First slide" />
                            <h3>Test</h3>
                        </a>
                        <a className='advantageinnerDiv'>
                            <img className="cimg2" src={assessment} alt="First slide" />
                            <h3>Assessment</h3>
                        </a>
                        <a className='advantageinnerDiv'>
                            <img className="cimg2" src={counseling} alt="First slide" />
                            <h3>Counseling</h3>
                        </a>
                        <a className='advantageinnerDiv'>
                            <img className="cimg2" src={pti} alt="First slide" />
                            <h3>PTI</h3>
                        </a>
                        <a className='advantageinnerDiv'>
                            <img className="cimg2" src={feedback} alt="First slide" />
                            <h3>feedback</h3>
                        </a>
                        <a className='advantageinnerDiv'>
                            <img className="cimg2" src={exam} alt="First slide" />
                            <h3>Exam guidance</h3>
                        </a>
                        <a className='advantageinnerDiv'>
                            <img className="cimg2" src={motivation} alt="First slide" />
                            <h3>motivation</h3>
                        </a>
                        <a className='advantageinnerDiv'>
                            <img className="cimg2" src={revision} alt="First slide" />
                            <h3>revision</h3>
                        </a>
                        <a className='advantageinnerDiv'>
                            <img className="cimg2" src={doubt} alt="First slide" />
                            <h3>Doubt Solving</h3>
                        </a>
                        <a className='advantageinnerDiv'>
                            <img className="cimg2" src={development} alt="First slide" />
                            <h3>360 Development</h3>
                        </a>
                        <a className='advantageinnerDiv'>
                            <img className="cimg2" src={extracurcular} alt="First slide" />
                            <h3>Extracurricular</h3>
                        </a>
                        <a className='advantageinnerDiv'>
                            <img className="cimg2" src={appriciation} alt="First slide" />
                            <h3>Appreciation</h3>
                        </a> */}


                        {/* <img className="cimg2" src={sscT} alt="First slide" />
                    <img className=" cimg2" src={cbseT} alt="First slide" />
                    <img className=" cimg2" src={icseT} alt="First slide" />
                    <img className="cimg2" src={sscT} alt="First slide" />
                    <img className=" cimg2" src={cbseT} alt="First slide" />
                    <img className=" cimg2" src={icseT} alt="First slide" /> */}

                    </Slider>
                </div>





                {/* modal  */}
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    {/* {
                        modalValue.map((item) => {
                            return (<>

                                <h2 className='newModalhead' ref={(_subtitle) => (subtitle = _subtitle)}>{modalContent.heading}</h2>
                                <button onClick={closeModal}>close</button>
                                <p>
                                    {item.content}
                                </p>
                            </>)
                        })
                    } */}
                    <h2 className='newModalhead' ref={(_subtitle) => (subtitle = _subtitle)}>{heading}</h2>
                    {/* <button onClick={closeModal}>close</button> */}
                    <p>
                        {subheading}
                    </p>
                </Modal>


            </div>
        </>
    )
}
