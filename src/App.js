import React from 'react';
import './App.css';
import { Header } from './components/header/header.tsx';
import { Home } from './components/home/home.tsx';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Contact } from './components/contact/contact.tsx';
import { TestSzisz } from './components/testszisz/testszisz.tsx';
import { DartsOldal } from './components/darts/darts.tsx';

function App() {
  return (
    <div>
      <Header></Header>
    <div className = "menuContainer"> 
      <Router>
      <Link className="menuItems" to="/">Főoldal</Link>
      <Link className="menuItems" to="/Contact">Kapcsolat</Link>
      <Link className="menuItems" to="/SziszkePage">Szisz gyak</Link>
      <Link className="menuItems" to="/Darts">Darts</Link>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={ <Contact />} />
        <Route path="/SziszkePage" element={ <TestSzisz />} />
        <Route path="/Darts" element={ <DartsOldal />} />
      </Routes>
      
        
      </Router>
    </div></div>
  );
}

export default App;
