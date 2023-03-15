import React from 'react'
import './App.css';
import Navbar from './main/Navbar';
import MidData from './main/MidData';
import Footer from './main/Footer';
import About from './main/About';
import Skills from './main/Skills';
import Form from './main/Form';
import Projects from './main/Projects';

function App() {
  return (
    <>
      <Navbar name="Manish Singh"/>
      <MidData/>
      <About/>
      <Skills/>
      <Projects/>
      <Form/>
      <Footer/>
      
    </>
  );
}

export default App;
