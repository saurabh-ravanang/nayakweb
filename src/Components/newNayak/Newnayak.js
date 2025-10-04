import React from 'react'
import './newnayak.css'
import mainNayak from "../../Assets/Home/WHY-NT.png"

export default function Newnayak() {
  return (
    <>
      <div className='higherTopperwhy'>
        <div className='newsmallHeadingwhy'><h1>WHY NAYAK TUTORIALS</h1></div>
        <div className='mainTopperDivwhy'>
          <div className='BigHeadingwhy'><h1>WHY NAYAK TUTORIALS</h1></div>
          <div className='smallHeadingwhy'><h1>WHY NAYAK TUTORIALS</h1></div>
        </div>
      </div>

      {/* <div><h1>WHY NAYAK TUTORIALS</h1></div> */}
      <div className='NewNayakDiv'>
        <img src={mainNayak} />
      </div>
    </>
  )
}
