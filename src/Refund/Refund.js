import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/footer/Footer'
import './refund.css'
import { Helmet } from "react-helmet";
import Newnavbar from '../Components/newNavbar/Newnavbar';
import LogoContact from '../Components/logoContact/logoContact';
import { FaWhatsapp } from "react-icons/fa";
import Newenqire from '../Components/Enquire Form/Newenqire';


function Refund() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Refund Policy | Nayak's Tutorials, Thane</title>
        <meta name="title" content="Refund Policy | Nayak's Tutorials, Thane" />
        <meta name="description" content="Discover our hassle-free refund process. Your satisfaction matters. Learn about our refund policy and how we prioritize a seamless customer experience." />

        <link rel="canonical" href="https://nayakstutorials.com/refund/" />


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
              "name": "Refund Policy",
              "item": "https://nayakstutorials.com/refund/"
            }]
          }`}
        </script>

      </Helmet>
      {/* <Navbar /> */}

      <div className="wpfloat">
        <LogoContact />
        <Newnavbar />

        <div className='FirstheadingDiv'>
          <h1>Refund and Cancellation</h1>
        </div>

        <div className='elevenLastDiv'>
          <h5 className='refundHeading' >

            1. In case of any technical issue found with online fee payment, such as: <br /><br />
            2. During the online payment through a credit or debit card, if the payment gets debited and the internet goes down due to some external server malfunction or any other similar happening<br /><br />
            3. The system failed to generate the required acknowledgment due to an internet malfunction.<br /><br />
            4. We shall not be responsible in any case until the course fee paid by the student or parent is credited to the Bank Account of the institute. If credited into our account, the refund policy will be applicable as per the institute norms.


          </h5>
        </div>
        <Footer />

        <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>
        {/* <div className='newenquirediv'><Newenqire /></div> */}
      </div>
    </>
  )
}

export default Refund
