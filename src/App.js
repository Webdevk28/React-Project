import logo from './logo.svg';
import {Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Navbar from './component/NavbarComponent';
import About from './component/AboutComponent';
import Service from './component/ServiceComponent';
import Project from './component/ProjectComponent';
import Blog from './component/BlogComponent';
import Contact from './component/ContactComponent';
import Login from './component/LoginComponent';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/Project' element={<Project />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
