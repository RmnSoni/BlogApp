import React from 'react'
import { Link } from 'react-router-dom';
import './listItem.css'
import { firestore } from '../App';


function GodItem({ post }) {
  if(post==null){ return <div className='card'></div>}

  const handleDelete = async (id) => {
    try {
      const blogsRef = firestore.collection('blogs');
      const querySnapshot = await blogsRef.where('id', '==', id).get();
  
      // Delete each document matching the title
      querySnapshot.forEach((doc) => {
        doc.ref.delete();
      });
  
      console.log('Documents deleted successfully!');
    } catch (error) {
      console.error('Error deleting documents:', error);
    }
  };


  return (
    <div 
     
    className="card">
      <div className="image" >
        <img src={post.imageUrl} alt='blog img' className="" />
      </div>
      <div className="content">
        <h3 className="title"> {post.title}</h3>
        <p className='text' >{post.description}</p></div>
        <button onClick={()=>handleDelete(post.id)}>Delete</button>
        <Link to={`/god/editpage/${post.id}`}><button>Edit</button></Link>
    </div>
  )
}

export default GodItem