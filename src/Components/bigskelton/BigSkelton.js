import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './bigskelton.css'

export default function BigSkelton() {
  return (
    <>
    <div className='bigskeltonDiv' >
        <div className='bigmainskel'>
            <SkeletonTheme baseColor="rgba(0, 0, 0, 0.1)" highlightColor="#FAF9F6" width='62rem' height='3rem'  >
                <p>
                    <Skeleton duration={2} count={1} style={{}} />
                </p>
            </SkeletonTheme>
            <SkeletonTheme baseColor="rgba(0, 0, 0, 0.1)" highlightColor="#FAF9F6" width='62rem' height='20rem'  >
                <p>
                    <Skeleton  duration={2} count={1} style={{}} />
                </p>
            </SkeletonTheme>
            <SkeletonTheme baseColor="rgba(0, 0, 0, 0.1)" highlightColor="#FAF9F6" width='62rem' height='80px'  >
                <p>
                    <Skeleton duration={2} count={1} style={{}} />
                </p>
            </SkeletonTheme>
            
        </div>
        
        
        
    </div>
</>
  )
}
