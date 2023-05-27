import React from 'react';
import './App.css';
import Footer from './Commoncomp/Footer';
import Header from './Commoncomp/Header';
import Nav from './Commoncomp/Nav';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Footer/>
    </div>
  );
}

export default App;
