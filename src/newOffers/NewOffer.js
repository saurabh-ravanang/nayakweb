import React from 'react'
import './newoffer.css'
import { BiSolidRightArrow } from 'react-icons/bi'
// import bag from "../Assets/offers/school-bag.png"
import mainPic from "../Assets/offers/mainPic.png"
import Carousel from 'react-bootstrap/Carousel';
import { useLocation } from 'react-router-dom';
import clg from "../Assets/offers/school-bag.png"
// import preformance from "../Assets/offers/Our-Offering-Banner-_-Performance.jpg"
import preformance from "../Assets/offers/Our-Offering-Banner-_-PerformanceNew3.jpg"
import careerprap from "../Assets/offers/Careerprepnew.jpg"
import school from "../Assets/offers/school-bag.png"
import stateboardlogo from "../Assets/offers/State_board_logo.png"
import ICSE from "../Assets/offers/ICSE-Board.png"
import IGCSE from "../Assets/offers/IGCSE-Board.png"
import cbse from "../Assets/offers/cbse_logo.png"
import olympiads from "../Assets/offers/Olympiad.png"
import olympiadsHover from "../Assets/offers/Olympiad-hover.png"
import ENGINEERING from "../Assets/offers/engineering.png"
import students from "../Assets/offers/student.png"
import medical from "../Assets/offers/medical-team.png"
import accounting from "../Assets/offers/accounting.png"
import graduation from "../Assets/offers/graduation.png"

export default function NewOffer() {
    const location = useLocation()
    return (
        <>

            <div className='higherOffer'>
                <div className='newsmallHeading'><h1>OUR OFFERING</h1></div>
                <div className='mainOfferDiv'>
                    <div className='BigHeading'><h1>OUR OFFERING</h1></div>
                    <div className='smallHeading'><h1>OUR OFFERING</h1></div>
                </div>
            </div>
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
                    <a href='#scorebooster'>
                        <div style={{ color: location.hash == '#scorebooster' ? 'white' : '#D00000', backgroundColor: location.hash == '#scorebooster' ? '#D00000' : '#EDEDED' }} className='oInner '>Score booster</div>
                    </a>
                    <a href='#careerprap'>
                        <div style={{ color: location.hash == '#careerprap' ? 'white' : '#D00000', backgroundColor: location.hash == '#careerprap' ? '#D00000' : '#EDEDED' }} className='oInner '>career prep</div>
                    </a>
                </div>

                <div className='OleftMain2'>
                    <div className='innerTmain'>
                        <a className='innerTmainA' href='#preschool'>
                            <div style={{ color: location.hash == '#preschool' ? 'white' : '#D00000', backgroundColor: location.hash == '#preschool' ? '#D00000' : '#EDEDED' }} className={`oInner2 ${location.hash == '' ? 'activeOffer ' : 'nono'}`} >pre-school</div>
                        </a>
                        <a className='innerTmainA' href='#School'>
                            <div style={{ color: location.hash == '#School' ? 'white' : '#D00000', backgroundColor: location.hash == '#School' ? '#D00000' : '#EDEDED' }} className='oInner2 '>School</div>
                        </a>
                    </div>
                    <div className='innerTmain'>
                        <a className='innerTmainA' href='#College'>
                            <div style={{ color: location.hash == '#College' ? 'white' : '#D00000', backgroundColor: location.hash == '#College' ? '#D00000' : '#EDEDED' }} className='oInner2 '>College</div>
                        </a>
                        <a className='innerTmainA' href='#scorebooster'>
                            <div style={{ color: location.hash == '#scorebooster' ? 'white' : '#D00000', backgroundColor: location.hash == '#scorebooster' ? '#D00000' : '#EDEDED' }} className='oInner2 '>Score booster</div>
                        </a>
                    </div>
                    <div className='innerTmain'>
                        <a className='innerTmainA' href='#careerprap'>
                            <div style={{ color: location.hash == '#careerprap' ? 'white' : '#D00000', backgroundColor: location.hash == '#careerprap' ? '#D00000' : '#EDEDED' }} className='oInner2 '>career prep</div>
                        </a>
                        
                    </div>


                </div>
                <div></div>
                {location.hash == '#scorebooster' ?
                    <div className='Oright'>
                        <Carousel >
                            <Carousel.Item interval={2500}  >
                                <div className='offerImgDiv'>
                                    <a href='/class-10-score-booster-course'><img className="d-block w-100 cimg2" src={preformance} alt="First slide" /></a>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div> : null}
                {location.hash == '#careerprap' ?
                    <div className='Oright'>
                        <Carousel >
                            <Carousel.Item interval={2500}  >
                                <div className='offerImgDiv'>
                                    <a target='_blank' href='https://careerprep.co.in/'><img className="d-block w-100 cimg2" src={careerprap} alt="First slide" /></a>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div> : null}
                {location.hash == '#College' ?
                    <div className='Oright'>
                        <a href='/eleven&Twelth'>
                            <div className='newOMainBox'>
                                <div className='newOimgbox'>
                                    <img src={students} />
                                </div>
                                <div className='newOboardheading'><h4>11TH-12TH SCIENCE & COMMERCE</h4></div>
                            </div>
                        </a>
                        <a target='_blank' href='https://milkarjeetayenge.com/'>
                            <div className='newOMainBox'>
                                <div className='newOimgbox'>
                                    <img src={medical} />
                                </div>
                                <div className='newOboardheading'><h4>pre medical <br></br> ENTRANCE</h4></div>
                            </div>
                        </a>
                        <a target='_blank' href='https://milkarjeetayenge.com/'>
                            <div className='newOMainBox'>
                                <div className='newOimgbox'>
                                    <img src={ENGINEERING} />
                                </div>
                                <div className='newOboardheading'><h4>pre ENGINEERING <br></br> ENTRANCE</h4></div>
                            </div>
                        </a>
                        <a href='/ca'>
                            <div className='newOMainBox'>
                                <div className='newOimgbox'>
                                    <img src={accounting} />
                                </div>
                                <div className='newOboardheading'><h4>ca & cs</h4></div>
                            </div>
                        </a>
                        <a href='/tybcom'>
                            <div className='newOMainBox'>
                                <div className='newOimgbox'>
                                    <img src={graduation} />
                                </div>
                                <div className='newOboardheading'><h4>TY. Bcom</h4></div>
                            </div>
                        </a>
                    </div> : null}
                {location.hash == '#School' ?
                    <div className='Oright'>
                        <a href='/classes-for-mh-ssc-board'>
                            <div className='newOMainBox'>
                                <div className='newOimgbox'>
                                    <img src={stateboardlogo} />
                                </div>
                                <div className='newOboardheading'><h4>State board <br></br> (SSC)</h4></div>
                            </div>
                        </a>
                        <a href='/olympiads'>
                            <div className='newOMainBox'>
                                <div className='newOimgbox'>
                                    <img className='olym' src={olympiads} />
                                    <img className='olymHover' src={olympiadsHover} />
                                </div>
                                <div className='newOboardheading'><h4>Olympiads <br></br><span style={{visibility:'hidden'}}>Olympiads</span></h4></div>
                            </div>
                        </a>
                        <a href='/icse-classes'>
                            <div className='newOMainBox'>
                                <div className='newOimgbox'>
                                    <img src={ICSE} />
                                </div>
                                <div className='newOboardheading'><h4>icse<br></br> board</h4></div>
                            </div>
                        </a>
                        <a href='/cbse-classes'>
                            <div className='newOMainBox'>
                                <div className='newOimgbox' id='cbseImg'>
                                    <img src={cbse} />
                                </div>
                                <div className='newOboardheading'><h4>cbse<br></br> board</h4></div>
                            </div>
                        </a>
                        <a href='/igcse-classes'>
                            <div className='newOMainBox'>
                                <div className='newOimgbox' id='IGCSEImg'>
                                    <img src={IGCSE} />
                                </div>
                                <div className='newOboardheading'><h4>IGCSE<br></br> board</h4></div>
                            </div>
                        </a>
                    </div> : null}
                {location.hash == '#preschool' ?
                    <div className='Oright'>
                        <Carousel >
                            <Carousel.Item interval={2500}  >
                                <div className='offerImgDiv'>
                                    <a href='/preschool'><img className="d-block w-100 cimg2" src={mainPic} alt="First slide" /></a>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div> : null}
                {location.hash == '' ?
                    <div className='Oright'>
                        <Carousel >
                            <Carousel.Item interval={2500}  >
                                <div className='offerImgDiv'>
                                    <a href='/preschool'><img className="d-block w-100 cimg2" src={mainPic} alt="First slide" /></a>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div> : null}
            </div>
        </>
    )
}
