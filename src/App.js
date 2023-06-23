import { Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import Header from "./components/Header";
import Home from "./components/Home";
import Footers from "./components/Footers";
import Contacts from "./components/Contacts";
import About from "./components/About";





const App = () => {

  return (
    <div className="flex flex-col min-h-screen bg-stone-100 ">  
      <Header /> 
      <main className='flex-grow'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogs" element={<BlogList/>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </main>
      < Footers/>
    </div>
  );
};

export default App;
