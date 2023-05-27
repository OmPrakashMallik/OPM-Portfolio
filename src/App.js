import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Commoncomp/Footer';
import Header from './Commoncomp/Header';
import Nav from './Commoncomp/Nav';
import Home from './Home/Home';
import Project from './Project/Project';
import About from './About/About';
import Resume from './Resume/Resume';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cv" element={<Resume/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App
