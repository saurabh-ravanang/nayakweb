import React, { useEffect, useState } from 'react';
import 'foundation-sites/dist/css/foundation.min.css';
import $ from 'jquery';
import 'foundation-sites';
import img from "../../Assets/Navbar/Full_Logo.png"
import "./newnavbar.css";

const Newnavbar = () => {
  const [prevScrollTop, setPrevScrollTop] = useState(0);
  const [navHidden, setNavHidden] = useState(false);

  useEffect(() => {
    $(document).foundation();

    const handleScroll = () => {
      const scrollTop = $(window).scrollTop();
      setNavHidden(scrollTop > prevScrollTop);
      setPrevScrollTop(scrollTop);
    };

    $(window).on('scroll', handleScroll);

    return () => {
      $(window).off('scroll', handleScroll);
    };
  }, [prevScrollTop]);


  useEffect(() => {
    const navbar = document.getElementById("navbar2");
    const scrollThreshold = 50;  // Change this value if you want to make the scroll threshold smaller/larger

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        navbar.classList.add("fixed-top");
      } else {
        navbar.classList.remove("fixed-top");
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);





  return (
    <>
      {/* mobile nav */}
      <div id="container" className="grid-container newdesknav fixed-top">
        <div className="grid-x">

          <nav className={`scrollhide-nav ${navHidden ? 'hidden' : ''}`}>
            <div className="title-bar" data-responsive-toggle="example-menu" data-hide-for="xxlarge">
              <button className="menu-icon" type="button" data-toggle="example-menu"></button>
              <div className="title-bar-title">
                <img className="logonayak" src={img} alt="Logo" />
              </div>
            </div>
            <div className="top-bar" id="example-menu">
              <div className="top-bar-left">
                <ul className="vertical medium-horizontal menu" data-responsive-menu="accordion medium-dropdown">
                  {/* <li>
                    <a className='resNavLink' href="/">Home</a>
                  </li> */}
                  <li>
                    <a className='resNavLink' href="/about">About Us</a>
                  </li>
                  <li>
                    <a className='resNavLink' href="#">Our Offerings</a>
                    <ul className="vertical menu">
                      <li>
                        <a className='resNavLink' href="#">School</a>
                        <ul className="vertical menu">
                          <li><a className='resNavLink' href="/cbse-classes">CBSE</a></li>
                          <li><a className='resNavLink' href="/icse-classes">ICSE</a></li>
                          <li><a className='resNavLink' href="/igcse-classes">IGCSE</a></li>
                          <li><a className='resNavLink' href="/classes-for-mh-ssc-board">SSC</a></li>
                          <li><a className='resNavLink' href="/olympiads">Olympiads</a></li>
                        </ul>
                      </li>
                      <li>
                        <a className='resNavLink' href="#">College</a>
                        <ul className="vertical menu">
                          <li><a className='resNavLink' href="/elevenandTwelth">11<sup>th</sup> & 12<sup>th</sup></a></li>
                          <li><a className='resNavLink' href="/tybcom">TY Bcom</a></li>
                          <li>
                            <a className='resNavLink' href="#">Pre Engineering</a>
                            <ul className="vertical menu">

                              <li><a className='resNavLink' href="/ace-40-batch-for-iit-jee-integrated">ACE 40 Batch for IIT-JEE (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                              <li><a className='resNavLink' href="/g-10-plus-batch-for-iit-jee-integrated">G-10 Plus Batch for IIT-JEE (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                              <li><a className='resNavLink' href="/enginner3">ACE 40 Batch for MHT-CET (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                            </ul>
                          </li>
                          <li>
                            <a className='resNavLink' href="#">Pre Medical</a>
                            <ul className="vertical menu">
                              <li><a className='resNavLink' href="/ace-40-batch-for-neet-ug-integrated">ACE 40 Batch for NEET-UG (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                              <li><a className='resNavLink' href="/g-10-plus-batch-for-neet-ug-integrated">G-10 Plus Batch for NEET-UG (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                              <li><a className='resNavLink' href="/medical3">ACE 40 Batch for MHT-CET (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                            </ul>
                          </li>
                          <li><a className='resNavLink' href="/ca">CA & CS</a></li>
                        </ul>
                      </li>
                      <li><a className='resNavLink' href="/class-10-score-booster-course">Score Booster</a></li>
                      <li><a className='resNavLink' href="/preschool">Pre-school</a></li>
                      <li><a className='resNavLink' href='https://careerprep.co.in/'>Career Prep</a></li>
                    </ul>
                  </li>
                  <li>
                    <a className='resNavLink' href="/testimonial">Success Stories</a>
                  </li>
                  <li>
                    <a className='resNavLink' href="/paper">Practice Papers</a>
                  </li>

                  <li>
                    <a className='resNavLink' href="/notes/matter-in-our-surroundings-class-9-science">Notes</a>
                  </li>
                  <li>
                    <a className='resNavLink' href="/mainfaq">FAQ</a>
                  </li>
                  <li>
                    <a className='resNavLink' href="/blog">Blog</a>
                  </li>
                  <li>
                    <a className='resNavLink' href="/">CSR</a>
                    <ul className="vertical menu">
                      <li><a class="resNavLink" href="https://nyksfoundation.com/" target='__blank'>Nyks Foundation</a></li>
                      <li><a class="resNavLink" href="/Anant">Anant</a></li>
                    </ul>
                  </li>
                  <li>
                    <a className='resNavLink' href="/contact">Contact Us</a>
                  </li>


                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* mobile nav */}



      {/* tablet nav */}
      <div id="container" className="grid-container tabknav fixed-top">
        <div className="grid-x">

          <nav className={`scrollhide-nav ${navHidden ? 'hidden' : ''}`}>
            <div className="title-bar" data-responsive-toggle="example-menu2" data-hide-for="xxlarge">
              <button className="menu-icon" type="button" data-toggle="example-menu2"></button>
              <div className="title-bar-title">
                <img className="logonayak" src={img} alt="Logo" />
              </div>
            </div>
            <div className="top-bar" id="example-menu2">
              <div className="top-bar-left">
                {/* <ul className="vertical medium-horizontal menu" data-responsive-menu="accordion medium-dropdown"> */}
                <ul className="vertical medium-horizontal menu" data-responsive-menu="drilldown">
                  {/* <li>
                    <a className='resNavLink' href="/">Home</a>
                  </li> */}
                  <li>
                    <a className='resNavLink' href="/about">About Us</a>
                  </li>
                  <li>
                    <a className='resNavLink' href="#">Our Offerings</a>
                    <ul className="vertical menu">
                      <li>
                        <a className='resNavLink' href="#">School</a>
                        <ul className="vertical menu">
                          <li><a className='resNavLink' href="/cbse-classes">CBSE</a></li>
                          <li><a className='resNavLink' href="/icse-classes">ICSE</a></li>
                          <li><a className='resNavLink' href="/igcse-classes">IGCSE</a></li>
                          <li><a className='resNavLink' href="/classes-for-mh-ssc-board">SSC</a></li>
                          <li><a className='resNavLink' href="/olympiads">Olympiads</a></li>
                        </ul>
                      </li>
                      <li>
                        <a className='resNavLink' href="#">College</a>
                        <ul className="vertical menu">
                          <li><a className='resNavLink' href="/elevenandTwelth">11<sup>th</sup> & 12<sup>th</sup></a></li>
                          <li><a className='resNavLink' href="/tybcom">TY Bcom</a></li>
                          <li>
                            <a className='resNavLink' href="#">Pre Engineering</a>
                            <ul className="vertical menu">

                              <li><a className='resNavLink' href="/ace-40-batch-for-iit-jee-integrated">ACE 40 Batch for IIT-JEE (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                              <li><a className='resNavLink' href="/g-10-plus-batch-for-iit-jee-integrated">G-10 Plus Batch for IIT-JEE (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                              <li><a className='resNavLink' href="/enginner3">ACE 40 Batch for MHT-CET (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                            </ul>
                          </li>
                          <li>
                            <a className='resNavLink' href="#">Pre Medical</a>
                            <ul className="vertical menu">
                              <li><a className='resNavLink' href="/ace-40-batch-for-neet-ug-integrated">ACE 40 Batch for NEET-UG (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                              <li><a className='resNavLink' href="/g-10-plus-batch-for-neet-ug-integrated">G-10 Plus Batch for NEET-UG (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                              <li><a className='resNavLink' href="/medical3">ACE 40 Batch for MHT-CET (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                            </ul>
                          </li>
                          <li><a className='resNavLink' href="/ca">CA & CS</a></li>
                        </ul>
                      </li>
                      <li><a className='resNavLink' href="/class-10-score-booster-course">Score Booster</a></li>
                      <li><a className='resNavLink' href="/preschool">Pre-school</a></li>
                      <li><a className='resNavLink' href='https://careerprep.co.in/'>Career Prep</a></li>
                    </ul>
                  </li>
                  <li>
                    <a className='resNavLink' href="/testimonial">Success Stories</a>
                  </li>
                  <li>
                    <a className='resNavLink' href="/paper">Practice Papers</a>
                  </li>

                  <li>
                    <a className='resNavLink' href="/notes/matter-in-our-surroundings-class-9-science">Notes</a>
                  </li>
                  <li>
                    <a className='resNavLink' href="/mainfaq">FAQ</a>
                  </li>
                  <li>
                    <a className='resNavLink' href="/blog">Blog</a>
                  </li>
                  <li>
                    <a className='resNavLink' href="/">CSR</a>
                    <ul className="vertical menu">
                      <li><a class="resNavLink" href="https://nyksfoundation.com/" target='__blank'>Nyks Foundation</a></li>
                      <li><a class="resNavLink" href="/Anant">Anant</a></li>
                    </ul>
                  </li>
                  <li>
                    <a className='resNavLink' href="/contact">Contact Us</a>
                  </li>


                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* tablet nav */}





      {/* desktop nav  */}

      <nav class="navbar navbar-expand-lg bg-lightt fixed-top2" style={{ backgroundColor: 'white' }} id='navbar2'>
        <div class="container-fluid">
          <a class="navbar-brand mainLogo" href="/"><img src={img} alt='Logo of coaching classes in thane'></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  mb-2 mb-lg-0 newNavbar">
              {/* <li class="nav-item nav-itemm">
                <a class="nav-link active naylink" aria-current="page" href="/">Home</a>
              </li> */}


              <li class="nav-item nav-itemm">
                <a class="nav-link naylink" href="/about">About Us</a>
              </li>


              <li class="nav-item nav-itemm dropdown">
                <a class="nav-link dropdown-toggle naylink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Our Offerings
                </a>
                <ul class="dropdown-menu">

                  <li class="nav-item dropend">
                    <a class="nav-link dropdown-toggle naylink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      School
                    </a>
                    <ul class="dropdown-menu">
                      {/* <li class="nav-item dropend">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          CBSE
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Cbse Notes</a></li>
                        </ul>
                      </li> */}
                      <li><a class="dropdown-item naylink" href="/cbse-classes">CBSE</a></li>
                      <li><a class="dropdown-item naylink" href="/icse-classes">ICSE</a></li>
                      <li><a class="dropdown-item naylink" href="/igcse-classes">IGCSE</a></li>
                      <li><a class="dropdown-item naylink" href="/classes-for-mh-ssc-board">SSC</a></li>
                      <li><a class="dropdown-item naylink" href="/olympiads">Olympiads</a></li>

                    </ul>
                  </li>
                  <li class="nav-item dropend">
                    <a class="nav-link dropdown-toggle naylink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      College
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item naylink" href="/elevenandTwelth">11<sup>th</sup> & 12<sup>th</sup></a></li>
                      <li><a class="dropdown-item naylink" href="/tybcom">TY Bcom</a></li>
                      <li class="nav-item dropend">
                        <a class="nav-link dropdown-toggle naylink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Pre Engineering
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item naylink" href="/ace-40-batch-for-iit-jee-integrated">ACE 40 Batch for IIT-JEE (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                          <li><a class="dropdown-item naylink" href="/g-10-plus-batch-for-iit-jee-integrated">G-10 Plus Batch for IIT-JEE (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                          <li><a class="dropdown-item naylink" href="/ace-40-batch-for-mht-cet-engineer">ACE 40 Batch for MHT-CET (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                        </ul>
                      </li>
                      <li class="nav-item dropend">
                        <a class="nav-link dropdown-toggle naylink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Pre Medical
                        </a>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item naylink" href="/ace-40-batch-for-neet-ug-integrated">ACE 40 Batch for NEET-UG (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                          <li><a class="dropdown-item naylink" href="/g-10-plus-batch-for-neet-ug-integrated">G-10 Plus Batch for NEET-UG (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                          <li><a class="dropdown-item naylink" href="/ace-40-batch-for-mht-cet-medical">ACE 40 Batch for MHT-CET (11<sup>th</sup> & 12<sup>th</sup>)</a></li>
                        </ul>
                      </li>
                      {/* <li><a class="dropdown-item" href="#">Pre Medical</a></li> */}

                      <li><a class="dropdown-item naylink" href="/ca">CA & CS</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item naylink" href="/class-10-score-booster-course">Score Booster</a></li>
                  <li><a class="dropdown-item naylink" href="/preschool">Pre-school</a></li>
                  <li><a class="dropdown-item naylink" href='https://careerprep.co.in/'>Career Prep</a></li>
                </ul>
              </li>


              <li class="nav-item nav-itemm">
                <a class="nav-link naylink" href="/testimonial">Success Stories</a>
              </li>
              <li class="nav-item nav-itemm">
                <a class="nav-link naylink" aria-current="page" href="/paper">Practice Papers</a>
              </li>
              <li class="nav-item nav-itemm">
                <a class="nav-link naylink" aria-current="page" href="/notes/matter-in-our-surroundings-class-9-science">Notes</a>
              </li>
              <li class="nav-item nav-itemm">
                <a class="nav-link naylink" href="/mainfaq">FAQ</a>
              </li>
              <li class="nav-item nav-itemm">
                <a class="nav-link naylink" aria-current="page" href="/blog">Blog</a>
              </li>
              <li class="nav-item nav-itemm dropdown">
                <a class="nav-link dropdown-toggle naylink" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  CSR
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item naylink" href="https://nyksfoundation.com/" target='__blank'>Nyks Foundation</a></li>
                  <li><a class="dropdown-item naylink" href="/Anant">Anant</a></li>
                </ul>
              </li>
              <li class="nav-item nav-itemm">
                <a class="nav-link naylink" href="/contact">Contact Us</a>
              </li>


            </ul>
          </div>
        </div>
      </nav>

      {/* desktop nav  */}
    </>
  );
};

export default Newnavbar;
