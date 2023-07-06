
import React, { useState } from 'react';
// import { firestore } from 'firebase/compat/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'
import { auth, firestore } from '../App';
import { useAuthState } from 'react-firebase-hooks/auth';
import Login from './Login';

const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/ /g, '-')     // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '') // Remove non-word characters
    .replace(/--+/g, '-');   // Replace consecutive hyphens with a single hyphen
};


function EditPage({blog}) {
const [buttondisable, setbuttondisable] = useState(false)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [markdownFile, setMarkdownFile] = useState(null);
  
  
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    if(e.target.files==null ){return;}
    const file = e.target.files[0];
    setImageFile(file);
    console.log(file);
  };

  const handleMarkdownChange = (e) => {
    if(e.target.files==null ){return;}
    const file = e.target.files[0];
    setMarkdownFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setbuttondisable(true);
    try {
      // Upload image and .md file to Firebase Storage
      const imageRef = firebase.storage().ref().child('images/' + {title} + imageFile.name);
      await imageRef.put(imageFile);
      const imageUrl = await imageRef.getDownloadURL();
      const markdownRef = firebase.storage().ref().child('markdowns/' + {title} +markdownFile.name);
      await markdownRef.put(markdownFile);
      const markdownUrl = await markdownRef.getDownloadURL();

      const id=slugify(title);
      
      await firestore.collection('blogs').add({
        title,
        description,
        id,
        imageUrl,
        markdownUrl,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      // Clear form fields after successful submission
      setTitle('');
      setDescription('');
      setImageFile(null);
      setMarkdownFile(null);
      setbuttondisable(false);
      console.log('Blog submitted successfully!');
    } catch (error) {
      setbuttondisable(false);
      console.error('Error submitting blog:', error);
    }
  };
  
  const[user] = useAuthState(auth);

  return (
    
    
    <div>
      <h1 className='route-heading'>Create New  Blog</h1>
      {user ? 
    <form onSubmit={handleSubmit} className='form-body card'>
      <div> 
        <label className='form-label' htmlFor="title">Title:
        <input required type="text" id="title" value={title} onChange={handleTitleChange} /></label>
      </div>
      <div>
        <label className='form-label' htmlFor="description">Description:
        <input required id="description" value={description} onChange={handleDescriptionChange} /></label>
      </div>
      <div>
        <label className='form-label' htmlFor="image">Image:
        <input type="file" id="image" onChange={handleImageChange} /></label>
      </div>
      <div>
        <label className='form-label' htmlFor="markdown">Markdown File:
        <input type="file" id="markdown" onChange={handleMarkdownChange} /></label>
      </div>
      <button disabled={buttondisable} type="submit">Submit</button>
    </form>: 
    <Login />}
{/* 
        < form action='' method='post' className='form-body'>
            <label class = 'form-label'>Blog Title: <input type="text" /></label>
            <label class = 'form-label'>Description: <input type="text" /></label>
            <label class = 'form-label'>Blog Text: <input type='file' /></label> 
            <label class = 'form-label'>Blog Image: <input type='file' /></label>

            
            <button>Submit</button>
        </form> */}
    </div>
  )
}

export default EditPage