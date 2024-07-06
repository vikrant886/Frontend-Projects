import React from 'react'
import { heroVideo, smallHeroVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useState, useEffect } from 'react'
const Hero = () => {
    const [vid, setVid] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
    useGSAP(() => {
        gsap.to(".hero-title", {
            delay: 1.5,
            // duration: 0.5,
            opacity: 1,
        })
        gsap.to("#cta",{
            opacity:1,
            y:-10,
            delay:1.5
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 760) setVid(smallHeroVideo)
            else setVid(heroVideo)
        })
    }, [])
    return (
        <div className='flex nav-height flex-col'>
            <div className='hero-title text-white md:mt-28 mt-20'>iPhone 15 Pro</div>
            <div className='flex justify-center'>
                <video  playsInline={true} className='pointer-events-none  md:w-10/12 w-9/12' autoPlay muted src={vid}></video>
            </div>
            <div id='cta' className='opacity-0 items-center translate-y-50 flex flex-col'>
                <a href="#highlights" className='btn'>BUY</a>
                <p className='font-normal'>From ₹134900.00*</p>
            </div>
        </div>
    )
}

export default Hero