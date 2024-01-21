import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <Router>
      <div className="app-container light">
        <Navbar title="Home" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home showAlert={showAlert} heading="Write The Text Here" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
