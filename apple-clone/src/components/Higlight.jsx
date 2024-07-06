import React from 'react'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { rightImg, watchImg } from '../utils'
import VidoeCar from './VidoeCar'

const Higlight = () => {
    gsap.registerPlugin(ScrollTrigger);
    const titleref = useRef(null);
    useGSAP(() => {
        gsap.to("#title", {
            opacity: 1,
            y: 0,
            yoyo: true,
            scrollTrigger: {
                trigger: "#title",
                start: "bottom bottom",
                end: "top top"
            }
        })
        gsap.to(".link", {
            opacity: 1,
            y: 0,
            stagger: 0.5,
            scrollTrigger: {
                trigger: "#title",
                start: "bottom bottom",
                end: "top top"
            }
        })
    }, [])


    return (
        <section id='highlights' className='w-screen h-full overflow-hidden bg-zinc'>
            <div className='screen-max-width'>
                <div className=' pt-20 pl-8 pr-8 w-full md:flex items-end justify-between'>
                    <h1 ref={titleref} id='title' className='text-white section-heading'>
                        GET THE HIGLIGHTS
                    </h1>
                    <div className='flex flex-wrap gap-5 items-end'>
                        <p className='link flex text-sm gap-1'>Watch the film
                            <img src={watchImg} alt="" />
                        </p>
                        <p className='link flex gap-1'>Watch the event
                            <img src={rightImg} alt="" />
                        </p>

                    </div>
                </div>

                <VidoeCar/>
            </div>
        </section>
    )
}

export default Higlight