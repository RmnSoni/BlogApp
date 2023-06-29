import React from 'react'
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa'
//import { SiGooglescholar } from 'react-icons/si' google scholar icon
const post = { id: 1, title: 'Title of Blog Post 1', content: 'This is the consdafjasdfasjkhdfgkasj hfgkadsjhfgkasghfkhj asdgkfjhasgfdktent of Blog Post 1' };
export default function Home() {

    return (
        <div className="">
            <section className='title-Board'>
                <div className='image' >
                    <img src="https://picsum.photos/300/300" alt='Kushals profile' className=' rounded-full' />
                </div>
                <div className='title-text'>
                    <h1 className='naam '>Kushal Kumar Soni</h1>
                    <div className='text-lg font-semibold'>Doctoral Scholar</div>
                    <div className='font-semibold text-stone-800'>Department of Political Science, University of Hyderabad </div>


                    <div className='button-box flex'>

                        <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/sonikushal/'
                            className='button-socials'
                        >   <FaLinkedin />
                            <p className='button-text'> LinkedIn </p></a>

                        <a rel="noreferrer" target='_blank' href='https://twitter.com/kushals_' className='button-socials'>
                            <FaTwitter /><p className='button-text'> Twitter </p>
                        </a>

                        <a rel="noreferrer" href='mailto:21spph23@uohyd.ac.in' className='button-socials'      >
                            <FaEnvelope className='justify-center' />
                            <p className='button-text'> Email </p>
                        </a>
                    </div>
                </div>
            </section>


            <div className='main-content'>
                <section>
                    <article className='bada-text'>
                        I am a doctoral scholar in the discipline of politics and international studies. The intersection of my fascination with technology and my academic background in international politics have driven me to take an interest in the geopolitics of artificial intelligence. Through my research, I want to explore policy requirements and creation of international regimes aimed at regulation of AI, contributing to a deeper understanding of its geopolitic al significance in our dynamic world.
                    </article>
                </section>
                <hr />
                <section>
                    <h2 className='section-title'> Latest Writing </h2>
                    <div className='card'>
                        <div className=" image" >
                            <img src="https://picsum.photos/200" alt='blog img' width='200px' className="" />
                        </div>
                        <div className=" content">
                            <h3 className="title    "> {post.title}</h3>
                            <p className='text'> {post.content}</p>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}