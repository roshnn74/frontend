import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Social from './components/Social';

import Home from './pages/Home';
import Achievements from './pages/Achievements';
import AboutUs from './pages/AboutUs';
import Community from './pages/Community';
import Events from './pages/Events';
import Alumni from './pages/Alumni';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <div className="App">
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/community" element={<Community />} />
            <Route path="/events" element={<Events />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        <Social />
        <Footer />
    </div>
  )
}

export default App