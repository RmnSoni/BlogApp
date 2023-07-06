import React from 'react'
import BlogItem from './BlogItem';

export default function BlogList({ blogs }) {

  return (

    <section className=" " >

      <h1 className="">Blog Posts</h1>
      <div className="list-section">
        <ul className='bloglisting'>
          {blogs && blogs.map((post,i) => (
            <li key={i}><BlogItem post={post} /> </li>
          ))}
        </ul>

        <section className="sidebar">
          Isme side bar tags wagehra
        </section>

      </div>
    </section>

  )
}
