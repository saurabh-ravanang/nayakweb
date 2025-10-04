import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import '../centers/center.css'
import phone from '../../Assets/phone-call (1).png'
import location from '../../Assets/maps-and-flags.png'
import { Helmet } from "react-helmet";
import LogoContact from '../logoContact/logoContact'
import Newnavbar from '../newNavbar/Newnavbar'
import { FaWhatsapp } from "react-icons/fa";
import Newenqire from '../Enquire Form/Newenqire'

function Centers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const contactInfo = [
    {
      name: 'Thane Vardhaman',
      address: '209, 2nd floor, Vardhaman Industrial Complex, Gokul Nagar, Old Agra Road, Thane (West) - 400601.',
      phone: '+91 22 21723434/ +91 77100 10044',
      // email: 'ajbn@ssc.mteducare.com',
    },
    {
      name: 'Thane Naupada',
      address: '2nd floor, Satyam Building,  Near Malhar Talkies, Prashant Nagar, Naupada, Thane West, Thane - 400602.',
      phone: '+91 77100 10042 / 7710010080',
      // email: 'ajbn@ssc.mteducare.com',
    },
    {
      name: 'Thane Vartak Nagar',
      address: 'Shop no. 116, Building number S-2, 1st floor, Vedant Commercial Complex, Vartak Nagar, Thane West, Thane - 400606.',
      phone: '+91 77100 10046',
      // email: 'ajbn@ssc.mteducare.com',
    },
    {
      name: 'Thane Vasant Vihar',
      address: 'Shop No.25, Amrapali Arcade, Opp. Vasant Vihar, Vasant Vihar, Thane West, Thane - 400610.',
      phone: '+91 77100 10127',
      // email: 'ajbn@ssc.mteducare.com',
    },
    {
      name: 'Thane Manpada',
      address: '2nd floor, Sahyog Commercial Complex, Tikuji Ni Wadi Rd, above MTNL office, Manpada, Thane West, Thane - 400607.',
      phone: '+91 77100 10041',
      // email: 'ajbn@ssc.mteducare.com',
    },
    {
      name: 'Thane Hiranandani',
      address: 'Shop no.10, Kenora C.H.S., Next to Hiranandani Foundation School, Hiranandani Estate, Thane West, Thane, Maharashtra 400607.',
      phone: '+91 77100 10069',
      // email: 'ajbn@ssc.mteducare.com',
    },
    {
      name: 'Thane Anand Nagar',
      address: 'Office No.S-1/2/3, 2nd Floor, Kris Korner commercial Plaza, Opp Saraswati Vidyalaya, Anand Nagar, G.B. Road, Thane - 400615.',
      phone: '+91 77100 10120',
      // email: 'ajbn@ssc.mteducare.com',
    },
    {
      name: 'Kalwa',
      address: 'Shop No.8, Rajas CHS, Manisha Nagar Gate No 1, Near swimming pool, kalwa west - 400605.',
      phone: '+91 77100 10103',
      // email: 'ajbn@ssc.mteducare.com',
    },
    {
      name: 'Mulund Veena Nagar',
      address: 'Shop No.99, C/3, L.B.S Marg, Lal Bahadur Shastri Rd, Veena Nagar, Mulund West, Mumbai - 400080.',
      phone: '+91 77100 10108',
      // email: 'ajbn@ssc.mteducare.com',
    },
    {
      name: 'Mulund East',
      address: 'Shop No.1, Maya Aprt., GV Scheme Rd 4, Hanuman Chowk, Mulund East, Mumbai - 400081.',
      phone: '+91 77100 10112',
      // email: 'ajbn@ssc.mteducare.com',
    },
    {
      name: 'Mira Road Sec.5',
      address: 'A3-003, Shree Shanti Nagar CHSL, Behind DTDC Courier, Sector 5, Mira Road East, Thane - 401107.',
      phone: '+91 77100 10079 ',
      // email: 'ajbn@ssc.mteducare.com',
    },
    {
      name: 'MiraRoad Jangid',
      address: 'Shop no.1, 3-A, Green Park, Shanti Park Layout, Khaugali, Mira Road East, Thane - 401107.',
      phone: '+91 77100 10081',
      // email: 'ajbn@ssc.mteducare.com',
    },
    {
      name: 'Satara',
      address: 'Sai Plaza Opp Mhaswadkar Shop, Near Kuber Vinayak Mandir Road,Ajinkya Colony Powai Naka, Satara - 415001.',
      phone: '7710010023 & 7710010024',
      // email: 'ajbn@ssc.mteducare.com',
    },
    {
      name: 'Bandra',
      address: 'Shop No 2, New Shopping Centre, Government Colony, Bandra East Mumbai - 51.',
      phone: '+91 8070207088 / +91 9326101696',
      // email: 'ajbn@ssc.mteducare.com',
    },
    {
      name: `EDUACE GROUP TUITIONS (NAYAK'S TUTORIALS)`,
      address: '201, 2nd floor, Ganesh Bhuwan, M.P Road, above Dandekar Furnitures shop, Opp. Chintamani Garden, Mulund East, Mumbai - 400081.',
      phone: '+91 9372864556',
      // email: 'ajbn@ssc.mteducare.com',
    },
    {
      name: `EDUACE GROUP TUITIONS (NAYAK'S TUTORIALS)`,
      address: '31, Hingwala Ln, Pant Nagar, Ghatkopar East, Mumbai - 400077.',
      phone: '+91 9372870377',
      // email: 'ajbn@ssc.mteducare.com',
    },
    {
      name: `EDUACE GROUP TUITIONS (NAYAK'S TUTORIALS)`,
      address: 'Shop No-128, First Floor, Avior Corporate Park  L.B.S.Marg, OPP Johnson & Johnson  Gate 1 - Near Deep Mandir Cinema Gate 2 - Near Samrudhi Hall (Telephone Exchange).Mulund West, Mumbai - 400080.',
      phone: '+91 9321836599',
      // email: 'ajbn@ssc.mteducare.com',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Class X Coaching Centers Near Me | Nayak's Tutorials, Thane</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Explore coaching centers in Thane by Nayak's Tutorials. Find the nearest center offering expert coaching for all boards (CBSE, ICSE, IGCSE, SSC). Admissions open." />

        <link rel="canonical" href="https://nayakstutorials.com/centers/" />

      </Helmet>
      {/* <Navbar /> */}
      <div className="wpfloat">
        <LogoContact />
        <Newnavbar />
        <div className='centerBanner'>
          <div className='outCenterHeading'>
            <h2 className='outCenterHeading2'>OUR <span style={{ color: '#D00000', marginLeft: '10px' }}> CENTERS </span></h2>
          </div>
          <div className='businessCollection'>

            {
              contactInfo.map((item, index) => {
                return (<>
                  <div className="business-card" key={index}>
                    <div className='business-cardHead'>
                      <h2 className='contatcInfoName'>{item.name}</h2>
                    </div>
                    <p className='contactPhone'><img className='mail' src={phone} />{item.phone}</p>
                    {/* <p className='contactPhone'> <img className='mail' src={mail}/>{contactInfo.email}</p> */}
                    <div className='locationAdd'>
                      <img className='mail' src={location} />
                      <p className=''>{item.address}</p>
                    </div>
                  </div>
                </>)

              })
            }


          </div>
        </div>
        <Footer />
        <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>
        {/* <div className='newenquirediv'><Newenqire /></div> */}
      </div>
    </>
  )
}

export default Centers