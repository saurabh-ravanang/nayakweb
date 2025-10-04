import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import './privacy.css'
import { Helmet } from "react-helmet";
import Newnavbar from '../newNavbar/Newnavbar';
import LogoContact from '../logoContact/logoContact';
import { FaWhatsapp } from "react-icons/fa";
import Newenqire from '../Enquire Form/Newenqire';


function PrivacyPolicy() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Privacy Policy | Nayak's Tutorials</title>
                <meta name="title" content="Privacy Policy | Nayak's Tutorials" />
                <meta name="description" content="Explore our privacy policy for transparent data practices. Your security matters to us. Learn how we handle your information with care and integrity." />

                <link rel="canonical" href="https://nayakstutorials.com/privaypolicy/" />


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
                            "name": "Privacy Policy",
                            "item": "https://nayakstutorials.com/privaypolicy/"
                        }]
                    }`}
                </script>

            </Helmet>
            {/* <Navbar /> */}

            <div className="wpfloat">
                <LogoContact />
                <Newnavbar />

                <div className='FirstheadingDiv'>
                    <h1>Privacy Policy</h1>
                </div>

                <div className='elevenLastDiv'>
                    <h5 className='privacyHeading'>
                        <strong style={{ fontFamily: 'PT sans' }}>Your Privacy, our commitment</strong><br /><br />

                        Please read <strong style={{ fontFamily: 'PT sans' }}>Privacy Policy</strong><br /><br />

                        <strong style={{ fontFamily: 'PT sans' }}>Reservation of Rights</strong><br /><br />
                        We reserve the right to request that you remove all links or any particular link to Website. You approve to immediately remove all links to our website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to us, you agree to be bound to and follow these linking terms and conditions.<br /><br />

                        <strong style={{ fontFamily: 'PT sans' }}>Removal of links from our website</strong><br /><br />

                        If you find any link on our website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.<br /><br />

                        We do not ensure that the information on our website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that it remains available or that the material on the website/ application is kept up to date.<br /><br />

                        <strong style={{ fontFamily: 'PT sans' }}>Disclaimer</strong><br /><br />

                        To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:<br /><br />

                        <ul style={{ marginLeft: 40 }}>
                            <li>Limit or exclude our or your liability for death or personal injury;</li>
                            <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                            <li>Limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                            <li>Exclude any of our or your liabilities that may not be excluded under applicable law.</li><br />
                        </ul>

                        The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.<br /><br />
                        As long as the website and the information and services on the Website are provided free of charge, we will not be liable for any loss or damage of any nature.<br /><br />
                        <strong style={{ fontFamily: 'PT sans' }}> Usage Rights</strong><br /><br />
                        <ul style={{ marginLeft: 40 }}>
                            <li> We may use your personal information to:</li>
                            <li>Administer this website;</li>
                            <li>Personalise the website for you;</li>
                            <li>Enable your access to and use of the website services;</li>
                            <li>Publish information about you on the website;</li>
                            <li>Send to your products that you purchase;</li>
                            <li>Supply to your services that you purchase</li>
                            <li>Send to you statements and invoices;</li>
                            <li>Collect payments from you; and</li>
                            <li>Send you marketing communications.</li><br />
                        </ul>

                        Where we disclose your personal information to its agents or sub-contractors for these purposes, the agent or sub-contractor in question will be obligated to use that personal information in accordance with the terms of this privacy statement.<br /><br />
                        In addition to the disclosures reasonably necessary for the purposes identified elsewhere above, we may disclose your personal information to the extent that it is required to do so by law, in connection with any legal proceedings or prospective legal proceedings, and in order to establish, exercise or defend its legal rights.<br /><br />
                        <strong style={{ fontFamily: 'PT sans' }}>Securing your data</strong><br /><br />

                        We will take reasonable technical and organisational precautions to prevent the loss, misuse or alteration of your personal information<br /><br />
                        We will store all the personal information you provide<br /><br />
                        Information relating to electronic transactions entered via this website will remain protected with us.<br /><br />


                    </h5>
                </div>
                <Footer />

                <a href="https://wa.me/+917710010044" target="_blank"><div className="wpicon"><FaWhatsapp id='faWp' size={50} color='white' /></div></a>
                {/* <div className='newenquirediv'><Newenqire /></div> */}
            </div>
        </>
    )
}

export default PrivacyPolicy
