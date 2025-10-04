import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './skelton.css'

export default function Skelton() {
    return (
        <>
            <div className='skeltonDiv' >
                <div className='mainskel'>
                    <SkeletonTheme  baseColor="rgba(0, 0, 0, 0.1)" highlightColor="#FAF9F6" width='22rem' height='16rem'  >
                        <p>
                            <Skeleton  duration={2} count={1} style={{}} />
                        </p>
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="rgba(0, 0, 0, 0.1)" highlightColor="#FAF9F6" width='22rem' height='30px'  >
                        <p>
                            <Skeleton  duration={2} count={1} style={{}} />
                        </p>
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="rgba(0, 0, 0, 0.1)" highlightColor="#FAF9F6" width='22rem' height='80px'  >
                        <p>
                            <Skeleton duration={2} count={1} style={{}} />
                        </p>
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="rgba(0, 0, 0, 0.1)" highlightColor="#FAF9F6" width='22rem' height='30px'  >
                        <p>
                            <Skeleton duration={2} count={1} style={{}} />
                        </p>
                    </SkeletonTheme>
                </div>
                <div className='mainskel'>
                    <SkeletonTheme baseColor="rgba(0, 0, 0, 0.1)" highlightColor="#FAF9F6" width='22rem' height='16rem'  >
                        <p>
                            <Skeleton duration={2} count={1} style={{}} />
                        </p>
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="rgba(0, 0, 0, 0.1)" highlightColor="#FAF9F6" width='22rem' height='30px'  >
                        <p>
                            <Skeleton  duration={2} count={1} style={{}} />
                        </p>
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="rgba(0, 0, 0, 0.1)" highlightColor="#FAF9F6" width='22rem' height='80px'  >
                        <p>
                            <Skeleton duration={2} count={1} style={{}} />
                        </p>
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="rgba(0, 0, 0, 0.1)" highlightColor="#FAF9F6" width='22rem' height='30px'  >
                        <p>
                            <Skeleton duration={2} count={1} style={{}} />
                        </p>
                    </SkeletonTheme>
                </div>
                <div className='mainskel'>
                    <SkeletonTheme baseColor="rgba(0, 0, 0, 0.1)" highlightColor="#FAF9F6" width='22rem' height='16rem'  >
                        <p>
                            <Skeleton duration={2} count={1} style={{}} />
                        </p>
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="rgba(0, 0, 0, 0.1)" highlightColor="#FAF9F6" width='22rem' height='30px'  >
                        <p>
                            <Skeleton  duration={2} count={1} style={{}} />
                        </p>
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="rgba(0, 0, 0, 0.1)" highlightColor="#FAF9F6" width='22rem' height='80px'  >
                        <p>
                            <Skeleton duration={2} count={1} style={{}} />
                        </p>
                    </SkeletonTheme>
                    <SkeletonTheme baseColor="rgba(0, 0, 0, 0.1)" highlightColor="#FAF9F6" width='22rem' height='30px'  >
                        <p>
                            <Skeleton duration={2} count={1} style={{}} />
                        </p>
                    </SkeletonTheme>
                </div>
                
            </div>
        </>
    )
}
