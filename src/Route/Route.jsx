import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from '../Components/Home/Home';
import About from '../Components/About/About';
import Testimonial from '../Components/Testimonial/Testimonial';
import Faq from '../Components/FAQ/Faq';
import Enginnering from '../Components/Enginnering/Enginnering';
import Medical from '../Components/medical/Medical';
import CbseEight from '../Components/cbse8th/CbseEight';
import IcseEight from '../Components/icse8th/IcseEight';
import CbseNine from '../Components/cbse9th/CbseNine';
import Centers from '../Components/centers/Centers';
import CbseTen from '../Components/cbse10th/CbseTen';
import NineIcse from '../Components/nineIcse/NineIcse';
import TenIcse from '../Components/tenIcse/TenIcse';
import ComingSoon from '../Components/ComingSoon/ComingSoon';
import Contact from '../Components/Contactus/Contact';
import SscEight from '../Components/ssc8th/SscEight';
import SscNine from '../Components/ssc9th/SscNine';
import SscTen from '../Components/ssc10th/SscTen';
import Tybcom from '../Components/bcom/Tybcom';
import Performannce from '../Components/performance booster/Performannce';
import Preschool from '../Components/preschool/Preschool';
import Igcseeight from '../Components/igcse8th/Igcseeight';
import Igcsenine from '../Components/igcse9th/Igcsenine';
import IgcseTen from '../Components/igcse10th/IgcseTen';
import Career from '../Components/Career/Career';
import MainFaq from '../Components/mainFaq/MainFaq';
import PrivacyPolicy from '../Components/PrivacyPlicy/PrivacyPolicy';
import TermsAndConditons from '../TermsAndConditions/TermsAndConditons';
import Refund from '../Refund/Refund';
import Sscmain from '../Components/SscMain/Sscmain';
import Cbsemain from '../Components/Cbsemain/Cbsemain';
import Icsemain from '../Components/icsemain/Icsemain';
import Igcsemain from '../Components/igcseMain/Igcsemain';
import Blogs from '../Components/blogs/Blogs';
import Mainblog from '../Components/mainblog/Mainblog';
import Papers from '../Components/papers/Papers';
import Olympiads from '../Components/olympiads/Olympiads';
import Notes from '../Components/notes/Notes';
import Enginnerone from '../Components/subenginnering/Enginnerone';
import Enginnertwo from '../Components/subenginnering/Enginnertwo';
import Enginnerthree from '../Components/subenginnering/Enginnerthree';
import Premedicalone from '../Components/subenginnering/Premedicalone';
import Premedicaltwo from '../Components/subenginnering/Premedicaltwo';
import Premedicalthree from '../Components/subenginnering/Premedicalthree';
import Landing from '../Components/landingpage/Landing';
import Thankyou from '../Components/thankyou/Thankyou';
import Anant from '../Components/anant_landing/Anant';





const Pageroute = () => {
  // let location = document.URL.split("/blog")[1]
  // console.log(location, 'location is')
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*">
            <Route path='*' element={<Navigate to='/' />} />
          </Route>

          <Route path='/'>
            <Route index element={<Home />} />
          </Route>
          <Route path='/about'>
            <Route index element={<About />} />
          </Route>

          <Route path='/testimonial'>
            <Route index element={<Testimonial />} />
          </Route>
          <Route path='/elevenandTwelth'>
            <Route index element={<Faq />} />
          </Route>
          <Route path='/cbse-classes'>
            <Route index element={<CbseEight />} />
          </Route>

          <Route path='/icse-classes'>
            <Route index element={<IcseEight />} />
          </Route>

          <Route path='/ca'>
            <Route index element={<Medical />} />
          </Route>

          <Route path='/engineering'>
            <Route index element={<Enginnering />} />
          </Route>
          <Route path='/centers'>
            <Route index element={<Centers />} />
          </Route>
          <Route path='/comingSoon'>
            <Route index element={<ComingSoon />} />
          </Route>
          <Route path='/contact'>
            <Route index element={<Contact />} />
          </Route>
          <Route path='/tybcom'>
            <Route index element={<Tybcom />} />
          </Route>
          <Route path='/class-10-score-booster-course'>
            <Route index element={<Performannce />} />
          </Route>
          <Route path='/preschool'>
            <Route index element={<Preschool />} />
          </Route>

          
          <Route path='/igcse-classes'>
            <Route index element={<Igcseeight />} />
          </Route>

          <Route path='/classes-for-mh-ssc-board'>
            <Route index element={<SscEight />} />
          </Route>

          <Route path='/career'>
            <Route index element={<Career />} />
          </Route>


          <Route path='/mainfaq'>
            <Route index element={<MainFaq />} />
          </Route>
          <Route path='/privaypolicy'>
            <Route index element={<PrivacyPolicy />} />
          </Route>
          <Route path='/termsConditions'>
            <Route index element={<TermsAndConditons />} />
          </Route>
          <Route path='/refund'>
            <Route index element={<Refund />} />
          </Route>
          <Route path='/blog'>
            <Route index element={<Blogs />} />
          </Route>
          <Route path='/blog/:id'>
            <Route index element={<Mainblog />} />
          </Route>

          <Route path='/paper'>
            <Route index element={<Papers />} />
          </Route>


          <Route path='/olympiads'>
            <Route index element={<Olympiads />} />
          </Route>
          <Route path='/notes/matter-in-our-surroundings-class-9-science'>
            <Route index element={<Notes />} />
          </Route>
          <Route path='/ace-40-batch-for-iit-jee-integrated'>
            <Route index element={<Enginnerone />} />
          </Route>
          <Route path='/g-10-plus-batch-for-iit-jee-integrated'>
            <Route index element={<Enginnertwo />} />
          </Route>
          <Route path='/ace-40-batch-for-mht-cet-engineer'>
            <Route index element={<Enginnerthree />} />
          </Route>
          <Route path='/ace-40-batch-for-neet-ug-integrated'>
            <Route index element={<Premedicalone />} />
          </Route>
          <Route path='/g-10-plus-batch-for-neet-ug-integrated'>
            <Route index element={<Premedicaltwo />} />
          </Route>
          <Route path='/ace-40-batch-for-mht-cet-medical'>
            <Route index element={<Premedicalthree />} />
          </Route>
          
          <Route path='/8th-9th-10th-cbse-icse-ssc-coaching-classes'>
            <Route index element={<Landing />} />
          </Route>
          <Route path='/thankyou'>
            <Route index element={<Thankyou />} />
          </Route>
          <Route path='/Anant'>
            <Route index element={<Anant />} />
          </Route>


        </Routes>

      </BrowserRouter>
    </>
  )
}

export default Pageroute