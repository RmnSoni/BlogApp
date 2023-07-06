import React from 'react'
import { Link } from 'react-router-dom';


function BlogItem({ post }) {
  if(post==null) return <div className='card'></div>
  return (
    <Link 
    to={`/blogs/${post.id}`} 
    className="card">
      <div className="image" >
        <img src={post.photo} alt='blog img' className="" />
      </div>
      <div className="content">
        <h3 className="title"> {post.title}</h3>
        <p className='text' >{post.description}</p></div>
    </Link>
  )
}

export default BlogItem