import React, { useEffect } from 'react'
import './branch.css'
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'


export default function Branch() {
    const navigate = useNavigate()
 
    const MoveToCenter=()=>{
        navigate('/centers')
    }

    return (
        <>
            <div className='searchBranch'>
                <h1>Find your closest Nayak’s Tutorials</h1>
                <div  class="input-group mySearch">
                    {/* <input type="text" class="form-control mySearch2" placeholder="Enter your area" aria-label="Recipien" aria-describedby="basic-addon2"  />
                    <span class="input-group-text Bisearch" id="basic-addon2"><BiSearch /></span> */}
                    <a href='/centers'>
                    <button  className='fincCenter'>Find Centers</button></a>
                </div>
            </div>
        </>

    )
}
