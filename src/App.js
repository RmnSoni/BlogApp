import './App.css';
import { Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import Header from "./components/Header";
import Home from "./components/Home";
import Footers from "./components/Footers";
import Contacts from "./components/Contacts";
import About from "./components/About";
import BlogItem from "./components/BlogItem";

const App = () => {
  const blogs = [{
    id: 1,
    title: "title of Blog",
    description:"blog kla chota descrption",

    text: ` 
# Fundamentals 

dfja;slkjf;lk4  
dfklsahjfjhlsdkfj
- Create React App
- Function **Components**
    - nested dot
    1. first ordered dot
    2. second ordered dot
- Class Components
- JSX
    
## Advanced Topic
- [ ] Context
- [ ] refs
- [ ] Error Boundaries
- [ ] Portals
- [ ] HTTP Request
- [ ] reconciliation
    
## Ecosystem
faltu para 1  
Faltu Para 2`,
    photo: "https://picsum.photos/200"
  }]
  return (
    <div className="sabsemain">
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/*" element={<BlogList blogs={blogs} />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          {blogs && blogs.map(post => (<Route key={post.id} path={`/blogs/${post.id}`} element={<BlogItem blog={post} />} />))}
        </Routes>
      </main>
      < Footers />
    </div>
  );
};
export default App;