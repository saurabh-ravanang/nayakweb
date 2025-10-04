import React, { useState } from 'react'
import './notes.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import { MdDateRange } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { Helmet } from "react-helmet";
import img from "../../Assets/Home/note1.png"
import img2 from "../../Assets/Home/note2.png"
import sci1 from '../../docpdf/Class 9 Science Chapter 1 notes.pdf'
import Newnavbar from '../newNavbar/Newnavbar';
import LogoContact from '../logoContact/logoContact';
import { FaWhatsapp } from "react-icons/fa";
import Newenqire from '../Enquire Form/Newenqire';

function Notes() {
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





    return (
        <>
            <Helmet>
                <title>Class 9 Science Chapter 1 Notes | Matter in Our Surroundings</title>
                <meta charSet="utf-8" />
                <meta name="title" content="Class 9 Science Chapter 1 Notes | Matter in Our Surroundings" />
                <meta name="description" content="Find detailed Class 9 Science notes on 'Matter in Our Surroundings' with simplified CBSE revision, key concepts, diagrams, and examples. Perfect for NCERT students." />

                <link rel="canonical" href="https://nayakstutorials.com/cbse-notes/matter-in-our-surroundings-class-9-science/" />


                <script type="application/ld+json">
                    {`{
                        "@context": "https://schema.org",
                    "@type": "Article",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                    "@id": "https://nayakstutorials.com/cbse-notes/matter-in-our-surroundings-class-9-science/"
  },
                    "headline": "NCERT Solutions for Class 9 Science Chapter 1 Matter in Our Surroundings",
                    "description": "Find detailed Class 9 Science notes on 'Matter in Our Surroundings' with simplified CBSE revision, key concepts, diagrams, and examples. Perfect for NCERT students.",
                    "image": [
                    "https://nayakstutorials.com/static/media/note3.78d9a6416ad01f5d1501.png",
                    ""
                    ],
                    "author": {
                        "@type": "Person",
                    "name": "Admin"
  },
                    "publisher": {
                        "@type": "Organization",
                    "name": "",
                    "logo": {
                        "@type": "ImageObject",
                    "url": ""
    }
  },
                    "datePublished": "2024-09-01",
                    "dateModified": "2024-09-20"
                    }`}
                </script>

            </Helmet>

            {/* <Navbar /> */}

            <div className="wpfloat">

                <LogoContact />
                <Newnavbar />
                <div className='mainblogmaindiv'>
                    <div className='mainblogmaininner'>
                        {/* <p>Home » Blogs » Why Choose ICSE? Benefits for Middle School Students</p> */}
                        <div style={{ marginBottom: "10px" }}><a href='/'>Home »</a><a href='/blog'>Notes »</a><a>Class 9 Science Chapter 1 Notes | Matter in Our Surroundings</a></div>
                        <h2>Class 9 Science Chapter 1 - Matter in Our Surrounding Notes</h2>
                        <p><FaUser /> <span>Nayaks Tutorials</span>  &nbsp;&nbsp;  <MdDateRange className='MdDateRange' /> Thu, 15 Aug 2024</p>
                    </div>
                </div>



                <div className='notes2main'>
                    <div className='notes2'>
                        <div className='notes2left'>
                            <div className='mainblogmainparadiv'>
                                <div className='notefirstdiv'>
                                    <h3 className='noteMainHeading'>Class 9 Science Chapter 1 - Matter in Our Surrounding Notes</h3>
                                </div>
                                <p className='notespara'>Class 9 Science Chapter 1, Matter in Our Surroundings, introduces the basic concept of matter, which makes up everything around us. This chapter explains how matter exists in different forms, how it behaves under various conditions, and the changes it undergoes. These notes are designed to help students grasp these fundamental concepts in a simple and clear way, making it easier to understand how the physical world works.</p>
                                <p className='notespara'>To enhance understanding and aid in exam preparation, students are encouraged to use comprehensive revision notes.</p>


                                <div className='notesDowndload'>
                                    <h3 className='notesDowndloadHeading'>Download the Sample Test Paper for Class 9 Science Chapter 1 - Matter in Our Surroundings</h3>
                                    <a target='_blank' href={sci1}>
                                        <div className='modalBtn'>
                                            <button type="button" className="btn btn-secondary notesdownloadBtn">Download</button>
                                        </div>
                                    </a>
                                </div>





                                <h2 className='notesubheading'>Introduction to Matter:</h2>
                                <p className='notespara'>Everything in the universe is made up of material that occupies space and has mass, known as matter. Matter includes everything around us, from the air we breathe and the food we eat to stones, clouds, stars, plants, and animals. Even the smallest particle, like a drop of water or a grain of sand, is considered matter.</p>
                                <h2 className='notesubheading'>Matter primarily exists in three states: solid, liquid, and gas.</h2>
                                <p className='notespara notelistitem'>Solid: Particles are tightly packed in a fixed arrangement, giving solids a definite shape and volume. They are incompressible and have high density, like ice or metal.</p>
                                <p className='notespara notelistitem'>Liquid: Particles are loosely packed, allowing them to move freely. Liquids have a definite volume but take the shape of their container. They are slightly compressible and flow easily, such as water or oil.</p>
                                <p className='notespara notelistitem'>Gas: Particles are far apart and move independently, filling the entire space available. Gases have neither a definite shape nor volume, are highly compressible, and can expand, like oxygen or carbon dioxide.</p>

                                <img className='notesimg' src={img} alt='note1'></img>

                                <h2 className='notesubheading'>Historical view on Matter</h2>
                                <p className='notespara notelistitem'>Panch Tatva: Early Indian philosophers classified matter into five basic elements known as "Panch Tatva" – air, earth, fire, sky, and water.</p>
                                <p className='notespara notelistitem'>Modern Classification: In contrast, modern scientists have evolved a classification system for matter based on its physical properties and chemical nature.</p>

                                <h3 className='notesubheading'>Question: 1. How many different ways did ancient Indian philosophers classify matter?</h3>
                                <h2 className='notesubheading'>Which of the following are matter?</h2>
                                <p className='notespara'>Chair, air, love, smell, hate, almonds, thought, cold, lemon water, smell of perfume.</p>
                                <p className='notespara'><span className='Answer'> Answer:</span> Matter is anything that has mass and occupies space. Based on this definition, the following items from the list are considered matter:</p>
                                <p className='notespara'>•	Chair <br></br>
                                    •	Air <br></br>
                                    •	Almonds <br></br>
                                    •	Lemon water <br></br>
                                </p>
                                <p className='notespara'>The other items, such as love, smell, hate, thought, cold, and smell of perfume, are not considered matter because they do not have mass and do not occupy space. These are either emotions, sensations, or states, which do not qualify as matter.</p>
                                <h2 className='notesubheading'>Characteristics of Matter</h2>
                                <p className='notespara'>Matter, which makes up everything around us, has three key characteristics that define its behavior:</p>
                                <h3 className='notesubheading'>1.Continuous Movement of Particles:</h3>
                                <p className='notespara'>Particles of matter are always in motion. This movement varies depending on the state of matter (solid, liquid, or gas) and is influenced by factors like temperature. For instance, particles in a gas move more freely and rapidly compared to those in solids or liquids.</p>
                                <h3 className='notesubheading'>2.Space Between Particles: </h3>
                                <p className='notespara'>There is always some amount of space between the particles of matter. This space determines the density of the material and how particles interact with each other. In solids, the particles are closely packed with minimal space between them, whereas in gases, the space between particles is much larger.</p>
                                <h3 className='notesubheading'>3.Attraction Between Particles: </h3>
                                <p className='notespara'>Particles of matter have a natural tendency to attract each other. The strength of this attraction varies depending on the type of matter. In solids, the particles are strongly attracted to each other, which gives solids their definite shape. In liquids, the attraction is weaker, allowing the particles to flow, and in gases, the attraction is very weak, allowing particles to move freely.</p>
                                <p className='notespara'>Understanding these characteristics is fundamental in explaining the behavior and properties of different states of matter.</p>
                                <p className='Answer'>Give reasons for the following observation:</p>
                                <p className='notespara'>The smell of hot sizzling food reaches you several metres away, but to get the smell from cold food you have to go close.</p>
                                <p className='notespara'>(i) When food is sizzling hot, it releases vapours of its contents. <br></br>
                                    (ii) Because on increasing the temperature of food, the kinetic energy of the particles increases, hence, they diffuse at a faster speed and reach us even at some distance.<br></br>
                                    (iii) However, no such vapours are released when the food is cold.<br></br>
                                    (iv) Therefore, we have to go close to it in order to get its smell.
                                </p>
                                <p className='Answer'>A diver is able to cut through water in a swimming pool. Which property of matter does this observation show?</p>
                                <p className='notespara'><span className='Answer'> Answer:</span>This shows that in water which represents the liquid state of matter, there are sufficient inter particle spaces. That is why, a diver is able to cut through water. He might not do the same had these spaces been very small, e.g. in solid state.</p>
                                <p className='notespara'>Long Answer Questions (5 Marks)</p>
                                <p className='Answer'>1. What are the characteristics of the particles of matter? <br></br>
                                    (1) Particles of matter have space between them.</p>

                                <p className='notespara'><span className='Answer'> Answer:</span>When we make tea, coffee or lemonade (nimbu paani), particles of one type of matter get into the spaces between particles of the other. This shows that there is enough space between particles of matter. Similarly, particles of sugar, salt, dettol, or potassium permanganate get evenly distributed in water.
                                </p>
                                <p className='Answer'>(2) Particles of matter are continuously moving.</p>
                                <p className='notespara'><span className='Answer'> Answer:</span>Particles of matter are continuously moving, that is, they possess what we call the kinetic energy. As the temperature rises, particles move faster. So, we can say that with increase in temperature, the kinetic energy of the particles also increases.
                                </p>
                                <p className='Answer'>(3) Particles of matter attract each other.</p>
                                <p className='notespara'><span className='Answer'> Answer:</span>Particles of matter have force acting between them. This force keeps the particles together. The strength of this force of attraction varies from one kind of matter to another.
                                </p>

                                <h2 className='notesubheading'>Characteristics of Solid, Liquid, and Gaseous States</h2>
                                <p className='notesubheading'>1. Solid State: </p>
                                <p className='notespara'>
                                    <span className='Answer'> • Tightly Packed Particles: </span>In solids, particles are very closely packed together, giving solids their firm and fixed structure.<br></br>
                                    <span className='Answer'> •	Strong Particle Attraction: </span> The force of attraction between particles in solids is very strong, keeping them in fixed positions.<br></br>
                                    <span className='Answer'> •	Definite Shape and Volume: </span> Solids maintain a specific shape and volume because the particles do not move freely.<br></br>
                                    <span className='Answer'> •	High Density: </span> Solids have a high density due to the close arrangement of their particles.<br></br>
                                    <span className='Answer'> •	Incompressibility: </span> Solids cannot be easily compressed because the particles are already tightly packed.<br></br>
                                    <span className='Answer'> •	Non-Diffusive: </span> Solids do not diffuse into other substances, as their particles are not free to move.<br></br>
                                </p>

                                <p className='notesubheading'>2. Liquid State: </p>
                                <p className='notespara'>
                                    <span className='Answer'> •	Loosely Packed Particles:</span> Particles in liquids are less closely packed than in solids, allowing them to move around more freely.<br></br>
                                    <span className='Answer'> •	Moderate Particle Attraction:  </span> The attraction between particles in a liquid is weaker than in a solid, allowing for fluid movement.<br></br>
                                    <span className='Answer'> •	Indefinite Shape, Definite Volume:</span> Liquids take the shape of their container but maintain a consistent volume.  <br></br>
                                    <span className='Answer'> •	Lower Density than Solids: </span> Liquids generally have a lower density compared to solids, enabling them to flow.<br></br>
                                    <span className='Answer'> •	Nearly Incompressible:  </span> Liquids are almost incompressible, though slightly more so than solids.<br></br>
                                    <span className='Answer'> •	Diffusion Ability: </span>  Liquids can diffuse into other liquids or gases, although more slowly than gases.<br></br>
                                </p>

                                <p className='notesubheading'>3. Gaseous State: </p>
                                <p className='notespara'>
                                    <span className='Answer'> •	Widely Spaced Particles:</span> In gases, particles are far apart, giving gases their ability to expand and fill any container.<br></br>
                                    <span className='Answer'> •	Negligible Particle Attraction:  </span>  The force of attraction between particles in gases is very weak, allowing them to move freely.<br></br>
                                    <span className='Answer'> •	No Definite Shape or Volume:</span>  Gases neither have a fixed shape nor a fixed volume; they expand to occupy the space available.<br></br>
                                    <span className='Answer'> •	Low Density: </span> Gases have the lowest density among the three states of matter due to the large spaces between particles.<br></br>
                                    <span className='Answer'> •	Highly Compressible: </span>  Gases can be easily compressed because of the significant space between particles.<br></br>
                                    <span className='Answer'> •	Rapid Diffusion: </span>  Gases diffuse quickly into other gases because of their free-moving particles.<br></br>
                                </p>
                                <p className='notespara'>This overview summarizes the key differences in the arrangement and behavior of particles in solids, liquids, and gases, explaining why each state of matter has its own unique set of properties.
                                </p>

                                <div className='notesTable table-responsive-sm'>
                                    <table className='table sautable'>
                                        <thead>
                                            <tr>
                                                <td>Property</td>
                                                <td>Solids</td>
                                                <td>Liquids</td>
                                                <td>Gases</td>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr >
                                                <td>Mass</td>
                                                <td>Definite mass</td>
                                                <td>Definite mass</td>
                                                <td>Definite mass</td>
                                            </tr>
                                            <tr >
                                                <td>Shape</td>
                                                <td>Definite shape</td>
                                                <td>No definite shape</td>
                                                <td>No definite shape</td>
                                            </tr>
                                            <tr >
                                                <td>Volume</td>
                                                <td>Definite Volume</td>
                                                <td>Definite Volume</td>
                                                <td>No definite Volume</td>
                                            </tr>
                                            <tr >
                                                <td>Density</td>
                                                <td>Highest</td>
                                                <td>Lower than solids, higher than gases</td>
                                                <td>Lowest</td>
                                            </tr>
                                            <tr >
                                                <td>Rigidity</td>
                                                <td>Highly rigid</td>
                                                <td>Less rigid than solids</td>
                                                <td>Not rigid</td>
                                            </tr>
                                            <tr >
                                                <td>Fluidity</td>
                                                <td>Do not flow</td>
                                                <td>From higher level to low level</td>
                                                <td>In all directions</td>
                                            </tr>
                                            <tr >
                                                <td>Compressibility</td>
                                                <td>Very low or cannot be compressed easily</td>
                                                <td>Low</td>
                                                <td>Very high</td>
                                            </tr>
                                            <tr >
                                                <td>Free Surface</td>
                                                <td>Infinite</td>
                                                <td>One (upper surface)</td>
                                                <td>No free surface</td>
                                            </tr>
                                            <tr >
                                                <td>Diffusion</td>
                                                <td>Cannot diffuse</td>
                                                <td>Few diffuse immediately</td>
                                                <td>Diffuse rapidly</td>
                                            </tr>
                                            <tr >
                                                <td>Thermal Expansion</td>
                                                <td>Low and Linear</td>
                                                <td>Higher than solids</td>
                                                <td>Highest</td>
                                            </tr>
                                            <tr >
                                                <td>Packing of particles</td>
                                                <td>Tightly packed</td>
                                                <td>Loosely packed</td>
                                                <td>Very loosely packed</td>
                                            </tr>
                                            <tr >
                                                <td>Spaces between particles</td>
                                                <td>Very less</td>
                                                <td>Greater space as compared to solids</td>
                                                <td>Greatest</td>
                                            </tr>
                                            <tr >
                                                <td>Forces of Attraction</td>
                                                <td>Very strong</td>
                                                <td>Less than solids</td>
                                                <td>Least</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                                <br></br>


                                <p className='Answer'><span className='Answer'> 3. Give reasons: </span></p>
                                <p className='notespara'>
                                    (a) A gas completely fills the vessel in which it is kept.<br></br>
                                    (b) A gas exerts pressure on the walls of the container.<br></br>
                                    (c) A wooden table should be called a solid.<br></br>
                                    (d) We can easily move our hand in air but to do the same through a solid block of wood we need a karate expert.
                                </p>
                                <p className='notespara'><span className='Answer'> Answer :</span>
                                    (a) A gas completely fills the vessel in which it is kept because due to high kinetic energy and negligible forces of attraction, the molecules of a gas are moving with high speed in all directions.<br></br>
                                    (b) The kinetic energy of the particles in the gaseous state is maximum. Particles move about randomly at high speed. Due to random movement, the particles hit each other and also the walls of the container.<br></br>
                                    The pressure exerted by the gas is because of the force exerted by the gas particles per unit area on the walls of the container.
                                    (c) A wooden table should be called a solid because (i) it is rigid and cannot be compressed easily (ii) it has a definite volume and definite shape.<br></br>
                                    (d) It is because the intermolecular forces in wood (solid) are the strongest and negligible in air (gas).
                                </p>
                                <h2 className='notesubheading'>Can Matter Change Its State?</h2>
                                <p className='notespara'>•	Physical states of matter can be changed from one form to another in two primary ways:<br></br>
                                    1.	By changing the temperature<br></br>
                                    2.	By changing the pressure
                                </p>
                                <h3 className='notesubheading'>Key Concepts </h3>
                                <p className='notespara'>
                                    •	Diffusion: The process where particles of two different types of matter mix on their own is known as diffusion.<br></br>
                                    •	Latent Heat of Fusion: This is the amount of heat energy required to convert 1 kg of a solid into a liquid at atmospheric pressure and its melting point.<br></br>
                                    •	Latent Heat of Vaporization: This is the heat energy needed to convert 1 kg of a liquid into gas at atmospheric pressure and its boiling point.<br></br>
                                    •	Sublimation: Sublimation is the process in which a solid changes directly into a gas without passing through the liquid state. Examples include solid carbon dioxide (dry ice), ammonium chloride, and camphor.
                                </p>

                                <img className='notesimg' src={img2} alt='note2'></img>
                                <br></br>
                                <br></br>

                                <p className='notespara'>
                                    <span className='Answer'> 4. Explain the diffusion of potassium permanganate solution in water.</span><br></br>
                                    Ans: Potassium permanganate is a purple coloured solid substance which dissolves in water to form a purple coloured solution.
                                    The purple coloured potassium permanganate solution is kept in a beaker [Fig. (a)]. Tilt the beaker containing potassium permanganate solution slightly and add some clear water to it carefully along the sides of the beaker without disturbing the purple coloured solution. In this way, we will get two distinct layers of liquids in the beaker, the lower layer of purple coloured potassium permanganate solution and the upper layer of colourless water [Fig. (b)]. Soon we will see the purple colour of potassium permanganate solution spreading upwards into clear water and clear water moving downwards into purple solution [Fig. (c)]. After some time, the whole this stage, the potassium permanganate solution and water mix with each other completely to form a uniformly coloured purple solution.
                                    The spreading of purple colour into whole water is due to the diffusion of potassium permanganate solution and clear water into each other.
                                </p>


                                <h2 className='notesubheading'>Factors Affecting the Rate of Evaporation </h2>
                                <p className='notespara'>
                                    •	Increase in Surface Area: Evaporation is a surface phenomenon. An increase in surface area speeds up evaporation, such as spreading clothes out to dry.<br></br>
                                    •	Increase in Temperature: Higher temperatures provide more kinetic energy to particles, enabling them to evaporate more quickly.<br></br>
                                    •	Decrease in Humidity: Lower humidity increases evaporation since less water vapor in the air allows more liquid to turn into vapor.<br></br>
                                    •	Increase in Wind Speed: Higher wind speeds remove water vapor from the air near the liquid surface, allowing more liquid to evaporate.
                                </p>
                                <h2 className='notesubheading'>Evaporation and Boiling</h2>
                                <p className='notespara'>
                                    •	Evaporation: The process by which a liquid changes into vapor at temperatures below its boiling point. Evaporation is a surface phenomenon.<br></br>
                                    •	Boiling Point: The temperature at which a liquid starts boiling at atmospheric pressure. Boiling is a bulk phenomenon, meaning it affects the entire liquid, not just the surface.<br></br>
                                    These notes cover essential aspects of how matter changes states, the energy involved in these processes, and how external factors can influence the rate at which these changes occur.
                                </p>
                                <h2 className='notesubheading'>Short question and answers: </h2>

                                <p className='notespara'>
                                    <span className='Answer'> 12. Convert the following temperatures to celsius scale: </span>
                                    (a) 300 K (b) 573 K.
                                </p>
                                <p className='notespara'>
                                    <span className='Answer'> Answer: </span>
                                    Temperature on Kelvin scale = Temperature on Celsius scale + 273<br></br>
                                    (a) 300 = Temperature on Celsius scale + 273<br></br>
                                    or Temperature of Celsius scale = 300 - 273 = 27°C<br></br>
                                    (b) 573 = Temperature on Celsius scale + 273<br></br>
                                    or Temperature on Celsius scale = 573 - 273 = 300°C

                                </p>

                                <p className='notespara'>
                                    <span className='Answer'> 13. Convert the following temperature to Kelvin scale: </span>
                                    (a) 25°C (b) 373°C
                                </p>
                                <p className='notespara'>
                                    <span className='Answer'> Answer: </span>
                                    (a) K = C + 273 <br></br>
                                    ∴ K = 25 + 273 <br></br>
                                    ∴ K = 298 K. <br></br>
                                    (b) K = C + 273 <br></br>
                                    ∴ K = 373 + 273 <br></br>
                                    ∴ K = 646 K.
                                </p>

                                <h2 className='Answer'>3. Why does a desert cooler cool better on a hot dry day?</h2>
                                <p className='notespara'>
                                    <span className='Answer'> Answer: </span>
                                    (i) The cooling in a desert room cooler is caused by the evaporation of water.<br></br>
                                    (ii) A desert cooler cools better on a hot and dry day because the higher temperature on a hot day increases the rate of evaporation of water and the dryness of air (low humidity of air) also increases the rate of evaporation of water.<br></br>
                                    (iii) Due to the increased rate of evaporation of water, a desert cooler cools better on a hot and dry day.
                                </p>

                                <h2 className='Answer'>1.	Why do people wear cotton clothes in summer?</h2>
                                <p className='notespara'>
                                    We sweat more in summer. As the sweat evaporates it takes energy from our body surface and keeps our body cool. Cotton can absorb the sweat easily and exposes it to the atmosphere causing evaporation to take place easily. This, in turn, keeps us cool on summer days.
                                </p>
                                <h2 className='Answer'>2.	Why do water droplets appear in the surrounding of glass with ice-cold water?</h2>
                                <p className='notespara'>
                                    There are water vapours present in the air. When they come in contact with the walls of the glass that has ice-cold water in it they condense. As a result, their state changes from the gaseous state to liquid state thus forming tiny water droplets on the walls of the glass.
                                </p>
                                <h2 className='Answer'>3.	How does the water kept in an earthen pot becomes cool during summer?</h2>
                                <p className='notespara'>
                                    There are many small pores in an earthen pot. Through these pores, the water kept inside the pot evaporates. It takes the latent heat required for vaporization from the earthen pot and the remaining water in the earthen pot. Hence water loses heat making the water inside the pot cool.
                                </p>

                                <h3 className='Answer'> Give reasons: (a) Naphthalene balls disappear with time without leaving any solid substance.<br></br>
                                    (b) We can get the smell of perfume sitting several metres away.</h3>
                                <p className='notespara'>
                                    <span className='Answer'> Answer: </span>(a) Naphthalene balls disappear without leaving any solid substance because they sublime. They change directly from solid to gas without changing into a liquid state. <br></br>
                                    (b) We can get the smell of perfume sitting several metres away. The particles of perfume mix with the particles of air around us and spread out. Due to this spreading of particles, we are able to get the smell even sitting several metres away.
                                </p>
                                <h3 className='Answer'> Why is ice at 273 K more effective in cooling than water at the same temperature?</h3>
                                <p className='notespara'>
                                    <span className='Answer'> Answer: </span>Cooling takes place when heat is removed from a system. In case of ice at 272 K, it will take latent heat from the medium to convert itself into water at 273 K and then into water at a higher temperature. Thus, in case of ice at 273 K there will be a change in physical state, whereas in case of water at 273 K there will be no change in state. Hence, lesser energy will be taken from the medium.<br></br>

                                    In conclusion, the Class 9 Science Chapter 1 notes on "Matter in Our Surroundings" provide a thorough understanding of the essential concepts related to the physical properties and behavior of matter. These notes cover how matter changes states, the influence of temperature and pressure, and the distinct characteristics of solids, liquids, and gases. They also delve into key processes like diffusion, evaporation, and sublimation, along with the factors that affect the rate of evaporation.
                                    By studying these well-structured "Matter in Our Surroundings" Class 9 notes and joining CBSE coaching classes for 9th and 10th standard at Nayak's Tutorials, students can enhance their grasp of these crucial concepts. This strong foundation will not only help in excelling in exams but also prepare them for more advanced studies in the field of physical sciences.

                                </p>
                            </div>
                        </div>











                        <div className='notes2right'>
                            <div className='mainblogRecentdiv'>
                                {/* <h3 className='mainblogRecent'>Recent Posts</h3>
                            <a>
                                <div className='mainblogRecentinner'>
                                    <h6>item.heading</h6>
                                    <span>Read More »</span>
                                </div>
                            </a> */}
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


                                <div className='mb-3'>
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


                <Footer />

                <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>
                {/* <div className='newenquirediv'><Newenqire /></div> */}
            </div>
        </>
    )
}

export default Notes
