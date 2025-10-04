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
import ReactPaginate from 'react-paginate';
import Newenqire from '../Enquire Form/Newenqire'

export default function Blogs() {
    const [cat, setCat] = useState([])
    const [data, setData] = useState([])
    const [catId, setCatid] = useState(1)
    const [noArticle, setNOarticle] = useState(false)
    const [state, setState] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 12;  // Set the number of items per page
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        getCategory()
    }, [])

    useEffect(() => {
        changeCategory()
    }, [catId])

    const getCategory = () => {
        let url = "https://nayakstutorials.com/admin/api/blog/"

        axios.get(url).then((resp) => {
            setCat(resp.data.category)
        }).catch((err) => {
            console.log('cat error', err)
        })
    }

    const changeCategory = () => {
        let url = `https://nayakstutorials.com/admin/api/blog/`
        const options = {
            params: { category: catId, },
        };

        axios.get(url, options).then((resp) => {
            setTimeout(() => {
                setState(true)
            }, 1000);
            setData(resp.data.blogs)
        }).catch((err) => {
            console.log('err', err)
        })
    }

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
        window.scrollTo(0, 0); 
    };

    const navtoMain = (id) => {
        navigate(`/blog/${id}`, { state: { id: id } })
    }

    // Get the current page's data
    const offset = currentPage * itemsPerPage;
    const currentData = data.slice(offset, offset + itemsPerPage);

    return (
        <>
            <Helmet>
                <title>Blogs | Nayak's Tutorials, Thane</title>
                <meta charSet="utf-8" />
                <meta name="description" content="Discover the ultimate guide to coaching classes on our blog. Gain insights, tips, and resources to excel in your coaching journey." />
                <link rel="canonical" href="https://nayakstutorials.com/blog" />
            </Helmet>
            <div className="wpfloat">
                <LogoContact />
                <Newnavbar />
                <div className='mainblogsdiv'>
                    <div className='testBtnDiv'>
                        <a className='blogcursur' onClick={() => setCatid(1)} >
                            <div style={{ color: catId == 1 ? 'white' : '#D00000', backgroundColor: catId == 1 ? '#D00000' : 'white' }} className={`testBtn ${catId == 1 ? 'testActive ' : 'nono'}`}>All</div>
                        </a>
                        {cat.map((item, index) => {
                            return (
                                <a className='blogcursur' onClick={() => setCatid(item.id)} >
                                    <div style={{ color: catId == item.id ? 'white' : '#D00000', backgroundColor: catId == item.id ? '#D00000' : 'white' }} className={`testBtn ${catId == item.id ? 'testActive ' : 'nono'}`}>{item.category}</div>
                                </a>
                            )
                        })}
                    </div>

                    {!state ? <Skelton /> : (
                        <div className='blogsectiondiv'>
                            {currentData.map((item, index) => {
                                return (
                                    <a href={`/blog/${item.slug_url}`}>
                                        <div className="card" onClick={() => navtoMain(item.slug_url)} >
                                            <img src={item.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{item.heading.split(" ").slice(0, 9).join(" ")}...</h5>
                                                <p className="card-text">{item.shortcontent.split(" ").slice(0, 12).join(" ")}...</p>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <MdDateRange size={20} />
                                                    <p className="card-title">{new Date(item.added_date).toUTCString().slice(0, 16)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="pagination-container">
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={Math.ceil(data.length / itemsPerPage)}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            activeClassName={"active"}
                            previousClassName={"previous"}
                            nextClassName={"next"}
                        />
                    </div>
                </div>

                <Footer />

                <a href="https://wa.me/+917710010044" target="_blank">
                    <div className="wpicon">
                        <FaWhatsapp id="faWp" size={50} color="white" />
                    </div>
                </a>

                {/* <div className='newenquirediv'><Newenqire /></div> */}
            </div>
        </>
    )
}