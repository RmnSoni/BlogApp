import './App.css';
import { Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import Header from "./components/Header";
import Home from "./components/Home";
import Footers from "./components/Footers";
import Contacts from "./components/Contacts";
import About from "./components/About";
import BlogPage from './components/BlogPage';
import { blogs } from './assets/tempblogs';


const App = () => {
  return (
    <div className="sabsemain">
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home recentblog={blogs[0]} />} />
          <Route path="/blogs/*" element={<BlogList blogs={blogs} />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          {blogs && blogs.map(post => (<Route key={post.id} path={`/blogs/${post.id}`} element={<BlogPage blog={post} />} />))}
        </Routes>
      </main>
      < Footers />
    </div>
  );
};
export default App;