import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import './blogs.css'
import mainBanner2 from "../../Assets/Home/mybanner.jpg"
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios";
import Skelton from '../skelton/Skelton'
import { MdDateRange } from "react-icons/md";
import { Helmet } from "react-helmet";
import LogoContact from '../logoContact/logoContact'
import Newnavbar from '../newNavbar/Newnavbar'
import { FaWhatsapp } from "react-icons/fa";

export default function Blogs() {
    const [cat, setCat] = useState([])
    const [data, setData] = useState([])
    const [catId, setCatid] = useState(1)
    const [noArticle, setNOarticle] = useState(false)
    const [state, setState] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()



    useEffect(() => {
        getCategory()
        // fetchBlogs()
    }, [])
    useEffect(() => {
        changeCategory()
        // fetchBlogs()
    }, [catId])



    const getCategory = () => {
        // let url = "https://paybycal.com/api/h_article_category_list_web.php"
        // let url = "https://adminnayak.pixsonik.com/api/blog"
        let url = "https://nayakstutorials.com/admin/api/blog/"

        axios.get(url).then((resp) => {
            console.log('new cat data sa', resp.data)
            console.log('new categoryyyyyy', resp.data.category)
            setCat(resp.data.category)
        }).catch((err) => {
            console.log('cat errrorrr', err)
        })
    }

    const changeCategory = () => {
        // console.log('change cat func',id)
        // let url = `https://paybycal.com/api/h_article_cat_list_web.php?id=${catId}`
        // let url = `https://adminnayak.pixsonik.com/api/blog/`
        let url = `https://nayakstutorials.com/admin/api/blog/`
        const options = {
            params: { category: catId, },
        };
        // console.log("ur l==> ", url);
        axios.get(url, options).then((resp) => {
            console.log('new resp by saurabh', resp.data)

            setTimeout(() => {
                setState(true)
            }, 1000);
            setData(resp.data.blogs)
            if (resp.data.status == 'true') {
                // setState(false)
            } else {
                // setState(true)
            }
        }).catch((err) => {
            console.log('err', err)

        })
    }
    const navtoMain = (id) => {
        navigate(`/blog/${id}`, { state: { id: id } })
    }

    return (
        <>
            <Helmet>
                <title>Blogs | Nayak's Tutorials, Thane</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Discover the ultimate guide to coaching classes on our blog. Gain insights, tips, and resources to excel in your coaching journey." />

                <link rel="canonical" href="https://nayakstutorials.com/blog" />

            </Helmet>
            {/* <Navbar /> */}

            <div className="wpfloat">

                <LogoContact />
                <Newnavbar />
                <div className='mainblogsdiv'>
                    <div className='testBtnDiv' >
                        <a className='blogcursur' onClick={() => setCatid(1)} ><div style={{ color: catId == 1 ? 'white' : '#D00000', backgroundColor: catId == 1 ? '#D00000' : 'white' }} className={`testBtn ${catId == 1 ? 'testActive ' : 'nono'}`}>All</div></a>
                        {cat.map((item, index) => {
                            return (<>
                                <a className='blogcursur' onClick={() => setCatid(item.id)} ><div style={{ color: catId == item.id ? 'white' : '#D00000', backgroundColor: catId == item.id ? '#D00000' : 'white' }} className={`testBtn ${catId == item.id ? 'testActive ' : 'nono'}`}>{item.category}</div></a>
                            </>)
                        })}
                    </div>

                    {!state ? <Skelton /> : (
                        <div className='blogsectiondiv'>
                            {data.map((item, index) => {
                                console.log(item);
                                return (
                                    <a href={`/blog/${item.slug_url}`}>
                                        <div class="card" onClick={() => navtoMain(item.slug_url)} >
                                            <img src={item.image} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{item.heading.split(" ").slice(0, 9).join(" ")}...</h5>
                                                <p class="card-text">{item.shortcontent.split(" ").slice(0, 12).join(" ")}...</p>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <MdDateRange size={20} />
                                                    <p class="card-title"> {new Date(item.added_date).toUTCString().slice(0, 16)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                )
                            }
                            )}
                        </div>
                    )}
                    {/* {noArticle ? (
                    <div className='blogsectiondiv'>
                        {data.map((item, index) => {
                            console.log(item);
                            return (
                                <div class="card" onClick={() => navtoMain(item.slug_url)} >
                                    <img src={item.image} class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{item.heading.split(" ").slice(0, 9).join(" ")}...</h5>
                                        <p class="card-text">{item.shortcontent.split(" ").slice(0, 12).join(" ")}...</p>
                                        <p class="card-title"> {new Date(item.added_date).toUTCString().slice(0, 16)}</p>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                ) : <h1 style={{ textAlign: 'center', margin: '20px' }}>No Articles Found</h1>} */}
                </div>
                <Footer />

                <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>

            </div>
        </>
    )
}

{/* <div class="card" >
                        <img src={mainBanner2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p class="card-text"> December 22, 2023</p>
                        </div>
                    </div> */}



{/* <div className='testBtnDiv'>
                    <a href='#ssc'><div style={{ color: location.hash == '#ssc' ? 'white' : '#D00000', backgroundColor: location.hash == '#ssc' ? '#D00000' : 'white' }} className={`testBtn ${location.hash == '' ? 'testActive ' : 'nono'}`}>All</div></a>
                    <a href='#icsc'><div style={{ color: location.hash == '#icsc' ? 'white' : '#D00000', backgroundColor: location.hash == '#icsc' ? '#D00000' : 'white' }} className='testBtn'>School</div></a>
                    <a href='#cbsc'><div style={{ color: location.hash == '#cbsc' ? 'white' : '#D00000', backgroundColor: location.hash == '#cbsc' ? '#D00000' : 'white' }} className='testBtn'>College</div></a>
                    <a href='#icsc2'><div style={{ color: location.hash == '#icsc2' ? 'white' : '#D00000', backgroundColor: location.hash == '#icsc2' ? '#D00000' : 'white' }} className='testBtn'>Entrance exam</div></a>
                </div> */}