import React, { useEffect, useState }  from 'react';
//import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
// import file from '../assets/README.md';
import Markdown from 'react-markdown';
import 'firebase/compat/storage'
import './BlogPage.css';
import { FaCalendar } from 'react-icons/fa';
export default function BlogPage({blog}){
    const [fileContent, setFileContent] = useState('');

    useEffect(() => {
      const fetchMarkdownFile = async () => {
        try {
          const response = await fetch(`${blog.markdownUrl}`);
          const markdownContent = await response.text();
          setFileContent(markdownContent);
        } catch (error) {
          console.error('Error fetching Markdown file:', error);
        }
      };
      fetchMarkdownFile();
    }, [blog]);
    
    return (
    <div className='blog-page'>
      <div className='banner'>
        <img src={blog.imageUrl} alt='blog main'/>
        <h1 className='main-heading'>
            {blog.title}
        </h1>
      </div>
        <p className='date-line'>
          <FaCalendar/> {new Date(blog.createdAt.toDate()).toLocaleDateString()}
        </p>
        <div className='blog-text'>            
            <Markdown>{fileContent}</Markdown>
        </div>
    </div>
  )
}