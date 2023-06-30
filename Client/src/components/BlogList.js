import React from 'react'
import { Link } from 'react-router-dom';
import BlogItem from './BlogItem';

export default function BlogList({ blogs }) {

  return (

    <section className=" " >

      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <div className="flex">
        <ul className='bloglisting'>

          {blogs && blogs.map(post => (
            <li key={post.id}><BlogItem post={post} /> </li>
          ))}
        </ul>

        <section className="flex-1 border-l">
          Isme side bar tags wagehra
        </section>

      </div>
    </section>

  )
}
