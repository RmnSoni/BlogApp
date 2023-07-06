import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa'
import BlogItem from './BlogItem';
import './Home.css'
// import { useCollectionData } from'react-firebase-hooks/firestore';
import { firestore } from '../App';
export default function Home() {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchLatestBlog = async () => {
          const blogsRef = firestore.collection('blogs');
          const query = blogsRef.orderBy('createdAt', 'desc').limit(1);
          
          try {
            const querySnapshot = await query.get();
            const latestBlog = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setBlogs(latestBlog);
          } catch (error) {
            console.error('Error fetching latest blog:', error);
          }
        };
    
        fetchLatestBlog();
      }, []);
    
      const recentBlog = blogs[0];
      console.log(recentBlog);


    return (
        <div className="">
            <section className='title-Board'>
                <div className='image' >
                    <img src="https://picsum.photos/300/300" alt='Kushals profile' className=' rounded-full' />
                </div>
                <div className='title-text'>
                    <h1 className='naam '>Kushal Kumar Soni</h1>
                    <div className='doctorate'>Doctoral Scholar</div>
                    <div className='uni'>Department of Political Science, University of Hyderabad </div>
                    <div className='button-box'>

                        <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/sonikushal/'
                            className='button-socials'>   <FaLinkedin />
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
                        I am a doctoral scholar in the discipline of politics and international studies. The intersection of my fascination with technology and my academic background in international politics have driven me to take an interest in the geopolitics of artificial intelligence. Through my research, I want to explore policy requirements and creation of international regimes aimed at regulation of AI, contributing to a deeper understanding of its geopolitical significance in our dynamic world.
                    </article>
                </section>
                <hr />


                <section>
                    <h2 className='section-title'> Latest Writing </h2>

                    <BlogItem post={recentBlog} />
                
                
                </section>
            </div>

        </div>
    )
}