'use client'
import React from 'react'
import Image from 'next/image'
import hero from '@/../public/image.png'
import Header from '../landing/Header'
const Landing = () => {
    return (
        <div className='h-screen w-full relative'>
            <section id='home'>
                <Image
                src={hero}
                fill={true}
                alt='Hero Image'
                className='object-cover -z-10'
                >
                </Image>
                <Header/>
                <div className="inline-flex flex-col items-start justify-center gap-[0.5rem] p-[0.75rem] ml-[11.8] mt-[12.1] mr-[20.8]">
                    <div className="flex flex-col px-[1.75rem] py-[1.25rem] justify-center items-start gap-3 ">
                        <p className="heading flex p-5 items-center gap-4 w-[50rem]">Embark on Your Next Adventure with Journeo!</p>
                        <p className="sub-heading flex items-center gap-3 px-5 py-3 w-[37.5rem]">Join a Global Community of Adventurers, where Every Journey is a Story Waiting to be Told. Whether it's a Cross-Country Expedition or a Hidden Gem in Your Own Backyard, Journeo is Your Passport to Endless Exploration!</p>
                        <div className='flex items-start p-8 gap-6'>
                            <a href='/login' className='primary-btn btn-text'>LOGIN</a>
                            <a href='/signup' className='secondary-btn btn-text'>SIGNUP</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
)
}

export default Landing