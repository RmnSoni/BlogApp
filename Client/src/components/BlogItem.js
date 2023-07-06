import React from 'react'
import { Link } from 'react-router-dom';
import './listItem.css'
import { FaCalendar } from 'react-icons/fa';

function BlogItem({ post }) {
  if(post==null){ return <div className='card'></div>}
  return (
    <Link 
    to={`/blogs/${post.id}`} 
    className="card">
      <div className="image" >
        <img src={post.imageUrl} alt='blog img' className="" />
      </div>
      <div className="content">
        <h3 className="title"> {post.title}</h3>
        <p className='text color-grey'><FaCalendar/> {new Date(post.createdAt.toDate()).toLocaleDateString()}</p>
        <p className='text' >{post.description}</p></div>
    </Link>
  )
}

export default BlogItem