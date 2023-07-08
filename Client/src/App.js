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

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
//import {blogs} from './assets/tempblogs';

import { useCollectionData } from "react-firebase-hooks/firestore";
import Godpage from "./components/Godpage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL:process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore(app);
export const auth = firebase.auth(app);

const App = () => {
  const blogsRef = firestore.collection("blogs");
  const query = blogsRef.orderBy("createdAt", "desc");
  const [blogs] = useCollectionData(query, { idField: "id" });
  //console.log(blogs);
  return (
    <div className="sabsemain">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/*" element={<BlogList blogs={blogs} />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<About />} />\
          <Route path="/god" element={<Godpage blogs={blogs} />} />
          <Route path="/god/editpage" element={<EditPage />} />
          {blogs &&
            blogs.map((post, i) => (
              <Route
                key={i}
                path={`/blogs/${post.id}`}
                element={<BlogPage blog={post} />}
              />
            ))}
          {blogs &&
            blogs.map((post, i) => (
              <Route
                key={i}
                path={`/god/editpage/${post.id}`}
                element={<EditPage blog={post} />}
              />
            ))}
        </Routes>
      </main>
      <Footers />
    </div>
  );
};
export default App;
