import "./App.css";
import { Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import Header from "./components/Header";
import Home from "./components/Home";
import Footers from "./components/Footers";
import Contacts from "./components/Contacts";
import About from "./components/About";
import BlogPage from "./components/BlogPage";
// import { useEffect, useState } from "react";
import EditPage from "./components/EditPage";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import {blogs} from './assets/tempblogs';

import { useCollectionData } from 'react-firebase-hooks/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDF17c6u1qUU54B_Exh0M-4pFJM1Qdhpag",
  authDomain: "blog-app-5eedd.firebaseapp.com",
  databaseURL: "https://blog-app-5eedd-default-rtdb.firebaseio.com",
  projectId: "blog-app-5eedd",
  storageBucket: "blog-app-5eedd.appspot.com",
  messagingSenderId: "258201273739",
  appId: "1:258201273739:web:25639247412feb89d3db8e"
};
const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore(app);

const App = () => {

  const blogsRef = firestore.collection("blogs");
  const query = blogsRef.orderBy('createdAt','desc');
  const [blogs] = useCollectionData(query, { idField: 'id' });
  //console.log(blogs);
  return (
    <div className="sabsemain">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blogs/*" element={<BlogList blogs={blogs} />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path='/god/editpage' element={<EditPage />} />
          {blogs &&
            blogs.map((post,i) => (
              <Route
                key={i}
                path={`/blogs/${post.id}`}
                element={<BlogPage blog={post} />}
              />
            ))}
        </Routes>
      </main>
      <Footers />
    </div>
  );
};
export default App;