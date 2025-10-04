import React, { useEffect, useState } from 'react'

import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios";
import { Helmet } from "react-helmet";
import { Oval } from 'react-loader-spinner'
import Skelton from '../skelton/Skelton'
import BigSkelton from '../bigskelton/BigSkelton'
import img from "../../Assets/cbse/mainImg.png"
import { MdDateRange } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Newnavbar from '../newNavbar/Newnavbar'
// import LogoContact from '../logoContact/logoContact'
import './mainblog.css'
// import { FaWhatsapp } from "react-icons/fa";


export default function Mainblog() {
    const { id } = useParams()
    console.log(id, "my id")

    const [newdata, setNewdata] = useState()
    const [title, setTitle] = useState(' ')
    const [apiscript, setApiscript] = useState('')
    const [tag, setTag] = useState(' ')
    const [des, setDes] = useState(' ')
    const [changeimg, setChangeimg] = useState(' ')
    const [heading, setHeading] = useState(' ')
    const [state, setState] = useState(false)
    const [date, setdate] = useState()
    const [recent, setRecent] = useState([])
    const [newid, setNewid] = useState(id)
    console.log("newid", newid)



    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    const [selectedCenterValue, setSelectedCenterValue] = useState();
    const [selectedValue, setSelectedValue] = useState();
    const [selectSchool, setSelectSchool] = useState();
    const [selectCollege, setSelectCollege] = useState();
    const [selectCbse, setSelectCbse] = useState();
    const [selectIcse, setSelectIcse] = useState();
    const [selectSsc, setSelectssc] = useState();
    const [selectIgcse, setSelectigcse] = useState();

    var apiscripts;
    useEffect(() => {

        oncardClick()
        recentpost()
        // similarProductAPI()
        window.scrollTo(0, 0)

    }, [])




    const oncardClick = () => {
        console.log('onclick card', id)
        // let url = `https://paybycal.com/api/h_single_article_web.php?id=${id}`
        let url = `https://nayakstutorials.com/admin/api/blog/${newid}`
        // let url = `https://adminnayak.pixsonik.com/api/blog/${id}`
        console.log(url);
        axios.get(url).then((resp) => {
            console.log('new resp title', resp.data)
            console.log('new resp oncard', resp.data)

            setTimeout(() => {
                setState(true)
            }, 1000);

            setHeading(resp.data.blog.heading)
            setChangeimg(resp.data.blog.image)
            setTitle(resp.data.meta_data[0].tag)
            setDes(resp.data.meta_data[0].description)
            setNewdata(resp.data.blog.content)
            setApiscript(resp.data.blog.script)
            setdate(resp.data.blog.added_date)
            apiscripts = resp.data.blog.script

            console.log("api script", apiscripts)
            console.log("api script2", resp.data.blog.script)
            // setBid(resp.data.data[0].id)
            // setcatId(resp.data.data[0].cat_id)
            // console.log('similar catid check',Bid, catId)
        }).catch((err) => {
            console.log('err', err)
        })
        // navigate('/mainblog')
    }

    const navigate = useNavigate();

    const innerFunc = (item) => {
        navigate(`/blog/${item.slug_url}`, { state: { id: item.slug_url } })
        console.log("item click", item)
        setHeading(item.heading)
        setChangeimg(item.image)
        setNewdata(item.content)
        setTitle(item.heading)
        setDes(item.shortcontent)
        setdate(item.added_date)
        setNewid(item.slug_url)
    }

    let recentpost = async () => {
        let recentData = await fetch("https://nayakstutorials.com/admin/api/blog/")
        recentData = await recentData.json()
        console.log("recent post", recentData.blogs)
        setRecent(recentData.blogs)
    }



    // form 
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
    function handleigcseBorad(event) {
        setSelectigcse(event.target.value)
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
            } else if (selectSchool == 'IGCSE' && selectIgcse) {
                const mailtoLink = `mailto:enquiry@nayakstutorials.com?subject=Student requested a callback&body=Name: ${name}%0A
            Phone Number: ${number}%0A
            Email: ${mail}%0A
            Number: ${number}%0A
            Message: ${message}%0A
            Center:${selectedCenterValue}%0A
            Offerings: ${selectedValue}%0A
            School: ${selectSchool}%0A
            Igcse: ${selectIgcse}%0A`;
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

    // form 

    return (
        <>
            <Helmet>
                <title>{title}</title>
                {/* <title>saurabh</title> */}
                <meta charSet="utf-8" />
                <meta name={des} content={heading} />

                <script type="application/ld+json">
                    {
                        `"@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                    "@id": ${id}
  },
                    "headline": ${heading},
                    "description": ${des},
                    "image": "",
                    "author": {
                        "@type": "Organization",
                    "name": "Nayak's Tutorials"
  },
                    "publisher": {
                        "@type": "Organization",
                    "name": "Nayak's Tutorials",
                    "logo": {
                        "@type": "ImageObject",
                    "url": ${changeimg}
    }
  },
                    "datePublished":${date}
                    "dateModified":${date}`
                        // "datePublished":${new Date(date).getDate()}-${new Date(date).getMonth()+1}-${new Date(date).getFullYear()}`
                    }
                </script>

            </Helmet>
            {/* <Navbar /> */}
            {/* <LogoContact /> */}

            {/* <div className="wpfloat"> */}
                <Newnavbar />



                {/* {state ? <div className="mblogMaindiv">
                <div className='forImg2'>
                    <h1>{heading}</h1>
                </div>
                <div className='forImg'>
                    <img src={changeimg} />
                </div>

                <section id='respBlog' dangerouslySetInnerHTML={{ __html: newdata }} ></section>

            </div> : <div className='loaderdiv' style={{}}>

                <Oval
                    visible={true}
                    height="80"
                    width="80"
                    color="red"
                    secondaryColor="white"
                    ariaLabel="oval-loading"
                />
            </div>
            } */}


                {/* updated page  */}
                {state ? <div>
                    <div className='mainblogmaindiv'>
                        <div className='mainblogmaininner'>
                            {/* <p>Home » Blogs » Why Choose ICSE? Benefits for Middle School Students</p> */}
                            <div style={{ marginBottom: "10px" }}><a href='/'>Home »</a><a href='/blog'>Blogs »</a><a>{heading}</a></div>
                            <h2>{heading}</h2>
                            <p><FaUser /> <span>Nayaks Tutorials</span>  &nbsp;&nbsp;  <MdDateRange className='MdDateRange' /> {new Date(date).toUTCString().slice(0, 16)}</p>
                        </div>
                    </div>

                    <div className='mainblog2main'>
                        <div className='mainblog2'>
                            <div className='mainblog2left'>
                                <div className='mainblogimgdiv'>
                                    <img src={changeimg}></img>
                                </div>
                                <div className='mainblogmainparadiv'>

                                    <section id='respBlog' dangerouslySetInnerHTML={{ __html: newdata }} ></section>

                                </div>
                            </div>
                            <div className='mainblog2right'>
                                <div className='mainblogRecentdiv'>
                                    <h3 className='mainblogRecent'>Recent Posts</h3>

                                    {recent.slice(1, 4).map((item) => {
                                        return (
                                            <a onClick={() => innerFunc(item)}>
                                                <div className='mainblogRecentinner'>
                                                    <h6>{item.heading}</h6>
                                                    <span>Read More »</span>
                                                </div>
                                            </a>
                                        )
                                    })}
                                </div>


                                <div className='mainblogbox'>
                                    <h3 className='mainblogtouch'>Get In Touch With Us</h3>
                                    <div class="mb-3">
                                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' type="text" class="form-control FormSelectblog" id="recipient-name" />
                                    </div>
                                    <div class="mb-3">
                                        <input value={mail} onChange={(e) => setMail(e.target.value)} placeholder='Your Email' type="text" class="form-control FormSelectblog" id="recipient-name" />
                                    </div>
                                    <div class="mb-3">
                                        <input value={number} maxLength={10} onChange={(e) => setNumber(e.target.value)} placeholder='Your Mobile' type="text" class="form-control FormSelectblog" id="recipient-name" />
                                    </div>


                                    <div className=''>
                                        <select placeholder='Our Centers' className='FormSelect FormSelectblog' name="cars" id="cars" value={selectedCenterValue} onChange={handleCenter}>
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

                                    <div className='mb-3'>
                                        {/* <input placeholder='Please Select Category' type="text" class="form-control" id="recipient-name" /> */}
                                        <select placeholder='Our Offerings' className='FormSelect FormSelectblog' name="cars" id="cars" value={selectedValue}
                                            onChange={handleSelectChange}>
                                            <option value="saab">Our Offerings</option>
                                            <option value="School">School</option>
                                            <option value="College">College</option>
                                            <option value="Performance Booster">Performance Booster</option>
                                            <option value="Pre-school">Pre-school</option>
                                        </select>
                                    </div>

                                    <div className='mb-3'>
                                        {selectedValue === 'School' && (
                                            <select
                                                placeholder='School Board'
                                                className='FormSelect FormSelectblog'
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
                                                className='FormSelect FormSelectblog'
                                                name="college"
                                                value={selectCollege}
                                                onChange={handleCollegeBorad}
                                            >
                                                <option value="College">Select College</option>
                                                <option value="11th and 12th">11th and 12th</option>
                                                <option value="CA & CS">CA & CS</option>
                                                <option value="Engineering and medical">Pre Engineering</option>
                                                <option value="Engineering and medical">Pre Medical</option>
                                                <option value="Bcom">BCOM</option>
                                            </select>
                                        )}
                                    </div>

                                    <div className='mb-3'>
                                        {/* <input placeholder='Please Select Standard' type="text" class="form-control" id="recipient-name" /> */}
                                        {selectSchool === 'CBSE' && (
                                            <select

                                                placeholder='Cbse'
                                                className='FormSelect FormSelectblog'
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
                                                className='FormSelect FormSelectblog'
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

                                                placeholder='ssc'
                                                className='FormSelect FormSelectblog'
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

                                        {selectSchool === 'IGCSE' && (
                                            <select

                                                placeholder='igcse'
                                                className='FormSelect'
                                                name="schoolBoard"
                                                value={selectIgcse}
                                                onChange={handleigcseBorad}
                                            >
                                                <option value="IGCSE">Select STD</option>
                                                <option value="IGCSE 8TH">IGCSE 8TH</option>
                                                <option value="IGCSE 9TH">IGCSE 9TH</option>
                                                <option value="IGCSE 10TH">IGCSE 10TH</option>
                                            </select>
                                        )}

                                    </div>

                                    <div class="mb-3">
                                        <textarea rows="4" cols="50" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter Your Message (Optional)' class="form-control FormSelectblog" id="message-text"></textarea>
                                    </div>

                                    <div className='modalBtn'>
                                        <button type="button" className="btn btn-secondary FormSubmit" onClick={schoolchange}>Submit</button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div> : <div className='loaderdiv' style={{}}>

                    <Oval
                        visible={true}
                        height="80"
                        width="80"
                        color="red"
                        secondaryColor="white"
                        ariaLabel="oval-loading"
                    />
                </div>}

                {/* <div>
                <div className='mainblogmaindiv'>
                    <div className='mainblogmaininner'>
                        <p>Home » Blogs » Why Choose ICSE? Benefits for Middle School Students</p>
                        <h2>{heading}</h2>
                        <p>Nayaks Tutorials,  {new Date(date).toUTCString().slice(0, 16)}</p>
                    </div>
                </div>

                <div className='mainblog2main'>
                    <div className='mainblog2'>
                        <div className='mainblog2left'>
                            <div className='mainblogimgdiv'>
                                <img src={changeimg}></img>
                            </div>
                            <div className='mainblogmainparadiv'>

                                <section id='respBlog' dangerouslySetInnerHTML={{ __html: newdata }} ></section>

                            </div>
                        </div>
                        <div className='mainblog2right'>
                            <div className='mainblogRecentdiv'>
                                <h3 className='mainblogRecent'>Recent Posts</h3>

                                {recent.slice(1, 4).map((item) => {
                                    return (
                                        <a onClick={() => innerFunc(item)}>
                                            <div className='mainblogRecentinner'>
                                                <h6>{item.heading}</h6>
                                                <span>Read More »</span>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>


                            <div className='mainblogbox'>
                                <h3 className='mainblogtouch'>Get In Touch With Us</h3>
                                <div class="mb-3">
                                    <input placeholder='Your Name' type="text" class="form-control FormSelectblog" id="recipient-name" />
                                </div>
                                <div class="mb-3">
                                    <input placeholder='Your Email' type="text" class="form-control FormSelectblog" id="recipient-name" />
                                </div>
                                <div class="mb-3">
                                    <input placeholder='Your Mobile' type="text" class="form-control FormSelectblog" id="recipient-name" />
                                </div>
                                <div className='mb-3'>
                                    <select placeholder='Select Stream' className='FormSelect FormSelectblog' name="cars" id="cars" >
                                        <option value="saab">Select Stream</option>
                                        <option value="School">School</option>
                                        <option value="College">College</option>
                                        <option value="Performance Booster">Performance Booster</option>
                                        <option value="Pre-school">Pre-school</option>
                                    </select>
                                </div>
                                <div className='modalBtn'>
                                    <button type="button" className="btn btn-secondary FormSubmit">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
                {/* updated page  */}

                <Footer />
                {/* <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>

            </div> */}
        </>
    )
}
