
import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export default function BlogItem({blog}){

 
    return (
    <div className=' p-4 justify-center'>
        <h1 className='text-4xl my-2'>
            {blog.title}
        </h1>
        <ReactMarkdown>
        {blog.text}
        </ReactMarkdown>
        <div className='my-1'>
            
        </div>
    </div>
  )
}