import React, { useEffect, useState }  from 'react';
//import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
// import file from '../assets/README.md';
import Markdown from 'react-markdown';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'
import './BlogPage.css';
export default function BlogPage({blog}){
    const [fileContent, setFileContent] = useState('');

    useEffect(() => {
      const fetchMarkdownFile = async () => {
        try {
          // Get Firebase Storage reference
          const storageRef = firebase.storage().ref();
  
          // Get the download URL of the .md file
          const fileRef = storageRef.child('Electrical in UPSC.md');
          const downloadURL = await fileRef.getDownloadURL();
  
          // Fetch the file content using the download URL
          const response = await fetch(downloadURL);
          const markdownContent = await response.text();
  
          // Set the file content state
          setFileContent(markdownContent);
        } catch (error) {
          console.error('Error fetching Markdown file:', error);
        }
      };
  
      fetchMarkdownFile();
    }, []);

    return (
    <div className='blog-page'>
      <div className='banner'>
        <img src='https://picsum.photos/1000/500' alt='blog main'/>
        <h1 className='text-4xl my-2'>
            {blog.title}
        </h1>
      </div>
        {/* <p>{blog.createdAt}</p> */}
        <div className='blog-text'>            
            <Markdown>{fileContent}</Markdown>
        </div>
    </div>
  )
}