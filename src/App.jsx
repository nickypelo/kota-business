import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Content from "./pages/Content.jsx";
import Menu from "./pages/Menu.jsx";
import About from "./pages/About.jsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path ='/' element={<Content/>}/>
          <Route path ='/menu' element={<Menu/>}/>
          <Route path ='/contact' element={<Contact/>}/>
          <Route path ='/about' element={<About/>}/>
        </Routes>
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;
