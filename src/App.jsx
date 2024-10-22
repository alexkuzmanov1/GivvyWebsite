import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/Page3/Page3";
import Page4 from "./pages/Page4/Page4";
import Page5 from "./pages/Page5/Page5";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollTop/ScrollTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/advertise" element={<Page2 />} />
        <Route path="/monetize" element={<Page3 />} />
        <Route path="/faq" element={<Page4 />} />
        <Route path="/about" element={<Page5 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;