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
import PrevEvents from './pages/PrevEvents';
import FormsAndGuidelines from './pages/FormsAndGuidelines';

const App = () => {
  return (
    <div className="App">
        <NavBar />
        <Routes>
            <Route path="/cii/" element={<Home />} />
            <Route path="/cii/achievements" element={<Achievements />} />
            <Route path="/cii/achievements/:id" element={<PrevEvents />} />
            <Route path="/cii/aboutUs" element={<AboutUs />} />
            <Route path="/cii/community" element={<Community />} />
            <Route path="/cii/events" element={<Events />} />
            <Route path="/cii/alumni" element={<Alumni />} />
            <Route path="/cii/contactUs" element={<ContactUs />} />
            <Route path="/cii/formsAndGuidelines" element={<FormsAndGuidelines/>}/>
        </Routes>
        <Social />
        <Footer />
    </div>
  )
}

export default App