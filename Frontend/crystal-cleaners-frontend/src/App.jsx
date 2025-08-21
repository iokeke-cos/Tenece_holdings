import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import FAQ from "./components/pages/FAQ";
import Pricing from "./https://github.com/iokeke-cos/Tenece_holdings/tree/main/src/components/pages/Pricing.jsx";
import Footer from './components/Footer.jsx'; // Footer component imported from main branch


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* Note: I removed the duplicate '/contact' route to avoid redundancy. */}
      </Routes>
      <Footer /> {/* Footer is now displayed after the routes */}
    </div>
  );
}

export default App;
