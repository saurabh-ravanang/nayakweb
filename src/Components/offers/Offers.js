import React from 'react'
import './offer.css'
import mainPic from "../../Assets/offers/mainPic.png"
import mainPic1 from "../../Assets/offers/random.jpg"
import mainPic2 from "../../Assets/offers/random2.avif"
import mainPic3 from "../../Assets/offers/random3.avif"
import mainPic4 from "../../Assets/offers/random4.avif"
import mainPic5 from "../../Assets/offers/random5.avif"
import mainPic6 from "../../Assets/offers/random1.jpg"
import clg from "../../Assets/offers/Our-Offering-Banner-_-College.jpg"
// import preformance from "../../Assets/offers/Our-Offering-Banner-_-Performance.jpg"
import preformance from "../../Assets/offers/Our-Offering-Banner-_-PerformanceUpdate.jpg"
import school from "../../Assets/offers/Our-Offering-Banner-_-School.jpg"
import Carousel from 'react-bootstrap/Carousel';
import { useLocation } from 'react-router-dom';
import stateboardlogo from "../../Assets/offers/State_board_logo.png"
import ICSE from "../../Assets/offers/ICSE-Board.png"
import IGCSE from "../../Assets/offers/IGCSE-Board.png"
import cbse from "../../Assets/offers/cbse_logo.png"




export default function Offers() {
    const location = useLocation()
    // console.log(location.hash, 'locationnnnnn')
    // console.log(location.pathname, 'pathname')
    return (
        <>
            <div className='higherOffer'>
                <div className='mainOfferDiv'>
                    <div className='BigHeading'><h1>OUR OFFERING</h1></div>
                    <div className='smallHeading'><h1>OUR OFFERING</h1></div>
                </div>
            </div>
            {/* <div className='offerMainSection'>
                <div className='Oleft'>
                    <a href='#preschool'>
                        <div style={{ color: location.hash == '#preschool' ? 'white' : '#D00000', backgroundColor: location.hash == '#preschool' ? '#D00000' : '#EDEDED' }} className={`oInner ${location.hash == '' ? 'activeOffer ' : 'nono'}`} >pre-school</div>
                    </a> 
                    <a href='#School'>
                        <div style={{ color: location.hash == '#School' ? 'white' : '#D00000', backgroundColor: location.hash == '#School' ? '#D00000' : '#EDEDED' }} className='oInner '>School</div>
                    </a>
                    <a href='#College'>
                        <div style={{ color: location.hash == '#College' ? 'white' : '#D00000', backgroundColor: location.hash == '#College' ? '#D00000' : '#EDEDED' }} className='oInner '>College</div>
                    </a>   
                    <a href='#preformancebooster'>
                        <div style={{ color: location.hash == '#preformancebooster' ? 'white' : '#D00000', backgroundColor: location.hash == '#preformancebooster' ? '#D00000' : '#EDEDED' }} className='oInner '>performance booster</div>
                    </a>
                </div>
               
                <div className='OleftMain2'>
                    <div className='innerTmain'>
                        <a href='#preschool'>
                            <div style={{ color: location.hash == '#preschool' ? 'white' : '#D00000', backgroundColor: location.hash == '#preschool' ? '#D00000' : '#EDEDED' }} className={`oInner2 ${location.hash == '' ? 'activeOffer ' : 'nono'}`} >pre-school</div>
                        </a>
                        <a href='#School'>
                            <div style={{ color: location.hash == '#School' ? 'white' : '#D00000', backgroundColor: location.hash == '#School' ? '#D00000' : '#EDEDED' }} className='oInner2 '>School</div>
                        </a>
                    </div>
                    <div className='innerTmain'>   
                        <a href='#College'>
                            <div style={{ color: location.hash == '#College' ? 'white' : '#D00000', backgroundColor: location.hash == '#College' ? '#D00000' : '#EDEDED' }} className='oInner2 '>College</div>
                        </a>
                        <a href='#preformancebooster'>
                            <div style={{ color: location.hash == '#preformancebooster' ? 'white' : '#D00000', backgroundColor: location.hash == '#preformancebooster' ? '#D00000' : '#EDEDED' }} className='oInner2 '>performance booster</div>
                        </a>
                    </div>


                </div>
                {location.hash == '#preformancebooster' ? 
                <div className='Oright'>
                    <Carousel >
                        <Carousel.Item interval={2500}  >
                            <div className='offerImgDiv'>
                                <img className="d-block w-100 cimg2" src={preformance} alt="First slide" />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>:null}
                {location.hash == '#College' ? 
                <div className='Oright'>
                    <Carousel >
                        <Carousel.Item interval={2500}  >
                            <div className='offerImgDiv'>
                                <img className="d-block w-100 cimg2" src={clg} alt="First slide" />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>:null}
                {location.hash == '#School' ? 
                <div className='Oright'>
                    <Carousel >
                        <Carousel.Item interval={2500}  >
                            <div className='offerImgDiv'>
                                <img className="d-block w-100 cimg2" src={school} alt="First slide" />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>:null}
                {location.hash == '#preschool' ? 
                <div className='Oright'>
                    <Carousel >
                        <Carousel.Item interval={2500}  >
                            <div className='offerImgDiv'>
                                <img className="d-block w-100 cimg2" src={mainPic} alt="First slide" />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>:null}
                {location.hash == '' ? 
                <div className='Oright'>
                    <Carousel >
                        <Carousel.Item interval={2500}  >
                            <div className='offerImgDiv'>   
                                <img className="d-block w-100 cimg2" src={mainPic} alt="First slide" />
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>:null}
            </div> */}

            <div className='offerMainSection'>
                <div className='Oleft'>
                    <a href='#preschool'>
                        <div style={{ color: location.hash == '#preschool' ? 'white' : '#D00000', backgroundColor: location.hash == '#preschool' ? '#D00000' : '#EDEDED' }} className={`oInner ${location.hash == '' ? 'activeOffer ' : 'nono'}`} >pre-school</div>
                    </a>
                    <a href='#School'>
                        <div style={{ color: location.hash == '#School' ? 'white' : '#D00000', backgroundColor: location.hash == '#School' ? '#D00000' : '#EDEDED' }} className='oInner '>School</div>
                    </a>
                    <a href='#College'>
                        <div style={{ color: location.hash == '#College' ? 'white' : '#D00000', backgroundColor: location.hash == '#College' ? '#D00000' : '#EDEDED' }} className='oInner '>College</div>
                    </a>
                    <a href='#preformancebooster'>
                        <div style={{ color: location.hash == '#preformancebooster' ? 'white' : '#D00000', backgroundColor: location.hash == '#preformancebooster' ? '#D00000' : '#EDEDED' }} className='oInner '>Score booster</div>
                    </a>
                </div>

                {/* <div className='OleftMain2'>
                    <div className='innerTmain'>
                        <a href='#preschool'>
                            <div style={{ color: location.hash == '#preschool' ? 'white' : '#D00000', backgroundColor: location.hash == '#preschool' ? '#D00000' : '#EDEDED' }} className={`oInner2 ${location.hash == '' ? 'activeOffer ' : 'nono'}`} >pre-school</div>
                        </a>
                        <a href='#School'>
                            <div style={{ color: location.hash == '#School' ? 'white' : '#D00000', backgroundColor: location.hash == '#School' ? '#D00000' : '#EDEDED' }} className='oInner2 '>School</div>
                        </a>
                    </div>
                    <div className='innerTmain'>   
                        <a href='#College'>
                            <div style={{ color: location.hash == '#College' ? 'white' : '#D00000', backgroundColor: location.hash == '#College' ? '#D00000' : '#EDEDED' }} className='oInner2 '>College</div>
                        </a>
                        <a href='#preformancebooster'>
                            <div style={{ color: location.hash == '#preformancebooster' ? 'white' : '#D00000', backgroundColor: location.hash == '#preformancebooster' ? '#D00000' : '#EDEDED' }} className='oInner2 '>performance booster</div>
                        </a>
                    </div>


                </div> */}
                {location.hash == '#preformancebooster' ?
                    <div className='Oright'>
                        <Carousel >
                            <Carousel.Item interval={2500}  >
                                <div className='offerImgDiv'>
                                    <img className="d-block w-100 cimg2" src={preformance} alt="First slide" />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div> : null}
                {location.hash == '#College' ?
                    <div className='Oright'>
                        <Carousel >
                            <Carousel.Item interval={2500}  >
                                <div className='offerImgDiv'>
                                    <img className="d-block w-100 cimg2" src={clg} alt="First slide" />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div> : null}
                {location.hash == '#School' ?
                    <div className='Oright'>
                        <div className='newOMainBox'>
                            <div className='newOimgbox'>
                                <img src={stateboardlogo} />
                            </div>
                            <div className='newOboardheading'><h4>State board <br></br> (SSC)</h4></div>
                        </div>
                        <div className='newOMainBox'>
                            <div className='newOimgbox'>
                                <img src={ICSE} />
                            </div>
                            <div className='newOboardheading'><h4>icse<br></br> board</h4></div>
                        </div>
                        <div className='newOMainBox'>
                            <div className='newOimgbox'>
                                <img src={cbse} />
                            </div>
                            <div className='newOboardheading'><h4>cbse<br></br> board</h4></div>
                        </div>
                        <div className='newOMainBox'>
                            <div className='newOimgbox'>
                                <img src={IGCSE} />
                            </div>
                            <div className='newOboardheading'><h4>IGCSE<br></br> board</h4></div>
                        </div>
                    </div> : null}
                {location.hash == '#preschool' ?
                    <div className='Oright'>
                        <Carousel >
                            <Carousel.Item interval={2500}  >
                                <div className='offerImgDiv'>
                                    <img className="d-block w-100 cimg2" src={mainPic} alt="First slide" />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div> : null}
                {location.hash == '' ?
                    <div className='Oright'>
                        <Carousel >
                            <Carousel.Item interval={2500}  >
                                <div className='offerImgDiv'>
                                    <img className="d-block w-100 cimg2" src={mainPic} alt="First slide" />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div> : null}
            </div>
        </>
    )
}
