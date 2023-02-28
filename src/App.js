import React from 'react';
import './App.css';
import { Header } from './components/header/header.tsx';
import { Home } from './components/home/home.tsx';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Contact } from './components/contact/contact.tsx';

function App() {
  return (
    <div>
      <Header></Header>
    <div className = "menuContainer"> 
      <Router>
      <Link className="menuItems" to="/">Főoldal</Link>
      <Link className="menuItems" to="/Contact">Kapcsolat</Link>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={ <Contact />} />
      </Routes>
      
        
      </Router>
    </div></div>
  );
}

export default App;
