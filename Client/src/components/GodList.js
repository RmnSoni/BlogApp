import React from 'react'
import GodItem from './GodItem';

export default function GodList( {blogs}) {

  return (

    <section className=" " >

      <h1 className="">Blog Posts</h1>
      <div className="list-section">
        <ul className='bloglisting'>
          {blogs && blogs.map((post,i) => (
            <li key={i}><GodItem post={post} /> </li>
          ))}
        </ul>

        {/* <section className="sidebar">
          Isme side bar tags wagehra
        </section> */}

      </div>
    </section>

  )
}
