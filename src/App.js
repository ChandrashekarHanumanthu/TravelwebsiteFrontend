import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

// https://www.wanderlustmagazine.com/wp-content/uploads/2023/10/WAND_Indonesia-scaled.jpg
//https://c4.wallpaperflare.com/wallpaper/599/182/461/hdr-landscape-indonesia-temple-wallpaper-preview.jpg
//https://w0.peakpx.com/wallpaper/567/460/HD-wallpaper-bali-bay-beach-ultra-asia-indonesia-ocean-blue-view-travel-beach-nature-beautiful-summer-tropical-aerial-bali-places-destinations-seawater-littlefinger-kelingking.jpg
//https://theworldtravelguy.com/wp-content/uploads/2020/10/DSCF6411-3.jpg