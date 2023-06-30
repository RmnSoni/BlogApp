import React, { useEffect, useState }  from 'react';
//import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import file from '../assets/README.md';
import Markdown from 'react-markdown';

export default function BlogPage({blog}){
    const [markdowntext, setMarkdowntext] = useState("");
    
    useEffect(()=>{
        const fetchMarkdownFile = async ()=>{
            const response= await fetch(file);
            const text = await response.text();
            setMarkdowntext(text);
        };
        fetchMarkdownFile();
    },[]);
    
    return (
    <div className=' p-4 justify-center'>
        <h1 className='text-4xl my-2'>
            {blog.title}
        </h1>
        <div className=''>            
            <Markdown>{markdowntext}</Markdown>
        </div>
    </div>
  )
}