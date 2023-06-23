import React from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiGooglescholar } from 'react-icons/si'

export default function Home() {
    return (
        <div className="">

            <div className='m-2 p-2 flex flex-col sm:flex-row items-center justify-center '>

                <div className='' ><img src="https://picsum.photos/300/300" alt='Kushals profile' className=' rounded-full' /></div>
                <div className='m-2 p-2'>
                    <div className='h-10' >  </div>
                    <h1 className='text-6xl font-semibold sm:my-2 sm:py-2 '>Kushal Kumar Soni</h1>
                    <p className='text-lg'>Doctoral Scholar</p><p>Department of Political Science, University of Hyderabad </p>


                    <div className='flex  text-3xl p-2 my-2 mx-5 text-center justify-around duration-300'>

                        <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/sonikushal/'
                            className={` homebar-icon group transition-all duration-500`}
                        >   <FaLinkedin />
                            <p className='text-sm duration-300 sm:text-lg sm:opacity-0 group-hover:opacity-100 '> LinkedIn </p></a>

                        <a rel="noreferrer" target='_blank' href='https://twitter.com/kushals_'
                            className={` homebar-icon group transition-all`}        ><FaTwitter />
                            <p className='text-sm duration-300 sm:text-lg sm:opacity-0 group-hover:opacity-100 '> Twitter </p></a>

                        <a rel="noreferrer" href='mailto:soni.raman.1602@gmail.com'
                            className={` homebar-icon group text-center transition-all`}     >
                            <SiGooglescholar className='justify-center' />
                            <p className='text-sm duration-300 sm:text-lg  sm:opacity-0 group-hover:opacity-100 '> Google Scholar </p></a>

                    </div>

                </div>
            </div>
            <div className='flex  justify-center'>
                <p className=' m-2 p-2 sm:text-lg max-w-4xl'>I am Kushal, a doctoral scholar in the discipline of politics and international relations. The intersection of my fascination with technology and my academic background in international politics have driven me to the geopolitics of AI. Through my research I want to explore policy requirements and creation of international regimes aimed at regulation of AI, contributing to a deeper understanding of its geopolitical significance in our dynamic world. </p>
            </div>
            <div className='h-1/3 mx-20 rounded-md border'>
                blog
            </div>

        </div>
    )
}
