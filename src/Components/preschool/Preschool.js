import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import dot from "../../Assets/faq/dot.png"
import dot2 from "../../Assets/faq/dot.png"
import mainImg from "../../Assets/tybcom/preschoolnew.png"
import matrix from "../../Assets/cbse/matrix.png"
// import trivia from "../../Assets/cbse/Trivia -10th.png"
import playgroup from "../../Assets/faq/playgroup.png"
import nursery from "../../Assets/faq/nursery.png"
import daycare from "../../Assets/faq/daycare.png"
import preschoolLastImg from "../../Assets/faq/preschool-web.png"
import './preschool.css'
import { Helmet } from "react-helmet";
import Newnavbar from '../newNavbar/Newnavbar'
import LogoContact from '../logoContact/logoContact'
import { FaWhatsapp } from "react-icons/fa";
import Newenqire from '../Enquire Form/Newenqire'

export default function Preschool() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Preschool in Thane | Galloping Minds by Nayak's Tutorials</title>
                <meta name="title" content="Preschool in Thane | Galloping Minds by Nayak's Tutorials" />
                <meta name="description" content="Galloping Minds by Nayak's Tutorials in Thane provides a caring preschool with playgroup, nursery, and daycare programs. " />

                <link rel="canonical" href="https://nayakstutorials.com/preschool/" />

                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Nayak's Tutorials",
                        "image": "https://nayakstutorials.com/static/media/mainImg.2fd512e526d0412ced2e.png",
                        "url": "https://nayakstutorials.com/preschool/",
                        "telephone": "77100 10044",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Thane",
                            "addressCountry": "IN"
                        },
                        "logo": "https://nayakstutorials.com/static/media/Full_Logo.34552bea51a0af756476.png",
                        "sameAs": [
                            "https://www.facebook.com/nayakstutorialss/",
                            "https://x.com/nayaks_tutorial",
                            "https://www.instagram.com/nayakstutorialss/",
                            "https://www.youtube.com/channel/UCSEL7iQLhfjOrIoDQWOqbDw"
                        ]
                    }`}
                </script>

                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org/",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://nayakstutorials.com/"
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Preschool in Thane",
                            "item": "https://nayakstutorials.com/preschool/"
                        }]
                    }`}
                </script>

                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        "name": "Preschool in Thane",
                        "image": "https://nayakstutorials.com/static/media/mainImg.2fd512e526d0412ced2e.png",
                        "description": "Galloping Minds by Nayak's Tutorials in Thane provides a caring preschool with playgroup, nursery, and daycare programs.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Nayak's Tutorials"
                        }
                    }`}
                </script>

            </Helmet>
            {/* <Navbar /> */}

            <div className="wpfloat">
                <LogoContact />
                <Newnavbar />

                <div className='preschoolTopDiv'>
                    <div className='breadcrumbNayak' style={{ marginBottom: "10px" }}><a href='/'>Home »</a><a href='/'>Our Offerings »</a><a>Pre-School</a></div>

                    <div className='preschoolMain'>
                        <div className='preschoolLeftDiv'>
                            <img src={mainImg} alt='Gallop Minds, Activity-Based Learning for Toddlers at Nayak’s Tutorials' />
                        </div>
                        <div className='preschoolRightDiv'>
                            <h3>Pre-School</h3>
                            <p>Nayak’s Tutorials offers pre-school in the form of Gaalloping Mindss where toddlers are exposed to activity-based curriculum and personalized attention. We started our pre-school and day-care provision in 2009 and are present in Mumbai and Thane. Research has proven that the minds of children are like sponge, especially between 1 to 4 years of age as they develop 50% to 60% of their intelligence and another 30% between 4 and 8 years. So, we have used this information to create a learning program for little ones that is age-appropriate and is implemented via a progressive teaching methodology. We ensure that the children learn while performing certain tasks, interactive learning, organized play and a well-rounded curriculum.</p>
                        </div>
                    </div>
                </div>

                <div className='preschoolSecondDiv'>
                    <div className='preschoolSeconDiv'>
                        <h1>How Nayak’s Tutorials helps</h1>

                        <div className='preschoolInnerDivv'>
                            <div className='preschoolflexDiv'>
                                <div className='preschoolFlexImgdiv'>
                                    <img src={playgroup} accessKey='Early Childhood Development Program for Toddlers'></img>
                                </div>
                                <div className='preschoolFlexheadingdiv'>
                                    <h3>Playgroup</h3>
                                    <p>We take admission for children aged one and a half years old. We help children with gross motor skills, social behavior, and put them on a program that directs towards fine motor skills</p>
                                </div>

                            </div>
                            <div className='preschoolflexDiv2'>
                                <div id='preschooseconlLastImg' className='preschoolFlexImgdiv'>
                                    <img src={nursery} alt='Early Learning for Children Ages Two and Above'></img>
                                </div>
                                <div className='preschoolFlexheadingdiv'>
                                    <h3>Nursery</h3>
                                    <p>We take in children who are two years and above. By this time, they begin to retain what they hear, see, do and experience. This is a good time to enrich their senses and put them on a path to learning.</p>
                                </div>

                            </div>
                            <div className='preschoolflexDiv'>
                                <div id='preschoolLastImg' className='preschoolFlexImgdiv'>
                                    <img src={daycare} alt='day care for 12 months to 2 years'></img>
                                </div>
                                <div className='preschoolFlexheadingdiv'>
                                    <h3>Day care</h3>
                                    <p>We take in between 12 months and 2 years and plan some fun activities with them. We choose along with the kids from a range of activities like drawing, dancing, playing chess, casio, phonetics, kathak, grammar, skating, play station, reading, karate and even abacus. Our in-house nutritionist also plans and we provide fresh and nutritious food for the children spending time at Gallooping Mindss.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className='preschoolThirdDiv'>
                    <h1>We cater to various aspects of  your child’s development</h1>
                    <div className='preschoolMainDiv2'>
                        <div id='preschoolFirst' className='preschoolMultipleText2'>
                            <div className='preschoolMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Health</h3>
                            </div>
                            <p>Habits of cleanliness & regularity of meals are developed to make your child more self-reliant.</p>
                        </div>
                        <div className='preschoolMultipleText2'>
                            <div className='preschoolMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Recreation</h3>
                            </div>
                            <p>Creating an atmosphere of fun & enjoyment through games.</p>
                        </div>
                        <div className='preschoolMultipleText2'>
                            <div className='preschoolMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Attitude</h3>
                            </div>
                            <p>Arousing curiosity & building an attitude to explore and understand through live demonstrations of various activities that happen in our real life & surroundings.</p>
                        </div>
                        <div className='preschoolMultipleText2'>
                            <div className='preschoolMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Education</h3>
                            </div>
                            <p>Imparting knowledge through play & creative activities.</p>
                        </div>
                        <div className='preschoolMultipleText2'>
                            <div className='preschoolMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Culture</h3>
                            </div>
                            <p>Educating about our culture & traditions through celebration of various festivals round the year.</p>
                        </div>
                        <div className='preschoolMultipleText2'>
                            <div className='preschoolMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Personality</h3>
                            </div>
                            <p>Ensuring your child interacts with the other kids through various activities thereby making him extrovert & expressive.</p>
                        </div>
                        <div className='preschoolMultipleText2'>
                            <div className='preschoolMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Affection & Attention</h3>
                            </div>
                            <p>A loving teacher-child interaction will make your child feel safe & secure thereby keeping his mind open to learning</p>
                        </div>
                        <div className='preschoolMultipleText2'>
                            <div className='preschoolMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Morals</h3>
                            </div>
                            <p>Imbibing values to make a humble individual.</p>
                        </div>
                        <div style={{ visibility: 'hidden' }} className='preschoolMultipleText2'>
                            <div className='preschoolMultipleInnerDiv2'>
                                <img src={dot2} />
                                <h3>Morals</h3>
                            </div>
                            <p>Imbibing values to make a humble individual.</p>
                        </div>
                    </div>
                </div>

                <div className='preshoollastBigimgDiv'>
                    <img src={preschoolLastImg} alt='Key Aspects of Child Development' />
                </div>
                <Footer />

                <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>
                {/* <div className='newenquirediv'><Newenqire /></div> */}
            </div>
        </>
    )
}
