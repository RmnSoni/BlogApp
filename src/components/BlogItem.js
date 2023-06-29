
import { marked } from 'marked'
import React, { useEffect, useState }  from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import file from '../assets/README.md'
import Markdown from 'react-markdown';

export default function BlogItem({blog}){
    const [markdowntext, setMarkdowntext] = useState("");
    // useEffect(() => {
    //   const fetchMarkdownFile = async () => {
    //     try {
    //       const fileRef = storageRef.child('file1.md');
    //       console.log(fileRef);
    //       const fileSnapshot = await fileRef.getDownloadURL();
    //       console.log(fileSnapshot);
    //       const response = await fetch(fileSnapshot);
    //       const markdown = await response.text();
    //       setMarkdownContent(markdown);
    //     } catch (error) {
    //       console.error('Error loading Markdown file:', error);
    //     }
    //   };
    //   fetchMarkdownFile();
    // }, []);
    
    const md = marked(blog.text);
    console.log(file)
    useEffect(()=>{
        const fetchMarkdownFile = async ()=>{
            // const response= await fetch('../assets/README.md');
            const response= await fetch(file);
            //const response= await fetch("https://firebasestorage.googleapis.com/v0/b/blog-app-5eedd.appspot.com/o/Electrical%20in%20UPSC.md?alt=media&token=aa1db388-2e45-4708-9dd8-6884cd79cd83");
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
        {/* <div dangerouslySetInnerHTML={{__html :md}}/> */}
        <div className=''>            
            <ReactMarkdown>{markdowntext}</ReactMarkdown>
        </div>
    </div>
  )
}