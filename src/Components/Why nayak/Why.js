import React from 'react'
import './why.css'
import img from "../../Assets/why nayak/image 3.png"
// import mainImg from "../../Assets/why nayak/mainImg.jpg"
import mainImg from "../../Assets/why nayak/mainUpdate.jpg"
import faculty from "../../Assets/why nayak/Faculty.jpg"
import study from "../../Assets/why nayak/Study.jpg"
import techEnable from "../../Assets/why nayak/Tech-Enable.jpg"
import mainNayak from "../../Assets/Home/WHY-NTmain2.png"


export default function Why() {
    return (
        <>
            <div className='mainWhyDiv'>
                <div className='whyLeftDiv'>
                    <div className='wLeftImgDiv'>
                        <img src={mainImg} alt='Choose Nayak tutorials to prepare for Competitive  exams'/>
                    </div>
                    <div className='wBlueDiv'>
                        {/* <h3>Why Nayak’s Tutorials</h3> */}
                        <h1>Prepare for Competitive  Exams with Nayak's Tutorials</h1>
                    </div>
                </div>
                <div className='whyRightDiv'>
                    <div className='whymainPic'>
                        <img src={mainNayak} alt='Why to choose coaching classes in thane'/>
                    </div>
                    {/* <div className='wRightMain'>
                    <div className='wRightImgDiv'>
                        <img src={faculty} />
                    </div>
                    <div className='wTextDiv'>
                        <h3>Expert faculty with in-depth knowledge</h3>
                        <p style={{color:'black'}}>Specially trained professionals and experts in their fields who guide and help students reach their goals</p>
                    </div>
                </div>
                <div className='wRightMain'>
                    <div className='wRightImgDiv'>
                        <img src={study} />
                    </div>
                    <div className='wTextDiv'>
                        <h3>Comprehensive material</h3>
                        <p style={{color:'black'}}>Elaborate study material, worksheets, regular tests, mock tests and more</p>
                    </div>
                </div>
                <div className='wRightMain'>
                    <div className='wRightImgDiv'>
                        <img src={techEnable} />
                    </div>
                    <div className='wTextDiv'>
                        <h3>Tech-enabled teaching</h3>
                        <p style={{color:'black'}}>From video-based concept clearing to the use of tech-boards in classes, our teachers are technology enabled</p>
                    </div>
                </div> */}
                </div>
            </div>
        </>
    )
}
