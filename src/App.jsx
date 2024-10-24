import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home/Home";
import Advertise from "./pages/Advertise/Advertise";
import Publisher from "./pages/Publisher/Publisher";
import Advertiser from "./pages/Advertiser/Advertiser";
import Monetize from './pages/Monetize/Monetize';
import About from "./pages/About/About";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollTop/ScrollTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/monetize" element={<Monetize />} />
        <Route path='/publisher' element={<Publisher />} />
        <Route path='/advertiser' element={<Advertiser />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;