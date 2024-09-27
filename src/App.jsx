// GivvyWebsite/src/App.jsx
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/Page3/Page3";
import NavBar from './components/NavBar/NavBar';

function App() {
  const scrollRef = useRef(null);
  const [activeSection, setActiveSection] = useState('section1');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionId = section.getAttribute('id');
      if (sectionTop >= 0 && sectionTop < window.innerHeight / 2) {
        setActiveSection(sectionId);
      }
    });
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar />
      <div ref={scrollRef} className="container" style={{ paddingTop: '70px' }}>
        <nav className="dots-navigation">
          <div className="button-container">
            <a href="#section1" className={`button ${activeSection === 'section1' ? 'active' : ''}`}></a>
            <div className="outer-ring"></div>
          </div>
          <div className="button-container">
            <a href="#section2" className={`button ${activeSection === 'section2' ? 'active' : ''}`}></a>
            <div className="outer-ring"></div>
          </div>
          <div className="button-container">
            <a href="#section3" className={`button ${activeSection === 'section3' ? 'active' : ''}`}></a>
            <div className="outer-ring"></div>
          </div>
        </nav>

        <section id="section1">
          <Page1 />
        </section>
        <section id="section2">
          <Page2 />
        </section>
        <section id="section3">
          <Page3 />
        </section>
      </div>
    </>
  );
}

export default App;