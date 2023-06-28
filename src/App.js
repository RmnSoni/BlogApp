import { Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import Header from "./components/Header";
import Home from "./components/Home";
import Footers from "./components/Footers";
import Contacts from "./components/Contacts";
import About from "./components/About";
import BlogItem from "./components/BlogItem";
import './App.css';

const App = () => {
const tempblog = {
  id : 1,
  title: "title of Blog",
  text: ` # Fundamentals 
  - [ ] Create React App
  - [ ] Function **Components**
  - [ ] Class Components
  - [ ] JSX
  
  ## Advanced Topic
  - [ ] Context
  - [ ] refs
  - [ ] Error Boundaries
  - [ ] Portals
  - [ ] HTTP Request
  - [ ] reconciliation
  
  ## Ecosystem
  
  faltu para 1

  Faltu Para 2

  - [ ] State Management
    - [ ] Redux/Mobx/Recoil
    - [ ] Apollo Client
    - [ ] React Query
  - [ ] Routing
    - [ ] React Location
    - [ ] react Router
  - [ ] Styling
    - [ ] Styled Components/ Emotion
    - [ ] TailwindCSS
    - [ ] Chakra UI/ Material UI/ Ant Design`,
  photo: "yaha photo ka url hoga"
}
  return (
    <div className=" ">  
      <Header /> 
      <main className='flex-grow'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogs" element={<BlogList/>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/about" element={<About/>}/>
        
        <Route path={`/${tempblog.id}`} element = {< BlogItem blog={tempblog}/>}/>
      </Routes>
      </main>
      < Footers/>
    </div>
  );
};
export default App;
