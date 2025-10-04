import React from 'react'
import toppers from "../../Assets/offers/toppers.png"
import toppers1 from "../../Assets/offers/toppers1.png"
import toppers2 from "../../Assets/offers/toppers2.png"
import IcseToppers from "../../Assets/offers/ICSE-toppers.png"
import cbseToppers from "../../Assets/offers/cbse-topper.png"
import ssc from "../../Assets/offers/SSC.png"
import cbse from "../../Assets/offers/CBSE.png"
import icse from "../../Assets/offers/ICSE.png"
import icseT from "../../Assets/offers/ICSE-topper-web2.png"
import icseT2 from "../../Assets/offers/topper_banner_ICSE_topper_2024.png"
import sscT from "../../Assets/offers/scc-topper-web2.png"
import sscT2 from "../../Assets/offers/topper_banner_SSC_topper_2024.png"
import cbseT from "../../Assets/offers/cbse-topper-web2.png"
import cbseT2 from "../../Assets/offers/topper_banner_CBSE_topper_2024.png"
import jeeall from "../../Assets/offers/JEEAll.jpg"
import sscM from "../../Assets/offers/scc-topper-mobile.png"
import icseM from "../../Assets/offers/ICSE-topper-mobile.png"
import cbseM from "../../Assets/offers/cbse-topper-mobile.png"



import newsscM from "../../Assets/offers/newssc.png"
import newicseM from "../../Assets/offers/newICSE Toppers of 2024.png"
import newcbseM from "../../Assets/offers/newcbse.png"
import newcet from "../../Assets/offers/newmht-cet.png"





import './toppers.css'
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousell from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export default function Toppers() {
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
  return (
    <>
      <div className='higherTopper'>
      <div className='newsmallHeading'><h1>OUR TOPPERS</h1></div>
        <div className='mainTopperDiv'>
          <div className='BigHeading'><h1>OUR TOPPERS</h1></div>
          <div className='smallHeading'><h1>OUR TOPPERS</h1></div>
        </div>
      </div>
      {/* <h3 id='toppers'>SSC Toppers</h3> */}
      {/* <div className='oTopDiv'>
        <img src={toppers} />
      </div> */}
      {/* <Carousel className='oTopDiv'>
        <Carousel.Item interval={1500}  >
          <img className="d-block w-100 cimg2" src={sscT} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={1500}  >
          <img className="d-block w-100 cimg2" src={cbseT} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={1500}  >
          <img className="d-block w-100 cimg2" src={icseT} alt="First slide" />
        </Carousel.Item>
      </Carousel> */}

      <Slider className='featureCaurnew' {...sliderSettings}>
        
        {/* <img className="cimg2" src={sscT2} alt="SSC Top Achievers" />
        <img className=" cimg2" src={cbseT2} alt="First slide" />
        <img className=" cimg2" src={icseT2} alt="First slide" /> */}
        <img className="cimg2" src={newsscM} alt="SSC Top Achievers" />
        <img className=" cimg2" src={newcbseM} alt="cbse slide" />
        <img className=" cimg2" src={newicseM} alt="icse slide" />
        <img className=" cimg2" src={newcet} alt="mht-cet slide" />
        <img className=" cimg2" src={jeeall} alt="jeeall slide" />
         
      </Slider>



      {/* mobile responsive */}
      {/* <Carousel className='toppersCarousel'>
        <Carousel.Item style={{ marginBottom: '20px' }} interval={3500}  >
          <img className="d-block w-100 cimg2" src={sscM} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item style={{ marginBottom: '20px' }} interval={3500}  >
          <img className="d-block w-100 cimg2" src={cbseM} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item style={{ marginBottom: '20px' }} interval={3500}  >
          <img className="d-block w-100 cimg2" src={icseM} alt="First slide" />
        </Carousel.Item>
      </Carousel> */}
    </>
  )
}
