// GivvyWebsite/src/App.jsx
import './App.css';
import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/Page3/Page3";
import React, { useEffect, useRef } from "react";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const dots = document.querySelectorAll('.button');
      let currentIndex = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          currentIndex = index;
        }
      });

      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };

    const container = scrollRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={scrollRef} className="container">
      <nav className="dots-navigation">
        <div className="button-container">
          <a href='#section1' className="button"></a>
          <div className="outer-ring"></div>
        </div>
        <div className="button-container">
          <a href='#section2' className="button"></a>
          <div className="outer-ring"></div>
        </div>
        <div className="button-container">
          <a href='#section3' className="button"></a>
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
  );
}

export default App;