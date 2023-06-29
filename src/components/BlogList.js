import React from 'react'
import { Link } from 'react-router-dom';

export default function BlogList({blogs}) {

  return (

    <section className=" " >

      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <div className="flex">
        <ul className="flex flex-col w-4/5 items-center">

          {blogs && blogs.map(post => (
              <Link to={`/blogs/${post.id}`} key={"card"+post.id} className="card">
                <div className="image" >
                  <img src={post.photo} alt='blog img' className="" />
                </div>
                <div className="content">
                  <h3 className="text-blue-950 hover:text-blue-700"> {post.title}</h3>
                  <p>{post.description}</p></div>
              </Link>
          ))}
        </ul>

        <section className="flex-1 border-l">
          Isme side bar tags wagehra
        </section>

      </div>
    </section>

  )
}
