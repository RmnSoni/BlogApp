import React from 'react'
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa'
//import { SiGooglescholar } from 'react-icons/si' google scholar icon
const post = { id: 1, title: 'Blog Post 1', content: 'This is the consdafjasdfasjkhdfgkasjhfgkadsjhfgkasghfkhj asdgkfjhasgfdktent of Blog Post 1' };
export default function Home() {

    return (
        <div className="">

            <div className='title-Board m-2 p-2 flex flex-col sm:flex-row items-center justify-center '>

                <div className='image' ><img src="https://picsum.photos/300/300" alt='Kushals profile' className=' rounded-full' /></div>
                <div className='title-text m-2 p-2'>
                    <div className='h-10 naam' >  </div>
                    <h1 className='naam text-6xl font-bold sm:py-2 '>Kushal Kumar Soni</h1>
                    <p className='text-lg font-semibold'>Doctoral Scholar</p>
                    <p className='font-semibold text-stone-800'>Department of Political Science, University of Hyderabad </p>


                    <div className='button-box flex  text-3xl p-2 my-2 mx-5 text-center justify-around duration-300'>

                        <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/sonikushal/'
                            className={` homebar-icon group transition-all duration-500`}
                        >   <FaLinkedin />
                            <p className='text-sm duration-300 sm:text-lg sm:opacity-0 group-hover:opacity-100 '> LinkedIn </p></a>

                        <a rel="noreferrer" target='_blank' href='https://twitter.com/kushals_'
                            className={`transition-all duration-300 m-2 flex  flex-col items-center homebar-icon group transition-all`}><FaTwitter />
                            <p className='text-sm duration-300 sm:text-lg sm:opacity-0 group-hover:opacity-100 '> Twitter </p></a>

                        <a rel="noreferrer" href='mailto:21spph23@uohyd.ac.in'
                            className={'button-socials' }     >
                            <FaEnvelope className='justify-center' />
                            <p className='button-text text-sm duration-300 sm:text-lg  sm:opacity-0 group-hover:opacity-100 '> Email </p></a>

                    </div>

                </div>
            </div>



            <div className='flex  flex-col items-center px-4'>

                <p className=' m-2 p-2  max-w-4xl'>
                    I am a doctoral scholar in the discipline of politics and international studies. The intersection of my fascination with technology and my academic background in international politics have driven me to take an interest in the geopolitics of artificial intelligence. Through my research, I want to explore policy requirements and creation of international regimes aimed at regulation of AI, contributing to a deeper understanding of its geopolitical significance in our dynamic world.
                </p>

                <hr/>

                <h2 className='text-3xl font-semibold mt-10'> Latest Writing </h2>


                <div className='card'>

                    <div className=" image" >
                        <img src="https://picsum.photos/200" alt='blog img' width='200px' className="" />
                    </div>
                    <div className=" content">
                        <h3 className="title    "> {post.title}</h3>
                        <p className='text'> {post.content}</p>
                    </div>


                </div>
            </div>

        </div>
    )
}
