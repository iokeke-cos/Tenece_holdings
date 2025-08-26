import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ServicesSection from "./components/ServicesSection";
import Contact from "./components/pages/Contact";
import FAQ from "./components/pages/FAQ";
import Pricing from "./components/pages/Pricing";
import Footer from './components/Footer.jsx'; // Footer component imported from main branch


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer /> {/* Footer is now displayed after the routes */}
    </div>
  );
}

export default App;
