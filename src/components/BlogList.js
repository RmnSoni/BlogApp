import React from 'react'
import { Route, Routes } from 'react-router-dom';

export default function BlogList() {
    const blogPosts = [
        { id: 1, title: 'Blog Post 1', content: 'This is the content of Blog Post 1' },
        { id: 2, title: 'Blog Post 2', content: 'This is the content of Blog Post 2' },
        { id: 3, title: 'Blog Post 3', content: 'This is the content of Blog Post 3' },
      ];
  return (
    <main className=" " >
        <Routes>
            <Route />
        </Routes>

    <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
    <div className="flex">
    <ul className="flex flex-col w-4/5 items-center">
      {blogPosts.map((post) => (
        <li key={post.id} className="m-4 h-60 w-2/3 border grid grid-cols-2 ">
          <div className="" >
           <img src = "https://picsum.photos/200" alt='blog img' className="" />
           </div>
          <div className=""> 
           <h3 className="text-blue-950 hover:text-blue-700"> {post.title}</h3>
           
           <p> {post.content}</p></div>
          
        </li>
      ))}
    </ul>
    <sidebar className = "flex-1 border-l">
      Isme side bar tags wagehra
    </sidebar>
    </div>
    </main>
  )
}
