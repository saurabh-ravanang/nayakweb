import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import "./navbar.css";
// import img from "../../Assets/Navbar/Nayaks_logo.png"
import img from "../../Assets/Navbar/Full_Logo.png"

export default function Navbar() {
    const [toggleBtn2, setToggleBtn2] = useState(true)
    const [schoolBtn, setSchoolBtn] = useState(true)
    const [collegeBtn, setCollegeBtn] = useState(true)
    const [comBtn, setComBtn] = useState(false)
    const [innerClgBtn, setInnerClgBtn] = useState(false)
    const [practice, setPractice] = useState(true)

    // var toggleBtn = true

    const maintoggle = () => {
        console.log('dsfds', toggleBtn2)
        setToggleBtn2(!toggleBtn2)
        // toggleBtn = false
    }
    const schoolToggle = () => {
        setSchoolBtn(!schoolBtn)
    }
    const mainClgToggle = () => {
        setCollegeBtn(!collegeBtn)
    }
    const competitiveFunc = (e) => {
        // alert('jadjhvds')
        // alert(comBtn)
        setCollegeBtn(true)
        setComBtn(!comBtn)
        e.stopPropagation();
    }
    
    const InnerClg = (e) => {
        setInnerClgBtn(!innerClgBtn)
        e.stopPropagation();
    }

    const practicepaperFunc = () => {
        console.log("sajdajhvjhvssd")
        setPractice(!practice)
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-lightt fixed-top" style={{ backgroundColor: 'white' }}>
                <div class="container-fluid">
                    <a class="navbar-brand mainLogo" href="/"><img src={img} alt='Logo of coaching classes in thane'></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav  mb-2 mb-lg-0 newNavbar">
                            <li class="nav-item nav-itemm">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            

                            {/* <li class="nav-item">
                                <a class="nav-link" href="#">About Us</a>
                            </li> */}
                            <li class="nav-item nav-itemm">
                                <a class="nav-link" href="/about">About Us</a>
                            </li>
                            {/* comment out later */}
                            {/* <li class="nav-item nav-itemm dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item myAnchor" href="/about">
                                        History
                                    </a></li>
                                    <div class="dropdownN">
                                        <span className='dropdown-toggle' >Values </span>
                                        <div class="dropdown-contentN">
                                            <a class="myAnchor" href='/example'><p>Vision</p></a>
                                            <a class="myAnchor" href='/example2'><p>Mission</p></a>
                                            <a class="myAnchor" href='/example2'><p>Key Strengths</p></a>
                                            <a class="myAnchor" href='/example2'><p>Core Values</p></a>
                                        </div>
                                    </div>
                                </ul>
                            </li>    */}

                            <li id='HoverOffer' class="nav-item nav-itemm dropdown">
                                <a onClick={maintoggle} class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Our Offerings
                                </a>
                                {toggleBtn2 ? (<>
                                    <ul class="dropdown-menu">

                                        <div onClick={schoolToggle} class="dropdownN">
                                            <span className='dropdown-toggle ourdrop' >School</span>
                                            {schoolBtn ? <>
                                                <div class="dropdown-contentN">
                                                    <a class="myAnchor" href='/cbse-classes'><p>CBSE</p></a>
                                                    {/* <a class="myAnchor" href='/cbseeight'><p>CBSE</p></a> */}
                                                    <a class="myAnchor" href='/icse-classes'><p>ICSE</p></a>
                                                    <a class="myAnchor" href='/igcse-classes'><p>IGCSE</p></a>
                                                    <a class="myAnchor" href='/classes-for-mh-ssc-board'><p>SSC</p></a>
                                                    <a class="myAnchor" href='/olympiads'><p>OLYMPIADS</p></a>
                                                </div></> : null}
                                        </div>
                                        <div onClick={mainClgToggle} class="dropdownN">
                                            <span className='dropdown-toggle ourdrop' >College</span>
                                            {collegeBtn ? <>
                                                <div class="dropdown-contentN">
                                                    <div class="dropdownNN HideDrop1">
                                                        <a class="myAnchor" href='/eleven&Twelth'><p>11<sup>th</sup> & 12<sup>th</sup></p></a>
                                                        <a class="myAnchor" href='/tybcom'><p>TY Bcom</p></a>
                                                        <a class="myAnchor" target='_blank' href='https://milkarjeetayenge.com/'><p>Pre Engineering</p></a>
                                                        <a class="myAnchor" target='_blank' href='https://milkarjeetayenge.com/'><p>Pre Medical</p></a>
                                                        {/* <a class="myAnchor" href='/engineering'><p>Engineering & Medical</p></a> */}
                                                        <a class="myAnchor" href='/ca'><p>CA & CS</p></a>
                                                        {/* <a class="myAnchor" href='/comingsoon'><p>TY Bcom</p></a> */}


                                                        {/* <span onClick={competitiveFunc} className='dropdown-toggle' >Competitive</span>
                                                        {comBtn ? <>
                                                            <div class="dropdown-contentNN">
                                                                <a class="myAnchor" href='/engineering'><p>Engineering</p></a>
                                                                <a class="myAnchor" href='/example2'><p>Medical</p></a>
                                                                <a class="myAnchor" href='/ca'><p>CA</p></a>
                                                                <a class="myAnchor" href='/example2'><p>CS</p></a>
                                                            </div></> : null} */}
                                                    </div>
                                                    <div class="dropdownNN HideDrop2">
                                                        <a class="myAnchor" href='/eleven&Twelth'><p>11<sup>th</sup> & 12<sup>th</sup></p></a>
                                                        <a class="myAnchor" href='/tybcom'><p>TY Bcom</p></a>
                                                        <a class="myAnchor" target='_blank' href='https://milkarjeetayenge.com/'><p>Pre Engineering</p></a>
                                                        <a class="myAnchor" target='_blank' href='https://milkarjeetayenge.com/'><p>Pre Medical</p></a>

                                                        {/* <a class="myAnchor" href='/engineering'><p>Engineering & Medical</p></a> */}
                                                        <a class="myAnchor" href='/ca'><p>CA & CS</p></a>
                                                        {/* <a class="myAnchor" href='/comingsoon'><p>TY Bcom</p></a> */}

                                                        {/* <span className='dropdown-toggle' >Competitive</span>
                                                        <div class="dropdown-contentNN">
                                                            <a class="myAnchor" href='/engineering'><p>Engineering</p></a>
                                                            <a class="myAnchor" href='/example2'><p>Medical</p></a>
                                                            <a class="myAnchor" href='/ca'><p>CA</p></a>
                                                            <a class="myAnchor" href='/example2'><p>CS</p></a>
                                                        </div> */}
                                                    </div>
                                                    {/* <div class="dropdownNN HideDrop1">
                                                        <span onClick={InnerClg} className='dropdown-toggle' >College</span>
                                                        {innerClgBtn ? <>
                                                            <div class="dropdown-contentNN">
                                                                <a class="myAnchor" href='/eleven&Twelth'><p>11th & 12th</p></a>
                                                                <a class="myAnchor" href='/example'><p>TY Bcom</p></a>
                                                            </div>
                                                        </> : null}
                                                    </div>
                                                    <div class="dropdownNNN HideDrop2">
                                                        <span className='dropdown-toggle' >College</span>
                                                        <div class="dropdown-contentNNN">
                                                            <a class="myAnchor" href='/eleven&Twelth'><p>11th & 12th</p></a>
                                                            <a class="myAnchor" href='/example'><p>TY Bcom</p></a>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </> : null}
                                        </div>
                                        <li><a style={{ marginBottom: '8px', marginTop: '4px' }} id='hoverperformance' class="dropdown-item myAnchor" href="/class-10-score-booster-course">
                                            Score Booster
                                        </a></li>
                                        <li><a style={{ marginTop: '12px' }} id='hoverpreschool' class="dropdown-item myAnchor" href="/preschool">Pre-school </a></li>
                                        <li><a target='_blank' href='https://careerprep.co.in/' style={{ marginTop: '12px' }} id='hoverpreschool' class="dropdown-item myAnchor">Career Prep </a></li>
                                    </ul></>) : null}
                            </li>
                            <li class="nav-item nav-itemm">
                                <a class="nav-link" href="/testimonial">Success Stories</a>
                            </li>
                            {/* <li class="nav-item nav-itemm dropdown">
                                <a onClick={practicepaperFunc} class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Practice Papers
                                </a>
                                {practice ? (<>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">CBSE</a></li>
                                        <li><a class="dropdown-item" href="#">ICSC</a></li>
                                        <li><a class="dropdown-item" href="#">SSC</a></li>
                                    </ul>
                                </>) : null}
                            </li> */}
                            <li class="nav-item nav-itemm">
                                <a class="nav-link active" aria-current="page" href="/paper">Practice Papers</a>
                            </li>
                            <li class="nav-item nav-itemm">
                                <a class="nav-link active" aria-current="page" href="/notes/matter-in-our-surroundings-class-9-science">Notes</a>
                            </li>
                            <li class="nav-item nav-itemm">
                                <a class="nav-link" href="/mainfaq">FAQ</a>
                            </li>
                            <li class="nav-item nav-itemm">
                                <a class="nav-link active" aria-current="page" href="/blog">Blog</a>
                            </li>
                            <li class="nav-item nav-itemm">
                                <a class="nav-link" href="/contact">Contact Us</a>
                            </li>

                            {/* <div class="btn-group">
                                 <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    my Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Separated link</a></li>
                                </ul>
                            </div> */}

                        </ul>
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>


        </>
    )
}
